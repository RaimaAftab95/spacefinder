import { useCreateSpace } from "../../../context/CreateSpaceContext";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function Availability() {
  const { spaceData, setData, nextStep } = useCreateSpace();
  const [availability, setAvailability] = useState(
    spaceData.availability || {}
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAvailability((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (!availability.startDate || !availability.endDate) {
      toast.error("Please select both start and end dates.");
      return;
    }

    setData({ availability }); // ✅ update context with availability
    nextStep(); // ✅ proceed to next step (e.g., review/submit)
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Start Date</label>
        <input
          type="date"
          name="startDate"
          value={availability.startDate || ""}
          onChange={handleChange}
          className="border p-2 w-full mt-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">End Date</label>
        <input
          type="date"
          name="endDate"
          value={availability.endDate || ""}
          onChange={handleChange}
          className="border p-2 w-full mt-2"
        />
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
