/* 第 6 章 相似矩阵与对角化 · 20 题 */
window.LBANK = window.LBANK || [];
window.LBANK.push(
{ id:'LA06-01', ch:6, type:'计算', diff:5, tags:'可对角化 参数讨论 Jordan 标准形',
  q: String.raw`设 \(A=\begin{pmatrix}2&1&0\\0&2&0\\0&0&a\end{pmatrix}\)。问 \(a\) 取何值时 \(A\) 可对角化？并求 \(A\) 的 Jordan 标准形。`,
  a: String.raw`对任意 \(a\)，\(A\) 都不可对角化；\(a\neq2\) 时 \(J=J_{2}(2)\oplus J_{1}(a)\)，\(a=2\) 时 \(J=J_{2}(2)\oplus J_{1}(2)\)。`,
  sol: String.raw`第一步：\(|\lambda I-A|=(\lambda-2)^{2}(\lambda-a)\)。第二步：左上 \(2\times2\) 块为 \(J_{2}(2)\)，故 \(\lambda=2\) 的几何重数至多为 \(2\)；当 \(a\neq2\) 时，\(\lambda=2\) 的代数重数为 \(2\)，而 \(\mathrm{r}(A-2I)=2\)，几何重数为 \(1\)，不可对角化，Jordan 块为 \(J_{2}(2)\oplus J_{1}(a)\)。第三步：当 \(a=2\) 时，\(\lambda=2\) 的代数重数为 \(3\)，而 \(\mathrm{r}(A-2I)=1\)，几何重数为 \(2\)，仍不可对角化，Jordan 块为 \(J_{2}(2)\oplus J_{1}(2)\)。第四步：故不存在使 \(A\) 可对角化的 \(a\)。` },

{ id:'LA06-02', ch:6, type:'计算', diff:5, tags:'最小多项式 可对角化 重根',
  q: String.raw`设 \(A=\begin{pmatrix}1&1&0\\0&1&0\\0&0&2\end{pmatrix}\)。求 \(A\) 的最小多项式，并判断 \(A\) 是否可对角化。`,
  a: String.raw`\(m(\lambda)=(\lambda-1)^{2}(\lambda-2)\)；\(A\) 不可对角化。`,
  sol: String.raw`第一步：\(|\lambda I-A|=(\lambda-1)^{2}(\lambda-2)\)。第二步：计算 \((A-I)(A-2I)=\begin{pmatrix}0&-1&0\\0&0&0\\0&0&0\end{pmatrix}\neq0\)。第三步：再算 \((A-I)^{2}(A-2I)=0\)。第四步：故最小多项式为 \((\lambda-1)^{2}(\lambda-2)\)，含有重根，\(A\) 不可对角化。` },

{ id:'LA06-03', ch:6, type:'计算', diff:5, tags:'Jordan 标准形 分块三角矩阵 幂零指数',
  q: String.raw`设 \(A=\begin{pmatrix}2&1&0&0\\0&2&1&0\\0&0&2&0\\1&0&0&5\end{pmatrix}\)。求 \(A\) 的 Jordan 标准形。`,
  a: String.raw`\(J=J_{3}(2)\oplus J_{1}(5)=\begin{pmatrix}2&1&0&0\\0&2&1&0\\0&0&2&0\\0&0&0&5\end{pmatrix}\)。`,
  sol: String.raw`第一步：把 \(A\) 写成分块下三角 \(\begin{pmatrix}B&0\\C&D\end{pmatrix}\)，其中 \(B=\begin{pmatrix}2&1&0\\0&2&1\\0&0&2\end{pmatrix}\)，\(D=(5)\)。第二步：分块三角矩阵的特征值为对角块特征值之并，故特征值为 \(2,2,2,5\)。第三步：\(B-2I\) 的幂零指数为 \(3\)，对应一个 \(3\) 阶 Jordan 块 \(J_{3}(2)\)。第四步：\(\lambda=5\) 为单特征值，对应 \(J_{1}(5)\)。第五步：因 \(B\) 与 \(D\) 的特征值互异，分块三角矩阵相似于 \(\mathrm{diag}(B,D)\)，故 \(J=J_{3}(2)\oplus J_{1}(5)\)。` },

{ id:'LA06-04', ch:6, type:'计算', diff:4, tags:'相似不变量 迹 行列式',
  q: String.raw`设 \(A=\begin{pmatrix}1&2\\3&a\end{pmatrix}\) 与 \(B=\begin{pmatrix}2&0\\0&b\end{pmatrix}\) 相似，求 \(a,b\)。`,
  a: String.raw`\(a=-4,\;b=-5\)。`,
  sol: String.raw`第一步：相似矩阵的迹相等，故 \(1+a=2+b\)。第二步：相似矩阵的行列式相等，故 \(a-6=2b\)。第三步：联立解得 \(a=-4,\;b=-5\)。第四步：此时 \(A\) 的特征值为 \(2,-5\)，互异，故 \(A\) 可对角化且与 \(B\) 相似，条件充分。` },

{ id:'LA06-05', ch:6, type:'证明', diff:5, tags:'同时对角化 交换矩阵 特征子空间',
  q: String.raw`设 \(A,B\) 均为 \(n\) 阶可对角化矩阵，且 \(AB=BA\)。证明存在可逆矩阵 \(P\)，使 \(P^{-1}AP\) 与 \(P^{-1}BP\) 同时为对角矩阵。`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：把全空间分解为 \(A\) 的特征子空间的直和 \(V=\oplus_{\lambda}V_{\lambda}(A)\)。第二步：由 \(AB=BA\)，对 \(x\in V_{\lambda}(A)\) 有 \(A(Bx)=B(Ax)=\lambda Bx\)，故 \(B(V_{\lambda}(A))\subset V_{\lambda}(A)\)。第三步：\(B\) 在 \(V_{\lambda}(A)\) 上的限制可对角化，因为它的最小多项式整除 \(B\) 的最小多项式，而后者无重根。第四步：在每个 \(V_{\lambda}(A)\) 内取 \(B\) 的特征向量基，合并成 \(V\) 的基。第五步：该基下 \(A\) 与 \(B\) 均为对角矩阵。` },

{ id:'LA06-06', ch:6, type:'证明', diff:5, tags:'Schur 定理 酉矩阵 上三角化',
  q: String.raw`设 \(A\) 为 \(n\) 阶复矩阵。证明存在酉矩阵 \(U\)，使 \(U^{*}AU\) 为上三角矩阵。`,
  a: String.raw`结论成立（Schur 定理）。`,
  sol: String.raw`对 \(n\) 归纳。第一步：\(n=1\) 显然。第二步：取 \(A\) 的一个单位特征向量 \(u_{1}\)，扩充为酉矩阵 \(U_{1}=(u_{1},W)\)。第三步：于是 \(U_{1}^{*}AU_{1}=\begin{pmatrix}\lambda&*\\0&A_{1}\end{pmatrix}\)。第四步：对 \(A_{1}\) 用归纳假设，存在酉矩阵 \(V\) 使 \(V^{*}A_{1}V\) 为上三角。第五步：令 \(U=U_{1}\begin{pmatrix}1&0\\0&V\end{pmatrix}\)，则 \(U\) 为酉矩阵且 \(U^{*}AU\) 为上三角。` },

{ id:'LA06-07', ch:6, type:'计算', diff:4, tags:'对角化 矩阵幂 特征向量',
  q: String.raw`设 \(A=\begin{pmatrix}1&2\\2&1\end{pmatrix}\)，求 \(A^{10}\)。`,
  a: String.raw`\(A^{10}=\dfrac{1}{2}\begin{pmatrix}3^{10}+1&3^{10}-1\\3^{10}-1&3^{10}+1\end{pmatrix}\)。`,
  sol: String.raw`第一步：特征值为 \(3,-1\)，对应特征向量 \((1,1)^{\mathrm{T}},(1,-1)^{\mathrm{T}}\)。第二步：令 \(P=\begin{pmatrix}1&1\\1&-1\end{pmatrix}\)，则 \(P^{-1}=\dfrac{1}{2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}\)。第三步：\(A=P\mathrm{diag}(3,-1)P^{-1}\)。第四步：\(A^{10}=P\mathrm{diag}(3^{10},1)P^{-1}\)，乘开得 \(A^{10}=\dfrac{1}{2}\begin{pmatrix}3^{10}+1&3^{10}-1\\3^{10}-1&3^{10}+1\end{pmatrix}\)。` },

{ id:'LA06-08', ch:6, type:'计算', diff:4, tags:'Jordan 块幂 二项式展开 幂零矩阵',
  q: String.raw`设 \(J=\begin{pmatrix}2&1&0\\0&2&1\\0&0&2\end{pmatrix}\)，求 \(J^{10}\)。`,
  a: String.raw`\(J^{10}=\begin{pmatrix}1024&5120&11520\\0&1024&5120\\0&0&1024\end{pmatrix}\)。`,
  sol: String.raw`第一步：令 \(N=J-2I=\begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix}\)，则 \(N^{2}=\begin{pmatrix}0&0&1\\0&0&0\\0&0&0\end{pmatrix}\)，\(N^{3}=0\)。第二步：\(J=2I+N\)，且 \(I\) 与 \(N\) 可交换，故 \(J^{10}=2^{10}I+10\cdot2^{9}N+\binom{10}{2}2^{8}N^{2}\)。第三步：代入得 \(1024I+5120N+11520N^{2}\)。第四步：写成矩阵即得结果。` },

{ id:'LA06-09', ch:6, type:'证明', diff:4, tags:'不可对角化 幂零矩阵 几何重数',
  q: String.raw`证明 \(A=\begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix}\) 不能相似于对角矩阵。`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：\(|\lambda I-A|=\lambda^{3}\)，故 \(A\) 只有特征值 \(0\)。第二步：若 \(A\) 可对角化，则 \(A\sim\mathrm{diag}(0,0,0)=0\)。第三步：但 \(A\neq0\)，矛盾。第四步：也可用几何重数：\(\mathrm{r}(A)=2\)，故 \(\lambda=0\) 的几何重数为 \(3-2=1<3\)。` },

