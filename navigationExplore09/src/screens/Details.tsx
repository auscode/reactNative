import {StyleSheet, Button, Text, View} from 'react-native';
import React from 'react';

//Naviagtion
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNaviagtionProp} from '@react-navigation/native-stack';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({route}: DetailsProps) => {
  const {productId} = route.params;

  const naviagtion =
    useNavigation<NativeStackNaviagtionProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.smallText}> Details</Text>
      <Button
        title="Go to Home"
        // onPress={() => naviagtion.navigate('Home')}
        onPress={() => naviagtion.goBack()}></Button>
      <Button
        title="Go to First Scren"
        // onPress={() => naviagtion.navigate('Home')}
        // onPress={()=>naviagtion.pop(2)}
        onPress={() => naviagtion.popToTop()}></Button>
    </View>
  );
};

export default Details;

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
