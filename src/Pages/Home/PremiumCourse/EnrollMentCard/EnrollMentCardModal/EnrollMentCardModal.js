import React from 'react';

const EnrollMentCardModal = () => {
    return (
        <div>
            <div>
                <input type="checkbox" id="openEnrollMentModal" className="modal-toggle" />
                <div className="modal">
                    <div className="relative mx-auto bg-white rounded-[20px]">
                        <label htmlFor="openEnrollMentModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <div className="poppins lg:max-w-[925px] max-w-[390px]  p-3 md:p-2 md:px-6 lg:p-3">
                            <iframe className="w-[320px] lg:w-[730px] lg:h-[450px] h-[300px]" src="https://www.youtube.com/embed/lJ5z7sdFMKo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnrollMentCardModal;