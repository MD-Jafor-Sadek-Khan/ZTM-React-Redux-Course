import DirectoryItem from "../Directory-item/Directory-item.component"
import "./directory.styles.jsx"
import { DirectoryContainer } from "./directory.styles.jsx"

const Directory = ({categories}) => {


  return (
    <DirectoryContainer>
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />
      })}
    </DirectoryContainer>
  )
}

export default Directory
