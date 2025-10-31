const storedFAQcardData = localStorage.getItem('FAQCardData');

let FAQCardData = storedFAQcardData
  ? JSON.parse(storedFAQcardData)
  : [
    {
      Question: "How do I open an account with YourBank?",
      Answer:
        'Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.',
    },
    {
      Question: "What documents do I need to provide to apply for a loan?",
      Answer:
        "The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.",
    },
    {
      Question: "How can I access my accounts online?",
      Answer:
        'Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven\'t registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.',
    },
    {
      Question: "Are my transactions and personal information secure?",
      Answer:
        "At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.",
    },
    {
      Question: "How do I open an account with YourBank?",
      Answer:
        'Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.',
    },
    {
      Question: "What documents do I need to provide to apply for a loan?",
      Answer:
        "The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.",
    },
    {
      Question: "How can I access my accounts online?",
      Answer:
        'Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven\'t registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.',
    },
    {
      Question: "Are my transactions and personal information secure?",
      Answer:
        "At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.",
    },
  ];

if (!storedFAQcardData) {
  localStorage.setItem("FAQCardData", JSON.stringify(FAQCardData));
}
export const exportedFAQCardData = FAQCardData;
