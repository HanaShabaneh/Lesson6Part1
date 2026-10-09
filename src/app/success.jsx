import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';

import { router } from 'expo-router';

export default function SuccessScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.check}>✓</Text>

      <Text style={styles.title}>
        Order Complete
      </Text>

      <Text style={styles.message}>
        Your coffee is being prepared.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => router.dismissAll()}
      >
        <Text style={styles.buttonText}>
          Return to Home
        </Text>
      </Pressable>

      <Text style={styles.note}>
        dismissAll() removes the screens above the
        first screen in this Stack.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  check: {
    fontSize: 60,
    color: '#5D4037',
    marginBottom: 15,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3E2723',
  },

  message: {
    fontSize: 18,
    color: '#795548',
    marginTop: 12,
    marginBottom: 35,
  },

  button: {
    backgroundColor: '#5D4037',
    paddingHorizontal: 35,
    paddingVertical: 16,
    borderRadius: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  note: {
    marginTop: 22,
    textAlign: 'center',
    color: '#8D6E63',
  },
});