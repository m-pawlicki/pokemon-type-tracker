export interface PokeType {
    name: string;
    multipliers: {
      superEff: string[];
      eff: string[];
      notVeryEff: string[];
      neverEff: string[];
    };
  }

export const TYPES: PokeType[] = [
    {name: 'normal', multipliers: {
      superEff: [''],
      eff: ['normal','fire','water','electric','grass','ice','fighting','poison','ground','flying','psychic','bug','dragon','dark','fairy'],
      notVeryEff: ['rock','steel'],
      neverEff: ['ghost']
    }},
    {name: 'fire', multipliers: {
      superEff: ['grass','ice','bug','steel'],
      eff: ['normal','electric','fighting','poison','ground','flying','psychic','ghost','dark','fairy'],
      notVeryEff: ['fire','water','rock','dragon'],
      neverEff: ['']
    }},
    {name: 'water', multipliers: {
      superEff: [''],
      eff: [''],
      notVeryEff: [''],
      neverEff: ['']
    }},
    {name: 'electric', multipliers: {
      superEff: [''],
      eff: [''],
      notVeryEff: [''],
      neverEff: ['']
    }},
    {name: 'grass', multipliers: {
      superEff: [''],
      eff: [''],
      notVeryEff: [''],
      neverEff: ['']
    }},
    {name: 'ice', multipliers: {
      superEff: [''],
      eff: [''],
      notVeryEff: [''],
      neverEff: ['']
    }},
    {name: 'fighting', multipliers: {
      superEff: [''],
      eff: [''],
      notVeryEff: [''],
      neverEff: ['']
    }},
    {name: 'poison', multipliers: {
      superEff: [''],
      eff: [''],
      notVeryEff: [''],
      neverEff: ['']
    }},
    {name: 'ground', multipliers: {
      superEff: [''],
      eff: [''],
      notVeryEff: [''],
      neverEff: ['']
    }},
    {name: 'flying', multipliers: {
      superEff: [''],
      eff: [''],
      notVeryEff: [''],
      neverEff: ['']
    }},
    {name: 'psychic', multipliers: {
      superEff: [''],
      eff: [''],
      notVeryEff: [''],
      neverEff: ['']
    }},
    {name: 'bug', multipliers: {
      superEff: [''],
      eff: [''],
      notVeryEff: [''],
      neverEff: ['']
    }},
    {name: 'rock', multipliers: {
      superEff: [''],
      eff: [''],
      notVeryEff: [''],
      neverEff: ['']
    }},
    {name: 'ghost', multipliers: {
      superEff: [''],
      eff: [''],
      notVeryEff: [''],
      neverEff: ['']
    }},
    {name: 'dragon', multipliers: {
      superEff: [''],
      eff: [''],
      notVeryEff: [''],
      neverEff: ['']
    }},
    {name: 'dark', multipliers: {
      superEff: [''],
      eff: [''],
      notVeryEff: [''],
      neverEff: ['']
    }},
    {name: 'steel', multipliers: {
      superEff: [''],
      eff: [''],
      notVeryEff: [''],
      neverEff: ['']
    }},
    {name: 'fairy', multipliers: {
      superEff: [''],
      eff: [''],
      notVeryEff: [''],
      neverEff: ['']
    }}
    ];