export type Routine = {
  id: number;
  
  category: RoutineCategory | RoutineCategory[]
  title: string

  startAt: number // minutes after 00:00
  endAt: number // minutes after 00:00

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