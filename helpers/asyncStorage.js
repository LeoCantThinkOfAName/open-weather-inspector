import { AsyncStorage } from "react-native";

export const storeDataInAS = async ({ key, value }) => {
  try {
    await AsyncStorage.setItem(`weatherapp_config_${key}`, value.toString());
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getDataInAS = async key => {
  try {
    const value = await AsyncStorage.getItem(`weatherapp_config_${key}`);
    return value;
  } catch (error) {
    console.log(error);
    return false;
  }
};
