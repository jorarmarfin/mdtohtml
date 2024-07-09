export const apiNode = async (markdown) => {
    const url = 'http://localhost:4000/api/markdown';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ markdown })
    });

    const data = await response.json();
    return data;
}