<span style="font-size:1.5em; font-weight:bold;">Sampling</span> is a fundamental problem in many scientific fields, such as statistical physics and molecular dynamics. We aim to draw independent samples given only access to an unnormalized density, $\pi(x)\propto \frac{e^{-U(x)}}{Z}$, where $Z$ is the intractable normalization constant (*a.k.a.* partition function). Commonly used methods include 
  - Markov Chain Monte Carlo (MCMC)
  - Sequential Monte Carlo (SMC)
  - Parallel Tempering (PT; *a.k.a.* Replica Exchange)

<span style="font-size:1.5em; font-weight:bold;">Neural Sampler</span> amortises traditional sampling methods by employing machine learning techniques.
