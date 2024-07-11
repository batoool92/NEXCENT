import Logo from './../src/assets/Logo.svg'
import Nexcent from './../src/assets/Nexcent.svg'
import slideImg from './../src/assets/Illustration.png'
import companyIcon1 from './assets/CompanyIcon1.svg'
import companyIcon2 from './assets/CompanyIcon2.svg'
import companyIcon4 from './assets/CompanyIcon4.svg'
import companyIcon5 from './assets/CompanyIcon5.svg'
import companyIcon6 from './assets/CompanyIcon6.svg'
import companyIcon7 from './assets/CompanyIcon7.svg'
import MembershipIcon from './assets/MembershipIcon.svg'
import AssociationIcon from './assets/AssociationIcon.svg'
import ClubsIcon from './assets/ClubsIcon.svg'
import clubIcon2 from './assets/clubsIcon2.svg'
import memebersIcon from './assets/memebersIcon.svg'
import paymentIcon from './assets/paymentIcon.svg'
import eventBookingIcon from './assets/eventBookingIcon.svg'
import pana from './assets/pana.png'
import unseenImg from './assets/unseenImg.png'


export const data = [

    {
        "NavBarMenu": {
            "logo1": Logo,
            "logo2": Nexcent,
            "links": [
                {
                    "name": "Home",
                    "url": "/Home"
                },
                {
                    "name": "Features",
                    "url": "/Features"
                },
                {
                    "name": "Comunity",
                    "url": "/Comunity"
                },
                {
                    "name": "Blog",
                    "url": "/Blog"
                },
                {
                    "name": "Pricing",
                    "url": "/Pricing"
                }
            ]
        },
        "HeroSlides": [
            {
                "slideImg": slideImg,
                "slideTitle": "Lessons and insights from 8 years",
                "slideSmallTxt": "Where to grow your business as a photographer: site or social media?"
            },
            {
                "slideImg": slideImg,
                "slideTitle": "Lessons and insights from 8 years",
                "slideSmallTxt": "Where to grow your business as a photographer: site or social media?"
            },
            {
                "slideImg": slideImg,
                "slideTitle": "Lessons and insights from 8 years",
                "slideSmallTxt": "Where to grow your business as a photographer: site or social media?"
            }
        ],
        "OurClientsSection": {
            "title": "Our Clients",
            "smallText": "We have been working with some Fortune 500+ clients",
            "Companies": [
                {
                    "CompanyIcon": companyIcon1
                },
                {
                    "CompanyIcon": companyIcon2
                },
                {
                    "CompanyIcon": companyIcon5
                },
                {
                    "CompanyIcon": companyIcon4
                },
                {
                    "CompanyIcon": companyIcon5
                },
                {
                    "CompanyIcon": companyIcon6
                },
                {
                    "CompanyIcon": companyIcon7
                }
            ]
        },
        "ManageComunitySystem": {
            "title": "Manage your entire community in a single system",
            "smallText": "Who is Nextcent suitable for?",
            "SystemCard": [
                {
                    "cardIcon": MembershipIcon,
                    "cardTitle": "Membership Organisations",
                    "cardText": "Our membership management software provides full automation of membership renewals and payments"
                },
                {
                    "cardIcon": AssociationIcon,
                    "cardTitle": "National Associations",
                    "cardText": "Our membership management software provides full automation of membership renewals and payments"
                },
                {
                    "cardIcon": ClubsIcon,
                    "cardTitle": "Clubs And Groups",
                    "cardText": "Our membership management software provides full automation of membership renewals and payments"
                }
            ]
        },
        "AchievementsSection": {
            "title": "Helping a local business reinvent itself",
            "smallText": "We reached here with our hard work and dedication",
            "Achievment": {
                "members": {
                    "icon": memebersIcon,
                    "number": 2245341,
                },
                "clubs": {
                    "icon": clubIcon2,
                    "number": 46328
                },
                "eventBooking": {
                    "icon": eventBookingIcon,
                    "number": 828867
                },
                "payments": {
                    "icon": paymentIcon,
                    "number": 1926436
                }
            }
        },
        "middleSection": {
            "title": "How to design your site footer like we did",
            "details": "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.",
            "image": pana
        },
        "unseeSection": {
            "title": "The unseen of spending three years at Pixelgrade",
            "details": "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.",
            "image": unseenImg
        },
       
    }
]
