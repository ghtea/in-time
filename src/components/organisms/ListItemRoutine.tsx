import React, { useMemo } from 'react';
import {StyleSheet} from "react-native"
import {View, Text, FlatList} from "@/components/atoms"
import { Routine, RoutineCategory } from '@/utils/types';

export type ListItemRoutineProps = {
  data: Routine
}

export const ListItemRoutine: React.FunctionComponent<ListItemRoutineProps> = ({
  data
}) => {

  const {title, startAt, endAt, category} = data;

  const ss = StyleSheet.create({
    root: {
      width: "100%",
     flex: 1,
     paddingTop: 22
    },
    item: {

    }
  })


  return (
    <View style={ss.root}>
      <Text>{title}</Text>

      <Text>{`${startAt} - ${endAt}`}</Text>
    </View>
  );
}