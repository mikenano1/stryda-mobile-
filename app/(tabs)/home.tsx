import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Pressable, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Colors from '../../constants/Colors';

export default function Home() {
  const scheme = useColorScheme() ?? 'light';
  const C = Colors[scheme];
  const [q, setQ] = useState('');
  const name = 'Mike'; // TODO: load from profile later

  const goChat = () => {
    const trimmed = q.trim();
    if (!trimmed) return;
    router.push({ pathname: '/chat', params: { q: trimmed } });
    setQ('');
  };

  return (
    <View style={[styles.container, { backgroundColor: C.bg }]}>
      <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} />

      {/* Brand row */}
      <View style={styles.brandRow}>
        <Text style={[styles.brand, { color: C.text }]}>STRYDA.ai</Text>
      </View>

      {/* Centered logo */}
      <Image
        source={require('../../assets/images/stryda-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Greeting */}
      <Text style={[styles.greet, { color: C.text }]}>Howz it {name}</Text>
      <Text style={[styles.sub, { color: C.muted }]}>What are we doing today?</Text>

      {/* Chat box with mic (Talk = single utterance) */}
      <View style={[styles.inputWrap, { borderColor: C.border, backgroundColor: scheme === 'dark' ? '#111418' : '#F8FAFC' }]}>
        <TextInput
          value={q}
          onChangeText={setQ}
          placeholder="Ask anything..."
          placeholderTextColor={C.muted}
          style={[styles.input, { color: C.text }]}
          onSubmitEditing={goChat}
          returnKeyType="send"
          autoCapitalize="sentences"
          autoCorrect
        />
        <Pressable
          onPress={() => router.push('/voice')} // Talk (push-to-talk) screen
          style={({ pressed }) => [
            styles.mic,
            { backgroundColor: C.primary },
            pressed && { opacity: 0.85 },
          ]}
          accessibilityLabel="Talk"
        >
          <Ionicons name="mic" size={18} color="#fff" />
        </Pressable>
      </View>

      {/* Mode chooser: Talk vs Voice (full conversation) */}
      <View style={styles.actionRow}>
        <Pressable
          onPress={() => router.push('/voice')} // Talk (single question)
          style={({ pressed }) => [
            styles.actionBtn,
            { borderColor: C.border, backgroundColor: C.bg },
            pressed && { opacity: 0.8 },
          ]}
        >
          <Ionicons name="mic" size={16} color={C.text} />
          <Text style={[styles.actionLabel, { color: C.text }]}>Talk</Text>
        </Pressable>

        <Pressable
          onPress={() => router.push('/appvoice')} // <-- Voice (continuous convo) route you created
          style={({ pressed }) => [
            styles.actionBtn,
            { backgroundColor: C.primary, borderColor: C.primary },
            pressed && { opacity: 0.9 },
          ]}
        >
          <Ionicons name="radio" size={16} color="#fff" />
          <Text style={[styles.actionLabel, { color: '#fff' }]}>Voice</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center' },
  brandRow: { width: '100%', marginBottom: 12 },
  brand: { fontSize: 20, fontWeight: '700', letterSpacing: 0.5 },
  logo: { width: 180, height: 180, marginTop: 24, marginBottom: 12 },
  greet: { fontSize: 22, fontWeight: '700', marginTop: 6 },
  sub: { fontSize: 14, marginTop: 4, marginBottom: 16 },

  inputWrap: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 14,
    paddingRight: 46,
    paddingLeft: 14,
    paddingVertical: 10,
    position: 'relative',
  },
  input: { fontSize: 16, height: 24 },
  mic: {
    width: 34,
    height: 34,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 6,
    top: 6,
  },

  actionRow: { flexDirection: 'row', gap: 12, width: '100%', marginTop: 14 },
  actionBtn: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  actionLabel: { fontSize: 15, fontWeight: '600' },
});