{ id:'LA06-10', ch:6, type:'计算', diff:5, tags:'实对称矩阵 正交对角化 特征向量',
  q: String.raw`设 \(A=\begin{pmatrix}2&1&1\\1&2&1\\1&1&2\end{pmatrix}\)，求正交矩阵 \(Q\)，使 \(Q^{\mathrm{T}}AQ\) 为对角矩阵。`,
  a: String.raw`\(Q=\begin{pmatrix}\frac{1}{\sqrt{3}}&\frac{1}{\sqrt{2}}&\frac{1}{\sqrt{6}}\\\frac{1}{\sqrt{3}}&-\frac{1}{\sqrt{2}}&\frac{1}{\sqrt{6}}\\\frac{1}{\sqrt{3}}&0&-\frac{2}{\sqrt{6}}\end{pmatrix}\)，\(Q^{\mathrm{T}}AQ=\mathrm{diag}(4,1,1)\)。`,
  sol: String.raw`第一步：特征值为 \(4,1,1\)。第二步：\(\lambda=4\) 的特征向量为 \((1,1,1)^{\mathrm{T}}\)；\(\lambda=1\) 的特征子空间为 \(x+y+z=0\)。第三步：在 \(x+y+z=0\) 中取正交向量 \((1,-1,0)^{\mathrm{T}}\) 与 \((1,1,-2)^{\mathrm{T}}\)，再单位化。第四步：按列拼成 \(Q\)，则 \(Q^{\mathrm{T}}Q=I\)，且 \(Q^{\mathrm{T}}AQ=\mathrm{diag}(4,1,1)\)。` },

