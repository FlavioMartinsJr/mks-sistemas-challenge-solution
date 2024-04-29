import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import {App} from "./App";


test("Should render the APP page", () => {
    render(App())
    expect(true).toBeTruthy()
}) 