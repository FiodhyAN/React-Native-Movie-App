import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  StatusBar,
  FlatList,
} from 'react-native';
import React, {Component, useState} from 'react';
import {COLOR, SPACING} from '../theme/theme';
import SubMovieCard from '../components/SubMovieCard';
import {baseImagePath, searchMovies} from '../api/apicalls';
import InputHeader from '../components/inputHeader';

const {width, height} = Dimensions.get('screen');

const SearchScreen = ({navigation}: any) => {
  const [searchList, setSearchList] = useState([]);

  const searchMoviesFunction = async (searchText: string) => {
    try {
      let response = await fetch(searchMovies(searchText));
      let json = await response.json();
      setSearchList(json.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <View>
        <FlatList
          data={searchList}
          keyExtractor={(item: any) => item.id}
          bounces={false}
          numColumns={2}
          ListHeaderComponent={
            <View style={styles.inputHeaderContainer}>
              <InputHeader searchFunction={searchMoviesFunction} />
            </View>
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.centerContainer}
          renderItem={({item, index}: any) => (
            <SubMovieCard
              shouldMarginatedAtEnd={false}
              shouldMarginatedAround={true}
              cardFunction={() => {
                navigation.push('MovieDetails', {movieId: item.id});
              }}
              cardWidth={width / 2 - SPACING.space_12 * 2}
              title={item.original_title}
              imagePath={baseImagePath('w342', item.poster_path)}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    width,
    alignItems: 'center',
    backgroundColor: COLOR.Black,
  },
  inputHeaderContainer: {
    display: 'flex',
    marginHorizontal: SPACING.space_36,
    marginVertical: SPACING.space_28 - SPACING.space_12,
  },
  centerContainer: {
    alignItems: 'center',
  },
});

export default SearchScreen;
