import { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";

const useAccelerometer = (options = {}) => {
  const [data, setData] = useState(options.initial);
  const [available, setAvailable] = useState();
  const { availability, interval } = options;

  useEffect(() => {
    if (availability) {
      Accelerometer.isAvailableAsync().then(setAvailable(true));
    }

    if (interval !== undefined) {
      Accelerometer.setUpdateInterval(interval);
    }

    return Accelerometer.addListener(accData => setData(accData)).remove;
  }, [availability, interval]);

  return [data, available];
};

export default useAccelerometer;
