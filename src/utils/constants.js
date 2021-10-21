import Swal, {noop} from 'sweetalert2';

export const SUCCESS = {
    icon: 'success',
    title: 'Genial',
    text: 'la accion se concreto correctamente!'
};

export const ERROR = {
    icon: 'error',
    title: 'Oops...',
    text: 'Algo salio mal!'
};

export function swalConfirmAction(
    icon, title, text, confirmButtonText, cancelButtonText, actionConfirm, CancelConfirm = noop
) {
    return Swal.fire({
        title,
        text,
        icon,
        showCancelButton: true,
        confirmButtonColor: '#3085D6',
        cancelButtonColor: '#d33',
        reverseButtons: true,
        confirmButtonText,
        cancelButtonText
    }).then(result => {
        if (!result.value) {
            return CancelConfirm();
        }
        return actionConfirm();
    });
}

export const WARNING = 'warning';
export const LOADING = 'loading';
export const HOME = 'home';
export const REQUIRED = 'Todos los campos requeridos';
export const SEND = 'Envíar';
export const CANCEL = 'Cancelar';
export const GOBACK = 'Volver';
export const ADD = 'Agregar';
