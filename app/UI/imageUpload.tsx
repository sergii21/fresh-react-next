import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const ImageUpload = ({className}) => {
  const [image, setImage] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setImage(Object.assign(file, { preview: URL.createObjectURL(file) }));
  }, []);

  const removeImage = () => {
    setImage(null);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  return (
    <div className={`${className} w-full flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg`}>
      {!image ? (
        <div
          {...getRootProps()}
          className={`p-10 text-center cursor-pointer ${
            isDragActive ? "border-blue-500" : "border-gray-300"
          }`}
        >
          <input {...getInputProps()} />
          <p className="text-gray-500">Drag & drop an image here, or click to select</p>
        </div>
      ) : (
        <div className="relative">
          <img src={image.preview} alt="Uploaded" className="w-40 h-40 object-cover rounded-md" />
          <button
            onClick={removeImage}
            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
          >
            <XMarkIcon className="size-12"></XMarkIcon>
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
