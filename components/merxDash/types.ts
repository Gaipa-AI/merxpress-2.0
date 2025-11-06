export interface MerxCardProps {
    title: string;
    titleSpan?: string;
    imageSrc: string;
    imageWidth?: string;
    imageAspect?: string;
    className?: string;
    imageClassName?: string;
  }
  
  export interface MerxLayoutProps {
    children: React.ReactNode;
  }