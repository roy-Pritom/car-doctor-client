import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";



const CheckOut = () => {
    const service=useLoaderData();
    const {user}=useContext(authContext)
     const {price,title,service_id,img}=service;
     const handleBooking=(event)=>
     {
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const date=form.date.value;
        const email=user?.email;
        const bookingUserData={
            customerName:name,
            date,
            email,
            img,
            Price:price,
            service_id,
            service:title
        }
        // console.log(bookingUserData);
        fetch('https://car-doctor-server-bice-two.vercel.app/bookings',{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(bookingUserData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId)
            {
                Swal.fire({
                    title: 'Success!',
                    text: 'Booking successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  })
            }
        })
     }
    return (
        <div className="mt-5 mb-14">
            <h2 className="text-center text-orange-600 font-bold mb-4">{title}</h2>

        <form onSubmit={handleBooking}>
        <div className="grid grid-cols-12 md:grid-cols-2 gap-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder={user?.displayName} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" placeholder="date" name="date" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" defaultValue={user?.email} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input type="text" defaultValue={"$"+price} className="input input-bordered" />
        </div>
      </div>
        <div className="form-control mt-8 ">
          <input type="submit" className="btn btn-secondary w-full" value="Order Confirm" />
        </div>
        </form>
        </div>
    );
};

export default CheckOut;