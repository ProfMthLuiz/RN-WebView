import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <View style={styles.container}>
      {showWebView ? (
        <WebView
          source={{ uri: "https://expo.dev" }}
          style={{ flex: 1 }}
          onNavigationStateChange={(navState) =>
            navState.url !== "https://expo.dev" && handleCloseWebView()
          }
        />
      ) : (
        <Button title="Abrir WebView" onPress={handleShowWebView} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
