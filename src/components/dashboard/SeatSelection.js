import React from "react";
import Seat from "./Seat";

const SeatSelection = ({addSeat, selectedSeats})=>{
  const seats = selectedSeats.map((seat)=>{
    return seat.data.seats
  })
  const finalSeats = seats.flat()
  //use DRY
  const value1 = finalSeats.includes("1")
  const value2 = finalSeats.includes("2")
  const value3 = finalSeats.includes("3")
  const value4 = finalSeats.includes("4")
  const value5 = finalSeats.includes("5")
  const value6 = finalSeats.includes("6")
  const value7 = finalSeats.includes("7")
  const value8 = finalSeats.includes("8")
  const value9 = finalSeats.includes("9")
  const value10 = finalSeats.includes("10")
  return(
    <div className="flex justify-center mt-8">
      <div className="grid gap-2">
        <div className="col-start-1 col-end-3"> <Seat label="1" addSeat={addSeat} value={value1}/> </div>
        <div className="col-end-7 col-span-2 h-24 w-28 bg-app-maroon/50 text-center">Driver</div>
        <div className="col-start-1 col-end-2"><Seat label="2" addSeat={addSeat} value={value2}/></div>
        <div className="col-end-4 col-span-1"><Seat label="3" addSeat={addSeat} value={value3}/></div>
        <div className="col-end-6 col-span-1"><Seat label="4" addSeat={addSeat} value={value4}/></div>
        <div className="col-start-1 col-end-2"><Seat label="5" addSeat={addSeat} value={value5}/></div>
        <div className="col-end-4 col-span-1"><Seat label="6" addSeat={addSeat} value={value6}/></div>
        <div className="col-end-6 col-span-1"><Seat label="7" addSeat={addSeat} value={value7}/></div>
        <div className="col-start-1 col-end-2"><Seat label="8" addSeat={addSeat} value={value8}/></div>
        <div className="col-end-4 col-span-1"><Seat label="9" addSeat={addSeat} value={value9}/></div>
        <div className="col-end-6 col-span-1"><Seat label="10" addSeat={addSeat} value={value10}/></div>
      </div>
    </div>
    
  )
}

export default SeatSelection