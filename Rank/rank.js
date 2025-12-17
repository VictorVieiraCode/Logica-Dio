
let vitorias = 12;
let derrotas = 1;
let saldo = vitorias - derrotas;

if (saldo <= 10) {saldo = "Ferro";}
else if (saldo >= 11 && saldo <= 20) {saldo1 = "Bronze";}
else if (saldo >= 21 && saldo <= 50) {saldo1 = "Prata"}
else if (saldo >= 51 && saldo <= 80) {saldo1 = "Ouro"}
else if (saldo >= 81 && saldo <= 90) {saldo1 = "Diamante"}
else if (saldo >= 91 && saldo <= 100) {saldo1 = "Lendário"}
else if (saldo >= 101) {saldo = "Imortal"}

console.log(`o saldo de vitórias é ${saldo} nivel é ${saldo1}. `);