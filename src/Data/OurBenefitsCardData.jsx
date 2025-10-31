import icon1 from './../assets/imgs/careers_icons/Icon.png'
import icon2 from './../assets/imgs/careers_icons/Vector.png'
import icon3 from './../assets/imgs/careers_icons/Icon2.png'
import icon4 from './../assets/imgs/careers_icons/Icon1.png'

const storedOurBenefitsCardData = localStorage.getItem('OurBenefitsCardData');

let OurBenefitsCardData = storedOurBenefitsCardData ? JSON.parse(storedOurBenefitsCardData) : [
    {
        icon:icon1,
        title:'Competitive Compensation',
        desc:'We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.'
    },
    {
        icon:icon2,
        title:'Health and Wellness',
        desc:'We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.'
    },
    {
        icon:icon3,
        title:'Retirement Planning',
        desc:'YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.'
    },
    {
        icon:icon4,
        title:'Work-Life Balance',
        desc:'We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.'
    }
];

if(!storedOurBenefitsCardData){
    localStorage.setItem('OurBenefitsCardData' , JSON.stringify(OurBenefitsCardData))
}
export const exportedData = OurBenefitsCardData;