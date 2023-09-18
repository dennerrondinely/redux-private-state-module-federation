const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('http://localhost:3000/events');
      const events = await response.json();
      setEvents(events);
    };
    fetchEvents();
  }, []);

  return (
    <EventsContext.Provider value={events}>
      {children}
    </EventsContext.Provider>
  );
}