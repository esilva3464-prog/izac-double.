// Atualizações simuladas (depois vamos conectar com o bot)
let wins = 12;
let losses = 8;

function atualizarStats() {
  const total = wins + losses;
  const winrate = total > 0 ? Math.round((wins / total) * 100) : 0;
  
  document.getElementById('wins').textContent = wins;
  document.getElementById('losses').textContent = losses;
  document.getElementById('winrate').textContent = winrate + '%';
}

function adicionarHistorico(cor, resultado) {
  const list = document.getElementById('historico-list');
  const item = document.createElement('div');
  item.className = 'sinal-box';
  item.style.fontSize = '0.95rem';
  item.innerHTML = `
    ${cor} 
    <span style="color: ${resultado === 'WIN' ? '#00ff88' : '#ff4444'}">
      ${resultado}
    </span>
  `;
  list.prepend(item);

  if (list.children.length > 8) list.removeChild(list.lastChild);
}

// Atualização automática
setInterval(() => {
  atualizarStats();
}, 5000);

// Inicialização
atualizarStats();
adicionarHistorico("🔴 VERMELHO", "WIN");
adicionarHistorico("⚫ PRETO", "LOSS");
