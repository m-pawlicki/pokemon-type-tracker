export interface PokeType {
    name: string;
    multipliers: {
      superEff: string[];
      notVeryEff: string[];
      neverEff: string[];
    };
  }

export const TYPES: string[] = [
  'normal','fire','water','electric','grass','ice','fighting','poison','ground','flying','psychic','bug','rock','ghost','dragon','dark','steel','fairy'
]

export const TYPEATK: PokeType[] = [
    {name: 'normal', multipliers: {
      superEff: [''],
      notVeryEff: ['rock','steel'],
      neverEff: ['ghost']
    }},
    {name: 'fire', multipliers: {
      superEff: ['grass','ice','bug','steel'],
      notVeryEff: ['fire','water','rock','dragon'],
      neverEff: ['']
    }},
    {name: 'water', multipliers: {
      superEff: ['fire','ground','rock'],
      notVeryEff: ['water','grass','dragon'],
      neverEff: ['']
    }},
    {name: 'electric', multipliers: {
      superEff: ['water','flying'],
      notVeryEff: ['electric','grass','dragon'],
      neverEff: ['ground']
    }},
    {name: 'grass', multipliers: {
      superEff: ['water','ground','rock'],
      notVeryEff: ['fire','grass','poison','flying','bug','dragon','steel'],
      neverEff: ['']
    }},
    {name: 'ice', multipliers: {
      superEff: ['grass','ground','flying','dragon'],
      notVeryEff: ['fire','water','ice','steel'],
      neverEff: ['']
    }},
    {name: 'fighting', multipliers: {
      superEff: ['normal','ice','rock','dark','steel'],
      notVeryEff: ['poison','flying','psychic','bug','fairy'],
      neverEff: ['ghost']
    }},
    {name: 'poison', multipliers: {
      superEff: ['grass','fairy'],
      notVeryEff: ['poison','ground','rock','ghost'],
      neverEff: ['steel']
    }},
    {name: 'ground', multipliers: {
      superEff: ['fire','electric','poison','rock','steel'],
      notVeryEff: ['grass','bug'],
      neverEff: ['flying']
    }},
    {name: 'flying', multipliers: {
      superEff: ['grass','fighting','bug'],
      notVeryEff: ['electric','rock','steel'],
      neverEff: ['']
    }},
    {name: 'psychic', multipliers: {
      superEff: ['fighting','poison'],
      notVeryEff: ['psychic','steel'],
      neverEff: ['dark']
    }},
    {name: 'bug', multipliers: {
      superEff: ['grass','psychic','dark'],
      notVeryEff: ['fire','fighting','poison','flying','ghost','steel','fairy'],
      neverEff: ['']
    }},
    {name: 'rock', multipliers: {
      superEff: ['fire','ice','flying','bug'],
      notVeryEff: ['fighting','ground','steel'],
      neverEff: ['']
    }},
    {name: 'ghost', multipliers: {
      superEff: ['psychic','ghost'],
      notVeryEff: ['dark'],
      neverEff: ['normal']
    }},
    {name: 'dragon', multipliers: {
      superEff: ['dragon'],
      notVeryEff: ['steel'],
      neverEff: ['fairy']
    }},
    {name: 'dark', multipliers: {
      superEff: ['psychic','ghost'],
      notVeryEff: ['fighting','dark','fairy'],
      neverEff: ['']
    }},
    {name: 'steel', multipliers: {
      superEff: ['ice','rock','fairy'],
      notVeryEff: ['fire','water','electric','steel'],
      neverEff: ['']
    }},
    {name: 'fairy', multipliers: {
      superEff: ['fighting','dragon','dark'],
      notVeryEff: ['fire','poison','steel'],
      neverEff: ['']
    }}
    ];

    export const TYPEDEF: PokeType[] = [
      {name: 'normal', multipliers: {
        superEff: ['fighting'],
        notVeryEff: [''],
        neverEff: ['ghost']
      }},
      {name: 'fire', multipliers: {
        superEff: ['water','ground','rock'],
        notVeryEff: ['fire','grass','ice','bug','steel','fairy'],
        neverEff: ['']
      }},
      {name: 'water', multipliers: {
        superEff: ['electric','grass'],
        notVeryEff: ['fire','water','ice','steel'],
        neverEff: ['']
      }},
      {name: 'electric', multipliers: {
        superEff: ['ground'],
        notVeryEff: ['electric','flying','steel'],
        neverEff: ['']
      }},
      {name: 'grass', multipliers: {
        superEff: ['fire','ice','poison','flying','bug'],
        notVeryEff: ['water','electric','grass','ground'],
        neverEff: ['']
      }},
      {name: 'ice', multipliers: {
        superEff: ['fire','fighting','rock','steel'],
        notVeryEff: ['ice'],
        neverEff: ['']
      }},
      {name: 'fighting', multipliers: {
        superEff: ['flying','psychic','fairy'],
        notVeryEff: ['bug','rock','dark'],
        neverEff: ['']
      }},
      {name: 'poison', multipliers: {
        superEff: ['ground','psychic'],
        notVeryEff: ['grass','fighting','poison','bug','fairy'],
        neverEff: ['']
      }},
      {name: 'ground', multipliers: {
        superEff: ['water','grass','ice'],
        notVeryEff: ['poison','rock'],
        neverEff: ['electric']
      }},
      {name: 'flying', multipliers: {
        superEff: ['electric','ice','rock'],
        notVeryEff: ['grass','fighting','bug'],
        neverEff: ['ground']
      }},
      {name: 'psychic', multipliers: {
        superEff: ['bug','ghost','dark'],
        notVeryEff: ['fighting','psychic'],
        neverEff: ['']
      }},
      {name: 'bug', multipliers: {
        superEff: ['fire','flying','rock'],
        notVeryEff: ['grass','fighting','ground'],
        neverEff: ['']
      }},
      {name: 'rock', multipliers: {
        superEff: ['water','grass','fighting','ground','steel'],
        notVeryEff: ['normal','fire','poison','flying'],
        neverEff: ['']
      }},
      {name: 'ghost', multipliers: {
        superEff: ['ghost','dark'],
        notVeryEff: ['poison','bug'],
        neverEff: ['normal','fighting']
      }},
      {name: 'dragon', multipliers: {
        superEff: ['ice','dragon','fairy'],
        notVeryEff: ['fire','water','electric','grass'],
        neverEff: ['']
      }},
      {name: 'dark', multipliers: {
        superEff: ['fighting','bug','fairy'],
        notVeryEff: ['ghost','dark'],
        neverEff: ['psychic']
      }},
      {name: 'steel', multipliers: {
        superEff: ['fire','fighting','ground'],
        notVeryEff: ['normal','grass','ice','flying','psychic','bug','rock','dragon','steel','fairy'],
        neverEff: ['poison']
      }},
      {name: 'fairy', multipliers: {
        superEff: ['poison','steel'],
        notVeryEff: ['fighting','bug','dark'],
        neverEff: ['dragon']
      }}
      ];