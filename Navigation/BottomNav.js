import { createBottomTabNavigator } from "react-navigation";
import React from "react";
import { Icon } from "native-base";
import AuthStack from "./AuthStack";
//import OrderStack from "./OrderStack";
import ProductStack from "./ProductStack";
import CartStack from "./CartStack";
import SearchStack from "./SearchStack";
const BottomNav = createBottomTabNavigator(
  {
    ProductStack: ProductStack,
    CartStack: CartStack,
    SearchStack: SearchStack,
    Auth: AuthStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = "";
        let iconType = "";
        switch (routeName) {
          case "Auth":
            iconName = "account";
            iconType = "MaterialCommunityIcons";
            break;
          case "CartStack":
            iconName = "cart";
            iconType = "MaterialCommunityIcons";
            break;
          case "ProductStack":
            iconName = "home";
            iconType = "MaterialCommunityIcons";
            break;
          case "SearchStack":
            iconName = "search";
            iconType = "FontAwesome";
            break;
          default:
            iconName = "account";
            iconType = "MaterialCommunityIcons";
        }
        return (
          <Icon name={iconName} type={iconType} style={{ color: "purple" }} />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "white",
      inactiveTintColor: "black",
      style: {
        backgroundColor: "white"
      }
    }
  }
);

export default BottomNav;
