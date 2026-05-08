import Banner from "@/components/Banner";
import BloodChart from "@/components/BloodChart";
import DonationTips from "@/components/DonationTips";
import Featured from "@/components/Featured";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Featured/>
      <DonationTips/>
      <BloodChart/>
    </div>
  );
}
