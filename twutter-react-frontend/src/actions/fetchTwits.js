export default function fetchTwits() {
  return (dispatch) => {
    fetch('http://localhost:3000/twits')
      .then((r) => r.json())
      .then((twits) => {
        dispatch({ type: 'FETCH_TWITS', payload: twits });
      });
  };
}
