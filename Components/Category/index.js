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
  View,
  List,
  ListItem
} from "native-base";
class Category extends Component {
  state = {
    quantity: 1
  };
  render() {
    const { product } = this.props;
    return (
      <TouchableOpacity
        button
        onPress={() =>
          this.props.navigation.navigate("ProductDetail", {
            product: product
          })
        }
        style={{
          height: 440,
          width: 140,
          marginLeft: 20,
          borderWidth: 0.5,
          borderColor: "#dddddd",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20
        }}
      >
        <View
          style={{
            flex: 2
          }}
        >
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
        <List style={{ color: "gray" }}>
          <View style={{ paddingLeft: 10 }}>
            <Text style={{ fontWeight: "400" }}>{product.name}</Text>
          </View>

          <View style={{ paddingLeft: 10, paddingTop: 7 }}>
            <Text>Price:{product.price} SR</Text>
          </View>

          <View style={{ paddingLeft: 10, paddingTop: 7 }}>
            <Text>Stock:{product.stock}</Text>
          </View>
        </List>

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
            <View>
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
                <Icon
                  type="AntDesign"
                  name="shoppingcart"
                  style={{ color: "#009973" }}
                />
                <Icon
                  type="MaterialIcons"
                  name="favorite-border"
                  style={{ color: "#009973" }}
                />
              </Button>
              <View style={{ backgroundColor: "lightgreen", borderRadius: 30 }}>
                <Text style={{ color: "white", fontSize: 11 }}> In Stock</Text>
              </View>
            </View>
          ) : (
            <View style={{ backgroundColor: "lightcoral", borderRadius: 30 }}>
              <Text style={{ color: "white", fontSize: 10 }}>
                {" "}
                Out of stock
              </Text>
            </View>
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
