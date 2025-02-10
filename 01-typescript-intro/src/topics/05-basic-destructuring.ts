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