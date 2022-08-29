import * as sportsIcons from '@/assets/icons/sports-icons'

import type { SportsIconsByCode } from './types'

export const sportsIconsByCode: SportsIconsByCode = {
  ih: sportsIcons.iceHockey,
  s: sportsIcons.soccer,
  g: sportsIcons.golf,
  b: sportsIcons.basketball,
  f: sportsIcons.football,
  cf: sportsIcons.collegeFootball,
  bb: sportsIcons.baseball,
  cust: sportsIcons.custom,
}

export const pickEmTypes = {
  standard: 'standard',
  bestBets: 'best_bets',
  confidentPoints: 'confident_points',
}

export const tournaments = {
  nfl: 'NFL',
}

export const poolTypes = {
  pick_em: 'pick_em',
  survivor: 'survivor',
  playoff: 'playoff',
  bracket: 'bracket',
  qa: 'qa',
  credits: 'credits',
  xrun: 'xrun',
  xrun_mlb: 'xrun_mlb',
  margin: 'margin',
  squares: 'squares',
}

export const pickDeadlineTypes = {
  first_scheduled_tip_off_of_the_week: 'first_scheduled_tip_off_of_the_week',
  first_scheduled_tip_off_of_each_day: 'first_scheduled_tip_off_of_each_day',
  each_game_locks_individually: 'each_game_locks_individually',
  first_game: 'first_game',
  sundays: 'sundays',
}

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const stageRounds = {
  PLAY_OFF_STAGE_1_8: 'PLAY_OFF_STAGE_1_8',
  PLAY_OFF_STAGE_1_4: 'PLAY_OFF_STAGE_1_4',
  PLAY_OFF_STAGE_1_2: 'PLAY_OFF_STAGE_1_2',
  PLAY_OFF_STAGE_FINAL: 'PLAY_OFF_STAGE_FINAL',
}

export const NBAStageNames = {
  PLAY_OFF_STAGE_1_16: 'CONFERENCE 1/8 FINALS',
  PLAY_OFF_STAGE_1_8: 'CONFERENCE QUARTER FINALS',
  PLAY_OFF_STAGE_1_4: 'CONFERENCE SEMI FINALS',
  PLAY_OFF_STAGE_1_2: 'CONFERENCE FINALS',
  PLAY_OFF_STAGE_FINAL: 'NBA FINALS',
}
