import moment from "moment";

export const isMobile = window.innerWidth <= 981;

export const dateFormatter = (date) =>
  moment(date).format("MMM Do YYYY, h:mm:ss a");

export const dateFormatterNoTime = (date) => moment(date).format("MMM Do YYYY");

export const projects = [{ label: "Trust AI Deep", value: "taid" }];

export const settings = [
  {
    name: "TrustAI @ Indaba 2025",
    path: "TrustAIIndaba2025",
  },
  {
    name: "TrustAI @ IJCAI 2024",
    path: "TrustAIIJCAI2024",
  },
  {
    name: "TrustAI @ Indaba 2023",
    path: "TrustAIIndaba2023",
  },
  {
    name: "TrustAI @ Indaba 2022",
    path: "TrustAIIndaba2022",
  },
];

export const activeSchedule = "2025";
export const activePage = "taid2025";
export const sociallinks = [
  {
    name: "bluesky",
    link: "https://bsky.app/profile/trustai.bsky.social",
  },
  {
    name: "twitter",
    link: "https://x.com/TrustAI_Indaba",
  },
];

export const workshops = {
  taid2025: {
    name: "TrustAIDeepLIndaba2025",
    title: "TrustAI Workshop: Building Public Awareness and Engagement",
    year: 2025,
    datetime: "August 21st, 9 am to 4pm",
    location: "Deep Learning Indaba 2025, Kigali Rwanda",
    locationimage: "/images/2022/indaba.jpg",
    about:
      "Trustworthy AI seeks to ensure that AI systems are aligned with ethical principles, particularly in their societal impact. Given the unique historical and structural challenges of the African continent, it is vital that AI systems are developed to be culturally and ethically relevant, reflecting the continent’s diverse values, and effectively addressing its specific challenges in sectors like healthcare, agriculture, and finance. This full-day workshop offers a platform for researchers to learn, discuss, and engage with the challenges of developing and deploying trustworthy AI systems—especially for and within Africa. This year, the focus is on “Building Public Awareness and Engagement”. By bringing together researchers, ML practitioners, and stakeholders, we aim to strengthen the ecosystem for African centered trustworthy AI. Through this platform, we hope to inspire initiatives that ensure AI development in Africa is trustworthy, inclusive, and impactful, benefiting marginalized communities and fostering a more diverse, culturally relevant global AI landscape.",
    speakers: [
      {
        name: "Sanmi Koyejo",
        image: "/images/2025/sanmik.png",
        bio: "Sanmi Koyejo is an assistant professor in the Department of Computer Science at Stanford University and a co-founder of Virtue AI. At Stanford, Koyejo leads the Stanford Trustworthy Artificial Intelligence (STAIR) lab, which works to develop the principles and practice of trustworthy AI, focusing on applications to science and healthcare. Koyejo has been the recipient of several awards, including a Skip Ellis Early Career Award, a Presidential Early Career Award for Scientists and Engineers (PECASE), and a Sloan Fellowship. Koyejo serves on the Neural Information Processing Systems Foundation Board, the Association for Health Learning and Inference Board, and as president of the Black in AI Board.",
        topic: "",
        expanded: false,
        link: "https://cs.stanford.edu/~sanmi/index.html",
        affiliate:
          "Assistant Professor in the Department of Computer Science at Stanford University",
      },
      {
        name: "Kush R. Varshney",
        image: "/images/2025/kushvarshney.png",
        bio: "Dr. Varshney is an IBM Fellow based at the Thomas J. Watson Research Center, Yorktown Heights, NY, where he directs Human-Centered Trustworthy AI research. He was a visiting scientist at IBM Research - Africa, Nairobi, Kenya in 2019. He was the founding co-director of the IBM Science for Social Good initiative from 2015-2023. He applies data science and predictive analytics to human capital management, healthcare, olfaction, computational creativity, public affairs, international development, and algorithmic fairness, which has led to independently-published a book entitled 'Trustworthy Machine Learning' in 2022. He is currently the general chair for the 2025 AAAI/ACM Conference on Artificial Intelligence, Ethics, and Society.",
        topic: "",
        expanded: false,
        link: "https://krvarshney.github.io/",
        affiliate: "Fellow at IBM Research",
      },
      {
        name: "Kutoma Wakunuma",
        image: "/images/2025/KutomaWakunuma.jpg",
        bio: "Dr Kutoma Wakunuma is an Associate Professor at De Montfort University and Co-Director of the Centre for Computing and Social Responsibility. She specialises in the social and ethical implications of emerging technologies, responsible innovation and AI governance in both the Global North and the Global South. She has co-edited influential books including Responsible AI in Africa and Trustworthy AI: African Perspectives. Dr Wakunuma serves as a European Commission Ethics Advisor and Evaluator. She is a member of Centre for AI and Digital Policy (CAIDP) Global Academic Network. Dr Wakunuma is also a member of UNESCO’s Women for Ethical AI as well as UNESCO’s AI Ethics Experts Without Borders. She is recognised among the Top 100 Brilliant Women in AI Ethics in the 2025. Dr Wakunuma is a passionate advocate for an inclusive and globally representative AI discourse and is frequently invited to speak at high-level international forums, including the UNs Science Summit of the General Assembly; the UN Academic Impact Commission as well as the African Commission’s Human and People’s Rights on AI and other Emerging Technologies, where her insights inform and inspire cross-sector conversations on AI, ethics and society. Dr Wakunuma has facilitated and conducted AI training workshops aimed at parliamentarians, policymakers and civil society organisations in the Global South and has contributed to Zambia’s National AI Strategy by bringing critical perspectives on responsible AI, ethics, inclusion, diversity and equitable AI development, access and use.",
        topic: "",
        expanded: false,
        link: null,
        affiliate:
          "Associate Professor at De Montfort University and Co-Director of the Centre for Computing and Social Responsibility",
      },
    ],
    cfp: {
      title: "Trustworthy AI Workshop @ Deep Learning Indaba 2025",
      description:
        "The Trustworthy AI Workshop at Deep Learning Indaba 2025 aims to foster meaningful discussions on trustworthy AI, covering topics such as fairness, interpretability, robustness, privacy, and accountability, with a particular emphasis on African perspectives and context. As machine learning (ML) models play an increasingly central role in high-stakes decision-making across sectors like healthcare, education, and finance, ensuring that these technologies align with ethical principles to build trust is essential for their responsible deployment. This workshop seeks to provide a platform for researchers to engage with the challenges of developing and deploying AI systems, with a focus on addressing systemic inequalities and building trust in these technologies, particularly from an African perspective or within the African context.",
      topics: [
        {
          title: "System Development:",
          description:
            "Advances in algorithms and metrics for ensuring fairness, robustness, interpretability, or privacy in ML systems",
        },
        {
          title: "Auditing:",
          description:
            "Audit techniques for assessing fairness, robustness, interpretability, or privacy in data and ML models",
        },
        {
          title: "Legal Frameworks:",
          description:
            "Analysis of data protection and privacy and  non-discrimination laws in Africa, AI governance and regulatory frameworks",
        },
        {
          title: "Social Science Perspectives:",
          description:
            "Case studies on the impact of AI on marginalized communities, historical perspectives on discrimination, perceptions of fairness and AI",
        },
        {
          title: "Philosophical Perspectives:",
          description:
            "Identification and reflections on values embedded in AI systems, ethical frameworks for AI deployment",
        },
      ],
      othertopics: [],
      topicofsub:
        "We invite submissions that explore the themes enlisted on the left side of this section, focusing on the unique challenges and opportunities for building trust in AI. Submissions outside of these themes but still related to trust in AI will also be considered. However, submissions unrelated to trust in AI will not be considered.",
      additionalinfo:
        "All accepted submissions will have the opportunity to present their work as a poster. Additionally, selected submissions will be invited to present their work through a short contributed talk during the workshop.",
      formatting:
        "We accept extended abstracts of up to 4 pages, plus unlimited pages for references. The abstract must follow the same Latex format as Deep Learn Indaba  formatting guidelines (PMLR) available here:",
      formatname: "CTAN",
      abstractsubdate: "June 25th, 2025 23:59 AoE",
      notificationdate: "July 28th, 2025",
      submitname: "Microsoft CMT",
      call_for_reviewers: "In addition to submissions, we’re also seeking volunteers to contribute to the workshop's success by serving as reviewers. Reviewers will be asked to provide thoughtful and constructive feedback on approximately 1-3 submitted papers. If you are interested in volunteering for our Program Committee, please complete the sign-up form at",
      whycmt:
        "The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.",
      submitinstruction:
        "Authors are required to register an account on the CMT (Conference Management Toolkit) system in order to submit their extended abstracts. If you do not have a CMT account, please create one by following the instructions provided",
      submittype: "cmt",
      dualsubpolicy:
        "It is permitted to submit work that is under review or has been accepted for publication elsewhere. If your work has already been accepted at another venue, please submit a de-anonymized version and indicate this in the CMT submission form.",
      anonymization:
        "Our peer review process is fully anonymous, meaning reviewers will not know the authors’ identities, and authors will not know the reviewers' identities. Please ensure that you anonymize your submission. This means that the submitted PDF should not include the authors' names, and any references to your own work should be cited in a way that does not reveal that it was authored by you. Submissions that are not properly anonymized may be rejected without review.",
      submitinstructionlink:
        "https://cmt3.research.microsoft.com/docs/help/general/account-creation.html",
      submissionlink:
        "https://cmt3.research.microsoft.com/TrustAIDeepIndaba2025",
      formatlink: "https://ctan.org/tex-archive/macros/latex/contrib/jmlr",
      tutoriallink:
        "https://www.youtube.com/watch?v=2wNEfoxcRYw&ab_channel=FES-CongressonFoodandEnvironmentalSecurity",
    },
    organizers: [
      {
        name: "Miriam Rateike",
        affiliate:
          "Research Scientist at IBM Research Africa, Nairobi, Kenya and PhD Student at Saarland University, Germany",
        image: "/images/2025/miriamrateike.jpg",
        bio: "Miriam is a research scientist at IBM Research Africa, and an ELLIS PhD student at Saarland University. In her PhD, her research focuses on creating algorithms for fair decision making under feedback loops. She is also enrolled in legal studies and thus particularly interested in the intersection of fairness and law. Miriam received the Google AI Fellowship 2023 in Machine Learning. She was an organizer of four NeurIPS Algorithmic Fairness workshops 2021 - 2024, the ELLIS workshop on Causethial Machine Learning 2021, the Causethical Machine Learning Seminar 2021/22, and the TReND Python Course 2021-2022. More here: https://research.ibm.com/people/miriam-rateike",
        link: "https://sites.google.com/view/miriam-rateike/about",
        expanded: false,
      },
      {
        name: "Brian A. Mboya",
        affiliate:
          "Affiliate Researcher at Wolfram Institute and Senior Software Engineer at Soapbox Inc",
        image: "/images/2025/brianmboya.jpg",
        bio: "Brian Mboya is an Affiliate Researcher at Wolfram Institute and a senior software engineer at Soapbox Inc.; and student of computer science in Dedan Kimathi University of Technology in Kenya. He is a programmer with 6+ years of industry experience and academic experience in data annotation and analysis used to understand the social perceptions of facial AI systems. His current work explores the behavior of Cellular Automata and Turing machines to identify rules that produce complex behaviours in simple programs and reveal insights into intelligent attributes. He received several scholarships for attending different summer schools, including TReND Computational Neuroscience and Machine Learning in Africa 2023, Simons Computational Neuroscience Imbizo 2024 and Explore and create projects at the frontiers of science, technology and innovation, Wolfram Research 2024.",
        link: "https://asheux.com/",
        expanded: false,
      },
      {
        name: "Dr. John Wamburu",
        affiliate: "Research Engineer at Google, Nairobi, Kenya",
        image: "/images/2025/johnwamburu.jpeg",
        bio: "Dr. John Wamburu is a Research Engineer at Google. His current work focuses on building and applying ML models to forecast global food insecurity. Previously, he was a Research Scientist at IBM where he focused on trustworthy AI and anomalous pattern discovery. He was a co-organizer of the Practical ML for Low Resource Settings Workshop at ICLR and the Trustworthy AI Workshop at IJCAI, both in 2024. He received his Ph.D. in 2023 from the University of Massachusetts Amherst.",
        link: null,
        expanded: false,
      },
      {
        name: "Aisha Alryeh Mkean Alaagib",
        affiliate: "Applied researcher at a private ARD in Saudi Arabia",
        image: "/images/2025/aisha.jpeg",
        bio: "Aisha Alaagib is an applied researcher at a private ARD in Saudi Arabia, specializing in LLM evaluation, synthetic data generation, and video anomaly detection. In her current role, she works on advancing innovative solutions in artificial intelligence. Previously, she was a research assistant at the German Research Center for Artificial Intelligence (DFKI), where she contributed to studies on representation learning for remote sensing data under the guidance of Prof. Sebastian Vollmer and Prof. Seth Flaxman. Aisha has also completed research internships at Mila Quebec AI Institute and Vector Institute, where she honed her skills in AI development and data science. She holds two M.Sc. degrees in Mathematical Sciences and Machine Intelligence from AIMS Cameroon and AIMS Rwanda, respectively, and a bachelor’s degree in Mathematics and Computer Science from the University of Khartoum, Sudan.",
        link: "https://aishaalaagib.netlify.app/",
        expanded: false,
      },
    ],
    coc: {},
    schedule: [],
    advisors: [
      {
        name: "Dr. Celia Cintas",
        affiliate:
          "Staff Research Scientist at IBM Research Africa, Nairobi, Kenya",
        image: "/images/2025/celiacintas.jpg",
        bio: "Dr. Celia Cintas is a Staff Research Scientist at IBM Research Africa, based in Nairobi. She is a member of the AI Science team at the Kenya Lab. Her current research focuses on the improvement of ML techniques to address challenges in global health and exploring subset scanning for anomaly detection under generative models. Previously, she was a grantee from the National Scientific and Technical Research Council (CONICET), working on Deep Learning for populations studies at LCI-UNS and IPCSH-CONICET (Argentina) as part of the Consortium for Analysis of the Diversity and Evolution of Latin America (CANDELA). During her PhD, she was a visitor student at the University College of London (UK). She was also a Postdoc researcher visitor at Jaén University (Spain). She holds a Ph.D. in Computer Science from the Universidad del Sur (Argentina). Co-chair of several Scipy Latinamerica conferences, Financial Aid Co-Chair for the SciPy (USA) Committee (2016-2019), and Diversity Co-Chair for SciPy (2020-2022). Workshop Co-Chair at ICLR 2023, Diversity Co-chair for ISBI-IEEE 2023 and 2024, MICCAI 2026. Co-Organizer of multiple workshops at Deep Learning Indaba, ICLR, IJCAI, and MICCAI, among others. A detailed list of talks, publications, and events is available at Personal Website.",
        link: "https://celiacintas.io",
        expanded: false,
      },
      {
        name: "Siobhan Mackenzie Hall",
        affiliate:
          "Ph.D. student at the University of Oxford, Oxford, United Kingdom",
        image: "/images/2025/siobhan.jpeg",
        bio: "Siobhan Mackenzie Hall is a Ph.D. student at the University of Oxford as part of the Oxford Neural Interfacing Group, where she investigates the stimulation of the somatosensory cortex in brain-computer interfaces. In addition to her Ph.D., Siobhan is a part of the Oxford Artificial Intelligence Student Labs, where students collaborate in the field of fairness for vision-language models. She completed her undergraduate and master’s degrees in South Africa. Siobhan has previously been a co-organiser for two editions of the Trustworthy AI workshop, at the Deep Learning Indaba 2023, and IJCAI 2024.",
        link: null,
        expanded: false,
      },
      {
        name: "Dr. Skyler Speakman",
        affiliate:
          "Senior Research Scientist, Manager at IBM Research Africa in Nairobi, Kenya",
        image: "/images/2025/speakman_small.jpg",
        bio: "Dr. Speakman manages the AI Sciences team at the Kenya lab of IBM Research Africa. He has worked on a wide range of topics spanning financial inclusion, maternal newborn child health, representation engineering, and anomalous pattern detection. He received his PhD from Carnegie Mellon University in 2014. He also holds masters degrees in Public Policy (2014), Machine Learning (2012), and Statistics (2008).",
        link: null,
        expanded: false,
      },
    ],
  },
  taid2023: {
    name: "TrustAIDeepLIndaba2023",
    title: null,
    year: 2023,
    datetime: null,
    location: "Deep Learning Indaba 2023",
    locationimage: "/images/2022/indaba.jpg",
    about:
      "Recent years have seen an overwhelming body of work on fairness and robustness in machine learning (ML) models. This is not unexpected, as it is an increasingly important concern as ML models are used to support decision-making in high-stakes applications such as mortgage lending, hiring, and diagnosis in healthcare. Trustworthy AI aims to provide an explainable, robust, and fair decision-making process. In addition, transparency and security also play a significant role in improving the adoption and impact of ML solutions. Currently, most ML models assume ideal conditions and rely on the assumption that test/clinical data comes from the same distribution of the training samples. However, this assumption is not satisfied in most real-world applications; in a clinical setting, we can find different hardware devices, diverse patient populations, or samples from unknown medical conditions. On the other hand, we need to assess potential disparities in outcomes that can be translated and deepened in our ML solutions. Particularly, data and models are often imported from external sources in addressing solutions in developing countries, thereby risking potential security issues. The divergence of data and model from a population at hand also poses a lack of transparency and explainability in the decision-making process. In this second edition of the workshop, we aim to bring researchers, policymakers, and regulators to discuss ways to ensure security and transparency while addressing fundamental problems in developing countries, particularly, when data and models are imported and/or collected locally with less focus on ethical considerations and governance guidelines.",
    speakers: [
      {
        name: "Prof. Jerry John Kponyo",
        image: "/images/2023/Jerry_Kponyo.jpeg",
        bio: "Prof. Jerry John Kponyo is the Dean of the Quality Assurance and Planning Office of the Kwame Nkrumah University of Science and Technology (KNUST) under the Vice-Chancellor’s Office. He is the former Dean of the Faculty of Electrical and Computer Engineering, KNUST. Prior to becoming Dean of the Faculty of Electrical and Computer Engineering he was Head of Electrical Engineering Department. He is currently the Project Lead of the KNUST Engineering Education Project (KEEP), a 5.5 Million Dollar Africa Center of Excellence (ACE) Impact project sponsored by the World Bank with a focus on Digital Development and Energy. He is Co-Founder of the Responsible AI Network (RAIN) Africa, which is a collaborative effort between KNUST and TUM Germany. Between 2016 and 2019 he was a visiting Professor at ESIGELEC, France on a staff mobility programme where he taught postgraduate courses in Business Intelligence and conducted research with staff of ESIGELEC. He has done extensive research in IoT, intelligent systems and AI and currently leads the Emerging Networks and Technologies Research Laboratory at the Faculty of Electrical and Computer Engineering, KNUST which focuses on digital development technologies research. Prof Kponyo’s Ph.D. research focused on applying AI to solving a traffic problem in Vehicular Ad hoc Networks (VANETs). He has published over 50 articles in refereed Journals and Conference proceedings. He is a member of the Ghana Institution of Engineers. Prof. Jerry John Kponyo is currently the coordinator of the West Africa Sustainable Engineering Network for Development (WASEND). Prof Kponyo is the PI and Scientific Director of the Responsible Artificial Intelligence Lab which is a 1 Million Canadian Dollar grant sponsored by IDRC and GIZ. He is also PI for the Partner-Afrika project which is sponsored by BMZ.",
        topic:
          "A Quantitative Approach to Measuring Responsible AI, Reflections from RAIN",
        expanded: false,
        link: null,
        affiliate: null,
      },
      {
        name: "Abeba Birhane",
        image: "/images/2023/Abeba_Birhane.jpg",
        bio: "Abeba Birhane is a cognitive scientist researching human behaviour, social systems, and responsible and ethical Artificial Intelligence. Her interdisciplinary research sits at the intersections of embodied cognitive science, complexity science, critical data and algorithm studies, and afro-feminist theories. Her work includes audits of computational models and large scale datasets. Birhane is a Senior Fellow in Trustworthy AI at Mozilla Foundation and an Adjunct Assistant professor at the school of computer science and statistics at Trinity College Dublin, Ireland.",
        topic: "Larger isn’t always better",
        expanded: false,
        link: null,
        affiliate: null,
      },
      {
        name: "Nicolas Papernot",
        image: "/images/2023/Nicolas_Papernot.jpeg",
        bio: "Nicolas Papernot is an Assistant Professor of Computer Engineering and Computer Science at the University of Toronto. He also holds a Canada CIFAR AI Chair at the Vector Institute and is a faculty affiliate at the Schwartz Reisman Institute. His research interests span the security and privacy of machine learning. Some of his group’s recent projects include proof-of-learning, collaborative learning beyond federation, dataset inference, and machine unlearning. Nicolas is an Alfred P. Sloan Research Fellow in Computer Science. His work on differentially private machine learning was awarded an outstanding paper at ICLR 2022 and a best paper at ICLR 2017. He serves as an associate chair of the IEEE Symposium on Security and Privacy (Oakland), and an area chair of NeurIPS. He co-created and co-chaired the first IEEE Conference on Secure and Trustworthy Machine Learning (SaTML) in 2023. Nicolas earned his Ph.D. at the Pennsylvania State University, working with Prof. Patrick McDaniel and supported by a Google PhD Fellowship. Upon graduating, he spent a year at Google Brain where he still spends some of his time.",
        topic: "Training Dynamics and Trust in Machine Learning",
        expanded: false,
        link: null,
        affiliate: null,
      },
      {
        name: "Dr. Aisha Walcott",
        image: "/images/2023/aisha_walcott_Bryant.jpg",
        bio: "Dr. Aisha Walcott is a Senior Staff Research Scientist and head of Google Research Kenya. She has over a decade of experience working in Africa and leading teams to develop innovative technologies that leverage AI and computing to address some of Africa’s most pressing challenges. Her current work focuses on challenges of Africa’s food systems and exploring ways in which advances in AI tools can make an impact on food security through building resilience in food systems. Prior to her time at Google, she was a Senior Technical Staff Member at IBM Research Africa, and led projects in developing AI tools for global health, water management and access, as well as transportation. Currently, she serves on the board for the African Institute for Mathematical Sciences (AIMS) doctoral research program in data science, and is a Workshops co-chair for the International Conference on Learning and Representations 2023 (ICLR’23) - to be held in Rwanda May 2023. Dr. Walcott earned her PhD in the Electrical Engineering and Computer Science Department at MIT with a focus on robotics.",
        topic: "TBD",
        expanded: false,
        link: null,
        affiliate: null,
      },
    ],
    organizers: [
      {
        name: "Aisha Alryeh Mkean Alaagib",
        affiliate: "German Research Center for Artificial Intelligence",
        image: null,
        bio: "",
        link: "https://aishaalaagib.netlify.app/",
        expanded: false,
      },
      {
        name: "Lameck Amugongo",
        affiliate: "Namibia University of Science and Technology",
        image: null,
        bio: "",
        link: "https://mbangula.github.io/",
        expanded: false,
      },
      {
        name: "Siobhan Mackenzie Hall",
        affiliate: "University of Oxford",
        image: null,
        bio: "",
        link: null,
        expanded: false,
      },
      {
        name: "Nathi Ndlovu",
        affiliate:
          "Emerging Digital Technologies for 4IR (EDT4IR) Research Centre, CSIR",
        image: null,
        bio: "",
        link: null,
        expanded: false,
      },
      {
        name: "Tejumade Afonja",
        affiliate: "CISPA Helmholtz Center for Information Security",
        image: null,
        bio: "",
        link: null,
        expanded: false,
      },
      {
        name: "Celia Cintas",
        affiliate: "IBM Research Africa",
        image: null,
        bio: "",
        link: "https://celiacintas.io/",
        expanded: false,
      },
    ],
    advisors: null,
    cfp: {
      title: "Trustworthy AI Workshop 2023",
      description:
        "Recent years have seen an overwhelming body of work on fairness and robustness in machine learning (ML) models. This is not unexpected, as it is an increasingly important concern as ML models are used to support decision-making in high-stakes applications such as mortgage lending, hiring, and diagnosis in healthcare. Trustworthy AI aims to provide an explainable, robust, and fair decision-making process. In addition, transparency and security also play a significant role in improving the adoption and impact of ML solutions. We need to assess potential disparities in outcomes that can be translated and deepened in our ML solutions. Particularly, data and models are often imported from external sources in addressing solutions in developing countries, thereby risking potential security issues. The divergence of data and model from a population at hand also poses a lack of transparency and explainability in the decision-making process. This workshop aims to bring researchers, policymakers, and regulators to discuss ways to ensure security and transparency while addressing fundamental problems in developing countries, particularly, when data and models are imported and/or collected locally with less focus on ethical considerations and governance guidelines. We’re looking for extended abstracts that will be presented as contributed talks (10 to 15 minutes) related to",
      topics: [
        {
          title: "",
          description: "Audit techniques in data and ML models",
        },
        {
          title: "",
          description: "Advances in algorithms and metrics for robust ML",
        },
        {
          title: "",
          description:
            "Uncertainty quantification techniques and Fairness studies",
        },
        {
          title: "",
          description:
            "Applications and research in data and model Privacy/Security",
        },
        {
          title: "",
          description:
            "Methodologies or case studies for explainable and transparent AI",
        },
      ],
      othertopics: [],
      topicofsub: "",
      additionalinfo: "",
      formatting: "The short paper must be formatted using the",
      formatname: "DLI Author Kit",
      abstractsubdate: "July 28th, 2023",
      notificationdate: "",
      submitname: "Microsoft CMT",
      call_for_reviewers: null,
      whycmt:
        "The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.",
      submitinstruction:
        "Authors are required to register an account on the CMT (Conference Management Toolkit) system in order to submit their extended abstracts. If you do not have a CMT account, please create one by following the instructions provided",
      submittype: "cmt",
      dualsubpolicy: "",
      anonymization:
        "Our peer review process is fully anonymous, meaning reviewers will not know the authors’ identities, and authors will not know the reviewers' identities. Please ensure that you anonymize your submission.  This means that the submitted PDF should not include the authors' names, and any references to your own work should be cited in a way that does not reveal that it was authored by you. Submissions that are not properly anonymized may be rejected without review.",
      submitinstructionlink:
        "https://cmt3.research.microsoft.com/docs/help/general/account-creation.html",
      submissionlink:
        "https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FTrustMLDeepIndaba2023",
      formatlink:
        "https://drive.google.com/drive/folders/1K8yBWIkQMO0D5o_XfY6K63MI3RzGopAf",
      tutoriallink:
        "https://www.youtube.com/watch?v=2wNEfoxcRYw&ab_channel=FES-CongressonFoodandEnvironmentalSecurity",
    },
    coc: {
      source:
        "https://deeplearningindaba.com/mentorship/code-of-ethics-and-conduct/#:~:text=Code%20of%20Conduct%3A%20Every%20participant,%2C%20religion%2C%20or%20socioeconomic%20status.",
    },
    schedule: [
      {
        starttime: "11:00AM",
        endtime: "11:05AM",
        title: "Opening remarks",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "11:05AM",
        endtime: "11:35AM",
        title:
          "Keynote: A Quantitative Approach to Measuring Responsible AI, Reflections from RAIN",
        abstract: "",
        speakername: "Prof. Jerry John Kponyo",
        speakerlink: null,
      },
      {
        starttime: "11:35AM",
        endtime: "11:45AM",
        title: "Keynote: Q&A",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "11:45AM",
        endtime: "11:55AM",
        title:
          "Phonocardiogram Classification: Leveraging 1D Inception Time Convolutional Neural Networks with Explainable AI using Grad-CAM",
        abstract: "",
        speakername: "Bjørn-Jostein Singstad, Antony M. Gitau",
        speakerlink: null,
      },
      {
        starttime: "11:55AM",
        endtime: "12:05PM",
        title:
          "On Diagnostics for Understanding Agent Training Behaviour in Cooperative MARL",
        abstract: "",
        speakername:
          "Wiem Khlifi, Siddarth Singh, Omayma Mahjoub, Ruan de Rock, Abidine Vall, Rihab Gorsane, Arnu Pretorius",
        speakerlink: null,
      },
      {
        starttime: "12:05PM",
        endtime: "12:15PM",
        title: "Fairness in Credit Scoring",
        abstract: "",
        speakername: "Nokuthula K., Nathi N., Nadiera M., Siyanda N",
        speakerlink: null,
      },
      {
        starttime: "12:15PM",
        endtime: "12:30PM",
        title: "Morning Session Q&A ",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "12:30PM",
        endtime: "2:00PM",
        title: "Network Session & Lunch break",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "2:00PM",
        endtime: "2:20PM",
        title: "Keynote: Larger isn’t always better",
        abstract: "",
        speakername: "Dr. Abeba Birhane",
        speakerlink: null,
      },
      {
        starttime: "2:20PM",
        endtime: "2:30PM",
        title: "Keynote: Q&A",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "2:30PM",
        endtime: "2:40PM",
        title:
          "Investigating the Robustness of Arabic Offensive Language Transformer-based Classifiers To Adversarial Attacks",
        abstract: "",
        speakername: "Maged Abdelaty, Ahmed El-Sayed Mahmoud, Shaimaa Lazem",
        speakerlink: null,
      },
      {
        starttime: "2:40PM",
        endtime: "2:50PM",
        title:
          "Algorithmic Techniques for Mitigating Gender Bias in Word Embeddings",
        abstract: "",
        speakername: "Victor Ashioya",
        speakerlink: null,
      },
      {
        starttime: "2:50PM",
        endtime: "3:10PM",
        title: "Afternoon Session  Q&A",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "3:10PM",
        endtime: "3:30PM",
        title: "Keynote: Thinking of Trust beyond Data and Models",
        abstract: "",
        speakername: "Dr. Aisha Walcott",
        speakerlink: null,
      },
      {
        starttime: "3:30PM",
        endtime: "3:40PM",
        title: "Keynote: Q&A",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "3:40PM",
        endtime: "4:00PM",
        title: "Keynote: Training Dynamics and Trust in Machine Learning",
        abstract: "",
        speakername: "Dr. Nicolas Papernot",
        speakerlink: null,
      },
      {
        starttime: "4:00PM",
        endtime: "4:10PM",
        title: "Keynote: Q&A",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "4:10PM",
        endtime: "4:30PM",
        title: "Network Session & Coffee break",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "4:30PM",
        endtime: "5:50PM",
        title:
          "Panel Discussion** Going beyond buzzwords and metrics: What will it *actually* take to achieve equitable, accessible and transparent AI? Panelists: Roseanne Liu (Google DeepMind), Tyna Eloundou (OpenAI) and Siobhan Mackenzie Hall (University of Oxford)",
        abstract: "",
        speakername:
          "Moderator: Nathi Ndlovu (South Africa Council for Scientific and Industrial Research)",
        speakerlink: null,
      },
      {
        starttime: "5:50PM",
        endtime: "6:00PM",
        title: "Closing remarks",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "6:00PM",
        endtime: "",
        title: "End of the Workshop",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
    ],
  },
  taid2022: {
    name: "TrustAIDeepLIndaba2022",
    title: null,
    year: 2022,
    datetime: null,
    location: "Deep Learning Indaba 2022",
    locationimage: "/images/2022/indaba.jpg",
    about:
      "Trustworthy AI aims to provide explainable, robust and fair decision making process. In addition, transparency and security also plays a significant role to improve the adoptability and impact of ML solutions. Particularly, data and models often imported from external sources in addressing solutions in developing countries, thereby  risking potential security issues.   The  divergence of data and model from population at hand also poses a lack of transparency and explainabilty of the decision making process. Thus,  a  workshop at Deep Indaba 2022 on this specific theme aims to bring researchers, policy makers and regulators to discuss on ways to ensure security and transparency while addressing fundamental problems in developing countries, particularly, when data and models are imported and/or collected locally with less focus on ethical consideraions and governance guidelines.",
    speakers: [
      {
        name: "Anis Yazidi",
        image: "/images/2022/keynote1.png",
        bio: "Anis Yazidi is currently the deputy head of OsloMet AI lab, and the leader for the research group on Applied Artificial Intelligence (AI2) at OsloMet. He is a full Professor in Machine Learning at OsloMet. He is also a Senior Researcher at Oslo University Hospital (OuS) and research Professor in Data Science at the Norwegian University of Science and Technology NTNU. He has more than 190 publications, including more than 80 journal articles in prestigious venues and 2 book chapters. Anis Yazidi received the M.Sc. and Ph.D. degrees from the University of Agder, Grimstad, Norway, in 2008 and 2012, respectively.  In 2015 he was selected as the promising researcher of the year, TKD Faculty OsloMet. In 2019 he won the Prize for top 50 in Norway most productive researcher for all disciplines for the years 2015-2018. He also won the Best Paper Award  in SMARTGIFG 2017, in ACM RACS 2017 and in CSE 2014 and Best Paper Award Runner in SMC 2016. He is IEEE senior member. He is associate editor for Springer Journal on Pattern Analysis and Applications, associate editor for Frontiers in Artificial Intelligence and associate editor for Frontiers in Computational Physiology and Medicine. He is leading the master program in Data Science at OsloMet. He  is currently PI in the Horizon 2020 AI-Mind project and he is also PI from the Norwegian side in different international and national projects. He is the co-director of the Excellence Academic Environment NordSTAR on Trustworthy and Sustainbe AI at OsloMet",
        topic: "Adaptive Learning with Artificial Barriers",
        expanded: false,
        link: null,
        affiliate: null,
      },
      {
        name: "Chinasa T. Okolo",
        image: "/images/2022/keynote2.jpeg",
        bio: "Chinasa T. Okolo is a fifth-year Ph.D. Candidate in the Department of Computer Science at Cornell University. Before coming to Cornell, she graduated from Pomona College with a degree in Computer Science. Her research interests include explainable AI, human-AI interaction, global health, and information & communication technologies for development (ICTD). Within these fields, she works on projects to understand how frontline healthcare workers in rural India perceive and value artificial intelligence (AI) and examines how explainability can be best leveraged in AI-enabled technologies deployed throughout the Global South, with a focus on healthcare",
        topic: "Adaptive Learning with Artificial Barriers",
        expanded: false,
        link: null,
        affiliate: null,
      },
      {
        name: "Shakir Mohamed",
        image: "/images/2022/keynote3.jpg",
        bio: "Shakir Mohamed works on technical and sociotechnical questions in machine learning research, working on problems in machine learning principles, applied problems in healthcare and environment, and ethics and diversity. Shakir is a Director for research at DeepMind in London, an Associate Fellow at the Leverhulme Centre for the Future of Intelligence, and a Honorary Professor of University College London. Shakir is also a founder and trustee of the Deep Learning Indaba. Shakir also serves on the Board of Directors for the largest conferences in the field of AI (ICML, ICLR, NeurIPS), and a member of the Royal Society diversity committee. Shakir is from South Africa and received his PhD from the University of Cambridge, and his masters and undergraduate degrees in Electrical and Information engineering from the University of the Witwatersrand, Johannesburg",
        expanded: false,
        link: null,
        affiliate: null,
      },
    ],
    organizers: [
      {
        name: "Aisha Alryeh Mkean Alaagib",
        affiliate: "German Research Center for Artificial Intelligence",
        image: null,
        bio: "",
        link: "https://aishaalaagib.netlify.app/",
        expanded: false,
      },
      {
        name: "Girmaw Abebe Tadesse",
        affiliate: "",
        image: null,
        bio: "",
        link: "https://researcher.watson.ibm.com/researcher/view.php?person=ibm-Girmaw.Abebe.Tadesse",
        expanded: false,
      },
      {
        name: "Luis Oala",
        affiliate: "",
        image: null,
        bio: "",
        link: "https://luisoala.net/",
        expanded: false,
      },
      {
        name: "Celia Cintas",
        affiliate: "IBM Research Africa",
        image: null,
        bio: "",
        link: "https://celiacintas.io/",
        expanded: false,
      },
    ],
    advisors: null,
    cfp: {
      title: "Trustworthy AI Workshop 2022",
      description: "",
      topics: [
        {
          title: "",
          description: "Audit techniques in data and ML models",
        },
        {
          title: "",
          description: "Advances in algorithms and metrics for robust ML",
        },
        {
          title: "",
          description:
            "Uncertainty quantification techniques and Fairness studies",
        },
        {
          title: "",
          description:
            "Applications and research in data and model Privacy/Security",
        },
        {
          title: "",
          description:
            "Methodologies or case studies for explainable and transparent AI",
        },
      ],
      othertopics: [],
      topicofsub: "",
      additionalinfo: "",
      formatting: "The short paper must be formatted using the",
      formatname: "DLI Author Kit",
      abstractsubdate: "1st of August 2022",
      notificationdate: null,
      submitname: "Form",
      call_for_reviewers: null,
      whycmt: "",
      submitinstruction: "",
      submittype: "form",
      dualsubpolicy: "",
      anonymization:
        "Our peer review process is fully anonymous, meaning reviewers will not know the authors’ identities, and authors will not know the reviewers' identities. Please ensure that you anonymize your submission.  This means that the submitted PDF should not include the authors' names, and any references to your own work should be cited in a way that does not reveal that it was authored by you. Submissions that are not properly anonymized may be rejected without review.",
      submitinstructionlink: null,
      submissionlink: "https://forms.gle/19aJixpRX4PpvZZt8",
      formatlink:
        "https://drive.google.com/drive/folders/1K8yBWIkQMO0D5o_XfY6K63MI3RzGopAf",
      tutoriallink: null,
    },
    coc: {
      source:
        "https://deeplearningindaba.com/mentorship/code-of-ethics-and-conduct/#:~:text=Code%20of%20Conduct%3A%20Every%20participant,%2C%20religion%2C%20or%20socioeconomic%20status.",
    },
    schedule: [
      {
        starttime: "8:30AM",
        endtime: "8:35AM",
        title: "Opening remarks",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "8:35AM",
        endtime: "8:55AM",
        title: "Keynote: Adaptive Learning with Artificial Barriers",
        abstract:
          "In this talk, we will present some new advances in reinforcement learning in which artificial barriers are imposed to confine the action probabilities in order to avoid absorbing states. We will also some of the applications of this new paradigm in multi-agent systems. Furthermore, we will show some connections between reinforcement learning and dynamical systems using the theory of two-time scale stochastic approximation. Some applications of distributed learning in sensor fusion without knowledge of ground truth will be presented.",
        speakername: "Anis Yazidi",
        speakerlink: null,
      },
      {
        starttime: "8:55AM",
        endtime: "9:00AM",
        title: "Keynote: Q&A",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "9:00AM",
        endtime: "9:10AM",
        title:
          "Towards trustworthy AI-based algorithms in healthcare: A case of medical images",
        abstract: "",
        speakername: "Mbangula Lameck Amugongo",
        speakerlink: null,
      },
      {
        starttime: "9:10AM",
        endtime: "9:20AM",
        title:
          "Adversarial Robustness of Different Federated Learning (FL) Frameworks : case of Tensorflow-federated",
        abstract: "",
        speakername: "Loic Elnathan Tiokou Fangang",
        speakerlink: null,
      },
      {
        starttime: "9:20AM",
        endtime: "9:30AM",
        title: "Morning Session Q&A",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "9:30AM",
        endtime: "9:50AM",
        title:
          "Keynote: Making AI Explainable for Novice Technology Users in Low-Resource Settings",
        abstract:
          "As researchers and technology companies rush to develop artificial intelligence (AI) applications that aid the health of marginalized communities, it is critical to consider the needs of the community health workers (CHWs) who will be increasingly expected to operate tools that incorporate these technologies. My previous work has shown that these users have low levels of AI knowledge, form incorrect mental models about how AI works, and at times, may trust algorithmic decisions more than their own. This is concerning, given that AI applications targeting the work of CHWs are already in active development and early deployments in low-resource healthcare settings have already reported failures that created additional workflow inefficiencies and inconvenienced patients. Explainable AI (XAI) can help avoid such pitfalls, but nearly all prior work has focused on users that live in relatively resource-rich settings (e.g., the US and Europe) and that arguably have substantially more experience with digital technologies such as AI. My research works to develop XAI for people with low levels of formal education and technical literacy, with a focus on healthcare in low-resource domains. This work involves demoing interactive prototypes with CHWs to understand what aspects of model decision-making need to be explained and how they can be explained most effectively, with the goal of improving how current XAI methods serve novice technology users.",
        speakername: "Chinasa T. Okolo",
        speakerlink: null,
      },
      {
        starttime: "9:50AM",
        endtime: "10:00AM",
        title: "Keynote: Q&A",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "10:00AM",
        endtime: "2:00PM",
        title: "Network Session & Coffee break",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "2:00PM",
        endtime: "2:10PM",
        title:
          "A Prompt Array Keeps the Bias Away: Debiasing Vision-Language Models with Adversarial Learning",
        abstract: "",
        speakername: "Siobhan Mackenzie Hall",
        speakerlink: null,
      },
      {
        starttime: "2:10PM",
        endtime: "2:20PM",
        title: "Roles of weights in a trained deep learning algorithm",
        abstract: "",
        speakername: "Deogratias Mzurikwao",
        speakerlink: null,
      },
      {
        starttime: "2:20PM",
        endtime: "2:30PM",
        title: "Afternoon Session Q&A",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "2:30PM",
        endtime: "2:50PM",
        title: "Keynote: Trustworthy AI as Decolonial AI",
        abstract:
          "We'll use some cases of historical stories of technology development to explore some of the dimensions of trustworthy technologies, specifically using examples of AI in water management, and climate change. These examples will expose harms that arise from algorithmic systems and part of trustworthy technologies is to consider alternative paths and actions that can be taken at individual and institutional levels. I'll explore a few topics that arise from a decolonial approach to thinking about AI and the advantages of historical hindsight in building trustworthy technology.",
        speakername: "Shakir Mohamed",
        speakerlink: null,
      },
      {
        starttime: "2:50PM",
        endtime: "3:50PM",
        title:
          "Panel Discussion with Wiebke Toussaint (University of Delft), Essa Mohamedali (Tanzania AI Lab), Amal Rannen Triki (DeepMind), Caleb Robinson (Microsoft AI for Good) &  Shakir Mohamed (DeepMind)",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "3:50PM",
        endtime: "4:00PM",
        title: "Closing remarks",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "4:00PM",
        endtime: "",
        title: "End of the Workshop",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
    ],
  },
};
