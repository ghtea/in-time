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
      justifyContent: 'center',
      position: "relative"
    },
    indicatorWrapper: {
      position: "absolute",
      width: "100%",
      top: 66,
    },
    indicator: {
      width: "100%",
      height: 3,
      backgroundColor: "#007AFF",
      zIndex: 100,
    },
    side: {
      width: 30,
      height: 24 * 60 * minuteToHeightRatio,
      backgroundColor: "#ffffff",
      borderColor: "#F0F0F0",
      borderRightWidth: 2,
    },
    clockWrapper: {
      flex: 1,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    clock: {
    },
    clockText: {
      color: "#909090",
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
        <View style={ss.indicatorWrapper}>
          <View style={ss.indicator}></View>
        </View>

        <View
          style={ss.side}
        >
          {clockList.map(item=>(
            <View style={[ss.clockWrapper, {top: 0}]}>
              <View style={ss.clock}>
                <Text style={ss.clockText}>{item}</Text>
              </View>
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