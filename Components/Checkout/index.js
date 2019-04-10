import React, { Component } from "react";
import { connect } from "react-redux";

// Components

import * as actionCreators from "../../store/actions/index";

import { List, Content, Spinner, H2, Button, Text } from "native-base";
import CartButton from "../CartButton";
import CheckoutCartItem from "../Checkout/CheckoutCartItem/index";
class Checkout extends Component {
  static navigationOptions = {
    title: "Order Summary",
    headerRight: <CartButton />
  };
  componentDidMount = () => {
    this.props.onfetchCartList();
  };

  render() {
    const { order, loading } = this.props.cartRoot;
    let cartsList;
    if (loading) {
      return <Spinner />;
    }
    cartsList = order.cart_items.map(item => (
      <CheckoutCartItem key={item.id} item={item} />
    ));

    return (
      <Content>
        <H2>Your cart: </H2>
        <List>{cartsList}</List>
        <Button
          button
          full
          success
          onPress={() => this.props.onCheckout(order.id, this.props.navigation)}
        >
          <Text> Place Order</Text>
        </Button>
      </Content>
    );
  }
}
const mapStateToProps = state => {
  return {
    cartRoot: state.cartRoot
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCheckout: (orderID, navigation) =>
      dispatch(actionCreators.checkout(orderID, navigation)),
    onfetchCartList: () => dispatch(actionCreators.fetchCartList())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
