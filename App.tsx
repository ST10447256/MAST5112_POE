import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import ProfileScreen from './screens/ProfileScreen';
import BookingScreen from './screens/BookingScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OffersScreen from './screens/OffersScreen';
import SearchScreen from './screens/SearchScreen';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const onNavigate = (screen: string) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <HomeScreen onNavigate={onNavigate} />;
      case 'Menu':
        return <MenuScreen />;
      case 'Search':
        return <SearchScreen />;
      case 'Offers':
        return <OffersScreen />;
      case 'Booking':
        return <BookingScreen />;
      case 'Order History':
        return <OrderHistoryScreen />;
      case 'Profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen onNavigate={onNavigate} />;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
      <View style={styles.buttonContainer}>
        <Button title="Home" onPress={() => setCurrentScreen('Home')} />
        <Button title="Menu" onPress={() => setCurrentScreen('Menu')} />
        <Button title="Search" onPress={() => setCurrentScreen('Search')} />
        <Button title="Offers" onPress={() => setCurrentScreen('Offers')} />
        <Button title="Booking" onPress={() => setCurrentScreen('Booking')} />
        <Button title="Order History" onPress={() => setCurrentScreen('Order History')} />
        <Button title="Profile" onPress={() => setCurrentScreen('Profile')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
});

export default App;
