import { render, screen } from '@testing-library/react';
import App from '../App';

// Mock scrollTo since it's not implemented in JSDOM
window.scrollTo = jest.fn();

test('renders Move4IA content', async () => {
  render(<App />);

  // Check for the "Valores" section title which is in Services.js
  const valuesTitle = await screen.findByText("Valores");
  expect(valuesTitle).toBeInTheDocument();

  // Check for "Contacto"
  const contactTitle = await screen.findAllByText("Contacto");
  expect(contactTitle.length).toBeGreaterThan(0);
});
