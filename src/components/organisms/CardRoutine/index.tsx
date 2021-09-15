import React, { useCallback, useMemo } from 'react';
import {Animated, StyleSheet} from "react-native"
import {View, Text, FlatList, Swipeable} from "@/components/atoms"
import { Routine, RoutineCategory } from '@/utils/types';
import { renderLeftActions } from './renderLeftAction';

export type CardRoutineProps = {
  data: Routine
}

export const CardRoutine: React.FunctionComponent<CardRoutineProps> = ({
  data
}) => {

  const {title, startAt, endAt, category} = data;

  const ss = StyleSheet.create({
    swipeableContainer: {
      width: "100%",
    },
    root: {
      width: "100%",
      padding: 8,
      backgroundColor: "red",
    },
    titleText: {
      color: "white",
      fontSize: 18,
    },
  })



  return (
    <Swipeable
      containerStyle={ss.swipeableContainer}
      renderLeftActions={renderLeftActions}
    >
      <View style={ss.root}>
        <Text style={ss.titleText}>{title}</Text>

        <Text>{`${startAt} - ${endAt}`}</Text>
      </View>
    </Swipeable>
  );
}