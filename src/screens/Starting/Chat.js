import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/UI/Header';
import Box from '../../components/Home/Structure/Box';
import MyButton from '../../components/Home/Forms/MyButton';

const Chat = () => {
  const [buttonPressed, setButtonPressed] = useState(false);

  const handlePress = () => {
    setButtonPressed(!buttonPressed);
  };
  return (
    <View style={styles.container}>
      <Header title={'Chat'} />
      <TouchableOpacity>
        <Box>
          <Text>This is a Box</Text>
        </Box>
      </TouchableOpacity>

      <MyButton title="Press Me" onPress={handlePress} color="#28a745" />

      {buttonPressed && (
        <Text style={styles.message}>Button has been pressed!</Text>
      )}

      <MyButton
        title="Disabled Button"
        onPress={() => alert('This should not work')}
        disabled={true}
        color="#dc3545"
      />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  customBox: {
    backgroundColor: '#e0e0e0',
    borderColor: '#888',
    borderWidth: 2,
  },
  customText: {
    fontSize: 18,
    color: 'darkblue',
  },
  message: {
    fontSize: 18,
    color: 'green',
    marginVertical: 10,
  },
});
