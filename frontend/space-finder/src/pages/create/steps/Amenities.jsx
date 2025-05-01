import { useCreateSpace } from "../../../context/CreateSpaceContext";
import { useState } from "react";
import { toast } from "react-hot-toast";

const AMENITIES = ["wifi", "coffee", "kitchen", "parking", "air conditioning"];

export default function Amenities() {
  const { spaceData, setData, nextStep } = useCreateSpace();
  const [selected, setSelected] = useState(spaceData.amenities || []);

  const toggleAmenity = (amenity) => {
    setSelected((prev) =>
      prev.includes(amenity)
        ? prev.filter((item) => item !== amenity)
        : [...prev, amenity]
    );
  };

  const handleNext = () => {
    if (selected.length === 0) {
      toast.error("Please select at least one amenity.");
      return;
    }

    setData({ amenities: selected }); // ✅ update amenities in context
    nextStep(); // ✅ go to next step
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {AMENITIES.map((item) => (
          <label key={item} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selected.includes(item)}
              onChange={() => toggleAmenity(item)}
            />
            <span className="capitalize">{item}</span>
          </label>
        ))}
      </div>

      <button
        onClick={handleNext}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
      >
        Next
      </button>
    </div>
  );
}
