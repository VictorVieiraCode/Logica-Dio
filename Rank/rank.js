
let vitorias = 12;
let derrotas = 1;
let saldo = vitorias - derrotas;

if (saldo <= 10) {saldo = "Ferro";}
else if (saldo >= 11 && saldo <= 20) {saldo = "Bronze";}
else if (saldo >= 21 && saldo <= 50) {saldo = "Prata"}
else if (saldo >= 51 && saldo <= 80) {saldo = "Ouro"}
else if (saldo >= 81 && saldo <= 90) {saldo = "Diamante"}
else if (saldo >= 91 && saldo <= 100) {saldo = "Lendário"}
else if (saldo >= 101) {saldo = "Imortal"}

console.log(`o nivel é ${saldo}. `);