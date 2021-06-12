import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface IEnvironmentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

const EnvironmentButton: React.FC<IEnvironmentButtonProps> = ({
  title,
  active = false,
  ...props
}) => {
  return (
    <RectButton
      style={[styles.container, active && styles.activeContainer]}
      {...props}
    >
      <Text style={[styles.text, active && styles.activeText]}>{title}</Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    width: 76,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 5,
  },
  activeContainer: {
    backgroundColor: colors.green_light,
  },
  text: {
    color: colors.heading,
    fontFamily: fonts.heading,
  },
  activeText: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  },
});

export default EnvironmentButton;
