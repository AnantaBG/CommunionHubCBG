import { Card, Button, Modal, Label, Select, TextInput, Textarea, Spinner } from "flowbite-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import NavBar from "../../Home/Navbar";
import Swal from "sweetalert2";
import { BiAddToQueue } from "react-icons/bi";
import { FaCalendarAlt, FaFileAlt, FaMapMarkerAlt, FaTag } from "react-icons/fa";
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
        const response = await fetch("https://communion-server.vercel.app/allEvents");
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
      const response = await fetch("https://communion-server.vercel.app/addedEvent", {
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
        const fetchNewEventResponse = await fetch(`https://communion-server.vercel.app/allEvents`);
        if (!fetchNewEventResponse.ok) {
          throw new Error(`HTTP error fetching new event: ${fetchNewEventResponse.status}`);
        }
        const allEventsData = await fetchNewEventResponse.json();
        const addedEvent = allEventsData.find(event => event._id === result.insertedId);

        if (addedEvent) {
          setEvents([...events, addedEvent]);
          setFilteredEvents([...filteredEvents, addedEvent]);
          Swal.fire({
            icon: "success",
            title: "Event Added!",
            text: "The event has been successfully added.",
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
          icon: "error",
          title: "Event Add Failed!",
          text: "There was an error while adding the event.",
        });
      }
    } catch (e) {
      setError(e);
      console.error("Error adding event:", e);
      Swal.fire({
        icon: "error",
        title: "Event Add Failed!",
        text: "There was an error while adding the event.",
      });
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">
    <Spinner
      className="w-11/12 h-10"
      color="info"
      aria-label="Info spinner example"
    />
  </div>;
  }

  if (error) {
    return <p>Error fetching events: {error.message}</p>;
  }

  return (
    <div className="w-11/12 mx-auto ">
      <NavBar></NavBar>
      <div className="my-5">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl my-5 flex justify-center text-center font-semibold text-slate-600 font-mono"
    >
        Event List
    </motion.h2>
    <div className="sm:flex grid grid-cols-2 gap-2 justify-center mb-4">
        <motion.button
            whileHover={{ scale: 1.10 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
        >
            <Button onClick={() => handleFilter("All")} className="mx-1 rounded-full w-full">
                All
            </Button>
        </motion.button>
        <motion.button
            whileHover={{ scale: 1.10 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
        >
            <Button onClick={() => handleFilter("Religious")} className="mx-1 rounded-full w-full">
                Religious
            </Button>
        </motion.button>
        <motion.button
            whileHover={{ scale: 1.10 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
        >
            <Button onClick={() => handleFilter("Social")} className="mx-1 rounded-full w-full">
                Social
            </Button>
        </motion.button>
        <motion.button
            whileHover={{ scale: 1.10 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
        >
            <Button onClick={() => handleFilter("Charity")} className="mx-1 rounded-full w-full">
                Charity
            </Button>
        </motion.button>
        <motion.button
            className="mx-1 col-span-2"
            whileHover={{ scale: 1.10 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
        >
            <Button
                gradientDuoTone="greenToBlue"
                onClick={openModal}
                className="w-full"
            >
                <BiAddToQueue className="text-2xl" />
                Add New Event
            </Button>
        </motion.button>
          
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
    {filteredEvents.map((event, index) => (
        <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="w-full cursor-pointer" //ensure that the motion div takes up the full width of the grid cell.
        >
            <Card className="w-full h-full"> {/* set card to fill its container */}
                {event.img && (
                    <img
                        src={event.img}
                        alt={event.title}
                        className="min-w-60 min-h-40 max-h-40 max-w-60 mx-auto"
                    />
                )}
                <h3 className="text-2xl">{event.title}</h3>
                <div className="flex items-center mb-1 text-gray-600">
                    <FaCalendarAlt className="mr-2" />
                    <p className="text-sm">Date: {event.date}</p>
                </div>

                <div className="flex items-center mb-1 text-gray-600">
                    <FaMapMarkerAlt className="mr-2" />
                    <p className="text-sm">Location: {event.location}</p>
                </div>

                <div className="flex items-start mb-1 text-gray-600">
                    <FaFileAlt className="mr-2 mt-0.5" />
                    <p className="text-sm">Description: {event.description}</p>
                </div>

                <div className="flex items-center text-gray-600">
                    <FaTag className="mr-2" />
                    <p className="text-sm">Category: {event.category}</p>
                </div>
            </Card>
        </motion.div>
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
              <Select
                id="category"
                name="category"
                value={newEvent.category}
                onChange={handleInputChange}
              >
                <option value="">Select a category</option>
                <option value="Religious">Religious</option>
                <option value="Social">Social</option>
                <option value="Charity">Charity</option>
              </Select>
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
          <Button color="success" onClick={handleAddEvent}>Add Event</Button>
          <Button color="gray" onClick={closeModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Events;