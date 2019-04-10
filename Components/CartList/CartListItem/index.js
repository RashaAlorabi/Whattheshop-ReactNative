import React, { Component } from "react";
import { connect } from "react-redux";

import { Image } from "react-native";

import * as actionCreators from "../../../store/actions/index";

import { withNavigation } from "react-navigation";
import NumericInput from "react-native-numeric-input";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Spinner,
  TextInput
} from "native-base";

class CartListItem extends Component {
  state = {
    quantity: ""
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    let order;
    if (this.props.loading) {
      order = <Spinner />;
    } else {
      order = this.props.order;
    }

    const { item } = this.props;
    return (
      <Card>
        <CardItem button>
          <Image
            source={{ uri: item.product.images[0].image }}
            style={{ height: 200, width: 50, flex: 1 }}
          />
          <Body style={{ padding: 10 }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 19,
                fontWeight: "bold",
                padding: 10
              }}
            >
              {item.product.name}
            </Text>
            <Text style={{ flex: 0.25, flexDirection: "row" }} note>
              Added By {item.product.added_by}
            </Text>
            <Text style={{ flex: 0.25, flexDirection: "row" }}>
              Stock {item.product.stock}
            </Text>
            <Text>Price: {item.product.price}</Text>
            <Text>Quantity: {item.quantity}</Text>
          </Body>
        </CardItem>

        <CardItem>
          <Body
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <NumericInput
              value={item.quantity}
              onChangeText={quantity => this.setState({ quantity })}
            />
            {/* <Button
              transparent
              button
              onPress={() =>
                this.props.addItemToCart(
                  order.id,
                  product.id,
                  this.state.quantity
                )
              }
            >
              <Icon type="AntDesign" name="shoppingcart" />
              <Text
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                Add to cart
              </Text>
            </Button> */}
          </Body>
          <Button transparent>
            <Icon
              iconLeft
              name="trash"
              style={{ color: "red", fontSize: 21 }}
              onPress={() => this.props.deleteItemCart(item.id)}
            />
          </Button>
          <Button transparent>
            <Icon
              iconLeft
              name="edit"
              type="AntDesign"
              style={{ color: "gray", fontSize: 21 }}
              onPress={() =>
                this.props.updateItemCart(item.id, this.state.quantity)
              }
            />
          </Button>
        </CardItem>
      </Card>
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
  )(CartListItem)
);
