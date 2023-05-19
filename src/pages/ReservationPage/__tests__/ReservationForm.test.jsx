/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import ReservationForm from "../ReservationForm";

import { useNavigate, useParams } from "react-router-dom"; // Import the module you want to test
import "@testing-library/jest-dom/extend-expect";
jest.mock("react-router-dom");

describe("Tests for Reservation form", () => {
  useParams.mockReturnValue({ room_id: "123" });
  test("displays error message if terms and conditions checkbox is not checked", async () => {
    render(<ReservationForm />);
    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);
    await act(async () => {});
    const errorMessage = screen.getByText(
      "You must accept the terms and conditions"
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test("check if email validation is there", async () => {
    render(<ReservationForm />);
    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);
    await act(async () => {});
    const errorMessage = screen.getByText("Email is a required field");
    expect(errorMessage).toBeInTheDocument();
  });

  test("check if correct email values are accepted", async () => {
    const { getByTestId, queryByText } = render(<ReservationForm />);
    const inputElement = getByTestId("email-tst");
    const submitButton = screen.getByText("Submit");
    fireEvent.change(inputElement, { target: { value: "john.doe@gmail.com" } });
    fireEvent.click(submitButton);
    await act(async () => {});
    const specificTextElement = queryByText("Email is a required field");
    expect(specificTextElement).toBeNull();
  });

  test("check if incorrect email values are denied", async () => {
    const { getByTestId, queryByText } = render(<ReservationForm />);
    const inputElement = getByTestId("email-tst");
    const submitButton = screen.getByText("Submit");
    fireEvent.change(inputElement, { target: { value: "john.doe" } });
    fireEvent.click(submitButton);
    await act(async () => {});
    const specificTextElement = queryByText("Email is a required field");
    expect(specificTextElement).toBeNull();
  });
});
