import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component{
  state = {
    textArea: 'https://johnmagnusrobertson.com',
    returnedData: {
      title: '',
      description: ''
    }
  }

  handleTextArea = (e) => {
    const textArea = e.target.value
    this.setState({ textArea })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api', { 
      website: this.state.textArea
    })
      .then(res => {
        const returnedData = { ...this.state.returnedData, ...res.data.data }
        console.log(returnedData)
        this.setState({ returnedData })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    console.log(this.state)
    return (
      <>
        <h1>SEO Scraper</h1>
        <form
          onSubmit={(e) => this.handleOnSubmit(e)}
        >
          <textarea
            onChange={this.handleTextArea}
            name='textArea'
            value={this.state.textArea}
          >
          </textarea>
          <input type='submit'/>
        </form>
        <h2>Title</h2>
        <p>{this.state.returnedData.title}</p>
      </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

document.querySelector('button')