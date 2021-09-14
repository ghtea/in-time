import React, { useMemo } from 'react';
import {StyleSheet} from "react-native"
import {View, Text, FlatList, SwipeListView} from "@/components/atoms"
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

  // TODO: use differnt library for swipe
  // https://medium.com/@mendes.develop/swipe-gestures-in-react-native-with-react-native-gesture-handler-9131ea2ebd9

  // dayjs().format("hh-mm")
  const listData: Routine[] = useMemo(()=>{
    return ([
      {startAt: "00-00", endAt: "07:30", length: 540, title: "Sleep", category: RoutineCategory.SLEEP}
    ]).map((item,index) => ({...item, key: `${item.title}-${index}`}))
  },[])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SwipeListView
      style={{}}
        data={listData}
        renderItem={({item}) => <ListItemRoutine data={item}/>}
        renderHiddenItem={ (data, rowMap) => (
          <View>
              <Text>Left</Text>
              <Text>Right</Text>
          </View>
      )}
      />
    </View>
  );
}