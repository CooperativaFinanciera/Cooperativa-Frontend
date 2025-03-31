import React, { useState } from "react";

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

export default function FileUpload({ onFileUpload }: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFiles = (incomingFiles: FileList) => {
    const selectedFile = incomingFiles[0];
    if (selectedFile) {
      setFile(selectedFile);
      onFileUpload(selectedFile);
      console.log("Archivo recibido:", selectedFile);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  return (
    <div className="w-full max-w-auto mx-auto">
      <div
        className={`border-2 border-dashed border-[rgb(35,66,99)] rounded-xl p-3 text-center cursor-pointer transition  ${dragActive ? "border-green-500 bg-green-50" : "border--[rgb(35,66,99)]"

          }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => {
          const fileInput = document.getElementById("fileInput");
          if (fileInput) fileInput.click();
        }}
        style={{ backgroundColor: 'rgba(248,160,10,255)' }}

      >
        <input
          id="fileInput"
          type="file"
          className="hidden"
          onChange={handleChange}
        />
        <p className="text-xl text-[rgb(35,66,99)] font-bold">Suba su Voucher Definitivamente</p>
      </div>

      {file && (
        <div className="mt-4">
          <h4 className="font-semibold">Archivo seleccionado:</h4>
          <p className="text-sm text-[rgb(35,66,99)]">{file.name}</p>
        </div>
      )}


    </div>
  );
}
