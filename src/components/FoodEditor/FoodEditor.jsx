import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQuery, useQueryClient } from "react-query";
import { foodEditorSchema } from "@schema/foodEditor";
import axios from "axios";
import { API_ENDPOINT } from "../../config";

function FoodEditor({ onClickClose, selectedId, editMode }) {
  const qc = useQueryClient();
  const { isLoading, error, data } = useQuery(
    ["rooms", selectedId],
    () => axios.get(`${API_ENDPOINT}/api/food/${selectedId}`),
    { skip: !editMode }
  );

  console.log(editMode, selectedId, data);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(foodEditorSchema),
  });

  console.log(errors, "Dafdfad");
  const onSubmit = async (data) => {
    console.log(data, "4444");
    try {
      if (editMode) {
        await axios.patch(`${API_ENDPOINT}/api/food/${selectedId}`, data);
      } else {
        console.log(data);
        await axios.post(`${API_ENDPOINT}/api/food/`, data);
      }

      onClickClose && onClickClose();
      qc.invalidateQueries(["food"]);
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
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="provider"
          >
            Provider
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="provider"
            type="text"
            placeholder="Enter provider name"
            {...register("provider")}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="name"
            type="text"
            placeholder="Enter name"
            {...register("name")}
          />
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

export default FoodEditor;
