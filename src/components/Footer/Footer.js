import * as React from 'react'
import styled from 'styled-components'
import hash from 'string-hash'
import Icon from 'components/Icon/Icon'

const FooterStyled = styled.footer`
  background-color: ${props => props.theme.color.black};
  color: ${props => props.theme.color.white};
  padding: ${props => props.theme.spacer.body}rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    padding: 27px 0;
    font-size: 13px;
    font-family: Source Code Pro;
  }

  nav {
    padding-bottom: 27px;

    a {
      padding-right: 20px;

      &:last-of-type {
        padding-right: 0;
      }

      &:hover,
      &:focus {
        svg {
          fill: ${props => props.theme.color.coral};
        }
      }
    }
  }

  svg {
    width: 14px;
    height: 14px;
    transition: fill 0.3s ease;
    fill: ${props => props.theme.color.white};
  }

  ${props => props.theme.media.lg`
    padding: 0;
    flex-direction: row;
    justify-content: space-between;

    nav,
    span { padding: 27px ${props.theme.spacer.body}rem; }
  `};
`

export default class Footer extends React.Component {
  render() {
    return (
      <FooterStyled>
        <span>
          &copy; {new Date().getFullYear()} {this.props.website_title} All
          rights reserved
        </span>
      </FooterStyled>
    )
  }
}
