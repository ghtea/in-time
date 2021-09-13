import React, { useMemo } from 'react';
import {StyleSheet} from "react-native"
import {View, Text, FlatList} from "@/components/atoms"
import { Routine, RoutineCategory } from '@/utils/types';
import { ListItemRoutine } from '@/components/organisms/ListItemRoutine';

export const HomeTodayScreen = () => {

  const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {

    }
  })

  // dayjs().format("hh-mm")
  const listData: Routine[] = useMemo(()=>{
    return ([
      {startAt: "00-00", endAt: "07:30", length: 540, title: "Sleep", category: RoutineCategory.SLEEP}
    ])
  },[])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={listData}
        renderItem={({item}) => <ListItemRoutine data={item}/>}
      />
    </View>
  );
}