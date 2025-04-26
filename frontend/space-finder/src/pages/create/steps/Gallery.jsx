import { useCreateSpace } from "../../../context/CreateSpaceContext";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function Gallery() {
  const { spaceData, dispatch, setStep } = useCreateSpace();
  const [imageUrl, setImageUrl] = useState("");

  const addImage = () => {
    if (imageUrl.trim() === "") return;

    const newImage = {
      url: imageUrl.trim(),
      type: "image/url", // just a placeholder since you're using URLs
    };

    dispatch({
      type: "UPDATE_FIELD",
      field: "images",
      value: [...(spaceData.images || []), newImage],
    });

    setImageUrl("");
  };

  const handleNext = () => {
    if (!spaceData.images || spaceData.images.length < 3) {
      toast.error("Please add at least 3 images.");
      return;
    }

    setStep(3); // Go to next step
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Paste Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button
        onClick={addImage}
        className="bg-gray-700 text-white px-3 py-1 rounded"
      >
        Add Image
      </button>

      <div className="grid grid-cols-3 gap-2">
        {spaceData.images?.map((img, idx) => (
          <img
            key={idx}
            src={img.url}
            alt={`preview-${idx}`}
            className="w-full h-32 object-cover rounded"
          />
        ))}
      </div>

      <button
        onClick={handleNext}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
}
