import React from "react";
import { connect } from "react-redux";

import { Button, Card, CardHeader, CardText, CardBody } from "reactstrap";

const Protected = props => (
  <>
    {props.fetchingFriends && <h2>Loading!</h2>}
    {props.friends.map(friend => (
      <Card className="friendCard">
        <CardBody>
          <CardHeader>{friend.name}</CardHeader>
          <CardText>Age: {friend.age}</CardText>
          <CardText>Email: {friend.email}</CardText>
        </CardBody>
      </Card>
    ))}
    <input name="name" type="text" placeholder="Name" />
    <input name="age" type="number" placeholder="Age" />
    <input name="email" type="email" placeholder="Email" />
    <Button color="primary">Add Friend</Button>
  </>
);

const mstp = state => {
  return { friends: state.friends, fetchingFriends: state.fetchingFriends };
};
export default connect(mstp)(Protected);
