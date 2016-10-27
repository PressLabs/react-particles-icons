import React from 'react'
import IconBase from 'react-icon-base'

export default class Mouse extends React.Component {
  render () {
    return (
      <IconBase viewBox="0 0 1024 1024" { ...this.props }>
        <g transform="translate(0,1024)"><path transform="scale(1,-1)" d="M624.385 732.371h-46.767c-22.351 0-36.261 24.385-24.773 43.558 14.864 24.809 42.013 41.448 72.974 41.448h56.098c15.515 0 28.865 11.922 29.594 27.422 0.78 16.546-12.405 30.206-28.781 30.206h-56.912c-70.454 0-129.141-51.349-140.605-118.589-2.352-13.793-14.017-24.044-28.009-24.044h-57.59c-63.654 0-115.255-51.601-115.255-115.255v-368.491c0-125.717 101.912-227.629 227.629-227.629h0.022c125.717 0 227.629 101.912 227.629 227.629v368.491c0 63.654-51.601 115.255-115.255 115.255zM682.013 248.624c0-94.286-77.152-170.888-171.662-169.993-93.605 0.887-168.364 78.551-168.364 172.158v366.326c0 31.826 25.802 57.628 57.628 57.628h54.757c15.914 0 28.814-12.9 28.814-28.814v-20.225c0-8.272-3.245-16.333-9.376-21.885-11.497-10.411-18.72-25.447-18.72-42.179v-47.425c0-16.732 7.223-31.768 18.72-42.177 6.131-5.552 9.376-13.616 9.376-21.885v-29.973c0-15.515 11.922-28.865 27.422-29.594 16.546-0.78 30.206 12.405 30.206 28.781v30.789c0 8.27 3.245 16.333 9.376 21.885 11.495 10.411 18.72 25.447 18.72 42.177v47.425c0 16.73-7.223 31.766-18.72 42.177-6.131 5.552-9.376 13.613-9.376 21.885v20.225c0 15.914 12.9 28.814 28.814 28.814h54.755c31.826 0 57.628-25.802 57.628-57.628v-368.491z" /></g>
      </IconBase>
    )
  }
}
