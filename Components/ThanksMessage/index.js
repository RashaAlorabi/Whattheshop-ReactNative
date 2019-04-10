import React, { Component } from "react";
import { Image, View } from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
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
  render() {
    return (
      <Container>
        <Icon />
        <H1>Thank you for your order</H1>
        <Text note>April 15, 2016</Text>
        <View style={{ flex: 1 }}>
          <ProgressSteps>
            <ProgressStep label="First Step">
              <View style={{ alignItems: "center" }}>
                <Text>This is the content within step 1!</Text>
              </View>
            </ProgressStep>
            <ProgressStep label="Second Step">
              <View style={{ alignItems: "center" }}>
                <Text>This is the content within step 2!</Text>
              </View>
            </ProgressStep>
            <ProgressStep label="Third Step">
              <View style={{ alignItems: "center" }}>
                <Text>This is the content within step 3!</Text>
              </View>
            </ProgressStep>
          </ProgressSteps>
        </View>
      </Container>
    );
  }
}

export default index;
