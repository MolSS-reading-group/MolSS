import React from 'react';
import { motion } from 'framer-motion';
import SectionLayout from '../components/SectionLayout';
import { Calendar as CalendarIcon, Clock, User, ExternalLink } from 'lucide-react';
import './Schedule.css';

const TALKS = [
  {
    date: "June 3rd, 2025",
    time: "3pm GMT",
    speaker: "José Miguel Hernández-Lobato",
    affiliation: "University of Cambridge",
    link: "https://jmhl.org",
    note: "⚠️ This session will be starting from 3pm",
    title: "FEAT: Free energy Estimators with Adaptive Transport"
  },
  {
    date: "June 17th, 2025",
    time: "5pm GMT",
    speaker: "Gábor Csányi",
    affiliation: "University of Cambridge",
    link: "https://www.eng.cam.ac.uk/profiles/gc121",
    note: "⚠️ This session will be starting from 5pm",
    title: "Machine learning force fields shows extreme generalisation"
  },
  {
    date: "July 1st, 2025",
    time: "4pm GMT",
    speaker: "Grigory Bartosh",
    affiliation: "University of Amsterdam",
    link: "https://grigorybartosh.github.io",
    title: "SDE Matching: Scalable and Simulation-Free Training of Latent Stochastic Differential Equations"
  },
  {
    date: "Aug 19th, 2025",
    time: "4pm GMT",
    speaker: "Maximilian Stupp",
    affiliation: "Technical University of Munich",
    link: "https://www.linkedin.com/in/maximilian-stupp-2a320120a/?originalSubdomain=de",
    title: "Energy-Based Coarse-Graining in MolecularDynamics: A Flow-Based Framework Without Data"
  },
  {
    date: "Aug 26th, 2025",
    time: "4pm GMT",
    speaker: "Yuchen Zhu & Molei Tao",
    affiliation: "Georgia Institute of Technology",
    link: "https://yuchen-zhu-zyc.github.io/",
    title: "Beyond Euclidean data: Lie group and multimodal diffusion models"
  },
  {
    date: "Sep 9th, 2025",
    time: "4pm GMT",
    speaker: "Austin Cheng",
    affiliation: "University of Toronto",
    link: "https://www.cs.toronto.edu/~austin/",
    title: "Scalable Autoregressive 3D Molecule Generation"
  },
  {
    date: "Oct 7th, 2025",
    time: "4pm GMT",
    speaker: "Christopher Kolloff & Tobias Höppe",
    affiliation: "Chalmers University of Technology & TUM",
    link: "https://research.chalmers.se/en/person/kolloff",
    title: "Minimum Excess Work"
  },
  {
    date: "Oct 21st, 2025",
    time: "4pm GMT",
    speaker: "Michael Plainer",
    affiliation: "Freie Universität Berlin",
    link: "https://plainer.dev/",
    title: "Consistent Sampling and Simulation: Molecular Dynamics with Energy-Based Diffusion Models"
  },
  {
    date: "Nov 4th, 2025",
    time: "4pm GMT",
    speaker: "Zijing Ou",
    affiliation: "Imperial College London",
    link: "https://j-zin.github.io/",
    title: "Neural Flow Samplers"
  },
  {
    date: "Nov 18th, 2025",
    time: "5pm GMT",
    speaker: "Chaoran Cheng",
    affiliation: "University of Illinois Urbana-Champaign",
    link: "https://ccr-cheng.github.io/",
    title: "Riemannian Consistency Model"
  },
  {
    date: "Nov 25th, 2025",
    time: "4pm GMT",
    speaker: "Leon Klein",
    affiliation: "Freie Universität Berlin",
    link: "https://leonklein.github.io/",
    title: "Efficient Generation of Molecular Boltzmann Distributions with Normalizing Flows"
  },
  {
    date: "Jan 6th, 2026",
    time: "4pm GMT",
    speaker: "Yutong He",
    affiliation: "Carnegie Mellon University",
    link: "https://kellyyutonghe.github.io/",
    title: "F2D2: Joint Distillation for Fast Likelihood Evaluation and Sampling in Flow-based Models"
  },
  {
    date: "Feb 10th, 2026",
    time: "4pm GMT",
    speaker: "Juno Nam",
    affiliation: "MIT",
    link: "https://junonam.com/",
    title: "Enhancing Diffusion-Based Sampling with Molecular Collective Variables"
  },
  {
    date: "Feb 17th, 2026",
    time: "4pm GMT",
    speaker: "Miruna Cretu",
    affiliation: "University of Cambridge",
    link: "https://scholar.google.com/citations?user=KgA_dpsAAAAJ&hl=en",
    title: "Generative modelling for synthesizable small molecule design"
  },
  {
    date: "Mar 17th, 2026",
    time: "4pm GMT",
    speaker: "Denis Blessing",
    affiliation: "Karlsruhe Institute of Technology",
    link: "https://denisbless.github.io/",
    title: "Bridge Matching Sampler: Scalable Sampling via Generalized Fixed-Point Diffusion Matching"
  },
  {
    date: "Apr 7th, 2026",
    time: "4pm GMT",
    speaker: "Yu Xie",
    affiliation: "Microsoft Research",
    link: "https://yuxie.notion.site/Welcome-to-Yu-Xie-s-homepage-9e0a4ca2f0e14fafb04f7f2c2ed4fae7",
    title: "Enhanced Diffusion Sampling: Efficient Rare Event Sampling and Free Energy Calculation with Diffusion Models"
  }
];

export default function Schedule() {
  return (
    <div className="schedule-page pg-topbar-offset">
      <SectionLayout className="container">
        <div className="text-center mb-12">
          <h1 className="hero-title text-gradient">Coming Talks</h1>
          <p className="text-muted mt-4 max-w-2xl mx-auto text-lg">
            Every <strong>Tuesday</strong> starting from <strong>4pm GMT</strong>, unless otherwise noted.
          </p>
        </div>

        <div className="timeline-container">
          {[...TALKS].reverse().map((talk, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="timeline-item"
            >
              <div className="timeline-dot"></div>
              <div className="timeline-date">
                <span className="date-text">{talk.date.split(',')[0]}</span>
                <span className="year-text text-muted">, {talk.date.split(',')[1]}</span>
              </div>
              <div className="glass-panel timeline-card">
                <div className="card-header">
                  <h3 className="speaker-name">
                    <a href={talk.link} target="_blank" rel="noopener noreferrer" className="hover-link">
                      {talk.speaker}
                    </a>
                    {talk.title && `: ${talk.title}`}
                  </h3>
                  <div className="speaker-affiliation">
                    <span className="text-secondary">{talk.affiliation}</span>
                  </div>
                </div>

                <div className="card-meta mt-4">
                  <div className="meta-item">
                    <span>{talk.time}</span>
                  </div>
                  {talk.note && (
                    <div className="meta-item warning-text">
                      {talk.note}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionLayout>
    </div>
  );
}
