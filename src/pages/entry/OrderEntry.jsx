import { Button } from 'react-bootstrap';
import { useOrderDetails } from '../../contexts/OrderDetails';
import { formatCurrency } from '../../utilities';
import Options from './Options';

const OrderEntry = ({ setOrderPhase }) => {
  const { totals } = useOrderDetails();

  const handleClick = () => {
    setOrderPhase('review');
  };

  return (
    <div>
      <h1>Design Your Sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {formatCurrency(totals.scoops + totals.toppings)}</h2>
      <Button onClick={handleClick}>Order Sundae!</Button>
    </div>
  );
};

export default OrderEntry;
