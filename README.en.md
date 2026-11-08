# NeoSheets

A spreadsheet inside NeoDex: cells, formulas and functions in French or English, formatting, sorting, several sheets per workbook and charts. It opens and exports Excel, OpenDocument and CSV files, and your workbooks are saved automatically and synced between your PCs.

*Version française : [README.md](README.md)*

## Your workbooks

- **+ New** creates a workbook, saved automatically on every change.
- **Open…** imports a file from your PC: Excel (.xlsx, .xls), OpenDocument (.ods) or CSV.
- The list can be filtered with **Search**. Each workbook can be **renamed**, **duplicated** or **deleted** (deleting also applies on your other synced PCs).
- A workbook changed on another PC updates here, and the plugin tells you.

## Entering data and formulas

- Click a cell and type a value, or a formula starting with **=** (for example `=SUM(A1:A5)`). The bar at the top shows and edits the cell's content.
- **Enter** confirms and moves down, **Tab** moves right, the arrows move the selection, **Delete** clears.
- **Functions**, in English or French: SUM / SOMME, AVERAGE / MOYENNE, MIN, MAX, COUNT / NB, COUNTA / NBVAL, IF / SI, AND / ET, OR / OU, NOT / NON, ROUND / ARRONDI, ROUNDUP / ARRONDI.SUP, ROUNDDOWN / ARRONDI.INF, ABS, MOD, PI, SQRT / RACINE, POWER / PUISSANCE, INT / ENT, CONCAT / CONCATENER, LEN / NBCAR, UPPER / MAJUSCULE, LOWER / MINUSCULE, TRIM / SUPPRESPACE, LEFT / GAUCHE, RIGHT / DROITE, MID / STXT, TODAY / AUJOURDHUI, NOW / MAINTENANT, SUMIF / SOMME.SI, COUNTIF / NB.SI, AVERAGEIF / MOYENNE.SI, VLOOKUP / RECHERCHEV, MEDIAN / MEDIANE, RAND / ALEA, IFERROR / SIERREUR, PRODUCT / PRODUIT. The **Function** button inserts them.
- **Fill down** (Ctrl+D): select the cell and those below it; formula references follow.
- **Copy and paste** with Excel or another spreadsheet works both ways.

At the bottom, the selection shows its **sum**, **average** and **count** of values.

## Formatting

- **Bold** (Ctrl+B), **italic** (Ctrl+I), text colour, background colour, left, centre or right alignment.
- **Number format**: automatic, whole number, number with 2 decimals, percentage, euros or text.
- **Rows and columns**: insert above, below, left or right, or delete.
- **Sort** rows by the selected column, A to Z or Z to A.
- **Undo** (Ctrl+Z) and **Redo** (Ctrl+Y).

## Sheets

A workbook can have several sheets, as tabs at the bottom: **+** adds one, **double-click** renames it, **right-click** deletes it.

## Charts

Select data with its headers, then **Chart**: bars, lines or pie. **Copy image** puts it on the clipboard to paste into NeoDocs, NeoSlides or elsewhere.

## Export

**Export** saves the workbook as Excel (.xlsx), OpenDocument (.ods), CSV (.csv) or PDF.

## Data and sync

Your workbooks are stored by NeoDex, backed up and synced between your PCs when sync is on. On first launch, the plugin picks up what you already had in NeoDex.

## Install

In NeoDex: **NeoStore → Discover → NeoSheets → Install**.

Building a plugin: see the [NeoDex SDK](https://github.com/NDesumeur/neodex-sdk).
