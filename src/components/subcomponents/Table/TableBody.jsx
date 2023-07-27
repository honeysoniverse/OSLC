import React from 'react';
import moment from 'moment';
import { Tbody, Tr, Td, Text } from '@chakra-ui/react';

const TableBody = ({ tData }) => {
  return (
    <Tbody>
      {tData && tData.length>0 &&
        tData.map((data, index) => {
          return (
           data &&  <Tr display="flex" justifyContent="flex-start" key={index}>
              <Td flex={1}>
                <Text variant="subHeading">{data["oslc_rm:author"]["dcterms:title"]}</Text>
              </Td>
              <Td flex={1}>
                <Text variant="subHeading">{data["dcterms:description"]}</Text>
              </Td>
              <Td flex={1}>
                <Text variant="subHeading">{"Insulin Pump Medicine"}</Text>
              </Td>
              <Td flex={1}>
                <Text variant="subHeading">{moment(data["oslc_rm:date"]).format("MMM Do YY")}</Text>
              </Td>
            </Tr>
          );
        })}
    </Tbody>
  );
};

export default TableBody;
