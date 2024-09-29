import {Component} from 'react'

import './index.css'

class Editable extends Component {
  state = {isSaved: false, input: ''}

  onClickBtn = () => {
    this.setState(prevState => ({
      isSaved: !prevState.isSaved,
    }))
  }

  onChangeInput = event => {
    this.setState({input: event.target.value})
  }

  renderText = () => {
    const {isSaved, input} = this.state

    if (isSaved) {
      return <p>{input}</p>
    } else {
      return (
        <input
          type="
          text"
          onChange={this.onChangeInput} value={input}
        />
      )
    }
  }

  render() {
    const {isSaved} = this.state

    return (
      <div className="main-container">
        <div className="internal-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-container">
            {this.renderText()}
            <button className="save-btn" onClick={this.onClickBtn}>
              {isSaved ? 'Edit' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Editable
