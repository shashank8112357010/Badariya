import Image from "next/image";

interface BlogPostCardProps {
  title: string;
  category: string;
  imageUrl?: string;
}

export default function BlogPostCard({
  title,
  category,
  imageUrl,
}: BlogPostCardProps) {
  return (
    <div className="w-full">
      <div className="bg-[#FFF0DE] rounded-lg p-6 flex items-center gap-8">
        {/* Blog Image */}
        <div className="w-96 h-44 bg-[#FDC9C9] rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              width={400}
              height={176}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-500 text-sm">Blog Image</span>
          )}
        </div>

        {/* Blog Content */}
        <div className="flex-1 flex flex-col justify-center gap-6">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#232323] leading-tight">
            {title}
          </h3>

          <div className="flex items-end gap-6">
            <span className="text-lg md:text-xl lg:text-2xl font-medium text-[#434343]">
              Category :
            </span>
            <span className="text-base md:text-lg lg:text-xl font-normal text-[#434343]">
              {category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
