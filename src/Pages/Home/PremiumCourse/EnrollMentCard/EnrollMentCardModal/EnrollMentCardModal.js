import React from 'react';

const EnrollMentCardModal = ({ children, modalId }) => {
    return (
        <div>
            <div>
                <input type="checkbox" id={modalId} className="modal-toggle" />
                <div className="modal">
                    <div className="relative mx-auto bg-white rounded-[20px]">
                        <label htmlFor={modalId} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <div className="poppins lg:max-w-[925px] max-w-[390px]">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnrollMentCardModal;