import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'

const rippleOut = keyframes`
  100% {
    top: -12px;
    right: -12px;
    bottom: -12px;
    left: -12px;
    opacity: 0;
  }
`

const ButtonStyled = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  padding: 16px 47px;
  margin: 1px;
  border-width: 1px;
  border-style: solid;
  font-weight: 500;
  letter-spacing: 0.1rem;
  transform-origin: center;
  position: relative;
  transition: color 0.2s ease, background 0.2s ease;
  font-size: 18px;

  &::after {
    content: '';
    position: absolute;
    border: 1px solid;
    border-radius: inherit;
    border-color: inherit;
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
  }

  ${props => (props.type === 'primary' ? `
    color: ${props.theme.color.coral};
    border-color: ${props.theme.color.coral};

    &:hover,
    &:focus {
      color: ${props.theme.color.white};
      background-color: ${props.theme.color.coral};
      text-decoration: none;

      &::after { animation: ${rippleOut} 0.5s; }
    }
  ` : null)}

  ${props => (props.size === 'sm' ? `
    font-size: 12px;
    padding: 13px 31px;
  ` : null)}
`

const Button = props => (
  <ButtonStyled
    type={props.type}
    href={props.href}
    size={props.size}
  >
    {props.children}
  </ButtonStyled>
)

Button.propTypes = {
  type: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  size: 'md',
}

export default Button