{ id:'LA06-11', ch:6, type:'证明', diff:5, tags:'实对称矩阵 正交相似 Schur 定理',
  q: String.raw`设 \(A\) 为 \(n\) 阶实对称矩阵。证明存在正交矩阵 \(Q\)，使 \(Q^{\mathrm{T}}AQ\) 为对角矩阵。`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：把 \(A\) 看作复矩阵，由 Schur 定理，存在酉矩阵 \(U\) 使 \(T=U^{*}AU\) 为上三角矩阵。第二步：\(A\) 为 Hermite 矩阵，故 \(T^{*}=(U^{*}AU)^{*}=U^{*}A^{*}U=U^{*}AU=T\)。第三步：上三角且 Hermite 的矩阵必为实对角矩阵，故 \(T=\mathrm{diag}(\lambda_{1},\dots,\lambda_{n})\)，\(\lambda_{i}\in\mathbb{R}\)。第四步：\(A\) 的每个特征子空间由实系数方程组 \((A-\lambda I)x=0\) 定义，可取实基；将它们单位正交化。第五步：把这些实特征向量按列拼成实正交矩阵 \(Q\)，即得 \(Q^{\mathrm{T}}AQ\) 为对角矩阵。` },

{ id:'LA06-12', ch:6, type:'计算', diff:5, tags:'相似 合同 惯性指数',
  q: String.raw`设 \(A=\begin{pmatrix}1&0\\0&-1\end{pmatrix}\)，\(B=\begin{pmatrix}0&1\\1&0\end{pmatrix}\)。判断 \(A\) 与 \(B\) 是否相似、是否合同，并说明理由。`,
  a: String.raw`既相似又合同。相似可取 \(S=\begin{pmatrix}1&1\\1&-1\end{pmatrix}\)，使 \(B=SAS^{-1}\)；合同可取 \(P=\dfrac{1}{\sqrt{2}}\begin{pmatrix}1&1\\1&-1\end{pmatrix}\)，使 \(B=P^{\mathrm{T}}AP\)。`,
  sol: String.raw`第一步：\(A,B\) 的特征值均为 \(1,-1\)，且均为实对称矩阵，故都正交相似于 \(\mathrm{diag}(1,-1)\)，因此相似。第二步：直接验证 \(S^{-1}BS=A\)，即 \(B=SAS^{-1}\)。第三步：合同看惯性指数，\(A\) 与 \(B\) 的正、负惯性指数均为 \((1,1)\)，故合同。第四步：取 \(P=\dfrac{1}{\sqrt{2}}\begin{pmatrix}1&1\\1&-1\end{pmatrix}\)，计算得 \(P^{\mathrm{T}}AP=B\)。` },

{ id:'LA06-13', ch:6, type:'计算', diff:4, tags:'分块对角矩阵 Jordan 标准形',
  q: String.raw`设 \(A=\begin{pmatrix}1&1&0&0\\0&1&0&0\\0&0&2&0\\0&0&0&3\end{pmatrix}\)，求 \(A\) 的 Jordan 标准形。`,
  a: String.raw`\(J=J_{2}(1)\oplus J_{1}(2)\oplus J_{1}(3)=\mathrm{diag}\left(\begin{pmatrix}1&1\\0&1\end{pmatrix},2,3\right)\)。`,
  sol: String.raw`第一步：\(A\) 为分块对角矩阵，左上块 \(B=\begin{pmatrix}1&1\\0&1\end{pmatrix}\)，其余为 \(1\) 阶块。第二步：\(B\) 的特征值为 \(1\)（二重），\(B-I=\begin{pmatrix}0&1\\0&0\end{pmatrix}\) 的秩为 \(1\)，几何重数为 \(1\)，故 \(B\) 的 Jordan 块为 \(J_{2}(1)\)。第三步：\(2,3\) 均为单特征值，对应 \(J_{1}(2),J_{1}(3)\)。第四步：合并得 \(J=J_{2}(1)\oplus J_{1}(2)\oplus J_{1}(3)\)。` },

{ id:'LA06-14', ch:6, type:'证明', diff:5, tags:'幂等矩阵 可对角化 迹与秩',
  q: String.raw`设 \(A\) 为 \(n\) 阶矩阵，且 \(A^{2}=A\)。证明 \(A\) 可对角化，且 \(\mathrm{tr}(A)=\mathrm{r}(A)\)。`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：特征值满足 \(\lambda^{2}=\lambda\)，故 \(\lambda=0\) 或 \(1\)。第二步：对任意 \(x\)，有 \(x=Ax+(I-A)x\)，且 \(A(Ax)=Ax\)，\(A((I-A)x)=0\)。第三步：故 \(V=\mathrm{Col}(A)\oplus\mathrm{Null}(A)\)；交集为零是因为若 \(y=Ax\) 且 \(Ay=0\)，则 \(y=Ax=A^{2}x=Ay=0\)。第四步：在 \(\mathrm{Col}(A)\) 上 \(A=I\)，在 \(\mathrm{Null}(A)\) 上 \(A=0\)，取两组基合并，\(A\) 可对角化。第五步：对角线上 \(1\) 的个数为 \(\dim\mathrm{Col}(A)=\mathrm{r}(A)\)，故 \(\mathrm{tr}(A)=\mathrm{r}(A)\)。` },

