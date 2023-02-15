type FormInputs = {
  text: string;
  features: string[];
};

async function processBrochure(formData: FormInputs) {
  const url = "https://cre-brochure-production.up.railway.app/brochure/process";

  const raw = JSON.stringify({
    text: formData.text,
    features: formData.features,
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: raw,
      redirect: "follow",
    });

    const data = await response.json();

    return data;
  } catch (error: any) {
    console.log("Error:", error.message);
  }
}

export default processBrochure;
