import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import ProductListItem from "./ProductListItem";
import * as actionCreators from "../../store/actions/index";


import CartButton from "../CartButton";
import { List, Content, Spinner, View } from "native-base";
import { SearchBar } from "react-native-elements";

class ProductsList extends Component {
  static navigationOptions = {
    title: "Products List",
    headerRight: <CartButton />
  };
  componentDidMount = () => {
    this.props.onFetchAllProducts();
    // this.props.onfetchCartList();
  };
  render() {
    const { products, loading } = this.props.productsRoot;
    let productsList;
    if (loading) {
      return <Spinner />;
    }
    productsList = products.map(product => (
      <ProductListItem key={product.id} product={product} />
    ));

    return (
      <Content>
        <View>
          <SearchBar
            placeholder="Type Here..."
            // onChangeText={this.updateSearch}
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
    onFetchAllProducts: () => dispatch(actionCreators.fetchAllProducts()),
    onfetchCartList: () => dispatch(actionCreators.fetchCartList())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList);
