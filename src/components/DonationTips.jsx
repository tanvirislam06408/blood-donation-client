import { Apple, HeartPulse, Moon, HeartHandshake } from "lucide-react";

export default function DonationTips() {
  const tips = [
    {
      icon: <Apple className="h-6 w-6 text-red-500" />,
      title: "Eat Iron-Rich Foods",
      desc: "Spinach, beans, and red meat boost your hemoglobin before donation.",
    },
    {
      icon: <HeartPulse className="h-6 w-6 text-red-500" />,
      title: "Stay Hydrated",
      desc: "Drink plenty of water 24 hours before and after donating blood.",
    },
    {
      icon: <Moon className="h-6 w-6 text-red-500" />,
      title: "Get Good Sleep",
      desc: "Rest well the night before to keep your body strong and ready.",
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-red-500" />,
      title: "Donate Regularly",
      desc: "Healthy adults can safely donate every 3 months. Make it a habit.",
    },
  ];

  return (
    <section className="bg-[#faf6f7] py-15 mt-6">
      <div className="mx-auto container px-4">

       
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[#1b0b0b]">
            Blood Donation Tips
          </h2>

          <p className="mt-4 text-lg text-[#8b6f6f]">
            Simple ways to prepare and stay healthy as a regular donor.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

          {tips.map((tip, index) => (
            <div
              key={index}
              className="rounded-3xl border border-[#f2e7e7] bg-white p-7 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff1f1]">
                {tip.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#1b0b0b]">
                {tip.title}
              </h3>

              <p className="mt-3 text-sm leading-8 text-[#8b6f6f]">
                {tip.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}