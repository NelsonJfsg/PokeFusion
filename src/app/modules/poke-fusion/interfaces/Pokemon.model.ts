export interface Pokemon {
  name : string;
  id : number;
  isFusioned ?: boolean;
  types : Type[];
  stats : Stat[];
  abilities : Ability[];
  sprites : Sprites;
}

export interface Stat {
  base_stat: number;
  effort:    number;
  stat:      Species;
}

export interface Type {
  slot : number;
  type : Species;
}

export interface Ability {
  ability:   Species | null;
  is_hidden: boolean;
  slot:      number;
}


export interface Species {
  name: string;
  url:  string;
}

export interface Sprites {
  back_default:       string;
  front_default:      string;
}