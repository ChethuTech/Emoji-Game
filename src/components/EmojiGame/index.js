import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {
    topScore: 0,
    currentScore: 0,
    idListOfEmojiList: [],

    youLose: false,
  }

  suffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  OnClickPlayAgain = () => {
    console.log('Play Again Button Triggered')
    const {currentScore, topScore} = this.state

    if (currentScore > topScore) {
      this.setState({
        topScore: currentScore,
        currentScore: 0,
        idListOfEmojiList: [],
        youLose: false,
      })
    } else {
      this.setState({currentScore: 0, idListOfEmojiList: [], youLose: false})
    }
  }

  didYouWin = () => {
    const {emojisList} = this.props
    const totalScore = emojisList.length
    const {idListOfEmojiList} = this.state

    return totalScore === idListOfEmojiList.length
  }

  onEmojiClicked = id => {
    const {idListOfEmojiList} = this.state

    if (!idListOfEmojiList.includes(id)) {
      console.log('id not in the list')

      this.setState(prevState => ({
        currentScore: prevState.currentScore + 1,
        idListOfEmojiList: [...prevState.idListOfEmojiList, id],
      }))
    } else {
      this.setState({youLose: true})
    }
  }

  render() {
    const {currentScore, topScore, youLose} = this.state
    const youWon = this.didYouWin()
    return (
      <div className="bg-container">
        <NavBar
          youWon={youWon}
          youLose={youLose}
          currentScore={currentScore}
          topScore={topScore}
        />

        <div className="bg">
          {!(youWon || youLose) && (
            <ul className="emoji-card-list-container">
              {this.suffledEmojisList().map(eachEmoji => (
                <EmojiCard
                  onEmojiClicked={this.onEmojiClicked}
                  key={eachEmoji.id}
                  eachEmoji={eachEmoji}
                />
              ))}
            </ul>
          )}
          {!(youWon === youLose) && (
            <WinOrLoseCard
              didYouWin={youWon}
              didYouLose={youLose}
              OnClickPlayAgain={this.OnClickPlayAgain}
              score={currentScore}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
