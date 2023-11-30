import { Component, jsx } from 'butterfloat'
import { GameVm } from '../models/gamevm'
import RaceNode from './race'
import ClassNode from './class'

export const NodeComponents: Record<string, (vm: GameVm) => Component> = {
  class: (game) => () => <ClassNode game={game} />,
  race: (game) => () => <RaceNode game={game} />,
}
