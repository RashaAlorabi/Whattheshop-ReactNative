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

class ProductListItem extends Component {
  state = {
    quantity: ""
  };

  // changeHandler = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };
  render() {
    let order;
    if (this.props.loading) {
      order = <Spinner />;
    } else {
      order = this.props.order;
    }
    console.log(order, "product list item printing order");

    const { product } = this.props;
    return (
      <Card>
        <CardItem
          button
          onPress={() =>
            this.props.navigation.navigate("ProductDetail", {
              product: product
            })
          }
        >
          <Image
            source={{ uri: product.images[0].image }}
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
              {product.name}
            </Text>
            <Text style={{ flex: 0.25, flexDirection: "row" }} note>
              Added By {product.added_by}
            </Text>
            <Text style={{ flex: 0.25, flexDirection: "row" }}>
              Stock {product.stock}
            </Text>
            <Text>Price {product.price}</Text>
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
              value={this.state.quantity}
              onChange={quantity => this.setState({ quantity })}
            />
            <Button
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
            </Button>
          </Body>
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
    addItemToCart: (orderID, productID, quantity) =>
      dispatch(actionCreators.addItemToCart(orderID, productID, quantity))
  };
};

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductListItem)
);
