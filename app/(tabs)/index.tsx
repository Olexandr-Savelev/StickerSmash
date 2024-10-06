import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/UI/Button";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const PlaceholderImage = require("../../assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}></View>
      <ImageViewer imgSource={PlaceholderImage} />
      <Text style={styles.text}>Home screen1.</Text>
      <Button
        title="Go to About"
        onPress={() => router.push("/about")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  text: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 10,
  },
  imageContainer: {
    flex: 1,
  },
});
