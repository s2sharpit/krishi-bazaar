import {StyleSheet, Text, View} from 'react-native';
function Home() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Tushar Saini</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
  },
  headerText: {
    textAlign: 'center',
  },
});

export default Home;
