import React from 'react'
import IconBase from 'react-icon-base'

export default class Caution extends React.Component {
  render () {
    return (
      <IconBase viewBox="0 0 1024 1024" { ...this.props }>
        <g transform="translate(0,1024)"><path transform="scale(1,-1)" d="M961.667 72.227l-400.404 800.808c-10.149 20.296-29.705 30.445-49.263 30.445s-39.114-10.149-49.263-30.445l-400.404-800.808c-18.31-36.62 8.321-79.708 49.263-79.708h800.808c40.942 0 67.573 43.088 49.263 79.708zM136.573 91.847l349.656 699.308c10.619 21.238 40.925 21.238 51.544 0l349.654-699.308c9.579-19.159-4.353-41.7-25.773-41.7h-699.308c-21.42 0-35.352 22.541-25.773 41.7zM483.186 590.276v-284.55c0-15.914 12.9-28.814 28.814-28.814s28.814 12.9 28.814 28.814v284.55c0 15.914-12.9 28.814-28.814 28.814s-28.814-12.902-28.814-28.814zM540.814 192.264c0-15.913-12.9-28.814-28.814-28.814s-28.814 12.9-28.814 28.814c0 15.913 12.9 28.814 28.814 28.814s28.814-12.9 28.814-28.814z" /></g>
      </IconBase>
    )
  }
}
