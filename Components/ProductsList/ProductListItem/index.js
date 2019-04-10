import React, { Component } from "react";
import { connect } from "react-redux";

import { Image } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
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
  TextInput,
  View
} from "native-base";

class ProductListItem extends Component {
  state = {
    quantity: 0
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

    const { product } = this.props;
    return (
      <Grid>
        <Col>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Card>
              <CardItem
                button
                onPress={() =>
                  this.props.navigation.navigate("ProductDetail", {
                    product: product
                  })
                }
              >
                {product.images.length ? (
                  <Image
                    source={{ uri: product.images[0].image }}
                    style={{ height: 200, width: 50, flex: 1 }}
                  />
                ) : (
                  <Text />
                )}
              </CardItem>
              <Body>
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: "bold"
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
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: "bold"
                  }}
                >
                  Price {product.price}
                </Text>
              </Body>
              <CardItem>
                <Body
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <NumericInput
                    initValue={this.state.quantity}
                    value={this.state.quantity}
                    onChange={value => this.setState({ quantity: value })}
                    totalWidth={100}
                    totalHeight={50}
                    iconSize={25}
                    minValue={0}
                    maxValue={150}
                    step={1}
                    rounded
                    textColor="green"
                    iconStyle={{ color: "black" }}
                    rightButtonBackgroundColor="white"
                    leftButtonBackgroundColor="white"
                  />
                  {this.state.quantity <= product.stock ? (
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
                    </Button>
                  ) : (
                    <Text>out of stock</Text>
                  )}
                </Body>
              </CardItem>
            </Card>
          </View>
        </Col>
      </Grid>
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
