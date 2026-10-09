import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#5D4037',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: 'Coffee House' }}
      />

      <Stack.Screen
        name="menu"
        options={{ title: 'Coffee Menu' }}
      />

      <Stack.Screen
        name="details"
        options={{ title: 'Coffee Details' }}
      />

      <Stack.Screen
        name="checkout"
        options={{ title: 'Checkout' }}
      />

      <Stack.Screen
        name="success"
        options={{
          title: 'Order Complete',
          headerBackVisible: false,
        }}
      />
    </Stack>
  );
}