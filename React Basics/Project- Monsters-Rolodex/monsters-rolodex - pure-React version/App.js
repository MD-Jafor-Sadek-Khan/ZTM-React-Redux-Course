const Card = ({ monster }) => {
  const { name, email, id } = monster
  return React.createElement(
    "div",
    { key: id, className: "card-container" },
    React.createElement(
      "img",
      {
        src: `https://robohash.org/${id}?set=set2&size=180x180`,
        alt: `monster ${name}`,
      },
      null
    ),
    React.createElement("h2", {}, name),
    React.createElement("p", {}, email)
  )
}

const CardList = ({ monsters }) => {
  return React.createElement(
    "div",
    { className: "card-list" },
    monsters.map((monster) => {
      return React.createElement(
        Card,
        { key: monster.id, monster: monster },
        null
      )
    })
  )
}

const SearchBox = ({ placeholder, onChangeHandler, className }) => {
  return React.createElement("input", {
    className: `search-box ${className}`,
    type: "search",
    placeholder: placeholder,
    onChange: onChangeHandler,
  })
}

const App = () => {
  const [searchField, setSearchField] = React.useState("")
  const [monsters, setMonsters] = React.useState([])
  const [filteredMonsters, setFilteredMonsters] = React.useState([])

  const onChangeHandler = (event) => {
    const searchFieldString = event.target.value
    setSearchField(searchFieldString)
  }

  React.useEffect(() => {
    const filteredMonstersList = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    setFilteredMonsters(filteredMonstersList)
  }, [searchField, monsters])

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users))
  }, [])

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { className: "app-title" },
      `Monsters Rolodex`,
      React.createElement("span", { className: "version-name" }, " P"),
      "ure-React Version"
    ),

    React.createElement(SearchBox, {
      placeholder: "Enter Monster Name",
      onChangeHandler: onChangeHandler,
      className: "monster-search-box",
    }),
    React.createElement(CardList, { monsters: filteredMonsters })
  )
}

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))
