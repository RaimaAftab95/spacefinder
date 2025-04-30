import { useCreateSpace } from "../../../context/CreateSpaceContext";
import { useAuthContext } from "../../../context/AuthContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ReviewAndSubmit() {
  const { spaceData, setStep } = useCreateSpace();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      formData.append("title", spaceData.title);
      formData.append("description", spaceData.description);
      formData.append("price", spaceData.price);
      formData.append("location", JSON.stringify(spaceData.location));
      formData.append("amenities", JSON.stringify(spaceData.amenities));
      formData.append("availability", JSON.stringify(spaceData.availability));

      spaceData.images.forEach((imageFile) => {
        formData.append("images", imageFile);
      });

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/spaces`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        const errRes = await response.json();
        throw new Error(errRes.message || "Failed to create space");
      }

      const data = await response.json();
      toast.success("Space created successfully! 🎉");
      navigate("/dashboard");
      setStep(0); // Optionally go back to first step
      // Optionally clear context or navigate away
    } catch (error) {
      toast.error("Error: " + error.message);
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
        <div>
          <span className="font-semibold">Images:</span>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {spaceData.images?.map((img, idx) => (
              <img
                key={idx}
                src={typeof img === "string" ? img : URL.createObjectURL(img)}
                alt={`preview-${idx}`}
                className="w-full h-24 object-cover rounded"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <button
          onClick={() => setStep(5)}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Edit
        </button>
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
