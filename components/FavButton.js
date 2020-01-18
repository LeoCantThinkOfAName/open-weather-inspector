import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// styles
import themeVar from "../styles/variables";
import styles from "../styles/main";

const FavButton = ({ id }) => {
  const { favorites } = useSelector(state => state);
  const { theme } = useSelector(state => state);
  const dispatch = useDispatch();
  const faved = favorites.find(fav => fav.id === id) ? true : false;
  const [localFav, setLocalFav] = useState(faved);

  const handlePress = () => {
    if (localFav) {
      setLocalFav(false);
    } else {
      setLocalFav(true);

      if (!faved) {
        dispatch({ type: "ADD_FAVORITE", payload: city });
      }
    }
  };

  useEffect(() => {
    // return () => dispatch({ type: "REMOVE_FAVORITE", payload: city });
  }, []);

  useEffect(() => {
    setLocalFav(faved);
  }, [id]);

  return (
    <TouchableOpacity style={styles.favButton} onPress={handlePress}>
      <FontAwesome
        size={25}
        color={localFav ? themeVar.red : theme.black}
        name={localFav ? "heart" : "heart-o"}
        style={{
          textShadowColor: theme.white,
          textShadowRadius: 3,
        }}
      />
    </TouchableOpacity>
  );
};

export default FavButton;
