import React from "react";
import { connect } from "react-redux";

const Protected = props => props.friends.map(friend => <p>{friend.name}</p>);

const mstp = state => {
  return { friends: state.friends };
};
export default connect(mstp)(Protected);
