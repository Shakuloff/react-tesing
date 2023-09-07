import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"
import { renderTestApp } from "../../tests/helpers/renderTestApp"

describe("Тест redux counter компонент", () => {
    test("тест роутера", async () => {
        const { getByTestId } =
            renderTestApp(null,
                { route: "/", initialState: { counter: { value: 27 } } })
        const incrementBtn = screen.getByTestId("increment-btn")
        expect(screen.getByTestId("value-title")).toHaveTextContent('27')
        await act(async () => {
            userEvent.click(incrementBtn)
        })
        expect(screen.getByTestId('value-title')).toHaveTextContent("28")
        screen.debug()
    })
})
