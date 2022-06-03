import React, { useState } from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Link,
  Image
} from '@react-pdf/renderer';

Font.register({
  family: 'poppins',
  fonts: [
    {
      src: 'https://fonts.gstatic.com/s/poppins/v19/pxiEyp8kv8JHgFVrFJA.ttf'
    }, // font-style: normal, font-weight: normal
    {
      src: 'https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLGT9V1s.ttf',
      fontWeight: 600
    }
  ]
});

// Create styles
const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #DADBE6',
    padding: 5,
    margin: '0px 10px'
  },
  headerText: {
    fontSize: 12,
    color: '#3374B9'
  },
  headerImage: {
    width: 30,
    borderRadius: 4
  },
  basicLogo: {
    width: '150px'
    // border:'1px solid red'
  },
  footerContainer: {
    position: 'absolute',
    bottom: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0px 10px',
    padding: 5,
    width: '96%'
  },
  footerText: {
    fontSize: 12,
    color: '#3374B9',
    fontFamily: 'poppins'
  },
  pageNumber: {
    fontSize: 12,
    color: 'grey',
    fontFamily: 'poppins'
  },
  coverContainer: {
    height: '100%',
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  coverImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1
  },
  textContainer: {
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'poppins'
  },
  coverHeadline: {
    fontSize: 55,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'poppins'
  },
  coverSubline: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'poppins'
  },
  coverRegularText: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'poppins'
  },
  coverLogo: {
    position: 'absolute',
    left: 20,
    bottom: 0,
    height: 100,
    width: 100
  },
  backTextContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center'
  },
  backCoverImage: {
    height: '100%',
    width: '100%'
  },
  backCoverLogo: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginLeft: 270
  },
  backCoverHeadline: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: 'white',
    textAlign: 'center',
    padding: 5,
    fontFamily: 'poppins'
  },
  backCoverSubline: {
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
    padding: 5
  },
  backCoverRegularText: {
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
    padding: 5,
    fontFamily: 'poppins'
  },
  mainContainer: {
    padding: 15,
    fontFamily: 'poppins'
  },
  assessmentName: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    minHeight: 120,
    marginTop: 15
  },
  serialNumber: {
    minWidth: 24,
    height: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DADBE673',
    borderRadius: 5
  },
  headingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '5px 0',
    marginTop: 10
  },
  headingContainerToc: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '15px',
    width: 220
    // marginTop: 10,
    // marginRight:30,
    // border:'1px solid red'
  },
  headingText: {
    fontSize: 10,
    marginLeft: 5,
    width: '100%',
    fontFamily: 'poppins'
  },
  headingTextToc: {
    fontSize: 10,
    marginLeft: 5,
    width: 150,
    // width: "100%",
    fontFamily: 'poppins'
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // border: '1px solid #DADBE6',
    margin: '10px 0'
    // minHeight:"100%"
  },
  gridContainerBorder: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottom: '1px solid #DADBE6',
    margin: '10px 0'
    // minHeight:"100%"
  },
  gridItem: {
    width: 150,
    minHeight: 50,
    margin: '10px 18px'
  },
  gridItemFullWidth: {
    minHeight: 50,
    margin: '10px 18px',
    width: '100%'
  },
  gridItemHalfWidth: {
    width: 235,
    minHeight: 50,
    margin: '10px 18px'
  },
  subText: {
    fontSize: 10,
    color: '#707070',
    padding: '10px 0'
  },
  businessdata: {
    overflowWrap: 'break-word',
    fontSize: 10,
    fontFamily: 'poppins'
  },
  frameworkContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  docsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  voteContainer: {
    marginLeft: 15,
    padding: 10,
    border: '1px solid red',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  indexNumber: {
    fontSize: 10,
    fontFamily: 'poppins'
  },
  topicList: {
    // border: '1px solid #9FA1AF',
    margin: '5px 0px',
    padding: 10
  },
  topicHeaderText: {
    fontSize: 10,
    color: '#9FA1AF'
  },
  singleTopicContained: {
    width: '100%',
    // backgroundColor: "#24242411",#DADBE655
    backgroundColor: '#DADBE655',
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    margin: '5px 0px'
  },
  topicIndex: {
    height: 20,
    width: 20,
    borderRadius: '50%',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  topicIndexNumber: {
    fontSize: 10,
    fontFamily: 'poppins'
  },
  topicImage: {
    height: 30,
    width: 30,
    marginLeft: 3,
    marginRight: 3
  },
  topicText: {
    fontSize: 10,
    maxWidth: 420,
    fontFamily: 'poppins'
  },
  topicImageRating: {
    height: 20,
    width: 20,
    borderRadius: '50%'
  },
  shNumberContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  shNormalText: {
    fontSize: 10,
    color: '#9FA1AF',
    fontFamily: 'poppins'
  },
  shNormalTextEsg: {
    fontSize: 10,
    color: '#9FA1AF',
    width: 104,
    paddingRight: 2,
    fontFamily: 'poppins'
  },

  tableHeaderText: {
    fontSize: 10,
    color: '#9FA1AF',
    width: 104,
    fontFamily: 'poppins'
  },
  shBoldText: {
    fontSize: 10,
    marginRight: 5,
    fontFamily: 'poppins'
  },
  divider: {
    height: 15,
    width: 1,
    backgroundColor: '#9FA1AF',
    margin: '0px 5px'
  },
  tableContained: {
    marginTop: 15
  },
  tableHeader: {
    display: 'flex',
    flexDirection: 'row'
  },
  tableHeaderEsg: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tableBody: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 12,
    marginBottom: 5
  },
  tableBodyEsg: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 15
  },
  name: {
    width: 104,
    paddingRight: 2,
    fontSize: 10,
    fontFamily: 'poppins'
  },
  email: {
    width: 104,
    paddingRight: 2,
    fontSize: 10,
    color: '#9FA1AF',
    fontFamily: 'poppins'
  },
  surveyStat: {
    display: 'flex',
    flexDirection: 'row',
    width: 104,
    paddingRight: 2
  },
  position: {
    display: 'flex',
    flexDirection: 'row',
    width: 104,
    fontSize: 10,
    paddingRight: 2,
    color: '#3374B9',
    fontFamily: 'poppins'
  },
  category: {
    display: 'flex',
    flexDirection: 'row',
    width: 104,
    fontSize: 10,
    paddingRight: 2,
    fontFamily: 'poppins'
  },
  stat: {
    width: 104,
    paddingRight: 2,
    fontSize: 10,
    color: '#9FA1AF',
    fontFamily: 'poppins'
  },
  statDividerGreen: {
    height: 15,
    width: 1,
    backgroundColor: 'green',
    marginRight: 2
  },
  statDividerOrange: {
    height: 13,
    width: 1,
    backgroundColor: 'orange',
    marginRight: 2
  },
  relevanceVoteContainer: {
    marginTop: 2,
    position: 'relative',
    height: 32,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 400
  },
  relevanceTitle: {
    fontSize: 10,
    margin: '10px 0px',
    fontFamily: 'poppins'
  },
  relevanceName: {
    color: '#3374B9',
    fontSize: 10,
    fontFamily: 'poppins'
  },
  voteStatContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 10
  }
});

