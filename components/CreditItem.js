import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

// components
import ThemeText from "./ThemeText";

// helper
import openLink from "../helpers/openLink";

// styles
import styles from "../styles/main";

const CreditItem = ({ credit: { name, author, url } }) => {
  const { theme } = useSelector(state => state);

  return (
    <View style={[styles.listItem, { borderColor: theme.black }]}>
      <ThemeText style={styles.textCenter}>
        {name} by{" "}
        <ThemeText style={styles.link} onPress={() => openLink(url)}>
          {author}
        </ThemeText>{" "}
        on Pixabay.
      </ThemeText>
    </View>
  );
};

export default CreditItem;
