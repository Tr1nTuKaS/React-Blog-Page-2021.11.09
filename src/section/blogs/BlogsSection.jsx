
import { useState, useEffect } from 'react';
import BlogItem from '../../component/blog-item/BlogItem';


function BlogsSection() {
  // console.log(JSON.stringify(blogDataArr));
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const resp = await fetch('/db/post.json');
    const data = await resp.json();
    setPosts(data);
  }

  return (
    <section className='container'>
      <h2>Our blogs</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
        aspernatur repudiandae nobis earum voluptate id adipisci nostrum
        mollitia, ipsam, asperiores, soluta dolorem facere exercitationem
        laborum. Magni mollitia laudantium vel tempore.
      </p>
      <div>
        {posts.map((postObj) => (
          <BlogItem key={postObj.id} item={postObj} />
        ))}
      </div>
    </section>
  );
}

export default BlogsSection;