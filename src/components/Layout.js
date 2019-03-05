import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <React.Fragment>
        <header
          style={{
            backgroundColor: 'var(--header)',
            padding: [rhythm(0.5), rhythm(1), rhythm(5.5), rhythm(1)].join(' '),
            color: 'var(--textTitle)',
            clipPath: "polygon(0% 100%, 100% 80%, 100% 0%, 0% 0%)",
            zIndex: 0

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
                marginRight: rhythm(1),
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
            marginTop: rhythm(-5.5),
            position: "relative"
          }}
        >
          <div
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: rhythm(24),
              borderRadius: rhythm(0.5),              
              backgroundColor: 'var(--container)',
              boxShadow: "0 0 20px rgba(0,0,0,0.05)"
            }}
          >
            {children}
          </div>
        </main>
        <footer
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: rhythm(2),
            maxWidth: rhythm(24),
            textAlign: 'right',
          }}
        >
          Copyright 2019 |{' '}
          <a target="_blank" href="http://www.github.com/ifyoumakeit">
            GitHub
          </a>{' '}
          |{' '}
          <a target="_blank" href="http://www.twitter.com/ifyoumakeit">
            Twitter
          </a>{' '}
          |{' '}
          <a target="_blank" href="http://www.linkedin.com/in/ifyoumakeit">
            LinkedIn
          </a>
        </footer>
      </React.Fragment>
    )
  }
}

export default Layout
