import React, { useMemo } from 'react';
import {StyleSheet} from "react-native"
import {View, Text, FlatList} from "@/components/atoms"
import { Routine, RoutineCategory } from '@/utils/types';
import { ListItemRoutine } from '@/components/organisms/ListItemRoutine';

export const HomeTodayScreen = () => {

  const ss = StyleSheet.create({
    root: {
      
    },
    main: {
      flexDirection: "row",
      alignItems: 'center', 
      justifyContent: 'center' 
    },
    side: {
      flexGrow: 0,
      flexShrink: 0,
    },
    list: {
      flexGrow: 1,
      flexShrink: 1,
    }
  })

  // TODO: use differnt library for swipe
  // https://medium.com/@mendes.develop/swipe-gestures-in-react-native-with-react-native-gesture-handler-9131ea2ebd9

  // dayjs().format("hh-mm")
  const listData: Routine[] = useMemo(()=>{
    return ([
      {startAt: "00-00", endAt: "07:30", length: 540, title: "Sleep", category: RoutineCategory.SLEEP}
    ]).map((item,index) => ({...item, key: `${item.title}-${index}`}))
  },[])

  return (
    <View style={ss.root}>
      <View style={ss.main}>
        <View
          style={ss.side}
        >
          <Text>side</Text>
        </View>

        <FlatList
          style={ss.list}
          data={listData}
          renderItem={({item}) => <ListItemRoutine data={item}/>}
        />
      </View>
    </View>
  );
}