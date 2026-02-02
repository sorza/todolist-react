import './dialog.style.css'
import { useEffect, useRef } from 'react';
import { IconClose } from '../icons';

export function Dialog({ isOpen, onClose, children }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        console.log("Deveríamos mostrar a modal?", isOpen);
        if (isOpen) {
            openDialog();
        }
        else {
            closeDialog();
        }
    }, [isOpen]);

    const openDialog = () => {
        dialogRef.current.showModal();
    }

    const closeDialog = () => {
        dialogRef.current.close();
    }

    return (
        <>
            <dialog ref={dialogRef} className="dialog">
                <div className="btn-close-wrapper">
                    <button autoFocus onClick={onClose} className='btn-close'>
                        <IconClose />
                    </button>
                </div>
                <div className='body'>
                    {children}
                </div>               
            </dialog>
        </>
    )
}