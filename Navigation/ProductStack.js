import { createStackNavigator } from "react-navigation";

import ProductsList from "../Components/ProductsList";
import Category from "../Components/Category";
import ProductDetail from "../Components/ProductDetail";

const ProductStack = createStackNavigator(
  {
    ProductsList: ProductsList,
    Category: Category,
    ProductDetail: ProductDetail
  },
  {
    initialRouteName: "ProductsList",
    cardStyle: {
      backgroundColor: "white"
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "black",

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
