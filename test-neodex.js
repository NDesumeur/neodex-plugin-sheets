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
  // la mise en forme conditionnelle et le tableau croisé, sur un petit tableau de ventes
  const p = await pj(`(async () => { try {
    const S = document.querySelector('.ofApp').__sh || [...document.querySelectorAll('.ofApp')].map(x => x.__sh).find(Boolean), nsh = S.nsh, d = nsh.cur.data, sh = d.sheets[d.cur];
    const rows = [['Ville', 'Mois', 'Ventes'], ['Lyon', 'Janv', '10'], ['Paris', 'Janv', '30'], ['Lyon', 'Févr', '5'], ['Paris', 'Févr', '20'], ['Lyon', 'Janv', '2,5']];
    rows.forEach((r, i) => r.forEach((v, j) => sh.cells['ABC'[j] + (i + 1)] = {raw: v}));
    sh.cf = [{b: {c1: 2, r1: 1, c2: 2, r2: 5}, k: 'gt', v: '15', bg: '#ff0000'}, {b: {c1: 2, r1: 1, c2: 2, r2: 5}, k: 'bars', bg: '#638ec6'}];
    const calc = {value: (si, a) => parseFloat(String(sh.cells[a].raw).replace(',', '.'))}, st = S.cfStyle(sh, d.cur, calc);
    if (!st.C3?.includes('#638ec688 100%') || !st.C6?.includes('88 0%')) return {err: 'barres : ' + JSON.stringify(st)};
    sh.cf = [{b: {c1: 2, r1: 1, c2: 2, r2: 5}, k: 'gt', v: '15', bg: '#ff0000'}];
    const st2 = S.cfStyle(sh, d.cur, calc); if (!st2.C3 || st2.C2 || !st2.C5) return {err: 'plus grand que : ' + JSON.stringify(st2)};
    const n0 = d.sheets.length, P = S.pivot({c1: 0, r1: 0, c2: 2, r2: 5}, 0, 1, 2, 'sum'), c = a => P.cells[a]?.raw;
    if (d.sheets.length !== n0 + 1 || c('A3') !== 'Lyon' || c('B2') !== 'Févr' || c('C3') !== '12,5' || c('D3') !== '17,5' || c('D4') !== '50' || c('D5') !== '67,5') return {err: 'croisé : ' + JSON.stringify(P.cells)};
    nsh.cur.data.cur = 0; const Q = S.pivot({c1: 0, r1: 0, c2: 2, r2: 5}, 0, -1, 2, 'count'); if (Q.cells.B3?.raw !== '3' || Q.cells.B5?.raw !== '5') return {err: 'nombre : ' + JSON.stringify(Q.cells)};
    nsh.cur.data.cur = 0; nsh.sel = {c: 0, r: 0, c2: 2, r2: 5}; return {ok: 1, sheets: nsh.cur.data.sheets.length};
  } catch (e) { return {err: e.message + ' ' + e.stack}; } })()`);
  if (p.err) throw new Error(p.err);
  await pj(`(() => { const S = document.querySelector('.ofApp').__sh; S.nsh.cur.data.cur = 1; [...document.querySelectorAll('.shTab')][1]?.click(); })(), 0`); await sleep(300);
  const red = await pj(`(() => { const S = document.querySelector('.ofApp').__sh; S.nsh.cur.data.cur = 0; [...document.querySelectorAll('.shTab')][0].click(); const td = document.querySelector('.shTbl td[data-c="2"][data-r="2"]'); return td && getComputedStyle(td).backgroundColor; })()`);
  if (red !== 'rgb(255, 0, 0)') throw new Error('rendu de la règle : ' + red);
  await pj(`[...document.querySelectorAll('.shTab')][1].click(), 0`); await sleep(300);
  return 'règles conditionnelles et tableau croisé ok · ' + r.visCols + ' colonnes visibles de ' + r.cw + ' px, cellules en ' + r.font + ' px, colonne de gauche ' + r.side + ' px';
};
