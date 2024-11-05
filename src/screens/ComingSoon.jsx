import { FaCloud } from "react-icons/fa6"
import { TypeAnimation } from "react-type-animation"

const ComingSoon = () => {
    return (
        <div className="bg-black text-white w-screen h-screen flex flex-col items-center justify-center relative">
            <div className="absolute top-2 right-2 blur-lg opacity-75">
                <h1 className="text-primary text-xl absolute">Early Access</h1>
            </div>


            <h3 className="text-xl">WEHUB<span className="text-primary">INVOICE</span> GENERATOR</h3>
            <TypeAnimation
                sequence={[
                    "Coming soon...", 2000,
                    "Launching soon...", 2000,
                    "Under construction...", 2000,
                    "Get Ready...", 2000
                ]}
                speed={20}
                repeat={Infinity}
                className="text-7xl mt-5"
            />
        </div>
    )
}

export default ComingSoon