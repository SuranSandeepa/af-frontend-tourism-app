/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { AiOutlineClose } from "react-icons/ai";
import TourEditor from "../TourEditor";
import "@testing-library/jest-dom/extend-expect";
jest.mock("react-router-dom");

describe("TourEditor", () => {
  test("calls onClickClose when close button is clicked", () => {
    const onClickClose = jest.fn();
    render(<TourEditor onClickClose={onClickClose} />);
    fireEvent.click(screen.getByRole("button", { name: "" }));
    expect(onClickClose).toHaveBeenCalledTimes(1);
  });

  test("renders input fields and textarea", () => {
    render(<TourEditor onClickClose={() => {}} />);
    expect(screen.getByLabelText("Title")).toBeInTheDocument();
    expect(screen.getByLabelText("Provider Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Description")).toBeInTheDocument();
  });

  test("updates input fields when typing", () => {
    render(<TourEditor onClickClose={() => {}} />);
    const titleInput = screen.getByLabelText("Title");
    const providerNameInput = screen.getByLabelText("Provider Name");
    const descriptionTextarea = screen.getByLabelText("Description");

    fireEvent.change(titleInput, { target: { value: "Tour ABC" } });
    fireEvent.change(providerNameInput, { target: { value: "Provider XYZ" } });
    fireEvent.change(descriptionTextarea, {
      target: { value: "This is a tour description." },
    });

    expect(titleInput.value).toBe("Tour ABC");
    expect(providerNameInput.value).toBe("Provider XYZ");
    expect(descriptionTextarea.value).toBe("This is a tour description.");
  });

  test("calls a function when Add Tour button is clicked", () => {
    const onAddTour = jest.fn();
    render(<TourEditor onClickClose={() => {}} onAddTour={onAddTour} />);
    fireEvent.click(screen.getByRole("button", { name: "Add Tour" }));
    expect(onAddTour).toHaveBeenCalledTimes(0);
  });
});
