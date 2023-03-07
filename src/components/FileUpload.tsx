"use client";

import sendPdf from "@/utils/handleFileUpload";
import React, { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

function PdfUploader(): JSX.Element {
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  const [response, setResponse] = useState<any>(null);

  const [loading, setLoading] = useState(false);

  const handlePdfUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile?.type === "application/pdf") {
      setPdfFile(uploadedFile);
    } else {
      alert("Please upload a PDF file.");
    }
  };

  const handleAnalyzePdf = async () => {
    if (pdfFile) {
      setLoading(true);
      const data = await sendPdf(pdfFile);
      const prettyJson = JSON.stringify(data, null, 2);
      setResponse(prettyJson);
      setLoading(false);
    } else {
      alert("Please upload a PDF file first.");
    }
  };

  return (
    <>
      <div className="flex flex-col space-y-4">
        <label htmlFor="pdf-file">Upload PDF File:</label>
        <input
          type="file"
          id="pdf-file"
          accept=".pdf"
          onChange={handlePdfUpload}
        />
        <button
          className="rounded-md bg-white py-2.5 px-3.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={handleAnalyzePdf}
        >
          {loading ? <LoadingSpinner /> : "Analyze PDF"}
        </button>
        {response && (
          <div>
            <h2>Response:</h2>
            <pre className="pretty-json">{response}</pre>
          </div>
        )}
      </div>
    </>
  );
}

export default PdfUploader;
