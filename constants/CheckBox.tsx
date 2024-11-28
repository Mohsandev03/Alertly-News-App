import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  withTiming,
  WithTimingConfig,
} from "react-native-reanimated";
import { Colors } from "./Colors";
import Animated from "react-native-reanimated";

type props = {
  label: string;
  checked: boolean;
  onPress: () => void;
};
const CheckBox = ({ label, checked, onPress }: props) => {
  const rnAnimatedContainerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        checked ? "rgba(239, 142, 82, 0.1)" : "transparent",
        { duration: 150 }
      ),
      borderColor: withTiming(checked ? "#FF4C4C" : "#333", {
        duration: 150,
      }),
      paddingLeft: 16,
      paddingRight: checked ? 10 : 16,
    };
  }, [checked]);

  const rnTextStyle = useAnimatedStyle(() => {
    return {
      color: withTiming(checked ? "#FF4C4C" : "#333", {
        duration: 150,
      }),
    };
  }, [checked]);

 
  return (
    <Animated.View style={[styles.container, rnAnimatedContainerStyle]} 
    onTouchEnd={onPress}
    >
      <Animated.Text style={[styles.label, rnTextStyle]}>{label}</Animated.Text>
      {checked && (
        <Animated.View
          style={styles.iconWrapper}
          entering={FadeIn.duration(350)}
          exiting={FadeOut}
        >
          <AntDesign nmae="checkedcircle" size={14} color={"#FF4C4C"} />
        </Animated.View>
      )}
      <Animated.View
        style={styles.iconWrapper}
        entering={FadeIn.duration(350)}
        exiting={FadeOut}
      >
        <AntDesign name="checkcircle" size={14} color={"#FF4C4C"} />
      </Animated.View>
    </Animated.View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 32,
    borderColor: "#666",
    paddingVertical: 4,
  },
  label: {
    fontSize: 14,
    color: "#000",
  },
  iconWrapper: {
    marginLeft: 8,
    height: 14,
    width: 14,
  },
});
