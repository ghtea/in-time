export type Routine = {
  category: RoutineCategory | RoutineCategory[]
  title: string

  startAt: string // 
  endAt: string // "hh-ss"   중간에 끊길수 있ㅏ
  length: number // minutes

  done?: boolean
}

export enum RoutineCategory {
  SLEEP = "sleep",
  WORK = "work",
  STUDY = "study",
  MOVEMENT = "movement",
  MEAL = "meal",
  EXERCISE = "exercise",
  GAME = "game"
}