import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "../Components/Login";
import ProductsList from "../Components/ProductsList";
import ProductDetail from "../Components/ProductDetail";
//import HomePage from "../Components/HomePage";
const AuthStack = createStackNavigator(
  {
    Login: Login,
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
