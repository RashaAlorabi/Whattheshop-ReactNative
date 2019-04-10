import React, { Component } from "react";
import { connect } from "react-redux";

import { Image, View } from "react-native";

import * as actionCreators from "../../../store/actions/index";

import { withNavigation } from "react-navigation";
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage
} from "react-native-material-cards";
import NumericInput from "react-native-numeric-input";
import {
  Container,
  Header,
  Content,
  // Card,
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
        <CardItem>
          <Image
            source={{ uri: "http://0.0.0.0:80" + item.product.images[0].image }}
            style={{ width: 80, height: 160 }}
          />
          <Body style={{ marginLeft: 10 }}>
            <CardItem>
              <Text>{item.product.name}</Text>
            </CardItem>
            <CardItem>
              <Text>Price: {item.product.stock}</Text>
            </CardItem>

            <CardItem>
              <Text style={{ marginRight: 5 }}>Quantity: {item.quantity}</Text>

              <NumericInput
                initValue={item.quantity}
                onChange={quantity => this.setState({ quantity })}
                totalWidth={90}
                totalHieght={40}
              />
            </CardItem>
            <CardItem>
              <Text strong>Subtotal: {item.subtotal} SR</Text>
            </CardItem>
          </Body>
          {this.state.quantity <= item.product.stock ? (
            <Icon
              name="edit"
              type="AntDesign"
              style={{ color: "gray", fontSize: 21, marginTop: 130 }}
              onPress={() =>
                this.props.updateItemCart(item.id, this.state.quantity)
              }
            />
          ) : (
            <View>
              <Text>out of stock</Text>
            </View>
          )}
          <Icon
            name="trash"
            style={{ color: "red", fontSize: 21, marginTop: 130 }}
            onPress={() => this.props.deleteItemCart(item.id)}
          />
        </CardItem>
      </Card>

      /* <Card>
        <CardItem button>
         
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
            </Button> */
      // </Body>
      // <Button transparent>
      //   <Icon
      //     iconLeft
      //     name="trash"
      //     style={{ color: "red", fontSize: 21 }}
      //     onPress={() => this.props.deleteItemCart(item.id)}
      //   />
      // </Button>
      //     <Button transparent>
      //       <Icon
      //         iconLeft
      //         name="edit"
      //         type="AntDesign"
      //         style={{ color: "gray", fontSize: 21 }}
      //         onPress={() =>
      //           this.props.updateItemCart(item.id, this.state.quantity)
      //         }
      //       />
      //     </Button>
      //   </CardItem>
      // </Card> */}
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
