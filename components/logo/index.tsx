import { css } from '@emotion/react'
import { IoMdPlanet as Saturn } from 'react-icons/io'

const saturn = css`
  position: relative;
  top: 0.2em;
`

const logoStyles = css`
  font-size: 7rem;
  display: block;
  text-align: center;
  font-variant: small-caps;
  color: var(--color-text-invert);
`

const Logo = () => (
  <span css={logoStyles}>
    devl
    <Saturn css={saturn} />g
  </span>
)

export default Logo
