import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = () => {
  return (
    <View>
      <Text style={styles.headerTitle}>FlatList</Text>
      <View style={styles.viewStyleForLine}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    padding: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  viewStyleForLine: {
    borderBottomColor: '#777777',
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignSelf: 'stretch',
    width: '100%',
  },
});
export default Header;
