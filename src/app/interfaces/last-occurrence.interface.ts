export interface LastOccurrenceInterface {
  dtDesaparecimento: Date;
  dataLocalizacao: null;
  encontradoVivo: boolean;
  localDesaparecimentoConcat: string;
  ocorrenciaEntrevDesapDTO: OcorrenciaEntrevDesapDTO | null;
  listaCartaz: null;
  ocoId: number;
}


export interface OcorrenciaEntrevDesapDTO {
  informacao:              string;
  vestimentasDesaparecido: string;
}
