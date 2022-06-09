import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface Props {
  data: {
    firstName?: string | null;
    lastName?: string | null;
  };
}

const UserCard: React.FC<Props> = ({ data }) => {
   return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.text}>{data.firstName}</Text>
        <Text style={styles.text}>{data.lastName}</Text>
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
    paddingVertical: 24,
    backgroundColor: '#F0F0F0',
    flexDirection: 'row',
  },
  image: { width: 70, height: 70 },
  details: {
    marginLeft: 8,
    justifyContent: 'space-between',
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});