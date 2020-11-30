export default function addPost(post) {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ post }),
    };

    fetch('http://localhost:3000/posts', options)
      .then((r) => r.json())
      .then((post) => {
        dispatch({ type: 'ADD_POST', payload: post });
      });
  };
}
