interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer : AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheran",
        year: 2015
    }
}

const song = 'New Song';
//Desestructuración de un objeto anidado en otro objeto
const { 
    song:anotherSong, 
    songDuration: duration,
    details: {author: authorInLine }, 
    details: details } = audioPlayer;

//Destructuración de un objeto desestructurado
const { author } = details

console.log('Song: ', song);
console.log('Song: ', anotherSong);
console.log('Author: ', author);
console.log('Author: ', authorInLine);
console.log('Duration: ', duration);


//Destructuración de Arrays

const dbz : string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log('Personaje 3:', dbz[2]);
console.log('Personaje 4:', dbz[3] || 'Personaje no encontrado');

//Desestructuración del elemento 3 del array
const [ ,, p3] = dbz;
//se podría haber definido todos los pjs anteriores: const [ p1, p2, p3] = dbz;
console.log('Personaje 3:', p3);
//Si no existiese posición 4
const [ ,,, p4 = 'Not Found'] = dbz;
console.log('Personaje 4:', p4);