import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  data: {
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    ranking?: number | null;
  };
}

const UserCard: React.FC<Props> = ({ data }) => {
   return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.player}>{data.firstName + ' ' + data.lastName} </Text>
        <Text style={styles.text}>{data.email}</Text>
        <Text style={styles.ranking}>{data.ranking + '  '}<Ionicons name={'star'} size={15} color={'grey'} /></Text>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 20,
    marginVertical: 8,
    paddingHorizontal: 8,
    paddingVertical: 15,
    backgroundColor: '#F0F0F0',
    flexDirection: 'row',
  },
  details: {
    marginLeft: 8,
    justifyContent: 'space-between',
    flex: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  player: {
    fontWeight: 'bold'
  },
  ranking: {
    fontSize: 16,
    lineHeight: 26
  }
});