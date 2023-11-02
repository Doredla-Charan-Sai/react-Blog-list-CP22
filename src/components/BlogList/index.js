// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {listDetails} = props
  return (
    <ul className="blog-list-cont">
      {listDetails.map(eachItem => (
        <BlogItem key={eachItem.id} details={eachItem} />
      ))}
    </ul>
  )
}
export default BlogList
