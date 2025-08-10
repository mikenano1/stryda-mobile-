import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kia ora — how do you want to start?</Text>

      <View style={styles.row}>
        <Primary icon="mic" label="Talk" onPress={() => router.push('/voice')} />
        <Primary icon="chatbubble-ellipses" label="Type" onPress={() => router.push('/chat')} />
        <Primary icon="scan" label="Scan" onPress={() => router.push('/scan')} />
      </View>

      <Text style={styles.section}>Recents</Text>
      <Text style={styles.empty}>No recent questions yet.</Text>
    </View>
  );
}

function Primary({ icon, label, onPress }:{icon:any;label:string;onPress:()=>void}) {
  return (
    <Pressable onPress={onPress} style={({pressed})=>[styles.card, pressed && {opacity:0.6}]}>
      <Ionicons name={icon} size={28} color="#111" />
      <Text style={styles.cardLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:20, gap:16, backgroundColor:'#fff' },
  title:{ fontSize:22, fontWeight:'600', color:'#111' },
  row:{ flexDirection:'row', gap:12 },
  card:{ flex:1, paddingVertical:18, borderRadius:16, borderWidth:1, borderColor:'#e5e5e5', alignItems:'center', gap:8, backgroundColor:'#fff' },
  cardLabel:{ fontSize:16, fontWeight:'600', color:'#111' },
  section:{ marginTop:24, fontSize:16, fontWeight:'600', color:'#111' },
  empty:{ marginTop:8, color:'#666' },
});
