import { View, Text, StyleSheet } from 'react-native';

export default function Work() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Work</Text>
      <Text>Jobs & Products will live here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:20, gap:8 },
  title:{ fontSize:22, fontWeight:'600' },
});
