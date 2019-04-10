import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "../Components/Login";
import ProductsList from "../Components/ProductsList";
import ProductDetail from "../Components/ProductDetail";
//import HomePage from "../Components/HomePage";
import CartList from "../Components/CartList";
import Checkout from "../Components/Checkout";
import Thanks from "../Components/ThanksMessage";
const AuthStack = createStackNavigator(
  {
    Login: Login,

    // HomePage: HomePage,
    ProductsList: ProductsList,
    ProductDetail: ProductDetail,
    CartList: CartList,
    Checkout: Checkout,
    Thanks: Thanks

    ProductsList: ProductsList

  },
  {
    initialRouteName: "Login",
    cardStyle: {
      backgroundColor: "white"
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "white"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTintColor: "white"
    }
  }
);

export default AuthStack;
