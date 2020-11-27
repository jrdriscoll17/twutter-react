const twitReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_TWITS':
      return { twits: action.payload };
    case 'ADD_TWIT':
      return { twits: [...state.twits, action.payload] };
    case 'DELETE_TWIT':
      const newTwitArray = state.twits.filter(
        (twit) => twit.id !== action.payload
      );
      return { twits: newTwitArray };
    default:
      return state;
  }
};

export default twitReducer;
