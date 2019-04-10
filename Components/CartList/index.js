import React, { Component } from "react";
import { connect } from "react-redux";

// Components

import * as actionCreators from "../../store/actions/index";
import { View, Text, ScrollView, Image } from "react-native";
import {
  H3,
  Container,
  List,
  Content,
  Spinner,
  Button,
  Body,
  Icon,
  Footer,
  FooterTab
} from "native-base";
import CartListItem from "../CartList/CartListItem";
import Logo from "../logo";
class CartList extends Component {
  static navigationOptions = {
    // title: "Cart List",
    headerTitle: <Logo />
  };
  componentDidMount = () => {
    this.props.onfetchCartList();
  };
  render() {
    const { order, loading } = this.props.cartRoot;
    let cartList;
    if (loading) {
      return <Spinner />;
    }
    cartList = order.cart_items.map(item => (
      <CartListItem key={item.id} item={item} />
    ));

    return (
      <Container>
        <Content>
          <List>{cartList}</List>
        </Content>
        <Footer>
          <FooterTab>
            <Body>
              <H3 style={{ fontFamily: "Thonburi" }}>
                Total: {order.total} SR
              </H3>
            </Body>

            <Button
              full
              style={{ backgroundColor: "#009973", fontFamily: "Thonburi" }}
              onPress={() => this.props.navigation.navigate("Checkout")}
            >
              <Text style={{ color: "white", fontFamily: "Thonburi" }}>
                Checkout
              </Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    cartRoot: state.cartRoot
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onfetchCartList: () => dispatch(actionCreators.fetchCartList())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartList);
