export default function fetchPosts() {
  return (dispatch) => {
    fetch('http://localhost:3000/posts')
      .then((r) => r.json())
      .then((posts) => {
        dispatch({ type: 'FETCH_POSTS', payload: posts });
      });
  };
}
