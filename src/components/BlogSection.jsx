import axios from "axios";
const BlogSection = () => {
  const fetchPost = () => {
    let formData = new FormData();
    formData.append('action', 'fetch_post')

    axios.post('http://localhost/procity-portal/server/manage_post.php', formData)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }
  fetchPost();

  return (
    <div>
      
      blogSection
    </div>
  )
}

export default BlogSection