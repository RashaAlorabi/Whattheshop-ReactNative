import React, { Component } from "react";
import { Spinner } from "native-base";
import { withNavigation } from "react-navigation";
import { Provider } from "react-redux";
import { connect } from "react-redux";
// Store
import store from "./store";
import AppContainer from "./Navigation";

class App extends Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    const prefix = Expo.Linking.makeUrl("/");

    if (this.state.loading) {
      return <Spinner color="white" />;
    }
    return (
      <Provider store={store}>
        <AppContainer uriPrefix={prefix} />
      </Provider>
    );
  }
}

export default App;
