const caseStudies = [
    {
        title: 'Fresh Fields',
        description:'Enhancing the Digital Experience for a Local Farmers Market',
        imgSrc: 'fresh_fields_cover.png',
        pageBanner: 'fresh_fields_banner.png',
        slug: 'fresh-fields',
        role:'Lead Designer',
        project:'Freelance',
        timeline:'6 weeks',
        toolsUsed:'Figma, Notion, PS',
        overview:[
            {
                title:'Background',
                description:'Development and redesign of the digital platform for a local farmers market to increase vendor visibility, improve user engagement, and facilitate seamless online purchases.',
            },
            {
                title:'Problem Statement',
                description:'The existing website was outdated and not user-friendly, leading to low online engagement and poor vendor visibility. Customers had difficulty finding information about vendors, products, and events.'
            },
            {
                title:'Goals',
                description:'Create an engaging, user-friendly digital platform that highlights vendors, simplifies the shopping experience, and increases community engagement.'
            }
        ],
        research:{
            userResearch:{
                title:'User Research',
                description:'Conducted interviews and surveys with market visitors, vendors, and community members. Observed market interactions and analyzed website analytics.',
                painPoints:{
                    vendors:{
                        title:'Pain Points for Vendors at a Local Farmers Market',
                        items:[
                            {
                                title:'Limited Visibility',
                                issue:'Issue: Difficulty in attracting new customers and standing out among other vendors.',
                                impact:'Impact: Reduced sales and missed opportunities for customer engagement.'
                            },
                            {
                                title:'Inefficient Inventory Management',
                                issue:'Issue: Challenges in tracking stock levels, especially during busy market days. ',
                                impact:'Impact: Overstock or stockouts, leading to potential loss of sales and waste.'
                            },
                            {
                                title:'Lack of Payment Processing',
                                issue:'Issue: Limited options for accepting payments, often reliant on cash or outdated card readers.',
                                impact:'Impact: Slower transaction times and potential loss of sales from customers preferring digital payments.'
                            },
                        ]
                    },
                    buyers:{
                        title:'Pain Points for Buyers at a Local Farmers Market',
                        items:[
                            {
                                title:'Inconvenient Payment Options',
                                issue:'Issue: Limited payment options, often requiring cash only.',
                                impact:'Impact: Frustration and inconvenience, leading to missed purchases if buyers don’t have cash.'
                            },
                            {
                                title:'Lack of Information',
                                issue:'Issue: Difficulty finding detailed information about vendors and their products before visiting the market.',
                                impact:'Impact: Inability to plan purchases and missed opportunities to discover new vendors and products.'
                            },
                            {
                                title:'Crowded and Overwhelming Environment',
                                issue:'Issue: Busy market days can be overwhelming and hard to navigate.',
                                impact:'Impact: Stressful shopping experience and potential for missing out on desired products due to the crowds.'
                            },
                        ]
                    },
                },
            },
            userPersona:{
                title:'User Persona',
                description:'The user persona creation process involved gathering detailed user research to identify key demographics, behaviors, and pain points. We developed personas like Emma, a health-conscious mom seeking convenience, and Carlos, an organic farmer aiming for better market visibility.',
                vendorPersona:{
                    image:'vendor_persona.png',
                    name:'Carlos',
                    demographics:{
                        age:45,
                        occupation:'Organic Farmer',
                        location:'Suburban area, 30 miles'
                    },
                    goals:[
                        'To increase visibility and attract more customers.',
                        'To streamline sales and inventory management.',
                        'To build lasting relationships with regular customers.'
                    ],
                    painPoints:[
                        'Struggles with managing cash transactions and prefers a more efficient payment system.',
                        'Finds it hard to stand out among other vendors and attract new customers.',
                        'Needs a better way to manage inventory and avoid stockouts or overstocking.',
                        'Has limited time for marketing and promoting his products.'
                    ]
                },
                buyerPersona:{
                    image:'buyer_persona.png',
                    name:'Emma Johnson',
                    demographics:{
                        age:32,
                        occupation:'Marketing Manager',
                        location:'Urban area'
                    },
                    goals:[
                        'To find high-quality, fresh produce and products for her family.',
                        'To support local farmers and small businesses.',
                        'To make shopping trips efficient and enjoyable, especially with a young child.'
                    ],
                    painPoints:[
                        'Finds it difficult to navigate the crowded market with her child.',
                        'Limited information on vendors and products available before visiting.',
                        'Prefers digital payments but many vendors only accept cash.',
                        'Struggles with the market\'s limited operating hours conflicting with her schedule.'
                    ]
                },
            },
            summary:{
                title:'Summary',
                description:'These personas highlight the distinct needs and challenges of both buyers and vendors at a farmers market. By understanding and addressing these personas, the app can offer tailored features that enhance the overall market experience, improving convenience, efficiency, and engagement for both parties.'
            },

        },
        designConcept:[
            {
                title: 'Wireframes',
                description: 'The wireframing process began with structuring the app’s information architecture to ensure intuitive navigation, followed by creating low-fidelity wireframes for each screen focusing on usability. These wireframes outlined the layout of key sections such as Home, Market, Basket, and Account.',
                bannerSrc:'wireframes.png'
            },
            {
                title: 'Design System',
                description: 'The design system journey for the farmers market app began with user research to identify key needs and behaviors of buyers and vendors, followed by creating user personas and scenarios. We then developed a cohesive visual identity and a comprehensive component library, ensuring consistency and scalability.',
                bannerSrc:'design_system.png'
            },
            {
                title: 'Final Design',
                description: 'The final design phase involved creating high-fidelity mockups, incorporating the established visual identity and ensuring consistency across all screens. These designs were validated through user testing, then refined and handed off to developers for implementation.',
                bannerSrc:'final_design.png'
            },
        ],
        reflection:{
            title:'Reflection',
            takeaways:{
                title:'Takeaways',
                description:'These personas highlight the distinct needs and challenges of both buyers and vendors at a farmers market. By understanding and addressing these personas, the app can offer tailored features that enhance the overall market experience, improving convenience, efficiency, and engagement for both parties.'
            }
        }
    }
]

