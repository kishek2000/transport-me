import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../constants";

export function ViewTimesButton({ navigation }) {
  return (
    <TouchableOpacity
      style={{
        width: 96,
        height: 28,
        backgroundColor: MAIN_PRIMARY_COLOUR,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 24,
        marginTop: 12,
        alignSelf: "flex-end",
      }}
      onPress={() => navigation.navigate("ROUTES")}
    >
      <Text
        style={{
          fontFamily: "WorkSans_700Bold",
          fontSize: 12,
          color: "white",
        }}
      >
        VIEW TIMES
      </Text>
    </TouchableOpacity>
  );
}
