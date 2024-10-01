import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen: React.FC = () => {
  const user = {
    name: 'John Doe',
    membership: 'Gold Member',
    previousOrders: 12,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Profile</Text>
      <Text style={styles.detail}>Name: {user.name}</Text>
      <Text style={styles.detail}>Membership: {user.membership}</Text>
      <Text style={styles.detail}>Previous Orders: {user.previousOrders}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // ... your styles here
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1a1a1a',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  detail: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
});

export default ProfileScreen;
