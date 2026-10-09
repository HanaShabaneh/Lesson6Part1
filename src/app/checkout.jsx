import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';

import { router } from 'expo-router';

export default function CheckoutScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Checkout
      </Text>

      <View style={styles.orderBox}>
        <Text style={styles.item}>
          Vanilla Latte
        </Text>

        <Text style={styles.price}>
          Total: $4.50
        </Text>
      </View>

      <Text style={styles.question}>
        Ready to place your order?
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => router.replace('/success')}
      >
        <Text style={styles.buttonText}>
          Place Order
        </Text>
      </Pressable>

      <Text style={styles.note}>
        replace() removes Checkout from its position
        and replaces it with Order Complete.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#FFF8F0',
    justifyContent: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3E2723',
    marginBottom: 25,
  },

  orderBox: {
    backgroundColor: '#FFFFFF',
    padding: 22,
    borderRadius: 12,
    marginBottom: 25,
  },

  item: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4E342E',
  },

  price: {
    fontSize: 18,
    color: '#6D4C41',
    marginTop: 8,
  },

  question: {
    fontSize: 17,
    marginBottom: 20,
    color: '#795548',
  },

  button: {
    backgroundColor: '#5D4037',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  note: {
    marginTop: 20,
    textAlign: 'center',
    color: '#8D6E63',
    fontSize: 14,
  },
});