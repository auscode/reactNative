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
          <Text style={styles.cardTitle}>Jai Ganesha</Text>
          <Text style={styles.cardLabel}>Ganpati</Text>
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
    paddingHorizontal: 8,
    color: 'white',
  },
  card: {
    color: 'white',
    height: 360,
    width: 400,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: 'white',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    marginBottom: 8,
    height: 200,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDesc: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#000000',
    fontSize: 12,
  },
});
