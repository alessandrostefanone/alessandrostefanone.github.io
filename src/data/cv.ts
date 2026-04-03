import type { Publication } from "../types/cv";

export const experiences = [
  {
    company: "XJTU-POLIMI Joint School of Design and Innovation",
    time: "Nov 2025 - Dec 2025",
    title: "Teaching Assistant",
    location: "Xi'an, China",
    description:
      "Mentored 100+ Bachelor’s students through the Project Work 6 curriculum, which concerned the development of a micromobility vehicle concept. Helped teams transition from initial research to finalized design specifications within a 7-week timeline. Enhanced the quality of final prototypes by conducting specialized workshops in CAD modeling and virtual prototyping.",
  },
  {
    company: "Politecnico di Milano - Department of Mechanical Engineering",
    time: "Sep 2023 - Feb 2026",
    title: "Teaching Assistant",
    location: "Milan, Italy",
    description:
      "Assisted in teaching Product Digital Twin, Digital Design, Methods and Tools for Detailed Design, and Mechanical Design Laboratory A. Taught CAD software with focus on parametric modeling and assembly design. Developed expertise in structural and modal FEM Analysis.",
  },
  {
    company: "Haier Europe",
    time: "Apr 2023 - Sep 2023",
    title: "Product Cost Engineer",
    location: "Brugherio (MB), Italy",
    description:
      "Collaborated with R&D to estimate costs of new products and parts. Developed cost reduction strategies to meet budget goals. Prepared and presented cost reports to management and cross-functional teams.",
  },
  {
    company: "Haier Europe",
    time: "Sep 2022 - Apr 2023",
    title: "Tumble Dryer Platform Intern",
    location: "Brugherio (MB), Italy",
    description:
      "Designed and tested prototype for improving energetic efficiency of domestic tumble dryers. Collected and analyzed data using design of experiments and statistical tools. Conducted performance tests to evaluate product quality.",
  },
];

export const education = [
  {
    school: "Politecnico di Milano",
    time: "Sep 2023 - Sep 2026",
    degree: "Ph.D., Mechanical Engineering",
    location: "Milan, Italy",
    description: "",
  },
  {
    school: "Politecnico di Milano",
    time: "Sep 2020 - May 2023",
    degree: "Master's Degree, Mechanical Engineering",
    location: "Milan, Italy",
    description: "",
  },
  {
    school: "Politecnico di Milano",
    time: "Sep 2017 - Sep 2020",
    degree: "Bachelor's Degree, Mechanical Engineering",
    location: "Milan, Italy",
    description: "",
  },
];

export const skills = [
  {
    title: "Programming Languages",
    description: "Python, TypeScript, JavaScript, C#, C",
  },
  {
    title: "Web Technologies",
    description: "Node.js, React, HTML/CSS, Next.js",
  },
  {
    title: "Database Systems",
    description: "MongoDB, Neo4j",
  },
  {
    title: "Data Science & Machine Learning",
    description: "TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy, Matplotlib",
  },
  {
    title: "DevOps & Version Control",
    description: "Git, Docker",
  },
  {
    title: "Mathematical & Statistical Tools",
    description: "MATLAB, SciPy",
  },
  {
    title: "Other Tools & Technologies",
    description: "CAD, FEA, ROS (Robot Operating System), Unity, Babylon.js",
  },
  {
    title: "Research Skills",
    description:
      "Literature Review, Data Analysis, Scientific Writing, Experimental Design, Public Speaking",
  },
];