// Create Document Component

const Container = ({ assesmentApproval }) => {
  const [state, setState] = useState('Dharanidharan');

  const TopicBar = (props) => {
    const { index, topicName, rating, parentTopicId } = props;
    return (
      <View style={styles.singleTopicContained}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <View style={styles.topicIndex}>
            <Text style={styles.topicIndexNumber}>{index}</Text>
          </View>
          {/* {parentTopicId &&
            assesmentApproval.parentTopicData.filter(
              (p) => p._id === parentTopicId
            )[0].topic_name === 'Human Capital' && (
              <Image style={styles.topicImage} src={human} cache />
            )}

          {parentTopicId &&
            assesmentApproval.parentTopicData.filter(
              (p) => p._id === parentTopicId
            )[0].topic_name === 'Leadership & Governance' && (
              // <Image style={styles.topicImage} src={govt} cache />
            )}
          {parentTopicId &&
            assesmentApproval.parentTopicData.filter(
              (p) => p._id === parentTopicId
            )[0].topic_name === 'Environment' && (
              // <Image style={styles.topicImage} src={env} cache />
            )}
          {parentTopicId &&
            assesmentApproval.parentTopicData.filter(
              (p) => p._id === parentTopicId
            )[0].topic_name === 'Social Capital' && (
              // <Image style={styles.topicImage} src={social} cache />
            )}
          {parentTopicId &&
            assesmentApproval.parentTopicData.filter(
              (p) => p._id === parentTopicId
            )[0].topic_name === 'Business Model & Innovation' && (
              // <Image style={styles.topicImage} src={business} cache />
            )} */}
          <Text style={styles.topicText}>{topicName}</Text>
        </View>
        {/* <View>
          {rating === 1 && (
            // <Image style={styles.topicImageRating} src={ratingOne} cache />
          )}
          {rating === 2 && (
            // <Image style={styles.topicImageRating} src={ratingTwo} cache />
          )}
          {rating === 3 && (
            // <Image style={styles.topicImageRating} src={ratingThree} cache />
          )}
          {rating === 4 && (
            // <Image style={styles.topicImageRating} src={ratingFour} cache />
          )}
          {rating === 5 && (
            // <Image style={styles.topicImageRating} src={ratingFive} cache />
          )}
        </View> */}
      </View>
    );
  };

  const Relevance = ({ voteData, topicName }) => {
    return (
      <View>
        <View wrap={false}>
          <Text style={styles.shNormalText}>Question</Text>
          <Text style={styles.relevanceTitle}>
            How Material is {topicName} to your organisation ?
          </Text>
        </View>
        {/* <View wrap={false}>
          {topicRelevanceData.map((topic, index) => {
            const { name } = topic;
            let votePercent = undefined;
            let voteCount = undefined;
            if (voteData) {
              if (index === 0) {
                votePercent = voteData.five
                  ? (voteData.five / voteData.count) * 100
                  : 0;
                voteCount = voteData.five ? voteData.five : 0;
              }
              if (index === 1) {
                votePercent = voteData.four
                  ? (voteData.four / voteData.count) * 100
                  : 0;
                voteCount = voteData.four ? voteData.four : 0;
              }
              if (index === 2) {
                votePercent = voteData.three
                  ? (voteData.three / voteData.count) * 100
                  : 0;
                voteCount = voteData.three ? voteData.three : 0;
              }
              if (index === 3) {
                votePercent = voteData.two
                  ? (voteData.two / voteData.count) * 100
                  : 0;
                voteCount = voteData.two ? voteData.two : 0;
              }
              if (index === 4) {
                votePercent = voteData.one
                  ? (voteData.one / voteData.count) * 100
                  : 0;
                voteCount = voteData.one ? voteData.one : 0;
              }
            }
            return (
              <>
                <View
                  key={index}
                  style={styles.relevanceVoteContainer}
                  alignItems="center"
                  wrap={false}
                >
                  <View
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: `${votePercent}%`,
                      height: 30,
                      borderTopLeftRadius: 10,
                      borderBottomLeftRadius: 10,
                      backgroundColor: '#3374B933'
                    }}
                    wrap={false}
                  ></View>
                  <View>
                    <Text style={styles.relevanceName}>{`${
                      index + 1
                    }. ${name}`}</Text>
                  </View>
                  <View style={styles.voteStatContainer}>
                    <Text style={{ fontSize: 10 }}>{votePercent}%</Text>
                    <Text style={{ fontSize: 8, color: '#9FA1AF' }}>
                      {voteCount}
                      {' votes'}
                    </Text>
                  </View>
                </View>
              </>
            );
          })}
        </View> */}
      </View>
    );
  };

  const MyDocument = ({ assesmentApproval }) => (
    <Document
      onRender={(blob) => {
        console.log('render', blob);

        // setVisibility(true);
      }}
    >
      {/* Front cover */}
      {/* {coverImageUrlPdf !== '' && (
        <Page size="A4">
          <View wrap={false} style={styles.coverContainer}>
            {coverImageUrlPdf !== '' && (
              <Image style={styles.coverImage} src={coverImageUrlPdf} cache />
            )}
            <View style={styles.textContainer}>
              {coverHeadlinePdf !== '' && (
                <Text style={styles.coverHeadline}>{coverHeadlinePdf}</Text>
              )}
              {coverSublinePdf !== '' && (
                <Text style={styles.coverSubline}>{coverSublinePdf}</Text>
              )}
              {coverRregularTextPdf !== '' && (
                <Text style={styles.coverRegularText}>
                  {coverRregularTextPdf}
                </Text>
              )}
            </View>
            <View style={styles.coverLogo}>
              {coverLogoUrlPdf !== '' && <Image src={coverLogoUrlPdf} cache />}
            </View>
          </View>
        </Page>
      )} */}
      <Page size="A4" wrap>
        <View
          style={{
            paddingTop: 35,
            paddingBottom: 45,
            paddingHorizontal: 5
          }}
        >
          <View style={styles.header}>
            <Text style={styles.headerText}>Table of Content</Text>
          </View>
        </View>

        {/* {tocPages.map((page, indexPage) => {
          let start = 0;
          let end = 31;
          if (indexPage + 1 === 1) {
            start = 0;
            end = 26;
          }
          if (indexPage + 1 === 2) {
            start = 26;
            end = 51;
          }
          if (indexPage + 1 === 3) {
            start = 51;
            end = 76;
          }
          if (indexPage + 1 === 4) {
            start = 76;
            end = 101;
          }

          return (
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                height: 700,
                width: '100%',

                // border: '1px solid red',
                marginBottom: indexPage === 0 ? 50 : 100,
                marginTop: indexPage === 0 ? 5 : 60
              }}
              key={page}
            >
              {assesmentApproval.topic &&
                assesmentApproval.topic
                  .slice(start, end)
                  .map((topic, index) => {
                    let four = index - 4;
                    let five = index - 8;

                    return (
                      <View key={index} style={styles.headingContainerToc}>
                        <View style={styles.serialNumber}>
                          <Text style={styles.indexNumber}>
                            {indexPage === 0
                              ? index + 1 <= 4
                                ? index + 1
                                : index + 1 > 4 && index + 1 <= 7
                                ? '4.' + (four + 1)
                                : index + 1 === 8
                                ? '5.'
                                : index + 1 > 8 &&
                                  index + 1 < assesmentApproval.topic.length
                                ? '5.' + (five + 1)
                                : '6.'
                              : index + 27 < assesmentApproval.topic.length
                              ? '5.' + (index + 19)
                              : '6'}
                          </Text>
                        </View>
                        <Text style={styles.headingTextToc}>{topic}</Text>
                        <Text
                          style={{
                            color: '#3374B9',
                            fontSize: 10,
                            marginLeft: 'auto'
                          }}
                        >
                          {pageNumber[topic]}
                        </Text>
                      </View>
                    );
                  })}
            </View>
          );
        })} */}
      </Page>

      {/* Main content */}
      <Page
        size="A4"
        wrap
        style={{
          paddingTop: 35,
          paddingBottom: 45,
          paddingHorizontal: 5
        }}
      >
        {/* Header */}
        {/* {(headerLogoUrlPdf !== '' || headerTextPdf !== '') && (
          <View style={styles.header} fixed>
            <Text style={styles.headerText}>
              {headerTextPdf !== '' ? headerTextPdf : ''}
            </Text>
            {headerLogoUrlPdf !== '' && (
              <Image style={styles.headerImage} src={headerLogoUrlPdf} cache />
            )}
          </View>
        )} */}

        {/* Main content */}
        <View style={styles.mainContainer}>
          <View style={styles.assessmentName}>
            <View style={{ display: 'flex', flexDirection: 'column' }}>
              <Text
                style={{
                  fontSize: '20px',
                  fontFamily: 'poppins',
                  color: '#242424'
                }}
              >
                {/* <Text> */}
                {assesmentApproval.basicData.assessment_name !== '' &&
                  assesmentApproval.basicData.assessment_name}
              </Text>
              <Text
                style={{
                  fontSize: '14px',
                  marginTop: 10,
                  fontFamily: 'poppins',
                  color: '#242424'
                }}
              >
                {/* <Text> */}
                {/* {assesmentApproval.basicData.year_of_assessment &&
                  `Year Of Assessment ${moment(
                    assesmentApproval.basicData.year_of_assessment[0].startDate
                  ).format('yyyy')} - ${moment(
                    assesmentApproval.basicData.year_of_assessment[0].endDate
                  ).format('yyyy')}`} */}
              </Text>
            </View>
            {/* 
            {companyLogo !== '' && (
              <View>
                <Image
                  src={companyLogo}
                  style={styles.basicLogo}
                  alt="logo"
                  // style={{border:'1px solid red'}}
                />
              </View>
            )} */}
          </View>

          {/* 1. Company details */}
          <View style={styles.headingContainer}>
            <View style={styles.serialNumber}>
              <Text style={styles.indexNumber}>1</Text>
            </View>
            <Text style={styles.headingText}>About Company</Text>

            {/* <Text
              render={({ pageNumber }) =>
                handlePageNumber(pageNumber, 'About Company')
              }
            ></Text> */}
          </View>

          {/* Head Office Address */}
          {assesmentApproval.basicData.head_office &&
            Object.keys(assesmentApproval.basicData.head_office).length > 0 && (
              // <>
              <View style={styles.gridContainerBorder} wrap={false}>
                <View style={styles.gridItem}>
                  <Text style={styles.subText}>Company Name</Text>
                  <Text style={styles.businessdata}>
                    {assesmentApproval.basicData.comapny_name}
                  </Text>
                </View>
                <View style={styles.gridItem}>
                  <Text style={styles.subText}>Head Office Address</Text>
                  <Text style={styles.businessdata}></Text>
                  {assesmentApproval.basicData.head_office.companyAddress !==
                    '' && (
                    <Text style={styles.businessdata}>
                      {assesmentApproval.basicData.head_office.companyAddress}
                    </Text>
                  )}
                  {assesmentApproval.basicData.head_office.companyLandmark !==
                    '' && (
                    <Text style={styles.businessdata}>
                      {assesmentApproval.basicData.head_office.companyLandmark}
                    </Text>
                  )}
                  {assesmentApproval.basicData.head_office.companyPincode !==
                    '' && (
                    <Text style={styles.businessdata}>
                      {assesmentApproval.basicData.head_office.companyPincode}
                    </Text>
                  )}
                  {assesmentApproval.basicData.head_office.companyState !==
                    '' && (
                    <Text style={styles.businessdata}>
                      {assesmentApproval.basicData.head_office.companyState}
                    </Text>
                  )}
                  {assesmentApproval.basicData.head_office.companyCountry !==
                    '' && (
                    <Text style={styles.businessdata}>
                      {assesmentApproval.basicData.head_office.companyCountry}
                    </Text>
                  )}
                </View>
              </View>

              // </>
            )}

          {/* Branch Office Addresses */}
          {assesmentApproval.basicData.branch_office &&
            assesmentApproval.basicData.branch_office.length > 0 && (
              // <>

              <View style={styles.gridContainerBorder} wrap={false}>
                {assesmentApproval.basicData.branch_office.map(
                  (branch, index) => (
                    <View style={styles.gridItem}>
                      <Text style={styles.subText}>Branch Office Address</Text>
                      <Text style={styles.businessdata}>
                        {branch.branchAddress}
                      </Text>
                      <Text style={styles.businessdata}>
                        {branch.branchLandmark}
                      </Text>
                      <Text style={styles.businessdata}>
                        {branch.branchPincode}
                      </Text>
                      <Text style={styles.businessdata}>
                        {branch.branchState}
                      </Text>
                      <Text style={styles.businessdata}>
                        {branch.branchCountry}
                      </Text>
                    </View>
                  )
                )}
              </View>

              // </>
            )}

          {/* Sector, Industry & year of assessment */}

          {assesmentApproval.basicData.sector_industry_data &&
          assesmentApproval.basicData.sector_industry_data.length > 0 ? (
            // <>
            <View style={styles.gridContainerBorder} wrap={false}>
              <View style={styles.gridItem}>
                <Text style={styles.subText}>Sector</Text>
                {assesmentApproval.basicData.sector_industry_data.map(
                  (industry, index) => (
                    <Text style={styles.businessdata}>{industry.Sector}</Text>
                  )
                )}
              </View>
              <View style={styles.gridItem}>
                <Text style={styles.subText}>Industry</Text>
                {assesmentApproval.basicData.sector_industry_data.map(
                  (ind, i) =>
                    ind.industry.length > 0 &&
                    ind.industry.map((indust, ind) => (
                      <Text key={ind} style={styles.businessdata}>
                        {indust.industry}
                      </Text>
                    ))
                )}
              </View>
            </View>
          ) : (
            // </>

            <Text style={styles.subText}>Sector</Text>
          )}

          {/* <View style={styles.gridContainer} wrap={false}>
                <View style={styles.gridItem}>
                  <Text style={styles.subText}>Sector</Text>
                  <Text style={styles.businessdata}>
                    {assesmentApproval.sectorsList.map(
                      (s) => s._id === assesmentApproval.sector && `${s.Sector}`
                    )}
                  </Text>
                </View>
                <View style={styles.gridItem}>
                  <Text style={styles.subText}>Industry</Text>
                  <Text style={styles.businessdata}>
                    {basicInfo.industries.length > 0 &&
                      basicInfo.industries.map((i) => {
                        return (
                          i._id === assesmentApproval.companyIndustry &&
                          `${i.Industry}`
                        );
                      })}
                  </Text>
                </View>
                <View style={styles.gridItem}>
                  <Text style={styles.subText}>
                    Year of Assessment
                  </Text>
                  <Text style={styles.businessdata}>
                    {assesmentApproval.start_date.length > 0 && `${moment(assesmentApproval.start_date[0].startDate).format('MMM yy')} - ${moment(assesmentApproval.start_date[0].endDate).format('MMM yy')}`}
                  </Text>
                </View>
              </View> */}

          {/* Employee Count */}
          {assesmentApproval.basicData.employee_count !== '' && (
            // <>
            <View style={styles.gridContainerBorder} wrap={false}>
              <View style={styles.gridItem}>
                <Text style={styles.subText}>Total Employee Count</Text>
                <Text style={styles.businessdata}>
                  {assesmentApproval.basicData.employee_count}
                </Text>
              </View>
            </View>
            // </>
          )}

          {/* Contact Info */}
          {assesmentApproval.basicData.website !== '' &&
            assesmentApproval.basicData.email !== '' && (
              // <>
              <View style={styles.gridContainerBorder} wrap={false}>
                <View style={styles.gridItem}>
                  <Text style={styles.subText}>Website</Text>
                  <Text style={styles.businessdata}>
                    {assesmentApproval.basicData.website}
                  </Text>
                </View>
                <View style={styles.gridItem}>
                  <Text style={styles.subText}>Contact Info</Text>
                  <Text style={styles.businessdata}>
                    {assesmentApproval.basicData.email}
                  </Text>
                </View>
              </View>
              // </>
            )}

          {/* Company Operation */}
          {assesmentApproval.basicData.company_operation !== '' && (
            // <>
            <View style={styles.gridContainerBorder}>
              <View style={styles.gridItemFullWidth}>
                <Text style={styles.subText}>Company Operation</Text>
                <Text style={styles.businessdata}>
                  {assesmentApproval.basicData.company_operation}
                </Text>
              </View>
            </View>
            // </>
          )}

          {/* 2. Message from Sustainibility Officer  */}
          <View style={styles.gridContainerBorder}>
            <View style={styles.headingContainer}>
              <View style={styles.serialNumber}>
                <Text style={styles.indexNumber}>2</Text>
              </View>
              <Text style={styles.headingText}>
                Message from Sustainibility Officer
              </Text>
              {/* <Text
                render={({ pageNumber }) =>
                  handlePageNumber(
                    pageNumber,
                    'Message from Sustainability Officer'
                  )
                }
              ></Text> */}
            </View>
            {assesmentApproval.basicData.sustainability_team_message !== '' && (
              // <View style={styles.gridContainer} wrap={false}>
              <View style={styles.gridItemFullWidth}>
                {assesmentApproval.basicData !== '' && (
                  <Text style={styles.subText}>
                    {assesmentApproval.basicData.sustainability_team_message}
                  </Text>
                )}
              </View>
              // </View>
            )}
          </View>

          {/* 3. Overall ESG Goals */}
          <View style={styles.gridContainerBorder}>
            <View style={styles.headingContainer}>
              <View style={styles.serialNumber}>
                <Text style={styles.indexNumber}>3</Text>
              </View>
              <Text style={styles.headingText}>Overall ESG Goals</Text>
              {/* <Text
                render={({ pageNumber }) =>
                  handlePageNumber(pageNumber, 'Overall ESG Approach')
                }
              ></Text> */}
            </View>
            {assesmentApproval.basicData.esg_goal !== '' && (
              // <View style={styles.gridContainer} wrap={false}>
              <View style={styles.gridItemFullWidth}>
                {assesmentApproval.basicData !== '' && (
                  <Text style={styles.subText}>
                    {assesmentApproval.basicData.esg_goal}
                  </Text>
                )}
              </View>
              // </View>
            )}
          </View>

          {/* 4. Materiality Assessment */}
          <View style={styles.headingContainer} wrap={false} break>
            <View style={styles.serialNumber}>
              <Text style={styles.indexNumber}>4</Text>
            </View>
            <Text style={styles.headingText}>Materiality Assessment</Text>
            {/* <Text
              render={({ pageNumber }) =>
                handlePageNumber(pageNumber, 'Materiality Assessment')
              }
            ></Text> */}
          </View>

          {/* Materiality Map */}
          <View style={styles.headingContainer}>
            <View style={styles.serialNumber}>
              <Text style={styles.indexNumber}>4.1</Text>
            </View>
            <Text style={styles.headingText}>Materiality Map</Text>
            {/* <Text
              render={({ pageNumber }) =>
                handlePageNumber(pageNumber, 'Materiality Map')
              }
            ></Text> */}
          </View>
          {/* <View style={styles.shNumberContainer}>
            <Text style={styles.shBoldText}>
              {materialityAssessment.materialityMapResponded}
            </Text>
            <Text style={styles.shNormalText}>Responded</Text>
            <View style={styles.divider}></View>
            <Text style={styles.shBoldText}>
              {materialityAssessment.materialityMapTotalPart}
            </Text>
            <Text style={styles.shNormalText}>Participants</Text>
          </View> */}

          <View style={styles.gridContainerBorder}>
            {/* <View style={styles.docsContainer}>
                    <Text style={styles.businessdata}>
                      Total votes collected
                    </Text>
                    <View style={styles.voteContainer}>
                      <Image src={hand} style={{ width: 10 }} />
                      <Text
                        style={{ fontSize: 12, color: "red", marginLeft: 5 }}
                      >
                        {assesmentApproval.graphData &&
                          assesmentApproval.graphData.length}
                      </Text>
                    </View>
                  </View> */}
            {/* <View
              wrap={false}
              style={{
                // border: "1px solid red",
                display: 'flex',
                flexDirection: 'column',
                // justifyContent: "center",
                alignItems: 'center'
                // marginBottom:10
              }}
            >
              {chartImage !== '' && <Image src={chartImage} cache />}

              {chartImage !== '' && (
                <Image
                  src={graph}
                  style={{
                    width: '90%',
                    height: '250px',
                    zIndex: -1,
                    position: 'absolute',
                    marginTop: 10
                  }}
                  cache
                />
              )}
            </View> */}
            {/* <View wrap={false}>
                    {chartImage !== '' && <Image src={chartImage} />}
                  </View> */}
          </View>

          {/* Topics list */}

          <View style={styles.headingContainer}>
            <View style={styles.serialNumber}>
              <Text style={styles.indexNumber}>4.2</Text>
            </View>
            <Text style={styles.headingText}>Materiality Topics</Text>
            {/* <Text
              render={({ pageNumber }) =>
                handlePageNumber(pageNumber, 'Materiality Topics')
              }
            ></Text> */}
          </View>
          <View style={styles.topicList}>
            <Text style={styles.topicHeaderText}>
              List of Topics as per Rating on Materiality Map
            </Text>

            {assesmentApproval.topicData &&
              assesmentApproval.topicData.length > 0 &&
              assesmentApproval.topicData.map((topic, index) => (
                <View wrap={false}>
                  <TopicBar
                    index={index + 1}
                    rating={topic.vote_data.average}
                    topicName={topic.topic_name}
                    parentTopicId={topic.parent_id}
                  />
                </View>
              ))}
            <View style={{ borderBottom: '1px solid #DADBE6' }}></View>
          </View>

          {/* Stakeholder list */}
          {/* <View style={styles.topicList} wrap={false}> */}
          <View style={styles.headingContainer} wrap={false}>
            <View style={styles.serialNumber}>
              <Text style={styles.indexNumber}>4.3</Text>
            </View>
            <Text style={styles.headingText}>Stakeholder List</Text>
            {/* <Text
              render={({ pageNumber }) =>
                handlePageNumber(pageNumber, 'Stakeholder List')
              }
            ></Text> */}
          </View>
          {/* <View style={styles.topicList} wrap={false}> */}
          <Text style={styles.topicHeaderText}>
            List of Stakeholder contributed as per Rating on Materiality Map
          </Text>
          {/* <View style={styles.shNumberContainer}>
            <Text style={styles.shBoldText}>
              {materialityAssessment.materialityMapResponded}
            </Text>
            <Text style={styles.shNormalText}>Responded</Text>
            <View style={styles.divider}></View>
            <Text style={styles.shBoldText}>
              {materialityAssessment.materialityMapTotalPart}
            </Text>
            <Text style={styles.shNormalText}>Participants</Text>
          </View> */}
          <View style={styles.tableContained}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderText}>Name</Text>
              <Text style={styles.tableHeaderText}>Email</Text>
              <Text style={styles.tableHeaderText}>Survey Stat</Text>
              <Text style={styles.tableHeaderText}>Position</Text>
              <Text style={styles.tableHeaderText}>Category</Text>
            </View>
            {assesmentApproval.stakeholderData.map((stakeholder) => (
              <View style={styles.tableBody} wrap={false}>
                <Text style={styles.name}>{stakeholder.name} </Text>
                <Text style={styles.email}> {stakeholder.email}</Text>
                <View style={styles.surveyStat} wrap={false}>
                  <View
                    style={
                      stakeholder.survey_status === 'No Response'
                        ? styles.statDividerOrange
                        : styles.statDividerGreen
                    }
                  ></View>
                  <Text style={styles.stat}>{stakeholder.survey_status} </Text>
                </View>
                <Text style={styles.position} wrap={false}>
                  {stakeholder.type}{' '}
                </Text>
                <Text style={styles.category} wrap={false}>
                  {stakeholder.category}{' '}
                </Text>
              </View>
            ))}
          </View>
          <View style={{ borderBottom: '1px solid #DADBE6' }}></View>
          {/* </View> */}
          {/* </View> */}

          {/* 5. Topic Details & ESG Approach */}
          <View style={styles.headingContainer} wrap={false} break>
            <View style={styles.serialNumber}>
              <Text style={styles.indexNumber}>5</Text>
            </View>
            <Text style={styles.headingText}>Topic Details & ESG Approach</Text>
            {/* <Text
              render={({ pageNumber }) =>
                handlePageNumber(pageNumber, 'Topic Details & ESG Approach')
              }
            ></Text> */}
          </View>

          {assesmentApproval.topicData.map((topic, index) => {
            return (
              <>
                <View style={styles.gridContainer} wrap={false}>
                  <View style={styles.headingContainer} wrap={false}>
                    <View style={styles.serialNumber}>
                      <Text style={styles.indexNumber}>{`5.${index + 1}`}</Text>
                    </View>
                    <Text style={styles.headingText}>{topic.topic_name}</Text>
                    {/* <Text
                      render={({ pageNumber }) => {
                        handlePageNumber(pageNumber, topic.topic_name);
                      }}
                    ></Text> */}
                  </View>

                  {/* <View style={styles.gridContainer} wrap={false}> */}
                  <View style={styles.headingContainer} wrap={false}>
                    <View style={styles.serialNumber}>
                      <Text style={styles.indexNumber}>{`5.${
                        index + 1
                      }.1`}</Text>
                    </View>
                    <Text style={styles.headingText}>Materiality Details</Text>
                  </View>
                  <TopicBar
                    index={index + 1}
                    rating={topic.vote_data.average}
                    topicName={topic.topic_name}
                    parentTopicId={topic.parent_id}
                  />
                </View>

                <View style={styles.tableContained}>
                  <View style={styles.tableHeaderEsg}>
                    <Text style={styles.tableHeaderText}>Holding Position</Text>
                    <Text style={styles.tableHeaderText}>Participants</Text>
                    <Text style={styles.tableHeaderText}>Responded</Text>
                    <Text style={styles.tableHeaderText}>Impact</Text>
                  </View>

                  {/* <View style={styles.tableBodyEsg} wrap={false}>
                    <Text style={styles.shNormalTextEsg}>{index + 1} </Text>
                    <Text style={styles.shNormalTextEsg}>
                      {' '}
                      {materialityAssessment.materialityMapTotalPart}
                    </Text>
                    <Text style={styles.shNormalTextEsg}>
                      {' '}
                      {materialityAssessment.materialityMapResponded}{' '}
                    </Text>
                    <Text style={styles.shNormalTextEsg}>
                      {' '}
                      {topic.vote_data.average === null
                        ? 0
                        : topic.vote_data.average}
                    </Text>
                  </View> */}
                </View>

                <View>
                  <Relevance
                    voteData={topic.vote_data}
                    topicName={topic.topic_name}
                  />
                </View>

                <View style={styles.gridItemFullWidth} wrap={false}>
                  <Text style={styles.subText}>Risk to the Topic</Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      width: 500
                    }}
                  >
                    {topic.risk.length > 0 ? (
                      topic.risk.map((risk, riskIdx) => (
                        <Text style={styles.businessdata}>
                          {`${riskIdx + 1}. ${risk}`}
                        </Text>
                      ))
                    ) : (
                      <Text style={styles.businessdata}>N/A</Text>
                    )}
                  </View>
                </View>

                <View style={{ borderBottom: '1px solid #DADBE6' }}></View>

                <View style={styles.gridItemFullWidth} wrap={false}>
                  <Text style={styles.subText}>Opportunity to the Topic</Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      width: 500
                    }}
                  >
                    {topic.opportunity.length > 0 ? (
                      topic.opportunity.map((opportunity, oppoIdx) => (
                        <Text style={styles.businessdata}>
                          {`${oppoIdx + 1}. ${opportunity}`}
                        </Text>
                      ))
                    ) : (
                      <Text style={styles.businessdata}>N/A</Text>
                    )}
                  </View>
                </View>
                {topic.file !== '' &&
                  topic.file.length > 0 &&
                  topic.file.map((file) => (
                    <View style={styles.gridItemFullWidth}>
                      <Text style={styles.subText}>
                        Attached Autherized Legal Document
                      </Text>
                      <View style={styles.docsContainer}>
                        {/* <Image
                          src={PDFIconSVG}
                          style={{
                            height: '90%',
                            width: 25,
                            marginRight: 15
                          }}
                        /> */}
                        <Text style={styles.businessdata}>{file.name}</Text>
                        <Link src={file.url} style={{ marginLeft: 15 }}>
                          {/* <Image
                            src={download}
                            style={{
                              width: 20,
                              marginLeft: 5,
                              color: '#242424',
                              opacity: 0.5
                            }}
                          /> */}
                        </Link>
                      </View>
                    </View>
                  ))}

                <View style={{ borderBottom: '1px solid #DADBE6' }}></View>
                {/* </View> */}

                {/* <View style={styles.gridContainer} wrap={false}> */}
                <View wrap={false}>
                  <View style={styles.headingContainer}>
                    <View style={styles.serialNumber}>
                      <Text style={styles.indexNumber}>{`5.${
                        index + 1
                      }.2`}</Text>
                    </View>
                    <Text style={styles.headingText}>ESG Plan</Text>
                  </View>

                  <Text
                    style={{
                      fontSize: 10,
                      color: '#707070',
                      margin: '10px 18px',
                      width: '100%'
                    }}
                  >
                    Activities of the Topic
                  </Text>
                </View>
                {topic.activity && topic.activity.length > 0 ? (
                  topic.activity.map((activity, actIndex) => (
                    <>
                      <View wrap={false}>
                        <Text
                          style={{
                            margin: '10px 18px',
                            fontSize: 10,
                            fontFamily: 'poppins',
                            width: '100%'
                          }}
                        >
                          {`${actIndex + 1} -  ${activity.title}`}
                        </Text>

                        <View style={styles.gridContainer}>
                          <View style={styles.gridItem}>
                            <Text style={styles.subText}>Estimated Period</Text>

                            <View style={styles.docsContainer}>
                              <Text style={styles.businessdata}>
                                {/* {activity.estimated_period.length > 0
                                  ? activity.estimated_period &&
                                    `${moment(
                                      activity.estimated_period[0].startDate
                                    ).format('DD MMM yyyy')} - ${moment(
                                      activity.estimated_period[0].endDate
                                    ).format('DD MMM yyyy')}`
                                  : 'N/A'} */}
                              </Text>
                            </View>
                          </View>

                          <View style={styles.gridItem}>
                            <Text style={styles.subText}>Budget</Text>
                            <View style={styles.docsContainer}>
                              <Text style={styles.businessdata}>
                                {/* {`Rs. ${activity.budget}`} */}
                                {activity.currency
                                  ? `${activity.currency}- ${activity.budget}`
                                  : activity.budget !== ''
                                  ? activity.budget
                                  : 'N/A'}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>

                      <View style={styles.gridItemFullWidth}>
                        <Text style={styles.subText}>Comment</Text>
                        <View style={styles.docsContainer}>
                          <Text style={styles.businessdata}>
                            {activity.comments !== ''
                              ? activity.comments
                              : 'N/A'}
                          </Text>
                        </View>
                      </View>
                      {activity.file !== '' && (
                        <View style={styles.gridItemFullWidth} wrap={false}>
                          <Text style={styles.subText}>
                            Attached Autherized Legal Document
                          </Text>
                          <View style={styles.docsContainer}>
                            {/* <Image
                              src={PDFIconSVG}
                              style={{
                                height: '90%',
                                width: 25,
                                marginRight: 15
                              }}
                              cache
                            /> */}
                            <Text style={styles.businessdata}>
                              {activity.file.name}
                            </Text>
                            <Link
                              src={activity.file.url}
                              style={{ marginLeft: 15 }}
                            >
                              {/* <Image
                                src={download}
                                style={{
                                  width: 20,
                                  marginLeft: 5,
                                  color: '#242424',
                                  opacity: 0.5
                                }}
                                cache
                              /> */}
                            </Link>
                          </View>
                        </View>
                      )}

                      <View
                        style={{ borderBottom: '1px solid #DADBE6' }}
                      ></View>
                    </>
                  ))
                ) : (
                  <Text
                    style={{
                      margin: '10px 18px',
                      fontSize: 10,
                      fontFamily: 'poppins',
                      width: '100%'
                    }}
                  >
                    N/A
                  </Text>
                )}

                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: 'poppins',
                    color: '#707070',
                    margin: '10px 18px',
                    width: '100%'
                  }}
                >
                  KPIs of the Topic
                </Text>
                {topic.kpi && topic.kpi.length > 0 ? (
                  topic.kpi.map((kpi, kpiIndex) => (
                    <>
                      <Text
                        style={{
                          margin: '10px 18px',
                          fontSize: 10,
                          fontFamily: 'poppins',
                          width: '100%'
                        }}
                      >
                        {`${kpiIndex + 1} - ${kpi.title}`}
                      </Text>
                      <View style={styles.gridContainer} wrap={false}>
                        <View
                          style={{
                            width: 120,
                            minHeight: 50,
                            margin: '10px 18px'
                          }}
                        >
                          <Text style={styles.subText}>Baseline</Text>
                          <View style={styles.docsContainer}>
                            {kpi.unit === 1 && (
                              <Text style={styles.businessdata}>
                                {kpi.baseline !== '' ? kpi.baseline : 'N/A'}
                              </Text>
                            )}
                            {kpi.unit === 2 && (
                              <Text style={styles.businessdata}>
                                {kpi.baseline !== ''
                                  ? `${kpi.baseline}%`
                                  : 'N/A'}
                              </Text>
                            )}
                            {kpi.unit === 3 && (
                              <Text style={styles.businessdata}>
                                {kpi.baseline !== ''
                                  ? kpi.baseline
                                    ? 'Yes'
                                    : 'No'
                                  : 'N/A'}
                              </Text>
                            )}
                            {typeof kpi.unit === 'string' && (
                              <Text style={styles.businessdata}>
                                {kpi.baseline !== '' ? kpi.baseline : 'N/A'}
                              </Text>
                            )}
                          </View>
                        </View>
                        <View
                          style={{
                            width: 120,
                            minHeight: 50,
                            margin: '10px 18px'
                          }}
                        >
                          <Text style={styles.subText}>Target</Text>
                          <View style={styles.docsContainer}>
                            {kpi.unit === 1 && (
                              <Text style={styles.businessdata}>
                                {kpi.target !== '' ? kpi.baseline : 'N/A'}
                              </Text>
                            )}
                            {kpi.unit === 2 && (
                              <Text style={styles.businessdata}>
                                {kpi.target !== '' ? `${kpi.target}%` : 'N/A'}
                              </Text>
                            )}
                            {kpi.unit === 3 && (
                              <Text style={styles.businessdata}>
                                {kpi.target !== ''
                                  ? kpi.target
                                    ? 'Yes'
                                    : 'No'
                                  : 'N/A'}
                              </Text>
                            )}
                            {typeof kpi.unit === 'string' && (
                              <Text style={styles.businessdata}>
                                {kpi.target !== '' ? kpi.baseline : 'N/A'}
                              </Text>
                            )}
                          </View>
                        </View>
                        <View
                          style={{
                            width: 120,
                            minHeight: 50,
                            margin: '10px 18px'
                          }}
                        >
                          <Text style={styles.subText}>Unit</Text>
                          <View style={styles.docsContainer}>
                            {kpi.unit === 1 && (
                              <Text style={styles.businessdata}>Numeric</Text>
                            )}
                            {typeof kpi.unit === 'string' && (
                              <Text style={styles.businessdata}>
                                {kpi.unit !== '' ? kpi.baseline : 'N/A'}
                              </Text>
                            )}
                            {kpi.unit === 2 && (
                              <Text style={styles.businessdata}>
                                Percentage
                              </Text>
                            )}
                            {kpi.unit === 3 && (
                              <Text style={styles.businessdata}>Yes/No</Text>
                            )}
                          </View>
                        </View>
                      </View>

                      <View style={styles.gridContainer} wrap={false}>
                        <View style={styles.gridItem}>
                          <Text style={styles.subText}>Estimated Time</Text>
                          <View style={styles.docsContainer}>
                            <Text style={styles.businessdata}>
                              {/* {kpi.estimated_period !== ''
                                ? `${moment(
                                    kpi.estimated_period[0].startDate
                                  ).format('DD MMM yyyy')} - ${moment(
                                    kpi.estimated_period[0].endDate
                                  ).format('DD MMM yyyy')}`
                                : 'N/A'} */}
                            </Text>
                          </View>
                        </View>
                        <View style={styles.gridItem}>
                          <Text style={styles.subText}>Budget</Text>
                          <View style={styles.docsContainer}>
                            <Text style={styles.businessdata}>
                              {kpi.currency
                                ? `${kpi.currency}- ${kpi.budget}`
                                : kpi.budget !== ''
                                ? kpi.budget
                                : 'N/A'}
                            </Text>
                          </View>
                        </View>
                        <View style={styles.gridItemFullWidth}>
                          <Text style={styles.subText}>Comment</Text>
                          <View style={styles.docsContainer}>
                            <Text style={styles.businessdata}>
                              {kpi.comments !== '' ? kpi.comments : 'N/A'}
                            </Text>
                          </View>
                        </View>
                      </View>

                      {kpi.file !== '' && (
                        <View style={styles.gridItemFullWidth}>
                          <Text style={styles.subText}>
                            Attached Autherized Legal Document
                          </Text>
                          <View style={styles.docsContainer}>
                            {/* <Image
                              src={PDFIconSVG}
                              style={{
                                width: 25,
                                marginRight: 15,
                                height: '90%'
                              }}
                              cache
                            /> */}
                            <Text style={styles.businessdata}>
                              {kpi.file.name}
                            </Text>
                            <Link src={kpi.file.url} style={{ marginLeft: 15 }}>
                              {/* <Image
                                src={download}
                                style={{ width: 20, opacity: 0.5 }}
                                cache
                              /> */}
                            </Link>
                          </View>
                        </View>
                      )}
                    </>
                  ))
                ) : (
                  <Text
                    style={{
                      margin: '10px 18px',
                      fontSize: 10,
                      fontFamily: 'poppins',
                      width: '100%'
                    }}
                  >
                    N/A
                  </Text>
                )}
                {/* </View> */}
                <View style={{ borderBottom: '1px solid #DADBE6' }}></View>
              </>
            );
          })}

          {/* 6. Report Details */}
          <View style={styles.headingContainer} wrap={false}>
            <View style={styles.serialNumber}>
              <Text style={styles.indexNumber}>6</Text>
            </View>
            <Text style={styles.headingText}>Report Details</Text>
            {/* <Text
              render={({ pageNumber, totalPages }) => {
                handlePageNumber(pageNumber, 'About Report');
                setAboutReport(pageNumber);
                setTotalPages(totalPages);
              }}
            ></Text> */}
          </View>
          <View style={styles.gridContainer} wrap={false}>
            <View style={styles.gridItemFullWidth}>
              <Text style={styles.subText}>Report Title</Text>
              <View style={styles.docsContainer}>
                <Text style={styles.businessdata}>
                  {assesmentApproval.basicData
                    .assessment_approval_report_name === ''
                    ? 'N/A'
                    : assesmentApproval.basicData
                        .assessment_approval_report_name}
                </Text>
              </View>
            </View>
            <View style={styles.gridItemFullWidth}>
              <Text style={styles.subText}>Assessment Year</Text>
              <View style={styles.docsContainer}>
                <Text style={styles.businessdata}>
                  {/* {assesmentApproval.basicData.year_of_assessment &&
                    `${moment(
                      assesmentApproval.basicData.year_of_assessment[0]
                        .startDate
                    ).format('MMM yyyy')} - ${moment(
                      assesmentApproval.basicData.year_of_assessment[0].endDate
                    ).format('MMM yyyy')}`} */}
                </Text>
              </View>
            </View>
            {assesmentApproval.basicData.about_report !== '' && (
              <View style={styles.gridItemFullWidth}>
                <Text style={styles.subText}>About this Report</Text>
                <View style={styles.docsContainer}>
                  <Text style={styles.businessdata}>
                    {assesmentApproval.basicData.about_report}
                  </Text>
                </View>
              </View>
            )}
            {assesmentApproval.approver && assesmentApproval.approver.approved && (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <Text
                  style={{
                    fontSize: 10,

                    fontFamily: 'poppins'
                  }}
                >
                  {assesmentApproval.approver.user_name}
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    color: '#707070'
                  }}
                >
                  Approver,
                </Text>

                <Text
                  style={{
                    fontSize: 10,
                    color: '#707070'
                  }}
                >
                  {assesmentApproval.basicData.comapny_name}
                </Text>
              </View>
            )}
          </View>
          <View style={{ borderBottom: '1px solid #DADBE6' }}></View>
        </View>

        {/* Footer */}
        {/* {(isPageNumberVisiblePdf || footerTextPdf !== '') && (
          <View style={styles.footerContainer} fixed>
            <Text style={styles.footerText}>
              {footerTextPdf !== '' ? footerTextPdf : ''}
            </Text>
            {isPageNumberVisiblePdf && (
              <Text
                style={styles.pageNumber}
                render={({ pageNumber, totalPages }) =>
                  pageNumber.toString().length > 1
                    ? `${pageNumber}`
                    : `0${pageNumber}`
                }
                fixed
              />
            )}
          </View>
        )} */}
      </Page>

      {/* Back cover */}
      {/* {backCoverImageUrlPdf !== '' && (
        <Page size="A4">
          <View wrap={false} style={styles.coverContainer}>
            {backCoverImageUrlPdf !== '' && (
              <Image
                style={styles.backCoverImage}
                src={backCoverImageUrlPdf}
                cache
              />
            )}
            <View style={styles.backTextContainer}>
              {backCoverLogoUrlPdf !== '' && (
                <Image
                  style={styles.backCoverLogo}
                  src={backCoverLogoUrlPdf}
                  cache
                />
              )}
              {coverBackHeadlinePdf !== '' && (
                <Text style={styles.backCoverHeadline}>
                  {coverBackHeadlinePdf}
                </Text>
              )}
              {coverBackSublinePdf !== '' && (
                <Text style={styles.backCoverSubline}>
                  {coverBackSublinePdf}
                </Text>
              )}
              {coverBackRegularPdf !== '' && (
                <Text style={styles.backCoverRegularText}>
                  {coverBackRegularPdf}
                </Text>
              )}
            </View>
          </View>
        </Page>
      )} */}
    </Document>
  );
  return <MyDocument assesmentApproval={assesmentApproval} />;
};

export default Container;
