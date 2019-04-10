import { createStackNavigator, createAppContainer } from "react-navigation";

import CartList from "../Components/CartList";
import Checkout from "../Components/Checkout";
import Thanks from "../Components/ThanksMessage";
const CartStack = createStackNavigator(
  {
    CartList: CartList,
    Checkout: Checkout,
    Thanks: Thanks
  },
  {
    initialRouteName: "CartList",
    cardStyle: {
      backgroundColor: "white"
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "white",
        height: 75
      },
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTintColor: "white"
    }
  }
);

export default CartStack;
