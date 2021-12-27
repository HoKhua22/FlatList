import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  Image,
  View,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import { Divider } from 'react-native-elements';
import Header from './components/Header';

const DATA = [
  {
    id: '1',
    img: require('./assets/img1.png'),
    title: 'Lorem ipsum dolor sit amet, consectetur adipsiscing elit.',
    des: 'Lorem ispsum dolor sit amet, consectetur adipiscing elit. Curabitur est volutpat id ut cursus venenatis ...',
    time: '8:00am, 21 May 2020',
    spa: 'SPA-01',
  },
  {
    id: '2',
    img: require('./assets/img2.png'),
    title: 'Lorem ipsum dolor sit amet, consectetur adipsiscing elit.',
    des: 'Lorem ispsum dolor sit amet, consectetur adipiscing elit. Curabitur est volutpat id ut cursus venenatis ...',
    time: '8:00am, 21 May 2020',
    spa: 'SPA-04',
  },
];

const Item = ({ item }) => (
  <View style={styles.item}>
    <Image style={styles.img} source={item.img} />
    <Text style={styles.title}>{item.title}</Text>
    <Text>{item.des}</Text>
    <View style={styles.postFooter}>
      <Text style={styles.timeIcon}>
        {' '}
        <Image
          source={require('./assets/alarm.png')}
          style={{ width: 30, height: 30 }}
        />
        {item.time}
      </Text>
      <Text style={styles.spa}>{item.spa}</Text>
    </View>
    <Divider
      style={{ backgroundColor: 'black', paddingTop: 1, marginTop: 4 }}
    />
  </View>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text style={styles.titleTab}>My Posts</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  titleTab: {
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222222',
  },
  item: {
    padding: 20,
    marginTop: -20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  img: {
    width: 350,
    borderRadius: 4,
  },
  postFooter: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  timeIcon: {
    marginTop: 2,
  },
  spa: {
    color: 'red',
    fontWeight: 'bold',
    marginTop: 18,
  },
});

export default App;
