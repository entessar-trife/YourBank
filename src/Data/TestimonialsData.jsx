const storedValueTestimonialsData = localStorage.getItem('ValueTestimonialsData');
const TestimonialsData = storedValueTestimonialsData ? JSON.parse(storedValueTestimonialsData) : [
  {
    userName: "Sara T",
    opinion:
      "YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.",
  },
  {
    userName: "John D",
    opinion:
      "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.",
  },
  {
    userName: "Emily G",
    opinion:
      "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.",
  },
  {
    userName: "Alaa A",
    opinion:
      "I really appreciated how you kept me up to date on yourBank — it helped me coordinate with our stakeholders, and I’m excited to share that we’re on track to launch. I’m impressed with the services you’re introducing.",
  },
  {
    userName: "Joudy S",
    opinion:
      "The whole team is there to help. YourBank have gone above and beyond this week to make sure banking with (BN) is easy and hassle-free and this is consistent with how we’ve always been treated by everyone at this branch.",
  },
  {
    userName: "Ellin S",
    opinion:
      "This bank has an awesome team and a dedicated staff. I am very impressed by their vision, hard work, outstanding performance, and wonferful team-mates. Always welcoming and eager to help you.",
  },
  {
    userName: "Ameen F",
    opinion:
      "I’ve been with YourBank for a few years, and every single encounter w them has been exceptional despite my comparatively small-status among businesses they likely serve. Always welcoming and eager to help you.",
  },
  {
    userName: "Asmaa M",
    opinion:
      "The sweetest, most accommodating, professional, proficient bank in these United States. I have never encountered a bank that totally helps as well as understands their customers. Always welcoming and eager to help you.",
  },
  {
    userName: "Mustafa R",
    opinion:
      "Lovely bank, warm environment. I know some of the people working in this branch and they are very nice. Always welcoming and eager to help you. It feels they have a more personal relationship with their clients.",
  }
];

if (!storedValueTestimonialsData) {
  localStorage.setItem('ValueTestimonialsData', JSON.stringify(TestimonialsData));
}

export const StoredTestimonialsData = TestimonialsData;


const storedTestimonialsBusinessData = localStorage.getItem('TestimonialsBusinessData');
const BusinessData = storedTestimonialsBusinessData ? JSON.parse(storedTestimonialsBusinessData) : [
  {
    userName: "Sama Tell",
    opinion:
      "yourBank is What people want out of digitalization is this help to remove the grunt work and remove the data analysis and move straight into the mode of deciding on a course of action.",
  },
  {
    userName: "Syrian Telecom",
    opinion:
      "Instead of having multiple tools and applications that we go to for various results, we're able to consolidate that into a single application that beomes the go-to app for our experts.",
  },
  {
    userName: "Vodafone",
    opinion:
      "To be able to accelerate decision-making, to accelerate the ability to be predictive, is quintessential to any type of support that we do at yourBank into the defense industry.",
  },
  {
    userName: "Microsoft",
    opinion:
      "I don’t think a five out of five really encapsulates the work that they do. The work is top-notch. It’s what we ask for and more. They go the extra mile in terms of letting us know that whatever we need.",
  },
  {
    userName: "Focal X",
    opinion:
      "yourBank's ability to take a problem that has very little structure around it, build an ontology, and provide an end-to-end solution was pretty impressive. You have to bring quite a few different skill sets to the table.",
  },
  {
    userName: "Syrian Youth",
    opinion:
      "your Bank was always well prepared for our meetings, cognizant of the delivery schedule, communicative with us when there would be slippage. They also were forthright on the probabilistic nature of developing solutions to challenging problems.",
  },
  {
    userName: "MTN Syria",
    opinion:
      "We talked to 15-20 different companies. We chose to go with your Bank because they understood our problem better than other firms. your Bank is an expert in his occupation. He knows what he's doing and clearly understands this world.",
  },
  {
    userName: "Syriatel",
    opinion:
      "your bank most impressive characteristic is their passion for helping us solve our problems. They truly believe in what we’re trying to achieve — they’re excited about it. Their members see the value of our work and understand our vision.",
  },
  {
    userName: "AE Team",
    opinion:
      "YourBank is an expert in NLP and machine learning. His team gave us regular progress updates, milestones, and deliverables, and showed a high level of professionalism. I’m very happy with our partnership.",
  }
];

if (!storedTestimonialsBusinessData) {
  localStorage.setItem('TestimonialsBusinessData', JSON.stringify(BusinessData));
}

export const StoredTestimonialsBusinessData = BusinessData;