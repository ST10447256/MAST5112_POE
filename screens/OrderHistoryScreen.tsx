import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Order {
  id: string;
  item: string;
  price: string;
  date: string;
}

const orders: Order[] = [
  { id: '1', item: 'Wagyu Beef Ribeye', price: 'R450', date: '01/09/2024' },
  { id: '2', item: 'Gold Leaf Tiramisu', price: 'R150', date: '28/08/2024' },
  { id: '3', item: 'Beluga Caviar', price: 'R250', date: '15/08/2024' },
];

const OrderHistoryScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order History</Text>
      {orders.map((order) => (
        <Text key={order.id} style={styles.orderItem}>
          {order.item} - {order.price} (Ordered on {order.date})
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
  orderItem: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
});

export default OrderHistoryScreen;
