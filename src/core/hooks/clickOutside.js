import {useEffect} from 'react';

function ClickOutside(ref, cbHandler) {
    return useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                cbHandler();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [cbHandler, ref]);
}

export default ClickOutside;
