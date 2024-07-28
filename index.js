const express = require('express');
const cors = require('cors');

const app = express();

// Use CORS middleware
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/api/courses', (req, res) => {
    res.send([1,2,3]);
})

app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
})

app.get('/api/portfolio', (req, res) => {
    res.send({
        generalInfo: {
            name: 'MOHIT KUMAR',
            designation: 'SOFTWARE ENGINEER',
            mobileNumber: '7519350070',
            email: 'hellomohit98@gmail.com',
            location: 'Banglore, India',
            photo: '',
        },
        skills: [
            'javaScript', 'React', 'Redux', 'Html', 'css', 'nodeJs', 'Express'
        ],
        profileDescription: 'Energatic software engineer with 3+ years of rich experience in Full Stack end to end software development',
        experience: [
            {
                companyName: `Mindnerve's`,
                duration: {
                    startTime: 'july 2022',
                    endTime: 'current'
                }
            },
            {
                companyName: `CharanpahariApp`,
                duration: {
                    startTime: 'Jan 2021',
                    endTime: 'June 2022'
                }
            },
        ],
        education: {
            degreeType: 'BACHELOR IN COMPUTER APPLICATION',
            collegeName: 'Magadh University',
            duration: {
                startData: '2017',
                endData: '2020',
            },
            marks: '75%'
        },
        projects: [
            {
                name: "Benevolve",
                description: "Benevolve is a software as a service (SaaS) based insurance management system used by insurance companies to create and manage insurances.",
                keyPoints: [
                  "Worked as a key developer to initialize the project from the start.",
                  "Followed agile methodology.",
                  "Handled backend tasks to create and fix RestAPIs."
                ],
                timeSpent: "16 months"
              },
              {
                name: "Medibuddy",
                description: "Medibuddy is an application used by organizations and enterprises to manage its employees' collaborations, feedback, and appraisal.",
                keyPoints: [
                  "Worked as a key developer to initialize the project from the start.",
                  "Followed agile methodology.",
                  "Handled backend tasks to create and fix RestAPIs."
                ],
                timeSpent: "4 months"
              },
              {
                name: "CharanpahariApp",
                description: "Created reusable UI components and functionalities.",
                keyPoints: [
                  "Designed models.",
                  "Integrated new components.",
                  "Wrote scalable and maintainable code.",
                  "Built reusable components in React.",
                  "Gained good knowledge of the e-commerce domain.",
                  "Experienced in developing customer-facing UI components.",
                  "Built a dynamic website with Axios API (v2.2)."
                ],
                timeSpent: "18 months",
                url: "https://apps.shopify.com/smart-combo-generator"
              }
        ]
    })
})

// PORT
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`))