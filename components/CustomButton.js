import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TouchableOpacity, View, Modal, Alert } from "react-native";

// components
import ThemeText from "./ThemeText";

// helpers
import hexToRgb from "../helpers/hexToRgb";

// styles
import styles from "../styles/main";
import Spinner from "./Spinner";

const CustomButton = ({ label, text, fn }) => {
  const { theme } = useSelector(state => state);
  const [done, setDone] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [success, setSuccess] = useState({});

  return (
    <View>
      <ThemeText style={styles.togglerLabel}>{label}</ThemeText>
      <TouchableOpacity
        style={[
          styles.button,
          styles.alignCenter,
          {
            backgroundColor: hexToRgb(theme.white, 0.8),
          },
        ]}
        onPress={async () => {
          setDone(false);
          const result = await fn();
          console.log(result);
          setSuccess(result);
          setDone(true);
          setOpenModal(true);
        }}
      >
        <ThemeText>{text}</ThemeText>
        {!done && <Spinner />}
      </TouchableOpacity>
      <Modal animationType="fade" transparent={true} visible={openModal}>
        <View
          style={[
            styles.modal,
            styles.alignCenter,
            {
              backgroundColor: hexToRgb(theme.white, 0.75),
            },
          ]}
        >
          <View
            style={[
              styles.dialog,
              {
                backgroundColor: theme.white,
              },
            ]}
          >
            <ThemeText style={styles.dialogText}>{success.message}</ThemeText>
            <TouchableOpacity
              style={styles.dialogBtn}
              onPress={() => setOpenModal(false)}
            >
              <ThemeText>OK</ThemeText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomButton;
