import React, { Component } from "react";
import { connect } from "react-redux";

// Components

import * as actionCreators from "../../store/actions/index";

import {
  Card,
  CardItem,
  List,
  Content,
  Spinner,
  H2,
  Button,
  Text,
  ListItem,
  Left,
  Right,
  Radio,
  CheckBox,
  Body,
  Container,
  Footer,
  FooterTab,
  H3,
  View
} from "native-base";
import CartButton from "../CartButton";
import CheckoutCartItem from "../Checkout/CheckoutCartItem/index";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import Logo from "../logo";
import { ScrollView } from "react-native-gesture-handler";
class Checkout extends Component {
  static navigationOptions = {
    title: "Order Summary",
    headerRight: <CartButton />,
    headerTitle: <Logo />
  };
  componentDidMount = () => {
    this.props.onfetchCartList();
  };

  render() {
    const { order, loading } = this.props.cartRoot;
    let cartsList;
    if (loading) {
      return <Spinner />;
    }
    cartsList = order.cart_items.map(item => (
      <CheckoutCartItem key={item.id} item={item} />
    ));

    const progressStepsStyle = {
      activeStepIconBorderColor: "#686868",
      activeLabelColor: "Black",
      activeStepNumColor: "white",
      activeStepIconColor: "#686868",
      completedStepIconColor: "#686868",
      completedProgressBarColor: "#686868",
      completedCheckColor: "#4bb543"
    };
    const buttonTextStyle = {
      color: "#686868",
      fontWeight: "bold"
    };
    return (
      <Container style={{ margin: 10 }}>
        <View style={{ marginBottom: 70 }}>
          <ProgressSteps {...progressStepsStyle}>
            <ProgressStep
              label="First Step"
              nextBtnTextStyle={buttonTextStyle}
              previousBtnTextStyle={buttonTextStyle}
              centerContainer
            />
            <ProgressStep
              label="Second Step"
              nextBtnTextStyle={buttonTextStyle}
              previousBtnTextStyle={buttonTextStyle}
              centerContainer
            >
              <View style={{ alignItems: "center" }}>
                <Text>Billing Information</Text>
              </View>
            </ProgressStep>
          </ProgressSteps>
        </View>
        <ScrollView>
          <Card>
            <CardItem header bordered style={{ backgroundColor: "#009973" }}>
              <Text style={{ color: "white" }}>Delivery Options: </Text>
            </CardItem>
            <CardItem>
              <Body>
                <ListItem>
                  <CheckBox checked={true} color="green" />
                  <Text>Standard : Free</Text>
                </ListItem>
                <ListItem>
                  <CheckBox checked={false} color="green" />
                  <Text>Next day delievery: 3.45 SR</Text>
                </ListItem>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered style={{ backgroundColor: "#009973" }}>
              <Text style={{ color: "white" }}>Payment: </Text>
            </CardItem>
            <CardItem>
              <Body>
                <ListItem>
                  <CheckBox checked={true} color="green" />

                  <Text>Paypal</Text>
                </ListItem>
                <ListItem>
                  <CheckBox checked={false} color="green" />

                  <Text>Credit / Debit card</Text>
                </ListItem>
                <ListItem>
                  <CheckBox checked={false} color="green" />

                  <Text>Pay when you get the package</Text>
                </ListItem>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered style={{ backgroundColor: "#009973" }}>
              <Text style={{ color: "white" }}>Order Summary: </Text>
            </CardItem>

            <List>{cartsList}</List>
          </Card>
          <Footer>
            <FooterTab>
              <Body>
                <H3 style={{ fontFamily: "Thonburi" }}>
                  Total: {order.total} SR
                </H3>
              </Body>
              <Body>
                <Button
                  button
                  full
                  style={{ backgroundColor: "purple" }}
                  onPress={() =>
                    this.props.onCheckout(order.id, this.props.navigation)
                  }
                >
                  <Text> Place Order</Text>
                </Button>
              </Body>
            </FooterTab>
          </Footer>
        </ScrollView>
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
    onCheckout: (orderID, navigation) =>
      dispatch(actionCreators.checkout(orderID, navigation)),
    onfetchCartList: () => dispatch(actionCreators.fetchCartList())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
