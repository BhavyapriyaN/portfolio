
export const personal = {
  name: 'Bhavya Priya N',
  roleTags: ['Data Engineer', 'AWS', 'Python', 'SQL', 'PySpark'],
  intro:
    'Data Engineer with 3+ years of experience building scalable cloud data pipelines, optimizing ETL workflows, and modernizing data platforms using AWS, Python, SQL, and PySpark.',
  openToOpportunities: true,
  email: 'bhavyapriya127@gmail.com',
  linkedin: 'https://www.linkedin.com/in/bhavyapriya/',
  github: 'https://github.com/BhavyapriyaN',
  resumeUrl: 'Bhavyapriya_N_Resume.pdf',
  location: 'Bangalore, India',
}

export const heroStats = [
  { value: '600+', label: 'AWS accounts supported' },
  { value: '75%', label: 'Pipeline runtime reduction' },
  { value: '50+', label: 'AWS Glue jobs orchestrated' },
  { value: '15 mo', label: 'Historical data migrated' },
]

export const about = {
  paragraphs: [
    "I'm a Data Engineer at Datagrokr Analytics, specializing in AWS-based data platforms, ETL/ELT pipelines, and cloud data migrations. I build scalable solutions using Python, SQL, PySpark, AWS Glue, Redshift, and Athena.",

    "My work spans large-scale data processing, workflow orchestration, cross-cloud integrations, and performance optimization. I've also developed FinOps automation and AI-powered cloud optimization solutions using Amazon Bedrock AgentCore Gateway.",
  ],
  facts: [
    { label: 'Role', value: 'Data Engineer' },
    { label: 'Company', value: 'Datagrokr Analytics' },
    { label: 'Experience', value: '3+ Years' },
    { label: 'Location', value: 'Bangalore, India' },
    { label: 'Focus', value: 'Cloud Data Engineering' },
  ],
}

export const experience = [
  {
    role: 'Data Engineer',
    company: 'Datagrokr Analytics Pvt. Ltd.',
    location: 'Bangalore, India',
    dates: 'Oct 2023 - Present',
    bullets: [
      'Engineered Dockerized Python pipelines on AWS Batch to collect EC2, EBS, and ELB metadata across 500+ AWS accounts, reducing weekly runtime by 75% (8 hours to 2 hours).',

      'Led AWS CUR 1.0 to CUR 2.0 migration across 600+ accounts, redesigning Redshift schemas, stored procedures, and data models while migrating 15 months of historical data.',

      'Orchestrated 50+ AWS Glue jobs through dependency-based workflows for scalable dimension and fact table processing.',

      'Optimized Redshift SQL and ETL workflows, reducing ELB processing time by over 70% (6-7 hours to under 2 hours).',

      'Built automated OCI cost and usage ingestion pipelines with schema normalization, validation, and Redshift integration.',

      'Developed cost anomaly detection, budget alert automation, and AI-powered optimization solutions using AWS Lambda, DynamoDB, Athena, and Amazon Bedrock AgentCore Gateway.',

      'Delivered 8+ production Power BI dashboards for cloud cost analytics and financial reporting.',
    ],
    tech: [
      'Python', 'SQL', 'PySpark', 'AWS Glue',
      'Redshift', 'Athena', 'S3', 'AWS Batch',
      'Lambda', 'Docker', 'Power BI',
    ],
  },
  {
    role: 'Process Executive - Reconciliation',
    company: 'Equiniti India',
    location: 'Chennai, India',
    dates: 'Jul 2022 - Dec 2022',
    bullets: [
      'Performed financial data reconciliation, validation, and discrepancy analysis to ensure reporting accuracy.',
    ],
    tech: ['Excel', 'Data Validation'],
  },
]

export const skillGroups = [
  {
    title: 'Data Engineering',
    desc: 'Pipelines, processing & modeling',
    skills: [
      'Python', 'SQL', 'PySpark', 'Apache Spark',
      'ETL/ELT', 'Data Modeling',
      'Data Warehousing', 'Data Validation',
    ],
  },
  {
    title: 'Cloud & Data Platforms',
    desc: 'AWS & cross-cloud integration',
    skills: [
      'AWS Glue', 'Amazon Redshift', 'Amazon S3',
      'Amazon Athena', 'AWS Lambda', 'AWS Batch',
      'AWS Step Functions', 'DynamoDB',
      'Oracle Cloud (OCI)', 'Microsoft Fabric',
    ],
  },
  {
    title: 'Orchestration & DevOps',
    desc: 'Automation & development',
    skills: [
      'AWS Glue Workflows', 'Docker',
      'Git', 'GitHub', 'Azure DevOps',
      'AWS SAM',
    ],
  },
  {
    title: 'Analytics & FinOps',
    desc: 'Cloud cost intelligence',
    skills: [
      'Power BI', 'DAX', 'AWS CUR 2.0',
      'Cost Optimization', 'Cost Allocation',
      'Anomaly Detection', 'Incremental Refresh',
    ],
  },
  {
    title: 'AI & Automation',
    desc: 'Agentic cloud solutions',
    skills: [
      'MCP Servers', 'Amazon Bedrock',
      'AgentCore Gateway', 'AI Agents',
    ],
  },
]

