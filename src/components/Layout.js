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
            padding: [rhythm(1), rhythm(2), rhythm(1.5), rhythm(2)].join(' '),
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
                marginTop: 0,
                marginBottom: 0,
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
            marginTop: rhythm(-1),
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            borderRadius: rhythm(0.5),
            overflow: 'hidden',
            backgroundColor: 'var(--container)',
          }}
        >
          {children}
        </main>
      </div>
    )
  }
}

export default Layout
