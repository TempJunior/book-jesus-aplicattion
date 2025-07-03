export default interface IEmprestimo {
  usuario: string;
  livro: string;
  autor: string;
  data_emprestimo: string;
  data_devolucao: string | null;
  statusEmprestimo: string;
}
