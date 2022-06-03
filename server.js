import React from 'react';
import ReactPDF from '@react-pdf/renderer';
import Container from './mydocument.js';
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(cors());

app.get('/pdf', (req, res) => {
  const assesmentApproval = {
    companyName: '',
    fullAddress: '',
    location: '',
    addressPincode: '',
    email: '',
    companyWebsite: '',
    geographic: '',
    website: '',
    defineMateriality: [],
    defineObjective: [],
    companyAddress: [],
    locations: [],
    tableData: [],
    businessCapecityType: '',
    numberOfEmployee: '',
    businessGeographic: '',
    businessWebsiteAddress: '',
    frameWorkId: '',
    basicCompanyFile: '',
    logo: '',
    basicFile: '',
    topic: [
      'About Company',
      'Message from Sustainability Officer',
      'Overall ESG Approach',
      'Materiality Assessment',
      'Materiality Map',
      'Materiality Topics',
      'Stakeholder List',
      'Topic Details & ESG Approach',
      'Selling Practices',
      'Incorporation of Environmental, Social, and Governance Factors in Credit Analysis',
      'Customer Privacy',
      'Employee Diversity & Inclusion',
      'Systemic Risk Management',
      'Business Ethics',
      'Data Security',
      'Financial Inclusion & Capacity Building',
      'Transparent Information & Fair Advice for Customers',
      'About Report'
    ],
    assessment_approval_report_name: '',
    assessmentSkeleton: false,
    company_description: '',
    sector: '',
    companyIndustry: '',
    start_date: '',
    locations_and_employees: [],
    name: '',
    address: '',
    pincode: '',
    industry: '',
    permanentEmployee: '',
    contractEmployee: '',
    city: '',
    country: '',
    sectorsList: [],
    materialityLegalDoc: '',
    voteData: [],
    loadingCompleted: false,
    basicData: {
      _id: '62875044c18fe5334cc7b360',
      assessment_name: 'Test Assessment',
      year_of_assessment: [
        {
          startDate: '',
          endDate: ''
        }
      ],
      sustainability_team_message: '',
      esg_goal: '',
      about_report: '',
      logo: {
        name: 'Logo Only.png',
        type: 'image/png',
        url: 'https://imgrows.s3.us-east-2.amazonaws.com/logo/6278f3181f28c37ad824b604_1652854945151.png'
      },
      additional_policy_document: '',
      comapny_name: "Dharani's company",
      company_operation: 'Test operation',
      employee_count: '1500',
      email: 'dharanidharan@test.com',
      website: 'www.dharanidharan.com',
      head_office: {
        companyAddress: 'Test',
        companyLandmark: 'Test',
        companyPincode: '123456',
        companyState: 'TamilNadu',
        companyCountry: 'India'
      },
      branch_office: [
        {
          branchAddress: 'Test',
          branchLandmark: 'Test',
          branchPincode: '145602',
          branchState: 'Test',
          branchCountry: 'India'
        }
      ],
      assessment_approval_report_name: 'Untitled Report',
      step_4_cover: {
        approver_data: {}
      },
      sector_industry_data: [
        {
          sector_id: '6197687b956d954194412523',
          Sector: 'Financials',
          industry: [
            {
              industry_id: '6197687b956d954194412542',
              industry: 'Asset Management & Custody Activities'
            },
            {
              industry_id: '6197687b956d954194412543',
              industry: 'Commercial Banks'
            },
            {
              industry_id: '6197687b956d954194412544',
              industry: 'Consumer Finance'
            }
          ]
        }
      ]
    },
    graphData: [
      {
        _id: '62876360b152f41d9fb9cb08',
        topic_id: '622ca10c9dd6505f406bdae9',
        relevance: 1,
        weightage: 2,
        count: 1
      },
      {
        _id: '62876372b152f41d9fb9e6c7',
        topic_id: '622ca10c9dd6505f406bdb70',
        relevance: 1,
        weightage: 2,
        count: 1
      },
      {
        _id: '6287637cb152f41d9fb9f469',
        topic_id: '622ca10c9dd6505f406bdb89',
        relevance: 1,
        weightage: 2,
        count: 1
      },
      {
        _id: '62876395b152f41d9fba26a4',
        topic_id: '622ca10c9dd6505f406bdb85',
        relevance: 3,
        weightage: 1,
        count: 1
      },
      {
        _id: '628763acb152f41d9fba4a51',
        topic_id: '622ca10c9dd6505f406bdb29',
        relevance: 4,
        weightage: 4,
        count: 1
      },
      {
        _id: '628dc412b152f41d9f9b87fc',
        topic_id: '622ca10c9dd6505f406bdb8a',
        relevance: 1,
        weightage: 1,
        count: 1
      },
      {
        _id: '628dc418b152f41d9f9b923b',
        topic_id: '622ca10c9dd6505f406bdb7f',
        relevance: 2,
        weightage: 3,
        count: 1
      },
      {
        _id: '628dc41db152f41d9f9b9a8c',
        topic_id: '622ca10c9dd6505f406bdb2c',
        relevance: 1,
        weightage: 2,
        count: 1
      },
      {
        _id: '628dc424b152f41d9f9ba582',
        topic_id: '622ca10c9dd6505f406bdb7a',
        relevance: 2,
        weightage: 3,
        count: 1
      },
      {
        _id: '628dc42bb152f41d9f9bb1c9',
        topic_id: '622ca10c9dd6505f406bdb27',
        relevance: 5,
        weightage: 5,
        count: 1
      }
    ],
    stakeholderData: [
      {
        category: '',
        user_id: '6278f2ee1f28c37ad824b603',
        name: 'Dharanidharan A S',
        email: 'dharanidharan@appstone.in',
        designation: '',
        survey_status: 'Completed'
      }
    ],
    topicData: [
      {
        assessment_topic_id: '628763339d57ad4458d8a0be',
        topic_id: '622ca10c9dd6505f406bdb27',
        kpi: [],
        activity: [],
        risk: [],
        opportunity: [],
        file: [],
        topic_name: 'Business Ethics',
        parent_id: '62317aa659ba6228342f20ca',
        vote_data: {
          one: 0,
          two: 0,
          three: 0,
          four: 0,
          five: 1,
          total: 5,
          count: 1,
          average: 5
        }
      },
      {
        assessment_topic_id: '628763339d57ad4458d8a0bf',
        topic_id: '622ca10c9dd6505f406bdb29',
        kpi: [],
        activity: [],
        risk: ['afsdf'],
        opportunity: ['afsdfa'],
        file: [
          {
            name: '626bb026b2d7ed752c9e3084_1651464031229 (1).png',
            type: 'image/png',
            url: 'https://imgrows.s3.us-east-2.amazonaws.com/assessment_topics/622ca10c9dd6505f406bdb29_1653040119621.png'
          }
        ],
        topic_name: 'Employee Diversity & Inclusion',
        parent_id: '62317aa659ba6228342f20be',
        vote_data: {
          one: 0,
          two: 0,
          three: 0,
          four: 1,
          five: 0,
          total: 4,
          count: 1,
          average: 4
        }
      },
      {
        assessment_topic_id: '628763339d57ad4458d8a0bb',
        topic_id: '622ca10c9dd6505f406bdb7f',
        kpi: [],
        activity: [],
        risk: [],
        opportunity: [],
        file: [],
        topic_name: 'Customer Privacy',
        parent_id: '62317aa659ba6228342f20bb',
        vote_data: {
          one: 0,
          two: 1,
          three: 0,
          four: 0,
          five: 0,
          total: 2,
          count: 1,
          average: 2
        }
      },
      {
        assessment_topic_id: '628763339d57ad4458d8a0bd',
        topic_id: '622ca10c9dd6505f406bdb7a',
        kpi: [],
        activity: [],
        risk: [],
        opportunity: [],
        file: [],
        topic_name: 'Financial Inclusion & Capacity Building',
        parent_id: '62317aa659ba6228342f20bb',
        vote_data: {
          one: 0,
          two: 1,
          three: 0,
          four: 0,
          five: 0,
          total: 2,
          count: 1,
          average: 2
        }
      },
      {
        assessment_topic_id: '628763339d57ad4458d8a0b9',
        topic_id: '622ca10c9dd6505f406bdb89',
        kpi: [],
        activity: [],
        risk: ['afsd'],
        opportunity: ['fsd'],
        file: [],
        topic_name: 'Selling Practices',
        parent_id: '62317aa659ba6228342f20bb',
        vote_data: {
          one: 1,
          two: 0,
          three: 0,
          four: 0,
          five: 0,
          total: 1,
          count: 1,
          average: 1
        }
      },
      {
        assessment_topic_id: '628763339d57ad4458d8a0ba',
        topic_id: '622ca10c9dd6505f406bdb8a',
        kpi: [],
        activity: [],
        risk: ['sd'],
        opportunity: ['afsd'],
        file: [],
        topic_name:
          'Incorporation of Environmental, Social, and Governance Factors in Credit Analysis',
        parent_id: '62317aa659ba6228342f20c3',
        vote_data: {
          one: 1,
          two: 0,
          three: 0,
          four: 0,
          five: 0,
          total: 1,
          count: 1,
          average: 1
        }
      },
      {
        assessment_topic_id: '628763339d57ad4458d8a0bc',
        topic_id: '622ca10c9dd6505f406bdb2c',
        kpi: [],
        activity: [],
        risk: [],
        opportunity: [],
        file: [],
        topic_name: 'Systemic Risk Management',
        parent_id: '62317aa659ba6228342f20ca',
        vote_data: {
          one: 1,
          two: 0,
          three: 0,
          four: 0,
          five: 0,
          total: 1,
          count: 1,
          average: 1
        }
      },
      {
        assessment_topic_id: '628763339d57ad4458d8a0b7',
        topic_id: '622ca10c9dd6505f406bdae9',
        kpi: [],
        activity: [],
        risk: ['afsd'],
        opportunity: ['asdf'],
        file: [],
        topic_name: 'Data Security',
        parent_id: '62317aa659ba6228342f20bb',
        vote_data: {
          one: 1,
          two: 0,
          three: 0,
          four: 0,
          five: 0,
          total: 1,
          count: 1,
          average: 1
        }
      },
      {
        assessment_topic_id: '628763339d57ad4458d8a0b8',
        topic_id: '622ca10c9dd6505f406bdb70',
        kpi: [],
        activity: [],
        risk: ['afsdf'],
        opportunity: ['asfdfasd'],
        file: [],
        topic_name: 'Transparent Information & Fair Advice for Customers',
        parent_id: '62317aa659ba6228342f20bb',
        vote_data: {
          one: 1,
          two: 0,
          three: 0,
          four: 0,
          five: 0,
          total: 1,
          count: 1,
          average: 1
        }
      }
    ],
    coverData: {
      back: {},
      front: {}
    },
    parentTopicData: [
      {
        _id: '62317aa659ba6228342f20c3',
        topic_name: 'Business Model & Innovation'
      },
      {
        _id: '62317aa659ba6228342f20be',
        topic_name: 'Human Capital'
      },
      {
        _id: '62317aa659ba6228342f20bb',
        topic_name: 'Social Capital'
      },
      {
        _id: '62317aa659ba6228342f20b9',
        topic_name: 'Environment'
      },
      {
        _id: '62317aa659ba6228342f20ca',
        topic_name: 'Leadership & Governance'
      }
    ],
    headerFooterData: {},
    tableOfContent: [
      {
        name: 'About Company',
        order: 1,
        comments: 2,
        toc_id: '62875044c18fe5334cc7b361'
      },
      {
        name: 'Message Of Sustainability Officer',
        order: 2,
        comments: 0,
        toc_id: '62875044c18fe5334cc7b363'
      },
      {
        name: 'Overall ESG Approach',
        order: 3,
        comments: 0,
        toc_id: '62875044c18fe5334cc7b365'
      },
      {
        name: 'Materiality Assessment',
        order: 4,
        comments: 0,
        toc_id: '62875044c18fe5334cc7b367'
      },
      {
        name: 'Materiality Map',
        order: 5,
        comments: 0,
        toc_id: '62875044c18fe5334cc7b369'
      },
      {
        name: 'Materiality Topics',
        order: 6,
        comments: 0,
        toc_id: '62875044c18fe5334cc7b36b'
      },
      {
        name: 'Stakeholders',
        order: 7,
        comments: 0,
        toc_id: '62875044c18fe5334cc7b36d'
      },
      {
        name: 'Topics Details & ESG Plan',
        order: 8,
        comments: 0,
        toc_id: '62875044c18fe5334cc7b36f'
      },
      {
        name: 'Topic 1',
        order: 9,
        comments: 0,
        toc_id: '62875044c18fe5334cc7b371'
      },
      {
        name: 'Materiality Details',
        order: 10,
        comments: 0,
        toc_id: '62875044c18fe5334cc7b373'
      },
      {
        name: 'ESG Plan',
        order: 11,
        comments: 0,
        toc_id: '62875044c18fe5334cc7b375'
      },
      {
        name: 'Report Details',
        order: 12,
        comments: 0,
        toc_id: '62875044c18fe5334cc7b377'
      }
    ],
    comments: [],
    approver: {},
    approversReviewersList: [],
    industry_type: ''
  };
  ReactPDF.render(
    <Container assesmentApproval={assesmentApproval} />,
    `${__dirname}/example.pdf`
  );
  var file = fs.readFileSync('./example.pdf');
  res.contentType('application/pdf');
  res.send(file);
});

app.listen(4000, () => console.log('server started'));
