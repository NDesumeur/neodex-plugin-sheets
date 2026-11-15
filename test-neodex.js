// lancé par le test « local » de NeoDex : un classeur, des nombres et une formule, la grille tient dans l'écran, rien ne déborde
module.exports = async ({ pj, sleep }) => {
  await sleep(900);
  await pj(`(() => { if (!document.querySelector('.shTbl')?.offsetParent) [...document.querySelectorAll('button')].find(b => b.textContent === '+ NOUVEAU' && b.offsetParent).click(); })(), 0`);
  await sleep(600);
  const r = await pj(`(() => { const t = document.querySelector('.shTbl'), wrap = t?.parentElement, side = document.querySelector('.ofSide');
    if (!t) return { err: 'pas de grille' };
    const cell = t.querySelector('td'), w = wrap.getBoundingClientRect();
    return { cols: t.querySelectorAll('th.shCh').length, visCols: [...t.querySelectorAll('th.shCh')].filter(h => h.getBoundingClientRect().right <= w.right).length, cw: Math.round(t.querySelector('th.shCh').getBoundingClientRect().width), font: parseFloat(getComputedStyle(cell).fontSize), side: Math.round(side.getBoundingClientRect().width), wrapW: Math.round(w.width),
      over: [...document.querySelectorAll('.ofApp *')].filter(e => e.offsetParent && !e.closest('.shGridW') && e.getBoundingClientRect().right > innerWidth + 1).length }; })()`);
  if (r.err) throw new Error(r.err);
  if (r.over) throw new Error(r.over + ' élément(s) débordent à droite');
  if (r.visCols < 5 || r.cw < 90) throw new Error('colonnes : ' + JSON.stringify(r));
  return r.visCols + ' colonnes visibles de ' + r.cw + ' px, cellules en ' + r.font + ' px, colonne de gauche ' + r.side + ' px';
};
