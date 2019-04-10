import React, { Component } from "react";
import { connect } from "react-redux";
import { Body, ListItem, Text, Card, CardItem, View } from "native-base";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

class index extends Component {
  render() {
    const { order } = this.props;
    return (
      <ListItem style={{ overflow: "scroll" }}>
        <Card>
          <CardItem header bordered>
            <Text>Order ID: {order.id}</Text>
          </CardItem>
          <CardItem>
            <Text>Products: {order.cart_items.length}</Text>
          </CardItem>
          <CardItem>
            <Text>Total: {order.total}</Text>
          </CardItem>
          <CardItem>
            <Text>Date: {order.order_date}</Text>
          </CardItem>
        </Card>
      </ListItem>
    );
  }
}

export default connect(mapStateToProps)(index);
