import React from 'react'

const Context = React.createContext({
  inputValue: '',
  onChangeInput: () => {},
  topic: '',
  onChangeTopic: () => {},
})

export default Context
