import React, { createContext, useCallback, useState, useContext } from 'react';

interface Prices {
  size: {
    large: number;
    medium: number;
    small: number;
  };
  crust: {
    thick: number;
    thin: number;
  };
}

export type Topping =
  | 'pepperoni'
  | 'mushrooms'
  | 'onions'
  | 'sausage'
  | 'bacon'
  | 'extraCheese'
  | 'blackOlives'
  | 'greenPeppers'
  | 'pineapple'
  | 'spinach';

export type Step =
  | 'home'
  | 'size'
  | 'crust'
  | 'toppings'
  | 'checkout'
  | 'finished';

export type Size = 'large' | 'medium' | 'small';
export type Crust = 'thick' | 'thin';

interface OrderContext {
  activeStep: Step;
  setActiveStep: React.Dispatch<React.SetStateAction<Step>>;

  size: Size | null;
  setSize: React.Dispatch<React.SetStateAction<Size | null>>;

  crust: Crust | null;
  setCrust: React.Dispatch<React.SetStateAction<Crust | null>>;

  avaliableToppings: Topping[];
  toppings: Topping[];
  setToppings: React.Dispatch<React.SetStateAction<Topping[]>>;

  prices: Prices;

  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;

  reset(): void;
}

const OrderContext = createContext<OrderContext>({} as OrderContext);

export const OrderProvider: React.FC = ({ children }) => {
  const [activeStep, setActiveStep] = useState<Step>('home');
  const [size, setSize] = useState<Size | null>(null);
  const [crust, setCrust] = useState<Crust | null>(null);
  const [toppings, setToppings] = useState<Topping[]>([]);

  const [prices] = useState<Prices>({
    size: {
      large: 12,
      medium: 10,
      small: 8,
    },
    crust: {
      thick: 4,
      thin: 2,
    },
  });

  const [avaliableToppings] = useState<Topping[]>([
    'pepperoni',
    'mushrooms',
    'onions',
    'sausage',
    'bacon',
    'extraCheese',
    'blackOlives',
    'greenPeppers',
    'pineapple',
    'spinach',
  ]);

  const [total, setTotal] = useState(0);

  const reset = useCallback(() => {
    setActiveStep('home');
    setSize(null);
    setCrust(null);
    setToppings([]);
    setTotal(0);
  }, []);

  return (
    <OrderContext.Provider
      value={{
        activeStep,
        setActiveStep,
        size,
        setSize,
        crust,
        setCrust,
        avaliableToppings,
        toppings,
        setToppings,
        prices,
        total,
        setTotal,
        reset,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export function useOrder(): OrderContext {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error('useOrder must be used within a OrderProvider');
  }

  return context;
}
