import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/thumbnails/024/853/985/small_2x/ganesha-illustration-ganesh-chaturthi-ganesh-ganesha-lord-ganesh-lord-ganesha-ai-generated-photo.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}> Jai Ganesha</Text>
          <Text style={styles.cardLabel}> Ganpati</Text>
          <Text style={styles.cardDesc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
            voluptatibus, magni esse at vero quas!
          </Text>
          <Text style={styles.cardFooter}> 1 and Only </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: 'white',
  },
  card: {},
  cardElevated: {},
  cardImage: {
    height: 200,
  },
  cardBody: {},
  cardTitle: {},
  cardLabel: {},
  cardFooter: {},
});
