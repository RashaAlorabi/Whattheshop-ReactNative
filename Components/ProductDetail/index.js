import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
import Carousel, { Pagination } from "react-native-snap-carousel";
import NumericInput from "react-native-numeric-input";
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

class ProductDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("product").name
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

        <View style={{ paddingLeft: 10 }}>
          <Text
            style={{
              fontSize: 19,
              fontWeight: "bold"
            }}
          >
            {product.name}
          </Text>
        </View>
        <View style={{ paddingLeft: 10, paddingTop: 5 }}>
          <Text>Price : {product.price}</Text>
        </View>
        {/* <ListItem>
          <NumericInput
            value={this.state.quantity}
            onChange={quantity => this.setState({ quantity })}
          />
        </ListItem> */}
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
              full
              danger
              button
              onPress={() =>
                this.props.addItemToCart(
                  order.id,
                  product.id,
                  this.state.quantity
                )
              }
            >
              <View>
                <Text>Add to cart</Text>
              </View>
            </Button>
          ) : (
            <Text>out of stock</Text>
          )}
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1
          }}
        />
        <Text>{product.description}</Text>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
