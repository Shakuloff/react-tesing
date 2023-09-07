import { render, screen } from "@testing-library/react"
import { act } from 'react-dom/test-utils';
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
        await act(async () => {
            userEvent.click(aboutLink)
        })
        expect(screen.getByTestId('about-page')).toBeInTheDocument()
        await act(async () => {
            userEvent.click(mainLink)
        })
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
    })
})