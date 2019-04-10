import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
function mapStateToProps(state) {
  return {
    user: state.authRoot.user,
    profile: state.profileRoot.profile
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

class index extends Component {
  componentDidMount = () => {
    console.log("goes through here");
    this.props.navigation.replace(this.props.user ? "Profile" : "Login");
  };
  render() {
    return <></>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
