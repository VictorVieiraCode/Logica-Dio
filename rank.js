
let vitorias = 20;
let derrotas = 1;
let saldo = vitorias - derrotas;

if (saldo < 10) {saldo = "Ferro";}
else if (saldo >= 10 && saldo <= 20) {saldo = "Bronze";}

console.log(`o nivel é ${saldo}. `);