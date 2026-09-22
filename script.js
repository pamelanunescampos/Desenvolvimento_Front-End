const botaoTema = document.querySelector('#theme-toggle');

function atualizarTextoBotao(temaEscuroAtivo) {
  botaoTema.textContent = temaEscuroAtivo ? 'Modo claro' : 'Modo escuro';
}

function aplicarTema(tema) {
  const temaEscuro = tema === 'dark';
  document.body.classList.toggle('dark-theme', temaEscuro);
  atualizarTextoBotao(temaEscuro);
}

const temaSalvo = localStorage.getItem('tema') || 'light';
aplicarTema(temaSalvo);

botaoTema.addEventListener('click', () => {
  const temaAtual = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  const novoTema = temaAtual === 'dark' ? 'light' : 'dark';
  aplicarTema(novoTema);
  localStorage.setItem('tema', novoTema);
});