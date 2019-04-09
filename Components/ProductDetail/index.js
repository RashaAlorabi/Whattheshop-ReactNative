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
  Image
} from "native-base";

//List
import ProductsList from "../../Components/ProductsList/index";
//import ImagesSlide from "../../Components/ProductDetail/ImagesSlide";

class ProductDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("product").name
      // headerRight: <CartButton />
    };
  };
  state = {
    quantity: ""
  };
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // _renderItem({ item, index }) {
  //   return <ImagesSlide data={item} />;
  // }
  // get pagination() {
  //   const { entries, activeSlide } = this.state;
  //   return (
  //     <Pagination
  //       dotsLength={entries.length}
  //       activeDotIndex={activeSlide}
  //       containerStyle={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
  //       dotStyle={{
  //         width: 10,
  //         height: 10,
  //         borderRadius: 5,
  //         marginHorizontal: 8,
  //         backgroundColor: "rgba(255, 255, 255, 0.92)"
  //       }}
  //       inactiveDotStyle={
  //         {
  //           // Define styles for inactive dots here
  //         }
  //       }
  //       inactiveDotOpacity={0.4}
  //       inactiveDotScale={0.6}
  //     />
  //   );
  // }
  render() {
    let order;
    // if (this.props.loading) {
    //   order = <Spinner />;
    // } else {
    order = this.props.order;
    // }

    // if (loading) return <Content />;
    const product = this.props.navigation.getParam("product");
    return (
      <Content>
        <List>
          {/* <View>
          <Carousel
            data={this.state.entries}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({ activeSlide: index })}
          />
          {this.pagination}
          </View> */}
          {/* <ImagesSlide /> */}
          <ListItem>
            <Left>
              {/* <Image
                source={{ uri: product.images[0].image }}
                style={{ height: 200, width: 50, flex: 1 }}
              /> */}
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
              <Text style={{ flex: 1 }}>Price</Text>
              <Text
                style={{
                  fontSize: 19,

                  padding: 5
                }}
              >
                {product.price}
              </Text>
            </Left>
            <Body />
          </ListItem>
          <ListItem>
            <NumericInput
              value={this.state.quantity}
              onChange={quantity => this.setState({ quantity })}
            />
          </ListItem>
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
            <Text>Add to cart</Text>
          </Button>
          <Text
            style={{
              fontSize: 19,
              fontWeight: "bold",
              padding: 5
            }}
          >
            Description{" "}
          </Text>
          <Text
            style={{
              fontSize: 15,

              padding: 5
            }}
          >
            {product.description}
          </Text>
        </List>
      </Content>
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
