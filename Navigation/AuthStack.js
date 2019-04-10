import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "../Components/Login";
import ProductsList from "../Components/ProductsList";
import ProductDetail from "../Components/ProductDetail";
import Profile from "../Components/ProfilePage";
import Auth from "../Components/Auth";
//import HomePage from "../Components/HomePage";
const AuthStack = createStackNavigator(
  {
    Auth: Auth,
    Login: Login,
    ProductsList: ProductsList,
    Profile: Profile
  },
  {
    initialRouteName: "Auth",
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
