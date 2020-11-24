import '../styles/globals.styl'
import React, { Fragment } from 'react'
import Router from 'next/router'

import * as gtag from 'common/src/lib/gtag'

// Notice how we track page-view when route is changed
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))
function MyApp ( { Component, pageProps } ) {
  return (
      <Fragment>
        <Component { ...pageProps } />
      </Fragment>
  )
}

export default MyApp
