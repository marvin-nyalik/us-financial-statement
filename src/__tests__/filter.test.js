import { render } from '@testing-library/react';
import Filter from '../components/filter';

test('it matches the snapshot', () => {
  const setSearch = jest.fn();
  const onSubmit = jest.fn();
  const { container } = render(
    <Filter search="search" setSearch={setSearch} onSubmit={onSubmit} />,
  );

  expect(container).toMatchSnapshot();
});
