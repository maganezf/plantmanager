import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';

import wateringImg from '../assets/watering.png';
import { Feather } from '@expo/vector-icons';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const Welcome: React.FC = () => {
  const navigate = useNavigation().navigate;

  function goToNextPage() {
    navigate('UserIdentification');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'} suas plantas de {'\n'} forma fácil
        </Text>

        <Image source={wateringImg} style={styles.image} resizeMode="contain" />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={goToNextPage}
        >
          <Feather name="chevron-right" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 28,
    lineHeight: 34,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
  },
  image: {
    height: Dimensions.get('window').width * 0.7,
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: colors.heading,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    width: 56,
    height: 56,
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 32,
  },
});

export default Welcome;