{ id:'LA06-15', ch:6, type:'证明', diff:4, tags:'对合矩阵 可对角化 幂等矩阵',
  q: String.raw`设 \(A^{2}=I\)。证明 \(A\) 可对角化，并证明 \(A\) 可表示为两个幂等矩阵之差。`,
  a: String.raw`结论成立；取 \(P=\dfrac{I+A}{2}\)，\(Q=\dfrac{I-A}{2}\)，则 \(P^{2}=P\)，\(Q^{2}=Q\)，且 \(A=P-Q\)。`,
  sol: String.raw`第一步：最小多项式整除 \(\lambda^{2}-1=(\lambda-1)(\lambda+1)\)，无重根，故 \(A\) 可对角化。第二步：令 \(P=\dfrac{I+A}{2}\)，\(Q=\dfrac{I-A}{2}\)。第三步：\(P^{2}=\dfrac{I+2A+A^{2}}{4}=\dfrac{2I+2A}{4}=P\)；同理 \(Q^{2}=Q\)。第四步：\(P-Q=\dfrac{I+A}{2}-\dfrac{I-A}{2}=A\)。` },

{ id:'LA06-16', ch:6, type:'计算', diff:4, tags:'相似判定 Jordan 标准形 几何重数',
  q: String.raw`设 \(A=\begin{pmatrix}3&0&0\\0&3&1\\0&0&3\end{pmatrix}\)，\(B=\begin{pmatrix}3&1&0\\0&3&0\\0&0&3\end{pmatrix}\)。判断 \(A\) 与 \(B\) 是否相似，并求它们共同的 Jordan 标准形。`,
  a: String.raw`相似；共同 Jordan 标准形为 \(J_{2}(3)\oplus J_{1}(3)=\begin{pmatrix}3&1&0\\0&3&0\\0&0&3\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(A\) 的特征值为 \(3\)（三重）。第二步：\(A-3I=\begin{pmatrix}0&0&0\\0&0&1\\0&0&0\end{pmatrix}\) 的秩为 \(1\)，故几何重数为 \(2\)，Jordan 块为 \(J_{2}(3)\oplus J_{1}(3)\)。第三步：同理 \(B-3I=\begin{pmatrix}0&1&0\\0&0&0\\0&0&0\end{pmatrix}\) 的秩为 \(1\)，Jordan 块同为 \(J_{2}(3)\oplus J_{1}(3)\)。第四步：Jordan 标准形相同（不计块次序），故 \(A\sim B\)。` },

