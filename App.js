import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Switch, Image, useColorScheme } from 'react-native';

export default function App() {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

  return (
    <View style={[styles.container, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
      <Image source={require('./assets/image.png')} style={styles.userIcon} />
      <Text style={[styles.userName, isDarkMode ? styles.darkText : styles.lightText]}>Jetrho V. Dela Cruz</Text>
      <Text style={[styles.joinedText, isDarkMode ? styles.darkText : styles.lightText]}>Joined 1 year ago</Text>

      <Text style={[styles.sectionTitle, isDarkMode ? styles.darkText : styles.lightText]}>Profile</Text>
      <View style={styles.buttonContainer}>
        <Button title="Manage User" />
      </View>

      <Text style={[styles.sectionTitle, isDarkMode ? styles.darkText : styles.lightText]}>Settings</Text>
      <View style={styles.buttonContainer}>
        <Button title="Notifications" />
      </View>

      <View style={styles.darkModeContainer}>
        <Text style={[styles.darkModeText, isDarkMode ? styles.darkText : styles.lightText]}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={() => setIsDarkMode(!isDarkMode)} />
      </View>

      <View style={styles.signOutContainer}>
        <Button title="Sign Out" color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkBackground: {
    backgroundColor: '#121212',
  },
  lightBackground: {
    backgroundColor: '#f5f5f5',
  },
  userIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 5,
  },
  joinedText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  darkModeContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  signOutContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  darkText: {
    color: '#ffffff',
  },
  lightText: {
    color: '#000000',
  },
});
