import ctmCardImage from '@jonnypickardjs/assets/images/projectImages/compare-the-market.png';

const ctmProject = {
  projectUrlTitle: 'comparethemarket',
  projectTitle: 'Compare the market',
  projectImage: {
    src: ctmCardImage,
    alt: 'CTM Card'
  },
  roleTitle: 'Platform Engineer',
  dateFrom: {
    month: 'March',
    year: '2017'
  },
  dateTo: {
    month: 'September',
    year: '2018'
  },
  responsibilities: [
    `Writing and maintaining Node micro-services using TDD.`,
    `Maintaining and refactoring legacy code. Porting over/ Reimagining the old legacy C#
Monolithic systems hosted on premises into Node based micro-services hosted on AWS.`,
    `Updating the old sign on service to use JWT’s and further exploration of modern
authentication techniques.`,
    `Creation of a JWT based reverse proxy authentication solution using NGINX, Lua and Docker.`,
    `Engineering a security scanning with reporting CI solution with tools such as Owasp Zap and
Arachni.`,
    `Implementation of bespoke logging systems across dozens of Node micro-services with JS
and Splunk in order to improve site sustainability by catching and report errors.`,
    `Working on an HTML tag tracking system for partners to implement using JS, Node and
Apache Kafka.`,
    `Working directly with the Architects & CTO to trial new micro-service based solutions before
rolling them out across the company.`
  ],
  techUsed: [
    {
      title: 'Node',
      usage: 'heavy'
    },
    {
      title: 'Docker',
      usage: 'heavy'
    },
    {
      title: 'AWS',
      usage: 'heavy'
    },
    {
      title: 'MongoDB',
      usage: 'heavy'
    },
    {
      title: 'GOCD',
      usage: 'heavy'
    },
    {
      title: 'Swagger',
      usage: 'heavy'
    },
    {
      title: 'NGINX',
      usage: 'heavy'
    },
    {
      title: 'Lua',
      usage: 'medium'
    },
    {
      title: 'React',
      usage: 'light'
    }
  ]
};

export default ctmProject;
