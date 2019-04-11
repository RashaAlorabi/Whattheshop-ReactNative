import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../../../store/actions/index";
import { ScrollView, Image } from "react-native";
import { withNavigation } from "react-navigation";
import NumericInput from "react-native-numeric-input";
import Category from "../../Category/index";
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

  render() {
    const { category, products } = this.props;
    const categoryProducts = [...products];

    const productsList = categoryProducts
      .filter(product =>
        product.categories.map(cate => cate.name).includes(category.name)
      )
      .map(cp => <Category key={cp.id} product={cp} />);
    if (this.props.loading) {
      return <Spinner />;
    } else {
      return (
        <View style={{ flex: 1, flexDirection: "row" }}>
          <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, backgroundColor: "white" }}>
              <View
                style={{
                  backgroundColor: "#009973",
                  borderBottomRightRadius: 50,
                  width: 160
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "400",
                    color: "white",
                    paddingLeft: 15,
                    fontFamily: "Gill Sans"
                  }}
                >
                  <Icon
                    name="shop"
                    type="Entypo"
                    style={{ fontSize: 25, color: "white" }}
                  />
                  {category.name}
                </Text>
              </View>

              <View style={{ height: 450, marginTop: 20 }}>
                <ScrollView horizontal={true}>{productsList}</ScrollView>
              </View>
            </View>
          </ScrollView>
        </View>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    loading: state.productsRoot.loading
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
  )(ProductListItem)
);
