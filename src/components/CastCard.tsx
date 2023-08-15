import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import { BORDERRADIUS, COLOR, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';

export default function CastCard(props: any) {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    cardImage: {
        aspectRatio: 1920 / 2880,
        borderRadius: BORDERRADIUS.radius_25 * 4,
    },
    title: {
        alignSelf: 'stretch',
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_12,
        color: COLOR.White,
    },
    subtitle: {
        alignSelf: 'stretch',
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_10,
        color: COLOR.White,
    },
  });
  return (
    <View style={[styles.container, props.shouldMarginatedAtEnd ? props.isFirst ? {marginLeft: SPACING.space_24} : props.isLast ? {marginLeft: SPACING.space_24} : {} : {}, {maxWidth: props.cardWidth}]}>
      <Image source={{uri: props.imagePath}} style={[styles.cardImage, {width: props.cardWidth}]} />
      <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
      <Text style={styles.subtitle}>{props.subtitle}</Text>
    </View>
  );
}
