import React from "react";
import { View, Text } from "react-native";
import { widthPercentage, heightPercentage } from "../../functions/Dimensions";

const ToolTip = ({ title }) => {
  return (
    <View
      style={{
        backgroundColor: "#8E8E8E",
        borderRadius: 30,
        paddingVertical: heightPercentage(1),
        paddingHorizontal: widthPercentage(6),
        height: heightPercentage(5),
        minWidth: widthPercentage(30),
        alignItems: "center",
        position: "absolute",
        zIndex: 1,
        top: heightPercentage(10),
        left: widthPercentage(35),
      }}
    >
      <Text style={{ color: "#FFF" }}>{title}</Text>
    </View>
  );
};

export default ToolTip;