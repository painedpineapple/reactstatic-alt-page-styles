import * as React from 'react'
import { Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Icon from 'components/Icon/Icon'
import { media } from 'theme/styles'

injectGlobal`
  .animation-dropdown-enter {
    opacity: 0;
    transform: translate(0, -15px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  .animation-dropdown-enter.animation-dropdown-enter-active {
    opacity: 1;
    transform: translate(0,0);
  }
  .animation-dropdown-leave {
    opacity: 1;
    transform: translate(0, 15px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  .animation-dropdown-leave.animation-dropdown-leave-active {
    opacity: 0;
  }

  ${media.lg`
    .animation-dropdown-enter,
    .animation-dropdown-leave { transform: translate(0, 0); }
  `}
`

const DropDownMenu = styled.div``

const Navigation = styled.nav`
  a,
  button {
    color: ${props =>
      props.desktop && (props.route !== 'home' || props.pastHeader)
        ? props.theme.color.black
        : props.theme.color.white};
    text-decoration: none;
    line-height: 2;
    display: flex;
    font-size: ${props => props.theme.fontSize.ui}rem;
    text-transform: uppercase;
    transition: color 0.3s ease;
    position: relative;
    background-color: ${props =>
      props.desktop ? 'rgba(0,0,0,0)' : props.theme.color.black};
  }

  a {
    z-index: 2;
    &:hover {
      color: #ff5959;
    }
  }

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    width: 100%;
    padding: 0;
    z-index: 1;

    svg {
      width: 18px;
      height: 18px;
      transition: fill 0.3s ease;
      fill: ${props =>
        props.desktop && (props.route !== 'home' || props.pastHeader)
          ? props.theme.color.black
          : props.theme.color.white};
    }

    &:hover,
    &:focus {
      outline: none;
      color: ${props => props.theme.color.coral};
      svg {
        fill: ${props => props.theme.color.coral};
      }
    }
  }

  ul {
    padding-left: ${props => props.theme.spacer.article}rem;
    position: relative;
    z-index: 1;
  }

  ${props => props.theme.media.lg`
    display: flex;
    padding-right: 15px;

    a {
      display: flex;
      align-items: center;
    }

    > a,
    button {
      font-weight: 500;
      padding-left: 14px;
    }

    ${DropDownMenu} {
      position: relative;
      flex-direction: column;
      justify-content: center;
      display: flex;
      flex-wrap: wrap;

      button + span { width: 100%; }
    }

    ul {
      position: absolute;
      min-width: 13rem;
      white-space: nowrap;
      padding: 18px;
      top: 100%;

      &,
      a {
        background-color: ${props.theme.color.black};
        color: ${props.theme.color.white};
      }

      a {
        padding: 5px 9px;
        font-size: 14px;
        line-height: 1.5;
      }
    }
  `} ${props => props.theme.media.xl`
    a,
    button { padding-left: 38px; }
  `};
`

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      servicesMenuOpen: false,
    }
  }
  toggleServicesMenu = () =>
    this.setState(() => ({
      servicesMenuOpen: !this.state.servicesMenuOpen,
    }))
  render() {
    return (
      <Navigation
        desktop={this.props.desktop}
        route={this.props.route}
        pastHeader={this.props.pastHeader}
      >
        <Link to="/about">About Us</Link>
      </Navigation>
    )
  }
}
