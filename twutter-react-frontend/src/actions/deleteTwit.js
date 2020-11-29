export default function deleteList(twit) {
  return (dispatch) => {
    const options = {
      method: 'DELETE',
    };

    fetch(`http://localhost:3000/twits/${twit}`, options)
      .then((r) => r.json())
      .then((res) => {
        dispatch({ type: 'DELETE_LIST', payload: twit });
      });
  };
}
