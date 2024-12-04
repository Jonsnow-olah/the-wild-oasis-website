// import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex border-colors-primary-800 border">
      <Image
        src={image}
        alt={`Cabin ${name}`}
        className="flex-1 border-r border-colors-primary-800"
      />

      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 bg-colors-primary-950">
          <h3 className="text-accent-500 font-semibold text-2xl mb-3">
            Cabin {name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            {/* <UsersIcon className="h-5 w-5 text-colors-primary-600" /> */}
            <p className="text-lg text-colors-primary-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-colors-primary-600">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${regularPrice}</span>
            )}
            <span className="text-colors-primary-200">/ night</span>
          </p>
        </div>

        <div className="bg-colors-primary-950 border-t border-t-colors-primary-800 text-right">
          <a
            href={`/cabins/${id}`}
            className="border-l border-colors-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-colors-primary-900"
          >
            Details & reservation &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;