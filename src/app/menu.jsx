import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';

import { router } from 'expo-router';

export default function MenuScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.heading}>Coffee Menu</Text>

      <View style={styles.card}>
        <Text style={styles.coffeeName}>
          Vanilla Latte
        </Text>

        <Text style={styles.description}>
          Espresso, steamed milk and vanilla.
        </Text>

        <Text style={styles.price}>$4.50</Text>

        <Pressable
          style={styles.button}
          onPress={() => router.push('/details')}
        >
          <Text style={styles.buttonText}>
            View Details
          </Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <Text style={styles.coffeeName}>
          Cappuccino
        </Text>

        <Text style={styles.description}>
          Espresso with steamed and foamed milk.
        </Text>

        <Text style={styles.price}>$4.00</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    padding: 24,
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3E2723',
    marginBottom: 25,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 14,
    marginBottom: 18,
    elevation: 2,
  },

  coffeeName: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#4E342E',
  },

  description: {
    fontSize: 15,
    color: '#795548',
    marginTop: 8,
    marginBottom: 10,
  },

  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5D4037',
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#6D4C41',
    padding: 13,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});