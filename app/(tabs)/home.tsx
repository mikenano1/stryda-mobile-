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

      {/* Brand */}
      <View style={styles.brandRow}>
        <Text style={[styles.brand, { color: C.text }]}>STRYDA.ai</Text>
      </View>

      {/* Big centered logo (ignore touches) */}
      <Image
        source={require('../../assets/images/stryda-logo.png')}
        style={styles.logo}
        resizeMode="contain"
        pointerEvents="none"
      />

      {/* Greeting */}
      <Text style={[styles.greet, { color: C.text }]}>Howz it {name}</Text>
      <Text style={[styles.sub, { color: C.muted }]}>What are we doing today?</Text>

      {/* Chat box with tiny Talk + Voice icons inside (like ChatGPT) */}
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

        {/* Talk (push-to-talk) */}
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
          <Ionicons name="mic" size={16}
