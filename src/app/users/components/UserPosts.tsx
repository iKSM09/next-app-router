type Props = {
  promise: Promise<Post[]>;
};

const UserPosts = async ({ promise }: Props) => {
  const posts = await promise;

  return posts.map((post) => {
    return (
      <article key={post.id}>
        <h3 className="text-2xl font-medium">{post.title}</h3>
        <p>{post.body}</p>
        <br />
      </article>
    );
  });
};

export default UserPosts;
