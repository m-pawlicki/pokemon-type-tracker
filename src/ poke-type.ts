interface PokeType {
  [key: string]: {
    superEff: string[],
    notVeryEff: string[],
    neverEff: string[]
  };
}

export const TYPEATK: PokeType =
    {
      normal: {
        superEff: [],
        notVeryEff: ['rock','steel'],
        neverEff: ['ghost']
      },
      fire: {
        superEff: ['grass','ice','bug','steel'],
        notVeryEff: ['fire','water','rock','dragon'],
        neverEff: []
      },
      water: {
        superEff: ['fire','ground','rock'],
        notVeryEff: ['water','grass','dragon'],
        neverEff: []
      },
      electric: {
        superEff: ['water','flying'],
        notVeryEff: ['electric','grass','dragon'],
        neverEff: ['ground']
      },
      grass: {
        superEff: ['water','ground','rock'],
        notVeryEff: ['fire','grass','poison','flying','bug','dragon','steel'],
        neverEff: []
      },
      ice: {
        superEff: ['grass','ground','flying','dragon'],
        notVeryEff: ['fire','water','ice','steel'],
        neverEff: []
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
        neverEff: []
      },
      psychic: {
        superEff: ['fighting','poison'],
        notVeryEff: ['psychic','steel'],
        neverEff: ['dark']
      },
      bug: {
        superEff: ['grass','psychic','dark'],
        notVeryEff: ['fire','fighting','poison','flying','ghost','steel','fairy'],
        neverEff: []
      },
      rock: {
        superEff: ['fire','ice','flying','bug'],
        notVeryEff: ['fighting','ground','steel'],
        neverEff: []
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
        neverEff: []
      },
      steel: {
        superEff: ['ice','rock','fairy'],
        notVeryEff: ['fire','water','electric','steel'],
        neverEff: []
      },
      fairy: {
        superEff: ['fighting','dragon','dark'],
        notVeryEff: ['fire','poison','steel'],
        neverEff: []
      }
    };
    
    export const TYPEDEF: PokeType =
      {
        normal: {
          superEff: ['fighting'],
          notVeryEff: [],
          neverEff: ['ghost']
        },
        fire: {
          superEff: ['water','ground','rock'],
          notVeryEff: ['fire','grass','ice','bug','steel','fairy'],
          neverEff: []
        },
        water: {
          superEff: ['electric','grass'],
          notVeryEff: ['fire','water','ice','steel'],
          neverEff: []
        },
        electric: {
          superEff: ['ground'],
          notVeryEff: ['electric','flying','steel'],
          neverEff: []
        },
        grass: {
          superEff: ['fire','ice','poison','flying','bug'],
          notVeryEff: ['water','electric','grass','ground'],
          neverEff: []
        },
        ice: {
          superEff: ['fire','fighting','rock','steel'],
          notVeryEff: ['ice'],
          neverEff: []
        },
        fighting: {
          superEff: ['flying','psychic','fairy'],
          notVeryEff: ['bug','rock','dark'],
          neverEff: []
        },
        poison: {
          superEff: ['ground','psychic'],
          notVeryEff: ['grass','fighting','poison','bug','fairy'],
          neverEff: []
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
          neverEff: []
        },
        bug: {
          superEff: ['fire','flying','rock'],
          notVeryEff: ['grass','fighting','ground'],
          neverEff: []
        },
        rock: {
          superEff: ['water','grass','fighting','ground','steel'],
          notVeryEff: ['normal','fire','poison','flying'],
          neverEff: []
        },
        ghost: {
          superEff: ['ghost','dark'],
          notVeryEff: ['poison','bug'],
          neverEff: ['normal','fighting']
        },
        dragon: {
          superEff: ['ice','dragon','fairy'],
          notVeryEff: ['fire','water','electric','grass'],
          neverEff: []
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
    
    export const POKECHART =
      {
        normal: {normal: 1, fire: 1, water: 1, electric: 1, grass: 1, ice: 1, fighting: 1, poison: 1, ground: 1, flying: 1, psychic: 1, bug: 1, rock: 0.5, ghost: 0, dragon: 1, dark: 1, steel: 0.5, fairy: 1},
        fire: {normal: 1, fire: 0.5, water: 0.5, electric: 1, grass: 2, ice: 2, fighting: 1, poison: 1, ground: 1, flying: 1, psychic: 1, bug: 2, rock: 0.5, ghost: 1, dragon: 0.5, dark: 1, steel: 2, fairy: 1},
        water: {normal: 1, fire: 2, water: 0.5, electric: 1, grass: 0.5, ice: 1, fighting: 1, poison: 1, ground: 2, flying: 1, psychic: 1, bug: 1, rock: 2, ghost: 1, dragon: 0.5, dark: 1, steel: 1, fairy: 1},
        electric: {normal: 1, fire: 1, water: 2, electric: 0.5, grass: 0.5, ice: 1, fighting: 1, poison: 1, ground: 0, flying: 2, psychic: 1, bug: 1, rock: 1, ghost: 1, dragon: 0.5, dark: 1, steel: 1, fairy: 1},
        grass: {normal: 1, fire: 0.5, water: 2, electric: 1, grass: 0.5, ice: 1, fighting: 1, poison: 0.5, ground: 2, flying: 0.5, psychic: 1, bug: 0.5, rock: 2, ghost: 1, dragon: 0.5, dark: 1, steel: 0.5, fairy: 1},
        ice: {normal: 1, fire: 0.5, water: 0.5, electric: 1, grass: 2, ice: 0.5, fighting: 1, poison: 1, ground: 2, flying: 2, psychic: 1, bug: 1, rock: 1, ghost: 1, dragon: 2, dark: 1, steel: 0.5, fairy: 1},
        fighting: {normal: 2, fire: 1, water: 1, electric: 1, grass: 1, ice: 2, fighting: 1, poison: 0.5, ground: 1, flying: 0.5, psychic: 0.5, bug: 0.5, rock: 2, ghost: 0, dragon: 1, dark: 2, steel: 2, fairy: 0.5},
        poison: {normal: 1, fire: 1, water: 1, electric: 1, grass: 2, ice: 1, fighting: 1, poison: 0.5, ground: 0.5, flying: 1, psychic: 1, bug: 1, rock: 0.5, ghost: 0.5, dragon: 1, dark: 1, steel: 0, fairy: 2},
        ground: {normal: 1, fire: 2, water: 1, electric: 2, grass: 0.5, ice: 1, fighting: 1, poison: 2, ground: 1, flying: 0, psychic: 1, bug: 0.5, rock: 2, ghost: 1, dragon: 1, dark: 1, steel: 2, fairy: 1},
        flying: {normal: 1, fire: 1, water: 1, electric: 0.5, grass: 2, ice: 1, fighting: 2, poison: 1, ground: 1, flying: 1, psychic: 1, bug: 2, rock: 0.5, ghost: 1, dragon: 1, dark: 1, steel: 0.5, fairy: 1},
        psychic: {normal: 1, fire: 1, water: 1, electric: 1, grass: 1, ice: 1, fighting: 2, poison: 2, ground: 1, flying: 1, psychic: 0.5, bug: 1, rock: 1, ghost: 1, dragon: 1, dark: 0, steel: 0.5, fairy: 1},
        bug: {normal: 1, fire: 0.5, water: 1, electric: 1, grass: 2, ice: 1, fighting: 0.5, poison: 0.5, ground: 1, flying: 0.5, psychic: 2, bug: 1, rock: 1, ghost: 0.5, dragon: 1, dark: 2, steel: 0.5, fairy: 0.5},
        rock: {normal: 1, fire: 2, water: 1, electric: 1, grass: 1, ice: 2, fighting: 0.5, poison: 1, ground: 0.5, flying: 2, psychic: 1, bug: 2, rock: 1, ghost: 1, dragon: 1, dark: 1, steel: 0.5, fairy: 1},
        ghost: {normal: 0, fire: 1, water: 1, electric: 1, grass: 1, ice: 1, fighting: 1, poison: 1, ground: 1, flying: 1, psychic: 2, bug: 1, rock: 1, ghost: 2, dragon: 1, dark: 0.5, steel: 1, fairy: 1},
        dragon: {normal: 1, fire: 1, water: 1, electric: 1, grass: 1, ice: 1, fighting: 1, poison: 1, ground: 1, flying: 1, psychic: 1, bug: 1, rock: 1, ghost: 1, dragon: 2, dark: 1, steel: 0.5, fairy: 0},
        dark: {normal: 1, fire: 1, water: 1, electric: 1, grass: 1, ice: 1, fighting: 0.5, poison: 1, ground: 1, flying: 1, psychic: 2, bug: 1, rock: 1, ghost: 2, dragon: 1, dark: 0.5, steel: 1, fairy: 0.5},
        steel: {normal: 1, fire: 0.5, water: 0.5, electric: 0.5, grass: 1, ice: 2, fighting: 1, poison: 1, ground: 1, flying: 1, psychic: 1, bug: 1, rock: 2, ghost: 1, dragon: 1, dark: 1, steel: 0.5, fairy: 2},
        fairy: {normal: 1, fire: 0.5, water: 1, electric: 1, grass: 1, ice: 1, fighting: 2, poison: 0.5, ground: 1, flying: 1, psychic: 1, bug: 1, rock: 1, ghost: 1, dragon: 2, dark: 2, steel: 0.5, fairy: 1}
      };

    export const TYPES: string[] = Object.keys(POKECHART);