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
            <div className="flex gap-2 overflow-x-auto">
              {space.images?.length > 0 ? (
                space.images.map((img) => (
                  <img
                    key={img._id}
                    src={img.url}
                    alt={space.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                ))
              ) : (
                <img
                  src="https://dummyimage.com/100x50/000/fff&text=No+Image"
                  alt="No image"
                  className="w-20 h-20 object-cover rounded"
                />
              )}
            </div>
            <h2 className="mt-2 text-lg font-semibold">{space.title}</h2>
            <p className="text-sm text-red-600">{space.location?.city}</p>
            <p className="text-sm text-gray-700 font-medium">
              From ${space.price}/month
            </p>
            {/* Amenities (first 2 or 3) */}
            <div className="flex flex-wrap gap-1 text-xs text-gray-500 mt-1">
              {space.amenities?.slice(0, 3).map((item, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 bg-gray-100 rounded-full text-xs"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Short description */}
            <p className="text-sm mt-1 text-gray-600 line-clamp-2">
              {space.description?.replace(/["]/g, "").trim().slice(0, 100)}...
            </p>
          </Link>
        ))
      )}
    </div>
  );
}
