import {StyleSheet, Text, Button, View} from 'react-native';
import React from 'react';

//Naviagtion
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home</Text>
      <Button
        title="Go to details"
        // onPress={() =>
        //   navigation.navigate('Deatils', {
        //     productId: '86',
        //   })}
        // onPress={() => navigation.navigate('Details')}
        onPress={() =>
          navigation.push('Details', {
            productId: '86',
          })
        }></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000000',
  },
});

export default Home;