export const projects = [
  {
    name: 'Enterprise AWS CUR 2.0 Migration',
    tagline: 'Data Migration · Redshift',
    description:
      'Led CUR 1.0 to CUR 2.0 migration across 600+ AWS accounts, redesigning Redshift schemas, stored procedures, and data models while migrating 15 months of historical billing data.',
    tech: ['AWS CUR', 'Redshift', 'SQL', 'S3'],
  },
  {
    name: 'AWS Resource Metadata Pipeline',
    tagline: 'ETL Optimization · AWS Batch',
    description:
      'Built Dockerized Python pipelines for 500+ AWS accounts, optimizing resource discovery and reducing weekly processing time from 8 hours to 2 hours.',
    tech: ['Python', 'AWS Batch', 'Docker', 'Lambda'],
  },
  {
    name: 'AWS Glue Workflow Orchestration',
    tagline: 'Data Pipelines · Orchestration',
    description:
      'Designed dependency-based workflows orchestrating 50+ AWS Glue jobs for dimension and fact table processing, supporting scalable cloud analytics.',
    tech: ['AWS Glue', 'PySpark', 'S3', 'Redshift'],
  },
  {
    name: 'OCI to AWS Data Integration',
    tagline: 'Cross-Cloud · ETL',
    description:
      'Developed automated OCI cost and usage ingestion with scheduled refreshes, schema normalization, data validation, and analytics-ready Redshift datasets.',
    tech: ['Python', 'OCI', 'S3', 'Redshift'],
  },
  {
    name: 'AI-Powered Cloud Cost Optimization',
    tagline: 'AI Agents · MCP',
    description:
      'Developed MCP server integrations using Amazon Bedrock AgentCore Gateway to support AI-assisted cloud cost analysis and optimization.',
    tech: ['Python', 'MCP', 'Amazon Bedrock', 'Lambda'],
  },
  {
    name: 'Cost Anomaly Detection & Budget Automation',
    tagline: 'FinOps · Automation',
    description:
      'Developed statistical cost anomaly detection and configurable budget alerts using AWS Lambda, DynamoDB, and Athena to automate cloud cost monitoring.',
    tech: ['Python', 'Lambda', 'DynamoDB', 'Athena'],
  },
]

export const certifications = [
  {
    org: 'Amazon Web Services',
    name: 'AWS Certified Solutions Architect – Associate (SAA-C03)',
    date: 'Feb 2024 – Feb 2027',
    url: 'https://www.credly.com/badges/b7e0d5eb-4d44-42b6-81d1-2cf901ed9932',
  },
  {
    org: 'Microsoft',
    name: 'Microsoft Fabric Data Engineer Associate (DP-700)',
    date: 'Sep 2026 – Sep 2027',
    url: 'https://learn.microsoft.com/en-us/users/bhavyapriyan-0550/credentials/cddb8f865c1d3668',
  },
  {
    org: 'Microsoft',
    name: 'Power BI Data Analyst Associate (PL-300)',
    date: 'Dec 2024 – Dec 2027',
    url: 'https://learn.microsoft.com/en-us/users/bhavyapriyan-0550/credentials/dd99b8a5bc112925',
  },
]

export const awards = [
  {
    name: 'Grok Star',
    org: 'Datagrokr Analytics Pvt. Ltd.',
    detail: 'Outstanding work performance in Q1 2026',
    date: 'Apr 2026',
  },
]

export const education = [
  {
    degree: 'Post Graduate Program in Data Science & Engineering',
    institution: 'Great Learning',
    dates: 'Jan 2023 – Aug 2023',
  },
  {
    degree: 'Bachelor of Commerce',
    institution: 'Dr. MGR – Janaki College',
    dates: 'Jul 2019 – Jun 2022',
  },
]

// Add public repositories when available.
// Production projects above may contain proprietary code.
export const githubRepos = []

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
