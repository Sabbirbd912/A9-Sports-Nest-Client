import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import BannerCards from "@/components/BannerCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import TeamMember from "@/components/TeamMember";

export default function Home() {
  return (
    <div>
      <Banner/>
      <BannerCards></BannerCards>
      <WhyChooseUs></WhyChooseUs>
      <TeamMember></TeamMember>
      
    </div>
  );
}
