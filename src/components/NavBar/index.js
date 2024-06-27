import './index.css'

const NavBar = props => {
  const {currentScore, topScore, youWon, youLose} = props

  return (
    <nav className="nav-bar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
      />
      <h1 className="emoji-game-title"> Emoji Game</h1>

      {youWon === youLose && <p className="score">Score: {currentScore}</p>}
      {youWon === youLose && <p>Top Score: {topScore}</p>}
    </nav>
  )
}

export default NavBar
