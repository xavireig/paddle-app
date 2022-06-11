import * as React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { User, useGetUsersQuery } from '../common/generated/graphql';

import UserCard from '../common/components/UserCard';

const Players = () => {
  const { data, loading } = useGetUsersQuery();

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="#FFFFFF" size="large" />
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

export default Players;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66cc00',
  },
  characterList: {
    padding: 16,
  },
});