{ id:'LA06-17', ch:6, type:'计算', diff:4, tags:'矩阵指数 幂零矩阵 矩阵函数',
  q: String.raw`设 \(A=\begin{pmatrix}1&1\\0&1\end{pmatrix}\)，求 \(\mathrm{e}^{A}\)。`,
  a: String.raw`\(\mathrm{e}^{A}=\mathrm{e}\begin{pmatrix}1&1\\0&1\end{pmatrix}\)。`,
  sol: String.raw`第一步：令 \(N=A-I=\begin{pmatrix}0&1\\0&0\end{pmatrix}\)，则 \(N^{2}=0\)。第二步：\(A=I+N\)，且 \(I\) 与 \(N\) 可交换，故 \(\mathrm{e}^{A}=\mathrm{e}^{I+N}=\mathrm{e}^{I}\mathrm{e}^{N}\)。第三步：\(\mathrm{e}^{N}=I+N\)。第四步：故 \(\mathrm{e}^{A}=\mathrm{e}(I+N)=\mathrm{e}\begin{pmatrix}1&1\\0&1\end{pmatrix}\)。` },

{ id:'LA06-18', ch:6, type:'计算', diff:5, tags:'最小多项式 Jordan 标准形 秩',
  q: String.raw`设 \(4\) 阶矩阵 \(A\) 的特征多项式为 \((\lambda-2)^{4}\)，最小多项式为 \((\lambda-2)^{2}\)，且 \(\mathrm{r}(A-2I)=2\)。求 \(A\) 的 Jordan 标准形。`,
  a: String.raw`\(J=J_{2}(2)\oplus J_{2}(2)\)。`,
  sol: String.raw`第一步：最小多项式次数为 \(2\)，说明最大 Jordan 块为 \(2\) 阶。第二步：特征值只有 \(2\)，总阶数为 \(4\)，故块大小只能是 \(2+2\) 或 \(2+1+1\)。第三步：\(\mathrm{r}(A-2I)\) 等于各 Jordan 块 \(J_{k}(2)\) 的秩 \((k-1)\) 之和，也等于大小至少为 \(2\) 的块数。第四步：秩为 \(2\)，排除 \(2+1+1\)，故块大小为 \(2+2\)。` },

