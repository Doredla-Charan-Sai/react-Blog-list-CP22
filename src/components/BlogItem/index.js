// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {details} = props
  const {title, description, publishedDate} = details
  return (
    <li className="list-item-cont">
      <div className="tit-pub">
        <h1 className="name-txt bolding">{title}</h1>
        <p className="name-txt">{publishedDate}</p>
      </div>
      <p style={{textAlign: 'left'}} className="name-txt">
        {description}
      </p>
      <hr className="line" />
    </li>
  )
}
export default BlogItem
