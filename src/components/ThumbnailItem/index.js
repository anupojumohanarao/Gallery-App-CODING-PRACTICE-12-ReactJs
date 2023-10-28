// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {totalDetails, mainAccess, mainActiveId} = props
  const {thumbnailUrl, thumbnailAltText, id} = totalDetails

  const mainThumbnailImage = mainAccess ? `thumbnail-active` : `thumbnail`

  const onClickImage = () => {
    mainActiveId(id)
  }

  return (
    <li className="list-container">
      <button type="button" className="main-button" onClick={onClickImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={mainThumbnailImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
