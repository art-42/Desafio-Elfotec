import { IPessoa, NewPessoa } from './pessoa.model';

export const sampleWithRequiredData: IPessoa = {
  id: 82183,
};

export const sampleWithPartialData: IPessoa = {
  id: 76717,
  email: 'Taya77@gmail.com',
};

export const sampleWithFullData: IPessoa = {
  id: 51641,
  nome: 'Centers',
  telefone: 'indexing',
  email: 'Sid94@yahoo.com',
};

export const sampleWithNewData: NewPessoa = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
