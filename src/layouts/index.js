import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import g from "glamorous"
import { css } from "glamor"


import { rhythm } from "../utils/typography"

import './index.css'
import './flag-icon.css'

const Header = () => (
  <div
    style={{
      background: 'blue',
      color: 'white',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
          Have we got a fucking trade deal yet?
      </h1>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Have we got a fucking trade deal yet?"
      meta={[
        { name: 'description', content: 'A simple site to monitor the status of all the easy trade deals the UK has so far with all the countries queuing up to do deals with us.' },
        { name: 'keywords', content: 'Brexit, Trade, Deals, EU, Tories' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
