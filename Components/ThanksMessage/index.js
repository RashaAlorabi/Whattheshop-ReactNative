import React, { Component } from "react";
import { Image, View } from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
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
class index extends Component {
  static navigationOptions = {
    headerTitle: <Logo />
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

export default index;
