import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  ScrollView,
  Button,
  ActivityIndicator,
  StyleSheet,
  View,
} from "react-native";
import ContatoRow from "../componentes/contatoRow";
import { FlatList } from "react-native-gesture-handler";
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAih4HA-4uaNkYV5XrE_nIhUloRTiRJ9g",
  authDomain: "desafio3-ead47.firebaseapp.com",
  databaseURL: "https://desafio3-ead47.firebaseio.com",
  projectId: "desafio3-ead47",
  storageBucket: "desafio3-ead47.appspot.com",
  messagingSenderId: "409253072528",
  appId: "1:409253072528:web:a9655a8b3608b5f0019215",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

const styles = StyleSheet.create({
  loader: {
    marginTop: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Lista = ({ navigation }) => {
  const [pessoas, setPessoas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [last, setLast] = useState();

  const nextPessoas = async () => {
    try {
      setLoading(true);
      const next = db
        .collection("Pessoas")
        .orderBy("nome")
        .startAfter(last.data().nome)
        .limit(15);

      const snapshot = await next.get();
      setLast(snapshot.docs[snapshot.docs.length - 1]);

      snapshot.forEach(doc => {
        let temp = doc.data();
        setPessoas(oldPessoas => [...oldPessoas, { ...temp }]);
      });

      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const firstPessoas = async () => {
    setLoading(true);
    const first = db.collection("Pessoas").orderBy("nome").limit(15);

    const snapshot = await first.get();

    setLast(snapshot.docs[snapshot.docs.length - 1]);

    let data = [];
    snapshot.forEach(doc => {
      data.push(doc.data());
    });

    setPessoas(data);
    setLoading(false);
  };

  useEffect(() => {
    firstPessoas();
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      {loading ? (
        <ActivityIndicator style={styles.loader} color="#333" size="large" />
      ) : (
        <View>
          <FlatList
            data={pessoas}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Perfil", { item })}
              >
                <ContatoRow item={item} />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
          <Button color="#333" title="Mais" onPress={() => nextPessoas()} />
        </View>
      )}
    </ScrollView>
  );
};

export default Lista;
