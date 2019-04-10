import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Spinner,
  Body,
  Container,
  Header,
  Content,
  Form,
  Item,
  Label,
  Input,
  Button,
  Text
} from "native-base";
import * as actionCreators from "../../../store/actions";
class index extends Component {
  state = {
    address: this.props.profile.address,
    username: this.props.profile.user.username,
    first_name: this.props.profile.user.first_name,
    last_name: this.props.profile.user.last_name,
    email: this.props.profile.user.email
  };
  handleSubmit = () => {
    this.props.profileUpdate(
      {
        username: this.state.username,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email
      },
      { address: this.state.address },
      this.props.navigation
    );
    //
  };

  render() {
    if (this.props.loading) {
      return <Spinner />;
    } else {
      if (this.props.profile.user) {
        return (
          <Container>
            <Header />
            <Content>
              <Form>
                <Item stackedLabel>
                  <Label>
                    <Text>First Name</Text>
                  </Label>
                  <Input
                    value={this.state.first_name}
                    name="first_name"
                    onChangeText={first_name => this.setState({ first_name })}
                  />
                </Item>
                <Item stackedLabel last>
                  <Label>
                    <Text>Last Name</Text>
                  </Label>
                  <Input
                    value={this.state.last_name}
                    name="last_name"
                    onChangeText={last_name => this.setState({ last_name })}
                  />
                </Item>
                <Item stackedLabel>
                  <Label>
                    <Text>Email</Text>
                  </Label>
                  <Input
                    value={this.state.email}
                    name="email"
                    onChangeText={email => this.setState({ email })}
                  />
                </Item>
                <Item stackedLabel last>
                  <Label>
                    <Text>Address</Text>
                  </Label>
                  <Input
                    value={this.state.address}
                    name="address"
                    onChangeText={address => this.setState({ address })}
                  />
                </Item>
                <Button onPress={this.handleSubmit}>
                  <Text>Update</Text>
                </Button>
              </Form>
            </Content>
          </Container>
        );
      } else {
        return <Spinner />;
      }
    }
  }
}
const mapStateToProps = state => {
  return {
    profile: state.profileRoot.profile,
    loading: state.profileRoot.loading,
    user: state.authRoot.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    profileDetail: () => dispatch(actionCreators.profile()),
    profileUpdate: (userDate, profileDate, navigation) =>
      dispatch(actionCreators.profileUpdate(userDate, profileDate, navigation))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
