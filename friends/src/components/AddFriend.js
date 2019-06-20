import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addFriend } from "../actions/actionCreators";

export class AddFriend extends React.Component {
  name = React.createRef();
  age = React.createRef();
  email = React.createRef();

  newFriend = () => {
    const name = this.name.current;
    const age = this.age.current;
    const email = this.email.current;

    const friendData = {
      name: name.value,
      age: age.value,
      email: email.value
    };

    this.props.addFriend(friendData);

    name.value = "";
    age.value = "";
    email.value = "";
  };

  render() {
    return (
      <div>
          <input placeholder="name" ref={this.name} type="text" />
          <input placeholder="age" ref={this.age} type="number" />
          <input placeholder="email" ref={this.email} type="text" />
          <button onClick={this.newFriend}>Add Friend</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.friendsReducer.isLoading,
    error: state.friendsReducer.error
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addFriend
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFriend);
