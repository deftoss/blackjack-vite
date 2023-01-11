import { pedirCarta, valorCarta, crearCartaHTML } from './';
import Swal from 'sweetalert2';


 /**
  * turno de la computadora
  * @param {Number} puntosMinimos puntos minimos que la computadora neceita para ganar
  * @param {HTMLElement} elemento HTML para mostrar los puntos
  * @param {HTMLElement} divCartasComputadora HTML para mostrar las cartas
  * @param {Arry<String>} deck 
  * 
  */
 export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora,deck = [] ) => {

    if( !puntosMinimos ) throw new Error('Puntos minimos son necesarios');
    if( !deck ) throw new Error('Argumento puntosHTML es necesario'); 
 
    let puntosComputadora = 0 ;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML(carta)
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
           Swal.fire({
               title: 'Nadie gana',
               text:'La fuerza esta equilibrada',
               icon: 'info',
               confirmButtonText: 'Okey',
               position: 'center',
               allowOutsideClick:false,
               allowEnterKey:false,
               allowEscapeKey:false,
               stopKeydownPropagation:false,
            })
        } else if ( puntosMinimos > 21 ) {
            Swal.fire({
               title: 'CPU Wins!!',
               text:'Te falta odio ...',
               icon: 'error',
               confirmButtonText: '¿ Intentar denuevo ?',
               position: 'center',
               allowOutsideClick:false,
               allowEnterKey:false,
               allowEscapeKey:false,
               stopKeydownPropagation:false,
            })
        } else if( puntosComputadora > 21 ) {
           Swal.fire({
               title: 'TU GANAS!!',
               text:'La fuerza esta de tu lado',
               icon: 'success',
               confirmButtonText: 'Volver a jugar',
               position: 'center',
               allowOutsideClick:false,
               allowEnterKey:false,
               allowEscapeKey:false,
               stopKeydownPropagation:false,
            })
        } else {
           Swal.fire({
               title: 'CPU Wins!!',
               text:'Mejor suerte para la proxima',
               icon: 'error',
               confirmButtonText: '¿ Intentar denuevo ?',
               position: 'center',
               allowOutsideClick:false,
               allowEnterKey:false,
               allowEscapeKey:false,
               stopKeydownPropagation:false,
            })
        }
    }, 100 );
}