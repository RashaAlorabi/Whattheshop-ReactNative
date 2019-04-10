import React, { Component } from "react";
import { connect } from "react-redux";
import Category from "../Category";
import { Content, View } from "native-base";
import { SearchBar } from "react-native-elements";
import Logo from "../logo";
import CartButton from "../CartButton";
class index extends Component {
  static navigationOptions = {
    // title: "Products List",
    headerTitle: <Logo />,
    headerRight: <CartButton />
  };
  state = {
    query: this.props.navigation.getParam("query")
  };
  componentDidMount = () => {
    this.setState({ query: this.props.navigation.getParam("query") });
  };
  render() {
    const { products, loading } = this.props.productsRoot;
    let productsList;
    if (loading) {
      return <Spinner />;
    }
    productsList = products
      .filter(product => product.name.includes(this.state.query))
      .map(product => <Category key={product.id} product={product} />);

    return (
      <Content>
        <View>
          <SearchBar
            style={{ color: "white" }}
            placeholder="Type Here..."
            value={this.state.query}
            onChangeText={query => this.setState({ query })}
            onSubmitEditing={this.search}
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
)(index);
