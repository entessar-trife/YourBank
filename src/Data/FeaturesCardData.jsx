import icon10 from "../assets/imgs/Home_icons/IconArrow.png"

const StoredFeaturesCardData = localStorage.getItem("FeaturesCardData");

let FeaturesCardData = StoredFeaturesCardData ? JSON.parse(StoredFeaturesCardData) : [
  {
    filter: "Online Banking",
    btn: [
      {
        title: "24/7 Account Access",
        img: icon10,
        content: "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease."
      },
      {
        title: "Mobile Banking App",
        img: icon10,
        content: "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet."
      },
      {
        title: "Secure Transactions",
        img: icon10,
        content: "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information."
      },
      {
        title: "Bill Pay and Transfers",
        img: icon10,
        content: "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks"
      }
    ]
  },
  {
    filter: "Financial Tools",
    btn: [
      {
        title: "Budgeting and Accounting Tools",
        img: icon10,
        content: "Financial tools such as budgeting and accounting software are vital for tracking and managing personal and business finances. These tools help individuals create detailed budgets, monitor their spending habits, and set savings goals."
      },
      {
        title: "Investment Tools",
        img: icon10,
        content: "Investment tools are essential for individuals and institutions looking to grow their wealth through various investment vehicles such as stocks, bonds, and real estate."
      },
      {
        title: "Risk Management Tools",
        img: icon10,
        content: "Risk management is a key aspect of financial planning, especially when dealing with investments, businesses, and personal wealth. Financial tools in this category help individuals and organizations assess and minimize potential risks."
      }
    ]
  },
  {
    filter: "Customer Support",
    btn: [
      {
        title: "The Importance of Customer Support",
        img: icon10,
        content: "Customer support plays a crucial role in maintaining strong relationships between businesses and their customers. It is often the first point of contact for resolving issues, answering questions, and ensuring a positive customer experience."
      },
      {
        title: "Channels of Customer Support",
        img: icon10,
        content: "There are several channels through which businesses provide customer support, each catering to different customer preferences. Traditional methods, such as phone support and in-person assistance, remain popular for their personal touch and immediate solutions."
      },
      {
        title: "The Role of Technology in Customer Support",
        img: icon10,
        content: "Advancements in technology have revolutionized the way customer support is delivered. Automation tools, like chatbots and AI-driven virtual assistants, are increasingly used to handle routine inquiries, allowing customer service teams to focus on more complex issues."
      },
      {
        title: "Building a Strong Customer Support Team",
        img: icon10,
        content: "A well-trained, empathetic customer support team is essential for delivering high-quality service. The best customer support agents are not only knowledgeable about the products or services they represent but also possess strong communication skills and a genuine desire to help."
      }
    ]
  }
]

if (!StoredFeaturesCardData) {
  localStorage.setItem("FeaturesCardData", JSON.stringify(FeaturesCardData));
}

export const exportedFeaturesCardData = FeaturesCardData;