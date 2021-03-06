import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [outputText, setOutputText] =  useState('Initial Text!');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title='Change Text' onPress={() => setOutputText('Changed Text!')}/>
      <StatusBar style="auto" />
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
});
