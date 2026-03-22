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
    note: "⚠️ This session will be starting from 3pm"
  },
  {
    date: "June 17th, 2025",
    time: "5pm GMT",
    speaker: "Gábor Csányi",
    affiliation: "University of Cambridge",
    link: "https://www.eng.cam.ac.uk/profiles/gc121",
    note: "⚠️ This session will be starting from 5pm"
  },
  {
    date: "July 1st, 2025",
    time: "4pm GMT",
    speaker: "Grigory Bartosh",
    affiliation: "University of Amsterdam",
    link: "https://grigorybartosh.github.io"
  },
  {
    date: "Aug 19th, 2025",
    time: "4pm GMT",
    speaker: "Maximilian Stupp",
    affiliation: "Technical University of Munich",
    link: "https://www.linkedin.com/in/maximilian-stupp-2a320120a/?originalSubdomain=de"
  },
  {
    date: "Aug 26th, 2025",
    time: "4pm GMT",
    speaker: "Yuchen Zhu & Molei Tao",
    affiliation: "Georgia Institute of Technology",
    link: "https://yuchen-zhu-zyc.github.io/"
  },
  {
    date: "Sep 9th, 2025",
    time: "4pm GMT",
    speaker: "Austin Cheng",
    affiliation: "University of Toronto",
    link: "https://www.cs.toronto.edu/~austin/"
  },
  {
    date: "Oct 7th, 2025",
    time: "4pm GMT",
    speaker: "Christopher Kolloff & Tobias Höppe",
    affiliation: "Chalmers University of Technology & TUM",
    link: "https://research.chalmers.se/en/person/kolloff"
  },
  {
    date: "Oct 7th, 2025",
    time: "4pm GMT",
    speaker: "Michael Plainer",
    affiliation: "Freie Universität Berlin",
    link: "https://plainer.dev/"
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
