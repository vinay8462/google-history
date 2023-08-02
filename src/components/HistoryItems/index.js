import './index.css'

const HistoryItems = props => {
  const {historyDetails, deleteById} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const onDeleteHistory = () => {
    deleteById(id)
  }

  return (
    <li className="search-card">
      <p>{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" />
      <p>{title}</p>
      <p>{domainUrl}</p>
      <button type="button" onClick={onDeleteHistory} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItems
