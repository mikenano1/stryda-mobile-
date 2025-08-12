import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Touch test</Text>

      <Button title="Alert" onPress={() => Alert.alert('Pressed')} />

      <Link href="/chat" asChild>
        <Button title="Go to Chat" onPress={() => {}} />
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{ flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#fff' },
  title:{ fontSize:22, marginBottom:16 },
});
