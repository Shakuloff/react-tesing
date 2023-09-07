import { render, screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "./App"
// import { act } from "react-dom/test-utils"



describe("Тест роутера", () => {
    test("роутер", async () => {
        await act(async () => {
            render(<App />)
        })
        const mainLink = screen.getByTestId('main-link')
        const aboutLink = screen.getByTestId('about-link')
        userEvent.click(aboutLink)
        expect(screen.getByTestId('about-page')).toBeInTheDocument()
        userEvent.click(mainLink)
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
    })
})