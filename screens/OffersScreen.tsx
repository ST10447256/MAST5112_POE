import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OffersScreen: React.FC = () => {
  const offers = [
    'Buy one get one free on Gold Leaf Tiramisu!',
    '20% off on all Starters from 6pm to 9pm.',
    'Free dessert with any Wagyu Beef Ribeye order.',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Special Offers</Text>
      {offers.map((offer, index) => (
        <Text key={index} style={styles.offerItem}>
          {offer}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  // ... your styles here
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1a1a1a',
  },
  title: {
    fontSize: 24,
    color: '#f08080',
    marginBottom: 20,
  },
  offerItem: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
});

export default OffersScreen;
