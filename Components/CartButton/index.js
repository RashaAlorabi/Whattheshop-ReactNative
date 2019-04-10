import React, { Component } from "react";
import { Icon } from "native-base";
import { withNavigation } from "react-navigation";
import { View, Text } from "react-native";
import { connect } from "react-redux";
class CartButton extends Component {
  render() {
    let itemQuantity = 0;
    this.props.order.cart_items.forEach(
      item => (itemQuantity += item.quantity)
    );

    return (
      <View>
        <Text>{itemQuantity}</Text>
        <Icon
          onPress={() => this.props.navigation.navigate("CartList")}
          name="shoppingcart"
          type="AntDesign"
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  order: state.cartRoot.order
});
export default withNavigation(connect(mapStateToProps)(CartButton));
