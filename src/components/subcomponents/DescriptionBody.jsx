import React from "react";
import { Image, Text, HStack } from "@chakra-ui/react";

const DescriptionBody = ({ description, src }) => {
  return (
    <HStack width="100%" justifyContent="space-between">
      <Text variant="description">{description}</Text>
     {src && <Image width={{base:"8"}} src={src} alt="F" padding="8px 32px" />}
    </HStack>
  );
};

export default DescriptionBody;
