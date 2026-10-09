import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';

import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.logo}>COFFEE HOUSE</Text>

      <Text style={styles.title}>
        Good Coffee. Good Morning.
      </Text>

      <Text style={styles.description}>
        Discover our freshly prepared coffee drinks.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => router.push('/menu')}
      >
        <Text style={styles.buttonText}>
          View Coffee Menu
        </Text>
      </Pressable>

      <Text style={styles.note}>
        push() adds the Menu screen to the navigation stack.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    justifyContent: 'center',
    padding: 30,
  },

  logo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8D6E63',
    marginBottom: 20,
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#3E2723',
    marginBottom: 15,
  },

  description: {
    fontSize: 18,
    color: '#6D4C41',
    lineHeight: 27,
    marginBottom: 35,
  },

  button: {
    backgroundColor: '#5D4037',
    padding: 17,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  note: {
    marginTop: 20,
    fontSize: 14,
    color: '#8D6E63',
    textAlign: 'center',
  },
});