import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  onNavigate: (screen: string) => void;
};

const HomeScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Good Evening</Text>
      <Text style={styles.welcome}>Welcome to Chef Christoffel’s App</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => onNavigate('Menu')}>
          <Text style={styles.buttonText}>Explore Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => onNavigate('Booking')}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => onNavigate('Offers')}>
          <Text style={styles.buttonText}>Special Offers</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => onNavigate('Order History')}>
          <Text style={styles.buttonText}>Order History</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Location: Johannesburg</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1a1a1a',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  welcome: {
    fontSize: 18,
    marginVertical: 10,
    color: '#fff',
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#f08080',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: 200,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  subtitle: {
    marginTop: 30,
    fontSize: 16,
    color: '#fff',
  },
});

export default HomeScreen;
