interface PokeType {
  [key: string]: {
    superEff: string[],
    notVeryEff: string[],
    neverEff: string[]
  };
}

export const TYPES: string[] = [
  'normal','fire','water','electric','grass','ice','fighting','poison','ground','flying','psychic','bug','rock','ghost','dragon','dark','steel','fairy'
]

export const TYPEATK: PokeType =
    { 
      normal: {
        superEff: [''],
        notVeryEff: ['rock','steel'],
        neverEff: ['ghost']
      },
      fire: {
        superEff: ['grass','ice','bug','steel'],
        notVeryEff: ['fire','water','rock','dragon'],
        neverEff: ['']
      },
      water: {
        superEff: ['fire','ground','rock'],
        notVeryEff: ['water','grass','dragon'],
        neverEff: ['']
      },
      electric: {
        superEff: ['water','flying'],
        notVeryEff: ['electric','grass','dragon'],
        neverEff: ['ground']
      },
      grass: {
        superEff: ['water','ground','rock'],
        notVeryEff: ['fire','grass','poison','flying','bug','dragon','steel'],
        neverEff: ['']
      },
      ice: {
        superEff: ['grass','ground','flying','dragon'],
        notVeryEff: ['fire','water','ice','steel'],
        neverEff: ['']
      },
      fighting: {
        superEff: ['normal','ice','rock','dark','steel'],
        notVeryEff: ['poison','flying','psychic','bug','fairy'],
        neverEff: ['ghost']
      },
      poison: {
        superEff: ['grass','fairy'],
        notVeryEff: ['poison','ground','rock','ghost'],
        neverEff: ['steel']
      },
      ground: {
        superEff: ['fire','electric','poison','rock','steel'],
        notVeryEff: ['grass','bug'],
        neverEff: ['flying']
      },
      flying: {
        superEff: ['grass','fighting','bug'],
        notVeryEff: ['electric','rock','steel'],
        neverEff: ['']
      },
      psychic: {
        superEff: ['fighting','poison'],
        notVeryEff: ['psychic','steel'],
        neverEff: ['dark']
      },
      bug: {
        superEff: ['grass','psychic','dark'],
        notVeryEff: ['fire','fighting','poison','flying','ghost','steel','fairy'],
        neverEff: ['']
      },
      rock: {
        superEff: ['fire','ice','flying','bug'],
        notVeryEff: ['fighting','ground','steel'],
        neverEff: ['']
      },
      ghost: {
        superEff: ['psychic','ghost'],
        notVeryEff: ['dark'],
        neverEff: ['normal']
      },
      dragon: {
        superEff: ['dragon'],
        notVeryEff: ['steel'],
        neverEff: ['fairy']
      },
      dark: {
        superEff: ['psychic','ghost'],
        notVeryEff: ['fighting','dark','fairy'],
        neverEff: ['']
      },
      steel: {
        superEff: ['ice','rock','fairy'],
        notVeryEff: ['fire','water','electric','steel'],
        neverEff: ['']
      },
      fairy: {
        superEff: ['fighting','dragon','dark'],
        notVeryEff: ['fire','poison','steel'],
        neverEff: ['']
      }
    };

    export const TYPEDEF: PokeType =
      {
        normal: {
          superEff: ['fighting'],
          notVeryEff: [''],
          neverEff: ['ghost']
        },
        fire: {
          superEff: ['water','ground','rock'],
          notVeryEff: ['fire','grass','ice','bug','steel','fairy'],
          neverEff: ['']
        },
        water: {
          superEff: ['electric','grass'],
          notVeryEff: ['fire','water','ice','steel'],
          neverEff: ['']
        },
        electric: {
          superEff: ['ground'],
          notVeryEff: ['electric','flying','steel'],
          neverEff: ['']
        },
        grass: {
          superEff: ['fire','ice','poison','flying','bug'],
          notVeryEff: ['water','electric','grass','ground'],
          neverEff: ['']
        },
        ice: {
          superEff: ['fire','fighting','rock','steel'],
          notVeryEff: ['ice'],
          neverEff: ['']
        },
        fighting: {
          superEff: ['flying','psychic','fairy'],
          notVeryEff: ['bug','rock','dark'],
          neverEff: ['']
        },
        poison: {
          superEff: ['ground','psychic'],
          notVeryEff: ['grass','fighting','poison','bug','fairy'],
          neverEff: ['']
        },
        ground: {
          superEff: ['water','grass','ice'],
          notVeryEff: ['poison','rock'],
          neverEff: ['electric']
        },
        flying: {
          superEff: ['electric','ice','rock'],
          notVeryEff: ['grass','fighting','bug'],
          neverEff: ['ground']
        },
        psychic: {
          superEff: ['bug','ghost','dark'],
          notVeryEff: ['fighting','psychic'],
          neverEff: ['']
        },
        bug: {
          superEff: ['fire','flying','rock'],
          notVeryEff: ['grass','fighting','ground'],
          neverEff: ['']
        },
        rock: {
          superEff: ['water','grass','fighting','ground','steel'],
          notVeryEff: ['normal','fire','poison','flying'],
          neverEff: ['']
        },
        ghost: {
          superEff: ['ghost','dark'],
          notVeryEff: ['poison','bug'],
          neverEff: ['normal','fighting']
        },
        dragon: {
          superEff: ['ice','dragon','fairy'],
          notVeryEff: ['fire','water','electric','grass'],
          neverEff: ['']
        },
        dark: {
          superEff: ['fighting','bug','fairy'],
          notVeryEff: ['ghost','dark'],
          neverEff: ['psychic']
        },
        steel: {
          superEff: ['fire','fighting','ground'],
          notVeryEff: ['normal','grass','ice','flying','psychic','bug','rock','dragon','steel','fairy'],
          neverEff: ['poison']
        },
        fairy: {
          superEff: ['poison','steel'],
          notVeryEff: ['fighting','bug','dark'],
          neverEff: ['dragon']
        }
      };