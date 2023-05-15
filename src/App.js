import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Context from './components/Context'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.
import HomeRoute from './components/HomeRoute'
import RegisterRoute from './components/RegisterRoute'
import NotFoundRoute from './components/NotFoundRoute'
// Replace your code here
class App extends Component {
  state = {
    inputValue: '',
    topic: '',
    textStatus: true,
  }

  onChangeUserInput = inputValue => {
    this.setState({
      inputValue,
    })
  }

  onChangeTopic = topic => {
    this.setState({
      topic,
    })
  }

  onChangeStatus = () => {
    this.setState(prevState => ({
      textStatus: !prevState.textStatus,
    }))
  }

  render() {
    const {inputValue, topic, textStatus} = this.state
    return (
      <Context.Provider
        value={{
          inputValue,
          onChangeInput: this.onChangeUserInput,
          topic,
          onChangeTopic: this.onChangeTopic,
          textStatus,
          onChangeStatus: this.onChangeStatus,
        }}
      >
        <Switch>
          <Route exact path="/" component={HomeRoute} />
          <Route path="/register" component={RegisterRoute} />
          <Route component={NotFoundRoute} />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
