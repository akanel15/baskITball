import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RecordTeamStats = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const players = [
    { id: 1, name: 'Player 1' },
    { id: 2, name: 'Player 2' },
    { id: 3, name: 'Player 3' },
    { id: 4, name: 'Player 4' },
    { id: 5, name: 'Player 5' },
    { id: 6, name: 'Player 6' },
    { id: 7, name: 'Player 7' },
    { id: 8, name: 'Player 8' },
    { id: 9, name: 'Player 9' },
    { id: 10, name: 'Player 10' },
    { id: 11, name: 'Player 11' },
    { id: 12, name: 'Player 12' },
  ];

  const handlePlayerPress = (player) => {
    setSelectedPlayer(player);
  };

  const handleStatPress = (stat) => {
    // Handle the stat press and update the player's stats
    setSelectedPlayer(null); // Return to the player list
  };

  if (selectedPlayer) {
    // Render the selected player's stats
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{selectedPlayer.name}</Text>
        <TouchableOpacity style={styles.statButton} onPress={() => handleStatPress('2pt made')}>
          <Text style={styles.statButtonText}>2pt Made</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statButton} onPress={() => handleStatPress('2pt miss')}>
          <Text style={styles.statButtonText}>2pt Miss</Text>
        </TouchableOpacity>
        {/* Add more stat buttons here */}
      </View>
    );
  } else {
    // Render the player list
return (
  <View style={styles.container}>
    <Text style={styles.title}>Team Stats</Text>
    <View style={styles.playersContainer}>
      {players.map((player) => (
        <TouchableOpacity key={player.id} style={styles.playerButton} onPress={() => handlePlayerPress(player)}>
          <Text style={styles.playerButtonText}>{player.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  playersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width: '100%',
  },
  playerButton: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: '48%', // Half of the container width minus margins
  },
  playerButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  statButton: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  statButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default RecordTeamStats;
