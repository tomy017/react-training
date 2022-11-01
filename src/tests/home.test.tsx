import React from 'react';
import {
  queryByText, render, screen, waitForElementToBeRemoved,
} from '@testing-library/react';
import { Home } from 'pages/home';
import { UserController } from 'networking/controllers/user-controller';

const sampleUser: DummyUser = {
  id: 'id',
  firstName: 'Tomás',
  lastName: 'Martínez',
  title: 'Mr',
  picture: 'picture',
};

const returnValue = [sampleUser];

test('renders title', () => {
  render(<Home />);
  const title = screen.getByText(/welcome back/i);
  expect(title).toBeInTheDocument();
});

test('api call', async () => {
  UserController.getUsers = jest.fn().mockResolvedValue(returnValue);

  const { container } = render(<Home />);

  await waitForElementToBeRemoved(() => queryByText(container, 'Loading...'));

  const card = screen.getAllByTestId('userCard');

  expect(card.length).toBe(1);
  expect(UserController.getUsers).toHaveBeenCalledTimes(1);
});
