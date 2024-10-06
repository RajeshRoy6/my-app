import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import FormComponent from "../components/FormComponent";

const mockStore = configureStore([]);
const store = mockStore({});

describe("FormComponent", () => {
  test("renders form and interacts with navigation", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <FormComponent />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getAllByText(/Full Name/i)).toHaveLength(1);
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Email/i)).toHaveLength(1);
    expect(screen.getByText(/Number/i)).toBeInTheDocument();
    expect(screen.getByText(/Date/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Select/i)).toHaveLength(2);
    expect(screen.getAllByText(/Checkbox/i)).toHaveLength(1);
    expect(screen.getByText(/Gender:/i)).toBeInTheDocument();
    expect(screen.getByText(/Textarea/i)).toBeInTheDocument();
    expect(screen.getAllByText(/File/i)).toHaveLength(1);
  });

  test("renders form and interacts with navigation", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <FormComponent />
        </MemoryRouter>
      </Provider>
    );

    //Text
    const textInput = screen.getByLabelText(/Full Name/i);
    fireEvent.change(textInput, { target: { value: "Rajesh" } });
    expect(textInput).toHaveValue("Rajesh");

    //Password
    const passwordInput = screen.getByLabelText(/Password/i);
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    expect(passwordInput).toHaveValue("password123");

    //Email
    const emailInput = screen.getByLabelText(/Email/i);
    fireEvent.change(emailInput, { target: { value: "rajesh@example.com" } });
    expect(emailInput).toHaveValue("rajesh@example.com");

    //Number
    const numberInput = screen.getByLabelText(/Phone Number/i);
    fireEvent.change(numberInput, { target: { value: "5" } });
    expect(numberInput).toHaveValue(5);

    //Date
    const dateInput = screen.getByLabelText(/Date/i);
    fireEvent.change(dateInput, { target: { value: "2024-10-10" } });
    expect(dateInput).toHaveValue("2024-10-10");

    //Select
    const selectInput = screen.getByLabelText(/Select/i);
    fireEvent.change(selectInput, { target: { value: "option2" } });
    expect(selectInput).toHaveValue("option2");

    // Checkbox
    const checkboxInput = screen.getByLabelText(/Checkbox/i);
    expect(checkboxInput).not.toBeChecked();
    fireEvent.click(checkboxInput);
    expect(checkboxInput).toBeChecked();

    // Radio
    const radioOption1 = screen.getByLabelText(/Option 1/i);
    const radioOption2 = screen.getByLabelText(/Option 2/i);

    fireEvent.click(radioOption1);
    expect(radioOption1).toBeChecked();
    expect(radioOption2).not.toBeChecked();

    fireEvent.click(radioOption2);
    expect(radioOption2).toBeChecked();
    expect(radioOption1).not.toBeChecked();

    //Textarea
    const textareaInput = screen.getByLabelText(/Textarea/i);
    fireEvent.change(textareaInput, { target: { value: "Some text here" } });
    expect(textareaInput).toHaveValue("Some text here");

    //File
    const fileInput = screen.getByLabelText(/File/i) as HTMLInputElement;
    const file = new File(["dummy content"], "example.png", {
      type: "image/png",
    });
    fireEvent.change(fileInput, { target: { files: [file] } });
    expect(fileInput.files).not.toBeNull();
    expect(fileInput.files![0]).toBe(file);

    // Submit
    fireEvent.click(screen.getByRole("button", { name: /Next/i }));
  });
});
