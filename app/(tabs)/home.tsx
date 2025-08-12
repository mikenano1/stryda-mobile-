import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Touch test</Text>

      <Link href="/chat" asChild>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Go to Chat</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#fff' },
  title:{ fontSize:22, marginBottom:16 },
  btn:{ backgroundColor:'#111827', paddingVertical:14, paddingHorizontal:20, borderRadius:12 },
  btnText:{ color:'#fff', fontWeight:'700' },
});
