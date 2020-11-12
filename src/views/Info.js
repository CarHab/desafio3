import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  texto: {
    fontSize: 24,
  },
  bob: {
    marginTop: 50,
    width: 200,
    height: 200,
  },
});

const Info = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        A equipe é formada somente por Carlos Habib, por isso, só iria existir
        um link no menu lateral, então decidi criar esta tela para ter mais de
        uma opção.
      </Text>
      <Image style={styles.bob} source={require("../../assets/bob.png")} />
    </View>
  );
};

export default Info;
