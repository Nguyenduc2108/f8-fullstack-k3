import Post from "./Post";

const getPosts = async (id) => {
  const response = await fetch(`${process.env.SERVER_API}/posts/${id}`);
  return await response.json();
};

const PostDetail = async ({ params }) => {
  const { id } = params;
  const post = await getPosts(id);
  return (
    <div>
      <h1>{post.title}</h1>
      <Post post={post} />
    </div>
  );
};
export default PostDetail;
