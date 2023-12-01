const vitorias = 100;
const derrotas = 30;
quantidadeVandD(vitorias, derrotas);

function quantidadeVandD(vitorias, derrotas) {
    const totaldeVitoria = vitorias - derrotas;
    let ranked;
    if (totaldeVitoria < 10) {
        ranked = "Ferro";
    } else if (totaldeVitoria >= 11 && totaldeVitoria <= 20) {
        ranked = "Bronze";
    } else if (totaldeVitoria >= 21 && totaldeVitoria <= 50) {
        ranked = "Prata";
    } else if (totaldeVitoria >= 51 && totaldeVitoria <= 80) {
        ranked = "Ouro";
    } else if (totaldeVitoria >= 81 && totaldeVitoria <= 90) {
        ranked = "Diamante";
    } else if (totaldeVitoria >= 91 && totaldeVitoria <= 100) {
        ranked = "Lendário";
    } else {
        ranked = "Imortal";

    }

    console.log(`O herói tem de vitoria ${totaldeVitoria} está no nível ${ranked}`);

}


