export async function fetchEvents({ signal, searchTerm }) {
    let url = new URL('http://localhost:3000/events');

    for (let key in searchTerm) {
        if (searchTerm[key]) {
            url.searchParams.set(key, searchTerm[key]);
        }
    }

    // console.info(url.toString());

    const response = await fetch(url.toString(), { signal });

    if (!response.ok) {
        const error = new Error('An error occurred while fetching the events');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const { events } = await response.json();

    return events;
}


export async function createNewEvent(eventData) {
    const response = await fetch(`http://localhost:3000/events`, {
        method: 'POST',
        body: JSON.stringify(eventData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        const error = new Error('An error occurred while creating the event');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const { event } = await response.json();

    return event;
}
