window.LBANK = window.LBANK || [];
window.LBANK.push(
{ id:'LA09-01', ch:9, type:'计算', diff:4, tags:'正交补 标准正交基',
  q: String.raw`在 \(\mathbb{R}^{4}\) 中，设 \(W=\operatorname{span}\{(1,1,1,1)^{T},(1,-1,1,-1)^{T}\}\)。求 \(W^{\perp}\) 的一组标准正交基。`,
  a: String.raw`\(\dfrac{1}{\sqrt{2}}(1,0,-1,0)^{T},\ \dfrac{1}{\sqrt{2}}(0,1,0,-1)^{T}\)。`,
  sol: String.raw`设 \(x=(x_1,x_2,x_3,x_4)^{T}\in W^{\perp}\)，则 \(x\) 与两个生成向量都正交：
  \[
  x_1+x_2+x_3+x_4=0,\qquad x_1-x_2+x_3-x_4=0.
  \]
  两式相加得 \(x_1+x_3=0\)，相减得 \(x_2+x_4=0\)，故
  \[
  x=x_1(1,0,-1,0)^{T}+x_2(0,1,0,-1)^{T}.
  \]
  所以 \(b_1=(1,0,-1,0)^{T},b_2=(0,1,0,-1)^{T}\) 是 \(W^{\perp}\) 的一组基，且 \(b_1\cdot b_2=0\) 已正交，单位化即得答案。` },

{ id:'LA09-02', ch:9, type:'计算', diff:4, tags:'施密特正交化',
  q: String.raw`对 \(\mathbb{R}^{3}\) 中的向量组 \(a_1=(1,1,0)^{T},a_2=(1,0,1)^{T},a_3=(0,1,1)^{T}\) 作施密特正交化，并写出单位正交组。`,
  a: String.raw`\(e_1=\dfrac{1}{\sqrt{2}}(1,1,0)^{T},\ e_2=\dfrac{1}{\sqrt{6}}(1,-1,2)^{T},\ e_3=\dfrac{1}{\sqrt{3}}(-1,1,1)^{T}\)。`,
  sol: String.raw`取 \(b_1=a_1=(1,1,0)^{T}\)。
  \[
  b_2=a_2-\frac{a_2\cdot b_1}{b_1\cdot b_1}b_1=(1,0,1)^{T}-\frac12(1,1,0)^{T}
  =\left(\frac12,-\frac12,1\right)^{T}.
  \]
  \[
  b_3=a_3-\frac{a_3\cdot b_1}{b_1\cdot b_1}b_1-\frac{a_3\cdot b_2}{b_2\cdot b_2}b_2.
  \]
  其中 \(a_3\cdot b_1=1,\ a_3\cdot b_2=\frac12,\ b_2\cdot b_2=\frac32\)，故
  \[
  b_3=(0,1,1)^{T}-\frac12(1,1,0)^{T}-\frac13\left(\frac12,-\frac12,1\right)^{T}
  =\left(-\frac23,\frac23,\frac23\right)^{T}.
  \]
  再分别除以 \(\sqrt2,\ \sqrt{3/2},\ 2/\sqrt3\)，得 \(e_1,e_2,e_3\) 如上。` },

{ id:'LA09-03', ch:9, type:'证明', diff:4, tags:'正交矩阵 特征值 -1',
  q: String.raw`设 \(A\) 为 \(n\) 阶正交矩阵（\(n\) 为奇数），证明 \(A\) 必有特征值 \(1\) 或 \(-1\)。`,
  a: String.raw`\(\det(A-\lambda I)\) 为奇次实系数多项式，必有实根；正交矩阵实特征值只能是 \(\pm1\)，故得证。`,
  sol: String.raw`正交矩阵的特征值满足 \(|\lambda|=1\)：若 \(Ax=\lambda x\)，则
  \[
  \|x\|^{2}=(Ax)^{T}(Ax)=x^{T}A^{T}Ax=x^{T}x=\|x\|^{2},
  \]
  而 \(Ax=\lambda x\) 给出 \(\|Ax\|=|\lambda|\,\|x\|\)，故 \(|\lambda|=1\)。实特征值只能是 \(\pm1\)。
  另一方面，特征多项式 \(f(\lambda)=\det(A-\lambda I)\) 是 \(n\) 次实系数多项式，\(n\) 为奇数，由代数基本定理必有实根。因此 \(A\) 有实特征值，只能是 \(1\) 或 \(-1\)。` },

{ id:'LA09-04', ch:9, type:'证明', diff:4, tags:'实对称 对合 正交矩阵',
  q: String.raw`设 \(A\) 为实对称矩阵且 \(A^{2}=I\)。证明 \(A\) 是正交矩阵，并说明 \(A\) 的特征值只能是 \(\pm1\)。`,
  a: String.raw`\(A^{T}A=A^{2}=I\)，故 \(A\) 正交；特征值满足 \(\lambda^{2}=1\)，即 \(\lambda=\pm1\)。`,
  sol: String.raw`由 \(A\) 实对称得 \(A^{T}=A\)，于是
  \[
  A^{T}A=A^{2}=I,
  \]
  这正是正交矩阵的定义，故 \(A\) 正交。
  若 \(Ax=\lambda x\ (x\neq0)\)，则 \(A^{2}x=\lambda^{2}x\)，而 \(A^{2}x=x\)，故 \((\lambda^{2}-1)x=0\)，即 \(\lambda^{2}=1\)，\(\lambda=\pm1\)。` },

{ id:'LA09-05', ch:9, type:'证明', diff:4, tags:'实对称 不同特征值 特征向量正交',
  q: String.raw`设 \(A\) 为实对称矩阵，\(\lambda\neq\mu\) 是 \(A\) 的两个不同特征值，\(x,y\) 是对应的特征向量。证明 \(x\perp y\)。`,
  a: String.raw`\(x^{T}y=0\)。`,
  sol: String.raw`由 \(Ax=\lambda x,\ Ay=\mu y\) 及 \(A^{T}=A\)，有
  \[
  \lambda x^{T}y=(Ax)^{T}y=x^{T}A^{T}y=x^{T}Ay=\mu x^{T}y.
  \]
  移项得 \((\lambda-\mu)x^{T}y=0\)。因 \(\lambda\neq\mu\)，故 \(x^{T}y=0\)，即 \(x\perp y\)。` },

{ id:'LA09-06', ch:9, type:'计算', diff:4, tags:'正交对角化 实对称',
  q: String.raw`求正交矩阵 \(Q\)，使 \(Q^{T}AQ\) 为对角矩阵，其中 \(A=\begin{pmatrix}2&1\\1&2\end{pmatrix}\)。`,
  a: String.raw`\(Q=\dfrac{1}{\sqrt{2}}\begin{pmatrix}1&1\\1&-1\end{pmatrix}\)，\(Q^{T}AQ=\operatorname{diag}(3,1)\)。`,
  sol: String.raw`特征多项式
  \[
  \det(A-\lambda I)=(2-\lambda)^{2}-1=(\lambda-3)(\lambda-1),
  \]
  故特征值为 \(3,1\)。对应特征向量分别取 \((1,1)^{T},(1,-1)^{T}\)，它们已正交。单位化得
  \[
  q_1=\frac{1}{\sqrt2}\binom{1}{1},\qquad q_2=\frac{1}{\sqrt2}\binom{1}{-1}.
  \]
  令 \(Q=(q_1,q_2)\)，则 \(Q^{T}Q=I\) 且 \(Q^{T}AQ=\operatorname{diag}(3,1)\)。` },

{ id:'LA09-07', ch:9, type:'计算', diff:5, tags:'奇异值 奇异值分解',
  q: String.raw`求矩阵 \(A=\begin{pmatrix}3&0\\4&5\end{pmatrix}\) 的全部奇异值。`,
  a: String.raw`\(3\sqrt5,\ \sqrt5\)。`,
  sol: String.raw`奇异值是 \(A^{T}A\) 的特征值的算术平方根。计算
  \[
  A^{T}A=\begin{pmatrix}3&4\\0&5\end{pmatrix}\begin{pmatrix}3&0\\4&5\end{pmatrix}
  =\begin{pmatrix}25&20\\20&25\end{pmatrix}.
  \]
  其特征多项式为 \((25-\lambda)^{2}-400=(\lambda-45)(\lambda-5)\)，特征值为 \(45,5\)。
  故奇异值为 \(\sqrt{45}=3\sqrt5\) 与 \(\sqrt5\)。` },

{ id:'LA09-08', ch:9, type:'计算', diff:4, tags:'正交投影 子空间',
  q: String.raw`设 \(W=\operatorname{span}\{(1,1,1,1)^{T},(1,1,-1,-1)^{T}\}\)，求 \(b=(1,2,3,4)^{T}\) 在 \(W\) 上的正交投影。`,
  a: String.raw`\(\left(\dfrac32,\dfrac32,\dfrac72,\dfrac72\right)^{T}\)。`,
  sol: String.raw`记 \(a_1=(1,1,1,1)^{T},a_2=(1,1,-1,-1)^{T}\)，注意 \(a_1\cdot a_2=0\)，故 \(\{a_1,a_2\}\) 已是正交基。投影为
  \[
  p=\frac{b\cdot a_1}{a_1\cdot a_1}a_1+\frac{b\cdot a_2}{a_2\cdot a_2}a_2
  =\frac{10}{4}a_1+\frac{-4}{4}a_2.
  \]
  即
  \[
  p=\frac52(1,1,1,1)^{T}-(1,1,-1,-1)^{T}
  =\left(\frac32,\frac32,\frac72,\frac72\right)^{T}.
  \]` },

{ id:'LA09-09', ch:9, type:'计算', diff:4, tags:'最小二乘 线性拟合',
  q: String.raw`用最小二乘法求直线 \(y=a+bx\)，使它尽量靠近点 \((0,1),(1,2),(2,4),(3,5)\)。`,
  a: String.raw`\(a=\dfrac{9}{10},\ b=\dfrac{7}{5}\)，即 \(y=\dfrac{9}{10}+\dfrac{7}{5}x\)。`,
  sol: String.raw`正规方程为
  \[
  \begin{pmatrix}n&\sum x_i\\ \sum x_i&\sum x_i^{2}\end{pmatrix}
  \binom{a}{b}=\binom{\sum y_i}{\sum x_iy_i}.
  \]
  这里 \(n=4,\ \sum x_i=6,\ \sum x_i^{2}=14,\ \sum y_i=12,\ \sum x_iy_i=0+2+8+15=25\)，故
  \[
  \begin{pmatrix}4&6\\6&14\end{pmatrix}\binom{a}{b}=\binom{12}{25}.
  \]
  解得 \(a=\dfrac{9}{10},\ b=\dfrac75\)。` },

{ id:'LA09-10', ch:9, type:'计算', diff:5, tags:'QR分解 施密特',
  q: String.raw`求矩阵 \(A=\begin{pmatrix}1&1\\1&0\\0&1\end{pmatrix}\) 的 \(QR\) 分解（\(Q\) 为 \(3\times2\) 列正交矩阵，\(R\) 为 \(2\times2\) 上三角矩阵）。`,
  a: String.raw`\(Q=\begin{pmatrix}\frac{1}{\sqrt2}&\frac{1}{\sqrt6}\\ \frac{1}{\sqrt2}&-\frac{1}{\sqrt6}\\ 0&\frac{2}{\sqrt6}\end{pmatrix},\quad R=\begin{pmatrix}\sqrt2&\frac{1}{\sqrt2}\\0&\frac{\sqrt6}{2}\end{pmatrix}\)。`,
  sol: String.raw`记 \(a_1=(1,1,0)^{T},a_2=(1,0,1)^{T}\)。令 \(q_1=a_1/\|a_1\|=\frac{1}{\sqrt2}(1,1,0)^{T}\)，则
  \[
  r_{12}=q_1^{T}a_2=\frac{1}{\sqrt2}.
  \]
  \[
  b_2=a_2-r_{12}q_1=(1,0,1)^{T}-\frac12(1,1,0)^{T}
  =\left(\frac12,-\frac12,1\right)^{T},
  \]
  \(\|b_2\|=\sqrt{3/2}=\frac{\sqrt6}{2}\)，故 \(q_2=\frac{1}{\sqrt6}(1,-1,2)^{T}\)，\(r_{22}=\frac{\sqrt6}{2}\)。
  于是 \(A=QR\)，其中 \(Q=(q_1,q_2)\)，\(R=\begin{pmatrix}\sqrt2&1/\sqrt2\\0&\sqrt6/2\end{pmatrix}\)。` },

{ id:'LA09-11', ch:9, type:'证明', diff:4, tags:'正交变换 保内积',
  q: String.raw`设 \(T\) 是欧氏空间 \(V\) 上的线性变换，且在标准正交基下的矩阵 \(A\) 是正交矩阵。证明对任意 \(x,y\in V\)，有 \(Tx\cdot Ty=x\cdot y\)。`,
  a: String.raw`\((Ax)^{T}(Ay)=x^{T}A^{T}Ay=x^{T}y\)。`,
  sol: String.raw`在标准正交基下，内积等于坐标向量的点积。设 \(x,y\) 的坐标向量分别为 \(\xi,\eta\)，则 \(Tx,Ty\) 的坐标向量为 \(A\xi,A\eta\)。于是
  \[
  Tx\cdot Ty=(A\xi)^{T}(A\eta)=\xi^{T}A^{T}A\eta=\xi^{T}\eta=x\cdot y,
  \]
  最后一步用了 \(A^{T}A=I\)。` },

{ id:'LA09-12', ch:9, type:'计算', diff:5, tags:'Householder变换 反射',
  q: String.raw`对 \(x=(3,4)^{T}\)，构造 Householder 矩阵 \(H=I-2\dfrac{vv^{T}}{v^{T}v}\)，使 \(Hx=\|x\|e_1\)，并写出 \(H\)。`,
  a: String.raw`\(H=\begin{pmatrix}0.6&0.8\\0.8&-0.6\end{pmatrix}\)。`,
  sol: String.raw`取 \(v=x-\|x\|e_1=(3,4)^{T}-(5,0)^{T}=(-2,4)^{T}\)，则
  \[
  v^{T}v=4+16=20,\qquad \frac{2}{v^{T}v}vv^{T}=\frac{1}{10}\begin{pmatrix}4&-8\\-8&16\end{pmatrix}.
  \]
  故
  \[
  H=I-\frac{1}{10}\begin{pmatrix}4&-8\\-8&16\end{pmatrix}
  =\begin{pmatrix}0.6&0.8\\0.8&-0.6\end{pmatrix}.
  \]
  直接验证：\(Hx=(0.6\cdot3+0.8\cdot4,\ 0.8\cdot3-0.6\cdot4)^{T}=(5,0)^{T}\)。` },

{ id:'LA09-13', ch:9, type:'证明', diff:4, tags:'正交补 维数公式',
  q: String.raw`设 \(W\) 是 \(n\) 维欧氏空间 \(V\) 的子空间。证明 \(\dim W+\dim W^{\perp}=n\)，且 \(V=W\oplus W^{\perp}\)。`,
  a: String.raw`取 \(W\) 的标准正交基并扩充为 \(V\) 的标准正交基，后 \(n-\dim W\) 个向量构成 \(W^{\perp}\) 的基。`,
  sol: String.raw`取 \(W\) 的一组标准正交基 \(u_1,\dots,u_k\)（\(k=\dim W\)），将它扩充为 \(V\) 的标准正交基
  \[
  u_1,\dots,u_k,u_{k+1},\dots,u_n.
  \]
  显然 \(u_{k+1},\dots,u_n\in W^{\perp}\)，且它们线性无关。另一方面，若 \(x\in W^{\perp}\)，设
  \(x=\sum_{i=1}^{n}c_iu_i\)，则对 \(j\le k\)，
  \[
  0=x\cdot u_j=\sum_{i=1}^{n}c_i(u_i\cdot u_j)=c_j,
  \]
  故 \(x=\sum_{i=k+1}^{n}c_iu_i\)。因此 \(u_{k+1},\dots,u_n\) 是 \(W^{\perp}\) 的基，
  \(\dim W^{\perp}=n-k\)，且 \(W\cap W^{\perp}=\{0\}\)，从而 \(V=W\oplus W^{\perp}\)。` },

{ id:'LA09-14', ch:9, type:'证明', diff:4, tags:'谱分解 实对称',
  q: String.raw`设 \(A\) 为 \(n\) 阶实对称矩阵，证明存在正交矩阵 \(Q\) 和对角矩阵 \(\Lambda\)，使 \(A=Q\Lambda Q^{T}\)。`,
  a: String.raw`对 \(n\) 归纳：取单位特征向量并利用其正交补的不变性。`,
  sol: String.raw`对 \(n\) 作归纳。\(n=1\) 显然。设结论对 \(n-1\) 成立。实对称矩阵有实特征值，取单位特征向量 \(u_1\)，\(Au_1=\lambda_1u_1\)。令
  \[
  W=u_1^{\perp}=\{x:u_1^{T}x=0\}.
  \]
  对任意 \(x\in W\)，
  \[
  u_1^{T}(Ax)=(Au_1)^{T}x=\lambda_1u_1^{T}x=0,
  \]
  故 \(Ax\in W\)，即 \(W\) 是 \(A\) 的不变子空间，且 \(\dim W=n-1\)。\(A|_W\) 仍是实对称变换，由归纳假设，存在 \(W\) 的标准正交基 \(u_2,\dots,u_n\) 使其对角化。令 \(Q=(u_1,u_2,\dots,u_n)\)，则 \(Q\) 正交且 \(Q^{T}AQ=\operatorname{diag}(\lambda_1,\dots,\lambda_n)\)。` },

{ id:'LA09-15', ch:9, type:'计算', diff:3, tags:'点到平面距离 投影',
  q: String.raw`求点 \(P(1,2,3)\) 到平面 \(\Pi:x+y+z=1\) 的距离。`,
  a: String.raw`\(\dfrac{5}{\sqrt3}\)。`,
  sol: String.raw`平面的法向量为 \(n=(1,1,1)^{T}\)，取平面上一点 \(P_0=(1,0,0)\)。点 \(P\) 到平面的距离等于向量 \(\overrightarrow{P_0P}=(0,2,3)^{T}\) 在法向量上的投影长度：
  \[
  d=\frac{|\overrightarrow{P_0P}\cdot n|}{\|n\|}
  =\frac{|0+2+3|}{\sqrt3}=\frac{5}{\sqrt3}.
  \]` },

{ id:'LA09-16', ch:9, type:'证明', diff:4, tags:'半正定 列满秩',
  q: String.raw`设 \(A\) 为 \(m\times n\) 实矩阵。证明 \(A^{T}A\) 是半正定矩阵，且 \(A^{T}A\) 正定当且仅当 \(\operatorname{rank}A=n\)。`,
  a: String.raw`\(x^{T}A^{T}Ax=\|Ax\|^{2}\ge0\)；等号成立当且仅当 \(Ax=0\)，故正定性等价于 \(Ax=0\) 只有零解。`,
  sol: String.raw`对任意 \(x\in\mathbb{R}^{n}\)，
  \[
  x^{T}(A^{T}A)x=(Ax)^{T}(Ax)=\|Ax\|^{2}\ge0,
  \]
  故 \(A^{T}A\) 半正定。
  若 \(A^{T}A\) 正定，则 \(x^{T}A^{T}Ax>0\) 对一切 \(x\neq0\) 成立，即 \(Ax\neq0\) 对一切 \(x\neq0\) 成立，故 \(Ax=0\) 只有零解，\(\operatorname{rank}A=n\)。
  反之若 \(\operatorname{rank}A=n\)，则 \(Ax=0\) 只有零解，于是对 \(x\neq0\) 有 \(\|Ax\|^{2}>0\)，即 \(x^{T}A^{T}Ax>0\)，\(A^{T}A\) 正定。` },

{ id:'LA09-17', ch:9, type:'证明', diff:5, tags:'正定分解 合同',
  q: String.raw`证明：实对称矩阵 \(A\) 正定，当且仅当存在可逆矩阵 \(C\)，使 \(A=C^{T}C\)。`,
  a: String.raw`正定时取正交对角化 \(A=Q\Lambda Q^{T}\)，令 \(C=\Lambda^{1/2}Q^{T}\)；反之 \(C^{T}C\) 显然正定。`,
  sol: String.raw`若 \(A\) 正定，则由谱定理存在正交矩阵 \(Q\) 使
  \[
  A=Q\Lambda Q^{T},\qquad \Lambda=\operatorname{diag}(\lambda_1,\dots,\lambda_n),\ \lambda_i>0.
  \]
  令 \(C=\operatorname{diag}(\sqrt{\lambda_1},\dots,\sqrt{\lambda_n})Q^{T}\)，则 \(C\) 可逆，且
  \[
  C^{T}C=Q\Lambda Q^{T}=A.
  \]
  反之，若 \(A=C^{T}C\) 且 \(C\) 可逆，则对任意 \(x\neq0\)，\(Cx\neq0\)，于是
  \[
  x^{T}Ax=x^{T}C^{T}Cx=\|Cx\|^{2}>0,
  \]
  故 \(A\) 正定。` },

{ id:'LA09-18', ch:9, type:'计算', diff:3, tags:'瑞利商 特征值',
  q: String.raw`设 \(A=\begin{pmatrix}1&2\\2&1\end{pmatrix}\)，求 \(\max\limits_{x\neq0}\dfrac{x^{T}Ax}{x^{T}x}\) 与 \(\min\limits_{x\neq0}\dfrac{x^{T}Ax}{x^{T}x}\)。`,
  a: String.raw`最大值 \(3\)，最小值 \(-1\)。`,
  sol: String.raw`\(A\) 实对称，瑞利商的范围是 \([\lambda_{\min},\lambda_{\max}]\)。特征多项式
  \[
  \det(A-\lambda I)=(1-\lambda)^{2}-4=(\lambda-3)(\lambda+1),
  \]
  特征值为 \(3,-1\)。故最大值为 \(3\)（在 \(x=(1,1)^{T}\) 处取到），最小值为 \(-1\)（在 \(x=(1,-1)^{T}\) 处取到）。` },

{ id:'LA09-19', ch:9, type:'证明', diff:3, tags:'平行四边形法则 内积',
  q: String.raw`在实内积空间中证明平行四边形法则：\(\|x+y\|^{2}+\|x-y\|^{2}=2\|x\|^{2}+2\|y\|^{2}\)。`,
  a: String.raw`展开内积即可。`,
  sol: String.raw`由 \(\|u\|^{2}=u\cdot u\)，有
  \[
  \|x+y\|^{2}=(x+y)\cdot(x+y)=\|x\|^{2}+2x\cdot y+\|y\|^{2},
  \]
  \[
  \|x-y\|^{2}=(x-y)\cdot(x-y)=\|x\|^{2}-2x\cdot y+\|y\|^{2}.
  \]
  两式相加，交叉项抵消，得
  \[
  \|x+y\|^{2}+\|x-y\|^{2}=2\|x\|^{2}+2\|y\|^{2}.
  \]` },

{ id:'LA09-20', ch:9, type:'证明', diff:4, tags:'正交矩阵 列向量 标准正交基',
  q: String.raw`设 \(A\) 为 \(n\) 阶实矩阵。证明 \(A\) 是正交矩阵当且仅当 \(A\) 的列向量构成 \(\mathbb{R}^{n}\) 的标准正交基。`,
  a: String.raw`\(A^{T}A=I\) 的 \((i,j)\) 元正是第 \(i\) 列与第 \(j\) 列的内积。`,
  sol: String.raw`设 \(A=(a_1,a_2,\dots,a_n)\)，其中 \(a_j\) 为列向量。则 \(A^{T}A\) 的 \((i,j)\) 元为
  \[
  (A^{T}A)_{ij}=a_i^{T}a_j.
  \]
  因此
  \[
  A^{T}A=I\iff a_i^{T}a_j=\delta_{ij}=
  \begin{cases}1,&i=j,\\0,&i\neq j,\end{cases}
  \]
  这正是「\(a_1,\dots,a_n\) 两两正交且都是单位向量」。\(n\) 个标准正交向量在 \(\mathbb{R}^{n}\) 中线性无关，故构成标准正交基。` }
);
