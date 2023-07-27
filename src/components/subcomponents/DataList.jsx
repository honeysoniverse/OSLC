import React from "react";
import {
  HStack,
  ListItem,
  Link,
  Text,
  Divider,
  VStack,
  UnorderedList,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import RelationsSectionProperties from "./RelationsSectionProperties";

const DataList = ({ list, Icon, projectTitle }) => {
  return (
    <VStack bg={"#FAF7F7"} width="100%">
      <UnorderedList listStyleType="none" width="100%" margin="0">
        {list.map((listItem, index) => {
          return (
            <>
              <HStack width="100%" justifyContent="flex-start">
                <ListItem flex={1}>
                  <Icon as={Icon} />
                </ListItem>
                <ListItem flex={1}>
                  <Link
                    as={NavLink}
                    to={listItem.resource}
                    key={index}
                    variant="link"
                  >
                    {listItem.resource}
                  </Link>
                </ListItem>
                <ListItem flex={1}>
                  <Text variant="subHeading">{listItem.title}</Text>
                </ListItem>
              </HStack>
              <Divider />
            </>
          );
        })}
        )
      </UnorderedList>
    </VStack>
  );
};

export default DataList;
