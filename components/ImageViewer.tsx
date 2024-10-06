import { Image } from "expo-image";
import { StyleSheet } from "react-native";

type ImageViewerProps = {
  imgSource: string;
};

export default function ImageViewer({ imgSource }: ImageViewerProps) {
  return (
    <Image
      source={imgSource}
      style={styles.image}
    ></Image>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
