import React from 'react'
import IconBase from 'react-icon-base'

export default class Close extends React.Component {
  render () {
    return (
      <IconBase viewBox="0 0 1024 1024" { ...this.props }>
        <g transform="translate(0,1024)"><path transform="scale(1,-1)" d="M552.323 448.111l260.547 260.547c11.213 11.213 11.208 29.389-0.006 40.602-11.216 11.216-29.392 11.217-40.602 0.006l-260.547-260.547-260.547 260.547c-11.213 11.213-29.389 11.208-40.602-0.006-11.216-11.216-11.217-29.392-0.006-40.602l260.547-260.547-260.547-260.547c-11.213-11.213-11.208-29.389 0.006-40.602 11.216-11.216 29.392-11.217 40.602-0.006l260.547 260.547 260.547-260.547c11.213-11.213 29.389-11.208 40.602 0.006 11.216 11.216 11.217 29.392 0.006 40.602l-260.547 260.547z" /></g>
      </IconBase>
    )
  }
}
