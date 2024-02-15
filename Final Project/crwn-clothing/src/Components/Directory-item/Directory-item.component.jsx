import './directoryItem-item.styles.scss'

const DirectoryItem = ({category:{title, imageUrl}}) => {
  return (
    <div className="directoryItem-container">
      <div className='background-image' style={{'backgroundImage': `url(${imageUrl})`}}/>
      <div className='directoryItem-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default DirectoryItem
