import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// styles
import themeVar from "../styles/variables";

const FavButton = ({ city = { city: null, ID: null } }) => {
  const { favorites } = useSelector(state => state);
  const { theme } = useSelector(state => state);
  const dispatch = useDispatch();
  const faved = favorites.find(fav => fav.ID === city.ID);

  const handlePress = () => {
    if (faved) {
      dispatch({ type: "REMOVE_FAVORITE", payload: city });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: city });
    }
  };

  return (
    <TouchableOpacity style={{ height: 100, width: 100 }} onPress={handlePress}>
      <FontAwesome
        size={30}
        color={faved ? themeVar.red : theme.black}
        name={faved ? "heart" : "heart-o"}
      />
    </TouchableOpacity>
  );
};

export default FavButton;
