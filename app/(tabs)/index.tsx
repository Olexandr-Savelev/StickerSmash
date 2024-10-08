import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/UI/Button";
import { Platform, StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useRef, useState } from "react";
import IconButton from "@/components/UI/IconButton";
import CircleButton from "@/components/UI/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { usePermissions } from "expo-media-library";
import { captureRef } from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";
import domtoimage from "dom-to-image";

const PlaceholderImage = require("../../assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>();
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<string | undefined>(undefined);
  const [status, requestPermission] = usePermissions();

  const imageRef = useRef<View | null>(null);

  if (status === null) {
    requestPermission();
  }

  const pickImage = async () => {
    var result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You did not select any image.");
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    if (Platform.OS !== "web") {
      try {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });
        await MediaLibrary.saveToLibraryAsync(localUri);

        if (localUri) {
          alert("Image saved successfully");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        var dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 1,
          width: 320,
          height: 440,
        });
        var link = document.createElement("a");
        link.download = "sticker-smash.jpeg";
        link.href = dataUrl;
        link.click();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View
        ref={imageRef}
        collapsable={false}
      >
        <ImageViewer
          placeholderImage={PlaceholderImage}
          selectedImage={selectedImage}
        />
        {pickedEmoji && (
          <EmojiSticker
            imageSize={40}
            stickerSource={pickedEmoji}
          />
        )}
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton
              icon="refresh"
              label="Reset"
              onPress={onReset}
            />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.buttonsContainer}>
          <Button
            title="Choose a photo"
            onPress={pickImage}
          />
          <Button
            title="Use this photo"
            onPress={() => {
              setShowAppOptions(true);
            }}
            type="secondary"
          />
        </View>
      )}
      <EmojiPicker
        isVisible={isModalVisible}
        onClose={onModalClose}
      >
        <EmojiList
          onSelect={setPickedEmoji}
          onCloseModal={onModalClose}
        />
      </EmojiPicker>
    </GestureHandlerRootView>
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
    height: "20%",
  },
  imageContainer: {},
  optionsContainer: {
    height: "20%",
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
