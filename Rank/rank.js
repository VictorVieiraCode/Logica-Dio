
let vitorias = 12;
let derrotas = 1;
let saldo = vitorias - derrotas;

if (saldo <= 10) {saldo = "Ferro";}
else if (saldo >= 11 && saldo <= 20) {saldo = "Bronze";}
else if (saldo >= 21 && saldo <= 30) {saldo = "Prata"}
else if (saldo >= 31 && saldo <= 40) {saldo = "Ouro"}
else if (saldo >= 41 && saldo <= 50) {saldo = "Ouro"}

console.log(`o nivel é ${saldo}. `);