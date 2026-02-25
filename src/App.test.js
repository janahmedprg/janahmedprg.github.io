import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("toggles between light and dark themes", () => {
  render(<App />);

  const toggleToDark = screen.getByRole("button", {
    name: /switch to dark mode/i,
  });
  expect(document.documentElement).toHaveAttribute("data-theme", "light");

  fireEvent.click(toggleToDark);

  expect(document.documentElement).toHaveAttribute("data-theme", "dark");
  expect(
    screen.getByRole("button", { name: /switch to light mode/i })
  ).toBeInTheDocument();
});