{ id:'LA06-19', ch:6, type:'证明', diff:5, tags:'可对角化 充要条件 代数重数 几何重数',
  q: String.raw`证明 \(n\) 阶矩阵 \(A\) 可对角化的充要条件是：对 \(A\) 的每个特征值 \(\lambda\)，其几何重数等于代数重数。`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：若 \(A\) 可对角化，则 \(A\sim D\)，\(\lambda\) 在对角矩阵 \(D\) 中出现的次数就是代数重数，也等于特征子空间维数，故几何重数等于代数重数。第二步：反之，设每个特征值的几何重数等于代数重数。第三步：不同特征值的特征向量线性无关，故全部特征向量总数等于各几何重数之和。第四步：该和等于各代数重数之和，即 \(n\)。第五步：于是有 \(n\) 个线性无关的特征向量，构成全空间的一组基，\(A\) 可对角化。` },

{ id:'LA06-20', ch:6, type:'证明', diff:5, tags:'矩阵幂 可对角化 旋转矩阵',
  q: String.raw`设 \(A\) 为 \(3\) 阶实矩阵，满足 \(A^{3}=I\) 且 \(\mathrm{tr}(A)=0\)。求 \(A\) 在复数域上的全部特征值，并判断 \(A\) 在复数域上是否一定可对角化；再说明在实数域上是否一定可对角化。`,
  a: String.raw`特征值为 \(1,\omega,\omega^{2}\)，其中 \(\omega=\cos\dfrac{2\pi}{3}+\mathrm{i}\sin\dfrac{2\pi}{3}\)；在复数域上一定可对角化，在实数域上不一定。`,
  sol: String.raw`第一步：特征值满足 \(\lambda^{3}=1\)，故只能是 \(1,\omega,\omega^{2}\)。第二步：\(A\) 为实矩阵，非实特征值成共轭对；又 \(\mathrm{tr}(A)=0\)，而 \(1+\omega+\omega^{2}=0\)，故三个特征值各取一次。第三步：最小多项式整除 \(\lambda^{3}-1\)，它在复数域上无重根，故 \(A\) 在复数域上可对角化。第四步：取实旋转矩阵 \(R=\begin{pmatrix}\cos\frac{2\pi}{3}&-\sin\frac{2\pi}{3}&0\\\sin\frac{2\pi}{3}&\cos\frac{2\pi}{3}&0\\0&0&1\end{pmatrix}\)，则 \(R^{3}=I\)、\(\mathrm{tr}(R)=0\)，但它有两个非实特征值，故在实数域上不可对角化。` }
);
