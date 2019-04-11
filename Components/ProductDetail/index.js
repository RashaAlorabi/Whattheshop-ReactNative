import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
import Carousel, { Pagination } from "react-native-snap-carousel";
import NumericInput from "react-native-numeric-input";
import { withNavigation } from "react-navigation";
// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Picker,
  Content,
  Spinner,
  Input,
  Image,
  View,
  Icon
} from "native-base";

//List
import ProductsList from "../../Components/ProductsList/index";
import ImagesSlide from "../../Components/ProductDetail/ImagesSlide";
import CartButton from "../CartButton";

import Logo from "../logo";

class ProductDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.getParam("product").name,
      headerTitle: <Logo />,
      headerRight: <CartButton />
    };
  };
  state = {
    quantity: 0
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
    const product = this.props.navigation.getParam("product");
    return (
      <View>
        <ImagesSlide product={product} />

        <View
          style={{
            paddingLeft: 10,
            backgroundColor: "gray",
            width: 100,
            borderBottomRightRadius: 50
          }}
        >
          <Text
            style={{
              fontSize: 19,
              fontWeight: "bold",
              color: "white"
            }}
          >
            {product.name}
          </Text>
        </View>
        <View style={{ paddingLeft: 10, paddingTop: 5 }}>
          <Text>Price : {product.price} SR</Text>
        </View>
        <View style={{ paddingLeft: 10, paddingTop: 5 }}>
          <Text>Stock : {product.stock}</Text>
        </View>
        <View style={{ paddingLeft: 150 }}>
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
        </View>
        {this.state.quantity <= product.stock ? (
          <View style={{ paddingTop: 5, paddingBottom: 5 }}>
            <Button
              full
              style={{ backgroundColor: "#009973", borderRadius: 30 }}
              onPress={() =>
                this.props.addItemToCart(
                  order.id,
                  product.id,
                  this.state.quantity
                )
              }
            >
              <Icon
                name="cart"
                style={{ color: "white", fontSize: 25 }}
                type="MaterialCommunityIcons"
              />
              <Text style={{ color: "white", fontSize: 20 }}>Add to cart</Text>
            </Button>
          </View>
        ) : (
          <Text>out of stock</Text>
        )}

        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1
          }}
        />
        <View
          style={{
            paddingLeft: 10,
            paddingTop: 5,
            paddingBottom: 5,
            backgroundColor: "gray",
            width: 130,
            borderBottomRightRadius: 50
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "white"
            }}
          >
            Description:
          </Text>
        </View>
        <View>
          <Text>{product.description}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  products: state.productsRoot,
  loading: state.productsRoot.loading,
  order: state.cartRoot.order
  // loading: state.cartRoot.loading
});

const mapDispatchToProps = dispatch => ({
  addItemToCart: (orderID, productID, quantity) =>
    dispatch(actionCreators.addItemToCart(orderID, productID, quantity))
});

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductDetail)
);
