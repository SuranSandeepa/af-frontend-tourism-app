import { useNavigate } from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { reserveFormSchema } from "@schema/accomodation";
import { useParams } from "react-router-dom";
import { API_ENDPOINT } from "../../config";
import axios from "axios";

function ReservationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(reserveFormSchema),
  });
  const { room_id } = useParams();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await axios.post(`${API_ENDPOINT}/api/rooms/${room_id}/reserve`, data);
      console.log(data, room_id);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h1 className="mt-8 font-bold text-xl text-center">Reserve your room</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 pt-8">
        <div className="mb-4">
          <label htmlFor="checkInDate" className="block mb-2">
            Check-in Date:
          </label>
          <input
            type="date"
            id="checkInDate"
            className="w-full border border-gray-300 rounded py-2 px-4"
            {...register("checkInDate")}
          />
          <p className=" font-medium text-red-500 py-1">
            {errors.checkInDate?.message}
          </p>
        </div>

        <div className="mb-4">
          <label htmlFor="checkOutDate" className="block mb-2">
            Check-out Date:
          </label>
          <input
            type="date"
            id="checkOutDate"
            className="w-full border border-gray-300 rounded py-2 px-4"
            {...register("checkOutDate")}
          />
          <p className=" font-medium text-red-500 py-1">
            {errors.checkOutDate?.message}
          </p>
        </div>

        <div className="mb-4">
          <label htmlFor="guests" className="block mb-2">
            Number of Guests:
          </label>
          <input
            type="number"
            id="guests"
            className="w-full border border-gray-300 rounded py-2 px-4"
            {...register("guests")}
            defaultValue={1}
          />
          <p className=" font-medium text-red-500 py-1">
            {errors.guests?.message}
          </p>
        </div>

        <div className="mb-4">
          <label htmlFor="specialRequests" className="block mb-2">
            Special Requests:
          </label>
          <textarea
            id="specialRequests"
            className="w-full border border-gray-300 rounded py-2 px-4"
            rows="4"
            {...register("specialRequests")}
          ></textarea>
          <p className=" font-medium text-red-500 py-1">
            {errors.specialRequests?.message}
          </p>
        </div>

        <div className="mb-4">
          <label htmlFor="fullName" className="block mb-2">
            Full Name:
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full border border-gray-300 rounded py-2 px-4"
            {...register("fullName")}
          />
          <p className=" font-medium text-red-500 py-1">
            {errors.fullName?.message}
          </p>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded py-2 px-4"
            {...register("email")}
          />
          <p className=" font-medium text-red-500 py-1">
            {errors.email?.message}
          </p>
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full border border-gray-300 rounded py-2 px-4"
            {...register("phone")}
          />
          <p className=" font-medium text-red-500 py-1">
            {errors.phone?.message}
          </p>
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block mb-2">
            Address:
          </label>
          <textarea
            id="address"
            className="w-full border border-gray-300 rounded py-2 px-4"
            rows="4"
            {...register("address")}
          ></textarea>
          <p className=" font-medium text-red-500 py-1">
            {errors.address?.message}
          </p>
        </div>

        <div className="mb-4">
          <label className="block">
            <input type="checkbox" {...register("termsAgree")} className="mr-2" />I
            agree to the terms and conditions
          </label>
          <p className=" font-medium text-red-500 py-1">
            {errors.termsAgree?.message}
          </p>
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
