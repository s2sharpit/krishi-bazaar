import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './src/screens/Welcome';
import Home from './src/screens/Home';
import Splash from './src/screens/Splash';
import ProductDetail from './src/screens/ProductDetail';
import FarmerProfile from './src/screens/FarmerProfile';
import Cart from './src/screens/Cart';
import Payment from './src/screens/Payment';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Contact from './src/screens/Contact';
import Products from './src/screens/Products';


export default function App() {
  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#EFEFEF",
          },
          // headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation, route }) => ({
            headerTitle: "Kisaan Bazaar",
            // Add a placeholder button without the `onPress` to avoid flicker
            headerRight: () => (
              <TouchableOpacity onPress={()=>navigation.navigate("Contact")}>
                <MaterialIcons
                  name="support-agent"
                  size={24}
                  color={"#fff"}
                  style={styles.contact}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Contact" component={Contact} />
        {/* <Stack.Screen name="FarmerProfile" component={FarmerProfile} /> */}
      </Stack.Navigator>
      {/* <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },

  contact: {
    marginRight: 20,
    padding: 4,
    backgroundColor: "#35C759",
    borderRadius: 9999,
    // height: 32,
    // width: 32,
  },
});
