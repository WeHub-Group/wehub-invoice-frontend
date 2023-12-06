
const Testimonials = () => {
    return (
        <div className="h-auto md:h-auto bg-white gap-2 p-2 md:p-5">
            <div className="font-lato font-bold text-2xl md:text-3xl text-center">
                WHAT OUR CLIENTS SAY
            </div>

            <div className="h-full flex flex-col gap-3 md:flex-row">
                <TestimonialCards name={"Ronald Kelechi"} comment={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nisi illum beatae ipsum, dolorem, minima, eveniet voluptatem voluptas id nemo vel consequatur. Illum, veritatis dolore? Commodi praesentium impedit est dicta!"} image={'/src/assets/images/testimonial_1.png'} />

                <TestimonialCards name={"Ronald Kelechi"} comment={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nisi illum beatae ipsum, dolorem, minima, eveniet voluptatem voluptas id nemo vel consequatur. Illum, veritatis dolore? Commodi praesentium impedit est dicta!"} image={'/src/assets/images/testimonial_1.png'} />

                <TestimonialCards name={"Ronald Kelechi"} comment={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nisi illum beatae ipsum, dolorem, minima, eveniet voluptatem voluptas id nemo vel consequatur. Illum, veritatis dolore? Commodi praesentium impedit est dicta!"} image={'/src/assets/images/testimonial_1.png'} />
            </div>

        </div>
    )
}

function TestimonialCards({ name, comment, image }) {
    return (
        <div className="h-[70%] md:h-screen w-full rounded-xl shadow-xl flex flex-col gap-2 justify-center items-center p-2">
            <div className="w-32 h-32 md:w-48 md:h-48 flex justify-center items-center">
                <img src={image} alt="" className="rounded-full h-full w-full self-center" />
            </div>

            <p className="font-lato font-bold text-2xl">{name}</p>
            <p className="text-center text-sm font-lato">{comment}</p>
        </div>
    )
}

export default Testimonials
