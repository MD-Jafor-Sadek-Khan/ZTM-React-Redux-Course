import "./directoryItem-item.styles.jsx"
import {
  BackgroundImageStyled,
  DirectoryItemBodyContainerStyled,
  DirectoryItemContainerStyled,
} from "./directoryItem-item.styles.jsx"

const DirectoryItem = ({ category: { title, imageUrl } }) => {
  return (
    <DirectoryItemContainerStyled>
      <BackgroundImageStyled imageurl={imageUrl} />
      <DirectoryItemBodyContainerStyled>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBodyContainerStyled>
    </DirectoryItemContainerStyled>
  )
}

export default DirectoryItem
