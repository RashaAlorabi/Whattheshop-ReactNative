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
        <Card style={{ width: 380 }}>
          <CardItem header bordered style={{ backgroundColor: "lightgray" }}>
            <Text style={{ color: "black" }}>Order ID: {order.id}</Text>
          </CardItem>

          <CardItem>
            <Text>Date: {order.order_date}</Text>
          </CardItem>
          <CardItem>
            <Text>Products: {order.cart_items.length}</Text>
          </CardItem>
          <CardItem footer bordered>
            <Text>Total: {order.total} SR</Text>
          </CardItem>
        </Card>
      </ListItem>
    );
  }
}

export default connect(mapStateToProps)(index);
