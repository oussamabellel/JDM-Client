import { Noeud } from './Noeud';
import { Relation } from './Relation';
import { NoeudType } from './NoeudType'

export class Mot extends Noeud {


    definition: string[];
    Noeuds: Noeud[];
    relationEntrantes: Relation[];
    relationSortantes: Relation[];
    mapEntrantes: Map<string, Relation[]>;
    mapSortantes: Map<string, Relation[]>;

    constructor(id: number,
        nom: string,
        type: NoeudType,
        poids: number,
        motFormate: string,
        relations: Relation[],
        definition: string[],
        Noeuds: Noeud[],
        relationEntrantes: Relation[],
        relationSortantes: Relation[],
        mapEntrantes: Map<string, Relation[]>,
        mapSortantes: Map<string, Relation[]>) {
        super(id, nom, type, poids, motFormate, relations);
        this.definition = definition;
        this.Noeuds = Noeuds,
            this.relationEntrantes = relationEntrantes;
        this.relationSortantes = relationSortantes;
        this.mapEntrantes = mapEntrantes;
        this.mapSortantes = mapSortantes;
    }


}