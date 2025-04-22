import { useCreateSpace } from "../../../context/CreateSpaceContext";

export default function ReviewAndSubmit() {
  const { spaceData, dispatch, setStep } = useCreateSpace();

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://your-backend-url.com/api/spaces", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(spaceData),
      });

      if (!response.ok) {
        throw new Error("Failed to create space");
      }

      const data = await response.json();
      alert("Space created successfully!");
      // Optionally, redirect to another page or reset the form
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Review Your Space Details</h2>

      <div className="space-y-2">
        <div>
          <span className="font-semibold">Title:</span> {spaceData.title}
        </div>
        <div>
          <span className="font-semibold">Description:</span>{" "}
          {spaceData.description}
        </div>
        <div>
          <span className="font-semibold">Price:</span> ${spaceData.price}
        </div>
        <div>
          <span className="font-semibold">Location:</span>{" "}
          {spaceData.location?.address}, {spaceData.location?.city},{" "}
          {spaceData.location?.country}
        </div>
        <div>
          <span className="font-semibold">Amenities:</span>{" "}
          {spaceData.amenities?.join(", ")}
        </div>
        <div>
          <span className="font-semibold">Availability:</span>{" "}
          {spaceData.availability?.startDate} to{" "}
          {spaceData.availability?.endDate}
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <button
          onClick={() => setStep(5)} // Go back to Availability step to edit
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Edit
        </button>

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
