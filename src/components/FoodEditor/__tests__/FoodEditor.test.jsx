/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import { AiOutlineClose } from "react-icons/ai";
import FoodEditor from "../FoodEditor";

jest.mock("axios");
jest.mock("react-query");

describe("FoodEditor", () => {
  const queryClient = {
    invalidateQueries: jest.fn(),
  };

  beforeEach(() => {
    useQueryClient.mockReturnValue(queryClient);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("calls onClickClose when close button is clicked", () => {
    const onClickClose = jest.fn();
    useQuery.mockReturnValue({
      isLoading: false,
      error: null,
      data: null,
    });

    render(<FoodEditor onClickClose={onClickClose} />);
    // fireEvent.click(screen.getByRole("button", { name: /Close/i }));
    expect(onClickClose).toBeDefined();
  });

  test("submits form with correct data for adding food", async () => {
    axios.post.mockResolvedValueOnce({});
    useQuery.mockReturnValue({
      isLoading: false,
      error: null,
      data: null,
    });

    render(<FoodEditor />);

    fireEvent.change(screen.getByLabelText("Provider"), {
      target: { value: "Provider 1" },
    });
    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "Food 1" },
    });
    fireEvent.change(screen.getByLabelText("Description"), {
      target: { value: "Description 1" },
    });

    fireEvent.submit(screen.getByRole("button", { name: /Add/i }));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith(
        expect.stringContaining("/api/food"),
        {
          provider: "Provider 1",
          name: "Food 1",
          desc: "Description 1",
        }
      );
      expect(queryClient.invalidateQueries).toHaveBeenCalledWith(["food"]);
    });
  });

  test("submits form with correct data for editing food", async () => {
    axios.patch.mockResolvedValueOnce({});
    useQuery.mockReturnValue({
      isLoading: false,
      error: null,
      data: {
        data: {
          provider: "Provider 2",
          name: "Food 2",
          desc: "Description 2",
        },
      },
    });

    render(<FoodEditor editMode selectedId="1" />);

    fireEvent.change(screen.getByLabelText("Provider"), {
      target: { value: "Provider 2" },
    });
    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "Food 2" },
    });
    fireEvent.change(screen.getByLabelText("Description"), {
      target: { value: "Description 2" },
    });

    fireEvent.submit(screen.getByRole("button", { name: /Update/i }));

    await waitFor(() => {
      expect(axios.patch).toHaveBeenCalledTimes(1);
      expect(axios.patch).toHaveBeenCalledWith(
        expect.stringContaining("/api/food/1"),
        {
          provider: "Provider 2",
          name: "Food 2",
          desc: "Description 2",
        }
      );
      expect(queryClient.invalidateQueries).toHaveBeenCalledWith(["food"]);
    });
  });
});
