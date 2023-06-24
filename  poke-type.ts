export interface PokeType {
    name: string;
    multipliers: {
      superEff?: string[],
      notVeryEff?: string[],
      neverEff?: string[]
    };
  }

export const TYPES: PokeType[] = [
    {name: 'normal', multipliers: {notVeryEff: ['rock','steel'], neverEff: ['ghost']}},
    {name: 'fire', multipliers: {superEff: ['grass','ice','bug','steel'], notVeryEff: ['fire','water','rock','dragon']}},
    {name: 'water', multipliers: {superEff: ['fire','ground','rock'], notVeryEff: ['water','grass','dragon']}},
    {name: 'electric', multipliers: {superEff: ['water','flying'], notVeryEff: ['electric','grass','dragon'], neverEff: ['ground']}},
    {name: 'grass', multipliers: {superEff: ['water','ground','rock'], notVeryEff: ['fire','grass','poison','flying','bug','dragon','steel']}},
    {name: 'ice', multipliers: {superEff: ['grass','ground','flying','dragon'], notVeryEff: ['fire','water','ice','steel']}},
    {name: 'fighting', multipliers: {superEff: ['normal','ice','rock','dark','steel'], notVeryEff: ['poison','flying','psychic','bug','fairy'], neverEff: ['ghost']}},
    {name: 'poison', multipliers: {superEff: ['grass','fairy'], notVeryEff: ['poison','ground','rock','ghost'], neverEff: ['steel']}},
    {name: 'ground', multipliers: {superEff: ['fire','electric','poison','rock','steel'], notVeryEff: ['grass','bug'], neverEff: ['flying']}},
    {name: 'flying', multipliers: {superEff: ['grass','fighting','bug'], notVeryEff: ['electric','rock','steel']}},
    {name: 'psychic', multipliers: {superEff: ['fighting','poison'], notVeryEff: ['psychic','steel'], neverEff: ['dark']}},
    {name: 'bug', multipliers: {superEff: ['grass','psychic','dark'], notVeryEff: ['fire','fighting','poison','flying','ghost','steel','fairy'], neverEff: []}},
    {name: 'rock', multipliers: {superEff: ['fire','ice','flying','bug'], notVeryEff: ['fighting','ground','steel']}},
    {name: 'ghost', multipliers: {superEff: ['psychic','ghost'], notVeryEff: ['dark'], neverEff: ['normal']}},
    {name: 'dragon', multipliers: {superEff: ['dragon'], notVeryEff: ['steel'], neverEff: ['fairy']}},
    {name: 'dark', multipliers: {superEff: ['psychic','ghost'], notVeryEff: ['fighting','dark','fairy']}},
    {name: 'steel', multipliers: {superEff: ['ice','rock','fairy'], notVeryEff: ['fire','water','electric','steel']}},
    {name: 'fairy', multipliers: {superEff: ['fighting','dragon','dark'], notVeryEff: ['fire','poison','steel']}}
    ];