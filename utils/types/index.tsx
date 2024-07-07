export type FluidRecord = {
  id: number;
  created_at: Date;
  amount: number;
  updated_at: Date;
  edited: boolean;
  fluidType: string;
};

export type OpenDialogID = {
  action: string;
  section: string;
  open: boolean;
};


export type MenuSection = {
  menuSection: string;
  data: { subName: string; links: string[] }[];
};