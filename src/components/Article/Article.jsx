import React, { useEffect, useState } from 'react';
import { Button, Space, Layout, Anchor } from 'antd';
import { motion, AnimatePresence } from 'framer-motion'

import { kebabize } from '../utils'
import "./Article.css"

export function Article({ history, location, match }) {
  const articles = [{
    title: 'Entry Renovation 2020',
    sections: [
      {
        heading: "Outline",
        content: [
          {
            type: 'text',
            value: (<>
              <p>
                My childhood home was due for an update. The pale yellow walls never really grew on me
                and the beige vinyl floor had been battered for 20 years. My grandparents were previously living there
                but left temporarily for Seattle to help my aunt raise her son. With the 2020 pandemic, they
                decided to stay instead of moving back.
              </p>
              <p>
                Stuck at home due to Covid with not much to do, my mum and I decided that it would be a great opportunity to
                do some renovating to the entryway and surprise my grandparents when they came back.
              </p>
              <p>
                This article breaks down the whole process into distinct phases, outlining what I did, learned, and
                mistakes I made. If you're planning to install new tile flooring, I hope this will be useful!
              </p>
            </>)
          }
        ]
      },
      {
        heading: "Planning and Design",
        content: [
          {
            type: 'text',
            value: (<>
              <p>
                {/* I hadn't previously done a renovation of this scale, so I did a fair bit of planning to earn my mom's trust.
                After binging Youtube how-to's from
                <a rel="noopener noreferrer" target="_blank"
                  href="https://www.youtube.com/homerenovisiondiy/membership"
                > Home Renovision</a> and
                <a rel="noopener noreferrer" target="_blank"
                  href="https://www.youtube.com/channel/UCWpu9UZ6aiRTaMuuV8-C0pQ"
                > Sal DiBlasi</a>, (I highly recommend watching some of their videos if you plan to lay tile), */}
                I got the entryway and powder room dimensions to make a rough floorplan using a tape measure,
                pen and paper. I then translated that floorplan into Fusion 360, where I made a 3D mockup of the room (Figure 1).
              </p>
            </>)
          },
          { type: 'image', src: "blah", label: 'Figure 1: 3D model' },
          {
            type: 'text',
            value: (<>
              <p>
                This rough model gave us an idea of the square footage and allowed us to visualize the possibilities
                for the space.
              </p>
              <p>
                After watching some Youtube videos, I learned that you generally need an "underlayment" between the tile and the structural
                floor. Most people recommended a product called Schluder Ditra. I'll explain more about it's purpose in
                the <a href="#decoupling-membrane-installation">corresponding section</a>.
              </p>
              <p>
                I also learned that certain floors aren't strong enough to support tiles. As I learned in my MTE 219 course, structural members
                will deform when loaded. The floor in a typical North American home consists of floor joists and a subfloor, both probably made
                from wood. The floor joists are essentially a beam with two fixed ends with a continuous load
              </p>
            </>)
          },
        ]
      },
      {
        heading: "Demolition",
        content: [
          {
            type: 'text',
            value: (<>
              <p>
                This rough model gave us an idea of the square footage and allowed us to visualize the possibilities
                for the space.
              </p>
            </>)
          },
          { type: 'image', src: "blah", label: 'blah' },
        ]
      },
      {
        heading: "Subfloor Prep",
        content: [
          { type: 'text', value: "blah" },
          { type: 'image', src: "blah", label: 'blah' },
        ]
      },
      {
        heading: "Decoupling Membrane Installation",
        content: [
          { type: 'text', value: "blah" },
          { type: 'image', src: "blah", label: 'blah' },
        ]
      },
      {
        heading: "Tile Cutting & Dry Lay",
        content: [
          { type: 'text', value: "blah" },
          { type: 'image', src: "blah", label: 'blah' },
        ]
      },

      {
        heading: "Tile Installation",
        content: [
          { type: 'text', value: "blah" },
          { type: 'image', src: "blah", label: 'blah' },
        ]
      },
      {
        heading: "Grouting",
        content: [
          { type: 'text', value: "blah" },
          { type: 'image', src: "blah", label: 'blah' },
        ]
      },
      {
        heading: "Baseboards",
        content: [
          { type: 'text', value: "blah" },
          { type: 'image', src: "blah", label: 'blah' },
        ]
      },
      {
        heading: "Paint",
        content: [
          { type: 'text', value: "blah" },
          { type: 'image', src: "blah", label: 'blah' },
        ]
      },
      {
        heading: "Toilet Installation",
        content: [
          { type: 'text', value: "blah" },
          { type: 'image', src: "blah", label: 'blah' },
        ]
      },
      {
        heading: "Vanity Installation",
        content: [
          { type: 'text', value: "blah" },
          { type: 'image', src: "blah", label: 'blah' },
        ]
      },
      {
        heading: "Light Fixtures",
        content: [
          { type: 'text', value: "blah" },
          { type: 'image', src: "blah", label: 'blah' },
        ]
      },
    ]

  }]

  const [article] = useState(articles[match.params.id])

  return (
    <div className='Article'>
      <motion.div className="left-col">
        <h2 className="bold">{article.title}</h2>
        <Anchor>
          {article?.sections?.map((section, i) => {
            return (
              <Anchor.Link key={i} href={`#${kebabize(section.heading)}`} title={section.heading} />
            )
          })}
        </Anchor>
      </motion.div>
      <motion.div className="right-col">
        {article?.sections?.map((section, i) => (
          <div key={i} className="section">
            <h1 id={`${kebabize(section.heading)}`}>{section.heading}</h1>
            {section.content.map((content, j) => {
              switch (content.type) {
                case 'image':
                  return (
                    <img
                      key={j}
                      alt={content.label}
                      style={{ width: content?.width || 200, borderRadius: 16 }}
                      src={content.src}
                    />
                  )

                default:
                  return <div key={j}>{content.value}</div>
              }
            })}
          </div>
        ))}
      </motion.div>

    </div>
  );
}
