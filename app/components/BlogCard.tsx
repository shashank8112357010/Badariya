import Image from "next/image";

interface BlogCardProps {
  title: string;
  readTime: string;
  imageUrl?: string;
}

export default function BlogCard({ title, readTime, imageUrl }: BlogCardProps) {
  return (
    <div className="w-full">
      {/* Blog Image */}
      <div className="w-full h-72 bg-white rounded-lg mb-6 overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={305}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <span className="text-gray-500">Blog Image</span>
          </div>
        )}
      </div>

      {/* Blog Content */}
      <div>
        <h3 className="text-xl md:text-2xl font-semibold text-black mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-lg md:text-xl font-medium text-[#5C5C5C]">
          {readTime}
        </p>
      </div>
    </div>
  );
}
