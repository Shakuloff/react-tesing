import { act } from "react-dom/test-utils"
import { getCounterValue } from "./getCounterValue"
import { renderWithRouter } from "../../../tests/helpers/RenderWithRouter"
import { screen } from "@testing-library/react"

describe.skip("Тест redux", () => {
    test("счётчик 0", async () => {
        expect(getCounterValue({})).toBe(0)
        screen.debug()
    })
    test("счётчик 100", async () => {
        const initialValue = 100
        expect(getCounterValue({ counter: { value: initialValue } })).toBe(initialValue)
        screen.debug()
    })
})
