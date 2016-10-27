import React from 'react'
import IconBase from 'react-icon-base'

export default class Bullseye extends React.Component {
  render () {
    return (
      <IconBase viewBox="0 0 1024 1024" { ...this.props }>
        <g transform="translate(0,1024)"><path transform="scale(1,-1)" d="M881.101 476.814h-89.722c-13.72 0-25.456 9.693-28.231 23.131-20.613 99.807-99.399 178.59-199.203 199.203-13.436 2.775-23.131 14.511-23.131 28.231v89.722c0 15.515-11.922 28.865-27.422 29.594-16.546 0.78-30.206-12.403-30.206-28.778v-90.538c0-13.72-9.693-25.456-23.131-28.231-99.807-20.613-178.59-99.397-199.203-199.203-2.775-13.436-14.511-23.131-28.231-23.131h-89.722c-15.515 0-28.865-11.922-29.594-27.422-0.78-16.546 12.405-30.206 28.781-30.206h90.538c13.72 0 25.456-9.693 28.231-23.131 20.613-99.807 99.397-178.59 199.203-199.203 13.436-2.775 23.131-14.511 23.131-28.231v-89.724c0-15.515 11.922-28.865 27.422-29.594 16.546-0.78 30.206 12.405 30.206 28.781v90.538c0 13.72 9.693 25.456 23.131 28.231 99.807 20.613 178.59 99.397 199.203 199.203 2.775 13.436 14.511 23.131 28.231 23.131h90.538c16.375 0 29.561 13.66 28.781 30.206-0.734 15.5-14.083 27.422-29.598 27.422zM512 249.173c-109.632 0-198.827 89.192-198.827 198.827s89.192 198.827 198.827 198.827c109.634 0 198.827-89.192 198.827-198.827s-89.192-198.827-198.827-198.827zM597.364 448c0-47.145-38.219-85.364-85.364-85.364s-85.364 38.219-85.364 85.364c0 47.145 38.219 85.364 85.364 85.364s85.364-38.219 85.364-85.364z" /></g>
      </IconBase>
    )
  }
}
