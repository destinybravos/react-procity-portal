import axios from "axios";
import { useState, useEffect } from "react";
const BlogSection = () => {
  const baseUrl =  'http://localhost/procity-portal';
  const [posts, setPost] = useState([]);
  const [categories, setSetCategories] = useState([]);
  const [activeCateory, setActiveCateory] = useState('all');

  const fetchPost = async (category = 'all') => {
    let formData = new FormData();
    formData.append('action', 'fetch_post')
    formData.append('category', category)

    await axios.post(`${baseUrl}/server/manage_post.php`, formData)
    .then((response) => {
      setPost(response.data.posts);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }

  const fetchCatgories = async () => {
    let formData = new FormData();
    formData.append('action', 'fetch_post');

    await axios.post(`${baseUrl}/server/fetch_categories.php`, formData)
    .then((response) => {
      setSetCategories(response.data.categories);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }

  const setActiveCaategory = (category) => {
    setActiveCateory(category);
    fetchPost(category);
  }
  
  useEffect(() => {
    fetchCatgories();
    fetchPost();
  }, [])


  return (
    <div>
      <section className="py-20">
          <aside className="max-w-6xl mx-auto">
              {/* Display All Categories  */}
              <h2 className="mb-2">
                  Blog Categories
              </h2>
              <div id="div_cats" className="flex gap-2 overflow-x-auto w-full">
                {/* Default Button for All categories */}
                <button onClick={() => setActiveCaategory('all')} className={`hover:bg-primary hover:text-white ${(activeCateory == 'all') ? 'bg-primary text-white' : 'border-primary border text-primary'} py-1 px-3 text-xs rounded-md italic`}>
                    All
                </button>
                {/* Loop throgh all available categories */}
                {categories && categories.map((cat) => (
                  <button key={cat.id} onClick={() => setActiveCaategory(cat.category)} className={`hover:bg-primary hover:text-white ${activeCateory == cat.category ? 'bg-primary text-white' : 'border-primary border text-primary'} py-1 px-3 text-xs rounded-md italic`}>
                      {cat.category}
                  </button>
                ))}
              </div>

              {/* <!-- display all fetured posts --> */}
              <div id="featured_posts" className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
                { (posts && posts.length > 0) && posts.map((post) => (
                                      <aside className="rounded-lg shadow bg-white" key={post.id}>
                                        <div className="h-44 bg-slate-300 flex justify-center items-center rounded-t-lg">
                                            <img src={`${baseUrl}/public/images/blogs/${post.image}`} alt="Image" className="h-full min-w-full flex justify-center items-center" />
                                        </div>
                                        <div className="py-3 px-4">
                                            <h1 className="mb-2 text-lg font-bold">{post.title}</h1>
                                            <p className="mb-2 text-small line-clamp-3 max-h-[200px] overflow-y-hidden">
                                                {post.body}
                                            </p>
                                            <p className="mb-2">
                                                <a href="blogpost.php?post_id=${post.id}" className="hover:bg-primary border-primary border text-primary hover:text-white py-1 px-3 text-xs rounded-md italic">
                                                    Read More
                                                </a>
                                            </p>
                                            <small className="flex justify-between">
                                                <div>
                                                    Posted By: {post.author.uname}
                                                </div>
                                                <div>
                                                    Posted On:  {(post.posted_on)}
                                                </div>
                                            </small>
                                        </div>
                                    </aside>
                                ))}
              </div>
          </aside>
      </section>
    </div>
  )
}

export default BlogSection