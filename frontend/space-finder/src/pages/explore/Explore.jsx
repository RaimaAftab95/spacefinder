import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Explore() {
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    const fetchSpaces = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/spaces");
        setSpaces(res.data);
      } catch (err) {
        console.error("Error fetching spaces", err);
      }
    };
    fetchSpaces();
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {spaces.map((space) => (
        <Link
          key={space._id}
          to={`/space/${space._id}`}
          className="border rounded-lg p-4 shadow hover:shadow-lg transition"
        >
          <img
            src={
              space.images?.[0] ||
              "https://dummyimage.com/100x50/000/fff&text=No+Image"
            }
            alt={space.title}
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="mt-2 text-lg font-semibold">{space.title}</h2>
          <p className="text-sm text-gray-600">{space.location?.city}</p>
        </Link>
      ))}
    </div>
  );
}
