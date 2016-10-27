import React from 'react'
import IconBase from 'react-icon-base'

export default class Place extends React.Component {
  render () {
    return (
      <IconBase viewBox="0 0 1024 1024" { ...this.props }>
        <g transform="translate(0,1024)"><path transform="scale(1,-1)" d="M512 903.281c-0.689 0-1.356-0.002-2.046-0.007-168.521-1.077-307.016-137.183-310.875-305.664-0.055-2.42-0.084-4.834-0.084-7.241-0.016-49.826 13.179-98.769 36.837-142.622l225.451-424.761c10.885-20.179 30.802-30.268 50.719-30.268s39.834 10.089 50.719 30.268l225.812 425.43c22.457 41.627 35.414 87.896 36.405 135.181 0.047 2.219 0.071 4.444 0.071 6.676-0.004 172.863-140.151 313.007-313.009 313.007zM767.32 584.806c-0.774-36.979-10.978-74.679-29.508-109.029l-0.093-0.171-0.091-0.173-200.179-377.136c-10.832-20.407-40.071-20.407-50.901 0l-200.001 376.808c-19.589 36.314-29.938 76.166-29.927 115.249 0 1.957 0.024 3.954 0.069 5.933 1.52 66.4 28.681 128.844 76.476 175.833s110.712 73.099 177.156 73.524l1.678 0.009c68.209 0 132.34-26.564 180.576-74.801s74.803-112.367 74.803-180.576c-0.002-1.826-0.020-3.648-0.060-5.47zM512 790.178c-78.846 0-142.992-64.146-142.992-142.992s64.146-142.992 142.992-142.992 142.992 64.146 142.992 142.992c0 78.846-64.146 142.992-142.992 142.992zM512 561.819c-47.146 0-85.364 38.218-85.364 85.364s38.218 85.364 85.364 85.364c47.146 0 85.364-38.22 85.364-85.364s-38.218-85.364-85.364-85.364z" /></g>
      </IconBase>
    )
  }
}
