import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

test("Greet renders correctly", () => {
  render(<Greet />);
  const greeLeme = screen.getByText("Greet");
  expect(greeLeme).toBeInTheDocument();
});

test("Greet renders with a name", () => {
  render(<Greet name={"Dhana"} />);
  const textElem = screen.getByText("Greet Dhana");
  expect(textElem).toBeInTheDocument();
});
