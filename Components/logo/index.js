import React, { Component } from "react";
import { Icon, Left, Right, H3, Button, Badge } from "native-base";
import { withNavigation } from "react-navigation";
import { View, Text, Image } from "react-native";

class logo extends Component {
  render() {
    return (
      <View>
        <Image
          source={{
            uri: "https://media.giphy.com/media/gk2o86CX5blT8mk5In/giphy.gif"
          }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 40 / 2,
            marginLeft: 40
          }}
        />
        <Text style={{ fontFamily: "Thonburi", color: "gray", fontSize: 13 }}>
          MADE BY SAUDIES
        </Text>
        <Text
          note
          style={{
            fontFamily: "Thonburi",
            color: "#009973",
            fontSize: 10,
            marginLeft: 9
          }}
        >
          HandMade With <Icon />
          <Icon
            name="heart"
            style={{ color: "purple", fontSize: 10 }}
            type="Foundation"
          />
        </Text>
        {/* <Text>HANDMADE WITH LOVE</Text> */}
      </View>
    );
  }
}

export default logo;
