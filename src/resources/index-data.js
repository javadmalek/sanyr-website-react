export default {
    header: {
        menus: [
            {title: 'Home', link: '#HOME'},
            {title: 'Services', link: '#SERVICE'},
            {title: 'How We Work', link: '#HOW'},
            {title: 'Team', link: '#TEAM'},
            {title: 'Blog', link: '#BLOG'},
            {title: 'Mak an Appointment', link: '#CONSULT'}
        ]
    },
    home: {
        items: [
            {
                index: 'rs-1',
                classid: 'slide-1-layer-2',
                image: './images/sanyr-slider1.jpg',
                title: 'We build Software products for Humans.',
                subtitle: 'SanyR helps your company create a\n competitive advantage with high-quality software delivered on demand.'
            },
            {
                index: 'rs-2',
                classid: 'slide-2-layer-2',
                image: './images/sanyr-slider2.jpg',
                title: 'We guide you across your journey to Industry 4.0.',
                subtitle: 'SanyR experts pave the way for your\n industry to transform into a digital factory!'
            },
            {
                index: 'rs-3',
                classid: 'slide-3-layer-2',
                image: './images/sanyr-slider3.jpg',
                title: 'Artificial Intelligence Powered all Industries.',
                subtitle: 'We help you discover Capabilities,\n' +
                'Recognize Patterns, Build and Validate your Learning model Implement and Deploy\n' +
                'your AI applications.'
            }
        ]
    },
    services: [
        {
            icon: 'fa fa-laptop',
            title: 'Software Solutions',
            description: 'Either you are investing in new software solutions or creating better integration between ' +
            'existing ones. Our dedicated experts in software development will work next to you to ' +
            'ensure the use of best-fit software solutions to meet your customers’ business needs.'
        },
        {
            icon: 'fa fa-cubes',
            title: 'Artificial Intelligence',
            description: 'AI’s impact on industries is similar to electricity’s impact on humankind. At SanyR, we\n' +
            'are zealously committed to combining our domain knowledge with specialized technical\n' +
            'skills to provide high-impact artificial intelligence applications, wowing customers\n' +
            'with their added value.'
        },
        {
            icon: 'fa fa-industry',
            title: 'Industry 4.0',
            description: 'Digitization of the factory is badly disruptive, changing all aspects of your industry.' +
            'Its impact ranges from smart manufacturing and lean production to industrial automation. ' +
            ' To go to bat for Industry 4.0 implementation, our experts will work closely with you.'
        },
    ],
    how: {
        leftCard: {
            title: 'How we work at SanyR',
            p1: 'Our methodology is inspired by Agile product Development, The Lean Startup, Customer collaboration, Continuous attention to technical excellence and good design.',
            p2: 'Using our unique process (The PPIV Method), we will gather product requirements and test the concepts, prototype, develop and check if product fulfills its intended purpose.'
        },
        rightCardSteps: [
            {
                className: 'expert-right-single-content e-r-s-padding-btm e-r-s-right-padding',
                icon: 'far fa-lightbulb fa-2x',
                title: 'Product Requirement Specifications',
                description: 'By PRS document we would have a description of the product and extracting all its the functional and non-functional requirements.'
            },
            {
                className: 'expert-right-single-content e-r-s-padding-btm e-r-s-border e-r-s-left-padding',
                icon: 'fab fa-product-hunt fa-2x',
                title: 'Product Design',
                description: 'Here we follow three objectives understanding the current model, designing desire architecture and deploying an MVP.'
            },
            {
                className: 'expert-right-single-content e-r-s-padding e-r-s-right-padding',
                icon: 'fas fa-cogs fa-2x',
                title: 'Implementation',
                description: 'Starting to develop the product based on the desire design and specified technologies. Using Agile methodologies for production development.'
            },
            {
                className: 'expert-right-single-content e-r-s-padding e-r-s-left-padding e-r-s-border',
                icon: 'far fa-check-square fa-2x',
                title: 'Verification and Delivery',
                description: 'Before moving to the Deliver phase, the Process Verification and the Design Verification Test performed on pre-production or production units.'
            },
        ]
    },
    team_members: [
        {
            name: 'Javad Malek Shahkoohi',
            description: ' In my role as software architecture and full stack-developer along past' +
            'decade, I have developed many practical tools including Web&Desktop and' +
            'Android applications. Also, interested in machine learning. ',
            image: './images/javad-malek-shahkoohi.png',
            socials: [
                {media: 'linkedin', link: 'https://www.linkedin.com/in/javadmalek'},
                {media: 'github', link: 'https://github.com/javadmalek'},
                {media: 'twitter', link: 'https://twitter.com/shahkoohi'}
            ],
            skills: [
                {title: 'Artificial Intelligence'},
                {title: 'System Architecture'},
                {title: 'FullStack Developer'},
                {title: 'Mobile Application Developer'},
            ]
        },
        {
            name: 'Ebrahim Kargar',
            description: 'Hi, I\'m Ebrahim, Product Manager & Software Engineer with intense passion ' +
            'on building tech products meeting people\'s needs, desires, and wishes, in ' +
            'the first place I\'m an Infinite learner and lover of life.',
            image: './images/ebrahim-kargar.png',
            socials: [
                {media: 'linkedin', link: 'https://www.linkedin.com/in/ebrahimkargar'},
                {media: 'github', link: 'https://github.com/ebikargar'},
                {media: 'twitter', link: 'https://twitter.com/Homaion'}
            ],
            skills: [
                {title: 'Product Manager'},
                {title: 'Software Engineer'},
                {title: 'Software Quality Assurance'},
                {title: 'Product Marketing'},
            ]
        },
        {
            name: 'Mohammad Ghazivakili',
            description: 'I am Mechatronic Engineer and spent more than decade work with Oil&Gas ' +
            'Companies, I work in digitalization of the factory in recent years to give ' +
            'chance to the SMEs to reduce their production cost.',
            image: './images/mohammad-ghazi-vakili.png',
            socials: [
                {media: 'linkedin', link: 'https://www.linkedin.com/in/mghazivakili'},
                {media: 'github', link: 'https://github.com/ghazivakili'}
            ],
            skills: [
                {title: 'Digital Factory(Industry 4.0)'},
                {title: 'Industrial Automation'},
                {title: 'Industrial IOT'},
                {title: 'PLC programming'}
            ]
        }
    ],
    testimonials: [
        {
            company: '',
            position: 'Business Director',
            name: 'Mosio Khalili',
            message: 'My work has been greatly helped by the excellent work from Experts team, their advice and ' +
            'support has been first class. I can’t thank them enough for the awesome progress they achieved.'
        },
        {
            company: 'IEBC',
            position: 'CEO',
            name: 'Poshtkoohi',
            message: 'My work has been greatly helped by the excellent work from Experts team, their advice and ' +
            'support has been first class. I can’t thank them enough for the awesome progress they achieved.'
        },
        {
            company: '',
            position: 'CEO',
            name: 'Atin Hejrani',
            message: 'My work has been greatly helped by the excellent work from Experts team, their advice and ' +
            'support has been first class. I can’t thank them enough for the awesome progress they achieved.'
        }
    ],
    blogs: [
        {
            image: './images/sanyr-artificial-intelligence.jpg',
            date: 'Dec 19, 2017',
            category: 'Machine Learning',
            title: 'Main challenges of Machine Learning',
            description: '"Bad algorithm" and "Bad data" would fail the model. When there exist the insufficient quantity of sampling data for training or using poor quantity of data. These means that you\'re applying bad data.Also, when overfitting/underfitting happens, you need to care about the extracted features to achieve a balance between them.'
        },
        {
            image: './images/sanyr-industry-4.0.jpg',
            date: 'Nov 20, 2017',
            category: 'Industry 4.0',
            title: 'Cloud vs Fog computing in Industry 4.0',
            description: 'In recent years Internet of things technology brought lots of benefit to our industries. Data gathering and remote control are one of the key value of the industrial internet of things. Although, The concept of the industry 4.0 radically changed the Industrial Automation field.'
        },
        {
            image: './images/sanyr-software-solutions.jpg',
            date: 'Feb 22, 2017',
            category: 'Software Solutions',
            title: 'Quality Assurance of software products',
            description: 'The weather has taken a turn for the worse and January pay day still seems far away. But you don’t have to venture outdoors or spend any money today. Sit back, relax and catch up...'
        }
    ]
}