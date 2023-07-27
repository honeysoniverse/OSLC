import React from 'react';
import {
  Table,
  TableContainer,
  Collapse,
} from '@chakra-ui/react';
import moment from 'moment';
import { useEffect, useState, useCallback } from 'react';
import { IconTag } from '../icons/IconTag';
import { IconPriority } from '../icons/IconPriority';
import { IconThumbsUp } from '../icons/IconThumbsUp';
import { IconDescriptionYellowPen } from '../icons/IconDescriptionYellowPen';
import { IconAuthor } from '../icons/IconAuthor';
import { IconAssign } from '../icons/IconAssign';
import { IconType } from '../icons/IconType';
import { IconGroup } from '../icons/IconGroup';
import { IconDescription } from '../icons/IconDescription';
import { IconRelations } from '../icons/IconRelations';
import { IconComments } from '../icons/IconComments';
import { IconApproval } from '../icons/IconApproval';
import { IconSuspect } from '../icons/IconSuspect';
import Container from '../wrappers/container/Container';
import SectionTitle from '../subcomponents/SectionTitle';
import ContainerBody from '../wrappers/container/ContainerBody';
import Header from '../subcomponents/Header';
import UrlTitle from '../subcomponents/UrlTitle';
import TagsSectionValues from '../subcomponents/tagssection/TagsSectionValues';
import TagsSectionProperties from '../subcomponents/tagssection/TagsSectionProperties';
import RelationsSectionProperties from '../subcomponents/RelationsSectionProperties';
import DescriptionBody from '../subcomponents/DescriptionBody';
import SectionBody from '../wrappers/SectionBody';
import DataList from '../subcomponents/DataList';
import Scrollbars from 'react-custom-scrollbars';
import TableHeader from '../subcomponents/Table/TableHeader';
import TableBody from '../subcomponents/Table/TableBody';

const RequirementLargePreview = (props) => {
  //states for showing the collapsible sections 
  const [showTags, setShowTags] = useState(true);
  const [showDesc, setShowDesc] = useState(true);
  const [showRelations, setShowRelations] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showApproval, setShowApproval] = useState(false);

  //API Call to fetch the requirement data; incoming props.title from custom selector oslc-preview
  const [requirementData, setRequirementData] = useState(null);
  const fetchData = useCallback(async () => {
    const response = await fetch(props.url, {
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    setRequirementData(data);
  },[props.url])

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  //Variable to parse data from requirementData after fetch; create new variable here for new data
  const description = requirementData && requirementData['dcterms:description'];
  const identifier = requirementData && requirementData['dcterms:identifier'];
  const title = requirementData && requirementData['dcterms:title'];
  const approvalDate =
    requirementData && requirementData['oslc_rm:approvalDate'];
    const approvalDateFormatted = moment(approvalDate).format("MMM Do YY");  
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
        title: rel["dcterms:title"],
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
        <Header
          identifier={identifier}
          createdOn={'12-02-22'}
          lastUpdated={approvalDateFormatted}
        />
        <ContainerBody>
          <UrlTitle title={title} />
          <SectionTitle
            MainIcon={IconTag}
            title={'Tags'}
            setShow={setShowTags}
            show={showTags}
          />
          <Collapse in={showTags} style={{ width: '100%' }}>
            <SectionBody>
              <TagsSectionProperties
                prop1={'Priority'}
                prop2={'Approval state'}
                prop3={'Status'}
                prop4={'Author'}
              />
              <TagsSectionValues
                Icon1={IconPriority}
                value1={priority}
                Icon2={IconThumbsUp}
                value2={status}
                Icon3={IconDescriptionYellowPen}
                value3={'Draft'}
                value4={authorName}
                Icon4={IconAuthor}
              />
              <TagsSectionProperties
                prop1={'Assigned By'}
                prop2={'Type'}
                prop3={'Property'}
                prop4={'Property'}
              />
              <TagsSectionValues
                Icon1={IconAssign}
                value1={'Me'}
                Icon2={IconType}
                value2={someIntegerProperty}
                Icon3={IconGroup}
                value3={'value'}
                Icon4={IconGroup}
                value4={'value'}
              />
            </SectionBody>
          </Collapse>

          <SectionTitle
            MainIcon={IconDescription}
            title={'Description'}
            setShow={setShowDesc}
            show={showDesc}
          />
          <Collapse in={showDesc} style={{ width: '100%' }}>
            <DescriptionBody
              description={description}
              src="data:image/png;base64,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"
            />
          </Collapse>
          <SectionTitle
            MainIcon={IconRelations}
            title={'Relations'}
            setShow={setShowRelations}
            show={showRelations}
          />
          <SectionBody>
            <Collapse in={showRelations} style={{ width: '100%' }}>
              <RelationsSectionProperties
                prop1={'Suspect'}
                prop2={'Title'}
                prop3={'Project'}
              />
              <DataList
                list={relations}
                Icon={IconSuspect}
                // projectTitle={'Insulin Pump Medicine'}
              />
            </Collapse>
          </SectionBody>
          <SectionTitle
            MainIcon={IconComments}
            title={'Comments'}
            setShow={setShowComments}
            show={showComments}
          />
          <Collapse in={showComments} style={{ width: '100%' }}>
            <div style={{ width: '100%' }}>
              <Table variant="striped" size="sm" bg="#FAF7F7">
                <TableContainer>
                  <TableHeader hdr1={"Name"} hdr2={"Comment"} hdr3={"Project"} hdr4={"Date"}/>
                  <TableBody tData={comments}/>
                </TableContainer>
              </Table>
            </div>
          </Collapse>
        </ContainerBody>
      </Container>
    </Scrollbars>
  );
};

export default RequirementLargePreview;
