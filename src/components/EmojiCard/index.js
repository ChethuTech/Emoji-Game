// Write your code here.
import './index.css'

const EmojiCard = prop => {
  const {eachEmoji, onEmojiClicked} = prop
  const {id, emojiName, emojiUrl} = eachEmoji
  const emojiClick = () => {
    onEmojiClicked(id)
  }
  return (
    <li className="emoji-list-item-container">
      <button onClick={emojiClick} type="button" className="emoji-btn">
        <img className="emoji-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
