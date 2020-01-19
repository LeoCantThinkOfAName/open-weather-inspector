import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

export const requestPermission = async ({ permissionType, errorMessage }) => {
  const permission = { error: null, success: false };
  let { status } = await Permissions.askAsync(permissionType);

  if (status !== "granted") {
    permission.error = errorMessage;
  } else {
    permission.success = true;
  }
  return permission;
};

export const requestLocation = async () => {
  const location = await Location.getCurrentPositionAsync({});
  return location;
};
