'usestrict';
let winner = function () { alert("WINNER!") };
let loser = function () { alert("LOSER!") };

winner(); // WINNER!

let a = winner;
let b = loser;
let c = loser;

a(); // WINNER!
b(); // LOSER!

c = a; // WINNER!
a = b; // LOSER!
b = c; // WINNER!
c = a; // LOSER!
a = c; // LOSER!
a = b; // WINNER!
b = c; // LOSER!

a();  // WINNER!
/*
b(); // LOSER!
c(); // LOSER!
*/
