import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  fotoStyle: {
    backgroundColor: "grey",
    borderRadius: 100,
    height: 150,
    width: 150,
    marginTop: 20,
    marginBottom: 20,
  },
  row: {
    paddingHorizontal: 15,
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 18
    ,
    color: "#333",
  },
  divider: {
    width: "100%",
    backgroundColor: "grey",
    height: 1,
    marginBottom: 20,
  },
  btn: {
    marginTop: 50,
  },
});

const Perfil = ({ route, navigation }) => {
  const { nome, sobrenome, email, cargo, foto, pais, sexo } = route.params.item;
  const { container, fotoStyle, divider, row, text, btn } = styles;
  return (
    <View style={container}>
      <Image style={fotoStyle} source={{ uri: foto }} />
      <View style={divider}></View>
      <View style={row}>
        <Text style={text}>Nome:</Text>
        <Text style={text}>
          {nome} {sobrenome}
        </Text>
      </View>
      <View style={row}>
        <Text style={text}>Email:</Text>
        <Text style={text}> {email}</Text>
      </View>
      <View style={row}>
        <Text style={text}>País:</Text>
        <Text style={text}> {pais}</Text>
      </View>
      <View style={row}>
        <Text style={text}>Sexo:</Text>
        <Text style={text}> {sexo}</Text>
      </View>
      <View style={row}>
        <Text style={text}>Cargo:</Text>
        <Text style={text}> {cargo}</Text>
      </View>
      <View style={btn}></View>
      <Button
        color="#333"
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default Perfil;
