import { render, screen } from "@testing-library/react";
import App from "./App";

const expectationMatcherFunction = () => {
  render(<App />);
  const linkElem = screen.getByText(/learn react/i);
  expect(linkElem).toBeInTheDocument();
};

test("renders the learn react hyperlink", expectationMatcherFunction);
