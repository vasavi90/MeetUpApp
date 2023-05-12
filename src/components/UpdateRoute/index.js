import {Component} from 'react'
import Context from '../Context'
import HomeRoute from '../HomeRoute'
import RegisterRoute from '../RegisterRoute'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]


class Update  extends Component{ 
    state = {
    inputValue: '',
    topic: topicsList[0].id,
  }

  onChangeInput = inputValue => {
    this.setState({
      inputValue,
    })
  }

  onChangeTopic = topic => {
    this.setState({
      topic,
    })
  }

  render(){
      return(
          <Context.Provider
        value={{
          inputValue,
          onChangeInput: this.onChangeInput,
          topic,
          onChangeTopic: this.onChangeTopic,
        }}
      >
      <HomeRoute/>
      

      <Context.Provider/>
      )
  }
}