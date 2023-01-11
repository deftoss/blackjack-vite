import _ from 'underscore';


/**
 * Esta funcion crea un nuevo deck
 * @param {array<String>} tiposDeCarta Ejemp: ['C','D','H','S']
 * @param {array<String} tiposEspeciales Ejemp: ['A','J','Q','K']
 * @returns {array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {


    if ( !tiposDeCarta || tiposDeCarta.lenght  === 0)
    throw new Error('tiposDeCarta es obligario como arreglo de string');
    
    if ( !tiposEspeciales || tiposEspeciales.lenght  === 0)
    throw new Error('tiposEspeciales es obligario como arreglo de string');

    let deck = []; 
    

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
   
    return deck;
}

//export default crearDeck;