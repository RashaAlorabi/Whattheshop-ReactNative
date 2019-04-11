import { createStackNavigator } from "react-navigation";

import ProductsList from "../Components/ProductsList";
import Category from "../Components/Category";
import ProductDetail from "../Components/ProductDetail";
import SearchPage from "../Components/SearchPage";

const ProductStack = createStackNavigator(
  {
    ProductsList: ProductsList,
    Category: Category,
    ProductDetail: ProductDetail,
    SearchPage: SearchPage
  },
  {
    initialRouteName: "ProductsList",
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

export default ProductStack;
