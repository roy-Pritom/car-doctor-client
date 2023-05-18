import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const Bookings = () => {
    const {user}=useContext(authContext)
    const navigate=useNavigate();
    const [bookings,setBookings]=useState([])
    const url=`https://car-doctor-server-bice-two.vercel.app/bookings?email=${user?.email}`
      useEffect(()=>{
        fetch(url,{
          method:'GET',
          headers:{
            authorization:`Bearer ${localStorage.getItem('car-access-token')}`
          }
        })
        .then(res=>res.json())
        .then(data=>{
          if(!data.error){
            setBookings(data)
            
          }
          else{
            // logout and then navigate
            navigate('/')
          }
        })
      },[url,navigate])


      const handleDelete=(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
        
            fetch(`https://car-doctor-server-bice-two.vercel.app/bookings/${id}`,{
                method:'Delete'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount >0){

                    Swal.fire(
               'Deleted!',
               'Your file has been deleted.',
               'success'
             )
             const remaining=bookings.filter(item=>item._id!==id);
             setBookings(remaining)
                }
            })
            }
          })
       

    }

    const handleBookingConfirm=id=>{
        fetch(`https://car-doctor-server-bice-two.vercel.app/bookings/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status:'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data. modifiedCount >0)
            {
                const remaining=bookings.filter(item=>item._id!==id);
                const update=bookings.find(booking=>booking._id===id);
                update.status='confirm'
                const newBookings=[update,...remaining]
                setBookings(newBookings)

            }

        })

    }
    return (
        <div>
            <h1>{bookings.length}</h1>
            <div className="">
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Image</th>
        <th>Service</th>
        <th>Date</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
   {
    bookings.map(item=><BookingRow
    key={item._id}
    bookingsItem={item}
    handleDelete={handleDelete}
    handleBookingConfirm={handleBookingConfirm}
    ></BookingRow>)
   }
      
    </tbody>
    
  </table>
</div>
            </div>
        </div>
    );
};

export default Bookings;