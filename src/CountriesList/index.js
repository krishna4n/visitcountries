import './index.css'

const CountriesList = props => {
  const {country, visitButtonClicked} = props

  const visitClicked = () => {
    visitButtonClicked(country.id)
  }

  return (
    <li className="country-list-item">
      <p className="country-name">{country.name}</p>
      {country.isVisited !== true && (
        <button type="button" className="visit-button" onClick={visitClicked}>
          Visit
        </button>
      )}
      {country.isVisited === true && <p className="visited-text">Visited</p>}
    </li>
  )
}

export default CountriesList
