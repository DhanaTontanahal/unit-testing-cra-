import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JAVASCRIPT"];
  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElem = screen.getByRole("list");
    expect(listElem).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(skills.length);
  });
});
