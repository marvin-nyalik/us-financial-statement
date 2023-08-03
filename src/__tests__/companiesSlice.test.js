import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchCompanies } from '../redux/companies/companiesSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe('companiesSlice', () => {
  afterEach(() => {
    mock.reset();
  });

  it('should fetch companies successfully', async () => {
    const responseData = [
      'AAIC',
      'BBDI',
    ];
    mock.onGet('https://financialmodelingprep.com/api/v3/financial-statement-symbol-lists?apikey=c5854d756f7d6f0e8b7e68348830a2aa').reply(200, responseData);

    const store = mockStore({ loading: false, companies: [], error: null });

    await store.dispatch(fetchCompanies());
    const actions = ['AAIC', 'BBDI'];

    expect(actions).toEqual(responseData);
  });
});
