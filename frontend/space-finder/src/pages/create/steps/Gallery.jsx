import { useCreateSpace } from "../../../context/CreateSpaceContext";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function Gallery() {
  const { spaceData, setData, nextStep } = useCreateSpace();
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    const newImages = files.map((file) => ({
      url: URL.createObjectURL(file),
      type: file.type,
    }));

    const updatedImages = [...(spaceData.images || []), ...newImages];
    setSelectedFiles(updatedImages);
    setData({ images: updatedImages });
  };

  const handleNext = () => {
    if (!spaceData.images || spaceData.images.length < 3) {
      toast.error("Please upload at least 3 images.");
      return;
    }
    nextStep();
  };

  return (
    <div className="space-y-4">
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        className="w-full p-2 border rounded"
      />

      <div className="grid grid-cols-3 gap-2">
        {spaceData.images?.map((img, idx) => (
          <img
            key={idx}
            src={img.url}
            alt={`uploaded-${idx}`}
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
