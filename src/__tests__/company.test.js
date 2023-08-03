import configureMockStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Detail from '../components/Detail';

const mockStore = configureMockStore([thunk]);

describe('Company test', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      company: {
        report: [
          {
            date: 12 / 2 / 1212,
            currency: 'USD',
            year: 2012,
            researchExpenses: 124934,
            income: 2394,
          },
          {
            date: 12 / 2 / 1213,
            currency: 'KES',
            year: 2013,
            researchExpenses: 1249334,
            income: 2394532,
          },
        ],
      },
      loading: false,
    });
  });

  it('Renders component with loading state', () => {
    store = mockStore({
      company: {
        report: [],
        loading: true,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Detail />
        </MemoryRouter>
      </Provider>,
    );

    const loadingElement = screen.getByText('Loading');
    expect(loadingElement).toBeInTheDocument();
  });
});
