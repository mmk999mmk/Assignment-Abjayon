import {Component} from 'react'
import Cookies from 'js-cookie'
import Question from '../Question'

class Quiz extends Component {
  state = {list: [], wrongAns: [], count: 0}

  componentDidMount() {
    this.renderQuestion()
  }

  renderQuestion = async () => {
    const val = Cookies.get('level')
    const url = `https://opentdb.com/api.php?amount=10&category=18&difficulty=${val}&type=multiple`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const result = await response.json()
    const j = result.results
    let c = 0
    const z = setInterval(() => {
      if (c > j.length - 1) {
        const {history} = this.props
        clearInterval(z)
        history.replace('/result')
      } else {
        this.setState({
          list: j[c],
          wrongAns: j[c].incorrect_answers,
          count: c + 1,
        })
        c += 1
      }
    }, 1000)
  }

  render() {
    const {list, wrongAns, count} = this.state
    if (count === 0) {
      return (
        <h1
          Style="background-image: url('https://stangelsrohini.com/images/dummy.jpg');
  background-size: cover;
  height: 100vh;
  padding: 10px;
  text-align: center;
  color:black"
        >
          Loading...We are getting questions as per your choices please dont
          click on anything...
        </h1>
      )
    }
    return (
      <div>
        <Question
          question={list.question}
          ans={list.correct_answer}
          wrongAns={wrongAns}
          count={count}
        />
      </div>
    )
  }
}
export default Quiz
