import { ReactNode } from "react";
import {View, Text} from "@/components/atoms"
import { Animated, StyleSheet } from "react-native";
import React from "react";

export const renderLeftActions = (
  progressAnimatedValue: Animated.AnimatedInterpolation,
  dragAnimatedValue: Animated.AnimatedInterpolation
): ReactNode =>{

  const translateX = dragAnimatedValue.interpolate({
    inputRange: [0, 50, 100, 101],
    outputRange: [-20, 0, 0, 1],
  });

  const ss = StyleSheet.create({
    root: {
      
    }
  })

  return (
    <Animated.View style={[ss.root, {transform: [{ translateX: translateX }],}]}>
      <Text>test</Text>
    </Animated.View>
  );
}