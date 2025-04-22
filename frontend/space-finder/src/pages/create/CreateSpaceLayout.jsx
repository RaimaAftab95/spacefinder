import { useCreateSpace } from "../../context/CreateSpaceContext";
import GeneralInfo from "./steps/GeneralInfo";
import Gallery from "./steps/Gallery";
import Location from "./steps/Location";
import Amenities from "./steps/Amenities";
import Availability from "./steps/Availability";
import ReviewAndSubmit from "./steps/ReviewAndSubmit";

export default function CreateSpaceLayout() {
  const { step } = useCreateSpace();

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create a New Space</h1>

      {step === 1 && <GeneralInfo />}
      {step === 2 && <Gallery />}
      {step === 3 && <Location />}
      {step === 4 && <Amenities />}
      {step === 5 && <Availability />}
      {step === 6 && <ReviewAndSubmit />}
    </div>
  );
}
