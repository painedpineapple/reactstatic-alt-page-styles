import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default {
  getSiteData: async () => {
    return {
      title: 'Site Title',
    }
  },
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/views/Home/Home',
        getData: () => ({
          // home page specific props
        }),
      },
      {
        path: '/about',
        component: 'src/views/About/About',
        getData: () => ({
          // about page specific props
        }),
      },
      {
        is404: true,
        component: 'src/views/404/404',
        getData: () => ({
          is404: true,
        }),
      },
    ]
  },
  devServer: {
    proxy: {
      '/.netlify/functions': {
        target: 'http://localhost:9000',
        pathRewrite: { '^/\\.netlify/functions': '' },
      },
    },
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
