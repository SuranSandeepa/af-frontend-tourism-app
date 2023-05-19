import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { API_ENDPOINT } from "../../config";
import axios from "axios";
import { accomadationEditorSchema } from "@schema/accomodation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQuery, useQueryClient } from "react-query";
import "@testing-library/jest-dom/extend-expect";

function AccomodationEditor({ onClickClose, selectedId, editMode }) {
  const qc = useQueryClient();
  const { isLoading, error, data } = useQuery(
    ["rooms", selectedId],
    () => axios.get(`${API_ENDPOINT}/api/rooms/${selectedId}`),
    { skip: !editMode }
  );

  console.log(editMode, selectedId, data);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(accomadationEditorSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      if (editMode) {
        await axios.patch(`${API_ENDPOINT}/api/rooms/${selectedId}`, data);
      } else {
        console.log(data);
        await axios.post(`${API_ENDPOINT}/api/rooms/`, data);
      }

      onClickClose && onClickClose();
      qc.invalidateQueries(["rooms"]);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (data?.data) reset(data.data);
  }, [data?.data]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg bg-white p-4 rounded-lg relative"
    >
      <button className="p-2 absolute top-0 right-0" onClick={onClickClose}>
        <AiOutlineClose />
      </button>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="name"
            type="text"
            placeholder="Enter provider address"
            {...register("name")}
          />
          <p className=" font-medium text-red-500 py-1">
            {errors.name?.message}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="address"
          >
            Provider Address
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="address"
            type="text"
            placeholder="Enter provider address"
            {...register("address")}
          />
          <p className=" font-medium text-red-500 py-1">
            {errors.address?.message}
          </p>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="price"
            type="text"
            placeholder="Enter price"
            {...register("price")}
          />
          <p className=" font-medium text-red-500 py-1">
            {errors.price?.message}
          </p>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="pname"
          >
            Provider Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="pname"
            type="text"
            placeholder="Enter Provider"
            {...register("provider")}
          />
          <p className=" font-medium text-red-500 py-1">
            {errors.price?.message}
          </p>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="price"
          >
            Guest Count
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="price"
            type="number"
            placeholder="Guest Count"
            defaultValue={1}
            {...register("guests")}
          />
          <p className=" font-medium text-red-500 py-1">
            {errors.guests?.message}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="desc"
          >
            Description
          </label>
          <textarea
            className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="desc"
            placeholder="Enter description"
            {...register("desc")}
          ></textarea>
          <p className=" font-medium text-red-500 py-1">
            {errors.desc?.message}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full px-3">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {editMode ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default AccomodationEditor;
