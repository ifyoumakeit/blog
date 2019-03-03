import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import { hidden } from 'ansi-colors'

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <div>
        <header
          style={{
            backgroundColor: 'var(--header)',
            padding: [rhythm(0.5), rhythm(1), rhythm(1.5), rhythm(1)].join(' '),
            color: 'var(--textTitle)',
          }}
        >
          <div
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: rhythm(24),
            }}
          >
            <h1
              style={{
                ...scale(0.75),
                color: 'var(--textTitle)',
                margin: 0,
              }}
            >
              <Link
                style={{
                  boxShadow: 'none',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                to={'/'}
              >
                {title}
              </Link>
            </h1>
          </div>
        </header>
        <main
          style={{
            padding: rhythm(0.5),
            marginTop: rhythm(-1.5),
          }}
        >
          <div
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: rhythm(24),
              borderRadius: rhythm(0.5),
              overflow: 'hidden',
              backgroundColor: 'var(--container)',
            }}
          >
            {children}
          </div>
        </main>
        <footer
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            textAlign: 'right',
          }}
        >
          Copyright 2019 |{' '}
          <a href="http://www.github.com/ifyoumakeit">GitHub</a> |{' '}
          <a href="http://www.twitter.com/ifyoumakeit">Twitter</a> |{' '}
          <a href="http://www.linkedin.com/in/ifyoumakeit">LinkedIn</a>
        </footer>
      </div>
    )
  }
}

export default Layout
