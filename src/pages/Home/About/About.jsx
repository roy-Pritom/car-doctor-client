import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="mb-5">
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 relative">
                    <img src={person} className=" rounded-lg shadow-2xl w-3/4 " />
                    <img src={parts} className=" rounded-lg shadow-2xl w-1/2 absolute right-5 top-1/2 " />

                    </div>
.                    <div className='w-1/2 p-4'>
                         <h1 className='font-bold text-2xl text-orange-600 mb-8'>About Us</h1>
                        <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <button className="btn btn-secondary mt-5">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;