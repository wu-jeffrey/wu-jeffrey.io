import React, { useRef } from 'react';
import { Popover, Divider, Space, Button } from 'antd';
import { motion } from 'framer-motion'

import './Projects.css'


export function Projects() {
  const videoRef = useRef() // TODO: not working rn

  const projects = [
    {
      name: 'Kitchen Reno 2021',
      description: (
        <>
          <p>Currently in progress!</p>
        </>
      ),
      images: [
        { url: "/images/project-images/kitchen-reno/2.jpeg", width: 300 },
        { url: "/images/project-images/kitchen-reno/3.jpeg", width: 300 },
        { url: "/images/project-images/kitchen-reno/1.jpeg", width: 300 },
        { url: "/images/project-images/kitchen-reno/16.jpeg", width: 300 },
      ],
      actions: [<Button disabled shape="round" href="/articles/0">Article Coming Soon!</Button>,]
    },
    {
      name: 'Search Algorithm Visualizer',
      subtitle: '(Fall 2021 ECE 457A Assignment)',
      description: (
        <>
          <p>Search algorithm visualizer for DFS, BFS and A* I made for my ECE 457A clas using vanilla JS, HTML & CSS</p>
        </>
      ),
      images: [
        { url: "/images/project-images/ece457a.png", width: 600 },
      ],
      actions:
        [
          <Popover
            content={
              <video ref={videoRef} width="1418" height="870" controls>
                <source src="/videos/ece457a.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            }
            title="BFS Search Visualization" trigger="click" onVisibleChange={
              (visible) => {
                if (!visible) {
                  // videoRef.current.play() // Ref isn't working
                } else {
                  // videoRef.current.pause()
                }
              }
            }>
            <Button style={{ marginRight: 4 }} type="primary" shape="round">See Video</Button>
          </Popover>,
          <Button style={{ marginLeft: 4 }} target="_blank" type="secondary" shape="round"
            href="https://github.com/wu-jeffrey/ece457A"
          >
            See Github
          </Button>
        ]
    },
    {
      name: 'Polaris',
      subtitle: '(Winter 2021 MTE 380 Final Project)',
      description: (
        <>
          <p>An intuitive and low cost human-machine interface to help blind and visually impaired people navigate unfamiliar spaces quickly</p>
        </>
      ),
      images: [
        { url: "/images/project-images/polaris/1.png", width: 400 },
        { url: "/images/project-images/polaris/2.png", width: 400 },
      ],
      actions:
        [
          <Popover
            content={
              <iframe width="560" height="315" src="https://www.youtube.com/embed/3ttGRnKtWzQ"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen />
            }
            title="BFS Search Visualization" trigger="click" onVisibleChange={
              (visible) => {
                if (!visible) {
                  // videoRef.current.play() // Ref isn't working
                } else {
                  // videoRef.current.pause()
                }
              }
            }>
            <Button style={{ marginRight: 4 }} type="primary" shape="round">See Video</Button>
          </Popover>
        ]
    },
    {
      name: 'Foyer Reno 2020',
      description: (
        <>
          <p>I learned how to tile floors, install baseboards, wire light fixtures and switches, install toilets, plumb sink traps and more!</p>
          <p>There's a lot of clever engineering in our homes that we take for granted!</p>
        </>
      ),
      images: [
        { url: "/images/project-images/entry-reno/1.jpg", label: "before" },
        { url: "/images/project-images/entry-reno/2.jpg", label: "after" },

        { url: "/images/project-images/entry-reno/5.jpg", label: "before2" },
        { url: "/images/project-images/entry-reno/6.jpg", label: "after2" },
      ],
      actions: [<Button disabled shape="round" href="/articles/0">Article Coming Soon!</Button>,]
    },
    {
      name: 'Bolt',
      subtitle: '(Personal Project 2020)',
      description: (
        <>
          <p>I liked using the Nike Run Club App, but the annoucers kept stopping my music mid-run and it was ruining my experience...</p>
          <p>So I made a alternative clone using React Native and NodeJS!</p>
        </>
      ),
      images: [
        { url: "/images/project-images/bolt/login.svg", label: "login" },
        { url: "/images/project-images/bolt/main.svg", label: "main" },
      ]
    },
    {
      name: '3D printed glasses',
      subtitle: '(Emergency Project 2019)',
      description: (
        <>
          <p>I broke a leg on my glasses but didn't have time to wait for another pair... I had class to attend!</p>
          <p>After some measuring, 3D modelling, and lots of squinting, I was able to successfully retrofit my old lenses into the 3D printed frame.</p>
          <p>A full writeup of the challenges I faced is coming soon! (As soon as I build out an article feature on this website... 😅)</p>
        </>
      ),
      images: [
        { url: "/images/project-images/glasses/1.jpg", label: "glasses1" },
        { url: "/images/project-images/glasses/2.jpg", label: "glasses2" },
      ],
      actions: [<Button disabled shape="round" href="/articles/0">Article Coming Soon!</Button>,]
    },
    {
      name: 'Nutrition Tracker V2',
      subtitle: '(Personal Project 2019)',
      description: (
        <>
          <p>I previously made a nutrition tracker as a way to learn Rails</p>
          <p>V2 is an improved version with a Food Database Search API Built using React and Node.js</p>
        </>
      ),
      images: [
        { url: "/images/project-images/nutrition-v2.svg", label: "nutrition2", width: 600 },
      ],
      actions: [
        <Button target="_blank" type="primary" shape="round"
          href="https://github.com/wu-jeffrey/nutrition-tracker-2"
        >
          See Github
        </Button>
      ]
    },
    {
      name: 'Food Tic Tac Toe',
      subtitle: '(Coding Challenge 2019)',
      description: (
        <p>A quick Tic Tac Toe game put together for a coding challenge!</p>
      ),
      images: [
        { url: "/images/project-images/food-tic-tac-toe.svg", label: "tic-tac-toe", width: 600 },
      ],
      actions: [
        <Button target="_blank" type="primary" shape="round"
          href="https://github.com/wu-jeffrey/food-tic-tac-toe/"
        >
          See Github
        </Button>
      ]
    },
    {
      name: 'Nutrition Tracker V1',
      subtitle: '(Personal Project 2018)',
      description: (
        <>
          <p>I found existing nutrition trackers to paywall useful features and were otherwise bloated with unecessary ones</p>
          <p>I built this nutrition tracker to make it easy to </p>
        </>
      ),
      images: [
        { url: "/images/project-images/nutrition.svg", label: "nutrition", width: 600 },
      ],
      actions: [
        <Button target="_blank" type="primary" shape="round"
          href="https://github.com/wu-jeffrey/nutrition-tracker/"
        >
          See Github
        </Button>
      ]
    },
    {
      name: 'Project Ares',
      subtitle: '(Personal Project 2018)',
      description: (
        <>
          <p>Constantly moving due to Co-op meant I had to ditch my 'immobile' desktop PC.</p>
          <p>I dreamt up this small form factor PC case and modelled it using Fusion 360.</p>
          <p>I never ended up building it because after construction, I wouldn't have enough money for PC parts!
            <span role='img' aria-label="emoji"> 😅</span>
          </p>
          <p>It was designed to house a full sized GPU and mini-itx motherboard.</p>
          <p>I also made an option for passive cooling using heat fins built into the exterior of the case!</p>
        </>
      ),
      images: [
        { url: "/images/project-images/case.jpg", label: "sleight", width: 600 },
      ]
    },
    {
      name: 'Mouse Accuracy Practice Tool',
      subtitle: '(Personal Project 2017)',
      description: (
        <>
          <p>A tool to use before gaming to warmup your aim and reflexes!</p>
          <p>Built using Polymer, Firebase and D3.js to learn the tech stack for my coop at Unyte</p>
        </>
      ),
      images: [
        { url: "/images/project-images/sleight.svg", label: "sleight", width: 600 },
      ],
      actions: [
        <Button target="_blank" type="primary" shape="round"
          href="https://github.com/wu-jeffrey/sleight/"
        >
          See Github
        </Button>
      ]
    },
    {
      name: 'Lego Gimbal',
      subtitle: '(First Year Final Project 2017)',
      description: (
        <>
          <p>For my final project, my group built a 3-Axis smartphone camera stabilizer using Lego and programmed using C.</p>
          <p>
            A software PID controller we wrote in C was tuned using an equation for angular velocity in terms of the input value
            supplied to the Lego Mindstorms API. To find this function, a slow-motion video was taken of the motor spinning at several
            discrete input values and then analyzed frame-by-frame to find RPM and plotted to find an equation for velocity as a
            function of input-value.
          </p>
        </>
      ),
      images: [
        { url: "/images/project-images/gimbal.jpg", label: "gimbal", width: 600 },
      ],
      actions:
        [
          <Popover
            content={
              <video ref={videoRef} width="320" height="240" controls>
                <source src="/videos/gimbal.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            }
            title="Gimbal" trigger="click" onVisibleChange={
              (visible) => {
                if (!visible) {
                  // videoRef.current.play() // Ref isn't working
                } else {
                  // videoRef.current.pause()
                }
              }
            }>
            <Button type="primary" shape="round">See Video</Button>
          </Popover>
        ]
    },
  ]

  return (
    <div className='Projects'>
      <motion.h1 id="projects" className="bold white" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>Projects</motion.h1>
      <Space direction="vertical" align="center">
        {
          projects.map((project, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }}>
              <Space direction="vertical" style={{ marginBottom: 32 }} align="center">
                <h2 className="white">{project.name}</h2>
                {!!project.subtitle && <h4 className="white">{project.subtitle}</h4>}
                <br />
                <Space>
                  {project.images.map((img, i) => {
                    return (
                      <img key={i} alt={img.label} style={{ width: img?.width || 200, borderRadius: 16 }} src={img.url} />
                    )
                  })}
                </Space>
                <br />
                <div style={{ maxWidth: 350, textAlign: "center" }}>
                  {project?.description}
                  {project?.actions?.map(action => action)}
                </div>
              </Space>
              {(projects.length - 1 !== i) && <Divider style={{ borderTop: '1px solid white' }} />}
            </motion.div>
          ))
        }
      </Space>
    </div>
  );
}
