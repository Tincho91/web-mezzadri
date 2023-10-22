const URL = `${process.env.NEXT_PUBLIC_API_URL}/rooms`;

const getRooms = async (id) => {
  const res = await fetch(`${URL}`);

  return res.json();
};

export default getRooms;