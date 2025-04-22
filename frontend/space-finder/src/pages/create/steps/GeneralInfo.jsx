import { useCreateSpace } from "../../../context/CreateSpaceContext";

export default function GeneralInfo() {
  const { spaceData, dispatch, setStep } = useCreateSpace();

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleNext = () => {
    if (
      !spaceData.title ||
      !spaceData.description ||
      !spaceData.price ||
      !spaceData.type
    ) {
      alert("All fields are required.");
      return;
    }
    setStep(2);
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={spaceData.title || ""}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={spaceData.description || ""}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        name="price"
        placeholder="Price per night"
        value={spaceData.price || ""}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <select
        name="type"
        value={spaceData.type || ""}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        <option value="">Select type</option>
        <option value="apartment">Apartment</option>
        <option value="house">House</option>
        <option value="room">Room</option>
      </select>
      <button
        onClick={handleNext}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
}
