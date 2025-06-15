import Image from "next/image";

interface RasRasayanProductCardProps {
  name: string;
  speciality: string;
  imageUrl?: string;
}

export default function RasRasayanProductCard({
  name,
  speciality,
  imageUrl,
}: RasRasayanProductCardProps) {
  return (
    <div className="flex flex-col items-center">
      {/* Product Image */}
      <div className="w-full mb-4">
        <div className="bg-[#FFDAB0] rounded-xl p-8 h-80 flex items-center justify-center">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={name}
              width={200}
              height={200}
              className="object-contain"
            />
          ) : (
            <span className="text-gray-600 text-center">Product Image</span>
          )}
        </div>
      </div>

      {/* Product Name */}
      <h3 className="text-center text-base md:text-lg font-semibold text-black mb-4 px-2">
        {name}
      </h3>

      {/* Speciality Section */}
      <div className="text-center mb-4">
        <p className="text-base md:text-lg font-semibold text-black">
          Speciality :-
        </p>
        <p className="text-sm md:text-base text-gray-600 mt-2 px-2">
          {speciality}
        </p>
      </div>

      {/* Rating/Details Bar */}
      <div className="w-full">
        <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center">
          <span className="text-xs text-gray-500">Product Details</span>
        </div>
      </div>
    </div>
  );
}
