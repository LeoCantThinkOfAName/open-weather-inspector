import React, { useState, useEffect } from "react";
import { Platform } from "react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

const useGeoLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      setError("Permission to access location was denied.");
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  useEffect(() => {
    if (Platform.OS === "android" && !Constants.isDevice) {
      setError(
        "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      );
    } else {
      getLocationAsync();
    }
  }, []);

  return { location, error };
};

export default useGeoLocation;
