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

      {/* Bigger centered logo (doesn't intercept touches) */}
      <Image
        source={require('../../assets/images/stryda-logo.png')}
        style={styles.logo}
        resizeMode="contain"
        pointerEvents="none"
      />

      {/* Greeting */}
      <Text style={[styles.greet, { color: C.text }]}>Howz it {name}</Text>
      <Text style={[styles.sub, { color: C.muted }]}>What are we doing today?</Text>

      {/* Chat box with two tiny icon tabs (Talk + Voice) */}
      <View
        style={[
          styles.inputWrap,
          { borderColor: C.border, backgroundColor: scheme === 'dark' ? '#111418' : '#F8FAFC' },
        ]}
      >
        <TextInput
          value={q}
          onChangeText={setQ}
          placeholder="Ask anything…"
          placeholderTextColor={C.muted}
          style={[styles.input, { color: C.text }]}
          onSubmitEditing={goChat}
          returnKeyType="send"
          autoCapitalize="sentences"
          autoCorrect
        />

        {/* Tiny Talk (push-to-talk) icon */}
        <Pressable
          onPress={() => router.push('/voice')}
          hitSlop={12}
          style={({ pressed }) => [
            styles.iconBtn,
            { right: 48, backgroundColor: C.primary },
            pressed && { opacity: 0.85 },
          ]}
          accessibilityLabel="Talk"
        >
          <Ionicons name="mic" size={16} color={scheme === 'dark' ? '#111827' : '#fff'} />
        </Pressable>

        {/* Tiny Voice (continuous conversation) icon */}
        <Pressable
          onPress={() => router.push('/appvoice')}
          hitSlop={12}
          style={({ pressed }) => [
            styles.iconBtn,
            { right: 8, backgroundColor: C.primary },
            pressed && { opacity: 0.85 },
          ]}
          accessibilityLabel="Voice"
        >
          <Ionicons name="radio" size={16} color={scheme === 'dark' ? '#111827' : '#fff'} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center' },
  brandRow: { width: '100%', marginBottom: 12 },
  brand: { fontSize: 20, fontWeight: '700', letterSpacing: 0.5 },

  // Bigger logo like your screenshot
  logo: { width: 280, height: 280, marginTop: 10, marginBottom: 8 },

  greet: { fontSize: 22, fontWeight: '700', marginTop: 6 },
  sub: { fontSize: 14, marginTop: 4, marginBottom: 16 },

  inputWrap: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 14,
    paddingLeft: 14,
    paddingVertical: 10,
    // space for two tiny buttons on the right
    paddingRight: 100,
    position: 'relative',
    zIndex: 10,               // <-- ensure on top of any overlapping views
  },
  input: { fontSize: 16, minHeight: 24 },

  iconBtn: {
    position: 'absolute',
    top: 8,
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

