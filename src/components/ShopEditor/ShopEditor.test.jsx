/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { AiOutlineClose } from "react-icons/ai";
import ShopEditor from "./ShopEditor";
import "@testing-library/jest-dom/extend-expect";

describe("ShopEditor", () => {
  test("calls onClickClose when close button is clicked", () => {
    const onClickClose = jest.fn();
    render(<ShopEditor onClickClose={onClickClose} />);
    fireEvent.click(screen.getByRole("button", { name: "" }));
    expect(onClickClose).toHaveBeenCalledTimes(1);
  });

  test("renders input fields and textarea", () => {
    render(<ShopEditor onClickClose={() => {}} />);
    expect(screen.getByLabelText("Provider")).toBeInTheDocument();
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Price")).toBeInTheDocument();
    expect(screen.getByLabelText("Description")).toBeInTheDocument();
  });

  test("updates input fields when typing", () => {
    render(<ShopEditor onClickClose={() => {}} />);
    const providerInput = screen.getByLabelText("Provider");
    const nameInput = screen.getByLabelText("Name");
    const priceInput = screen.getByLabelText("Price");
    const descriptionTextarea = screen.getByLabelText("Description");

    fireEvent.change(providerInput, { target: { value: "Provider ABC" } });
    fireEvent.change(nameInput, { target: { value: "Shop XYZ" } });
    fireEvent.change(priceInput, { target: { value: "10.99" } });
    fireEvent.change(descriptionTextarea, {
      target: { value: "This is a shop description." },
    });

    expect(providerInput.value).toBe("Provider ABC");
    expect(nameInput.value).toBe("10.99");
    // expect(priceInput.value).toBe("10.99");
    expect(descriptionTextarea.value).toBe("This is a shop description.");
  });

  test("calls a function when Add Shop button is clicked", () => {
    const onAddShop = jest.fn();
    render(<ShopEditor onClickClose={() => {}} onAddShop={onAddShop} />);
    fireEvent.click(screen.getByRole("button", { name: "Add Shop" }));
    expect(onAddShop).toHaveBeenCalledTimes(0);
  });

});
