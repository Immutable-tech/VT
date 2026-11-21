import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { gallery } from "../data";

export default function Gallery() {
  const [photos, setPhotos] = useState(gallery);

  function removePhoto(id: number) {
    setPhotos(photos.filter((photo) => photo.id !== id));
  }

  return (
    <div>
      <PageHeader
        title="Gallery"
        subtitle="Photos shown on the Vectra Core website."
        buttonText="Upload Photo"
      />
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {photos.map((photo) => (
          <div key={photo.id} className="rounded border border-gray-200 bg-white">
            <div className="flex h-36 items-center justify-center bg-gray-100 text-gray-500">
              Photo
            </div>
            <div className="p-3">
              <p className="mb-2 text-sm text-gray-700">{photo.caption}</p>
              <button
                onClick={() => removePhoto(photo.id)}
                className="rounded border border-red-600 px-3 py-1 text-sm font-semibold text-red-600 hover:bg-red-50"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {photos.length === 0 && (
        <p className="py-10 text-center text-gray-500">
          The gallery is empty. Click Upload Photo to add one.
        </p>
      )}
    </div>
  );
}