export const publications: Publication[] = [
  {
    title: "Real-Time Monitoring Platform for Commercial Refrigerators Using Digital Twin Aggregates Available to Purchase",
    authors:
      "Alessandro Stefanone, Matteo Sala, Roberto Zanetti, Matteo Pirotta, Marco Rossoni, Giorgio Colombo",
    journal: "In Proceedings of the ASME IMECE 2025, American Society of Mechanical Engineers",
    time: "2026",
    link: "https://doi.org/10.1115/IMECE2025-166442",
    abstract:
      "Industrial refrigeration systems are essential to preserving the cold chain in sectors such as food and beverage, where equipment failures can result in significant economic losses, increased energy consumption, and product spoilage. However, traditional Supervisory Control and Data Acquisition systems often offer only localized monitoring, limiting fleet-wide visibility and hindering predictive maintenance efforts. This study introduces a scalable and interoperable monitoring platform for commercial refrigeration units, built around Digital Twin aggregates to enable centralized real-time data acquisition and anomaly detection. The system features a multi-tier architecture that integrates OPC UA data exchange protocol for standardized data exchange and utilizes a Long Short-Term Memory (LSTM) encoder-decoder model for semi-supervised anomaly detection. Sensor data is processed to extract time-domain features, and the LSTM model, trained solely on healthy operational data, detects deviations indicative of faults in real time. A functional Digital Twin platform was implemented as a web-based application. Evaluation using a publicly available dataset of industrial refrigeration cycles demonstrates strong performance, achieving an area under the Receiver Operating Characteristic (ROC) curve of 0.95 and an area under the Precision-Recall curve of 0.72 for the fault detection task. While results are promising, current limitations include the detection of only a single generic fault type based exclusively on power consumption data.",
    status: "Conference Paper",
    media: [
      {
        type: "image",
        src: "/publications/DT_model.jpg",
        alt: "Methodology used to implement the Digital Twin platform.",
        caption: "Methodology used to implement the Digital Twin platform.",
      }
    ],
  },
  {
    title: "Sensing Odors: Food Classification Using a Lightweight Transformer",
    authors:
      "Marco Rossoni, Leonardo Meacci, Alessandro Stefanone, Giorgio Colombo",
    journal: "Lecture Notes in Mechanical Engineering. Springer",
    time: "2026",
    link: "https://doi.org/10.1007/978-3-032-14953-4_27",
    abstract:
      "Food supply chain demands accessible technologies for real-time freshness monitoring; however, current solutions lack efficient olfactory assessment capabilities. This paper presents a lightweight transformer for odor classification system designed for low-power food detection on edge devices. Specifically, the model processes gas resistance signals from a Bosch BME688 sensor. Evaluated through a case study involving coffee powders, a proxy for perishable goods, the proposed approach is rigorously benchmarked against off-the-shelf solutions under identical conditions. Our model improves classification accuracy and F1 score by 8%, while reducing the false positive rate by 9% compared to the baseline. Thus, the architectural simplifications reduce the complexity of the model while preserving temporal pattern recognition. Finally, this approach paves the way for integrating olfactory analysis into circular food infrastructures aimed at minimizing waste.",
    status: "Conference Paper",
  },
  {
    title: "Transformer-Based Odor Recognition on E-Nose Platforms",
    authors:
      "Alessandro Stefanone, Leonardo Meacci, Marco Rossoni, Giorgio Colombo",
    journal: "Results in Engineering",
    time: "2025",
    link: "https://doi.org/10.1016/j.rineng.2025.106309",
    abstract:
      "Transformers have reshaped sequence modelling, yet their value for embedded electronic-nose (e-nose) systems remains largely anecdotal. We present a systematic evaluation of ConvTran, a lightweight self-attention network originally proposed for generic time-series analysis, in the specific context of portable gas sensing. Two open datasets acquired with an eight-sensor Bosch BME688 board underpin the study: CoffeePow-4 (3583 traces across three coffee powders plus ambient air) and the imbalanced Aroma-7 extension that adds three fragranced creams for a total of 4750 traces. ConvTran is benchmarked against five deep-learning baselines (FCN, ResNet, InceptionTime, LSTM-FCN, ALSTM-FCN) and the proprietary Bosch AI-Studio classifier using accuracy, macro-F1 and macro false-positive rate, complemented by on-device memory and latency profiling. On CoffeePow-4, ConvTran attains 96.42% macro-F1 with 1.71 ms inference time while occupying 115 kB of flash. On Aroma-7, it preserves 96.03% macro-F1 at 2 ms and 557 kB, remaining faster than ResNet or InceptionTime, whose accuracy drops by 1.3%. Fully convolutional networks accuracy exceed ConvTran by 0.6% on the four-class task but loses 17% when the number of classes increases, highlighting the advantage of global self-attention for chemically similar odors. These findings demonstrate that an off-the-shelf transformer can satisfy the requirements of embedded devices, delivering state-of-the-art accuracy across balanced and imbalanced odor sets.",
    status: "Journal Article",
    media: [
      {
        type: "image",
        src: "/publications/e-nose.png",
        alt: "Overview of the embedded odor recognition pipeline.",
        caption: "Overview of the embedded odor recognition pipeline.",
      }
    ],
  },
  {
    title: "A Framework for Digital Twin Development in Manufacturing",
    authors: "Alessandro Stefanone, Marco Rossoni, Giorgio Colombo",
    journal:
      "In Proceedings of the ASME IMECE 2024, American Society of Mechanical Engineers",
    time: "2024",
    link: "https://doi.org/10.1115/imece2024-144977",
    abstract:
      "This study explores the application of Digital Twin technology in industrial manufacturing, focusing on the integration of OPC UA communication protocol for data exchange between physical machines and their virtual counterparts. The treatise presents a comprehensive framework for developing and deploying Digital Twins in a manufacturing setting. Through the implementation of this framework, significant challenges encountered in Digital Twin development are addressed, including the intricate process of extracting data from OPC UA servers, the necessity for standardized methodologies for descriptive-based Digital Twins, as well as limitations imposed by the frequency of API calls for data retrieval and the complexities associated with managing large and intricate systems. Furthermore, promising avenues for future exploration are proposed, such as the advancement of open-source OPC UA servers and the emergence of web-based Digital Twins as accessible and collaborative platforms for industrial applications. A case study involving a CNC machining center demonstrates the practical utility of the developed framework for monitoring and diagnostics of industrial processes.",
    status: "Conference Paper",
    media: [
      {
        type: "image",
        src: "/publications/dt_mt.gif",
        alt: "Animated overview of the digital twin development framework",
        caption: "Animated overview of the digital twin of a machine tool.",
      },
    ],
  },
  {
    title: "Leveraging Large Language Models and Knowledge Graphs for Enhanced Technical Document Classification",
    authors: "Alessandro Stefanone",
    journal:
      "Poster - ASME IMECE 2024, American Society of Mechanical Engineers",
    time: "2024",
    link: "https://hdl.handle.net/11311/1279213",
    abstract:
      "", 
    status: "Research Poster",
    media: [
      {
        type: "image",
        src: "/publications/poster_llm.png",
        alt: "Poster summarizing the research on LLMs and Knowledge Graphs for technical document classification",
        caption: "Poster presented at ASME IMECE 2024.",
      },
    ],
  },
  {
    title:
      "A novel test bench for improving efficiency and energy consumption of clothes dryer",
    authors: "Alessandro Stefanone",
    journal: "Master's Thesis",
    time: "2022",
    link: "https://hdl.handle.net/10589/210064",
    abstract:
      "Due to overpopulation and the current economic growth, energy consumption has become a relevant subject, and home appliances manufacturers need to realize more efficient machines to be compliant with the European (and International) regulations. This thesis was realized at Haier Europe in the Brugherio (MB) plant. The objective of the thesis is the development of a prototype of a domestic tumble dryer and the validation of the same prototype by carrying out experimental tests to optimize its performance. The main component of the prototype is a double-rotor motor, which allows for customizing the speed profiles of the fan and the drum of the machine. The first chapter provides an overview of the state of the art in the field of tumble dryers, while the second chapter details the methodology followed to conduct the experimental activity. The third chapter presents a case study that explores the optimization of the motor's performance. Through an experimental approach, the energy consumption for the full load cycle has been reduced by the 9%. The fourth chapter describes the use of the prototype for energy-saving tests and the development of a new cycle for the dryer. To tackle the clothes tangling effect periodical monodirectional accelerations and decelerations were implemented. This anti-tangling strategy achieved to optimize the evenness of drying of the prototype.",
    status: "",
  },
];
export const awards = [
  {
    title: "Best Research Poster",
    organization: "American Society of Mechanical Engineers, IMECE 2024",
    date: "Nov 2024",
    description: [
      "Won the Best Research Poster Award in the Advanced Design and Information track",
      'Awarded for: "Leveraging Large Language Models and Knowledge Graphs for Enhanced Technical Document Classification"',
      "Generated significant interest from peers and industry experts, leading to valuable discussions that helped complete the research for journal publication",
    ],
  },
  {
    title: "Mentee at LeadTheFuture",
    organization: "LeadTheFuture",
    date: "Sep 2019",
    description: [
      "Selected among few Italian students for this competitive STEM mentorship program",
      "Acceptance rate below 20%",
    ],
  },
  {
    title: "Business in Asia Scholarship",
    organization: "BlueSky Education Singapore",
    date: "Jul 2018",
    description: [
      "Awarded scholarship for study trip to Singapore",
      "Enhanced cross-cultural communication skills through international collaboration",
    ],
  },
  {
    title: 'Winner of "Tecnicamente" Award',
    organization: "Adecco",
    date: "May 2017",
    description: [
      "1st place among six competing teams",
      "Developed carrier system for automated painting plant in collaboration with Futura S.R.L.",
      "Gained hands-on experience in factory automation and mechanism design",
    ],
  },
];
