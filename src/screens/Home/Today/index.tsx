import React, { useMemo, useState } from 'react';
import {StyleSheet} from "react-native"
import {View, Text, FlatList} from "@/components/atoms"
import { Routine, RoutineCategory } from '@/utils/types';
import { CardRoutine } from '@/components/organisms/CardRoutine';

export const HomeTodayScreen = () => {

  const [minuteToHeightRatio, setMinuteToHeightRatio] = useState<number>(0.5)

  const ss = StyleSheet.create({
    root: {
      
    },
    main: {
      flexDirection: "row",
      alignItems: 'flex-start', 
      justifyContent: 'center' 
    },
    side: {
      flexGrow: 0,
      flexShrink: 0,
    },
    list: {
      flexGrow: 1,
      flexShrink: 1,
    },
    cardRoutineWrapper: {
      width: "100%",
      position: "absolute",
    }
  })

  // TODO: use differnt library for swipe
  // https://medium.com/@mendes.develop/swipe-gestures-in-react-native-with-react-native-gesture-handler-9131ea2ebd9

  //
  // dayjs().format("hh-mm")
  // TODO: sort by startAt
  const listData: Routine[] = useMemo(()=>{
    return ([
      {startAt: 0, endAt: 450, title: "Sleep", category: RoutineCategory.SLEEP, id: 0,},
      {startAt: 550, endAt: 650, title: "Breakfast", category: RoutineCategory.MEAL, id: 1,},
      {startAt: 660, endAt: 1000, title: "Work", category: RoutineCategory.WORK, id: 2,}
    ]).map((item,index) => ({...item, key: `${item.title}-${index}`}))
  },[])

  const startAtMin = useMemo(()=>(listData[0].startAt),[])

  const endAtMax = useMemo(()=>(listData[listData.length-1].endAt),[])

  return (
    <View style={ss.root}>
      <View style={ss.main}>
        <View
          style={ss.side}
        >
          <Text>side</Text>
        </View>

        <View style={ss.list}>
          {listData.map(item=>(
            <View style={[ss.cardRoutineWrapper, {top: item.startAt * minuteToHeightRatio}]}>
              <CardRoutine data={item} key={`card-routine-${item.id}`}/>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}