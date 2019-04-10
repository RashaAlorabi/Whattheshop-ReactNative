import React, { Component } from "react";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import { ScrollView, Image, TouchableOpacity } from "react-native";
import NumericInput from "react-native-numeric-input";
import * as actionCreators from "../../store/actions";
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
class Category extends Component {
  state = {
    quantity: 0
  };
  render() {
    const { product } = this.props;
    console.log(product.images[0]);
    return (
      <TouchableOpacity
        button
        onPress={() =>
          this.props.navigation.navigate("ProductDetail", {
            product: product
          })
        }
        style={{
          height: 400,
          width: 130,
          marginLeft: 20,
          borderWidth: 0.5,
          borderColor: "#dddddd"
        }}
      >
        <View style={{ flex: 2 }}>
          {product.images.length ? (
            <Image
              source={{ uri: product.images[0].image }}
              style={{
                height: null,
                width: null,
                flex: 1,
                resizeMode: "cover"
              }}
            />
          ) : (
            <Image source={require("../ProductDetail/Images/channel.jpeg")} />
          )}
        </View>
        <View style={{ paddingLeft: 10, paddingTop: 7 }}>
          <Text>{product.name}</Text>
        </View>
        <View style={{ paddingLeft: 10 }}>
          <Text> Price :{product.price}</Text>
        </View>
        <View style={{ paddingLeft: 10 }}>
          <Text>Stock:{product.stock}</Text>
        </View>
        <View style={{ paddingLeft: 10 }}>
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
                  this.props.order.id,
                  product.id,
                  this.state.quantity
                )
              }
            >
              <Icon type="AntDesign" name="shoppingcart" />
              <Icon type="MaterialIcons" name="favorite-border" />
            </Button>
          ) : (
            <Text>out of stock</Text>
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.productsRoot.loading,
    order: state.cartRoot.order
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // onFetchAllProducts: () => dispatch(actionCreators.fetchAllProducts()),
    addItemToCart: (orderID, productID, quantity) =>
      dispatch(actionCreators.addItemToCart(orderID, productID, quantity))
  };
};
export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Category)
);
