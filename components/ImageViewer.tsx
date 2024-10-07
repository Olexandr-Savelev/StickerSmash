import { Image } from "expo-image";
import { StyleSheet } from "react-native";

type ImageViewerProps = {
  placeholderImage: string;
  selectedImage?: string;
};

export default function ImageViewer({
  placeholderImage,
  selectedImage,
}: ImageViewerProps) {
  const imageSource = selectedImage ? { uri: selectedImage } : placeholderImage;

  return (
    <Image
      source={imageSource}
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
