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
        overview:{
            background:{
                title:'Background',
                description:'Development and redesign of the digital platform for a local farmers market to increase vendor visibility, improve user engagement, and facilitate seamless online purchases.',
            },
            problemStatement:{
                title:'Problem Statement',
                description:'The existing website was outdated and not user-friendly, leading to low online engagement and poor vendor visibility. Customers had difficulty finding information about vendors, products, and events.'
            },
            goals:{
                title:'Goals',
                description:'Create an engaging, user-friendly digital platform that highlights vendors, simplifies the shopping experience, and increases community engagement.'
            }
        },
        research:{
            userResearch:{
                title:'User Research',
                description:'Conducted interviews and surveys with market visitors, vendors, and community members. Observed market interactions and analyzed website analytics.',
                painPoints:{
                    verndors:{
                        title:'Pain Points for Vendors at a Local Farmers Market',
                        items:[
                            {
                                title:'Low online engagement',
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
                        title:'Pain Points for Vendors at a Local Farmers Market',
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
        designConcept:{
            wireframes:{
                title: 'Wireframes',
                description: 'The wireframing process began with structuring the app’s information architecture to ensure intuitive navigation, followed by creating low-fidelity wireframes for each screen focusing on usability. These wireframes outlined the layout of key sections such as Home, Market, Basket, and Account.',
            },
            designSystem:{
                title: 'Design System',
                description: 'The design system journey for the farmers market app began with user research to identify key needs and behaviors of buyers and vendors, followed by creating user personas and scenarios. We then developed a cohesive visual identity and a comprehensive component library, ensuring consistency and scalability.',
            },
            finalDesign:{
                title: 'Final Design',
                description: 'The final design phase involved creating high-fidelity mockups, incorporating the established visual identity and ensuring consistency across all screens. These designs were validated through user testing, then refined and handed off to developers for implementation.',
            },
        },
        reflection:{
            title:'Reflection',
            takeaways:{
                title:'Takeaways',
                description:'Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. '
            }
        }
    }
]


const constants = {
    caseStudies
}

export default constants