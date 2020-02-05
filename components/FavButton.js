import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// styles
import themeVar from "../styles/variables";
import styles from "../styles/main";

// actions
import {
  insertFavoriteToDB,
  removeFavoriteFromDB,
} from "../reducers/favorite/favoriteAction";

const FavButton = ({ route, data, navigation }) => {
  const { id, city } = data;
  const { favorites } = useSelector(state => state);
  const { theme } = useSelector(state => state);
  const dispatch = useDispatch();
  const favedItem = favorites.find(fav => fav.id === id);
  const faved = favedItem ? favedItem.fav : false;

  useEffect(() => {
    if (faved) {
      navigation.closeDrawer();
      navigation.jumpTo(`${city}@${id}`);
    }

    if (route.name !== "Current Location" && !faved) {
      navigation.setParams({ id, city, fav: false });
    }
  }, [favorites]);

  const handlePress = () => {
    if (faved) {
      dispatch(removeFavoriteFromDB(id));
    }

    if (!faved) {
      dispatch(
        insertFavoriteToDB(
          {
            city,
            id,
            fav: true,
          },
          favorites
        )
      );
      navigation.setParams({ id, city, fav: true });
    }
  };

  return (
    <TouchableOpacity style={styles.favButton} onPress={handlePress}>
      <FontAwesome
        size={25}
        color={faved ? themeVar.red : theme.black}
        name={faved ? "heart" : "heart-o"}
        style={{
          textShadowColor: theme.white,
          textShadowRadius: 3,
        }}
      />
    </TouchableOpacity>
  );
};

export default FavButton;
