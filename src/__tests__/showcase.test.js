import { render } from '@testing-library/react';
import Showcase from '../components/showcase';

describe('Test the header component', () => {
  it('Matches the snapshot', () => {
    const { container } = render(
      <Showcase />,
    );

    expect(container).toMatchSnapshot();
  });
});
