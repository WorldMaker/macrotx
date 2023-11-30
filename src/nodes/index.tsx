import { Component, jsx } from 'butterfloat'
import { GameVm } from '../models/gamevm'
import RaceNode from './race'
import ClassNode from './class'
import GenderNode from './gender'
import PronounNode from './pronoun'

export const NodeComponents: Record<string, (vm: GameVm) => Component> = {
  class: (game) => () => <ClassNode game={game} />,
  gender: (game) => () => <GenderNode game={game} />,
  pronoun: (game) => () => <PronounNode game={game} />,
  race: (game) => () => <RaceNode game={game} />,
}
