import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { COLOR, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'

export default function CategoryHeader(props: any) {
    const styles = StyleSheet.create({
        text: {
            fontFamily: FONTFAMILY.poppins_bold,
            fontSize: FONTSIZE.size_20,
            color: COLOR.White,
            paddingHorizontal: SPACING.space_36,
            paddingVertical: SPACING.space_28,
        }
    })
  return (
    <Text style={styles.text}>{props.title}</Text>
  )
}
