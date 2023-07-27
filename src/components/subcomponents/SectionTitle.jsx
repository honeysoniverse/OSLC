import React from "react";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { ArrowUp } from "../icons/ArrowUp";
import { ArrowDown } from "../icons/ArrowDown";

const SectionTitle = ({ MainIcon, title, setShow, show }) => {
  const handleToggle= () => {
    setShow(!show)
  }
  return (
    <HStack
            bg={"#CDE8F0"}
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            padding="4px 16px"
          >
            <HStack>
              <Icon as={MainIcon} />
              <Text pl="2" variant="title">
                {title}
              </Text>
            </HStack>
            <HStack>
             <button onClick={handleToggle}><Icon as={!show ? ArrowUp : ArrowDown} /></button> 
            </HStack>
          </HStack>
  );
};

export default SectionTitle;
