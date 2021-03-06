import React from "react";
import { Text, View } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
import { TripCardTransport } from "./TripCardTransport";

export function TripCardStops({
  startStop,
  endStop,
  legs,
  startTime,
  endTime,
}) {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "space-between",
        height: "105%",
      }}
    >
      <View style={{ flexDirection: "column" }}>
        {startTime && (
          <Text
            style={{
              fontFamily: "WorkSans_800ExtraBold",
              fontSize: 24,
              color: MAIN_PRIMARY_COLOUR,
            }}
          >
            {startTime}
          </Text>
        )}
        <Text
          style={{
            fontFamily: "WorkSans_800ExtraBold",
            fontSize: startTime ? 12 : 19,
            color: MAIN_PRIMARY_COLOUR,
            width: 180,
          }}
        >
          {startStop}
        </Text>
      </View>
      {legs && <TripCardTransport legs={legs} />}
      <View style={{ flexDirection: "column" }}>
        {endTime && (
          <Text
            style={{
              fontFamily: "WorkSans_800ExtraBold",
              fontSize: 24,
              color: MAIN_PRIMARY_COLOUR,
            }}
          >
            {endTime}
          </Text>
        )}
        <Text
          style={{
            fontFamily: "WorkSans_800ExtraBold",
            fontSize: endTime ? 12 : 19,
            color: MAIN_PRIMARY_COLOUR,
            width: 180,
          }}
        >
          {endStop}
        </Text>
      </View>
    </View>
  );
}
