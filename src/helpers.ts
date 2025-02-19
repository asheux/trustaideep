import moment from "moment";

export const isMobile = window.innerWidth <= 981;

export const dateFormatter = (date) =>
  moment(date).format("MMM Do YYYY, h:mm:ss a");

export const dateFormatterNoTime = (date) => moment(date).format("MMM Do YYYY");

export const projects = [{ label: "Trust AI Deep", value: "taid" }];

export const workshops = {
  taid2023: {
    name: "TrustAIDeepLIndaba2023",
    year: 2023,
    location: "DeepIndaba 2023",
    locationimage: "/images/2022/indaba.jpg",
    about: "Recent years have seen an overwhelming body of work on fairness and robustness in machine learning (ML) models. This is not unexpected, as it is an increasingly important concern as ML models are used to support decision-making in high-stakes applications such as mortgage lending, hiring, and diagnosis in healthcare. Trustworthy AI aims to provide an explainable, robust, and fair decision-making process. In addition, transparency and security also play a significant role in improving the adoption and impact of ML solutions. Currently, most ML models assume ideal conditions and rely on the assumption that test/clinical data comes from the same distribution of the training samples. However, this assumption is not satisfied in most real-world applications; in a clinical setting, we can find different hardware devices, diverse patient populations, or samples from unknown medical conditions. On the other hand, we need to assess potential disparities in outcomes that can be translated and deepened in our ML solutions. Particularly, data and models are often imported from external sources in addressing solutions in developing countries, thereby risking potential security issues. The divergence of data and model from a population at hand also poses a lack of transparency and explainability in the decision-making process. In this second edition of the workshop, we aim to bring researchers, policymakers, and regulators to discuss ways to ensure security and transparency while addressing fundamental problems in developing countries, particularly, when data and models are imported and/or collected locally with less focus on ethical considerations and governance guidelines.",
    speakers: [
      {
        name: "Prof. Jerry John Kponyo",
        image: "/images/2023/Jerry_Kponyo.jpeg",
        bio: "Prof. Jerry John Kponyo is the Dean of the Quality Assurance and Planning Office of the Kwame Nkrumah University of Science and Technology (KNUST) under the Vice-Chancellor’s Office. He is the former Dean of the Faculty of Electrical and Computer Engineering, KNUST. Prior to becoming Dean of the Faculty of Electrical and Computer Engineering he was Head of Electrical Engineering Department. He is currently the Project Lead of the KNUST Engineering Education Project (KEEP), a 5.5 Million Dollar Africa Center of Excellence (ACE) Impact project sponsored by the World Bank with a focus on Digital Development and Energy. He is Co-Founder of the Responsible AI Network (RAIN) Africa, which is a collaborative effort between KNUST and TUM Germany. Between 2016 and 2019 he was a visiting Professor at ESIGELEC, France on a staff mobility programme where he taught postgraduate courses in Business Intelligence and conducted research with staff of ESIGELEC. He has done extensive research in IoT, intelligent systems and AI and currently leads the Emerging Networks and Technologies Research Laboratory at the Faculty of Electrical and Computer Engineering, KNUST which focuses on digital development technologies research. Prof Kponyo’s Ph.D. research focused on applying AI to solving a traffic problem in Vehicular Ad hoc Networks (VANETs). He has published over 50 articles in refereed Journals and Conference proceedings. He is a member of the Ghana Institution of Engineers. Prof. Jerry John Kponyo is currently the coordinator of the West Africa Sustainable Engineering Network for Development (WASEND). Prof Kponyo is the PI and Scientific Director of the Responsible Artificial Intelligence Lab which is a 1 Million Canadian Dollar grant sponsored by IDRC and GIZ. He is also PI for the Partner-Afrika project which is sponsored by BMZ.",
        topic: "A Quantitative Approach to Measuring Responsible AI, Reflections from RAIN",
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
      }
    ],
    cfp: {
      title: "Trustworthy AI Workshop 2023",
      description: "Recent years have seen an overwhelming body of work on fairness and robustness in machine learning (ML) models. This is not unexpected, as it is an increasingly important concern as ML models are used to support decision-making in high-stakes applications such as mortgage lending, hiring, and diagnosis in healthcare. Trustworthy AI aims to provide an explainable, robust, and fair decision-making process. In addition, transparency and security also play a significant role in improving the adoption and impact of ML solutions. We need to assess potential disparities in outcomes that can be translated and deepened in our ML solutions. Particularly, data and models are often imported from external sources in addressing solutions in developing countries, thereby risking potential security issues. The divergence of data and model from a population at hand also poses a lack of transparency and explainability in the decision-making process. This workshop aims to bring researchers, policymakers, and regulators to discuss ways to ensure security and transparency while addressing fundamental problems in developing countries, particularly, when data and models are imported and/or collected locally with less focus on ethical considerations and governance guidelines. We’re looking for extended abstracts that will be presented as contributed talks (10 to 15 minutes) related to",
      topics: [
        "Audit techniques in data and ML models",
        "Advances in algorithms and metrics for robust ML",
        "Uncertainty quantification techniques and Fairness studies",
        "Applications and research in data and model Privacy/Security",
        "Methodologies or case studies for explainable and transparent AI",
      ],
      othertopics: [],
      abstractsubdate: "July 28th, 2023",
      submitname: "DLI Author Kit",
      submissionlink: "https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FTrustMLDeepIndaba2023",
      resourcelink: "https://drive.google.com/drive/folders/1K8yBWIkQMO0D5o_XfY6K63MI3RzGopAf",
      tutoriallink: "https://www.youtube.com/watch?v=2wNEfoxcRYw&ab_channel=FES-CongressonFoodandEnvironmentalSecurity"
    },
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
        affiliate: "Emerging Digital Technologies for 4IR (EDT4IR) Research Centre, CSIR",
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
      }
    ],
    coc: {
      source: "https://deeplearningindaba.com/mentorship/code-of-ethics-and-conduct/#:~:text=Code%20of%20Conduct%3A%20Every%20participant,%2C%20religion%2C%20or%20socioeconomic%20status."
    }
  },
  taid2022: {
    name: "TrustAIDeepLIndaba2023",
    year: 2022,
    location: "DeepIndaba 2022",
    locationimage: "/images/2022/indaba.jpg",
    about: "Trustworthy AI aims to provide explainable, robust and fair decision making process. In addition, transparency and security also plays a significant role to improve the adoptability and impact of ML solutions. Particularly, data and models often imported from external sources in addressing solutions in developing countries, thereby  risking potential security issues.   The  divergence of data and model from population at hand also poses a lack of transparency and explainabilty of the decision making process. Thus,  a  workshop at Deep Indaba 2022 on this specific theme aims to bring researchers, policy makers and regulators to discuss on ways to ensure security and transparency while addressing fundamental problems in developing countries, particularly, when data and models are imported and/or collected locally with less focus on ethical consideraions and governance guidelines.",
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
    cfp: {
      title: "Trustworthy AI Workshop 2022",
      description: "",
      topics: [
        "Audit techniques in data and ML models",
        "Advances in algorithms and metrics for robust ML",
        "Uncertainty quantification techniques and Fairness studies",
        "Applications and research in data and model Privacy/Security",
        "Methodologies or case studies for explainable and transparent AI",
      ],
      othertopics: [],
      abstractsubdate: "1st of August 2022",
      submitname: "Form",
      submissionlink: "https://forms.gle/19aJixpRX4PpvZZt8",
      resourcelink: "https://drive.google.com/drive/folders/1K8yBWIkQMO0D5o_XfY6K63MI3RzGopAf",
      tutoriallink: null
    },
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
      }
    ],
    coc: {
      source: "https://deeplearningindaba.com/mentorship/code-of-ethics-and-conduct/#:~:text=Code%20of%20Conduct%3A%20Every%20participant,%2C%20religion%2C%20or%20socioeconomic%20status."
    }
  }
}





