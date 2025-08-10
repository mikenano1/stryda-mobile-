import { View, Text, StyleSheet } from 'react-native';

export default function Library() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Library</Text>
      <Text>Saved answers, pinned snippets, manuals.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:20, gap:8 },
  title:{ fontSize:22, fontWeight:'600' },
});
