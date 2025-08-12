import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';
import Colors from '../../constants/Colors';

export default function TabsLayout() {
  const scheme = useColorScheme() ?? 'light';
  const C = Colors[scheme];

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: true,
        headerStyle: { backgroundColor: C.bg },
        headerTitleStyle: { color: C.text, fontWeight: '600' },
        tabBarStyle: { backgroundColor: C.tabBg, borderTopColor: C.border },
        tabBarActiveTintColor: C.tabActive,
        tabBarInactiveTintColor: C.tabInactive,
        tabBarIcon: ({ color, size, focused }) => {
          const map: Record<string, any> = {
            home: focused ? 'home' : 'home-outline',
            work: focused ? 'briefcase' : 'briefcase-outline',
            library: focused ? 'book' : 'book-outline',
          };
          return <Ionicons name={map[route.name]} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="work" options={{ title: 'Work' }} />
      <Tabs.Screen name="library" options={{ title: 'Library' }} />
    </Tabs>
  );
}
