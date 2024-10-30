export const Catalogue = () => {
    return (
        <div className="w-full h-fit my-5 bg-white p-5">
            <div className="mb-3">
                <p className="text-2xl font-bold">Fulfill Your Desire</p>
            </div>
            <div className="grid grid-rows-8 min-h-screen sm:grid-cols-2 md:grid-rows-none md:grid-cols-5 md:h-[50vh] gap-4">
                <div className="w-full relative bg-amber-200 rounded-lg shadow-sm row-span-2 md:row-span-4 md:col-span-2 p-2">
                    <div className="w-1/3 h-full md:w-full md:h-full bg-catalogue-interior flex justify-start items-end px-5 py-6">
                        <p className="text-md md:text-lg absolute left-[40%] top-6 md:static font-bold text-neutral-700">Interior Stuff <br/> (House, Workspace, etc)</p>
                    </div>
                </div>
                <div className="w-full relative bg-red-200 rounded-lg shadow-sm row-span-2 md:row-span-4 p-2">
                    <div className="w-1/3 h-full md:w-full md:h-full bg-catalogue-fashion flex justify-center py-5">
                        <p className="text-md md:text-lg absolute left-[40%] top-10 md:static font-bold text-neutral-700">Fashionable Clothes</p>
                    </div>
                </div>
                <div className="w-full bg-neutral-300 rounded-lg shadow-sm row-span-2 md:col-span-2 flex justify-start items-center gap-12 md:gap-4 p-2">
                    <div className="w-1/3 h-full md:w-1/3 md:h-5/6 bg-catalogue-gaming"></div>
                    <span>
                        <p className="text-lg font-bold">Gamer or Tech Person ?</p>
                        <p className="text-base font-regular">There's Plenty of New Tech Here</p>
                    </span>
                </div>
                <div className="w-full bg-green-200 rounded-lg shadow-sm row-span-2 md:col-span-2 flex justify-start items-center gap-12 md:gap-4 p-2">
                    <div className="w-1/3 h-full md:w-1/3 md:h-5/6 bg-catalogue-hoby"></div>
                    <span>
                        <p className="text-lg font-bold">Hobby</p>
                        <p className="text-base font-regular">Bike, Racket, or Others ?</p>
                    </span>
                </div>
            </div>
        </div>
    )
}