import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const VOICES = ['Kea (NZ male)', 'Kōwhai (NZ female)'];

export default function VoiceCall() {
  const [status, setStatus] = useState<'idle'|'connecting'|'connected'>('idle');
  const [voice, setVoice] = useState<string>(VOICES[0]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Voice mode — full conversation</Text>
      <Text style={styles.sub}>Sounds like a Kiwi. Choose a voice:</Text>

      <View style={styles.voiceRow}>
        {VOICES.map(v => (
          <Pressable
            key={v}
            onPress={() => setVoice(v)}
            style={[styles.voicePill, voice === v && styles.voicePillActive]}
          >
            <Text style={[styles.voiceLabel, voice === v && styles.voiceLabelActive]}>{v}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.status}>Status: {status}</Text>

      <Pressable
        onPress={() => setStatus('connecting')}
        style={[styles.primary, status !== 'idle' && { opacity: 0.5 }]}
        disabled={status !== 'idle'}
      >
        <Text style={styles.primaryText}>Start voice</Text>
      </Pressable>

      <Pressable
        onPress={() => setStatus('idle')}
        style={[styles.secondary, status === 'idle' && { opacity: 0.5 }]}
        disabled={status === 'idle'}
      >
        <Text style={styles.secondaryText}>End</Text>
      </Pressable>

      {/* TODO: Wire to realtime voice (low-latency) with Kiwi TTS */}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:20, gap:14 },
  title:{ fontSize:20, fontWeight:'700' },
  sub:{ opacity:0.7 },
  voiceRow:{ flexDirection:'row', gap:8, marginTop:8 },
  voicePill:{ borderWidth:1, borderColor:'#e5e7eb', borderRadius:999, paddingVertical:8, paddingHorizontal:12 },
  voicePillActive:{ backgroundColor:'#0E7C86', borderColor:'#0E7C86' },
  voiceLabel:{ fontWeight:'600' },
  voiceLabelActive:{ color:'#fff' },
  status:{ marginTop:8, opacity:0.8 },
  primary:{ backgroundColor:'#0E7C86', paddingVertical:14, borderRadius:12, alignItems:'center' },
  primaryText:{ color:'#fff', fontWeight:'700' },
  secondary:{ borderWidth:1, borderColor:'#e5e7eb', paddingVertical:12, borderRadius:12, alignItems:'center' },
  secondaryText:{ fontWeight:'700' },
});
