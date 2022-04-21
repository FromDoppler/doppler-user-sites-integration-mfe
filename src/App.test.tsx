import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Doppler User Sites Integration Micro-Frontend", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Doppler User Sites Integration Micro-Frontend/i
  );
  expect(linkElement).toBeInTheDocument();
});
