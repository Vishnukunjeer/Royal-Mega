// Define types for reusable components
export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'gold' | 'outline';
  fullWidth?: boolean;
}

/* ─── Extracted Login Card ─── */
export interface LoginCardProps {
  showPassword: boolean;
  setShowPassword: (v: boolean) => void;
  navigate: any;
}

export interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  price?: number;
  // Add other properties as needed
}

// Define specific game-related data structures
export interface LottoGame {
  id: number;
  title: string;
  jackpot: number;
  drawDate: Date;
  selectedNumbers: number[]; 
}

export interface LotteryCard {
  id: number;
  type: string;
  days: number;
  hours: number;
  minutes: number;
  entries: number;
  entryPrice: number;
}