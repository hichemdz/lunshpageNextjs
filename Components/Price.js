import React from "react";

import CheckedIcon from "../Icons/Checked";
import Section from "./Section";

const Item = ({ Icon, name }) => {
  return (
    <li className="flex items-center space-x-2">
      <Icon className="w-8 h-8" />
      <p className="text-sm">{name}</p>
    </li>
  );
};
const Price = () => {
  return (
    <Section myRef={6} className="bg-main-balck text-white fill-grean-950  py-32 ">
      <div className="flex space-y-8 lg:space-y-0 flex-col lg:flex-row lg:items-center justify-between ">
        <div className="max-w-xl space-y-6">
          <h3 className="text-2xl capitalize">Our pricing plan</h3>
          <p className="leading-loose text-sm  text-opacity-90">
            At Nu Terra Labs, we work with your budget and vision. Proposing the
            most efficient and reasonable plan of action that fits with your
            budget is our first concern. Never pay for endless and pricey
            monthly subscription fees for a website that you own, it's a scam.
            With us, you'll get what you pay, No Monthly Subscription Fees for
            your contents, We work with your budget.<br/> "Price is what you pay.
            Value is what you get." -Warren Buffet
          </p>
        </div>
        <div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Websites",
              "Graphic Design",
              "Applications",
              "Content Writing",
              "Ecommerce / Dropshipping",
              "SEO",
              "Marketing",
              "Custom Software",
            ].map((v, k) => (
              <Item key={k} name={v} Icon={CheckedIcon} />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Price;
