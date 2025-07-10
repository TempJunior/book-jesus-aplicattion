export default interface IEmprestimo {
  id: number;
  nomeUsuario: string;
  titulosLivro: string;
  autorNome: string;
  data_emprestimo: string;
  data_devolucao: string | null;
  status: string;
}
