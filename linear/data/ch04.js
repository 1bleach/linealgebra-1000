window.LBANK = window.LBANK || [];
window.LBANK.push(
{ id:'LA04-01', ch:4, type:'计算', diff:5, tags:'解的判定 含参数 行列式',
  q: String.raw`讨论 \(\lambda\) 取何值时线性方程组
\[
\begin{cases}
x_1+\lambda x_2+x_3=1,\\
x_1+x_2+\lambda x_3=1,\\
\lambda x_1+x_2+x_3=1
\end{cases}
\]
有唯一解、无穷多解、无解，并在有解时求出解。`,
  a: String.raw`\(\lambda\neq1,-2\) 时唯一解 \(x_1=x_2=x_3=\frac1{\lambda+2}\)；\(\lambda=1\) 时无穷多解 \(x=(1-s-t,s,t)^T\)；\(\lambda=-2\) 时无解。`,
  sol: String.raw`系数行列式 \(|A|=(\lambda-1)^2(\lambda+2)\)。当 \(\lambda\neq1,-2\) 时 \(|A|\neq0\)，由对称性令 \(x_1=x_2=x_3=x\)，得 \((\lambda+2)x=1\)，故 \(x=\frac1{\lambda+2}\)。当 \(\lambda=1\) 时三个方程均为 \(x_1+x_2+x_3=1\)，\(r(A)=r(A\mid b)=1<3\)，通解为 \((1-s-t,s,t)^T\)。当 \(\lambda=-2\) 时，三行之和为零向量，但右端之和为 \(3\neq0\)，故 \(r(A)=2<r(A\mid b)=3\)，方程组无解。` },
{ id:'LA04-02', ch:4, type:'计算', diff:5, tags:'齐次方程组 基础解系 解空间维数',
  q: String.raw`求齐次线性方程组
\[
\begin{cases}
x_1+x_2+x_3=0,\\
x_2+x_3+x_4=0,\\
x_3+x_4+x_5=0,\\
x_1+2x_2+3x_3+2x_4+x_5=0
\end{cases}
\]
的基础解系与解空间维数。`,
  a: String.raw`解空间维数为 \(2\)，基础解系为 \(\eta_1=(1,0,-1,1,0)^T,\ \eta_2=(0,1,-1,0,1)^T\)。`,
  sol: String.raw`第四个方程恰为前三个方程之和，故系数矩阵的秩为 \(3\)，解空间维数为 \(5-3=2\)。由第三个方程得 \(x_3=-x_4-x_5\)，代入第二个方程得 \(x_2=x_5\)，再代入第一个方程得 \(x_1=x_4\)。于是
\[
x=(x_4,x_5,-x_4-x_5,x_4,x_5)^T=x_4(1,0,-1,1,0)^T+x_5(0,1,-1,0,1)^T.
\]
取 \(x_4=1,x_5=0\) 与 \(x_4=0,x_5=1\)，即得基础解系。` },
{ id:'LA04-03', ch:4, type:'计算', diff:5, tags:'非齐次方程组 通解 特解',
  q: String.raw`求非齐次线性方程组
\[
\begin{cases}
x_1+2x_2+x_3-x_4=2,\\
2x_1+4x_2+3x_3+x_4=5,\\
3x_1+6x_2+4x_3=7
\end{cases}
\]
的通解。`,
  a: String.raw`\(x=(1-2s+4t,\ s,\ 1-3t,\ t)^T,\ s,t\in\mathbb R\)。`,
  sol: String.raw`增广矩阵行化简：第二行减去第一行的 \(2\) 倍得 \(x_3+3x_4=1\)，第三行减去第一、二行之和得零行，故 \(r(A)=r(A\mid b)=2\)，未知量有 \(4\) 个，通解含 \(2\) 个参数。由 \(x_3=1-3x_4\) 与 \(x_1+2x_2+x_3-x_4=2\) 得 \(x_1=1-2x_2+4x_4\)。令 \(x_2=s,x_4=t\)，得 \(x=(1-2s+4t,s,1-3t,t)^T\)。取 \(s=t=0\) 得特解 \((1,0,1,0)^T\)，两个方向向量为 \((-2,1,0,0)^T,(4,0,-3,1)^T\)。` },
{ id:'LA04-04', ch:4, type:'证明', diff:5, tags:'同解方程组 零空间 行空间',
  q: String.raw`设 \(A,B\) 都是 \(m\times n\) 矩阵。证明：齐次方程组 \(Ax=0\) 与 \(Bx=0\) 同解，当且仅当 \(r(A)=r(B)=r\begin{pmatrix}A\\B\end{pmatrix}\)。`,
  a: String.raw`同解 \(\iff\) 零空间相同 \(\iff\) 行空间相同 \(\iff\) 三个秩相等。`,
  sol: String.raw`记 \(N(A)=\{x:Ax=0\}\)，同解即 \(N(A)=N(B)\)。零空间是行空间的正交补，故 \(N(A)=N(B)\) 等价于 \(A\) 与 \(B\) 的行空间相同。若行空间相同，则 \(r(A)=r(B)\)，且 \(B\) 的每一行都是 \(A\) 的行的线性组合，所以 \(\begin{pmatrix}A\\B\end{pmatrix}\) 的行空间等于 \(A\) 的行空间，三秩相等。反之若三秩相等，则 \(\dim(\operatorname{row}A+\operatorname{row}B)=r(A)=r(B)\)，而 \(\operatorname{row}B\subseteq\operatorname{row}A+\operatorname{row}B\) 且维数相同，故 \(\operatorname{row}B=\operatorname{row}A+\operatorname{row}B\)，从而 \(\operatorname{row}A\subseteq\operatorname{row}B\)；同理由对称性得两行空间相等，于是 \(N(A)=N(B)\)。` },
{ id:'LA04-05', ch:4, type:'计算', diff:5, tags:'公共解 解的判定 通解',
  q: String.raw`求方程组
\[
\text{(I)}\quad \begin{cases}x_1+x_2+x_3=1,\\ x_1-x_2+2x_3=2,\end{cases}
\qquad
\text{(II)}\quad \begin{cases}x_1+x_2=-2,\\ 2x_1-x_3=-9\end{cases}
\]
的公共解。`,
  a: String.raw`公共解唯一，为 \((-3,1,3)^T\)。`,
  sol: String.raw`先解 (I)：两式相减得 \(2x_2-x_3=-1\)，即 \(x_3=2x_2+1\)，再得 \(x_1=-3x_2\)。故 (I) 的通解为 \(x=t(-3,1,2)^T+(0,0,1)^T\)。代入 (II) 的第一式得 \(-3t+t=-2\)，故 \(t=1\)；代入第二式得 \(-6t-(2t+1)=-9\)，也得 \(t=1\)。故公共解为 \((-3,1,3)^T\)。也可将四个方程联立，增广矩阵的秩为 \(3\)，未知量有 \(3\) 个，故公共解唯一。` },
{ id:'LA04-06', ch:4, type:'计算', diff:5, tags:'含参数 有解判定 通解',
  q: String.raw`讨论 \(a\) 取何值时线性方程组
\[
\begin{cases}
x_1+2x_2+3x_3+4x_4=1,\\
2x_1+4x_2+6x_3+8x_4=2,\\
x_1+x_2+x_3+x_4=0,\\
x_1+3x_2+5x_3+7x_4=a
\end{cases}
\]
有解，并在有解时求通解。`,
  a: String.raw`仅当 \(a=2\) 时有解，通解为 \(x=(-1,1,0,0)^T+s(1,-2,1,0)^T+t(2,-3,0,1)^T,\ s,t\in\mathbb R\)。`,
  sol: String.raw`第二行是第一行的 \(2\) 倍，第四行等于第一行的 \(2\) 倍减去第三行，故系数矩阵的秩为 \(2\)。增广矩阵中对应的右端必须满足 \(2=2\cdot1\) 与 \(a=2\cdot1-0\)，即 \(a=2\)；否则 \(r(A)=2<r(A\mid b)=3\)，无解。当 \(a=2\) 时，由第一、三式得 \(x_2+2x_3+3x_4=1\)，故 \(x_2=1-2x_3-3x_4\)，\(x_1=-1+x_3+2x_4\)。令 \(x_3=s,x_4=t\)，得 \(x=(-1,1,0,0)^T+s(1,-2,1,0)^T+t(2,-3,0,1)^T\)。` },
{ id:'LA04-07', ch:4, type:'计算', diff:4, tags:'Cramer法则 行列式 唯一解',
  q: String.raw`用 Cramer 法则解线性方程组
\[
\begin{cases}
3x_1+x_2+2x_3=13,\\
x_1+2x_2+x_3=7,\\
2x_1+x_2+3x_3=14.
\end{cases}
\]
`,
  a: String.raw`\(x_1=2,\ x_2=1,\ x_3=3\)。`,
  sol: String.raw`系数行列式 \(D=\begin{vmatrix}3&1&2\\1&2&1\\2&1&3\end{vmatrix}=8\neq0\)，可用 Cramer 法则。分别计算 \(D_1=\begin{vmatrix}13&1&2\\7&2&1\\14&1&3\end{vmatrix}=16\)，\(D_2=\begin{vmatrix}3&13&2\\1&7&1\\2&14&3\end{vmatrix}=8\)，\(D_3=\begin{vmatrix}3&1&13\\1&2&7\\2&1&14\end{vmatrix}=24\)。故 \(x_1=D_1/D=2,\ x_2=D_2/D=1,\ x_3=D_3/D=3\)。代回原方程验证均成立。` },
{ id:'LA04-08', ch:4, type:'计算', diff:4, tags:'矩阵方程 逆矩阵 AX=B',
  q: String.raw`设 \(A=\begin{pmatrix}1&2&1\\2&1&0\\1&1&1\end{pmatrix},\ B=\begin{pmatrix}5&5\\4&1\\3&4\end{pmatrix}\)，解矩阵方程 \(AX=B\)。`,
  a: String.raw`\(X=\begin{pmatrix}1&0\\2&1\\0&3\end{pmatrix}\)。`,
  sol: String.raw`\(|A|=1\cdot(1-0)-2\cdot(2-0)+1\cdot(2-1)=-2\neq0\)，故 \(A\) 可逆，\(X=A^{-1}B\)。计算得 \(A^{-1}=\begin{pmatrix}-1/2&1/2&1/2\\1&0&-1\\-1/2&-1/2&3/2\end{pmatrix}\)。于是 \(X=A^{-1}B=\begin{pmatrix}1&0\\2&1\\0&3\end{pmatrix}\)。代回 \(AX=B\) 可验证。` },
{ id:'LA04-09', ch:4, type:'证明', diff:5, tags:'伴随矩阵 零空间 列空间',
  q: String.raw`设 \(A\) 是 \(n\) 阶矩阵，\(r(A)=n-1\)，\(A^*\) 为 \(A\) 的伴随矩阵。证明 \(A^*x=0\) 的解空间等于 \(A\) 的列空间；并证明 \(Ax=0\) 的解空间由 \(A^*\) 的任一非零列生成。`,
  a: String.raw`\(N(A^*)=\operatorname{col}(A)\)，\(N(A)=\operatorname{col}(A^*)\)。`,
  sol: String.raw`由伴随矩阵性质 \(AA^*=A^*A=|A|I\)，而 \(r(A)=n-1\) 故 \(|A|=0\)，于是 \(AA^*=A^*A=0\)。由 \(A^*A=0\) 得 \(\operatorname{col}(A^*)\subseteq N(A)\)，由 \(AA^*=0\) 得 \(\operatorname{col}(A)\subseteq N(A^*)\)。又 \(r(A)=n-1\)，故 \(\dim N(A)=1\)；由 \(r(A^*)\le n-r(A)=1\) 且 \(A^*\neq0\) 得 \(r(A^*)=1\)，故 \(\dim N(A^*)=n-1\)。而 \(\dim\operatorname{col}(A)=n-1=\dim N(A^*)\)，结合 \(\operatorname{col}(A)\subseteq N(A^*)\) 得 \(N(A^*)=\operatorname{col}(A)\)。同理 \(\dim\operatorname{col}(A^*)=1=\dim N(A)\)，结合 \(\operatorname{col}(A^*)\subseteq N(A)\) 得 \(N(A)=\operatorname{col}(A^*)\)，即 \(Ax=0\) 的解空间由 \(A^*\) 的任一非零列生成。` },
{ id:'LA04-10', ch:4, type:'计算', diff:5, tags:'伴随矩阵 通解 秩',
  q: String.raw`设 \(A=\begin{pmatrix}1&2&3\\2&4&6\\1&1&1\end{pmatrix}\)，求 \(A^*\)，并求 \(A^*x=0\) 与 \(Ax=0\) 的通解。`,
  a: String.raw`\(A^*=\begin{pmatrix}-2&1&0\\4&-2&0\\-2&1&0\end{pmatrix}\)；\(A^*x=0\) 的通解为 \(x=s(1,2,0)^T+t(0,0,1)^T\)；\(Ax=0\) 的通解为 \(x=t(1,-2,1)^T\)。`,
  sol: String.raw`\(A\) 的第一、二行成比例，且前两行线性无关，故 \(r(A)=2\)。逐列计算代数余子式并转置，得 \(A^*=\begin{pmatrix}-2&1&0\\4&-2&0\\-2&1&0\end{pmatrix}\)，其秩为 \(1\)。解 \(A^*x=0\) 得 \(-2x_1+x_2=0\)，即 \(x_2=2x_1\)，\(x_3\) 任意，故通解为 \(x=s(1,2,0)^T+t(0,0,1)^T\)。解 \(Ax=0\)：由 \(x_1+x_2+x_3=0\) 与 \(x_1+2x_2+3x_3=0\) 得 \(x_2=-2x_3,\ x_1=x_3\)，故通解为 \(x=t(1,-2,1)^T\)。` },
{ id:'LA04-11', ch:4, type:'证明', diff:4, tags:'秩不等式 增广矩阵 有解判定',
  q: String.raw`设 \(A\) 是 \(m\times n\) 矩阵，\(b\in\mathbb R^m\)。证明 \(r(A)\le r(A\mid b)\le r(A)+1\)，并证明 \(Ax=b\) 有解当且仅当 \(r(A)=r(A\mid b)\)。`,
  a: String.raw`增广矩阵只比 \(A\) 多一列，故秩最多增加 \(1\)；有解 \(\iff b\in\operatorname{col}(A)\iff\) 秩不变。`,
  sol: String.raw`\((A\mid b)\) 的列空间由 \(A\) 的列空间与 \(b\) 张成，故 \(\operatorname{col}(A)\subseteq\operatorname{col}(A\mid b)\)，且后者由前者添加一个向量得到，所以 \(r(A)\le r(A\mid b)\le r(A)+1\)。若 \(Ax=b\) 有解，则 \(b\in\operatorname{col}(A)\)，两列空间相等，\(r(A)=r(A\mid b)\)。反之若 \(r(A)=r(A\mid b)\)，则 \(\operatorname{col}(A)=\operatorname{col}(A\mid b)\)，特别地 \(b\in\operatorname{col}(A)\)，即存在 \(x\) 使 \(Ax=b\)。` },
{ id:'LA04-12', ch:4, type:'证明', diff:4, tags:'行满秩 列空间 有解条件',
  q: String.raw`设 \(A\) 是 \(m\times n\) 矩阵。证明：若 \(r(A)=m\)（行满秩），则对任意 \(b\in\mathbb R^m\)，方程组 \(Ax=b\) 都有解；并证明 \(r(A)=m\) 等价于 \(A\) 的列向量张成 \(\mathbb R^m\)。`,
  a: String.raw`行满秩时列空间维数为 \(m\)，等于 \(\mathbb R^m\)，故任意 \(b\) 都可被列向量表示。`,
  sol: String.raw`\(A\) 的列空间 \(\operatorname{col}(A)\) 是 \(\mathbb R^m\) 的子空间，且 \(\dim\operatorname{col}(A)=r(A)=m\)。子空间维数等于所在空间维数时必等于整个空间，故 \(\operatorname{col}(A)=\mathbb R^m\)。于是任意 \(b\in\mathbb R^m\) 都属于 \(\operatorname{col}(A)\)，即存在 \(x\) 使 \(Ax=b\)。反过来，若列向量张成 \(\mathbb R^m\)，则 \(\dim\operatorname{col}(A)=m\)，即 \(r(A)=m\)。` },
{ id:'LA04-13', ch:4, type:'证明', diff:5, tags:'有解充要条件 正交补 Fredholm',
  q: String.raw`设 \(A\) 是 \(m\times n\) 矩阵，\(b\in\mathbb R^m\)。证明 \(Ax=b\) 有解当且仅当对任意满足 \(A^Ty=0\) 的 \(y\in\mathbb R^m\)，都有 \(y^Tb=0\)。`,
  a: String.raw`\(Ax=b\) 有解 \(\iff b\in\operatorname{col}(A)=N(A^T)^\perp\)。`,
  sol: String.raw`设 \(Ax=b\) 有解 \(x_0\)。若 \(A^Ty=0\)，则 \(y^Tb=y^TAx_0=(A^Ty)^Tx_0=0\)。反之，若 \(b\notin\operatorname{col}(A)\)，由正交补分解 \(\mathbb R^m=\operatorname{col}(A)\oplus N(A^T)\)，可写 \(b=b_1+b_2\)，其中 \(b_1\in\operatorname{col}(A)\)、\(0\neq b_2\in N(A^T)\)。取 \(y=b_2\)，则 \(A^Ty=0\)，但 \(y^Tb=y^Tb_2=\|b_2\|^2\neq0\)，与条件矛盾。故 \(b\in\operatorname{col}(A)\)，即 \(Ax=b\) 有解。` },
{ id:'LA04-14', ch:4, type:'计算', diff:5, tags:'含参数 无穷多解 通解',
  q: String.raw`讨论 \(a\) 取何值时线性方程组
\[
\begin{cases}
x_1+x_2+x_3+x_4=1,\\
x_1+2x_2+3x_3+4x_4=2,\\
x_1+4x_2+7x_3+ax_4=4
\end{cases}
\]
有解，并在有解时求通解。`,
  a: String.raw`对任意 \(a\) 都有解；\(a\neq10\) 时 \(x=(t,1-2t,t,0)^T\)；\(a=10\) 时 \(x=(0,1,0,0)^T+s(1,-2,1,0)^T+t(2,-3,0,1)^T\)。`,
  sol: String.raw`第二行减第一行得 \(x_2+2x_3+3x_4=1\)，第三行减第一行得 \(3x_2+6x_3+(a-1)x_4=3\)。将第一式代入第二式得 \((a-10)x_4=0\)。当 \(a\neq10\) 时 \(x_4=0\)，\(x_2=1-2x_3\)，\(x_1=x_3\)，令 \(x_3=t\) 得 \(x=(t,1-2t,t,0)^T\)。当 \(a=10\) 时第三式变为前两式的组合，\(x_4\) 自由，\(x_2=1-2x_3-3x_4,\ x_1=x_3+2x_4\)，令 \(x_3=s,x_4=t\) 得通解。两种情形下系数矩阵与增广矩阵的秩都相等（分别为 \(3\) 和 \(2\)），故始终有解。` },
{ id:'LA04-15', ch:4, type:'计算', diff:5, tags:'同解方程组 含参数 基础解系',
  q: String.raw`已知线性方程组
\[
\text{(I)}\ \begin{cases}x_1+x_2+x_3=0,\\ x_1+2x_2+3x_3=0,\\ 2x_1+3x_2+4x_3=0,\end{cases}
\qquad
\text{(II)}\ \begin{cases}x_1+x_2+x_3=0,\\ 3x_1+ax_2+x_3=0,\\ x_1+3x_2+bx_3=0\end{cases}
\]
同解，求 \(a,b\) 的值。`,
  a: String.raw`\(a=2,\ b=5\)。`,
  sol: String.raw`(I) 的第三个方程是前两个方程之和，故 \(r(A_{\mathrm I})=2\)，解空间为直线。由前两式得 \(x_2=-2x_3,\ x_1=x_3\)，故 (I) 的解空间为 \(L=\operatorname{span}\{(1,-2,1)^T\}\)。同解要求 (II) 的每个方程都以 \(L\) 中的向量为解，即 \((1,-2,1)^T\) 与 (II) 的后两行正交：\(3-2a+1=0\) 得 \(a=2\)；\(1-6+b=0\) 得 \(b=5\)。此时 (II) 的后两行分别为 \((3,2,1)\) 与 \((1,3,5)\)，均属于 (I) 的行空间且线性无关，故 (II) 的秩也是 \(2\)，两方程组确实同解。` },
{ id:'LA04-16', ch:4, type:'计算', diff:4, tags:'矩阵方程 幂零矩阵 逆矩阵',
  q: String.raw`设 \(A=\begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix},\ B=\begin{pmatrix}1&0\\0&1\\1&1\end{pmatrix}\)，解矩阵方程 \(X=AX+B\)。`,
  a: String.raw`\(X=\begin{pmatrix}2&2\\1&2\\1&1\end{pmatrix}\)。`,
  sol: String.raw`方程可写成 \((I-A)X=B\)。\(I-A=\begin{pmatrix}1&-1&0\\0&1&-1\\0&0&1\end{pmatrix}\)，\(|I-A|=1\neq0\)，故 \(X=(I-A)^{-1}B\)。由 \(A^3=0\) 得 \((I-A)^{-1}=I+A+A^2=\begin{pmatrix}1&1&1\\0&1&1\\0&0&1\end{pmatrix}\)。于是 \(X=\begin{pmatrix}1&1&1\\0&1&1\\0&0&1\end{pmatrix}\begin{pmatrix}1&0\\0&1\\1&1\end{pmatrix}=\begin{pmatrix}2&2\\1&2\\1&1\end{pmatrix}\)。代回验证 \(X-AX=B\) 成立。` },
{ id:'LA04-17', ch:4, type:'计算', diff:5, tags:'最小范数解 通解 投影',
  q: String.raw`设 \(A=\begin{pmatrix}1&1&0\\0&1&1\end{pmatrix},\ b=(1,1)^T\)。求方程组 \(Ax=b\) 的全部解，并求其中欧几里得范数最小的解。`,
  a: String.raw`全部解为 \(x=(1-t,t,1-t)^T\)；最小范数解为 \(x=\left(\frac13,\frac23,\frac13\right)^T\)，最小范数为 \(\sqrt{\frac23}\)。`,
  sol: String.raw`方程即 \(x_1+x_2=1,\ x_2+x_3=1\)，令 \(x_2=t\) 得 \(x_1=1-t,\ x_3=1-t\)，故全部解为 \(x=(1-t,t,1-t)^T\)。范数平方 \(f(t)=(1-t)^2+t^2+(1-t)^2=3t^2-4t+2\)，在 \(t=\frac23\) 处取最小值，此时 \(x=(\frac13,\frac23,\frac13)^T\)，最小范数平方为 \(\frac23\)。也可用公式 \(x=A^T(AA^T)^{-1}b\) 得到同一结果。` },
{ id:'LA04-18', ch:4, type:'证明', diff:4, tags:'解的结构 非齐次 齐次解',
  q: String.raw`设 \(A\) 是 \(m\times n\) 矩阵，\(b\in\mathbb R^m\)。证明：若 \(Ax=b\) 有两个不同的解 \(\eta_1,\eta_2\)，则它有无穷多解，且其通解可写成 \(\eta_1+t(\eta_2-\eta_1)+\xi\)，其中 \(\xi\) 取遍 \(Ax=0\) 的解。`,
  a: String.raw`\(\eta_2-\eta_1\) 是非零齐次解，故沿该方向可产生无穷多解；通解为特解加齐次通解。`,
  sol: String.raw`\(A(\eta_2-\eta_1)=b-b=0\)，且 \(\eta_2-\eta_1\neq0\)，故 \(\eta_2-\eta_1\) 是 \(Ax=0\) 的非零解。对任意实数 \(t\)，\(A(\eta_1+t(\eta_2-\eta_1))=b+t\cdot0=b\)，所以 \(Ax=b\) 已有无穷多解。设 \(\xi\) 是 \(Ax=0\) 的任一解，则 \(A(\eta_1+\xi)=b\)，故 \(\eta_1+\xi\) 也是解；反之，若 \(\eta\) 是 \(Ax=b\) 的任一解，则 \(A(\eta-\eta_1)=0\)，即 \(\eta=\eta_1+\xi\)，其中 \(\xi\) 为齐次解。因此通解为 \(\eta_1+\xi\)，而 \(\xi\) 可取 \(t(\eta_2-\eta_1)\) 与其它齐次解的线性组合，故题述形式成立。` },
{ id:'LA04-19', ch:4, type:'证明', diff:5, tags:'幂等矩阵 有解条件 通解结构',
  q: String.raw`设 \(A\) 是 \(n\) 阶矩阵，满足 \(A^2=A\)，\(b\in\mathbb R^n\)。证明 \(Ax=b\) 有解当且仅当 \(b=Ab\)；有解时证明其通解为 \(x=b+(I-A)y\)，其中 \(y\in\mathbb R^n\) 任意。`,
  a: String.raw`\(Ax=b\) 有解 \(\iff b=Ab\)；通解为 \(x=b+(I-A)y\)。`,
  sol: String.raw`若 \(Ax=b\)，则 \(Ab=A(Ax)=A^2x=Ax=b\)。反之若 \(b=Ab\)，取 \(x=b\) 即得 \(Ax=b\)，故有解。又 \(A(I-A)=A-A^2=0\)，故对任意 \(y\)，\(A[b+(I-A)y]=Ab+0=b\)，所以 \(x=b+(I-A)y\) 都是解。反之若 \(Ax=b\)，令 \(z=x-b\)，则 \(Az=0\)，且 \(z=(I-A)z\)（因为 \(Az=0\)），取 \(y=z\) 即得 \(x=b+(I-A)y\)。故通解形式成立。` },
{ id:'LA04-20', ch:4, type:'证明', diff:5, tags:'伴随矩阵 秩 分类讨论',
  q: String.raw`设 \(A\) 是 \(n\) 阶矩阵，\(A^*\) 为其伴随矩阵。证明
\[
r(A^*)=\begin{cases}n,& r(A)=n,\\ 1,& r(A)=n-1,\\ 0,& r(A)\le n-2.\end{cases}
\]
`,
  a: String.raw`三种情形分别由 \(AA^*=|A|I\)、\(r(A^*)=1\) 与 \(A^*=0\) 得到。`,
  sol: String.raw`当 \(r(A)=n\) 时 \(A\) 可逆，\(A^*=|A|A^{-1}\) 也可逆，故 \(r(A^*)=n\)。当 \(r(A)=n-1\) 时 \(|A|=0\)，故 \(AA^*=A^*A=0\)；由 \(A^*A=0\) 得 \(\operatorname{col}(A^*)\subseteq N(A)\)，而 \(\dim N(A)=1\)，故 \(r(A^*)\le1\)。又 \(r(A)=n-1\) 说明 \(A\) 有某个 \(n-1\) 阶子式非零，即 \(A^*\neq0\)，故 \(r(A^*)=1\)。当 \(r(A)\le n-2\) 时，\(A\) 的所有 \(n-1\) 阶子式都为零，故 \(A^*=0\)，\(r(A^*)=0\)。` }
);
