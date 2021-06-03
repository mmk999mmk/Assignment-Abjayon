import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'

const Result = () => (
  <div
    Style="background-image: url('https://events2017.minigolfsport.com/images/results.jpg');
  background-size: cover;
  height: 100vh;
  padding: 10px;
  text-align: center;
  color:black"
  >
    <h1>{Cookies.get('c1')}/10</h1>
    <Link to="/">
      <button
        type="submit"
        Style="background-color: blue;
  color: white;
  border-radius: 10px;"
      >
        Start Again
      </button>
    </Link>
  </div>
)
export default Result
