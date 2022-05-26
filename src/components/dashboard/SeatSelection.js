import React from "react";
import Seat from "./Seat";

const SeatSelection = ({addSeat, selectedSeats})=>{
  const seats = selectedSeats.map((seat)=>{
    return seat.data.seats
  })
  const finalSeats = seats.flat()
  console.log(finalSeats)
  return(
    <div className="flex justify-center mt-8">
      <div className="grid gap-2">
        <div className="col-start-1 col-end-3"> <Seat label="1" addSeat={addSeat} seats={finalSeats}/> </div>
        <div className="col-end-7 col-span-2 h-24 w-28 bg-app-maroon/50 text-center">Driver</div>
        <div className="col-start-1 col-end-2"><Seat label="2" addSeat={addSeat} seats={finalSeats}/></div>
        <div className="col-end-4 col-span-1"><Seat label="3" addSeat={addSeat} seats={finalSeats}/></div>
        <div className="col-end-6 col-span-1"><Seat label="4" addSeat={addSeat} seats={finalSeats}/></div>
        <div className="col-start-1 col-end-2"><Seat label="5" addSeat={addSeat} seats={finalSeats}/></div>
        <div className="col-end-4 col-span-1"><Seat label="6" addSeat={addSeat} seats={finalSeats}/></div>
        <div className="col-end-6 col-span-1"><Seat label="7" addSeat={addSeat} seats={finalSeats}/></div>
        <div className="col-start-1 col-end-2"><Seat label="8" addSeat={addSeat} seats={finalSeats}/></div>
        <div className="col-end-4 col-span-1"><Seat label="9" addSeat={addSeat} seats={finalSeats}/></div>
        <div className="col-end-6 col-span-1"><Seat label="10" addSeat={addSeat} seats={finalSeats}/></div>
      </div>
    </div>
    
  )
}

export default SeatSelection