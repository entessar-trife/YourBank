import icon1 from './../assets/imgs/security_icons/Union(1).png'
import icon2 from './../assets/imgs/security_icons/Union.png'
import icon3 from './../assets/imgs/security_icons/Icon.png'
import icon4 from './../assets/imgs/security_icons/Subtract.png'

const storedHowWeProtectDATA = localStorage.getItem('HowWeProtectDATA');

let HowWeProtectDATA = storedHowWeProtectDATA ? JSON.parse(storedHowWeProtectDATA) : [
    {
        icon:icon1,
        title:'Secure Online Banking Platform',
        desc:'Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.'
    },
    {
        icon:icon2,
        title:'Multi-Factor Authentication',
        desc:'To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.'
    },
    {
        icon:icon3,
        title:'Fraud Monitoring',
        desc:'We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.'
    },
    {
        icon:icon4,
        title:'Secure Mobile Banking',
        desc:'Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.'
    }
];

if(!storedHowWeProtectDATA){
    localStorage.setItem('HowWeProtectDATA' , JSON.stringify(HowWeProtectDATA))
}
export const exportedHowWeProtectData = HowWeProtectDATA;