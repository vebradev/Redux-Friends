import React from "react";
import { connect } from "react-redux";
import { fetchFriends } from "../actions/actionCreators";
import Friend from "./Friend";

class Friends extends React.Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.friends.map(friend => {
          return (<Friend key={friend.id} friend={friend} />);
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    isLoading: state.friendsReducer.isLoading,
    error: state.friendsReducer.error
  };
};

export default connect(
  mapStateToProps,
  { fetchFriends }
)(Friends);
