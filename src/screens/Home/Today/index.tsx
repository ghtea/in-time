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
    indicator: {
      position: "absolute",
      width: "100%",
      height: 3,
      backgroundColor: "#007AFF"
    },
    side: {
      flexGrow: 0,
      flexShrink: 0,
      width: 30,
      backgroundColor: "#ffffff",
      borderColor: "#F0F0F0",
      borderRightWidth: 2,
    },
    clockWrapper: {
      width: "100%",
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    clock: {
      color: "#909090"
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

  const minStartAt = useMemo(()=>(listData.length > 0 ? listData[0].startAt : 0),[])

  const maxEndAt = useMemo(()=>(listData.length > 0 ? listData[listData.length-1].endAt : 24 * 60),[])

  const clockList = [3,6,9,12,15,18,21,24].filter(item => item * 60 >= minStartAt)

  return (
    <View style={ss.root}>
      <View style={ss.main}>
        <View></View>

        <View
          style={[ss.side, {height: (maxEndAt-minStartAt) * minuteToHeightRatio }]}
        >
          {clockList.map(item=>(
            <View style={[ss.clockWrapper, {top: item * 60 * minuteToHeightRatio}]}>
              <Text style={ss.clock}>{item}</Text>
            </View>
          ))}
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