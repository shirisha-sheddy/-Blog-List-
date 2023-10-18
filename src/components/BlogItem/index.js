// Write your JS code here

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <div>
          <p>{publishedDate}</p>
        </div>
      </div>
    </li>
  )
}

export default BlogItem