const otherProjects = [
    {
        title:'Sales Tracker - Mobile Design',
        imgSrc: 'sales-tracker-mobile.png',
        slug: 'sales-tracker-mobile-design',
    },
    {
        title:'Astro AI - Web Design',
        imgSrc: 'astro-ai-web.png',
        slug: 'astro-ai-web-design',
    },
    {
        title:'InCrypt - Legal and Tax Information Web App',
        imgSrc: 'incrypt-web.png',
        slug: 'incrypt-legal-and-tax-information-web-app',
    },
    {
        title:'Real Estate Website redesign',
        imgSrc: 'real-estate-web.png',
        slug: 'real-estate-website-redesign',
    },
    {
        title:'Shoe App',
        imgSrc: 'shoe-app.png',
        slug: 'shoe-app',
    },
    {
        title:'E-commerce Redesign',
        imgSrc: 'e-com-redesign.png',
        slug: 'e-commerce-redesign',
    },
    {
        title:'Zinema',
        imgSrc: 'zinema.png',
        slug: 'zinema',
    },
    {
        title:'Fitness App',
        imgSrc: 'fitness-app.png',
        slug: 'fitness-app',
    },
    {
        title:'Fitness App',
        imgSrc: 'fitness-app.png',
        slug: 'fitness-app',
    },
    {
        title:'Case Study Buddy Redesign',
        imgSrc: 'case-study-buddy-redesign.png',
        slug: 'case-study-buddy-redesign',
    },
    {
        title:'Korean Mart Logo',
        imgSrc: 'korean-mart-logo.png',
        slug: 'korean-mart-logo',
    }
]


const constants = {
    caseStudies,
    otherProjects
}

export default constants
