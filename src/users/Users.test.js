import { render, screen } from '@testing-library/react';
import axios from 'axios';
import Users from './Users';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { renderWithRouter } from '../tests/helpers/RenderWithRouter';

jest.mock('axios')

describe.skip("Подтягиввание пользователей", () => {
  let response = {
    data: [
      {
        "id": 1,
        "name": "Leanne Graham",
      },
      {
        "id": 2,
        "name": "Ervin Howell",
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
      },
    ]
  }
  afterEach(() => {
    jest.clearAllMocks()
  })
  test.skip("axios", async () => {
    axios.get.mockReturnValue(response);
    render(<Users />);
    const users = await screen.findAllByTestId("user-item")
    expect(users.length).toBe(3)
    expect(axios.get).toBeCalledTimes(1)
    expect(users).toMatchSnapshot()
    // screen.debug(users)
  })
  test("перенаправление на страницу пользователя", async () => {
    axios.get.mockReturnValue(response);
    await act(async () => {
      renderWithRouter(null, '/users')
      // renderWithRouter(<Users />)
    })
    const users = await screen.findAllByTestId("user-item")
    expect(users.length).toBe(3)
    await act(async () => {
      userEvent.click(users[0])
    })
    expect(screen.getByTestId('user-page')).toBeInTheDocument()
    // screen.debug(users)
  })
})
