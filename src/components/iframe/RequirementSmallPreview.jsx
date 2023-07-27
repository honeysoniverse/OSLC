import React, {useCallback} from 'react';
import { useEffect, useState } from 'react';
import { IconPriority } from '../icons/IconPriority';
import { IconThumbsUp } from '../icons/IconThumbsUp';
import Container from '../wrappers/container/Container';
import ContainerBody from '../wrappers/container/ContainerBody';
import Header from '../subcomponents/Header';
import TagsSectionValues from '../subcomponents/tagssection/TagsSectionValues';
import TagsSectionProperties from '../subcomponents/tagssection/TagsSectionProperties';
import DescriptionBody from '../subcomponents/DescriptionBody';
import SectionBody from '../wrappers/SectionBody';
import Scrollbars from 'react-custom-scrollbars';

const RequirementSmallPreview = (props) => {
  //API Call to fetch the requirement data
  const [requirementData, setRequirementData] = useState(null);
  const fetchData = useCallback(async () => {
    const response = await fetch(props.url, {
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    setRequirementData(data);
  },[props.title])

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const description = requirementData && requirementData['dcterms:description'];
  const identifier = requirementData && requirementData['dcterms:identifier'];
  const title = requirementData && requirementData['dcterms:title'];
  const approvalDate =
    requirementData && requirementData['oslc_rm:approvalDate'];
  const author = requirementData && requirementData['oslc_rm:author'];
  const authorName = requirementData && author['dcterms:title'];
  const authorResource = requirementData && author['rdf:resource'];
  const priority = requirementData && requirementData['oslc_rm:priority'];
  const comments = requirementData && requirementData['oslc_rm:comments'];
  const oslc_relations =
    requirementData && requirementData['oslc_rm:testScripts'];

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
    <Scrollbars style={{ width: '100vw', height: '100vh' }}>
      <Container>
        <Header identifier={identifier} lastUpdated={'24-06-22'} />
        <ContainerBody>
          <SectionBody>
            <TagsSectionProperties
              prop1={'Priority'}
              prop2={'Approval state'}
            />
            <TagsSectionValues
              Icon1={IconPriority}
              value1={priority}
              Icon2={IconThumbsUp}
              value2={status}
            />
          </SectionBody>
          <DescriptionBody description={description} />
        </ContainerBody>
      </Container>
    </Scrollbars>
  );
};

export default RequirementSmallPreview;
