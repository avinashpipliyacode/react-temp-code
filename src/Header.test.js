// Header.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header'; // Adjust the path if necessary

describe('Header Component', () => {
  test('should render the header with the correct title', () => {
    render(<Header />);
    
    // Check if the h1 element contains the correct text
    const titleElement = screen.getByText(/welcome to my react website/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('should render the paragraph with the correct text', () => {
    render(<Header />);
    
    // Check if the paragraph contains the correct text
    const paragraphElement = screen.getByText(/This is simple react App/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  test('should render the nav with the correct list item', () => {
    render(<Header />);
    
    // Check if the list item with "Home" is in the nav
    const navItem = screen.getByText(/Home/i);
    expect(navItem).toBeInTheDocument();
  });
});
