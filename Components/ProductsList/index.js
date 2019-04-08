import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import ProductListItem from "./ProductListItem";
import * as actionCreators from "../../store/actions/index";

import { List, Content, Spinner } from "native-base";

class ProductsList extends Component {
  static navigationOptions = {
    title: "Products List"
    // headerRight: <CartButton />
  };
  componentDidMount = () => {
    this.props.onFetchAllProducts();
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
        <List>{productsList}</List>
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
    onFetchAllProducts: () => dispatch(actionCreators.fetchAllProducts())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList);
