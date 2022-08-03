import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />); // we render the component 

  // we find an element wuth a role of button and text of 'Change to blue'
  const button = screen.getByRole('button', { name: 'Change to blue'})
  expect(button).toHaveStyle({backgroundColor: 'red'}); 

  // we click the button
  fireEvent.click(button); 

  // expect the background color to be blue
  expect(button).toHaveStyle({backgroundColor: 'blue'}); 


  // expect the button text to be 'Change to red'
  expect(button.textContent).toBe('Change to red');
});

test('button has correct initial text', () => {
  render(<App />);

});
