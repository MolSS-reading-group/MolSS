import React from 'react';
import { motion } from 'framer-motion';
import SectionLayout from '../components/SectionLayout';
import { ExternalLink, Users } from 'lucide-react';
import './People.css';

const PEOPLE = [
  {
    name: "Tony RuiKang OuYang",
    url: "https://tonyauyeung.github.io",
    affiliation: "University of Cambridge",
    role: "PhD student",
    image: "/people/tony.jpg"
  },
  {
    name: "Jiajun He",
    url: "https://jiajunhe98.github.io",
    affiliation: "University of Cambridge",
    role: "PhD student",
    image: "/people/jiajun.jpg"
  },
  {
    name: "Chen Lin",
    url: "https://scholar.google.com/citations?user=rObgGWIAAAAJ&hl=en",
    affiliation: "Isomorphic Labs",
    role: "Research Scientist",
    image: "/people/chen.jpg"
  },
  {
    name: "Weilong Chen",
    url: "https://www.epc.ed.tum.de/en/mfm/people/weilong-chen/",
    affiliation: "Technical University of Munich",
    role: "PhD student",
    image: "/people/weilong.jpg"
  },
  {
    name: "Rokas Elijošius",
    url: "https://scholar.google.co.uk/citations?user=qJzpNhoAAAAJ&hl=lt",
    affiliation: "University of Cambridge",
    role: "PhD student",
    image: "/people/rokas.jpg"
  },
  {
    name: "Krisztina Shinkovych",
    url: "https://scholar.google.com/citations?user=kEa6ubcAAAAJ&hl=en",
    affiliation: "University of Cambridge",
    role: "Visiting Researcher",
    image: "/people/krisztina.jpg"
  },
  {
    name: "Luran Wang",
    url: "https://www.linkedin.com/in/luran-wang-b45262254/?originalSubdomain=uk",
    affiliation: "Massachusetts Institute of Technology",
    role: "incoming PhD student",
    image: "/people/luran.jpg"
  }
];

export default function People() {
  return (
    <div className="people-page pg-topbar-offset">
      <SectionLayout className="container">
        <div className="text-center mb-12">
          <h1 className="hero-title text-gradient">Organizers</h1>
          <p className="text-muted mt-4 max-w-2xl mx-auto text-lg">
            Meet the team behind the MolSS reading group.
          </p>
        </div>

        <div className="people-grid">
          {PEOPLE.map((person, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-panel person-card"
            >
              <div className="person-image-wrapper">
                <img 
                  src={`${import.meta.env.BASE_URL}${person.image.replace(/^\//, '')}`} 
                  alt={person.name} 
                  className="person-img" 
                />
              </div>

              <div className="person-info">
                <h3 className="person-name">
                  <a href={person.url} target="_blank" rel="noopener noreferrer" className="hover-link">
                    {person.name}
                  </a>
                </h3>
                <p className="person-affiliation">{person.affiliation}</p>
                <p className="person-role text-accent">{person.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionLayout>
    </div>
  );
}
