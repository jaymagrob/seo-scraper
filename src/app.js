import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component{
  state = {
    textArea: 'Add URls'
  }

  handleTextArea = (e) => {
    const textArea = e.target.value
    this.setState({ textArea })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api', { 
    
      websites: this.state.textArea
    
    })
      .then(res => {
        console.log(res)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
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
      </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

document.querySelector('button')