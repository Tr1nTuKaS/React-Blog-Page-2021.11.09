import { Link } from 'react-router-dom';

function BlogItem({ item }) {

  return (
    <article>
      <h3>{item.title}</h3>
      <Link to={`${item.url}/${item.id}`}>Read more</Link>
    </article>
  );
}

export default BlogItem;