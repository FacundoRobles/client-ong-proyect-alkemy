import Swal from 'sweetalert2';

export const SUCCESS = {
    icon: 'success',
    title: 'Genial',
    text: 'La acción se concretó correctamente!'
};

export const ERROR = {
    icon: 'error',
    title: 'Oops...',
    text: 'Algo salió mal!'
};

export const CANCELALERT = {
    icon: 'info',
    title: 'Buena decision',
    text: 'la accion no se realizara'
};

export function swalConfirmAction(
    icon,
    title,
    text,
    confirmButtonText,
    cancelButtonText,
    actionConfirm,
    CancelConfirm
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
        cancelButtonText,
    }).then(result => {
        if (!result.value) {
            return CancelConfirm;
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
export const ERROR_NAME = 'Campo requerido';
export const ERROR_IMAGE = 'Deberia de ser una URL';