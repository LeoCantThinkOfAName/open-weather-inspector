import { Linking } from "react-native";

const openLink = url => {
  Linking.openURL(url);
};

export default openLink;
