import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Home extends Component {
  Change = event => {
    Cookies.set('level', event.target.value, {expires: 1})
  }

  render() {
    Cookies.set('level', 'easy')
    return (
      <div className="home-container">
        <h1 style={{color: 'orange'}}>Welcome to the assignment</h1>
        <select onChange={this.Change}>
          <option value="easy" selected>
            Easy
          </option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <br />
        <Link to="/quiz">
          <button className="butt" type="submit" onClick={this.click}>
            Click here to start the exam
          </button>
        </Link>
      </div>
    )
  }
}
export default Home
