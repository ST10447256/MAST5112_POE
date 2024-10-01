import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, FlatList } from 'react-native';

interface MenuItem {
  id: string;
  name: string;
}

const menuItems: MenuItem[] = [
  { id: '1', name: 'Beluga Caviar' },
  { id: '2', name: 'Foie Gras Torchon' },
  { id: '3', name: 'Wagyu Beef Ribeye' },
  { id: '4', name: 'Maine Lobster Thermidor' },
  { id: '5', name: 'Gold Leaf Tiramisu' },
  { id: '6', name: 'Saffron Pistachio Gelato' },
];

const SearchScreen: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search menu..."
        value={query}
        onChangeText={setQuery}
        style={styles.searchBar}
      />
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.resultItem}>{item.name}</Text>}
      />
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
  searchBar: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  resultItem: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 5,
  },
});

export default SearchScreen;
