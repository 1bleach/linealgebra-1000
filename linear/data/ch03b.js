window.LBANK = window.LBANK || [];
window.LBANK.push(
{ id:'LA03-21', ch:3, type:'计算', diff:5, tags:'极大无关组 秩 线性表示',
  q: String.raw`求向量组 \(\alpha_1=(1,1,0,0)^T,\ \alpha_2=(0,1,1,0)^T,\ \alpha_3=(0,0,1,1)^T,\ \alpha_4=(1,0,0,1)^T,\ \alpha_5=(1,2,3,4)^T\) 的秩和一个极大线性无关组，并把不属于该组的向量用该组线性表示，再写出该向量组满足的一个非平凡线性关系。`,
  a: String.raw`秩为 \(4\)；\(\alpha_1,\alpha_2,\alpha_3,\alpha_5\) 是一个极大线性无关组；\(\alpha_4=\alpha_1-\alpha_2+\alpha_3\)，从而 \(\alpha_1-\alpha_2+\alpha_3-\alpha_4=0\)。`,
  sol: String.raw`以 \(\alpha_1,\dots,\alpha_5\) 为列作矩阵 \(A\)，对 \(A\) 作初等行变换：
\[
A\to\begin{pmatrix}1&0&0&1&0\\0&1&0&-1&0\\0&0&1&1&0\\0&0&0&0&1\end{pmatrix}.
\]
非零行数为 \(4\)，故 \(r(A)=4\)。主元列为第 \(1,2,3,5\) 列，所以 \(\alpha_1,\alpha_2,\alpha_3,\alpha_5\) 线性无关且为极大无关组。由第 \(4\) 列读出 \(\alpha_4=\alpha_1-\alpha_2+\alpha_3\)，移项即得非平凡关系 \(\alpha_1-\alpha_2+\alpha_3-\alpha_4=0\)。` },
{ id:'LA03-22', ch:3, type:'计算', diff:5, tags:'含参数 行列式 线性相关 极大无关组',
  q: String.raw`设 \(\alpha_1=(1,1,0,0)^T,\ \alpha_2=(0,1,1,0)^T,\ \alpha_3=(0,0,1,1)^T,\ \alpha_4=(a,0,0,1)^T\)。问 \(a\) 取何值时向量组 \(\alpha_1,\alpha_2,\alpha_3,\alpha_4\) 线性相关？在相关时写出一个非平凡线性关系，并给出一个极大线性无关组。`,
  a: String.raw`\(a=1\) 时线性相关，关系为 \(\alpha_1-\alpha_2+\alpha_3-\alpha_4=0\)，极大无关组为 \(\alpha_1,\alpha_2,\alpha_3\)；\(a\neq1\) 时线性无关。`,
  sol: String.raw`以四向量为列作矩阵
\[
A=\begin{pmatrix}1&0&0&a\\1&1&0&0\\0&1&1&0\\0&0&1&1\end{pmatrix}.
\]
按第一行展开得 \(|A|=1-a\)。向量组线性相关当且仅当 \(|A|=0\)，故 \(a=1\)。此时 \(\alpha_4=(1,0,0,1)^T=\alpha_1-\alpha_2+\alpha_3\)，即 \(\alpha_1-\alpha_2+\alpha_3-\alpha_4=0\)；又 \(\alpha_1,\alpha_2,\alpha_3\) 对应的三阶子式非零，故它们线性无关，构成极大无关组。当 \(a\neq1\) 时 \(|A|\neq0\)，四向量线性无关。` },
{ id:'LA03-23', ch:3, type:'计算', diff:5, tags:'多项式空间 线性相关 极大无关组',
  q: String.raw`在次数不超过 \(3\) 的多项式空间 \(P_3\) 中，设 \(p_1=1+x,\ p_2=1-x,\ p_3=x^2,\ p_4=-1+5x+x^2\)。求向量组 \(p_1,p_2,p_3,p_4\) 的秩和一个极大线性无关组，并把 \(p_4\) 用该组线性表示。`,
  a: String.raw`秩为 \(3\)；\(p_1,p_2,p_3\) 是极大线性无关组；\(p_4=2p_1-3p_2+p_3\)。`,
  sol: String.raw`取 \(P_3\) 的基 \(1,x,x^2,x^3\)，把各多项式写成坐标向量：\(p_1=(1,1,0,0)^T,\ p_2=(1,-1,0,0)^T,\ p_3=(0,0,1,0)^T,\ p_4=(-1,5,1,0)^T\)。以它们为列作矩阵并作行变换：
\[
\begin{pmatrix}1&1&0&-1\\1&-1&0&5\\0&0&1&1\\0&0&0&0\end{pmatrix}\to
\begin{pmatrix}1&0&0&2\\0&1&0&-3\\0&0&1&1\\0&0&0&0\end{pmatrix}.
\]
故秩为 \(3\)，主元列为前三列，\(p_1,p_2,p_3\) 为极大无关组，且 \(p_4=2p_1-3p_2+p_3\)。代回验证：\(2(1+x)-3(1-x)+x^2=-1+5x+x^2\)。` },
{ id:'LA03-24', ch:3, type:'计算', diff:4, tags:'矩阵空间 子空间 基 维数',
  q: String.raw`设 \(W=\{A=(a_{ij})\in M_2(\mathbb R)\mid a_{11}+a_{22}=0,\ a_{12}=a_{21}\}\)。求 \(\dim W\) 及 \(W\) 的一组基，并把该基扩充为 \(M_2(\mathbb R)\) 的一组基。`,
  a: String.raw`\(\dim W=2\)，基为 \(B_1=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\ B_2=\begin{pmatrix}0&1\\1&0\end{pmatrix}\)；再添 \(I_2,\ K=\begin{pmatrix}0&1\\-1&0\end{pmatrix}\) 即得 \(M_2(\mathbb R)\) 的一组基。`,
  sol: String.raw`\(W\) 中的矩阵形如 \(\begin{pmatrix}a&b\\b&-a\end{pmatrix}=aB_1+bB_2\)，故 \(B_1,B_2\) 张成 \(W\)。若 \(aB_1+bB_2=0\)，比较元素得 \(a=0,\ b=0\)，所以 \(B_1,B_2\) 线性无关，\(\dim W=2\)。再取 \(I_2\) 与 \(K\)，设 \(c_1B_1+c_2B_2+c_3I_2+c_4K=0\)。比较对角元得 \(c_1+c_3=0,\ -c_1+c_3=0\)，故 \(c_1=c_3=0\)；比较非对角元得 \(c_2+c_4=0,\ c_2-c_4=0\)，故 \(c_2=c_4=0\)。四个矩阵线性无关，而 \(\dim M_2(\mathbb R)=4\)，故它们构成一组基。` },
{ id:'LA03-25', ch:3, type:'计算', diff:5, tags:'过渡矩阵 坐标变换 基变换',
  q: String.raw`设 \(\mathbb R^3\) 的两组基为 (I) \(\alpha_1=(1,0,0)^T,\ \alpha_2=(1,1,0)^T,\ \alpha_3=(1,1,1)^T\)；(II) \(\beta_1=(1,0,1)^T,\ \beta_2=(0,1,1)^T,\ \beta_3=(1,1,0)^T\)。求由基 (I) 到基 (II) 的过渡矩阵 \(P\)，并求 \(\gamma=(1,2,3)^T\) 在两组基下的坐标。`,
  a: String.raw`\(P=\begin{pmatrix}1&-1&0\\-1&0&1\\1&1&0\end{pmatrix}\)；\(\gamma\) 在 (I) 下的坐标为 \((-1,-1,3)^T\)，在 (II) 下的坐标为 \((1,2,0)^T\)。`,
  sol: String.raw`记 \(A=(\alpha_1,\alpha_2,\alpha_3),\ B=(\beta_1,\beta_2,\beta_3)\)，由 \(B=AP\) 得 \(P=A^{-1}B\)。这里
\[
A=\begin{pmatrix}1&1&1\\0&1&1\\0&0&1\end{pmatrix},\quad
A^{-1}=\begin{pmatrix}1&-1&0\\0&1&-1\\0&0&1\end{pmatrix},\quad
B=\begin{pmatrix}1&0&1\\0&1&1\\1&1&0\end{pmatrix}.
\]
相乘得 \(P=\begin{pmatrix}1&-1&0\\-1&0&1\\1&1&0\end{pmatrix}\)，且 \(|P|=2\neq0\)。设 \(\gamma=AX=BY\)，则 \(X=A^{-1}\gamma=(-1,-1,3)^T\)，\(Y=P^{-1}X\)。由 \(P^{-1}=\begin{pmatrix}1/2&0&1/2\\-1/2&0&1/2\\1/2&1&1/2\end{pmatrix}\) 得 \(Y=(1,2,0)^T\)。代回验证 \(\gamma=\beta_1+2\beta_2\)。` },
{ id:'LA03-26', ch:3, type:'计算', diff:4, tags:'多项式基 过渡矩阵 坐标',
  q: String.raw`在 \(P_2\) 中取两组基 (I) \(1,x,x^2\)；(II) \(1,1+x,1+x+x^2\)。求由基 (I) 到基 (II) 的过渡矩阵 \(P\)，并求多项式 \(p=2+3x+x^2\) 在基 (II) 下的坐标。`,
  a: String.raw`\(P=\begin{pmatrix}1&1&1\\0&1&1\\0&0&1\end{pmatrix}\)，\(P^{-1}=\begin{pmatrix}1&-1&0\\0&1&-1\\0&0&1\end{pmatrix}\)；\(p\) 在基 (II) 下的坐标为 \((-1,2,1)^T\)。`,
  sol: String.raw`基 (II) 中三个多项式在基 (I) 下的坐标分别为 \((1,0,0)^T,(1,1,0)^T,(1,1,1)^T\)，以它们为列得
\[
P=\begin{pmatrix}1&1&1\\0&1&1\\0&0&1\end{pmatrix}.
\]
\(P\) 为上三角矩阵且对角元全为 \(1\)，故可逆，直接验证 \(P^{-1}=\begin{pmatrix}1&-1&0\\0&1&-1\\0&0&1\end{pmatrix}\)。设 \(p\) 在基 (II) 下坐标为 \(Y=(y_1,y_2,y_3)^T\)，则 \(Y=P^{-1}(2,3,1)^T=(-1,2,1)^T\)。即 \(p=-1+2(1+x)+(1+x+x^2)=2+3x+x^2\)。` },
{ id:'LA03-27', ch:3, type:'计算', diff:5, tags:'过渡矩阵 坐标变换 逆矩阵',
  q: String.raw`设 \(\mathbb R^3\) 的基 (I) 为标准基 \(e_1,e_2,e_3\)，基 (II) 为 \(\beta_1=(1,1,0)^T,\ \beta_2=(0,1,1)^T,\ \beta_3=(1,0,1)^T\)。求由基 (I) 到基 (II) 的过渡矩阵 \(P\)，并求 \(\gamma=(1,2,3)^T\) 在基 (II) 下的坐标。`,
  a: String.raw`\(P=\begin{pmatrix}1&0&1\\1&1&0\\0&1&1\end{pmatrix}\)，\(P^{-1}=\begin{pmatrix}1/2&1/2&-1/2\\-1/2&1/2&1/2\\1/2&-1/2&1/2\end{pmatrix}\)；\(\gamma\) 在基 (II) 下的坐标为 \((0,2,1)^T\)。`,
  sol: String.raw`因为 (I) 是标准基，过渡矩阵就是以 (II) 中向量为列的矩阵
\[
P=\begin{pmatrix}1&0&1\\1&1&0\\0&1&1\end{pmatrix},\qquad |P|=2\neq0.
\]
求逆得 \(P^{-1}\) 如上。设 \(\gamma=PY\)，则 \(Y=P^{-1}\gamma=(0,2,1)^T\)。代回验证 \(\gamma=2\beta_2+\beta_3=(0,2,2)^T+(1,0,1)^T=(1,2,3)^T\)。` },
{ id:'LA03-28', ch:3, type:'计算', diff:5, tags:'子空间交 维数公式 基',
  q: String.raw`设 \(U=\operatorname{span}\{u_1,u_2,u_3\}\)，\(W=\operatorname{span}\{w_1,w_2\}\)，其中 \(u_1=(1,1,0,0)^T,\ u_2=(0,1,1,0)^T,\ u_3=(0,0,1,1)^T,\ w_1=(1,0,1,0)^T,\ w_2=(0,1,0,1)^T\)。求 \(\dim U,\ \dim W,\ \dim(U\cap W),\ \dim(U+W)\)，并给出 \(U\cap W\) 的一组基。`,
  a: String.raw`\(\dim U=3,\ \dim W=2,\ \dim(U\cap W)=1,\ \dim(U+W)=4\)；\(U\cap W=\operatorname{span}\{(1,1,1,1)^T\}\)。`,
  sol: String.raw`先看 \(U\)：以 \(u_1,u_2,u_3\) 为列作矩阵，其秩为 \(3\)，故 \(\dim U=3\)；显然 \(w_1,w_2\) 线性无关，\(\dim W=2\)。设 \(a u_1+b u_2+c u_3=d w_1+e w_2\)，比较四个分量得
\[
a=d,\quad a+b=e,\quad b+c=d,\quad c=e.
\]
由 \(a=d,\ c=e\) 代入中间两式得 \(a+b=c,\ b+c=a\)，两式相减得 \(2b=0\)，故 \(b=0,\ a=c\)。于是公共向量为 \(a(u_1+u_3)=a(1,1,1,1)^T\)，故 \(U\cap W=\operatorname{span}\{(1,1,1,1)^T\}\)，维数为 \(1\)。由维数公式 \(\dim(U+W)=3+2-1=4\)。` },
{ id:'LA03-29', ch:3, type:'计算', diff:5, tags:'直和 子空间分解 维数',
  q: String.raw`设 \(U=\{(x_1,x_2,x_3)^T\in\mathbb R^3\mid x_1+x_2+x_3=0\}\)，\(W=\operatorname{span}\{(1,1,1)^T\}\)。证明 \(\mathbb R^3=U\oplus W\)，并把向量 \(v=(2,3,4)^T\) 分解为 \(v=u+w\)，其中 \(u\in U,\ w\in W\)。`,
  a: String.raw`\(\mathbb R^3=U\oplus W\)；\(w=(3,3,3)^T,\ u=(-1,0,1)^T\)。`,
  sol: String.raw`\(U\) 是齐次方程 \(x_1+x_2+x_3=0\) 的解空间，系数矩阵秩为 \(1\)，故 \(\dim U=2\)；\(\dim W=1\)。若 \(x\in U\cap W\)，则 \(x=t(1,1,1)^T\) 且 \(3t=0\)，故 \(t=0\)，即 \(U\cap W=\{0\}\)。于是 \(\dim(U+W)=2+1=3\)，又 \(U+W\subseteq\mathbb R^3\)，故 \(\mathbb R^3=U\oplus W\)。设 \(v=u+t(1,1,1)^T\)，对两边各分量求和得 \(9=3t\)，故 \(t=3\)，\(w=(3,3,3)^T\)，\(u=v-w=(-1,0,1)^T\)，且 \(u\) 的各分量和为 \(0\)，符合要求。` },
{ id:'LA03-30', ch:3, type:'计算', diff:5, tags:'商空间 维数 基 坐标',
  q: String.raw`设 \(V=\mathbb R^4\)，\(W=\operatorname{span}\{(1,0,1,0)^T,(0,1,0,1)^T\}\)。求 \(\dim(V/W)\) 及商空间 \(V/W\) 的一组基，并求 \(v=(1,2,3,4)^T\) 的像 \(v+W\) 在该基下的坐标。`,
  a: String.raw`\(\dim(V/W)=2\)；基为 \(e_1+W,\ e_2+W\)；\(v+W\) 的坐标为 \((-2,-2)^T\)。`,
  sol: String.raw`记 \(w_1=(1,0,1,0)^T,\ w_2=(0,1,0,1)^T\)，它们线性无关，故 \(\dim W=2\)，从而 \(\dim(V/W)=4-2=2\)。先证 \(e_1+W,e_2+W\) 线性无关：若 \(a(e_1+W)+b(e_2+W)=W\)，则 \(a e_1+b e_2\in W\)，设 \(a e_1+b e_2=s w_1+t w_2\)，比较分量得 \(a=s,\ b=t,\ 0=s,\ 0=t\)，故 \(a=b=0\)。两个向量在二维商空间中线性无关，故构成基。再分解
\[
v=-2e_1-2e_2+3w_1+4w_2,
\]
故 \(v+W=(-2)(e_1+W)+(-2)(e_2+W)\)，坐标为 \((-2,-2)^T\)。` },
{ id:'LA03-31', ch:3, type:'计算', diff:5, tags:'对偶空间 对偶基 线性函数',
  q: String.raw`设 \(\alpha_1=(1,1,0)^T,\ \alpha_2=(1,0,1)^T,\ \alpha_3=(0,1,1)^T\) 是 \(\mathbb R^3\) 的一组基。求其对偶基 \(f_1,f_2,f_3\)，并计算 \(f_1(2,1,3),\ f_2(2,1,3),\ f_3(2,1,3)\)。`,
  a: String.raw`\(f_1(x)=\frac12(x_1+x_2-x_3),\ f_2(x)=\frac12(x_1-x_2+x_3),\ f_3(x)=\frac12(-x_1+x_2+x_3)\)；\(f_1(2,1,3)=0,\ f_2(2,1,3)=2,\ f_3(2,1,3)=1\)。`,
  sol: String.raw`以 \(\alpha_1,\alpha_2,\alpha_3\) 为列作矩阵
\[
A=\begin{pmatrix}1&1&0\\1&0&1\\0&1&1\end{pmatrix},\qquad
A^{-1}=\frac12\begin{pmatrix}1&1&-1\\1&-1&1\\-1&1&1\end{pmatrix}.
\]
对偶基满足 \(f_i(\alpha_j)=\delta_{ij}\)，故 \(f_i\) 的系数行就是 \(A^{-1}\) 的第 \(i\) 行，即得 \(f_1,f_2,f_3\) 的表达式。逐一代入 \(x=(2,1,3)^T\)：\(f_1=\frac12(2+1-3)=0\)，\(f_2=\frac12(2-1+3)=2\)，\(f_3=\frac12(-2+1+3)=1\)。也可用 \(f_i(x)\) 等于 \(A^{-1}x\) 的第 \(i\) 个分量核对。` },
{ id:'LA03-32', ch:3, type:'计算', diff:5, tags:'对偶映射 转置矩阵 核',
  q: String.raw`设线性映射 \(T:\mathbb R^2\to\mathbb R^3\) 由 \(T(x)=Ax\) 给出，其中 \(A=\begin{pmatrix}1&2\\0&1\\1&0\end{pmatrix}\)。求对偶映射 \(T^*:(\mathbb R^3)^*\to(\mathbb R^2)^*\) 在相应对偶基下的矩阵，并求 \(\ker T^*\)。`,
  a: String.raw`\(T^*\) 的矩阵为 \(A^T=\begin{pmatrix}1&0&1\\2&1&0\end{pmatrix}\)；\(\ker T^*=\operatorname{span}\{(1,-2,-1)^T\}\)。`,
  sol: String.raw`设 \(f\in(\mathbb R^3)^*\)，对偶映射定义为 \((T^*f)(x)=f(Tx)\)。若 \(f\) 的坐标行向量为 \(y^T\)，则 \(T^*f\) 的坐标行向量为 \(y^T A\)，即 \((A^T y)^T\)，故 \(T^*\) 的矩阵为 \(A^T\)。于是
\[
A^T=\begin{pmatrix}1&0&1\\2&1&0\end{pmatrix}.
\]
解 \(A^T y=0\)，即 \(y_1+y_3=0,\ 2y_1+y_2=0\)，得 \(y=t(1,-2,-1)^T\)，故 \(\ker T^*=\operatorname{span}\{(1,-2,-1)^T\}\)，维数为 \(1\)。` },
{ id:'LA03-33', ch:3, type:'计算', diff:5, tags:'秩 极大无关组 线性表示 增广矩阵',
  q: String.raw`设 \(\alpha_1=(1,2,1)^T,\ \alpha_2=(2,1,-1)^T,\ \alpha_3=(1,0,-2)^T,\ \alpha_4=(3,3,0)^T,\ b=(1,1,1)^T\)。求向量组 \(\alpha_1,\alpha_2,\alpha_3,\alpha_4\) 的秩和一个极大无关组，把 \(\alpha_4\) 用该组表示；并判断 \(b\) 能否由该组线性表示，若能则求出表示式。`,
  a: String.raw`秩为 \(3\)；\(\alpha_1,\alpha_2,\alpha_3\) 是极大无关组；\(\alpha_4=\alpha_1+\alpha_2\)；\(b=\alpha_2-\alpha_3\)。`,
  sol: String.raw`以 \(\alpha_1,\dots,\alpha_4,b\) 为列作矩阵并作初等行变换：
\[
\begin{pmatrix}1&2&1&3&1\\2&1&0&3&1\\1&-1&-2&0&1\end{pmatrix}\to
\begin{pmatrix}1&0&0&1&0\\0&1&0&1&1\\0&0&1&0&-1\end{pmatrix}.
\]
非零行数为 \(3\)，故秩为 \(3\)，主元列为第 \(1,2,3\) 列，\(\alpha_1,\alpha_2,\alpha_3\) 为极大无关组。由第 \(4\) 列得 \(\alpha_4=\alpha_1+\alpha_2\)。由最后一列得 \(b=0\cdot\alpha_1+1\cdot\alpha_2-1\cdot\alpha_3=\alpha_2-\alpha_3\)，故 \(b\) 可由该组表示且表示唯一。` },
{ id:'LA03-34', ch:3, type:'计算', diff:5, tags:'含参数方程组 唯一解 无解 行列式',
  q: String.raw`讨论 \(a\) 取何值时线性方程组
\[
\begin{cases}
x_1+x_2+x_3=1,\\
x_1+2x_2+a x_3=2,\\
x_1+4x_2+a^2x_3=3
\end{cases}
\]
有唯一解、无解；在有唯一解时求出解。`,
  a: String.raw`当 \(a\neq1,2\) 时有唯一解 \(x_1=-\frac1{a-1},\ x_2=\frac{a-1}{a-2},\ x_3=-\frac1{(a-1)(a-2)}\)；当 \(a=1\) 或 \(a=2\) 时无解。`,
  sol: String.raw`系数行列式
\[
|A|=\begin{vmatrix}1&1&1\\1&2&a\\1&4&a^2\end{vmatrix}=(a-1)(a-2).
\]
当 \(a\neq1,2\) 时 \(|A|\neq0\)，方程组有唯一解。由第二式减第一式得 \(x_2+(a-1)x_3=1\)，第三式减第二式得 \(2x_2+(a^2-a)x_3=1\)，消去 \(x_2\) 得 \((a-1)(a-2)x_3=-1\)，于是 \(x_3=-\frac1{(a-1)(a-2)}\)，回代得 \(x_2=\frac{a-1}{a-2}\)，再由第一式得 \(x_1=-\frac1{a-1}\)。当 \(a=1\) 时，第二式减第一式得 \(x_2=1\)，第三式减第一式得 \(3x_2=2\)，矛盾；当 \(a=2\) 时，第二式减第一式得 \(x_2+x_3=1\)，第三式减第一式得 \(3x_2+3x_3=2\)，即 \(x_2+x_3=\frac23\)，矛盾。故这两种情形均无解。` },
{ id:'LA03-35', ch:3, type:'证明', diff:5, tags:'线性无关 线性表示 定义法',
  q: String.raw`设向量组 \(\alpha_1,\dots,\alpha_s\)（\(s\ge2\)）中每个向量都不为零向量。证明：\(\alpha_1,\dots,\alpha_s\) 线性无关，当且仅当其中每个向量都不能由其余向量线性表示。`,
  a: String.raw`结论成立：线性无关等价于每个向量都不能由其余向量线性表示。`,
  sol: String.raw`若 \(\alpha_1,\dots,\alpha_s\) 线性无关，假设某个 \(\alpha_i\) 可由其余向量表示，即 \(\alpha_i=\sum_{j\neq i}c_j\alpha_j\)，则 \(\sum_{j\neq i}c_j\alpha_j-\alpha_i=0\)，其中 \(\alpha_i\) 的系数为 \(-1\neq0\)，得到非平凡线性关系，矛盾。反之，若向量组线性相关，则存在不全为零的 \(k_1,\dots,k_s\) 使 \(\sum k_i\alpha_i=0\)。取一个 \(k_i\neq0\)，则 \(\alpha_i=-\frac1{k_i}\sum_{j\neq i}k_j\alpha_j\)，即 \(\alpha_i\) 可由其余向量表示，矛盾。故充要性成立。` },
{ id:'LA03-36', ch:3, type:'证明', diff:4, tags:'线性无关 部分组 反例',
  q: String.raw`证明：若向量组 \(\alpha_1,\dots,\alpha_s\) 线性无关，则它的任意非空部分组都线性无关；并举例说明反之不成立，即“每个真子组都线性无关”不能推出全组线性无关。`,
  a: String.raw`任意非空部分组线性无关；反例：在 \(\mathbb R^2\) 中取 \((1,0)^T,(0,1)^T,(1,1)^T\)，任意两个线性无关，但三个向量线性相关。`,
  sol: String.raw`设 \(\alpha_{i_1},\dots,\alpha_{i_r}\) 是一个部分组，若存在 \(c_1,\dots,c_r\) 使 \(\sum_{j=1}^r c_j\alpha_{i_j}=0\)，则令其余向量的系数为 \(0\)，得到 \(\sum_{i=1}^s k_i\alpha_i=0\)，其中 \(k_{i_j}=c_j\)。由全组线性无关得所有 \(k_i=0\)，特别地 \(c_j=0\)，故该部分组线性无关。反例取 \(\alpha_1=(1,0)^T,\ \alpha_2=(0,1)^T,\ \alpha_3=(1,1)^T\)。任意两个向量线性无关，但 \(\alpha_1+\alpha_2-\alpha_3=0\)，全组线性相关。` },
{ id:'LA03-37', ch:3, type:'证明', diff:5, tags:'循环和 线性相关 过渡矩阵 秩',
  q: String.raw`设 \(\alpha_1,\alpha_2,\alpha_3,\alpha_4\) 线性无关，令
\[
\beta_1=\alpha_1+\alpha_2,\quad \beta_2=\alpha_2+\alpha_3,\quad \beta_3=\alpha_3+\alpha_4,\quad \beta_4=\alpha_4+\alpha_1.
\]
证明 \(\beta_1,\beta_2,\beta_3,\beta_4\) 线性相关，写出一个非平凡线性关系，并求该向量组的秩。`,
  a: String.raw`\(\beta_1-\beta_2+\beta_3-\beta_4=0\)；该向量组的秩为 \(3\)。`,
  sol: String.raw`直接计算
\[
\beta_1-\beta_2+\beta_3-\beta_4=(\alpha_1+\alpha_2)-(\alpha_2+\alpha_3)+(\alpha_3+\alpha_4)-(\alpha_4+\alpha_1)=0,
\]
系数 \(1,-1,1,-1\) 不全为零，故 \(\beta_1,\dots,\beta_4\) 线性相关。再看 \(\beta_1,\beta_2,\beta_3\)，它们由 \((\alpha_1,\alpha_2,\alpha_3,\alpha_4)\) 右乘矩阵
\[
C=\begin{pmatrix}1&0&0\\1&1&0\\0&1&1\\0&0&1\end{pmatrix}
\]
得到，\(C\) 的秩为 \(3\)，故 \(\beta_1,\beta_2,\beta_3\) 线性无关。于是该向量组的秩为 \(3\)，且上述关系式给出其关系空间的一组基。` },
{ id:'LA03-38', ch:3, type:'证明', diff:5, tags:'秩 极大无关组 线性相关',
  q: String.raw`设向量组 (I) 含有 \(s\) 个向量。证明：(I) 的秩为 \(r\)，当且仅当 (I) 中存在 \(r\) 个向量线性无关，且 (I) 中任意 \(r+1\) 个向量都线性相关。`,
  a: String.raw`结论成立，这正是秩的极大无关组刻画。`,
  sol: String.raw`若 (I) 的秩为 \(r\)，由秩的定义，存在含 \(r\) 个向量的极大线性无关组，故有 \(r\) 个向量线性无关。若还存在 \(r+1\) 个向量线性无关，则极大无关组可扩充，与极大性矛盾，故任意 \(r+1\) 个向量线性相关。反之，若存在 \(r\) 个向量线性无关，则秩至少为 \(r\)；又任意 \(r+1\) 个向量线性相关，说明不存在含 \(r+1\) 个向量的线性无关组，故秩至多为 \(r\)。两者结合得秩等于 \(r\)。` },
{ id:'LA03-39', ch:3, type:'证明', diff:5, tags:'维数公式 线性映射 核 像',
  q: String.raw`设 \(V\) 是有限维线性空间，\(U,W\) 是 \(V\) 的子空间。定义映射 \(\varphi:U\times W\to U+W\) 为 \(\varphi(u,w)=u+w\)。证明 \(\varphi\) 是线性映射，\(\ker\varphi\cong U\cap W\)，并由此证明
\[
\dim(U+W)=\dim U+\dim W-\dim(U\cap W).
\]`,
  a: String.raw`\(\ker\varphi=\{(u,-u)\mid u\in U\cap W\}\cong U\cap W\)，从而 \(\dim(U+W)=\dim U+\dim W-\dim(U\cap W)\)。`,
  sol: String.raw`对 \(u_1,u_2\in U,\ w_1,w_2\in W,\ \lambda\in\mathbb R\)，有 \(\varphi((u_1,w_1)+\lambda(u_2,w_2))=u_1+\lambda u_2+w_1+\lambda w_2=\varphi(u_1,w_1)+\lambda\varphi(u_2,w_2)\)，故 \(\varphi\) 线性。若 \(\varphi(u,w)=u+w=0\)，则 \(w=-u\in W\)，又 \(u\in U\)，故 \(u\in U\cap W\)，且 \((u,w)=(u,-u)\)。反之任取 \(u\in U\cap W\)，则 \((u,-u)\in\ker\varphi\)。映射 \(u\mapsto(u,-u)\) 是 \(U\cap W\) 到 \(\ker\varphi\) 的同构，故 \(\dim\ker\varphi=\dim(U\cap W)\)。对线性映射 \(\varphi\) 用维数定理：
\[
\dim(U\times W)=\dim\ker\varphi+\dim\operatorname{Im}\varphi,
\]
即 \(\dim U+\dim W=\dim(U\cap W)+\dim(U+W)\)，移项即得所需公式。` },
{ id:'LA03-40', ch:3, type:'证明', diff:5, tags:'直和 维数 子空间',
  q: String.raw`设 \(V\) 是有限维线性空间，\(U,W\) 是 \(V\) 的子空间。证明：\(V=U\oplus W\) 当且仅当 \(\dim V=\dim U+\dim W\) 且 \(U\cap W=\{0\}\)。`,
  a: String.raw`结论成立；直和等价于两个子空间维数之和等于全空间维数且交为零。`,
  sol: String.raw`若 \(V=U\oplus W\)，按定义 \(V=U+W\) 且 \(U\cap W=\{0\}\)。由维数公式 \(\dim V=\dim U+\dim W-\dim(U\cap W)=\dim U+\dim W\)。反之，若 \(U\cap W=\{0\}\) 且 \(\dim V=\dim U+\dim W\)，由维数公式得
\[
\dim(U+W)=\dim U+\dim W=\dim V.
\]
又 \(U+W\subseteq V\)，故 \(U+W=V\)，结合 \(U\cap W=\{0\}\) 得 \(V=U\oplus W\)。此时每个 \(v\in V\) 的分解唯一：若 \(v=u_1+w_1=u_2+w_2\)，则 \(u_1-u_2=w_2-w_1\in U\cap W=\{0\}\)，故 \(u_1=u_2,\ w_1=w_2\)。` },
{ id:'LA03-41', ch:3, type:'证明', diff:5, tags:'商空间 商映射 维数 核',
  q: String.raw`设 \(V\) 是有限维线性空间，\(W\) 是 \(V\) 的子空间。定义商映射 \(\pi:V\to V/W\) 为 \(\pi(v)=v+W\)。证明 \(\pi\) 是线性映射，\(\ker\pi=W\)，并证明
\[
\dim(V/W)=\dim V-\dim W.
\]`,
  a: String.raw`\(\pi\) 线性，\(\ker\pi=W\)，故 \(\dim(V/W)=\dim V-\dim W\)。`,
  sol: String.raw`对 \(v_1,v_2\in V,\ \lambda\in\mathbb R\)，
\[
\pi(v_1+\lambda v_2)=(v_1+\lambda v_2)+W=(v_1+W)+\lambda(v_2+W)=\pi(v_1)+\lambda\pi(v_2),
\]
故 \(\pi\) 线性。\(\pi(v)=W\) 当且仅当 \(v\in W\)，故 \(\ker\pi=W\)。又 \(\pi\) 是满射：任一商空间元素 \(v+W\) 都是 \(\pi(v)\)。对 \(\pi\) 用维数定理：
\[
\dim V=\dim\ker\pi+\dim\operatorname{Im}\pi=\dim W+\dim(V/W),
\]
移项即得 \(\dim(V/W)=\dim V-\dim W\)。` },
{ id:'LA03-42', ch:3, type:'证明', diff:5, tags:'对偶空间 零化子 维数 子空间和',
  q: String.raw`设 \(V\) 是 \(n\) 维线性空间，\(U,W\) 是 \(V\) 的子空间。记
\[
U^0=\{f\in V^*\mid f(u)=0,\ \forall u\in U\}.
\]
证明 \(\dim U^0=n-\dim U\)，并证明 \((U+W)^0=U^0\cap W^0\)。`,
  a: String.raw`\(\dim U^0=n-\dim U\)；\((U+W)^0=U^0\cap W^0\)。`,
  sol: String.raw`取 \(U\) 的一组基 \(\alpha_1,\dots,\alpha_r\)，扩充为 \(V\) 的基 \(\alpha_1,\dots,\alpha_n\)，设 \(f_1,\dots,f_n\) 为对偶基。若 \(f=\sum_{i=1}^n c_if_i\in U^0\)，则对 \(j\le r\) 有 \(0=f(\alpha_j)=c_j\)，故 \(f=\sum_{i=r+1}^n c_if_i\)，即 \(U^0\subseteq\operatorname{span}\{f_{r+1},\dots,f_n\}\)；反之这些 \(f_i\) 都在 \(U^0\) 中。故 \(\dim U^0=n-r=n-\dim U\)。再证第二式：若 \(f\in(U+W)^0\)，则对任意 \(u\in U,\ w\in W\)，由 \(u,w\in U+W\) 得 \(f(u)=f(w)=0\)，故 \(f\in U^0\cap W^0\)。反之若 \(f\in U^0\cap W^0\)，则对任意 \(u+w\in U+W\)，\(f(u+w)=f(u)+f(w)=0\)，故 \(f\in(U+W)^0\)。两 Inclusion 合起来即得相等。` },
{ id:'LA03-43', ch:3, type:'证明', diff:5, tags:'秩不等式 列空间 线性映射',
  q: String.raw`设 \(A,B\) 是数域上适当阶的矩阵。证明：
\[
r(AB)\le\min\{r(A),r(B)\},\qquad r(A+B)\le r(A)+r(B).
\]`,
  a: String.raw`两个不等式均成立。`,
  sol: String.raw`把矩阵看成线性映射。\(AB\) 的列空间等于 \(A\) 作用在 \(B\) 的列空间上，故 \(\operatorname{col}(AB)\subseteq\operatorname{col}(A)\)，从而 \(r(AB)\le r(A)\)。又 \(AB\) 的行向量都是 \(B\) 的行向量的线性组合，故 \(\operatorname{row}(AB)\subseteq\operatorname{row}(B)\)，从而 \(r(AB)\le r(B)\)。综上 \(r(AB)\le\min\{r(A),r(B)\}\)。对于和，\(A+B\) 的每一列都是 \(A\) 的对应列与 \(B\) 的对应列之和，故 \(\operatorname{col}(A+B)\subseteq\operatorname{col}(A)+\operatorname{col}(B)\)，于是
\[
r(A+B)\le\dim(\operatorname{col}(A)+\operatorname{col}(B))\le r(A)+r(B).
\]` },
{ id:'LA03-44', ch:3, type:'证明', diff:5, tags:'Sylvester秩不等式 核 维数定理',
  q: String.raw`设 \(A\) 是 \(m\times n\) 矩阵，\(B\) 是 \(n\times p\) 矩阵。证明 Sylvester 秩不等式
\[
r(AB)\ge r(A)+r(B)-n.
\]`,
  a: String.raw`不等式成立。`,
  sol: String.raw`把 \(B\) 看成线性映射 \(B:\mathbb R^p\to\mathbb R^n\)，把 \(A\) 限制在 \(\operatorname{Im}B\) 上。对 \(x\in\mathbb R^p\)，\(ABx=0\) 等价于 \(Bx\in\ker A\)，故
\[
\ker(AB)=B^{-1}(\ker A\cap\operatorname{Im}B).
\]
于是 \(\dim\ker(AB)=\dim\ker B+\dim(\ker A\cap\operatorname{Im}B)\)，而 \(\ker A\cap\operatorname{Im}B\subseteq\ker A\)，故
\[
\dim\ker(AB)\le\dim\ker B+\dim\ker A.
\]
用秩加零度：\(\dim\ker(AB)=p-r(AB),\ \dim\ker B=p-r(B),\ \dim\ker A=n-r(A)\)。代入得
\[
p-r(AB)\le p-r(B)+n-r(A),
\]
整理即 \(r(AB)\ge r(A)+r(B)-n\)。` },
{ id:'LA03-45', ch:3, type:'计算', diff:5, tags:'幂零矩阵 秩 Jordan块',
  q: String.raw`设 \(N\) 是 \(4\) 阶矩阵，满足当 \(j=i+1\) 时 \(n_{ij}=1\)，其余元素为 \(0\)。求 \(r(N),r(N^2),r(N^3),r(N^4)\)。`,
  a: String.raw`\(r(N)=3,\ r(N^2)=2,\ r(N^3)=1,\ r(N^4)=0\)。`,
  sol: String.raw`\(N\) 只在第 \(1,2,3\) 行的第 \(2,3,4\) 列处有非零元 \(1\)，即 \(N e_2=e_1,\ N e_3=e_2,\ N e_4=e_3,\ N e_1=0\)，故 \(r(N)=3\)。一般地，\(N^k\) 满足 \(N^k e_{i+k}=e_i\)（\(i+k\le4\)），其余列为零，即 \(N^k\) 的非零列恰为前 \(4-k\) 个标准基向量。因此 \(r(N^k)=4-k\)（\(1\le k\le4\)）。逐项得 \(r(N)=3,\ r(N^2)=2,\ r(N^3)=1,\ r(N^4)=0\)。` },
{ id:'LA03-46', ch:3, type:'计算', diff:5, tags:'含参数 秩 行列式',
  q: String.raw`设 \(A=\begin{pmatrix}1&1&1\\1&a&1\\1&1&a\end{pmatrix}\)。讨论 \(a\) 取何值时 \(r(A)=3,\ r(A)=2,\ r(A)=1\)。`,
  a: String.raw`\(a\neq1\) 时 \(r(A)=3\)；\(a=1\) 时 \(r(A)=1\)；不存在使 \(r(A)=2\) 的 \(a\)。`,
  sol: String.raw`计算行列式
\[
|A|=\begin{vmatrix}1&1&1\\1&a&1\\1&1&a\end{vmatrix}=(a-1)^2.
\]
当 \(a\neq1\) 时 \(|A|\neq0\)，故 \(r(A)=3\)。当 \(a=1\) 时，三个行向量都等于 \((1,1,1)\)，矩阵的秩为 \(1\)。由于秩只能取 \(3,2,1,0\)，而 \(a=1\) 时秩已降为 \(1\)，不存在使秩恰为 \(2\) 的参数值。` },
{ id:'LA03-47', ch:3, type:'计算', diff:4, tags:'相似矩阵 特征向量 对角化',
  q: String.raw`设 \(A=\begin{pmatrix}1&1\\0&2\end{pmatrix}\)。求一个可逆矩阵 \(P\)，使 \(P^{-1}AP=\begin{pmatrix}1&0\\0&2\end{pmatrix}\)，并验证你的 \(P\)。`,
  a: String.raw`\(P=\begin{pmatrix}1&1\\0&1\end{pmatrix}\)，\(P^{-1}=\begin{pmatrix}1&-1\\0&1\end{pmatrix}\)，且 \(P^{-1}AP=\begin{pmatrix}1&0\\0&2\end{pmatrix}\)。`,
  sol: String.raw`求特征向量。对 \(\lambda=1\)，解 \((A-I)x=0\)，即 \(\begin{pmatrix}0&1\\0&1\end{pmatrix}x=0\)，得 \(x=(1,0)^T\)。对 \(\lambda=2\)，解 \((A-2I)x=0\)，即 \(\begin{pmatrix}-1&1\\0&0\end{pmatrix}x=0\)，得 \(x=(1,1)^T\)。令 \(P\) 以这两个特征向量为列：
\[
P=\begin{pmatrix}1&1\\0&1\end{pmatrix}.
\]
则 \(P^{-1}=\begin{pmatrix}1&-1\\0&1\end{pmatrix}\)，直接计算 \(P^{-1}AP=\begin{pmatrix}1&0\\0&2\end{pmatrix}\)。` },
{ id:'LA03-48', ch:3, type:'计算', diff:4, tags:'线性变换 导数 核 像 矩阵',
  q: String.raw`设 \(D:P_3\to P_3\) 为求导变换 \(D(p)=p'\)。求 \(D\) 在基 \(1,x,x^2,x^3\) 下的矩阵，并求 \(\ker D\) 与 \(\operatorname{Im}D\) 的基和维数。`,
  a: String.raw`矩阵为 \(\begin{pmatrix}0&1&0&0\\0&0&2&0\\0&0&0&3\\0&0&0&0\end{pmatrix}\)；\(\ker D=\operatorname{span}\{1\}\)，\(\dim\ker D=1\)；\(\operatorname{Im}D=\operatorname{span}\{1,x,x^2\}\)，\(\dim\operatorname{Im}D=3\)。`,
  sol: String.raw`分别计算基向量的像：\(D(1)=0,\ D(x)=1,\ D(x^2)=2x,\ D(x^3)=3x^2\)。把这些像在基 \(1,x,x^2,x^3\) 下的坐标作为列，得矩阵如上。\(D(p)=0\) 当且仅当 \(p\) 为常数，故 \(\ker D=\operatorname{span}\{1\}\)，维数为 \(1\)。像由 \(1,2x,3x^2\) 张成，即 \(\operatorname{Im}D=\operatorname{span}\{1,x,x^2\}\)，维数为 \(3\)。也可用 \(1+3=4=\dim P_3\) 核对维数定理。` },
{ id:'LA03-49', ch:3, type:'计算', diff:5, tags:'基变换 过渡矩阵 坐标 R4',
  q: String.raw`设 \(\mathbb R^4\) 的基 (I) 为标准基 \(e_1,e_2,e_3,e_4\)，基 (II) 为
\[
\beta_1=e_1+e_2,\quad \beta_2=e_2+e_3,\quad \beta_3=e_3+e_4,\quad \beta_4=e_1.
\]
求由基 (I) 到基 (II) 的过渡矩阵 \(P\)，并求 \(\gamma=(1,2,3,4)^T\) 在基 (II) 下的坐标。`,
  a: String.raw`\(P=\begin{pmatrix}1&0&0&1\\1&1&0&0\\0&1&1&0\\0&0&1&0\end{pmatrix}\)，\(P^{-1}=\begin{pmatrix}0&1&-1&1\\0&0&1&-1\\0&0&0&1\\1&-1&1&-1\end{pmatrix}\)；\(\gamma\) 的坐标为 \((3,-1,4,-2)^T\)。`,
  sol: String.raw`因为 (I) 是标准基，过渡矩阵就是以 \(\beta_1,\dots,\beta_4\) 为列的矩阵
\[
P=\begin{pmatrix}1&0&0&1\\1&1&0&0\\0&1&1&0\\0&0&1&0\end{pmatrix},\qquad |P|=-1\neq0.
\]
求逆得 \(P^{-1}\) 如上。设 \(\gamma=PY\)，则
\[
Y=P^{-1}\gamma=(3,-1,4,-2)^T.
\]
代回验证 \(3\beta_1-\beta_2+4\beta_3-2\beta_4=(1,2,3,4)^T\)。` },
{ id:'LA03-50', ch:3, type:'证明', diff:5, tags:'秩一矩阵 分解 列空间',
  q: String.raw`证明：实矩阵 \(A\) 的秩为 \(1\) 当且仅当存在非零列向量 \(\alpha,\beta\)，使 \(A=\alpha\beta^T\)。`,
  a: String.raw`结论成立；秩一矩阵必可写成一个非零列向量与非零行向量的乘积。`,
  sol: String.raw`若 \(A=\alpha\beta^T\) 且 \(\alpha,\beta\neq0\)，则 \(A\) 的每一列都是 \(\beta_j\alpha\)，故列空间包含于 \(\operatorname{span}\{\alpha\}\)，秩不超过 \(1\)；又 \(\beta\neq0\)，取 \(\beta_j\neq0\)，则第 \(j\) 列为非零向量，故秩至少为 \(1\)，于是 \(r(A)=1\)。反之设 \(r(A)=1\)。此时列空间是一维的，取 \(A\) 的一个非零列作为 \(\alpha\)。其余每一列 \(A_j\) 都属于 \(\operatorname{span}\{\alpha\}\)，故存在 \(b_j\) 使 \(A_j=b_j\alpha\)。令 \(\beta=(b_1,\dots,b_n)^T\)，则 \(A=(\alpha b_1,\dots,\alpha b_n)=\alpha\beta^T\)。由于 \(A\neq0\)，\(\beta\) 也非零。` },
{ id:'LA03-51', ch:3, type:'计算', diff:5, tags:'多项式空间 极大无关组 线性表示',
  q: String.raw`在 \(P_3\) 中设
\[
p_1=1+x,\quad p_2=x+x^2,\quad p_3=x^2+x^3,\quad p_4=1+x^3,\quad p_5=1+x+x^2+x^3.
\]
求向量组 \(p_1,\dots,p_5\) 的秩和一个极大线性无关组，并把 \(p_4,p_5\) 用该组线性表示。`,
  a: String.raw`秩为 \(3\)；\(p_1,p_2,p_3\) 是极大线性无关组；\(p_4=p_1-p_2+p_3,\ p_5=p_1+p_3\)。`,
  sol: String.raw`取基 \(1,x,x^2,x^3\)，各多项式的坐标向量为
\[
p_1=(1,1,0,0)^T,\ p_2=(0,1,1,0)^T,\ p_3=(0,0,1,1)^T,\ p_4=(1,0,0,1)^T,\ p_5=(1,1,1,1)^T.
\]
以它们为列作矩阵并行变换，得主元列为前三列，故秩为 \(3\)，\(p_1,p_2,p_3\) 线性无关且为极大无关组。由坐标关系直接读出
\[
p_4=p_1-p_2+p_3,\qquad p_5=p_1+p_3.
\]
代回验证：\((1+x)-(x+x^2)+(x^2+x^3)=1+x^3\)，\((1+x)+(x^2+x^3)=1+x+x^2+x^3\)。` },
{ id:'LA03-52', ch:3, type:'计算', diff:5, tags:'含参数 行列式 线性相关 极大无关组',
  q: String.raw`设 \(\alpha_1=(1,0,0,1)^T,\ \alpha_2=(0,1,0,1)^T,\ \alpha_3=(0,0,1,1)^T,\ \alpha_4=(1,1,1,a)^T\)。讨论 \(a\) 取何值时该向量组线性相关；相关时写出一个非平凡关系和一个极大无关组。`,
  a: String.raw`\(a=3\) 时线性相关，关系为 \(\alpha_1+\alpha_2+\alpha_3-\alpha_4=0\)，极大无关组为 \(\alpha_1,\alpha_2,\alpha_3\)；\(a\neq3\) 时线性无关。`,
  sol: String.raw`以四向量为列作矩阵
\[
A=\begin{pmatrix}1&0&0&1\\0&1&0&1\\0&0&1&1\\1&1&1&a\end{pmatrix}.
\]
按前二行展开或消元得 \(|A|=a-3\)。故 \(a=3\) 时线性相关，\(a\neq3\) 时线性无关。当 \(a=3\) 时 \(\alpha_4=(1,1,1,3)^T=\alpha_1+\alpha_2+\alpha_3\)，即 \(\alpha_1+\alpha_2+\alpha_3-\alpha_4=0\)。又 \(\alpha_1,\alpha_2,\alpha_3\) 对应的三阶子式为 \(1\neq0\)，它们线性无关，构成极大无关组。` },
{ id:'LA03-53', ch:3, type:'计算', diff:4, tags:'基扩充 线性无关 行列式',
  q: String.raw`设 \(\alpha_1=(1,1,0,0)^T,\ \alpha_2=(0,1,1,0)^T\in\mathbb R^4\)。证明 \(\alpha_1,\alpha_2\) 线性无关，并把它们扩充为 \(\mathbb R^4\) 的一组基，给出所添向量并验证所得四个向量线性无关。`,
  a: String.raw`添 \(\alpha_3=(0,0,1,1)^T,\ \alpha_4=(0,0,0,1)^T\)，则 \(\alpha_1,\alpha_2,\alpha_3,\alpha_4\) 构成 \(\mathbb R^4\) 的基。`,
  sol: String.raw`\(\alpha_1,\alpha_2\) 的分量不成比例，故线性无关。取 \(\alpha_3=(0,0,1,1)^T,\ \alpha_4=(0,0,0,1)^T\)，以四向量为列作矩阵
\[
P=\begin{pmatrix}1&0&0&0\\1&1&0&0\\0&1&1&0\\0&0&1&1\end{pmatrix}.
\]
\(P\) 是下三角矩阵，对角元全为 \(1\)，故 \(|P|=1\neq0\)。因此四列线性无关，而 \(\dim\mathbb R^4=4\)，它们构成 \(\mathbb R^4\) 的一组基。` },
{ id:'LA03-54', ch:3, type:'计算', diff:5, tags:'子空间交 子空间和 维数公式',
  q: String.raw`在 \(\mathbb R^3\) 中设 \(U=\operatorname{span}\{e_1,e_2\}\)，\(W=\operatorname{span}\{(1,1,1)^T,(0,1,1)^T\}\)。求 \(\dim U,\dim W,\dim(U\cap W),\dim(U+W)\)，并给出 \(U\cap W\) 与 \(U+W\) 的基。`,
  a: String.raw`\(\dim U=\dim W=2,\ \dim(U\cap W)=1,\ \dim(U+W)=3\)；\(U\cap W=\operatorname{span}\{e_1\}\)，\(U+W=\mathbb R^3\)。`,
  sol: String.raw`\(U\) 由两个线性无关的坐标向量张成，\(\dim U=2\)；\((1,1,1)^T\) 与 \((0,1,1)^T\) 不成比例，\(\dim W=2\)。设
\[
a e_1+b e_2=c(1,1,1)^T+d(0,1,1)^T.
\]
比较三个分量得 \(a=c,\ b=c+d,\ 0=c+d\)。由第三式 \(d=-c\)，代入第二式得 \(b=0\)，于是公共向量为 \(a(1,0,0)^T\)，故 \(U\cap W=\operatorname{span}\{e_1\}\)，维数为 \(1\)。由维数公式 \(\dim(U+W)=2+2-1=3\)，故 \(U+W=\mathbb R^3\)。` },
{ id:'LA03-55', ch:3, type:'计算', diff:5, tags:'直和 子空间分解 坐标',
  q: String.raw`设
\[
U=\operatorname{span}\{(1,1,0,0)^T,(0,0,1,1)^T\},\quad
W=\operatorname{span}\{(1,-1,0,0)^T,(0,0,1,-1)^T\}.
\]
证明 \(\mathbb R^4=U\oplus W\)，并把 \(v=(1,2,3,4)^T\) 分解为 \(v=u+w\)，其中 \(u\in U,\ w\in W\)。`,
  a: String.raw`\(\mathbb R^4=U\oplus W\)；\(u=\left(\frac32,\frac32,\frac72,\frac72\right)^T,\ w=\left(-\frac12,\frac12,-\frac12,\frac12\right)^T\)。`,
  sol: String.raw`记 \(u_1=(1,1,0,0)^T,\ u_2=(0,0,1,1)^T,\ w_1=(1,-1,0,0)^T,\ w_2=(0,0,1,-1)^T\)。设 \(a u_1+b u_2=c w_1+d w_2\)，比较前两个分量得 \(a=c,\ a=-c\)，故 \(a=c=0\)；比较后两个分量得 \(b=d,\ b=-d\)，故 \(b=d=0\)。因此 \(U\cap W=\{0\}\)，又 \(\dim U=\dim W=2\)，所以 \(\dim(U+W)=4\)，即 \(\mathbb R^4=U\oplus W\)。设
\[
v=a u_1+b u_2+c w_1+d w_2,
\]
则前两个分量给出 \(a+c=1,\ a-c=2\)，解得 \(a=\frac32,\ c=-\frac12\)；后两个分量给出 \(b+d=3,\ b-d=4\)，解得 \(b=\frac72,\ d=-\frac12\)。故 \(u=a u_1+b u_2=\left(\frac32,\frac32,\frac72,\frac72\right)^T\)，\(w=c w_1+d w_2=\left(-\frac12,\frac12,-\frac12,\frac12\right)^T\)。` },
{ id:'LA03-56', ch:3, type:'计算', diff:5, tags:'商空间 多项式 基 坐标',
  q: String.raw`设 \(V=P_3\)，\(W=\{p\in P_3\mid p(0)=0\}\)。求 \(\dim(V/W)\) 及 \(V/W\) 的一组基，并求 \(p=2+3x+x^2\) 的像 \(p+W\) 在该基下的坐标。`,
  a: String.raw`\(\dim(V/W)=1\)，基为 \(1+W\)；\(p+W\) 的坐标为 \(2\)。`,
  sol: String.raw`\(p(0)=0\) 等价于 \(p\) 的常数项为零，故 \(W=\operatorname{span}\{x,x^2,x^3\}\)，\(\dim W=3\)。于是 \(\dim(V/W)=4-3=1\)。在 \(V\) 中取基 \(1,x,x^2,x^3\)，其中后三个属于 \(W\)，故商空间中 \(1+W\) 张成 \(V/W\) 且非零，构成一组基。又
\[
p-2=3x+x^2\in W,
\]
故 \(p+W=2(1+W)\)，坐标为 \(2\)。` },
{ id:'LA03-57', ch:3, type:'计算', diff:5, tags:'对偶基 多项式 线性函数',
  q: String.raw`在 \(P_2\) 中取基 \(q_1=1,\ q_2=1+x,\ q_3=1+x+x^2\)。求其对偶基 \(f_1,f_2,f_3\)，并用 \(p(0),p'(0),p''(0)\) 表示它们。`,
  a: String.raw`\(f_1(p)=p(0)-p'(0),\ f_2(p)=p'(0)-\frac12p''(0),\ f_3(p)=\frac12p''(0)\)。`,
  sol: String.raw`设 \(p=a_0+a_1x+a_2x^2\)，并设 \(p=c_1q_1+c_2q_2+c_3q_3\)。比较常数项、一次项、二次项得
\[
a_0=c_1+c_2+c_3,\quad a_1=c_2+c_3,\quad a_2=c_3.
\]
解得 \(c_3=a_2,\ c_2=a_1-a_2,\ c_1=a_0-a_1\)。由对偶基定义 \(f_i(q_j)=\delta_{ij}\)，故 \(f_i(p)=c_i\)。又 \(p(0)=a_0,\ p'(0)=a_1,\ p''(0)=2a_2\)，代入得
\[
f_1(p)=p(0)-p'(0),\quad f_2(p)=p'(0)-\frac12p''(0),\quad f_3(p)=\frac12p''(0).
\]` },
{ id:'LA03-58', ch:3, type:'计算', diff:5, tags:'对偶映射 转置矩阵 核 维数',
  q: String.raw`设 \(T:\mathbb R^3\to\mathbb R^2\) 由 \(T(x)=Ax\) 给出，其中
\[
A=\begin{pmatrix}1&0&1\\2&0&2\end{pmatrix}.
\]
求对偶映射 \(T^*:(\mathbb R^2)^*\to(\mathbb R^3)^*\) 在相应对偶基下的矩阵，并求 \(\ker T^*\) 及其维数。`,
  a: String.raw`\(T^*\) 的矩阵为 \(A^T=\begin{pmatrix}1&2\\0&0\\1&2\end{pmatrix}\)；\(\ker T^*=\operatorname{span}\{(-2,1)^T\}\)，\(\dim\ker T^*=1\)。`,
  sol: String.raw`对 \(f\in(\mathbb R^2)^*\)，对偶映射定义为 \((T^*f)(x)=f(Tx)\)。若 \(f\) 的坐标行向量为 \(y^T\)，则 \(T^*f\) 的坐标行向量为 \(y^TA\)，即 \((A^Ty)^T\)，故 \(T^*\) 的矩阵为
\[
A^T=\begin{pmatrix}1&2\\0&0\\1&2\end{pmatrix}.
\]
设 \(y=(y_1,y_2)^T\)，解 \(A^Ty=0\)，即 \(y_1+2y_2=0\)，得 \(y=t(-2,1)^T\)，故 \(\ker T^*=\operatorname{span}\{(-2,1)^T\}\)，维数为 \(1\)。这与 \(r(T)=1,\ \dim\ker T^*=2-1=1\) 一致。` },
{ id:'LA03-59', ch:3, type:'计算', diff:5, tags:'矩阵空间 过渡矩阵 坐标 逆矩阵',
  q: String.raw`在 \(M_2(\mathbb R)\) 中取基 (I) \(E_{11},E_{12},E_{21},E_{22}\)，基 (II)
\[
I_2,\quad \begin{pmatrix}1&0\\0&-1\end{pmatrix},\quad E_{12}+E_{21},\quad E_{12}-E_{21}.
\]
求由基 (I) 到基 (II) 的过渡矩阵 \(P\) 及 \(P^{-1}\)，并求 \(A=\begin{pmatrix}1&2\\3&4\end{pmatrix}\) 在基 (II) 下的坐标。`,
  a: String.raw`\(P=\begin{pmatrix}1&1&0&0\\0&0&1&1\\0&0&1&-1\\1&-1&0&0\end{pmatrix}\)，\(P^{-1}=\begin{pmatrix}1/2&0&0&1/2\\1/2&0&0&-1/2\\0&1/2&1/2&0\\0&1/2&-1/2&0\end{pmatrix}\)；\(A\) 在基 (II) 下的坐标为 \(\left(\frac52,-\frac32,\frac52,-\frac12\right)^T\)。`,
  sol: String.raw`把基 (II) 中四个矩阵按 \(E_{11},E_{12},E_{21},E_{22}\) 的顺序写成坐标列，得
\[
P=\begin{pmatrix}1&1&0&0\\0&0&1&1\\0&0&1&-1\\1&-1&0&0\end{pmatrix}.
\]
交换行后它由两个二阶块 \(\begin{pmatrix}1&1\\1&-1\end{pmatrix}\) 组成，故 \(|P|=(-2)(-2)=4\neq0\)。直接求逆得 \(P^{-1}\) 如上。\(A\) 在基 (I) 下的坐标为 \((1,2,3,4)^T\)，故在基 (II) 下的坐标为
\[
P^{-1}(1,2,3,4)^T=\left(\frac52,-\frac32,\frac52,-\frac12\right)^T.
\]
代回验证：
\[
\frac52I_2-\frac32\begin{pmatrix}1&0\\0&-1\end{pmatrix}+\frac52(E_{12}+E_{21})-\frac12(E_{12}-E_{21})
=\begin{pmatrix}1&2\\3&4\end{pmatrix}.
\]` },
{ id:'LA03-60', ch:3, type:'计算', diff:4, tags:'线性变换 对称矩阵 反对称矩阵 核 像',
  q: String.raw`设 \(T:M_2(\mathbb R)\to M_2(\mathbb R)\) 定义为 \(T(A)=A-A^T\)。求 \(\ker T\) 与 \(\operatorname{Im}T\) 的基和维数，并验证维数定理。`,
  a: String.raw`\(\ker T=\{A\mid A=A^T\}\)，维数 \(3\)，基为 \(E_{11},E_{22},E_{12}+E_{21}\)；\(\operatorname{Im}T\) 为反对称矩阵空间，维数 \(1\)，基为 \(E_{12}-E_{21}\)。`,
  sol: String.raw`\(T(A)=0\) 当且仅当 \(A=A^T\)，即 \(A\) 为对称矩阵。二阶对称矩阵形如 \(\begin{pmatrix}a&b\\b&c\end{pmatrix}=aE_{11}+cE_{22}+b(E_{12}+E_{21})\)，故 \(\ker T\) 的基为 \(E_{11},E_{22},E_{12}+E_{21}\)，维数为 \(3\)。对任意 \(A\)，\(T(A)=A-A^T\) 是反对称矩阵；反之若 \(B^T=-B\)，则 \(B=\frac12(B-B^T)=\frac12T(B)\)，故 \(\operatorname{Im}T\) 等于反对称矩阵空间。二阶反对称矩阵形如 \(\begin{pmatrix}0&b\\-b&0\end{pmatrix}=b(E_{12}-E_{21})\)，故基为 \(E_{12}-E_{21}\)，维数为 \(1\)。于是 \(\dim\ker T+\dim\operatorname{Im}T=3+1=4=\dim M_2(\mathbb R)\)。` },
{ id:'LA03-61', ch:3, type:'证明', diff:5, tags:'线性无关 过渡矩阵 下三角',
  q: String.raw`设 \(\alpha_1,\dots,\alpha_n\) 线性无关，令
\[
\beta_1=\alpha_1-\alpha_2,\ \beta_2=\alpha_2-\alpha_3,\ \dots,\ \beta_{n-1}=\alpha_{n-1}-\alpha_n,\ \beta_n=\alpha_n.
\]
证明 \(\beta_1,\dots,\beta_n\) 线性无关当且仅当 \(\alpha_1,\dots,\alpha_n\) 线性无关。`,
  a: String.raw`结论成立；由 \(\beta\) 到 \(\alpha\) 的过渡矩阵为对角元全为 \(1\) 的下三角矩阵，行列式为 \(1\)。`,
  sol: String.raw`把 \(\beta\) 用 \(\alpha\) 表示，其坐标矩阵为
\[
C=\begin{pmatrix}
1&0&0&\cdots&0\\
-1&1&0&\cdots&0\\
0&-1&1&\cdots&0\\
\vdots&&\ddots&\ddots&\vdots\\
0&\cdots&0&-1&1
\end{pmatrix},
\]
即 \(\beta_j\) 的坐标列为 \(e_j-e_{j+1}\)（\(j<n\)），\(\beta_n\) 的坐标列为 \(e_n\)。\(C\) 是下三角矩阵，对角元全为 \(1\)，故 \(|C|=1\neq0\)，\(C\) 可逆。若 \(\sum c_j\beta_j=0\)，则 \(C(c_1,\dots,c_n)^T=0\)，由 \(C\) 可逆得所有 \(c_j=0\)，故 \(\beta\) 线性无关。反之若 \(\alpha\) 线性相关，则存在非零 \(d\) 使 \(\sum d_i\alpha_i=0\)；由 \(C\) 可逆可解出非零 \(c\) 使 \(d=Cc\)，于是 \(\sum c_j\beta_j=0\)，\(\beta\) 也线性相关。故两者等价。` },
{ id:'LA03-62', ch:3, type:'证明', diff:5, tags:'线性无关 可逆矩阵 坐标变换',
  q: String.raw`设 \(\alpha_1,\dots,\alpha_n\) 是线性空间 \(V\) 中的向量组，\(A=(a_{ij})\) 是 \(n\) 阶矩阵，令
\[
\beta_i=\sum_{j=1}^n a_{ij}\alpha_j,\qquad i=1,\dots,n.
\]
证明：若 \(A\) 可逆，则 \(\beta_1,\dots,\beta_n\) 线性无关当且仅当 \(\alpha_1,\dots,\alpha_n\) 线性无关。`,
  a: String.raw`结论成立；可逆矩阵给出两组向量之间的可逆线性替换。`,
  sol: String.raw`设 \(\sum_{i=1}^n c_i\beta_i=0\)，代入 \(\beta_i\) 的表达式并交换求和次序：
\[
0=\sum_{i=1}^n c_i\sum_{j=1}^n a_{ij}\alpha_j
=\sum_{j=1}^n\left(\sum_{i=1}^n a_{ij}c_i\right)\alpha_j.
\]
记 \(d_j=\sum_i a_{ij}c_i\)，则 \(d=A^Tc\)。若 \(\alpha\) 线性无关，则所有 \(d_j=0\)，即 \(A^Tc=0\)；\(A\) 可逆故 \(A^T\) 可逆，得 \(c=0\)，所以 \(\beta\) 线性无关。反之若 \(\alpha\) 线性相关，存在非零 \(d\) 使 \(\sum d_j\alpha_j=0\)。令 \(c=(A^T)^{-1}d\)，则 \(c\neq0\) 且 \(A^Tc=d\)，代回上式得 \(\sum c_i\beta_i=0\)，故 \(\beta\) 线性相关。` },
{ id:'LA03-63', ch:3, type:'证明', diff:5, tags:'Frobenius秩不等式 核 像 维数',
  q: String.raw`设 \(A,B,C\) 是适当阶的实矩阵，且乘积 \(ABC\) 有意义。证明 Frobenius 秩不等式
\[
r(ABC)\ge r(AB)+r(BC)-r(B).
\]`,
  a: String.raw`不等式成立。`,
  sol: String.raw`把 \(B\) 看成线性映射，记 \(K=\ker A\cap\operatorname{Im}B\)。对 \(A\) 在 \(\operatorname{Im}B\) 上的限制用维数定理：
\[
r(AB)=\dim\operatorname{Im}B-\dim K=r(B)-\dim K.
\]
另一方面，\(ABC=A(BC)\)，故
\[
r(ABC)=r(BC)-\dim(\ker A\cap\operatorname{Im}BC).
\]
由于 \(\operatorname{Im}BC\subseteq\operatorname{Im}B\)，有 \(\ker A\cap\operatorname{Im}BC\subseteq K\)，于是
\[
r(ABC)\ge r(BC)-\dim K=r(BC)+r(AB)-r(B).
\]
移项即得所需不等式。` },
{ id:'LA03-64', ch:3, type:'证明', diff:5, tags:'维数公式 子空间交 不等式',
  q: String.raw`设 \(V\) 是 \(n\) 维线性空间，\(U,W\) 是 \(V\) 的子空间。证明
\[
\dim(U\cap W)\ge\dim U+\dim W-n.
\]`,
  a: String.raw`不等式成立。`,
  sol: String.raw`由维数公式
\[
\dim(U+W)=\dim U+\dim W-\dim(U\cap W).
\]
又 \(U+W\) 是 \(V\) 的子空间，故 \(\dim(U+W)\le n\)。代入得
\[
\dim U+\dim W-\dim(U\cap W)\le n,
\]
移项即 \(\dim(U\cap W)\ge\dim U+\dim W-n\)。等号成立当且仅当 \(U+W=V\)。` },
{ id:'LA03-65', ch:3, type:'证明', diff:4, tags:'直和 分解唯一性 子空间',
  q: String.raw`设 \(V\) 是线性空间，\(U,W\) 是 \(V\) 的子空间。证明：\(V=U\oplus W\) 当且仅当每个向量 \(v\in V\) 都能唯一地表示为 \(v=u+w\)，其中 \(u\in U,\ w\in W\)。`,
  a: String.raw`结论成立；直和等价于分解的存在性与唯一性。`,
  sol: String.raw`若 \(V=U\oplus W\)，则按定义 \(V=U+W\)，每个向量都可分解。若 \(v=u_1+w_1=u_2+w_2\)，则 \(u_1-u_2=w_2-w_1\in U\cap W=\{0\}\)，故 \(u_1=u_2,\ w_1=w_2\)，分解唯一。反之，若每个向量都能唯一分解，则 \(V=U+W\) 显然。若 \(x\in U\cap W\)，则 \(x=x+0=0+x\) 是 \(x\) 的两个分解，由唯一性得 \(x=0\)，故 \(U\cap W=\{0\}\)，即 \(V=U\oplus W\)。` },
{ id:'LA03-66', ch:3, type:'证明', diff:5, tags:'第一同构定理 商空间 核 像',
  q: String.raw`设 \(T:V\to W\) 是有限维线性空间之间的线性映射。证明第一同构定理
\[
V/\ker T\cong\operatorname{Im}T,
\]
并证明 \(\dim V=\dim\ker T+\dim\operatorname{Im}T\)。`,
  a: String.raw`\(V/\ker T\cong\operatorname{Im}T\)，从而 \(\dim V=\dim\ker T+\dim\operatorname{Im}T\)。`,
  sol: String.raw`定义 \(\overline T:V/\ker T\to\operatorname{Im}T\) 为 \(\overline T(v+\ker T)=Tv\)。若 \(v_1+\ker T=v_2+\ker T\)，则 \(v_1-v_2\in\ker T\)，故 \(Tv_1=Tv_2\)，映射良定义。对 \(v_1,v_2\in V,\ \lambda\in\mathbb R\)，
\[
\overline T((v_1+\ker T)+\lambda(v_2+\ker T))
=T(v_1+\lambda v_2)=Tv_1+\lambda Tv_2,
\]
故 \(\overline T\) 线性。若 \(\overline T(v+\ker T)=0\)，则 \(v\in\ker T\)，即 \(v+\ker T=\ker T\)，故 \(\overline T\) 单射。对任意 \(y\in\operatorname{Im}T\)，存在 \(v\in V\) 使 \(y=Tv=\overline T(v+\ker T)\)，故 \(\overline T\) 满射。于是 \(\overline T\) 是同构，\(V/\ker T\cong\operatorname{Im}T\)。取维数得
\[
\dim(V/\ker T)=\dim V-\dim\ker T=\dim\operatorname{Im}T,
\]
即 \(\dim V=\dim\ker T+\dim\operatorname{Im}T\)。` },
{ id:'LA03-67', ch:3, type:'证明', diff:5, tags:'对偶空间 对偶基 存在唯一性',
  q: String.raw`设 \(V\) 是 \(n\) 维线性空间，\(\alpha_1,\dots,\alpha_n\) 是 \(V\) 的一组基。证明：存在唯一的 \(f_1,\dots,f_n\in V^*\)，使 \(f_i(\alpha_j)=\delta_{ij}\)，并且它们构成 \(V^*\) 的一组基。`,
  a: String.raw`对偶基 \(f_1,\dots,f_n\) 存在且唯一，并构成 \(V^*\) 的基，\(\dim V^*=n\)。`,
  sol: String.raw`存在性：对任意 \(x=\sum_{j=1}^n x_j\alpha_j\)，定义 \(f_i(x)=x_i\)。由坐标的唯一性，\(f_i\) 是良定义的线性函数，且 \(f_i(\alpha_j)=\delta_{ij}\)。唯一性：若 \(g_i\) 也满足 \(g_i(\alpha_j)=\delta_{ij}\)，则对任意 \(x=\sum x_j\alpha_j\)，\(g_i(x)=\sum x_jg_i(\alpha_j)=x_i=f_i(x)\)，故 \(g_i=f_i\)。再证它们构成基：若 \(\sum c_if_i=0\)，作用于 \(\alpha_j\) 得 \(c_j=0\)，故线性无关。对任意 \(f\in V^*\)，令 \(c_j=f(\alpha_j)\)，则对每个基向量 \(\alpha_j\)，\(\sum c_if_i(\alpha_j)=c_j=f(\alpha_j)\)，故 \(f=\sum c_if_i\)。因此 \(f_1,\dots,f_n\) 张成 \(V^*\) 且线性无关，构成基，\(\dim V^*=n\)。` },
{ id:'LA03-68', ch:3, type:'证明', diff:5, tags:'转置 秩 零化子 对偶空间',
  q: String.raw`设 \(A\) 是 \(m\times n\) 实矩阵。证明 \(r(A)=r(A^T)\)。`,
  a: String.raw`结论成立；矩阵的列秩等于行秩。`,
  sol: String.raw`把 \(A\) 看成线性映射 \(\mathbb R^n\to\mathbb R^m\)，其像 \(\operatorname{Im}A\) 是 \(\mathbb R^m\) 的子空间。记
\[
(\operatorname{Im}A)^0=\{f\in(\mathbb R^m)^*\mid f(y)=0,\ \forall y\in\operatorname{Im}A\}.
\]
对 \(f\in(\mathbb R^m)^*\)，\(f\in(\operatorname{Im}A)^0\) 当且仅当对任意 \(x\in\mathbb R^n\)，\(f(Ax)=0\)，即 \(A^Tf=0\)，故 \((\operatorname{Im}A)^0=\ker A^T\)。由零化子维数公式，
\[
\dim(\operatorname{Im}A)^0=m-\dim\operatorname{Im}A=m-r(A).
\]
另一方面 \(\ker A^T\subseteq\mathbb R^m\)，故 \(\dim\ker A^T=m-r(A^T)\)。两者相等，得 \(m-r(A)=m-r(A^T)\)，即 \(r(A)=r(A^T)\)。` },
{ id:'LA03-69', ch:3, type:'证明', diff:5, tags:'Gram矩阵 线性无关 正定',
  q: String.raw`设 \(\alpha_1,\dots,\alpha_s\) 是实内积空间中的向量，\(G=(g_{ij})\)，其中 \(g_{ij}=(\alpha_i,\alpha_j)\)。证明：\(\alpha_1,\dots,\alpha_s\) 线性无关当且仅当 \(\det G\neq0\)；当它们线性无关时，\(\det G>0\)。`,
  a: String.raw`结论成立；Gram 矩阵非奇异等价于向量组线性无关，且此时 Gram 矩阵正定。`,
  sol: String.raw`设 \(c=(c_1,\dots,c_s)^T\)。由内积的双线性，
\[
c^TGc=\sum_{i,j}c_ic_j(\alpha_i,\alpha_j)
=\left\|\sum_{i=1}^s c_i\alpha_i\right\|^2\ge0.
\]
若 \(\alpha_1,\dots,\alpha_s\) 线性相关，存在 \(c\neq0\) 使 \(\sum c_i\alpha_i=0\)，于是 \(Gc=0\)（因为 \(Gc\) 的第 \(i\) 个分量为 \((\alpha_i,\sum c_j\alpha_j)=0\)），故 \(\det G=0\)。反之若 \(\det G=0\)，存在 \(c\neq0\) 使 \(Gc=0\)，则 \(c^TGc=0\)，由上式得 \(\sum c_i\alpha_i=0\)，故向量组线性相关。因此线性无关等价于 \(\det G\neq0\)。当线性无关时，对任意 \(c\neq0\)，\(\sum c_i\alpha_i\neq0\)，故 \(c^TGc>0\)，即 \(G\) 正定，从而 \(\det G>0\)。` },
{ id:'LA03-70', ch:3, type:'计算', diff:4, tags:'Gram矩阵 行列式 线性无关',
  q: String.raw`设 \(\alpha_1=(1,1,0)^T,\ \alpha_2=(1,0,1)^T,\ \alpha_3=(0,1,1)^T\)。求 Gram 矩阵 \(G=((\alpha_i,\alpha_j))\)，计算 \(\det G\)，并判断 \(\alpha_1,\alpha_2,\alpha_3\) 是否线性无关。`,
  a: String.raw`\(G=\begin{pmatrix}2&1&1\\1&2&1\\1&1&2\end{pmatrix}\)，\(\det G=4\)，故三向量线性无关。`,
  sol: String.raw`逐项计算内积：\((\alpha_1,\alpha_1)=2,\ (\alpha_1,\alpha_2)=1,\ (\alpha_1,\alpha_3)=1\)，\((\alpha_2,\alpha_2)=2,\ (\alpha_2,\alpha_3)=1,\ (\alpha_3,\alpha_3)=2\)，故
\[
G=\begin{pmatrix}2&1&1\\1&2&1\\1&1&2\end{pmatrix}.
\]
对 \(G\) 作行变换 \(R_2\leftarrow R_2-\frac12R_1,\ R_3\leftarrow R_3-\frac12R_1\)，再消元，可得 \(\det G=4\)。由于 \(\det G\neq0\)，由 Gram 矩阵判别法，\(\alpha_1,\alpha_2,\alpha_3\) 线性无关。` },
{ id:'LA03-71', ch:3, type:'计算', diff:4, tags:'秩 转置乘积 正定性',
  q: String.raw`设 \(A=\begin{pmatrix}1&2&3\\2&4&6\\1&1&1\end{pmatrix}\)。求 \(r(A),\ r(A^TA),\ r(AA^T)\)，并说明三者之间的关系。`,
  a: String.raw`\(r(A)=r(A^TA)=r(AA^T)=2\)。`,
  sol: String.raw`\(A\) 的第二行是第一行的 \(2\) 倍，而第一行与第三行不成比例，故 \(r(A)=2\)。计算
\[
A^TA=\begin{pmatrix}6&11&16\\11&21&31\\16&31&46\end{pmatrix},\qquad
AA^T=\begin{pmatrix}14&28&6\\28&56&12\\6&12&3\end{pmatrix}.
\]
两矩阵的前两行都不成比例，第三行可由前两行线性表示，故秩均为 \(2\)。一般地，对实矩阵有 \(\ker(A^TA)=\ker A\)：若 \(A^TAx=0\)，则 \(x^TA^TAx=\|Ax\|^2=0\)，故 \(Ax=0\)。于是 \(r(A^TA)=r(A)\)。同理 \(r(AA^T)=r(A^T)=r(A)\)。` },
{ id:'LA03-72', ch:3, type:'证明', diff:5, tags:'幂等矩阵 直和 秩 核',
  q: String.raw`设 \(A\) 是 \(n\) 阶实矩阵，满足 \(A^2=A\)。证明：
\[
r(A)+r(I-A)=n,\qquad \mathbb R^n=\operatorname{Im}A\oplus\ker A.
\]`,
  a: String.raw`两结论均成立。`,
  sol: String.raw`先证 \(\operatorname{Im}(I-A)=\ker A\)。若 \(x=(I-A)y\)，则 \(Ax=Ay-A^2y=Ay-Ay=0\)，故 \(x\in\ker A\)；反之若 \(x\in\ker A\)，则 \(x=x-Ax=(I-A)x\)，故 \(x\in\operatorname{Im}(I-A)\)。因此 \(\operatorname{Im}(I-A)=\ker A\)，从而
\[
r(I-A)=\dim\ker A=n-r(A),
\]
即 \(r(A)+r(I-A)=n\)。再证直和：若 \(x\in\operatorname{Im}A\cap\ker A\)，则 \(x=Ay\) 且 \(Ax=0\)，于是 \(x=Ay=A^2y=Ax=0\)，故交为零。又 \(\dim\operatorname{Im}A+\dim\ker A=r(A)+n-r(A)=n\)，所以 \(\mathbb R^n=\operatorname{Im}A\oplus\ker A\)。` },
{ id:'LA03-73', ch:3, type:'计算', diff:4, tags:'投影矩阵 幂等 秩 核 像',
  q: String.raw`设
\[
P=\frac13\begin{pmatrix}2&-1&-1\\-1&2&-1\\-1&-1&2\end{pmatrix}.
\]
验证 \(P^2=P\)，并求 \(r(P),\ \ker P,\ \operatorname{Im}P\)。`,
  a: String.raw`\(P^2=P\)；\(r(P)=2\)；\(\ker P=\operatorname{span}\{(1,1,1)^T\}\)；\(\operatorname{Im}P=\{x\mid x_1+x_2+x_3=0\}\)。`,
  sol: String.raw`记 \(J\) 为三阶全 \(1\) 矩阵，则 \(P=I-\frac13J\)，且 \(J^2=3J\)。于是
\[
P^2=I-\frac23J+\frac19J^2=I-\frac23J+\frac13J=I-\frac13J=P.
\]
\(P\) 的特征值为 \(1,1,0\)（对应 \(J\) 的特征值 \(3,0,0\)），故 \(r(P)=2\)。解 \(Px=0\) 等价于 \(x=\frac13Jx\)，即 \(x\) 的三个分量相等，故 \(\ker P=\operatorname{span}\{(1,1,1)^T\}\)。对任意 \(x\)，
\[
Px=x-\frac{x_1+x_2+x_3}{3}(1,1,1)^T,
\]
故 \(\operatorname{Im}P\) 中向量各分量之和为 \(0\)；反之若 \(y_1+y_2+y_3=0\)，则 \(Py=y\)，故 \(\operatorname{Im}P=\{y\mid y_1+y_2+y_3=0\}\)。` },
{ id:'LA03-74', ch:3, type:'证明', diff:5, tags:'相似矩阵 秩 迹 行列式',
  q: String.raw`设 \(A,B\) 是 \(n\) 阶实矩阵且相似，即存在可逆矩阵 \(P\) 使 \(B=P^{-1}AP\)。证明 \(A\) 与 \(B\) 的秩、迹、行列式分别相等。`,
  a: String.raw`相似矩阵的秩、迹、行列式都相同。`,
  sol: String.raw`秩：左乘或右乘可逆矩阵不改变矩阵的秩，故
\[
r(B)=r(P^{-1}AP)=r(AP)=r(A).
\]
迹：利用 \(\operatorname{tr}(XY)=\operatorname{tr}(YX)\)，得
\[
\operatorname{tr}(B)=\operatorname{tr}(P^{-1}AP)=\operatorname{tr}(APP^{-1})=\operatorname{tr}(A).
\]
行列式：由 \(\det(XY)=\det X\det Y\)，
\[
\det B=\det(P^{-1})\det A\det P=\det A.
\]
因此相似矩阵具有相同的秩、迹和行列式。` },
{ id:'LA03-75', ch:3, type:'计算', diff:5, tags:'秩 特征值 全1矩阵 含参数',
  q: String.raw`设 \(J\) 为 \(4\) 阶全 \(1\) 矩阵，\(A=(a-b)I_4+bJ\)。讨论 \(a,b\) 满足什么条件时 \(r(A)=0,1,3,4\)。`,
  a: String.raw`\(a=b=0\) 时 \(r(A)=0\)；\(a=b\neq0\) 时 \(r(A)=1\)；\(a\neq b\) 且 \(a+3b=0\) 时 \(r(A)=3\)；\(a\neq b\) 且 \(a+3b\neq0\) 时 \(r(A)=4\)。`,
  sol: String.raw`\(J\) 的特征值为 \(4\)（特征向量 \((1,1,1,1)^T\)）和 \(0\)（三重，特征子空间为 \(x_1+x_2+x_3+x_4=0\)）。故 \(A=(a-b)I_4+bJ\) 的特征值为
\[
\lambda_1=a-b+4b=a+3b,\qquad \lambda_2=\lambda_3=\lambda_4=a-b.
\]
若 \(a=b=0\)，则 \(A=0\)，秩为 \(0\)。若 \(a=b\neq0\)，则 \(A=bJ\)，秩为 \(1\)。若 \(a\neq b\)，则 \(a-b\neq0\)，此时若 \(a+3b\neq0\)，四个特征值全非零，\(A\) 可逆，秩为 \(4\)；若 \(a+3b=0\)，则零特征值重数为 \(1\)，其余三个特征值为 \(a-b\neq0\)，且 \(A\) 为实对称矩阵可对角化，故秩为 \(3\)。` },
{ id:'LA03-76', ch:3, type:'证明', diff:4, tags:'线性映射 单射 满射 维数',
  q: String.raw`设 \(T:V\to W\) 是有限维线性空间之间的线性映射。证明：
（1）\(T\) 是单射当且仅当 \(\ker T=\{0\}\)；
（2）\(T\) 是满射当且仅当 \(r(T)=\dim W\)；
（3）若 \(\dim V=\dim W\)，则 \(T\) 是单射当且仅当 \(T\) 是满射。`,
  a: String.raw`三个结论均成立。`,
  sol: String.raw`（1）若 \(T\) 单射且 \(Tx=0=T0\)，则 \(x=0\)，故 \(\ker T=\{0\}\)。反之若 \(\ker T=\{0\}\)，且 \(Tx=Ty\)，则 \(T(x-y)=0\)，故 \(x-y=0\)，即 \(x=y\)，\(T\) 单射。
（2）\(T\) 满射当且仅当 \(\operatorname{Im}T=W\)，当且仅当 \(\dim\operatorname{Im}T=\dim W\)，即 \(r(T)=\dim W\)。
（3）由维数定理 \(\dim V=\dim\ker T+r(T)\)。若 \(\dim V=\dim W\)，则 \(T\) 单射等价于 \(\dim\ker T=0\)，等价于 \(r(T)=\dim V=\dim W\)，由（2）等价于 \(T\) 满射。` },
{ id:'LA03-77', ch:3, type:'计算', diff:5, tags:'线性映射 矩阵 基 坐标',
  q: String.raw`设 \(T:\mathbb R^3\to\mathbb R^2\) 定义为 \(T(x)=(x_1+x_2,\ x_2+x_3)\)。取 \(\mathbb R^3\) 的基
\[
\alpha_1=e_1,\quad \alpha_2=e_1+e_2,\quad \alpha_3=e_1+e_2+e_3,
\]
\(\mathbb R^2\) 的基 \(\beta_1=(1,1)^T,\ \beta_2=(1,0)^T\)。求 \(T\) 在这两组基下的矩阵。`,
  a: String.raw`\(T\) 在该两组基下的矩阵为 \(\begin{pmatrix}0&1&2\\1&1&0\end{pmatrix}\)。`,
  sol: String.raw`先计算基向量的像：
\[
T(\alpha_1)=(1,0)^T,\quad T(\alpha_2)=(2,1)^T,\quad T(\alpha_3)=(2,2)^T.
\]
再求它们在 \(\beta_1,\beta_2\) 下的坐标。设 \(y=c_1\beta_1+c_2\beta_2=(c_1+c_2,c_1)^T\)，则 \(c_1=y_2,\ c_2=y_1-y_2\)。于是
\[
T(\alpha_1)=(0,1)^T_{\beta},\quad T(\alpha_2)=(1,1)^T_{\beta},\quad T(\alpha_3)=(2,0)^T_{\beta}
\]
（下标 \(\beta\) 表示在基 \(\beta\) 下的坐标）。以这些坐标为列，得矩阵
\[
\begin{pmatrix}0&1&2\\1&1&0\end{pmatrix}.
\]` },
{ id:'LA03-78', ch:3, type:'证明', diff:5, tags:'秩-零度定理 基扩充 核 像',
  q: String.raw`设 \(T:V\to W\) 是有限维线性空间之间的线性映射。用基扩充的方法证明秩-零度定理：
\[
\dim V=\dim\ker T+\dim\operatorname{Im}T.
\]`,
  a: String.raw`定理成立。`,
  sol: String.raw`取 \(\ker T\) 的一组基 \(\gamma_1,\dots,\gamma_r\)，把它扩充为 \(V\) 的一组基
\[
\gamma_1,\dots,\gamma_r,\delta_1,\dots,\delta_s,
\]
其中 \(r=\dim\ker T,\ r+s=\dim V\)。证明 \(T\delta_1,\dots,T\delta_s\) 是 \(\operatorname{Im}T\) 的基。首先它们张成 \(\operatorname{Im}T\)：对任意 \(v=\sum a_i\gamma_i+\sum b_j\delta_j\)，有
\[
Tv=\sum a_iT\gamma_i+\sum b_jT\delta_j=\sum b_jT\delta_j.
\]
其次它们线性无关：若 \(\sum c_jT\delta_j=0\)，则 \(T(\sum c_j\delta_j)=0\)，故 \(\sum c_j\delta_j\in\ker T\)，可写成 \(\sum d_i\gamma_i\)。由 \(\gamma_1,\dots,\gamma_r,\delta_1,\dots,\delta_s\) 线性无关，得所有 \(c_j=0\)。因此 \(\dim\operatorname{Im}T=s\)，于是
\[
\dim V=r+s=\dim\ker T+\dim\operatorname{Im}T.
\]` },
{ id:'LA03-79', ch:3, type:'计算', diff:4, tags:'齐次方程组 含参数 解空间 基础解系',
  q: String.raw`讨论 \(a\) 取何值时齐次线性方程组
\[
\begin{cases}
x_1+2x_2+x_3=0,\\
2x_1+3x_2+x_3=0,\\
x_1+x_2+a x_3=0
\end{cases}
\]
有非零解；有非零解时求出其解空间的一组基。`,
  a: String.raw`\(a=0\) 时有非零解，解空间为 \(\operatorname{span}\{(1,-1,1)^T\}\)；\(a\neq0\) 时只有零解。`,
  sol: String.raw`系数行列式
\[
\begin{vmatrix}1&2&1\\2&3&1\\1&1&a\end{vmatrix}=-a.
\]
故 \(a\neq0\) 时方程组只有零解。当 \(a=0\) 时，第三式为 \(x_1+x_2=0\)，令 \(x_2=t\)，则 \(x_1=-t\)；代入第一式得 \(-t+2t+x_3=0\)，故 \(x_3=-t\)。于是解为
\[
(x_1,x_2,x_3)^T=t(-1,1,-1)^T,
\]
取 \(t=-1\) 得基 \((1,-1,1)^T\)。代回第二式验证：\(2-3+1=0\)。` },
{ id:'LA03-80', ch:3, type:'证明', diff:5, tags:'秩 线性表示 向量组',
  q: String.raw`设向量组 (I) 可由向量组 (II) 线性表示。证明 \(r(\mathrm{I})\le r(\mathrm{II})\)。`,
  a: String.raw`结论成立；若 (I) 可由 (II) 表示，则 (I) 的秩不超过 (II) 的秩。`,
  sol: String.raw`设 (II) 为 \(\beta_1,\dots,\beta_m\)。因为 (I) 中每个向量都可由 (II) 线性表示，所以 (I) 中任意向量都属于 \(\operatorname{span}\{\beta_1,\dots,\beta_m\}\)，从而
\[
\operatorname{span}(\mathrm{I})\subseteq\operatorname{span}(\mathrm{II}).
\]
取 (I) 的一个极大线性无关组，其向量个数为 \(r(\mathrm{I})\)，它也是 \(\operatorname{span}(\mathrm{I})\) 的一组基，故
\[
r(\mathrm{I})=\dim\operatorname{span}(\mathrm{I})\le\dim\operatorname{span}(\mathrm{II})=r(\mathrm{II}).
\]
这里最后一个等号成立是因为 (II) 的极大线性无关组张成 \(\operatorname{span}(\mathrm{II})\)，其向量个数就是 \(r(\mathrm{II})\)。` },
{ id:'LA03-81', ch:3, type:'计算', diff:5, tags:'含参数 基 行列式 极大无关组',
  q: String.raw`设 \(\alpha_1=(1,1,0,0)^T,\ \alpha_2=(1,0,1,0)^T,\ \alpha_3=(0,0,1,1)^T,\ \alpha_4=(1,\lambda,\lambda,1)^T\)。问 \(\lambda\) 取何值时它们构成 \(\mathbb R^4\) 的一组基？当 \(\lambda=1\) 时，求该向量组的秩、一个极大无关组以及一个非平凡线性关系。`,
  a: String.raw`\(\lambda\neq1\) 时构成 \(\mathbb R^4\) 的基；\(\lambda=1\) 时秩为 \(3\)，\(\alpha_1,\alpha_2,\alpha_3\) 为极大无关组，关系为 \(\alpha_1+\alpha_3-\alpha_4=0\)。`,
  sol: String.raw`以四向量为列作矩阵
\[
A=\begin{pmatrix}1&1&0&1\\1&0&0&\lambda\\0&1&1&\lambda\\0&0&1&1\end{pmatrix}.
\]
作行变换 \(R_2\leftarrow R_2-R_1\) 后按第一列展开，得
\[
|A|=2(\lambda-1).
\]
故 \(\lambda\neq1\) 时 \(|A|\neq0\)，四向量线性无关，构成 \(\mathbb R^4\) 的基。当 \(\lambda=1\) 时，\(\alpha_4=(1,1,1,1)^T=\alpha_1+\alpha_3\)，即 \(\alpha_1+\alpha_3-\alpha_4=0\)。又 \(\alpha_1,\alpha_2,\alpha_3\) 线性无关（其坐标矩阵有三阶子式非零），故它们构成极大无关组，秩为 \(3\)。` },
{ id:'LA03-82', ch:3, type:'计算', diff:5, tags:'过渡矩阵 坐标变换 逆矩阵',
  q: String.raw`设 \(\mathbb R^3\) 的两组基为 (I) \(\alpha_1=(1,1,0)^T,\ \alpha_2=(0,1,1)^T,\ \alpha_3=(1,0,1)^T\)；(II) \(\beta_1=(1,0,0)^T,\ \beta_2=(1,1,0)^T,\ \beta_3=(1,1,1)^T\)。求由基 (I) 到基 (II) 的过渡矩阵 \(P\)，并求 \(\gamma=(1,2,3)^T\) 在基 (II) 下的坐标。`,
  a: String.raw`\(P=\begin{pmatrix}1/2&1&1/2\\-1/2&0&1/2\\1/2&0&1/2\end{pmatrix}\)，\(P^{-1}=\begin{pmatrix}0&-1&1\\1&0&-1\\0&1&1\end{pmatrix}\)；\(\gamma\) 在基 (II) 下的坐标为 \((-1,-1,3)^T\)。`,
  sol: String.raw`记 \(A=(\alpha_1,\alpha_2,\alpha_3),\ B=(\beta_1,\beta_2,\beta_3)\)，则 \(P=A^{-1}B\)。计算
\[
A=\begin{pmatrix}1&0&1\\1&1&0\\0&1&1\end{pmatrix},\qquad
A^{-1}=\frac12\begin{pmatrix}1&1&-1\\-1&1&1\\1&-1&1\end{pmatrix}.
\]
与 \(B=\begin{pmatrix}1&1&1\\0&1&1\\0&0&1\end{pmatrix}\) 相乘，得
\[
P=\begin{pmatrix}1/2&1&1/2\\-1/2&0&1/2\\1/2&0&1/2\end{pmatrix}.
\]
直接验证 \(P^{-1}\) 如上。设 \(\gamma=BY\)，则 \(Y=P^{-1}A^{-1}\gamma\)。先算 \(A^{-1}\gamma=(0,2,1)^T\)，再左乘 \(P^{-1}\) 得 \(Y=(-1,-1,3)^T\)。代回验证 \(\gamma=-\beta_1-\beta_2+3\beta_3\)。` },
{ id:'LA03-83', ch:3, type:'证明', diff:5, tags:'商空间 基提升 维数',
  q: String.raw`设 \(W\) 是 \(n\) 维线性空间 \(V\) 的 \(k\) 维子空间，\(w_1,\dots,w_k\) 是 \(W\) 的一组基，把它扩充为 \(V\) 的基
\[
w_1,\dots,w_k,v_1,\dots,v_{n-k}.
\]
证明 \(v_1+W,\dots,v_{n-k}+W\) 构成商空间 \(V/W\) 的一组基。`,
  a: String.raw`这 \(n-k\) 个陪集线性无关且张成 \(V/W\)，故构成 \(V/W\) 的基，\(\dim(V/W)=n-k\)。`,
  sol: String.raw`先证张成。任取 \(v\in V\)，由 \(V\) 的基可写
\[
v=\sum_{i=1}^k a_iw_i+\sum_{j=1}^{n-k}b_jv_j.
\]
在商空间中 \(\sum a_iw_i+W=W\)，故
\[
v+W=\sum_{j=1}^{n-k}b_j(v_j+W),
\]
即这些陪集张成 \(V/W\)。再证线性无关。若 \(\sum c_j(v_j+W)=W\)，则 \(\sum c_jv_j\in W\)，可写成 \(\sum d_iw_i\)。于是
\[
\sum_{j}c_jv_j-\sum_{i}d_iw_i=0.
\]
由 \(w_1,\dots,w_k,v_1,\dots,v_{n-k}\) 线性无关，得所有 \(c_j=0\)。因此 \(v_1+W,\dots,v_{n-k}+W\) 线性无关，构成 \(V/W\) 的基，维数为 \(n-k\)。` },
{ id:'LA03-84', ch:3, type:'证明', diff:5, tags:'零化子 对偶空间 子空间交 维数',
  q: String.raw`设 \(V\) 是 \(n\) 维线性空间，\(U,W\) 是 \(V\) 的子空间。记 \(U^0=\{f\in V^*\mid f(u)=0,\ \forall u\in U\}\)。证明
\[
(U\cap W)^0=U^0+W^0.
\]`,
  a: String.raw`等式成立。`,
  sol: String.raw`先证 \(U^0+W^0\subseteq(U\cap W)^0\)。若 \(f=f_1+f_2\)，其中 \(f_1\in U^0,\ f_2\in W^0\)，则对任意 \(x\in U\cap W\)，\(f(x)=f_1(x)+f_2(x)=0\)，故 \(f\in(U\cap W)^0\)。再证反向包含。由零化子与和的维数公式，
\[
\dim(U^0+W^0)=\dim U^0+\dim W^0-\dim(U^0\cap W^0).
\]
而 \(U^0\cap W^0=(U+W)^0\)，故
\[
\dim(U^0+W^0)=(n-\dim U)+(n-\dim W)-(n-\dim(U+W)).
\]
利用 \(\dim(U+W)=\dim U+\dim W-\dim(U\cap W)\)，上式化为 \(n-\dim(U\cap W)=\dim(U\cap W)^0\)。于是 \(U^0+W^0\) 是 \((U\cap W)^0\) 的、维数相同的子空间，故两者相等。` },
{ id:'LA03-85', ch:3, type:'计算', diff:4, tags:'零化子 对偶空间 基 维数',
  q: String.raw`设 \(V=\mathbb R^4\)，\(U=\operatorname{span}\{(1,1,0,0)^T,(1,0,1,0)^T\}\)。求零化子
\[
U^0=\{f\in V^*\mid f(u)=0,\ \forall u\in U\}
\]
的一组基和维数。`,
  a: String.raw`\(U^0=\operatorname{span}\{f_1,f_2\}\)，其中 \(f_1(x)=x_1-x_2-x_3,\ f_2(x)=x_4\)；\(\dim U^0=2\)。`,
  sol: String.raw`设 \(f(x)=a_1x_1+a_2x_2+a_3x_3+a_4x_4\)。条件 \(f(1,1,0,0)=0\) 与 \(f(1,0,1,0)=0\) 分别给出
\[
a_1+a_2=0,\qquad a_1+a_3=0.
\]
故 \(a_2=-a_1,\ a_3=-a_1\)，而 \(a_4\) 任意。于是
\[
f=a_1(x_1-x_2-x_3)+a_4x_4.
\]
取 \(f_1=x_1-x_2-x_3,\ f_2=x_4\)，它们线性无关且张成 \(U^0\)，故为基，\(\dim U^0=2\)。这也与 \(\dim U^0=4-\dim U=4-2=2\) 一致。` },
{ id:'LA03-86', ch:3, type:'证明', diff:4, tags:'线性相关 线性表示 定义法',
  q: String.raw`设向量组 \(\alpha_1,\dots,\alpha_s\)（\(s\ge2\)）。证明：该向量组线性相关，当且仅当其中至少有一个向量可以由其余向量线性表示。`,
  a: String.raw`结论成立。`,
  sol: String.raw`若向量组线性相关，存在不全为零的 \(k_1,\dots,k_s\) 使 \(\sum_{i=1}^s k_i\alpha_i=0\)。取一个 \(k_j\neq0\)，则
\[
\alpha_j=-\frac1{k_j}\sum_{i\neq j}k_i\alpha_i,
\]
即 \(\alpha_j\) 可由其余向量线性表示。反之，若某个 \(\alpha_j\) 可由其余向量表示，设 \(\alpha_j=\sum_{i\neq j}c_i\alpha_i\)，则
\[
\sum_{i\neq j}c_i\alpha_i-\alpha_j=0,
\]
其中 \(\alpha_j\) 的系数为 \(-1\neq0\)，故向量组线性相关。` },
{ id:'LA03-87', ch:3, type:'计算', diff:4, tags:'秩一矩阵 外积 矩阵乘法',
  q: String.raw`设 \(u=(1,2,1)^T,\ v=(1,0,1)^T,\ x=(2,1,0)^T,\ y=(0,1,3)^T\)，令 \(A=uv^T,\ B=xy^T\)。求 \(AB\) 及 \(r(AB)\)。`,
  a: String.raw`\(AB=\begin{pmatrix}0&2&6\\0&4&12\\0&2&6\end{pmatrix}\)，\(r(AB)=1\)。`,
  sol: String.raw`利用矩阵乘法的结合律，
\[
AB=(uv^T)(xy^T)=u(v^Tx)y^T.
\]
先算标量 \(v^Tx=1\cdot2+0\cdot1+1\cdot0=2\)，故
\[
AB=2uy^T=2\begin{pmatrix}1\\2\\1\end{pmatrix}(0,1,3)
=2\begin{pmatrix}0&1&3\\0&2&6\\0&1&3\end{pmatrix}
=\begin{pmatrix}0&2&6\\0&4&12\\0&2&6\end{pmatrix}.
\]
因为 \(v^Tx=2\neq0\)，向量 \(u\) 与 \(y\) 均非零，故 \(AB\) 是非零的秩一矩阵，\(r(AB)=1\)。` },
{ id:'LA03-88', ch:3, type:'证明', diff:5, tags:'维数公式 基扩充 子空间和',
  q: String.raw`设 \(U,W\) 是有限维线性空间 \(V\) 的子空间。用基扩充的方法证明
\[
\dim(U+W)=\dim U+\dim W-\dim(U\cap W).
\]`,
  a: String.raw`公式成立。`,
  sol: String.raw`设 \(\dim(U\cap W)=r\)，取 \(U\cap W\) 的基 \(\gamma_1,\dots,\gamma_r\)。把它分别扩充为 \(U\) 的基
\[
\gamma_1,\dots,\gamma_r,\alpha_1,\dots,\alpha_s
\]
和 \(W\) 的基
\[
\gamma_1,\dots,\gamma_r,\beta_1,\dots,\beta_t.
\]
则 \(\dim U=r+s,\ \dim W=r+t\)。证明
\[
\gamma_1,\dots,\gamma_r,\alpha_1,\dots,\alpha_s,\beta_1,\dots,\beta_t
\]
是 \(U+W\) 的基。张成性显然。若其线性组合为零，则 \(\sum e_k\beta_k=-(\sum c_i\gamma_i+\sum d_j\alpha_j)\in U\)，而左边属于 \(W\)，故左边属于 \(U\cap W\)。于是 \(\sum e_k\beta_k=\sum f_i\gamma_i\)；由 \(\gamma_1,\dots,\gamma_r,\beta_1,\dots,\beta_t\) 线性无关，得所有 \(e_k=0\) 且 \(f_i=0\)。再代入原式，由 \(\gamma,\alpha\) 线性无关得所有 \(c_i=d_j=0\)。因此上述向量组线性无关，构成 \(U+W\) 的基，于是
\[
\dim(U+W)=r+s+t=(r+s)+(r+t)-r=\dim U+\dim W-\dim(U\cap W).
\]` },
{ id:'LA03-89', ch:3, type:'计算', diff:4, tags:'商空间 基 坐标 R3',
  q: String.raw`设 \(V=\mathbb R^3\)，\(W=\operatorname{span}\{(1,1,0)^T,(0,1,1)^T\}\)。求 \(\dim(V/W)\) 及 \(V/W\) 的一组基，并求 \(v=(2,3,4)^T\) 的像 \(v+W\) 在该基下的坐标。`,
  a: String.raw`\(\dim(V/W)=1\)，基为 \(e_1+W\)；\(v+W\) 的坐标为 \(3\)。`,
  sol: String.raw`\((1,1,0)^T\) 与 \((0,1,1)^T\) 线性无关，故 \(\dim W=2\)，\(\dim(V/W)=3-2=1\)。因为 \(e_1\notin W\)，故 \(e_1+W\) 是 \(V/W\) 中的非零向量，构成一组基。分解
\[
v=3e_1-(1,1,0)^T+4(0,1,1)^T,
\]
其中后两项属于 \(W\)，故
\[
v+W=3(e_1+W),
\]
坐标为 \(3\)。` },
{ id:'LA03-90', ch:3, type:'证明', diff:5, tags:'投影 直和 幂等 核 像',
  q: String.raw`设 \(V=U\oplus W\)，定义 \(P:V\to V\) 为 \(P(u+w)=u\)，其中 \(u\in U,\ w\in W\)。证明 \(P^2=P\)，\(\operatorname{Im}P=U\)，\(\ker P=W\)，并求 \(r(P)\)。`,
  a: String.raw`\(P^2=P\)，\(\operatorname{Im}P=U\)，\(\ker P=W\)，\(r(P)=\dim U\)。`,
  sol: String.raw`由直和分解唯一，\(P\) 良定义且线性。对 \(v=u+w\)，
\[
P^2(v)=P(P(v))=P(u)=u=P(v),
\]
故 \(P^2=P\)。对 \(u\in U\)，\(P(u)=u\)，故 \(U\subseteq\operatorname{Im}P\)；反之对任意 \(v=u+w\)，\(P(v)=u\in U\)，故 \(\operatorname{Im}P\subseteq U\)，于是 \(\operatorname{Im}P=U\)。若 \(P(v)=0\)，则 \(v=u+w\) 中 \(u=0\)，故 \(v=w\in W\)；反之 \(w\in W\) 时 \(P(w)=0\)。因此 \(\ker P=W\)。最后
\[
r(P)=\dim\operatorname{Im}P=\dim U.
\]` },
{ id:'LA03-91', ch:3, type:'计算', diff:4, tags:'线性变换 多项式 核 像 矩阵',
  q: String.raw`设 \(T:P_3\to P_3\) 定义为 \(T(p)=p'+p(0)\)。求 \(T\) 在基 \(1,x,x^2,x^3\) 下的矩阵，并求 \(\ker T\) 与 \(\operatorname{Im}T\) 的基和维数。`,
  a: String.raw`矩阵为 \(\begin{pmatrix}1&1&0&0\\0&0&2&0\\0&0&0&3\\0&0&0&0\end{pmatrix}\)；\(\ker T=\operatorname{span}\{1-x\}\)，\(\dim\ker T=1\)；\(\operatorname{Im}T=P_2=\operatorname{span}\{1,x,x^2\}\)，\(\dim\operatorname{Im}T=3\)。`,
  sol: String.raw`分别计算基向量的像：
\[
T(1)=1,\quad T(x)=1,\quad T(x^2)=2x,\quad T(x^3)=3x^2.
\]
把这些像在基 \(1,x,x^2,x^3\) 下的坐标作为列，得矩阵如上。设 \(p=a_0+a_1x+a_2x^2+a_3x^3\)，则
\[
T(p)=a_0+a_1+2a_2x+3a_3x^2.
\]
\(T(p)=0\) 当且仅当 \(a_0+a_1=0,\ a_2=a_3=0\)，故 \(p=a_0(1-x)\)，\(\ker T=\operatorname{span}\{1-x\}\)，维数为 \(1\)。像由 \(1,2x,3x^2\) 张成，即 \(\operatorname{Im}T=\operatorname{span}\{1,x,x^2\}=P_2\)，维数为 \(3\)。也可用 \(1+3=4\) 核对维数定理。` },
{ id:'LA03-92', ch:3, type:'证明', diff:4, tags:'过渡矩阵 坐标变换 可逆矩阵',
  q: String.raw`设 \(A=(\alpha_1,\dots,\alpha_n)\) 与 \(B=(\beta_1,\dots,\beta_n)\) 是 \(n\) 维线性空间 \(V\) 的两组基，\(B=AP\)。证明 \(P\) 可逆，且若向量 \(x\) 在基 \(A,B\) 下的坐标分别为 \(X,Y\)，则 \(Y=P^{-1}X\)。`,
  a: String.raw`\(P\) 可逆，且 \(Y=P^{-1}X\)。`,
  sol: String.raw`因为 \(A,B\) 都是基，存在矩阵 \(Q\) 使 \(A=BQ\)。代入 \(B=AP\) 得 \(B=BQP\)。由于 \(B\) 的列线性无关，\(QP=I_n\)；同理 \(A=APQ\) 给出 \(PQ=I_n\)。故 \(P\) 可逆且 \(Q=P^{-1}\)。若 \(x=AX=BY\)，则
\[
AX=APY.
\]
由 \(A\) 的列线性无关，得 \(X=PY\)，故 \(Y=P^{-1}X\)。` },
{ id:'LA03-93', ch:3, type:'计算', diff:5, tags:'含参数 基 行列式 坐标',
  q: String.raw`设 \(\alpha_1=(1,1,0)^T,\ \alpha_2=(1,a,1)^T,\ \alpha_3=(a,0,1)^T\)。问 \(a\) 取何值时它们构成 \(\mathbb R^3\) 的基？当 \(a=0\) 时，求 \(\beta=(1,2,3)^T\) 在该基下的坐标。`,
  a: String.raw`\(a\neq\frac12\) 时构成基；当 \(a=0\) 时，\(\beta\) 的坐标为 \((2,-1,4)^T\)。`,
  sol: String.raw`以三向量为列作矩阵
\[
A=\begin{pmatrix}1&1&a\\1&a&0\\0&1&1\end{pmatrix},\qquad
|A|=2a-1.
\]
故 \(a\neq\frac12\) 时 \(|A|\neq0\)，三向量线性无关，构成 \(\mathbb R^3\) 的基。当 \(a=0\) 时，
\[
\alpha_1=(1,1,0)^T,\quad \alpha_2=(1,0,1)^T,\quad \alpha_3=(0,0,1)^T.
\]
设 \(\beta=x\alpha_1+y\alpha_2+z\alpha_3\)，比较分量得
\[
x+y=1,\quad x=2,\quad y+z=3.
\]
解得 \(x=2,\ y=-1,\ z=4\)，故坐标为 \((2,-1,4)^T\)。代回验证 \(2\alpha_1-\alpha_2+4\alpha_3=(1,2,3)^T\)。` },
{ id:'LA03-94', ch:3, type:'证明', diff:5, tags:'基变换 过渡矩阵 可逆 线性无关',
  q: String.raw`设 \(\alpha_1,\dots,\alpha_n\) 是 \(n\) 维线性空间 \(V\) 的一组基，\(A=(a_{ij})\) 是 \(n\) 阶矩阵，令
\[
\beta_j=\sum_{i=1}^n a_{ij}\alpha_i,\qquad j=1,\dots,n.
\]
证明 \(\beta_1,\dots,\beta_n\) 构成 \(V\) 的基当且仅当 \(\det A\neq0\)。`,
  a: String.raw`结论成立；\(\beta\) 为基当且仅当过渡矩阵 \(A\) 可逆。`,
  sol: String.raw`设 \(\sum c_j\beta_j=0\)。代入 \(\beta_j\) 的表达式并交换求和次序：
\[
0=\sum_{j=1}^n c_j\sum_{i=1}^n a_{ij}\alpha_i
=\sum_{i=1}^n\left(\sum_{j=1}^n a_{ij}c_j\right)\alpha_i.
\]
由 \(\alpha_1,\dots,\alpha_n\) 线性无关，得 \(Ac=0\)。若 \(\det A\neq0\)，则 \(c=0\)，故 \(\beta_1,\dots,\beta_n\) 线性无关；又 \(n\) 个向量在 \(n\) 维空间中线性无关，故构成基。反之若 \(\det A=0\)，则存在非零 \(c\) 使 \(Ac=0\)，上面的计算给出 \(\sum c_j\beta_j=0\)，故 \(\beta\) 线性相关，不能构成基。` },
{ id:'LA03-95', ch:3, type:'计算', diff:5, tags:'线性变换 矩阵空间 交换子 核 像',
  q: String.raw`设 \(B=\begin{pmatrix}1&0\\0&2\end{pmatrix}\)，定义 \(T:M_2(\mathbb R)\to M_2(\mathbb R)\) 为 \(T(A)=AB-BA\)。求 \(T\) 在基 \(E_{11},E_{12},E_{21},E_{22}\) 下的矩阵，并求 \(r(T),\ \ker T,\ \operatorname{Im}T\)。`,
  a: String.raw`矩阵为 \(\operatorname{diag}(0,1,-1,0)\)；\(r(T)=2\)；\(\ker T=\operatorname{span}\{E_{11},E_{22}\}\)；\(\operatorname{Im}T=\operatorname{span}\{E_{12},E_{21}\}\)。`,
  sol: String.raw`逐個计算基矩阵的像：
\[
T(E_{11})=0,\quad T(E_{22})=0,
\]
\[
E_{12}B=\begin{pmatrix}0&2\\0&0\end{pmatrix},\quad BE_{12}=\begin{pmatrix}0&1\\0&0\end{pmatrix},\quad T(E_{12})=E_{12},
\]
\[
E_{21}B=\begin{pmatrix}0&0\\1&0\end{pmatrix},\quad BE_{21}=\begin{pmatrix}0&0\\2&0\end{pmatrix},\quad T(E_{21})=-E_{21}.
\]
以这些像的坐标为列，得矩阵 \(\operatorname{diag}(0,1,-1,0)\)，秩为 \(2\)。解 \(T(A)=0\) 即 \(AB=BA\)，设 \(A=\begin{pmatrix}a&b\\c&d\end{pmatrix}\)，比较得 \(b=0,\ c=0\)，故 \(A=aE_{11}+dE_{22}\)，\(\ker T=\operatorname{span}\{E_{11},E_{22}\}\)。像由 \(T(E_{12})=E_{12}\) 与 \(T(E_{21})=-E_{21}\) 张成，故 \(\operatorname{Im}T=\operatorname{span}\{E_{12},E_{21}\}\)。` },
{ id:'LA03-96', ch:3, type:'证明', diff:4, tags:'线性映射 线性相关 线性无关 单射',
  q: String.raw`设 \(T:V\to W\) 是线性映射，\(\alpha_1,\dots,\alpha_s\in V\)。证明：
（1）若 \(\alpha_1,\dots,\alpha_s\) 线性相关，则 \(T\alpha_1,\dots,T\alpha_s\) 线性相关；
（2）若 \(T\) 是单射，则 \(\alpha_1,\dots,\alpha_s\) 线性无关当且仅当 \(T\alpha_1,\dots,T\alpha_s\) 线性无关。`,
  a: String.raw`两个结论均成立。`,
  sol: String.raw`（1）若 \(\alpha_1,\dots,\alpha_s\) 线性相关，存在不全为零的 \(c_i\) 使 \(\sum c_i\alpha_i=0\)。由 \(T\) 线性，
\[
\sum c_iT\alpha_i=T\left(\sum c_i\alpha_i\right)=T(0)=0,
\]
且 \(c_i\) 不全为零，故 \(T\alpha_1,\dots,T\alpha_s\) 线性相关。
（2）若 \(\alpha_1,\dots,\alpha_s\) 线性无关，设 \(\sum c_iT\alpha_i=0\)，则 \(T(\sum c_i\alpha_i)=0\)。由 \(T\) 单射得 \(\sum c_i\alpha_i=0\)，再由 \(\alpha_i\) 线性无关得所有 \(c_i=0\)，故 \(T\alpha_1,\dots,T\alpha_s\) 线性无关。反之若 \(T\alpha_1,\dots,T\alpha_s\) 线性无关，设 \(\sum c_i\alpha_i=0\)，则 \(\sum c_iT\alpha_i=0\)，故所有 \(c_i=0\)，即 \(\alpha_1,\dots,\alpha_s\) 线性无关。` },
{ id:'LA03-97', ch:3, type:'计算', diff:5, tags:'不变子空间 商空间 诱导映射 矩阵',
  q: String.raw`设 \(V=\mathbb R^4\)，\(U=\operatorname{span}\{(1,0,1,0)^T,(0,1,0,1)^T\}\)，线性变换 \(T\) 定义为
\[
T(x)=(x_1+x_2,\ x_2+x_3,\ x_3+x_4,\ x_4+x_1)^T.
\]
证明 \(T(U)\subseteq U\)，并求 \(T\) 在商空间 \(V/U\) 上诱导的线性变换在基 \(e_1+U,\ e_2+U\) 下的矩阵。`,
  a: String.raw`\(T(U)\subseteq U\)；诱导变换的矩阵为 \(\begin{pmatrix}1&1\\-1&1\end{pmatrix}\)。`,
  sol: String.raw`记 \(u_1=(1,0,1,0)^T,\ u_2=(0,1,0,1)^T\)，则
\[
T(u_1)=(1,1,1,1)^T=u_1+u_2\in U,\qquad T(u_2)=(1,1,1,1)^T=u_1+u_2\in U.
\]
故 \(T(U)\subseteq U\)，诱导映射 \(\overline T(v+U)=T(v)+U\) 良定义。求 \(\overline T\) 在基 \(e_1+U,e_2+U\) 下的矩阵：分解
\[
T(e_1)=(1,0,0,1)^T=e_1-e_2+(0,1,0,1)^T,
\]
故 \(T(e_1)+U=(e_1+U)-(e_2+U)\)，坐标为 \((1,-1)^T\)。又
\[
T(e_2)=(1,1,0,0)^T=e_1+e_2,
\]
故 \(T(e_2)+U=(e_1+U)+(e_2+U)\)，坐标为 \((1,1)^T\)。以坐标为列得矩阵
\[
\begin{pmatrix}1&1\\-1&1\end{pmatrix}.
\]` },
{ id:'LA03-98', ch:3, type:'证明', diff:5, tags:'对偶基 基变换 逆矩阵',
  q: String.raw`设 \(\alpha_1,\dots,\alpha_n\) 是 \(V\) 的基，\(f^1,\dots,f^n\) 是其对偶基；令
\[
\beta_j=\sum_{i=1}^n a_{ij}\alpha_i,\qquad j=1,\dots,n,
\]
且 \(A=(a_{ij})\) 可逆。设 \(g^1,\dots,g^n\) 是 \(\beta_1,\dots,\beta_n\) 的对偶基。证明
\[
g^j=\sum_{k=1}^n (A^{-1})_{jk}f^k,\qquad j=1,\dots,n.
\]`,
  a: String.raw`公式成立；对偶基按 \(A^{-1}\) 的行线性组合变换。`,
  sol: String.raw`记 \(A^{-1}=(b_{jk})\)。对每个 \(l=1,\dots,n\)，计算
\[
\left(\sum_{k=1}^n b_{jk}f^k\right)(\beta_l)
=\sum_{k=1}^n b_{jk}f^k\left(\sum_{i=1}^n a_{il}\alpha_i\right)
=\sum_{k=1}^n b_{jk}a_{kl}
=(A^{-1}A)_{jl}=\delta_{jl}.
\]
因此线性函数 \(h_j=\sum_{k=1}^n b_{jk}f^k\) 满足 \(h_j(\beta_l)=\delta_{jl}\)。由对偶基的存在唯一性，\(h_j\) 就是 \(g^j\)，即
\[
g^j=\sum_{k=1}^n (A^{-1})_{jk}f^k.
\]` },
{ id:'LA03-99', ch:3, type:'证明', diff:5, tags:'维数公式 超平面 子空间交',
  q: String.raw`设 \(V\) 是 \(n\) 维线性空间，\(U,W\) 是 \(V\) 的子空间。证明
\[
\dim(U+W)+\dim(U\cap W)=\dim U+\dim W.
\]
并由此证明：\(V\) 中两个超平面（\(n-1\) 维子空间）的交的维数至少为 \(n-2\)。`,
  a: String.raw`维数公式成立；两个超平面的交的维数至少为 \(n-2\)。`,
  sol: String.raw`第一个等式就是维数公式
\[
\dim(U+W)=\dim U+\dim W-\dim(U\cap W)
\]
的移项。若 \(U,W\) 都是超平面，则 \(\dim U=\dim W=n-1\)，且 \(U+W\subseteq V\)，故 \(\dim(U+W)\le n\)。于是
\[
\dim(U\cap W)=\dim U+\dim W-\dim(U+W)
\ge 2(n-1)-n=n-2.
\]
因此两个超平面的交至少是 \(n-2\) 维的；当 \(U+W=V\) 时恰为 \(n-2\) 维。` },
{ id:'LA03-100', ch:3, type:'计算', diff:5, tags:'过渡矩阵 相似矩阵 线性变换 行列式',
  q: String.raw`设 \(\mathbb R^3\) 的基 (I) 为 \(\alpha_1=(1,1,0)^T,\ \alpha_2=(0,1,1)^T,\ \alpha_3=(1,0,1)^T\)，基 (II) 为 \(\beta_1=(1,0,0)^T,\ \beta_2=(1,1,0)^T,\ \beta_3=(1,1,1)^T\)。线性变换 \(T\) 在基 (I) 下的矩阵为
\[
A=\begin{pmatrix}1&2&0\\0&1&1\\1&0&1\end{pmatrix}.
\]
求由基 (I) 到基 (II) 的过渡矩阵 \(P\)，以及 \(T\) 在基 (II) 下的矩阵 \(B\)，并验证 \(\det A=\det B\)。`,
  a: String.raw`\(P=\begin{pmatrix}1/2&1&1/2\\-1/2&0&1/2\\1/2&0&1/2\end{pmatrix}\)，\(B=P^{-1}AP=\begin{pmatrix}1&1&0\\-3/2&0&1/2\\1&1&2\end{pmatrix}\)，且 \(\det A=\det B=3\)。`,
  sol: String.raw`记 \(A_0=(\alpha_1,\alpha_2,\alpha_3),\ B_0=(\beta_1,\beta_2,\beta_3)\)，则 \(P=A_0^{-1}B_0\)。由 LA03-82 的计算，
\[
P=\begin{pmatrix}1/2&1&1/2\\-1/2&0&1/2\\1/2&0&1/2\end{pmatrix},\qquad
P^{-1}=\begin{pmatrix}0&-1&1\\1&0&-1\\0&1&1\end{pmatrix}.
\]
因为 \(T\) 在基 (I) 下的矩阵为 \(A\)，在基 (II) 下的矩阵为 \(B=P^{-1}AP\)。计算
\[
AP=\begin{pmatrix}-1/2&1&3/2\\0&0&1\\1&1&1\end{pmatrix},
\]
再左乘 \(P^{-1}\)，得
\[
B=\begin{pmatrix}1&1&0\\-3/2&0&1/2\\1&1&2\end{pmatrix}.
\]
最后 \(\det A=1(1\cdot1-1\cdot0)-2(0\cdot1-1\cdot1)=3\)，而
\[
\det B=1(0\cdot2-\tfrac12\cdot1)-1(-\tfrac32\cdot2-\tfrac12\cdot1)=-\tfrac12+\tfrac72=3,
\]
故 \(\det A=\det B\)，与相似矩阵行列式相等一致。` }
);
