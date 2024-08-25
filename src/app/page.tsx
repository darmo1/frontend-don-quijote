import { BannerHome } from "./_components/banners/banner-home";
import { CardDetails } from "./_components/card-details";
import { SimpleSlider } from "./_components/carousel/carousel";
import { Description } from "./_components/description";
import { WhyUs } from "./_components/why-us";

export default function Home() {
  return (
    <main className="">
      <BannerHome />
      <div className="max-w-7xl mx-auto">
        <CardDetails />
        <Description />
        <WhyUs />
        <SimpleSlider />
      </div>
    </main>
  );
}
