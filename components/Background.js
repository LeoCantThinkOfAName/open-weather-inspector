import React from "react";
import { ImageBackground, View, Dimensions } from "react-native";
import { useSelector } from "react-redux";

// custom hooks
import useAccelerometer from "../helpers/useAccelerometer";

// styles
import styles from "../styles/main";

const Background = ({ source, children }) => {
  const { theme } = useSelector(state => state);
  const acc = useAccelerometer({
    interval: 16,
    availibility: true,
    initial: { x: 0, y: 0, z: 0 },
  });

  return (
    <ImageBackground
      source={source}
      style={[
        styles.background,
        {
          transform: [
            { perspective: Dimensions.get("screen").width },
            { rotateX: `${acc[0].y * 10}deg` },
            { rotateY: `${acc[0].x * 10}deg` },
          ],
        },
      ]}
    >
      <View style={[styles.backgroundMask, { backgroundColor: theme.white }]}>
        {children}
      </View>
    </ImageBackground>
  );
};

export default Background;
