console.time('Tiempo total de ejecucion:');
const fs = require('fs');
const filePath = 'jose_ulises_lauro.txt';
const regex = /<(?!\/?p(?=>|\s.*>))\/?.*?>/gm;
const path = require('path');
//Lectura de todos los archivos html en la carpeta
const files = fs.readdirSync('archivos/Files');
//Txt con los nombres y matriculas del equipo
if (!fs.existsSync(filePath)) {
    fs.writeFileSync('Nombres y matriculas.txt', 'Lauro Daniel Jiménez Custodio-4512077 Ulises Perez Gomez-2888460  Jose Luis Aguilar-2806108');
}
// iteracion de los nombres de los archivos
files.forEach(file => {
    const label = '\nTiempo para ' + path.join('archivos/Files', file);
    //Entro a la lectura de cada archivo
    fs.readFile(path.join('archivos/Files', file), (error, stream) => {
        //Inicia bandera del timer 
        console.time(label);
        if (error) {
            console.error(error)
        } else {
            //Se parsea el stream a String para posterior hacer un replace con una expresion regular Regex
            const stringData = stream.toString().replace(regex, ' ');
            //Una vez obtenido el String sin las etiquetas,lo guardamos como un archivo nuevo 
            fs.writeFileSync('archivos/Files2/' + file, stringData);
            //Finaliza bandera del timer
            console.timeEnd(label);
        }
    })
})
console.timeEnd('Tiempo total de ejecucion:');