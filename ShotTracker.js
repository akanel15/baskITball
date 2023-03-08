import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert , Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import { MakeButton, MissButton, UndoButton, ResetButton } from './Buttons';


export const ShotTracker= () => {
  const [makeCount, setMakeCount] = useState(0);
  const [missCount, setMissCount] = useState(0);
  const [lastPress, setLastPress] = useState(null);
  const [lastCounts, setLastCounts] = useState({ makeCount: 0, missCount: 0 });

  const percentage = (makeCount / (makeCount + missCount)) * 100;
  const displayPercentage = isNaN(percentage) ? "0%" : percentage.toFixed(1) + "%";


  const handleReset = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to reset?',
      [
        { text: 'Yes', onPress: () => { setMakeCount(0); setMissCount(0); } },
        { text: 'No', onPress: () => {} },
      ]
    );
  };

  const handleMakePress = () => {
  setLastPress('make');
  setLastCounts({ makeCount, missCount });
  setMakeCount(makeCount + 1);
  };

  const handleMissPress = () => {
    setLastPress('miss');
    setLastCounts({ makeCount, missCount });
    setMissCount(missCount + 1);
  };

  const handleUndo = () => {
    if ((lastPress === 'make') && (makeCount > 0)) {
      setMakeCount(makeCount-1);
      setLastPress('make');
    } else if ((lastPress === 'miss') && (missCount > 0)) {
      setMissCount(missCount-1);
      setLastPress('miss');
    }

  };

  return (
    <View style={styles.container}>
      <View>      
        <Text style={{marginTop: 50, fontSize: 30, height: 30, textAlign: 'center',  color: '#fff'}}>Shot Tracker</Text>
      </View>

      <View style={{marginTop: 10, alignItems: 'center' }}>
        <MakeButton count={makeCount} setCount={setMakeCount} handleMakePress={handleMakePress} />
        <MissButton count={missCount} setCount={setMissCount} handleMissPress={handleMissPress}/>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, marginTop: 20 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 30, height: 50, textAlign: 'center',  color: '#fff'}}>{makeCount}/{makeCount+missCount}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 30, height: 50, textAlign: 'center', color: '#fff'}}>{displayPercentage}</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 0 }}>
        <View style={{ flex: 1 }}>
          <UndoButton undo={handleUndo} />
        </View>
        <View style={{ flex: 1 }}>
          <ResetButton handleReset={handleReset} />
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 0 }}>
        <View style={{ flex: 1 }}>
          <Button
            title="Save"
            onPress={() => Alert.alert('Left button pressed')}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            title="Exit"
            onPress={() => Alert.alert('Right button pressed')}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        

      </View>


    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // black background
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#fff', // white background for buttons
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
});


export default ShotTracker;

