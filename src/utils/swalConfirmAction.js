import Swal, {noop} from 'sweetalert2';

export default function swalConfirmAction(
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
