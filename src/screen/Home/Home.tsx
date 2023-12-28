import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

interface RenderCardInterface {
  item: any;
  onPress?: () => void;
}

const RenderCard = (props: RenderCardInterface) => {
  const { item, onPress } = props || {};

  return (
    <TouchableOpacity
      style={{
        padding: 10,
        marginBottom: 5,
        backgroundColor: "#FFF",
        margin: 2,
        borderRadius: 10,
      }}
      onPress={onPress}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{}}>
          <Text style={{ fontSize: 20 }}>{item.name}</Text>
          <Text>{item.category}</Text>
          <Text style={{ fontSize: 16 }}>{item.price}</Text>
        </View>
        <Image
          source={{ uri: item.image }}
          style={{ height: 100, width: 100, objectFit: "contain" }}
        />
      </View>
    </TouchableOpacity>
  );
};

const Home = () => {
  const [data, setData] = useState(null);
  const navigation: any = useNavigation();

  const gotoDetailScreeen = (item: any) => {
    navigation.navigate("Details", { item });
  };

  useEffect(() => {
    try {
      fetch("https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q")
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <RenderCard
              item={item}
              key={item.id}
              onPress={() => gotoDetailScreeen(item)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
