import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DetailsBg from "@src/assets/svgs/DetailsBG";

const Details = (props: any) => {
  const { item } = props.route.params;

  console.log("AT Details", item);

  return (
    <SafeAreaView>
      <ScrollView>
        <DetailsBg />
        {/* <Text>Details Screen</Text> */}
        <View
          style={{
            padding: 20,
            backgroundColor: "#96EFFF",
            position: "relative",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              paddingVertical: 10,
            }}
          >
            {item.category}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              fontSize: 50,
              fontWeight: "700",
              paddingBottom: 10,
              maxWidth: "80%",
            }}
          >
            {item.name}
          </Text>
          <View style={{ position: "relative", width: "100%", flex: 1 }}>
            <View style={{ paddingVertical: 10 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  textTransform: "uppercase",
                  color: "#607274",
                }}
              >
                Price
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "600" }}>
                {item.price}
              </Text>
            </View>
            <View style={{ paddingVertical: 10 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  textTransform: "uppercase",
                  color: "#607274",
                }}
              >
                Size
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "600" }}>
                {item.size}
              </Text>
            </View>
          </View>
          <View
            style={{
              zIndex: 10,
              position: "absolute",
              right: 0,
              bottom: -20,
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                height: 220,
                width: 220,
                objectFit: "contain",
              }}
            />
          </View>
          {/* <Text>{item.fertilizer}</Text>
          <Text>{item.water}</Text> */}
        </View>
        <View style={{ padding: 20 }}>
          <Text style={{ fontWeight: "700", paddingBottom: 5, fontSize: 18 }}>
            Plant Bio
          </Text>
          <Text style={{ fontWeight: "400", fontSize: 16 }}>{item.bio}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({});
