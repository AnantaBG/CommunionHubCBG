import { Card, Button, Modal, Label, TextInput, Textarea } from "flowbite-react";
import { useEffect, useState } from "react";
import NavBar from "../../Home/Navbar";
import Swal from "sweetalert2";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    category: "",
    img: "",
  });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:4000/allEvents");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEvents(data);
        setFilteredEvents(data);
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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleAddEvent = async () => {
    try {
      const response = await fetch("http://localhost:4000/addedEvent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.acknowledged && result.insertedId) {
        const fetchNewEventResponse = await fetch(`http://localhost:4000/allEvents`);
        if (!fetchNewEventResponse.ok) {
          throw new Error(`HTTP error fetching new event: ${fetchNewEventResponse.status}`);
        }
        const allEventsData = await fetchNewEventResponse.json();
        const addedEvent = allEventsData.find(event => event._id === result.insertedId);

        if (addedEvent) {
          setEvents([...events, addedEvent]);
          setFilteredEvents([...filteredEvents, addedEvent]);
          Swal.fire({ // SweetAlert success message
            icon: 'success',
            title: 'Event Added!',
            text: 'The event has been successfully added.',
          });
        }

        setNewEvent({
          title: "",
          date: "",
          location: "",
          description: "",
          category: "",
          img: "",
        });
        closeModal();
      } else {
        console.error("Event insertion failed:", result);
         Swal.fire({
            icon: 'error',
            title: 'Event Add Failed!',
            text: 'There was an error while adding the event.',
          });
      }
    } catch (e) {
      setError(e);
      console.error("Error adding event:", e);
       Swal.fire({
            icon: 'error',
            title: 'Event Add Failed!',
            text: 'There was an error while adding the event.',
          });
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
          <Button onClick={() => handleFilter("All")} className="mx-1">
            All
          </Button>
          <Button onClick={() => handleFilter("Religious")} className="mx-1">
            Religious
          </Button>
          <Button onClick={() => handleFilter("Social")} className="mx-1">
            Social
          </Button>
          <Button onClick={() => handleFilter("Charity")} className="mx-1">
            Charity
          </Button>
          <Button onClick={openModal} className="mx-1">
            Add Event
          </Button>
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

      <Modal show={isModalOpen} onClose={closeModal}>
        <Modal.Header>Add New Event</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <Label htmlFor="title" value="Title" />
              <TextInput
                id="title"
                name="title"
                value={newEvent.title}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="date" value="Date" />
              <TextInput
                id="date"
                name="date"
                value={newEvent.date}
                onChange={handleInputChange}
                type="date"
              />
            </div>
            <div>
              <Label htmlFor="location" value="Location" />
              <TextInput
                id="location"
                name="location"
                value={newEvent.location}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="description" value="Description" />
              <Textarea
                id="description"
                name="description"
                value={newEvent.description}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="category" value="Category" />
              <TextInput
                id="category"
                name="category"
                value={newEvent.category}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="img" value="Image URL" />
              <TextInput
                id="img"
                name="img"
                value={newEvent.img}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleAddEvent}>Add Event</Button>
          <Button color="gray" onClick={closeModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Events;