import React,{useState} from "react";
import DatePicker from "react-datepicker";
import addDays from 'date-fns/addDays'  
import "react-datepicker/dist/react-datepicker.css";

const BookingPage = () => {
  const [startDate, setStartDate] = useState(new Date());

  return(
    <section>
      <div className="flex justify-center">
        <form>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-app-maroon text-xs font-bold mb-2">
              Telephone Number
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-app-maroon border border-app-maroon rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="tel"/>
            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
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
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button className="shadow bg-app-maroon/90 hover:bg-app-maroon focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded" type="button">
            Next
            </button>
          </div>
        </div>
        </form>
      </div>  
    </section>
  )
}

export default BookingPage