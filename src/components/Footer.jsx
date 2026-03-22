import React from 'react';
import { Mail, MessageCircle, Youtube } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer section">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="text-gradient">MolSS</h3>
            <p className="text-muted mt-2">Machine Learning for Molecule Simulations and Sampler Reading Group.</p>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Community</h4>
            <div className="social-links">
              <a href="https://join.slack.com/t/molss/shared_invite/zt-35u93vepd-H83ftzwBbPCYY31jHcnM8A" target="_blank" rel="noopener noreferrer" className="social-link">
                <MessageCircle size={20} />
                <span>Slack</span>
              </a>
              <a href="mailto:molss.ml4molecule@gmail.com" className="social-link">
                <Mail size={20} />
                <span>Email</span>
              </a>
              <a href="https://www.youtube.com/@molss.ml4molecule" target="_blank" rel="noopener noreferrer" className="social-link">
                <Youtube size={20} />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom mt-8">
          <p className="text-muted">© {new Date().getFullYear()} MolSS Reading Group. All rights reserved.</p>
          <p className="text-muted footnote">
            We acknowledge the support from <a href="https://jmhl.org">José Miguel Hernández-Lobato</a> and the <a href="https://www.genai.ac.uk">GenAI Hub</a>.
          </p>
          <p className="text-muted footnote" style={{ marginTop: '0.5rem', opacity: 0.8 }}>
            Website designed and engineered by <span style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>Violet Ai</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
