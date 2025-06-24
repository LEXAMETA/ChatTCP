import { render } from '@testing-library/react-native';
import App from '../app.js';

test('renders ChatTCP-Web-Clean Test Page', () => {
  const { getByText } = render(<App />);
  expect(getByText('ChatTCP-Web-Clean Test Page')).toBeTruthy();
});
