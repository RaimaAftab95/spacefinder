// import { useCreateSpace } from "../../../context/CreateSpaceContext";
// import { useState } from "react";

// export default function Location() {
//   const { spaceData, dispatch, setStep } = useCreateSpace();

//   const [formData, setFormData] = useState({
//     address: spaceData.location?.address || "",
//     city: spaceData.location?.city || "",
//     country: spaceData.location?.country || "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleNext = () => {
//     if (!formData.address || !formData.city || !formData.country) {
//       alert("All fields are required.");
//       return;
//     }

//     dispatch({
//       type: "UPDATE_FIELD",
//       field: "location",
//       value: formData,
//     });

//     setStep(4);
//   };

//   return (
//     <div className="space-y-4">
//       <input
//         type="text"
//         name="address"
//         placeholder="Address"
//         value={formData.address}
//         onChange={handleChange}
//         className="w-full p-2 border rounded"
//       />
//       <input
//         type="text"
//         name="city"
//         placeholder="City"
//         value={formData.city}
//         onChange={handleChange}
//         className="w-full p-2 border rounded"
//       />
//       <input
//         type="text"
//         name="country"
//         placeholder="Country"
//         value={formData.country}
//         onChange={handleChange}
//         className="w-full p-2 border rounded"
//       />

//       <button
//         onClick={handleNext}
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         Next
//       </button>
//     </div>
//   );
// }

import { useCreateSpace } from "../../../context/CreateSpaceContext";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function Location() {
  const { spaceData, setData, nextStep } = useCreateSpace();

  const [formData, setFormData] = useState({
    address: spaceData.location?.address || "",
    city: spaceData.location?.city || "",
    country: spaceData.location?.country || "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNext = () => {
    if (!formData.address || !formData.city || !formData.country) {
      toast.error("All location fields are required.");
      return;
    }

    setData({ location: formData }); // ✅ update location in global context
    nextStep(); // ✅ go to next step
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="country"
        placeholder="Country"
        value={formData.country}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <button
        onClick={handleNext}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
}
