import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, Body, Title, Button, List } from "native-base";
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
      console.log("here");
      setTimeout(this.props.profileDetail, 100);
    }
  };
  render() {
    const { profile } = this.props;
    if (this.props.loading) {
      return <Text>Loading...</Text>;
    } else {
      let orderList = profile.user.orders.map(order => (
        <OrderListItem order={order} />
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
          <ScrollView>
            <List>{orderList}</List>
          </ScrollView>
          <Button onPress={() => this.props.logout(this.props.navigation)}>
            <Text>Logout</Text>
          </Button>
        </Body>
      );
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
