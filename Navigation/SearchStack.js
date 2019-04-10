import { createStackNavigator } from "react-navigation";

import ProductsList from "../Components/ProductsList";
import ProductDetail from "../Components/ProductDetail";

const SearchStack = createStackNavigator(
  {
    ProductsList: ProductsList,
    ProductDetail: ProductDetail
  },
  {
    initialRouteName: "ProductsList",
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
