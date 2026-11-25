window.LBANK = window.LBANK || [];
window.LBANK.push(
{ id:'LA08-21', ch:8, type:'计算', diff:5, tags:'子空间的和与交 维数公式 基',
  q: String.raw`设 \(\alpha_1=(1,1,0,0)^{T},\ \alpha_2=(0,1,1,0)^{T},\ \beta_1=(1,3,2,0)^{T},\ \beta_2=(0,0,1,1)^{T}\)，令 \(U=\operatorname{span}\{\alpha_1,\alpha_2\}\)，\(W=\operatorname{span}\{\beta_1,\beta_2\}\)。求 \(\dim(U+W)\) 与 \(\dim(U\cap W)\)，并分别写出 \(U+W\)、\(U\cap W\) 的一组基。`,
  a: String.raw`\(\dim(U+W)=3\)，\(\dim(U\cap W)=1\)；\(U+W\) 的基为 \(\alpha_1,\alpha_2,\beta_2\)，\(U\cap W=\operatorname{span}\{(1,3,2,0)^{T}\}\)。`,
  sol: String.raw`第一步：\(\alpha_1,\alpha_2\) 不成比例，\(\beta_1,\beta_2\) 也不成比例，故 \(\dim U=\dim W=2\)。
第二步：设 \(x=a\alpha_1+b\alpha_2=c\beta_1+d\beta_2\)，逐分量比较得 \(a=c,\ a+b=3c+d,\ b=2c+d,\ 0=d\)。
第三步：由 \(d=0\) 得 \(b=2c\)，再由 \(a+b=3c\) 得 \(a=c\)，故 \(x=c(\alpha_1+2\alpha_2)=c(1,3,2,0)^{T}\)，即 \(U\cap W=\operatorname{span}\{(1,3,2,0)^{T}\}\)，\(\dim(U\cap W)=1\)。
第四步：由维数公式 \(\dim(U+W)=2+2-1=3\)；又 \(\beta_2\) 的第四个分量为 \(1\)，而 \(U\) 中向量的第四个分量恒为 \(0\)，故 \(\beta_2\notin U\)，\(\alpha_1,\alpha_2,\beta_2\) 线性无关，是 \(U+W\) 的基。
第五步：验算 \(\alpha_1+2\alpha_2=(1,3,2,0)^{T}=\beta_1\)，与交空间的结论一致。` },

{ id:'LA08-22', ch:8, type:'计算', diff:5, tags:'子空间的交 基 维数公式',
  q: String.raw`设 \(U=\operatorname{span}\{(1,1,0)^{T},(0,1,1)^{T}\}\)，\(W=\operatorname{span}\{(1,0,1)^{T},(1,1,1)^{T}\}\) 是 \(\mathbb R^{3}\) 的两个子空间。求 \(U\cap W\) 与 \(U+W\) 的基和维数。`,
  a: String.raw`\(U\cap W=\operatorname{span}\{(1,2,1)^{T}\}\)，\(\dim(U\cap W)=1\)；\(U+W=\mathbb R^{3}\)，基为 \((1,1,0)^{T},(0,1,1)^{T},(1,0,1)^{T}\)。`,
  sol: String.raw`第一步：两组生成向量各自线性无关，故 \(\dim U=\dim W=2\)。
第二步：设 \(a(1,1,0)^{T}+b(0,1,1)^{T}=c(1,0,1)^{T}+d(1,1,1)^{T}\)，比较分量得 \(a=c+d,\ a+b=d,\ b=c+d\)。
第三步：由第一、三两式得 \(a=b\)，代入第二式得 \(d=2a\)，再由第一式得 \(c=a-d=-a\)，故公共向量为 \(a(1,1,0)^{T}+a(0,1,1)^{T}=a(1,2,1)^{T}\)。
第四步：故 \(U\cap W=\operatorname{span}\{(1,2,1)^{T}\}\)，\(\dim(U\cap W)=1\)，于是 \(\dim(U+W)=2+2-1=3\)，即 \(U+W=\mathbb R^{3}\)。
第五步：以 \((1,1,0)^{T},(0,1,1)^{T},(1,0,1)^{T}\) 为列的三阶行列式为 \(2\neq0\)，故它们线性无关，构成 \(U+W\) 的基。` },

{ id:'LA08-23', ch:8, type:'证明', diff:5, tags:'维数公式 和空间 交空间',
  q: String.raw`设 \(U,W\) 是 \(n\) 维线性空间 \(V\) 的子空间。证明维数公式：\(\dim(U+W)=\dim U+\dim W-\dim(U\cap W)\)。`,
  a: String.raw`结论成立，即 \(\dim(U+W)=\dim U+\dim W-\dim(U\cap W)\)。`,
  sol: String.raw`第一步：设 \(\dim(U\cap W)=r\)，取其一组基 \(\varepsilon_1,\dots,\varepsilon_r\)。
第二步：把它分别扩充为 \(U\) 的基 \(\varepsilon_1,\dots,\varepsilon_r,\alpha_1,\dots,\alpha_s\) 与 \(W\) 的基 \(\varepsilon_1,\dots,\varepsilon_r,\beta_1,\dots,\beta_t\)，其中 \(s=\dim U-r,\ t=\dim W-r\)。
第三步：证明这 \(r+s+t\) 个向量线性无关：设 \(\sum d_i\varepsilon_i+\sum e_k\alpha_k+\sum c_j\beta_j=0\)，则 \(\sum c_j\beta_j=-\sum d_i\varepsilon_i-\sum e_k\alpha_k\in U\cap W\)。
第四步：于是 \(\sum c_j\beta_j\) 可由 \(\varepsilon_1,\dots,\varepsilon_r\) 线性表示，而 \(\beta_1,\dots,\beta_t\) 与这些 \(\varepsilon\) 一起线性无关，故所有 \(c_j=0\)；再由 \(U\) 的基线性无关得所有 \(d_i=e_k=0\)。
第五步：这组向量显然张成 \(U+W\)，故为 \(U+W\) 的基，\(\dim(U+W)=r+s+t=\dim U+\dim W-\dim(U\cap W)\)。` },

{ id:'LA08-24', ch:8, type:'证明', diff:5, tags:'维数公式 推论 交空间 参数估计',
  q: String.raw`设 \(U,W\) 是 \(n\) 维线性空间 \(V\) 的子空间。证明：(1) \(\dim(U\cap W)\ge\dim U+\dim W-n\)；(2) 若 \(\dim U+\dim W>n\)，则 \(U\cap W\neq\{0\}\)；(3) 指出 (1) 取等号的充要条件。`,
  a: String.raw`三个结论均成立；(1) 取等号当且仅当 \(U+W=V\)。`,
  sol: String.raw`第一步：由维数公式 \(\dim(U+W)=\dim U+\dim W-\dim(U\cap W)\)。
第二步：又 \(U+W\) 是 \(V\) 的子空间，故 \(\dim(U+W)\le n\)。
第三步：代入得 \(\dim U+\dim W-\dim(U\cap W)\le n\)，即 \(\dim(U\cap W)\ge\dim U+\dim W-n\)。
第四步：取等号等价于 \(\dim(U+W)=n\)，而 \(\dim(U+W)\le\dim V=n\)，故等价于 \(U+W=V\)。
第五步：若 \(\dim U+\dim W>n\)，则 \(\dim(U\cap W)>0\)，交空间含非零向量，即 \(U\cap W\neq\{0\}\)。` },

{ id:'LA08-25', ch:8, type:'计算', diff:4, tags:'直和 参数讨论 子空间 超平面',
  q: String.raw`设 \(W=\{(x_1,x_2,x_3)^{T}\in\mathbb R^{3}\mid x_1+x_2+x_3=0\}\)，\(U_a=\operatorname{span}\{(1,1,a)^{T}\}\)。(1) 求 \(a\) 的值使 \(\mathbb R^{3}=U_a\oplus W\)；(2) 当 \(a=-2\) 时求 \(\dim(U_a+W)\) 与 \(\dim(U_a\cap W)\)。`,
  a: String.raw`(1) \(a\neq-2\)；(2) \(a=-2\) 时 \(U_a\subseteq W\)，\(\dim(U_a+W)=2\)，\(\dim(U_a\cap W)=1\)。`,
  sol: String.raw`第一步：\(W\) 由一个非零齐次线性方程给出，故 \(\dim W=3-1=2\)。
第二步：\((1,1,a)^{T}\in W\) 当且仅当 \(1+1+a=0\)，即 \(a=-2\)；故 \(U_a\subseteq W\) 当且仅当 \(a=-2\)。
第三步：当 \(a\neq-2\) 时 \((1,1,a)^{T}\notin W\)，一维空间与 \(W\) 之交为零，即 \(U_a\cap W=\{0\}\)。
第四步：此时 \(\dim U_a+\dim W=1+2=3=\dim\mathbb R^{3}\)，故 \(U_a+W=\mathbb R^{3}\)，从而 \(\mathbb R^{3}=U_a\oplus W\)。
第五步：当 \(a=-2\) 时 \(U_a\subseteq W\)，于是 \(U_a+W=W\)，\(\dim(U_a+W)=2\)，\(U_a\cap W=U_a\)，\(\dim(U_a\cap W)=1\)。` },

{ id:'LA08-26', ch:8, type:'证明', diff:5, tags:'直和 判定 维数 充要条件',
  q: String.raw`设 \(U,W\) 是 \(n\) 维线性空间 \(V\) 的子空间。证明：\(V=U\oplus W\) 当且仅当 \(\dim U+\dim W=n\) 且 \(U\cap W=\{0\}\)。`,
  a: String.raw`结论成立：\(V=U\oplus W\) 等价于 \(U+W=V\) 且 \(U\cap W=\{0\}\)，后者又等价于 \(\dim U+\dim W=n\) 且 \(U\cap W=\{0\}\)。`,
  sol: String.raw`第一步：若 \(V=U\oplus W\)，则按定义 \(V=U+W\) 且 \(U\cap W=\{0\}\)，由维数公式得 \(\dim U+\dim W=\dim V=n\)。
第二步：反之，设 \(\dim U+\dim W=n\) 且 \(U\cap W=\{0\}\)，由维数公式得 \(\dim(U+W)=n\)。
第三步：\(U+W\) 是 \(V\) 的子空间且与 \(V\) 维数相同，故 \(U+W=V\)。
第四步：和等于全空间且交为零，按直和定义得 \(V=U\oplus W\)。
第五步：这说明在有限维情形验证直和只需两条代数条件，不必逐向量检验分解的唯一性。` },

{ id:'LA08-27', ch:8, type:'证明', diff:5, tags:'直和 迹零矩阵 维数 线性函数',
  q: String.raw`记 \(SL_n(\mathbb R)=\{A\in M_n(\mathbb R)\mid\operatorname{tr}A=0\}\)。证明 \(M_n(\mathbb R)=SL_n(\mathbb R)\oplus\mathbb R I\)，并求 \(\dim SL_n(\mathbb R)\)。`,
  a: String.raw`直和分解成立；\(\dim SL_n(\mathbb R)=n^{2}-1\)。`,
  sol: String.raw`第一步：迹 \(\operatorname{tr}:M_n\to\mathbb R\) 是线性函数，故 \(SL_n=\ker\operatorname{tr}\) 是子空间；\(\mathbb R I=\{cI\mid c\in\mathbb R\}\) 是一维子空间。
第二步：对任意 \(A\in M_n\)，令 \(c=\frac{\operatorname{tr}A}{n}\)，则 \(A=(A-cI)+cI\)，且 \(\operatorname{tr}(A-cI)=\operatorname{tr}A-nc=0\)，故 \(M_n=SL_n+\mathbb R I\)。
第三步：设 \(B\in SL_n\cap\mathbb R I\)，则 \(B=cI\) 且 \(0=\operatorname{tr}B=nc\)，故 \(c=0\)，即 \(B=0\)，交为零。
第四步：于是 \(M_n=SL_n\oplus\mathbb R I\)，\(\dim SL_n=n^{2}-1\)。
第五步：一组具体的基是 \(E_{ij}\ (i\neq j)\) 与 \(E_{ii}-E_{nn}\ (i=1,\dots,n-1)\)，共 \(n(n-1)+(n-1)=n^{2}-1\) 个。` },

{ id:'LA08-28', ch:8, type:'证明', diff:5, tags:'直和 分解唯一性 等价条件',
  q: String.raw`设 \(V=U_1+\cdots+U_s\) 是子空间的和。证明下列三条等价：(i) 每个 \(v\in V\) 的分解 \(v=u_1+\cdots+u_s\ (u_i\in U_i)\) 唯一；(ii) 零向量的分解唯一；(iii) 对每个 \(i\) 都有 \(U_i\cap\left(\sum_{j\neq i}U_j\right)=\{0\}\)。`,
  a: String.raw`三条等价；满足时称 \(V=U_1\oplus\cdots\oplus U_s\) 为直和。`,
  sol: String.raw`第一步：(i) 推出 (ii)：零向量已有分解 \(0=0+\cdots+0\)，由唯一性这是它唯一的分解。
第二步：(ii) 推出 (iii)：设 \(u_i=\sum_{j\neq i}u_j\in U_i\cap\sum_{j\neq i}U_j\)，则 \(u_i-\sum_{j\neq i}u_j=0\) 是零向量的一种分解，与 \(0=0+\cdots+0\) 比较得 \(u_i=0\)。
第三步：(iii) 推出 (i)：若 \(\sum u_i=\sum u_i'\)，则对每个 \(i\) 有 \(u_i-u_i'=-\sum_{j\neq i}(u_j-u_j')\in U_i\cap\sum_{j\neq i}U_j=\{0\}\)。
第四步：故 \(u_i=u_i'\) 对一切 \(i\) 成立，分解唯一。
第五步：实用上常用 (iii) 判断直和（逐个核验交为零），用 (i) 做计算（分解可逐项处理）。` },

{ id:'LA08-29', ch:8, type:'计算', diff:5, tags:'范德蒙德矩阵 坐标 拉格朗日插值',
  q: String.raw`设 \(\alpha_1=(1,1,1,1)^{T},\ \alpha_2=(1,2,3,4)^{T},\ \alpha_3=(1,4,9,16)^{T},\ \alpha_4=(1,8,27,64)^{T}\)。(1) 证明它们构成 \(\mathbb R^{4}\) 的基；(2) 求 \(\beta=(1,0,0,0)^{T}\) 在这组基下的坐标。`,
  a: String.raw`(1) 构成基；(2) 坐标为 \(\left(4,-\frac{13}{3},\frac{3}{2},-\frac{1}{6}\right)^{T}\)。`,
  sol: String.raw`第一步：以四向量为列得范德蒙德矩阵，其行列式等于 \(\prod_{1\le i<j\le4}(x_j-x_i)\)，此处 \(x_i=i\)。
第二步：该乘积为 \(1\cdot2\cdot3\cdot1\cdot2\cdot1=12\neq0\)，故四向量线性无关，构成 \(\mathbb R^{4}\) 的基。
第三步：设坐标为 \((c_1,c_2,c_3,c_4)^{T}\)，则 \(\sum c_k\alpha_k=\beta\) 等价于多项式 \(p(x)=c_1+c_2x+c_3x^{2}+c_4x^{3}\) 在 \(x=1,2,3,4\) 处分别取 \(1,0,0,0\)。
第四步：由拉格朗日插值 \(p(x)=\frac{(x-2)(x-3)(x-4)}{(1-2)(1-3)(1-4)}=-\frac{1}{6}(x^{3}-9x^{2}+26x-24)=-\frac{1}{6}x^{3}+\frac{3}{2}x^{2}-\frac{13}{3}x+4\)。
第五步：比较系数得 \(c_1=4,\ c_2=-\frac{13}{3},\ c_3=\frac{3}{2},\ c_4=-\frac{1}{6}\)，即坐标为答案所示。` },

{ id:'LA08-30', ch:8, type:'证明', diff:4, tags:'和空间 最小性 子空间',
  q: String.raw`设 \(U,W\) 是线性空间 \(V\) 的子空间。证明 \(U+W\) 是同时包含 \(U\) 与 \(W\) 的最小子空间，即：\(U+W\) 是子空间且 \(U,W\subseteq U+W\)；若 \(H\le V\) 且 \(U\subseteq H,\ W\subseteq H\)，则 \(U+W\subseteq H\)。`,
  a: String.raw`结论成立：\(U+W\) 是子空间且 \(U,W\subseteq U+W\)；任何包含 \(U,W\) 的子空间 \(H\) 都满足 \(U+W\subseteq H\)。`,
  sol: String.raw`第一步：按定义 \(U+W=\{u+w\mid u\in U,\ w\in W\}\)，取 \(u=w=0\) 知 \(0\in U+W\)，非空。
第二步：设 \(x=u_1+w_1,\ y=u_2+w_2\in U+W\)，\(k\in F\)，则 \(x+y=(u_1+u_2)+(w_1+w_2)\in U+W\)，\(kx=ku_1+kw_2\in U+W\)，故 \(U+W\) 是子空间。
第三步：任取 \(u\in U\) 有 \(u=u+0\in U+W\)，故 \(U\subseteq U+W\)；同理 \(W\subseteq U+W\)。
第四步：若 \(H\le V\) 且包含 \(U,W\)，则对 \(u\in U\subseteq H,\ w\in W\subseteq H\)，由 \(H\) 对加法封闭得 \(u+w\in H\)，故 \(U+W\subseteq H\)。
第五步：因此 \(U+W\) 正是包含 \(U,W\) 的最小子空间，这也解释了"和"这一名称。` },

{ id:'LA08-31', ch:8, type:'计算', diff:5, tags:'线性变换的矩阵 像的坐标 基',
  q: String.raw`设 \(T:\mathbb R^{3}\to\mathbb R^{3}\)，\(T(x)=Ax\)，其中 \(A=\begin{pmatrix}1&1&0\\0&2&1\\0&0&3\end{pmatrix}\)。取基 \(\alpha_1=(1,0,0)^{T},\ \alpha_2=(1,1,0)^{T},\ \alpha_3=(1,1,1)^{T}\)。(1) 求 \(T\) 在基 \(\alpha_1,\alpha_2,\alpha_3\) 下的矩阵 \(B\)；(2) 验证 \(\operatorname{tr}B=\operatorname{tr}A\) 且 \(|B|=|A|\)。`,
  a: String.raw`\(B=\begin{pmatrix}1&0&-1\\0&2&0\\0&0&3\end{pmatrix}\)；\(\operatorname{tr}B=6=\operatorname{tr}A\)，\(|B|=6=|A|\)。`,
  sol: String.raw`第一步：\(T\alpha_1=A(1,0,0)^{T}=(1,0,0)^{T}=\alpha_1\)，故 \(B\) 的第一列为 \((1,0,0)^{T}\)。
第二步：\(T\alpha_2=A(1,1,0)^{T}=(2,2,0)^{T}=2\alpha_2\)，第二列为 \((0,2,0)^{T}\)。
第三步：\(T\alpha_3=A(1,1,1)^{T}=(2,3,3)^{T}\)，设其坐标为 \((c_1,c_2,c_3)^{T}\)，由第三分量得 \(c_3=3\)，第二分量给 \(c_2+c_3=3\) 即 \(c_2=0\)，第一分量给 \(c_1+c_2+c_3=2\) 即 \(c_1=-1\)。
第四步：故 \(B\) 如答案所示，\(\operatorname{tr}B=1+2+3=6=\operatorname{tr}A\)，\(|B|=1\cdot2\cdot3=6=|A|\)。
第五步：这说明迹与行列式不随基的选取而变，是相似不变量。` },

{ id:'LA08-32', ch:8, type:'计算', diff:4, tags:'相似矩阵 过渡矩阵 坐标变换',
  q: String.raw`设 \(T\) 是 \(\mathbb R^{2}\) 上的线性变换，在标准基 \(e_1,e_2\) 下的矩阵为 \(A=\begin{pmatrix}1&2\\3&4\end{pmatrix}\)。取基 \(\beta_1=(1,1)^{T},\ \beta_2=(1,2)^{T}\)。(1) 写出由 \(e_1,e_2\) 到 \(\beta_1,\beta_2\) 的过渡矩阵 \(P\)；(2) 求 \(T\) 在基 \(\beta_1,\beta_2\) 下的矩阵 \(B\)。`,
  a: String.raw`\(P=\begin{pmatrix}1&1\\1&2\end{pmatrix}\)，\(B=P^{-1}AP=\begin{pmatrix}-1&-1\\4&6\end{pmatrix}\)。`,
  sol: String.raw`第一步：按过渡矩阵定义 \((\beta_1,\beta_2)=(e_1,e_2)P\)，故 \(P\) 以 \(\beta_1,\beta_2\) 为列，\(|P|=1\neq0\)。
第二步：同一线性变换在两组基下的矩阵满足 \(B=P^{-1}AP\)。
第三步：算出 \(P^{-1}=\begin{pmatrix}2&-1\\-1&1\end{pmatrix}\)，\(AP=\begin{pmatrix}1&2\\3&4\end{pmatrix}\begin{pmatrix}1&1\\1&2\end{pmatrix}=\begin{pmatrix}3&5\\7&11\end{pmatrix}\)。
第四步：左乘 \(P^{-1}\) 得 \(B=\begin{pmatrix}-1&-1\\4&6\end{pmatrix}\)。
第五步：验算 \(\operatorname{tr}B=5=\operatorname{tr}A\)，\(|B|=-2=|A|\)，与相似不变量一致。` },

{ id:'LA08-33', ch:8, type:'证明', diff:5, tags:'相似 矩阵表示 迹与行列式 不变量',
  q: String.raw`设 \(T\) 是 \(n\) 维线性空间 \(V\) 上的线性变换，\(\alpha_1,\dots,\alpha_n\) 与 \(\beta_1,\dots,\beta_n\) 是 \(V\) 的两组基，\(T\) 在它们下的矩阵分别为 \(A\) 与 \(B\)。证明 \(A\) 与 \(B\) 相似，且 \(\operatorname{tr}A=\operatorname{tr}B\)、\(|A|=|B|\)。`,
  a: String.raw`\(B=P^{-1}AP\)（\(P\) 为由 \(\alpha\) 到 \(\beta\) 的过渡矩阵），故 \(A\sim B\)；迹与行列式是相似不变量。`,
  sol: String.raw`第一步：设 \(P\) 是过渡矩阵，即 \((\beta_1,\dots,\beta_n)=(\alpha_1,\dots,\alpha_n)P\)。
第二步：同一向量在两组基下的坐标满足 \(x_\alpha=Px_\beta\)。
第三步：由 \(T(\alpha)=(\alpha)A\) 与 \(T(\beta)=(\beta)B\)，把 \((\beta)=(\alpha)P\) 代入得 \((\alpha)PB=(\alpha)AP\)，由于 \((\alpha)\) 线性无关，\(PB=AP\)，故 \(B=P^{-1}AP\)。
第四步：由 \(\operatorname{tr}(XY)=\operatorname{tr}(YX)\) 得 \(\operatorname{tr}B=\operatorname{tr}(P^{-1}AP)=\operatorname{tr}(APP^{-1})=\operatorname{tr}A\)。
第五步：由 \(|P^{-1}|=|P|^{-1}\) 得 \(|B|=|P|^{-1}|A||P|=|A|\)，故迹与行列式只依赖 \(T\) 本身而与基无关。` },

{ id:'LA08-34', ch:8, type:'计算', diff:5, tags:'相似判定 几何重数 可对角化',
  q: String.raw`设 \(A=\begin{pmatrix}1&1&0\\0&1&0\\0&0&2\end{pmatrix}\)，\(B=\begin{pmatrix}1&0&0\\0&1&1\\0&0&2\end{pmatrix}\)，\(C=\begin{pmatrix}1&0&0\\0&1&0\\0&0&2\end{pmatrix}\)。判断 \(A\) 与 \(B\)、\(B\) 与 \(C\) 是否相似，并说明理由。`,
  a: String.raw`\(A\) 与 \(B\) 不相似；\(B\) 与 \(C\) 相似。`,
  sol: String.raw`第一步：三个矩阵都是上三角矩阵，特征值都是 \(1,1,2\)，特征多项式相同，故不能只比较特征值。
第二步：\(A-I=\begin{pmatrix}0&1&0\\0&0&0\\0&0&1\end{pmatrix}\) 的秩为 \(2\)，故 \(\dim\ker(A-I)=1\)，即 \(\lambda=1\) 的几何重数为 \(1\)，小于代数重数 \(2\)，\(A\) 不可对角化。
第三步：\(B-I=\begin{pmatrix}0&0&0\\0&0&1\\0&0&1\end{pmatrix}\) 的秩为 \(1\)，故 \(\dim\ker(B-I)=2\)，\(\lambda=1\) 的几何重数为 \(2\)，\(B\) 可对角化。
第四步：相似矩阵的几何重数相同，而 \(A,B\) 在 \(\lambda=1\) 处的几何重数分别为 \(1,2\)，故 \(A\) 与 \(B\) 不相似。
第五步：\(B\) 与 \(C\) 都可对角化且特征值同为 \(1,1,2\)，故都与 \(\operatorname{diag}(1,1,2)\) 相似，由相似的传递性得 \(B\sim C\)。` },

{ id:'LA08-35', ch:8, type:'计算', diff:5, tags:'多项式空间 线性变换的矩阵 核与像',
  q: String.raw`设 \(V=\mathbb R[x]_3\) 是次数小于 \(3\) 的多项式（含零多项式）构成的线性空间，\(T(f)=f'(x)+f(0)x\)。(1) 求 \(T\) 在基 \(1,x,x^{2}\) 下的矩阵 \(A\)；(2) 求 \(\ker T\) 与 \(\operatorname{Im}T\) 的基和维数。`,
  a: String.raw`\(A=\begin{pmatrix}0&1&0\\1&0&2\\0&0&0\end{pmatrix}\)；\(\ker T=\operatorname{span}\{x^{2}-2\}\)，\(\operatorname{Im}T=\operatorname{span}\{1,x\}\)，维数分别为 \(1,2\)。`,
  sol: String.raw`第一步：\(T(1)=0+1\cdot x=x,\ T(x)=1+0=1,\ T(x^{2})=2x+0=2x\)，把像的坐标按列排得 \(A\)。
第二步：解 \(A(c_0,c_1,c_2)^{T}=(c_1,\ c_0+2c_2,\ 0)^{T}=0\)，得 \(c_1=0,\ c_0=-2c_2\)，故 \(\ker T=\operatorname{span}\{(-2,0,1)^{T}\}\)，即多项式 \(x^{2}-2\)，\(\dim\ker T=1\)。
第三步：\(\operatorname{Im}T=\operatorname{span}\{T(1),T(x),T(x^{2})\}=\operatorname{span}\{x,1,2x\}=\operatorname{span}\{1,x\}\)。
第四步：\(1,x\) 线性无关，故 \(\dim\operatorname{Im}T=2\)，且 \(1+2=3=\dim V\)，维数定理成立。
第五步：\(T\) 既非单射也非满射，其核恰为 \(x^{2}-2\) 的倍数全体。` },

{ id:'LA08-36', ch:8, type:'计算', diff:5, tags:'微分算子 幂零变换 核链 矩阵',
  q: String.raw`设 \(V=\mathbb R[x]_4\) 是次数小于 \(4\) 的多项式构成的线性空间，\(D(f)=f'(x)\)。(1) 求 \(D\) 在基 \(1,x,x^{2},x^{3}\) 下的矩阵 \(A\)；(2) 证明 \(D^{4}=0\) 而 \(D^{3}\neq0\)，并求 \(\dim\ker D^{k}\ (k=1,2,3,4)\)。`,
  a: String.raw`\(A=\begin{pmatrix}0&1&0&0\\0&0&2&0\\0&0&0&3\\0&0&0&0\end{pmatrix}\)；\(\dim\ker D^{k}=k\)，即 \(\ker D=\operatorname{span}\{1\}\)，\(\ker D^{2}=\operatorname{span}\{1,x\}\)，\(\ker D^{3}=\operatorname{span}\{1,x,x^{2}\}\)，\(\ker D^{4}=V\)。`,
  sol: String.raw`第一步：\(D(1)=0,\ D(x)=1,\ D(x^{2})=2x,\ D(x^{3})=3x^{2}\)，把像的坐标按列排得 \(A\)。
第二步：\(A\) 的每一列的非零分量都比前一列下移一格，故 \(A\) 是严格上三角的幂零矩阵，\(A^{4}=0\)。
第三步：\(A^{3}\) 的第 \(4\) 列为 \(A^{3}(0,0,0,1)^{T}=A^{3}x^{3}=6\neq0\)，故 \(D^{3}\neq0\)。
第四步：解 \(D^{k}f=0\) 即 \(f^{(k)}=0\)，次数小于 \(4\) 的多项式中只有次数小于 \(k\) 的多项式满足，故 \(\ker D^{k}=\mathbb R[x]_k\)，维数为 \(k\)。
第五步：于是 \(\dim\ker D^{k}=k\)，秩为 \(4-k\)，与 \(D\) 的幂零指数 \(4\) 相符。` },

{ id:'LA08-37', ch:8, type:'证明', diff:5, tags:'可逆变换 逆矩阵 单射满射',
  q: String.raw`设 \(T\) 是 \(n\) 维线性空间 \(V\) 上的线性变换，\(A\) 是它在某组基下的矩阵。证明 \(T\) 可逆当且仅当 \(A\) 可逆，且此时 \(T^{-1}\) 在同一组基下的矩阵为 \(A^{-1}\)。`,
  a: String.raw`结论成立：\(T\) 可逆 \(\iff|A|\neq0\)，且 \(T^{-1}\) 的矩阵为 \(A^{-1}\)。`,
  sol: String.raw`第一步：若 \(T\) 可逆，则 \(TT^{-1}=T^{-1}T=I\)，取矩阵得 \(AB=BA=I\)（\(B\) 为 \(T^{-1}\) 的矩阵），故 \(A\) 可逆且 \(B=A^{-1}\)。
第二步：反之若 \(A\) 可逆，定义线性变换 \(S\) 使其矩阵为 \(A^{-1}\)，则 \(TS\) 与 \(ST\) 的矩阵都是 \(I\)。
第三步：矩阵为 \(I\) 的线性变换是恒等变换（它在基向量上取原值），故 \(TS=ST=I\)，\(T\) 可逆且 \(T^{-1}=S\)。
第四步：另一条路是用维数定理：\(T\) 可逆 \(\iff\ker T=\{0\}\iff\operatorname{rank}T=n\iff\operatorname{rank}A=n\iff|A|\neq0\)。
第五步：故"变换可逆"与"矩阵可逆"是同一件事，逆变换对应的矩阵就是逆矩阵。` },

{ id:'LA08-38', ch:8, type:'计算', diff:4, tags:'复合变换 逆变换 矩阵乘积 不可交换',
  q: String.raw`设 \(S,T\) 是 \(\mathbb R^{2}\) 上的线性变换，在标准基下的矩阵分别为 \(A=\begin{pmatrix}1&2\\0&1\end{pmatrix}\)，\(B=\begin{pmatrix}1&0\\3&1\end{pmatrix}\)。(1) 求 \(ST\) 与 \(TS\) 的矩阵，判断 \(ST=TS\) 是否成立；(2) 求 \((ST)^{-1}\) 并验证 \((ST)^{-1}=T^{-1}S^{-1}\)。`,
  a: String.raw`\(AB=\begin{pmatrix}7&2\\3&1\end{pmatrix}\)，\(BA=\begin{pmatrix}1&2\\3&7\end{pmatrix}\)，故 \(ST\neq TS\)；\((AB)^{-1}=\begin{pmatrix}1&-2\\-3&7\end{pmatrix}=B^{-1}A^{-1}\)。`,
  sol: String.raw`第一步：复合变换 \(ST\) 的矩阵是 \(S\) 的矩阵左乘 \(T\) 的矩阵，即 \(AB\)。
第二步：计算 \(AB=\begin{pmatrix}7&2\\3&1\end{pmatrix}\)，\(BA=\begin{pmatrix}1&2\\3&7\end{pmatrix}\)，两者不相等，故 \(ST\neq TS\)。
第三步：\(|AB|=7-6=1\neq0\)，故 \(ST\) 可逆，\((AB)^{-1}=\begin{pmatrix}1&-2\\-3&7\end{pmatrix}\)。
第四步：由 \(A^{-1}=\begin{pmatrix}1&-2\\0&1\end{pmatrix}\)，\(B^{-1}=\begin{pmatrix}1&0\\-3&1\end{pmatrix}\) 得 \(B^{-1}A^{-1}=\begin{pmatrix}1&-2\\-3&7\end{pmatrix}\)，与上式一致。
第五步：这验证了"穿脱原则" \((AB)^{-1}=B^{-1}A^{-1}\)，顺序必须反过来。` },

{ id:'LA08-39', ch:8, type:'证明', diff:5, tags:'相似 转置 若尔当标准形 置换矩阵',
  q: String.raw`证明任意 \(n\) 阶复方阵 \(A\) 都与它的转置 \(A^{T}\) 相似。`,
  a: String.raw`结论成立：\(A\sim A^{T}\)。`,
  sol: String.raw`第一步：由若尔当标准形定理，存在可逆矩阵 \(P\) 使 \(P^{-1}AP=J=\operatorname{diag}(J_1,\dots,J_s)\)，其中 \(J_i\) 是若尔当块。
第二步：对 \(P^{-1}AP=J\) 两边取转置得 \(P^{T}A^{T}(P^{-1})^{T}=J^{T}\)，即 \(A^{T}\) 与 \(J^{T}\) 相似。
第三步：而 \(J^{T}=\operatorname{diag}(J_1^{T},\dots,J_s^{T})\)，故只需证明每个若尔当块与其转置相似。
第四步：设 \(R\) 为副对角线全为 \(1\) 的置换矩阵，直接验证 \(RJ_i(\lambda)R=J_i(\lambda)^{T}\)（因 \(R=R^{-1}\)），故 \(J_i\sim J_i^{T}\)。
第五步：于是 \(J\sim J^{T}\)，再由相似的传递性得 \(A\sim J\sim J^{T}\sim A^{T}\)，即 \(A\sim A^{T}\)。` },

{ id:'LA08-40', ch:8, type:'计算', diff:5, tags:'多项式空间 基变换 平移不变性 微分算子',
  q: String.raw`设 \(V=\mathbb R[x]_3\)，\(T(f)=f''(x)+f'(x)\)。取基 \(\mathrm{I}:1,x,x^{2}\) 与基 \(\mathrm{II}:1,(x-1),(x-1)^{2}\)，分别求 \(T\) 在两组基下的矩阵 \(A,B\)，并写出过渡矩阵 \(P\) 验证 \(B=P^{-1}AP\)。`,
  a: String.raw`\(A=B=\begin{pmatrix}0&1&2\\0&0&2\\0&0&0\end{pmatrix}\)，\(P=\begin{pmatrix}1&-1&1\\0&1&-2\\0&0&1\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(T(1)=0,\ T(x)=1,\ T(x^{2})=2+2x\)，把像的坐标按列排得 \(A\)。
第二步：令 \(y=x-1\)，则 \(T(1)=0,\ T(y)=1,\ T(y^{2})=2+2y\)，与第一步形式完全相同，故 \(B=A\)。
第三步：过渡矩阵 \(P\) 的列是 \(1,y,y^{2}\) 在基 \(\mathrm{I}\) 下的坐标，即 \((1,0,0)^{T},(-1,1,0)^{T},(1,-2,1)^{T}\)。
第四步：代入验证 \(P^{-1}AP=A\)，即 \(AP=PA\)；原因是求导与平移可交换，\(T\) 在平移后的基下矩阵不变。
第五步：这说明"基的平移"属于 \(T\) 的对称性，而非一般的基变换，故相似矩阵恰好相等。` },

{ id:'LA08-41', ch:8, type:'证明', diff:5, tags:'中心 数乘变换 交换 特征向量',
  q: String.raw`设 \(T\) 是 \(n\) 维线性空间 \(V\) 上的线性变换，且与 \(V\) 上所有线性变换都可交换。证明 \(T\) 是数乘变换，即存在 \(\lambda\) 使 \(T=\lambda I\)。`,
  a: String.raw`结论成立：\(T=\lambda I\)。`,
  sol: String.raw`第一步：任取非零向量 \(v\in V\)，取含 \(v\) 的基 \(v,\varepsilon_2,\dots,\varepsilon_n\)，定义线性变换 \(S\) 使 \(S(v)=v,\ S(\varepsilon_i)=0\ (i\ge2)\)。
第二步：由 \(TS=ST\) 得 \(T(v)=T(Sv)=S(Tv)\)；而 \(S\) 的像包含在 \(\operatorname{span}\{v\}\) 中，故 \(Tv\in\operatorname{span}\{v\}\)，即每个非零向量都是 \(T\) 的特征向量。
第三步：设 \(Tv=\lambda_v v\)。对线性无关的 \(u,v\)，由 \(T(u+v)=\lambda_{u+v}(u+v)\) 与 \(T(u+v)=\lambda_u u+\lambda_v v\) 得 \((\lambda_{u+v}-\lambda_u)u+(\lambda_{u+v}-\lambda_v)v=0\)。
第四步：由 \(u,v\) 线性无关得 \(\lambda_u=\lambda_v=\lambda_{u+v}\)，故所有非零向量的特征值相同，记为 \(\lambda\)。
第五步：于是对任意 \(v\) 有 \(Tv=\lambda v\)，即 \(T=\lambda I\) 是数乘变换。` },

{ id:'LA08-42', ch:8, type:'计算', diff:5, tags:'中心化子 幂零矩阵 维数 交换',
  q: String.raw`设 \(A=\begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix}\)，\(C(A)=\{X\in M_3(\mathbb R)\mid AX=XA\}\)。(1) 证明 \(C(A)\) 是 \(M_3(\mathbb R)\) 的子空间；(2) 求 \(\dim C(A)\)，并写出 \(C(A)\) 中矩阵的一般形式。`,
  a: String.raw`(2) \(\dim C(A)=3\)，\(C(A)=\{aI+bA+cA^{2}\}=\left\{\begin{pmatrix}a&b&c\\0&a&b\\0&0&a\end{pmatrix}\right\}\)。`,
  sol: String.raw`第一步：零矩阵与 \(A\) 交换，故 \(C(A)\) 非空；若 \(AX=XA,\ AY=YA\)，则 \(A(X+Y)=(X+Y)A\)，\(A(kX)=(kX)A\)，故 \(C(A)\) 是子空间。
第二步：设 \(X=(x_{ij})\)，直接计算 \(AX\) 与 \(XA\) 并比较对应元素。
第三步：比较 \((1,2)\) 元素得 \(x_{21}=0\)，比较 \((1,3)\) 得 \(x_{31}=0\) 与 \(x_{32}=x_{21}\)，比较 \((2,3)\) 得 \(x_{32}=0\)。
第四步：进一步比较对角元得 \(x_{11}=x_{22}=x_{33}\)，比较 \((1,3)\) 得 \(x_{13}\) 任意，比较 \((1,2)\) 得 \(x_{12}=x_{23}\)。
第五步：故 \(X=\begin{pmatrix}a&b&c\\0&a&b\\0&0&a\end{pmatrix}=aI+bA+cA^{2}\)，三个参数 \(a,b,c\) 独立，\(\dim C(A)=3\)。` },

{ id:'LA08-43', ch:8, type:'计算', diff:5, tags:'核与像 秩 基础解系 行最简形',
  q: String.raw`设 \(T:\mathbb R^{4}\to\mathbb R^{3}\)，\(T(x)=Ax\)，其中 \(A=\begin{pmatrix}1&1&2&-1\\2&3&5&0\\1&2&3&1\end{pmatrix}\)。求 \(\ker T\) 与 \(\operatorname{Im}T\) 的基和维数。`,
  a: String.raw`\(\ker T=\operatorname{span}\{(-1,-1,1,0)^{T},(3,-2,0,1)^{T}\}\)，\(\dim\ker T=2\)；\(\operatorname{Im}T=\operatorname{span}\{(1,2,1)^{T},(1,3,2)^{T}\}\)，\(\dim\operatorname{Im}T=2\)。`,
  sol: String.raw`第一步：对 \(A\) 作初等行变换：第二行减第一行的 \(2\) 倍得 \((0,1,1,2)\)，第三行减第一行也得 \((0,1,1,2)\)，故秩为 \(2\)。
第二步：行最简形为 \(\begin{pmatrix}1&0&1&-3\\0&1&1&2\\0&0&0&0\end{pmatrix}\)，对应方程 \(x_1=-x_3+3x_4,\ x_2=-x_3-2x_4\)。
第三步：令 \((x_3,x_4)=(1,0)\) 得 \((-1,-1,1,0)^{T}\)，令 \((x_3,x_4)=(0,1)\) 得 \((3,-2,0,1)^{T}\)，即 \(\ker T\) 的基，\(\dim\ker T=2\)。
第四步：主元列为第 \(1,2\) 列，取 \(A\) 的第 \(1,2\) 列 \((1,2,1)^{T},(1,3,2)^{T}\) 为 \(\operatorname{Im}T\) 的基，\(\dim\operatorname{Im}T=2\)。
第五步：\(2+2=4=\dim\mathbb R^{4}\)，维数定理成立。` },

{ id:'LA08-44', ch:8, type:'证明', diff:5, tags:'核 像 秩 限制 维数定理',
  q: String.raw`设 \(T\) 是 \(n\) 维线性空间 \(V\) 上的线性变换。证明 \(\operatorname{Im}T\cap\ker T=\{0\}\) 当且仅当 \(\operatorname{rank}T=\operatorname{rank}T^{2}\)。`,
  a: String.raw`结论成立：\(\operatorname{Im}T\cap\ker T=\{0\}\) 等价于 \(V=\ker T\oplus\operatorname{Im}T\)，也等价于 \(\operatorname{rank}T=\operatorname{rank}T^{2}\)。`,
  sol: String.raw`第一步：把 \(T\) 限制在子空间 \(\operatorname{Im}T\) 上，记其核为 \(K=\{y\in\operatorname{Im}T\mid Ty=0\}=\operatorname{Im}T\cap\ker T\)。
第二步：该限制的像是 \(T(\operatorname{Im}T)=\operatorname{Im}T^{2}\)，由维数定理 \(\dim\operatorname{Im}T^{2}=\dim\operatorname{Im}T-\dim(\operatorname{Im}T\cap\ker T)\)。
第三步：若 \(\operatorname{Im}T\cap\ker T=\{0\}\)，则 \(\dim\operatorname{Im}T^{2}=\dim\operatorname{Im}T\)，即 \(\operatorname{rank}T^{2}=\operatorname{rank}T\)。
第四步：反之若 \(\operatorname{rank}T^{2}=\operatorname{rank}T\)，代入上式得 \(\dim(\operatorname{Im}T\cap\ker T)=0\)，即交为零。
第五步：故两条性质等价，且此时 \(V=\operatorname{Im}T\oplus\ker T\)（因两空间维数之和为 \(n\) 且交为零）。` },

{ id:'LA08-45', ch:8, type:'计算', diff:4, tags:'矩阵的秩 参数讨论 齐次方程 基础解系',
  q: String.raw`设 \(A=\begin{pmatrix}1&1&1\\1&a&1\\1&1&a\end{pmatrix}\)。讨论 \(a\) 取何值时 \(\operatorname{rank}A<3\)，并在此时求 \(Ax=0\) 的基础解系。`,
  a: String.raw`\(a=1\) 时 \(\operatorname{rank}A=1\)，基础解系为 \((-1,1,0)^{T},(-1,0,1)^{T}\)；\(a\neq1\) 时 \(\operatorname{rank}A=3\)。`,
  sol: String.raw`第一步：计算 \(|A|=\begin{vmatrix}1&1&1\\1&a&1\\1&1&a\end{vmatrix}=(a-1)^{2}\)。
第二步：故 \(a\neq1\) 时 \(|A|\neq0\)，\(\operatorname{rank}A=3\)，\(Ax=0\) 只有零解。
第三步：\(a=1\) 时三行全为 \((1,1,1)\)，秩为 \(1\)，方程为 \(x_1+x_2+x_3=0\)。
第四步：取自由未知量 \(x_2,x_3\)，得基础解系 \((-1,1,0)^{T}\) 与 \((-1,0,1)^{T}\)，解空间维数为 \(3-1=2\)。
第五步：注意 \(a=1\) 是二重根却使秩骤降为 \(1\)，说明"特征值重数"不能代替"秩的计算"。` },

{ id:'LA08-46', ch:8, type:'证明', diff:5, tags:'西尔维斯特不等式 秩 限制',
  q: String.raw`设 \(A\) 是 \(m\times n\) 实矩阵，\(B\) 是 \(n\times p\) 实矩阵。证明西尔维斯特不等式 \(\operatorname{rank}(AB)\ge\operatorname{rank}A+\operatorname{rank}B-n\)。`,
  a: String.raw`不等式成立：\(\operatorname{rank}(AB)=\operatorname{rank}B-\dim(\operatorname{Im}B\cap\ker A)\ge\operatorname{rank}A+\operatorname{rank}B-n\)，等号成立当且仅当 \(\ker A\subseteq\operatorname{Im}B\)。`,
  sol: String.raw`第一步：把 \(A\) 看作线性映射 \(\mathbb R^{n}\to\mathbb R^{m}\)，考虑它在子空间 \(\operatorname{Im}B\le\mathbb R^{n}\) 上的限制。
第二步：该限制的核为 \(\operatorname{Im}B\cap\ker A\)，像为 \(\operatorname{Im}(AB)\)，由维数定理 \(\operatorname{rank}(AB)=\operatorname{rank}B-\dim(\operatorname{Im}B\cap\ker A)\)。
第三步：又 \(\operatorname{Im}B\cap\ker A\subseteq\ker A\)，故 \(\dim(\operatorname{Im}B\cap\ker A)\le\dim\ker A=n-\operatorname{rank}A\)。
第四步：代入得 \(\operatorname{rank}(AB)\ge\operatorname{rank}B-(n-\operatorname{rank}A)=\operatorname{rank}A+\operatorname{rank}B-n\)。
第五步：等号可以取到：取 \(A=\operatorname{diag}(1,0),\ B=\operatorname{diag}(0,1)\)，则 \(AB=0\)，而 \(\operatorname{rank}A+\operatorname{rank}B-n=1+1-2=0\)，此时 \(\ker A=\operatorname{Im}B\)，故不等式是最优的。` },

{ id:'LA08-47', ch:8, type:'计算', diff:5, tags:'幂零变换 秩序列 核链 若尔当块',
  q: String.raw`设 \(T:\mathbb R^{4}\to\mathbb R^{4}\) 在标准基下的矩阵为 \(A=\begin{pmatrix}0&1&0&0\\0&0&1&0\\0&0&0&1\\0&0&0&0\end{pmatrix}\)。(1) 求 \(\operatorname{rank}T^{k}\ (k=1,2,3,4)\)；(2) 求 \(\ker T^{2}\) 的基；(3) 求 \(T\) 的极小多项式。`,
  a: String.raw`(1) 秩依次为 \(3,2,1,0\)；(2) \(\ker T^{2}=\operatorname{span}\{e_1,e_2\}\)；(3) 极小多项式为 \(x^{4}\)（等于特征多项式）。`,
  sol: String.raw`第一步：\(A\) 是 \(4\) 阶若尔当块 \(J_4(0)\)，第 \(k\) 次幂相当于把 \(1\) 的斜线右移 \(k\) 位。
第二步：\(A\) 的秩为 \(3\)（第 \(1,2,3\) 列线性无关），\(A^{2}\) 只有 \((1,3),(2,4)\) 两个位置为 \(1\)，秩为 \(2\)。
第三步：同理 \(A^{3}\) 只有 \((1,4)\) 位置为 \(1\)，秩 \(1\)；\(A^{4}=0\)，秩 \(0\)。
第四步：解 \(A^{2}x=0\)：由 \((x_3,x_4,0,0)^{T}=0\) 得 \(x_3=x_4=0\)，故 \(\ker T^{2}=\operatorname{span}\{e_1,e_2\}\)。
第五步：由 \(\operatorname{rank}T^{3}=1\neq0\) 知 \(T^{3}\neq0\)，而 \(T^{4}=0\)，故极小多项式为 \(x^{4}\)，幂零指数为 \(4\)。` },

{ id:'LA08-48', ch:8, type:'证明', diff:5, tags:'子空间 像 限制 维数定理',
  q: String.raw`设 \(T\) 是 \(n\) 维线性空间 \(V\) 上的线性变换，\(W\le V\)。证明 \(\dim T(W)=\dim W-\dim(W\cap\ker T)\)。`,
  a: String.raw`结论成立：\(\dim T(W)=\dim W-\dim(W\cap\ker T)\)，这正是限制映射 \(T|_W\) 的维数定理。`,
  sol: String.raw`第一步：把 \(T\) 限制在 \(W\) 上，得到线性映射 \(T|_W:W\to V\)，其像正是 \(T(W)\)。
第二步：\(T|_W\) 的核是 \(\{w\in W\mid Tw=0\}=W\cap\ker T\)。
第三步：对 \(T|_W\) 用维数定理得 \(\dim T(W)=\dim W-\dim(W\cap\ker T)\)。
第四步：特别地，若 \(W\cap\ker T=\{0\}\)，则 \(T\) 在 \(W\) 上保持维数，即 \(T\) 把 \(W\) 同构地映到 \(T(W)\)。
第五步：取 \(W=V\) 时得 \(\dim\operatorname{Im}T=n-\dim\ker T\)，即通常的维数定理。` },

{ id:'LA08-49', ch:8, type:'计算', diff:5, tags:'交换子 矩阵表示 核与秩 中心化子',
  q: String.raw`设 \(T:M_3(\mathbb R)\to M_3(\mathbb R)\)，\(T(X)=AX-XA\)，其中 \(A=\begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix}\)。(1) 求 \(\operatorname{rank}T\)；(2) 求 \(\ker T\) 的基。`,
  a: String.raw`\(\operatorname{rank}T=6\)；\(\ker T=\operatorname{span}\{I,\ A,\ A^{2}\}\)，即形如 \(\begin{pmatrix}a&b&c\\0&a&b\\0&0&a\end{pmatrix}\) 的矩阵全体。`,
  sol: String.raw`第一步：\(T\) 是 \(9\) 维空间上的线性变换，先求核再算秩。
第二步：\(AX=XA\) 即 \(X\) 与若尔当块 \(J_3(0)\) 交换，由逐元素比较得 \(x_{21}=x_{31}=x_{32}=0\)，\(x_{11}=x_{22}=x_{33}=a\)，\(x_{12}=x_{23}=b\)，\(x_{13}=c\)。
第三步：故 \(\ker T\) 中矩阵为 \(aI+bA+cA^{2}\)，三个参数独立，\(\dim\ker T=3\)。
第四步：由维数定理 \(\operatorname{rank}T=9-3=6\)。
第五步：这个核就是 \(A\) 的中心化子，其维数等于 \(A\) 的若尔当块大小之和 \(1+2+3=6\) 的一半关系式 \(3\)，即单块时中心化子是 \(A\) 的多项式全体。` },

{ id:'LA08-50', ch:8, type:'证明', diff:5, tags:'幂零变换 秩的上界 例子',
  q: String.raw`设 \(T\) 是 \(n\) 维线性空间 \(V\) 上的线性变换，且 \(T^{2}=0\)。证明 \(\operatorname{rank}T\le\frac{n}{2}\)，并举例说明等号可以成立。`,
  a: String.raw`结论成立；例如 \(n=4\) 时 \(T(x_1,x_2,x_3,x_4)=(x_3,x_4,0,0)\) 满足 \(T^{2}=0\) 且 \(\operatorname{rank}T=2=\frac{n}{2}\)。`,
  sol: String.raw`第一步：对任意 \(v\)，\(T(Tv)=T^{2}v=0\)，故 \(\operatorname{Im}T\subseteq\ker T\)。
第二步：于是 \(\operatorname{rank}T=\dim\operatorname{Im}T\le\dim\ker T=n-\operatorname{rank}T\)。
第三步：移项得 \(2\operatorname{rank}T\le n\)，即 \(\operatorname{rank}T\le\frac{n}{2}\)。
第四步：举例：\(n=4\) 时取 \(T(x_1,x_2,x_3,x_4)=(x_3,x_4,0,0)\)，直接验证 \(T^{2}=0\)，且像为 \(\operatorname{span}\{e_1,e_2\}\)，秩为 \(2\)。
第五步：这也说明"平方为零"的变换最多把空间"折半"，其矩阵相似于 \(\begin{pmatrix}0&I_r\\0&0\end{pmatrix}\)，其中 \(2r\le n\)。` },

{ id:'LA08-51', ch:8, type:'计算', diff:5, tags:'投影变换 核与像 幂等 矩阵',
  q: String.raw`设 \(T:\mathbb R^{3}\to\mathbb R^{3}\)，\(T(x)=x-\frac{x_1+x_2+x_3}{3}(1,1,1)^{T}\)。(1) 求 \(T\) 在标准基下的矩阵 \(A\)；(2) 求 \(\ker T\) 与 \(\operatorname{Im}T\) 的基和维数；(3) 验证 \(T^{2}=T\)，并说明 \(T\) 的几何意义。`,
  a: String.raw`\(A=\frac{1}{3}\begin{pmatrix}2&-1&-1\\-1&2&-1\\-1&-1&2\end{pmatrix}\)；\(\ker T=\operatorname{span}\{(1,1,1)^{T}\}\)，\(\operatorname{Im}T=\{x\mid x_1+x_2+x_3=0\}\)，维数分别为 \(1,2\)；\(T\) 是沿 \((1,1,1)^{T}\) 方向到平面 \(x_1+x_2+x_3=0\) 的平行投影。`,
  sol: String.raw`第一步：\(T(e_1)=e_1-\frac{1}{3}(1,1,1)^{T}=\frac{1}{3}(2,-1,-1)^{T}\)，同理 \(T(e_2)=\frac{1}{3}(-1,2,-1)^{T}\)，\(T(e_3)=\frac{1}{3}(-1,-1,2)^{T}\)，按列排得 \(A\)。
第二步：\(T(x)=0\) 等价于 \(x=\frac{x_1+x_2+x_3}{3}(1,1,1)^{T}\)，即 \(x\) 与 \((1,1,1)^{T}\) 共线，故 \(\ker T=\operatorname{span}\{(1,1,1)^{T}\}\)。
第三步：\(T(x)\) 三个分量之和为 \((x_1+x_2+x_3)-(x_1+x_2+x_3)=0\)，故 \(\operatorname{Im}T\subseteq\{x_1+x_2+x_3=0\}\)；两者维数都是 \(2\)，故相等，基可取 \((1,-1,0)^{T},(1,0,-1)^{T}\)。
第四步：因 \(Tx\) 的分量之和为零，再作用一次 \(T\) 不再改变，即 \(T(Tx)=Tx\)，故 \(T^{2}=T\)。
第五步：几何上 \(T\) 把每点沿 \((1,1,1)^{T}\) 方向平移到平面 \(x_1+x_2+x_3=0\) 上，是平行投影，\(\ker T\) 为投影方向。` },

{ id:'LA08-52', ch:8, type:'证明', diff:5, tags:'核链 单调 稳定 幂零指数',
  q: String.raw`设 \(T\) 是 \(n\) 维线性空间 \(V\) 上的线性变换。证明 \(\ker T\subseteq\ker T^{2}\subseteq\cdots\)，且若存在 \(k\) 使 \(\dim\ker T^{k+1}=\dim\ker T^{k}\)，则对一切 \(m\ge k\) 有 \(\ker T^{m}=\ker T^{k}\)。`,
  a: String.raw`结论成立：核链单调不减，一旦维数停止增长就永远稳定。`,
  sol: String.raw`第一步：若 \(x\in\ker T^{k}\)，则 \(T^{k}x=0\)，于是 \(T^{k+1}x=T(T^{k}x)=0\)，故 \(\ker T^{k}\subseteq\ker T^{k+1}\)。
第二步：核空间维数单调不减且有上界 \(n\)，故数列 \(\dim\ker T^{k}\) 必在某个时刻停止增长。
第三步：设 \(\dim\ker T^{k+1}=\dim\ker T^{k}\)，由包含关系立得 \(\ker T^{k+1}=\ker T^{k}\)。
第四步：设 \(x\in\ker T^{k+2}\)，则 \(T^{k+1}(Tx)=T^{k+2}x=0\)，即 \(Tx\in\ker T^{k+1}=\ker T^{k}\)，故 \(T^{k+1}x=T^{k}(Tx)=0\)，即 \(x\in\ker T^{k+1}\)。
第五步：于是 \(\ker T^{k+2}=\ker T^{k+1}\)，反复归纳得对一切 \(m\ge k\) 有 \(\ker T^{m}=\ker T^{k}\)。` },

{ id:'LA08-53', ch:8, type:'证明', diff:5, tags:'特征子空间 不变子空间 核',
  q: String.raw`设 \(T\) 是 \(V\) 上的线性变换，\(\lambda\) 是 \(T\) 的一个特征值，\(V_\lambda=\{x\in V\mid Tx=\lambda x\}\)。证明 \(V_\lambda\) 是 \(T\) 的不变子空间，且 \(T\) 在 \(V_\lambda\) 上的限制等于 \(\lambda I\)。`,
  a: String.raw`结论成立；\(V_\lambda=\ker(T-\lambda I)\)，且 \(T|_{V_\lambda}=\lambda I\)。`,
  sol: String.raw`第一步：\(V_\lambda=\ker(T-\lambda I)\)，线性变换的核是子空间，故 \(V_\lambda\le V\)；又 \(\lambda\) 是特征值意味着 \(V_\lambda\neq\{0\}\)。
第二步：设 \(x\in V_\lambda\)，则 \(T(Tx)=T(\lambda x)=\lambda Tx\)，故 \(Tx\in V_\lambda\)，即 \(V_\lambda\) 是 \(T\)-不变的。
第三步：由定义 \(Tx=\lambda x\) 对一切 \(x\in V_\lambda\) 成立，故限制映射 \(T|_{V_\lambda}=\lambda I\)。
第四步：于是 \(T\) 在 \(V_\lambda\) 的任意基下的矩阵是 \(\lambda I\)，其特征多项式为 \((t-\lambda)^{\dim V_\lambda}\)。
第五步：这说明特征子空间是 \(T\) 作用最"简单"的不变子空间，也是分解 \(V\) 的出发点。` },

{ id:'LA08-54', ch:8, type:'计算', diff:5, tags:'一维不变子空间 特征向量 广义特征子空间',
  q: String.raw`设 \(A=\begin{pmatrix}2&1&0\\0&2&0\\0&0&1\end{pmatrix}\)，\(T(x)=Ax\)。求 \(T\) 的全部一维不变子空间。`,
  a: String.raw`恰有两个：\(\operatorname{span}\{(1,0,0)^{T}\}\)（对应 \(\lambda=2\)）与 \(\operatorname{span}\{(0,0,1)^{T}\}\)（对应 \(\lambda=1\)）。`,
  sol: String.raw`第一步：一维不变子空间必由特征向量张成：若 \(W=\operatorname{span}\{v\}\) 不变，则 \(Tv\in W\)，即 \(Tv=\mu v\)，\(v\neq0\)。
第二步：\(A\) 为上三角矩阵，特征值为 \(2,2,1\)。解 \((A-2I)x=0\)：由 \(x_2=0,\ x_3=0\) 得 \(V_2=\operatorname{span}\{e_1\}\)。
第三步：解 \((A-I)x=0\)：由 \(x_1+x_2=0,\ x_2=0\) 得 \(V_1=\operatorname{span}\{e_3\}\)。
第四步：还需排除 \(V_2\) 内的非特征方向：设 \(v=e_1+te_2\)，则 \(Tv=(2+t)e_1+2te_2\)，若与 \(v\) 共线且 \(t\neq0\)，比较第一分量得 \(\mu=2+t\)，比较第二分量得 \(2t=\mu t\) 即 \(\mu=2\)，于是 \(t=0\)，矛盾。
第五步：故一维不变子空间只有这两个，分别对应两个不同的特征值。` },

{ id:'LA08-55', ch:8, type:'证明', diff:5, tags:'不变子空间 特征多项式 整除 分块上三角',
  q: String.raw`设 \(W\) 是 \(T\) 的不变子空间，\(\dim W=k\)。证明 \(T|_W\) 的特征多项式整除 \(T\) 的特征多项式，并说明商是什么。`,
  a: String.raw`结论成立；\(f_T(t)=f_{T|_W}(t)\cdot f_{\bar T}(t)\)，其中 \(\bar T\) 是商空间 \(V/W\) 上的诱导变换。`,
  sol: String.raw`第一步：取 \(W\) 的基 \(\varepsilon_1,\dots,\varepsilon_k\) 并扩充为 \(V\) 的基。
第二步：因 \(W\) 不变，\(T\varepsilon_i\in W\ (i\le k)\)，故 \(T\) 在该基下的矩阵为分块上三角 \(\begin{pmatrix}A&B\\0&C\end{pmatrix}\)，其中 \(A\) 是 \(T|_W\) 的矩阵。
第三步：由分块上三角矩阵的行列式公式 \(|tI-A|\cdot|tI-C|\) 得 \(f_T(t)=f_{T|_W}(t)\cdot|tI-C|\)。
第四步：故 \(f_{T|_W}\) 整除 \(f_T\)，且次数为 \(k\)。
第五步：\(|tI-C|\) 恰是商空间 \(V/W\) 上诱导变换 \(\bar T\) 的特征多项式，故 \(f_T=f_{T|_W}\cdot f_{\bar T}\)。` },

{ id:'LA08-56', ch:8, type:'证明', diff:5, tags:'不变子空间 不同特征值 拉格朗日多项式 计数',
  q: String.raw`设 \(T\) 是 \(n\) 维线性空间 \(V\) 上的线性变换，有 \(n\) 个互不相同的特征值 \(\lambda_1,\dots,\lambda_n\)，对应特征向量 \(\xi_1,\dots,\xi_n\)。证明 \(T\) 的每个不变子空间都是某些 \(\xi_i\) 张成的子空间；特别地 \(T\) 恰有 \(2^{n}\) 个不变子空间。`,
  a: String.raw`结论成立：不变子空间与特征向量子集一一对应，共 \(2^{n}\) 个。`,
  sol: String.raw`第一步：互不相同特征值对应的特征向量线性无关，\(n\) 个即构成 \(V\) 的基。
第二步：设 \(W\) 是不变子空间，取 \(0\neq x=\sum c_i\xi_i\in W\)。
第三步：对固定的 \(i\)，令 \(p_i(t)=\prod_{j\neq i}\frac{t-\lambda_j}{\lambda_i-\lambda_j}\)，则 \(p_i(T)\xi_i=\xi_i\)，而 \(p_i(T)\xi_j=0\ (j\neq i)\)。
第四步：因 \(W\) 不变，\(p_i(T)x\in W\)；又 \(p_i(T)x=c_i\xi_i\)，故 \(c_i\neq0\) 时 \(\xi_i\in W\)。
第五步：于是 \(W=\operatorname{span}\{\xi_i\mid c_i\neq0\}\)，即 \(W\) 由出现过的特征向量张成。
第六步：每个 \(W\) 对应特征向量的一个子集，子集共 \(2^{n}\) 个，故不变子空间恰有 \(2^{n}\) 个。` },

{ id:'LA08-57', ch:8, type:'证明', diff:5, tags:'不变子空间 可逆变换 逆变换 原像',
  q: String.raw`设 \(T\) 是可逆线性变换，\(W\le V\)。证明 \(W\) 是 \(T\) 的不变子空间当且仅当 \(W\) 是 \(T^{-1}\) 的不变子空间。`,
  a: String.raw`结论成立：\(T\) 可逆时 \(W\) 不变 \(\iff T(W)=W\)，故对 \(T^{-1}\) 同样成立。`,
  sol: String.raw`第一步：设 \(W\) 是 \(T\)-不变的，即 \(T(W)\subseteq W\)。
第二步：\(T\) 可逆故其在 \(W\) 上的限制是单射，于是 \(\dim T(W)=\dim W\)。
第三步：由 \(T(W)\subseteq W\) 且维数相同得 \(T(W)=W\)，两边作用 \(T^{-1}\) 得 \(T^{-1}(W)=W\)。
第四步：故 \(T^{-1}(W)\subseteq W\)，即 \(W\) 也是 \(T^{-1}\)-不变的。
第五步：反之设 \(T^{-1}(W)\subseteq W\)，同法得 \(T^{-1}(W)=W\)，两边作用 \(T\) 得 \(T(W)=W\subseteq W\)，故不变性是对称的。` },

{ id:'LA08-58', ch:8, type:'计算', diff:5, tags:'商空间 诱导变换 迹 不变子空间',
  q: String.raw`设 \(T:\mathbb R^{3}\to\mathbb R^{3}\)，\(T(x_1,x_2,x_3)^{T}=(x_1+x_2,\ x_2+x_3,\ x_1+x_3)^{T}\)，\(W=\operatorname{span}\{(1,1,1)^{T}\}\)。(1) 证明 \(W\) 是 \(T\) 的不变子空间；(2) 求商空间 \(\mathbb R^{3}/W\) 上诱导变换 \(\bar T\) 在基 \(\{e_1+W,e_2+W\}\) 下的矩阵；(3) 验证 \(\operatorname{tr}T=\operatorname{tr}(T|_W)+\operatorname{tr}\bar T\)。`,
  a: String.raw`(2) 矩阵为 \(\begin{pmatrix}0&1\\-1&1\end{pmatrix}\)；(3) \(3=2+1\)。`,
  sol: String.raw`第一步：\(T(1,1,1)^{T}=(2,2,2)^{T}=2(1,1,1)^{T}\)，故 \(W\) 不变，且 \(T|_W=2\)。
第二步：诱导变换定义良好：若 \(x-y\in W\)，则 \(T(x-y)\in T(W)\subseteq W\)，故 \(Tx+W=Ty+W\)。
第三步：\(T(e_1)=(1,0,1)^{T}\)，减去 \(\frac{2}{3}(1,1,1)^{T}\) 得 \((\frac{1}{3},-\frac{2}{3},\frac{1}{3})^{T}\)，再加 \(e_2\) 得 \((\frac{1}{3},\frac{1}{3},\frac{1}{3})^{T}\in W\)，故 \(T(e_1)+W=-e_2+W\)，第一列为 \((0,-1)^{T}\)。
第四步：\(T(e_2)=(1,1,0)^{T}\)，减去 \(\frac{2}{3}(1,1,1)^{T}\) 得 \((\frac{1}{3},\frac{1}{3},-\frac{2}{3})^{T}\)，减去 \(e_1+e_2\) 得 \((-\frac{2}{3},-\frac{2}{3},-\frac{2}{3})^{T}\in W\)，故 \(T(e_2)+W=e_1+e_2+W\)，第二列为 \((1,1)^{T}\)。
第五步：故矩阵为 \(\begin{pmatrix}0&1\\-1&1\end{pmatrix}\)，\(\operatorname{tr}\bar T=1\)，而 \(\operatorname{tr}T=3\)，\(\operatorname{tr}(T|_W)=2\)，满足 \(3=2+1\)。` },

{ id:'LA08-59', ch:8, type:'证明', diff:5, tags:'不变子空间 交与和 封闭性',
  q: String.raw`设 \(U,W\) 都是 \(T\)-不变子空间。证明 \(U\cap W\) 与 \(U+W\) 都是 \(T\)-不变子空间。`,
  a: String.raw`结论成立：\(T(U\cap W)\subseteq U\cap W\)，\(T(U+W)\subseteq U+W\)。`,
  sol: String.raw`第一步：设 \(x\in U\cap W\)，则 \(x\in U\) 且 \(x\in W\)。
第二步：由 \(U,W\) 不变得 \(Tx\in U\) 且 \(Tx\in W\)，故 \(Tx\in U\cap W\)，交空间不变。
第三步：设 \(z=u+w\in U+W\)，其中 \(u\in U,\ w\in W\)，则 \(Tz=Tu+Tw\)。
第四步：由 \(Tu\in U,\ Tw\in W\) 得 \(Tz\in U+W\)，故和空间不变。
第五步：于是 \(T\) 的不变子空间对交与和封闭；注意并集 \(U\cup W\) 一般不是子空间，所以"格"运算必须用交与和。` },

{ id:'LA08-60', ch:8, type:'计算', diff:5, tags:'循环子空间 循环向量 极小多项式 若尔当块',
  q: String.raw`设 \(A=\begin{pmatrix}1&1&0\\0&1&1\\0&0&1\end{pmatrix}\)，\(T(x)=Ax\)，\(v=(0,0,1)^{T}\)。求循环子空间 \(W=\operatorname{span}\{v,Tv,T^{2}v,\dots\}\) 的维数与一组基，并求 \(T|_W\) 的极小多项式。`,
  a: String.raw`\(\dim W=3\)，基为 \(v=(0,0,1)^{T},\ Tv=(0,1,1)^{T},\ T^{2}v=(1,2,1)^{T}\)；极小多项式为 \((x-1)^{3}\)。`,
  sol: String.raw`第一步：\(Tv=A(0,0,1)^{T}=(0,1,1)^{T}\)，\(T^{2}v=A(0,1,1)^{T}=(1,2,1)^{T}\)。
第二步：以它们为列的行列式 \(\begin{vmatrix}0&0&1\\0&1&2\\1&1&1\end{vmatrix}=-1\neq0\)，故三者线性无关。
第三步：于是 \(\dim W=3\)，即 \(W=V\)，\(v\) 是循环向量。
第四步：由 \((T-I)^{3}=0\) 展开得 \(T^{3}=3T^{2}-3T+I\)，故 \(T^{3}v=(3,3,1)^{T}=3T^{2}v-3Tv+v\)，与直接计算一致。
第五步：故 \(T\) 的极小多项式为 \((x-1)^{3}\)，与特征多项式相同，\(T\) 相似于单个若尔当块 \(J_3(1)\)。` },

{ id:'LA08-61', ch:8, type:'计算', diff:5, tags:'对偶基 线性函数 逆矩阵',
  q: String.raw`设 \(V=\mathbb R^{3}\) 的基为 \(\alpha_1=(1,1,1)^{T},\ \alpha_2=(1,1,0)^{T},\ \alpha_3=(1,0,0)^{T}\)。求对偶基 \(f_1,f_2,f_3\)（用坐标函数 \(x_1,x_2,x_3\) 表示）。`,
  a: String.raw`\(f_1=x_3,\ f_2=x_2-x_3,\ f_3=x_1-x_2\)。`,
  sol: String.raw`第一步：设 \(P=(\alpha_1,\alpha_2,\alpha_3)\)，则对偶基在标准对偶基下的坐标行恰为 \(P^{-1}\) 的各行。
第二步：计算 \(P^{-1}=\begin{pmatrix}0&0&1\\0&1&-1\\1&-1&0\end{pmatrix}\)。
第三步：故 \(f_1=x_3,\ f_2=x_2-x_3,\ f_3=x_1-x_2\)。
第四步：验证 \(f_1(\alpha_1)=1,\ f_1(\alpha_2)=f_1(\alpha_3)=0\)；\(f_2(\alpha_1)=1-1=0,\ f_2(\alpha_2)=1,\ f_2(\alpha_3)=0\)。
第五步：\(f_3(\alpha_1)=0,\ f_3(\alpha_2)=0,\ f_3(\alpha_3)=1\)，符合 \(f_i(\alpha_j)=\delta_{ij}\)。` },

{ id:'LA08-62', ch:8, type:'证明', diff:5, tags:'二次对偶 自然同构 线性函数',
  q: String.raw`设 \(V\) 是 \(n\) 维线性空间，\(V^{*}\) 为其对偶空间。定义 \(\Phi:V\to V^{**}\) 为 \(\Phi(v)(f)=f(v)\)。证明 \(\Phi\) 是线性同构，且它不依赖基的选取。`,
  a: String.raw`结论成立：\(\Phi\) 是自然同构，\(\dim V^{**}=\dim V=n\)。`,
  sol: String.raw`第一步：对固定的 \(v\)，映射 \(f\mapsto f(v)\) 是 \(V^{*}\) 上的线性函数，故 \(\Phi(v)\in V^{**}\)。
第二步：\(\Phi\) 线性：\(\Phi(v+u)(f)=f(v+u)=f(v)+f(u)\)，\(\Phi(kv)(f)=kf(v)\)。
第三步：单射：若 \(\Phi(v)=0\)，则对一切 \(f\) 有 \(f(v)=0\)；取基 \(\varepsilon_1,\dots,\varepsilon_n\) 与对偶基，设 \(v=\sum c_i\varepsilon_i\)，则 \(c_i=f_i(v)=0\)，故 \(v=0\)。
第四步：\(\dim V^{**}=\dim V^{*}=n\)，单射的线性映射在等维空间之间必为满射，故 \(\Phi\) 是同构。
第五步：定义中只用到配对 \(f(v)\)，没有选取任何基，故 \(\Phi\) 是自然同构，这是它与 \(V\cong V^{*}\) 的本质区别。` },

{ id:'LA08-63', ch:8, type:'计算', diff:4, tags:'对偶映射 转置矩阵 线性函数',
  q: String.raw`设 \(T:\mathbb R^{2}\to\mathbb R^{2}\)，\(T(x)=Ax\)，\(A=\begin{pmatrix}1&2\\3&4\end{pmatrix}\)。对偶映射 \(T^{*}\) 定义为 \((T^{*}f)(x)=f(Tx)\)。求 \(T^{*}\) 在 \(x_1,x_2\) 的对偶基下的矩阵，并取 \(f=x_1\) 验证。`,
  a: String.raw`矩阵为 \(A^{T}=\begin{pmatrix}1&3\\2&4\end{pmatrix}\)；\((T^{*}x_1)(x)=x_1+2x_2\)，与 \(x_1(Tx)\) 一致。`,
  sol: String.raw`第一步：设 \(f\) 的坐标列向量为 \(c\)，则 \(f(y)=c^{T}y\)。
第二步：\((T^{*}f)(x)=f(Ax)=c^{T}Ax=(A^{T}c)^{T}x\)，故 \(T^{*}f\) 的坐标为 \(A^{T}c\)。
第三步：于是 \(T^{*}\) 在标准对偶基下的矩阵为 \(A^{T}\)。
第四步：取 \(f=x_1\)，即 \(c=(1,0)^{T}\)，得 \(A^{T}c=(1,2)^{T}\)，故 \((T^{*}x_1)(x)=x_1+2x_2\)。
第五步：直接验证 \(x_1(Tx)\) 就是 \(Ax\) 的第一个分量 \(x_1+2x_2\)，两者一致；这也是"转置"名称的来源。` },

{ id:'LA08-64', ch:8, type:'证明', diff:5, tags:'零化子 维数 对偶基',
  q: String.raw`设 \(W\le V\)，\(\dim V=n\)，\(W^{0}=\{f\in V^{*}\mid f(w)=0,\ \forall w\in W\}\)。证明 \(W^{0}\) 是 \(V^{*}\) 的子空间，且 \(\dim W^{0}=n-\dim W\)。`,
  a: String.raw`结论成立：\(\dim W^{0}=\dim V-\dim W\)。`,
  sol: String.raw`第一步：\(W^{0}\) 是若干线性方程 \(f(w)=0\ (w\in W)\) 的公共解集，故为子空间。
第二步：取 \(W\) 的基 \(\varepsilon_1,\dots,\varepsilon_k\)，扩充为 \(V\) 的基 \(\varepsilon_1,\dots,\varepsilon_n\)，取对偶基 \(f_1,\dots,f_n\)。
第三步：\(f=\sum c_if_i\) 属于 \(W^{0}\) 当且仅当 \(f(\varepsilon_i)=c_i=0\ (i\le k)\)。
第四步：故 \(W^{0}=\operatorname{span}\{f_{k+1},\dots,f_n\}\)，维数为 \(n-k\)。
第五步：这说明零化子的维数与 \(W\) 的维数互补，且零化子与 \(W\) 的"对偶基配对"直接给出。` },

{ id:'LA08-65', ch:8, type:'计算', diff:4, tags:'零化子 基 线性函数 齐次方程',
  q: String.raw`设 \(W=\operatorname{span}\{(1,1,0)^{T},(0,1,1)^{T}\}\le\mathbb R^{3}\)。求 \(W^{0}\) 的一组基与维数。`,
  a: String.raw`\(\dim W^{0}=1\)，基为 \(f(x)=x_1-x_2+x_3\)。`,
  sol: String.raw`第一步：两生成向量不成比例，故 \(\dim W=2\)，从而 \(\dim W^{0}=3-2=1\)。
第二步：设 \(f(x)=c_1x_1+c_2x_2+c_3x_3\)，条件为 \(f(1,1,0)=c_1+c_2=0\) 与 \(f(0,1,1)=c_2+c_3=0\)。
第三步：解得 \(c_1=c_3=-c_2\)，取 \(c_2=-1\) 得 \((c_1,c_2,c_3)=(1,-1,1)\)。
第四步：故 \(W^{0}=\operatorname{span}\{x_1-x_2+x_3\}\)。
第五步：验证两个生成向量代入都得 \(0\)，且该函数不恒为零，确为一维零化子的基。` },

{ id:'LA08-66', ch:8, type:'证明', diff:5, tags:'对偶映射 单射 满射 秩',
  q: String.raw`设 \(T:V\to W\) 是有限维线性空间之间的线性映射，\(T^{*}:W^{*}\to V^{*}\) 定义为 \((T^{*}g)(v)=g(Tv)\)。证明 \(T\) 是单射当且仅当 \(T^{*}\) 是满射。`,
  a: String.raw`结论成立：\(\operatorname{rank}T^{*}=\operatorname{rank}T\)，故 \(T\) 单射（\(\operatorname{rank}T=\dim V\)）等价于 \(T^{*}\) 满射。`,
  sol: String.raw`第一步：取 \(V,W\) 的基，\(T\) 的矩阵为 \(A\)，则 \(T^{*}\) 在相应对偶基下的矩阵为 \(A^{T}\)。
第二步：\(\operatorname{rank}T^{*}=\operatorname{rank}A^{T}=\operatorname{rank}A=\operatorname{rank}T\)。
第三步：\(T\) 单射等价于 \(\ker T=\{0\}\)，即 \(\operatorname{rank}T=\dim V\)。
第四步：\(T^{*}\) 满射等价于 \(\operatorname{rank}T^{*}=\dim V^{*}=\dim V\)。
第五步：两个条件都等价于 \(\operatorname{rank}T=\dim V\)，故 \(T\) 单射当且仅当 \(T^{*}\) 满射。` },

{ id:'LA08-67', ch:8, type:'计算', diff:4, tags:'微分算子 核与像 可逆性',
  q: String.raw`设 \(V=\mathbb R[x]_4\)（次数小于 \(4\)），\(D(f)=f'(x)\)。求 \(\ker D\) 与 \(\operatorname{Im}D\) 的基和维数，并判断 \(D\) 是否可逆。`,
  a: String.raw`\(\ker D=\operatorname{span}\{1\}\)，\(\operatorname{Im}D=\{f\mid f(0)=0\}=\operatorname{span}\{x,x^{2},x^{3}\}\)，维数分别为 \(1,3\)；\(D\) 不可逆。`,
  sol: String.raw`第一步：\(f'=0\) 的多项式只有常数，故 \(\ker D=\operatorname{span}\{1\}\)，\(\dim\ker D=1\)。
第二步：\(\operatorname{Im}D=\operatorname{span}\{D(1),D(x),D(x^{2}),D(x^{3})\}=\operatorname{span}\{0,1,2x,3x^{2}\}=\operatorname{span}\{1,x,x^{2}\}\)。
第三步：故 \(\dim\operatorname{Im}D=3\)，且 \(1+3=4=\dim V\)，维数定理成立。
第四步：\(\operatorname{Im}D\) 是常数项为零的多项式全体，不含非零常数，故 \(D\) 不满射。
第五步：\(\ker D\neq\{0\}\) 且不满射，故 \(D\) 不可逆；其"逆"只能是积分并附加一个常数。` },

{ id:'LA08-68', ch:8, type:'计算', diff:5, tags:'平移算子 特征值 几何重数 不可对角化',
  q: String.raw`设 \(V=\mathbb R[x]_3\)，\(T(f)=f(x+1)\)。(1) 求 \(T\) 在基 \(1,x,x^{2}\) 下的矩阵 \(A\)；(2) 求 \(T\) 的特征值与特征向量；(3) 判断 \(T\) 能否对角化。`,
  a: String.raw`\(A=\begin{pmatrix}1&1&1\\0&1&2\\0&0&1\end{pmatrix}\)；特征值全为 \(1\)，特征子空间为 \(\operatorname{span}\{1\}\)；不可对角化。`,
  sol: String.raw`第一步：\(T(1)=1,\ T(x)=x+1,\ T(x^{2})=(x+1)^{2}=x^{2}+2x+1\)，把像的坐标按列排得 \(A\)。
第二步：\(A\) 为上三角矩阵，特征值为对角元 \(1,1,1\)。
第三步：\(A-I=\begin{pmatrix}0&1&1\\0&0&2\\0&0&0\end{pmatrix}\) 的秩为 \(2\)，故 \(\dim\ker(A-I)=1\)，特征子空间是 \(\operatorname{span}\{(1,0,0)^{T}\}\)，即常值多项式。
第四步：几何重数 \(1\) 小于代数重数 \(3\)，故 \(T\) 不可对角化。
第五步：直观上 \(T\) 是多项式图像的平移，除常值多项式外，任何非零多项式平移后都会改变。` },

{ id:'LA08-69', ch:8, type:'证明', diff:5, tags:'差分算子 幂零 次数下降 核链',
  q: String.raw`设 \(V=\mathbb R[x]_n\)（次数不超过 \(n\)），\(\Delta f(x)=f(x+1)-f(x)\)。证明 \(\Delta^{n+1}=0\) 而 \(\Delta^{n}\neq0\)。`,
  a: String.raw`结论成立；\(\Delta^{n}(x^{n})=n!\neq0\)。`,
  sol: String.raw`第一步：对 \(f(x)=x^{k}\ (k\ge1)\)，\(\Delta f\) 是 \(k-1\) 次多项式，首项为 \(kx^{k-1}\)。
第二步：对常数 \(c\) 有 \(\Delta c=0\)，故 \(\Delta\) 使多项式的次数严格下降 \(1\)（非常数情形）。
第三步：于是对任何次数不超过 \(n\) 的多项式，\(\Delta^{n+1}f=0\)，即 \(\Delta^{n+1}=0\)。
第四步：而 \(\Delta^{n}(x^{n})=n!\)，是首项系数逐次相乘 \(n(n-1)\cdots1\) 的结果，非零。
第五步：故 \(\Delta\) 是幂零指数为 \(n+1\) 的幂零变换，且 \(\dim\ker\Delta^{k}=k\)。` },

{ id:'LA08-70', ch:8, type:'计算', diff:5, tags:'差分方程 待定系数 多项式',
  q: String.raw`求次数不超过 \(3\) 的多项式 \(f(x)\)，使 \(f(x)-f(x-1)=x^{2}\)。`,
  a: String.raw`\(f(x)=\frac{1}{3}x^{3}+\frac{1}{2}x^{2}+\frac{1}{6}x+C\)，其中 \(C\) 为任意常数。`,
  sol: String.raw`第一步：设 \(f(x)=ax^{3}+bx^{2}+cx+d\)，展开得 \(f(x)-f(x-1)=3ax^{2}+(-3a+2b)x+(a-b+c)\)。
第二步：与 \(x^{2}\) 比较系数得 \(3a=1,\ -3a+2b=0,\ a-b+c=0\)。
第三步：解得 \(a=\frac{1}{3},\ b=\frac{1}{2},\ c=\frac{1}{6}\)。
第四步：常数项 \(d\) 在差分中被消掉，故任意，这正对应差分算子的核为全体常数。
第五步：验算 \(\left(x^{2}-x+\frac{1}{3}\right)+\left(x-\frac{1}{2}\right)+\frac{1}{6}=x^{2}\)，成立。` },

{ id:'LA08-71', ch:8, type:'证明', diff:5, tags:'求值泛函 线性无关 拉格朗日插值 对偶基',
  q: String.raw`设 \(a_1,\dots,a_{n+1}\) 是互不相同的实数，\(V=\mathbb R[x]_n\) 为次数不超过 \(n\) 的多项式空间。定义 \(f_i\in V^{*}\) 为 \(f_i(f)=f(a_i)\)。证明 \(f_1,\dots,f_{n+1}\) 构成 \(V^{*}\) 的基。`,
  a: String.raw`结论成立；其对偶基为拉格朗日基多项式 \(l_i(x)=\prod_{j\neq i}\frac{x-a_j}{a_i-a_j}\)。`,
  sol: String.raw`第一步：\(\dim V=n+1=\dim V^{*}\)，故只需证明 \(f_1,\dots,f_{n+1}\) 线性无关。
第二步：设 \(\sum c_if_i=0\)，即对一切 \(f\in V\) 有 \(\sum c_if(a_i)=0\)。
第三步：取拉格朗日基多项式 \(l_j(x)=\prod_{i\neq j}\frac{x-a_i}{a_j-a_i}\)，它满足 \(l_j(a_i)=\delta_{ij}\)。
第四步：把 \(f=l_j\) 代入得 \(c_j=0\)，对每个 \(j\) 成立，故线性无关。
第五步：于是它们构成 \(V^{*}\) 的基，且 \(l_1,\dots,l_{n+1}\) 是其对偶基，即 \(f_i(l_j)=\delta_{ij}\)。` },

{ id:'LA08-72', ch:8, type:'计算', diff:4, tags:'偶多项式 奇多项式 直和 维数',
  q: String.raw`设 \(V=\mathbb R[x]_4\)（次数小于 \(4\)），\(V_1=\{f\in V\mid f(-x)=f(x)\}\)，\(V_2=\{f\in V\mid f(-x)=-f(x)\}\)。求 \(V_1,V_2\) 的基与维数，并证明 \(V=V_1\oplus V_2\)。`,
  a: String.raw`\(V_1=\operatorname{span}\{1,x^{2}\}\)，\(V_2=\operatorname{span}\{x,x^{3}\}\)，维数均为 \(2\)；\(V=V_1\oplus V_2\)。`,
  sol: String.raw`第一步：次数小于 \(4\) 的偶多项式只能是 \(1,x^{2}\) 的线性组合，且二者线性无关，故 \(\dim V_1=2\)。
第二步：次数小于 \(4\) 的奇多项式只能是 \(x,x^{3}\) 的线性组合，故 \(\dim V_2=2\)。
第三步：任意 \(f\) 可写成 \(f(x)=\frac{f(x)+f(-x)}{2}+\frac{f(x)-f(-x)}{2}\)，前一项为偶、后一项为奇，故 \(V=V_1+V_2\)。
第四步：若 \(f\) 既偶又奇，则 \(f(x)=-f(x)\)，即 \(f=0\)，故 \(V_1\cap V_2=\{0\}\)。
第五步：于是 \(V=V_1\oplus V_2\)，且 \(2+2=4=\dim V\)。` },

{ id:'LA08-73', ch:8, type:'证明', diff:4, tags:'泰勒基 基变换 多项式 坐标',
  q: String.raw`设 \(V=\mathbb R[x]_3\)（次数小于 \(3\)），\(a\in\mathbb R\)。证明 \(1,(x-a),(x-a)^{2}\) 是 \(V\) 的基，并求 \(f(x)=x^{2}\) 在这组基下的坐标。`,
  a: String.raw`是基；\(f\) 的坐标为 \((a^{2},2a,1)^{T}\)。`,
  sol: String.raw`第一步：设 \(c_0+c_1(x-a)+c_2(x-a)^{2}=0\)，令 \(x=a\) 得 \(c_0=0\)。
第二步：两边求导得 \(c_1+2c_2(x-a)=0\)，再令 \(x=a\) 得 \(c_1=0\)；代回得 \(c_2(x-a)^{2}=0\)，故 \(c_2=0\)。
第三步：故三向量线性无关，而 \(\dim V=3\)，它们构成基。
第四步：由泰勒展开 \(x^{2}=a^{2}+2a(x-a)+(x-a)^{2}\)。
第五步：故坐标为 \((a^{2},2a,1)^{T}\)；\(a=0\) 时退化为通常的基 \(1,x,x^{2}\)。` },

{ id:'LA08-74', ch:8, type:'计算', diff:4, tags:'多项式空间 特征值 对角化 单项式',
  q: String.raw`设 \(V=\mathbb R[x]_4\)（次数小于 \(4\)），\(T(f)=xf'(x)\)。(1) 求 \(T\) 在基 \(1,x,x^{2},x^{3}\) 下的矩阵；(2) 求 \(T\) 的特征值与特征向量；(3) 判断 \(T\) 能否对角化。`,
  a: String.raw`矩阵为 \(\operatorname{diag}(0,1,2,3)\)；特征值 \(0,1,2,3\)，对应特征向量 \(1,x,x^{2},x^{3}\)；可对角化。`,
  sol: String.raw`第一步：\(T(1)=0,\ T(x)=x,\ T(x^{2})=2x^{2},\ T(x^{3})=3x^{3}\)。
第二步：按列排得 \(A=\operatorname{diag}(0,1,2,3)\)。
第三步：对角矩阵的特征值即对角元 \(0,1,2,3\)，对应特征向量为基向量 \(1,x,x^{2},x^{3}\)。
第四步：四个特征值互不相同，特征向量已构成 \(V\) 的基，故 \(T\) 可对角化。
第五步：几何意义：\(T\) 把每个单项式按其次数缩放，次数就是特征值。` },

{ id:'LA08-75', ch:8, type:'计算', diff:5, tags:'同构 求值映射 逆像 范德蒙德',
  q: String.raw`设 \(V=\mathbb R[x]_2\)（次数不超过 \(2\)），定义 \(\varphi:V\to\mathbb R^{3}\)，\(\varphi(f)=(f(-1),f(0),f(1))^{T}\)。(1) 证明 \(\varphi\) 是同构；(2) 求 \(\varphi^{-1}(0,1,0)^{T}\)。`,
  a: String.raw`(2) \(\varphi^{-1}(0,1,0)^{T}=1-x^{2}\)，其坐标为 \((1,0,-1)^{T}\)。`,
  sol: String.raw`第一步：\(\varphi\) 是线性映射，因为求值运算保持线性组合。
第二步：设 \(f=a+bx+cx^{2}\)，则 \(\varphi(f)=(a-b+c,\ a,\ a+b+c)^{T}\)，其矩阵为 \(\begin{pmatrix}1&-1&1\\1&0&0\\1&1&1\end{pmatrix}\)。
第三步：该矩阵的行列式为 \(2\neq0\)，故 \(\varphi\) 是同构（单射且维数相同）。
第四步：解 \(f(-1)=0,\ f(0)=1,\ f(1)=0\)，得 \(a=1,\ b=0,\ c=-1\)，即 \(f=1-x^{2}\)。
第五步：验算 \(f(-1)=0,\ f(0)=1,\ f(1)=0\)，坐标为 \((1,0,-1)^{T}\)。` },

{ id:'LA08-76', ch:8, type:'证明', diff:5, tags:'同构 线性无关 维数 基',
  q: String.raw`设 \(\varphi:V\to W\) 是同构，\(\alpha_1,\dots,\alpha_k\in V\)。证明 \(\alpha_1,\dots,\alpha_k\) 线性无关当且仅当 \(\varphi(\alpha_1),\dots,\varphi(\alpha_k)\) 线性无关；并证明 \(\dim V=\dim W\)。`,
  a: String.raw`结论成立：同构保持线性无关性、基与维数，特别地 \(\dim V=\dim W\)。`,
  sol: String.raw`第一步：设 \(\sum c_i\varphi(\alpha_i)=0\)，由 \(\varphi\) 线性得 \(\varphi\left(\sum c_i\alpha_i\right)=0\)。
第二步：\(\varphi\) 是单射且 \(\varphi(0)=0\)，故 \(\sum c_i\alpha_i=0\)；若 \(\alpha_i\) 线性无关则所有 \(c_i=0\)，故像也线性无关。
第三步：反之若像线性无关，设 \(\sum c_i\alpha_i=0\)，则 \(\sum c_i\varphi(\alpha_i)=0\)，故所有 \(c_i=0\)。
第四步：取 \(V\) 的一组基，其像线性无关且张成 \(W\)（因 \(\varphi\) 满射），故像构成 \(W\) 的基。
第五步：于是 \(\dim V=\dim W\)，且同构保持线性无关性、基与维数。` },

{ id:'LA08-77', ch:8, type:'计算', diff:5, tags:'线性映射空间 维数 基 矩阵单位',
  q: String.raw`设 \(\dim V=n,\ \dim W=m\)，\(V\) 的基为 \(\varepsilon_1,\dots,\varepsilon_n\)，\(W\) 的基为 \(\eta_1,\dots,\eta_m\)。证明 \(\dim\operatorname{Hom}(V,W)=mn\)，并写出一组基。`,
  a: String.raw`基为 \(E_{ij}\ (1\le i\le m,\ 1\le j\le n)\)，其中 \(E_{ij}\varepsilon_j=\eta_i\)，\(E_{ij}\varepsilon_k=0\ (k\neq j)\)；故维数为 \(mn\)。`,
  sol: String.raw`第一步：每个 \(T\in\operatorname{Hom}(V,W)\) 由它在基向量上的像唯一决定。
第二步：设有 \(T\varepsilon_j=\sum a_{ij}\eta_i\)，则 \(T\mapsto A=(a_{ij})\) 是到 \(M_{m\times n}(F)\) 的双射。
第三步：\(E_{ij}\) 对应的矩阵是 \((i,j)\) 位置为 \(1\)、其余为 \(0\) 的矩阵，它们构成 \(M_{m\times n}\) 的基。
第四步：双射保持线性结构（对应矩阵的加法与数乘），故 \(\dim\operatorname{Hom}(V,W)=mn\)。
第五步：特别地取 \(W=F\) 得 \(\dim V^{*}=n\)，与 \(V\) 维数相同。` },

{ id:'LA08-78', ch:8, type:'证明', diff:5, tags:'同构 线性映射空间 矩阵表示',
  q: String.raw`设 \(\dim V=n,\ \dim W=m\)。证明 \(\operatorname{Hom}(V,W)\) 与 \(M_{m\times n}(F)\) 同构。`,
  a: String.raw`结论成立；同构由"取定两组基后取矩阵"给出。`,
  sol: String.raw`第一步：固定 \(V\) 的基与 \(W\) 的基，定义 \(\Phi:\operatorname{Hom}(V,W)\to M_{m\times n}(F)\)，\(\Phi(T)\) 为 \(T\) 在该组基下的矩阵。
第二步：\(\Phi\) 线性：\((S+T)\) 的矩阵等于两矩阵之和，\((kT)\) 的矩阵等于矩阵的数乘。
第三步：\(\Phi\) 是单射：若矩阵为零，则 \(T\) 在每个基向量上取零，故 \(T=0\)。
第四步：\(\Phi\) 是满射：任给矩阵 \(A=(a_{ij})\)，令 \(T\varepsilon_j=\sum a_{ij}\eta_i\) 并线性延拓，则 \(T\) 的矩阵正是 \(A\)。
第五步：故 \(\Phi\) 是同构；注意它依赖两组基的选取，换基相当于左乘、右乘可逆矩阵。` },

{ id:'LA08-79', ch:8, type:'计算', diff:5, tags:'同构 矩阵 逆像 插值',
  q: String.raw`设 \(V=\mathbb R[x]_2\)，\(\varphi(f)=(f(0),f(1),f(2))^{T}\)。(1) 求 \(\varphi\) 在基 \(1,x,x^{2}\) 与 \(\mathbb R^{3}\) 标准基下的矩阵 \(A\)；(2) 求 \(\varphi^{-1}(1,0,0)^{T}\)。`,
  a: String.raw`\(A=\begin{pmatrix}1&0&0\\1&1&1\\1&2&4\end{pmatrix}\)；\(\varphi^{-1}(1,0,0)^{T}=\frac{1}{2}x^{2}-\frac{3}{2}x+1\)，坐标为 \((1,-\frac{3}{2},\frac{1}{2})^{T}\)。`,
  sol: String.raw`第一步：\(\varphi(1)=(1,1,1)^{T},\ \varphi(x)=(0,1,2)^{T},\ \varphi(x^{2})=(0,1,4)^{T}\)，按列排得 \(A\)。
第二步：\(|A|=1\cdot(1\cdot4-1\cdot2)=2\neq0\)，故 \(\varphi\) 是同构。
第三步：解 \(f(0)=1,\ f(1)=0,\ f(2)=0\)，即 \(f\) 以 \(1,2\) 为零点且 \(f(0)=1\)。
第四步：设 \(f=c(x-1)(x-2)\)，由 \(f(0)=2c=1\) 得 \(c=\frac{1}{2}\)，故 \(f=\frac{1}{2}x^{2}-\frac{3}{2}x+1\)。
第五步：坐标为 \((1,-\frac{3}{2},\frac{1}{2})^{T}\)，与解线性方程组 \(Ax=(1,0,0)^{T}\) 一致。` },

{ id:'LA08-80', ch:8, type:'证明', diff:5, tags:'对偶空间 同构 依赖基 自然性',
  q: String.raw`设 \(V\) 是 \(n\) 维线性空间。证明 \(V\cong V^{*}\)，并举例说明这个同构依赖基的选取（即不同的基给出不同的同构）。`,
  a: String.raw`结论成立；例如一维空间中取 \(e\mapsto f\)（\(f(e)=1\)）与取 \(e\mapsto 2f\) 是两个不同的同构。`,
  sol: String.raw`第一步：\(\dim V^{*}=\dim V=n\)，而有限维线性空间同构当且仅当维数相同，故 \(V\cong V^{*}\)。
第二步：具体构造：取基 \(\varepsilon_1,\dots,\varepsilon_n\) 与对偶基 \(f_1,\dots,f_n\)，令 \(\varepsilon_i\mapsto f_i\) 并线性延拓。
第三步：若把基换成 \(\varepsilon_1'=2\varepsilon_1,\varepsilon_2,\dots,\varepsilon_n\)，则对偶基的第一个元素变为 \(\frac{1}{2}f_1\)。
第四步：于是同一向量 \(\varepsilon_1\) 在新同构下对应 \(\frac{1}{2}f_1\) 而非 \(f_1\)，两次同构不同。
第五步：故不存在只依赖 \(V\) 本身、与基无关的同构 \(V\to V^{*}\)；而 \(V\to V^{**}\) 的自然同构没有这个问题。` },

{ id:'LA08-81', ch:8, type:'计算', diff:5, tags:'核与像 维数定理 线性方程组',
  q: String.raw`设 \(T:\mathbb R^{4}\to\mathbb R^{3}\)，\(T(x_1,x_2,x_3,x_4)^{T}=(x_1+x_2,\ x_2+x_3,\ x_3+x_4)^{T}\)。求 \(\operatorname{rank}T\)、\(\operatorname{nullity}T\)、\(\ker T\) 的一组基与 \(\operatorname{Im}T\) 的一组基。`,
  a: String.raw`\(\operatorname{rank}T=3,\ \operatorname{nullity}T=1\)；\(\ker T=\operatorname{span}\{(1,-1,1,-1)^{T}\}\)；\(\operatorname{Im}T=\mathbb R^{3}\)，基可取 \((1,0,0)^{T},(1,1,0)^{T},(0,1,1)^{T}\)。`,
  sol: String.raw`第一步：写出矩阵 \(A=\begin{pmatrix}1&1&0&0\\0&1&1&0\\0&0&1&1\end{pmatrix}\)，它已是阶梯形，三个非零行线性无关，故 \(\operatorname{rank}T=3\)。
第二步：由维数定理 \(\operatorname{nullity}T=4-3=1\)。
第三步：解 \(Ax=0\)：由 \(x_3+x_4=0,\ x_2+x_3=0,\ x_1+x_2=0\) 得 \(x_2=-x_1,\ x_3=x_1,\ x_4=-x_1\)，故 \(\ker T=\operatorname{span}\{(1,-1,1,-1)^{T}\}\)。
第四步：\(\operatorname{Im}T\) 由四列张成：\((1,0,0)^{T},(1,1,0)^{T},(0,1,1)^{T},(0,0,1)^{T}\)；前三列行列式为 \(1\neq0\)。
第五步：故 \(\operatorname{Im}T=\mathbb R^{3}\)，该三列即为像的一组基，注意 \(T\) 不满秩但仍满射（\(4\to3\)）。` },

{ id:'LA08-82', ch:8, type:'证明', diff:5, tags:'像空间链 维数定理 直和 核',
  q: String.raw`设 \(T\) 是 \(n\) 维线性空间 \(V\) 上的线性变换。证明 \(\operatorname{Im}T^{2}\subseteq\operatorname{Im}T\)，且 \(\dim\operatorname{Im}T^{2}=\dim\operatorname{Im}T-\dim(\ker T\cap\operatorname{Im}T)\)，并由此证明 \(\operatorname{Im}T^{2}=\operatorname{Im}T\) 当且仅当 \(V=\ker T\oplus\operatorname{Im}T\)。`,
  a: String.raw`结论成立：\(\dim\operatorname{Im}T^{2}=\dim\operatorname{Im}T-\dim(\ker T\cap\operatorname{Im}T)\)，故 \(\operatorname{Im}T^{2}=\operatorname{Im}T\iff V=\ker T\oplus\operatorname{Im}T\)。`,
  sol: String.raw`第一步：若 \(y=T^{2}x\)，则 \(y=T(Tx)\in\operatorname{Im}T\)，故 \(\operatorname{Im}T^{2}\subseteq\operatorname{Im}T\)。
第二步：把 \(T\) 限制在 \(\operatorname{Im}T\) 上得线性映射 \(T|_{\operatorname{Im}T}:\operatorname{Im}T\to V\)，其像为 \(\operatorname{Im}T^{2}\)，其核为 \(\operatorname{Im}T\cap\ker T\)。
第三步：对该限制映射用维数定理得 \(\dim\operatorname{Im}T^{2}=\dim\operatorname{Im}T-\dim(\ker T\cap\operatorname{Im}T)\)。
第四步：若 \(\operatorname{Im}T^{2}=\operatorname{Im}T\)，则由上述维数等式得 \(\ker T\cap\operatorname{Im}T=\{0\}\)，又 \(\dim\ker T+\dim\operatorname{Im}T=n\)，故 \(V=\ker T\oplus\operatorname{Im}T\)。
第五步：反之若 \(V=\ker T\oplus\operatorname{Im}T\)，则交为零，代回上述等式得 \(\dim\operatorname{Im}T^{2}=\dim\operatorname{Im}T\)，结合第一步的包含关系得 \(\operatorname{Im}T^{2}=\operatorname{Im}T\)。` },

{ id:'LA08-83', ch:8, type:'计算', diff:5, tags:'极小多项式 若尔当标准形 特征多项式 几何重数',
  q: String.raw`设 \(A=\begin{pmatrix}2&0&0\\1&2&0\\0&0&1\end{pmatrix}\)。求 \(A\) 的特征多项式、极小多项式与若尔当标准形，并判断 \(A\) 能否对角化。`,
  a: String.raw`\(f_A(t)=(t-2)^{2}(t-1)\)，极小多项式同为 \((t-2)^{2}(t-1)\)；若尔当标准形为 \(J_2(2)\oplus J_1(1)\)；\(A\) 不可对角化。`,
  sol: String.raw`第一步：\(A\) 为下三角矩阵，特征值为对角元 \(2,2,1\)，故 \(f_A(t)=(t-2)^{2}(t-1)\)。
第二步：\(A-2I=\begin{pmatrix}0&0&0\\1&0&0\\0&0&-1\end{pmatrix}\) 的秩为 \(2\)，故 \(\lambda=2\) 的几何重数为 \(3-2=1\)，只对应一个若尔当块。
第三步：\(A-I=\begin{pmatrix}1&0&0\\1&1&0\\0&0&0\end{pmatrix}\) 的秩为 \(2\)，\(\lambda=1\) 的几何重数为 \(1\)。
第四步：几何重数之和为 \(1+1=2<3\)，故 \(A\) 不可对角化，且 \(A\sim J_2(2)\oplus J_1(1)\)。
第五步：因 \(A-I\neq0\) 而 \(\lambda=2\) 的块阶为 \(2\)，极小多项式为 \((t-2)^{2}(t-1)\)，等于特征多项式。` },

{ id:'LA08-84', ch:8, type:'证明', diff:5, tags:'幂等矩阵 秩等式 幂等 充要条件',
  q: String.raw`设 \(A\) 是 \(n\) 阶方阵。证明 \(\operatorname{rank}A+\operatorname{rank}(A-I)=n\) 当且仅当 \(A^{2}=A\)。`,
  a: String.raw`结论成立：\(A^{2}=A\iff\operatorname{Im}A\cap\operatorname{Im}(I-A)=\{0\}\iff\operatorname{rank}A+\operatorname{rank}(A-I)=n\)。`,
  sol: String.raw`第一步：对任意 \(x\) 有 \(x=Ax+(I-A)x\)，其中 \(Ax\in\operatorname{Im}A\)，\((I-A)x\in\operatorname{Im}(I-A)\)，故 \(\operatorname{Im}A+\operatorname{Im}(I-A)=F^{n}\)。
第二步：由维数公式 \(n=\operatorname{rank}A+\operatorname{rank}(I-A)-\dim(\operatorname{Im}A\cap\operatorname{Im}(I-A))\)，而 \(\operatorname{rank}(I-A)=\operatorname{rank}(A-I)\)，故恒有 \(\operatorname{rank}A+\operatorname{rank}(A-I)\ge n\)。
第三步：若 \(A^{2}=A\)，则 \(A(A-I)=0\)，故 \(\operatorname{Im}(A-I)\subseteq\ker A\)，于是 \(\operatorname{rank}(A-I)\le n-\operatorname{rank}A\)，结合上述不等式得等式成立。
第四步：反之设等式成立，则上述维数公式中交空间的维数为 \(0\)，即 \(\operatorname{Im}A\cap\operatorname{Im}(I-A)=\{0\}\)。
第五步：对任意 \(x\)，\(Ax\in\operatorname{Im}A\)，而 \(Ax-A^{2}x=(I-A)(Ax)\in\operatorname{Im}(I-A)\)，故 \(Ax-A^{2}x=0\)，即 \(A^{2}=A\)。` },

{ id:'LA08-85', ch:8, type:'证明', diff:5, tags:'幂等矩阵 直和 迹 秩 相似标准形',
  q: String.raw`设 \(A\) 是 \(n\) 阶幂等矩阵（\(A^{2}=A\)）。证明 \(V=\operatorname{Im}A\oplus\ker A\)，\(A\) 相似于 \(\operatorname{diag}(I_r,0)\)（\(r=\operatorname{rank}A\)），且 \(\operatorname{tr}A=\operatorname{rank}A\)。`,
  a: String.raw`结论成立：\(V=\operatorname{Im}A\oplus\ker A\)，\(A\sim\operatorname{diag}(I_r,0)\)，且 \(\operatorname{tr}A=r=\operatorname{rank}A\)。`,
  sol: String.raw`第一步：由 \(A^{2}=A\) 得 \(A(I-A)=0\)，故 \(\operatorname{Im}(I-A)\subseteq\ker A\)。
第二步：任意 \(x=Ax+(I-A)x\)，第一项在 \(\operatorname{Im}A\)，第二项在 \(\operatorname{Im}(I-A)\subseteq\ker A\)，故 \(V=\operatorname{Im}A+\ker A\)。
第三步：若 \(y\in\operatorname{Im}A\cap\ker A\)，设 \(y=Ax\)，则 \(y=Ax=A^{2}x=A(Ax)=Ay=0\)，故交为零，\(V=\operatorname{Im}A\oplus\ker A\)。
第四步：取 \(\operatorname{Im}A\) 的基与 \(\ker A\) 的基拼成 \(V\) 的基；\(A\) 在 \(\operatorname{Im}A\) 上为恒等（因 \(A(Ax)=Ax\)），在 \(\ker A\) 上为零，故矩阵为 \(\operatorname{diag}(I_r,0)\)，其中 \(r=\dim\operatorname{Im}A=\operatorname{rank}A\)。
第五步：于是 \(\operatorname{tr}A=r=\operatorname{rank}A\)。` },

{ id:'LA08-86', ch:8, type:'证明', diff:4, tags:'过渡矩阵 可逆 坐标变换 基',
  q: String.raw`设 \(\alpha_1,\dots,\alpha_n\) 与 \(\beta_1,\dots,\beta_n\) 是 \(V\) 的两组基，\(\beta_j=\sum_{i=1}^{n}a_{ij}\alpha_i\)。证明矩阵 \(A=(a_{ij})\) 可逆，且 \(A^{-1}\) 恰是反方向的过渡矩阵。`,
  a: String.raw`结论成立：过渡矩阵 \(A\) 必可逆，且 \(A^{-1}\) 恰是反方向的过渡矩阵。`,
  sol: String.raw`第一步：设 \(c=(c_1,\dots,c_n)^{T}\)，则 \(\sum_j c_j\beta_j=\sum_i\left(\sum_j a_{ij}c_j\right)\alpha_i\)。
第二步：若 \(Ac=0\)，则上式右边为 \(0\)，由 \(\beta_1,\dots,\beta_n\) 线性无关得 \(c=0\)，故 \(A\) 的列线性无关，\(A\) 可逆。
第三步：把 \(\alpha_i=\sum_j b_{ji}\beta_j\) 写成矩阵形式并代入 \(\beta_j\) 的表达式，得 \(BA=I\)。
第四步：由 \(A\) 可逆知 \(B=A^{-1}\)，即反方向的过渡矩阵就是 \(A^{-1}\)。
第五步：这说明两组基之间的坐标变换互为逆变换，可逆性正是"换基不丢信息"的代数表述。` },

{ id:'LA08-87', ch:8, type:'计算', diff:5, tags:'特征值 迹 相似不变量 特征多项式',
  q: String.raw`设 \(A\) 是 \(3\) 阶复矩阵，\(\operatorname{tr}A=6,\ \operatorname{tr}(A^{2})=14,\ |A|=6\)。求 \(A\) 的特征值与特征多项式，并判断 \(A\) 能否对角化。`,
  a: String.raw`特征值为 \(1,2,3\)，\(f_A(t)=t^{3}-6t^{2}+11t-6\)；特征值互不相同，故 \(A\) 可对角化，相似于 \(\operatorname{diag}(1,2,3)\)。`,
  sol: String.raw`第一步：设特征值为 \(\lambda_1,\lambda_2,\lambda_3\)，则 \(\operatorname{tr}A=\lambda_1+\lambda_2+\lambda_3=6\)，\(|A|=\lambda_1\lambda_2\lambda_3=6\)。
第二步：\(A^{2}\) 的特征值为 \(\lambda_i^{2}\)，故 \(\lambda_1^{2}+\lambda_2^{2}+\lambda_3^{2}=14\)。
第三步：由 \((\sum\lambda_i)^{2}=\sum\lambda_i^{2}+2\sum_{i<j}\lambda_i\lambda_j\) 得 \(\sum_{i<j}\lambda_i\lambda_j=(36-14)/2=11\)。
第四步：故 \(f_A(t)=t^{3}-6t^{2}+11t-6=(t-1)(t-2)(t-3)\)，特征值为 \(1,2,3\)。
第五步：三个特征值互不相同，对应特征向量线性无关，故 \(A\) 可对角化。` },

{ id:'LA08-88', ch:8, type:'证明', diff:5, tags:'商空间 维数 诱导映射 核',
  q: String.raw`设 \(W\le V\)。证明 \(\dim(V/W)=\dim V-\dim W\)；并证明若线性映射 \(f:V\to U\) 满足 \(W\subseteq\ker f\)，则存在唯一的线性映射 \(\bar f:V/W\to U\) 使 \(\bar f(v+W)=f(v)\)。`,
  a: String.raw`结论成立：\(\dim(V/W)=\dim V-\dim W\)，且满足 \(W\subseteq\ker f\) 的 \(f\) 都能唯一地下降到商空间上。`,
  sol: String.raw`第一步：取 \(W\) 的基 \(\varepsilon_1,\dots,\varepsilon_k\) 并扩充为 \(V\) 的基 \(\varepsilon_1,\dots,\varepsilon_n\)。
第二步：商类 \(\varepsilon_{k+1}+W,\dots,\varepsilon_n+W\) 张成 \(V/W\)：把 \(v\) 按基展开，前 \(k\) 项落在 \(W\) 中。
第三步：它们线性无关：若 \(\sum_{i>k}c_i\varepsilon_i\in W\)，则该向量可由前 \(k\) 个基向量表示，由基的唯一性得所有 \(c_i=0\)。
第四步：故 \(\dim(V/W)=n-k=\dim V-\dim W\)。
第五步：定义 \(\bar f(v+W)=f(v)\)：若 \(v_1+W=v_2+W\)，则 \(v_1-v_2\in W\subseteq\ker f\)，故 \(f(v_1)=f(v_2)\)，定义良好；线性性由 \(f\) 的线性直接得到，唯一性由每个商类都必须映到代表元的像。` },

{ id:'LA08-89', ch:8, type:'计算', diff:5, tags:'若尔当标准形 特征向量 几何重数 特征值',
  q: String.raw`设 \(A=\begin{pmatrix}-1&1&0\\-4&3&0\\3&-1&2\end{pmatrix}\)。求 \(A\) 的特征值、特征向量与若尔当标准形。`,
  a: String.raw`特征值 \(2,1,1\)；\(\lambda=2\) 的特征向量为 \(\operatorname{span}\{(0,0,1)^{T}\}\)，\(\lambda=1\) 的特征向量为 \(\operatorname{span}\{(-1,-2,1)^{T}\}\)；若尔当标准形为 \(J_1(2)\oplus J_2(1)\)。`,
  sol: String.raw`第一步：\(|tI-A|=\begin{vmatrix}t+1&-1&0\\4&t-3&0\\-3&1&t-2\end{vmatrix}=(t-2)\left[(t+1)(t-3)+4\right]=(t-2)(t-1)^{2}\)。
第二步：\(\lambda=2\) 时解 \((A-2I)x=0\)，得特征向量 \((0,0,1)^{T}\)。
第三步：\(\lambda=1\) 时 \(A-I=\begin{pmatrix}-2&1&0\\-4&2&0\\3&-1&1\end{pmatrix}\) 的秩为 \(2\)，解得特征向量 \((-1,-2,1)^{T}\)，几何重数为 \(1\)。
第四步：几何重数 \(1\) 小于代数重数 \(2\)，故 \(A\) 不相似于对角阵，\(\lambda=1\) 对应一个二阶若尔当块。
第五步：\((A-I)^{2}\) 的秩为 \(1\)，幂零部分 \(A-I\) 在特征子空间上的指数为 \(2\)，故 \(A\sim J_1(2)\oplus J_2(1)\)。` },

{ id:'LA08-90', ch:8, type:'证明', diff:5, tags:'相似 矩阵表示 过渡矩阵 线性变换',
  q: String.raw`设 \(T\) 是 \(V\) 上的线性变换，\(\alpha\) 与 \(\beta\) 是 \(V\) 的两组基。证明 \(T\) 在两组基下的矩阵相似；反之若 \(n\) 阶矩阵 \(A,B\) 相似，则存在 \(V\) 上的线性变换 \(T\) 及两组基，使 \(T\) 在这两组基下的矩阵分别为 \(A\) 与 \(B\)。`,
  a: String.raw`结论成立：\(B=P^{-1}AP\)；反之相似矩阵是同一线性变换在两组基下的矩阵。`,
  sol: String.raw`第一步：设 \(T\) 在 \(\alpha\) 下的矩阵为 \(A\)，在 \(\beta\) 下的矩阵为 \(B\)，\(P\) 为从 \(\alpha\) 到 \(\beta\) 的过渡矩阵。
第二步：由坐标变换 \((T)_{\beta}=P^{-1}(T)_{\alpha}P\) 得 \(B=P^{-1}AP\)，故 \(A\sim B\)。
第三步：反之设 \(B=P^{-1}AP\) 且 \(P\) 可逆。取基 \(\alpha_1,\dots,\alpha_n\)，令 \(T\alpha_j=\sum_i a_{ij}\alpha_i\)，则 \(T\) 在 \(\alpha\) 下的矩阵为 \(A\)。
第四步：令 \(\beta_j=\sum_i p_{ij}\alpha_i\)，由 \(P\) 可逆知 \(\beta\) 也是基。
第五步：把 \(T\) 用新基表示，坐标变换给出其矩阵为 \(P^{-1}AP=B\)，故相似矩阵恰是同一变换在不同基下的表示。` },

{ id:'LA08-91', ch:8, type:'计算', diff:4, tags:'交换子 中心化子 若尔当块 多项式',
  q: String.raw`设 \(A=\begin{pmatrix}1&1\\0&1\end{pmatrix}\)，求所有满足 \(AX=XA\) 的二阶矩阵 \(X\)，并写出该集合的维数。`,
  a: String.raw`\(X=\begin{pmatrix}a&b\\0&a\end{pmatrix}=aI+b(A-I)\)，维数为 \(2\)。`,
  sol: String.raw`第一步：设 \(X=\begin{pmatrix}p&q\\r&s\end{pmatrix}\)，则 \(AX=\begin{pmatrix}p+r&q+s\\r&s\end{pmatrix}\)，\(XA=\begin{pmatrix}p&p+q\\r&r+s\end{pmatrix}\)。
第二步：比较第一行第一列得 \(p+r=p\)，即 \(r=0\)；比较第一行第二列得 \(q+s=p+q\)，即 \(s=p\)。
第三步：其余位置的条件自动满足，故 \(X=\begin{pmatrix}p&q\\0&p\end{pmatrix}=pI+q(A-I)\)。
第四步：故交换子空间由 \(I\) 与 \(A-I\) 张成，维数为 \(2\)。
第五步：一般地，与 \(J_n(\lambda)\) 交换的矩阵恰是 \(I,(A-\lambda I),\dots,(A-\lambda I)^{n-1}\) 的多项式，维数为 \(n\)。` },

{ id:'LA08-92', ch:8, type:'计算', diff:5, tags:'矩阵空间 线性变换 核与像 可逆性',
  q: String.raw`设 \(V=M_2(\mathbb R)\)，\(P=\operatorname{diag}(1,2),\ Q=\operatorname{diag}(2,3)\)，\(T(X)=PX-XQ\)。(1) 求 \(T\) 在基 \(E_{11},E_{12},E_{21},E_{22}\) 下的矩阵；(2) 求 \(\ker T\) 与 \(\dim\operatorname{Im}T\)；(3) 判断 \(T\) 是否可逆。`,
  a: String.raw`(1) 矩阵为 \(\operatorname{diag}(-1,-2,0,-1)\)；(2) \(\ker T=\operatorname{span}\{E_{21}\}\)，维数 \(1\)，\(\dim\operatorname{Im}T=3\)；(3) \(T\) 不可逆。`,
  sol: String.raw`第一步：\(T(E_{11})=PE_{11}-E_{11}Q=E_{11}-2E_{11}=-E_{11}\)。
第二步：\(T(E_{12})=PE_{12}-E_{12}Q=E_{12}-3E_{12}=-2E_{12}\)；\(T(E_{22})=2E_{22}-3E_{22}=-E_{22}\)。
第三步：\(T(E_{21})=PE_{21}-E_{21}Q=2E_{21}-2E_{21}=0\)。
第四步：按基序排得矩阵 \(\operatorname{diag}(-1,-2,0,-1)\)，故 \(\ker T=\operatorname{span}\{E_{21}\}\)，维数 \(1\)。
第五步：由维数定理 \(\dim\operatorname{Im}T=4-1=3\)，\(T\) 不满秩，不可逆。` },

{ id:'LA08-93', ch:8, type:'证明', diff:5, tags:'不变子空间 补空间 反例 若尔当块',
  q: String.raw`设 \(A=\begin{pmatrix}1&1\\0&1\end{pmatrix}\)，\(W=\operatorname{span}\{(1,0)^{T}\}\)。证明 \(W\) 是 \(A\)-不变子空间，但不存在 \(A\)-不变子空间 \(U\) 使 \(\mathbb R^{2}=W\oplus U\)。`,
  a: String.raw`结论成立：一维 \(A\)-不变子空间只有 \(W\) 本身，故不存在不变的补空间。`,
  sol: String.raw`第一步：\(A(1,0)^{T}=(1,0)^{T}\in W\)，故 \(W\) 不变。
第二步：反设存在不变的补空间 \(U\)，则 \(\dim U=1\)，设 \(U=\operatorname{span}\{v\}\)，\(v=(c,d)^{T}\)。
第三步：\(W\oplus U\) 要求 \(v\notin W\)，即 \(d\neq0\)。
第四步：\(U\) 不变要求 \(Av=(c+d,\ d)^{T}\) 与 \(v\) 共线；比较第二分量得比例系数为 \(1\)，故 \(c+d=c\)，即 \(d=0\)，矛盾。
第五步：故不存在不变的补空间，这说明一般线性变换未必"半单"，\(J_2(1)\) 不能拆成两个一维不变块的直和。` },

{ id:'LA08-94', ch:8, type:'计算', diff:5, tags:'旋转 特征多项式 极小多项式 幂等组合',
  q: String.raw`设 \(T\) 是平面上绕原点旋转 \(90^{\circ}\) 的变换。(1) 写出 \(T\) 的矩阵 \(A\)；(2) 求特征多项式与极小多项式；(3) 证明 \(I+T+T^{2}+T^{3}=0\)，并用 \(x^{4}-1\) 的分解说明它与 \((T-I)\) 的关系。`,
  a: String.raw`\(A=\begin{pmatrix}0&-1\\1&0\end{pmatrix}\)；\(f_T(t)=t^{2}+1\)，极小多项式也是 \(t^{2}+1\)；\(T^{4}=I\) 且 \(I+T+T^{2}+T^{3}=0\)。`,
  sol: String.raw`第一步：\(T(1,0)^{T}=(0,1)^{T}\)，\(T(0,1)^{T}=(-1,0)^{T}\)，按列得 \(A\)。
第二步：\(|tI-A|=t^{2}+1\)，在实数域上无根，故 \(T\) 没有实特征值。
第三步：\(A^{2}=-I\neq I\)，故 \(t^{2}+1\) 的真因子 \(1,\ t-1,\ t+1\) 都不能零化 \(A\)，极小多项式为 \(t^{2}+1\)。
第四步：由 \(A^{2}=-I\) 得 \(A^{3}=-A\)，故 \(I+A+A^{2}+A^{3}=I+A-I-A=0\)。
第五步：又 \(A^{4}=I\)，而 \(x^{4}-1=(x-1)(1+x+x^{2}+x^{3})\)，代入 \(x=T\) 得 \((T-I)(I+T+T^{2}+T^{3})=0\)；本例中 \(T-I\) 可逆，故第二个因子必为零。` },

{ id:'LA08-95', ch:8, type:'计算', diff:5, tags:'多项式空间 对称变换 对角化 极小多项式',
  q: String.raw`设 \(V=\mathbb R[x]_3\)（次数小于 \(3\)），\(T(f)=f(1-x)\)。(1) 求 \(T\) 在基 \(1,x,x^{2}\) 下的矩阵 \(A\)；(2) 求特征值、极小多项式；(3) 判断 \(T\) 能否对角化。`,
  a: String.raw`\(A=\begin{pmatrix}1&1&1\\0&-1&-2\\0&0&1\end{pmatrix}\)；特征值 \(1,1,-1\)，极小多项式 \((t-1)(t+1)\)；\(T\) 可对角化。`,
  sol: String.raw`第一步：\(T(1)=1\)，\(T(x)=1-x\)，\(T(x^{2})=(1-x)^{2}=1-2x+x^{2}\)，按列排得 \(A\)。
第二步：\(A\) 为上三角矩阵，特征值为 \(1,1,-1\)。
第三步：\(A-I\) 的秩为 \(1\)，故 \(\lambda=1\) 的几何重数为 \(2\)；\(A+I\) 的秩为 \(2\)，故 \(\lambda=-1\) 的几何重数为 \(1\)。
第四步：几何重数之和为 \(3\)，等于空间维数，故 \(T\) 可对角化，特征向量在两组值上分别取值。
第五步：\(A^{2}=I\)，故极小多项式整除 \(t^{2}-1\)；又 \(A\neq I\) 且 \(A\neq-I\)，故极小多项式为 \((t-1)(t+1)\)。` },

{ id:'LA08-96', ch:8, type:'计算', diff:5, tags:'循环置换 矩阵幂 哈密顿-凯莱 实数域对角化',
  q: String.raw`设 \(A=\begin{pmatrix}0&1&0\\0&0&1\\1&0&0\end{pmatrix}\)。求 \(A^{n}\) 的一般表达式与 \(A^{100}\)，并说明 \(A\) 在实数域上能否对角化。`,
  a: String.raw`\(A^{3}=I\)，故 \(A^{n}=A^{r}\)（\(r\) 为 \(n\) 除以 \(3\) 的余数，\(r=0\) 时为单位阵）；\(A^{100}=A\)；\(f_A(t)=t^{3}-1\)，\(A\) 在实数域上不可对角化。`,
  sol: String.raw`第一步：直接计算 \(A^{2}=\begin{pmatrix}0&0&1\\1&0&0\\0&1&0\end{pmatrix}\)，\(A^{3}=I\)。
第二步：故 \(A^{n}=A^{r}\)，其中 \(r\) 是 \(n\) 除以 \(3\) 的余数；\(100=3\times33+1\)，得 \(A^{100}=A\)。
第三步：\(A\) 的特征多项式为 \(t^{3}-1=(t-1)(t^{2}+t+1)\)，极小多项式等于特征多项式。
第四步：\(t^{2}+t+1\) 在实数域上不可约，其根为复的 \(3\) 次单位根，故 \(A\) 只有 \(1\) 这个实特征值。
第五步：\(\ker(A-I)\) 的维数为 \(1\)，几何重数之和不足 \(3\)，故 \(A\) 在 \(\mathbb R\) 上不可对角化，但在 \(\mathbb C\) 上相似于 \(\operatorname{diag}(1,\omega,\bar\omega)\)。` },

{ id:'LA08-97', ch:8, type:'证明', diff:5, tags:'张量 秩 矩阵映射 外积',
  q: String.raw`设 \(A,B\) 是 \(n\) 阶矩阵，\(T:M_n(F)\to M_n(F)\)，\(T(X)=AXB\)。证明 \(\operatorname{rank}T=\operatorname{rank}A\cdot\operatorname{rank}B\)。`,
  a: String.raw`结论成立：\(\operatorname{rank}T=\operatorname{rank}A\cdot\operatorname{rank}B\)。`,
  sol: String.raw`第一步：记 \(u_i\) 为 \(A\) 的第 \(i\) 列，\(v_j\) 为 \(B\) 的第 \(j\) 行，\(E_{ij}\) 为矩阵单位。
第二步：\(T(E_{ij})=AE_{ij}B=u_iv_j^{T}\)，故 \(\operatorname{Im}T\) 由全部 \(u_iv_j^{T}\) 张成。
第三步：取 \(u_1,\dots,u_n\) 中极大无关组 \(x_1,\dots,x_r\)（\(r=\operatorname{rank}A\)），\(v_1,\dots,v_n\) 的极大无关组 \(y_1,\dots,y_s\)（\(s=\operatorname{rank}B\)）。
第四步：展开 \(u_i=\sum\alpha_{ip}x_p\)、\(v_j=\sum\beta_{jq}y_q\)，得 \(u_iv_j^{T}=\sum_{p,q}\alpha_{ip}\beta_{jq}x_py_q^{T}\)，故所有外积 \(x_py_q^{T}\) 张成 \(\operatorname{Im}T\)。
第五步：这 \(rs\) 个外积线性无关（若 \(\sum c_{pq}x_py_q^{T}=0\)，取分离 \(y_q\) 下标的向量 \(z\) 与 \(y_qz=\delta_{qq'}\)，右乘 \(z\) 得 \(\sum_p c_{pq'}x_p=0\)，由 \(x_p\) 无关得 \(c_{pq'}=0\)），故 \(\operatorname{rank}T=rs=\operatorname{rank}A\cdot\operatorname{rank}B\)。` },

{ id:'LA08-98', ch:8, type:'证明', diff:5, tags:'哈密顿-凯莱 逆矩阵 多项式 常数项',
  q: String.raw`设 \(A\) 是可逆的 \(n\) 阶矩阵，\(f_A(t)=t^{n}+c_{n-1}t^{n-1}+\cdots+c_1t+c_0\)。证明 \(A^{-1}\) 是 \(A\) 的多项式，并写出表达式。`,
  a: String.raw`\(A^{-1}=-\frac{1}{c_0}\left(A^{n-1}+c_{n-1}A^{n-2}+\cdots+c_1I\right)\)，其中 \(c_0=(-1)^{n}|A|\)。`,
  sol: String.raw`第一步：由哈密顿-凯莱定理 \(A^{n}+c_{n-1}A^{n-1}+\cdots+c_1A+c_0I=0\)。
第二步：特征多项式常数项 \(c_0=f_A(0)=(-1)^{n}|A|\)，因 \(A\) 可逆，\(c_0\neq0\)。
第三步：在第一步的等式中各项左乘 \(A^{-1}\)，得 \(A^{n-1}+c_{n-1}A^{n-2}+\cdots+c_1I+c_0A^{-1}=0\)。
第四步：移项并除以 \(c_0\) 得 \(A^{-1}=-\frac{1}{c_0}\left(A^{n-1}+c_{n-1}A^{n-2}+\cdots+c_1I\right)\)，右边是 \(A\) 的多项式。
第五步：于是与 \(A\) 可交换的矩阵也与 \(A^{-1}\) 可交换，这为"可逆矩阵属于 \(A\) 的多项式代数"提供了直接证据。` },

{ id:'LA08-99', ch:8, type:'计算', diff:5, tags:'若尔当块 幂零指标 秩 极小多项式',
  q: String.raw`设 \(J=J_4(1)\) 是 \(4\) 阶若尔当块。求 \(\operatorname{rank}(J-I)^{k}\ (k=1,2,3,4)\)，并写出 \(J\) 的极小多项式与特征多项式。`,
  a: String.raw`\(\operatorname{rank}(J-I)^{k}=4-k\ (k\le4)\)，即 \(3,2,1,0\)；极小多项式与特征多项式均为 \((t-1)^{4}\)。`,
  sol: String.raw`第一步：记 \(N=J-I\)，则 \(N\) 的 \((i,i+1)\) 元为 \(1\)、其余为 \(0\)，是标准幂零块。
第二步：\(N^{k}\) 只在第 \(k\) 条超对角线上为 \(1\)，故 \(\operatorname{rank}N^{k}=4-k\ (k\le4)\)，且 \(N^{4}=0\)。
第三步：故 \(\operatorname{rank}(J-I)=3\)，几何重数为 \(4-3=1\)，只有一个若尔当块。
第四步：\(J\) 为上三角且对角元全为 \(1\)，特征多项式为 \((t-1)^{4}\)。
第五步：因 \((J-I)^{3}=N^{3}\neq0\)，极小多项式不能低于 \((t-1)^{4}\)，故它等于特征多项式。` },

{ id:'LA08-100', ch:8, type:'计算', diff:5, tags:'若尔当标准形 极小多项式 特征多项式 几何重数',
  q: String.raw`设 \(T\) 是 \(4\) 维复线性空间 \(V\) 上的线性变换，极小多项式为 \((t-1)^{2}\)，特征多项式为 \((t-1)^{4}\)。求 \(T\) 所有可能的若尔当标准形，并说明如何用 \(\operatorname{rank}(T-I)\) 区分它们。`,
  a: String.raw`只有两种：\(J_2(1)\oplus J_2(1)\)（\(\operatorname{rank}(T-I)=2\)）与 \(J_2(1)\oplus J_1(1)\oplus J_1(1)\)（\(\operatorname{rank}(T-I)=1\)）。`,
  sol: String.raw`第一步：唯一特征值为 \(1\)，故 \(T\) 相似于若干 \(J_k(1)\) 的直和，块阶之和为 \(4\)。
第二步：极小多项式 \((t-1)^{2}\) 说明最大块阶数为 \(2\)，故每块只能是 \(1\) 阶或 \(2\) 阶，且至少有一个 \(2\) 阶块。
第三步：把 \(4\) 写成含 \(2\) 的 \(1,2\) 之和：只有 \(2+2\) 与 \(2+1+1\) 两种。
第四步：\(2\) 阶块对 \(\operatorname{rank}(T-I)\) 贡献 \(1\)，\(1\) 阶块贡献 \(0\)；故 \(2+2\) 时秩为 \(2\)，\(2+1+1\) 时秩为 \(1\)。
第五步：于是几何重数分别为 \(4-2=2\) 与 \(4-1=3\)，可用来区分两种若尔当形。` }
);
