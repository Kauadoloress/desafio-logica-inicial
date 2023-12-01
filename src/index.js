
let nick = ["Snakeman", 9000]
console.log("Informe seu nickname:" + nick[0])
console.log("Informe sua quantidade de xp:" + nick[1])
const nivel = [
    ["Ferro"],
    ["Bronze"],
    ["Prata"],
    ["Ouro"],
    ["Platina"],
    ["Ascendente"],
    ["Imortal"],
    ["Radiante"],
]
if (nick[1] <= 1000) {
    console.log("O Herói de nome " + nick[0] + " está no nível " + nivel[0][0]);

}
else if (nick[1] === 1001 || nick[1] === 2000) {
    console.log("O Herói de nome " + nick[0] + "está no nível " + nivel[1][0]);

}
else if (nick[1] === 2001 || nick[1] === 5000) {
    console.log("O Herói de nome " + nick[0] + "está no nível " + nivel[2][0]);

} else if (nick[1] === 6001 || nick[1] === 7000) {
    console.log("O Herói de nome " + nick[0] + "está no nível " + nivel[3][0]);

} else if (nick[1] === 7001 || nick[1] === 8000) {
    console.log("O Herói de nome " + nick[0] + "está no nível " + nivel[4]);

} else if (nick[1] === 8001 || nick[1] === 9000) {
    console.log("O Herói de nome " + nick[0] + "está no nível " + nivel[5]);

} else if (nick[1] === 9001 || nick[1] === 10000) { 
    console.log("O Herói de nome " + nick[0] + "está no nível " + nivel[6]);

} else if(nick[1] >= 10001) {
    console.log("O Herói de nome " + nick[0] + "está no nível " + nivel[7]);

} 
else {
    console.log("Você é um iniciante!!!");
}

