const DUMMY_EVENTS = [
    {
      id: "e1",
      title: "Programming for everyone",
      description:
        "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
      location: "Somestreet 25, 12345 San Somewhereo",
      date: "2021-05-12",
      image:'https://picsum.photos/300/300',
      isFeatured: false,
    },
    {
      id: "e2",
      title: "Networking for introverts",
      description:
        "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
      location: "New Wall Street 5, 98765 New Work",
      date: "2021-05-30",
      image:'https://picsum.photos/300/301',
      isFeatured: true,
    },
    {
      id: "e3",
      title: "Networking for extroverts",
      description:
        "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
      location: "My Street 12, 10115 Broke City",
      date: "2022-04-10",
      image:'https://picsum.photos/300/302',
      isFeatured: true,
    },
    {
      id: "e4",
      title: "XITU JUEJIN CONF",
      description:
        "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
      location: "Somestreet 25, 12345 San Somewhereo",
      date: "2021-05-12",
      image:'https://picsum.photos/300/303',
      isFeatured: false,
    },
    {
      id: "e5",
      title: "Let's VisionOS 2024",
      description:
        "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
      location: "New Wall Street 5, 98765 New Work",
      date: "2024-03-30 ~ 2024-03-31",
      image:'https://picsum.photos/300/304',
      isFeatured: true,
    },
    {
      id: "e6",
      title: "countstarss404",
      description:
        "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
      location: "My Street 12, 10115 Broke City",
      date: "2024-06-30",
      image:'https://picsum.photos/300/305',
      isFeatured: true,
    },
  ];


export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
    return DUMMY_EVENTS;
}

export function getFilteredEvents(dataFailter) {
    const {year, month} = dataFailter;

    let filteredEvents = DUMMY_EVENTS.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
    return filteredEvents;
}

export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
}