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
      backgroundColor: "rgb(20,90,100)"
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTintColor: "white"
    }
  }
);

export default ProductStack;
