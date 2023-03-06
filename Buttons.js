import {Text, TouchableOpacity } from 'react-native';

export const MakeButton = ({ count, setCount, handleMakePress }) => {
    const onPress = () => handleMakePress();
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: 'rgba(0, 128, 0, 0.7)',
          height: 200,
          width: 350,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 20,
          marginVertical: 10,
        }}
      >
        <Text style={{ color: 'white', marginHorizontal: 20, fontSize:50}}>{count.toString()}</Text>
      </TouchableOpacity>
    );
  };

  export const MissButton = ({ count, setCount, handleMissPress }) => {
    const onPress = () => handleMissPress();
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: 'rgba(214, 61, 57, 1)',
          height: 200,
          width: 350,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 20,
          marginVertical: 10,
        }}
      >
        <Text style={{ color: 'white', marginHorizontal: 20, fontSize:50, }}>{count.toString()}</Text>
      </TouchableOpacity>
    );
  };
  

  export const UndoButton = ({ undo }) => {
    return (
      <TouchableOpacity
        onPress={undo}
        style={{
          backgroundColor: 'rgba(0, 0, 255, 1)',
          height: 100,
          width: 200,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 0,
          marginVertical: 10,
        }}
      >
        <Text style={{ color: 'white', marginHorizontal: 20 }}>UNDO</Text>
      </TouchableOpacity>
    );
  };
  
  
  export const ResetButton = ({ handleReset }) => {
    return (
      <TouchableOpacity
        onPress={handleReset}
        style={{
          backgroundColor: 'rgba(11, 127, 171, 1)',
          height: 100,
          width: 200,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 0,
          marginVertical: 10,
        }}
      >
        <Text style={{ color: 'white', marginHorizontal: 20 }}>RESET</Text>
      </TouchableOpacity>
    );
  };
  