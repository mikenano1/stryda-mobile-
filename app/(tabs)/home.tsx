import { View, Text, Pressable, StyleSheet, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Colors from '../../constants/Colors';

export default function Home() {
  const scheme = useColorScheme() ?? 'light';
  const C = Colors[scheme];

  return (
    <View style={[styles.container, { backgroundColor: C.bg }]}>
      <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} />
      <Text style={[styles.title, { color: C.text }]}>Kia ora — how do you want to start?</Text>

      <View style={styles.row}>
        <Primary color={C} icon="mic" label="Talk" onPress={() => router.push('/voice')} />
        <Primary color={C} icon="chatbubble-ellipses" label="Type" onPress={() => router.push('/chat')} />
        <Primary color={C} icon="scan" label="Scan" onPress={() => router.push('/scan')} />
      </View>

      <Text style={[styles.section, { color: C.text }]}>Recents</Text>
      <Text style={{ color: C.muted }}>No recent questions yet.</Text>
    </View>
  );
}

function Primary({
  icon, label, onPress, color,
}: { icon:any; label:string; onPress:()=>void; color:any }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        { borderColor: color.border, backgroundColor: color.bg },
        pressed && { opacity: 0.7 },
      ]}
    >
      <Ionicons name={icon} size={28} color={color.text} />
      <Text style={[styles.cardLabel, { color: color.text }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 16 },
  title: { fontSize: 22, fontWeight: '600' },
  row: { flexDirection: 'row', gap: 12 },
  card: { flex: 1, paddingVertical: 18, borderRadius: 16, borderWidth: 1, alignItems: 'center', gap: 8 },
  cardLabel: { fontSize: 16, fontWeight: '600' },
  section: { marginTop: 24, fontSize: 16, fontWeight: '600' },
});
