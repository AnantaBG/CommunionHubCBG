import { Card, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import NavBar from "../../Home/Navbar";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:4000/allEvents");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEvents(data);
        setFilteredEvents(data); // Initialize filteredEvents with all events
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter((event) => event.category === category);
      setFilteredEvents(filtered);
    }
  };

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
        <h2 className="text-6xl my-5 flex justify-center text-center font-semibold text-slate-600 font-mono">
          Event List
        </h2>
        <div className="flex justify-center mb-4">
          <Button onClick={() => handleFilter("All")} className="mx-1">All</Button>
          <Button onClick={() => handleFilter("Religious")} className="mx-1">Religious</Button>
          <Button onClick={() => handleFilter("Social")} className="mx-1">Social</Button>
          <Button onClick={() => handleFilter("Charity")} className="mx-1">Charity</Button>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
          {filteredEvents.map((event) => (
            <Card key={event.title}>
              {event.img && (
                <img
                  src={event.img}
                  alt={event.title}
                  className="min-w-60 min-h-40 max-h-40 max-w-60 mx-auto"
                />
              )}
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
};

export default Events;