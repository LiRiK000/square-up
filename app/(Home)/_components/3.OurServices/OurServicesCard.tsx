import { LucideIcon } from "lucide-react";

interface ICardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}
export const OurServicesCard = ({
  icon: Icon,
  title,
  description,
}: ICardProps) => {
  return (
    <div className="w-full flex bg-muted-foreground/10 p-4 rounded-md backdrop-blur-[10px] backdrop-filter max-h-[350px] mb-4 z-30">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="rounded-md flex">
          <div className="mb-4 text-[#9eff00] bg-gradient-to-b from-[#282b22] to-[#1c1c1c] z-30">
            {<Icon size={48} />}
          </div>
        </div>
        <div className="mb-4 z-30">
          <h1 className="text-xl font-semibold z-30">{title}</h1>
        </div>
        <div className="z-30">
          <h3 className="text-muted-foreground z-30">{description}</h3>
        </div>
      </div>
    </div>
  );
};
