const URL = `${process.env.NEXT_PUBLIC_API_URL}/properties`;

const getFeaturedProperties = async () => {
  // Fetch all properties
  const res = await fetch(URL);
  
  if (!res.ok) {
    console.log('Error Status:', res.status); // Log the response status
    console.log('Error Response:', await res.text()); // Log the response text (error message)
    throw new Error('Property response was not ok');
  }

  const properties = await res.json();

  // Filter properties to only include the ones with isFeatured set to true
  const featuredProperties = properties.filter(property => property.isFeatured);

  return featuredProperties;
};

export default getFeaturedProperties;