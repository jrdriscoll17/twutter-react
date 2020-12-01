const postReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return { posts: action.payload };
    case 'ADD_POST':
      return { posts: [...state.posts, action.payload] };
    case 'DELETE_POST':
      const newPostArray = state.posts.filter(
        (post) => post.id !== action.payload
      );
      return { posts: newPostArray };
    default:
      return state;
  }
};

export default postReducer;
