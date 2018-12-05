import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <p>
          Written by <strong>Dave Garwacke</strong> who lives and works in New
          York. This is complete copy of the Gatsby starter blog.
          <br />
          <a href="https://twitter.com/ifyoumakeit">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
