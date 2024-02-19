import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import { useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const giftRef = useRef();
  const heartRef = useRef();
  const [liked, setLiked] = useState(false)

  const clickGift = () => {
    giftRef.current.play();
  };
  const clickToLike = () => {
    if (liked) {
      heartRef.current.reset();
    } else {
      heartRef.current.play(0, 50);
    }
    setLiked(!liked)
  };

  return (
    <View style={styles.container}>

      <View style={styles.helloContainer}>
        <LottieView
          style={styles.animation}
          source={require("./assets/hello.json")}
          autoPlay
          loop
        />
      </View>

      <View style={styles.row} >
        <Pressable
          style={styles.animationContainer}
          onPress={clickToLike}

        >

          <LottieView
            style={styles.animation}
            ref={heartRef}
            loop={false}
            source={require("./assets/heart.json")}

          />

        </Pressable >
        <Pressable
          style={styles.animationContainer}
          onPress={clickGift}
        >
          <LottieView
            style={styles.animation}
            ref={giftRef}
            loop={false}
            source={require("./assets/gift.json")}

          />

        </Pressable>

      </View>
      <View style={styles.row}>
        <Text style={styles.text}>React Native Lottie Animation</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 10
  },
  helloContainer: {
    height: 300,
    aspectRatio: 1
  },
  animationContainer: {
    height: 250,
    aspectRatio: 1
  },
  animation: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold'
  }
});
