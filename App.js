import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert , Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import { MakeButton, MissButton, UndoButton, ResetButton } from './Buttons';
import Voice from '@react-native-voice/voice'

export default function App() {
  const [makeCount, setMakeCount] = useState(0);
  const [missCount, setMissCount] = useState(0);
  const [lastPress, setLastPress] = useState(null);
  const [lastCounts, setLastCounts] = useState({ makeCount: 0, missCount: 0 });

  const [started, setStarted] = useState(false);
  const [results, setResults] = useState([]);
  useEffect(() => {
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners)
    }
  })

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


  const VoiceOn = async () => {
    await Voice.start("en-NZ");
    setStarted(true);
  };

  const VoiceOff = async () => {
    await Voice.stop();
    setStarted(false);
  };

  const onSpeechResults = (result) => {
    setResults(result.value);
  };

  const onSpeechError = (error) => {
    console.log(error);
  };

  return (
    <View>
      <View>      
        <Text style={{marginTop: 50, fontSize: 30, height: 30, textAlign: 'center',  }}>Shot Tracker</Text>
      </View>

      <View style={{marginTop: 10, alignItems: 'center' }}>
        <MakeButton count={makeCount} setCount={setMakeCount} handleMakePress={handleMakePress} />
        <MissButton count={missCount} setCount={setMissCount} handleMissPress={handleMissPress}/>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, marginTop: 20 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 30, height: 50, textAlign: 'center',  }}>{makeCount}/{makeCount+missCount}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 30, height: 50, textAlign: 'center' }}>{displayPercentage}</Text>
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
            onPress={() => Alert.alert('Save pressed')}
          />
        </View>
        <View style={{ flex: 1 }}>
          {!started ? <Button
          title="Voice On"
          onPress={VoiceOn}
          /> : <Button
          title="Voice Off"
          onPress={VoiceOff}
          />}
        </View>
        <View style={{ flex: 1 }}>
          <Button
            title="Exit"
            onPress={() => Alert.alert('Exit pressed')}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        
        

      </View>
      {results.map((result, index) => <Text key={index}>{result}</Text>  ) }
 
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
