import React from "react";
import Lista from "./src/views/Lista";
import Perfil from "./src/views/Perfil";
import Info from "./src/views/Info";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Contatos"
          component={Detalhe}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Detalhe() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Contatos" component={Lista} />
      <Drawer.Screen name="Informações" component={Info} />
    </Drawer.Navigator>
  );
}
