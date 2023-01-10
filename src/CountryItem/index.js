import './index.css'

const CountryItem = props => {
  const {country, removeButtonClicked} = props
  const onClickRemove = () => {
    removeButtonClicked(country.id)
  }
  return (
    <li className="item-container">
      <img src={country.imageUrl} alt="thumbnail" className="country-image" />
      <div className="item-button-container">
        <p className="item-name">{country.name}</p>
        <button type="button" className="remove-button" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default CountryItem
