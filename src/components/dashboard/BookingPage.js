import React,{useState, useEffect} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../firebase";
import {collection, addDoc} from 'firebase/firestore'
import DatePicker from "react-datepicker";
import addDays from 'date-fns/addDays'  
import "react-datepicker/dist/react-datepicker.css";
import SeatSelection from "./SeatSelection";
import DashHeader from "./DashHeader";
// import {Email} from "../../smtp"

const BookingPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [telephone, setTelephone] = useState(0)
  const [seats, setSeats] = useState([])
  const [userError, setUserError] = useState([])

  // Check if user is logged in
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
  }, [user, loading,navigate]);

  // function to get seat number
  const getSeatNumber = (seat) => {
    if(seats.includes(seat)){
      const newArray = seats.filter(s => s !== seat)
      setSeats(newArray)
    }else{
      setSeats([...seats,seat])
    }
    
  }

  //send email function
  // const sendEmail = (email) => {
  //   window.Email.send({
  //     SecureToken : "c4a0f7ab-15a0-4524-b8c0-075e073c7f4e",
  //     To : email,
  //     From : "matline.pr@gmail.com",
  //     Subject: "Sending Email using javascript with SMTPJS",
  //     Body: "If you are reading this, dont forget to applaud kaustubh72"
  //     })
  //     .then(message => alert(message)
  //     );
  // }

  //perform empty checks and send data to firestore
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!(telephone.match('[0-9]{10}'))){
      setUserError(["Enter Valid Phone Number!"]);
    }else if(seats.length<=0){
      setUserError(["Please choose a seat Number!"]);
    }else{
      const formData = { 
        userid:user.uid,
        phone: telephone, 
        seats: seats , 
        bookingDate:startDate.toDateString()
      };
      try {
        const docRef = await addDoc(collection(db, 'bookings'), formData)
        setSeats([])
        setStartDate(new Date())
        setTelephone("")
        setUserError([])
      } catch (err) {
        alert(err)
      }
      // sendEmail(user.email) docRef.id for sending emails
    }
  }
  

  return(
    <>
    <DashHeader logout={logout} />
    <section>
      <div className="flex justify-center">
        <form>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-app-maroon text-xs font-bold mb-2">
              Telephone Number
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-app-maroon border border-app-maroon rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
            value={telephone} onChange={(e)=> setTelephone(e.target.value)}
            type="tel"/>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-app-maroon text-xs font-bold mb-2">
              Date of Travel
            </label>
            <DatePicker
            className="appearance-none block w-full bg-gray-200 text-app-maroon border border-app-maroon rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date()}
            maxDate={addDays(new Date(), 5)}
            />
          </div>
        </div>
        <SeatSelection addSeat={getSeatNumber}/> 
        {userError.length > 0
        ? userError.map((error, index) => (
          <p key={index} className="tracking-wide text-app-maroon text-xs font-bold mb-2">
            {error}
          </p>
        ))
      : null}
        <div className="flex justify-center mt-8">
          <div>
            <button className="shadow bg-app-maroon/90 hover:bg-app-maroon focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded" 
            onClick={handleSubmit}
            type="button">
            BOOK
            </button>
          </div>
        </div>
        </form>
      </div> 
    </section>
    </>
    
  )
}

export default BookingPage