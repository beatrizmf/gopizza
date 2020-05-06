import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Container from './styles';

const Back: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <Container onClick={goBack}>
      <FiArrowLeft size={28} color="#e02041" />
    </Container>
  );
};

export default Back;
