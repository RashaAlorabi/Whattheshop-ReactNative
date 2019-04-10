import { createStackNavigator } from "react-navigation";

import ProductsList from "../Components/ProductsList";
import ProductDetail from "../Components/ProductDetail";

const ProductStack = createStackNavigator(
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
