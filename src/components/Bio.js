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
          padding: [rhythm(1.5), rhythm(2)].join(' '),
        }}
      >
        <p style={{ margin: 0 }}>
          Written by <strong>Dave Garwacke</strong> who lives and works in New
          York.
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
