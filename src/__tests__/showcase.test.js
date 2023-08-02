import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Showcase from '../components/showcase';

describe('Test the header component', () => {
  const mockStore = configureMockStore([thunk]);
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
      companies: {
        companies: [],
      },
    });
  });

  it('Matches the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Showcase />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('Renders the companies', () => {
    const store = mockStore({
      companies: {
        companies: ['AAPL', 'BACL'],
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <Showcase />
      </Provider>,
    );

    expect(getByText('AAPL')).toBeInTheDocument();
  });

  it('Displays all companies', () => {
    const store = mockStore({
      companies: {
        companies: ['AAPL', 'BACL'],
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <Showcase />
      </Provider>,
    );

    expect(getByText('AAPL')).toBeInTheDocument();
    expect(getByText('BACL')).toBeInTheDocument();
  });
});
