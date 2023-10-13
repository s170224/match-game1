import './index.css'

const MatchGameItems = props => {
  const {eachItemMatchGame, updateScoreMatchItem} = props
  const {id, thumbnailUrl, imageUrl} = eachItemMatchGame

  const updateScoreMatchItem1 = () => {
    updateScoreMatchItem(id)
    console.log('click', id)
  }

  return (
    <li className="li-con">
      <button className="imageButton" onClick={updateScoreMatchItem1}>
        <img src={imageUrl} alt={id} className="listImage1" />
      </button>
    </li>
  )
}

export default MatchGameItems
