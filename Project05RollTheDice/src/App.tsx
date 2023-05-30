import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

// import DiceOne from '../assets/One.png';
// import DiceTwo from '../assets/Two.png';
// import DiceThree from '../assets/Three.png';
// import DiceFour from '../assets/Four.png';
// import DiceFive from '../assets/Five.png';
// import DiceSix from '../assets/Six.png';

const diceImages: ImageProps = {
  1: require('../assets/1.png'),
  2: require('../assets/2.png'),
  3: require('../assets/3.png'),
  4: require('../assets/4.png'),
  5: require('../assets/5.png'),
  6: require('../assets/6.png'),
};

const bgImages: ImageProps = {
  1: require('../assets/bg_1.jpg'),
  2: require('../assets/bg_2.jpg'),
  3: require('../assets/bg_3.jpg'),
};

type ImageProps = PropsWithChildren<{
  [key: number]: ImageSourcePropType;
}>;

type DiceProps = PropsWithChildren<{
  image1Url: ImageSourcePropType;
  image2Url: ImageSourcePropType;
}>;

// optional
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({image1Url, image2Url}: DiceProps): JSX.Element => {
  return (
    <View style={styles.diceContainer}>
      <Image source={image1Url} style={styles.diceImage} />
      <Image source={image2Url} style={styles.diceImage} />
    </View>
  );
};

export default function App(): JSX.Element {
  // const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const [firstDice, setFirstDice] = useState(2);
  const [secondDice, setSecondDice] = useState(4);
  const [bgImage, setBgImage] = useState(1);
  // let randomNumber = Math.floor(Math.random() * 6) + 1;

  const randomNum = (min = 1, max = 6) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const getDiceNum = (prev: number, min = 1, max = 6): number => {
    let num = randomNum(min, max);
    if (prev == num) {
      return getDiceNum(prev, min, max);
    }
    return num;
  };

  const rollDiceOnTap = () => {
    setFirstDice(prev => getDiceNum(prev));
    setSecondDice(prev => getDiceNum(prev));
    setBgImage(prev => getDiceNum(prev, 1, 3));
    ReactNativeHapticFeedback.trigger('impactHeavy', options);
    // ReactNativeHapticFeedback.trigger('impactLight', options);
  };
  // console.log('bgImage', bgImage);

  return (
    <ImageBackground source={bgImages[bgImage]} style={styles.imageWrap}>
      <View style={styles.container}>
        <Dice
          image1Url={diceImages[firstDice]}
          image2Url={diceImages[secondDice]}
        />
        <Pressable onPress={rollDiceOnTap}>
          <Text style={styles.rollDiceBtnText}>Roll the Dice</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    elevation: 2,
  },
  imageWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  diceContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  diceImage: {
    marginHorizontal: 10,
    width: 125,
    height: 125,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
    backgroundColor: '#333',
  },
});
