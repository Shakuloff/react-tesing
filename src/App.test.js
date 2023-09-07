import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// describe("Первый тест", () => {
//   test('common', () => {
//     render(<App />);
//     const helloWorldElem = screen.getByText(/Привет мир!/i)
//     const btn = screen.getByRole("button")
//     const input = screen.getByPlaceholderText(/значение.../i)
//     expect(helloWorldElem).toBeInTheDocument()
//     expect(btn).toBeInTheDocument()
//     expect(input).toBeInTheDocument()
//     expect(input).toMatchSnapshot()
//   });
//   test('query', () => {
//     render(<App />);
//     const helloWorldElem = screen.queryByText(/Привет мир2!/i)
//     expect(helloWorldElem).toBeNull()
//   });
//   test('find', async () => {
//     render(<App />);
//     const helloWorldElem = await screen.findByText(/данные/i)
//     expect(helloWorldElem).toBeInTheDocument()
//     expect(helloWorldElem).toHaveStyle({ color: "red" })
//   });
// })

describe.skip("Клик", () => {
  test("переключение", () => {
    render(<App />);
    const btn = screen.getByTestId('toggle-btn')
    // const toggleDiv = screen.queryByTestId("toggle-elem")
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
    fireEvent.click(btn)
    expect(screen.getByTestId('toggle-elem')).toBeInTheDocument()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
  })

  test("поле ввода", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/значение.../i)
    expect(screen.queryByTestId('value-elem')).toContainHTML('')
    // ! искуственно
    fireEvent.input(input, {
      target: { value: 'красный' }
    })
    // ! приближённо к действиям пользователя
    userEvent.type(input, "красный")
    expect(screen.getByTestId('value-elem')).toContainHTML('красный')
  })
})


