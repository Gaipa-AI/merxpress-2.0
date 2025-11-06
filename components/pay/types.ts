export interface FeatureItemProps {
    icon: string;
    title: React.ReactNode;
    description: string;
  }
  
  export interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
  }