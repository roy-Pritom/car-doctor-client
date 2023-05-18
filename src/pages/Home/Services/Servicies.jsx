import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Servicies = () => {

    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('https://car-doctor-server-bice-two.vercel.app/services')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setServices(data)
        })
    },[])
    return (
        <div>
    <div className="text-center space-y-5">
    <h3 className="text-2xl font-bold text-orange-500">Service</h3>
    <h1 className="text-5xl ">Our Service Area</h1>
    <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>

    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {
          services.map(service=><ServiceCard
          key={service._id}
          service={service}
          ></ServiceCard>)
        }
    </div>
        </div>
    );
};

export default Servicies;