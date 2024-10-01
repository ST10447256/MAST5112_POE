import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const MenuScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Starters</Text>
      <Text style={styles.menuItem}>
        Beluga Caviar - R250 {'\n'}
        A delicacy of sturgeon roe, served with blinis and crème fraîche.
      </Text>
      <Text style={styles.menuItem}>
        Foie Gras Torchon - R150 {'\n'}
        Rich foie gras wrapped in cloth and poached, served with brioche and fig compote.
      </Text>

      <Text style={styles.sectionTitle}>Mains</Text>
      <Text style={styles.menuItem}>
        Wagyu Beef Ribeye - R450 {'\n'}
        A5 Wagyu beef ribeye, grilled to perfection, served with truffle mashed potatoes.
      </Text>
      <Text style={styles.menuItem}>
        Maine Lobster Thermidor - R300 {'\n'}
        Lobster meat cooked in a rich creamy sauce, stuffed back into the shell, and baked.
      </Text>

      <Text style={styles.sectionTitle}>Desserts</Text>
      <Text style={styles.menuItem}>
        Gold Leaf Tiramisu - R150 {'\n'}
        Classic tiramisu layered with 24k edible gold leaf, mascarpone, and coffee-soaked ladyfingers.
      </Text>
      <Text style={styles.menuItem}>
        Saffron Pistachio Gelato - R80 {'\n'}
        Creamy gelato infused with saffron and topped with roasted pistachios.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // ... your styles here
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1a1a1a',
  },
  sectionTitle: {
    fontSize: 20,
    color: '#f08080',
    marginVertical: 10,
  },
  menuItem: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
});

export default MenuScreen;
