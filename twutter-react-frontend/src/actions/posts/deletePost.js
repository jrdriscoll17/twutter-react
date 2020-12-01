export default function deletePost(postID) {
  return (dispatch) => {
    fetch(`http://localhost:3000/posts/${postID}`, {
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then((res) => {
        dispatch({ type: 'DELETE_POST', payload: postID });
      });
  };
}
