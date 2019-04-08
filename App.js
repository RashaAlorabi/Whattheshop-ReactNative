import React, { Component } from "react";
import { Spinner } from "native-base";

import { Provider } from "react-redux";

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
    if (this.state.loading) {
      return <Spinner color="white" />;
    }
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
