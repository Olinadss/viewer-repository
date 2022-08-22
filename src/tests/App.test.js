import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
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

  test('Se o input e o botão estão sendo renderizados', () => {
    render(<App/>)

    const inputText = screen.getByRole('textbox');
    expect(inputText).toBeInTheDocument()

    const searchButton = screen.getByRole('button');
    expect(searchButton).toBeInTheDocument()
  })

  test('se o input recebe entrada de dados', () => {
    render(<App/>)

    const inputText = screen.getByRole('textbox');
    expect(inputText).toBeInTheDocument()

    fireEvent.change(inputText, { target: { value: 'Olinadss'}})
    expect(inputText).toHaveValue('Olinadss')
  })

  test('Se aparece os repositórios quando é pesquisado', async () => {
    render(<App/>)

    const inputText = screen.getByRole('textbox');
    expect(inputText).toBeInTheDocument()
    const searchButton = screen.getByRole('button');

    fireEvent.change(inputText, { target: { value: 'Olinadss'}})

    fireEvent.click(searchButton)

    const textRepoUser = await screen.findByRole('heading', {
      level: 1,
      name: 'Repositorio de Danilo dos Santos Souza'
    })

    expect(textRepoUser).toBeInTheDocument()

    const textRepoName = await screen.findByRole('heading', {
      level: 3,
      name: 'Balanceamento-de-Brackets'
    })

    expect(textRepoName).toBeInTheDocument()
  })
})