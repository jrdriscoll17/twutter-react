export default function deleteList(twit) {
  return (dispatch) => {
    fetch(`http://localhost:3000/twits/${twit}`, {
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then((res) => {
        dispatch({ type: 'DELETE_LIST', payload: twit });
      });
  };
}
