import React, { useState, useEffect } from "react";
import { ImageBackground, View, Dimensions, Animated } from "react-native";
import { useSelector } from "react-redux";

// custom hooks
import useAccelerometer from "../helpers/useAccelerometer";

// styles
import styles from "../styles/main";

const Background = ({ source, children }) => {
  const { theme } = useSelector(state => state);
  const [animatedOpacity] = useState(new Animated.Value(0));
  // const acc = useAccelerometer({
  //   interval: 16,
  //   availibility: true,
  //   initial: { x: 0, y: 0, z: 0 }
  // });

  useEffect(() => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 1000
    }).start();
  }, [source]);

  if (source) {
    return (
      <Animated.View style={[styles.background, { opacity: animatedOpacity }]}>
        <ImageBackground
          source={source}
          style={[
            styles.background,
            {
              transform: [
                { perspective: Dimensions.get("screen").width }
                // { rotateX: `${acc[0].y * 10}deg` },
                // { rotateY: `${acc[0].x * 10}deg` }
              ]
            }
          ]}
        >
          <View
            style={[styles.backgroundMask, { backgroundColor: theme.white }]}
          >
            {children}
          </View>
        </ImageBackground>
      </Animated.View>
    );
  } else {
    return (
      <View style={[styles.background, { backgroundColor: theme.white }]} />
    );
  }
};

export default Background;
