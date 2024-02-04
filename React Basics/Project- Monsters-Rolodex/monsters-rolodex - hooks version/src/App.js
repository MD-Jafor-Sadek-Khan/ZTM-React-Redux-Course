import "./App.css"
import React, { Component, useEffect } from "react"
import { useState } from "react"
import CardList from "./Components/Card-List/CardList.component"
import SearchBox from "./Components/Search-Box/SearchBox.component"

const App = () => {
  const [searchField, setSearchField] = useState("")
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState([])

  const onChangeHandler = (event) => {
    const searchFieldString = event.target.value
    setSearchField(searchFieldString)
  }

  useEffect(() => {
    const filteredMonstersList = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    setFilteredMonsters(filteredMonstersList)
  }, [searchField, monsters])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users))
  }, [])
  return (
    <>
      <h1 className="app-title">
        Monsters Rolodex (<span className="version-name">H</span>ooks version)
      </h1>
      <SearchBox
        placeholder="Enter Monster Name"
        onChangeHandler={onChangeHandler}
        className="monster-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </>
  )
}

export { App }
