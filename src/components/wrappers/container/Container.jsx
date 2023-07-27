import React from "react";
import { VStack } from "@chakra-ui/react";
import UiPreview from '../../iframe/RequirementLargePreview';
import SearchPreview from '../../iframe/RequirementSearchResult';

const Container = ({children, isSearchPreview}) => {
  return (
    <VStack bg={"#EAEFF2"} width="97vw" height="auto" borderBottom="3px solid #ccc" padding={isSearchPreview ? "0px" : "6px" }>
        {children}
    </VStack>
  );
};

export default Container;
