import React,{useState, useEffect} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../firebase";
import {collection, addDoc, query, getDocs, where,onSnapshot} from 'firebase/firestore'
import DatePicker from "react-datepicker";
import addDays from 'date-fns/addDays'  
import "react-datepicker/dist/react-datepicker.css";
import SeatSelection from "./SeatSelection";
import DashHeader from "./DashHeader";

const BookingPage = () => {

  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [telephone, setTelephone] = useState(0)
  const [seats, setSeats] = useState([])
  const [userError, setUserError] = useState([])
  const [selectedSeats, setSelectedSeats] = useState([])

  // Check if user is logged in
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
    fetchSeats()
  }, [user, loading,navigate,startDate]);

  async function fetchSeats (){
    try {
      const q = query(collection(db, 'bookings'), where("bookingDate", "==", startDate.toDateString()));
      onSnapshot(q, (querySnapshot) => {
      setSelectedSeats(querySnapshot.docs.map(doc => ({
          data: doc.data()
        })))
      })
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  console.log(selectedSeats,startDate)

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
  // const sendEmail = (email,bookingId) => {
  //   window.Email.send({
  //     SecureToken : "c4a0f7ab-15a0-4524-b8c0-075e073c7f4e",
  //     To : email,
  //     From : "matline.pr@gmail.com",
  //     Subject: "Matline Booking Details",
  //     Body: `Below is your booking details. Booking ID:${bookingId}`
  //     })
  //     .then(message => alert(message)
  //     );
  // }

  //perform empty checks and send data to firestore
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!(telephone.length===10)){
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
        // sendEmail(user.email,docRef.id)
        setSeats([])
        setStartDate(new Date())
        setTelephone("")
        setUserError([])

      } catch (err) {
        alert(err)
      }
    }
  }
  

  return(
    <>
    <DashHeader logout={logout} />
    <section className="mb-4">
      <div className="flex justify-center">
        <form>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-app-maroon text-xs font-bold mb-2">
              Telephone Number
            </label>
            <input className="appearance-none block w-full text-app-maroon border border-app-maroon rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
            value={telephone} onChange={(e)=> setTelephone(e.target.value)}
            type="tel"/>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-app-maroon text-xs font-bold mb-2">
              Date of Travel
            </label>
            <DatePicker
            className="appearance-none block w-full text-app-maroon border border-app-maroon rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date()}
            maxDate={addDays(new Date(), 5)}
            />
          </div>
        </div>
        {userError.length > 0
        ? userError.map((error, index) => (
          <p key={index} className="tracking-wide text-red-600 text-xs font-bold mb-2">
            {error}
          </p>
        ))
      : null}
        <SeatSelection addSeat={getSeatNumber} selectedSeats={selectedSeats}/> 
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