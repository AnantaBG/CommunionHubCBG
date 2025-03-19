import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import NavBar from "../../Home/Navbar";

const Events = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchEvents = async () => {
        try {
          const response = await fetch('http://localhost:4000/allEvents');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setEvents(data);
          setLoading(false);
        } catch (e) {
          setError(e);
          setLoading(false);
        }
      };
  
      fetchEvents();
    }, []);
  
    if (loading) {
      return <p>Loading events...</p>;
    }
  
    if (error) {
      return <p>Error fetching events: {error.message}</p>;
    }
    return (
        <div className="w-11/12 mx-auto ">
            <NavBar></NavBar>
            <div className="my-5">
            <h2 className="text-6xl my-5 flex justify-center  text-center font-semibold text-slate-600 font-mono">Event List</h2>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
          {events.map((event) => (
              <Card key={event.title}>
                {event.img && <img src={event.img} alt={event.title} className="min-w-60 min-h-40 max-h-40 max-w-60 mx-auto" />}
                <h3 className="text-2xl">{event.title}</h3>
                <p>Date: {event.date}</p>
                <p>Location: {event.location}</p>
                <p>Description: {event.description}</p>
                <p>Category: {event.category}</p>
                
              </Card>
            ))}
          </div>
            </div>


        </div>
      );
    }


export default Events;