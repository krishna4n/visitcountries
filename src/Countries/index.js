import {Component} from 'react'
import CountriesList from '../CountriesList'
import CountryItem from '../CountryItem'
import './index.css'

class Countries extends Component {
  state = {updatedList: []}

  componentDidMount() {
    const {initialCountriesList} = this.props
    this.setState({
      updatedList: initialCountriesList,
    })
  }

  visitButtonClicked = id => {
    this.setState(prevState => ({
      updatedList: prevState.updatedList.map(each => {
        const eachItem = each
        if (each.id === id) {
          eachItem.isVisited = true
        }
        return eachItem
      }),
    }))
  }

  removeButtonClicked = id => {
    this.setState(prevState => ({
      updatedList: prevState.updatedList.map(each => {
        const eachItem = each
        if (each.id === id) {
          eachItem.isVisited = false
        }
        return eachItem
      }),
    }))
  }

  render() {
    const {updatedList} = this.state
    const newList = updatedList.length > 0 ? updatedList : undefined
    const visitedList =
      updatedList.length > 0
        ? updatedList.filter(each => each.isVisited === true)
        : []

    console.log(updatedList)
    return (
      <div className="container">
        <div className="countries-container">
          <h3 className="countries-heading">Countries</h3>
          <ul className="countries-list">
            {newList !== undefined &&
              newList.map(each => (
                <CountriesList
                  country={each}
                  key={each.id}
                  visitButtonClicked={this.visitButtonClicked}
                />
              ))}
          </ul>
        </div>
        <div className="visited-countries-container">
          <h3 className="visited-heading">Visited Countries</h3>
          <ul className="visited-list">
            {visitedList !== undefined &&
              visitedList.map(each => (
                <CountryItem
                  country={each}
                  key={each.id}
                  removeButtonClicked={this.removeButtonClicked}
                />
              ))}
          </ul>
          {visitedList.length === 0 && (
            <div className="no-visited-countries">
              <p className="no-data-text">No Countries Visited Yet</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Countries
