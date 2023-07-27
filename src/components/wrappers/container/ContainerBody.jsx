import React from "react";
import { VStack } from "@chakra-ui/react";

const ContainerBody = ({ children }) => {
  return (
    <VStack bg="#FAF7F7" width="100%">
      {children}
    </VStack>
  );
};

export default ContainerBody;
