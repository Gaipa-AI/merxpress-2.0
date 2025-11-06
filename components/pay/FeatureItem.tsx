import * as React from 'react';
import { FeatureItemProps } from './types';

export const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-wrap gap-2.5 items-start w-full max-md:max-w-full">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 w-3 aspect-[0.46]"
      />
      <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
        <div className="leading-tight text-slate-900 max-md:max-w-full">
          {title}
        </div>
        <div className="mt-2.5 leading-7 text-gray-500 max-md:max-w-full">
          {description}
        </div>
      </div>
    </div>
  );
}