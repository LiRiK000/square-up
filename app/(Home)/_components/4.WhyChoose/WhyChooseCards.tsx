import {
  Crown,
  LucideBatteryCharging,
  Medal,
  PanelsLeftRight,
  Puzzle,
  ShieldAlert,
  UsersRound,
} from "lucide-react";

import { OurServicesCard } from "../3.OurServices/OurServicesCard";
import React from "react";

export const WhyChooseCards = () => {
  return (
    <div className="flex max-xl:flex-col flex-row -mt-32 gap-x-4 z-30 mb-12 mx-10">
      <OurServicesCard
        icon={Medal}
        title={"Expertise"}
        description={
          "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions."
        }
      />
      <OurServicesCard
        icon={ShieldAlert}
        title={"Results-Driven Solutions"}
        description={
          "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage."
        }
      />
      <OurServicesCard
        icon={UsersRound}
        title={"Client-Centric Approach"}
        description={
          "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success."
        }
      />
      <OurServicesCard
        icon={Crown}
        title={"Collaborative Partnership"}
        description={
          "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive."
        }
      />
    </div>
  );
};
