import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Apploication", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHed = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHed).toBeInTheDocument();

    const secHed = screen.getByRole("heading", {
      level: 2,
    });
    expect(secHed).toBeInTheDocument();

    const nameElem = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElem).toBeInTheDocument();

    //----------------getByPlaceholderText------------------
    const nameElemSrcByPlcHldrtxt = screen.getByPlaceholderText("Fullname");
    expect(nameElemSrcByPlcHldrtxt).toBeInTheDocument();
    //----------------getByPlaceholderText------------------

    //----------------getByLabelText------------------
    const nameElem_2 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElem_2).toBeInTheDocument();
    //----------------getByLabelText-------------

    const bioElem = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElem).toBeInTheDocument();

    const jobLocElem = screen.getByRole("combobox");
    expect(jobLocElem).toBeInTheDocument();

    const termsElem = screen.getByRole("checkbox");
    expect(termsElem).toBeInTheDocument();

    const termsElem_2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElem_2).toBeInTheDocument();

    const subElem = screen.getByRole("button");
    expect(subElem).toBeInTheDocument();

    const paragElem = screen.getByText("All Fields are mandatory");
    expect(paragElem).toBeInTheDocument();

    const nameElem_4 = screen.getByDisplayValue("Dhana");
    expect(nameElem_4).toBeInTheDocument();

    const imgElem = screen.getByAltText("a person with a laptop");
    expect(imgElem).toBeInTheDocument();

    const closeElem = screen.getByTitle("close");
    expect(closeElem).toBeInTheDocument();

    const customElem = screen.getByTestId("custom-element");
    expect(customElem).toBeInTheDocument();
  });
});
