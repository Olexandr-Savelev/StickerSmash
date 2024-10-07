import { View } from "react-native";
import { Image } from "expo-image";

type Props = {
  imageSize: number;
  stickerSource: string;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  return (
    <View style={{ top: 150, position: "absolute" }}>
      <Image
        source={stickerSource}
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}
