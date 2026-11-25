/* 第 5 章 特征值与特征向量 · 20 题 */
window.LBANK = window.LBANK || [];
window.LBANK.push(
{ id:'LA05-01', ch:5, type:'计算', diff:5, tags:'特征多项式 循环矩阵 迹与行列式',
  q: String.raw`设 \(A=\begin{pmatrix}1&2&3\\3&1&2\\2&3&1\end{pmatrix}\)，求 \(A\) 的特征多项式与全部特征值。`,
  a: String.raw`\(f(\lambda)=\lambda^{3}-3\lambda^{2}-15\lambda-18\)；特征值为 \(6,\;-\dfrac{3}{2}+\dfrac{\sqrt{3}}{2}\mathrm{i},\;-\dfrac{3}{2}-\dfrac{\sqrt{3}}{2}\mathrm{i}\)。`,
  sol: String.raw`第一步：计算特征行列式
\[
|\lambda I-A|=\begin{vmatrix}\lambda-1&-2&-3\\-3&\lambda-1&-2\\-2&-3&\lambda-1\end{vmatrix}
=\lambda^{3}-3\lambda^{2}-15\lambda-18.
\]
第二步：观察 \(\lambda=6\) 是根，因式分解得 \(f(\lambda)=(\lambda-6)(\lambda^{2}+3\lambda+3)\)。第三步：解 \(\lambda^{2}+3\lambda+3=0\)，得 \(\lambda=-\dfrac{3}{2}\pm\dfrac{\sqrt{3}}{2}\mathrm{i}\)。第四步：用 \(\mathrm{tr}(A)=3\) 与 \(|A|=18\) 复核：三个特征值之和为 \(3\)，之积为 \(18\)。` },

{ id:'LA05-02', ch:5, type:'计算', diff:5, tags:'矩阵多项式 特征值 行列式',
  q: String.raw`设 \(3\) 阶矩阵 \(A\) 的特征值为 \(1,-1,2\)，求 \(\det(A^{3}-3A^{2}+2A+I)\)。`,
  a: String.raw`\(-5\)。`,
  sol: String.raw`第一步：令 \(g(x)=x^{3}-3x^{2}+2x+1\)。第二步：\(g(A)\) 的特征值为 \(g(1),g(-1),g(2)\)，即 \(1,-5,1\)。第三步：行列式等于特征值之积，故 \(\det g(A)=1\cdot(-5)\cdot1=-5\)。第四步：若 \(A\) 不可对角化，可用上三角化说明特征值的多项式仍按代数重数对应，结论不变。` },

{ id:'LA05-03', ch:5, type:'计算', diff:5, tags:'秩一矩阵 特征值 矩阵幂',
  q: String.raw`设 \(\alpha=\begin{pmatrix}1\\2\\-1\end{pmatrix}\)，\(\beta=\begin{pmatrix}2\\-1\\3\end{pmatrix}\)，\(A=\alpha\beta^{\mathrm{T}}\)。求 \(A\) 的特征值、\(\mathrm{tr}(A^{100})\) 与 \(\det(A+I)\)。`,
  a: String.raw`特征值为 \(-3,0,0\)；\(\mathrm{tr}(A^{100})=3^{100}\)；\(\det(A+I)=-2\)。`,
  sol: String.raw`第一步：\(\beta^{\mathrm{T}}\alpha=2-2-3=-3\)，故 \(A^{2}=\alpha(\beta^{\mathrm{T}}\alpha)\beta^{\mathrm{T}}=-3A\)，从而 \(A^{k}=(-3)^{k-1}A\)。第二步：秩一矩阵 \(A\) 的特征值为 \(\beta^{\mathrm{T}}\alpha=-3\) 与两个 \(0\)。第三步：\(\mathrm{tr}(A^{100})=(-3)^{99}\mathrm{tr}(A)=(-3)^{99}\cdot(-3)=3^{100}\)。第四步：\(A+I\) 的特征值为 \(-2,1,1\)，故 \(\det(A+I)=-2\)。` },

{ id:'LA05-04', ch:5, type:'计算', diff:4, tags:'幂零矩阵 特征值 逆矩阵',
  q: String.raw`设 \(A=\begin{pmatrix}0&1&1\\0&0&1\\0&0&0\end{pmatrix}\)。(1) 证明 \(A\) 是幂零矩阵，并求其全部特征值；(2) 求 \((I-A)^{-1}\)。`,
  a: String.raw`\(A^{3}=0\)，特征值全为 \(0\)；\((I-A)^{-1}=\begin{pmatrix}1&1&2\\0&1&1\\0&0&1\end{pmatrix}\)。`,
  sol: String.raw`第一步：直接计算 \(A^{2}=\begin{pmatrix}0&0&1\\0&0&0\\0&0&0\end{pmatrix}\)，\(A^{3}=0\)。第二步：若 \(Ax=\lambda x\)，\(x\neq0\)，则 \(0=A^{3}x=\lambda^{3}x\)，故 \(\lambda=0\)。第三步：由 \(I-A^{3}=(I-A)(I+A+A^{2})=I\)，得 \((I-A)^{-1}=I+A+A^{2}\)。第四步：代入得 \((I-A)^{-1}=\begin{pmatrix}1&1&2\\0&1&1\\0&0&1\end{pmatrix}\)。` },

{ id:'LA05-05', ch:5, type:'证明', diff:5, tags:'对合矩阵 特征值 秩不等式',
  q: String.raw`设 \(A\) 为 \(n\) 阶矩阵，且 \(A^{2}=I\)。证明：(1) \(A\) 的特征值只能是 \(1\) 或 \(-1\)；(2) \(\mathrm{r}(A+I)+\mathrm{r}(A-I)=n\)。`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：设 \(Ax=\lambda x\)，\(x\neq0\)，则 \(\lambda^{2}x=A^{2}x=x\)，故 \(\lambda^{2}=1\)，即 \(\lambda=\pm1\)。第二步：由 \((A+I)(A-I)=A^{2}-I=0\) 及 Sylvester 秩不等式，得 \(\mathrm{r}(A+I)+\mathrm{r}(A-I)\le n\)。第三步：又 \((A+I)-(A-I)=2I\)，故 \(n=\mathrm{r}(2I)\le\mathrm{r}(A+I)+\mathrm{r}(A-I)\)。第四步：两边夹，得 \(\mathrm{r}(A+I)+\mathrm{r}(A-I)=n\)。` },

{ id:'LA05-06', ch:5, type:'计算', diff:4, tags:'正交矩阵 实对称矩阵 特征值',
  q: String.raw`设 \(Q=\dfrac{1}{3}\begin{pmatrix}1&2&2\\2&1&-2\\2&-2&1\end{pmatrix}\)。(1) 验证 \(Q\) 是正交矩阵；(2) 求 \(Q\) 的全部特征值。`,
  a: String.raw`\(Q^{\mathrm{T}}Q=I\)；特征值为 \(1,1,-1\)。`,
  sol: String.raw`第一步：直接计算 \(Q^{\mathrm{T}}Q=I\)，故 \(Q\) 为正交矩阵。第二步：\(Q^{\mathrm{T}}=Q\)，故 \(Q\) 为实对称矩阵，特征值全为实数。第三步：正交矩阵的特征值模为 \(1\)，故实特征值只能是 \(\pm1\)。第四步：\(\mathrm{tr}(Q)=1\)，\(|Q|=-1\)；设三个特征值为 \(\pm1\)，由和与积可知为 \(1,1,-1\)。` },

{ id:'LA05-07', ch:5, type:'证明', diff:5, tags:'正交矩阵 特征值 行列式',
  q: String.raw`设 \(A\) 为 \(3\) 阶正交矩阵，且 \(|A|=-1\)。证明 \(-1\) 是 \(A\) 的特征值。`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：设 \(\lambda\) 是 \(A\) 的复特征值，\(Ax=\lambda x\)，则 \(\|Ax\|=|\lambda|\,\|x\|=\|x\|\)，故 \(|\lambda|=1\)。第二步：\(A\) 为实矩阵，特征多项式为实系数多项式，非实特征值成共轭对出现，每对的乘积为 \(|\lambda|^{2}=1\)。第三步：\(|A|=\lambda_{1}\lambda_{2}\lambda_{3}=-1\)，故实特征值之积为 \(-1\)。第四步：实特征值只能为 \(\pm1\)，乘积为 \(-1\) 说明其中至少有一个 \(-1\)。` },

{ id:'LA05-08', ch:5, type:'计算', diff:5, tags:'Cayley-Hamilton 定理 特征多项式 逆矩阵',
  q: String.raw`设 \(A=\begin{pmatrix}0&1&0\\0&0&1\\6&-11&6\end{pmatrix}\)。(1) 求 \(A\) 的特征多项式；(2) 用 Cayley-Hamilton 定理求 \(A^{-1}\)。`,
  a: String.raw`\(f(\lambda)=\lambda^{3}-6\lambda^{2}+11\lambda-6\)；\(A^{-1}=\begin{pmatrix}\frac{11}{6}&-1&\frac{1}{6}\\1&0&0\\0&1&0\end{pmatrix}\)。`,
  sol: String.raw`第一步：展开 \(|\lambda I-A|\)，得 \(f(\lambda)=\lambda^{3}-6\lambda^{2}+11\lambda-6\)。第二步：由 Cayley-Hamilton 定理，\(A^{3}-6A^{2}+11A-6I=0\)。第三步：两边左乘 \(A^{-1}\)，得 \(A^{2}-6A+11I-6A^{-1}=0\)，故 \(A^{-1}=\dfrac{1}{6}(A^{2}-6A+11I)\)。第四步：计算 \(A^{2}=\begin{pmatrix}0&0&1\\6&-11&6\\36&-60&25\end{pmatrix}\)，代入得 \(A^{-1}=\begin{pmatrix}\frac{11}{6}&-1&\frac{1}{6}\\1&0&0\\0&1&0\end{pmatrix}\)。第五步：用 \(AA^{-1}=I\) 复核。` },

{ id:'LA05-09', ch:5, type:'计算', diff:5, tags:'AB BA 非零特征值',
  q: String.raw`设 \(A=\begin{pmatrix}1&2\\0&1\\1&0\end{pmatrix}\)，\(B=\begin{pmatrix}1&0&1\\0&1&1\end{pmatrix}\)。求 \(AB\) 的全部特征值，并说明 \(AB\) 与 \(BA\) 的非零特征值相同。`,
  a: String.raw`\(AB\) 的特征值为 \(3,0,0\)；\(BA\) 的特征值为 \(3,0\)。`,
  sol: String.raw`第一步：\(BA=\begin{pmatrix}2&2\\1&1\end{pmatrix}\)，特征多项式为 \(\lambda(\lambda-3)\)，特征值为 \(3,0\)。第二步：设 \(ABx=\lambda x\)，\(\lambda\neq0\)，则 \(BA(Bx)=\lambda Bx\)，且 \(Bx\neq0\)，故 \(\lambda\) 也是 \(BA\) 的特征值；反之同理。第三步：\(AB=\begin{pmatrix}1&2&3\\0&1&1\\1&0&1\end{pmatrix}\)，\(\mathrm{tr}(AB)=3\)，\(|AB|=0\)。第四步：非零特征值为 \(3\)，故 \(AB\) 的三个特征值为 \(3,0,0\)。` },

{ id:'LA05-10', ch:5, type:'计算', diff:5, tags:'伴随矩阵 特征值 行列式',
  q: String.raw`设 \(3\) 阶矩阵 \(A\) 的特征值为 \(1,1,2\)，且 \(|A|=2\)。求 \(\det(A^{*}-A)\)，其中 \(A^{*}\) 是 \(A\) 的伴随矩阵。`,
  a: String.raw`\(-1\)。`,
  sol: String.raw`第一步：\(A^{*}=|A|A^{-1}=2A^{-1}\)。第二步：\(A^{*}\) 与 \(A\) 有相同的特征向量，对应特征值为 \(\dfrac{2}{\lambda}\)。第三步：\(A^{*}-A\) 的特征值为 \(\dfrac{2}{\lambda}-\lambda\)，即 \(1,1,-1\)。第四步：故 \(\det(A^{*}-A)=1\cdot1\cdot(-1)=-1\)。` },

{ id:'LA05-11', ch:5, type:'计算', diff:4, tags:'逆矩阵 特征值 行列式',
  q: String.raw`设 \(3\) 阶可逆矩阵 \(A\) 的特征值为 \(1,2,-1\)。求 \(\det(A^{-1}+A)\)。`,
  a: String.raw`\(-10\)。`,
  sol: String.raw`第一步：\(A^{-1}+A\) 的特征值为 \(\lambda^{-1}+\lambda\)。第二步：分别代入得 \(2,\dfrac{5}{2},-2\)。第三步：故 \(\det(A^{-1}+A)=2\cdot\dfrac{5}{2}\cdot(-2)=-10\)。第四步：\(A\) 有三个互异特征值，必可对角化，因此上述特征值乘法有效。` },

{ id:'LA05-12', ch:5, type:'证明', diff:5, tags:'Gershgorin 圆盘 特征值估计 实对称矩阵',
  q: String.raw`设 \(A=\begin{pmatrix}4&1&0\\1&3&1\\0&1&2\end{pmatrix}\)。用 Gershgorin 圆盘定理证明 \(A\) 可逆，且 \(A\) 的所有特征值均为正数。`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：按行得三个 Gershgorin 圆盘：\(D(4,1)\)、\(D(3,2)\)、\(D(2,1)\)，即实轴上的区间 \([3,5]\)、\([1,5]\)、\([1,3]\)。第二步：任一特征值都落在这些圆盘的并集内，故其实部大于 \(0\)，特别地不为 \(0\)，所以 \(|A|\neq0\)，\(A\) 可逆。第三步：\(A\) 为实对称矩阵，特征值全为实数。第四步：结合实部为正，所有特征值均为正数。` },

{ id:'LA05-13', ch:5, type:'证明', diff:4, tags:'分块三角矩阵 特征多项式',
  q: String.raw`设 \(A=\begin{pmatrix}B&C\\0&D\end{pmatrix}\) 是分块上三角矩阵，其中 \(B\) 为 \(m\) 阶、\(D\) 为 \(n\) 阶方阵。证明 \(|\lambda I-A|=|\lambda I_{m}-B|\,|\lambda I_{n}-D|\)。`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：写成分块形式
\[
\lambda I-A=\begin{pmatrix}\lambda I_{m}-B&-C\\0&\lambda I_{n}-D\end{pmatrix}.
\]
第二步：分块上三角矩阵的行列式等于对角块行列式之积，故 \(|\lambda I-A|=|\lambda I_{m}-B|\,|\lambda I_{n}-D|\)。第三步：也可用分块消去法：当 \(\lambda I_{m}-B\) 可逆时，左乘可逆分块矩阵化为对角块。第四步：两边均为 \(\lambda\) 的多项式，恒等式成立，故特征值为 \(B\) 与 \(D\) 的特征值之并。` },

{ id:'LA05-14', ch:5, type:'证明', diff:4, tags:'特征向量 线性无关 数学归纳法',
  q: String.raw`设 \(\lambda_{1},\dots,\lambda_{k}\) 是 \(A\) 的互不相同的特征值，\(x_{i}\) 是对应于 \(\lambda_{i}\) 的特征向量。证明 \(x_{1},\dots,x_{k}\) 线性无关。`,
  a: String.raw`结论成立。`,
  sol: String.raw`对 \(k\) 归纳。第一步：\(k=1\) 时，特征向量非零，结论成立。第二步：设 \(c_{1}x_{1}+\cdots+c_{k}x_{k}=0\)。第三步：两边左乘 \(A\)，得 \(c_{1}\lambda_{1}x_{1}+\cdots+c_{k}\lambda_{k}x_{k}=0\)。第四步：第一式乘 \(\lambda_{k}\) 后与上式相减，得 \(\sum_{i=1}^{k-1}c_{i}(\lambda_{i}-\lambda_{k})x_{i}=0\)。第五步：由归纳假设 \(c_{i}(\lambda_{i}-\lambda_{k})=0\)，而 \(\lambda_{i}\neq\lambda_{k}\)，故 \(c_{i}=0\)；再得 \(c_{k}=0\)。` },

{ id:'LA05-15', ch:5, type:'计算', diff:4, tags:'谱半径 奇异值 特征值',
  q: String.raw`设 \(A=\begin{pmatrix}3&0\\4&5\end{pmatrix}\)。求 \(A\) 的谱半径 \(\rho(A)\) 与全部奇异值。`,
  a: String.raw`\(\rho(A)=5\)；奇异值为 \(3\sqrt{5},\sqrt{5}\)。`,
  sol: String.raw`第一步：\(A\) 为上三角矩阵，特征值为 \(3,5\)，故 \(\rho(A)=\max\{3,5\}=5\)。第二步：\(A^{\mathrm{T}}A=\begin{pmatrix}25&20\\20&25\end{pmatrix}\)。第三步：其特征值为 \(45,5\)。第四步：奇异值为 \(A^{\mathrm{T}}A\) 特征值的算术平方根，即 \(3\sqrt{5},\sqrt{5}\)。` },

{ id:'LA05-16', ch:5, type:'计算', diff:4, tags:'参数确定 特征值 秩',
  q: String.raw`设 \(A=\begin{pmatrix}a&1&1\\1&a&1\\1&1&a\end{pmatrix}\)。已知 \(\lambda=0\) 是 \(A\) 的二重特征值，求 \(a\) 与 \(A\) 的全部特征值。`,
  a: String.raw`\(a=1\)；特征值为 \(3,0,0\)。`,
  sol: String.raw`第一步：\(A\) 的特征值为 \(a+2\)（特征向量 \((1,1,1)^{\mathrm{T}}\)）与 \(a-1\)（二重，特征子空间 \(x+y+z=0\)）。第二步：\(0\) 是二重特征值，故 \(a-1=0\)，即 \(a=1\)。第三步：此时特征值为 \(3,0,0\)。第四步：用 \(\mathrm{tr}(A)=3\)、\(|A|=0\) 复核。` },

{ id:'LA05-17', ch:5, type:'计算', diff:5, tags:'矩阵方程 特征值 迹与行列式',
  q: String.raw`设 \(3\) 阶矩阵 \(A\) 满足 \(A^{2}-3A+2I=0\)，且 \(\mathrm{tr}(A)=5\)，\(|A|=4\)。求 \(A\) 的全部特征值。`,
  a: String.raw`\(2,2,1\)。`,
  sol: String.raw`第一步：由 \(A^{2}-3A+2I=0\)，每个特征值满足 \(\lambda^{2}-3\lambda+2=0\)，故 \(\lambda\in\{1,2\}\)。第二步：设特征值中 \(1\) 的个数为 \(k\)，则特征值之和为 \(k+2(3-k)=6-k\)。第三步：由 \(\mathrm{tr}(A)=5\)，得 \(6-k=5\)，即 \(k=1\)。第四步：故特征值为 \(1,2,2\)；此时 \(|A|=4\)，与题设一致。` },

{ id:'LA05-18', ch:5, type:'计算', diff:4, tags:'代数重数 几何重数 特征子空间',
  q: String.raw`设 \(A=\begin{pmatrix}1&1&0\\0&1&0\\0&0&1\end{pmatrix}\)。求每个特征值的代数重数与几何重数。`,
  a: String.raw`\(\lambda=1\)：代数重数 \(3\)，几何重数 \(2\)。`,
  sol: String.raw`第一步：\(|\lambda I-A|=(\lambda-1)^{3}\)，故 \(\lambda=1\) 的代数重数为 \(3\)。第二步：\(A-I=\begin{pmatrix}0&1&0\\0&0&0\\0&0&0\end{pmatrix}\)，其秩为 \(1\)。第三步：几何重数为 \(3-\mathrm{r}(A-I)=3-1=2\)。第四步：几何重数小于代数重数，故 \(A\) 不可对角化。` },

{ id:'LA05-19', ch:5, type:'证明', diff:5, tags:'实对称矩阵 特征值 特征向量正交',
  q: String.raw`设 \(A\) 为 \(n\) 阶实对称矩阵。证明：(1) \(A\) 的特征值都是实数；(2) 属于不同特征值的特征向量相互正交。`,
  a: String.raw`结论成立。`,
  sol: String.raw`(1) 第一步：设 \(Ax=\lambda x\)，\(x\neq0\) 为复向量，则 \(x^{*}Ax=\lambda x^{*}x\)。第二步：因 \(A\) 实对称，\(A^{*}=A\)，故 \(x^{*}Ax\) 为实数；又 \(x^{*}x>0\)，所以 \(\lambda\) 为实数。(2) 第三步：设 \(Ax=\lambda x\)，\(Ay=\mu y\)，\(\lambda\neq\mu\)。第四步：\(\lambda x^{\mathrm{T}}y=(Ax)^{\mathrm{T}}y=x^{\mathrm{T}}A^{\mathrm{T}}y=x^{\mathrm{T}}Ay=\mu x^{\mathrm{T}}y\)。第五步：故 \((\lambda-\mu)x^{\mathrm{T}}y=0\)，即 \(x^{\mathrm{T}}y=0\)，两特征向量正交。` },

{ id:'LA05-20', ch:5, type:'计算', diff:5, tags:'矩阵幂 特征值 行列式',
  q: String.raw`设 \(3\) 阶矩阵 \(A\) 满足 \(A^{3}=A\)，\(\mathrm{tr}(A)=1\)，\(|A|=0\)。求 \(A\) 的特征值与 \(\det(A+I)\)。`,
  a: String.raw`特征值为 \(0,0,1\)；\(\det(A+I)=2\)。`,
  sol: String.raw`第一步：由 \(A^{3}=A\)，每个特征值满足 \(\lambda^{3}=\lambda\)，故 \(\lambda\in\{-1,0,1\}\)。第二步：三个特征值之和为 \(\mathrm{tr}(A)=1\)，之积为 \(|A|=0\)。第三步：在 \(\{-1,0,1\}\) 中枚举，只有 \(0,0,1\) 满足和为 \(1\)、积为 \(0\)。第四步：\(A+I\) 的特征值为 \(1,1,2\)，故 \(\det(A+I)=2\)。` }
);
