import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, Body, Title, Button, List, Spinner, Icon } from "native-base";
import * as actionCreators from "../../store/actions";
import OrderListItem from "./OrderListItem";
import { ScrollView } from "react-native-gesture-handler";
import { StyleSheet, View, Image } from "react-native";

import CartButton from "../CartButton";
import Logo from "../logo";

function mapStateToProps(state) {
  return {
    profile: state.profileRoot.profile,
    loading: state.profileRoot.loading,
    user: state.authRoot.user
  };
}
function mapDispatchToProps(dispatch) {
  return {
    logout: navigation => dispatch(actionCreators.logout(navigation)),
    profileDetail: () => dispatch(actionCreators.profile())
  };
}
class index extends Component {
  static navigationOptions = {
    // title: "Products List",
    headerTitle: <Logo />,
    headerRight: <CartButton />
  };
  componentDidMount = () => {
    if (this.props.user) {
      setTimeout(this.props.profileDetail, 100);
    }
  };
  render() {
    const { profile } = this.props;
    if (this.props.loading) {
      return <Text>Loading...</Text>;
    } else {
      let orderList;
      if (profile.user) {
        orderList = profile.user.orders.map(order => (
          <OrderListItem key={order.id} order={order} />
        ));

        return (
          <View style={styles.container}>
            <View style={styles.header} />
            <Button
              transparent
              onPress={() => this.props.logout(this.props.navigation)}
            >
              <Icon
                name="logout"
                style={{ color: "red", fontSize: 20 }}
                type="MaterialCommunityIcons"
              />
            </Button>

            <Image
              style={styles.avatar}
              source={{
                uri: "https://bootdey.com/img/Content/avatar/avatar6.png"
              }}
            />

            <View style={styles.body}>
              <View style={styles.bodyContent}>
                <Text style={styles.name}>@{profile.user.username}</Text>

                <Text style={styles.info}>
                  {profile.user.first_name} {profile.user.last_name}
                </Text>
                <Text style={styles.description}>{profile.user.email}</Text>
              </View>
            </View>
            <Button
              transparent
              style={{ marginLeft: 370 }}
              onPress={() => this.props.navigation.navigate("UpdateProfile")}
            >
              <Icon
                name="edit"
                style={{ color: "gray", fontSize: 20 }}
                type="AntDesign"
              />
            </Button>
            <View style={{ backgroundColor: "#009973", padding: 10 }}>
              <Text
                style={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: 15,
                  fontWeight: "600"
                }}
              >
                <Icon
                  name="history"
                  style={{ color: "white", fontSize: 20 }}
                  type="FontAwesome5"
                />{" "}
                Order History: {orderList.length} Orders
              </Text>
            </View>
            <ScrollView>
              <List>{orderList}</List>
            </ScrollView>
          </View>
        );
      } else {
        return <Spinner />;
      }
    }
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "lightgray",
    height: 220
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    alignSelf: "center",
    position: "absolute",
    marginTop: 130
  },
  name: {
    fontSize: 22,
    color: "#009973",
    fontWeight: "600"
  },
  body: {},
  bodyContent: {
    alignItems: "center",
    padding: 30
  },
  name: {
    fontSize: 28,
    color: "#009973",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "gray",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "gray",
    marginTop: 10,
    textAlign: "center"
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF"
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
