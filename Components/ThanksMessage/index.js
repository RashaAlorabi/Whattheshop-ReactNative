import React, { Component } from "react";
import { Image } from "react-native";
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
  Body
} from "native-base";
class index extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "https://media.giphy.com/media/WNiIafJkt1kTxqAT9M/giphy.gif"
                  }}
                />
                <Body>
                  <Text>Thank you for your order</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default index;
