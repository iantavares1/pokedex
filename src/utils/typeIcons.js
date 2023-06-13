import { BsFillHexagonFill } from 'react-icons/bs'
import { IoWaterSharp } from 'react-icons/io5'
import { AiOutlineEye, AiFillBug } from 'react-icons/ai'
import { TbSkull } from 'react-icons/tb'
import { RiMagicFill } from 'react-icons/ri'
import {
  FaRegCircle,
  FaFire,
  FaBolt,
  FaEnvira,
  FaDragon,
  FaSnowflake,
} from 'react-icons/fa'

import {
  GiGhost,
  GiLibertyWing,
  GiStonePile,
  GiSkullCrossedBones,
  GiSwordClash,
  GiPunchBlast,
} from 'react-icons/gi'

export const typeIcons = {
  normal: FaRegCircle,
  fire: FaFire,
  water: IoWaterSharp,
  electric: FaBolt,
  grass: FaEnvira,
  ice: FaSnowflake,
  fighting: GiPunchBlast,
  poison: TbSkull,
  ground: GiStonePile,
  flying: GiLibertyWing,
  psychic: AiOutlineEye,
  bug: AiFillBug,
  rock: BsFillHexagonFill,
  ghost: GiGhost,
  dragon: FaDragon,
  dark: GiSkullCrossedBones,
  steel: GiSwordClash,
  fairy: RiMagicFill,
}
