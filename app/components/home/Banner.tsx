import styles from './Banner.module.css'
export const Banner = () => {
    return (
        <div className="w-full h-[30vh] md:h-[90vh]">
            <div className="w-full h-full md:h-full flex justify-center md:items-center">
                <div className={[styles.banner, "w-full h-full md:h-5/6 md:rounded-2xl flex justify-end relative"].join(" ")}>
                    <div className="absolute w-full h-full bg-gradient-to-r from-transparent to-black opacity-40 z-20 md:rounded-tr-2xl md:rounded-br-2xl"></div>
                    <div className="w-6/12 h-full flex justify-end items-center pl-3 md:p-0">
                        <div className="w-fit md:w-10/12 h-fit static z-30">
                            <p className="w-fit md:mb-2 font-semibold text-lg md:text-5xl text-zinc-100 text-left">Find your wishlist</p>
                            <p className="text-zinc-100 text-left text-xs md:text-lg w-full md:w-9/12 h-9/12">We provide a platform containing best product from best seller!</p>
                            <button className="text-[12px] md:text-base mt-3 bg-transparent p-1 md:p-2 rounded-md md:rounded-lg border border-white text-zinc-100 hover:animate hover:duration-150 hover:duration:ease-in-out hover:bg-white hover:text-blue-500">Let's shop</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}