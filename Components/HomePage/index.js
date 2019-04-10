import React, { Component } from "react";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import * as actionCreators from "../../store/actions/index";
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
  Right,
  Spinner,
  TextInput,
  View
} from "native-base";
class HomePage extends Component {
  componentDidMount = async () => {
    await this.props.onfetchCartList();
  };
  render() {
    return (
      <View>
        <Button
          button
          onPress={() => this.props.navigation.navigate("ProductsList")}
        >
          <Text> go to list</Text>
        </Button>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.authRoot.user,
    products: state.productsRoot.filteredProducts
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onfetchCartList: () => dispatch(actionCreators.fetchCartList())
  };
};
export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage)
);
