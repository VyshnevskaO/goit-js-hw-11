
const key = "43347579-3d95162bcb8db799a52fc5fc5";

export function fetchRequest(request) {
    const searchParams = new URLSearchParams({
        key: key,
        q: request,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 99
    
    });

    return fetch(`https://pixabay.com/api/?${searchParams}`)
     .then((response) => {
             if (!response.ok) {
            throw new Error (response.statusText)
        }
            return response.json();
        })
}