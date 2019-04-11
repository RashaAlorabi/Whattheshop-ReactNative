import React, { Component } from "react";
import { Image, View } from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { connect } from "react-redux";
import Logo from "../logo";
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
  H1
} from "native-base";
import { Linking } from "expo";
// import console = require("console");
function mapStateToProps(state) {
  return { order: state.cartRoot.order };
}
function mapDispatchToProps(dispatch) {
  return {
    finalCheckout: orderID => dispatch(actionCreators.final_checkout(orderID)),
    checkExpired: () => dispatch(actionCreators.checkForExpiredToken()),
    fetchCartList: () => dispatch(actionCreators.fetchCartList())
  };
}
class index extends Component {
  static navigationOptions = {
    headerTitle: <Logo />
  };
  componentDidMount = async () => {
    console.log("thanks");

    this.props.finalCheckout(this.props.order.id);
  };
  render() {
    return (
      <Container>
        <Icon
          style={{
            marginLeft: 140,
            marginRight: 140,
            marginTop: 140,
            fontSize: 130,
            color: "#009973"
          }}
          type="AntDesign"
          name="checkcircle"
        />
        <H1
          style={{ marginLeft: 50, fontFamily: "Gill Sans", color: "purple" }}
        >
          Thank you for your order
        </H1>
        <Text note style={{ marginLeft: 80 }}>
          Check your Email , for more detail
        </Text>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
