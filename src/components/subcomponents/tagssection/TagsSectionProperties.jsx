import React from "react";
import { Text, HStack, Divider } from "@chakra-ui/react";

const TagsSectionProperties = ({ prop1, prop2, prop3, prop4 }) => {
  return (
    <>
      <HStack
        bg={"#FAF7F7"}
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        padding="4px 16px"
      >
        { prop1 && <Text variant="property" flex={1}>
          {prop1}
        </Text>}
        { prop2 && <Text variant="property" flex={1}>
          {prop2}
        </Text>}
        { prop3 && <Text variant="property" flex={1}>
          {prop3}
        </Text>}
        { prop4 && <Text variant="property" flex={1}>
          {prop4}
        </Text>}
      </HStack>
      <Divider />
    </>
  );
};

export default TagsSectionProperties;
