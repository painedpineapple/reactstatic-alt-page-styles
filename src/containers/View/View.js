import * as React from 'react'
import styled from 'styled-components'
import faker from 'faker'
import _ from 'lodash'
import { withRouteData, withSiteData } from 'react-static'
import { reveal as Menu } from 'react-burger-menu'
import Waypoint from 'react-waypoint'
import AppErrorBoundary from 'components/ErrorBoundaries/AppErrorBoundary'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Nav from 'components/Nav/Nav'

const ViewStyled = styled.main`
  background-color: ${props => props.theme.color.coralLight};
  min-height: calc(100vh - ${props => props.bodyHeightWithOutView}px);

  ${props =>
    props.route !== 'home'
      ? `
    &::before {
      content: '';
      position: relative;
      display: block;
      width: 100%;
      height: 0;
      background-color: white;
      z-index: 1;
      top: 0;
      left: 0;
      right: 0;
    }
  `
      : null}

  ${props =>
    props.pastHeader
      ? `
    &::before { height: ${props.theme.headerHeight.mobile}rem; }
  `
      : null}

  ${props =>
    props.pastHeader &&
    props.theme.media.lg`
    &::before { height: ${props.theme.headerHeight.desktop}rem; }
  `}
`

const MenuWrapper = styled.div`
  ${props => props.theme.media.lg`display: none;`} .bm-cross-button {
    height: 24px;
    width: 24px;
    right: ${props => props.theme.spacer.base * 2.5}rem;
  }

  .bm-cross {
    background: ${props => props.theme.color.coralLight};
  }

  .bm-menu {
    background: ${props => props.theme.color.black};
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }

  .bm-burger-button {
    position: absolute;
    width: 20px;
    height: 15px;
    right: ${props => props.theme.spacer.body}rem;
    top: 45px;
    transition: top 0.75s ease, opacity 0.75s ease;

    &.hide {
      opacity: 0;
    }
    &.hidden {
      display: none;
    }
  }

  .bm-burger-bars {
    height: 2px;
    background: ${props =>
      props.route !== 'home' || props.pastHeader
        ? props.theme.color.black
        : props.theme.color.white};
  }

  .bm-menu-wrap + div {
    transform: none !important;
  }

  ${props =>
    props.pastHeader
      ? `
    .bm-burger-button {
      top: -150px;
      opacity: 0;
    }
  `
      : null} ${props =>
    props.pastHeader && props.scrollingUp
      ? `
    .bm-burger-button {
      position: fixed;
      top: 23px;
      opacity: 1;
    }
  `
      : null};
`

const WaypointWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: ${props => props.theme.headerHeight.mobile}rem;
  display: flex;
  align-items: flex-end;

  ${props => props.theme.media.lg`
    height: ${props.theme.headerHeight.desktop}rem;
  `};
`

class ViewContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pastHeader: false,
      scrollingUp: false,
      lastScrollTop: 0,
      bodyHeightWithOutView: 0,
    }

    if (typeof document !== 'undefined') {
      this.handleScroll = this.handleScroll.bind(this)
    }
  }

  componentDidMount() {
    if (typeof document !== 'undefined') {
      window.addEventListener('scroll', this.handleScroll, false)
      this.burgerMenuFix()
      this.getBodyHeight()
    }
  }

  componentWillUnmount = () => {
    if (typeof document !== 'undefined') {
      window.removeEventListener('scroll', this.handleScroll, false)
    }
  }

  getBodyHeight() {
    const main = document.getElementById('main')
    const body = document.getElementsByTagName('body')[0]

    if (main && body) {
      this.setState({
        bodyHeightWithOutView: body.offsetHeight - main.offsetHeight,
      })
    }
  }

  burgerMenuFix() {
    if (typeof document !== 'undefined') {
      const closeToggles = document.getElementsByClassName('bm-cross-button')
      const menuToggles = document.getElementsByClassName('bm-burger-button')

      menuToggles[0].addEventListener('click', () => {
        menuToggles[0].classList.add('hide')
        setTimeout(() => menuToggles[0].classList.add('hidden'), 0)
      })
      closeToggles[0].addEventListener('click', () => {
        menuToggles[0].classList.remove('hidden')
        setTimeout(() => menuToggles[0].classList.remove('hide'), 0)
      })
    }
  }

  handleScroll() {
    const scrollTop =
      window.pageYOffset ||
      (document.documentElement ? document.documentElement.scrollTop : 0)
    this.setState(prevState => ({
      scrollingUp: scrollTop < prevState.lastScrollTop,
      lastScrollTop: scrollTop,
    }))
  }

  handleWaypointEnter = () => this.setState({ pastHeader: false })

  handleWaypointLeave = () => this.setState({ pastHeader: true })

  render() {
    return (
      <div>
        <AppErrorBoundary>
          <View
            {...this.props}
            pastHeader={this.state.pastHeader}
            scrollingUp={this.state.scrollingUp}
            bodyHeightWithOutView={this.state.bodyHeightWithOutView}
            handleWaypointLeave={this.handleWaypointLeave}
            handleWaypointEnter={this.handleWaypointEnter}
          />
        </AppErrorBoundary>
      </div>
    )
  }
}

const View = ({ ...props }) => (
  <div>
    {console.log('view props', props)}
    <MenuWrapper
      route={props.match.url}
      pastHeader={props.pastHeader}
      scrollingUp={props.scrollingUp}
    >
      <Menu right pageWrapId={'body'} width={300} outerContainerId={'app'}>
        <Nav pastHeader={props.pastHeader} />
      </Menu>
    </MenuWrapper>
    <div id="body">
      <Header
        {...{
          logo: faker.internet.avatar(),
          logo_white: faker.internet.avatar(),
        }}
        route={props.match.url}
        pastHeader={props.pastHeader}
        scrollingUp={props.scrollingUp}
      />
      <AppErrorBoundary>
        <WaypointWrapper route={props.match.url}>
          <Waypoint
            onEnter={props.handleWaypointEnter}
            onLeave={props.handleWaypointLeave}
          />
        </WaypointWrapper>
        <ViewStyled
          id="main"
          bodyHeightWithOutView={props.bodyHeightWithOutView}
          route={props.match.url}
          pastHeader={props.pastHeader}
        >
          {props.children}
        </ViewStyled>
      </AppErrorBoundary>
      <Footer
        {...{
          website_title: faker.lorem.word(),
        }}
      />
    </div>
  </div>
)

View.defaultProps = {
  slug: '',
}

export default withRouteData(withSiteData(ViewContainer))
