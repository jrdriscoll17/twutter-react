export default function addTwit(twit) {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ twit }),
    };

    fetch('http://localhost:3000/twits', options)
      .then((r) => r.json())
      .then((twit) => {
        dispatch({ type: 'ADD_TWIT', payload: twit });
      });
  };
}
