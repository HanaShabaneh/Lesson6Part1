import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';

import { router } from 'expo-router';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.smallTitle}>
        FEATURED COFFEE
      </Text>

      <Text style={styles.title}>
        Vanilla Latte
      </Text>

      <Text style={styles.price}>
        $4.50
      </Text>

      <Text style={styles.description}>
        A smooth espresso combined with steamed milk
        and sweet vanilla.
      </Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => router.push('/checkout')}
      >
        <Text style={styles.primaryText}>
          Order This Coffee
        </Text>
      </Pressable>

      <Pressable
        style={styles.secondaryButton}
        onPress={() => router.back()}
      >
        <Text style={styles.secondaryText}>
          Back to Menu
        </Text>
      </Pressable>

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

  smallTitle: {
    fontSize: 14,
    color: '#A1887F',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  title: {
    fontSize: 36,
    color: '#3E2723',
    fontWeight: 'bold',
  },

  price: {
    fontSize: 24,
    color: '#6D4C41',
    fontWeight: 'bold',
    marginVertical: 15,
  },

  description: {
    fontSize: 17,
    lineHeight: 26,
    color: '#795548',
    marginBottom: 35,
  },

  primaryButton: {
    backgroundColor: '#5D4037',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },

  primaryText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  secondaryButton: {
    borderWidth: 1,
    borderColor: '#5D4037',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },

  secondaryText: {
    color: '#5D4037',
    fontWeight: 'bold',
  },
});