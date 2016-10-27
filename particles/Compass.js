import React from 'react'
import IconBase from 'react-icon-base'

export default class Compass extends React.Component {
  render () {
    return (
      <IconBase viewBox="0 0 1024 1024" { ...this.props }>
        <g transform="translate(0,1024)"><path transform="scale(1,-1)" d="M822.782 33.103l-120.91 266.001c-1.334 2.935 0.811 6.268 4.036 6.268h62.187c16.375 0 29.561 13.66 28.781 30.206-0.729 15.497-14.081 27.422-29.596 27.422h-88.742c-3.478 0-6.632 2.032-8.070 5.198l-83.937 184.659c-1.598 3.518-0.705 7.636 2.15 10.24 24.177 22.056 38.819 54.383 36.986 90.088-2.447 47.685-34.805 88.097-78.688 102.331-3.666 1.188-6.166 4.573-6.166 8.427v110.073c0 15.515-11.922 28.865-27.422 29.594-16.546 0.78-30.206-12.405-30.206-28.781v-110.902c0-3.852-2.496-7.241-6.162-8.423-45.745-14.759-78.844-57.661-78.844-108.316 0-33.329 14.334-63.302 37.165-84.117 2.846-2.595 3.717-6.711 2.123-10.218l-83.935-184.659c-1.438-3.165-4.595-5.198-8.070-5.198h-88.742c-15.515 0-28.865-11.922-29.596-27.422-0.78-16.546 12.405-30.206 28.781-30.206h62.187c3.225 0 5.37-3.331 4.036-6.268l-120.91-265.998c-6.585-14.489-0.18-31.571 14.309-38.156 14.491-6.585 31.569-0.18 38.154 14.307l132.236 290.92c1.438 3.165 4.595 5.198 8.070 5.198h84.766c2.449 0 4.433-1.984 4.433-4.433v-22.849c0-15.515 11.922-28.865 27.422-29.596 16.546-0.78 30.206 12.405 30.206 28.781v23.665c0 2.449 1.984 4.433 4.433 4.433h84.766c3.478 0 6.632-2.032 8.070-5.198l132.236-290.92c4.83-10.619 15.296-16.896 26.249-16.896 3.987 0 8.039 0.831 11.907 2.589 14.487 6.587 20.892 23.669 14.307 38.156zM512 704.1c31.431 0 56.91-25.48 56.91-56.91 0-31.431-25.48-56.91-56.91-56.91-31.431 0-56.91 25.48-56.91 56.91s25.478 56.91 56.91 56.91zM602.642 362.999h-57.395c-2.449 0-4.433 1.986-4.433 4.433v22.847c0 15.515-11.922 28.865-27.422 29.594-16.546 0.78-30.206-12.405-30.206-28.781v-23.663c0-2.447-1.984-4.433-4.433-4.433h-57.395c-3.225 0-5.37 3.331-4.036 6.268l73.959 162.712c0.822 1.809 2.744 2.819 4.712 2.54 5.231-0.745 10.57-1.148 16.007-1.148s10.776 0.403 16.007 1.146c1.968 0.279 3.888-0.731 4.712-2.54l73.961-162.712c1.332-2.932-0.816-6.264-4.038-6.264z" /></g>
      </IconBase>
    )
  }
}
