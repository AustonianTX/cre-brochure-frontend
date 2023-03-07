


async function sendPdf(pdfFile: File): Promise<void> {
  const formData = new FormData();
  formData.append("brochure", pdfFile);

  const response = await fetch("https://cre.up.railway.app/upload", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}




export default sendPdf;