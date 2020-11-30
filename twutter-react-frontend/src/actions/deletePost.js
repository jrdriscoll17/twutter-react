export default function deletePost(post) {
  return (dispatch) => {
    fetch(`http://localhost:3000/posts/${post}`, {
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then((res) => {
        dispatch({ type: 'DELETE_POST', payload: post });
      });
  };
}
