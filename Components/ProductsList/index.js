import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import ProductListItem from "./ProductListItem";
import * as actionCreators from "../../store/actions/index";

import CartButton from "../CartButton";
import { List, Content, Spinner, View } from "native-base";
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
            lightTheme
          />
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
