import { useParams } from "react-router";
import css from './SingleBlogPage.module.css'

function SingleBlogPage() {
  const {blogId} = useParams()
  // get blog id from params

  // https://v5.reactrouter.com/web/guides/quick-start

  // create state for single blog data

  // fill page details with blog data
  return (
    <main style={{ marginTop: '100px' }}>
      <h2>You are Seeing blog with id: {blogId}</h2>

    </main>
  );
}

export default SingleBlogPage;