import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000",
    padding: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    color: "white",
  },
  foto: {
    backgroundColor: "#CCC",
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  item: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  nome: {
    marginLeft: 10,
    fontSize: 20,
  },
  divider: {
    backgroundColor: "grey",
    height: 1,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  },
});


const ContatoRow = ({ item }) => {
  return (
    <View key={item.id}>
      <View style={styles.item}>
        <View style={styles.left}>
          <Image style={styles.foto} source={{ uri: item.foto }} />
          <Text style={styles.nome}>
            {item.nome} {item.sobrenome}
          </Text>
        </View>
        <FontAwesomeIcon color="black" icon={faChevronRight} />
      </View>
      <View style={styles.divider}></View>
    </View>
  );
};

export default ContatoRow;
