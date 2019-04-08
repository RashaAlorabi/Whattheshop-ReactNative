import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Picker,
  Content,
  Spinner,
  Input
} from "native-base";

//List
import ProductsList from "../../Components/ProductsList/index";

class ProductDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("product").name
      // headerRight: <CartButton />
    };
  };
  state = {
    quantity: ""
  };
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let order;
    // if (this.props.loading) {
    //   order = <Spinner />;
    // } else {
    order = this.props.order;
    // }

    // if (loading) return <Content />;
    const product = this.props.navigation.getParam("product");
    return (
      <Content>
        <List>
          <ListItem>
            <Left>
              <Text>
                {product.name}

                <Text note>{product.price}</Text>
              </Text>
            </Left>
            <Body />
            <Right>
              <Thumbnail bordered source={{}} />
            </Right>
          </ListItem>
          <ListItem>
            <Input
              className="form-control col-5"
              type="text"
              placeholder="quantity"
              name="quantity"
              value={this.state.quantity}
              onChange={this.changeHandler}
            />
          </ListItem>
          <Button
            full
            danger
            button
            onPress={() =>
              this.props.addItemToCart(
                order.id,
                product.id,
                this.state.quantity
              )
            }
          >
            <Text>Add to cart</Text>
          </Button>
          <Text>{product.description}</Text>
        </List>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  products: state.productsRoot,
  loading: state.productsRoot.loading,
  order: state.cartRoot.order
  // loading: state.cartRoot.loading
});

const mapDispatchToProps = dispatch => ({
  addItemToCart: (orderID, productID, quantity) =>
    dispatch(actionCreators.addItemToCart(orderID, productID, quantity))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
