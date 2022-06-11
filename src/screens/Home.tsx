import * as React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { User, useGetUsersQuery } from '../common/generated/graphql';

import UserCard from '../common/components/UserCard';

const Home = () => {
  const { data, loading } = useGetUsersQuery();

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="#32B768" size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.users}
        renderItem={({ item }) => <UserCard data={item as User} />}
        contentContainerStyle={styles.characterList}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  characterList: {
    padding: 16,
  },
});