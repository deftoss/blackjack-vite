

/**
 * Esta función me permite tomar una carta
 * @param {Array<string>} deck es una rreglo de string
 * @returns {Strings} retorna la carta del deck
 */

export const  pedirCarta = ( deck) => {
 
    if ( !deck || deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}