window.LBANK = window.LBANK || [];
window.LBANK.push(
{ id:'LA04-21', ch:4, type:'计算', diff:5, tags:'参数讨论 解的判定 秩',
  q: String.raw`讨论 \(a\) 取何值时线性方程组
\[
\begin{cases}
x_1+2x_2+3x_3=1,\\
2x_1+4x_2+ax_3=2,\\
3x_1+6x_2+9x_3=a
\end{cases}
\]
有解，并在有解时求出全部解。`,
  a: String.raw`仅当 \(a=3\) 时有解，通解为 \(x=(1-2t,t,0)^T,\ t\in\mathbb R\)。`,
  sol: String.raw`对增广矩阵作行变换：第二行减去第一行的 \(2\) 倍，得 \((0,0,a-6\mid0)\)；第三行减去第一行的 \(3\) 倍，得 \((0,0,0\mid a-3)\)。于是当 \(a\neq3\) 时最后一行给出 \(0=a-3\)，方程组无解。当 \(a=3\) 时，第二行化为 \((0,0,-3\mid0)\)，故 \(x_3=0\)，第一行化为 \(x_1+2x_2=1\)。令 \(x_2=t\)，得 \(x_1=1-2t\)，即通解 \((1-2t,t,0)^T\)。此时 \(r(A)=r(A\mid b)=2<3\)，确有无穷多解。` },
{ id:'LA04-22', ch:4, type:'计算', diff:5, tags:'含参数 对称方程组 解的判定',
  q: String.raw`讨论 \(\lambda\) 取何值时线性方程组
\[
\begin{cases}
\lambda x_1+x_2+x_3=1,\\
x_1+\lambda x_2+x_3=\lambda,\\
x_1+x_2+\lambda x_3=\lambda^2
\end{cases}
\]
有唯一解、无穷多解或无解，并在有解时求出解。`,
  a: String.raw`\(\lambda\neq1,-2\) 时唯一解 \(x=\left(-\frac{\lambda+1}{\lambda+2},\frac1{\lambda+2},\frac{(\lambda+1)^2}{\lambda+2}\right)^T\)；\(\lambda=1\) 时无穷多解 \((1-s-t,s,t)^T\)；\(\lambda=-2\) 时无解。`,
  sol: String.raw`系数行列式 \(|A|=(\lambda-1)^2(\lambda+2)\)。当 \(\lambda\neq1,-2\) 时 \(|A|\neq0\)，方程组有唯一解。将三式相加得 \((\lambda+2)(x_1+x_2+x_3)=\lambda^2+\lambda+1\)，记 \(S=\frac{\lambda^2+\lambda+1}{\lambda+2}\)。由第一式得 \((\lambda-1)x_1=1-S\)，故 \(x_1=-\frac{\lambda+1}{\lambda+2}\)；由第二式得 \(x_2=\frac{\lambda-S}{\lambda-1}=\frac1{\lambda+2}\)；由第三式得 \(x_3=\frac{\lambda^2-S}{\lambda-1}=\frac{(\lambda+1)^2}{\lambda+2}\)。当 \(\lambda=1\) 时三行相同，方程即 \(x_1+x_2+x_3=1\)，通解为 \((1-s-t,s,t)^T\)。当 \(\lambda=-2\) 时三行之和为零向量，而右端之和为 \(1-2+4=3\neq0\)，故无解。` },
{ id:'LA04-23', ch:4, type:'计算', diff:5, tags:'含参数 行列式 通解',
  q: String.raw`讨论 \(a\) 取何值时线性方程组
\[
\begin{cases}
x_1+x_2+ax_3=1,\\
x_1+ax_2+x_3=1,\\
ax_1+x_2+x_3=a^2
\end{cases}
\]
有唯一解、无穷多解或无解，并在有解时求出解。`,
  a: String.raw`\(a\neq1,-2\) 时唯一解 \(x=\left(\frac{a^2+2a+2}{a+2},-\frac a{a+2},-\frac a{a+2}\right)^T\)；\(a=1\) 时无穷多解 \((1-s-t,s,t)^T\)；\(a=-2\) 时无解。`,
  sol: String.raw`系数行列式 \(|A|=-(a-1)^2(a+2)\)。当 \(a\neq1,-2\) 时 \(|A|\neq0\)，方程组有唯一解，直接用行化简得
\[
x_1=\frac{a^2+2a+2}{a+2},\qquad x_2=x_3=-\frac a{a+2}.
\]
当 \(a=1\) 时三行均为 \((1,1,1)\)，右端均为 \(1\)，方程即 \(x_1+x_2+x_3=1\)，通解为 \((1-s-t,s,t)^T\)。当 \(a=-2\) 时，三行之和为零向量，而右端之和为 \(1+1+4=6\neq0\)，故 \(r(A)=2<r(A\mid b)=3\)，方程组无解。` },
{ id:'LA04-24', ch:4, type:'计算', diff:5, tags:'齐次方程组 基础解系 含参数',
  q: String.raw`设齐次线性方程组
\[
\begin{cases}
x_1+2x_2+3x_3+4x_4=0,\\
2x_1+3x_2+4x_3+5x_4=0,\\
3x_1+4x_2+5x_3+6x_4=0,\\
4x_1+5x_2+6x_3+ax_4=0.
\end{cases}
\]
讨论 \(a\) 取何值时它有非零解，并在有非零解时求其基础解系。`,
  a: String.raw`对任意 \(a\) 都有非零解。当 \(a\neq7\) 时基础解系为 \((1,-2,1,0)^T\)；当 \(a=7\) 时基础解系为 \((1,-2,1,0)^T,(2,-3,0,1)^T\)。`,
  sol: String.raw`第三行等于第一、二行之和？直接计算：第三行减去第二行得 \((1,1,1,1)\)，第二行减去第一行也得 \((1,1,1,1)\)，故第三行等于 \(2\) 倍第二行减第一行，前三行秩为 \(2\)。第四行减去第三行得 \((1,1,1,a-6)\)，与 \((1,1,1,1)\) 比较可知当 \(a=7\) 时第四行也落入前三行的行空间，当 \(a\neq7\) 时秩增加 \(1\)。由第一、二行相减得 \(x_1+x_2+x_3+x_4=0\)，再由第一行得 \(x_2+2x_3+3x_4=0\)，解得 \(x_2=-2x_3-3x_4,\ x_1=x_3+2x_4\)。当 \(a\neq7\) 时第四行给出 \((a-7)x_4=0\)，故 \(x_4=0\)，令 \(x_3=1\) 得 \((1,-2,1,0)^T\)。当 \(a=7\) 时 \(x_3,x_4\) 都自由，分别取 \((1,0),(0,1)\) 得 \((1,-2,1,0)^T,(2,-3,0,1)^T\)。` },
{ id:'LA04-25', ch:4, type:'计算', diff:5, tags:'含参数 有解条件 通解',
  q: String.raw`讨论 \(a,b\) 满足什么条件时线性方程组
\[
\begin{cases}
x_1+x_2+x_3+x_4=1,\\
x_1+2x_2+3x_3+4x_4=2,\\
x_1+3x_2+5x_3+7x_4=3,\\
x_1+4x_2+7x_3+ax_4=b
\end{cases}
\]
有解，并在有解时求通解。`,
  a: String.raw`当 \(a\neq10\) 时对任意 \(b\) 都有解，通解为 \(x=\left(s+\frac{2(b-4)}{a-10},\,1-2s-\frac{3(b-4)}{a-10},\,s,\,\frac{b-4}{a-10}\right)^T\)；当 \(a=10\) 时仅当 \(b=4\) 有解，通解为 \((s+2t,1-2s-3t,s,t)^T\)；当 \(a=10,b\neq4\) 时无解。`,
  sol: String.raw`前三行满足第三行等于 \(2\) 倍第二行减第一行，前三行秩为 \(2\)，右端也满足 \(3=2\cdot2-1\)，故前三式相容。第四行减去第三行得 \((1,1,1,a-6)\)，而 \((1,1,1,1)\) 是第二行与第一行之差，于是第四式可写成 \(3\cdot(\text{第二式})-2\cdot(\text{第一式})+(a-10)x_4=b\)，即 \(4+(a-10)x_4=b\)。当 \(a\neq10\) 时 \(x_4=\frac{b-4}{a-10}\)，再由前两式得 \(x_2+2x_3+3x_4=1\)、\(x_1=x_3+2x_4\)，令 \(x_3=s\) 得通解。当 \(a=10\) 时必须有 \(b=4\)；此时第四式不再提供约束，\(x_3,x_4\) 均自由，通解为 \((s+2t,1-2s-3t,s,t)^T\)。若 \(a=10,b\neq4\)，则 \(0=b-4\neq0\)，无解。` },
{ id:'LA04-26', ch:4, type:'计算', diff:4, tags:'范德蒙德行列式 含参数 解的判定',
  q: String.raw`讨论 \(a\) 取何值时线性方程组
\[
\begin{cases}
x_1+x_2+x_3=1,\\
x_1+2x_2+ax_3=1,\\
x_1+4x_2+a^2x_3=1
\end{cases}
\]
有唯一解、无穷多解，并在有解时求出解。`,
  a: String.raw`\(a\neq1,2\) 时唯一解 \((1,0,0)^T\)；\(a=1\) 时通解 \((1-t,0,t)^T\)；\(a=2\) 时通解 \((1,-t,t)^T\)。`,
  sol: String.raw`系数行列式是节点 \(1,2,a\) 的范德蒙德行列式，\(|A|=(a-1)(a-2)\)。当 \(a\neq1,2\) 时方程组有唯一解。令 \(p(t)=x_1+x_2t+x_3t^2\)，则条件为 \(p(1)=p(2)=p(a)=1\)，即 \(p(t)-1\) 有三个根 \(1,2,a\)，而它次数不超过 \(2\)，故恒为零，于是 \(p\equiv1\)，\(x=(1,0,0)^T\)。当 \(a=1\) 时第二式减第一式得 \(x_2=0\)，第三式减第一式得 \(3x_2=0\)，方程化为 \(x_1+x_3=1\)，通解 \((1-t,0,t)^T\)。当 \(a=2\) 时第二、三式分别减第一式得 \(x_2+x_3=0\) 与 \(3x_2+3x_3=0\)，故 \(x_2=-t,x_3=t,x_1=1\)，通解 \((1,-t,t)^T\)。` },
{ id:'LA04-27', ch:4, type:'证明', diff:5, tags:'唯一解 列满秩 线性无关',
  q: String.raw`设 \(A\) 是 \(m\times n\) 矩阵，\(b\in\mathbb R^m\)。证明：若 \(Ax=b\) 有唯一解，则 \(r(A)=n\)；反之，若 \(r(A)=n\) 且 \(b\in\operatorname{col}(A)\)，则 \(Ax=b\) 有唯一解。`,
  a: String.raw`唯一解等价于列向量线性无关且 \(b\) 在列空间中，即 \(r(A)=n\) 且 \(b\in\operatorname{col}(A)\)。`,
  sol: String.raw`设 \(x_0\) 是 \(Ax=b\) 的唯一解。若 \(A\) 的列向量线性相关，则存在非零向量 \(z\) 使 \(Az=0\)，于是对任意实数 \(t\)，\(A(x_0+tz)=b\)，得到无穷多个解，矛盾。故列向量线性无关，\(r(A)=n\)。反之设 \(r(A)=n\) 且 \(b\in\operatorname{col}(A)\)，则由 \(b\in\operatorname{col}(A)\) 知有解 \(x_0\)。若 \(x_1,x_2\) 都是解，则 \(A(x_1-x_2)=0\)；而 \(r(A)=n\) 说明 \(Ax=0\) 只有零解，故 \(x_1=x_2\)。因此解存在且唯一。` },
{ id:'LA04-28', ch:4, type:'计算', diff:5, tags:'齐次方程组 含参数 基础解系 行列式',
  q: String.raw`问 \(a\) 取何值时齐次线性方程组
\[
\begin{cases}
x_1+x_2+x_3+x_4=0,\\
x_1+2x_2+3x_3+4x_4=0,\\
x_1+4x_2+9x_3+16x_4=0,\\
x_1+8x_2+27x_3+ax_4=0
\end{cases}
\]
有非零解？有非零解时求其基础解系。`,
  a: String.raw`仅当 \(a=58\) 时有非零解，基础解系为 \((-1,3,-3,1)^T\)。`,
  sol: String.raw`记系数矩阵为 \(A\)。对 \(A\) 作行变换可算得 \(|A|=2(a-58)\)，故仅当 \(a=58\) 时 \(|A|=0\)，齐次方程组才有非零解。当 \(a=58\) 时，第四行恰为 \(6\) 倍第一行减 \(11\) 倍第二行加 \(6\) 倍第三行，故 \(r(A)=3\)，解空间维数为 \(4-3=1\)。解前三个方程：第二式减第一式得 \(x_2+2x_3+3x_4=0\)，第三式减第一式得 \(3x_2+8x_3+15x_4=0\)，两式消去 \(x_2\) 得 \(2x_3+6x_4=0\)，即 \(x_3=-3x_4\)。代回得 \(x_2=3x_4\)，再由第一式得 \(x_1=-x_4\)。取 \(x_4=1\)，得基础解系 \((-1,3,-3,1)^T\)。` },
{ id:'LA04-29', ch:4, type:'证明', diff:4, tags:'解集结构 仿射组合 非齐次方程组',
  q: String.raw`设 \(A\) 是 \(m\times n\) 矩阵，\(b\in\mathbb R^m\)，\(S=\{x:Ax=b\}\) 非空。证明：对任意 \(x,y\in S\) 和任意实数 \(t\)，都有 \((1-t)x+ty\in S\)；并证明当 \(b\neq0\) 时，线性组合 \(\sum_{i=1}^sk_ix_i\)（\(x_i\in S\)）属于 \(S\) 当且仅当 \(\sum_{i=1}^sk_i=1\)。`,
  a: String.raw`解集对仿射组合封闭；当 \(b\neq0\) 时线性组合仍是解当且仅当系数之和为 \(1\)。`,
  sol: String.raw`若 \(Ax=b,\ Ay=b\)，则 \(A((1-t)x+ty)=(1-t)Ax+tAy=(1-t)b+tb=b\)，故 \((1-t)x+ty\in S\)。对线性组合，\(A\left(\sum k_ix_i\right)=\sum k_iAx_i=\left(\sum k_i\right)b\)。当 \(b\neq0\) 时，该向量等于 \(b\) 当且仅当 \(\sum k_i=1\)；若 \(\sum k_i=1\) 则它属于 \(S\)，若 \(\sum k_i\neq1\) 则它不等于 \(b\)，不属于 \(S\)。这也说明 \(S\) 是过任意一点 \(x_0\in S\)、方向为 \(\ker A\) 的仿射子空间。` },
{ id:'LA04-30', ch:4, type:'证明', diff:4, tags:'零解 唯一解 反例',
  q: String.raw`设 \(A\) 是 \(m\times n\) 矩阵。证明：若齐次方程组 \(Ax=0\) 只有零解，则对任意 \(b\in\mathbb R^m\)，非齐次方程组 \(Ax=b\) 至多有一个解；并举例说明反之不成立（即 \(Ax=b\) 对某个 \(b\) 有唯一解时，\(Ax=0\) 仍可能只有零解，但 \(Ax=b\) 对另一个 \(b\) 可能无解）。`,
  a: String.raw`\(Ax=0\) 只有零解时解若存在则唯一；但存在性取决于 \(b\in\operatorname{col}(A)\)。`,
  sol: String.raw`设 \(Ax=0\) 只有零解，若 \(x_1,x_2\) 都是 \(Ax=b\) 的解，则 \(A(x_1-x_2)=0\)，故 \(x_1-x_2=0\)，即 \(x_1=x_2\)，所以至多一个解。取 \(A=\begin{pmatrix}1&0\\0&0\end{pmatrix}\)，则 \(Ax=0\) 只有零解。对 \(b=(1,0)^T\)，方程有唯一解 \((1,0)^T\)；但对 \(b=(0,1)^T\)，方程 \(x_1=0,\ 0=1\) 无解。这说明“至多一个解”不能推出“对任意 \(b\) 都有解”，有解还需要 \(b\in\operatorname{col}(A)\)。` },
{ id:'LA04-31', ch:4, type:'计算', diff:5, tags:'Cramer法则 三对角行列式 四阶',
  q: String.raw`用 Cramer 法则解线性方程组
\[
\begin{cases}
2x_1+x_2=4,\\
x_1+2x_2+x_3=8,\\
x_2+2x_3+x_4=12,\\
x_3+2x_4=11.
\end{cases}
\]
`,
  a: String.raw`\(x_1=1,\ x_2=2,\ x_3=3,\ x_4=4\)。`,
  sol: String.raw`系数行列式按第一行展开：\(D=2\begin{vmatrix}2&1&0\\1&2&1\\0&1&2\end{vmatrix}-\begin{vmatrix}1&1&0\\0&2&1\\0&1&2\end{vmatrix}=2\cdot4-3=5\)。分别把右端列替换第 \(j\) 列，计算得 \(D_1=5,\ D_2=10,\ D_3=15,\ D_4=20\)。由 Cramer 法则 \(x_j=D_j/D\)，故 \(x_1=1,x_2=2,x_3=3,x_4=4\)。代回原方程逐式验证均成立。` },
{ id:'LA04-32', ch:4, type:'计算', diff:5, tags:'Cramer法则 含参数 范德蒙德',
  q: String.raw`用 Cramer 法则解线性方程组
\[
\begin{cases}
x_1+x_2+x_3=1,\\
x_1+2x_2+4x_3=2,\\
x_1+3x_2+9x_3=a,
\end{cases}
\]
并说明对任意实数 \(a\) 解都是唯一的。`,
  a: String.raw`\(x_1=a-3,\ x_2=\frac{11-3a}{2},\ x_3=\frac{a-3}{2}\)。`,
  sol: String.raw`系数行列式 \(D=\begin{vmatrix}1&1&1\\1&2&4\\1&3&9\end{vmatrix}=2\neq0\)，故对任意 \(a\) 都有唯一解。令 \(p(t)=x_1+x_2t+x_3t^2\)，则条件为 \(p(1)=1,\ p(2)=2,\ p(3)=a\)。由牛顿插值，\(p(t)=1+(t-1)+(t-1)(t-2)c\)，代入 \(t=3\) 得 \(1+2+2c=a\)，故 \(c=\frac{a-3}{2}\)。展开得 \(p(t)=1+(t-1)+\frac{a-3}{2}(t^2-3t+2)\)，于是 \(x_1=p(0)=a-3\)，\(x_2=\frac{11-3a}{2}\)，\(x_3=\frac{a-3}{2}\)。也可直接计算 \(D_1,D_2,D_3\) 后由 Cramer 法则得到同样结果。` },
{ id:'LA04-33', ch:4, type:'证明', diff:5, tags:'Cramer法则 伴随矩阵 行列式',
  q: String.raw`设 \(A=(a_{ij})\) 是 \(n\) 阶可逆矩阵，\(D=|A|\)，\(b=(b_1,\dots,b_n)^T\)，方程组 \(Ax=b\) 的唯一解为 \(x=(x_1,\dots,x_n)^T\)。证明 Cramer 法则：
\[
x_j=\frac{D_j}{D},\qquad j=1,2,\dots,n,
\]
其中 \(D_j\) 是把 \(A\) 的第 \(j\) 列换成 \(b\) 后所得矩阵的行列式。`,
  a: String.raw`由 \(x=A^{-1}b=\frac1D A^*b\)，比较第 \(j\) 个分量即得 \(x_j=D_j/D\)。`,
  sol: String.raw`因为 \(D=|A|\neq0\)，\(A\) 可逆，解唯一且 \(x=A^{-1}b\)。由伴随矩阵公式 \(A^{-1}=\frac1D A^*\)，其中 \(A^*=(A_{ij})^T\)，\(A_{ij}\) 是元素 \(a_{ij}\) 的代数余子式。于是
\[
x_j=\frac1D\sum_{i=1}^nA_{ij}b_i.
\]
另一方面，把 \(A\) 的第 \(j\) 列换成 \(b\) 得矩阵 \(A_j\)，按第 \(j\) 列展开：\(D_j=\sum_{i=1}^nb_iA_{ij}\)（第 \(j\) 列换元不影响其余列的代数余子式）。两式比较即得 \(x_j=D_j/D\)。` },
{ id:'LA04-34', ch:4, type:'计算', diff:5, tags:'Cramer法则 三阶行列式 方程组',
  q: String.raw`用 Cramer 法则解线性方程组
\[
\begin{cases}
2x_1+x_2+3x_3=1,\\
x_1+3x_2+2x_3=2,\\
3x_1+2x_2+x_3=3.
\end{cases}
\]
`,
  a: String.raw`\(x_1=\frac23,\ x_2=\frac23,\ x_3=-\frac13\)。`,
  sol: String.raw`计算系数行列式
\[
D=\begin{vmatrix}2&1&3\\1&3&2\\3&2&1\end{vmatrix}=2(3-4)-(1-6)+3(2-9)=-2+5-21=-18.
\]
分别替换各列：
\[
D_1=\begin{vmatrix}1&1&3\\2&3&2\\3&2&1\end{vmatrix}=-12,\quad
D_2=\begin{vmatrix}2&1&3\\1&2&2\\3&3&1\end{vmatrix}=-12,\quad
D_3=\begin{vmatrix}2&1&1\\1&3&2\\3&2&3\end{vmatrix}=6.
\]
由 Cramer 法则 \(x_1=D_1/D=\frac23\)，\(x_2=D_2/D=\frac23\)，\(x_3=D_3/D=-\frac13\)。代回第一式：\(\frac43+\frac23-1=1\)，验证成立。` },
{ id:'LA04-35', ch:4, type:'计算', diff:5, tags:'Cramer法则 秩一扰动 Sherman-Morrison',
  q: String.raw`设 \(J\) 为 \(4\) 阶全 \(1\) 矩阵，\(A=I+J\)，\(b=(1,2,3,4)^T\)。求 \(|A|\)，并解方程组 \(Ax=b\)。`,
  a: String.raw`\(|A|=5\)，\(x=(-1,0,1,2)^T\)。`,
  sol: String.raw`\(A=I+J\) 的特征值为 \(1\)（三重）与 \(1+4=5\)，故 \(|A|=5\neq0\)。由 Sherman-Morrison 公式 \((I+uv^T)^{-1}=I-\frac{uv^T}{1+v^Tu}\)，取 \(u=v=(1,1,1,1)^T\)，得 \(A^{-1}=I-\frac15J\)。于是
\[
x=A^{-1}b=b-\frac15Jb.
\]
而 \(Jb=\left(\sum b_i\right)(1,1,1,1)^T=10(1,1,1,1)^T\)，故 \(x=b-2(1,1,1,1)^T=(-1,0,1,2)^T\)。代回：第一行 \(-1+0+1+2=2\)？直接计算 \(Ax=(I+J)x=x+Jx\)，\(Jx=(-1+0+1+2)(1,1,1,1)^T=2(1,1,1,1)^T\)，故 \(Ax=(-1,0,1,2)^T+(2,2,2,2)^T=(1,2,3,4)^T\)。` },
{ id:'LA04-36', ch:4, type:'计算', diff:4, tags:'Cramer法则 三阶行列式 分数解',
  q: String.raw`用 Cramer 法则解线性方程组
\[
\begin{cases}
x_1+x_2+2x_3=1,\\
2x_1+x_2+x_3=2,\\
x_1+2x_2+x_3=3.
\end{cases}
\]
`,
  a: String.raw`\(x_1=\frac12,\ x_2=\frac32,\ x_3=-\frac12\)。`,
  sol: String.raw`系数行列式
\[
D=\begin{vmatrix}1&1&2\\2&1&1\\1&2&1\end{vmatrix}=1(1-2)-(2-1)+2(4-1)=-1-1+6=4.
\]
替换列得 \(D_1=\begin{vmatrix}1&1&2\\2&1&1\\3&2&1\end{vmatrix}=2\)，\(D_2=\begin{vmatrix}1&1&2\\2&2&1\\1&3&1\end{vmatrix}=6\)，\(D_3=\begin{vmatrix}1&1&1\\2&1&2\\1&2&3\end{vmatrix}=-2\)。由 Cramer 法则得 \(x_1=\frac12,x_2=\frac32,x_3=-\frac12\)。代回第一式 \(\frac12+\frac32-1=1\)，成立。` },
{ id:'LA04-37', ch:4, type:'计算', diff:5, tags:'Cramer法则 字母系数 通解公式',
  q: String.raw`设 \(p,q,r\) 为任意实数，用 Cramer 法则解线性方程组
\[
\begin{cases}
x_1+x_2+x_3=p,\\
x_1+2x_2+3x_3=q,\\
x_1+4x_2+9x_3=r.
\end{cases}
\]
`,
  a: String.raw`\(x_1=3p-3q+r,\ x_2=\frac{8q-5p-3r}{2},\ x_3=\frac{p-2q+r}{2}\)。`,
  sol: String.raw`系数行列式 \(D=\begin{vmatrix}1&1&1\\1&2&3\\1&4&9\end{vmatrix}=2\neq0\)。计算
\[
D_1=\begin{vmatrix}p&1&1\\q&2&3\\r&4&9\end{vmatrix}=6p-6q+2r,
\]
\[
D_2=\begin{vmatrix}1&p&1\\1&q&3\\1&r&9\end{vmatrix}=8q-5p-3r,\qquad
D_3=\begin{vmatrix}1&1&p\\1&2&q\\1&4&r\end{vmatrix}=p-2q+r.
\]
由 Cramer 法则 \(x_1=D_1/D=3p-3q+r\)，\(x_2=\frac{8q-5p-3r}{2}\)，\(x_3=\frac{p-2q+r}{2}\)。令 \(p=1,q=2,r=3\) 可验证 \(x=(0,1,0)^T\)，与原方程一致。` },
{ id:'LA04-38', ch:4, type:'证明', diff:4, tags:'Cramer法则 行列式为零 解的判定',
  q: String.raw`设 \(A\) 是 \(n\) 阶矩阵，\(D=|A|=0\)，\(b\in\mathbb R^n\)。证明：若 \(Ax=b\) 有解，则必有无穷多解，且此时所有 \(D_j=0\)（\(D_j\) 为把第 \(j\) 列换成 \(b\) 后的行列式）；反之，若某个 \(D_j\neq0\)，则 \(Ax=b\) 无解。`,
  a: String.raw`\(D=0\) 且有解时秩小于 \(n\)，故无穷多解；由 \(D_j=Dx_j\) 得 \(D_j=0\)；\(D_j\neq0\) 与有解矛盾。`,
  sol: String.raw`若 \(Ax=b\) 有解。若解唯一，则由上一题（或列满秩判定）知 \(r(A)=n\)，从而 \(D\neq0\)，与 \(D=0\) 矛盾。因此解不唯一；又解集非空且是仿射子空间，解不唯一即有无穷多解。对任意解 \(x\)，把 \(A\) 的第 \(j\) 列换成 \(b=Ax\) 后，所得矩阵的第 \(j\) 列是其余各列的线性组合（系数为 \(x_i\)），故行列式 \(D_j=0\)。若某个 \(D_j\neq0\)，假设有解 \(x\)，则由上面的论证应有 \(D_j=0\)，矛盾，故无解。` },
{ id:'LA04-39', ch:4, type:'计算', diff:5, tags:'齐次方程组 基础解系 解空间维数',
  q: String.raw`求齐次线性方程组
\[
\begin{cases}
x_1+x_2+x_3+x_4+x_5=0,\\
2x_1+2x_2+3x_3+3x_4+4x_5=0,\\
x_1-x_2+x_3-x_4+x_5=0
\end{cases}
\]
的基础解系与解空间维数。`,
  a: String.raw`解空间维数为 \(2\)，基础解系为 \((1,-1,-1,1,0)^T,(1,0,-2,0,1)^T\)。`,
  sol: String.raw`对系数矩阵作行变换：第二行减去第一行的 \(2\) 倍得 \((0,0,1,1,2)\)，第三行减去第一行得 \((0,-2,0,-2,0)\)，即 \(x_2+x_4=0\)。于是 \(x_2=-x_4\)，\(x_3=-x_4-2x_5\)，再由第一式得 \(x_1=x_4+x_5\)。令 \(x_4=1,x_5=0\) 得 \((1,-1,-1,1,0)^T\)；令 \(x_4=0,x_5=1\) 得 \((1,0,-2,0,1)^T\)。两向量线性无关，且解空间维数为 \(5-r(A)=5-3=2\)，故它们构成基础解系。` },
{ id:'LA04-40', ch:4, type:'计算', diff:5, tags:'非齐次方程组 通解 多自由未知量',
  q: String.raw`求非齐次线性方程组
\[
\begin{cases}
x_1+x_2+x_3+x_4+x_5=1,\\
x_1+2x_2+3x_3+4x_4+5x_5=2,\\
x_1+4x_2+9x_3+16x_4+25x_5=4
\end{cases}
\]
的通解。`,
  a: String.raw`\(x=(0,1,0,0,0)^T+s(-1,3,-3,1,0)^T+t(-3,8,-6,0,1)^T,\ s,t\in\mathbb R\)。`,
  sol: String.raw`对增广矩阵行化简，得
\[
\begin{cases}
x_1=-x_4-3x_5,\\
x_2=1+3x_4+8x_5,\\
x_3=-3x_4-6x_5.
\end{cases}
\]
令 \(x_4=x_5=0\) 得特解 \(\eta=(0,1,0,0,0)^T\)。令 \(x_4=1,x_5=0\) 得齐次解 \((-1,3,-3,1,0)^T\)，令 \(x_4=0,x_5=1\) 得 \((-3,8,-6,0,1)^T\)。系数矩阵秩为 \(3\)，故齐次解空间维数为 \(5-3=2\)，上述两向量构成基础解系。于是通解为 \(\eta+s\xi_1+t\xi_2\)。` },
{ id:'LA04-41', ch:4, type:'计算', diff:4, tags:'解的结构 特解 齐次解 约束条件',
  q: String.raw`已知 \(Ax=b\) 的通解为
\[
x=(1,0,2,1)^T+s(1,-1,0,0)^T+t(0,1,1,-1)^T,\qquad s,t\in\mathbb R.
\]
求满足 \(x_1=0\) 且 \(x_3=3\) 的解。`,
  a: String.raw`\(x=(0,2,3,0)^T\)。`,
  sol: String.raw`由通解写出分量：\(x_1=1+s\)，\(x_2=-s+t\)，\(x_3=2+t\)，\(x_4=1-t\)。条件 \(x_1=0\) 给出 \(s=-1\)，条件 \(x_3=3\) 给出 \(t=1\)。代回得 \(x=(0,2,3,0)^T\)。也可直接验证：该向量等于特解 \((1,0,2,1)^T\) 减去 \((1,-1,0,0)^T\) 再加上 \((0,1,1,-1)^T\)，故确为解。` },
{ id:'LA04-42', ch:4, type:'证明', diff:5, tags:'基础解系 解空间维数 秩',
  q: String.raw`设 \(A\) 是 \(m\times n\) 矩阵，\(r(A)=r\)。证明齐次方程组 \(Ax=0\) 的解空间 \(N(A)\) 的维数为 \(n-r\)，并说明其任一基础解系恰含 \(n-r\) 个向量。`,
  a: String.raw`\(\dim N(A)=n-r(A)\)，基础解系含 \(n-r\) 个向量。`,
  sol: String.raw`对 \(A\) 作初等行变换化为行最简形，设主元列为 \(j_1<\cdots<j_r\)，其余 \(n-r\) 列为自由未知量。把自由未知量分别取为“一个为 \(1\)、其余为 \(0\)”，回代主元未知量，得到 \(n-r\) 个解 \(\xi_1,\dots,\xi_{n-r}\)。它们线性无关：若 \(\sum k_i\xi_i=0\)，看自由未知量位置即得所有 \(k_i=0\)。又任一解由自由未知量的取值唯一确定，故可写成这些 \(\xi_i\) 的线性组合，于是它们张成 \(N(A)\)。因此 \(\dim N(A)=n-r\)。基础解系是 \(N(A)\) 的基，故恰含 \(n-r\) 个向量。` },
{ id:'LA04-43', ch:4, type:'计算', diff:5, tags:'最小二乘 法方程 线性拟合',
  q: String.raw`对数据点 \((1,1),(2,2),(3,2),(4,4)\) 作最小二乘直线拟合 \(y=c+dt\)，求 \(c,d\)，并求残差平方和。`,
  a: String.raw`\(c=0,\ d=\frac9{10}\)，拟合直线为 \(y=\frac9{10}t\)，残差平方和为 \(\frac7{10}\)。`,
  sol: String.raw`设 \(A=\begin{pmatrix}1&1\\1&2\\1&3\\1&4\end{pmatrix}\)，\(y=(1,2,2,4)^T\)，法方程为 \(A^TA\begin{pmatrix}c\\d\end{pmatrix}=A^Ty\)。计算得
\[
A^TA=\begin{pmatrix}4&10\\10&30\end{pmatrix},\qquad A^Ty=\begin{pmatrix}9\\27\end{pmatrix}.
\]
解 \(4c+10d=9,\ 10c+30d=27\)，得 \(d=\frac9{10},c=0\)。残差为 \(0.1,0.2,-0.7,0.4\)，平方和 \(0.01+0.04+0.49+0.16=0.70=\frac7{10}\)。` },
{ id:'LA04-44', ch:4, type:'证明', diff:5, tags:'零空间 转置 法方程',
  q: String.raw`设 \(A\) 是 \(m\times n\) 实矩阵。证明 \(N(A)=N(A^TA)\)，并由此证明 \(r(A^TA)=r(A)\)。`,
  a: String.raw`两零空间相同，故维数相同，\(n-r(A^TA)=n-r(A)\)。`,
  sol: String.raw`若 \(Ax=0\)，则 \(A^TAx=A^T0=0\)，故 \(N(A)\subseteq N(A^TA)\)。反之若 \(A^TAx=0\)，两边左乘 \(x^T\) 得 \(x^TA^TAx=0\)，即 \((Ax)^T(Ax)=\|Ax\|^2=0\)，故 \(Ax=0\)，于是 \(N(A^TA)\subseteq N(A)\)。两包含关系给出 \(N(A)=N(A^TA)\)。对 \(m\times n\) 矩阵取零空间维数：\(\dim N(A)=n-r(A)\)，\(\dim N(A^TA)=n-r(A^TA)\)，二者相等，故 \(r(A)=r(A^TA)\)。` },
{ id:'LA04-45', ch:4, type:'计算', diff:5, tags:'含参数 齐次方程组 基础解系',
  q: String.raw`讨论 \(a\) 取何值时齐次线性方程组
\[
\begin{cases}
x_1+x_2+x_3=0,\\
x_1+2x_2+ax_3=0,\\
x_1+4x_2+a^2x_3=0
\end{cases}
\]
有非零解，并在有非零解时求基础解系。`,
  a: String.raw`仅当 \(a=1\) 或 \(a=2\) 时有非零解；\(a=1\) 时基础解系为 \((1,0,-1)^T\)，\(a=2\) 时基础解系为 \((0,1,-1)^T\)。`,
  sol: String.raw`系数行列式为范德蒙德行列式 \(|A|=(a-1)(a-2)\)。当 \(a\neq1,2\) 时 \(|A|\neq0\)，只有零解。当 \(a=1\) 时，第二、三式分别减去第一式得 \(x_2=0\) 与 \(3x_2=0\)，方程化为 \(x_1+x_3=0\)，基础解系为 \((1,0,-1)^T\)。当 \(a=2\) 时，第二式减第一式得 \(x_2+x_3=0\)，第三式减第一式得 \(3x_2+3x_3=0\)，两式相同；又第一式为 \(x_1+x_2+x_3=0\)，结合 \(x_2=-x_3\) 得 \(x_1=0\)，基础解系为 \((0,1,-1)^T\)。` },
{ id:'LA04-46', ch:4, type:'证明', diff:5, tags:'唯一解 法方程 正规方程',
  q: String.raw`设 \(A\) 是 \(m\times n\) 实矩阵，\(b\in\mathbb R^m\)。证明：若 \(Ax=b\) 有唯一解 \(x_0\)，则法方程 \(A^TAx=A^Tb\) 也有唯一解，且其解就是 \(x_0\)。`,
  a: String.raw`唯一解给出 \(r(A)=n\)，故 \(A^TA\) 可逆，法方程唯一解即 \(x_0\)。`,
  sol: String.raw`由 \(Ax=b\) 有唯一解知 \(r(A)=n\)（否则 \(Ax=0\) 有非零解，可加上去得到另一个解）。于是 \(A^TA\) 是 \(n\) 阶矩阵，且 \(N(A^TA)=N(A)=\{0\}\)，故 \(A^TA\) 可逆，法方程有唯一解。又 \(Ax_0=b\)，两边左乘 \(A^T\) 得 \(A^TAx_0=A^Tb\)，所以 \(x_0\) 就是法方程的唯一解。注意这里只用到 \(A\) 列满秩，并不要求 \(A\) 是方阵；当 \(m>n\) 时法方程仍唯一可解。` },
{ id:'LA04-47', ch:4, type:'计算', diff:5, tags:'同解方程组 含参数 行空间',
  q: String.raw`已知齐次线性方程组
\[
\text{(I)}\ \begin{cases}
x_1+2x_2+3x_3=0,\\
2x_1+3x_2+4x_3=0,
\end{cases}
\qquad
\text{(II)}\ \begin{cases}
x_1+x_2+ax_3=0,\\
2x_1+3x_2+bx_3=0,\\
x_1+4x_2+cx_3=0
\end{cases}
\]
同解，求 \(a,b,c\) 的值。`,
  a: String.raw`\(a=1,\ b=4,\ c=7\)。`,
  sol: String.raw`(I) 的系数矩阵秩为 \(2\)，由第二式减第一式得 \(x_1+x_2+x_3=0\)，再由第一式得 \(x_2+2x_3=0\)，故解空间为 \(L=\operatorname{span}\{(1,-2,1)^T\}\)。同解要求 (II) 的每一行都与 \((1,-2,1)^T\) 正交：第一行给出 \(1-2+a=0\)，故 \(a=1\)；第二行给出 \(2-6+b=0\)，故 \(b=4\)；第三行给出 \(1-8+c=0\)，故 \(c=7\)。此时 (II) 的第三行等于 \(3\) 倍第二行减 \(5\) 倍第一行，秩仍为 \(2\)，解空间仍是 \(L\)，故确实同解。` },
{ id:'LA04-48', ch:4, type:'计算', diff:5, tags:'公共解 齐次方程组 交集',
  q: String.raw`求齐次线性方程组
\[
\text{(I)}\ \begin{cases}
x_1+x_2+x_3+x_4=0,\\
x_3-x_4=0,
\end{cases}
\qquad
\text{(II)}\ \begin{cases}
x_1+x_3=0,\\
x_2+x_4=0
\end{cases}
\]
的公共解空间及其维数。`,
  a: String.raw`公共解空间为 \(\operatorname{span}\{(-1,-1,1,1)^T\}\)，维数为 \(1\)。`,
  sol: String.raw`(I) 中 \(x_3=x_4\)，代入第一式得 \(x_1+x_2+2x_3=0\)，故 (I) 的解为 \((-u-2v,u,v,v)^T\)。(II) 的解为 \((-s,-t,s,t)^T\)。令两者相等，比较第三、四分量得 \(v=s=t\)，比较第二分量得 \(u=-t\)，此时第一分量为 \(-(-t)-2t=-t\)，与 (II) 的第一分量 \(-s=-t\) 一致。故公共解为 \((-t,-t,t,t)^T=t(-1,-1,1,1)^T\)，维数为 \(1\)。也可把两个方程组的四个方程联立，系数矩阵秩为 \(3\)，故公共解空间维数为 \(4-3=1\)。` },
{ id:'LA04-49', ch:4, type:'计算', diff:4, tags:'公共解 非齐次方程组 联立求解',
  q: String.raw`求线性方程组
\[
\text{(I)}\ \begin{cases}
x_1+x_2-x_3=0,\\
x_1-x_2+x_3=2,
\end{cases}
\qquad
\text{(II)}\ \begin{cases}
2x_1-x_2+x_3=3,\\
x_1+x_2+x_3=6
\end{cases}
\]
的公共解。`,
  a: String.raw`公共解唯一，为 \((1,2,3)^T\)。`,
  sol: String.raw`由 (I) 两式相加得 \(2x_1=2\)，故 \(x_1=1\)；两式相减得 \(2x_2-2x_3=-2\)，即 \(x_2=x_3-1\)。把 \(x_1=1,x_2=x_3-1\) 代入 (II) 的第一式：\(2-(x_3-1)+x_3=3\)，恒成立；代入第二式：\(1+(x_3-1)+x_3=6\)，得 \(2x_3=6\)，故 \(x_3=3\)，\(x_2=2\)。所以公共解为 \((1,2,3)^T\)，并且由于四个方程联立后系数矩阵秩为 \(3\)，公共解唯一。` },
{ id:'LA04-50', ch:4, type:'计算', diff:5, tags:'公共解 含参数 有非零公共解',
  q: String.raw`已知齐次线性方程组
\[
\text{(I)}\ \begin{cases}
x_1+x_2+x_3=0,\\
x_1+2x_2+3x_3=0,
\end{cases}
\qquad
\text{(II)}\ \begin{cases}
x_1+ax_2+x_3=0,\\
2x_1+x_2+bx_3=0.
\end{cases}
\]
问 \(a,b\) 取何值时 (I) 与 (II) 有非零公共解？并求出此时的公共解。`,
  a: String.raw`\(a=1,\ b=0\)，公共解为 \(x=t(1,-2,1)^T\)。`,
  sol: String.raw`(I) 的系数矩阵秩为 \(2\)，由第二式减第一式得 \(x_2+2x_3=0\)，再由第一式得 \(x_1=x_3\)，故 (I) 的解空间为 \(L=\operatorname{span}\{(1,-2,1)^T\}\)。有非零公共解等价于 \((1,-2,1)^T\) 满足 (II) 的两个方程：第一式给出 \(1-2a+1=0\)，故 \(a=1\)；第二式给出 \(2-2+b=0\)，故 \(b=0\)。此时 (II) 化为 \(x_1+x_2+x_3=0\) 与 \(2x_1+x_2=0\)，由第二式 \(x_2=-2x_1\)，代入第一式得 \(x_3=x_1\)，解空间也是 \(L\)。故公共解为 \(t(1,-2,1)^T\)。` },
{ id:'LA04-51', ch:4, type:'证明', diff:5, tags:'同解方程组 零空间 行空间 正交补',
  q: String.raw`设 \(A\) 是 \(m\times n\) 矩阵，\(B\) 是 \(s\times n\) 矩阵。证明：若 \(Ax=0\) 的每个解都是 \(Bx=0\) 的解，则 \(B\) 的每一行都是 \(A\) 的行的线性组合。`,
  a: String.raw`\(N(A)\subseteq N(B)\)，取正交补得 \(\operatorname{row}(B)\subseteq\operatorname{row}(A)\)。`,
  sol: String.raw`条件即 \(N(A)\subseteq N(B)\)。对实矩阵，零空间是行空间的正交补：\(N(A)=\operatorname{row}(A)^\perp\)，\(N(B)=\operatorname{row}(B)^\perp\)。取正交补，包含关系反向，得 \(\operatorname{row}(B)\subseteq\operatorname{row}(A)\)。而 \(\operatorname{row}(B)\) 由 \(B\) 的各行张成，故 \(B\) 的每一行都是 \(A\) 的行的线性组合。注意这里只得到行空间的包含，若要同解还需反向包含，即两行空间相等。` },
{ id:'LA04-52', ch:4, type:'计算', diff:5, tags:'公共解 含参数 非齐次方程组',
  q: String.raw`已知线性方程组
\[
\text{(I)}\ \begin{cases}
x_1+x_2+x_3=1,\\
x_1-x_2+x_3=0,
\end{cases}
\qquad
\text{(II)}\ \begin{cases}
x_1+ax_2=1,\\
bx_1+x_3=0.
\end{cases}
\]
问 \(a,b\) 满足什么条件时 (I) 与 (II) 有公共解？并求出公共解。`,
  a: String.raw`当 \(ab-a-2b+1=0\) 时有公共解，公共解为 \(x=\left(\frac{2-a}{2},\frac12,\frac{a-1}{2}\right)^T\)。`,
  sol: String.raw`由 (I) 两式相减得 \(2x_2=1\)，故 \(x_2=\frac12\)；再由第一式得 \(x_1+x_3=\frac12\)。令 \(x_3=t\)，则 (I) 的通解为 \(\left(\frac12-t,\frac12,t\right)^T\)。代入 (II) 第一式：\(\frac12-t+\frac a2=1\)，得 \(t=\frac{a-1}{2}\)。代入 (II) 第二式：\(b\left(\frac12-t\right)+t=0\)。把 \(t=\frac{a-1}{2}\) 代入，得 \(b\cdot\frac{2-a}{2}+\frac{a-1}{2}=0\)，即 \(b(2-a)+a-1=0\)，整理得 \(ab-a-2b+1=0\)。当此条件成立时，公共解为 \(\left(\frac{2-a}{2},\frac12,\frac{a-1}{2}\right)^T\)；若 \(b=1\)，第二式化为 \(x_1+x_3=0\)，与 \(x_1+x_3=\frac12\) 矛盾，此时条件式也不成立。` },
{ id:'LA04-53', ch:4, type:'证明', diff:5, tags:'公共非零解 秩 联立方程组',
  q: String.raw`设 \(A,B\) 都是 \(m\times n\) 实矩阵。证明：齐次方程组 \(Ax=0\) 与 \(Bx=0\) 有非零公共解，当且仅当
\[
r\begin{pmatrix}A\\B\end{pmatrix}<n.
\]
`,
  a: String.raw`公共解空间就是 \(\begin{pmatrix}A\\B\end{pmatrix}x=0\) 的解空间，维数为 \(n-r\begin{pmatrix}A\\B\end{pmatrix}\)。`,
  sol: String.raw`\(x\) 是两方程组的公共解，当且仅当 \(Ax=0\) 且 \(Bx=0\)，即 \(\begin{pmatrix}A\\B\end{pmatrix}x=0\)。因此公共解空间就是联立齐次方程组的解空间。它有非零向量，当且仅当其维数大于零，即 \(n-r\begin{pmatrix}A\\B\end{pmatrix}>0\)，等价于 \(r\begin{pmatrix}A\\B\end{pmatrix}<n\)。当秩等于 \(n\) 时只有零解，即两方程组没有非零公共解。` },
{ id:'LA04-54', ch:4, type:'计算', diff:4, tags:'公共解 三个方程 范德蒙德',
  q: String.raw`求三个方程
\[
x_1+x_2+x_3=6,\qquad x_1+2x_2+3x_3=14,\qquad x_1+4x_2+9x_3=36
\]
的公共解。`,
  a: String.raw`公共解为 \((1,2,3)^T\)，且唯一。`,
  sol: String.raw`系数行列式为节点 \(1,2,3\) 的范德蒙德行列式 \(\begin{vmatrix}1&1&1\\1&2&3\\1&4&9\end{vmatrix}=(2-1)(3-1)(3-2)=2\neq0\)，故方程组有唯一解。第二式减第一式得 \(x_2+2x_3=8\)；第三式减第一式得 \(3x_2+8x_3=30\)。由第一式解出 \(x_2=8-2x_3\)，代入第二式得 \(24+2x_3=30\)，故 \(x_3=3,\ x_2=2\)。再由第一式得 \(x_1=6-2-3=1\)，所以公共解为 \((1,2,3)^T\)。` },
{ id:'LA04-55', ch:4, type:'计算', diff:5, tags:'最小二乘 二次拟合 法方程',
  q: String.raw`对数据点 \((-1,2),(0,1),(1,2),(2,4)\) 作最小二乘二次拟合 \(y=a+bt+ct^2\)，求 \(a,b,c\) 及残差平方和。`,
  a: String.raw`\(a=\frac{23}{20},\ b=-\frac1{20},\ c=\frac34\)，残差平方和为 \(\frac1{20}\)。`,
  sol: String.raw`设设计矩阵
\[
A=\begin{pmatrix}1&-1&1\\1&0&0\\1&1&1\\1&2&4\end{pmatrix},\qquad y=(2,1,2,4)^T.
\]
法方程为 \(A^TA(a,b,c)^T=A^Ty\)。计算得
\[
A^TA=\begin{pmatrix}4&2&6\\2&6&8\\6&8&18\end{pmatrix},\qquad A^Ty=\begin{pmatrix}9\\9\\21\end{pmatrix}.
\]
解得 \(a=\frac{23}{20},b=-\frac1{20},c=\frac34\)。拟合值依次为 \(\frac{39}{20},\frac{23}{20},\frac{37}{20},\frac{81}{20}\)，残差为 \(\frac1{20},-\frac3{20},\frac3{20},-\frac1{20}\)，平方和为 \(\frac{1+9+9+1}{400}=\frac1{20}\)。` },
{ id:'LA04-56', ch:4, type:'计算', diff:5, tags:'最小二乘 直线拟合 法方程',
  q: String.raw`求 \(c,d\) 使 \(\sum_{i=1}^3(c+dt_i-y_i)^2\) 最小，其中 \((t_1,t_2,t_3)=(1,2,3)\)，\((y_1,y_2,y_3)=(1,2,4)\)。`,
  a: String.raw`\(c=-\frac23,\ d=\frac32\)，最小残差平方和为 \(\frac16\)。`,
  sol: String.raw`设计矩阵 \(A=\begin{pmatrix}1&1\\1&2\\1&3\end{pmatrix}\)，\(y=(1,2,4)^T\)。法方程 \(A^TA\begin{pmatrix}c\\d\end{pmatrix}=A^Ty\) 为
\[
\begin{pmatrix}3&6\\6&14\end{pmatrix}\begin{pmatrix}c\\d\end{pmatrix}=\begin{pmatrix}7\\17\end{pmatrix}.
\]
解得 \(d=\frac32,\ c=-\frac23\)。拟合值为 \(\frac56,\frac73,\frac{23}6\)，残差为 \(\frac16,-\frac13,\frac16\)，平方和 \(\frac1{36}+\frac19+\frac1{36}=\frac16\)。` },
{ id:'LA04-57', ch:4, type:'证明', diff:5, tags:'最小二乘 法方程 正交投影',
  q: String.raw`设 \(A\) 是 \(m\times n\) 实矩阵，\(b\in\mathbb R^m\)。证明 \(x_0\) 是最小二乘问题 \(\min\|Ax-b\|\) 的解当且仅当 \(A^T(Ax_0-b)=0\)。`,
  a: String.raw`残差 \(Ax_0-b\) 与 \(\operatorname{col}(A)\) 正交，即 \(A^T(Ax_0-b)=0\)。`,
  sol: String.raw`设 \(f(x)=\|Ax-b\|^2=x^TA^TAx-2b^TAx+b^Tb\)。对任意 \(h\in\mathbb R^n\)，
\[
f(x_0+h)-f(x_0)=2h^TA^T(Ax_0-b)+h^TA^TAh.
\]
若 \(A^T(Ax_0-b)=0\)，则 \(f(x_0+h)-f(x_0)=\|Ah\|^2\ge0\)，故 \(x_0\) 是全局最小点。反之若 \(A^T(Ax_0-b)\neq0\)，取 \(h=-A^T(Ax_0-b)\)，则一次项为 \(-2\|A^T(Ax_0-b)\|^2<0\)，当 \(t>0\) 充分小时 \(f(x_0+th)<f(x_0)\)，\(x_0\) 不是最小点。故条件充要。几何上即残差与 \(A\) 的列空间正交。` },
{ id:'LA04-58', ch:4, type:'计算', diff:5, tags:'最小二乘 投影矩阵 残差',
  q: String.raw`设 \(A=\begin{pmatrix}1&0\\0&1\\1&1\end{pmatrix}\)，\(b=(1,1,0)^T\)。求 \(b\) 在 \(\operatorname{col}(A)\) 上的正交投影 \(p\)、投影矩阵 \(P\)，以及残差范数 \(\|b-p\|\)。`,
  a: String.raw`\(p=\left(\frac13,\frac13,\frac23\right)^T\)，\(P=\frac13\begin{pmatrix}2&-1&1\\-1&2&1\\1&1&2\end{pmatrix}\)，\(\|b-p\|=\frac{2}{\sqrt3}\)。`,
  sol: String.raw`\(A^TA=\begin{pmatrix}2&1\\1&2\end{pmatrix}\)，其逆为 \(\frac13\begin{pmatrix}2&-1\\-1&2\end{pmatrix}\)。最小二乘系数为 \((A^TA)^{-1}A^Tb=\frac13(1,1)^T\)，故
\[
p=A(A^TA)^{-1}A^Tb=\frac13(1,1,2)^T.
\]
投影矩阵 \(P=A(A^TA)^{-1}A^T=\frac13\begin{pmatrix}2&-1&1\\-1&2&1\\1&1&2\end{pmatrix}\)。残差 \(b-p=\frac23(1,1,-1)^T\)，范数为 \(\frac23\sqrt3=\frac2{\sqrt3}\)，其平方为 \(\frac43\)。可直接验证 \(A^T(b-p)=0\)。` },
{ id:'LA04-59', ch:4, type:'计算', diff:5, tags:'最小二乘 最小范数解 秩一矩阵',
  q: String.raw`设 \(A=\begin{pmatrix}1&1\\1&1\end{pmatrix}\)，\(b=(1,2)^T\)。求最小二乘问题 \(\min\|Ax-b\|\) 的全部解，并求其中欧几里得范数最小的解。`,
  a: String.raw`全部最小二乘解为 \(x_1+x_2=\frac32\)，最小范数解为 \(x=\left(\frac34,\frac34\right)^T\)。`,
  sol: String.raw`令 \(s=x_1+x_2\)，则 \(Ax=(s,s)^T\)，残差平方为 \((s-1)^2+(s-2)^2=2s^2-6s+5\)，在 \(s=\frac32\) 处最小。故全部最小二乘解为直线 \(x_1+x_2=\frac32\)。在该直线上最小化 \(x_1^2+x_2^2\)，由对称性或拉格朗日乘子得 \(x_1=x_2=\frac34\)，最小范数平方为 \(\frac98\)。也可用 \(A^+=\frac14A\)，得 \(x=A^+b=\frac14(3,3)^T\)。` },
{ id:'LA04-60', ch:4, type:'证明', diff:5, tags:'最小二乘 唯一性 列满秩',
  q: String.raw`设 \(A\) 是 \(m\times n\) 实矩阵，\(b\in\mathbb R^m\)。证明最小二乘问题 \(\min\|Ax-b\|\) 的解唯一当且仅当 \(r(A)=n\)。`,
  a: String.raw`解唯一 \(\iff N(A)=\{0\}\iff\) 列向量线性无关 \(\iff r(A)=n\)。`,
  sol: String.raw`若 \(r(A)<n\)，则 \(Ax=0\) 有非零解 \(z\)。设 \(x_0\) 是一个最小二乘解，则 \(A(x_0+tz)-b=Ax_0-b\) 对任意 \(t\) 成立，故 \(x_0+tz\) 都是最小二乘解，不唯一。反之设 \(r(A)=n\)，若 \(x,y\) 都是最小二乘解，则由法方程 \(A^TAx=A^Tb=A^TAy\)，得 \(A^TA(x-y)=0\)。左乘 \((x-y)^T\) 得 \(\|A(x-y)\|^2=0\)，故 \(A(x-y)=0\)；由列满秩得 \(x=y\)。因此解唯一当且仅当 \(r(A)=n\)。` },
{ id:'LA04-61', ch:4, type:'计算', diff:5, tags:'广义逆 Moore-Penrose 秩一矩阵',
  q: String.raw`设 \(A=\begin{pmatrix}1&2\\2&4\end{pmatrix}\)。求 Moore-Penrose 广义逆 \(A^+\)，并验证 \(AA^+A=A\)。`,
  a: String.raw`\(A^+=\frac1{25}\begin{pmatrix}1&2\\2&4\end{pmatrix}\)。`,
  sol: String.raw`\(A=uv^T\)，其中 \(u=v=(1,2)^T\)，\(\|u\|^2=\|v\|^2=5\)。对秩一矩阵有公式 \(A^+=\frac{vu^T}{\|u\|^2\|v\|^2}\)，故
\[
A^+=\frac1{25}\begin{pmatrix}1&2\\2&4\end{pmatrix}.
\]
验证：\(AA^+A=\frac1{25}A^3\)。由 \(A^2=5A\) 得 \(A^3=25A\)，故 \(AA^+A=A\)。同理 \(A^+AA^+=A^+\)，且 \(AA^+=\frac15A\) 与 \(A^+A=\frac15A\) 都对称，四个 Penrose 条件全部成立。` },
{ id:'LA04-62', ch:4, type:'计算', diff:5, tags:'广义逆 行满秩 最小范数解',
  q: String.raw`设 \(A=\begin{pmatrix}1&0&1\\0&1&1\end{pmatrix}\)。求 \(A^+\)，并用它求 \(Ax=(1,1)^T\) 的最小范数解。`,
  a: String.raw`\(A^+=\frac13\begin{pmatrix}2&-1\\-1&2\\1&1\end{pmatrix}\)，最小范数解为 \(x=\left(\frac13,\frac13,\frac23\right)^T\)。`,
  sol: String.raw`\(A\) 行满秩，\(A^+=A^T(AA^T)^{-1}\)。计算 \(AA^T=\begin{pmatrix}2&1\\1&2\end{pmatrix}\)，其逆为 \(\frac13\begin{pmatrix}2&-1\\-1&2\end{pmatrix}\)。于是
\[
A^+=\begin{pmatrix}1&0\\0&1\\1&1\end{pmatrix}\cdot\frac13\begin{pmatrix}2&-1\\-1&2\end{pmatrix}
=\frac13\begin{pmatrix}2&-1\\-1&2\\1&1\end{pmatrix}.
\]
当 \(A\) 行满秩时 \(Ax=b\) 对任意 \(b\) 有解，最小范数解为 \(x=A^+b\)，故 \(x=\frac13(1,1,2)^T\)。验证 \(Ax=(1,1)^T\)，且 \(x\) 与 \(N(A)\) 正交（\(N(A)\) 由 \((1,1,-1)^T\) 张成，内积为 \(\frac13(1+1-2)=0\)）。` },
{ id:'LA04-63', ch:4, type:'证明', diff:5, tags:'广义逆 Penrose条件 列满秩',
  q: String.raw`设 \(A\) 是 \(m\times n\) 实矩阵且 \(r(A)=n\)。令 \(A^+=(A^TA)^{-1}A^T\)。证明 \(A^+\) 满足四个 Penrose 条件：
\[
AA^+A=A,\quad A^+AA^+=A^+,\quad (AA^+)^T=AA^+,\quad (A^+A)^T=A^+A.
\]
`,
  a: String.raw`直接代入并用 \(A^TA\) 可逆即可验证四条。`,
  sol: String.raw`由 \(r(A)=n\) 知 \(A^TA\) 可逆。第一条：\(AA^+A=A(A^TA)^{-1}A^TA=A\)。第二条：\(A^+AA^+=(A^TA)^{-1}A^TA(A^TA)^{-1}A^T=(A^TA)^{-1}A^T=A^+\)。第三条：\(AA^+=A(A^TA)^{-1}A^T\)，其转置为 \(A(A^TA)^{-T}A^T=A(A^TA)^{-1}A^T\)（因 \(A^TA\) 对称），故对称。第四条：\(A^+A=(A^TA)^{-1}A^TA=I_n\)，对称。因此 \(A^+\) 是 Moore-Penrose 广义逆。` },
{ id:'LA04-64', ch:4, type:'计算', diff:5, tags:'广义逆 1-逆 通解',
  q: String.raw`设 \(A=\begin{pmatrix}1&2\\2&4\end{pmatrix}\)。求所有满足 \(AGA=A\) 的矩阵 \(G=\begin{pmatrix}a&b\\c&d\end{pmatrix}\)。`,
  a: String.raw`全部解为 \(a+2b+2c+4d=1\) 的矩阵 \(G\)。`,
  sol: String.raw`计算 \(AG=\begin{pmatrix}a+2c&b+2d\\2a+4c&2b+4d\end{pmatrix}=\begin{pmatrix}s&t\\2s&2t\end{pmatrix}\)，其中 \(s=a+2c,\ t=b+2d\)。再乘 \(A\)：
\[
AGA=\begin{pmatrix}s&t\\2s&2t\end{pmatrix}\begin{pmatrix}1&2\\2&4\end{pmatrix}
=(s+2t)\begin{pmatrix}1&2\\2&4\end{pmatrix}.
\]
要求 \(AGA=A\)，即 \(s+2t=1\)，也就是 \(a+2c+2b+4d=1\)。故所有满足该线性关系的 \(G\) 都是 \(A\) 的 \(\{1\}\)-广义逆；例如取 \(G=\begin{pmatrix}1&0\\0&0\end{pmatrix}\) 即满足。` },
{ id:'LA04-65', ch:4, type:'证明', diff:5, tags:'广义逆 相容性 方程组',
  q: String.raw`设 \(A\) 是 \(m\times n\) 矩阵，\(G\) 是 \(A\) 的某个 \(\{1\}\)-广义逆（即 \(AGA=A\)），\(b\in\mathbb R^m\)。证明 \(Ax=b\) 有解当且仅当 \(AGb=b\)；有解时 \(x=Gb\) 是一个解。`,
  a: String.raw`\(Ax=b\) 相容 \(\iff AGb=b\)，且 \(x=Gb\) 为特解。`,
  sol: String.raw`若 \(Ax=b\) 有解 \(x_0\)，则 \(b=Ax_0=AGAx_0=AGb\)（用了 \(AGA=A\)）。反之若 \(AGb=b\)，取 \(x=Gb\)，则 \(Ax=AGb=b\)，故有解。因此 \(AGb=b\) 是有解的充要条件，且此时 \(Gb\) 就是一个解。注意 \(G\) 不必是 Moore-Penrose 逆，任意 \(\{1\}\)-逆都可以用来判定相容性并给出一个特解。` },
{ id:'LA04-66', ch:4, type:'计算', diff:5, tags:'广义逆 最小范数解 行满秩',
  q: String.raw`设 \(A=\begin{pmatrix}1&0&1\\0&1&1\end{pmatrix}\)，\(b=(2,3)^T\)。求 \(Ax=b\) 的最小范数解。`,
  a: String.raw`\(x=\left(\frac13,\frac43,\frac53\right)^T\)，最小范数为 \(\sqrt{\frac{14}{3}}\)。`,
  sol: String.raw`方程即 \(x_1+x_3=2,\ x_2+x_3=3\)，令 \(x_3=t\)，得 \(x=(2-t,3-t,t)^T\)。范数平方
\[
f(t)=(2-t)^2+(3-t)^2+t^2=3t^2-10t+13,
\]
在 \(t=\frac{10}{6}=\frac53\) 处最小，此时 \(x=\left(\frac13,\frac43,\frac53\right)^T\)。最小范数平方为 \(f\left(\frac53\right)=\frac{14}{3}\)。也可用 \(A^+=A^T(AA^T)^{-1}\) 得同一结果。` },
{ id:'LA04-67', ch:4, type:'计算', diff:5, tags:'条件数 诱导范数 扰动分析',
  q: String.raw`设 \(A=\begin{pmatrix}1&2\\3&4\end{pmatrix}\)。求 \(\operatorname{cond}_\infty(A)\) 与 \(\operatorname{cond}_1(A)\)，并说明二者相等是否偶然。`,
  a: String.raw`\(\operatorname{cond}_\infty(A)=\operatorname{cond}_1(A)=21\)。`,
  sol: String.raw`\(A^{-1}=\begin{pmatrix}-2&1\\3/2&-1/2\end{pmatrix}\)。按无穷范数（最大行和）：\(\|A\|_\infty=7\)，\(\|A^{-1}\|_\infty=3\)，故 \(\operatorname{cond}_\infty=21\)。按 \(1\)-范数（最大列和）：\(\|A\|_1=6\)，\(\|A^{-1}\|_1=3.5\)，故 \(\operatorname{cond}_1=21\)。对任意方阵有 \(\|A\|_1=\|A^T\|_\infty\)，且 \((A^{-1})^T=(A^T)^{-1}\)，所以 \(\operatorname{cond}_1(A)=\operatorname{cond}_\infty(A^T)\)；本题恰好 \(A^T\) 与 \(A\) 的相应范数相同，故两者相等并非普遍规律。` },
{ id:'LA04-68', ch:4, type:'证明', diff:5, tags:'扰动分析 相对误差 条件数',
  q: String.raw`设 \(A\) 是可逆矩阵，\(Ax=b\)，\(A(x+\delta x)=b+\delta b\)。证明
\[
\frac{\|\delta x\|}{\|x\|}\le \operatorname{cond}(A)\frac{\|\delta b\|}{\|b\|}.
\]
`,
  a: String.raw`由 \(\delta x=A^{-1}\delta b\) 及 \(\|b\|\le\|A\|\|x\|\) 即得。`,
  sol: String.raw`两式相减得 \(A\,\delta x=\delta b\)，故 \(\delta x=A^{-1}\delta b\)，于是
\[
\|\delta x\|\le\|A^{-1}\|\,\|\delta b\|.
\]
又由 \(b=Ax\) 得 \(\|b\|\le\|A\|\,\|x\|\)，即 \(\frac1{\|x\|}\le\frac{\|A\|}{\|b\|}\)。两式相乘：
\[
\frac{\|\delta x\|}{\|x\|}\le\|A\|\|A^{-1}\|\frac{\|\delta b\|}{\|b\|}
=\operatorname{cond}(A)\frac{\|\delta b\|}{\|b\|}.
\]
这说明条件数刻画了右端相对扰动被放大的最坏倍数。` },
{ id:'LA04-69', ch:4, type:'计算', diff:5, tags:'扰动分析 条件数 数值实例',
  q: String.raw`设 \(A=\begin{pmatrix}1&2\\3&4\end{pmatrix}\)，\(b=(1,1)^T\)，右端扰动 \(\delta b=(0.01,0)^T\)。求解的扰动 \(\delta x\)，计算实际相对误差与误差上界 \(\operatorname{cond}_\infty(A)\frac{\|\delta b\|_\infty}{\|b\|_\infty}\)。`,
  a: String.raw`\(\delta x=(-0.02,0.015)^T\)，实际相对误差为 \(0.02\)，上界为 \(0.21\)。`,
  sol: String.raw`\(A^{-1}=\begin{pmatrix}-2&1\\3/2&-1/2\end{pmatrix}\)，故 \(x=A^{-1}b=(-1,1)^T\)，\(\delta x=A^{-1}\delta b=(-0.02,0.015)^T\)。按无穷范数，\(\|\delta x\|_\infty=0.02\)，\(\|x\|_\infty=1\)，实际相对误差为 \(0.02\)。右端 \(\|\delta b\|_\infty=0.01\)，\(\|b\|_\infty=1\)，相对扰动为 \(0.01\)。由上一题，上界为 \(\operatorname{cond}_\infty(A)\cdot0.01=21\cdot0.01=0.21\)。实际误差远小于最坏上界，说明条件数给出的是保守界。` },
{ id:'LA04-70', ch:4, type:'证明', diff:4, tags:'条件数 诱导范数 下界',
  q: String.raw`设 \(A\) 是可逆矩阵，\(\|\cdot\|\) 是任意诱导矩阵范数。证明 \(\operatorname{cond}(A)=\|A\|\|A^{-1}\|\ge1\)。`,
  a: String.raw`由 \(I=A^{-1}A\) 得 \(1=\|I\|\le\|A^{-1}\|\|A\|\)。`,
  sol: String.raw`诱导矩阵范数满足 \(\|I\|=1\) 与次乘性 \(\|XY\|\le\|X\|\|Y\|\)。由 \(A^{-1}A=I\) 得
\[
1=\|I\|=\|A^{-1}A\|\le\|A^{-1}\|\,\|A\|=\operatorname{cond}(A).
\]
故条件数总不小于 \(1\)。等号成立当且仅当 \(A\) 是正交矩阵的标量倍（在 \(2\)-范数下即所有奇异值相等），此时问题在最坏意义下条件最好。` },
{ id:'LA04-71', ch:4, type:'计算', diff:5, tags:'矩阵方程 AXB=C 逆矩阵',
  q: String.raw`设 \(A=\begin{pmatrix}1&2\\0&1\end{pmatrix}\)，\(B=\begin{pmatrix}1&0\\1&1\end{pmatrix}\)，\(C=\begin{pmatrix}3&1\\1&1\end{pmatrix}\)。解矩阵方程 \(AXB=C\)。`,
  a: String.raw`\(X=\begin{pmatrix}2&-1\\0&1\end{pmatrix}\)。`,
  sol: String.raw`\(|A|=1\)，\(|B|=1\)，故 \(A,B\) 都可逆，\(X=A^{-1}CB^{-1}\)。计算 \(A^{-1}=\begin{pmatrix}1&-2\\0&1\end{pmatrix}\)，\(B^{-1}=\begin{pmatrix}1&0\\-1&1\end{pmatrix}\)。先算
\[
A^{-1}C=\begin{pmatrix}1&-2\\0&1\end{pmatrix}\begin{pmatrix}3&1\\1&1\end{pmatrix}
=\begin{pmatrix}1&-1\\1&1\end{pmatrix},
\]
再右乘 \(B^{-1}\)：
\[
X=\begin{pmatrix}1&-1\\1&1\end{pmatrix}\begin{pmatrix}1&0\\-1&1\end{pmatrix}
=\begin{pmatrix}2&-1\\0&1\end{pmatrix}.
\]
代回 \(AXB\) 可验证等于 \(C\)。` },
{ id:'LA04-72', ch:4, type:'计算', diff:5, tags:'矩阵方程 Sylvester方程 对角矩阵',
  q: String.raw`设 \(A=\begin{pmatrix}1&0\\0&2\end{pmatrix}\)，\(B=\begin{pmatrix}3&0\\0&4\end{pmatrix}\)，\(C=\begin{pmatrix}4&10\\15&24\end{pmatrix}\)。解矩阵方程 \(AX+XB=C\)。`,
  a: String.raw`\(X=\begin{pmatrix}1&2\\3&4\end{pmatrix}\)。`,
  sol: String.raw`设 \(X=(x_{ij})\)。由于 \(A,B\) 都是对角矩阵，\(AX+XB\) 的第 \((i,j)\) 元素为 \((a_{ii}+b_{jj})x_{ij}\)，故方程按元素解耦：
\[
(1+3)x_{11}=4,\quad(1+4)x_{12}=10,\quad(2+3)x_{21}=15,\quad(2+4)x_{22}=24.
\]
于是 \(x_{11}=1,\ x_{12}=2,\ x_{21}=3,\ x_{22}=4\)，即 \(X=\begin{pmatrix}1&2\\3&4\end{pmatrix}\)。Sylvester 方程有唯一解的条件是 \(A\) 与 \(-B\) 没有公共特征值，本题特征值为 \(1,2\) 与 \(-3,-4\)，确实互异。` },
{ id:'LA04-73', ch:4, type:'计算', diff:5, tags:'矩阵方程 幂零矩阵 逆矩阵',
  q: String.raw`设 \(A=\begin{pmatrix}1&1\\0&1\end{pmatrix}\)，\(B=\begin{pmatrix}3&4\\1&2\end{pmatrix}\)。解矩阵方程 \(A^2X=B\)。`,
  a: String.raw`\(X=\begin{pmatrix}1&0\\1&2\end{pmatrix}\)。`,
  sol: String.raw`\(A=I+N\)，其中 \(N=\begin{pmatrix}0&1\\0&0\end{pmatrix}\)，\(N^2=0\)。于是 \(A^{-1}=I-N=\begin{pmatrix}1&-1\\0&1\end{pmatrix}\)，且
\[
A^{-2}=(A^{-1})^2=\begin{pmatrix}1&-2\\0&1\end{pmatrix}.
\]
由 \(A^2X=B\) 得 \(X=A^{-2}B\)，故
\[
X=\begin{pmatrix}1&-2\\0&1\end{pmatrix}\begin{pmatrix}3&4\\1&2\end{pmatrix}
=\begin{pmatrix}1&0\\1&2\end{pmatrix}.
\]
也可直接算 \(A^2=\begin{pmatrix}1&2\\0&1\end{pmatrix}\) 再验证 \(A^2X=B\)。` },
{ id:'LA04-74', ch:4, type:'计算', diff:5, tags:'矩阵方程 逆矩阵 提取公因式',
  q: String.raw`设 \(A=\begin{pmatrix}2&1\\0&3\end{pmatrix}\)。解矩阵方程 \(AX=A+X\)。`,
  a: String.raw`\(X=\begin{pmatrix}2&-\frac12\\0&\frac32\end{pmatrix}\)。`,
  sol: String.raw`移项得 \(AX-X=A\)，即 \((A-I)X=A\)。计算 \(A-I=\begin{pmatrix}1&1\\0&2\end{pmatrix}\)，\(|A-I|=2\neq0\)，故
\[
(A-I)^{-1}=\begin{pmatrix}1&-\frac12\\0&\frac12\end{pmatrix}.
\]
于是
\[
X=(A-I)^{-1}A=\begin{pmatrix}1&-\frac12\\0&\frac12\end{pmatrix}\begin{pmatrix}2&1\\0&3\end{pmatrix}
=\begin{pmatrix}2&-\frac12\\0&\frac32\end{pmatrix}.
\]
代回验证：\(AX=\begin{pmatrix}4&\frac12\\0&\frac92\end{pmatrix}\)，\(A+X=\begin{pmatrix}4&\frac12\\0&\frac92\end{pmatrix}\)，成立。` },
{ id:'LA04-75', ch:4, type:'计算', diff:5, tags:'矩阵方程 奇异矩阵 通解',
  q: String.raw`设 \(A=\begin{pmatrix}1&2\\2&4\end{pmatrix}\)，\(B=\begin{pmatrix}1&2\\3&6\end{pmatrix}\)。解矩阵方程 \(XA=B\)。`,
  a: String.raw`\(X=\begin{pmatrix}1-2s&s\\3-2t&t\end{pmatrix},\ s,t\in\mathbb R\)。`,
  sol: String.raw`设 \(X=\begin{pmatrix}a&b\\c&d\end{pmatrix}\)。则
\[
XA=\begin{pmatrix}a+2b&2a+4b\\c+2d&2c+4d\end{pmatrix}.
\]
与 \(B\) 比较得 \(a+2b=1,\ c+2d=3\)，而第二列条件 \(2(a+2b)=2\)、\(2(c+2d)=6\) 自动满足。故 \(a=1-2b,\ c=3-2d\)，令 \(b=s,d=t\)，得 \(X=\begin{pmatrix}1-2s&s\\3-2t&t\end{pmatrix}\)。这里 \(B\) 的每一行都属于 \(A\) 的行空间，故方程相容；由于 \(A\) 奇异，解不唯一。` },
{ id:'LA04-76', ch:4, type:'计算', diff:5, tags:'矩阵方程 奇异矩阵 相容性 通解',
  q: String.raw`设 \(A=\begin{pmatrix}1&2\\2&4\end{pmatrix}\)，\(B=\begin{pmatrix}1&3\\2&6\end{pmatrix}\)。解矩阵方程 \(AX=B\)。`,
  a: String.raw`\(X=\begin{pmatrix}1-2s&3-2t\\s&t\end{pmatrix},\ s,t\in\mathbb R\)。`,
  sol: String.raw`设 \(X=\begin{pmatrix}a&b\\c&d\end{pmatrix}\)。则
\[
AX=\begin{pmatrix}a+2c&b+2d\\2a+4c&2b+4d\end{pmatrix}.
\]
与 \(B\) 比较得 \(a+2c=1,\ b+2d=3\)，第二行条件自动满足。故 \(a=1-2c,\ b=3-2d\)，令 \(c=s,d=t\)，得 \(X=\begin{pmatrix}1-2s&3-2t\\s&t\end{pmatrix}\)。这里 \(B\) 的两列 \((1,2)^T,(3,6)^T\) 都在 \(\operatorname{col}(A)=\operatorname{span}\{(1,2)^T\}\) 中，故方程相容；\(A\) 奇异导致解含两个自由参数。` },
{ id:'LA04-77', ch:4, type:'证明', diff:5, tags:'矩阵方程 解空间维数 列空间',
  q: String.raw`设 \(A\) 是 \(m\times n\) 矩阵，\(r(A)=r\)。证明矩阵方程 \(AX=0\)（\(X\) 为 \(n\times p\) 矩阵）的解空间维数为 \(p(n-r)\)。`,
  a: String.raw`每一列都属于 \(N(A)\)，故解空间同构于 \(N(A)^p\)，维数为 \(p(n-r)\)。`,
  sol: String.raw`把 \(X\) 按列写成 \(X=(\xi_1,\dots,\xi_p)\)。则 \(AX=0\) 等价于每个 \(A\xi_j=0\)，即每一列 \(\xi_j\in N(A)\)。因此解空间等于 \(N(A)\times\cdots\times N(A)\)（\(p\) 个），其维数为 \(p\dim N(A)=p(n-r)\)。具体地基可取：设 \(\eta_1,\dots,\eta_{n-r}\) 是 \(N(A)\) 的基，对每个 \(j=1,\dots,p\) 与每个 \(k\)，令 \(X\) 的第 \(j\) 列为 \(\eta_k\)、其余列为零，共 \(p(n-r)\) 个矩阵，它们线性无关且张成整个解空间。` },
{ id:'LA04-78', ch:4, type:'计算', diff:4, tags:'矩阵方程 可交换矩阵 中心化子',
  q: String.raw`设 \(A=\begin{pmatrix}1&2\\0&1\end{pmatrix}\)。求所有与 \(A\) 可交换的矩阵 \(X\)，即解矩阵方程 \(AX=XA\)。`,
  a: String.raw`\(X=\begin{pmatrix}a&b\\0&a\end{pmatrix},\ a,b\in\mathbb R\)。`,
  sol: String.raw`设 \(X=\begin{pmatrix}a&b\\c&d\end{pmatrix}\)。计算
\[
AX=\begin{pmatrix}a+2c&b+2d\\c&d\end{pmatrix},\qquad
XA=\begin{pmatrix}a&2a+b\\c&2c+d\end{pmatrix}.
\]
比较元素：由 \((1,1)\) 得 \(a+2c=a\)，故 \(c=0\)；由 \((2,2)\) 得 \(d=2c+d\)，同样 \(c=0\)；由 \((1,2)\) 得 \(b+2d=2a+b\)，故 \(d=a\)。于是 \(X=\begin{pmatrix}a&b\\0&a\end{pmatrix}=aI+b(A-I)\)，即 \(A\) 的多项式。这也说明 \(A\) 的最小多项式为 \((t-1)^2\)，其中心化子维数为 \(2\)。` },
{ id:'LA04-79', ch:4, type:'证明', diff:5, tags:'矩阵方程 交换子 幂零矩阵 迹',
  q: String.raw`设 \(A,X\) 都是 \(n\) 阶复矩阵，且 \(AX-XA=A\)。证明 \(A\) 是幂零矩阵。`,
  a: String.raw`对一切 \(k\ge1\) 有 \(\operatorname{tr}(A^k)=0\)，故 \(A\) 的特征值全为零，从而是幂零矩阵。`,
  sol: String.raw`先用归纳法证明 \(A^kX-XA^k=kA^k\)：\(k=1\) 即题设；若对 \(k\) 成立，则
\[
A^{k+1}X-XA^{k+1}=A(A^kX)- (XA^k)A
=A(XA^k+kA^k)-XA^{k+1}
=(k+1)A^{k+1}.
\]
两边取迹，利用 \(\operatorname{tr}(A^kX)=\operatorname{tr}(XA^k)\)，得 \(0=k\operatorname{tr}(A^k)\)，故 \(\operatorname{tr}(A^k)=0\) 对一切 \(k\ge1\) 成立。设 \(A\) 的特征值为 \(\lambda_1,\dots,\lambda_n\)，则幂和 \(\sum\lambda_i^k=0\)。由牛顿恒等式，\(A\) 的全部初等对称多项式为零，故特征多项式为 \(t^n\)，所有特征值为零。复矩阵特征值全为零即幂零。` },
{ id:'LA04-80', ch:4, type:'计算', diff:5, tags:'矩阵方程 含参数 特征值 相容性',
  q: String.raw`设 \(A=\begin{pmatrix}1&2\\2&1\end{pmatrix}\)，\(B=I\)。讨论 \(\lambda\) 取何值时矩阵方程 \((A-\lambda I)X=B\) 有唯一解；并求 \(\lambda=-1\) 与 \(\lambda=3\) 时的全部解（有解时）。`,
  a: String.raw`\(\lambda\neq3,-1\) 时唯一解；\(\lambda=3\) 时无解；\(\lambda=-1\) 时 \(X=\begin{pmatrix}\frac12-s&-t\\s&t\end{pmatrix}\)。`,
  sol: String.raw`\(A\) 的特征值为 \(3,-1\)（由 \(|A-\lambda I|=(\lambda-3)(\lambda+1)\)）。当 \(\lambda\neq3,-1\) 时 \(A-\lambda I\) 可逆，方程有唯一解 \(X=(A-\lambda I)^{-1}\)。当 \(\lambda=3\) 时
\[
A-3I=\begin{pmatrix}-2&2\\2&-2\end{pmatrix},
\]
方程第一行给出 \(-2x_{11}+2x_{21}=1\)，第二行给出 \(2x_{11}-2x_{21}=0\)，即 \(x_{11}=x_{21}\)，代入第一行得 \(0=1\)，无解。当 \(\lambda=-1\) 时
\[
A+I=\begin{pmatrix}2&2\\2&2\end{pmatrix},
\]
方程等价于 \(2(x_{11}+x_{21})=1,\ 2(x_{12}+x_{22})=0\)，即 \(x_{11}+x_{21}=\frac12,\ x_{12}+x_{22}=0\)。令 \(x_{21}=s,x_{22}=t\)，得 \(X=\begin{pmatrix}\frac12-s&-t\\s&t\end{pmatrix}\)。` },
{ id:'LA04-81', ch:4, type:'计算', diff:5, tags:'Cramer 法则 范德蒙德行列式 四元方程组',
  q: String.raw`用 Cramer 法则解方程组
\[
x_1+x_2+x_3+x_4=1,\qquad x_1+2x_2+4x_3+8x_4=3,
\]
\[
x_1+3x_2+9x_3+27x_4=7,\qquad x_1+4x_2+16x_3+64x_4=15.
\]`,
  a: String.raw`\(x=(-1,\frac83,-1,\frac13)^T\)。`,
  sol: String.raw`系数行列式是节点 \(1,2,3,4\) 的范德蒙德行列式
\[
D=\prod_{1\le i<j\le4}(j-i)=1\cdot2\cdot3\cdot1\cdot2\cdot1=12\neq0,
\]
故由 Cramer 法则解唯一。把第 \(j\) 列换成右端向量，计算得
\[
D_1=-12,\qquad D_2=32,\qquad D_3=-12,\qquad D_4=4.
\]
于是
\[
x_1=\frac{D_1}{D}=-1,\quad x_2=\frac{32}{12}=\frac83,\quad x_3=-1,\quad x_4=\frac{4}{12}=\frac13.
\]
代回第一、四式可验算成立。` },
{ id:'LA04-82', ch:4, type:'证明', diff:5, tags:'秩 零空间 列空间 秩-零化度定理',
  q: String.raw`设 \(A\) 为 \(m\times n\) 实矩阵，\(B\) 为 \(n\times p\) 矩阵，记 \(R(B)\) 为 \(B\) 的列空间。证明
\[
r(AB)=r(B)-\dim\bigl(N(A)\cap R(B)\bigr).
\]
并由此证明：若 \(AB=0\)，则 \(r(A)+r(B)\le n\)。`,
  a: String.raw`等式成立；当 \(AB=0\) 时 \(R(B)\subseteq N(A)\)，故 \(r(A)+r(B)\le n\)。`,
  sol: String.raw`把 \(A\) 看作线性映射 \(\mathbb R^n\to\mathbb R^m\)，并限制在子空间 \(R(B)\) 上，记该限制为 \(T=A|_{R(B)}\)。则 \(T\) 的定义域为 \(R(B)\)，核为
\[
\ker T=N(A)\cap R(B),
\]
像为 \(A(R(B))=R(AB)\)（因为 \(AB\) 的列正是 \(A\) 作用于 \(B\) 的列）。对 \(T\) 用秩-零化度定理：
\[
\dim R(B)=\dim\ker T+\dim R(AB),
\]
即 \(r(B)=\dim(N(A)\cap R(B))+r(AB)\)，移项得证。若 \(AB=0\)，则对任意 \(y\in R(B)\) 有 \(Ay=0\)，故 \(R(B)\subseteq N(A)\)，于是
\[
r(B)\le\dim N(A)=n-r(A),
\]
即 \(r(A)+r(B)\le n\)。` },
{ id:'LA04-83', ch:4, type:'计算', diff:5, tags:'加权最小二乘 法方程 正定矩阵',
  q: String.raw`设
\[
A=\begin{pmatrix}1&0\\0&1\\1&1\end{pmatrix},\quad b=\begin{pmatrix}1\\2\\4\end{pmatrix},\quad W=\operatorname{diag}(1,2,1).
\]
求使加权残差平方和 \(F(x)=(Ax-b)^TW(Ax-b)\) 最小的 \(x\)，并求最小值。`,
  a: String.raw`\(x=(\frac75,\frac{11}5)^T\)，最小值为 \(\frac25\)。`,
  sol: String.raw`展开得
\[
F(x)=x^TA^TWAx-2b^TWAx+b^TWb.
\]
由于 \(A^TWA\) 正定，极小值点满足加权法方程 \(A^TWAx=A^TWb\)。计算
\[
A^TWA=\begin{pmatrix}2&1\\1&3\end{pmatrix},\qquad A^TWb=\begin{pmatrix}5\\8\end{pmatrix}.
\]
解方程组 \(2x_1+x_2=5,\ x_1+3x_2=8\)，得 \(x_1=\frac75,\ x_2=\frac{11}5\)。此时
\[
Ax-b=\left(\frac25,\frac15,-\frac25\right)^T,
\]
故
\[
F_{\min}=1\cdot\frac4{25}+2\cdot\frac1{25}+1\cdot\frac4{25}=\frac25.
\]` },
{ id:'LA04-84', ch:4, type:'计算', diff:5, tags:'秩一矩阵 广义逆 最小范数最小二乘解',
  q: String.raw`设 \(u=(1,1,1)^T,\ v=(1,2,2)^T,\ A=uv^T,\ b=(1,2,3)^T\)。求 \(A\) 的 Moore-Penrose 逆 \(A^+\)，并求 \(Ax=b\) 的最小范数最小二乘解及残差平方和。`,
  a: String.raw`\(A^+=\frac1{27}\begin{pmatrix}1&1&1\\2&2&2\\2&2&2\end{pmatrix}\)，\(x^*=(\frac29,\frac49,\frac49)^T\)，残差平方和为 \(2\)。`,
  sol: String.raw`对秩一矩阵 \(A=uv^T\)，有
\[
A^+=\frac{vu^T}{\|u\|^2\|v\|^2}.
\]
这里 \(\|u\|^2=3,\ \|v\|^2=9\)，故
\[
A^+=\frac1{27}vu^T=\frac1{27}\begin{pmatrix}1&1&1\\2&2&2\\2&2&2\end{pmatrix}.
\]
最小范数最小二乘解为
\[
x^*=A^+b=\frac1{27}v(u^Tb)=\frac6{27}v=\left(\frac29,\frac49,\frac49\right)^T.
\]
此时 \(Ax^*=u(v^Tx^*)=2u=(2,2,2)^T\)，残差
\[
b-Ax^*=(-1,0,1)^T,
\]
平方和为 \(1+0+1=2\)。` },
{ id:'LA04-85', ch:4, type:'计算', diff:5, tags:'参数讨论 行列式 唯一解 无穷多解',
  q: String.raw`讨论参数 \(a\) 取何值时方程组
\[
x_1+x_2+ax_3=1,\qquad x_1+ax_2+x_3=1,\qquad ax_1+x_2+x_3=1
\]
有唯一解、无穷多解、无解，并在有解时求出全部解。`,
  a: String.raw`\(a\neq1,-2\) 时唯一解 \(x=(\frac1{a+2},\frac1{a+2},\frac1{a+2})^T\)；\(a=1\) 时无穷多解 \((s,t,1-s-t)^T\)；\(a=-2\) 时无解。`,
  sol: String.raw`系数行列式为
\[
D=\begin{vmatrix}1&1&a\\1&a&1\\a&1&1\end{vmatrix}=-(a-1)^2(a+2).
\]
当 \(a\neq1,-2\) 时 \(D\neq0\)，解唯一。三式相减得 \((1-a)(x_2-x_3)=0,\ (1-a)(x_1-x_2)=0\)，故 \(x_1=x_2=x_3\)，代入第一式得 \((a+2)x_1=1\)，即
\[
x_1=x_2=x_3=\frac1{a+2}.
\]
当 \(a=1\) 时三式都化为 \(x_1+x_2+x_3=1\)，通解为 \((s,t,1-s-t)^T\)。当 \(a=-2\) 时三式相加左边为 \(0\)、右边为 \(3\)，矛盾，故无解。` },
{ id:'LA04-86', ch:4, type:'计算', diff:5, tags:'参数讨论 最小二乘 最小范数解 法方程',
  q: String.raw`设
\[
A=\begin{pmatrix}1&1&1\\1&2&3\\2&3&4\end{pmatrix},\quad b=\begin{pmatrix}1\\2\\a\end{pmatrix}.
\]
讨论 \(a\) 为何值时 \(Ax=b\) 有解；有解时求通解，无解时求最小范数最小二乘解及残差平方和。`,
  a: String.raw`\(a=3\) 时有解，通解 \(x=(t,1-2t,t)^T\)；\(a\neq3\) 时最小范数最小二乘解为 \(x^*=(\frac{5a}{18}-\frac12,\frac a9,\frac12-\frac a{18})^T\)，残差平方和为 \(3(1-\frac a3)^2\)。`,
  sol: String.raw`注意第三行等于前两行之和，故 \(r(A)=2\)，增广矩阵相容当且仅当 \(a=3\)。当 \(a=3\) 时方程等价于
\[
x_1+x_2+x_3=1,\qquad x_2+2x_3=1,
\]
令 \(x_3=t\)，得通解 \(x=(t,1-2t,t)^T\)。当 \(a\neq3\) 时解法方程 \(A^TAx=A^Tb\)，计算
\[
A^TA=\begin{pmatrix}6&9&12\\9&14&19\\12&19&26\end{pmatrix},\quad A^Tb=\begin{pmatrix}3+2a\\5+3a\\7+4a\end{pmatrix}.
\]
解得全部最小二乘解
\[
x=\left(\frac a3-1+t,\ 1-2t,\ t\right)^T.
\]
最小范数要求 \(\|x\|^2\) 最小，对 \(t\) 求导得 \(t=\frac12-\frac a{18}\)，故
\[
x^*=\left(\frac{5a}{18}-\frac12,\ \frac a9,\ \frac12-\frac a{18}\right)^T.
\]
此时 \(Ax^*=(\frac a3,\frac a3+1,\frac{2a}3+1)^T\)，残差 \(b-Ax^*=(1-\frac a3)(1,1,-1)^T\)，平方和为 \(3(1-\frac a3)^2\)。` },
{ id:'LA04-87', ch:4, type:'计算', diff:5, tags:'Sylvester 矩阵方程 唯一解 特征值',
  q: String.raw`解矩阵方程 \(AX+XB=C\)，其中
\[
A=\begin{pmatrix}1&1\\0&2\end{pmatrix},\quad B=\begin{pmatrix}3&0\\1&3\end{pmatrix},\quad C=I_2.
\]
并说明解唯一的原因。`,
  a: String.raw`\(X=\begin{pmatrix}\frac{109}{400}&-\frac1{20}\\-\frac1{25}&\frac15\end{pmatrix}\)。`,
  sol: String.raw`设 \(X=\begin{pmatrix}a&b\\c&d\end{pmatrix}\)。计算
\[
AX=\begin{pmatrix}a+c&b+d\\2c&2d\end{pmatrix},\qquad XB=\begin{pmatrix}3a+b&3b\\3c+d&3d\end{pmatrix}.
\]
相加并令其等于 \(I_2\)，得
\[
4a+b+c=1,\quad 4b+d=0,\quad 5c+d=0,\quad 5d=1.
\]
由第四式 \(d=\frac15\)，于是 \(b=-\frac1{20},\ c=-\frac1{25}\)，再由第一式
\[
4a=1+\frac1{20}+\frac1{25}=\frac{109}{100},
\]
故 \(a=\frac{109}{400}\)。唯一性：\(A\) 的特征值为 \(1,2\)，\(B\) 的特征值为 \(3,3\)，无公共特征值，故 Sylvester 算子 \(X\mapsto AX+XB\) 可逆。` },
{ id:'LA04-88', ch:4, type:'证明', diff:5, tags:'Sherman-Morrison 公式 逆矩阵 扰动',
  q: String.raw`设 \(A\) 为 \(n\) 阶可逆矩阵，\(u,v\in\mathbb R^n\)，且 \(1+v^TA^{-1}u\neq0\)。证明 Sherman-Morrison 公式
\[
(A+uv^T)^{-1}=A^{-1}-\frac{A^{-1}uv^TA^{-1}}{1+v^TA^{-1}u}.
\]
并用它求 \(A=\begin{pmatrix}2&1\\1&1\end{pmatrix},\ u=(1,1)^T,\ v=(0,1)^T\) 时 \(A+uv^T\) 的逆。`,
  a: String.raw`公式成立；本例 \((A+uv^T)^{-1}=\begin{pmatrix}1&-1\\-\frac12&1\end{pmatrix}\)。`,
  sol: String.raw`记 \(\beta=v^TA^{-1}u\)。把候选逆矩阵与 \(A+uv^T\) 相乘：
\[
(A+uv^T)\left(A^{-1}-\frac{A^{-1}uv^TA^{-1}}{1+\beta}\right)
=I+uv^TA^{-1}-\frac{uv^TA^{-1}}{1+\beta}-\frac{u(v^TA^{-1}u)v^TA^{-1}}{1+\beta}.
\]
注意 \(v^TA^{-1}u=\beta\) 是数，故最后一项为 \(-\frac{\beta uv^TA^{-1}}{1+\beta}\)，从而
\[
I+\left(1-\frac1{1+\beta}-\frac{\beta}{1+\beta}\right)uv^TA^{-1}=I.
\]
方阵若有左逆，则左逆也是右逆，故候选矩阵就是 \((A+uv^T)^{-1}\)。本例
\[
A^{-1}=\begin{pmatrix}1&-1\\-1&2\end{pmatrix},\qquad \beta=v^TA^{-1}u=1.
\]
代入公式得
\[
(A+uv^T)^{-1}=\begin{pmatrix}1&-1\\-1&2\end{pmatrix}-\frac12\begin{pmatrix}0&0\\-1&2\end{pmatrix}
=\begin{pmatrix}1&-1\\-\frac12&1\end{pmatrix}.
\]` },
{ id:'LA04-89', ch:4, type:'计算', diff:5, tags:'解空间 正交补 齐次方程组 非齐次方程组',
  q: String.raw`设 \(W=\operatorname{span}\{(1,1,0)^T,(0,1,1)^T\}\subset\mathbb R^3\)。求所有以 \(W\) 为解空间的齐次线性方程组；再求一个以 \((1,0,0)^T+W\) 为解集的非齐次线性方程组。`,
  a: String.raw`齐次方程组为 \(c(x_1-x_2+x_3)=0\ (c\neq0)\)，即行向量都是 \((1,-1,1)\) 的倍数；非齐次可取 \(x_1-x_2+x_3=1\)。`,
  sol: String.raw`\(W\) 中向量满足 \(x_1-x_2+x_3=0\)：对两个生成元分别有 \(1-1+0=0\)、\(0-1+1=0\)，故 \(W\subseteq\ker(1,-1,1)\)。矩阵
\[
\begin{pmatrix}1&1&0\\0&1&1\end{pmatrix}
\]
的秩为 \(2\)，故 \(\dim W=2\)；而 \((1,-1,1)\) 非零，\(\ker(1,-1,1)\) 的维数也为 \(2\)，所以 \(W=\ker(1,-1,1)\)。任何以 \(W\) 为解空间的齐次方程组的系数矩阵行空间必须等于
\[
W^\perp=\operatorname{span}\{(1,-1,1)\},
\]
故每个方程都是 \(c(x_1-x_2+x_3)=0\ (c\neq0)\)，可只取一个方程。对非齐次方程 \(x_1-x_2+x_3=1\)，\((1,0,0)^T\) 是一个特解，对应齐次方程的解空间为 \(W\)，故解集为 \((1,0,0)^T+W\)。` },
{ id:'LA04-90', ch:4, type:'计算', diff:5, tags:'矩阵方程 奇异系数矩阵 通解 相容性',
  q: String.raw`设
\[
A=\begin{pmatrix}1&0&1\\0&1&1\\1&1&2\end{pmatrix},\quad B=\begin{pmatrix}1&0\\0&1\\1&1\end{pmatrix}.
\]
判断矩阵方程 \(AX=B\) 是否相容；若相容，求全部解 \(X\)。`,
  a: String.raw`相容，通解
\[
X=\begin{pmatrix}1-t&-s\\-t&1-s\\t&s\end{pmatrix},\quad s,t\in\mathbb R.
\]`,
  sol: String.raw`\(A\) 的第三行等于前两行之和，故 \(r(A)=2\)，且
\[
N(A)=\operatorname{span}\{(1,1,-1)^T\}.
\]
\(B\) 的两列分别为 \((1,0,1)^T,(0,1,1)^T\)，都满足第三分量等于前两个分量之和，故都在 \(A\) 的列空间中，方程相容。对第一列解 \(Ax=(1,0,1)^T\)，由 \(x_1+x_3=1,\ x_2+x_3=0\) 得 \((1-t,-t,t)^T\)。对第二列解 \(Ax=(0,1,1)^T\)，得 \((-s,1-s,s)^T\)。合并两列即得
\[
X=\begin{pmatrix}1-t&-s\\-t&1-s\\t&s\end{pmatrix}.
\]` },
{ id:'LA04-91', ch:4, type:'计算', diff:5, tags:'线性方程组 多项式插值 Hermite 条件',
  q: String.raw`求次数不超过 \(3\) 的多项式 \(p(x)=a_0+a_1x+a_2x^2+a_3x^3\)，使
\[
p(1)=1,\quad p'(1)=2,\quad p(2)=3,\quad p'(2)=4.
\]
并说明解唯一。`,
  a: String.raw`\(p(x)=-5+12x-8x^2+2x^3\)。`,
  sol: String.raw`把条件写成关于 \(a_0,a_1,a_2,a_3\) 的线性方程组：
\[
a_0+a_1+a_2+a_3=1,\qquad a_1+2a_2+3a_3=2,
\]
\[
a_0+2a_1+4a_2+8a_3=3,\qquad a_1+4a_2+12a_3=4.
\]
系数行列式是节点 \(1,2\) 的二重 Hermite 插值矩阵的行列式，计算得 \(1\neq0\)，故解唯一。由第三式减第一式得 \(a_1+3a_2+7a_3=2\)，与第二式相减得 \(a_2+4a_3=0\)，故 \(a_2=-4a_3\)。代入第四式得 \(a_1-16a_3+12a_3=4\)，即 \(a_1=4+4a_3\)；再代入第二式得
\[
4+4a_3-8a_3+3a_3=2,
\]
故 \(a_3=2\)。于是 \(a_2=-8,\ a_1=12,\ a_0=1-12+8-2=-5\)，即 \(p(x)=-5+12x-8x^2+2x^3\)。` },
{ id:'LA04-92', ch:4, type:'证明', diff:5, tags:'正定矩阵 二次型 最小值 线性方程组',
  q: String.raw`设 \(A=\begin{pmatrix}2&1\\1&2\end{pmatrix},\ b=(1,3)^T\)，\(f(x)=\frac12x^TAx-b^Tx\)。证明 \(Ax=b\) 的唯一解 \(x^*\) 是 \(f\) 在 \(\mathbb R^2\) 上的唯一最小值点，并求最小值。`,
  a: String.raw`\(x^*=(-\frac13,\frac53)^T\)，最小值为 \(-\frac73\)。`,
  sol: String.raw`\(A\) 的顺序主子式为 \(2>0,\ \det A=3>0\)，故 \(A\) 正定。由 \(Ax^*=b\)，对任意 \(x\) 配方：
\[
f(x)=\frac12(x-x^*)^TA(x-x^*)-\frac12b^TA^{-1}b.
\]
因为 \(A\) 正定，第一项非负，且仅当 \(x=x^*\) 时为零，故 \(x^*\) 是唯一最小值点。解
\[
2x_1+x_2=1,\qquad x_1+2x_2=3,
\]
得 \(x_1=-\frac13,\ x_2=\frac53\)。又
\[
b^TA^{-1}b=\frac13(2-6-6+18)=\frac{14}3,
\]
故最小值为 \(-\frac12\cdot\frac{14}3=-\frac73\)。` },
{ id:'LA04-93', ch:4, type:'证明', diff:5, tags:'矩阵方程 广义逆 列空间 行空间',
  q: String.raw`设 \(A\) 为 \(m\times n\) 矩阵，\(B\) 为 \(p\times q\) 矩阵，\(C\) 为 \(m\times q\) 矩阵。证明矩阵方程 \(AXB=C\) 有解的充要条件是
\[
R(C)\subseteq R(A),\qquad R(C^T)\subseteq R(B^T).
\]
并在有解时给出用广义逆表示的通解。`,
  a: String.raw`条件必要且充分；若 \(A^-,B^-\) 分别为 \(A,B\) 的 \(\{1\}\)-逆，则通解为
\[
X=A^-CB^-+(I-A^-A)U+V(I-BB^-).
\]`,
  sol: String.raw`必要性：若 \(AXB=C\)，则 \(C\) 的每一列都是 \(A\) 的列的线性组合，故 \(R(C)\subseteq R(A)\)；转置得 \(C^T=B^TX^TA^T\)，故 \(R(C^T)\subseteq R(B^T)\)。充分性：取 \(\{1\}\)-逆 \(A^-,B^-\)。由 \(R(C)\subseteq R(A)\) 得 \(AA^-C=C\)，由 \(R(C^T)\subseteq R(B^T)\) 得 \(CB^-B=C\)，于是
\[
A(A^-CB^-)B=(AA^-C)(B^-B)=C,
\]
故 \(X_0=A^-CB^-\) 是特解。令 \(P_A=A^-A,\ P_B=BB^-\)。齐次方程 \(AYB=0\) 的任一解 \(Y\) 可写成
\[
Y=(I-P_A)Y+P_AY,
\]
且由 \(AYB=0\) 左乘 \(A^-\)、右乘 \(B^-\) 得 \(P_AYP_B=0\)，故 \(P_AY=P_AY(I-P_B)\)。因此
\[
Y=(I-A^-A)U+V(I-BB^-),
\]
其中 \(U=Y,\ V=P_AY\)。所以通解为
\[
X=A^-CB^-+(I-A^-A)U+V(I-BB^-).
\]` },
{ id:'LA04-94', ch:4, type:'计算', diff:5, tags:'四个基本子空间 基与维数 秩-零化度定理',
  q: String.raw`设
\[
A=\begin{pmatrix}1&2&1&0\\2&4&3&1\\3&6&4&1\end{pmatrix}.
\]
求 \(A\) 的行空间、零空间、列空间、左零空间的一组基与维数，并验证维数关系。`,
  a: String.raw`行空间基 \(\{(1,2,1,0),(2,4,3,1)\}\)，零空间基 \(\{(1,0,-1,1),(0,1,-2,2)\}\)，列空间基 \(\{(1,2,3),(1,3,4)\}\)，左零空间基 \(\{(-1,-1,1)\}\)；维数分别为 \(2,2,2,1\)。`,
  sol: String.raw`对 \(A\) 行化简：
\[
\begin{pmatrix}1&2&1&0\\2&4&3&1\\3&6&4&1\end{pmatrix}\to\begin{pmatrix}1&2&0&-1\\0&0&1&1\\0&0&0&0\end{pmatrix},
\]
故 \(r(A)=2\)，行空间基可取原矩阵前两行 \((1,2,1,0),(2,4,3,1)\)。解 \(Ax=0\)：由化简式 \(x_1+2x_2-x_4=0,\ x_3+x_4=0\)，令 \(x_2=s,x_4=t\)，得
\[
x=s(-2,1,0,0)+t(1,0,-1,1),
\]
故零空间基可取 \(\{(1,0,-1,1),(0,1,-2,2)\}\)（与上式张成同一空间）。列空间中 \(c_2=2c_1,\ c_4=c_3-c_1\)，故基为 \(\{(1,2,3),(1,3,4)\}\)。解 \(A^Ty=0\)：方程化为 \(y_1+2y_2+3y_3=0,\ y_1+3y_2+4y_3=0,\ y_2+y_3=0\)，得 \(y=t(-1,-1,1)\)，故左零空间基为 \(\{(-1,-1,1)\}\)。维数分别为 \(2,4-2=2,2,3-2=1\)，与基的个数一致。` },
{ id:'LA04-95', ch:4, type:'计算', diff:5, tags:'通解 最小范数解 正交投影 五元方程组',
  q: String.raw`设
\[
A=\begin{pmatrix}1&1&0&0&1\\0&1&1&0&0\\0&0&1&1&1\end{pmatrix},\quad b=(1,1,1)^T.
\]
求 \(Ax=b\) 的通解，并求其中范数最小的解。`,
  a: String.raw`通解 \(x=(1-s-2t,s+t,1-s-t,s,t)^T\)；最小范数解 \(x^*=(\frac16,\frac12,\frac12,\frac16,\frac13)^T\)，\(\|x^*\|^2=\frac23\)。`,
  sol: String.raw`系数矩阵的秩为 \(3\)，未知数 \(5\) 个，故通解含两个自由参数。由第二式 \(x_2+x_3=1\)、第三式 \(x_3+x_4+x_5=1\)、第一式 \(x_1+x_2+x_5=1\)。令 \(x_4=s,x_5=t\)，则
\[
x_3=1-s-t,\quad x_2=s+t,\quad x_1=1-s-2t,
\]
即 \(x=(1-s-2t,s+t,1-s-t,s,t)^T\)。零空间的一组基为
\[
(-1,1,-1,1,0)^T,\qquad(-2,1,-1,0,1)^T.
\]
最小范数解与零空间正交，令 \(x\) 与这两个基向量正交，得
\[
-2+4s+4t=0,\qquad -3+4s+7t=0.
\]
解得 \(s=\frac16,\ t=\frac13\)，故
\[
x^*=\left(\frac16,\frac12,\frac12,\frac16,\frac13\right)^T,
\]
且 \(\|x^*\|^2=\frac1{36}+\frac14+\frac14+\frac1{36}+\frac19=\frac23\)。` },
{ id:'LA04-96', ch:4, type:'计算', diff:5, tags:'矩阵方程 Lyapunov 方程 唯一解',
  q: String.raw`设 \(A=\begin{pmatrix}1&1\\0&1\end{pmatrix}\)，\(B=\begin{pmatrix}2&1\\0&2\end{pmatrix}\)。证明矩阵方程 \(X+A^TXA=B\) 有唯一解，并求 \(X\)。`,
  a: String.raw`\(X=\begin{pmatrix}1&0\\-\frac12&\frac34\end{pmatrix}\)。`,
  sol: String.raw`设 \(X=\begin{pmatrix}a&b\\c&d\end{pmatrix}\)，计算
\[
A^TXA=\begin{pmatrix}a&a+b\\a+c&a+b+c+d\end{pmatrix}.
\]
于是 \(X+A^TXA=B\) 等价于
\[
2a=2,\quad a+2b=1,\quad a+2c=0,\quad a+b+c+2d=2.
\]
由第一式 \(a=1\)，代入得 \(b=0,\ c=-\frac12\)，再代入第四式 \(1+0-\frac12+2d=2\)，故 \(d=\frac34\)。所以
\[
X=\begin{pmatrix}1&0\\-\frac12&\frac34\end{pmatrix}.
\]
这四个方程依次唯一确定 \(a,b,c,d\)（系数矩阵对角元均为 \(2\)，行列式为 \(16\neq0\)），故解唯一。` },
{ id:'LA04-97', ch:4, type:'证明', diff:5, tags:'Jordan 块 交换子 中心化子 维数',
  q: String.raw`设 \(J\) 为 \(4\) 阶 Jordan 块
\[
J=\begin{pmatrix}0&1&0&0\\0&0&1&0\\0&0&0&1\\0&0&0&0\end{pmatrix}.
\]
求所有满足 \(JX=XJ\) 的 \(4\) 阶矩阵 \(X\)，并求该解空间的维数。`,
  a: String.raw`\(X=\begin{pmatrix}a&b&c&d\\0&a&b&c\\0&0&a&b\\0&0&0&a\end{pmatrix}\)，解空间维数为 \(4\)。`,
  sol: String.raw`设 \(X=(x_{ij})\)。由 \(JX\) 的第 \(i\) 行等于 \(X\) 的第 \(i+1\) 行（\(i<4\)），第 \(4\) 行为零；而 \(XJ\) 的第 \(j\) 列等于 \(X\) 的第 \(j-1\) 列（\(j>1\)），第 \(1\) 列为零。比较 \(JX=XJ\) 的 \((i,j)\) 元素，得
\[
x_{i+1,j}=x_{i,j-1}\qquad(i<4,\ j>1),
\]
其中越界元素按 \(0\) 处理。当 \(i\ge j\) 时反复用此式可推出 \(x_{ij}=0\)，故下三角全为零；当 \(i<j\) 时，该式说明每条斜对角线上的元素相等。因此 \(X\) 由第一行的 \(a,b,c,d\) 四个数决定，形如
\[
X=\begin{pmatrix}a&b&c&d\\0&a&b&c\\0&0&a&b\\0&0&0&a\end{pmatrix},
\]
解空间维数为 \(4\)。` },
{ id:'LA04-98', ch:4, type:'计算', diff:5, tags:'满秩分解 广义逆 Moore-Penrose 逆',
  q: String.raw`设
\[
A=\begin{pmatrix}1&0&1\\0&1&1\\1&1&2\end{pmatrix}.
\]
求 \(A\) 的一个满秩分解 \(A=FG\)，并利用它求 Moore-Penrose 逆 \(A^+\)。`,
  a: String.raw`\(F=\begin{pmatrix}1&0\\0&1\\1&1\end{pmatrix},\ G=\begin{pmatrix}1&0&1\\0&1&1\end{pmatrix}\)，\(A^+=\frac19\begin{pmatrix}5&-4&1\\-4&5&1\\1&1&2\end{pmatrix}\)。`,
  sol: String.raw`观察到第三列等于前两列之和，且前两列线性无关，故 \(r(A)=2\)。取 \(F\) 为前两列组成的 \(3\times2\) 矩阵，\(G\) 为对应的行组合矩阵：
\[
F=\begin{pmatrix}1&0\\0&1\\1&1\end{pmatrix},\qquad G=\begin{pmatrix}1&0&1\\0&1&1\end{pmatrix},
\]
则 \(A=FG\)。对满秩分解 \(A=FG\)，有
\[
A^+=G^T(GG^T)^{-1}(F^TF)^{-1}F^T.
\]
计算
\[
GG^T=\begin{pmatrix}2&1\\1&2\end{pmatrix},\qquad F^TF=\begin{pmatrix}2&1\\1&2\end{pmatrix},
\]
两者的逆均为 \(\frac13\begin{pmatrix}2&-1\\-1&2\end{pmatrix}\)。代入得
\[
A^+=F\cdot\frac19\begin{pmatrix}5&-4\\-4&5\end{pmatrix}\cdot G
=\frac19\begin{pmatrix}5&-4&1\\-4&5&1\\1&1&2\end{pmatrix}.
\]` },
{ id:'LA04-99', ch:4, type:'计算', diff:5, tags:'矩阵方程 交换子 相容性 通解',
  q: String.raw`设 \(A=\begin{pmatrix}0&1\\-1&0\end{pmatrix},\ C=\begin{pmatrix}1&2\\2&-1\end{pmatrix}\)。判断矩阵方程 \(AX-XA=C\) 是否相容；若相容，求全部解。`,
  a: String.raw`相容，通解 \(X=\begin{pmatrix}a&b\\1-b&a+2\end{pmatrix}\)，\(a,b\in\mathbb R\)。`,
  sol: String.raw`设 \(X=\begin{pmatrix}a&b\\c&d\end{pmatrix}\)。计算
\[
AX=\begin{pmatrix}c&d\\-a&-b\end{pmatrix},\qquad XA=\begin{pmatrix}-b&a\\-d&c\end{pmatrix},
\]
故
\[
AX-XA=\begin{pmatrix}b+c&d-a\\d-a&-b-c\end{pmatrix}.
\]
与 \(C\) 比较得 \(b+c=1,\ d-a=2,\ -b-c=-1\)。第三个方程与第一个相同，故相容。由 \(c=1-b,\ d=a+2\)，其中 \(a,b\) 任意，得全部解
\[
X=\begin{pmatrix}a&b\\1-b&a+2\end{pmatrix}.
\]
这也说明 \(C\) 必须满足迹为零且关于副对角线对称；本题满足该条件。` },
{ id:'LA04-100', ch:4, type:'证明', diff:5, tags:'法方程 零空间 秩 最小二乘',
  q: String.raw`设 \(A\) 为 \(m\times n\) 实矩阵。证明 \(N(A^TA)=N(A)\)，并由此证明 \(r(A^TA)=r(A)\) 以及法方程 \(A^TAx=A^Tb\) 对任意 \(b\in\mathbb R^m\) 都相容。`,
  a: String.raw`两零空间相等，故秩相等；法方程对任意 \(b\) 恒有解。`,
  sol: String.raw`若 \(Ax=0\)，则 \(A^TAx=0\)，故 \(N(A)\subseteq N(A^TA)\)。反之若 \(A^TAx=0\)，左乘 \(x^T\) 得
\[
x^TA^TAx=\|Ax\|^2=0,
\]
故 \(Ax=0\)，于是 \(N(A^TA)\subseteq N(A)\)。两者相等。由秩-零化度定理，
\[
r(A)=n-\dim N(A)=n-\dim N(A^TA)=r(A^TA).
\]
取正交补得
\[
R(A^TA)=N(A^TA)^\perp=N(A)^\perp=R(A^T).
\]
对任意 \(b\)，\(A^Tb\in R(A^T)=R(A^TA)\)，故存在 \(x\) 使 \(A^TAx=A^Tb\)，法方程恒相容。` }
);
