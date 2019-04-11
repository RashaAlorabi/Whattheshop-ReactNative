import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import ProductListItem from "./ProductListItem";
import * as actionCreators from "../../store/actions/index";

import CartButton from "../CartButton";
import { List, Content, Spinner, View, Text, Icon } from "native-base";

import { SearchBar } from "react-native-elements";
import Logo from "../logo";
class ProductsList extends Component {
  state = {
    query: ""
  };
  static navigationOptions = {
    // title: "Products List",
    headerTitle: <Logo />,
    headerRight: <CartButton />
  };
  componentDidMount = () => {
    this.props.onFetchAllProducts();
    this.props.onfetchCategories();
    this.props.onfetchCartList();
  };

  render() {
    const { products, categories, loading } = this.props.productsRoot;
    let productsList;
    if (loading) {
      return <Spinner />;
    }
    productsList = categories.map(category => (
      <ProductListItem
        key={category.name}
        products={products}
        category={category}
      />
    ));

    return (
      <Content>
        <View>
          <SearchBar
            style={{ color: "white" }}
            placeholder="Type Here..."
            value={this.state.query}
            onChangeText={query => this.setState({ query })}
            onSubmitEditing={() =>
              this.props.navigation.navigate("SearchPage", {
                query: this.state.query
              })
            }
            lightTheme
          />
        </View>
        <View
          style={{
            backgroundColor: "gray",
            padding: 10,
            borderBottomRightRadius: 50
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontFamily: "Gill Sans",
              fontWeight: "55",

              padding: 5
            }}
          >
            <Icon
              name="shopping-bag"
              style={{ color: "white", fontSize: 20 }}
              type="FontAwesome"
            />
            Shop By Catagory:
          </Text>
        </View>
        <View>{productsList}</View>
      </Content>
    );
  }
}
const mapStateToProps = state => {
  return {
    productsRoot: state.productsRoot
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onfetchCategories: () => dispatch(actionCreators.fetchCategories()),
    onFetchAllProducts: () => dispatch(actionCreators.fetchAllProducts()),
    onfetchCartList: () => dispatch(actionCreators.fetchCartList())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList);
