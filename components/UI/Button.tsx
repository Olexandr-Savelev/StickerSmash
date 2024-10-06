import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  type?: "primary" | "secondary";
}

export default function Button({
  title,
  onPress,
  type = "primary",
}: ButtonProps) {
  return (
    <View style={type === "primary" && styles.buttonContainer}>
      <TouchableOpacity
        style={[
          styles.button,
          type === "primary" ? styles.primary : styles.secondary,
        ]}
        onPress={onPress}
      >
        {type == "primary" && (
          <FontAwesome
            name="picture-o"
            size={18}
            color="#ffffff"
            style={styles.buttonIcon}
          ></FontAwesome>
        )}
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#7e7e7e",
    borderRadius: 5,
    padding: 2,
    borderWidth: 1,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  primary: {
    backgroundColor: "#3d7aff",
  },
  secondary: {
    borderColor: "#7e7e7e",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "transparent",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});
