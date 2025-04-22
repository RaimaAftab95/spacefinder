import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SpaceDetails() {
  const { id } = useParams();
  const [space, setSpace] = useState(null);

  useEffect(() => {
    const fetchSpace = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/spaces/${id}`);
        setSpace(res.data);
      } catch (err) {
        console.error("Error fetching space details", err);
      }
    };
    fetchSpace();
  }, [id]);

  if (!space) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{space.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          src={space.gallery[0]?.url}
          className="w-full h-96 object-cover rounded"
          alt={space.title}
        />
        <div>
          <p className="text-gray-700 mb-2">{space.description}</p>
          <p className="text-sm text-gray-500">
            Located in {space.location?.city}, {space.location?.country}
          </p>
          <p className="text-lg font-semibold mt-4">${space.price} / night</p>
        </div>
      </div>
    </div>
  );
}
