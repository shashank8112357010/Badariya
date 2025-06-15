import Image from "next/image";

interface ProductCardProps {
  name: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviewCount: number;
  imageUrl?: string;
}

export default function ProductCard({
  name,
  price,
  originalPrice,
  rating,
  reviewCount,
  imageUrl,
}: ProductCardProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-green-600 text-lg">
          ★
        </span>,
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-green-600 text-lg">
          ☆
        </span>,
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300 text-lg">
          ☆
        </span>,
      );
    }

    return stars;
  };

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
      <h3 className="text-center text-base md:text-lg font-semibold text-black mb-2 px-2">
        {name}
      </h3>

      {/* Rating and Reviews */}
      <div className="flex items-center gap-2 mb-2">
        <div className="flex">{renderStars(rating)}</div>
        <span className="text-sm text-gray-600">{reviewCount} reviews</span>
      </div>

      {/* Pricing */}
      <div className="flex items-center gap-2 text-center">
        <span className="text-lg font-semibold text-green-600">₹{price}</span>
        {originalPrice && (
          <span className="text-sm text-gray-500 line-through">
            ₹{originalPrice}
          </span>
        )}
      </div>

      {/* Rating bar placeholder */}
      <div className="w-full mt-4">
        <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center">
          <span className="text-xs text-gray-500">Rating Details</span>
        </div>
      </div>
    </div>
  );
}
