import React, { useState } from 'react';
import { motion } from 'framer-motion'

export function GeometricArt() {
  const [height, setHeight] = useState(400)
  const [width, setWidth] = useState(400)


  const generateDonuts =
    ['#3700B3', '#018786', '#FFDE03', 'rgb(24, 144,255)', '#FF0266'].map(
      (color) => {
        const randomX = Math.floor(Math.floor(Math.random() * (width - 100)) + 50)
        const randomY = Math.floor(Math.floor(Math.random() * (height - 100)) + 50)

        const t0 = Math.random() * 0.33;
        const t1 = t0 + Math.random() * 0.33;

        return (
          <motion.circle cx={randomX} cy={randomY} r="10" width="100%" height="100%" fill="none" stroke={color} key={color}
            animate={{
              strokeWidth: [0, 10, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              delay: Math.floor(Math.random() * 5),
              duration: 2,
              ease: "easeOut",
              times: [t0, t1, 1],
              loop: Infinity,
              repeatDelay: Math.floor(Math.random() * 5),
            }} />
        )
      }
    )

  const generateShootingStars =
    ['#3700B3', '#018786', '#FFDE03', 'rgb(24, 144,255)', '#FF0266'].map(
      (color, index) => {

        const slope = 1;
        // Length needs to be dynamic if we're doing resizing of the svg
        const length = 396;

        // generate random at the lower RHS, which is the 15% between 80-95% of L&W
        const p0 = {
          x: Math.floor(Math.random() * (width * 0.15)) + width * 0.8,
          y: Math.floor(Math.random() * (height * 0.15)) + height * 0.8
        }

        const dx =
          Math.sqrt(
            Math.pow(length, 2) / (1 + Math.pow(slope, 2))
          )

        const dy =
          Math.sqrt(
            Math.pow(length, 2) - Math.pow(dx, 2)
          )

        const p1 = {
          x: Math.floor(p0.x - dx),
          y: Math.floor(p0.y - dy)
        }

        return (
          <motion.path d={`M${p0.x} ${p0.y}, L${p1.x} ${p1.y}`} stroke={color} fill="none" strokeWidth="10" strokeLinecap="round" key={index}
            animate={{
              opacity: [0, 0.5, 1],
              // Dasharray specifies the [dashLength gapLength], we want the gapL to be huge cuz we want to see only one dash
              strokeDasharray: [`${length} 1000`, "30 1000"],
              // Dashoffset specifies the offset of the dash from the beginning of the path
              // we want start at -200 at the start or else it looks like the line is shrinking into a single point
              // we want end at length so that the whole dash gets pushed off the screen
              strokeDashoffset: [-200, length],
            }}
            transition={{
              duration: 1,
              ease: 'easeIn',
              loop: Infinity,
              delay: index + Math.random(),
              repeatDelay: index + Math.random(),
            }} />
        )
      }
    )

  return (
    <motion.div style={{ zIndex: -10, marginLeft: 0 }} initial={{ opacity: 0, rotate: 50 }} animate={{ opacity: 1, rotate: 0 }}>
      <motion.svg height={height} width={width}>
        <defs>
          {/* unused hatching pattern */}
          {/* <pattern id="diagonalHatch" width="10" height="10" patternTransform="rotate(20 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="10" style={{ stroke: 'rgb(24, 144,255)', strokeWidth: 10 }} />
          </pattern> */}
          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="10 10" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
            </feMerge>
          </filter>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "rgb(255,255,0)", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "rgb(255,0,0)", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <motion.g
          animate={{ translateY: [0, -20, 0], rotate: [3, -2, 3] }}
          transition={{
            duration: 5,
            ease: 'easeInOut',
            times: [0, 0.6, 1],
            loop: Infinity,
          }}>
          <motion.polygon points="60 50, 300 50, 180 300" fill="rgb(24, 144,255)" style={{ filter: 'url(#glow)' }} />
          <motion.polygon points="60 50, 300 50, 180 300" fill="rgb(24, 144,255)" />
        </motion.g>
        <motion.g
          animate={{
            translateY: [0, -70, 0],
            translateX: [0, -50, 0],
            rotate: [180, -160, 180],

          }}
          transition={{
            duration: 7,
            ease: 'easeInOut',
            loop: Infinity,
          }}>
          <motion.circle rotate="180" r="40" cx="120" cy="330" fill="url(#grad1)" style={{ filter: 'url(#glow)' }} />
          <motion.circle r="40" cx="120" cy="330" fill="url(#grad1)" />
        </motion.g>
        <motion.g
          animate={{ translateY: [0, -50, 0], rotate: [20, -20, 20] }}
          transition={{
            duration: 3,
            ease: 'easeInOut',
            loop: Infinity,
          }}>
          <motion.rect x="300" y="300" rx="10" width="60" height="60" fill="#00ffbf" style={{ filter: 'url(#glow)' }} />
          <motion.rect x="300" y="300" rx="10" width="60" height="60" fill="#00ffbf" />
        </motion.g>
        {generateShootingStars}
        <motion.g
          animate={{
            translateY: [0, 40, 0],
            rotate: [-3, 2, -3],
          }}
          transition={{
            duration: 6,
            ease: 'easeInOut',
            times: [0, 0.6, 1],
            loop: Infinity,
            repeatDelay: 0.25,
          }} >
          <motion.text x={"50"} y={"250"} rotate={-10} fill="grey" style={{ filter: 'url(#glow)', fontSize: 200, fontWeight: 'bold' }}>J</motion.text>
          <motion.text x={"50"} y={"250"} rotate={-10} fill="#EB4B4B" style={{ fontSize: 200, fontWeight: 'bold' }}>J</motion.text>
        </motion.g>
        <motion.g
          animate={{
            translateY: [0, 50, 0],
            rotate: [4, -8, 4],
          }}
          transition={{
            duration: 7,
            ease: 'easeInOut',
            times: [0, 0.4, 1],
            loop: Infinity,
            repeatDelay: 0.3,
          }} >
          <motion.text x={"220"} y={"250"} rotate={-10} fill="grey" style={{ filter: 'url(#glow)', fontSize: 200, fontWeight: 'bold' }}>W</motion.text>
          <motion.text x={"220"} y={"250"} rotate={-10} fill="#EB4B4B" style={{ fontSize: 200, fontWeight: 'bold' }}>W</motion.text>
        </motion.g>
        {generateDonuts}
      </motion.svg>
    </motion.div >
  )
}
