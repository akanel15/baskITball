import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';


const LoadingScreen = ({ navigation }) => {
  const handlePress = (route) => {
    navigation.navigate('ShotTracker', { screen: 'ShotTrackerPage' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>basketITball</Text>
      <TouchableOpacity style={styles.button} onPress={() => handlePress('ShotTracker')}>
        <Text style={styles.buttonText}>Shot Tracker</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handlePress('RecordStats')}>
        <Text style={styles.buttonText}>Record Stats</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handlePress('PlayerAnalytics')}>
        <Text style={styles.buttonText}>View Player Analytics</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handlePress('PlayerList')}>
        <Text style={styles.buttonText}>Player List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#0080ff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default LoadingScreen;
