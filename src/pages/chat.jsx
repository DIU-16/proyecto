import React from 'react';
import { View, Text, Button, TextInput, ScrollView, Image, StyleSheet } from 'react-native';

export const ChatPage = () => {
    return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Button title="Personas" />
        <Button title="Ramos" />
        <TextInput
            style={styles.searchBar}
            placeholder="Buscar"
        />
        </View>
        <ScrollView style={styles.chatList}>
        <View style={styles.chatBox}>
            <Image source={require('../assets/user1.jpg')} style={styles.userImage} />
            <View style={styles.userInfo}>
            <Text style={styles.userName}>Usuario 1</Text>
            <Text>¡Hola! ¿Cómo estás?</Text>
            </View>
        </View>
        <View style={styles.chatBox}>
            <Image source={require('../assets/user1.jpg')} style={styles.userImage} />
            <View style={styles.userInfo}>
            <Text style={styles.userName}>Usuario 2</Text>
            <Text>¿Viste la tarea de ayer?</Text>
            </View>
        </View>
        <View style={styles.chatBox}>
            <Image source={require('../assets/user3.jpg')} style={styles.userImage} />
            <View style={styles.userInfo}>
            <Text style={styles.userName}>Usuario 3</Text>
            <Text>¡Claro! Fue muy difícil.</Text>
            </View>
        </View>
        {/* Agrega más chat-box según sea necesario */}
        </ScrollView>
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 5,
    paddingLeft: 10,
  },
  chatList: {
    flex: 1,
    padding: 10,
  },
  chatBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontWeight: 'bold',
  },
});

export default ChatPage;