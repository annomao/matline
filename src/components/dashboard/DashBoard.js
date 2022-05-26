import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where,onSnapshot } from "firebase/firestore";
import DashHeader from "./DashHeader";
import BookingDisplay from "./BookingDisplay";
import Footer from "../Footer";

const DashBoard = ()=>{
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [userBookings, setUserBookings] = useState([])
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
    fetchUserName();
    const q = query(collection(db, 'bookings'), where('userid',"==", user.uid))
    onSnapshot(q, (querySnapshot) => {
    setUserBookings(querySnapshot.docs.map(doc => ({
      id: doc.id,
      data: doc.data()
    })))
  })
  }, [user, loading,navigate]);

  console.log(userBookings)

  return(
    <>
    <DashHeader logout={logout}/>
    <div className="text-center">
      <h1 className="text-3xl font-dancing-script text-app-maroon my-4">Welcome back {name}</h1>
      <p className="text-2xl font-poppins mb-8 text-app-maroon underline">Booking Details </p>
    </div>
    <BookingDisplay data={userBookings} />
    </>
  )
}

export default DashBoard