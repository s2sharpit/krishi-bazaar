/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

// import type {PropsWithChildren} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  // View,
} from 'react-native';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="lightgray"
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.main}>
        <Text style={styles.heading}>Krishi Bazaar</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'lightgray',
    flex: 1,
    padding: 10,
  },
  heading: {
    fontSize: 80,
  },
});

export default App;
