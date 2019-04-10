import React, { Component } from "react";
import { Icon, Left, Right, H3, Button, Badge } from "native-base";
import { withNavigation } from "react-navigation";
import { View, Text, Image } from "react-native";
import { connect } from "react-redux";
class CartButton extends Component {
  render() {
    let itemQuantity = 0;
    this.props.order.cart_items.forEach(
      item => (itemQuantity += item.quantity)
    );

    return (
      <View>
        <Button
          iconRight
          transparent
          onPress={() => this.props.navigation.navigate("CartList")}
        >
          <Text style={{ color: "#009973" }} white>
            {itemQuantity}
          </Text>

          <Icon
            name="cart"
            style={{ color: "purple", fontSize: 25 }}
            type="MaterialCommunityIcons"
          />
        </Button>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  order: state.cartRoot.order
});
export default withNavigation(connect(mapStateToProps)(CartButton));
