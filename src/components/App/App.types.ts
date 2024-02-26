export interface ItemProps {
  id: string;
  title: string;
  quantity: string;
  status: boolean;
  unit: Unit;
}

export type Unit = 'pcs' | 'kg' | 'g' | 'litre';
