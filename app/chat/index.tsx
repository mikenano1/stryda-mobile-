import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Chat() {
  const { q } = useLocalSearchParams<{ q?: string }>();
  const [text, setText] = useState('');

  useEffect(() => {
    if (typeof q === 'string' && q.trim()) setText(q);
  }, [q]);

  const send = () => {
    const prompt = text.trim();
    if (!prompt) return;
    // TODO: call /ask endpoint and show answer with citations
    alert(`(demo) sending: ${prompt}`);
    setText('');
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.back}>
        <Ionicons name="chevron-back" size={22} />
        <Text style={styles.backLabel}>Home</Text>
      </Pressable>

      <View style={styles.messages}>
        {/* TODO: render messages here */}
        <Text style={{ opacity: 0.6 }}>Chat UI coming…</Text>
      </View>

      <View style={styles.inputRow}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Type your question…"
          style={styles.input}
          onSubmitEditing={send}
          returnKeyType="send"
        />
        <Pressable onPress={send} style={styles.send}>
          <Ionicons name="arrow-up" size={18} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:16, gap:12 },
  back:{ flexDirection:'row', alignItems:'center', gap:6, alignSelf:'flex-start' },
  backLabel:{ fontWeight:'600' },
  messages:{ flex:1, borderWidth:1, borderColor:'#e5e7eb', borderRadius:12, padding:12, justifyContent:'center', alignItems:'center' },
  inputRow:{ flexDirection:'row', gap:8, alignItems:'center' },
  input:{ flex:1, borderWidth:1, borderColor:'#e5e7eb', borderRadius:12, paddingHorizontal:12, height:44 },
  send:{ width:44, height:44, borderRadius:12, backgroundColor:'#111827', alignItems:'center', justifyContent:'center' },
});
