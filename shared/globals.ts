import { css } from '@emotion/react'

export const globalStyles = css`
  :root {
    --page-background: #222;
    --page-text: #ddd;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    background-color: var(--page-background);
    color: var(--page-text);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`
