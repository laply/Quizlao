import React from 'react';
import styled from 'styled-components/native';
import {ActivityIndicator} from 'react-native';

const LoaderView = styled.View`
  background-color: #fff;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  return (
    <LoaderView>
      <ActivityIndicator color="#000" />
    </LoaderView>
  );
};

export default Loader;
