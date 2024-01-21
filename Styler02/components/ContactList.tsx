import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: '1',
      name: 'John Doe',
      status: 'Online',
      imgUrl:
        'https://attiehandassociates.co.za/wp-content/uploads/2014/08/Profile-Pic-Demo.png',
    },
    {
      uid: '2',
      name: 'Jane Smith',
      status: 'Offline',
      imgUrl:
        'https://attiehandassociates.co.za/wp-content/uploads/2014/08/Profile-Pic-Demo.png',
    },
    {
      uid: '3',
      name: 'Bob Johnson',
      status: 'Away',
      imgUrl:
        'https://attiehandassociates.co.za/wp-content/uploads/2014/08/Profile-Pic-Demo.png',
    },
    {
      uid: '4',
      name: 'Ray Cole',
      status: 'decline',
      imgUrl:
        'https://attiehandassociates.co.za/wp-content/uploads/2014/08/Profile-Pic-Demo.png',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imgUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{uri: imgUrl}} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 3,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: '#8D3DAF',
    padding: 4,
    borderRadius: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },
  userStatus: {
    fontSize: 12,
  },
});
