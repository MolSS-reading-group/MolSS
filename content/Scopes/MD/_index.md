Molecular Dynamics is a computational simulation method used to study the physical movements of atoms and molecules. MD numerically integrates Newton’s equations of motion for a system of interacting particles, allowing one to model the microscopic time evolution of physical systems in statistical mechanics and materials science.

MD is described by a Stochastic Partial Differential Equation involving the positions ($x\in\mathbf{R}^{N\times3}$) and velocities ($v\in\mathbf{R}^{N\times3}$) of a $N$-particle system:
$$dx=vdt,\quad dv=-\frac{1}{m}\nabla_x U(x)dt-\gamma v dt + $$