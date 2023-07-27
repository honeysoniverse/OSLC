import React from 'react';
import { Collapse } from '@chakra-ui/react';
import { useEffect, useState, useCallback } from 'react';
import { IconThumbsUp } from '../icons/IconThumbsUp';
import { IconAuthor } from '../icons/IconAuthor';
import { IconApproval } from '../icons/IconApproval';
import Container from '../wrappers/container/Container';
import ContainerBody from '../wrappers/container/ContainerBody';
import TagsSectionValues from '../subcomponents/tagssection/TagsSectionValues';
import TagsSectionProperties from '../subcomponents/tagssection/TagsSectionProperties';
import DescriptionBody from '../subcomponents/DescriptionBody';
import SectionBody from '../wrappers/SectionBody';
import { IconLastUpdated } from '../icons/icon_lastUpdated';
import SearchSectionTitle from '../subcomponents/SearchSectionTitle';
import {useRequirementsStore} from '../../store/requirementDataList'

const RequirementSearchResult= ({ data }) => {
  const {addRequirement, dataList} = useRequirementsStore()
  const [showSearchPreview, setShowSearchPreview] = useState(true); //State for showing the initial previews of specific section
  const [requirementData, setRequirementData] = useState(null); //State for setting requirement data after API Call
  const [store,setStore] = useState(false)

  //API Call to fetch the requirement data
  const fetchRequirement = useCallback(async () => {
    //Function to fetch Requirement data and store
    const response = await fetch(data, {
      headers: {
        Accept: 'application/json',
      },
    });
    const resultData = await response.json();
    setRequirementData(resultData);
    setStore(true)
  }, [data]);


  useEffect(() => {
    fetchRequirement();
  }, [fetchRequirement]);


  //Variable for storing data from the requirementData received from JSON
  const description = requirementData && requirementData['dcterms:description'];
  const identifier = requirementData && requirementData['dcterms:identifier'];
  const title = requirementData && requirementData['dcterms:title'];
  const approvalDate = requirementData && requirementData['oslc_rm:approvalDate'];
  const author = requirementData && requirementData['oslc_rm:author'];
  const authorName = requirementData && author['dcterms:title'];
  const authorResource = requirementData && author['rdf:resource'];
  const priority = requirementData && requirementData['oslc_rm:priority'];
  const comments = requirementData && requirementData['oslc_rm:comments'];
  const oslc_relations = requirementData && requirementData['oslc_rm:testScripts'];
  
  
  let relations = [];
  if (oslc_relations)
    for (let i = 0; i < oslc_relations.length; i++) {
      const rel = oslc_relations[i];
      relations.push({
        // title: rel["dcterms:title"],
        resource: rel['rdf:resource'],
      });
    }
    
  const someIntegerProperty =
    requirementData && requirementData['oslc_rm:someIntegerProperty'];
  const someListOfIntegers =
    requirementData && requirementData['oslc_rm:someListOfIntegers'];
  const status = requirementData && requirementData['oslc_rm:status'];

  return (
    <Container isSearchPreview={true}>
      <ContainerBody>
        <SearchSectionTitle
          id={identifier}
          title={title}
          show={showSearchPreview}
          setShow={setShowSearchPreview}
        />
        <Collapse in={showSearchPreview} style={{ width: '100%' }}>
          <SectionBody>
            <TagsSectionProperties
              prop1={'Last Updated'}
              prop2={'Status'}
              prop3={'Approval State'}
              prop4={'Author'}
            />
            <TagsSectionValues
              Icon1={IconLastUpdated}
              value1={'16-03-22'}
              Icon2={IconThumbsUp}
              value2={status}
              Icon3={IconApproval}
              value3={'Waiting'}
              value4={authorName}
              Icon4={IconAuthor}
            />
            <DescriptionBody description={description} />
          </SectionBody>
        </Collapse>
      </ContainerBody>
    </Container>
  );
};

export default RequirementSearchResult;
