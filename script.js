// Direcciones clase A = 0 - 127
// Direcciones clase B = 128 - 191
// Direcciones clase C = 192 - 223
// Direcciones clase D = 224 - 239
// Direcciones clase E = 240 - 255

// funcion para pasar de binario a decimal
function binToDec(bin) {
    return parseInt(bin, 2);
}
// let bin2 = "11100110111110100000000000000110000000000001"; 
// let bin3 = "10100000000000000110000000000001"; 
// console.log(binToDec(bin2));
// console.log(binToDec(bin3));

function decToBin(dec) {
    return (dec >>> 0).toString(2);
}
let prueba = decToBin(192);
console.log(prueba);

function validaCadena(expresion, cadena) {
    return expresion.test(cadena);
}

// genera direccion IP binaria conforme al prefijo de red recibido
function arrPrejijoRed(prefijoRed) {
    let arr = [];
    for (let i = 0; i < 32; i++) {
        // console.log(i);
        if (i % 8 === 0 && i !== 0) {
            arr.push("-");
        }

        if (i < prefijoRed) {
            arr.push(1);
        } else {
            arr.push(0);
        }

    }
    return arr.join("");
}
// Prueba de la funcion arrPrejijoRed
let binPrefijoRed = arrPrejijoRed(16);
console.log(binPrefijoRed.split("-"));


function detalleIP(ip, prefijoRed) {
    const ipArray = ip.split("."); // ["192", "168", "1", "1"] =>

    const firstOctet = parseInt(ipArray[0]); //
    const secondOctet = parseInt(ipArray[1]);
    const thirdOctet = parseInt(ipArray[2]);
    const fourthOctet = parseInt(ipArray[3]);

    let arrPrefijoRed = [];

    // let prefijoRedBin = 

    if (firstOctet >= 0 && firstOctet <= 127) {
        return "Clase A";
    } else if (firstOctet >= 128 && firstOctet <= 191) {
        return "Clase B";
    } else if (firstOctet >= 192 && firstOctet <= 223) {
        return "Clase C";
    } else if (firstOctet >= 224 && firstOctet <= 239) {
        return "Clase D";
    } else if (firstOctet >= 240 && firstOctet <= 255) {
        return "Clase E";
    } else {
        return "No es una dirección IP";
    }

    if (prefijoRed >= 0 && prefijoRed <= 32) {
        return "Prefijo válido";

    }



}

const bin = "11110000"; // 240
let classA = "10000000"; //  128
let ClassB = "11000000"; //   192

