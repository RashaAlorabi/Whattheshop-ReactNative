import React, { Component } from "react";
import { Image } from "react-native";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon
} from "native-base";

class ImagesSlide extends Component {
  render() {
    const product = this.props.product;

    return (
      <View style={{ marginBottom: 360 }}>
        <DeckSwiper
          dataSource={product.images}
          renderItem={item => (
            <Card style={{ elevation: 3 }}>
              <CardItem />
              <CardItem cardBody>
                <Image
                  style={{ height: 300, flex: 2 }}
                  source={{ uri: item.image }}
                />
              </CardItem>
              <CardItem />
            </Card>
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.productsRoot.loading
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     // onFetchAllProducts: () => dispatch(actionCreators.fetchAllProducts()),
//     addItemToCart: (orderID, productID, quantity) =>
//       dispatch(actionCreators.addItemToCart(orderID, productID, quantity))
//   };
// };
export default withNavigation(
  connect(
    mapStateToProps,
    null
  )(ImagesSlide)
);
