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
          padding: [rhythm(1), rhythm(1)].join(' '),
        }}
      >
        <p style={{ margin: 0 }}>
          I'm a front-end developer who lives in Brooklyn and
          loves building things that people can use and enjoy. 
        </p>
      </div>
    )
  }
}

export default Bio
