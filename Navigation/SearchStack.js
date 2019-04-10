import { createStackNavigator } from "react-navigation";

import ProductsList from "../Components/ProductsList";
import ProductDetail from "../Components/ProductDetail";
import SearchPage from "../Components/SearchPage";

const SearchStack = createStackNavigator(
  {
    SearchPage: SearchPage
  },
  {
    initialRouteName: "SearchPage",
    cardStyle: {
      backgroundColor: "white"
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#009973"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTintColor: "white"
    }
  }
);

export default SearchStack;
