import './index.css'

const GameItems = props => {
  const {eachgame, updateTabId} = props
  const {tabId, displayText} = eachgame

  const updateTabIdBUtton = () => {
    updateTabId(tabId)
  }

  return (
    <li>
      <button type="button" onClick={updateTabIdBUtton} className="fruitButton">
        {displayText}
      </button>
    </li>
  )
}

export default GameItems
