// TODO: 在这里从firebase获取所有数据，并且过滤
export async function getAllEvents() {
    const response = await fetch('https://react-project-5e3c2-default-rtdb.asia-southeast1.firebasedatabase.app/events.json')
    const data = await response.json()
    const events = []

    for(const key in data) {
        events.push({
            id: key, 
            ...data[key]
        });
    }
    return events;
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents()
    return allEvents.filter((event) => event.isFeatured)
}

export async function getFilteredEvents(dataFailter) {
    const {year, month} = dataFailter;
    const allEvents = await getAllEvents()

    let filteredEvents = allEvents.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
    return filteredEvents;
}

export async function getEventById(id) {
    const allEvents = await getAllEvents()
    return allEvents.find((event) => event.id === id);
}