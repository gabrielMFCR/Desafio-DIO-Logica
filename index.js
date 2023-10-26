let nomeDoHeroi = "Draven"; 
let xpDoHeroi = 20000
let nivelDoHeroi;

for (let xp = 0; xp <= xpDoHeroi; xp += 1000) {
    if (xp <= 1000) {
        nivelDoHeroi = "Ferro";
    } else if (xp <= 2000) {
        nivelDoHeroi = "Bronze";
    } else if (xp <= 5000) {
        nivelDoHeroi = "Prata";
    } else if (xp <= 7000) {
        nivelDoHeroi = "Ouro";
    } else if (xp <= 8000) {
        nivelDoHeroi = "Platina";
    } else if (xp <= 9000) {
        nivelDoHeroi = "Ascendente";
    } else if (xp <= 10000) {
        nivelDoHeroi = "Imortal";
    } else {
        nivelDoHeroi = "Radiante";
    }
}


console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi);
