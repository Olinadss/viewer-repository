import React from "react";
import { render, screen } from "@testing-library/react";
import App from '../App'

describe('GitHub Viewer test', () => {
  test('Se exibe a logo do site', () => {
    render(<App/>)

    const logoText = screen.getByRole('heading', { 
      level: 3,
      name: "GitHub Viewer"
    });
    expect(logoText).toBeInTheDocument();
  })
})