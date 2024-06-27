import './index.css'

const WinOrLoseCard = props => {
  const {didYouWin, didYouLose, score, OnClickPlayAgain} = props
  const playAgain = () => {
    OnClickPlayAgain()
  }

  let winOrLose
  if (didYouWin) {
    winOrLose = (
      <div className="win-or-lose-card">
        <img
          className="won-emoji"
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
        />
        <div className="result-score-container">
          <h1 className="you-won-or-lose-heading">You Won</h1>
          <p className="score-title"> Best Score </p>
          <p className="result-score"> {score}/12</p>
          <button onClick={playAgain} type="button" className="play-again-btn">
            Play Again
          </button>
        </div>
      </div>
    )
  }
  if (didYouLose) {
    winOrLose = (
      <div className="win-or-lose-card">
        <img
          className="won-emoji"
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
        />
        <div className="result-score-container">
          <h1 className="you-won-or-lose-heading">You Lose</h1>
          <p className="score-title"> Score </p>
          <p className="result-score"> {score}/12</p>
          <button onClick={playAgain} type="button" className="play-again-btn">
            Play Again
          </button>
        </div>
      </div>
    )
  }

  return winOrLose
}

export default WinOrLoseCard
