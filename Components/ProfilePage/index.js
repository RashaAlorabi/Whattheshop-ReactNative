import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, Body, Title, Button, List, Spinner } from "native-base";
import * as actionCreators from "../../store/actions";
import OrderListItem from "./OrderListItem";
import { ScrollView } from "react-native-gesture-handler";
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
          <Body>
            <Title>
              <Text>Profile for {profile.user.username}</Text>
            </Title>
            <Text>
              {profile.user.first_name} {profile.user.last_name}
            </Text>
            <Text>{profile.user.email}</Text>
            <Button
              style={{ display: "block" }}
              onPress={() => this.props.logout(this.props.navigation)}
            >
              <Text>Logout</Text>
            </Button>
            <Button
              style={{ display: "block" }}
              onPress={() => this.props.navigation.navigate("UpdateProfile")}
            >
              <Text>Update</Text>
            </Button>
            <ScrollView>
              <List>{orderList}</List>
            </ScrollView>
          </Body>
        );
      } else {
        return <Spinner />;
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
