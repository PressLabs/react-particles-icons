import React from 'react'
import IconBase from 'react-icon-base'

export default class Right extends React.Component {
  render () {
    return (
      <IconBase viewBox="0 0 1024 1024" { ...this.props }>
        <g transform="translate(0,1024)"><path transform="scale(1,-1)" d="M360.67 170.924c-0.002 0-0.004 0-0.007 0-72.897 0.002-132.202 59.37-132.202 132.338v289.475c0 72.972 59.308 132.34 132.205 132.34 19.104 0 37.748-4.134 55.418-12.29l313.599-144.739c47.377-21.865 76.809-67.865 76.809-120.045 0-52.184-29.43-98.184-76.809-120.052l-313.599-144.736c-17.67-8.154-36.314-12.29-55.413-12.29zM360.665 667.449c-41.122 0-74.577-33.515-74.577-74.712v-289.475c0-41.193 33.455-74.708 74.579-74.71h0.002c10.701 0 21.218 2.352 31.265 6.986l313.599 144.736c27.132 12.523 43.332 37.841 43.332 67.726s-16.2 55.201-43.332 67.724l-313.599 144.739c-10.047 4.635-20.566 6.986-31.27 6.986z" /></g>
      </IconBase>
    )
  }
}
