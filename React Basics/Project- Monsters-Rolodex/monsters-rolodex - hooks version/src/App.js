import "./App.css"
import React, { Component } from "react"
import CardList from "./Components/Card-List/CardList.component"
import SearchBox from "./Components/Search-Box/SearchBox.component"

class App extends Component {
  constructor() {
    super()

    this.state = {
      searchField: "",
      monsters: [],
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState(() => {
          return {
            monsters: users,
          }
        })
      )
  }

  onChangeHandler = (event) => {
    this.setState(() => {
      return {
        searchField: event.target.value,
      }
    })
  }

  // kala = (dhola) => {
  //   console.log("hi kala");
  // }

  render() {
    const filteredMonstersList = this.state.monsters.filter((monster) => {
      return monster.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase())
    })

    return (
      <>
      <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          placeholder="Enter Monster Name"
          onChangeHandler={this.onChangeHandler}
          className='monster-search-box'
        />
        <CardList monsters={filteredMonstersList} />
      </>
    )
  }
}

export default App
