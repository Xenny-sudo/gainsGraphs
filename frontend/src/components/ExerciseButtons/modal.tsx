import React, { useState } from "react";

const Modal = (prop: { classTag: string; buttonName: React.ReactElement<string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode>; modalContent: string ; }) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <button onClick={() => setModalOpen(true)} className={prop.classTag}>{prop.buttonName}</button>
            {modalOpen &&
                (<dialog>
                {prop.modalContent}
                <button onClick={() => setModalOpen(false)}>&#x2715</button>
                </dialog>)
            }
        </>
    );
};

export default Modal;