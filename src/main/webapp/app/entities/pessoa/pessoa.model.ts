export interface IPessoa {
  id: number;
  nome?: string | null;
  telefone?: string | null;
  email?: string | null;
}

export type NewPessoa = Omit<IPessoa, 'id'> & { id: null };
