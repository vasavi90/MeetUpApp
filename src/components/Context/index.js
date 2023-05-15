import React from 'react'

const Context = React.createContext({
  inputValue: '',
  onChangeInput: () => {},
  topic: '',
  onChangeTopic: () => {},
  textStatus: true,
  onChangeStatus: () => {},
})

export default Context
