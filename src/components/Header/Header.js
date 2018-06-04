import * as React from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'
import Nav from 'components/Nav/Nav'

const Logo = styled.img`
  max-width: 100%;
  width: 100px;
  transition: padding 0.75s ease, width 0.75s ease;
`

const HeaderWrapper = styled.header`
  background-color: ${props =>
    props.route === '/' && !props.pastHeader
      ? 'rgba(255, 255, 255, 0)'
      : props.theme.color.white};
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  padding: 0 ${props => props.theme.spacer.body}rem;
  transition: top 0.75s ease, height 0.75s ease, background 0.75s ease;

  > a {
    padding: ${props => props.theme.spacer.article}rem 0;
    transition: padding 0.75s ease;
  }

  ${props => props.theme.media.lg`
    > a {
      padding-top: ${props => props.theme.spacer.base}rem;
      padding-bottom: ${props => props.theme.spacer.base}rem;
    }
  `}

  ${props => (props.route === '/' ? 'position: absolute;' : null)}

  ${props =>
    props.pastHeader
      ? `
    position: fixed;
    top: -150px;
  `
      : null}

  ${props =>
    props.pastHeader && props.scrollingUp
      ? `
    top: 0;

    > a {
      padding-top: 0;
      padding-bottom: 0;
    }

    img {
      padding-top: 7px;
      padding-bottom: 7px;
    }
  `
      : null}
`

const NavDesktopWrapper = styled.div`
  display: none;

  ${props => props.theme.media.lg`
    display: flex;
  `};
`

export default class Header extends React.Component {
  render() {
    console.log(this.props)
    return (
      <HeaderWrapper
        route={this.props.route}
        pastHeader={this.props.pastHeader}
        scrollingUp={this.props.scrollingUp}
      >
        <Link to="/">
          <Logo
            src={(() =>
              this.props.route === 'home' && !this.props.pastHeader
                ? this.props.logoHome
                : this.props.logo)()}
            alt="Site Title"
          />
        </Link>
        <NavDesktopWrapper>
          <Nav
            desktop
            route={this.props.route}
            pastHeader={this.props.pastHeader}
          />
        </NavDesktopWrapper>
      </HeaderWrapper>
    )
  }
}
