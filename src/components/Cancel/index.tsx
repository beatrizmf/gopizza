import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Container from './styles';
import { useOrder } from '../../hooks/order';

const Cancel: React.FC = () => {
  const { reset } = useOrder();
  const { push } = useHistory();

  const handleCancel = useCallback(() => {
    reset();
    push('/');
  }, [push, reset]);

  return <Container onClick={handleCancel}>cancel</Container>;
};

export default Cancel;
