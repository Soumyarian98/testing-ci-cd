// @vitest-environment happy-dom

import { render, screen } from "@testing-library/react";
import { it } from "vitest";
import App from "./App";

it("Renders App", () => {
	render(<App />);
});
