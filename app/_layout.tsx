import { Stack } from 'expo-router';
import Colors from '../constants/Colors';

export default function RootLayout() {
  const C = Colors.dark; // force dark theme

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: C.bg },
      }}
    />
  );
}
