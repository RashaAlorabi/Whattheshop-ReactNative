// import React, { Component } from "react";
// import { connect } from "react-redux";

// import Carousel, { Pagination } from "react-native-snap-carousel";
// import Swiper from "react-native-swiper";
// // NativeBase Components
// import {
//   Thumbnail,
//   Text,
//   Button,
//   Left,
//   Body,
//   Right,
//   List,
//   ListItem,
//   Picker,
//   Content,
//   Spinner,
//   Input,
//   View,
//   Image
// } from "native-base";

// const { width } = Dimensions.get("window");
// const Slider = props => (
//   <View style={style.container}>
//     <Image style={style.image} source={props.uri} />
//   </View>
// );
// const Styles = {
//   container: {
//     flex: 1,
//     justifyContent: "center "
//   },
//   image: {
//     flex: 1
//   }
// };
// export default class extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       ImagesSlider: [
//         require("../Images/channel.jpeg"),
//         require("../Images/java.jpeg"),
//         require("../Images/mac.jpeg")
//       ]
//     };
//   }
//   render() {
//     return (
//       <View>
//         <Swiper autoplay height={240}>
//           {this.state.ImagesSlider.map((item, i) => (
//             <Slider uri={item} key={i} />
//           ))}
//         </Swiper>
//       </View>
//     );
//   }
// }
