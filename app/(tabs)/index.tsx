import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/UI/Button";
import { StyleSheet, View } from "react-native";

const PlaceholderImage = require("../../assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}></View>
      <ImageViewer imgSource={PlaceholderImage} />
      <View style={styles.buttonsContainer}>
        <Button
          title="Choose a photo"
          onPress={() => {}}
        />
        <Button
          title="Use this photo"
          onPress={() => {}}
          type="secondary"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
    gap: 10,
  },
  buttonsContainer: {
    gap: 10,
  },
  imageContainer: {},
});
