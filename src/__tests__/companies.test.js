import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Companies from '../components/Companies';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Companies Component', () => {
  it('matches the snapshot when loading is true', () => {
    const initialState = {
      companies: {
        loading: true,
        companies: [],
        error: null,
      },
    };

    const store = mockStore(initialState);

    const { asFragment } = render(
      <Provider store={store}>
        <Companies />
      </Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
