import React from "react";
import { Divider, HStack, Icon, Text } from "@chakra-ui/react";
import { ArrowUp } from "../icons/ArrowUp";
import { ArrowDown } from "../icons/ArrowDown";
import UrlTitle from './UrlTitle';

const SearchSectionTitle = ({ id, setShow, show, title }) => {
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
              <Text variant="value">
                {"id "+id}
              </Text>
              <div style={{background:"#aaa", height:"18px", width:"2px"}}></div>
              <UrlTitle title={title}/>
            </HStack>
            <HStack>
             <button onClick={handleToggle}><Icon as={!show ? ArrowUp : ArrowDown} /></button> 
            </HStack>
          </HStack>
  );
};

export default SearchSectionTitle;
