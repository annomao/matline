import React from "react";

const BookingDisplay = ({data}) => {
  const tableStyle = "border border-slate-300 p-4"
  const bookingData = data.map((booking) =>{
    return(
      <tr key={booking.id}>
          <td className="w-1/4 text-left py-3 px-4">{booking.id}</td>
          <td className="w-1/4 text-left py-3 px-4">{booking.data.phone}</td>
          <td className="text-left py-3 px-4">{booking.data.bookingDate}</td>
          <td className="text-left py-3 px-4">{booking.data.seats.join(" , ")}</td>
          <td className="text-left py-3 px-4">{booking.data.price}</td>
      </tr>
    )
  })
  return(
      <div className="flex content-center justify-center "> 
      <div className="md:w-4/5">
      <table className="min-w-full bg-white">
        <thead className="bg-app-maroon text-white">
          <tr>
            <th className="w-1/4 text-left py-3 px-4 uppercase font-semibold text-sm">Booking ID</th>
            <th className="w-1/4 text-left py-3 px-4 uppercase font-semibold text-sm">Phone No</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Travelling Date</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Seats</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Price</th>
          </tr>
        </thead>
        <tbody>
          {bookingData}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default BookingDisplay