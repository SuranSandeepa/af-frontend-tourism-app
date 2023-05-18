import { useNavigate } from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { reserveFormSchema } from "@schema/accomodation";
import { useParams } from "react-router-dom";

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

  const onSubmit = (data) => {
    console.log(data, room_id);
    return;
    navigate("/success");
  };

  return (
    <div>
      <h1 className="mt-8 font-bold text-xl text-center">Reserve your room</h1>
      <form onSubmit={handleSubmit(onSubmit)} class="max-w-md mx-auto p-4 pt-8">
        <div class="mb-4">
          <label for="checkInDate" class="block mb-2">
            Check-in Date:
          </label>
          <input
            type="date"
            id="checkInDate"
            class="w-full border border-gray-300 rounded py-2 px-4"
            {...register("checkInDate")}
          />
          <p className=" font-medium text-red-500 py-1">{errors.checkInDate?.message}</p>
        </div>

        <div class="mb-4">
          <label for="checkOutDate" class="block mb-2">
            Check-out Date:
          </label>
          <input
            type="date"
            id="checkOutDate"
            class="w-full border border-gray-300 rounded py-2 px-4"
            {...register("checkOutDate")}
          />
          <p className=" font-medium text-red-500 py-1">{errors.checkOutDate?.message}</p>
        </div>

        <div class="mb-4">
          <label for="guests" class="block mb-2">
            Number of Guests:
          </label>
          <input
            type="number"
            id="guests"
            class="w-full border border-gray-300 rounded py-2 px-4"
            {...register("guests")}
            defaultValue={1}
          />
          <p className=" font-medium text-red-500 py-1">{errors.guests?.message}</p>
        </div>

        <div class="mb-4">
          <label for="specialRequests" class="block mb-2">
            Special Requests:
          </label>
          <textarea
            id="specialRequests"
            class="w-full border border-gray-300 rounded py-2 px-4"
            rows="4"
            {...register("specialRequests")}
          ></textarea>
          <p className=" font-medium text-red-500 py-1">{errors.specialRequests?.message}</p>
        </div>

        <div class="mb-4">
          <label for="fullName" class="block mb-2">
            Full Name:
          </label>
          <input
            type="text"
            id="fullName"
            class="w-full border border-gray-300 rounded py-2 px-4"
            {...register("fullName")}
          />
          <p className=" font-medium text-red-500 py-1">{errors.fullName?.message}</p>
        </div>

        <div class="mb-4">
          <label for="email" class="block mb-2">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            class="w-full border border-gray-300 rounded py-2 px-4"
            {...register("email")}
          />
          <p className=" font-medium text-red-500 py-1">{errors.email?.message}</p>
        </div>

        <div class="mb-4">
          <label for="phone" class="block mb-2">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            class="w-full border border-gray-300 rounded py-2 px-4"
            {...register("phone")}
          />
          <p className=" font-medium text-red-500 py-1">{errors.phone?.message}</p>
        </div>

        <div class="mb-4">
          <label for="address" class="block mb-2">
            Address:
          </label>
          <textarea
            id="address"
            class="w-full border border-gray-300 rounded py-2 px-4"
            rows="4"
            {...register("address")}
          ></textarea>
          <p className=" font-medium text-red-500 py-1">{errors.address?.message}</p>
        </div>

        <div class="mb-4">
          <label class="block">
            <input type="checkbox" {...register("termsAgree")} class="mr-2" />I agree to the terms and
            conditions
          </label>
          <p className=" font-medium text-red-500 py-1">{errors.termsAgree?.message}</p>
        </div>

        <div>
          <button
            type="submit"
            class="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
