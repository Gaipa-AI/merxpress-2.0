import * as React from 'react';
import { FeatureItem } from './FeatureItem';
import { ActionButton } from './ActionButton';

const leftFeatures = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/713c8d9afc4b9ed89da0e270842e259ee6215c6e7590b4000eb3930b3948ea91?placeholderIfAbsent=true&apiKey=2c0ef7d7caa24d8d8c04d3962010fc58",
    title: <>Support of Multiple <span className="font-bold">Payment Methods</span></>,
    description: "Credit/debit cards, mobile money, bank transfers, and digital wallets"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/713c8d9afc4b9ed89da0e270842e259ee6215c6e7590b4000eb3930b3948ea91?placeholderIfAbsent=true&apiKey=2c0ef7d7caa24d8d8c04d3962010fc58",
    title: <>Customer <span className="font-bold">Funds Protection</span> Against Scammers</>,
    description: "An escrow system to protect funds until a product or service is delivered"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/713c8d9afc4b9ed89da0e270842e259ee6215c6e7590b4000eb3930b3948ea91?placeholderIfAbsent=true&apiKey=2c0ef7d7caa24d8d8c04d3962010fc58",
    title: <>Escrow <span className="font-bold">Release Mechanism</span></>,
    description: "Funds are held until the buyer confirms delivery"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/713c8d9afc4b9ed89da0e270842e259ee6215c6e7590b4000eb3930b3948ea91?placeholderIfAbsent=true&apiKey=2c0ef7d7caa24d8d8c04d3962010fc58",
    title: <>Automated <span className="font-bold">Dispute Resolution</span></>,
    description: "A backend system tracks and resolves disputes automatically"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/713c8d9afc4b9ed89da0e270842e259ee6215c6e7590b4000eb3930b3948ea91?placeholderIfAbsent=true&apiKey=2c0ef7d7caa24d8d8c04d3962010fc58",
    title: <><span className="font-bold">Micro-Savings Account </span>for Buyers</>,
    description: "Enables users to save money for future purchases within MerxPay"
  }
];

const rightFeatures = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a6c8ab07677c8287fcad651b0a65a2d084e3a9631132c20eb8e101218e832110?placeholderIfAbsent=true&apiKey=2c0ef7d7caa24d8d8c04d3962010fc58",
    title: <>Peer-to-Peer <span className="font-bold">Micro Loans</span></>,
    description: "Allows users to issue or request small loans directly"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a6c8ab07677c8287fcad651b0a65a2d084e3a9631132c20eb8e101218e832110?placeholderIfAbsent=true&apiKey=2c0ef7d7caa24d8d8c04d3962010fc58",
    title: <>Currency <span className="font-bold">Exchange</span></>,
    description: "Support multi-currency transactions with real-time conversion"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a6c8ab07677c8287fcad651b0a65a2d084e3a9631132c20eb8e101218e832110?placeholderIfAbsent=true&apiKey=2c0ef7d7caa24d8d8c04d3962010fc58",
    title: <><span className="font-bold">Instant Transfer</span> System</>,
    description: "Enable real-time money transfers between users"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a6c8ab07677c8287fcad651b0a65a2d084e3a9631132c20eb8e101218e832110?placeholderIfAbsent=true&apiKey=2c0ef7d7caa24d8d8c04d3962010fc58",
    title: <>AI-Powered <span className="font-bold">Spending Analytics</span></>,
    description: "Track spending patterns and provide financial insights"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a6c8ab07677c8287fcad651b0a65a2d084e3a9631132c20eb8e101218e832110?placeholderIfAbsent=true&apiKey=2c0ef7d7caa24d8d8c04d3962010fc58",
    title: <>MerxPay<span className="font-bold"> Reward System</span></>,
    description: "Reward users with points for frequent purchases and responsible saving"
  }
];

export const PaymentFeatures: React.FC = () => {
  return (
    <div className="bg-white flex flex-wrap gap-10 items-start text-lg container mx-auto mt-20">
      <div className="flex flex-col flex-1 shrink basis-0 min-h-[328px] min-w-[240px] max-md:max-w-full">
        <h1 className="text-4xl font-semibold text-slate-900 max-md:max-w-full">
          Everything You Need for Seamless Transactions
        </h1>
        <p className="mt-10 leading-7 text-gray-500 max-md:max-w-full">
          MerxPay offers fast payments, seamless currency exchange, robust
          security, and multi-platform integration — all tailored for your
          marketplace needs.
        </p>
        <div className="flex flex-1 gap-2 justify-between text-sm items-start mt-10 max-w-[547px] size-full max-md:max-w-full">
          <ActionButton className=" w-1/3 text-gray-200">
            <span className="text-red-500">Send&Receive</span> Money
          </ActionButton>
          <ActionButton className=" w-1/3 text-white">
            Pay with Merx<span className="text-red-500">Pay</span>
          </ActionButton>
        </div>
      </div>

      <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
        {leftFeatures.map((feature, index) => (
          <div key={index} className={index > 0 ? "mt-5" : ""}>
            <FeatureItem {...feature} />
          </div>
        ))}
      </div>

      <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
        {rightFeatures.map((feature, index) => (
          <div key={index} className={index > 0 ? "mt-4" : ""}>
            <FeatureItem {...feature} />
          </div>
        ))}
      </div>
    </div>
  );
}