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
