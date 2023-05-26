import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/493621192/photo/melbourne-at-dusk.jpg?s=612x612&w=0&k=20&c=ogjQ1VOGyRdWvLfQLfMADI4bKdKC_nv2T2jSRtM8CCA=',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Melbourne</Text>
          <Text style={styles.cardLabel}>At Dusk</Text>
          <Text style={styles.cardDescription}>
            A string representing comma separated list of possible candidate
            image source. Each image source contains a URL of an image and a
            pixel density descriptor. If no descriptor is specified, it defaults
            to descriptor of 1x
          </Text>

          <View style={{alignItems: 'flex-end'}}>
            <Text style={styles.cardFooter}>12 mins away</Text>
          </View>
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
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset: {width: 1, height: 1},
    shadowColor: 'red',
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {
    // flex: 1,
    // backgroundColor: '#ffffff',
    color: '#000000',
    fontSize: 12,
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end',
  },
});
