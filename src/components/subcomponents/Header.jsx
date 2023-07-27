import React from "react";
import { HStack, Text } from "@chakra-ui/react";

const Header = ({ identifier, createdOn, lastUpdated }) => {
  return (
    <HStack
      width="100vw"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
    >
      {identifier && <Text variant="subHeading" p="2">
        Id number{" "}
        <Text as="span" variant="subHeadingBold">
          {identifier}
        </Text>
      </Text>}
      {identifier && <Text p="2" variant="subHeading">
        |
      </Text>}
      {createdOn &&<Text p="2" variant="subHeading">
        Created{" "}
        <Text as="span" variant="subHeadingBold">
          {createdOn}
        </Text>
      </Text>}
      {createdOn && <Text p="2" variant="subHeading">
        |
      </Text>}
      {lastUpdated && <Text p="2" variant="subHeading">
        Last Updated{" "}
        <Text as="span" variant="subHeadingBold">
          {lastUpdated}
        </Text>
      </Text>}
    </HStack>
  );
};

export default Header;
