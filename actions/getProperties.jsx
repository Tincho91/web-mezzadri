const URL = `${process.env.NEXT_PUBLIC_API_URL}/properties`;

const getProperties = async ({ categoryId, roomId, minPrice, maxPrice }) => {
    const queryParams = new URLSearchParams();

    if (categoryId) {
        queryParams.append('categoryId', categoryId);
    }

    if (roomId) {
        queryParams.append('roomId', roomId);
    }

    if (minPrice) {
        queryParams.append('priceMin', minPrice);  // Adjusted to match the backend
    }

    if (maxPrice) {
        queryParams.append('priceMax', maxPrice);  // Adjusted to match the backend
    }

    const res = await fetch(`${URL}?${queryParams.toString()}`);

    return res.json();
};

export default getProperties;
