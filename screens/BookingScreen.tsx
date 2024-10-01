import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const BookingScreen: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [guests, setGuests] = useState<string>('');
  const [dateTime, setDateTime] = useState<string>('');

  const handleBooking = () => {
    // Handle booking logic here
    console.log('Booking confirmed:', { name, guests, dateTime });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book a Table</Text>

      <TextInput
        placeholder="Your Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Number of Guests"
        style={styles.input}
        keyboardType="numeric"
        value={guests}
        onChangeText={setGuests}
      />
      <TextInput
        placeholder="Date & Time"
        style={styles.input}
        value={dateTime}
        onChangeText={setDateTime}
      />

      <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
        <Text style={styles.bookButtonText}>Confirm Booking</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // ... your styles here
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#1a1a1a',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  bookButton: {
    backgroundColor: '#f08080',
    padding: 15,
    borderRadius: 10,
  },
  bookButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default BookingScreen;
