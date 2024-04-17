import Image from "next/image";
import pic from "@/assets/burger.jpg";
import { Badge } from "../ui/badge";

export default function MenuCard({ data }) {
  return (
    <div className="bg-white rounded-lg  overflow-hidden relative">
      <Image
        //   src={`/${data.image}.jpg`}
        src={pic}
        alt={data.name}
        placeholder="blur"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{data.name}</h3>
        <p className="text-gray-600 mb-2">{data.description}</p>
        <div className="flex flex-wrap gap-2">
          {/* Display sizes and prices */}
          {data.sizes.map((size) => (
            <Badge
              variant="destructive"
              key={size.name}
              className="flex items-center gap-1"
            >
              <p>{size.name}: </p>
              <p>${size.price}</p>
            </Badge>
          ))}
        </div>
        <div className="top-4  absolute">
          <Badge variant="">{data.category}</Badge>
        </div>
      </div>
    </div>
  );
}
