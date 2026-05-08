import Link from "next/link";
import { ArrowRight, AlertCircle } from "lucide-react";

const EmergencyBanner = () => {
  return (
    <section className="container mx-auto px-4 my-16">

      <div
        className="
          flex
          flex-col
          gap-8
          rounded-[32px]
          gradient-primary
          px-8
          py-10
          md:flex-row
          md:items-center
          md:justify-between
        "
      >

        {/* left content */}
        <div className="space-y-4">

          {/* badge */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-white/15
              px-4
              py-1.5
              text-sm
              font-medium
              text-white
              backdrop-blur-sm
            "
          >
            <AlertCircle size={16} />
            EMERGENCY
          </div>

          {/* title */}
          <div className="space-y-2">

            <h2 className="text-4xl font-bold text-white">
              Need blood urgently?
            </h2>

            <p className="max-w-2xl text-red-100">
              Contact our 24/7 emergency line and we'll match
              you with a nearby donor in minutes.
            </p>

          </div>
        </div>

        {/* button */}
        <Link
          href="/all-donor"
          className="
            inline-flex
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-white
            px-8
            py-4
            font-semibold
            text-red-500
            transition-all
            hover:scale-105
          "
        >
          Find Donor Now
          <ArrowRight size={18} />
        </Link>

      </div>
    </section>
  );
};

export default EmergencyBanner;