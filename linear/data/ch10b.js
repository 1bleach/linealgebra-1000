window.LBANK = window.LBANK || [];
window.LBANK.push(
{ id:'LA10-21', ch:10, type:'计算', diff:5, tags:'三对角行列式 递推',
  q: String.raw`计算 \(n\) 阶三对角行列式
  \[
  D_n=\begin{vmatrix}
  2&-1&0&\cdots&0\\
  -1&2&-1&\cdots&0\\
  0&-1&2&\ddots&\vdots\\
  \vdots&\ddots&\ddots&\ddots&-1\\
  0&\cdots&0&-1&2
  \end{vmatrix}.
  \]`,
  a: String.raw`\(D_n=n+1\)。`,
  sol: String.raw`按第一行展开，只有前两个元素非零：
  \[
  D_n=2D_{n-1}-D_{n-2}\qquad(n\ge3),
  \]
  其中 \(D_1=2\)，\(D_2=\begin{vmatrix}2&-1\\-1&2\end{vmatrix}=3\)。于是
  \[
  D_n-D_{n-1}=D_{n-1}-D_{n-2}=\cdots=D_2-D_1=1,
  \]
  故 \(\{D_n\}\) 是首项为 \(2\)、公差为 \(1\) 的等差数列，即 \(D_n=n+1\)。` },

{ id:'LA10-22', ch:10, type:'计算', diff:5, tags:'秩1修正 特征值 逆矩阵',
  q: String.raw`设 \(J\) 为 \(n\) 阶全 \(1\) 矩阵，\(A=I+aJ\)，其中 \(a\neq0\) 且 \(1+na\neq0\)。求 \(\det A\) 与 \(A^{-1}\)。`,
  a: String.raw`\(\det A=1+na\)，且
  \[
  A^{-1}=I-\frac{a}{1+na}J.
  \]`,
  sol: String.raw`由 \(J^{2}=nJ\) 知 \(J\) 的特征值为 \(n\)（一重）与 \(0\)（\(n-1\) 重），故 \(A\) 的特征值为 \(1+na\) 与 \(1\)（\(n-1\) 重），于是
  \[
  \det A=(1+na)\cdot1^{n-1}=1+na.
  \]
  直接验证：
  \[
  (I+aJ)\left(I-\frac{a}{1+na}J\right)
  =I+aJ-\frac{a}{1+na}J-\frac{a^{2}n}{1+na}J
  =I+\frac{a(1+na)-a-a^{2}n}{1+na}J=I,
  \]
  故 \(A^{-1}=I-\dfrac{a}{1+na}J\)。` },

{ id:'LA10-23', ch:10, type:'证明', diff:5, tags:'分块行列式 交换矩阵',
  q: String.raw`设 \(A,B\) 为 \(n\) 阶实矩阵且 \(AB=BA\)。证明
  \[
  \det\begin{pmatrix}A&B\\B&A\end{pmatrix}=\det(A+B)\det(A-B),
  \]
  并求 \(A=\begin{pmatrix}2&1\\1&2\end{pmatrix},\ B=\begin{pmatrix}1&1\\1&1\end{pmatrix}\) 时该行列式的值。`,
  a: String.raw`恒等式成立；代入得行列式的值为 \(5\)。`,
  sol: String.raw`作分块初等变换：
  \[
  \begin{pmatrix}I&I\\0&I\end{pmatrix}
  \begin{pmatrix}A&B\\B&A\end{pmatrix}
  \begin{pmatrix}I&-I\\0&I\end{pmatrix}
  =\begin{pmatrix}A+B&0\\B&A-B\end{pmatrix},
  \]
  其中用到 \(AB=BA\) 使右上块为 \(-(A+B)+(B+A)=0\)。两端取行列式，两个初等块的行列式均为 \(1\)，故
  \[
  \det\begin{pmatrix}A&B\\B&A\end{pmatrix}=\det(A+B)\det(A-B).
  \]
  代入所给矩阵：\(A+B=\begin{pmatrix}3&2\\2&3\end{pmatrix}\)，\(\det(A+B)=5\)；\(A-B=\begin{pmatrix}1&0\\0&1\end{pmatrix}\)，\(\det(A-B)=1\)。故原行列式为 \(5\)。` },

{ id:'LA10-24', ch:10, type:'计算', diff:5, tags:'行列式引理 秩1扰动',
  q: String.raw`设 \(A\) 为 \(n\) 阶可逆矩阵，\(u,v\in\mathbb{R}^{n}\)。(1) 证明 \(\det(I+uv^{T})=1+v^{T}u\)；(2) 设 \(A=\begin{pmatrix}2&1\\1&1\end{pmatrix},\ u=\binom{1}{2},\ v=\binom{1}{-1}\)，求 \(\det(A+uv^{T})\)。`,
  a: String.raw`(1) 已证；(2) \(\det(A+uv^{T})=-3\)。`,
  sol: String.raw`(1) \(uv^{T}\) 是秩 \(1\) 矩阵，\(v^{T}u\) 是它的一个特征值（对应特征向量 \(u\)），其余 \(n-1\) 个特征值为 \(0\)。故 \(I+uv^{T}\) 的特征值为 \(1+v^{T}u\) 与 \(1\)（\(n-1\) 重），于是
  \[
  \det(I+uv^{T})=1+v^{T}u.
  \]
  (2) \(A\) 可逆且 \(\det A=1\)，由 (1)，
  \[
  \det(A+uv^{T})=\det A\cdot\det\left(I+A^{-1}uv^{T}\right)=1\cdot\left(1+v^{T}A^{-1}u\right).
  \]
  由 \(A^{-1}=\begin{pmatrix}1&-1\\-1&2\end{pmatrix}\) 得 \(A^{-1}u=\binom{-1}{3}\)，\(v^{T}A^{-1}u=-1-3=-4\)，故 \(\det(A+uv^{T})=-3\)。` },

{ id:'LA10-25', ch:10, type:'计算', diff:4, tags:'矩阵幂 正交对角化',
  q: String.raw`设 \(A=\begin{pmatrix}2&1\\1&2\end{pmatrix}\)，求 \(A^{n}\)（\(n\) 为正整数）。`,
  a: String.raw`\[
  A^{n}=\frac{1}{2}\begin{pmatrix}3^{n}+1&3^{n}-1\\3^{n}-1&3^{n}+1\end{pmatrix}.
  \]`,
  sol: String.raw`\(A\) 的特征值为 \(3,1\)，对应的单位特征向量为
  \[
  q_1=\frac{1}{\sqrt2}\binom{1}{1},\qquad q_2=\frac{1}{\sqrt2}\binom{1}{-1}.
  \]
  令 \(Q=(q_1,q_2)\) 为正交矩阵，则
  \[
  A=Q\begin{pmatrix}3&0\\0&1\end{pmatrix}Q^{T},
  \]
  故
  \[
  A^{n}=Q\begin{pmatrix}3^{n}&0\\0&1\end{pmatrix}Q^{T}
  =\frac12\begin{pmatrix}3^{n}+1&3^{n}-1\\3^{n}-1&3^{n}+1\end{pmatrix}.
  \]` },

{ id:'LA10-26', ch:10, type:'证明', diff:5, tags:'反对称矩阵 特征值 秩',
  q: String.raw`设 \(A\) 为 \(n\) 阶实反对称矩阵，即 \(A^{T}=-A\)。(1) 证明 \(A\) 的特征值只能是 \(0\) 或纯虚数；(2) 证明 \(n\) 为奇数时 \(\det A=0\)，且对任意 \(n\)，\(\operatorname{rank}A\) 为偶数。`,
  a: String.raw`特征值为 \(0\) 或纯虚数；奇数阶时 \(\det A=0\)，秩恒为偶数。`,
  sol: String.raw`(1) 设 \(Ax=\lambda x\)，\(x\neq0\)，\(x\in\mathbb{C}^{n}\)。由 \(A^{T}=-A\) 得 \(A^{H}=-A\)，于是
  \[
  \bar\lambda\,x^{H}x=(x^{H}Ax)^{H}=x^{H}A^{H}x=-x^{H}Ax=-\lambda x^{H}x,
  \]
  故 \(\bar\lambda=-\lambda\)，即 \(\operatorname{Re}\lambda=0\)，\(\lambda\) 为 \(0\) 或纯虚数。
  (2) 注意 \(iA\) 是 Hermite 矩阵，故 \(A\) 在复数域上可对角化。特征多项式为实系数多项式，非实根成共轭对出现，每个非零纯虚特征值的重数成对出现，故 \(\operatorname{rank}A\)（等于非零特征值个数，计重数）为偶数；\(n\) 为奇数时特征多项式次数为奇数，必有实根，而实特征值只能为 \(0\)，故 \(\det A=0\)。` },

{ id:'LA10-27', ch:10, type:'证明', diff:5, tags:'Gram矩阵 半正定 秩',
  q: String.raw`设 \(A\) 是 \(m\times n\) 实矩阵。证明 \(A^{T}A\) 半正定，且 \(A^{T}A\) 正定当且仅当 \(\operatorname{rank}A=n\)。`,
  a: String.raw`\(x^{T}A^{T}Ax=\|Ax\|^{2}\ge0\)；正定等价于 \(\ker A=\{0\}\)，即 \(\operatorname{rank}A=n\)。`,
  sol: String.raw`对任意 \(x\in\mathbb{R}^{n}\)，
  \[
  x^{T}(A^{T}A)x=(Ax)^{T}(Ax)=\|Ax\|^{2}\ge0,
  \]
  故 \(A^{T}A\) 半正定。若 \(A^{T}A\) 正定，则 \(A^{T}Ax=0\) 只有零解 \(x=0\)；由 \(x^{T}A^{T}Ax=\|Ax\|^{2}\) 知这等价于 \(\ker A=\{0\}\)，故 \(\operatorname{rank}A=n\)。
  反之若 \(\operatorname{rank}A=n\)，则 \(Ax=0\Rightarrow x=0\)，于是 \(x\neq0\) 时 \(\|Ax\|^{2}>0\)，即 \(A^{T}A\) 正定。` },

{ id:'LA10-28', ch:10, type:'计算', diff:5, tags:'Vandermonde行列式 秩 参数讨论',
  q: String.raw`设 \(A=\begin{pmatrix}1&1&1\\1&\lambda&\lambda^{2}\\1&\lambda^{2}&\lambda^{4}\end{pmatrix}\)。求 \(\det A\)，并讨论 \(\lambda\) 取何值时 \(\operatorname{rank}A\) 分别为 \(3,2,1\)。`,
  a: String.raw`\(\det A=\lambda(\lambda-1)^{3}(\lambda+1)\)；\(\lambda\notin\{0,1,-1\}\) 时秩为 \(3\)，\(\lambda=0\) 或 \(-1\) 时秩为 \(2\)，\(\lambda=1\) 时秩为 \(1\)。`,
  sol: String.raw`这是以 \(1,\lambda,\lambda^{2}\) 为节点的 Vandermonde 行列式，故
  \[
  \det A=(\lambda-1)(\lambda^{2}-1)(\lambda^{2}-\lambda)=\lambda(\lambda-1)^{3}(\lambda+1).
  \]
  当 \(\lambda\notin\{0,1,-1\}\) 时 \(\det A\neq0\)，秩为 \(3\)。
  当 \(\lambda=1\) 时三行全为 \((1,1,1)\)，秩为 \(1\)。当 \(\lambda=0\) 时矩阵为
  \[
  \begin{pmatrix}1&1&1\\1&0&0\\1&0&0\end{pmatrix},
  \]
  秩为 \(2\)。当 \(\lambda=-1\) 时第一、三行相同，而前两行线性无关，秩为 \(2\)。` },

{ id:'LA10-29', ch:10, type:'计算', diff:5, tags:'线性方程组 参数讨论 通解',
  q: String.raw`讨论 \(\lambda\) 取何值时方程组
  \[
  \begin{cases}
  x_1+x_2+\lambda x_3=1,\\
  x_1+\lambda x_2+x_3=1,\\
  \lambda x_1+x_2+x_3=1
  \end{cases}
  \]
  有唯一解、无解、无穷多解，并在有解时求出解。`,
  a: String.raw`\(\lambda\neq1,-2\) 时唯一解 \(x_1=x_2=x_3=\dfrac{1}{\lambda+2}\)；\(\lambda=1\) 时无穷多解，通解 \(x_1+x_2+x_3=1\)；\(\lambda=-2\) 时无解。`,
  sol: String.raw`系数行列式
  \[
  D=\begin{vmatrix}1&1&\lambda\\1&\lambda&1\\\lambda&1&1\end{vmatrix}
  =-(\lambda-1)^{2}(\lambda+2).
  \]
  (1) 当 \(\lambda\neq1,-2\) 时 \(D\neq0\)，方程组有唯一解。由对称性令 \(x_1=x_2=x_3=c\)，代入得 \((2+\lambda)c=1\)，故 \(c=\dfrac{1}{\lambda+2}\)，唯一性保证这就是全部解。
  (2) 当 \(\lambda=1\) 时三个方程都是 \(x_1+x_2+x_3=1\)，系数矩阵秩为 \(1\)，有无穷多解，通解为
  \[
  x=\begin{pmatrix}1\\0\\0\end{pmatrix}+s\begin{pmatrix}-1\\1\\0\end{pmatrix}+t\begin{pmatrix}-1\\0\\1\end{pmatrix}.
  \]
  (3) 当 \(\lambda=-2\) 时三式相加得 \(0=3\)，矛盾，故无解（此时系数矩阵秩为 \(2\)，增广矩阵秩为 \(3\)）。` },

{ id:'LA10-30', ch:10, type:'计算', diff:5, tags:'二次型 正定 Sylvester判据',
  q: String.raw`设二次型 \(f(x_1,x_2,x_3)=x_1^{2}+2x_2^{2}+ax_3^{2}+2x_1x_2+2x_1x_3\)。求 \(a\) 的取值范围，使 \(f\) 正定。`,
  a: String.raw`\(a>2\)。`,
  sol: String.raw`二次型的矩阵为
  \[
  A=\begin{pmatrix}1&1&1\\1&2&0\\1&0&a\end{pmatrix}.
  \]
  顺序主子式：
  \[
  \Delta_1=1>0,\qquad \Delta_2=\begin{vmatrix}1&1\\1&2\end{vmatrix}=1>0,\qquad
  \Delta_3=\det A=a-2.
  \]
  由 Sylvester 判据，\(f\) 正定当且仅当三个顺序主子式全大于 \(0\)，即 \(a>2\)。` },

{ id:'LA10-31', ch:10, type:'计算', diff:5, tags:'二次型 正交变换 标准形',
  q: String.raw`用正交变换 \(x=Qy\) 化二次型
  \[
  f=2x_1^{2}+2x_2^{2}+2x_3^{2}+2x_1x_2+2x_1x_3+2x_2x_3
  \]
  为标准形，并写出正交矩阵 \(Q\)。`,
  a: String.raw`\(f=4y_1^{2}+y_2^{2}+y_3^{2}\)，其中
  \[
  Q=\begin{pmatrix}
  \frac{1}{\sqrt3}&\frac{1}{\sqrt2}&\frac{1}{\sqrt6}\\
  \frac{1}{\sqrt3}&-\frac{1}{\sqrt2}&\frac{1}{\sqrt6}\\
  \frac{1}{\sqrt3}&0&-\frac{2}{\sqrt6}
  \end{pmatrix}.
  \]`,
  sol: String.raw`二次型矩阵 \(A=I+J\)（\(J\) 为全 \(1\) 矩阵）。\(J\) 的特征值为 \(3,0,0\)，故 \(A\) 的特征值为 \(4,1,1\)。
  特征值 \(4\) 的单位特征向量为 \(q_1=\frac{1}{\sqrt3}(1,1,1)^{T}\)；特征值 \(1\) 的特征子空间为 \(x_1+x_2+x_3=0\)，在其中取正交单位向量
  \[
  q_2=\frac{1}{\sqrt2}(1,-1,0)^{T},\qquad q_3=\frac{1}{\sqrt6}(1,1,-2)^{T}.
  \]
  令 \(Q=(q_1,q_2,q_3)\)，它是正交矩阵，且 \(Q^{T}AQ=\operatorname{diag}(4,1,1)\)。作变换 \(x=Qy\) 得
  \[
  f=4y_1^{2}+y_2^{2}+y_3^{2}.
  \]` },

{ id:'LA10-32', ch:10, type:'计算', diff:5, tags:'Jordan标准形 可对角化 几何重数',
  q: String.raw`设 \(A=\begin{pmatrix}0&1&0\\0&0&1\\1&-3&3\end{pmatrix}\)。求 \(A\) 的特征多项式与 Jordan 标准形，并判断 \(A\) 是否可对角化。`,
  a: String.raw`特征多项式为 \((\lambda-1)^{3}\)，Jordan 标准形为 \(J_3(1)=\begin{pmatrix}1&1&0\\0&1&1\\0&0&1\end{pmatrix}\)，\(A\) 不可对角化。`,
  sol: String.raw`直接计算
  \[
  \det(\lambda I-A)=\lambda^{3}-3\lambda^{2}+3\lambda-1=(\lambda-1)^{3}.
  \]
  又
  \[
  A-I=\begin{pmatrix}-1&1&0\\0&-1&1\\1&-3&2\end{pmatrix},
  \]
  其左上角二阶子式非零，故 \(\operatorname{rank}(A-I)=2\)，从而 \(\dim\ker(A-I)=3-2=1\)。特征值 \(1\) 的几何重数为 \(1\)，小于代数重数 \(3\)，故 \(A\) 不可对角化。
  因此 \(A\) 的 Jordan 标准形是单个三阶块 \(J_3(1)\)（对应特征向量 \((1,1,1)^{T}\)）。` },

{ id:'LA10-33', ch:10, type:'计算', diff:5, tags:'线性变换 矩阵表示 可对角化',
  q: String.raw`设 \(T:\mathbb{R}_2[x]\to\mathbb{R}_2[x]\)，\(T(p)=p'+p\)。求 \(T\) 在基 \(1,x,x^{2}\) 下的矩阵 \(A\)，并判断 \(T\) 是否可对角化。`,
  a: String.raw`\[
  A=\begin{pmatrix}1&1&0\\0&1&2\\0&0&1\end{pmatrix},
  \]
  \(T\) 不可对角化。`,
  sol: String.raw`由 \(T(1)=1,\ T(x)=1+x,\ T(x^{2})=x^{2}+2x\) 得坐标向量
  \[
  (1,0,0)^{T},\qquad(1,1,0)^{T},\qquad(0,2,1)^{T},
  \]
  按列排得 \(A\) 如上。于是
  \[
  A-I=\begin{pmatrix}0&1&0\\0&0&2\\0&0&0\end{pmatrix},\qquad \operatorname{rank}(A-I)=2,
  \]
  故 \(\dim\ker(A-I)=1\)，而特征值 \(1\) 的代数重数为 \(3\)，几何重数小于代数重数，\(T\) 不可对角化。` },

{ id:'LA10-34', ch:10, type:'计算', diff:4, tags:'最小二乘 正规方程',
  q: String.raw`求方程组 \(x_1=1,\ x_2=0,\ x_1+x_2=3\) 的最小二乘解。`,
  a: String.raw`\(\hat{x}=\left(\dfrac53,\dfrac23\right)^{T}\)。`,
  sol: String.raw`记
  \[
  A=\begin{pmatrix}1&0\\0&1\\1&1\end{pmatrix},\qquad b=\begin{pmatrix}1\\0\\3\end{pmatrix}.
  \]
  正规方程为 \(A^{T}A\hat{x}=A^{T}b\)，其中
  \[
  A^{T}A=\begin{pmatrix}2&1\\1&2\end{pmatrix},\qquad A^{T}b=\begin{pmatrix}4\\3\end{pmatrix}.
  \]
  解得
  \[
  \hat{x}=\frac13\begin{pmatrix}2&-1\\-1&2\end{pmatrix}\binom{4}{3}
  =\binom{5/3}{2/3}.
  \]` },

{ id:'LA10-35', ch:10, type:'计算', diff:4, tags:'秩1矩阵 矩阵幂',
  q: String.raw`设 \(\alpha=(1,2,-1)^{T},\ \beta=(1,1,1)^{T}\)，\(A=\alpha\beta^{T}\)。求 \(\operatorname{rank}A\) 与 \(A^{n}\)。`,
  a: String.raw`\(\operatorname{rank}A=1\)，\(A^{n}=2^{n-1}A\)（\(n\ge1\)）。`,
  sol: String.raw`由 \(\beta^{T}\alpha=1+2-1=2\) 得
  \[
  A^{2}=\alpha\beta^{T}\alpha\beta^{T}=(\beta^{T}\alpha)\alpha\beta^{T}=2A.
  \]
  归纳得 \(A^{n}=2^{n-1}A\)。又 \(A\neq0\) 且 \(\operatorname{rank}A\le1\)，故 \(\operatorname{rank}A=1\)。` },

{ id:'LA10-36', ch:10, type:'计算', diff:4, tags:'Vandermonde行列式 行列式求根',
  q: String.raw`计算
  \[
  D=\begin{vmatrix}1&1&1&1\\1&2&3&x\\1&4&9&x^{2}\\1&8&27&x^{3}\end{vmatrix},
  \]
  并求方程 \(D=0\) 的根。`,
  a: String.raw`\(D=2(x-1)(x-2)(x-3)\)，根为 \(1,2,3\)。`,
  sol: String.raw`这是以 \(1,2,3,x\) 为节点、列指标为 \(0,1,2,3\) 次幂的 Vandermonde 行列式，故
  \[
  D=\prod_{1\le i<j\le4}(a_j-a_i),\qquad (a_1,a_2,a_3,a_4)=(1,2,3,x).
  \]
  逐项计算：
  \[
  D=(2-1)(3-1)(x-1)(3-2)(x-2)(x-3)=2(x-1)(x-2)(x-3).
  \]
  故 \(D=0\) 的根为 \(x=1,2,3\)。` },

{ id:'LA10-37', ch:10, type:'计算', diff:4, tags:'实对称矩阵 正交对角化',
  q: String.raw`求正交矩阵 \(Q\)，使 \(Q^{T}AQ\) 为对角矩阵，其中 \(A=\begin{pmatrix}1&2\\2&1\end{pmatrix}\)。`,
  a: String.raw`\[
  Q=\frac{1}{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix},\qquad Q^{T}AQ=\operatorname{diag}(3,-1).
  \]`,
  sol: String.raw`特征多项式为 \(\lambda^{2}-2\lambda-3=(\lambda-3)(\lambda+1)\)，特征值为 \(3,-1\)。对应特征向量分别取 \((1,1)^{T}\) 与 \((1,-1)^{T}\)，它们已正交，单位化后按列拼成
  \[
  Q=\frac{1}{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}.
  \]
  于是 \(Q^{T}AQ=\operatorname{diag}(3,-1)\)。` },

{ id:'LA10-38', ch:10, type:'计算', diff:5, tags:'特征值 迹 伴随矩阵',
  q: String.raw`设 \(3\) 阶矩阵 \(A\) 的特征值为 \(1,-1,2\)。求 \(\operatorname{tr}(A^{3})\)、\(\det(A^{*})\) 与 \(\operatorname{tr}(A^{*})\)，其中 \(A^{*}\) 为 \(A\) 的伴随矩阵。`,
  a: String.raw`\(\operatorname{tr}(A^{3})=8\)，\(\det(A^{*})=4\)，\(\operatorname{tr}(A^{*})=-1\)。`,
  sol: String.raw`\(A^{3}\) 的特征值为 \(1^{3},(-1)^{3},2^{3}\)，即 \(1,-1,8\)，故
  \[
  \operatorname{tr}(A^{3})=1-1+8=8.
  \]
  又 \(\det A=1\cdot(-1)\cdot2=-2\neq0\)，故 \(A\) 可逆，\(A^{*}=\det(A)A^{-1}\) 的特征值为
  \[
  \frac{\det A}{\lambda_i}=-2,\ 2,\ -1.
  \]
  于是 \(\det(A^{*})=(-2)\cdot2\cdot(-1)=4\)，\(\operatorname{tr}(A^{*})=-2+2-1=-1\)。` },

{ id:'LA10-39', ch:10, type:'计算', diff:4, tags:'奇异值 谱范数 条件数',
  q: String.raw`求 \(A=\begin{pmatrix}1&2\\2&1\end{pmatrix}\) 的奇异值、谱范数与条件数。`,
  a: String.raw`奇异值为 \(3,1\)；\(\|A\|_2=3\)；条件数为 \(3\)。`,
  sol: String.raw`\[
  A^{T}A=A^{2}=\begin{pmatrix}5&4\\4&5\end{pmatrix},
  \]
  其特征值为 \(9,1\)，故奇异值为 \(\sqrt9=3\) 与 \(\sqrt1=1\)。谱范数等于最大奇异值：
  \[
  \|A\|_2=\sigma_{\max}=3,\qquad \operatorname{cond}(A)=\frac{\sigma_{\max}}{\sigma_{\min}}=3.
  \]` },

{ id:'LA10-40', ch:10, type:'证明', diff:5, tags:'秩估计 秩1分解',
  q: String.raw`设 \(A=(a_i+b_j)_{n\times n}\)（\(n\ge2\)）。(1) 证明 \(\operatorname{rank}A\le2\)；(2) 求 \(\operatorname{rank}A=2\) 的充要条件。`,
  a: String.raw`\(\operatorname{rank}A\le2\)；\(\operatorname{rank}A=2\) 当且仅当 \(a_1,\dots,a_n\) 不全相等且 \(b_1,\dots,b_n\) 不全相等。`,
  sol: String.raw`记 \(\mathbf{1}=(1,\dots,1)^{T},\ a=(a_i),\ b=(b_j)\)，则
  \[
  A=\mathbf{1}b^{T}+a\mathbf{1}^{T},
  \]
  是两个秩不超过 \(1\) 的矩阵之和，故 \(\operatorname{rank}A\le2\)。
  若 \(a\) 为常向量，则 \(A=\mathbf{1}(a_1\mathbf{1}+b)^{T}\)，秩不超过 \(1\)；同理 \(b\) 为常向量时秩也不超过 \(1\)。
  反之设 \(a,b\) 均非常向量。此时 \(A\) 的第 \(j\) 列为 \(b_j\mathbf{1}+a\)，全部落在 \(\operatorname{span}\{\mathbf{1},a\}\) 中，而 \(\mathbf{1}\) 与 \(a\) 线性无关。取 \(b_i\neq b_j\)，则两列之差 \((b_i-b_j)\mathbf{1}\) 属于列空间，从而 \(\mathbf{1}\) 属于列空间，进而 \(a\) 也属于列空间，故列空间维数为 \(2\)，即 \(\operatorname{rank}A=2\)。` },

{ id:'LA10-41', ch:10, type:'计算', diff:4, tags:'分块行列式 反对角块',
  q: String.raw`计算 \(2n\) 阶行列式
  \[
  \det\begin{pmatrix}0&A\\A&0\end{pmatrix},
  \]
  其中 \(A\) 为 \(n\) 阶方阵。`,
  a: String.raw`\((-1)^{n}(\det A)^{2}\)。`,
  sol: String.raw`交换前 \(n\) 行与后 \(n\) 行，共需 \(n^{2}\) 次相邻对换，得块对角矩阵 \(\operatorname{diag}(A,A)\)，故
  \[
  \det\begin{pmatrix}0&A\\A&0\end{pmatrix}=(-1)^{n^{2}}\det A\cdot\det A=(-1)^{n}(\det A)^{2},
  \]
  其中用到 \(n^{2}\) 与 \(n\) 同奇偶。` },

{ id:'LA10-42', ch:10, type:'计算', diff:4, tags:'分块矩阵 逆矩阵',
  q: String.raw`设 \(M=\begin{pmatrix}A&B\\0&D\end{pmatrix}\)，其中 \(A,D\) 分别为 \(m,n\) 阶可逆矩阵。求 \(M^{-1}\)。`,
  a: String.raw`\[
  M^{-1}=\begin{pmatrix}A^{-1}&-A^{-1}BD^{-1}\\0&D^{-1}\end{pmatrix}.
  \]`,
  sol: String.raw`设 \(M^{-1}=\begin{pmatrix}X&Y\\Z&W\end{pmatrix}\)，由 \(MM^{-1}=I\) 得
  \[
  AX+BZ=I,\qquad AY+BW=0,\qquad DZ=0,\qquad DW=I.
  \]
  由 \(D\) 可逆得 \(Z=0,\ W=D^{-1}\)；再由 \(A\) 可逆得 \(X=A^{-1}\)，并由 \(AY=-BW=-BD^{-1}\) 得 \(Y=-A^{-1}BD^{-1}\)。故
  \[
  M^{-1}=\begin{pmatrix}A^{-1}&-A^{-1}BD^{-1}\\0&D^{-1}\end{pmatrix}.
  \]` },

{ id:'LA10-43', ch:10, type:'计算', diff:5, tags:'二次型 正定 参数范围',
  q: String.raw`设 \(f=x_1^{2}+x_2^{2}+5x_3^{2}+2ax_1x_2-2x_1x_3+4x_2x_3\)。求 \(a\) 的取值范围，使 \(f\) 正定。`,
  a: String.raw`\(-\dfrac45<a<0\)。`,
  sol: String.raw`二次型矩阵为
  \[
  A=\begin{pmatrix}1&a&-1\\a&1&2\\-1&2&5\end{pmatrix}.
  \]
  顺序主子式：
  \[
  \Delta_1=1,\qquad \Delta_2=1-a^{2},\qquad \Delta_3=-5a^{2}-4a=-a(5a+4).
  \]
  要求 \(\Delta_2>0\)，即 \(|a|<1\)；要求 \(\Delta_3>0\)，即 \(-\dfrac45<a<0\)。两者取交得
  \[
  -\frac45<a<0.
  \]` },

{ id:'LA10-44', ch:10, type:'计算', diff:4, tags:'伴随矩阵 行列式',
  q: String.raw`设 \(A\) 为 \(4\) 阶矩阵，\(\det A=2\)，\(A^{*}\) 为 \(A\) 的伴随矩阵。求 \(\det(A^{*})\) 与 \(\det\bigl((A^{*})^{*}\bigr)\)。`,
  a: String.raw`\(\det(A^{*})=8\)，\(\det\bigl((A^{*})^{*}\bigr)=512\)。`,
  sol: String.raw`由 \(A^{*}=\det(A)A^{-1}\) 得
  \[
  \det(A^{*})=(\det A)^{n-1}=2^{3}=8.
  \]
  对 \(A^{*}\) 再用同一公式：
  \[
  \det\bigl((A^{*})^{*}\bigr)=(\det A^{*})^{3}=8^{3}=512.
  \]` },

{ id:'LA10-45', ch:10, type:'证明', diff:5, tags:'幂等矩阵 方程组 通解',
  q: String.raw`设 \(n\) 阶矩阵 \(A\) 满足 \(A^{2}=A\)，\(b\in\mathbb{R}^{n}\)。(1) 证明 \(Ax=b\) 有解当且仅当 \(Ab=b\)；(2) 有解时写出通解。`,
  a: String.raw`有解当且仅当 \(Ab=b\)，此时通解为
  \[
  x=b+(I-A)z,\qquad z\in\mathbb{R}^{n}\ \text{任意}.
  \]`,
  sol: String.raw`(1) 若 \(Ax=b\)，则
  \[
  b=Ax=A^{2}x=A(Ax)=Ab.
  \]
  反之若 \(Ab=b\)，取 \(x=b\) 即为解。
  (2) 齐次方程 \(Ax=0\) 的解空间为 \(\ker A\)。由 \(A^{2}=A\) 知对任意 \(y\) 有 \(A(I-A)y=(A-A^{2})y=0\)，故 \(\operatorname{Im}(I-A)\subseteq\ker A\)；反之若 \(Ay=0\)，则 \(y=(I-A)y\)，故 \(\ker A\subseteq\operatorname{Im}(I-A)\)。于是 \(\ker A=\operatorname{Im}(I-A)\)，通解为
  \[
  x=b+(I-A)z,\qquad z\in\mathbb{R}^{n}.
  \]
  验证：\(A\bigl(b+(I-A)z\bigr)=Ab+(A-A^{2})z=b\)。` },

{ id:'LA10-46', ch:10, type:'计算', diff:4, tags:'幂零矩阵 幂零指数',
  q: String.raw`设 \(A=\begin{pmatrix}0&1&1\\0&0&1\\0&0&0\end{pmatrix}\)。求 \(A^{2}\)、\(A^{3}\)，并求 \(A\) 的幂零指数。`,
  a: String.raw`\[
  A^{2}=\begin{pmatrix}0&0&1\\0&0&0\\0&0&0\end{pmatrix},\qquad A^{3}=0,
  \]
  幂零指数为 \(3\)。`,
  sol: String.raw`直接计算
  \[
  A^{2}=\begin{pmatrix}0&0&1\\0&0&0\\0&0&0\end{pmatrix},
  \]
  再乘 \(A\) 得 \(A^{3}=A^{2}A=0\)。又 \(A^{2}\neq0\)，故使 \(A^{k}=0\) 成立的最小正整数为 \(k=3\)，即幂零指数为 \(3\)。` },

{ id:'LA10-47', ch:10, type:'计算', diff:5, tags:'秩1矩阵 特征多项式 迹',
  q: String.raw`设 \(A=\alpha\beta^{T}\) 为 \(n\) 阶矩阵，且 \(\operatorname{tr}A\neq0\)。求 \(\operatorname{rank}A\) 与特征多项式 \(\det(\lambda I-A)\)。`,
  a: String.raw`\(\operatorname{rank}A=1\)，\[
  \det(\lambda I-A)=\lambda^{n-1}\bigl(\lambda-\operatorname{tr}A\bigr).
  \]`,
  sol: String.raw`由 \(\operatorname{rank}A\le1\) 且 \(A\neq0\)（否则 \(\operatorname{tr}A=0\)），得 \(\operatorname{rank}A=1\)。
  于是 \(0\) 是 \(A\) 的特征值，其几何重数为 \(n-1\)，从而代数重数至少为 \(n-1\)。设剩下的一个特征值为 \(\mu\)，由迹等于全部特征值之和得
  \[
  \operatorname{tr}A=0+\cdots+0+\mu,
  \]
  即 \(\mu=\operatorname{tr}A\)。故
  \[
  \det(\lambda I-A)=\lambda^{n-1}\bigl(\lambda-\operatorname{tr}A\bigr).
  \]
  也可由 \(A^{2}=(\operatorname{tr}A)A\) 看出最小多项式为 \(\lambda(\lambda-\operatorname{tr}A)\)。` },

{ id:'LA10-48', ch:10, type:'计算', diff:4, tags:'矩阵的秩 基础解系',
  q: String.raw`求 \(A=\begin{pmatrix}1&2&3\\2&4&6\\1&0&1\end{pmatrix}\) 的秩，并求齐次方程组 \(Ax=0\) 的一个基础解系。`,
  a: String.raw`\(\operatorname{rank}A=2\)，基础解系为 \((1,1,-1)^{T}\)。`,
  sol: String.raw`第二行是第一行的 \(2\) 倍，而第一、三两行线性无关（由前两列构成的子式 \(1\cdot0-2\cdot1=-2\neq0\)），故 \(\operatorname{rank}A=2\)。
  方程组等价于
  \[
  x_1+2x_2+3x_3=0,\qquad x_1+x_3=0.
  \]
  令 \(x_1=t\)，则 \(x_3=-t\)，代入第一式得 \(2x_2=-x_1-3x_3=-t+3t=2t\)，即 \(x_2=t\)。故
  \[
  x=t(1,1,-1)^{T},
  \]
  基础解系为 \((1,1,-1)^{T}\)。` },

{ id:'LA10-49', ch:10, type:'计算', diff:5, tags:'二次型 Rayleigh商 条件极值',
  q: String.raw`设 \(f(x)=x_1^{2}+x_2^{2}+x_3^{2}+2x_1x_2+2x_1x_3+2x_2x_3\)。求 \(f\) 在单位球面 \(x_1^{2}+x_2^{2}+x_3^{2}=1\) 上的最大值与最小值，并指出取得最值的点。`,
  a: String.raw`最大值为 \(3\)，在 \(\pm\dfrac{1}{\sqrt3}(1,1,1)^{T}\) 处取得；最小值为 \(0\)，在满足 \(x_1+x_2+x_3=0\) 且 \(\|x\|=1\) 的 \(x\) 处取得。`,
  sol: String.raw`二次型矩阵为 \(A=J\)（全 \(1\) 矩阵），其特征值为 \(3,0,0\)。由 Rayleigh 商估计
  \[
  \lambda_{\min}\|x\|^{2}\le x^{T}Ax\le\lambda_{\max}\|x\|^{2},
  \]
  在 \(\|x\|=1\) 上得 \(0\le f(x)\le3\)。
  取 \(x=\dfrac{1}{\sqrt3}(1,1,1)^{T}\) 时 \(f=(x_1+x_2+x_3)^{2}=3\)，达到最大值；取任一满足 \(x_1+x_2+x_3=0,\ \|x\|=1\) 的 \(x\)（如 \(\frac{1}{\sqrt2}(1,-1,0)^{T}\)）时 \(f=0\)，达到最小值。` },

{ id:'LA10-50', ch:10, type:'证明', diff:5, tags:'正定矩阵 内积 Cauchy-Schwarz',
  q: String.raw`设 \(A\) 为 \(n\) 阶正定矩阵。证明对任意 \(x,y\in\mathbb{R}^{n}\)，
  \[
  (x^{T}Ay)^{2}\le(x^{T}Ax)(y^{T}Ay),
  \]
  并指出等号成立的条件。`,
  a: String.raw`不等式成立；等号成立当且仅当 \(x,y\) 线性相关。`,
  sol: String.raw`\(A\) 正定，存在可逆矩阵 \(C\) 使 \(A=C^{T}C\)。令 \(u=Cx,\ v=Cy\)，则
  \[
  x^{T}Ay=(Cx)^{T}(Cy)=u^{T}v,\qquad x^{T}Ax=\|u\|^{2},\qquad y^{T}Ay=\|v\|^{2}.
  \]
  由 Cauchy-Schwarz 不等式 \((u^{T}v)^{2}\le\|u\|^{2}\|v\|^{2}\) 即得
  \[
  (x^{T}Ay)^{2}\le(x^{T}Ax)(y^{T}Ay).
  \]
  等号成立当且仅当 \(u,v\) 线性相关；由于 \(C\) 可逆，这等价于 \(x,y\) 线性相关。` },

{ id:'LA10-51', ch:10, type:'证明', diff:5, tags:'Frobenius秩不等式 维数估计',
  q: String.raw`设 \(A,B,C\) 分别为 \(m\times n,\ n\times p,\ p\times q\) 实矩阵。证明 Frobenius 秩不等式
  \[
  \operatorname{rank}(ABC)\ge\operatorname{rank}(AB)+\operatorname{rank}(BC)-\operatorname{rank}B.
  \]`,
  a: String.raw`用维数估计：\(\operatorname{rank}(AB)-\operatorname{rank}(ABC)\le\operatorname{rank}B-\operatorname{rank}(BC)\)。`,
  sol: String.raw`记 \(U=\operatorname{Im}C\subseteq\mathbb{R}^{p}\)，\(W=B(U)\subseteq\mathbb{R}^{n}\)，则
  \[
  \operatorname{rank}(BC)=\dim W,\qquad \operatorname{rank}(ABC)=\dim A(W).
  \]
  对线性映射 \(A\) 及子空间 \(W\subseteq\operatorname{Im}B\)，由维数公式
  \[
  \dim A(\operatorname{Im}B)-\dim A(W)
  =\bigl(\dim\operatorname{Im}B-\dim W\bigr)
  -\bigl(\dim(\ker A\cap\operatorname{Im}B)-\dim(\ker A\cap W)\bigr).
  \]
  右端第二个括号非负，故
  \[
  \operatorname{rank}(AB)-\operatorname{rank}(ABC)\le\operatorname{rank}B-\operatorname{rank}(BC).
  \]
  移项即得所需不等式。` },

{ id:'LA10-52', ch:10, type:'证明', diff:5, tags:'秩不等式 三角不等式',
  q: String.raw`设 \(A,B\) 为同型矩阵。证明
  \[
  |\operatorname{rank}A-\operatorname{rank}B|\le\operatorname{rank}(A+B)\le\operatorname{rank}A+\operatorname{rank}B.
  \]`,
  a: String.raw`右端由 \(\operatorname{Im}(A+B)\subseteq\operatorname{Im}A+\operatorname{Im}B\)，左端由 \(A=(A+B)-B\)。`,
  sol: String.raw`对任意 \(x\)，\((A+B)x=Ax+Bx\in\operatorname{Im}A+\operatorname{Im}B\)，故
  \[
  \operatorname{rank}(A+B)\le\dim(\operatorname{Im}A+\operatorname{Im}B)\le\operatorname{rank}A+\operatorname{rank}B.
  \]
  又 \(A=(A+B)-B\)，对 \(A+B\) 与 \(-B\) 用上式得
  \[
  \operatorname{rank}A\le\operatorname{rank}(A+B)+\operatorname{rank}B,
  \]
  即 \(\operatorname{rank}(A+B)\ge\operatorname{rank}A-\operatorname{rank}B\)。交换 \(A,B\) 又得 \(\operatorname{rank}(A+B)\ge\operatorname{rank}B-\operatorname{rank}A\)，两者合并即得左端。` },

{ id:'LA10-53', ch:10, type:'证明', diff:4, tags:'矩阵方程 迹',
  q: String.raw`设 \(A,X\) 为 \(n\) 阶复矩阵。证明矩阵方程
  \[
  AX-XA=I
  \]
  无解。`,
  a: String.raw`两边取迹得 \(0=n\)，矛盾。`,
  sol: String.raw`若 \(AX-XA=I\)，两边取迹：
  \[
  \operatorname{tr}(AX-XA)=\operatorname{tr}(AX)-\operatorname{tr}(XA)=0,
  \]
  这里用到 \(\operatorname{tr}(AX)=\operatorname{tr}(XA)\) 对任意同阶方阵成立。但 \(\operatorname{tr}I=n\neq0\)，矛盾。故方程无解。` },

{ id:'LA10-54', ch:10, type:'证明', diff:5, tags:'正交矩阵 行列式 特征值',
  q: String.raw`设 \(A\) 为 \(n\) 阶实正交矩阵。(1) 证明 \(\det A=\pm1\)；(2) 若 \(\det A=-1\)，证明 \(-1\) 是 \(A\) 的特征值。`,
  a: String.raw`\(\det A=\pm1\)；\(\det A=-1\) 时 \(\det(I+A)=0\)。`,
  sol: String.raw`(1) 由 \(A^{T}A=I\) 得
  \[
  (\det A)^{2}=\det(A^{T})\det A=\det(A^{T}A)=1,
  \]
  故 \(\det A=\pm1\)。
  (2) 由 \(A^{-1}=A^{T}\) 及 \(\det A=\det(A^{T})\)，
  \[
  \det(I+A)=\det\bigl(A(A^{-1}+I)\bigr)=\det A\cdot\det(A^{T}+I)=\det A\cdot\det(I+A).
  \]
  若 \(\det A=-1\)，则 \(\det(I+A)=-\det(I+A)\)，故 \(\det(I+A)=0\)，即 \(-1\) 是 \(A\) 的特征值。` },

{ id:'LA10-55', ch:10, type:'证明', diff:5, tags:'正交矩阵 复特征值 模',
  q: String.raw`设 \(A\) 为 \(n\) 阶实正交矩阵，\(\lambda\) 为 \(A\) 的复特征值。证明 \(|\lambda|=1\)。`,
  a: String.raw`由 \(\|Ax\|=\|x\|\) 得 \(|\lambda|=1\)。`,
  sol: String.raw`设 \(Ax=\lambda x\)，\(x\neq0\)，\(x\in\mathbb{C}^{n}\)。两边取共轭转置得
  \[
  \bar{x}^{T}A^{T}=\bar\lambda\,\bar{x}^{T}.
  \]
  右乘 \(Ax=\lambda x\)：
  \[
  \bar{x}^{T}A^{T}Ax=\bar\lambda\,\bar{x}^{T}(\lambda x)=\bar\lambda\lambda\,\bar{x}^{T}x.
  \]
  由 \(A^{T}A=I\)，左端为 \(\bar{x}^{T}x=\|x\|^{2}\)，故
  \[
  \|x\|^{2}=|\lambda|^{2}\|x\|^{2}.
  \]
  因 \(\|x\|^{2}\neq0\)，得 \(|\lambda|=1\)。` },

{ id:'LA10-56', ch:10, type:'证明', diff:5, tags:'Rayleigh商 特征值 最值',
  q: String.raw`设 \(A\) 为 \(n\) 阶实对称矩阵，特征值 \(\lambda_1\le\cdots\le\lambda_n\)。证明对任意 \(x\neq0\)，
  \[
  \lambda_1\le\frac{x^{T}Ax}{x^{T}x}\le\lambda_n,
  \]
  且两端均可取到。`,
  a: String.raw`Rayleigh 商介于最小与最大特征值之间，端点分别在对应的单位特征向量处取得。`,
  sol: String.raw`由谱定理，存在正交矩阵 \(Q=(q_1,\dots,q_n)\) 使
  \[
  A=Q\Lambda Q^{T},\qquad \Lambda=\operatorname{diag}(\lambda_1,\dots,\lambda_n),
  \]
  其中 \(q_i\) 为对应 \(\lambda_i\) 的单位特征向量。令 \(y=Q^{T}x\)，则
  \[
  \frac{x^{T}Ax}{x^{T}x}=\frac{y^{T}\Lambda y}{y^{T}y}=\frac{\sum_i\lambda_i y_i^{2}}{\sum_i y_i^{2}}.
  \]
  由于 \(\lambda_1\le\lambda_i\le\lambda_n\)，
  \[
  \lambda_1\sum_i y_i^{2}\le\sum_i\lambda_i y_i^{2}\le\lambda_n\sum_i y_i^{2},
  \]
  两边除以 \(\sum_i y_i^{2}>0\) 即得结论。取 \(x=q_1\) 得左端等号，取 \(x=q_n\) 得右端等号。` },

{ id:'LA10-57', ch:10, type:'证明', diff:5, tags:'正定矩阵 行列式 AM-GM',
  q: String.raw`设 \(A\) 为 \(n\) 阶正定矩阵。证明
  \[
  \det A\le\left(\frac{\operatorname{tr}A}{n}\right)^{n},
  \]
  并指出等号成立的条件。`,
  a: String.raw`等号成立当且仅当 \(A=\dfrac{\operatorname{tr}A}{n}I\)。`,
  sol: String.raw`正定矩阵的特征值 \(\lambda_1,\dots,\lambda_n\) 全为正，且
  \[
  \det A=\prod_{i=1}^{n}\lambda_i,\qquad \operatorname{tr}A=\sum_{i=1}^{n}\lambda_i.
  \]
  由 AM-GM 不等式，
  \[
  \sqrt[n]{\prod_{i=1}^{n}\lambda_i}\le\frac{1}{n}\sum_{i=1}^{n}\lambda_i=\frac{\operatorname{tr}A}{n}.
  \]
  两边取 \(n\) 次方即得。等号成立当且仅当 \(\lambda_1=\cdots=\lambda_n\)，此时 \(A\) 正交相似于数量矩阵，即 \(A=\dfrac{\operatorname{tr}A}{n}I\)。` },

{ id:'LA10-58', ch:10, type:'证明', diff:5, tags:'Hadamard不等式 Frobenius范数',
  q: String.raw`设 \(A=(a_1,\dots,a_n)\) 为 \(n\) 阶实矩阵，其中 \(a_j\) 为列向量。证明
  \[
  |\det A|\le\left(\frac{\|A\|_F}{\sqrt n}\right)^{n},
  \]
  其中 \(\|A\|_F=\left(\sum_{i,j}a_{ij}^{2}\right)^{1/2}\)。`,
  a: String.raw`Hadamard 不等式加 AM-GM。`,
  sol: String.raw`由 Hadamard 不等式
  \[
  |\det A|\le\prod_{j=1}^{n}\|a_j\|.
  \]
  又 \(\|A\|_F^{2}=\sum_{j=1}^{n}\|a_j\|^{2}\)。对 \(n\) 个正数 \(\|a_j\|^{2}\) 用 AM-GM：
  \[
  \prod_{j=1}^{n}\|a_j\|=\left(\prod_{j=1}^{n}\|a_j\|^{2}\right)^{1/2}
  \le\left(\frac{1}{n}\sum_{j=1}^{n}\|a_j\|^{2}\right)^{n/2}
  =\left(\frac{\|A\|_F}{\sqrt n}\right)^{n}.
  \]
  两式合并即得所需不等式。` },

{ id:'LA10-59', ch:10, type:'证明', diff:5, tags:'Frobenius内积 Cauchy-Schwarz',
  q: String.raw`设 \(A,B\) 为同阶实矩阵。证明
  \[
  \bigl(\operatorname{tr}(A^{T}B)\bigr)^{2}\le\operatorname{tr}(A^{T}A)\operatorname{tr}(B^{T}B).
  \]`,
  a: String.raw`这是 \(\mathbb{R}^{m\times n}\) 上 Frobenius 内积的 Cauchy-Schwarz 不等式。`,
  sol: String.raw`定义
  \[
  \langle A,B\rangle=\operatorname{tr}(A^{T}B)=\sum_{i,j}a_{ij}b_{ij},
  \]
  它是对称双线性的，且 \(\langle A,A\rangle=\operatorname{tr}(A^{T}A)=\|A\|_F^{2}\ge0\)，等号仅当 \(A=0\)，故为内积。由 Cauchy-Schwarz 不等式
  \[
  \langle A,B\rangle^{2}\le\langle A,A\rangle\langle B,B\rangle
  \]
  即得结论。等号成立当且仅当 \(A,B\) 成比例。` },

{ id:'LA10-60', ch:10, type:'证明', diff:5, tags:'正定矩阵 平方 特征值',
  q: String.raw`设 \(A\) 为 \(n\) 阶正定矩阵。证明 \(A^{2}\) 正定，且 \(A^{2}\) 的特征值是 \(A\) 的特征值的平方。`,
  a: String.raw`\(A=Q\Lambda Q^{T}\)，\(A^{2}=Q\Lambda^{2}Q^{T}\)，\(\lambda_i^{2}>0\)。`,
  sol: String.raw`由谱定理，存在正交矩阵 \(Q\) 使
  \[
  A=Q\Lambda Q^{T},\qquad \Lambda=\operatorname{diag}(\lambda_1,\dots,\lambda_n),\quad \lambda_i>0.
  \]
  于是
  \[
  A^{2}=Q\Lambda Q^{T}Q\Lambda Q^{T}=Q\Lambda^{2}Q^{T},
  \]
  其中 \(\Lambda^{2}=\operatorname{diag}(\lambda_1^{2},\dots,\lambda_n^{2})\)。故 \(A^{2}\) 的特征值为 \(\lambda_i^{2}>0\)，且 \(A^{2}\) 正交相似于对角元全正的对角矩阵，从而是正定矩阵。` },

{ id:'LA10-61', ch:10, type:'证明', diff:5, tags:'正定矩阵 合同分解',
  q: String.raw`设 \(A\) 为 \(n\) 阶实对称矩阵。证明 \(A\) 正定当且仅当存在可逆矩阵 \(C\) 使 \(A=C^{T}C\)。`,
  a: String.raw`必要性取 \(C=\Lambda^{1/2}Q^{T}\)；充分性由 \(x^{T}Ax=\|Cx\|^{2}\)。`,
  sol: String.raw`若 \(A\) 正定，由谱定理 \(A=Q\Lambda Q^{T}\)，其中 \(Q\) 正交、\(\Lambda=\operatorname{diag}(\lambda_1,\dots,\lambda_n)\)，\(\lambda_i>0\)。令
  \[
  C=\Lambda^{1/2}Q^{T},
  \]
  其中 \(\Lambda^{1/2}=\operatorname{diag}(\sqrt{\lambda_1},\dots,\sqrt{\lambda_n})\)。则 \(C\) 可逆，且
  \[
  C^{T}C=Q\Lambda^{1/2}\Lambda^{1/2}Q^{T}=Q\Lambda Q^{T}=A.
  \]
  反之若 \(A=C^{T}C\) 且 \(C\) 可逆，则对 \(x\neq0\) 有 \(Cx\neq0\)，故
  \[
  x^{T}Ax=x^{T}C^{T}Cx=\|Cx\|^{2}>0,
  \]
  即 \(A\) 正定。` },

{ id:'LA10-62', ch:10, type:'证明', diff:5, tags:'半正定 迹 特征值',
  q: String.raw`设 \(A\) 为 \(n\) 阶实对称半正定矩阵，且 \(\operatorname{tr}A=0\)。证明 \(A=0\)。`,
  a: String.raw`特征值非负且和为 \(0\)，故全为 \(0\)。`,
  sol: String.raw`半正定实对称矩阵的特征值 \(\lambda_1,\dots,\lambda_n\) 全非负，且
  \[
  \operatorname{tr}A=\sum_{i=1}^{n}\lambda_i=0.
  \]
  非负数之和为 \(0\)，故 \(\lambda_1=\cdots=\lambda_n=0\)。由谱定理
  \[
  A=Q\operatorname{diag}(0,\dots,0)Q^{T}=0.
  \]` },

{ id:'LA10-63', ch:10, type:'证明', diff:5, tags:'正定矩阵 反对称 行列式',
  q: String.raw`设 \(A\) 为 \(n\) 阶正定矩阵，\(B\) 为 \(n\) 阶实反对称矩阵。证明 \(\det(A+B)>0\)。`,
  a: String.raw`\(A+tB\) 对一切 \(t\in[0,1]\) 可逆，行列式连续且 \(t=0\) 时为正。`,
  sol: String.raw`对任意 \(x\neq0\)，由 \(B\) 反对称得 \(x^{T}Bx=0\)，于是
  \[
  x^{T}(A+B)x=x^{T}Ax>0,
  \]
  故 \(A+B\) 可逆（否则有 \(x\neq0\) 使 \((A+B)x=0\)，进而 \(x^{T}(A+B)x=0\)，矛盾）。同理，对每个 \(t\in[0,1]\)，\(A+tB\) 都可逆。
  函数 \(f(t)=\det(A+tB)\) 在 \([0,1]\) 上连续且处处不为 \(0\)，故不变号；又 \(f(0)=\det A>0\)，所以
  \[
  f(1)=\det(A+B)>0.
  \]` },

{ id:'LA10-64', ch:10, type:'证明', diff:4, tags:'伴随矩阵 行列式',
  q: String.raw`设 \(A\) 为 \(n\) 阶矩阵（\(n\ge2\)），\(A^{*}\) 为其伴随矩阵。证明
  \[
  \det(A^{*})=(\det A)^{n-1}.
  \]`,
  a: String.raw`由 \(AA^{*}=(\det A)I\) 取行列式，再单独讨论 \(\det A=0\)。`,
  sol: String.raw`由伴随矩阵的基本关系 \(AA^{*}=(\det A)I\)，两边取行列式：
  \[
  \det A\cdot\det(A^{*})=(\det A)^{n}.
  \]
  若 \(\det A\neq0\)，两边除以 \(\det A\) 即得 \(\det(A^{*})=(\det A)^{n-1}\)。
  若 \(\det A=0\)，则 \(\operatorname{rank}A\le n-1\)，从而 \(\operatorname{rank}A^{*}\le1<n\)（\(n\ge2\)），故 \(\det(A^{*})=0=(\det A)^{n-1}\)。` },

{ id:'LA10-65', ch:10, type:'证明', diff:5, tags:'幂等矩阵 直和分解 核与像',
  q: String.raw`设 \(A\) 为 \(n\) 阶矩阵，\(A^{2}=A\)。证明 \(\mathbb{R}^{n}=\operatorname{Im}A\oplus\ker A\)，且 \(\operatorname{Im}A=\ker(I-A)\)。`,
  a: String.raw`\(x=Ax+(I-A)x\)，且两子空间交为零。`,
  sol: String.raw`对任意 \(x\)，
  \[
  x=Ax+(I-A)x,
  \]
  其中 \(Ax\in\operatorname{Im}A\)，而 \(A(I-A)x=(A-A^{2})x=0\)，即 \((I-A)x\in\ker A\)，故 \(\operatorname{Im}A+\ker A=\mathbb{R}^{n}\)。
  若 \(y\in\operatorname{Im}A\cap\ker A\)，设 \(y=Ax\)，则
  \[
  y=Ax=A^{2}x=A(Ax)=Ay=0,
  \]
  故交为 \(\{0\}\)，从而 \(\mathbb{R}^{n}=\operatorname{Im}A\oplus\ker A\)。
  又 \(Ax=x\iff(I-A)x=0\)，故 \(\operatorname{Im}A=\ker(I-A)\)。` },

{ id:'LA10-66', ch:10, type:'证明', diff:5, tags:'对合矩阵 直和分解 可对角化',
  q: String.raw`设 \(A\) 为 \(n\) 阶矩阵，\(A^{2}=I\)。证明 \(\mathbb{R}^{n}=\ker(A-I)\oplus\ker(A+I)\)，从而 \(A\) 可对角化。`,
  a: String.raw`用投影 \(\frac{I+A}{2}\) 与 \(\frac{I-A}{2}\) 作分解。`,
  sol: String.raw`对任意 \(x\)，
  \[
  x=\frac{x+Ax}{2}+\frac{x-Ax}{2}.
  \]
  由 \(A^{2}=I\)，
  \[
  (A-I)\frac{x+Ax}{2}=\frac{Ax+A^{2}x-x-Ax}{2}=\frac{A^{2}x-x}{2}=0,
  \]
  故第一项属于 \(\ker(A-I)\)；同理
  \[
  (A+I)\frac{x-Ax}{2}=\frac{Ax-A^{2}x+x-Ax}{2}=\frac{x-A^{2}x}{2}=0,
  \]
  第二项属于 \(\ker(A+I)\)。若 \(y\in\ker(A-I)\cap\ker(A+I)\)，则 \(y=Ay=-y\)，故 \(y=0\)。于是 \(\mathbb{R}^{n}=\ker(A-I)\oplus\ker(A+I)\)，各取基合并即为特征向量基，\(A\) 可对角化。` },

{ id:'LA10-67', ch:10, type:'证明', diff:4, tags:'幂等矩阵 迹 零矩阵',
  q: String.raw`设 \(A\) 为 \(n\) 阶矩阵，\(A^{2}=A\) 且 \(\operatorname{tr}A=0\)。证明 \(A=0\)。`,
  a: String.raw`幂等矩阵可对角化，特征值为 \(0,1\)，迹等于特征值 \(1\) 的个数。`,
  sol: String.raw`由 \(A^{2}=A\) 知最小多项式整除 \(\lambda(\lambda-1)\)，无重根，故 \(A\) 可对角化，且特征值只能是 \(0\) 或 \(1\)。
  设其中有 \(k\) 个特征值为 \(1\)，则由迹等于特征值之和，
  \[
  \operatorname{tr}A=k=0.
  \]
  故全部特征值为 \(0\)，\(A\) 相似于零矩阵，即 \(A=0\)。` },

{ id:'LA10-68', ch:10, type:'证明', diff:5, tags:'可交换矩阵 同时上三角化 商空间',
  q: String.raw`设 \(A,B\) 为 \(n\) 阶复矩阵，\(AB=BA\)。证明存在可逆矩阵 \(P\)，使 \(P^{-1}AP\) 与 \(P^{-1}BP\) 同时为上三角矩阵。`,
  a: String.raw`对 \(n\) 归纳，用公共特征向量与商空间。`,
  sol: String.raw`\(n=1\) 时显然。设 \(n\ge2\)。由 \(AB=BA\)，\(A,B\) 有公共特征向量 \(v\)（取 \(B\) 的特征子空间，它在 \(A\) 下不变，再在其中取 \(A\) 的特征向量）。令 \(W=\operatorname{span}\{v\}\)，则 \(W\) 在 \(A,B\) 下都不变。
  在商空间 \(V/W\) 上定义
  \[
  \tilde A(x+W)=Ax+W,\qquad \tilde B(x+W)=Bx+W,
  \]
  由 \(W\) 不变知定义合理（与代表元选取无关），且 \(\tilde A\tilde B=\tilde B\tilde A\)。由归纳假设，存在 \(V/W\) 的基使 \(\tilde A,\tilde B\) 的矩阵同时为上三角。
  把这些基向量在 \(V\) 中的代表元与 \(v\) 合并成 \(V\) 的基，则 \(A,B\) 在该基下的矩阵形如
  \[
  \begin{pmatrix}\lambda&*\\0&A_1\end{pmatrix},\qquad
  \begin{pmatrix}\mu&*\\0&B_1\end{pmatrix},
  \]
  其中 \(A_1,B_1\) 为上三角矩阵，故两者都是上三角矩阵。取该基到标准基的过渡矩阵为 \(P\) 即可。` },

{ id:'LA10-69', ch:10, type:'证明', diff:5, tags:'可交换矩阵 多项式 插值',
  q: String.raw`设 \(A,B\) 为 \(n\) 阶复矩阵，\(AB=BA\)，且 \(A\) 有 \(n\) 个互不相同的特征值。证明存在多项式 \(p(x)\)，使 \(B=p(A)\)。`,
  a: String.raw`同时对角化后用插值多项式。`,
  sol: String.raw`设 \(A\) 的特征值为 \(\lambda_1,\dots,\lambda_n\)（互不相同），则 \(A\) 可对角化：存在可逆矩阵 \(P\) 使
  \[
  P^{-1}AP=D=\operatorname{diag}(\lambda_1,\dots,\lambda_n).
  \]
  由 \(AB=BA\) 得 \(D(P^{-1}BP)=(P^{-1}BP)D\)。设 \(P^{-1}BP=(c_{ij})\)，比较 \((i,j)\) 元素得
  \[
  (\lambda_i-\lambda_j)c_{ij}=0,
  \]
  故 \(i\neq j\) 时 \(c_{ij}=0\)，即 \(P^{-1}BP=\operatorname{diag}(\mu_1,\dots,\mu_n)\)。
  取插值多项式 \(p\) 使 \(p(\lambda_i)=\mu_i\)（\(i=1,\dots,n\)），则 \(p(D)=\operatorname{diag}(\mu_1,\dots,\mu_n)=P^{-1}BP\)，于是
  \[
  B=Pp(D)P^{-1}=p(PDP^{-1})=p(A).
  \]` },

{ id:'LA10-70', ch:10, type:'证明', diff:5, tags:'商空间 不变子空间 诱导变换',
  q: String.raw`设 \(V\) 为 \(n\) 维线性空间，\(W\) 为 \(m\) 维子空间，\(T\) 为 \(V\) 上的线性变换且 \(W\) 关于 \(T\) 不变（即 \(T(W)\subseteq W\)）。(1) 证明 \(\dim(V/W)=n-m\)；(2) 证明 \(\tilde T(v+W)=T(v)+W\) 是 \(V/W\) 上良定义的线性变换。`,
  a: String.raw`取 \(W\) 的基扩充为 \(V\) 的基；良定义由 \(T(W)\subseteq W\) 保证。`,
  sol: String.raw`(1) 取 \(W\) 的基 \(e_1,\dots,e_m\)，扩充为 \(V\) 的基 \(e_1,\dots,e_n\)。则
  \[
  e_{m+1}+W,\ \dots,\ e_n+W
  \]
  构成 \(V/W\) 的基，故 \(\dim(V/W)=n-m\)。
  (2) 若 \(v_1+W=v_2+W\)，则 \(v_1-v_2\in W\)，由 \(T(W)\subseteq W\) 得
  \[
  T(v_1)-T(v_2)=T(v_1-v_2)\in W,
  \]
  故 \(T(v_1)+W=T(v_2)+W\)，即 \(\tilde T\) 良定义。线性性由 \(T\) 的线性性直接得到：
  \[
  \tilde T\bigl(\alpha(v_1+W)+\beta(v_2+W)\bigr)=\alpha\tilde T(v_1+W)+\beta\tilde T(v_2+W).
  \]` },

{ id:'LA10-71', ch:10, type:'证明', diff:5, tags:'不变子空间 分块矩阵 特征多项式',
  q: String.raw`设 \(T\) 为 \(n\) 维空间 \(V\) 上的线性变换，\(U\) 为 \(T\) 的不变子空间，\(\dim U=m\)。证明存在 \(V\) 的基，使 \(T\) 的矩阵为
  \[
  \begin{pmatrix}A&C\\0&B\end{pmatrix},
  \]
  其中 \(A\) 是 \(T|_{U}\) 的矩阵；并证明 \(T\) 的特征多项式等于 \(T|_{U}\) 与商变换特征多项式之积。`,
  a: String.raw`取 \(U\) 的基扩充；\(\det(\lambda I-T)=\det(\lambda I-A)\det(\lambda I-B)\)。`,
  sol: String.raw`取 \(U\) 的基 \(u_1,\dots,u_m\)，扩充为 \(V\) 的基。因 \(T(U)\subseteq U\)，前 \(m\) 列的后 \(n-m\) 个坐标全为 \(0\)，故 \(T\) 的矩阵为
  \[
  \begin{pmatrix}A&C\\0&B\end{pmatrix},
  \]
  其中 \(A\) 是 \(T|_{U}\) 在 \(u_1,\dots,u_m\) 下的矩阵。
  于是
  \[
  \det(\lambda I-T)=\det\begin{pmatrix}\lambda I_m-A&-C\\0&\lambda I_{n-m}-B\end{pmatrix}
  =\det(\lambda I_m-A)\det(\lambda I_{n-m}-B).
  \]
  其中 \(B\) 正是 \(T\) 在商空间 \(V/U\) 上诱导变换的矩阵，故结论成立。` },

{ id:'LA10-72', ch:10, type:'证明', diff:4, tags:'对偶基 线性函数',
  q: String.raw`设 \(e_1,\dots,e_n\) 为 \(V\) 的基。证明存在唯一的线性函数 \(f_1,\dots,f_n\)，使 \(f_i(e_j)=\delta_{ij}\)；并证明若线性函数 \(f\) 满足 \(f(e_i)=0\)（\(i=1,\dots,n\)），则 \(f=0\)。`,
  a: String.raw`对偶基存在唯一；在基上为零的线性函数恒为零。`,
  sol: String.raw`存在性：定义
  \[
  f_i\left(\sum_{k=1}^{n}x_k e_k\right)=x_i,
  \]
  则 \(f_i\) 线性且 \(f_i(e_j)=\delta_{ij}\)。
  唯一性：若 \(g_i\) 也满足 \(g_i(e_j)=\delta_{ij}\)，则对任意 \(x=\sum_k x_k e_k\)，
  \[
  g_i(x)=\sum_{k=1}^{n}x_k g_i(e_k)=x_i=f_i(x),
  \]
  故 \(g_i=f_i\)。
  最后，若 \(f(e_i)=0\) 对一切 \(i\) 成立，则对任意 \(x=\sum_k x_k e_k\)，
  \[
  f(x)=\sum_{k=1}^{n}x_k f(e_k)=0,
  \]
  即 \(f\) 恒为零。` },

{ id:'LA10-73', ch:10, type:'证明', diff:4, tags:'矩阵的秩 转置 初等变换',
  q: String.raw`设 \(A\) 是 \(m\times n\) 实矩阵（不要求是方阵）。证明 \(\operatorname{rank}A=\operatorname{rank}A^{T}\)。`,
  a: String.raw`用初等变换化 \(A\) 为 \(\operatorname{diag}(I_r,0)\)，转置后秩不变。`,
  sol: String.raw`存在可逆矩阵 \(P,Q\) 使
  \[
  PAQ=\begin{pmatrix}I_r&0\\0&0\end{pmatrix},\qquad r=\operatorname{rank}A.
  \]
  两边转置得
  \[
  Q^{T}A^{T}P^{T}=\begin{pmatrix}I_r&0\\0&0\end{pmatrix}.
  \]
  左乘、右乘可逆矩阵不改变秩，故
  \[
  \operatorname{rank}A^{T}=\operatorname{rank}\begin{pmatrix}I_r&0\\0&0\end{pmatrix}=r=\operatorname{rank}A.
  \]` },

{ id:'LA10-74', ch:10, type:'证明', diff:5, tags:'构造反例 特征多项式 相似',
  q: String.raw`构造两个 \(3\) 阶矩阵 \(A,B\)，使它们有相同的特征多项式但不相似，并说明理由。`,
  a: String.raw`\[
  A=\begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix},\qquad
  B=\begin{pmatrix}0&1&0\\0&0&0\\0&0&0\end{pmatrix}.
  \]`,
  sol: String.raw`\(A,B\) 都是严格上三角矩阵，故特征多项式均为 \(\lambda^{3}\)。但
  \[
  \operatorname{rank}A=2,\qquad \operatorname{rank}B=1.
  \]
  相似矩阵有相同的秩，故 \(A,B\) 不相似。（几何上看：\(A\) 是单个三阶幂零块，\(B\) 是二阶幂零块与一阶零块之并。）` },

{ id:'LA10-75', ch:10, type:'证明', diff:4, tags:'构造反例 乘积的秩',
  q: String.raw`构造 \(2\) 阶矩阵 \(A,B\)，使 \(\operatorname{rank}(AB)\neq\operatorname{rank}(BA)\)，并求出这两个秩。`,
  a: String.raw`取 \(A=\begin{pmatrix}1&0\\0&0\end{pmatrix},\ B=\begin{pmatrix}0&1\\0&0\end{pmatrix}\)，则 \(\operatorname{rank}(AB)=1,\ \operatorname{rank}(BA)=0\)。`,
  sol: String.raw`直接计算
  \[
  AB=\begin{pmatrix}1&0\\0&0\end{pmatrix}\begin{pmatrix}0&1\\0&0\end{pmatrix}
  =\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad
  BA=\begin{pmatrix}0&1\\0&0\end{pmatrix}\begin{pmatrix}1&0\\0&0\end{pmatrix}
  =\begin{pmatrix}0&0\\0&0\end{pmatrix}.
  \]
  故 \(\operatorname{rank}(AB)=1\)，\(\operatorname{rank}(BA)=0\)。这说明即使 \(A,B\) 同为方阵，两个乘积的秩也可以不同（但它们的非零特征值仍相同）。` },

{ id:'LA10-76', ch:10, type:'证明', diff:5, tags:'可对角化 最小多项式 单位根',
  q: String.raw`设 \(A\) 为 \(n\) 阶复矩阵，\(k\) 为正整数，\(A^{k}=I\)。证明 \(A\) 可对角化。`,
  a: String.raw`最小多项式整除 \(x^{k}-1\)，无重根。`,
  sol: String.raw`\(A\) 的最小多项式 \(m(\lambda)\) 整除 \(\lambda^{k}-1\)。在复数域上
  \[
  \lambda^{k}-1=\prod_{j=0}^{k-1}\left(\lambda-\zeta^{j}\right),\qquad \zeta=e^{2\pi i/k},
  \]
  这些根互不相同：因为 \((\lambda^{k}-1)'=k\lambda^{k-1}\) 的根只有 \(0\)，而 \(0\) 不是 \(\lambda^{k}-1\) 的根，故 \(\lambda^{k}-1\) 无重根。
  于是 \(m(\lambda)\) 也无重根，\(A\) 可对角化。` },

{ id:'LA10-77', ch:10, type:'证明', diff:5, tags:'可对角化 最小多项式 矩阵方程',
  q: String.raw`设 \(A\) 为 \(n\) 阶复矩阵，且 \(A^{2}-3A+2I=0\)。证明 \(A\) 可对角化，且 \(A\) 的特征值只能是 \(1\) 或 \(2\)。`,
  a: String.raw`最小多项式整除 \((\lambda-1)(\lambda-2)\)，无重根。`,
  sol: String.raw`由 \(A^{2}-3A+2I=0\) 知 \(A\) 的最小多项式整除
  \[
  \lambda^{2}-3\lambda+2=(\lambda-1)(\lambda-2),
  \]
  其根 \(1,2\) 互不相同，故 \(A\) 可对角化，特征值只能是 \(1\) 或 \(2\)。
  也可直接分解：由 \((A-I)-(A-2I)=I\) 得对任意 \(x\)，
  \[
  x=(A-I)x-(A-2I)x,
  \]
  且 \((A-2I)(A-I)x=0\)，\((A-I)(A-2I)x=0\)，故 \(\mathbb{C}^{n}=\ker(A-2I)+\ker(A-I)\)，两子空间交为零，从而是直和。` },

{ id:'LA10-78', ch:10, type:'证明', diff:5, tags:'秩1矩阵 分解 秩判定',
  q: String.raw`设 \(A\) 是 \(m\times n\) 实矩阵。证明：\(\operatorname{rank}A=1\) 当且仅当存在非零列向量 \(\alpha\in\mathbb{R}^{m}\) 与非零行向量 \(\beta^{T}\in\mathbb{R}^{1\times n}\)，使 \(A=\alpha\beta^{T}\)。`,
  a: String.raw`秩 \(1\) 矩阵必为两个非零向量之积。`,
  sol: String.raw`若 \(A=\alpha\beta^{T}\) 且 \(\alpha,\beta\neq0\)，则 \(A\neq0\)，且每一列都是 \(\alpha\) 的倍数，故 \(\operatorname{rank}A=1\)。
  反之设 \(\operatorname{rank}A=1\)，取 \(A\) 的一个非零列 \(\alpha\)。对 \(A\) 的每一列 \(a_j\)，由列空间维数为 \(1\) 知 \(a_j\) 与 \(\alpha\) 线性相关，故存在数 \(\beta_j\) 使 \(a_j=\beta_j\alpha\)。令
  \[
  \beta^{T}=(\beta_1,\dots,\beta_n),
  \]
  则 \(A=\alpha\beta^{T}\)。又 \(A\neq0\)，故 \(\beta\neq0\)。` },

{ id:'LA10-79', ch:10, type:'证明', diff:4, tags:'核空间 链稳定',
  q: String.raw`设 \(A\) 为 \(n\) 阶矩阵。证明
  \[
  \ker A\subseteq\ker A^{2}\subseteq\cdots,
  \]
  且若对某个 \(k\) 有 \(\ker A^{k}=\ker A^{k+1}\)，则对一切 \(j\ge k\) 有 \(\ker A^{j}=\ker A^{k}\)。`,
  a: String.raw`包含关系显然；一旦相等则链稳定。`,
  sol: String.raw`若 \(x\in\ker A^{k}\)，则 \(A^{k}x=0\)，从而
  \[
  A^{k+1}x=A(A^{k}x)=0,
  \]
  即 \(x\in\ker A^{k+1}\)，故 \(\ker A^{k}\subseteq\ker A^{k+1}\)。
  设 \(\ker A^{k}=\ker A^{k+1}\)。若 \(x\in\ker A^{k+2}\)，则 \(A^{k+2}x=0\)，即 \(A^{k+1}(Ax)=0\)，故 \(Ax\in\ker A^{k+1}=\ker A^{k}\)，于是
  \[
  A^{k+1}x=A^{k}(Ax)=0,
  \]
  即 \(x\in\ker A^{k+1}\)。故 \(\ker A^{k+2}=\ker A^{k+1}\)，归纳得对一切 \(j\ge k\) 有 \(\ker A^{j}=\ker A^{k}\)。` },

{ id:'LA10-80', ch:10, type:'证明', diff:5, tags:'幂零矩阵 特征值 Cayley-Hamilton',
  q: String.raw`设 \(A\) 为 \(n\) 阶复矩阵。证明 \(A\) 幂零（存在正整数 \(k\) 使 \(A^{k}=0\)）当且仅当 \(A\) 的特征值全为 \(0\)。`,
  a: String.raw`幂零则特征值为 \(0\)；特征值全为 \(0\) 时特征多项式为 \(\lambda^{n}\)，由 Cayley-Hamilton 得 \(A^{n}=0\)。`,
  sol: String.raw`若 \(A^{k}=0\)，设 \(Ax=\lambda x\)，\(x\neq0\)，则
  \[
  0=A^{k}x=\lambda^{k}x,
  \]
  故 \(\lambda=0\)，即特征值全为 \(0\)。
  反之若 \(A\) 的特征值全为 \(0\)，则特征多项式为 \(\lambda^{n}\)。由 Cayley-Hamilton 定理，\(A\) 适合自己的特征多项式，即
  \[
  A^{n}=0,
  \]
  故 \(A\) 幂零。` },

{ id:'LA10-81', ch:10, type:'计算', diff:5, tags:'Cayley-Hamilton 逆矩阵 特征多项式',
  q: String.raw`设
  \[
  A=\begin{pmatrix}1&1&0\\0&2&0\\0&0&-1\end{pmatrix}.
  \]
  (1) 求 \(A\) 的特征多项式；(2) 用 Cayley-Hamilton 定理把 \(A^{-1}\) 表示为 \(A\) 的多项式，并写出 \(A^{-1}\) 的具体矩阵。`,
  a: String.raw`特征多项式为 \(\lambda^{3}-2\lambda^{2}-\lambda+2\)；
  \[
  A^{-1}=\frac{1}{2}\left(2A+I-A^{2}\right)=\begin{pmatrix}1&-\frac{1}{2}&0\\0&\frac{1}{2}&0\\0&0&-1\end{pmatrix}.
  \]`,
  sol: String.raw`(1) \(A\) 为上三角矩阵，特征值即对角元 \(1,2,-1\)，故
  \[
  f(\lambda)=(\lambda-1)(\lambda-2)(\lambda+1)=\lambda^{3}-2\lambda^{2}-\lambda+2.
  \]
  (2) 由 Cayley-Hamilton 定理 \(A^{3}-2A^{2}-A+2I=0\)。因常数项 \(2\neq0\)，\(A\) 可逆，两边左乘 \(A^{-1}\)：
  \[
  A^{2}-2A-I+2A^{-1}=0\ \Longrightarrow\ A^{-1}=\frac{1}{2}\left(2A+I-A^{2}\right).
  \]
  计算 \(A^{2}=\begin{pmatrix}1&3&0\\0&4&0\\0&0&1\end{pmatrix}\)，代入得
  \[
  A^{-1}=\frac{1}{2}\begin{pmatrix}2&-1&0\\0&1&0\\0&0&-2\end{pmatrix},
  \]
  与直接求逆的结果一致。` },

{ id:'LA10-82', ch:10, type:'证明', diff:5, tags:'分块矩阵 秩 线性无关组',
  q: String.raw`设 \(A\) 为 \(m\times n\) 矩阵，\(B\) 为 \(p\times q\) 矩阵，\(C\) 为 \(m\times q\) 矩阵。证明
  \[
  \operatorname{rank}\begin{pmatrix}A&C\\0&B\end{pmatrix}\ge\operatorname{rank}A+\operatorname{rank}B.
  \]`,
  a: String.raw`取 \(A\) 的极大无关列与 \(B\) 的极大无关列，拼成线性无关组。`,
  sol: String.raw`设 \(\operatorname{rank}A=r\)，取 \(A\) 的 \(r\) 个线性无关的列 \(a_{i_1},\dots,a_{i_r}\)；设 \(\operatorname{rank}B=s\)，取 \(B\) 的 \(s\) 个线性无关的列 \(b_{j_1},\dots,b_{j_s}\)。
  记 \(M=\begin{pmatrix}A&C\\0&B\end{pmatrix}\)。考虑 \(M\) 的如下 \(r+s\) 个列：第 \(i_1,\dots,i_r\) 列（形如 \(\begin{pmatrix}a_{i_k}\\0\end{pmatrix}\)）与第 \(n+j_1,\dots,n+j_s\) 列（形如 \(\begin{pmatrix}c_{j_l}\\b_{j_l}\end{pmatrix}\)）。
  若
  \[
  \sum_{k=1}^{r}\alpha_k\begin{pmatrix}a_{i_k}\\0\end{pmatrix}+\sum_{l=1}^{s}\beta_l\begin{pmatrix}c_{j_l}\\b_{j_l}\end{pmatrix}=0,
  \]
  看后 \(p\) 个分量得 \(\sum_l\beta_l b_{j_l}=0\)，由 \(b_{j_l}\) 线性无关得 \(\beta_1=\cdots=\beta_s=0\)；再看前 \(m\) 个分量得 \(\sum_k\alpha_k a_{i_k}=0\)，由 \(a_{i_k}\) 线性无关得 \(\alpha_1=\cdots=\alpha_r=0\)。
  故这 \(r+s\) 个列线性无关，从而 \(\operatorname{rank}M\ge r+s\)。` },

{ id:'LA10-83', ch:10, type:'证明', diff:5, tags:'Schur定理 酉相似 上三角化',
  q: String.raw`设 \(A\) 为 \(n\) 阶复矩阵。证明存在酉矩阵 \(U\)，使 \(U^{H}AU\) 为上三角矩阵，其对角元恰为 \(A\) 的全部特征值（按任意指定次序）。`,
  a: String.raw`对 \(n\) 归纳：取单位特征向量，在正交补上重复。`,
  sol: String.raw`\(n=1\) 显然。设 \(n\ge2\)。取 \(A\) 的一个单位特征向量 \(u_1\)，\(Au_1=\lambda_1 u_1\)；把它扩充为 \(\mathbb{C}^{n}\) 的标准正交基 \(u_1,u_2,\dots,u_n\)，令 \(U_1=(u_1,\dots,u_n)\) 为酉矩阵。
  由 \(Au_1=\lambda_1u_1\) 知 \(U_1^{H}AU_1\) 的第一列为 \(\lambda_1e_1\)，故
  \[
  U_1^{H}AU_1=\begin{pmatrix}\lambda_1&*\\0&A_1\end{pmatrix},
  \]
  其中 \(A_1\) 为 \(n-1\) 阶矩阵。由归纳假设，存在 \(n-1\) 阶酉矩阵 \(U_2\) 使 \(U_2^{H}A_1U_2\) 为上三角。
  取 \(U=U_1\begin{pmatrix}1&0\\0&U_2\end{pmatrix}\)，则 \(U\) 酉，且
  \[
  U^{H}AU=\begin{pmatrix}\lambda_1&*\\0&U_2^{H}A_1U_2\end{pmatrix}
  \]
  为上三角矩阵。又相似矩阵特征多项式相同，故对角元即为 \(A\) 的全部特征值；把 \(\lambda_1\) 取为指定次序的第一个特征值即可得到任意次序。` },

{ id:'LA10-84', ch:10, type:'计算', diff:5, tags:'矩阵的幂 归纳法 不可对角化',
  q: String.raw`设 \(A=\begin{pmatrix}2&-1\\1&0\end{pmatrix}\)。(1) 求 \(A^{n}\)（\(n\) 为正整数）；(2) 求 \(A\) 的特征值，并判断 \(A\) 是否可对角化。`,
  a: String.raw`\[
  A^{n}=\begin{pmatrix}n+1&-n\\n&1-n\end{pmatrix},\qquad n\ge1,
  \]
  特征值为 \(1\)（二重），\(A\) 不可对角化。`,
  sol: String.raw`(1) 直接计算
  \[
  A^{2}=\begin{pmatrix}3&-2\\2&-1\end{pmatrix}=A+\begin{pmatrix}1&-1\\1&-1\end{pmatrix},\qquad
  A^{2}-2A+I=\begin{pmatrix}0&0\\0&0\end{pmatrix},
  \]
  即 \((A-I)^{2}=0\)。设 \((A-I)^{k}=0\)（\(k\ge2\)），由二项式展开
  \[
  A^{n}=\bigl(I+(A-I)\bigr)^{n}=I+n(A-I)=I+n\begin{pmatrix}1&-1\\1&-1\end{pmatrix}
  =\begin{pmatrix}n+1&-n\\n&1-n\end{pmatrix}.
  \]
  该式对 \(n=1\) 也成立。
  (2) 特征多项式
  \[
  \det(\lambda I-A)=(\lambda-2)\lambda+1=\lambda^{2}-2\lambda+1=(\lambda-1)^{2},
  \]
  故特征值为 \(1\)（二重）。而
  \[
  \operatorname{rank}(A-I)=\operatorname{rank}\begin{pmatrix}1&-1\\1&-1\end{pmatrix}=1,
  \]
  只有 \(1\) 个线性无关的特征向量，故 \(A\) 不可对角化。` },

{ id:'LA10-85', ch:10, type:'证明', diff:5, tags:'惯性定理 二次型 维数交',
  q: String.raw`证明实二次型的惯性定理：设实二次型 \(f(x)=x^{T}Ax\) 经两个可逆线性变换分别化为
  \[
  y_1^{2}+\cdots+y_p^{2}-y_{p+1}^{2}-\cdots-y_{r}^{2}
  \]
  与
  \[
  z_1^{2}+\cdots+z_q^{2}-z_{q+1}^{2}-\cdots-z_{r}^{2},
  \]
  则 \(p=q\)。`,
  a: String.raw`若 \(p>q\) 则两个子空间必有非零交，同一向量上 \(f\) 的符号出现矛盾。`,
  sol: String.raw`设第一个变换为 \(x=Cy\)，第二个为 \(x=Dz\)，\(C,D\) 可逆。记
  \[
  U=\left\{Cy:\ y_{p+1}=\cdots=y_n=0\right\},\qquad
  W=\left\{Dz:\ z_{1}=\cdots=z_{q}=0\right\}.
  \]
  则 \(\dim U=p\)，\(\dim W=n-q\)。
  若 \(p>q\)，则 \(\dim U+\dim W=p+n-q>n\)，故 \(U\cap W\neq\{0\}\)，取 \(0\neq x\in U\cap W\)。
  由 \(x\in U\)（且 \(y\) 的前 \(p\) 个分量不全为 \(0\)）得 \(f(x)=y_1^{2}+\cdots+y_p^{2}>0\)；
  由 \(x\in W\)（且 \(z\) 的后 \(n-q\) 个分量不全为 \(0\)）得 \(f(x)=-(z_{q+1}^{2}+\cdots+z_r^{2})\le0\)。矛盾。
  故 \(p\le q\)，对称地 \(q\le p\)，即 \(p=q\)（同理可证负惯性指数也唯一）。` },

{ id:'LA10-86', ch:10, type:'证明', diff:5, tags:'合同 惯性指数 规范形',
  q: String.raw`设 \(A,B\) 为 \(n\) 阶实对称矩阵。证明 \(A\) 与 \(B\) 合同当且仅当它们有相同的正惯性指数与相同的负惯性指数。`,
  a: String.raw`两者都合同于同一个规范形 \(\operatorname{diag}(I_p,-I_q,0)\)。`,
  sol: String.raw`必要性：若 \(B=C^{T}AC\)，\(C\) 可逆，则 \(A,B\) 对应的二次型只差一个可逆线性变换，由惯性定理其正、负惯性指数相同。
  充分性：设 \(A,B\) 的正惯性指数为 \(p\)、负惯性指数为 \(q\)。对 \(A\)，存在可逆矩阵 \(C_1\) 使
  \[
  C_1^{T}AC_1=\begin{pmatrix}I_p&&\\&-I_q&\\&&0\end{pmatrix}=:\Lambda,
  \]
  对 \(B\) 存在可逆矩阵 \(C_2\) 使 \(C_2^{T}BC_2=\Lambda\)。于是
  \[
  C_2^{T}BC_2=C_1^{T}AC_1\ \Longrightarrow\ B=(C_2^{-1})^{T}C_1^{T}AC_1C_2^{-1}=\left(C_1C_2^{-1}\right)^{T}A\left(C_1C_2^{-1}\right),
  \]
  且 \(C_1C_2^{-1}\) 可逆，故 \(A\) 与 \(B\) 合同。` },

{ id:'LA10-87', ch:10, type:'计算', diff:5, tags:'正交投影 最小二乘 幂等矩阵',
  q: String.raw`设 \(a_1=(1,1,0)^{T}\)，\(a_2=(0,1,1)^{T}\)，\(U=\operatorname{span}\{a_1,a_2\}\subset\mathbb{R}^{3}\)。(1) 求 \(U\) 上的正交投影矩阵 \(P\)；(2) 求 \(x=(1,2,3)^{T}\) 在 \(U\) 上的投影；(3) 验证 \(P^{2}=P\)、\(P^{T}=P\) 且 \(\operatorname{tr}P=2\)。`,
  a: String.raw`\[
  P=\frac{1}{3}\begin{pmatrix}2&1&-1\\1&2&1\\-1&1&2\end{pmatrix},\qquad
  Px=\frac{1}{3}\begin{pmatrix}1\\8\\7\end{pmatrix}.
  \]`,
  sol: String.raw`记 \(A=(a_1,a_2)\)，则 \(A^{T}A=\begin{pmatrix}2&1\\1&2\end{pmatrix}\)，\((A^{T}A)^{-1}=\dfrac{1}{3}\begin{pmatrix}2&-1\\-1&2\end{pmatrix}\)。
  (1) 投影矩阵
  \[
  P=A(A^{T}A)^{-1}A^{T}=\frac{1}{3}\begin{pmatrix}2&1&-1\\1&2&1\\-1&1&2\end{pmatrix}.
  \]
  (2) \(Px=\dfrac{1}{3}\left(2+2-3,\ 1+4+3,\ -1+2+6\right)^{T}=\dfrac{1}{3}(1,8,7)^{T}\)。
  (3) 由 \(P=A(A^{T}A)^{-1}A^{T}\) 直接得 \(P^{T}=P\)，且
  \[
  P^{2}=A(A^{T}A)^{-1}A^{T}A(A^{T}A)^{-1}A^{T}=A(A^{T}A)^{-1}A^{T}=P,
  \]
  故 \(P\) 为投影矩阵；\(P\) 的迹为对角元之和 \(6/3=2=\dim U\)，与其特征值 \(1,1,0\) 之和一致。` },

{ id:'LA10-88', ch:10, type:'证明', diff:5, tags:'行列式不等式 正定矩阵 二阶',
  q: String.raw`设 \(A,B\) 为 \(2\) 阶正定矩阵。证明
  \[
  \det(A+B)>\det A+\det B.
  \]`,
  a: String.raw`展开 \(\det(A+B)-\det A-\det B=a_{11}b_{22}+a_{22}b_{11}-2a_{12}b_{12}>0\)。`,
  sol: String.raw`记 \(A=\begin{pmatrix}a_{11}&a_{12}\\a_{12}&a_{22}\end{pmatrix}\)，\(B=\begin{pmatrix}b_{11}&b_{12}\\b_{12}&b_{22}\end{pmatrix}\)。直接展开得
  \[
  \det(A+B)-\det A-\det B=a_{11}b_{22}+a_{22}b_{11}-2a_{12}b_{12}.
  \]
  由 AM-GM 不等式，
  \[
  a_{11}b_{22}+a_{22}b_{11}\ge2\sqrt{a_{11}a_{22}b_{11}b_{22}},
  \]
  而 \(a_{12}b_{12}\le|a_{12}||b_{12}|\)，故
  \[
  a_{11}b_{22}+a_{22}b_{11}-2a_{12}b_{12}\ge2\left(\sqrt{a_{11}a_{22}}\sqrt{b_{11}b_{22}}-|a_{12}||b_{12}|\right).
  \]
  由 \(A,B\) 正定得 \(a_{11}a_{22}>a_{12}^{2}\)、\(b_{11}b_{22}>b_{12}^{2}\)，故
  \[
  \sqrt{a_{11}a_{22}}\sqrt{b_{11}b_{22}}>|a_{12}||b_{12}|,
  \]
  从而差为正，即 \(\det(A+B)>\det A+\det B\)。` },

{ id:'LA10-89', ch:10, type:'证明', diff:4, tags:'特征多项式 转置 行列式',
  q: String.raw`设 \(A\) 为 \(n\) 阶矩阵。(1) 证明 \(A\) 与 \(A^{T}\) 有相同的特征多项式；(2) 由此证明 \(\det A=\det A^{T}\)，并说明 \(\operatorname{tr}A\) 与转置无关。`,
  a: String.raw`\(\det(\lambda I-A)=\det\bigl((\lambda I-A)^{T}\bigr)=\det(\lambda I-A^{T})\)。`,
  sol: String.raw`(1) 对任意方阵 \(M\) 有 \(\det M=\det M^{T}\)，又
  \[
  (\lambda I-A)^{T}=\lambda I-A^{T},
  \]
  故
  \[
  \det(\lambda I-A)=\det\bigl((\lambda I-A)^{T}\bigr)=\det(\lambda I-A^{T}),
  \]
  即 \(A\) 与 \(A^{T}\) 的特征多项式相同，从而特征值（含重数）也相同。
  (2) 在恒等式中取 \(\lambda=0\)，得 \(\det(-A)=\det(-A^{T})\)，即 \((-1)^{n}\det A=(-1)^{n}\det A^{T}\)，故 \(\det A=\det A^{T}\)。
  特征多项式展开式中 \(\lambda^{n-1}\) 的系数为 \(-\operatorname{tr}A\)，两个特征多项式相同，故 \(\operatorname{tr}A=\operatorname{tr}A^{T}\)。` },

{ id:'LA10-90', ch:10, type:'证明', diff:5, tags:'特征多项式 AB与BA 分块行列式',
  q: String.raw`设 \(A\) 为 \(m\times n\) 矩阵，\(B\) 为 \(n\times m\) 矩阵。证明 \(AB\) 与 \(BA\) 有相同的特征多项式（从而非零特征值相同，含重数）。`,
  a: String.raw`用分块矩阵行列式恒等式 \(\det(\lambda I_m-AB)=\det(\lambda I_n-BA)\)。`,
  sol: String.raw`考察分块矩阵
  \[
  M=\begin{pmatrix}I_m&A\\B&\lambda I_n\end{pmatrix}.
  \]
  当 \(\lambda\neq0\) 时 \(\lambda I_n\) 可逆，按 Schur 补计算：
  \[
  \det M=\det(\lambda I_n)\cdot\det\left(I_m-A(\lambda I_n)^{-1}B\right)=\lambda^{n}\det\left(I_m-\frac{AB}{\lambda}\right)=\det(\lambda I_m-AB).
  \]
  另一方面按第一块计算：
  \[
  \det M=\det(I_m)\cdot\det\left(\lambda I_n-BI_m^{-1}A\right)=\det(\lambda I_n-BA).
  \]
  故对一切 \(\lambda\neq0\) 有 \(\det(\lambda I_m-AB)=\det(\lambda I_n-BA)\)。两边都是 \(\lambda\) 的多项式，在无穷多个点上相等，故恒等，特别在 \(\lambda=0\) 处也相等。` },

{ id:'LA10-91', ch:10, type:'证明', diff:4, tags:'直和 不变子空间 分块对角',
  q: String.raw`设 \(V=U\oplus W\)，\(T\) 为 \(V\) 上线性变换且 \(T(U)\subseteq U\)、\(T(W)\subseteq W\)。证明存在 \(V\) 的基使 \(T\) 的矩阵为分块对角矩阵 \(\operatorname{diag}(A,B)\)，且 \(T\) 的特征多项式等于 \(T|_{U}\) 与 \(T|_{W}\) 的特征多项式之积。`,
  a: String.raw`取 \(U\)、\(W\) 的基合并；分块对角矩阵的行列式等于对角块行列式之积。`,
  sol: String.raw`取 \(U\) 的基 \(u_1,\dots,u_m\) 与 \(W\) 的基 \(w_1,\dots,w_{n-m}\)，由 \(V=U\oplus W\) 知它们合并为 \(V\) 的基。
  因 \(T(U)\subseteq U\)，前 \(m\) 列的坐标后 \(n-m\) 个分量为 \(0\)；因 \(T(W)\subseteq W\)，后 \(n-m\) 列的前 \(m\) 个分量为 \(0\)。故
  \[
  T \text{ 在该基下的矩阵}=\begin{pmatrix}A&0\\0&B\end{pmatrix},
  \]
  其中 \(A,B\) 分别是 \(T|_{U},T|_{W}\) 的矩阵。
  于是
  \[
  \det(\lambda I-T)=\det(\lambda I_m-A)\det(\lambda I_{n-m}-B),
  \]
  即特征多项式为两者之积。` },

{ id:'LA10-92', ch:10, type:'证明', diff:5, tags:'严格对角占优 可逆 反证法',
  q: String.raw`设 \(A=(a_{ij})\) 为 \(n\) 阶复矩阵，满足
  \[
  |a_{ii}|>\sum_{j\neq i}|a_{ij}|,\qquad i=1,\dots,n.
  \]
  证明 \(A\) 可逆。`,
  a: String.raw`若 \(Ax=0\) 有非零解，取 \(|x_k|\) 最大的分量得矛盾。`,
  sol: String.raw`反设 \(A\) 不可逆，则存在 \(x=(x_1,\dots,x_n)^{T}\neq0\) 使 \(Ax=0\)。取 \(k\) 使
  \[
  |x_k|=\max_{1\le i\le n}|x_i|>0.
  \]
  由 \(Ax=0\) 的第 \(k\) 个方程
  \[
  a_{kk}x_k=-\sum_{j\neq k}a_{kj}x_j,
  \]
  取模并用 \(|x_j|\le|x_k|\)：
  \[
  |a_{kk}||x_k|\le\sum_{j\neq k}|a_{kj}||x_j|\le\left(\sum_{j\neq k}|a_{kj}|\right)|x_k|<|a_{kk}||x_k|,
  \]
  矛盾（最后一步用了严格对角占优）。故 \(A\) 可逆。` },

{ id:'LA10-93', ch:10, type:'计算', diff:5, tags:'Schur补 分块行列式 正定判定',
  q: String.raw`设
  \[
  A=\begin{pmatrix}2&1&0\\1&2&1\\0&1&2\end{pmatrix},\qquad B=\begin{pmatrix}2&1\\1&2\end{pmatrix}.
  \]
  以 \(B\) 为 \(A\) 的左上块，(1) 求 Schur 补 \(S\)；(2) 用分块行列式公式求 \(\det A\)，并与直接计算核对；(3) 判断 \(A\) 是否正定。`,
  a: String.raw`\(S=\dfrac{4}{3}\)，\(\det A=\det B\cdot S=3\cdot\dfrac{4}{3}=4\)，\(A\) 正定。`,
  sol: String.raw`把 \(A\) 写成 \(\begin{pmatrix}B&C\\C^{T}&D\end{pmatrix}\)，其中 \(C=(0,1)^{T}\)，\(D=2\)。
  (1) \(B^{-1}=\dfrac{1}{3}\begin{pmatrix}2&-1\\-1&2\end{pmatrix}\)，故
  \[
  S=D-C^{T}B^{-1}C=2-\frac{1}{3}(0,1)\begin{pmatrix}2&-1\\-1&2\end{pmatrix}\begin{pmatrix}0\\1\end{pmatrix}
  =2-\frac{1}{3}\cdot2=\frac{4}{3}.
  \]
  (2) 由 \(\det A=\det B\cdot\det S=3\cdot\dfrac{4}{3}=4\)。直接按三对角展开：\(2\cdot3-1\cdot2=4\)，一致。
  (3) \(A\) 的顺序主子式为
  \[
  2>0,\qquad \det B=3>0,\qquad \det A=4>0,
  \]
  故 \(A\) 正定（也等价于 \(B\) 正定且 \(S=\frac43>0\)）。` },

{ id:'LA10-94', ch:10, type:'证明', diff:5, tags:'半正定矩阵 元素估计 二阶主子式',
  q: String.raw`设 \(A=(a_{ij})\) 为 \(n\) 阶实对称半正定矩阵。证明对任意 \(i,j\)，
  \[
  |a_{ij}|\le\sqrt{a_{ii}a_{jj}}.
  \]`,
  a: String.raw`考察二阶主子式 \(\begin{pmatrix}a_{ii}&a_{ij}\\a_{ji}&a_{jj}\end{pmatrix}\) 的半正定性。`,
  sol: String.raw`取二阶主子矩阵
  \[
  M=\begin{pmatrix}a_{ii}&a_{ij}\\a_{ji}&a_{jj}\end{pmatrix},
  \]
  它仍是实对称半正定的（对任意 \(y=(y_1,y_2)^{T}\)，\(y^{T}My\) 就是把 \(A\) 限制在坐标 \(i,j\) 上的二次型，非负）。
  于是 \(M\) 的行列式非负：
  \[
  \det M=a_{ii}a_{jj}-a_{ij}^{2}\ge0,
  \]
  即 \(a_{ij}^{2}\le a_{ii}a_{jj}\)，开方即得 \(|a_{ij}|\le\sqrt{a_{ii}a_{jj}}\)（又 \(a_{ii},a_{jj}\ge0\)，取 \(i=j\) 时为等式）。` },

{ id:'LA10-95', ch:10, type:'证明', diff:5, tags:'正定矩阵 行列式估计 Cholesky分解',
  q: String.raw`设 \(A=(a_{ij})\) 为 \(n\) 阶正定矩阵。证明
  \[
  \det A\le\prod_{i=1}^{n}a_{ii},
  \]
  并说明等号成立的条件。`,
  a: String.raw`由 Cholesky 分解 \(A=LL^{T}\) 得 \(\det A=\prod l_{ii}^{2}\le\prod a_{ii}\)，等号当且仅当 \(A\) 为对角矩阵。`,
  sol: String.raw`由 \(A\) 正定，存在对角元全正的下三角矩阵 \(L=(l_{ij})\) 使
  \[
  A=LL^{T}.
  \]
  比较对角元：\(a_{ii}=\sum_{k=1}^{i}l_{ik}^{2}\ge l_{ii}^{2}>0\)，且
  \[
  \det A=(\det L)^{2}=\prod_{i=1}^{n}l_{ii}^{2}\le\prod_{i=1}^{n}a_{ii}.
  \]
  等号成立要求每个 \(i\) 都有 \(\sum_{k<i}l_{ik}^{2}=0\)，即 \(l_{ik}=0\ (k<i)\)，此时 \(L\) 为对角矩阵，\(A\) 为对角矩阵（且正定即对角元全正）。` },

{ id:'LA10-96', ch:10, type:'证明', diff:5, tags:'Frobenius范数 次乘性 特征值估计',
  q: String.raw`设 \(A,B\) 分别为 \(m\times n\)、\(n\times p\) 实矩阵。证明
  \[
  \|AB\|_F\le\|A\|_F\|B\|_F,
  \]
  其中 \(\|A\|_F=\left(\operatorname{tr}(A^{T}A)\right)^{1/2}\)。`,
  a: String.raw`\(\|AB\|_F^{2}=\operatorname{tr}(B^{T}A^{T}AB)\le\lambda_{\max}(A^{T}A)\operatorname{tr}(B^{T}B)\)。`,
  sol: String.raw`记 \(M=A^{T}A\)，它对称半正定，设特征值 \(\mu_1,\dots,\mu_n\ge0\)，则 \(\operatorname{tr}M=\|A\|_F^{2}\)，\(\lambda_{\max}(M)\le\operatorname{tr}M=\|A\|_F^{2}\)。
  \[
  \|AB\|_F^{2}=\operatorname{tr}(B^{T}A^{T}AB)=\operatorname{tr}(MBB^{T}).
  \]
  在 \(M\) 的特征基下（\(M=Q\operatorname{diag}(\mu_i)Q^{T}\)），取 \(N=Q^{T}BB^{T}Q\)，其对角元非负且 \(\operatorname{tr}N=\operatorname{tr}(BB^{T})=\|B\|_F^{2}\)，于是
  \[
  \operatorname{tr}(MBB^{T})=\sum_{i=1}^{n}\mu_i N_{ii}\le\lambda_{\max}(M)\sum_{i=1}^{n}N_{ii}\le\|A\|_F^{2}\|B\|_F^{2}.
  \]
  开方即得 \(\|AB\|_F\le\|A\|_F\|B\|_F\)。` },

{ id:'LA10-97', ch:10, type:'计算', diff:5, tags:'矩阵分解 对称部分 反对称部分',
  q: String.raw`设
  \[
  A=\begin{pmatrix}1&2&3\\0&4&5\\0&0&6\end{pmatrix}.
  \]
  把 \(A\) 唯一地分解为对称矩阵 \(S\) 与反对称矩阵 \(K\) 之和，求出 \(S,K\)，并验证该分解的唯一性。`,
  a: String.raw`\[
  S=\frac{A+A^{T}}{2}=\begin{pmatrix}1&1&\frac{3}{2}\\1&4&\frac{5}{2}\\\frac{3}{2}&\frac{5}{2}&6\end{pmatrix},\qquad
  K=\frac{A-A^{T}}{2}=\begin{pmatrix}0&1&\frac{3}{2}\\-1&0&\frac{5}{2}\\-\frac{3}{2}&-\frac{5}{2}&0\end{pmatrix}.
  \]`,
  sol: String.raw`令
  \[
  S=\frac{A+A^{T}}{2},\qquad K=\frac{A-A^{T}}{2}.
  \]
  (1) 逐元计算：\(S\) 的 \((1,2),(1,3),(2,3)\) 元分别为 \(\frac{2+0}{2}=1\)、\(\frac{3+0}{2}=\frac32\)、\(\frac{5+0}{2}=\frac52\)；\(K\) 的对应元为 \(1,\frac32,\frac52\)，其转置位置取相反数，对角元为 \(0\)。
  (2) 显然 \(S^{T}=S\)、\(K^{T}=-K\)，且 \(S+K=A\)。
  (3) 唯一性：若 \(A=S_1+K_1=S_2+K_2\)，则 \(S_1-S_2=K_2-K_1\)。左端对称、右端反对称，故该矩阵既对称又反对称，只能是零矩阵，于是 \(S_1=S_2,\ K_1=K_2\)。` },

{ id:'LA10-98', ch:10, type:'证明', diff:5, tags:'幂等矩阵 可交换 像空间',
  q: String.raw`设 \(A,B\) 为 \(n\) 阶矩阵，\(A^{2}=A\)，\(B^{2}=B\)，且 \(AB=BA\)。证明
  \[
  \operatorname{Im}(AB)=\operatorname{Im}A\cap\operatorname{Im}B.
  \]`,
  a: String.raw`由 \(AB=BA\) 与幂等性，\(AB\) 本身是投影，其像恰为两个像之交。`,
  sol: String.raw`先证 \((AB)^{2}=AB\)：
  \[
  (AB)^{2}=ABAB=A(BA)B=A(AB)B=A^{2}B^{2}=AB.
  \]
  故 \(AB\) 幂等，\(\operatorname{Im}(AB)=\ker(I-AB)\)。
  包含 \(\subseteq\)：\(ABx=A(Bx)\in\operatorname{Im}A\)，又 \(ABx=B(Ax)\in\operatorname{Im}B\)，故 \(\operatorname{Im}(AB)\subseteq\operatorname{Im}A\cap\operatorname{Im}B\)。
  包含 \(\supseteq\)：设 \(y\in\operatorname{Im}A\cap\operatorname{Im}B\)，则 \(Ay=y\)、\(By=y\)。于是
  \[
  ABy=A(By)=Ay=y,
  \]
  即 \(y\in\operatorname{Im}(AB)\)。
  故两边相等。` },

{ id:'LA10-99', ch:10, type:'证明', diff:5, tags:'秩不等式 零空间 Sylvester',
  q: String.raw`设 \(A\) 为 \(m\times n\) 矩阵，\(B\) 为 \(n\times p\) 矩阵，且 \(AB=0\)。证明
  \[
  \operatorname{rank}A+\operatorname{rank}B\le n.
  \]`,
  a: String.raw`\(\operatorname{Im}B\subseteq\ker A\)，再取维数。`,
  sol: String.raw`对任意 \(x\in\mathbb{R}^{p}\)，
  \[
  A(Bx)=(AB)x=0,
  \]
  故 \(\operatorname{Im}B\subseteq\ker A\)，从而
  \[
  \operatorname{rank}B=\dim\operatorname{Im}B\le\dim\ker A.
  \]
  由秩-零化度定理，\(\dim\ker A=n-\operatorname{rank}A\)。代入得
  \[
  \operatorname{rank}B\le n-\operatorname{rank}A,
  \]
  即 \(\operatorname{rank}A+\operatorname{rank}B\le n\)。` },

{ id:'LA10-100', ch:10, type:'证明', diff:5, tags:'正定矩阵 相似 可对角化 特征值',
  q: String.raw`设 \(A\) 为 \(n\) 阶正定矩阵，\(B\) 为 \(n\) 阶实对称矩阵。证明 \(AB\) 可对角化，且其特征值全为实数。`,
  a: String.raw`\(AB\) 相似于实对称矩阵 \(A^{1/2}BA^{1/2}\)。`,
  sol: String.raw`\(A\) 正定，故存在正定矩阵 \(A^{1/2}\)（且 \((A^{1/2})^{-1}\) 存在）。考察相似变换：
  \[
  A^{-1/2}(AB)A^{1/2}=A^{1/2}BA^{1/2}.
  \]
  右端是实对称矩阵：\((A^{1/2}BA^{1/2})^{T}=A^{1/2}B^{T}A^{1/2}=A^{1/2}BA^{1/2}\)。故 \(AB\) 相似于实对称矩阵。
  实对称矩阵的特征值全为实数且可正交对角化，相似变换保持特征多项式与可对角化性，故 \(AB\) 的特征值全为实数，且 \(AB\) 可对角化（其特征向量为 \(A^{1/2}\) 乘以实对称矩阵的特征向量）。` }
);
