import { act } from "react-dom/test-utils"
import { renderWithRouter } from "../../tests/helpers/RenderWithRouter"
import Navbar from "./Navbar"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe.skip("Подтягиввание пользователей меню", () => {
    test("переходы по всем ссылкам", async () => {
        await act(async () => {
            renderWithRouter(<Navbar />)
        })
        const mainLink = screen.getByTestId('main-link')
        const aboutLink = screen.getByTestId('about-link')
        const usersLink = screen.getByTestId('users-link')
        
        await act(async () => {
            userEvent.click(aboutLink)
        })
        expect(screen.getByTestId('about-page')).toBeInTheDocument()
        await act(async () => {
            userEvent.click(mainLink)
        })
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
        await act(async () => {
            userEvent.click(usersLink)
        })
        expect(screen.getByTestId('users-page')).toBeInTheDocument()
    })
})
