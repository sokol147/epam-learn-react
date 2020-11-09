import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Footer from "./Footer";

describe("Footer", () => {
    it("render footer logo", () => {
        const { getByText } = render(<Footer />);
        const element = getByText(/netflix/i);
        screen.debug();
        expect(element).toBeInTheDocument();
    });
});
