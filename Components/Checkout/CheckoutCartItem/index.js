import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../../../store/actions/index";

import { withNavigation } from "react-navigation";

import { Thumbnail, Text, Left, Body, Right, ListItem } from "native-base";

class CheckoutCartItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail square source={{ uri: item.product.images[0].image }} />
        </Left>
        <Body>
          <Text>{item.product.name}</Text>
          <Text note numberOfLines={1}>
            Added By {item.product.added_by}
          </Text>
          <Text note numberOfLines={1}>
            subtotal: {item.subtotal} SR
          </Text>
        </Body>
        <Right>
          <Text>Qty:{item.quantity}</Text>
        </Right>
      </ListItem>
    );
  }
}
const mapStateToProps = state => {
  return {
    // user: state.authReducer.user,
    //orders: state.ordersRoot.orders,

    // profile: state.profileRoot.profile,
    loading: state.cartRoot.loading,
    order: state.cartRoot.order
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchAllProducts: () => dispatch(actionCreators.fetchAllProducts()),
    updateItemCart: (itemID, quantity) =>
      dispatch(actionCreators.updateItemCart(itemID, quantity)),
    deleteItemCart: itemID => dispatch(actionCreators.deleteItemCart(itemID))
  };
};

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CheckoutCartItem)
);
