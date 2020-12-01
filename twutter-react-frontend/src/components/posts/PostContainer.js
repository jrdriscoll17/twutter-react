import React, { PureComponent } from 'react';
import Post from './Post';
import Posts from './Posts';
import PostForm from './PostForm';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchPosts from '../../actions/posts/fetchPosts';

class PostContainer extends PureComponent {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <Switch>
        <Route exact path='/posts'>
          <Posts posts={this.props.posts} />
        </Route>
        <Route exact path='/posts/new'>
          <PostForm />
        </Route>
        <Route
          exact
          path='/posts/:id'
          render={(routerProps) => (
            <Post
              {...routerProps}
              post={this.props.posts.find(
                (post) => post.id === parseInt(routerProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
    );
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts,
  };
};

export default connect(mapStateToProps, { fetchPosts })(PostContainer);
