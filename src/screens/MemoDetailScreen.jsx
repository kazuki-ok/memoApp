import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleVButton';

export default function MemoDetailScreen() {
  return (
    <View style={styles.container}>
      <AppBar/>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2020年12月24日 10:00</Text>
      </View>
      <ScrollView>
        <Text>
          買い物リスト
          書体やレイアウトなどを確認するために用います。
          本文用なので使い方を間違えると不自然に見えることもありますので要注意。
        </Text>
      </ScrollView>
      <CircleButton>+</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  memoHeader: {
    backgroundColor: '#467Fd3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },

  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },

  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16,
  },

});