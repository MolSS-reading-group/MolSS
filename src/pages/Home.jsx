import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Mail, Youtube, CheckCircle2 } from 'lucide-react';
import SectionLayout from '../components/SectionLayout';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-glow"></div>
        <div className="container hero-container relative">
          {/* Badge Removed */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hero-title"
            style={{ display: 'flex', flexDirection: 'column', gap: '0' }}
          >
            <span>Machine Learning for</span>
            <span style={{ whiteSpace: 'nowrap' }}><span style={{ color: 'var(--accent-primary)' }}>Mol</span>ecule <span style={{ color: 'var(--accent-primary)' }}>S</span>imulations &amp; <span style={{ color: 'var(--accent-primary)' }}>S</span>ampler</span>
            <span>Reading Group</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="hero-subtitle text-muted mb-6"
          >
            We invite researchers working on probabilistic machine learning across a wide range of applications related to molecules to present their work and share their inspiring insights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="hero-cta mt-8"
          >
            <a href="https://join.slack.com/t/molss/shared_invite/zt-35u93vepd-H83ftzwBbPCYY31jHcnM8A" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Join our Slack
            </a>
            <a href="/schedule" className="btn btn-outline">
              View Schedule
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <SectionLayout className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">About <span className="text-gradient">MolSS</span></h2>
            <p className="text-secondary mt-4 mb-4">
              MolSS is a welcoming community focused on sharing knowledge and advancing research in ML for molecules. Each MolSS session is <strong>one hour</strong> long, consisting of a 30–50 minute presentation followed by a 10–30 minute discussion and Q&A.
            </p>
            <p className="text-secondary">
              We especially welcome <em>tutorial-style</em> talks in which the speaker shares topics they know deeply and are passionate about.
            </p>

            <ul className="feature-list mt-8">
              <li><CheckCircle2 className="text-gradient" size={20} /> Probabilistic inference, generative modeling, and sampling methods</li>
              <li><CheckCircle2 className="text-gradient" size={20} /> Applications to molecular science & scientific insights</li>
              <li><CheckCircle2 className="text-gradient" size={20} /> Open and collaborative discussions</li>
            </ul>
          </div>

          <div className="about-cards">
            <div className="glass-panel stat-card">
              <h3 className="stat-value text-gradient">Biweekly</h3>
              <p className="text-muted">Meetings</p>
            </div>
            <div className="glass-panel stat-card mt-4 translate-x">
              <h3 className="stat-value text-gradient">1 Hour</h3>
              <p className="text-muted">Per Session</p>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Community Section */}
      <SectionLayout className="container" delay={0.2}>
        <div className="text-center mb-12">
          <h2 className="section-title">Join the <span className="text-gradient">Community</span></h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto text-lg">Get involved, suggest speakers, or volunteer for a talk.</p>
        </div>

        <div className="community-grid">
          <a href="https://join.slack.com/t/molss/shared_invite/zt-35u93vepd-H83ftzwBbPCYY31jHcnM8A" target="_blank" rel="noopener noreferrer" className="glass-panel community-card">
            <div className="icon-badge bg-slack">
              <MessageCircle size={24} />
            </div>
            <h3>Slack Workspace</h3>
            <p className="text-muted">Keep updated, suggest someone, or discuss interested topics.</p>
          </a>

          <a href="mailto:molss.ml4molecule@gmail.com" className="glass-panel community-card">
            <div className="icon-badge bg-email">
              <Mail size={24} />
            </div>
            <h3>Email Us</h3>
            <p className="text-muted">Contact us for any questions or to volunteer for giving a talk!</p>
          </a>

          <a href="https://www.youtube.com/@molss.ml4molecule" target="_blank" rel="noopener noreferrer" className="glass-panel community-card">
            <div className="icon-badge bg-youtube">
              <Youtube size={24} />
            </div>
            <h3>YouTube</h3>
            <p className="text-muted">Subscribe to our channel for the latest recordings and past talks.</p>
          </a>
        </div>
      </SectionLayout>
    </div>
  );
}
