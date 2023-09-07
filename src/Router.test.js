import { render, screen } from "@testing-library/react"
import { act } from 'react-dom/test-utils';
import userEvent from "@testing-library/user-event"
import App from "./App"
import { MemoryRouter } from "react-router-dom";
import { renderWithRouter } from "./tests/helpers/RenderWithRouter";
// import { act } from "react-dom/test-utils"



describe.skip("Тест роутера", () => {
    test.skip("роутер", async () => {
        await act(async () => {
            renderWithRouter(null)
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
    test.skip("роутер ошибка", async () => {
        await act(async () => {
            renderWithRouter(null, '/фывфыв')
        })
        expect(screen.getByTestId('not-found-page')).toBeInTheDocument()
    })
})