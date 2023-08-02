import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/header';

describe('Test the header component', () => {
  it('Matches the snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
