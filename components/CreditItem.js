import React from "react";
import { View, Text } from "react-native";

// helper
import openLink from "../helpers/openLink";

// styles
import styles from "../styles/main";

const CreditItem = ({ credit: { name, author, url } }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>
        {name} by{" "}
        <Text style={styles.link} onPress={() => openLink(url)}>
          {author}
        </Text>{" "}
        on Pixabay.
      </Text>
    </View>
  );
};

export default CreditItem;
