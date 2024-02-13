import { TypePickAdd, TypePlans } from "../contexts/types";

type TypeStepInfo = {
  text: string;
  id: number;
};
const stepInfo: TypeStepInfo[] = [
  {
    text: "Your Info",
    id: 1,
  },
  {
    text: "Select Plan",
    id: 2,
  },
  {
    text: "Add-Ons",
    id: 3,
  },
  {
    text: "Summary",
    id: 4,
  },
];

const plans: TypePlans[] = [
  {
    icon: "/icons/icon-arcade.svg",
    title: "Arcade",
    duration: "$9/mo",
  },
  {
    icon: "/icons/icon-advanced.svg",
    title: "Advanced",
    duration: "$12/mo",
  },
  {
    icon: "/icons/icon-pro.svg",
    title: "Pro",
    duration: "$15/mo",
  },
];

const listPickAdd: TypePickAdd[] = [
  {
    title: "Online service",
    dis: "Access to multiplayer games",
    duration: "+$1/mo",
    type: "CusomizableP",
  },
  {
    title: "Larger storage",
    dis: "Extra 1TB of cloud save",
    duration: "+$2/mo",
    type: "larger",
  },
  {
    title: "Customizable Profile",
    dis: "Custom theme on your profile",
    duration: "+$2/mo",
    type: "onlineS",
  },
];

export { stepInfo, plans, listPickAdd };
