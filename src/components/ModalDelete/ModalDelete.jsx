import c from './ModalDelete.module.css'

export default function ModalDelete({ onConfirm, onCancel }) {
    return (
        <div className={c.modalOverlay}>
            <div className={c.modalContent}>
                <h2 className={c.modalTitle}>Are you sure you want to delete?</h2>
                <div className={c.modalButtons}>
                    <button className={c.modalButtonConfirm} onClick={onConfirm}>Yes</button> 
                    <button className={c.modalButtonCancel} onClick={onCancel}>No</button>
                </div>
            </div>
        </div>
    );
}
