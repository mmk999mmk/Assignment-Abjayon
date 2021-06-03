import {Component} from 'react'
import Cookies from 'js-cookie'

class Question extends Component {
  state = {err: '', c1: 0}

  click = event => {
    const {ans} = this.props
    if (event.target.textContent === ans) {
      this.setState(prevState => ({
        err: 'Correct Answer',
        c1: prevState.c1 + 1,
      }))
    } else {
      this.setState({
        err: 'Wrong Answer',
      })
    }
  }

  render() {
    const {question, ans, wrongAns, count} = this.props
    const {err, c1} = this.state
    Cookies.set('c1', c1)
    return (
      <div Style="background-image:linear-gradient(to right,red,yellow);background-size:cover;height:100vh;padding:10px">
        <h1>
          {count}.{question}
        </h1>
        <p>Please click on option to answer the question</p>
        <ol Style="list-style-type:decimal">
          <li onClick={this.click}>{ans}</li>
          <li onClick={this.click}>{wrongAns[0]}</li>
          <li onClick={this.click}>{wrongAns[1]}</li>
          <li onClick={this.click}>{wrongAns[2]}</li>
        </ol>
        {err === 'Wrong Answer' && <p>Wrong Answer Correct Answer is {ans}</p>}
        {err === 'Correct Answer' && <p>Correct Answer</p>}
      </div>
    )
  }
}
export default Question
