const URL = `${process.env.NEXT_PUBLIC_API_URL}/properties`;

const getProperty = async (id) => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getProperty;