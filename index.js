// nivel do heroi

let nome = 'Pedro';
let Expdoheroi = 3000;

for (let xp = 0; xp <= 9000; xp += 1000) {
    let nivel = '';

    if (xp <= 1000) {
        nivel = 'Ferro'; 
    } else if (xp <= 2000) {
        nivel = 'Bronze';
    } else if (xp <= 3000) {
        nivel = 'Prata';
    } else if (xp <= 5000) {
        nivel = 'Ouro';
    } else if (xp <= 8000) {
        nivel = 'Platina';
    } else {
        nivel = 'Máximo';
    }

    if (xp === Expdoheroi) {
        console.log(`${nome} está no nível ${nivel}`);
    } else {
        console.log(`Nível ${nivel}`);
    }
}
