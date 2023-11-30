import { Component, jsx } from 'butterfloat'
import { GameVm } from '../models/gamevm'
import RaceNode from './race'
import ClassNode from './class'
import GenderNode from './gender'
import PronounNode from './pronoun'
import WeaponNode from './weapon'
import BossNode from './boss'

export const NodeComponents: Record<string, (vm: GameVm) => Component> = {
  boss: (game) => () => <BossNode game={game} />,
  class: (game) => () => <ClassNode game={game} />,
  gender: (game) => () => <GenderNode game={game} />,
  pronoun: (game) => () => <PronounNode game={game} />,
  race: (game) => () => <RaceNode game={game} />,
  weapon: (game) => () => <WeaponNode game={game} />,
}
