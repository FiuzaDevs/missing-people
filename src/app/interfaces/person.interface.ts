import { LastOccurrenceInterface } from "./last-occurrence.interface";
import { SexoEnum } from "./sex.enum";

export interface PersonInterface {
  id: number;
  nome: string;
  idade: number;
  sexo: SexoEnum;
  vivo: boolean;
  urlFoto: null | string;
  ultimaOcorrencia: LastOccurrenceInterface;
}
