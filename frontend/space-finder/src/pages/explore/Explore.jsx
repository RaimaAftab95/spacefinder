import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Explore() {
  const [spaces, setSpaces] = useState([]);
  const [loading, setLoading] = useState(true); // new

  useEffect(() => {
    const fetchSpaces = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/spaces");
        console.log("Fetched spaces:", res.data);

        if (Array.isArray(res.data)) {
          setSpaces(res.data);
        } else if (Array.isArray(res.data.spaces)) {
          setSpaces(res.data.spaces);
        } else {
          console.error("Unexpected response format", res.data);
          setSpaces([]);
        }
      } catch (err) {
        console.error("Error fetching spaces", err);
        setSpaces([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSpaces();
  }, []);

  if (loading) {
    return (
      <div className="p-4 text-center text-gray-500">Loading spaces...</div>
    );
  }

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {spaces.length === 0 ? (
        <div>No spaces available</div>
      ) : (
        spaces.map((space) => (
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
        ))
      )}
    </div>
  );
}
