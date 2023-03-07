import { useState } from "react";
import processBrochure from "../utils/handleFormSubmit";
import Checkmark from "../icons/checkmark";
import XMark from "../icons/x-mark";
import QuestionMark from "../icons/questionMark";
import XCircle from "../icons/x-circle";
import LoadingSpinner from "./LoadingSpinner";

type FormInputs = {
  brochureText: string;
  shortTexts: string[];
};

export default function BrochureForm() {
  const [inputs, setInputs] = useState<FormInputs>({
    brochureText:
      "Lofted full floor with good existing conditions, open to modifying. Ability to control HVAC 24/7. Limited dedicated parking is available at going rate.  Potential for dedicated entrance/signage on Jefferson, other signage opportunities and/or addition of a building amenity center for long term, full floor lease.  Manned security and 24 hour access key fob.  Recent updates to front entrance, common areas, lobby, and elevator cabs.  Available onsite storage.  Location provides easy access to commuter trains and expressways.  Union Station is 0.1 miles and Ogilvie Transportation Center is 0.4 miles.",
    shortTexts: ["Pool", "Gym", "Security"],
  });

  const [features, setFeatures] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number
  ) => {
    const { name, value } = event.target;

    setInputs((prevInputs) => {
      if (index === undefined) {
        return {
          ...prevInputs,
          [name]: value,
        };
      } else {
        const updatedShortTexts = [...prevInputs.shortTexts];
        updatedShortTexts[index] = value;

        return {
          ...prevInputs,
          shortTexts: updatedShortTexts,
        };
      }
    });
  };

  const handleAddShortText = () => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      shortTexts: [...prevInputs.shortTexts, ""],
    }));
  };

  const handleRemoveShortText = (index: number) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      shortTexts: prevInputs.shortTexts.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const data = await processBrochure({
      text: inputs.brochureText,
      features: inputs.shortTexts,
    });

    if (data) {
      setFeatures(data);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        id="brochureText"
        name="brochureText"
        value={inputs.brochureText}
        onChange={handleInputChange}
        className="h-64 border border-gray-300 rounded-md py-2 px-3 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-full"
      />

      <label className="block font-medium mb-1">Features</label>
      {inputs.shortTexts.map((shortText, index) => (
        <div key={index} className="flex mb-4">
          {inputs.shortTexts.length > 1 && (
            <button
              type="button"
              onClick={() => handleRemoveShortText(index)}
              className="text-red-500 hover:text-red-600 font-bold py-1 px-2 rounded"
            >
              <XMark />
            </button>
          )}
          <input
            type="text"
            name={`shortTexts[${index}]`}
            value={shortText}
            onChange={(event) => handleInputChange(event, index)}
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 flex-1"
          />
          {loading && <LoadingSpinner />}
          {features && features[shortText] !== undefined && !loading ? (
            features[shortText] ? (
              <Checkmark />
            ) : (
              <XCircle />
            )
          ) : (
            !loading && <QuestionMark />
          )}
        </div>
      ))}
      <div className="flex flex-col max-w-sm">
        <button
          type="button"
          onClick={handleAddShortText}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Add Feature
        </button>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          {loading ? <LoadingSpinner /> : "Parse Brochure"}
        </button>
      </div>
    </form>
  );
}
