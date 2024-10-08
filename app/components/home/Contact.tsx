export const Contact = () => {
    return (
        <div className="p-5 w-full h-fit md:h-screen flex flex-wrap flex-col gap-4 md:gap-0 md:flex-row">
            <div className="w-full md:w-6/12 h-fit md:h-full flex justify-start items-center">
                <div>
                    <p className="text-3xl md:text-5xl font-semibold text-neutral-900 mb-2 w-fit h-5/6">Need More Information ?</p>
                    <p className="text-lg md:text-xl text-neutral-900 w-fit h-5/6">Contact us via email by filling the from</p>
                </div>
            </div>
            <div className="w-full md:w-6/12 h-fit md:h-full flex justify-center items-center bg-gradient-to-b from-blue-950 to-neutral-900 p-5 rounded-xl">
                <div className="w-8/12 h-fit md:h-4/6 rounded-lg bg-transparent p-2 md:p-5">
                    <div className="w-full h-fit mb-3">
                        <label htmlFor="Email" className="text-white">Email</label>
                        <br />
                        <input className="rounded-sm border border-slate-200 shadow w-full px-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="email" name="email" id="email" required />
                    </div>
                    <div className="w-full h-fit mb-3">
                        <label htmlFor="description" className="text-white">What can we help?</label>
                        <br />
                        <textarea className="rounded-sm border border-slate-200 shadow w-full p-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" name="description" id="description" rows={6} required />
                    </div>
                    <button className="rounded-lg border border-sky-500 p-2 text-sky-500 hover:animate hover:duration-150 hover:ease-in-out hover:bg-blue-500 hover:text-white">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}