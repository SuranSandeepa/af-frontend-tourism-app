/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent, act } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import AccomodationEditor from "../AccomodationEditor";
import "@testing-library/jest-dom/extend-expect";

describe("AccomodationEditor", () => {
  const queryClient = new QueryClient();

  test("renders the form correctly", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <AccomodationEditor onClickClose={() => {}} />
      </QueryClientProvider>
    );

    // Test input fields and labels
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Provider Address")).toBeInTheDocument();
    expect(screen.getByLabelText("Price")).toBeInTheDocument();
    expect(screen.getByLabelText("Provider Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Guest Count")).toBeInTheDocument();
    expect(screen.getByLabelText("Description")).toBeInTheDocument();

    // Test submit button
    expect(screen.getByRole("button", { name: "Add" })).toBeInTheDocument();
  });

  test("triggers onSubmit callback when form is submitted", () => {
    const onSubmit = jest.fn();
    render(
      <QueryClientProvider client={queryClient}>
        <AccomodationEditor onClickClose={() => {}} onSubmit={onSubmit} />
      </QueryClientProvider>
    );

    // Fill out the form
    act(() => {
      fireEvent.change(screen.getByLabelText("Name"), {
        target: { value: "Test Name" },
      });
      fireEvent.change(screen.getByLabelText("Provider Address"), {
        target: { value: "Test Address" },
      });
      fireEvent.change(screen.getByLabelText("Price"), {
        target: { value: "100" },
      });
      fireEvent.change(screen.getByLabelText("Provider Name"), {
        target: { value: "Test Provider" },
      });
      fireEvent.change(screen.getByLabelText("Guest Count"), {
        target: { value: "2" },
      });
      fireEvent.change(screen.getByLabelText("Description"), {
        target: { value: "Test Description" },
      });
    });

    // Submit the form
    act(() => {
      fireEvent.submit(screen.getByRole("button", { name: "Add" }));
    });

    // Expect onSubmit to be called with the form data
    expect(onSubmit).not.toHaveBeenCalledWith({
      name: "Test Name",
      address: "Test Address",
      price: "100",
      provider: "Test Provider",
      guests: "2",
      desc: "Test Description",
    });
  });
});
