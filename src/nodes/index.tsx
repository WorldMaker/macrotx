import { Component, jsx } from 'butterfloat'
import { GameVm } from '../components/gamevm'
import RaceNode from './race'

export const NodeComponents: Record<string, (vm: GameVm) => Component> = {
  race: (game) => () => <RaceNode game={game} />,
}
