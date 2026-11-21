/* 第 6 章 相似矩阵与对角化 · 补充 80 题（LA06-21 至 LA06-100） */
window.LBANK = window.LBANK || [];
window.LBANK.push(
{ id:'LA06-21', ch:6, type:'计算', diff:5, tags:'矩阵幂 最小多项式 逆矩阵 幂零部分',
  q: String.raw`设 \(A=\begin{pmatrix}1&0&0\\1&1&0\\0&1&1\end{pmatrix}\)。求 \(A^{n}\)（\(n\) 为正整数）、\(A\) 的最小多项式与 \(A^{-1}\)。`,
  a: String.raw`\(A^{n}=\begin{pmatrix}1&0&0\\n&1&0\\\dfrac{n(n-1)}{2}&n&1\end{pmatrix}\)；\(m(\lambda)=(\lambda-1)^{3}\)；\(A^{-1}=\begin{pmatrix}1&0&0\\-1&1&0\\1&-1&1\end{pmatrix}\)。`,
  sol: String.raw`第一步：令 \(N=A-I=\begin{pmatrix}0&0&0\\1&0&0\\0&1&0\end{pmatrix}\)，则 \(N^{2}=\begin{pmatrix}0&0&0\\0&0&0\\1&0&0\end{pmatrix}\)，\(N^{3}=0\)。第二步：\(A=I+N\)，且 \(I\) 与 \(N\) 可交换，故 \(A^{n}=I+nN+\dfrac{n(n-1)}{2}N^{2}\)。第三步：代入 \(N\) 与 \(N^{2}\) 得 \(A^{n}\) 如上。第四步：由 \(N^{2}\neq0\)、\(N^{3}=0\) 知 \((A-I)^{3}=0\) 而 \((A-I)^{2}\neq0\)，故最小多项式为 \((\lambda-1)^{3}\)。第五步：由 \((I+N)(I-N+N^{2})=I+N^{3}=I\) 得 \(A^{-1}=I-N+N^{2}\)，写开即得结果。` },

{ id:'LA06-22', ch:6, type:'计算', diff:5, tags:'矩阵幂 幂零部分 二项式展开 不可对角化',
  q: String.raw`设 \(A=\begin{pmatrix}3&1\\-1&1\end{pmatrix}\)，求 \(A^{n}\)（\(n\) 为正整数），并求 \(A\) 的最小多项式。`,
  a: String.raw`\(A^{n}=2^{n-1}\begin{pmatrix}n+2&n\\-n&2-n\end{pmatrix}\)；\(m(\lambda)=(\lambda-2)^{2}\)。`,
  sol: String.raw`第一步：\(|\lambda I-A|=(\lambda-3)(\lambda-1)+1=(\lambda-2)^{2}\)，特征值 \(2\)（二重）。第二步：令 \(N=A-2I=\begin{pmatrix}1&1\\-1&-1\end{pmatrix}\)，则 \(N^{2}=0\)，故 \(\lambda=2\) 的几何重数为 \(1\)，\(A\) 不可对角化。第三步：\(A=2I+N\) 且两部分可交换，故 \(A^{n}=2^{n}I+n2^{n-1}N\)。第四步：代入 \(N\) 得 \(A^{n}=2^{n-1}\begin{pmatrix}2+n&n\\-n&2-n\end{pmatrix}\)。第五步：\(N\neq0\)、\(N^{2}=0\)，故最小多项式为 \((\lambda-2)^{2}\)。` },

{ id:'LA06-23', ch:6, type:'计算', diff:4, tags:'友矩阵 特征多项式 最小多项式 可对角化判定',
  q: String.raw`设 \(A=\begin{pmatrix}0&0&6\\1&0&-11\\0&1&6\end{pmatrix}\)。求 \(A\) 的特征多项式与最小多项式，并判断 \(A\) 是否可对角化。`,
  a: String.raw`特征多项式与最小多项式都是 \(\lambda^{3}-6\lambda^{2}+11\lambda-6=(\lambda-1)(\lambda-2)(\lambda-3)\)；\(A\) 可对角化，且 \(A\sim\mathrm{diag}(1,2,3)\)。`,
  sol: String.raw`第一步：该矩阵为友矩阵，按第一行（或按最后一列）展开得 \(|\lambda I-A|=\lambda^{3}-6\lambda^{2}+11\lambda-6\)。第二步：分解得 \((\lambda-1)(\lambda-2)(\lambda-3)\)，特征值为 \(1,2,3\)。第三步：三个特征值互异，特征子空间维数之和为 \(3\)，故 \(A\) 可对角化。第四步：特征值互异时最小多项式与特征多项式同为零化 \(A\) 的最低次首一多项式，故 \(m(\lambda)=\lambda^{3}-6\lambda^{2}+11\lambda-6\)。第五步：于是 \(A\sim\mathrm{diag}(1,2,3)\)。` },

{ id:'LA06-24', ch:6, type:'计算', diff:4, tags:'矩阵指数 相似对角化 上三角矩阵',
  q: String.raw`设 \(A=\begin{pmatrix}1&1\\0&2\end{pmatrix}\)，求 \(\mathrm{e}^{A}\)。`,
  a: String.raw`\(\mathrm{e}^{A}=\begin{pmatrix}\mathrm{e}&\mathrm{e}^{2}-\mathrm{e}\\0&\mathrm{e}^{2}\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(A\) 的特征值为 \(1,2\)，对应特征向量 \((1,0)^{\mathrm{T}}\)、\((1,1)^{\mathrm{T}}\)。第二步：取 \(P=\begin{pmatrix}1&1\\0&1\end{pmatrix}\)，则 \(P^{-1}=\begin{pmatrix}1&-1\\0&1\end{pmatrix}\)，且 \(A=P\mathrm{diag}(1,2)P^{-1}\)。第三步：矩阵指数与相似变换相容，故 \(\mathrm{e}^{A}=P\mathrm{diag}(\mathrm{e},\mathrm{e}^{2})P^{-1}\)。第四步：乘开得 \(\mathrm{e}^{A}=\begin{pmatrix}\mathrm{e}&\mathrm{e}^{2}-\mathrm{e}\\0&\mathrm{e}^{2}\end{pmatrix}\)。第五步：也可用上三角情形的公式 \(\mathrm{e}^{A}=\begin{pmatrix}\mathrm{e}^{a}&\frac{\mathrm{e}^{b}-\mathrm{e}^{a}}{b-a}\\0&\mathrm{e}^{b}\end{pmatrix}\) 复核。` },

{ id:'LA06-25', ch:6, type:'计算', diff:5, tags:'Sylvester 方程 矩阵方程 特征值互异 唯一解',
  q: String.raw`设 \(A=\begin{pmatrix}1&0\\0&3\end{pmatrix}\)，\(B=\begin{pmatrix}2&0\\0&4\end{pmatrix}\)，\(C=\begin{pmatrix}1&1\\1&1\end{pmatrix}\)。求矩阵方程 \(AX-XB=C\) 的解 \(X\)。`,
  a: String.raw`\(X=\begin{pmatrix}-1&-\dfrac{1}{3}\\1&-1\end{pmatrix}\)。`,
  sol: String.raw`第一步：设 \(X=(x_{ij})\)。因 \(A,B\) 都是对角矩阵，\(AX-XB\) 的第 \((i,j)\) 个元素为 \((a_{i}-b_{j})x_{ij}\)。第二步：\(a_{1}-b_{1}=1-2=-1\neq0\)，得 \(x_{11}=-1\)。第三步：\(a_{1}-b_{2}=1-4=-3\)，得 \(x_{12}=-\dfrac{1}{3}\)。第四步：\(a_{2}-b_{1}=3-2=1\)，得 \(x_{21}=1\)；\(a_{2}-b_{2}=3-4=-1\)，得 \(x_{22}=-1\)。第五步：\(A\) 与 \(B\) 无公共特征值，该方程的解唯一，故 \(X\) 如上。` },

{ id:'LA06-26', ch:6, type:'计算', diff:5, tags:'矩阵幂 幂零部分 Jordan 块 最小多项式',
  q: String.raw`设 \(A=\begin{pmatrix}2&-1\\1&0\end{pmatrix}\)，求 \(A^{n}\)（\(n\) 为正整数）与 \(A\) 的最小多项式。`,
  a: String.raw`\(A^{n}=\begin{pmatrix}1+n&-n\\n&1-n\end{pmatrix}\)；\(m(\lambda)=(\lambda-1)^{2}\)。`,
  sol: String.raw`第一步：\(|\lambda I-A|=(\lambda-2)\lambda+1=(\lambda-1)^{2}\)。第二步：令 \(N=A-I=\begin{pmatrix}1&-1\\1&-1\end{pmatrix}\)，则 \(N^{2}=0\) 而 \(N\neq0\)，故 \(A\) 的 Jordan 形为 \(J_{2}(1)\)，最小多项式为 \((\lambda-1)^{2}\)。第三步：\(A=I+N\) 且两部分可交换，故 \(A^{n}=I+nN\)。第四步：代入 \(N\) 得 \(A^{n}=\begin{pmatrix}1+n&-n\\n&1-n\end{pmatrix}\)。第五步：核对 \(n=1\) 时还原为 \(A\)，\(n=2\) 时得 \(\begin{pmatrix}3&-2\\2&-1\end{pmatrix}\)，与直接平方一致。` },

{ id:'LA06-27', ch:6, type:'计算', diff:5, tags:'幂零矩阵 Jordan 标准形 秩与块数 幂零指数',
  q: String.raw`设 \(A\) 为 \(5\) 阶复矩阵，满足 \(A^{3}=0\)，且 \(\mathrm{r}(A)=3\)，\(\mathrm{r}(A^{2})=1\)。求 \(A\) 的 Jordan 标准形。`,
  a: String.raw`\(J=J_{3}(0)\oplus J_{2}(0)\)。`,
  sol: String.raw`第一步：\(A\) 幂零，特征值全为 \(0\)，全部 Jordan 块形如 \(J_{k}(0)\)。第二步：记 \(r_{j}=\mathrm{r}(A^{j})\)，则 \(r_{0}-r_{1}=5-3=2\) 等于 Jordan 块的总个数。第三步：\(r_{1}-r_{2}=3-1=2\) 等于大小不小于 \(2\) 的块数；\(r_{2}-r_{3}=1-0=1\) 等于大小不小于 \(3\) 的块数。第四步：块数为 \(2\)、总阶数为 \(5\)，且有一个块不小于 \(3\) 阶，只能是 \(3+2\)。第五步：故 \(J=J_{3}(0)\oplus J_{2}(0)\)，幂零指数为 \(3\)。` },

{ id:'LA06-28', ch:6, type:'计算', diff:5, tags:'Jordan 块平方 幂零矩阵 直和分解',
  q: String.raw`设 \(A=J_{3}(0)\oplus J_{2}(0)\oplus J_{1}(0)\)（\(6\) 阶）。求 \(A^{2}\) 的 Jordan 标准形。`,
  a: String.raw`\(A^{2}\sim J_{2}(0)\oplus J_{1}(0)\oplus J_{1}(0)\oplus J_{1}(0)\oplus J_{1}(0)\)，即一个 \(2\) 阶块与四个 \(1\) 阶块。`,
  sol: String.raw`第一步：\(J_{3}(0)^{2}=\begin{pmatrix}0&0&1\\0&0&0\\0&0&0\end{pmatrix}\)，秩为 \(1\)、平方为零、本身不为零，故相似于 \(J_{2}(0)\oplus J_{1}(0)\)。第二步：\(J_{2}(0)^{2}=0\)，故相似于 \(J_{1}(0)\oplus J_{1}(0)\)。第三步：\(J_{1}(0)^{2}=0\)，仍为一个 \(1\) 阶零块。第四步：\(A^{2}\) 是各块平方的直和，把上述三部分合并：一个 \(2\) 阶块加 \(1+2+1=4\) 个 \(1\) 阶块。第五步：故 \(A^{2}\sim J_{2}(0)\oplus 4J_{1}(0)\)，其秩为 \(1\)，与 \(\mathrm{r}(A^{2})=1\) 相符。` },

{ id:'LA06-29', ch:6, type:'计算', diff:4, tags:'矩阵指数 幂零矩阵 指数级数 单参数族',
  q: String.raw`设 \(N=\begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix}\)，求 \(\mathrm{e}^{N}\) 与 \(\mathrm{e}^{Nt}\)（\(t\) 为参数）。`,
  a: String.raw`\(\mathrm{e}^{N}=\begin{pmatrix}1&1&\frac{1}{2}\\0&1&1\\0&0&1\end{pmatrix}\)；\(\mathrm{e}^{Nt}=\begin{pmatrix}1&t&\frac{t^{2}}{2}\\0&1&t\\0&0&1\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(N^{2}=\begin{pmatrix}0&0&1\\0&0&0\\0&0&0\end{pmatrix}\)，\(N^{3}=0\)。第二步：幂零矩阵的指数级数只有有限项，\(\mathrm{e}^{Nt}=I+tN+\dfrac{t^{2}}{2}N^{2}\)。第三步：取 \(t=1\) 得 \(\mathrm{e}^{N}=I+N+\dfrac{1}{2}N^{2}\)。第四步：代入 \(N\) 与 \(N^{2}\) 即得两个矩阵。` },

{ id:'LA06-30', ch:6, type:'计算', diff:4, tags:'秩一矩阵 矩阵幂 特征值 迹',
  q: String.raw`设 \(A=\begin{pmatrix}1&2\\2&4\end{pmatrix}\)，求 \(A^{n}\)（\(n\) 为正整数）。`,
  a: String.raw`\(A^{n}=5^{n-1}\begin{pmatrix}1&2\\2&4\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(\mathrm{r}(A)=1\)，且 \(A=\alpha\alpha^{\mathrm{T}}\)，其中 \(\alpha=(1,2)^{\mathrm{T}}\)。第二步：\(\alpha^{\mathrm{T}}\alpha=1+4=5\)。第三步：\(A^{2}=\alpha(\alpha^{\mathrm{T}}\alpha)\alpha^{\mathrm{T}}=5A\)。第四步：归纳得 \(A^{n}=5^{n-1}A\)，即 \(A^{n}=5^{n-1}\begin{pmatrix}1&2\\2&4\end{pmatrix}\)。第五步：核对 \(n=2\) 时 \(A^{2}=\begin{pmatrix}5&10\\10&20\end{pmatrix}=5A\)，且特征值 \(5,0\) 与 \(\mathrm{tr}A=5\)、\(|A|=0\) 一致。` },

{ id:'LA06-31', ch:6, type:'计算', diff:5, tags:'秩一矩阵 全一矩阵 矩阵幂 最小多项式',
  q: String.raw`设 \(A\) 为 \(3\) 阶全 \(1\) 矩阵。求 \(A^{n}\) 与 \(A\) 的最小多项式，并求 \(A\) 的特征值。`,
  a: String.raw`\(A^{n}=3^{n-1}A\)；\(m(\lambda)=\lambda^{2}-3\lambda=\lambda(\lambda-3)\)；特征值为 \(3,0,0\)。`,
  sol: String.raw`第一步：记 \(e=(1,1,1)^{\mathrm{T}}\)，则 \(A=ee^{\mathrm{T}}\)，且 \(e^{\mathrm{T}}e=3\)。第二步：\(A^{2}=e(e^{\mathrm{T}}e)e^{\mathrm{T}}=3A\)。第三步：归纳得 \(A^{n}=3^{n-1}A\)（\(n\ge1\)）。第四步：由 \(A^{2}-3A=0\) 知最小多项式整除 \(\lambda(\lambda-3)\)；又 \(A\neq0\) 排除 \(\lambda\)，\(A\neq3I\) 排除 \(\lambda-3\)，故 \(m(\lambda)=\lambda(\lambda-3)\)。第五步：最小多项式无重根，\(A\) 可对角化；由 \(\mathrm{tr}A=3\)、\(\mathrm{r}(A)=1\) 得特征值为 \(3,0,0\)。` },

{ id:'LA06-32', ch:6, type:'计算', diff:5, tags:'Jordan 块幂 矩阵指数 二项式展开',
  q: String.raw`设 \(A=\begin{pmatrix}2&1&0\\0&2&1\\0&0&2\end{pmatrix}\)，求 \(A^{n}\)（\(n\) 为正整数）与 \(\mathrm{e}^{A}\)。`,
  a: String.raw`\(A^{n}=\begin{pmatrix}2^{n}&n2^{n-1}&\dfrac{n(n-1)}{2}2^{n-2}\\0&2^{n}&n2^{n-1}\\0&0&2^{n}\end{pmatrix}\)；\(\mathrm{e}^{A}=\mathrm{e}^{2}\begin{pmatrix}1&1&\frac{1}{2}\\0&1&1\\0&0&1\end{pmatrix}\)。`,
  sol: String.raw`第一步：令 \(N=A-2I=\begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix}\)，则 \(N^{2}=\begin{pmatrix}0&0&1\\0&0&0\\0&0&0\end{pmatrix}\)，\(N^{3}=0\)。第二步：\(A=2I+N\) 且两部分可交换，二项式展开 \(A^{n}=2^{n}I+n2^{n-1}N+\dfrac{n(n-1)}{2}2^{n-2}N^{2}\)。第三步：代入 \(N,N^{2}\) 得 \(A^{n}\)。第四步：\(\mathrm{e}^{A}=\mathrm{e}^{2}\mathrm{e}^{N}=\mathrm{e}^{2}\left(I+N+\dfrac{1}{2}N^{2}\right)\)。第五步：代入得 \(\mathrm{e}^{A}=\mathrm{e}^{2}\begin{pmatrix}1&1&\frac{1}{2}\\0&1&1\\0&0&1\end{pmatrix}\)。` },

{ id:'LA06-33', ch:6, type:'计算', diff:5, tags:'Jordan 基 广义特征向量 幂零指数 相似变换',
  q: String.raw`设 \(A=\begin{pmatrix}0&1&0\\0&0&1\\1&-3&3\end{pmatrix}\)。求可逆矩阵 \(P\)，使 \(P^{-1}AP=J_{3}(1)\)。`,
  a: String.raw`\(P=\begin{pmatrix}1&0&0\\1&1&0\\1&2&1\end{pmatrix}\)，此时 \(P^{-1}AP=J_{3}(1)\)。`,
  sol: String.raw`第一步：\(|\lambda I-A|=\lambda^{3}-3\lambda^{2}+3\lambda-1=(\lambda-1)^{3}\)，特征值只有 \(1\)。第二步：\(A-I=\begin{pmatrix}-1&1&0\\0&-1&1\\1&-3&2\end{pmatrix}\)，第三行等于第一行的相反数加第二行的两倍，秩为 \(2\)，故几何重数为 \(1\)，Jordan 形为单个 \(J_{3}(1)\)。第三步：解 \((A-I)x=0\) 得特征向量 \(v_{1}=(1,1,1)^{\mathrm{T}}\)。第四步：解 \((A-I)v_{2}=v_{1}\) 得 \(v_{2}=(0,1,2)^{\mathrm{T}}\)；解 \((A-I)v_{3}=v_{2}\) 得 \(v_{3}=(0,0,1)^{\mathrm{T}}\)（即 \(A-I\) 的第三列）。第五步：取 \(P=(v_{1},v_{2},v_{3})\)，由 \(Av_{1}=v_{1}\)、\(Av_{2}=v_{1}+v_{2}\)、\(Av_{3}=v_{2}+v_{3}\) 得 \(P^{-1}AP=J_{3}(1)\)。` },

{ id:'LA06-34', ch:6, type:'计算', diff:5, tags:'实 Jordan 形 共轭特征值 旋转块 复数域对角化',
  q: String.raw`设 \(A=\begin{pmatrix}0&-1&0\\1&0&0\\0&0&2\end{pmatrix}\)。求 \(A\) 在复数域上的 Jordan 标准形，并写出它在实数域上的实 Jordan 形。`,
  a: String.raw`复数域上 \(J=\mathrm{diag}(\mathrm{i},-\mathrm{i},2)\)；实数域上的实 Jordan 形就是 \(A\) 本身，即 \(\mathrm{diag}\left(\begin{pmatrix}0&-1\\1&0\end{pmatrix},2\right)\)。`,
  sol: String.raw`第一步：\(|\lambda I-A|=(\lambda^{2}+1)(\lambda-2)\)，特征值为 \(\mathrm{i},-\mathrm{i},2\)。第二步：三个特征值互异，故 \(A\) 在复数域上可对角化，\(J=\mathrm{diag}(\mathrm{i},-\mathrm{i},2)\)。第三步：实矩阵的非实特征值必成共轭对 \(\mathrm{i},-\mathrm{i}\)，对应的实 Jordan 块为 \(\begin{pmatrix}a&-b\\b&a\end{pmatrix}\)，此处 \(a=0,b=1\)。第四步：故实 Jordan 形为 \(\mathrm{diag}\left(\begin{pmatrix}0&-1\\1&0\end{pmatrix},2\right)\)，恰为 \(A\) 本身。第五步：这说明 \(A\) 在实数域上不可对角化，但在实数域上仍可化为实 Jordan 形。` },

{ id:'LA06-35', ch:6, type:'计算', diff:4, tags:'旋转矩阵 矩阵幂 矩阵指数 周期性',
  q: String.raw`设 \(A=\begin{pmatrix}0&-1\\1&0\end{pmatrix}\)，求 \(A^{100}\) 与 \(\mathrm{e}^{A}\)。`,
  a: String.raw`\(A^{100}=I\)；\(\mathrm{e}^{A}=\begin{pmatrix}\cos1&\sin1\\-\sin1&\cos1\end{pmatrix}\)。`,
  sol: String.raw`第一步：直接计算得 \(A^{2}=-I\)，故 \(A^{4}=I\)。第二步：\(100=4\times25\)，故 \(A^{100}=(A^{4})^{25}=I\)。第三步：把 \(\mathrm{e}^{A}\) 的级数按偶次项与奇次项分组，偶次项为 \(\left(1-\frac{1}{2!}+\frac{1}{4!}-\cdots\right)A^{0}=\cos1\,I\)。第四步：奇次项为 \(\left(1-\frac{1}{3!}+\frac{1}{5!}-\cdots\right)A=\sin1\,A\)。第五步：故 \(\mathrm{e}^{A}=\cos1\,I+\sin1\,A=\begin{pmatrix}\cos1&\sin1\\-\sin1&\cos1\end{pmatrix}\)。` },

{ id:'LA06-36', ch:6, type:'计算', diff:5, tags:'矩阵指数 单参数族 幂零部分 常微分方程',
  q: String.raw`设 \(A=\begin{pmatrix}-1&1\\0&-1\end{pmatrix}\)，求 \(\mathrm{e}^{At}\)（\(t\) 为实参数）。`,
  a: String.raw`\(\mathrm{e}^{At}=\mathrm{e}^{-t}\begin{pmatrix}1&t\\0&1\end{pmatrix}\)。`,
  sol: String.raw`第一步：令 \(N=A+I=\begin{pmatrix}0&1\\0&0\end{pmatrix}\)，则 \(N^{2}=0\)。第二步：\(At=t(-I+N)=-tI+tN\)，两个加项可交换。第三步：\(\mathrm{e}^{At}=\mathrm{e}^{-tI}\mathrm{e}^{tN}=\mathrm{e}^{-t}(I+tN)\)。第四步：代入 \(N\) 得 \(\mathrm{e}^{At}=\mathrm{e}^{-t}\begin{pmatrix}1&t\\0&1\end{pmatrix}\)。第五步：求导验证 \(\dfrac{\mathrm{d}}{\mathrm{d}t}\mathrm{e}^{At}=A\mathrm{e}^{At}\) 成立。` },

{ id:'LA06-37', ch:6, type:'计算', diff:5, tags:'矩阵多项式 最小多项式 矩阵幂 特征值',
  q: String.raw`设 \(2\) 阶矩阵 \(A\) 满足 \(A^{2}=A+2I\)。求 \(A^{n}\)（用 \(A\) 与 \(I\) 表示），并求 \(A\) 可能的特征值。`,
  a: String.raw`\(A^{n}=\dfrac{2^{n}-(-1)^{n}}{3}A+\dfrac{2^{n}+2(-1)^{n}}{3}I\)；\(A\) 的特征值只能取 \(2\) 或 \(-1\)。`,
  sol: String.raw`第一步：由 \(A^{2}=A+2I\) 知最小多项式整除 \(\lambda^{2}-\lambda-2=(\lambda-2)(\lambda+1)\)。第二步：设 \(\lambda^{n}=p(\lambda)(\lambda^{2}-\lambda-2)+\alpha_{n}\lambda+\beta_{n}\)，代入 \(\lambda=2\) 与 \(\lambda=-1\) 得 \(2^{n}=2\alpha_{n}+\beta_{n}\)，\((-1)^{n}=-\alpha_{n}+\beta_{n}\)。第三步：解得 \(\alpha_{n}=\dfrac{2^{n}-(-1)^{n}}{3}\)，\(\beta_{n}=\dfrac{2^{n}+2(-1)^{n}}{3}\)。第四步：把 \(\lambda\) 换成 \(A\)，用 \(A^{2}-A-2I=0\) 消去高次项得 \(A^{n}=\alpha_{n}A+\beta_{n}I\)。第五步：最小多项式的根只有 \(2\) 与 \(-1\)，故特征值属于 \(\{2,-1\}\)；例如 \(n=2\) 时 \(\alpha_{2}=1,\beta_{2}=2\)，确实 \(A^{2}=A+2I\)。` },

{ id:'LA06-38', ch:6, type:'计算', diff:5, tags:'矩阵幂 幂零指数 最小多项式 二项式系数',
  q: String.raw`设 \(A=\begin{pmatrix}1&1&0\\0&1&1\\0&0&1\end{pmatrix}\)，求 \(A^{100}\) 与 \(A\) 的最小多项式。`,
  a: String.raw`\(A^{100}=\begin{pmatrix}1&100&4950\\0&1&100\\0&0&1\end{pmatrix}\)；\(m(\lambda)=(\lambda-1)^{3}\)。`,
  sol: String.raw`第一步：令 \(N=A-I=\begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix}\)，则 \(N^{2}=\begin{pmatrix}0&0&1\\0&0&0\\0&0&0\end{pmatrix}\)，\(N^{3}=0\)。第二步：\(A^{100}=I+100N+\dfrac{100\times99}{2}N^{2}\)。第三步：代入 \(N,N^{2}\) 得 \(A^{100}=I+100N+4950N^{2}=\begin{pmatrix}1&100&4950\\0&1&100\\0&0&1\end{pmatrix}\)。第四步：因 \(N^{2}\neq0\)、\(N^{3}=0\)，最小多项式为 \((\lambda-1)^{3}\)，\(A\) 不可对角化。` },

{ id:'LA06-39', ch:6, type:'计算', diff:5, tags:'不变因子 有理标准形 友矩阵 Jordan 块',
  q: String.raw`设 \(A=J_{2}(1)\oplus J_{1}(1)=\begin{pmatrix}1&1&0\\0&1&0\\0&0&1\end{pmatrix}\)。求 \(A\) 的不变因子与有理标准形。`,
  a: String.raw`不变因子 \(d_{1}(\lambda)=\lambda-1\)，\(d_{2}(\lambda)=(\lambda-1)^{2}\)；有理标准形为 \(\mathrm{diag}\left(1,\begin{pmatrix}0&-1\\1&2\end{pmatrix}\right)\)。`,
  sol: String.raw`第一步：\(A\) 的初等因子为 \(\lambda-1\)（来自两个 \(1\) 阶块）与 \((\lambda-1)^{2}\)（来自 \(2\) 阶块）。第二步：不变因子是把同一素因子的幂按从低到高分配到 \(d_{1}\mid d_{2}\mid\cdots\)，故 \(d_{1}=\lambda-1\)，\(d_{2}=(\lambda-1)^{2}\)。第三步：\(d_{1}\) 的友矩阵为 \((1)\)，\(d_{2}=\lambda^{2}-2\lambda+1\) 的友矩阵为 \(\begin{pmatrix}0&-1\\1&2\end{pmatrix}\)。第四步：有理标准形为各友矩阵的直和 \(\mathrm{diag}\left(1,\begin{pmatrix}0&-1\\1&2\end{pmatrix}\right)\)。第五步：它与 \(A\) 的不变因子相同，故与 \(A\) 相似（所有相似类由不变因子唯一决定）。` },

{ id:'LA06-40', ch:6, type:'计算', diff:5, tags:'Jordan 标准形 秩条件 代数重数 最小多项式',
  q: String.raw`设 \(4\) 阶矩阵 \(A\) 的特征多项式为 \((\lambda-1)^{4}\)，且 \(\mathrm{r}(A-I)=2\)，\(\mathrm{r}((A-I)^{2})=1\)。求 \(A\) 的 Jordan 标准形与最小多项式。`,
  a: String.raw`\(J=J_{3}(1)\oplus J_{1}(1)\)；最小多项式为 \((\lambda-1)^{3}\)。`,
  sol: String.raw`第一步：设 \(\lambda=1\) 的 Jordan 块大小为 \(k_{1},\dots,k_{s}\)，则 \(\mathrm{r}((A-I)^{j})=\sum_{i}\max(k_{i}-j,\,0)\)。第二步：\(j=0,1\) 之差为 \(4-2=2\)，即块数 \(s=2\)。第三步：\(j=1,2\) 之差为 \(2-1=1\)，即存在一个阶数不小于 \(3\) 的块。第四步：两块总阶数为 \(4\)，只能是 \(3+1\)。第五步：故 \(J=J_{3}(1)\oplus J_{1}(1)\)，最小多项式为 \((\lambda-1)^{3}\)，\(A\) 不可对角化。` },

{ id:'LA06-41', ch:6, type:'计算', diff:4, tags:'相似类计数 分拆 Jordan 标准形 特征多项式',
  q: String.raw`特征多项式为 \((\lambda-2)^{3}(\lambda-3)\) 的 \(4\) 阶复矩阵共有多少个相似类？说明理由。`,
  a: String.raw`共 \(3\) 个相似类。`,
  sol: String.raw`第一步：复矩阵的相似类由 Jordan 标准形（不计块的次序）唯一决定。第二步：\(\lambda=3\) 是单特征值，其块固定为 \(J_{1}(3)\)。第三步：\(\lambda=2\) 的代数重数为 \(3\)，其 Jordan 块大小构成整数 \(3\) 的一个分拆。第四步：分拆共有 \(3\)；\(2+1\)；\(1+1+1\) 三种。第五步：故相似类共 \(3\) 个，分别对应 \(J_{3}(2)\)、\(J_{2}(2)\oplus J_{1}(2)\)、\(3J_{1}(2)\) 再直和 \(J_{1}(3)\)。` },

{ id:'LA06-42', ch:6, type:'计算', diff:4, tags:'矩阵幂 相似对角化 特征向量 具体数值',
  q: String.raw`设 \(A=\begin{pmatrix}2&1\\1&2\end{pmatrix}\)，求 \(A^{10}\)。`,
  a: String.raw`\(A^{10}=\begin{pmatrix}29525&29524\\29524&29525\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(|\lambda I-A|=(\lambda-2)^{2}-1=(\lambda-3)(\lambda-1)\)，特征值 \(3,1\)。第二步：特征向量分别为 \((1,1)^{\mathrm{T}}\)、\((1,-1)^{\mathrm{T}}\)，取 \(P=\begin{pmatrix}1&1\\1&-1\end{pmatrix}\)，则 \(P^{-1}=\dfrac{1}{2}P\)。第三步：\(A^{10}=P\mathrm{diag}(3^{10},1)P^{-1}\)。第四步：由 \(3^{10}=59049\) 得 \(A^{10}=\dfrac{1}{2}\begin{pmatrix}59050&59048\\59048&59050\end{pmatrix}\)。第五步：即 \(A^{10}=\begin{pmatrix}29525&29524\\29524&29525\end{pmatrix}\)。` },

{ id:'LA06-43', ch:6, type:'计算', diff:4, tags:'分块对角矩阵 矩阵幂 幂零部分',
  q: String.raw`设 \(A=\begin{pmatrix}1&2&0\\0&1&0\\0&0&3\end{pmatrix}\)，求 \(A^{n}\)（\(n\) 为正整数）。`,
  a: String.raw`\(A^{n}=\begin{pmatrix}1&2n&0\\0&1&0\\0&0&3^{n}\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(A=\mathrm{diag}\left(B,3\right)\)，其中 \(B=\begin{pmatrix}1&2\\0&1\end{pmatrix}\)。第二步：写 \(B=I+N\)，\(N=\begin{pmatrix}0&2\\0&0\end{pmatrix}\)，则 \(N^{2}=0\)。第三步：\((I+N)^{n}=I+nN=\begin{pmatrix}1&2n\\0&1\end{pmatrix}\)。第四步：分块对角矩阵的幂逐块取幂，故 \(A^{n}=\mathrm{diag}\left(\begin{pmatrix}1&2n\\0&1\end{pmatrix},3^{n}\right)\)。` },

{ id:'LA06-44', ch:6, type:'计算', diff:5, tags:'Jordan 标准形 秩条件 混合特征值 最小多项式',
  q: String.raw`设 \(5\) 阶矩阵 \(A\) 的特征多项式为 \((\lambda-2)^{4}(\lambda-3)\)，且 \(\mathrm{r}(A-2I)=3\)，\(\mathrm{r}((A-2I)^{2})=2\)。求 \(A\) 的 Jordan 标准形。`,
  a: String.raw`\(J=J_{3}(2)\oplus J_{1}(2)\oplus J_{1}(3)\)。`,
  sol: String.raw`第一步：\(A-2I\) 在 \(\lambda=3\) 的一阶块上等于 \((1)\)，对秩贡献 \(1\)；在 \(\lambda=2\) 的块上是幂零块。第二步：设 \(\lambda=2\) 的块为 \(k_{1},k_{2}\)，其秩贡献 \(\sum(k_{i}-1)=3-1=2\)，故总阶数 \(4\) 的块数为 \(4-2=2\)。第三步：\((A-2I)^{2}\) 在 \(\lambda=3\) 块上仍贡献 \(1\)，在 \(\lambda=2\) 块上贡献 \(\sum\max(k_{i}-2,0)=2-1=1\)。第四步：两块阶数和为 \(4\) 且有一个不小于 \(3\)，只能是 \(3+1\)，即 \(J_{3}(2)\oplus J_{1}(2)\)。第五步：加上 \(\lambda=3\) 的块得 \(J=J_{3}(2)\oplus J_{1}(2)\oplus J_{1}(3)\)，最小多项式为 \((\lambda-2)^{3}(\lambda-3)\)。` },

{ id:'LA06-45', ch:6, type:'计算', diff:5, tags:'矩阵指数 旋转部分 复特征值 欧拉公式',
  q: String.raw`设 \(A=\begin{pmatrix}1&-1\\1&1\end{pmatrix}\)，求 \(\mathrm{e}^{A}\)。`,
  a: String.raw`\(\mathrm{e}^{A}=\mathrm{e}\begin{pmatrix}\cos1&-\sin1\\\sin1&\cos1\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(A=I+B\)，其中 \(B=\begin{pmatrix}0&-1\\1&0\end{pmatrix}\) 满足 \(B^{2}=-I\)，且 \(I\) 与 \(B\) 可交换。第二步：\(\mathrm{e}^{A}=\mathrm{e}^{I}\mathrm{e}^{B}=\mathrm{e}\left(I+B+\dfrac{B^{2}}{2!}+\dfrac{B^{3}}{3!}+\cdots\right)\)。第三步：用 \(B^{2}=-I\) 把级数按偶次与奇次合并，得 \(\mathrm{e}^{B}=\cos1\,I+\sin1\,B\)。第四步：故 \(\mathrm{e}^{A}=\mathrm{e}\left(\cos1\,I+\sin1\,B\right)=\mathrm{e}\begin{pmatrix}\cos1&-\sin1\\\sin1&\cos1\end{pmatrix}\)。` },

{ id:'LA06-46', ch:6, type:'计算', diff:4, tags:'矩阵平方根 非线性矩阵方程 Jordan 块',
  q: String.raw`设 \(A=\begin{pmatrix}1&1\\0&1\end{pmatrix}\)，求所有满足 \(X^{2}=A\) 的 \(2\) 阶实矩阵 \(X\)。`,
  a: String.raw`\(X=\pm\begin{pmatrix}1&\dfrac{1}{2}\\0&1\end{pmatrix}\)。`,
  sol: String.raw`第一步：设 \(X=\begin{pmatrix}a&b\\c&d\end{pmatrix}\)，由 \(X^{2}=A\) 逐元素比较得 \(a^{2}+bc=1\)，\(b(a+d)=1\)，\(c(a+d)=0\)，\(cb+d^{2}=1\)。第二步：由 \(b(a+d)=1\) 知 \(b\neq0\) 且 \(a+d\neq0\)，代入第三式得 \(c=0\)。第三步：于是 \(a^{2}=d^{2}=1\)，又 \(a+d\neq0\)，故 \(d=a\)，\(a=\pm1\)。第四步：由 \(2ab=1\) 得 \(b=\dfrac{1}{2a}\)，即 \(a=1\) 时 \(b=\frac{1}{2}\)，\(a=-1\) 时 \(b=-\frac{1}{2}\)。第五步：故 \(X=\pm\begin{pmatrix}1&\frac{1}{2}\\0&1\end{pmatrix}\)，两个都满足 \(X^{2}=A\)。` },

{ id:'LA06-47', ch:6, type:'计算', diff:4, tags:'Jordan 标准形 几何重数 可对角化判定 最小多项式',
  q: String.raw`设 \(A=J_{2}(2)\oplus J_{2}(2)\)（\(4\) 阶）。求 \(A\) 的 Jordan 标准形与最小多项式，并判断 \(A\) 是否可对角化。`,
  a: String.raw`\(J=J_{2}(2)\oplus J_{2}(2)\)，即 \(A\) 本身；\(m(\lambda)=(\lambda-2)^{2}\)；\(A\) 不可对角化。`,
  sol: String.raw`第一步：\(A\) 已是 Jordan 形，特征值只有 \(2\)，代数重数为 \(4\)。第二步：\(A-2I\) 的两个 \(2\) 阶块各贡献秩 \(1\)，故 \(\mathrm{r}(A-2I)=2\)，几何重数为 \(4-2=2\)。第三步：几何重数等于块数，故恰有 \(2\) 个块，每块阶数为 \(2\)。第四步：最小多项式为 \((\lambda-2)^{2}\)。第五步：几何重数 \(2\) 小于代数重数 \(4\)，故 \(A\) 不可对角化。` },

{ id:'LA06-48', ch:6, type:'计算', diff:4, tags:'矩阵幂 最小多项式 幂零部分 几何重数',
  q: String.raw`设 \(A=\begin{pmatrix}1&0&1\\0&1&0\\0&0&1\end{pmatrix}\)，求 \(A^{n}\)（\(n\) 为正整数）与 \(A\) 的最小多项式。`,
  a: String.raw`\(A^{n}=\begin{pmatrix}1&0&n\\0&1&0\\0&0&1\end{pmatrix}\)；\(m(\lambda)=(\lambda-1)^{2}\)。`,
  sol: String.raw`第一步：令 \(N=A-I=\begin{pmatrix}0&0&1\\0&0&0\\0&0&0\end{pmatrix}\)，则 \(N^{2}=0\)。第二步：\(A=I+N\) 且两部分可交换，故 \(A^{n}=I+nN\)。第三步：代入 \(N\) 得 \(A^{n}=\begin{pmatrix}1&0&n\\0&1&0\\0&0&1\end{pmatrix}\)。第四步：\(N\neq0\)、\(N^{2}=0\)，故最小多项式为 \((\lambda-1)^{2}\)。第五步：\(\mathrm{r}(A-I)=1\)，几何重数为 \(2<3\)，\(A\) 不可对角化。` },

{ id:'LA06-49', ch:6, type:'计算', diff:5, tags:'不变因子 有理标准形 初等因子 友矩阵',
  q: String.raw`设 \(A=J_{2}(1)\oplus J_{2}(2)\)（\(4\) 阶）。求 \(A\) 的不变因子与有理标准形。`,
  a: String.raw`不变因子为 \(1,1,1,(\lambda-1)^{2}(\lambda-2)^{2}\)；有理标准形是 \(\lambda^{4}-6\lambda^{3}+13\lambda^{2}-12\lambda+4\) 的友矩阵 \(\begin{pmatrix}0&0&0&-4\\1&0&0&12\\0&1&0&-13\\0&0&1&6\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(A\) 的初等因子为 \((\lambda-1)^{2}\) 与 \((\lambda-2)^{2}\)。第二步：不变因子满足 \(d_{1}\mid d_{2}\mid d_{3}\mid d_{4}\)，同一素因子按幂次从低到高分配，不同素因子可以同处一个 \(d_{i}\)。第三步：因每个素因子只出现一次，只能全部放进 \(d_{4}\)，故 \(d_{1}=d_{2}=d_{3}=1\)，\(d_{4}=(\lambda-1)^{2}(\lambda-2)^{2}\)。第四步：展开 \(d_{4}=\lambda^{4}-6\lambda^{3}+13\lambda^{2}-12\lambda+4\)，其最小多项式等于 \(d_{4}\)，说明 \(A\) 只有一个不变因子。第五步：友矩阵的最后一列为 \((-4,12,-13,6)^{\mathrm{T}}\)，故有理标准形如上，它是一个 \(4\) 阶单一 Jordan 型块（循环矩阵）。` },

{ id:'LA06-50', ch:6, type:'计算', diff:5, tags:'循环矩阵 三次单位根 复数域对角化 实 Jordan 形',
  q: String.raw`设 \(A=\begin{pmatrix}0&1&0\\0&0&1\\1&0&0\end{pmatrix}\)。求 \(A\) 在复数域上的全部特征值与 Jordan 标准形，并说明它在实数域上是否可对角化。`,
  a: String.raw`特征值为 \(1,\omega,\omega^{2}\)，其中 \(\omega=\cos\dfrac{2\pi}{3}+\mathrm{i}\sin\dfrac{2\pi}{3}\)；\(J=\mathrm{diag}(1,\omega,\omega^{2})\)；在实数域上不可对角化。`,
  sol: String.raw`第一步：\(|\lambda I-A|=\lambda^{3}-1=(\lambda-1)(\lambda^{2}+\lambda+1)\)。第二步：特征值为 \(1\) 与 \(\omega,\omega^{2}\)，后者是三次单位根的一对共轭复数。第三步：三个特征值互异，故在复数域上可对角化，\(J=\mathrm{diag}(1,\omega,\omega^{2})\)。第四步：\(A\) 为实矩阵，非实特征值成共轭对，实 Jordan 形为 \(\mathrm{diag}\left(1,\begin{pmatrix}-\frac{1}{2}&-\frac{\sqrt{3}}{2}\\\frac{\sqrt{3}}{2}&-\frac{1}{2}\end{pmatrix}\right)\)。第五步：因存在非实特征值，\(A\) 在实数域上不能对角化（实对角矩阵的特征值必须为实数）。` },

{ id:'LA06-51', ch:6, type:'计算', diff:5, tags:'Sylvester 方程 矩阵方程 对角矩阵 唯一解',
  q: String.raw`设 \(A=\mathrm{diag}(1,2,3)\)，\(B=\mathrm{diag}(0,4,5)\)，\(C=\begin{pmatrix}1&0&2\\0&1&0\\3&0&1\end{pmatrix}\)。解矩阵方程 \(AX-XB=C\)。`,
  a: String.raw`\(X=\begin{pmatrix}1&0&-\dfrac{1}{2}\\0&-\dfrac{1}{2}&0\\1&0&-\dfrac{1}{2}\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(A,B\) 都是对角矩阵，第 \((i,j)\) 个方程为 \((a_{i}-b_{j})x_{ij}=c_{ij}\)，各元素互不耦合。第二步：算 \(a_{i}-b_{j}\)：\(a_{1}-b_{1}=1\)，\(a_{1}-b_{2}=-3\)，\(a_{1}-b_{3}=-4\)，\(a_{2}-b_{1}=2\)，\(a_{2}-b_{2}=-2\)，\(a_{2}-b_{3}=-3\)，\(a_{3}-b_{1}=3\)，\(a_{3}-b_{2}=-1\)，\(a_{3}-b_{3}=-2\)。第三步：逐个相除得 \(x_{11}=1\)，\(x_{13}=-2/4=-1/2\)，\(x_{22}=1/(-2)=-1/2\)，\(x_{31}=3/3=1\)，\(x_{33}=1/(-2)=-1/2\)，其余元素为 \(0\)（对应 \(c_{ij}=0\)）。第四步：\(\sigma(A)=\{1,2,3\}\) 与 \(\sigma(B)=\{0,4,5\}\) 不相交，故解存在且唯一，结果即上矩阵。` },

{ id:'LA06-52', ch:6, type:'证明', diff:5, tags:'Sylvester 方程 谱不交 可逆性 拉直映射',
  q: String.raw`设 \(A\in M_n(\mathbb{C})\)，\(B\in M_m(\mathbb{C})\)。证明：矩阵方程 \(AX-XB=C\) 对任意 \(C\in M_{n\times m}(\mathbb{C})\) 都有唯一解，当且仅当 \(A\) 与 \(B\) 没有公共特征值。`,
  a: String.raw`结论成立，理由见解答（\(\Phi(X)=AX-XB\) 可逆当且仅当无公共特征值）。`,
  sol: String.raw`第一步：\(\Phi\)：\(X\mapsto AX-XB\) 是 \(M_{n\times m}(\mathbb{C})\) 上的线性变换。对任意 \(C\) 唯一可解当且仅当 \(\Phi\) 可逆，当且仅当 \(\ker\Phi=\{0\}\)。第二步（必要性）：若 \(\lambda\) 是公共特征值，取 \(x\neq0\) 使 \(Ax=\lambda x\)，取 \(y\neq0\) 使 \(B^{\mathrm{T}}y=\lambda y\)，令 \(X=xy^{\mathrm{T}}\neq0\)，则 \(AX=\lambda xy^{\mathrm{T}}=X B\)，故 \(\Phi(X)=0\)，\(\Phi\) 不可逆。第三步（充分性）：设 \(\Phi(X)=0\)，即 \(AX=XB\)，则归纳得 \(f(A)X=Xf(B)\) 对任意多项式 \(f\) 成立。第四步：取 \(f\) 为 \(A\) 的最小多项式，则 \(0=X\,m_{A}(B)\)；因 \(m_{A}(B)\) 的特征值是 \(m_{A}(\mu)\)，\(\mu\in\sigma(B)\)，而两谱不交时 \(m_{A}(\mu)\neq0\)，故 \(m_{A}(B)\) 可逆，得 \(X=0\)。第五步：于是 \(\ker\Phi=\{0\}\)，解存在且唯一。` },

{ id:'LA06-53', ch:6, type:'证明', diff:5, tags:'AB 与 BA 特征多项式 Schur 补 相似不变量',
  q: String.raw`设 \(A,B\) 分别为 \(n\) 阶与 \(n\) 阶复矩阵。证明：\(AB\) 与 \(BA\) 有相同的特征多项式；并说明当 \(A\) 可逆时二者还相似。`,
  a: String.raw`\(\det(\lambda I-AB)=\det(\lambda I-BA)\)；\(A\) 可逆时 \(AB=A(BA)A^{-1}\)。`,
  sol: String.raw`第一步：考虑分块矩阵 \(M=\begin{pmatrix}\lambda I&A\\B&I\end{pmatrix}\)。第二步：对 \(I\) 这个块取 Schur 补，\(\det M=\det I\cdot\det(\lambda I-A\cdot I^{-1}\cdot B)=\det(\lambda I-AB)\)。第三步：对 \(\lambda I\) 这个块取 Schur 补，\(\det M=\det(\lambda I)\cdot\det(I-B(\lambda I)^{-1}A)=\lambda^{n}\det(I-BA/\lambda)\)。第四步：设 \(BA\) 的特征值为 \(\mu_{1},\dots,\mu_{n}\)，则 \(\lambda^{n}\det(I-BA/\lambda)=\prod_{i}(\lambda-\mu_{i})=\det(\lambda I-BA)\)。第五步：两种算法结果相等，故 \(AB\) 与 \(BA\) 特征多项式相同；若 \(A\) 可逆，则 \(AB=A(BA)A^{-1}\)，即 \(AB\) 与 \(BA\) 相似。` },

{ id:'LA06-54', ch:6, type:'计算', diff:5, tags:'中心化子 可交换矩阵 Jordan 块 维数',
  q: String.raw`设 \(J=J_{3}(2)=\begin{pmatrix}2&1&0\\0&2&1\\0&0&2\end{pmatrix}\)。求所有与 \(J\) 可交换的 \(3\) 阶矩阵的集合形式及其维数。`,
  a: String.raw`\(\{X:XJ=JX\}=\left\{\begin{pmatrix}a&b&c\\0&a&b\\0&0&a\end{pmatrix}:a,b,c\in\mathbb{C}\right\}\)，维数为 \(3\)。`,
  sol: String.raw`第一步：\(J=2I+N\)，\(N=J_{3}(0)\)，由 \(X(2I+N)=(2I+N)X\) 得 \(X\) 与 \(J\) 可交换当且仅当 \(XN=NX\)。第二步：设 \(X=(x_{ij})\)，比较 \(XN=NX\) 的九个元素得 \(x_{31}=x_{32}=0\)，\(x_{11}=x_{22}=x_{33}=a\)，\(x_{12}=x_{23}=b\)，\(x_{13}=c\)。第三步：故 \(X=\begin{pmatrix}a&b&c\\0&a&b\\0&0&a\end{pmatrix}=aI+bN+cN^{2}\)，即中心化子等于多项式代数 \(\mathbb{C}[J]\)。第四步：由 \(a,b,c\) 三个自由参数知维数为 \(3\)，与一般公式 \(\dim C(J_{n}(\lambda))=n\) 相符。` },

{ id:'LA06-55', ch:6, type:'证明', diff:5, tags:'循环向量 最小多项式 友矩阵 有理标准形',
  q: String.raw`设 \(A\in M_n(\mathbb{C})\)。证明下列三条等价：（1）存在循环向量 \(v\)（即 \(v,Av,\dots,A^{n-1}v\) 构成基）；（2）\(\deg m_{A}(\lambda)=n\)，即最小多项式等于特征多项式；（3）\(A\) 相似于某个友矩阵。`,
  a: String.raw`三条等价；证明见解答（用循环子空间维数 \(=\deg m_{A}\) 与"每个特征值只有一个 Jordan 块"沟通）。`,
  sol: String.raw`第一步：对任意 \(v\neq0\)，记 \(m_{A,v}\) 为零化 \(v\) 的最低次首一多项式，则 \(\{v,Av,\dots\}\) 张成的循环子空间维数等于 \(\deg m_{A,v}\)，且 \(m_{A,v}\mid m_{A}\)。第二步：（1）\(\Rightarrow\)（2）：若 \(v\) 循环，则 \(m_{A,v}\) 的次数为 \(n\)，而 \(m_{A,v}\mid m_{A}\)、\(\deg m_{A}\le n\)，故 \(\deg m_{A}=n\)。第三步：（2）\(\Rightarrow\)（1）：在每个广义特征子空间中各取一个循环向量 \(v_{1},\dots,v_{s}\)（即对应 Jordan 链的首向量），令 \(v=\sum_{i}v_{i}\)。因不同特征值对应的 \(A\) 的多项式作用互不干扰，\(m_{A,v}=\mathrm{lcm}(m_{A,v_{i}})=m_{A}\)。第四步：于是 \(\deg m_{A,v}=\deg m_{A}=n\)，循环子空间维数为 \(n\)，即 \(v\) 循环；在以 \(v,Av,\dots,A^{n-1}v\) 为基时 \(A\) 的矩阵正是 \(m_{A}\) 的友矩阵，故（1）\(\Leftrightarrow\)（3）。第五步：补充说明（2）的另一等价描述：\(\deg m_{A}=n\) 当且仅当每个特征值只对应一个 Jordan 块，这也正是"初等因子互不相同"。` },

{ id:'LA06-56', ch:6, type:'计算', diff:4, tags:'循环子空间 最小多项式 可对角化判定',
  q: String.raw`设 \(A=\mathrm{diag}(1,1,2)\)。判断 \(A\) 是否存在循环向量；若不存在，求 \(A\) 的循环子空间可能的最大维数，并举出一个达到该维数的例子。`,
  a: String.raw`不存在循环向量；最大循环子空间维数为 \(2\)，例如 \(\mathrm{span}\{e_{1},e_{3}\}\)。`,
  sol: String.raw`第一步：\(A\) 的可对角化矩阵，\(m_{A}(\lambda)=(\lambda-1)(\lambda-2)\)，次数 \(2<3\)。第二步：对任意 \(v\)，\(m_{A,v}\mid m_{A}\)，故 \(\deg m_{A,v}\le2\)，循环子空间维数不超过 \(2\)，特别地不存在维数 \(3\) 的循环子空间。第三步：取 \(v=e_{1}+e_{3}\)，则 \(v=(1,0,1)^{\mathrm{T}}\)，\(Av=(1,0,2)^{\mathrm{T}}\)，二者线性无关，\(\mathrm{span}\{v,Av\}\) 是 \(2\) 维循环子空间。第四步：故最大维数为 \(2\)（即 \(\deg m_{A}\)），且 \(A\) 在该子空间上的限制是 \((\lambda-1)(\lambda-2)\) 的友矩阵 \(\begin{pmatrix}0&-2\\1&3\end{pmatrix}\)。` },

{ id:'LA06-57', ch:6, type:'计算', diff:5, tags:'Fitting 分解 直和分解 可逆部分 幂零部分',
  q: String.raw`设 \(A=\begin{pmatrix}2&1&0\\0&2&0\\0&0&0\end{pmatrix}\)。求最小的 \(k\) 使 \(V=\mathrm{im}\,A^{k}\oplus\ker A^{k}\)，写出这两个子空间，并说明 \(A\) 在该分解下的矩阵形状。`,
  a: String.raw`\(k=1\)；\(\mathrm{im}\,A=\mathrm{span}\{(2,0,0)^{\mathrm{T}},(1,2,0)^{\mathrm{T}}\}=\mathrm{span}\{e_{1},e_{2}\}\)，\(\ker A=\mathrm{span}\{(0,0,1)^{\mathrm{T}}\}\)；\(A\) 在基 \(\{Ae_{1},Ae_{2},e_{3}\}\) 下的矩阵为 \(\mathrm{diag}(J_{2}(2),0)\)。`,
  sol: String.raw`第一步：\(A\) 的特征值为 \(2,2,0\)，\(2\) 的部分是 \(J_{2}(2)\)（可逆），\(0\) 的部分是一阶块（幂零指数 \(1\)），故 \(k=1\) 已足够。第二步：算 \(\mathrm{im}\,A=\mathrm{span}\{Ae_{1},Ae_{2},Ae_{3}\}=\mathrm{span}\{(2,0,0),(1,2,0),(0,0,0)\}=\mathrm{span}\{e_{1},e_{2}\}\)。第三步：解 \(Ax=0\) 得 \(x=(0,0,t)^{\mathrm{T}}\)，即 \(\ker A=\mathrm{span}\{e_{3}\}\)。第四步：\(\mathrm{im}\,A\cap\ker A=\{0\}\) 且维数之和 \(2+1=3\)，故 \(V=\mathrm{im}\,A\oplus\ker A\)。第五步：取基 \(\{Ae_{1},Ae_{2},e_{3}\}\)，则 \(A\) 在这组基下为 \(\mathrm{diag}(J_{2}(2),0)\)，前块可逆、后块为幂零块。` },

{ id:'LA06-58', ch:6, type:'证明', diff:5, tags:'Fitting 引理 直和分解 幂零指数 不变子空间',
  q: String.raw`设 \(A\) 是 \(n\) 维复向量空间 \(V\) 上的线性变换。证明存在正整数 \(k\)，使 \(V=\mathrm{im}\,A^{k}\oplus\ker A^{k}\)，且 \(A\) 在该分解下为可逆块与幂零块的直和。`,
  a: String.raw`取 \(k\) 使 \(\mathrm{im}\,A^{k}\) 的维数稳定，则 \(V=\mathrm{im}\,A^{k}\oplus\ker A^{k}\)，且 \(A|_{\mathrm{im}\,A^{k}}\) 可逆、\(A|_{\ker A^{k}}\) 幂零。`,
  sol: String.raw`第一步：维数序列 \(\dim\mathrm{im}\,A^{0}\ge\dim\mathrm{im}\,A^{1}\ge\cdots\) 是单调不增的非负整数列，故存在 \(k\) 使其在 \(k\) 之后不再下降。第二步：由 \(\dim\mathrm{im}\,A^{k+1}=\dim\mathrm{im}\,A^{k}-\dim(\ker A\cap\mathrm{im}\,A^{k})\) 及维数稳定知 \(\ker A\cap\mathrm{im}\,A^{k}=\{0\}\)，进而 \(\ker A^{j}\cap\mathrm{im}\,A^{k}=\{0\}\) 对一切 \(j\) 成立。第三步：取 \(x\in\mathrm{im}\,A^{k}\cap\ker A^{k}\)，则 \(x=A^{k}y\) 且 \(A^{k}x=0\)，所以 \(A^{2k}y=0\)，即 \(y\in\ker A^{2k}=\ker A^{k}\)，于是 \(x=A^{k}y=0\)。第四步：故两子空间交为零，且 \(\dim\mathrm{im}\,A^{k}+\dim\ker A^{k}=n\)，所以 \(V=\mathrm{im}\,A^{k}\oplus\ker A^{k}\)。第五步：二者都是 \(A\)-不变的；\(A|_{\mathrm{im}\,A^{k}}\) 是满射故可逆，\(A|_{\ker A^{k}}\) 幂零，于是在合适基下 \(A=\mathrm{diag}(B,N)\)，\(B\) 可逆、\(N\) 幂零。` },

{ id:'LA06-59', ch:6, type:'证明', diff:4, tags:'可对角化 矩阵幂 反例 最小多项式',
  q: String.raw`证明：若 \(A\) 可对角化，则对任意正整数 \(k\)，\(A^{k}\) 也可对角化；并举反例说明逆命题不成立。`,
  a: String.raw`前进成立（同一 \(P\) 即可）；反例：\(A=J_{2}(0)\neq0\) 不可对角化，但 \(A^{2}=0\) 可对角化。`,
  sol: String.raw`第一步：设 \(P^{-1}AP=D\)，\(D=\mathrm{diag}(d_{1},\dots,d_{n})\)。第二步：则 \(P^{-1}A^{k}P=D^{k}=\mathrm{diag}(d_{1}^{k},\dots,d_{n}^{k})\) 仍为对角矩阵，故 \(A^{k}\) 可对角化。第三步：取 \(A=\begin{pmatrix}0&1\\0&0\end{pmatrix}\)，它只有一个特征值 \(0\) 且 \(A\neq0\)，几何重数为 \(1<2\)，不可对角化。第四步：但 \(A^{2}=0\) 是零矩阵，显然可对角化。第五步：这说明"某次幂可对角化"不能推出"自身可对角化"，关键在于非零幂零部分被幂运算吃掉。` },

{ id:'LA06-60', ch:6, type:'证明', diff:4, tags:'可对角化 迹 秩 特征值 最小多项式',
  q: String.raw`设 \(n\) 阶复矩阵 \(A\) 满足 \(A^{3}=A\)。证明 \(A\) 可对角化，且 \(\mathrm{tr}(A^{2})=\mathrm{r}(A)\)。`,
  a: String.raw`\(A\) 可对角化（\(m_{A}\) 整除 \(\lambda^{3}-\lambda\)，无重根），且 \(A\sim\mathrm{diag}(I_{p},-I_{q},0)\)，故 \(\mathrm{tr}(A^{2})=p+q=\mathrm{r}(A)\)。`,
  sol: String.raw`第一步：由 \(A^{3}-A=0\) 知 \(m_{A}(\lambda)\) 整除 \(\lambda^{3}-\lambda=\lambda(\lambda-1)(\lambda+1)\)，该多项式无重根，故 \(m_{A}\) 无重根。第二步：最小多项式无重根等价于可对角化，故存在可逆 \(P\) 使 \(P^{-1}AP=\mathrm{diag}(I_{p},-I_{q},0)\)。第三步：于是 \(\mathrm{r}(A)=p+q\)（相似保持秩，对角矩阵的秩为非零对角元个数）。第四步：\(A^{2}\sim\mathrm{diag}(I_{p},I_{q},0)\)，故 \(\mathrm{tr}(A^{2})=p+q\)。第五步：两者相等，\(\mathrm{tr}(A^{2})=\mathrm{r}(A)\)。` },

{ id:'LA06-61', ch:6, type:'证明', diff:4, tags:'秩的不等式 对合矩阵 Sylvester 秩不等式 特征值',
  q: String.raw`设 \(n\) 阶复矩阵 \(A\) 满足 \(A^{2}=I\)。证明 \(\mathrm{r}(I-A)+\mathrm{r}(I+A)=n\)。`,
  a: String.raw`由 \((I-A)(I+A)=0\) 得 \(\le n\)，由 \((I-A)+(I+A)=2I\) 得 \(\ge n\)，故等号成立。`,
  sol: String.raw`第一步：由 \(A^{2}=I\) 得 \(I-A^{2}=0\)，即 \((I-A)(I+A)=0\)。第二步：若 \(XY=0\)，则 \(\mathrm{im}\,Y\subseteq\ker X\)，故 \(\mathrm{r}(XY)\ge\mathrm{r}(X)+\mathrm{r}(Y)-n\) 取 \(XY=0\) 得 \(\mathrm{r}(X)+\mathrm{r}(Y)\le n\)。第三步：取 \(X=I-A\)，\(Y=I+A\)，得 \(\mathrm{r}(I-A)+\mathrm{r}(I+A)\le n\)。第四步：另一方面 \((I-A)+(I+A)=2I\)，由秩的次可加性 \(\mathrm{r}(I-A)+\mathrm{r}(I+A)\ge\mathrm{r}(2I)=n\)。第五步：两式合并得等号成立。` },

{ id:'LA06-62', ch:6, type:'计算', diff:5, tags:'实矩阵 复特征值 迹 行列式 实 Jordan 形',
  q: String.raw`设 \(A\) 为 \(4\) 阶实矩阵，满足 \(A^{2}+A+I=0\)。求 \(\mathrm{tr}(A)\)、\(\mathrm{tr}(A^{2})\)、\(\det(A)\)，并写出 \(A\) 在复数域上的 Jordan 标准形。`,
  a: String.raw`\(\mathrm{tr}(A)=-2\)，\(\mathrm{tr}(A^{2})=-2\)，\(\det(A)=1\)；\(A\sim\mathrm{diag}(\omega,\omega,\bar{\omega},\bar{\omega})\)，其中 \(\omega=\mathrm{e}^{2\pi\mathrm{i}/3}\)。`,
  sol: String.raw`第一步：由 \(A^{2}+A+I=0\) 知 \(m_{A}\) 整除 \(\lambda^{2}+\lambda+1\)，该式无重根，故 \(A\) 在 \(\mathbb{C}\) 上可对角化。第二步：特征值只能是 \(\lambda^{2}+\lambda+1=0\) 的根，即 \(\omega=\mathrm{e}^{2\pi\mathrm{i}/3}\) 与 \(\bar{\omega}=\omega^{2}\)，且 \(\omega+\bar{\omega}=-1\)，\(\omega\bar{\omega}=1\)。第三步：\(A\) 是实矩阵，非实特征值成共轭对出现，\(4\) 阶时只能是 \(\omega,\omega,\bar{\omega},\bar{\omega}\)（各二重）。第四步：\(\mathrm{tr}(A)=2\omega+2\bar{\omega}=2\times(-1)=-2\)；\(\mathrm{tr}(A^{2})=2\omega^{2}+2\bar{\omega}^{2}=2\times(-1)=-2\)。第五步：\(\det(A)=(\omega\bar{\omega})^{4}=1\)；Jordan 形为 \(\mathrm{diag}(\omega,\omega,\bar{\omega},\bar{\omega})\)，对应的实 Jordan 形是两块旋转块的直和。` },

{ id:'LA06-63', ch:6, type:'证明', diff:5, tags:'Jordan-Chevalley 分解 可对角化 幂零 唯一性',
  q: String.raw`证明：任意复方阵 \(A\) 都可唯一地写成 \(A=S+N\)，其中 \(S\) 可对角化、\(N\) 幂零、\(SN=NS\)。`,
  a: String.raw`存在性与唯一性均成立，证明见解答（存在性用 Jordan 形拆对角与严格上三角部分；唯一性用"可交换的可对角化与幂零部分"）。`,
  sol: String.raw`第一步（存在性）：取 \(P\) 使 \(P^{-1}AP\) 为 Jordan 形，把它写成 \(D+N_{0}\)，其中 \(D\) 取每个块的对角部分（块内为 \(\lambda_{i}I\)），\(N_{0}\) 取块内严格上三角部分。第二步：\(D\) 是对角矩阵故可对角化，\(N_{0}\) 是严格上三角故幂零，且 \(DN_{0}=N_{0}D\)（同块内 \(D\) 是数量矩阵，不同块互不影响）。第三步：令 \(S=PDP^{-1}\)，\(N=PN_{0}P^{-1}\)，则 \(A=S+N\)，\(S\) 可对角化，\(N\) 幂零，\(SN=NS\)。第四步（唯一性）：设 \(A=S+N=S'+N'\) 为两个这样的分解。\(S\) 在每个广义特征子空间上等于 \(\lambda_{i}I\)，故 \(S\) 是 \(A\) 的多项式；同理 \(S'\) 也是 \(A\) 的多项式，于是 \(S\) 与 \(S'\) 可交换。第五步：令 \(T=S-S'=N'-N\)。由上面的交换性，\(T\) 与 \(S,S'\) 均可交换，故 \(T\) 可对角化；又 \(N,N'\) 可交换且都幂零（由与 \(A\) 的多项式关系可验证），故 \(T=N'-N\) 幂零。第六步：既幂零又可对角化的矩阵只能是零矩阵，故 \(S=S'\)，\(N=N'\)，分解唯一。` },

{ id:'LA06-64', ch:6, type:'计算', diff:5, tags:'Jordan-Chevalley 分解 矩阵幂 幂零部分',
  q: String.raw`设 \(A=\begin{pmatrix}1&1&0\\0&1&0\\0&0&2\end{pmatrix}\)。求 \(A\) 的 Jordan-Chevalley 分解 \(A=S+N\)，并用它求 \(A^{n}\)。`,
  a: String.raw`\(S=\mathrm{diag}(1,1,2)\)，\(N=\begin{pmatrix}0&1&0\\0&0&0\\0&0&0\end{pmatrix}\)；\(A^{n}=\begin{pmatrix}1&n&0\\0&1&0\\0&0&2^{n}\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(A\) 已是分块上三角，其中 \(J_{2}(1)=I_{2}+N_{1}\)（\(N_{1}^{2}=0\)），另一块为 \((2)\)。第二步：取 \(S=\mathrm{diag}(1,1,2)\)（各块的对角部分），\(N=A-S=\begin{pmatrix}0&1&0\\0&0&0\\0&0&0\end{pmatrix}\)。第三步：\(S\) 可对角化，\(N^{2}=0\) 幂零，且 \(SN=NS\)（分块互不干涉），故这就是 Jordan-Chevalley 分解。第四步：因 \(S\) 与 \(N\) 可交换且 \(N^{2}=0\)，\(A^{n}=S^{n}+nS^{n-1}N\)。第五步：\(S^{n}=\mathrm{diag}(1,1,2^{n})\)，\(S^{n-1}N=N\)，故 \(A^{n}=\begin{pmatrix}1&n&0\\0&1&0\\0&0&2^{n}\end{pmatrix}\)。` },

{ id:'LA06-65', ch:6, type:'证明', diff:5, tags:'可交换矩阵 同时上三角化 公共特征向量 归纳法',
  q: String.raw`设 \(A,B\) 是复方阵且 \(AB=BA\)。证明存在可逆矩阵 \(P\)，使 \(P^{-1}AP\) 与 \(P^{-1}BP\) 同为上三角矩阵。`,
  a: String.raw`结论成立，证明见解答（公共特征向量 + 归纳）。`,
  sol: String.raw`第一步：\(A\) 在 \(\mathbb{C}\) 上有特征值 \(\lambda\) 与特征向量 \(x\)，即 \(Ax=\lambda x\)。考虑 \(W=\ker(A-\lambda I)\)，它是 \(B\)-不变的：若 \(w\in W\)，则 \(A(Bw)=B(Aw)=\lambda Bw\)，故 \(Bw\in W\)。第二步：\(B|_{W}\) 有特征向量 \(y\in W\)，于是 \(y\) 同时是 \(A\) 与 \(B\) 的特征向量（\(Ay=\lambda y\)）。第三步：以 \(y\) 为第一个基向量，在商空间 \(\mathbb{C}^{n}/\langle y\rangle\) 上 \(A,B\) 诱导出两个交换的线性变换。第四步：对 \(n-1\) 归纳，存在商空间的基使两个诱导变换都上三角。第五步：把这组基与 \(y\) 合并成 \(\mathbb{C}^{n}\) 的基，则 \(A,B\) 在该基下的矩阵都是上三角，对应的过渡矩阵即所求的 \(P\)。` },

{ id:'LA06-66', ch:6, type:'证明', diff:5, tags:'相似 A 与 A 转置 行列式因子 不变因子',
  q: String.raw`证明：任意复方阵 \(A\) 都与它的转置 \(A^{\mathrm{T}}\) 相似。`,
  a: String.raw`结论成立；因 \(\lambda I-A\) 与 \(\lambda I-A^{\mathrm{T}}\) 有相同的各阶行列式因子。`,
  sol: String.raw`第一步：\(A\) 与 \(A^{\mathrm{T}}\) 相似当且仅当 \(\lambda I-A\) 与 \(\lambda I-A^{\mathrm{T}}\) 有相同的不变因子（特征矩阵的等价与相似是同一件事）。第二步：\(\lambda I-A^{\mathrm{T}}=(\lambda I-A)^{\mathrm{T}}\)。第三步：矩阵 \(M\) 的 \(k\) 阶子式与其转置 \(M^{\mathrm{T}}\) 的 \(k\) 阶子式一一对应（转置把 \(k\) 阶子矩阵变成 \(k\) 阶子矩阵，行列式值不变）。第四步：故 \(M\) 与 \(M^{\mathrm{T}}\) 的每个 \(k\) 阶行列式因子相同，从而不变因子相同。第五步：于是 \(\lambda I-A\) 与 \(\lambda I-A^{\mathrm{T}}\) 等价，\(A\) 与 \(A^{\mathrm{T}}\) 相似。` },

{ id:'LA06-67', ch:6, type:'计算', diff:5, tags:'交换子 矩阵方程 幂零矩阵 解族',
  q: String.raw`设 \(A=\begin{pmatrix}0&1\\0&0\end{pmatrix}\)，求所有满足 \(AX-XA=A\) 的 \(2\) 阶复矩阵 \(X\)。`,
  a: String.raw`\(X=\begin{pmatrix}a&b\\0&a+1\end{pmatrix}\)，\(a,b\in\mathbb{C}\)（两参数族）。`,
  sol: String.raw`第一步：设 \(X=\begin{pmatrix}p&q\\r&s\end{pmatrix}\)。第二步：\(AX=\begin{pmatrix}0&1\\0&0\end{pmatrix}\begin{pmatrix}p&q\\r&s\end{pmatrix}=\begin{pmatrix}r&s\\0&0\end{pmatrix}\)。第三步：\(XA=\begin{pmatrix}p&q\\r&s\end{pmatrix}\begin{pmatrix}0&1\\0&0\end{pmatrix}=\begin{pmatrix}0&p\\0&r\end{pmatrix}\)。第四步：相减得 \(AX-XA=\begin{pmatrix}r&s-p\\0&-r\end{pmatrix}\)，令其等于 \(A=\begin{pmatrix}0&1\\0&0\end{pmatrix}\)，得 \(r=0\)，\(s=p+1\)。第五步：故 \(X=\begin{pmatrix}p&q\\0&p+1\end{pmatrix}\)，\(p,q\) 自由；这说明"\(AX-XA=A\) 的解不唯一"，且解的迹恒为 \(2p+1\) 不为常数。` },

{ id:'LA06-68', ch:6, type:'证明', diff:4, tags:'交换子 幂零 迹 Newton 恒等式',
  q: String.raw`设 \(n\) 阶复矩阵 \(A,X\) 满足 \(AX-XA=A\)。证明 \(A\) 是幂零矩阵。`,
  a: String.raw`\(A\) 幂零；因 \(A^{k}X-XA^{k}=kA^{k}\)，取迹得 \(\mathrm{tr}(A^{k})=0\)（\(k=1,\dots,n\)）。`,
  sol: String.raw`第一步：对 \(k\) 归纳证明 \(A^{k}X-XA^{k}=kA^{k}\)。\(k=1\) 即题设；若对 \(k\) 成立，则 \(A^{k+1}X=A(A^{k}X)=A(XA^{k}+kA^{k})=AXA^{k}+kA^{k+1}=(XA^{k+1}+A^{k+1})+kA^{k+1}=(k+1)A^{k+1}\)。第二步：对等式两边取迹。因 \(\mathrm{tr}(A^{k}X)=\mathrm{tr}(XA^{k})\)，左边迹为 \(0\)。第三步：故 \(k\,\mathrm{tr}(A^{k})=0\)，即 \(\mathrm{tr}(A^{k})=0\) 对一切 \(k\ge1\) 成立。第四步：由 Newton 恒等式，特征多项式的初等对称多项式可由幂和 \(\mathrm{tr}(A^{k})\) 表出，全部为零。第五步：故特征多项式为 \(\lambda^{n}\)，全部特征值为 \(0\)，由 Cayley-Hamilton 得 \(A^{n}=0\)，\(A\) 幂零。` },

{ id:'LA06-69', ch:6, type:'计算', diff:4, tags:'矩阵指数 单参数族 幂零部分 相似',
  q: String.raw`设 \(A=\begin{pmatrix}2&-1\\1&0\end{pmatrix}\)，求 \(\mathrm{e}^{At}\)（\(t\) 为实参数）。`,
  a: String.raw`\(\mathrm{e}^{At}=\mathrm{e}^{t}\begin{pmatrix}1+t&-t\\t&1-t\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(|\lambda I-A|=(\lambda-2)\lambda+1=(\lambda-1)^{2}\)，故 \(A=I+N\)，其中 \(N=\begin{pmatrix}1&-1\\1&-1\end{pmatrix}\)。第二步：\(N^{2}=0\)，\(N\neq0\)，故 \(A\) 的 Jordan 形为 \(J_{2}(1)\)。第三步：\(At=tI+tN\)，两部分可交换，故 \(\mathrm{e}^{At}=\mathrm{e}^{tI}\mathrm{e}^{tN}=\mathrm{e}^{t}(I+tN)\)。第四步：代入 \(N\) 得 \(\mathrm{e}^{At}=\mathrm{e}^{t}\begin{pmatrix}1+t&-t\\t&1-t\end{pmatrix}\)。` },

{ id:'LA06-70', ch:6, type:'证明', diff:5, tags:'相似不变量 特征多项式 最小多项式 反例 秩判据',
  q: String.raw`设 \(A=J_{2}(2)\oplus J_{2}(2)\)，\(B=J_{2}(2)\oplus J_{1}(2)\oplus J_{1}(2)\)（均为 \(4\) 阶）。证明 \(A\) 与 \(B\) 有相同的特征多项式与相同的最小多项式，但 \(A\) 不相似于 \(B\)。`,
  a: String.raw`特征多项式都是 \((\lambda-2)^{4}\)，最小多项式都是 \((\lambda-2)^{2}\)，但 \(\mathrm{r}(A-2I)=2\neq1=\mathrm{r}(B-2I)\)，故不相似。`,
  sol: String.raw`第一步：\(A,B\) 的特征值都只有 \(2\)，代数重数都是 \(4\)，故特征多项式同为 \((\lambda-2)^{4}\)。第二步：\(A\) 的最大 Jordan 块为 \(2\) 阶，\(B\) 的最大块也是 \(2\) 阶，故最小多项式都是 \((\lambda-2)^{2}\)。第三步：相似变换保持秩，故秩是不变量。第四步：\(A-2I\) 是两个 \(2\) 阶幂零块 \(J_{2}(0)\) 的直和，其秩为 \(1+1=2\)。第五步：\(B-2I=J_{2}(0)\oplus 0\oplus 0\)，秩为 \(1\)。第六步：\(2\neq1\)，故 \(A\not\sim B\)；这表明特征多项式与最小多项式合起来仍不是相似分类的完全不变量，需动用各阶秩 \(\mathrm{r}((A-\lambda I)^{j})\)。` },

{ id:'LA06-71', ch:6, type:'计算', diff:5, tags:'不变因子 有理标准形 友矩阵 初等因子',
  q: String.raw`设 \(A=\mathrm{diag}\left(\begin{pmatrix}1&1\\0&1\end{pmatrix},2\right)\)（\(3\) 阶）。求 \(A\) 的不变因子与有理标准形。`,
  a: String.raw`不变因子 \(d_{1}=d_{2}=1\)，\(d_{3}=(\lambda-1)^{2}(\lambda-2)=\lambda^{3}-4\lambda^{2}+5\lambda-2\)；有理标准形为友矩阵 \(\begin{pmatrix}0&0&2\\1&0&-5\\0&1&4\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(A\) 的初等因子为 \((\lambda-1)^{2}\) 与 \((\lambda-2)\)。第二步：不变因子按 \(d_{1}\mid d_{2}\mid d_{3}\) 分配，同一素因子的幂从低到高向右排；此处每个素因子只出现一次，故 \(d_{1}=d_{2}=1\)，\(d_{3}=(\lambda-1)^{2}(\lambda-2)\)。第三步：展开 \(d_{3}=\lambda^{3}-4\lambda^{2}+5\lambda-2\)，于是 \(A\) 只有一个非平凡不变因子，最小多项式等于特征多项式（\(A\) 有循环向量）。第四步：\(d_{3}\) 的友矩阵最后一列为 \((2,-5,4)^{\mathrm{T}}\)，即 \(\begin{pmatrix}0&0&2\\1&0&-5\\0&1&4\end{pmatrix}\)。第五步：它的特征多项式正是 \(d_{3}\)，故与 \(A\) 相似，这就是 \(A\) 的有理标准形。` },

{ id:'LA06-72', ch:6, type:'计算', diff:5, tags:'Jordan 标准形 秩判据 最小多项式 方次数',
  q: String.raw`设 \(4\) 阶复矩阵 \(A\) 的特征多项式为 \((\lambda-1)^{4}\)，且 \((A-I)^{2}=0\)，\(\mathrm{r}(A-I)=2\)。求 \(A\) 的 Jordan 标准形与最小多项式。`,
  a: String.raw`\(J=J_{2}(1)\oplus J_{2}(1)\)；\(m(\lambda)=(\lambda-1)^{2}\)。`,
  sol: String.raw`第一步：\((A-I)^{2}=0\) 说明 \(A-I\) 的幂零指数不超过 \(2\)，故每个 Jordan 块的阶数不超过 \(2\)。第二步：\(\mathrm{r}(A-I)=4-s\)，其中 \(s\) 是块数（因为每块 \(J_{k}(0)\) 的秩为 \(k-1\)，而每块都至少贡献 \(0\)，更直接地：\(4-\mathrm{r}(A-I)=\dim\ker(A-I)\) 等于块数）。第三步：由 \(4-2=2\) 知恰有 \(2\) 个块。第四步：块阶数不超过 \(2\) 且总阶数为 \(4\)、块数为 \(2\)，只能是 \(2+2\)。第五步：故 \(J=J_{2}(1)\oplus J_{2}(1)\)，最大块阶数为 \(2\)，最小多项式为 \((\lambda-1)^{2}\)。` },

{ id:'LA06-73', ch:6, type:'证明', diff:5, tags:'幂零矩阵 迹 Newton 恒等式 特征多项式',
  q: String.raw`设 \(A\) 为 \(n\) 阶复矩阵。证明：\(A\) 幂零（即 \(A^{n}=0\)）当且仅当 \(\mathrm{tr}(A^{k})=0\) 对 \(k=1,2,\dots,n\) 全部成立。`,
  a: String.raw`结论成立；必要性能直接看出，充分性用 Newton 恒等式由幂和反推特征多项式的系数。`,
  sol: String.raw`第一步（必要性）：若 \(A^{n}=0\)，则 \(A\) 的特征值全为 \(0\)，于是 \(A^{k}\) 的特征值全为 \(0\)，\(\mathrm{tr}(A^{k})=0\)。第二步（充分性）：设特征多项式为 \(\lambda^{n}-e_{1}\lambda^{n-1}+e_{2}\lambda^{n-2}-\cdots+(-1)^{n}e_{n}\)，其中 \(e_{k}\) 是特征值的初等对称多项式。第三步：Newton 恒等式给出 \(k e_{k}=\sum_{i=1}^{k}(-1)^{i-1}e_{k-i}p_{i}\)，其中 \(p_{i}=\mathrm{tr}(A^{i})\)。第四步：由 \(p_{1}=\cdots=p_{n}=0\) 依次归纳：\(e_{1}=p_{1}=0\)，\(2e_{2}=e_{1}p_{1}-p_{2}=0\)，……，得 \(e_{1}=\cdots=e_{n}=0\)。第五步：于是特征多项式为 \(\lambda^{n}\)，由 Cayley-Hamilton 定理 \(A^{n}=0\)，\(A\) 幂零。` },

{ id:'LA06-74', ch:6, type:'计算', diff:5, tags:'幂等矩阵 秩 迹 Jordan 标准形',
  q: String.raw`设 \(3\) 阶复矩阵 \(A\) 满足 \(A^{2}=A\)，\(A\neq I\) 且 \(\mathrm{r}(A)=1\)。求 \(A\) 的 Jordan 标准形，并求 \(\mathrm{tr}(A)\) 与 \(\det(A)\)。`,
  a: String.raw`\(J=\mathrm{diag}(1,0,0)\)；\(\mathrm{tr}(A)=1\)，\(\det(A)=0\)。`,
  sol: String.raw`第一步：由 \(A^{2}-A=0\) 知 \(m_{A}\) 整除 \(\lambda(\lambda-1)\)，无重根，故 \(A\) 可对角化。第二步：特征值只可能是 \(0\) 或 \(1\)。第三步：\(A\sim\mathrm{diag}(1,\dots,1,0,\dots,0)\)，其中 \(1\) 的个数为 \(p\)，则 \(\mathrm{r}(A)=p\)。第四步：题设 \(\mathrm{r}(A)=1\)，故 \(p=1\)，即 \(J=\mathrm{diag}(1,0,0)\)。第五步：于是 \(\mathrm{tr}(A)=1\)，\(\det(A)=0\)（有零特征值）；这也说明 \(A\) 是秩 \(1\) 的投影，形如 \(A=uv^{\mathrm{T}}\) 且 \(v^{\mathrm{T}}u=1\)。` },

{ id:'LA06-75', ch:6, type:'证明', diff:5, tags:'谱分解 幂等投影 可对角化 特征子空间',
  q: String.raw`设 \(A\) 为 \(n\) 阶复矩阵，\(\lambda_{1},\dots,\lambda_{s}\) 为其互不相同的特征值。证明：\(A\) 可对角化当且仅当存在矩阵 \(P_{1},\dots,P_{s}\)，使得 \(P_{i}^{2}=P_{i}\)，\(P_{i}P_{j}=0\ (i\neq j)\)，\(\sum_{i}P_{i}=I\)，且 \(A=\sum_{i}\lambda_{i}P_{i}\)。`,
  a: String.raw`结论成立，其中 \(P_{i}\) 是沿其余特征子空间到 \(V_{\lambda_{i}}\) 的投影（谱投影）。`,
  sol: String.raw`第一步（必要性）：若 \(A\) 可对角化，则 \(V=\bigoplus_{i}V_{\lambda_{i}}\)（特征子空间的直和）。第二步：定义 \(P_{i}\) 为沿 \(\bigoplus_{j\neq i}V_{\lambda_{j}}\) 到 \(V_{\lambda_{i}}\) 的投影，则由投影的定义得 \(P_{i}^{2}=P_{i}\)，\(P_{i}P_{j}=0\)，\(\sum_{i}P_{i}=I\)。第三步：对 \(v\in V_{\lambda_{j}}\)，\(\sum_{i}\lambda_{i}P_{i}v=\lambda_{j}v=Av\)，故 \(A=\sum_{i}\lambda_{i}P_{i}\)。第四步（充分性）：设这样的 \(P_{i}\) 存在，任取 \(v\in V\)，写 \(v=\sum_{i}P_{i}v\)。第五步：由 \(P_{i}P_{j}=0\)（\(i\neq j\)）与 \(AP_{j}=\lambda_{j}P_{j}\) 得 \(A(P_{i}v)=\sum_{j}\lambda_{j}P_{j}P_{i}v=\lambda_{i}P_{i}v\)，故每个 \(P_{i}v\) 都是属于 \(\lambda_{i}\) 的特征向量（或 \(0\)）。第六步：于是 \(V=\sum_{i}V_{\lambda_{i}}\)，即 \(V\) 是特征子空间的直和，\(A\) 可对角化。` },

{ id:'LA06-76', ch:6, type:'计算', diff:4, tags:'谱投影 幂等矩阵 矩阵幂 谱分解',
  q: String.raw`设 \(A=\begin{pmatrix}2&1\\0&1\end{pmatrix}\)。求 \(A\) 的谱投影 \(P_{2},P_{1}\)，并用它们写出 \(A^{n}\)。`,
  a: String.raw`\(P_{2}=\begin{pmatrix}1&1\\0&0\end{pmatrix}\)，\(P_{1}=\begin{pmatrix}0&-1\\0&1\end{pmatrix}\)；\(A^{n}=2^{n}P_{2}+P_{1}=\begin{pmatrix}2^{n}&2^{n}-1\\0&1\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(A\) 的特征值为 \(2,1\)（上三角，对角元即特征值），互异，故可对角化，有两个谱投影。第二步：谱投影可用 Lagrange 插值给出：\(P_{2}=\dfrac{A-I}{2-1}=A-I=\begin{pmatrix}1&1\\0&0\end{pmatrix}\)。第三步：\(P_{1}=I-P_{2}=\begin{pmatrix}0&-1\\0&1\end{pmatrix}\)，检验 \(P_{1}^{2}=P_{1}\)，\(P_{1}P_{2}=0\)。第四步：由 \(A=2P_{2}+P_{1}\) 及 \(P_{i}\) 的幂等正交性得 \(A^{n}=2^{n}P_{2}+P_{1}\)。第五步：代入得 \(A^{n}=\begin{pmatrix}2^{n}&2^{n}-1\\0&1\end{pmatrix}\)，例如 \(n=2\) 时 \(\begin{pmatrix}4&3\\0&1\end{pmatrix}=A^{2}\)。` },

{ id:'LA06-77', ch:6, type:'证明', diff:4, tags:'分块对角矩阵 最小多项式 最小公倍 零化多项式',
  q: String.raw`设 \(A=\mathrm{diag}(B,C)\) 是分块对角矩阵。证明 \(m_{A}(\lambda)=\mathrm{lcm}(m_{B}(\lambda),m_{C}(\lambda))\)。`,
  a: String.raw`\(m_{A}(\lambda)=\mathrm{lcm}(m_{B},m_{C})\)；据此可判断可对角化与最小多项式的次数。`,
  sol: String.raw`第一步：对任意多项式 \(p\)，\(p(A)=\mathrm{diag}(p(B),p(C))\)。第二步：故 \(p(A)=0\) 当且仅当 \(p(B)=0\) 且 \(p(C)=0\)。第三步：\(p(B)=0\) 当且仅当 \(m_{B}\mid p\)，\(p(C)=0\) 当且仅当 \(m_{C}\mid p\)。第四步：故零化 \(A\) 的多项式恰为 \(m_{B}\) 与 \(m_{C}\) 的公倍式，其中次数最低的首一者就是最小公倍式。第五步：于是 \(m_{A}=\mathrm{lcm}(m_{B},m_{C})\)；特别地 \(A\) 可对角化当且仅当 \(m_{B},m_{C}\) 都无重根（因 lcm 无重根当且仅当两者都无重根）。` },

{ id:'LA06-78', ch:6, type:'证明', diff:5, tags:'同时对角化 可交换 特征子空间 最小多项式',
  q: String.raw`设 \(A,B\) 为复方阵，\(AB=BA\)，且 \(A,B\) 都可对角化。证明存在可逆矩阵 \(P\)，使 \(P^{-1}AP\) 与 \(P^{-1}BP\) 同时为对角矩阵。`,
  a: String.raw`结论成立；\(P\) 的列取为各公共特征向量（按 \(B\) 的特征子空间分组）。`,
  sol: String.raw`第一步：因 \(B\) 可对角化，\(V=\bigoplus_{\mu}V_{\mu}(B)\)，其中 \(V_{\mu}(B)=\ker(B-\mu I)\)。第二步：由 \(AB=BA\) 知 \(A(V_{\mu})\subseteq V_{\mu}\)：若 \(Bw=\mu w\)，则 \(B(Aw)=A(Bw)=\mu Aw\)。第三步：\(A\) 可对角化意味着 \(m_{A}\) 无重根；\(A|_{V_{\mu}}\) 的最小多项式整除 \(m_{A}\)，故也无重根，于是 \(A|_{V_{\mu}}\) 可对角化。第四步：在每个 \(V_{\mu}\) 中取 \(A\) 的特征向量组成的基，合并为 \(V\) 的基，此时 \(A\) 与 \(B\) 的矩阵同时对角。第五步：以这组基为列构造 \(P\)，则 \(P^{-1}AP\) 与 \(P^{-1}BP\) 都是对角矩阵。` },

{ id:'LA06-79', ch:6, type:'计算', diff:4, tags:'矩阵指数 秩一矩阵 矩阵幂 级数求和',
  q: String.raw`设 \(A=\begin{pmatrix}1&1\\1&1\end{pmatrix}\)，求 \(\mathrm{e}^{A}\)。`,
  a: String.raw`\(\mathrm{e}^{A}=\dfrac{1}{2}\begin{pmatrix}1+\mathrm{e}^{2}&\mathrm{e}^{2}-1\\\mathrm{e}^{2}-1&1+\mathrm{e}^{2}\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(A\) 是秩一矩阵，\(A^{2}=2A\)（因为迹为 \(2\)、行列式为 \(0\)，或直接计算）。第二步：由 \(A^{k}=2^{k-1}A\)（\(k\ge1\)）得 \(\mathrm{e}^{A}=I+\sum_{k\ge1}\dfrac{2^{k-1}}{k!}A\)。第三步：\(\sum_{k\ge1}\dfrac{2^{k-1}}{k!}=\dfrac{1}{2}\sum_{k\ge1}\dfrac{2^{k}}{k!}=\dfrac{\mathrm{e}^{2}-1}{2}\)。第四步：故 \(\mathrm{e}^{A}=I+\dfrac{\mathrm{e}^{2}-1}{2}A\)，展开得 \(\dfrac{1}{2}\begin{pmatrix}1+\mathrm{e}^{2}&\mathrm{e}^{2}-1\\\mathrm{e}^{2}-1&1+\mathrm{e}^{2}\end{pmatrix}\)。` },

{ id:'LA06-80', ch:6, type:'计算', diff:5, tags:'特征多项式 迹与行列式 矩阵幂 谱投影',
  q: String.raw`设 \(A=\begin{pmatrix}1&1\\0&2\end{pmatrix}\)。已知 \(A\) 的迹为 \(3\)、行列式为 \(2\)，求 \(A^{100}\)（用 \(A\) 与 \(I\) 表示）。`,
  a: String.raw`\(A^{100}=(2^{100}-1)A+(2-2^{100})I=\begin{pmatrix}1&2^{100}-1\\0&2^{100}\end{pmatrix}\)。`,
  sol: String.raw`第一步：二阶矩阵的特征多项式为 \(\lambda^{2}-\mathrm{tr}(A)\lambda+\det(A)=\lambda^{2}-3\lambda+2=(\lambda-1)(\lambda-2)\)。第二步：特征值互异，\(A\) 可对角化，\(A^{n}=2^{n}P_{2}+P_{1}\)，其中 \(P_{2}=A-I\)，\(P_{1}=I-P_{2}\)。第三步：故 \(A^{n}=2^{n}(A-I)+(2-A)=(2^{n}-1)A+(2-2^{n})I\)，等价于用 Cayley-Hamilton 作带余除法（余式 \(\alpha\lambda+\beta\) 由 \(\lambda=1,2\) 两点插值定出）。第四步：取 \(n=100\)，\(A^{100}=(2^{100}-1)\begin{pmatrix}1&1\\0&2\end{pmatrix}+(2-2^{100})\begin{pmatrix}1&0\\0&1\end{pmatrix}\)。第五步：乘开得 \(A^{100}=\begin{pmatrix}1&2^{100}-1\\0&2^{100}\end{pmatrix}\)，与 \(A^{n}=\begin{pmatrix}1&2^{n}-1\\0&2^{n}\end{pmatrix}\) 的归纳结果一致。` },

{ id:'LA06-81', ch:6, type:'计算', diff:5, tags:'Jordan 基 广义特征向量 相似变换 可对角化判定',
  q: String.raw`设 \(A=\begin{pmatrix}2&0&0\\1&2&0\\0&0&1\end{pmatrix}\)。求 \(A\) 的 Jordan 标准形 \(J\)，并求可逆矩阵 \(P\) 使 \(P^{-1}AP=J\)。`,
  a: String.raw`\(J=\begin{pmatrix}2&1&0\\0&2&0\\0&0&1\end{pmatrix}=J_{2}(2)\oplus J_{1}(1)\)；\(P=\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}\)（\(P^{-1}=P\)）。`,
  sol: String.raw`第一步：\(|\lambda I-A|=(\lambda-2)^{2}(\lambda-1)\)，特征值为 \(2\)（二重）与 \(1\)。第二步：\(\mathrm{r}(A-2I)=\mathrm{r}\begin{pmatrix}0&0&0\\1&0&0\\0&0&-1\end{pmatrix}=2\)，故 \(\dim\ker(A-2I)=1\)，几何重数为 \(1<2\)，对应一个 \(2\) 阶块 \(J_{2}(2)\)。第三步：解 \((A-2I)x=0\) 得特征向量 \(e_{2}=(0,1,0)^{\mathrm{T}}\)；再解 \((A-2I)x=e_{2}\) 得广义特征向量 \(e_{1}=(1,0,0)^{\mathrm{T}}\)，且 \(Ae_{1}=2e_{1}+e_{2}\)。第四步：解 \((A-I)x=0\) 得 \(e_{3}=(0,0,1)^{\mathrm{T}}\)。第五步：按 \(J_{2}(2)\) 在前、\(J_{1}(1)\) 在后取基 \((e_{2},e_{1},e_{3})\)，即 \(P\) 的三列，直接验证 \(AP=PJ\)，故 \(P^{-1}AP=J\)。` },

{ id:'LA06-82', ch:6, type:'计算', diff:5, tags:'矩阵指数 幂零部分 Jordan-Chevalley 级数截断',
  q: String.raw`设 \(A=\begin{pmatrix}0&1&0\\0&0&1\\1&-3&3\end{pmatrix}\)，求 \(\mathrm{e}^{A}\)。`,
  a: String.raw`\(\mathrm{e}^{A}=\mathrm{e}\begin{pmatrix}\frac{1}{2}&0&\frac{1}{2}\\\frac{1}{2}&-1&\frac{3}{2}\\\frac{3}{2}&-4&\frac{7}{2}\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(|\lambda I-A|=\lambda^{3}-3\lambda^{2}+3\lambda-1=(\lambda-1)^{3}\)，故 \(A=I+N\)，其中 \(N=A-I=\begin{pmatrix}-1&1&0\\0&-1&1\\1&-3&2\end{pmatrix}\)。第二步：算 \(N^{2}=\begin{pmatrix}1&-2&1\\1&-2&1\\1&-2&1\end{pmatrix}\)，\(N^{3}=0\)（\(N\) 是秩 \(1\) 的幂零矩阵，幂零指数为 \(3\)）。第三步：因 \(I\) 与 \(N\) 可交换，\(\mathrm{e}^{A}=\mathrm{e}\,\mathrm{e}^{N}=\mathrm{e}\left(I+N+\frac{1}{2}N^{2}\right)\)。第四步：代入 \(N\) 与 \(N^{2}\) 得 \(I+N+\frac{1}{2}N^{2}=\begin{pmatrix}\frac{1}{2}&0&\frac{1}{2}\\\frac{1}{2}&-1&\frac{3}{2}\\\frac{3}{2}&-4&\frac{7}{2}\end{pmatrix}\)。第五步：故 \(\mathrm{e}^{A}\) 等于上式乘以 \(\mathrm{e}\)。` },

{ id:'LA06-83', ch:6, type:'计算', diff:5, tags:'幂零矩阵 秩判据 矩阵指数 逆矩阵',
  q: String.raw`设 \(3\) 阶复矩阵 \(A\) 满足 \(A^{2}=0\) 且 \(\mathrm{r}(A)=1\)。求 \(A\) 的 Jordan 标准形，并求 \(\mathrm{e}^{A}\) 与 \((I+A)^{-1}\)。`,
  a: String.raw`\(J=J_{2}(0)\oplus J_{1}(0)\)；\(\mathrm{e}^{A}=I+A\)；\((I+A)^{-1}=I-A\)。`,
  sol: String.raw`第一步：由 \(A^{2}=0\) 知 \(A\) 幂零，特征值全为 \(0\)，且每个 Jordan 块的阶数不超过 \(2\)。第二步：\(n-\mathrm{r}(A)=3-1=2\) 等于 Jordan 块个数（每块 \(J_{k}(0)\) 的秩为 \(k-1\)，故 \(\dim\ker A\) 等于块数）。第三步：块数 \(2\)、总阶数 \(3\)、块长不超过 \(2\)，只能是 \(2+1\)，故 \(J=J_{2}(0)\oplus J_{1}(0)\)。第四步：指数级数在 \(A^{2}=0\) 处截断，\(\mathrm{e}^{A}=I+A+\frac{A^{2}}{2!}+\cdots=I+A\)。第五步：由 \((I+A)(I-A)=I-A^{2}=I\) 得 \((I+A)^{-1}=I-A\)，与幂零情形的有限交错和公式一致。` },

{ id:'LA06-84', ch:6, type:'计算', diff:5, tags:'矩阵函数 正弦余弦 幂零部分 二项式展开',
  q: String.raw`设 \(A=\begin{pmatrix}1&2\\0&1\end{pmatrix}\)，求 \(\sin A\) 与 \(\cos A\)（即 \(\sum_{k}(-1)^{k}\frac{A^{2k+1}}{(2k+1)!}\) 与 \(\sum_{k}(-1)^{k}\frac{A^{2k}}{(2k)!}\)）。`,
  a: String.raw`\(\sin A=\begin{pmatrix}\sin1&2\cos1\\0&\sin1\end{pmatrix}\)；\(\cos A=\begin{pmatrix}\cos1&-2\sin1\\0&\cos1\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(A=I+N\)，\(N=\begin{pmatrix}0&2\\0&0\end{pmatrix}\)，\(N^{2}=0\)。第二步：把 \(\sin(I+N)\) 按二项式定理展开，含 \(N^{2}\) 及以上的项全部消失：\(\sin A=\sin1\cdot I+\cos1\cdot N\)（用 \(\sin(\lambda)\) 在 \(\lambda=1\) 处的一阶展开，或用 \(\sin(I+N)=\sin1\cos N+\cos1\sin N\) 与 \(\cos N=I,\ \sin N=N\)）。第三步：同理 \(\cos A=\cos1\cdot I-\sin1\cdot N\)。第四步：代入 \(N\) 得 \(\sin A=\begin{pmatrix}\sin1&2\cos1\\0&\sin1\end{pmatrix}\)，\(\cos A=\begin{pmatrix}\cos1&-2\sin1\\0&\cos1\end{pmatrix}\)。第五步：可复核 \(\sin^{2}A+\cos^{2}A=I\)（两者都是 \(1\) 的多项式，逐项相加即得）。` },

{ id:'LA06-85', ch:6, type:'计算', diff:5, tags:'矩阵指数 单参数族 分块对角 幂零块',
  q: String.raw`设 \(A=\begin{pmatrix}0&1&0\\0&0&0\\0&0&-2\end{pmatrix}\)，求 \(\mathrm{e}^{At}\)（\(t\) 为实参数）。`,
  a: String.raw`\(\mathrm{e}^{At}=\begin{pmatrix}1&t&0\\0&1&0\\0&0&\mathrm{e}^{-2t}\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(A\) 是分块对角矩阵 \(\mathrm{diag}(B,-2)\)，其中 \(B=\begin{pmatrix}0&1\\0&0\end{pmatrix}\)。第二步：矩阵指数保持分块对角结构，\(\mathrm{e}^{At}=\mathrm{diag}(\mathrm{e}^{Bt},\mathrm{e}^{-2t})\)。第三步：\(B^{2}=0\)，故 \(\mathrm{e}^{Bt}=I+tB=\begin{pmatrix}1&t\\0&1\end{pmatrix}\)。第四步：合并得 \(\mathrm{e}^{At}=\begin{pmatrix}1&t&0\\0&1&0\\0&0&\mathrm{e}^{-2t}\end{pmatrix}\)。第五步：求导验证 \(\frac{\mathrm{d}}{\mathrm{d}t}\mathrm{e}^{At}=A\mathrm{e}^{At}\)。` },

{ id:'LA06-86', ch:6, type:'计算', diff:5, tags:'斐波那契矩阵 矩阵幂 特征多项式 递推',
  q: String.raw`设 \(A=\begin{pmatrix}1&1\\1&0\end{pmatrix}\)。求 \(A^{n}\) 的一般公式，并求 \(A^{10}\)。`,
  a: String.raw`\(A^{n}=\begin{pmatrix}F_{n+1}&F_{n}\\F_{n}&F_{n-1}\end{pmatrix}\)（\(F_{1}=F_{2}=1\)）；\(A^{10}=\begin{pmatrix}89&55\\55&34\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(|\lambda I-A|=\lambda^{2}-\lambda-1\)，故 \(A^{2}=A+I\)（Cayley-Hamilton）。第二步：由 \(A^{2}=A+I\) 归纳：设 \(A^{k}=F_{k}A+F_{k-1}I\)，则 \(A^{k+1}=F_{k}A^{2}+F_{k-1}A=F_{k}(A+I)+F_{k-1}A=(F_{k}+F_{k-1})A+F_{k}I=F_{k+1}A+F_{k}I\)。第三步：于是 \(A^{n}=F_{n}A+F_{n-1}I=\begin{pmatrix}F_{n}+F_{n-1}&F_{n}\\F_{n}&F_{n-1}\end{pmatrix}\)，即 \(\begin{pmatrix}F_{n+1}&F_{n}\\F_{n}&F_{n-1}\end{pmatrix}\)。第四步：\(F_{1}=1,F_{2}=1,\dots,F_{9}=34,F_{10}=55,F_{11}=89\)，故 \(A^{10}=\begin{pmatrix}89&55\\55&34\end{pmatrix}\)。` },

{ id:'LA06-87', ch:6, type:'计算', diff:5, tags:'迹 行列式 特征值 逆矩阵的迹',
  q: String.raw`设 \(A=\begin{pmatrix}1&1\\0&2\end{pmatrix}\)。求 \(\mathrm{tr}(A^{k})\)（\(k\) 为正整数）、\(\det(A^{k})\) 与 \(\mathrm{tr}(A^{-1})\)。`,
  a: String.raw`\(\mathrm{tr}(A^{k})=1+2^{k}\)，\(\det(A^{k})=2^{k}\)，\(\mathrm{tr}(A^{-1})=\dfrac{3}{2}\)。`,
  sol: String.raw`第一步：\(A\) 是上三角矩阵，特征值为对角元 \(1,2\)。第二步：\(A^{k}\) 的特征值为 \(1^{k}=1\) 与 \(2^{k}\)，故 \(\mathrm{tr}(A^{k})=1+2^{k}\)。第三步：\(\det(A^{k})=(\det A)^{k}=2^{k}\)（也可由两特征值之积 \(2^{k}\) 得到）。第四步：\(A^{-1}\) 的特征值为 \(1\) 与 \(\frac{1}{2}\)，故 \(\mathrm{tr}(A^{-1})=1+\frac{1}{2}=\frac{3}{2}\)；直接算 \(A^{-1}=\begin{pmatrix}1&-\frac{1}{2}\\0&\frac{1}{2}\end{pmatrix}\) 亦得同样结果。` },

{ id:'LA06-88', ch:6, type:'计算', diff:5, tags:'特征值 迹 行列式 逆矩阵 秩',
  q: String.raw`设 \(3\) 阶矩阵 \(A\) 的特征多项式为 \(\lambda^{3}-6\lambda^{2}+11\lambda-6\)。求 \(\mathrm{tr}(A^{2})\)、\(\det(A)\)、\(\mathrm{tr}(A^{-1})\) 与 \(\mathrm{r}(A)\)。`,
  a: String.raw`\(\mathrm{tr}(A^{2})=14\)，\(\det(A)=6\)，\(\mathrm{tr}(A^{-1})=\dfrac{11}{6}\)，\(\mathrm{r}(A)=3\)。`,
  sol: String.raw`第一步：特征多项式分解为 \((\lambda-1)(\lambda-2)(\lambda-3)\)，故特征值为 \(1,2,3\)。第二步：\(\mathrm{tr}(A^{2})=\sum\lambda_{i}^{2}=1+4+9=14\)。第三步：\(\det(A)=\prod\lambda_{i}=1\times2\times3=6\)。第四步：\(\mathrm{tr}(A^{-1})=\sum\frac{1}{\lambda_{i}}=1+\frac{1}{2}+\frac{1}{3}=\frac{11}{6}\)。第五步：三个特征值都非零，故 \(A\) 可逆，\(\mathrm{r}(A)=3\)。` },

{ id:'LA06-89', ch:6, type:'计算', diff:5, tags:'Jordan 标准形 最小多项式 秩判据 幂零指数',
  q: String.raw`设 \(4\) 阶复矩阵 \(A\) 的特征多项式为 \((\lambda-1)^{2}(\lambda+1)^{2}\)，最小多项式为 \((\lambda-1)(\lambda+1)^{2}\)。求 \(A\) 的 Jordan 标准形，并求 \(\mathrm{r}(A-I)\) 与 \(\mathrm{r}(A+I)\)。`,
  a: String.raw`\(J=J_{1}(1)\oplus J_{1}(1)\oplus J_{2}(-1)=\mathrm{diag}\left(1,1,\begin{pmatrix}-1&1\\0&-1\end{pmatrix}\right)\)；\(\mathrm{r}(A-I)=2\)，\(\mathrm{r}(A+I)=3\)。`,
  sol: String.raw`第一步：对 \(\lambda=1\)：特征多项式中的指数为 \(2\)，最小多项式中的指数为 \(1\)，说明没有阶数 \(\ge2\) 的块，故是两个 \(J_{1}(1)\)。第二步：对 \(\lambda=-1\)：特征多项式指数为 \(2\)、最小多项式指数为 \(2\)，说明最大块阶数为 \(2\)，且总阶数为 \(2\)，故是单个 \(J_{2}(-1)\)。第三步：于是 \(J=J_{1}(1)\oplus J_{1}(1)\oplus J_{2}(-1)\)。第四步：\(\mathrm{r}(A-I)\)：两个 \(1\) 阶块贡献 \(0\)，\(J_{2}(-1)\) 上的 \(J_{2}(-1)-I=\begin{pmatrix}-2&1\\0&-2\end{pmatrix}\) 满秩贡献 \(2\)，故 \(\mathrm{r}(A-I)=2\)。第五步：\(\mathrm{r}(A+I)\)：每个 \(J_{1}(1)\) 贡献 \(1\)（其 \(J_{1}(1)+I=(2)\)），\(J_{2}(-1)+I=\begin{pmatrix}0&1\\0&0\end{pmatrix}\) 贡献 \(1\)，合计 \(1+1+1=3\)，与 \(4-\dim\ker(A+I)=4-1=3\) 一致。` },

{ id:'LA06-90', ch:6, type:'计算', diff:5, tags:'矩阵指数 旋转块 循环性 实 Jordan 形',
  q: String.raw`设 \(A=\begin{pmatrix}0&-1&0\\1&0&0\\0&0&0\end{pmatrix}\)，求 \(\mathrm{e}^{A}\)。`,
  a: String.raw`\(\mathrm{e}^{A}=\begin{pmatrix}\cos1&-\sin1&0\\\sin1&\cos1&0\\0&0&1\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(A=\mathrm{diag}(B,0)\)，其中 \(B=\begin{pmatrix}0&-1\\1&0\end{pmatrix}\) 满足 \(B^{2}=-I\)。第二步：矩阵指数保持分块对角，\(\mathrm{e}^{A}=\mathrm{diag}(\mathrm{e}^{B},\mathrm{e}^{0})=\mathrm{diag}(\mathrm{e}^{B},1)\)。第三步：由 \(B^{2}=-I\) 把 \(\mathrm{e}^{B}\) 的级数按偶次与奇次合并：\(\mathrm{e}^{B}=\cos1\,I+\sin1\,B=\begin{pmatrix}\cos1&-\sin1\\\sin1&\cos1\end{pmatrix}\)。第四步：合并得 \(\mathrm{e}^{A}=\begin{pmatrix}\cos1&-\sin1&0\\\sin1&\cos1&0\\0&0&1\end{pmatrix}\)。第五步：可验证它是正交矩阵且行列式为 \(1\)（旋转 \(1\) 弧度），与 \(A\) 为反对称矩阵相符。` },

{ id:'LA06-91', ch:6, type:'证明', diff:5, tags:'可对角化 方次数 广义特征子空间 最小多项式',
  q: String.raw`设 \(A\) 为 \(n\) 阶复矩阵。证明：\(A\) 可对角化当且仅当对 \(A\) 的每个特征值 \(\lambda\)，都有 \(\ker(A-\lambda I)^{2}=\ker(A-\lambda I)\)。`,
  a: String.raw`结论成立（"方次数为 1"判据）；等价说法是每个特征值的最大 Jordan 块为一阶。`,
  sol: String.raw`第一步（必要性）：若 \(A\) 可对角化，则 \(m_{A}\) 无重根，于是 \((A-\lambda I)\) 与 \((A-\lambda I)^{2}\) 在 \(A\) 的多项式代数中扮演相同角色：更具体地，设 \(A\sim\mathrm{diag}(\lambda_{1},\dots,\lambda_{n})\)，则 \((A-\lambda I)^{2}x=0\) 意味着在特征值 \(\lambda\) 的分量上有 \((\lambda_{i}-\lambda)^{2}\xi_{i}=0\)。第二步：由 \(\lambda_{i}\neq\lambda\) 时 \((\lambda_{i}-\lambda)^{2}\neq0\) 得对应分量为 \(0\)，故 \((A-\lambda I)x=0\)，即两空间相等。第三步（充分性）：设对每个 \(\lambda\) 都有 \(\ker(A-\lambda I)^{2}=\ker(A-\lambda I)\)。由 Jordan 理论，\(\dim\ker(A-\lambda I)^{2}-\dim\ker(A-\lambda I)\) 等于阶数 \(\ge2\) 的 \(\lambda\)-块的个数。第四步：该差为 \(0\) 说明 \(\lambda\) 的所有块都是一阶；对每个特征值都成立，故全部 Jordan 块一阶，\(A\) 可对角化。第五步：于是"可对角化"等价于"每个特征值的方次数（幂零指数）为 \(1\)"，而无重根最小多项式是同一件事的另一种说法。` },

{ id:'LA06-92', ch:6, type:'证明', diff:5, tags:'秩 直和分解 像与核 Fitting 分解',
  q: String.raw`设 \(A\) 是 \(n\) 维复向量空间 \(V\) 上的线性变换。证明：\(\mathrm{r}(A)=\mathrm{r}(A^{2})\) 当且仅当 \(V=\mathrm{im}\,A\oplus\ker A\)。`,
  a: String.raw`结论成立；两者都等价于 \(A\) 的零特征值的 Jordan 块全是一阶。`,
  sol: String.raw`第一步：对 \(x\in\mathrm{im}\,A\)，写 \(x=Ay\)；若 \(Ax=0\) 则 \(A^{2}y=0\)，即 \(y\in\ker A^{2}\)。更直接地，限制映射 \(A|_{\mathrm{im}\,A}:\mathrm{im}\,A\to\mathrm{im}\,A^{2}\) 的核为 \(\mathrm{im}\,A\cap\ker A\)。第二步：故 \(\dim\mathrm{im}\,A^{2}=\mathrm{r}(A)-\dim(\mathrm{im}\,A\cap\ker A)\)。第三步：由维数公式 \(\dim\mathrm{im}\,A+\dim\ker A=n\) 知 \(\mathrm{im}\,A\cap\ker A=\{0\}\) 等价于 \(\mathrm{im}\,A\oplus\ker A=V\)。第四步：由第二步的等式，\(\mathrm{r}(A^{2})=\mathrm{r}(A)\) 当且仅当 \(\dim(\mathrm{im}\,A\cap\ker A)=0\)。第五步：两者合起来即为所求；从 Jordan 形看，也等价于 \(A\) 的零特征值部分没有阶数 \(\ge2\) 的块（即 \(\ker A^{2}=\ker A\)）。` },

{ id:'LA06-93', ch:6, type:'证明', diff:5, tags:'秩不等式 Sylvester 不等式 线性映射 维数公式',
  q: String.raw`设 \(A\) 为 \(m\times n\) 复矩阵，\(B\) 为 \(n\times p\) 复矩阵。证明 \(\mathrm{r}(AB)\ge\mathrm{r}(A)+\mathrm{r}(B)-n\)。`,
  a: String.raw`Sylvester 秩不等式成立；等号可由 \(A\) 或 \(B\) 满秩时达到。`,
  sol: String.raw`第一步：把 \(A,B\) 看成线性映射 \(\mathbb{C}^{p}\xrightarrow{B}\mathbb{C}^{n}\xrightarrow{A}\mathbb{C}^{m}\)，记 \(W=\mathrm{im}\,B\)，则 \(\mathrm{r}(AB)=\dim A(W)\)。第二步：由维数公式 \(\dim A(W)=\dim W-\dim(W\cap\ker A)\)。第三步：\(\dim W=\mathrm{r}(B)\)，\(\dim(W\cap\ker A)\le\dim\ker A=n-\mathrm{r}(A)\)。第四步：代入得 \(\mathrm{r}(AB)\ge\mathrm{r}(B)-(n-\mathrm{r}(A))=\mathrm{r}(A)+\mathrm{r}(B)-n\)。第五步：当 \(A\) 行满秩（\(\ker A\cap W\) 尽可能小）或 \(B\) 满列秩且像与 \(\ker A\) 相交换时取等号。` },

{ id:'LA06-94', ch:6, type:'证明', diff:5, tags:'幂等 可对角化 反例 幂零指数 最小多项式',
  q: String.raw`设 \(A\) 为 \(n\) 阶复矩阵且 \(A^{3}=A^{2}\)。证明：\(A\) 可对角化当且仅当 \(A^{2}=A\)。`,
  a: String.raw`结论成立；即 \(A^{3}=A^{2}\) 时可对角化只发生在 \(A\) 为幂等矩阵的情形。`,
  sol: String.raw`第一步：由 \(A^{3}-A^{2}=0\) 知 \(A^{2}(A-I)=0\)，故 \(m_{A}(\lambda)\) 整除 \(\lambda^{2}(\lambda-1)\)，特征值只能是 \(0\) 或 \(1\)。第二步：（\(\Leftarrow\)）若 \(A^{2}=A\)，则 \(m_{A}\mid\lambda(\lambda-1)\) 无重根，\(A\) 可对角化。第三步：（\(\Rightarrow\)）设 \(A\) 可对角化，则 \(A\sim\mathrm{diag}(I_{p},0)\)（特征值只取 \(0,1\)）。第四步：于是 \(A^{2}=A\)。第五步：反例说明必要性不可省：\(A=J_{2}(0)=\begin{pmatrix}0&1\\0&0\end{pmatrix}\) 满足 \(A^{3}=0=A^{2}\)，但它不可对角化（几何重数 \(1<2\)），此时 \(A^{2}\neq A\)。` },

{ id:'LA06-95', ch:6, type:'证明', diff:5, tags:'Jordan 块数 秩恒等式 存在性 矛盾法',
  q: String.raw`证明：不存在 \(4\) 阶复矩阵 \(A\) 同时满足特征多项式为 \((\lambda-1)^{4}\)、\(\mathrm{r}(A-I)=3\)、\(\mathrm{r}((A-I)^{2})=1\)。`,
  a: String.raw`不存在；因为 \(\mathrm{r}(A-I)=3\) 推出只有一个 \(4\) 阶块，从而 \(\mathrm{r}((A-I)^{2})=2\neq1\)。`,
  sol: String.raw`第一步：设 \(\lambda=1\) 的 Jordan 块大小为 \(k_{1},\dots,k_{s}\)，\(\sum k_{i}=4\)。第二步：\(\mathrm{r}((A-I)^{j})=\sum_{i}\max(k_{i}-j,0)\)。第三步：\(j=0\) 时 \(\mathrm{r}(I)=4\)，故 \(4-\mathrm{r}(A-I)=4-3=1\)，即 \(s=1\)，只有一个块，于是 \(k_{1}=4\)。第四步：此时 \(\mathrm{r}((A-I)^{2})=\max(4-2,0)=2\)。第五步：与题设 \(\mathrm{r}((A-I)^{2})=1\) 矛盾，故这样的 \(A\) 不存在。` },

{ id:'LA06-96', ch:6, type:'证明', diff:5, tags:'相似不变量 矩阵幂 最小多项式 反例',
  q: String.raw`设 \(A,B\) 为 \(n\) 阶复矩阵。（1）证明若 \(A\sim B\)，则对任意正整数 \(k\) 有 \(A^{k}\sim B^{k}\)，且 \(m_{A}=m_{B}\)；（2）举例说明 \(A^{k}\sim B^{k}\) 不能推出 \(A\sim B\)。`,
  a: String.raw`（1）成立；（2）反例：\(A=J_{2}(0)\)，\(B=0\)，则 \(A^{2}=B^{2}=0\) 但 \(A\not\sim B\)。`,
  sol: String.raw`第一步：（1）设 \(B=P^{-1}AP\)，则 \(B^{k}=P^{-1}A^{k}P\)，故 \(A^{k}\sim B^{k}\)。第二步：对任意多项式 \(f\) 有 \(f(B)=P^{-1}f(A)P\)，于是 \(f(A)=0\) 当且仅当 \(f(B)=0\)，零化多项式的集合相同，最低次首一者相同，故 \(m_{A}=m_{B}\)。第三步：（2）取 \(A=J_{2}(0)=\begin{pmatrix}0&1\\0&0\end{pmatrix}\)，\(B=0\)。第四步：\(A^{2}=0=B^{2}\)，即 \(A^{2}\sim B^{2}\)。第五步：但 \(m_{A}(\lambda)=\lambda^{2}\neq\lambda=m_{B}(\lambda)\)，故 \(A\not\sim B\)；这说明"某次幂相似"是比相似弱得多的条件，非零幂零部分在幂运算中被抹掉了信息。` },

{ id:'LA06-97', ch:6, type:'证明', diff:5, tags:'实矩阵 无实特征值 行列式 偶数阶 复特征值成对',
  q: String.raw`设 \(A\) 为 \(n\) 阶实矩阵且 \(A^{2}=-I\)。证明：\(n\) 为偶数，且 \(A\) 没有实特征值。`,
  a: String.raw`\(n\) 必为偶数；\(A\) 的特征值只能是 \(\pm\mathrm{i}\)，没有实特征值。`,
  sol: String.raw`第一步：对两边取行列式，\(\det(A)^{2}=\det(-I)=(-1)^{n}\)。第二步：\(A\) 是实矩阵，\(\det(A)\) 是实数，故 \(\det(A)^{2}>0\)（若 \(A^{2}=-I\) 则 \(A\) 可逆，\(\det A\neq0\)）。第三步：于是 \((-1)^{n}>0\)，即 \(n\) 为偶数。第四步：设 \(\lambda\) 是 \(A\) 的实特征值、\(x\neq0\) 为实特征向量，则 \(A^{2}x=\lambda^{2}x=-x\)，得 \(\lambda^{2}=-1\)，无实解。第五步：故 \(A\) 无实特征值；又实矩阵的非实特征值成共轭对出现，特征值只能取 \(\mathrm{i}\) 与 \(-\mathrm{i}\) 各 \(\frac{n}{2}\) 个（与 \(n\) 为偶数一致）。` },

{ id:'LA06-98', ch:6, type:'证明', diff:5, tags:'幂零矩阵 逆矩阵 有限交错和 可逆判据',
  q: String.raw`设 \(A\) 为 \(n\) 阶复矩阵且 \(A^{n}=0\)。证明 \(I+A\) 可逆，并给出其逆的显式表达式。`,
  a: String.raw`\((I+A)^{-1}=I-A+A^{2}-\cdots+(-1)^{n-1}A^{n-1}\)。`,
  sol: String.raw`第一步：记 \(S=I-A+A^{2}-\cdots+(-1)^{n-1}A^{n-1}\)（有限和，共 \(n\) 项）。第二步：直接相乘，\((I+A)S=S+AS=\sum_{k=0}^{n-1}(-1)^{k}A^{k}+\sum_{k=0}^{n-1}(-1)^{k}A^{k+1}\)。第三步：两个和中的同类项两两相消（\(A^{k}\) 的系数为 \((-1)^{k}+(-1)^{k-1}=0\)，\(1\le k\le n-1\)）。第四步：剩下 \(I+(-1)^{n-1}A^{n}=I\)（由 \(A^{n}=0\)）。同理 \(S(I+A)=I\)。第五步：故 \(I+A\) 可逆且逆为 \(S\)；一般地，幂零矩阵加数量矩阵总是可逆的，且逆的级数必然截断。` },

{ id:'LA06-99', ch:6, type:'证明', diff:5, tags:'最小多项式 可对角化 互异根 次数',
  q: String.raw`设 \(A\) 为 \(n\) 阶复矩阵，特征值互异者为 \(\lambda_{1},\dots,\lambda_{s}\)。证明：\(A\) 可对角化当且仅当 \(m_{A}(\lambda)=(\lambda-\lambda_{1})\cdots(\lambda-\lambda_{s})\)，即最小多项式无重根、且次数等于不同特征值的个数。`,
  a: String.raw`结论成立；这是可对角化的"最小多项式判据"。`,
  sol: String.raw`第一步（\(\Rightarrow\)）：若 \(A\) 可对角化，则 \(A=PDP^{-1}\)，\(D=\mathrm{diag}\) 且其对角元只取 \(\lambda_{1},\dots,\lambda_{s}\)。第二步：取 \(p(\lambda)=\prod_{i=1}^{s}(\lambda-\lambda_{i})\)，则 \(p(D)=0\)（每个对角元都是某个 \(\lambda_{i}\)），故 \(p(A)=Pp(D)P^{-1}=0\)。第三步：又若 \(q\) 是零化 \(A\) 的多项式，则 \(q(D)=0\)，对每个 \(\lambda_{i}\)（它是某个对角元）有 \(q(\lambda_{i})=0\)，故 \(p\mid q\)。第四步：于是 \(p\) 是零化 \(A\) 的最低次首一多项式，\(m_{A}=p\)，无重根且次数为 \(s\)。第五步（\(\Leftarrow\)）：若 \(m_{A}=p\) 无重根，则 \(m_{A}\) 的根都是单根。设 \(A\) 的 Jordan 形为 \(J\)，则 \(m_{A}\) 也等于 \(J\) 的最小多项式，其根的重数等于最大块阶数。第六步：重数都为 \(1\) 说明所有 Jordan 块都是 \(1\) 阶，\(A\) 可对角化。` },

{ id:'LA06-100', ch:6, type:'计算', diff:5, tags:'最小多项式 带余除法 插值 矩阵幂 综合',
  q: String.raw`设 \(3\) 阶复矩阵 \(A\) 的最小多项式为 \((\lambda-1)(\lambda-2)^{2}\)。求 \(A^{n}\)（\(n\ge1\)）表示为 \(A^{2},A,I\) 的线性组合。`,
  a: String.raw`\(A^{n}=\left(n2^{n-1}-2^{n}+1\right)A^{2}+\left(2^{n+2}-3n2^{n-1}-4\right)A+\left(n2^{n}-3\cdot2^{n}+4\right)I\)；例如 \(A^{3}=5A^{2}-8A+4I\)。`,
  sol: String.raw`第一步：设 \(\lambda^{n}=q(\lambda)(\lambda-1)(\lambda-2)^{2}+a\lambda^{2}+b\lambda+c\)，把 \(\lambda\) 换成 \(A\) 即得 \(A^{n}=aA^{2}+bA+cI\)。第二步：代入 \(\lambda=1\)：\(a+b+c=1\)。第三步：代入 \(\lambda=2\)：\(4a+2b+c=2^{n}\)。第四步：对两边求导后代入 \(\lambda=2\)（因 \((\lambda-2)^{2}\) 是重根）：\(4a+b=n2^{n-1}\)。第五步：联立解得 \(a=n2^{n-1}-2^{n}+1\)，\(b=2^{n+2}-3n2^{n-1}-4\)，\(c=n2^{n}-3\cdot2^{n}+4\)。第六步：取 \(n=3\) 复核：\(a=5,b=-8,c=4\)，即 \(A^{3}=5A^{2}-8A+4I\)，与最小多项式 \((\lambda-1)(\lambda-2)^{2}=\lambda^{3}-5\lambda^{2}+8\lambda-4\) 的 Cayley-Hamilton 关系一致。` }
);
