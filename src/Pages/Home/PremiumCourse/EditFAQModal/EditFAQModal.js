import React from 'react';

const EditFAQModal = () => {

    return (
        <section>
            <div className="">
                <input
                    type="checkbox"
                    id="editFAQModal"
                    className="modal-toggle" />
                <div className="modal pt-24">
                    <div className="modal-box relative bg-[#F8F8FF]">
                        <label
                           htmlFor="editFAQModal"
                            className="btn btn-sm btn-circle absolute right-2  top-2"
                        >
                            ✕
                        </label>
                        <form >
                            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2">
                                <div>
                                    <input
                                        type="text"
                                        // disabled value={date}
                                        placeholder="clientId"
                                        className="input input-bordered my-2 w-full "
                                    // {...register("clientId", {
                                    //     required: "Client Id is required",
                                    // })}
                                    />
                                    {/* {errors.clientId && (
                                        <p className="text-red-600" role="alert">
                                            {errors.clientId?.message}
                                        </p>
                                    )} */}
                                </div>
                                <div>
                                    <input
                                        name="company"
                                        defaultValue=''
                                        type="text"
                                        placeholder="Promotion From *"
                                        className="input input-bordered my-2 w-full "
                                    // {...register("company", {
                                    //     required: "Company is required",
                                    // })}
                                    />
                                    {/* {errors.company && (
                                        <p className="text-red-600" role="alert">
                                            {errors.company?.message}
                                        </p>
                                    )} */}
                                </div>
                                <div>
                                    <input
                                        name="name"
                                        defaultValue=''
                                        type="text"
                                        placeholder="Promotion For *"
                                        className="input input-bordered my-2 w-full "
                                    // {...register("name", {
                                    //     required: "name is required",
                                    // })}
                                    />
                                    {/* {errors.name && (
                                        <p className="text-red-600" role="alert">
                                            {errors.name?.message}
                                        </p>
                                    )} */}
                                </div>
                                <div>
                                    <input
                                        name="email"
                                        type="email"
                                        defaultValue=''
                                        placeholder="Email Address"
                                        className="input input-bordered my-2 w-full "
                                    // {...register("email", {
                                    //     required: "Email address is required",
                                    // })}
                                    />
                                    {/* {errors.email && (
                                        <p className="text-red-600" role="alert">
                                            {errors.email?.message}
                                        </p>
                                    )} */}
                                </div>
                                <br />
                                <input
                                    className="btn btn-accent bg-[#3D419F] w-full my-4"
                                    type="submit"
                                    value="Submit"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EditFAQModal;