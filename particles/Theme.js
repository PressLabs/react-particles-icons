import React from 'react'
import IconBase from 'react-icon-base'

export default class Theme extends React.Component {
  render () {
    return (
      <IconBase viewBox="0 0 1024 1024" { ...this.props }>
        <g transform="translate(0,1024)"><path transform="scale(1,-1)" d="M853.333 716.19v-536.381c0-40.395-32.748-73.143-73.143-73.143h-536.381c-40.395 0-73.143 32.748-73.143 73.143v438.857c0 40.395 32.748 73.143 73.143 73.143l219.36-0.004c0.022 0 0.044 0.004 0.069 0.004 13.465 0 24.381-10.916 24.381-24.381s-10.916-24.381-24.381-24.381h-219.429c-13.465 0-24.381-10.916-24.381-24.381v-438.857c0-13.465 10.916-24.381 24.381-24.381h536.381c13.465 0 24.381 10.916 24.381 24.381v536.381c0 13.465-10.916 24.381-24.381 24.381h-585.143c-13.456 0-24.365 10.909-24.365 24.365s10.909 24.365 24.365 24.365l585.143 0.031c40.395 0 73.143-32.748 73.143-73.143zM512.002 594.286h-195.048c-13.465 0-24.381-10.918-24.381-24.381v-341.333c0-13.465 10.916-24.381 24.381-24.381h195.048c13.465 0 24.381 10.918 24.381 24.381v341.333c0 13.463-10.916 24.381-24.381 24.381zM487.621 252.952h-146.288v292.571l146.288-0.002v-292.569zM583.372 350.476h123.678c13.465 0 24.381 10.916 24.381 24.381v195.048c0 13.465-10.916 24.381-24.381 24.381h-123.853c-13.465 0-24.381-10.916-24.381-24.381v0c0-13.465 10.916-24.381 24.381-24.381h99.472l-0.002-146.286h-99.295c-13.534 0-24.476-11.022-24.381-24.554v0c0.095-13.398 10.983-24.208 24.381-24.208z" /></g>
      </IconBase>
    )
  }
}
