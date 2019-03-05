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
          A really cool blog by Dave Garwacke, a front-end developer who loves
          accessibility and building fun things.
        </p>
      </div>
    )
  }
}

export default Bio
