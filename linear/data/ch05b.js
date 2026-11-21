/* 第 5 章 特征值与特征向量 · 补充 80 题（LA05-21 … LA05-100） */
window.LBANK = window.LBANK || [];
window.LBANK.push(
{ id:'LA05-21', ch:5, type:'计算', diff:5, tags:'循环矩阵 特征多项式 矩阵幂 迹',
  q: String.raw`设 \(C=\begin{pmatrix}0&1&0&0\\0&0&1&0\\0&0&0&1\\1&0&0&0\end{pmatrix}\)。(1) 求 \(C\) 的特征多项式与全部特征值；(2) 求 \(\mathrm{tr}(C^{100})\)。`,
  a: String.raw`\(f(\lambda)=\lambda^{4}-1\)；特征值为 \(1,-1,\mathrm{i},-\mathrm{i}\)；\(\mathrm{tr}(C^{100})=4\)。`,
  sol: String.raw`第一步：\(C\) 是循环矩阵，按第一行展开 \(|\lambda I-C|\) 得
\[
|\lambda I-C|=\lambda^{4}-1.
\]
第二步：解 \(\lambda^{4}=1\)，四个根为 \(1,-1,\mathrm{i},-\mathrm{i}\)。第三步：由 \(C^{4}=I\) 得 \(C^{100}=(C^{4})^{25}=I\)，故 \(\mathrm{tr}(C^{100})=4\)。第四步：用特征值的 \(100\) 次幂之和复核：\(1^{100}+(-1)^{100}+\mathrm{i}^{100}+(-\mathrm{i})^{100}=4\)。` },

{ id:'LA05-22', ch:5, type:'计算', diff:5, tags:'三对角矩阵 特征值 递推 行列式',
  q: String.raw`设 \(A\) 为 \(5\) 阶三对角矩阵，主对角线元素全为 \(2\)，次对角线元素全为 \(-1\)，其余元素为 \(0\)。求 \(A\) 的全部特征值与 \(|A|\)。`,
  a: String.raw`\(\lambda_k=2-2\cos\dfrac{k\pi}{6}\ (k=1,\dots,5)\)，即 \(2-\sqrt{3},\,1,\,2,\,3,\,2+\sqrt{3}\)；\(|A|=6\)。`,
  sol: String.raw`第一步：记 \(D_n(\lambda)=\det(\lambda I-A_n)\)，按第一行展开得递推
\[
D_n=(\lambda-2)D_{n-1}-D_{n-2},\qquad D_1=\lambda-2,\ D_2=(\lambda-2)^{2}-1.
\]
第二步：令 \(x=\lambda-2\)，则 \(D_n\) 满足 \(D_n=xD_{n-1}-D_{n-2}\)，其解为 \(D_n=\dfrac{\sin (n+1)\theta}{\sin\theta}\)，其中 \(x=2\cos\theta\)。第三步：由 \(D_5=0\) 得 \(\sin 6\theta=0\)，即 \(\theta=\dfrac{k\pi}{6}\)，从而 \(\lambda_k=2+2\cos\dfrac{k\pi}{6}=2-2\cos\dfrac{k\pi}{6}\)。第四步：代入 \(k=1,\dots,5\) 得 \(2-\sqrt{3},1,2,3,2+\sqrt{3}\)。第五步：\(|A|=D_5(0)=\prod_{k=1}^{5}\lambda_k=6\)，也可由递推 \(D_n(0)=n+1\) 得 \(D_5(0)=6\)。` },

{ id:'LA05-23', ch:5, type:'证明', diff:5, tags:'三对角矩阵 特征向量 和差化积',
  q: String.raw`设 \(A\) 为 \(n\) 阶三对角矩阵，主对角线全为 \(2\)，次对角线全为 \(-1\)。证明：对 \(k=1,2,\dots,n\)，向量
\[
x^{(k)}=\left(\sin\frac{k\pi}{n+1},\ \sin\frac{2k\pi}{n+1},\ \dots,\ \sin\frac{nk\pi}{n+1}\right)^{\mathrm{T}}
\]
是 \(A\) 的特征向量，并求对应的特征值。`,
  a: String.raw`\(Ax^{(k)}=\left(2-2\cos\dfrac{k\pi}{n+1}\right)x^{(k)}\)。`,
  sol: String.raw`第一步：记 \(\theta=\dfrac{k\pi}{n+1}\)，\(x_j=\sin(j\theta)\)，并约定 \(x_0=x_{n+1}=0\)。第二步：由 \(A\) 的结构，\((Ax^{(k)})_j=-x_{j-1}+2x_j-x_{j+1}\)（边界处缺少的项恰为 \(0\)）。第三步：由和差化积
\[
\sin (j-1)\theta+\sin (j+1)\theta=2\sin (j\theta)\cos\theta,
\]
得 \(-x_{j-1}+2x_j-x_{j+1}=2x_j-2x_j\cos\theta=(2-2\cos\theta)x_j\)。第四步：该式对 \(j=1,\dots,n\) 都成立，故 \(Ax^{(k)}=(2-2\cos\theta)x^{(k)}\)。第五步：\(x_1=\sin\theta>0\)，故 \(x^{(k)}\neq0\)，它确为特征向量。` },

{ id:'LA05-24', ch:5, type:'计算', diff:5, tags:'秩一扰动 矩阵行列式引理 特征多项式',
  q: String.raw`设 \(A=\begin{pmatrix}1&1&1\\1&1&1\\1&1&2\end{pmatrix}\)。求 \(A\) 的特征多项式与全部特征值。`,
  a: String.raw`\(f(\lambda)=\lambda\left(\lambda^{2}-4\lambda+2\right)\)；特征值为 \(0,\ 2+\sqrt{2},\ 2-\sqrt{2}\)。`,
  sol: String.raw`第一步：把 \(A\) 写成 \(A=D+J\)，其中 \(D=\mathrm{diag}(0,0,1)\)，\(J=\mathbf{1}\mathbf{1}^{\mathrm{T}}\) 为全 \(1\) 矩阵。第二步：用行列式引理
\[
\det(\lambda I-A)=\det(\lambda I-D)\left(1-\mathbf{1}^{\mathrm{T}}(\lambda I-D)^{-1}\mathbf{1}\right).
\]
第三步：\(\det(\lambda I-D)=\lambda^{2}(\lambda-1)\)，且
\[
\mathbf{1}^{\mathrm{T}}(\lambda I-D)^{-1}\mathbf{1}=\frac{1}{\lambda}+\frac{1}{\lambda}+\frac{1}{\lambda-1}.
\]
第四步：代入整理得
\[
f(\lambda)=\lambda^{2}(\lambda-1)-2\lambda(\lambda-1)-\lambda^{2}=\lambda^{3}-4\lambda^{2}+2\lambda.
\]
第五步：解 \(\lambda^{2}-4\lambda+2=0\) 得 \(\lambda=2\pm\sqrt{2}\)，连同 \(\lambda=0\) 即为全部特征值；用 \(\mathrm{tr}(A)=4\) 复核。` },

{ id:'LA05-25', ch:5, type:'证明', diff:5, tags:'秩一扰动 矩阵行列式引理 伴随矩阵',
  q: String.raw`设 \(A\) 为 \(n\) 阶可逆矩阵，\(u,v\in\mathbb{R}^{n}\)。证明
\[
\det\left(A+uv^{\mathrm{T}}\right)=\det(A)\left(1+v^{\mathrm{T}}A^{-1}u\right).
\]
`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：提取因子 \(A+uv^{\mathrm{T}}=A\left(I+A^{-1}uv^{\mathrm{T}}\right)\)，故 \(\det(A+uv^{\mathrm{T}})=\det(A)\det\left(I+A^{-1}uv^{\mathrm{T}}\right)\)。第二步：记 \(w=A^{-1}u\)，只需证 \(\det(I+wv^{\mathrm{T}})=1+v^{\mathrm{T}}w\)。第三步：当 \(v^{\mathrm{T}}w\neq-1\) 时，直接验证
\[
(I+wv^{\mathrm{T}})\left(I-\frac{wv^{\mathrm{T}}}{1+v^{\mathrm{T}}w}\right)=I,
\]
两边取行列式即得。第四步：当 \(v^{\mathrm{T}}w=-1\) 时，\(I+wv^{\mathrm{T}}\) 有特征值 \(0\)（因 \((I+wv^{\mathrm{T}})w=w(1+v^{\mathrm{T}}w)=0\)），故行列式为 \(0\)，而右端 \(1+v^{\mathrm{T}}w=0\)，等式仍成立。第五步：代回得 \(\det(A+uv^{\mathrm{T}})=\det(A)(1+v^{\mathrm{T}}A^{-1}u)\)。` },

{ id:'LA05-26', ch:5, type:'计算', diff:4, tags:'幂等矩阵 迹 秩 特征值',
  q: String.raw`设 \(A\) 为 \(5\) 阶矩阵，满足 \(A^{2}=A\)，且 \(\mathrm{tr}(A)=3\)。求 \(\mathrm{r}(A)\) 与 \(\det(A+2I)\)。`,
  a: String.raw`\(\mathrm{r}(A)=3\)；\(\det(A+2I)=108\)。`,
  sol: String.raw`第一步：若 \(Ax=\lambda x\)，则 \(\lambda^{2}x=A^{2}x=Ax=\lambda x\)，故 \(\lambda\in\{0,1\}\)。第二步：\(A\) 满足无重根多项式 \(\lambda(\lambda-1)\)，故可对角化，且特征值 \(1\) 的个数等于 \(\mathrm{r}(A)\)。第三步：特征值之和等于迹，故 \(1\) 的个数为 \(3\)，即 \(\mathrm{r}(A)=3\)，特征值为 \(1,1,1,0,0\)。第四步：\(A+2I\) 的特征值为 \(3,3,3,2,2\)，故 \(\det(A+2I)=3^{3}\cdot2^{2}=108\)。` },

{ id:'LA05-27', ch:5, type:'证明', diff:5, tags:'幂等矩阵 可对角化 最小多项式 迹与秩',
  q: String.raw`设 \(A\) 为 \(n\) 阶矩阵，且 \(A^{2}=A\)。证明：(1) \(A\) 的特征值只能是 \(0\) 或 \(1\)；(2) \(A\) 可对角化；(3) \(\mathrm{tr}(A)=\mathrm{r}(A)\)。`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：设 \(Ax=\lambda x\)，\(x\neq0\)，则 \(\lambda^{2}x=A^{2}x=Ax=\lambda x\)，故 \(\lambda(\lambda-1)=0\)。(2) 第二步：\(A\) 满足多项式 \(m(\lambda)=\lambda(\lambda-1)\)，其因子互异，最小多项式无重根，故 \(A\) 可对角化。第三步：于是存在可逆 \(P\) 使 \(P^{-1}AP=\mathrm{diag}(1,\dots,1,0,\dots,0)\)，其中 \(1\) 的个数为 \(r=\mathrm{r}(A)\)。(3) 第四步：相似矩阵迹相同，故 \(\mathrm{tr}(A)=r\)。第五步：也可由 \(\mathrm{tr}(A)=\sum\lambda_i\) 直接得到。` },

{ id:'LA05-28', ch:5, type:'计算', diff:4, tags:'对合矩阵 迹 行列式 特征值',
  q: String.raw`设 \(A\) 为 \(3\) 阶矩阵，\(A^{2}=I\)，且 \(\mathrm{tr}(A)=1\)。求 \(\det(A)\) 与 \(\det(A+I)\)。`,
  a: String.raw`\(\det(A)=-1\)；\(\det(A+I)=0\)。`,
  sol: String.raw`第一步：设 \(Ax=\lambda x\)，则 \(\lambda^{2}=1\)，故特征值只能为 \(\pm1\)。第二步：三个特征值之和为 \(\mathrm{tr}(A)=1\)，只能是 \(1,1,-1\)。第三步：\(\det(A)=1\cdot1\cdot(-1)=-1\)。第四步：\(A+I\) 的特征值为 \(2,2,0\)，故 \(\det(A+I)=0\)。` },

{ id:'LA05-29', ch:5, type:'计算', diff:5, tags:'友矩阵 特征多项式 最小多项式 可对角化',
  q: String.raw`设 \(A=\begin{pmatrix}0&1&0&0\\0&0&1&0\\0&0&0&1\\-2&7&-9&5\end{pmatrix}\)。(1) 求 \(A\) 的特征多项式；(2) 判断 \(A\) 是否可对角化，并求其最小多项式。`,
  a: String.raw`\(f(\lambda)=(\lambda-1)^{3}(\lambda-2)\)；\(A\) 不可对角化，最小多项式 \(m(\lambda)=(\lambda-1)^{3}(\lambda-2)\)。`,
  sol: String.raw`第一步：\(A\) 是友矩阵，其特征多项式为
\[
f(\lambda)=\lambda^{4}-5\lambda^{3}+9\lambda^{2}-7\lambda+2=(\lambda-1)^{3}(\lambda-2).
\]
第二步：\(\lambda=1\) 的代数重数为 \(3\)。第三步：直接计算得
\[
(A-I)(A-2I)\neq0,\qquad (A-I)^{2}(A-2I)\neq0,
\]
而由 Cayley-Hamilton 定理 \((A-I)^{3}(A-2I)=0\)。第四步：故最小多项式中 \((\lambda-1)\) 的幂次为 \(3\)，即 \(m(\lambda)=f(\lambda)\)。第五步：最小多项式有重根，\(A\) 不可对角化。` },

{ id:'LA05-30', ch:5, type:'计算', diff:4, tags:'特征值 迹 行列式 矩阵多项式',
  q: String.raw`设 \(3\) 阶矩阵 \(A\) 的特征值为 \(1,2,3\)。求 \(\mathrm{tr}(A^{2})\)、\(\mathrm{tr}(A^{-1})\) 与 \(\det(A^{2}-5A+5I)\)。`,
  a: String.raw`\(\mathrm{tr}(A^{2})=14\)；\(\mathrm{tr}(A^{-1})=\dfrac{11}{6}\)；\(\det(A^{2}-5A+5I)=1\)。`,
  sol: String.raw`第一步：\(A^{2}\) 的特征值为 \(1,4,9\)，故 \(\mathrm{tr}(A^{2})=14\)。第二步：\(A^{-1}\) 的特征值为 \(1,\dfrac12,\dfrac13\)，故 \(\mathrm{tr}(A^{-1})=\dfrac{11}{6}\)。第三步：令 \(g(x)=x^{2}-5x+5\)，则 \(g(A)\) 的特征值为 \(g(1),g(2),g(3)\)，即 \(1,-1,-1\)。第四步：行列式等于特征值之积，故 \(\det g(A)=1\cdot(-1)\cdot(-1)=1\)。` },

{ id:'LA05-31', ch:5, type:'计算', diff:4, tags:'Gershgorin 圆盘 谱半径 可逆性',
  q: String.raw`设 \(A=\begin{pmatrix}5&1&0\\1&4&2\\0&2&3\end{pmatrix}\)。用 Gershgorin 圆盘定理给出 \(A\) 的谱半径的一个上界，并证明 \(A\) 可逆。`,
  a: String.raw`\(\rho(A)\le 6\)；\(A\) 可逆。`,
  sol: String.raw`第一步：按行写出三个 Gershgorin 圆盘：\(D(5,1)\)、\(D(4,2)\)、\(D(3,2)\)。第二步：它们在实轴上的投影分别为 \([4,6]\)、\([2,6]\)、\([1,5]\)，任一特征值都落在这些圆盘之并内。第三步：并集整体包含于圆 \(|z|\le 6\)，故 \(\rho(A)\le 6\)。第四步：原点 \(0\) 到三个圆心的距离分别为 \(5,4,3\)，都大于相应半径 \(1,2,2\)，故 \(0\) 不在任何圆盘内，\(0\) 不是特征值。第五步：于是 \(|A|\neq0\)，\(A\) 可逆（实际 \(|A|=37\)）。` },

{ id:'LA05-32', ch:5, type:'证明', diff:5, tags:'严格对角占优 Gershgorin 圆盘 可逆性',
  q: String.raw`设 \(A=(a_{ij})\) 为 \(n\) 阶复矩阵，若对每个 \(i=1,\dots,n\) 都有
\[
|a_{ii}|>\sum_{j\neq i}|a_{ij}|,
\]
证明 \(A\) 可逆。`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：反设 \(A\) 奇异，则 \(0\) 是 \(A\) 的特征值。第二步：由 Gershgorin 圆盘定理，\(0\) 必落在某个圆盘 \(D(a_{ii},R_i)\) 内，其中 \(R_i=\sum_{j\neq i}|a_{ij}|\)，即 \(|a_{ii}|\le R_i\)。第三步：这与题设的严格不等式 \(|a_{ii}|>R_i\) 矛盾。第四步：故 \(A\) 非奇异，即可逆。` },

{ id:'LA05-33', ch:5, type:'计算', diff:5, tags:'Perron-Frobenius 正矩阵 谱半径 特征向量',
  q: String.raw`设 \(A=\begin{pmatrix}0&1&0&0\\1&0&1&0\\0&1&0&1\\0&0&1&0\end{pmatrix}\)。求 \(A\) 的 Perron 根（最大正特征值）及对应的正特征向量。`,
  a: String.raw`\(\rho(A)=\dfrac{1+\sqrt{5}}{2}\)；正特征向量为 \(\left(1,\varphi,\varphi,1\right)^{\mathrm{T}}\)，其中 \(\varphi=\dfrac{1+\sqrt{5}}{2}\)。`,
  sol: String.raw`第一步：取 \(x=(1,t,t,1)^{\mathrm{T}}\)，计算 \(Ax=(t,1+t,t+1,t)^{\mathrm{T}}\)。第二步：令 \(Ax=tx\)，由第一分量得 \(t^{2}=t+1\)，即 \(t=\varphi\)（取正根）。第三步：此时 \(1+t=\varphi^{2}=\varphi\cdot\varphi\)，故 \(Ax=\varphi x\)，\(x\) 为正特征向量。第四步：\(A\) 的特征多项式为 \((\lambda^{2}-\lambda-1)(\lambda^{2}+\lambda-1)\)，最大根为 \(\varphi\)。第五步：由 Perron-Frobenius 定理，非负不可约矩阵的谱半径是正特征值且对应正特征向量，故 \(\rho(A)=\varphi\)。` },

{ id:'LA05-34', ch:5, type:'证明', diff:5, tags:'Perron-Frobenius 行和 谱半径 非负矩阵',
  q: String.raw`设 \(A\) 为 \(n\) 阶非负矩阵，且 \(A\mathbf{1}=r\mathbf{1}\)，其中 \(\mathbf{1}=(1,\dots,1)^{\mathrm{T}}\)，\(r>0\)。证明 \(\rho(A)=r\)。`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：\(A\mathbf{1}=r\mathbf{1}\) 说明 \(r\) 是 \(A\) 的特征值，\(\mathbf{1}\) 是对应特征向量，故 \(\rho(A)\ge r\)。第二步：对任意特征值 \(\lambda\) 与特征向量 \(x\neq0\)，取分量 \(x_k\) 满足 \(|x_k|=\|x\|_{\infty}\)。第三步：由 \((\lambda x)_k=\sum_j a_{kj}x_j\) 得
\[
|\lambda|\,\|x\|_{\infty}\le\sum_j a_{kj}|x_j|\le\|x\|_{\infty}\sum_j a_{kj}=r\|x\|_{\infty}.
\]
第四步：故 \(|\lambda|\le r\)，对一切特征值成立，即 \(\rho(A)\le r\)。第五步：两边夹得 \(\rho(A)=r\)。` },

{ id:'LA05-35', ch:5, type:'计算', diff:5, tags:'随机矩阵 平稳分布 矩阵幂 极限',
  q: String.raw`设 \(A=\begin{pmatrix}\frac{1}{2}&\frac{1}{2}\\\frac{1}{4}&\frac{3}{4}\end{pmatrix}\)。求 \(\lim_{n\to\infty}A^{n}\)。`,
  a: String.raw`\(\begin{pmatrix}\frac{1}{3}&\frac{2}{3}\\\frac{1}{3}&\frac{2}{3}\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(A\) 的特征多项式为 \((\lambda-1)\left(\lambda-\frac14\right)\)，特征值为 \(1,\frac14\)。第二步：\(|\frac14|<1\)，故 \(A^{n}\) 的极限为到 \(\lambda=1\) 特征子空间的投影。第三步：求平稳分布，即解 \(\pi A=\pi\)，\(\pi_1+\pi_2=1\)。第四步：由第一列得 \(\frac12\pi_1+\frac14\pi_2=\pi_1\)，即 \(\pi_2=2\pi_1\)，故 \(\pi=\left(\frac13,\frac23\right)\)。第五步：极限矩阵的每一行都等于 \(\pi\)，即 \(\begin{pmatrix}\frac13&\frac23\\\frac13&\frac23\end{pmatrix}\)（用 \(A^{10}\) 数值复核）。` },

{ id:'LA05-36', ch:5, type:'计算', diff:5, tags:'谱半径 Neumann 级数 逆矩阵',
  q: String.raw`设 \(A=\begin{pmatrix}0&\frac{1}{2}\\\frac{1}{3}&0\end{pmatrix}\)。证明 \(\rho(A)<1\)，并求 \(\sum_{k=0}^{\infty}A^{k}\)。`,
  a: String.raw`\(\rho(A)=\dfrac{1}{\sqrt{6}}<1\)；\(\sum_{k=0}^{\infty}A^{k}=(I-A)^{-1}=\begin{pmatrix}\frac{6}{5}&\frac{3}{5}\\\frac{2}{5}&\frac{6}{5}\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(|\lambda I-A|=\lambda^{2}-\frac16\)，特征值为 \(\pm\frac{1}{\sqrt6}\)，故 \(\rho(A)=\frac{1}{\sqrt6}<1\)。第二步：谱半径小于 \(1\) 时 Neumann 级数 \(\sum_{k\ge0}A^{k}\) 收敛，且和为 \((I-A)^{-1}\)。第三步：计算
\[
(I-A)^{-1}=\frac{1}{1-\frac16}\begin{pmatrix}1&\frac12\\\frac13&1\end{pmatrix}
=\frac65\begin{pmatrix}1&\frac12\\\frac13&1\end{pmatrix}.
\]
第四步：得 \(\sum_{k\ge0}A^{k}=\begin{pmatrix}\frac65&\frac35\\\frac25&\frac65\end{pmatrix}\)。` },

{ id:'LA05-37', ch:5, type:'证明', diff:5, tags:'谱半径 矩阵范数 特征值估计',
  q: String.raw`设 \(\|\cdot\|\) 为矩阵的算子范数。证明对任意 \(n\) 阶矩阵 \(A\) 有 \(\rho(A)\le\|A\|\)。`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：设 \(\lambda\) 是 \(A\) 的任一特征值，\(x\neq0\) 为对应特征向量。第二步：由 \(Ax=\lambda x\) 得
\[
|\lambda|\,\|x\|=\|\lambda x\|=\|Ax\|\le\|A\|\,\|x\|.
\]
第三步：因 \(x\neq0\)，\(\|x\|>0\)，两边约去得 \(|\lambda|\le\|A\|\)。第四步：对全部特征值取最大，得 \(\rho(A)=\max|\lambda|\le\|A\|\)。` },

{ id:'LA05-38', ch:5, type:'计算', diff:5, tags:'三对角矩阵 特征值 特征向量 实对称',
  q: String.raw`设 \(A=\begin{pmatrix}2&1&0\\1&2&1\\0&1&2\end{pmatrix}\)。求 \(A\) 的全部特征值与对应的特征向量。`,
  a: String.raw`特征值为 \(2+\sqrt{2},\,2,\,2-\sqrt{2}\)；对应特征向量可取 \((1,\sqrt{2},1)^{\mathrm{T}},\ (1,0,-1)^{\mathrm{T}},\ (1,-\sqrt{2},1)^{\mathrm{T}}\)。`,
  sol: String.raw`第一步：展开特征多项式得
\[
|\lambda I-A|=(\lambda-2)\left(\lambda^{2}-4\lambda+2\right),
\]
故特征值为 \(2+\sqrt2,2,2-\sqrt2\)。第二步：对 \(\lambda=2+\sqrt2\)，方程 \((A-\lambda I)x=0\) 的第一行为 \(-\sqrt2x_1+x_2=0\)，第二行为 \(x_1-\sqrt2x_2+x_3=0\)，解得 \(x=(1,\sqrt2,1)^{\mathrm{T}}\)。第三步：对 \(\lambda=2\)，方程组化为 \(x_2=0,\ x_1+x_3=0\)，得 \(x=(1,0,-1)^{\mathrm{T}}\)。第四步：对 \(\lambda=2-\sqrt2\)，同理得 \(x=(1,-\sqrt2,1)^{\mathrm{T}}\)。第五步：三个特征向量两两正交，与 \(A\) 实对称相符。` },

{ id:'LA05-39', ch:5, type:'计算', diff:4, tags:'Rayleigh 商 实对称矩阵 特征值',
  q: String.raw`设 \(A=\begin{pmatrix}3&1\\1&3\end{pmatrix}\)。求 Rayleigh 商
\[
R(x)=\frac{x^{\mathrm{T}}Ax}{x^{\mathrm{T}}x},\qquad x\neq0
\]
的最大值与最小值。`,
  a: String.raw`最大值为 \(4\)，最小值为 \(2\)。`,
  sol: String.raw`第一步：\(A\) 为实对称矩阵，特征值为 \(4,2\)，对应单位特征向量 \(u_1=\frac{1}{\sqrt2}(1,1)^{\mathrm{T}}\)、\(u_2=\frac{1}{\sqrt2}(1,-1)^{\mathrm{T}}\)。第二步：它们构成正交基，写 \(x=c_1u_1+c_2u_2\)。第三步：则
\[
R(x)=\frac{4c_1^{2}+2c_2^{2}}{c_1^{2}+c_2^{2}}\in[2,4].
\]
第四步：取 \(x=u_1\) 得 \(R=4\)，取 \(x=u_2\) 得 \(R=2\)，故最大值 \(4\)、最小值 \(2\)。` },

{ id:'LA05-40', ch:5, type:'证明', diff:5, tags:'Rayleigh 商 实对称矩阵 特征值估计',
  q: String.raw`设 \(A\) 为 \(n\) 阶实对称矩阵，特征值按大小排列为 \(\lambda_1\le\lambda_2\le\cdots\le\lambda_n\)。证明对任意 \(x\neq0\)，
\[
\lambda_1\le\frac{x^{\mathrm{T}}Ax}{x^{\mathrm{T}}x}\le\lambda_n.
\]
`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：由实对称矩阵正交对角化，存在正交矩阵 \(Q\) 使 \(Q^{\mathrm{T}}AQ=\mathrm{diag}(\lambda_1,\dots,\lambda_n)\)。第二步：令 \(y=Q^{\mathrm{T}}x\)，则 \(y\neq0\)，且
\[
\frac{x^{\mathrm{T}}Ax}{x^{\mathrm{T}}x}=\frac{\sum_i\lambda_iy_i^{2}}{\sum_iy_i^{2}}.
\]
第三步：由 \(\lambda_1\le\lambda_i\le\lambda_n\) 得
\[
\lambda_1\sum_iy_i^{2}\le\sum_i\lambda_iy_i^{2}\le\lambda_n\sum_iy_i^{2}.
\]
第四步：两边同除 \(\sum_iy_i^{2}>0\) 即得结论；取 \(x\) 为对应特征向量时等号成立。` },

{ id:'LA05-41', ch:5, type:'计算', diff:5, tags:'AB BA 特征多项式 非零特征值',
  q: String.raw`设 \(A=\begin{pmatrix}1&2&0\\0&1&1\end{pmatrix}\)，\(B=\begin{pmatrix}1&0\\0&1\\1&1\end{pmatrix}\)。求 \(AB\) 与 \(BA\) 的特征多项式，并验证二者的关系。`,
  a: String.raw`\(AB=\begin{pmatrix}1&2\\1&2\end{pmatrix}\)，特征多项式 \(\lambda(\lambda-3)\)；\(BA=\begin{pmatrix}1&2&0\\0&1&1\\1&3&1\end{pmatrix}\)，特征多项式 \(\lambda^{2}(\lambda-3)\)；且 \(\lambda\det(\lambda I_2-AB)=\det(\lambda I_3-BA)\)。`,
  sol: String.raw`第一步：计算
\[
AB=\begin{pmatrix}1&2\\1&2\end{pmatrix},\qquad
BA=\begin{pmatrix}1&2&0\\0&1&1\\1&3&1\end{pmatrix}.
\]
第二步：\(|\lambda I_2-AB|=\lambda(\lambda-3)\)。第三步：展开 \(|\lambda I_3-BA|\) 得 \(\lambda^{2}(\lambda-3)\)。第四步：两者相差因子 \(\lambda^{3-2}=\lambda\)，即
\[
\det(\lambda I_3-BA)=\lambda\det(\lambda I_2-AB),
\]
非零特征值同为 \(3\)，与 \(AB\) 和 \(BA\) 的非零特征值相同这一结论一致。` },

{ id:'LA05-42', ch:5, type:'证明', diff:5, tags:'AB BA 特征多项式 分块矩阵 行列式',
  q: String.raw`设 \(A\) 为 \(m\times n\) 矩阵，\(B\) 为 \(n\times m\) 矩阵，且 \(m\ge n\)。证明
\[
\det(\lambda I_m-AB)=\lambda^{m-n}\det(\lambda I_n-BA).
\]
`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：构造分块矩阵
\[
M=\begin{pmatrix}\lambda I_m&A\\B&I_n\end{pmatrix}.
\]
第二步：对 \(M\) 按第一块作 Schur 消去，得 \(\det M=\det(I_n)\det(\lambda I_m-AB)=\det(\lambda I_m-AB)\)。第三步：当 \(\lambda\neq0\) 时，再按第二块作 Schur 消去，得
\[
\det M=\det(\lambda I_m)\det\left(I_n-\lambda^{-1}BA\right)=\lambda^{m-n}\det(\lambda I_n-BA).
\]
第四步：比较两式得 \(\det(\lambda I_m-AB)=\lambda^{m-n}\det(\lambda I_n-BA)\)（\(\lambda\neq0\)）。第五步：两边都是 \(\lambda\) 的多项式，故恒等式对 \(\lambda=0\) 也成立。` },

{ id:'LA05-43', ch:5, type:'计算', diff:5, tags:'矩阵平方 特征值 迹与行列式 分类讨论',
  q: String.raw`设 \(A\) 为 \(3\) 阶实矩阵，\(A^{2}\) 的特征值为 \(1,1,4\)，且 \(\mathrm{tr}(A)=0\)，\(|A|>0\)。求 \(A\) 的全部特征值。`,
  a: String.raw`\(-1,\,-1,\,2\)。`,
  sol: String.raw`第一步：若 \(\lambda\) 是 \(A\) 的特征值，则 \(\lambda^{2}\) 是 \(A^{2}\) 的特征值，故 \(\lambda\in\{\pm1,\pm2\}\)。第二步：三个特征值之和为 \(\mathrm{tr}(A)=0\)，且其平方构成多重集 \(\{1,1,4\}\)。第三步：枚举可知只有两组满足：\(1,1,-2\) 与 \(-1,-1,2\)。第四步：前者 \(|A|=-2<0\)，后者 \(|A|=2>0\)。第五步：故 \(A\) 的特征值为 \(-1,-1,2\)。` },

{ id:'LA05-44', ch:5, type:'计算', diff:5, tags:'可对角化 几何重数 代数重数 参数讨论',
  q: String.raw`设 \(A=\begin{pmatrix}1&0&0\\a&2&0\\b&c&2\end{pmatrix}\)。问 \(a,b,c\) 满足什么条件时 \(A\) 可对角化？`,
  a: String.raw`当且仅当 \(c=0\)（\(a,b\) 任意）。`,
  sol: String.raw`第一步：\(A\) 为上三角矩阵，特征值为 \(1,2,2\)。第二步：\(\lambda=1\) 为单根，对应一个特征向量；\(\lambda=2\) 的代数重数为 \(2\)，可对角化要求其几何重数为 \(2\)，即 \(\mathrm{r}(A-2I)=1\)。第三步：计算
\[
A-2I=\begin{pmatrix}-1&0&0\\a&0&0\\b&c&0\end{pmatrix}.
\]
第四步：若 \(c\neq0\)，第二、三行线性无关，秩为 \(2\)，几何重数为 \(1\)，不可对角化。第五步：若 \(c=0\)，三行都是第一行的倍数，秩为 \(1\)，几何重数为 \(2\)，此时 \(A\) 可对角化。` },

{ id:'LA05-45', ch:5, type:'计算', diff:5, tags:'最小多项式 可对角化 重根',
  q: String.raw`设 \(A=\begin{pmatrix}3&1&0\\0&3&0\\0&0&1\end{pmatrix}\)，求 \(A\) 的最小多项式，并判断 \(A\) 是否可对角化。`,
  a: String.raw`\(m(\lambda)=(\lambda-3)^{2}(\lambda-1)\)，\(A\) 不可对角化。`,
  sol: String.raw`第一步：特征多项式为 \(f(\lambda)=(\lambda-3)^{2}(\lambda-1)\)。第二步：最小多项式只能去掉重因子，候选为 \((\lambda-3)(\lambda-1)\) 或 \((\lambda-3)^{2}(\lambda-1)\)。第三步：计算
\[
(A-3I)(A-I)=\begin{pmatrix}0&1&0\\0&0&0\\0&0&-2\end{pmatrix}\begin{pmatrix}2&1&0\\0&2&0\\0&0&0\end{pmatrix}=\begin{pmatrix}0&2&0\\0&0&0\\0&0&0\end{pmatrix}\neq 0,
\]
所以 \((\lambda-3)(\lambda-1)\) 不是零化多项式。第四步：再算
\[
(A-3I)^{2}(A-I)=\begin{pmatrix}0&2&0\\0&0&0\\0&0&0\end{pmatrix}\begin{pmatrix}2&1&0\\0&2&0\\0&0&0\end{pmatrix}=0,
\]
故最小多项式为 \((\lambda-3)^{2}(\lambda-1)\)。第五步：最小多项式有重根，\(A\) 不可对角化；也可由 \(3-\mathrm{r}(A-3I)=1<2\) 直接判断。` },

{ id:'LA05-46', ch:5, type:'证明', diff:5, tags:'最小多项式 可对角化 无重根',
  q: String.raw`设 \(A\) 为 \(n\) 阶复矩阵。证明：\(A\) 可对角化当且仅当其最小多项式无重根。`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：若 \(A\) 可对角化，则 \(A\) 相似于 \(\mathrm{diag}(\lambda_1,\dots,\lambda_n)\)，其最小多项式为所有互异特征值对应的一次因子之积，无重根。第二步：反之，设最小多项式 \(m(\lambda)=\prod_{i=1}^{s}(\lambda-\lambda_i)\)，其中 \(\lambda_i\) 互异。第三步：由 \(m(A)=0\)，对任意向量 \(x\) 有 \(\prod_i(A-\lambda_iI)x=0\)。第四步：各子空间 \(V_i=\ker(A-\lambda_iI)\) 的和是直和（不同特征值的特征向量线性无关），且由上式可把 \(x\) 分解为 \(x=\sum x_i\)，\(x_i\in V_i\)。第五步：故全空间等于 \(\bigoplus_iV_i\)，\(A\) 有由特征向量组成的基，可对角化。` },

{ id:'LA05-47', ch:5, type:'计算', diff:5, tags:'Jordan 块 矩阵幂 矩阵指数 幂零',
  q: String.raw`设 \(J=\begin{pmatrix}2&1&0\\0&2&1\\0&0&2\end{pmatrix}\)。求 \(J^{10}\) 与 \(e^{J}\)。`,
  a: String.raw`\(J^{10}=\begin{pmatrix}1024&5120&11520\\0&1024&5120\\0&0&1024\end{pmatrix}\)；\(e^{J}=e^{2}\begin{pmatrix}1&1&\frac{1}{2}\\0&1&1\\0&0&1\end{pmatrix}\)。`,
  sol: String.raw`第一步：写 \(J=2I+N\)，其中 \(N=\begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix}\)，满足 \(N^{3}=0\)。第二步：由二项式定理
\[
J^{10}=\sum_{k=0}^{2}\binom{10}{k}2^{10-k}N^{k}
=2^{10}I+10\cdot2^{9}N+45\cdot2^{8}N^{2}.
\]
第三步：代入 \(N,N^{2}\) 得 \(J^{10}=\begin{pmatrix}1024&5120&11520\\0&1024&5120\\0&0&1024\end{pmatrix}\)。第四步：同理
\[
e^{J}=e^{2}e^{N}=e^{2}\left(I+N+\frac{N^{2}}{2}\right)
=e^{2}\begin{pmatrix}1&1&\frac12\\0&1&1\\0&0&1\end{pmatrix}.
\]
第五步：用 \(J^{10}\) 的对角元 \(2^{10}\) 与 \((e^{J})_{11}=e^{2}\) 复核。` },

{ id:'LA05-48', ch:5, type:'计算', diff:5, tags:'Fibonacci 矩阵 对角化 矩阵幂',
  q: String.raw`设 \(F=\begin{pmatrix}1&1\\1&0\end{pmatrix}\)。求 \(F\) 的特征值与特征向量，并用对角化求 \(F^{n}\)。`,
  a: String.raw`特征值 \(\varphi=\dfrac{1+\sqrt5}{2}\)、\(\psi=\dfrac{1-\sqrt5}{2}\)；\(F^{n}=\begin{pmatrix}F_{n+1}&F_{n}\\F_{n}&F_{n-1}\end{pmatrix}\)，其中 \(F_n=\dfrac{\varphi^{n}-\psi^{n}}{\sqrt5}\)。`,
  sol: String.raw`第一步：\(|\lambda I-F|=\lambda^{2}-\lambda-1\)，特征值为 \(\varphi,\psi\)。第二步：对应特征向量为 \((\varphi,1)^{\mathrm{T}}\)、\((\psi,1)^{\mathrm{T}}\)，故
\[
F=P\begin{pmatrix}\varphi&0\\0&\psi\end{pmatrix}P^{-1},\qquad P=\begin{pmatrix}\varphi&\psi\\1&1\end{pmatrix}.
\]
第三步：计算得 \(F^{n}=\dfrac{1}{\varphi-\psi}\begin{pmatrix}\varphi^{n+1}-\psi^{n+1}&\varphi^{n}-\psi^{n}\\\varphi^{n}-\psi^{n}&\varphi^{n-1}-\psi^{n-1}\end{pmatrix}\)。第四步：由 \(\varphi-\psi=\sqrt5\) 及 \(F^{0}=I,F^{1}=F\) 可验证 \(F_n=\dfrac{\varphi^{n}-\psi^{n}}{\sqrt5}\) 为 Fibonacci 数列。第五步：取 \(n=10\) 得 \(F^{10}=\begin{pmatrix}89&55\\55&34\end{pmatrix}\)，与直接计算一致。` },

{ id:'LA05-49', ch:5, type:'计算', diff:5, tags:'线性递推 特征值 通项公式',
  q: String.raw`设数列 \(\{a_n\}\) 满足 \(a_0=1\)，\(a_1=3\)，且 \(a_{n+2}=a_{n+1}+2a_{n}\)（\(n\ge0\)）。求 \(a_n\) 的通项公式。`,
  a: String.raw`\(a_n=\dfrac{4\cdot2^{n}-(-1)^{n}}{3}\)。`,
  sol: String.raw`第一步：令 \(v_n=\begin{pmatrix}a_{n+1}\\a_n\end{pmatrix}\)，则 \(v_{n+1}=A v_n\)，其中 \(A=\begin{pmatrix}1&2\\1&0\end{pmatrix}\)。第二步：\(|\lambda I-A|=\lambda^{2}-\lambda-2=(\lambda-2)(\lambda+1)\)，特征值为 \(2,-1\)。第三步：故 \(a_n=A_0 2^{n}+B_0(-1)^{n}\)。第四步：代入初值 \(A_0+B_0=1\)，\(2A_0-B_0=3\)，解得 \(A_0=\dfrac43\)，\(B_0=-\dfrac13\)。第五步：\(a_n=\dfrac{4\cdot2^{n}-(-1)^{n}}{3}\)，验证 \(a_2=5,a_3=11\) 与递推一致。` },

{ id:'LA05-50', ch:5, type:'计算', diff:5, tags:'循环矩阵 特征值 行列式 迹',
  q: String.raw`设 \(C\) 为 \(4\) 阶循环矩阵，其第一行为 \((2,1,0,0)\)。求 \(C\) 的全部特征值、\(|C|\) 与 \(\mathrm{tr}(C^{2})\)。`,
  a: String.raw`特征值为 \(3,\ 2+\mathrm{i},\ 1,\ 2-\mathrm{i}\)；\(|C|=15\)；\(\mathrm{tr}(C^{2})=16\)。`,
  sol: String.raw`第一步：循环矩阵的特征值为 \(\lambda_k=a_0+a_1\omega^{k}+a_2\omega^{2k}+a_3\omega^{3k}\)，其中 \(\omega=\mathrm{i}\)，故 \(\lambda_k=2+\mathrm{i}^{k}\)。第二步：\(k=0,1,2,3\) 分别得 \(3,2+\mathrm{i},1,2-\mathrm{i}\)。第三步：\(|C|=\prod_k\lambda_k=3\cdot1\cdot(2+\mathrm{i})(2-\mathrm{i})=3\cdot5=15\)。第四步：\(\mathrm{tr}(C^{2})=\sum_k\lambda_k^{2}=9+(3+4\mathrm{i})+1+(3-4\mathrm{i})=16\)。` }
,

{ id:'LA05-51', ch:5, type:'计算', diff:4, tags:'全1矩阵 秩一矩阵 特征值 行列式',
  q: String.raw`设 \(J\) 为 \(4\) 阶全 \(1\) 矩阵。求 \(J\) 的全部特征值，并求 \(\det(J+2I)\)。`,
  a: String.raw`特征值为 \(4,0,0,0\)；\(\det(J+2I)=48\)。`,
  sol: String.raw`第一步：\(J=\mathbf{1}\mathbf{1}^{\mathrm{T}}\)，\(\mathrm{r}(J)=1\)，故 \(0\) 是特征值且几何重数为 \(3\)。第二步：\(J\mathbf{1}=4\mathbf{1}\)，故 \(4\) 是特征值。第三步：于是 \(J\) 的特征值为 \(4,0,0,0\)。第四步：\(J+2I\) 的特征值为 \(6,2,2,2\)，故 \(\det(J+2I)=6\cdot2^{3}=48\)。` },

{ id:'LA05-52', ch:5, type:'计算', diff:5, tags:'Laplacian 矩阵 完全图 矩阵-树定理',
  q: String.raw`设 \(L\) 为完全图 \(K_{5}\) 的 Laplacian 矩阵。求 \(L\) 的全部特征值，并用矩阵-树定理求 \(K_{5}\) 的生成树个数。`,
  a: String.raw`特征值为 \(0,5,5,5,5\)；生成树个数为 \(125\)。`,
  sol: String.raw`第一步：\(K_{5}\) 每个顶点度为 \(4\)，故 \(L=4I-(J-I)=5I-J\)。第二步：\(J\) 的特征值为 \(5,0,0,0,0\)，故 \(L\) 的特征值为 \(0,5,5,5,5\)。第三步：矩阵-树定理：生成树个数等于任一非零特征值之积除以顶点数，即
\[
\frac{1}{5}\prod_{i=2}^{5}\lambda_i=\frac{5^{4}}{5}=125.
\]
第四步：用 Cayley 公式 \(n^{n-2}=5^{3}=125\) 复核。` },

{ id:'LA05-53', ch:5, type:'证明', diff:5, tags:'Laplacian 矩阵 半正定 特征值 图论',
  q: String.raw`设 \(L\) 为无向图 \(G\) 的 Laplacian 矩阵。证明：\(L\) 是对称半正定矩阵，其特征值全为非负实数，且 \(0\) 一定是特征值。`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：设 \(L=D-A\)，其中 \(D\) 为度对角矩阵，\(A\) 为邻接矩阵。第二步：对任意实向量 \(x\)，
\[
x^{\mathrm{T}}Lx=\sum_{i}d_ix_i^{2}-2\sum_{\{i,j\}\in E}x_ix_j
=\sum_{\{i,j\}\in E}(x_i-x_j)^{2}\ge0.
\]
第三步：故 \(L\) 对称半正定，特征值全为非负实数。第四步：\(L\mathbf{1}=0\)，因为每行元素之和为 \(0\)，故 \(0\) 是特征值。第五步：当 \(G\) 连通时，\(x^{\mathrm{T}}Lx=0\) 迫使 \(x\) 为常向量，故 \(0\) 的代数重数为 \(1\)。` },

{ id:'LA05-54', ch:5, type:'计算', diff:5, tags:'Markov 链 平稳分布 矩阵幂 极限',
  q: String.raw`设 \(P=\begin{pmatrix}\frac{1}{2}&\frac{1}{4}&\frac{1}{4}\\\frac{1}{2}&\frac{1}{2}&0\\0&\frac{1}{4}&\frac{3}{4}\end{pmatrix}\) 为转移矩阵。求 \(P\) 的平稳分布，并求 \(\lim_{n\to\infty}P^{n}\)。`,
  a: String.raw`平稳分布 \(\pi=\left(\frac13,\frac13,\frac13\right)\)；\(\lim_{n\to\infty}P^{n}\) 的每一行都是 \(\left(\frac13,\frac13,\frac13\right)\)。`,
  sol: String.raw`第一步：平稳分布满足 \(\pi P=\pi\)，\(\pi_1+\pi_2+\pi_3=1\)，\(\pi_i\ge0\)。第二步：写出方程
\[
\tfrac12\pi_1+\tfrac12\pi_2=\pi_1,\quad
\tfrac14\pi_1+\tfrac12\pi_2+\tfrac14\pi_3=\pi_2,\quad
\tfrac14\pi_1+\tfrac34\pi_3=\pi_3.
\]
第三步：由第一式得 \(\pi_2=\pi_1\)，代入第二式得 \(\pi_3=\pi_1\)，故 \(\pi=\left(\frac13,\frac13,\frac13\right)\)。第四步：\(P\) 的特征值为 \(1,\frac12,\frac14\)，除 \(1\) 外模均小于 \(1\)，故 \(P^{n}\) 收敛到到 \(\lambda=1\) 特征子空间的投影。第五步：该投影每行都是 \(\pi\)，即极限矩阵三行均为 \(\left(\frac13,\frac13,\frac13\right)\)。` },

{ id:'LA05-55', ch:5, type:'证明', diff:5, tags:'随机矩阵 谱半径 特征值估计',
  q: String.raw`设 \(P=(p_{ij})\) 为行随机矩阵，即 \(p_{ij}\ge0\) 且对每个 \(i\) 有 \(\sum_{j}p_{ij}=1\)。证明：\(P\) 的每个特征值 \(\lambda\) 满足 \(|\lambda|\le1\)，且 \(1\) 一定是 \(P\) 的特征值。`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：\(P\mathbf{1}=\mathbf{1}\)，故 \(1\) 是特征值。第二步：设 \(Px=\lambda x\)，\(x\neq0\)，取分量 \(x_k\) 使 \(|x_k|=\|x\|_{\infty}\)。第三步：则
\[
|\lambda|\,\|x\|_{\infty}=\left|\sum_jp_{kj}x_j\right|\le\sum_jp_{kj}|x_j|\le\|x\|_{\infty}\sum_jp_{kj}=\|x\|_{\infty}.
\]
第四步：约去 \(\|x\|_{\infty}>0\) 得 \(|\lambda|\le1\)。第五步：故 \(\rho(P)=1\)。` },

{ id:'LA05-56', ch:5, type:'计算', diff:5, tags:'分块矩阵 特征值 正交相似',
  q: String.raw`设 \(A=\begin{pmatrix}2&1\\1&2\end{pmatrix}\)，\(B=\begin{pmatrix}1&1\\1&1\end{pmatrix}\)，\(M=\begin{pmatrix}A&B\\B&A\end{pmatrix}\)。求 \(M\) 的全部特征值。`,
  a: String.raw`\(5,1,1,1\)。`,
  sol: String.raw`第一步：取正交矩阵 \(Q=\dfrac{1}{\sqrt2}\begin{pmatrix}I&I\\I&-I\end{pmatrix}\)，则
\[
QMQ^{\mathrm{T}}=\begin{pmatrix}A+B&0\\0&A-B\end{pmatrix}.
\]
第二步：\(A+B=\begin{pmatrix}3&2\\2&3\end{pmatrix}\)，特征值为 \(5,1\)。第三步：\(A-B=\begin{pmatrix}1&0\\0&1\end{pmatrix}\)，特征值为 \(1,1\)。第四步：\(M\) 与 \(\mathrm{diag}(A+B,A-B)\) 相似，故特征值为 \(5,1,1,1\)（与特征多项式 \((\lambda-5)(\lambda-1)^{3}\) 一致）。` },

{ id:'LA05-57', ch:5, type:'计算', diff:5, tags:'全1矩阵 矩阵幂 特征值',
  q: String.raw`设 \(A=\begin{pmatrix}0&1&1\\1&0&1\\1&1&0\end{pmatrix}\)，记 \(J\) 为 \(3\) 阶全 \(1\) 矩阵。求 \(A\) 的特征值，并用 \(J\) 表示 \(A^{n}\)。`,
  a: String.raw`特征值为 \(2,-1,-1\)；\(A^{n}=(-1)^{n}I+\dfrac{2^{n}-(-1)^{n}}{3}J\)。`,
  sol: String.raw`第一步：\(A=J-I\)。第二步：\(J\) 的特征值为 \(3,0,0\)，故 \(A\) 的特征值为 \(2,-1,-1\)。第三步：由 \(J^{2}=3J\)，二项式展开
\[
(J-I)^{n}=\sum_{k=0}^{n}\binom{n}{k}J^{k}(-1)^{n-k}=(-1)^{n}I+\frac{2^{n}-(-1)^{n}}{3}J,
\]
其中用到 \(\sum_{k\ge1}\binom{n}{k}3^{k-1}(-1)^{n-k}=\dfrac{2^{n}-(-1)^{n}}{3}\)。第四步：取 \(n=1\) 得 \(A=-I+J\)，验证公式正确。` },

{ id:'LA05-58', ch:5, type:'计算', diff:5, tags:'置换矩阵 特征值 单位根 秩',
  q: String.raw`设 \(P=\begin{pmatrix}0&1&0\\0&0&1\\1&0&0\end{pmatrix}\)。求 \(P\) 的特征值，并求 \(P^{2}+P+I\) 的特征值与秩。`,
  a: String.raw`\(P\) 的特征值为 \(1,\omega,\omega^{2}\)，其中 \(\omega=\mathrm{e}^{2\pi\mathrm{i}/3}\)；\(P^{2}+P+I\) 的特征值为 \(3,0,0\)，秩为 \(1\)。`,
  sol: String.raw`第一步：\(P\) 为三阶循环置换矩阵，\(P^{3}=I\)，故特征值满足 \(\lambda^{3}=1\)。第二步：三个特征值为 \(1,\omega,\omega^{2}\)。第三步：对 \(g(x)=x^{2}+x+1\)，有 \(g(1)=3\)，\(g(\omega)=g(\omega^{2})=0\)。第四步：故 \(P^{2}+P+I\) 的特征值为 \(3,0,0\)，秩为 \(1\)。第五步：直接计算 \(P^{2}+P+I=J\)，确为秩 \(1\) 的全 \(1\) 矩阵。` },

{ id:'LA05-59', ch:5, type:'计算', diff:4, tags:'旋转矩阵 复特征值 特征向量',
  q: String.raw`设 \(R=\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}\)，其中 \(\theta=\dfrac{\pi}{3}\)。求 \(R\) 的复特征值与对应的复特征向量。`,
  a: String.raw`特征值为 \(\mathrm{e}^{\pm\mathrm{i}\pi/3}=\dfrac12\pm\dfrac{\sqrt3}{2}\mathrm{i}\)；对应特征向量为 \(\begin{pmatrix}1\\\mp\mathrm{i}\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(|\lambda I-R|=\lambda^{2}-2\cos\theta\,\lambda+1\)，特征值为 \(\lambda=\cos\theta\pm\mathrm{i}\sin\theta=\mathrm{e}^{\pm\mathrm{i}\theta}\)。第二步：代入 \(\theta=\dfrac{\pi}{3}\) 得 \(\lambda=\dfrac12\pm\dfrac{\sqrt3}{2}\mathrm{i}\)。第三步：对 \(\lambda=\mathrm{e}^{\mathrm{i}\theta}\)，方程 \((R-\lambda I)x=0\) 给出 \(x=(1,-\mathrm{i})^{\mathrm{T}}\)。第四步：验证 \(R(1,-\mathrm{i})^{\mathrm{T}}=(\cos\theta+\mathrm{i}\sin\theta,\ \sin\theta-\mathrm{i}\cos\theta)^{\mathrm{T}}=\mathrm{e}^{\mathrm{i}\theta}(1,-\mathrm{i})^{\mathrm{T}}\)。第五步：另一特征向量为共轭 \((1,\mathrm{i})^{\mathrm{T}}\)。` },

{ id:'LA05-60', ch:5, type:'证明', diff:5, tags:'Householder 矩阵 正交矩阵 对合 特征值',
  q: String.raw`设 \(J\) 为 \(3\) 阶全 \(1\) 矩阵，\(H=I-\dfrac{2}{3}J\)。证明 \(H\) 是对称正交矩阵，并求 \(H\) 的特征值与 \(\det H\)。`,
  a: String.raw`\(H^{\mathrm{T}}=H\)，\(H^{2}=I\)；特征值为 \(-1,1,1\)；\(\det H=-1\)。`,
  sol: String.raw`第一步：\(H^{\mathrm{T}}=I-\dfrac23J^{\mathrm{T}}=H\)，故对称。第二步：由 \(J^{2}=3J\)，
\[
H^{2}=I-\frac43J+\frac49J^{2}=I-\frac43J+\frac43J=I.
\]
第三步：故 \(H\) 正交且为对合矩阵，特征值只能为 \(\pm1\)。第四步：取 \(u=(1,1,1)^{\mathrm{T}}\)，\(Hu=u-\dfrac23\cdot3u=-u\)，故 \(-1\) 是特征值。第五步：\(u^{\perp}\) 为二维，其上 \(Hu=u\)，故特征值为 \(-1,1,1\)，\(\det H=-1\)。` },

{ id:'LA05-61', ch:5, type:'计算', diff:5, tags:'奇异值 A^T A 特征值',
  q: String.raw`设 \(A=\begin{pmatrix}2&0\\1&1\\0&2\end{pmatrix}\)。求 \(A^{\mathrm{T}}A\) 的特征值与 \(A\) 的全部奇异值。`,
  a: String.raw`\(A^{\mathrm{T}}A=\begin{pmatrix}5&1\\1&5\end{pmatrix}\)，特征值为 \(6,4\)；奇异值为 \(\sqrt6,2\)。`,
  sol: String.raw`第一步：计算
\[
A^{\mathrm{T}}A=\begin{pmatrix}4+1&1\\1&1+4\end{pmatrix}=\begin{pmatrix}5&1\\1&5\end{pmatrix}.
\]
第二步：\(|\lambda I-A^{\mathrm{T}}A|=(\lambda-6)(\lambda-4)\)，特征值为 \(6,4\)。第三步：奇异值为 \(A^{\mathrm{T}}A\) 特征值的算术平方根。第四步：故奇异值为 \(\sqrt6,2\)。` },

{ id:'LA05-62', ch:5, type:'计算', diff:4, tags:'谱范数 条件数 奇异值',
  q: String.raw`设 \(A=\begin{pmatrix}2&0\\1&1\\0&2\end{pmatrix}\)。求 \(A\) 的谱范数 \(\|A\|_{2}\) 与条件数 \(\kappa_{2}(A)\)。`,
  a: String.raw`\(\|A\|_{2}=\sqrt6\)；\(\kappa_{2}(A)=\dfrac{\sqrt6}{2}\)。`,
  sol: String.raw`第一步：谱范数等于最大奇异值。第二步：由上一类计算，\(A^{\mathrm{T}}A\) 的特征值为 \(6,4\)，奇异值为 \(\sqrt6,2\)。第三步：故 \(\|A\|_{2}=\sqrt6\)。第四步：条件数 \(\kappa_{2}(A)=\dfrac{\sigma_{\max}}{\sigma_{\min}}=\dfrac{\sqrt6}{2}\)。` },

{ id:'LA05-63', ch:5, type:'证明', diff:5, tags:'正规矩阵 幂零 酉对角化',
  q: String.raw`设 \(A\) 为 \(n\) 阶复矩阵，满足 \(A^{*}A=AA^{*}\)（即 \(A\) 为正规矩阵），且 \(A^{2}=0\)。证明 \(A=0\)。`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：正规矩阵可酉对角化，即存在酉矩阵 \(U\) 使 \(A=U\Lambda U^{*}\)，\(\Lambda\) 为对角矩阵。第二步：由 \(A^{2}=0\) 得 \(\Lambda^{2}=0\)。第三步：对角矩阵的平方仍为对角矩阵，故每个对角元 \(\lambda_i\) 满足 \(\lambda_i^{2}=0\)，即 \(\lambda_i=0\)。第四步：于是 \(\Lambda=0\)，从而 \(A=U\Lambda U^{*}=0\)。` },

{ id:'LA05-64', ch:5, type:'计算', diff:5, tags:'Kronecker 积 特征值',
  q: String.raw`设 \(A=\begin{pmatrix}1&2\\3&4\end{pmatrix}\)，\(B=\begin{pmatrix}0&1\\1&0\end{pmatrix}\)。求 Kronecker 积 \(A\otimes B\) 的全部特征值。`,
  a: String.raw`\(\pm\dfrac{5+\sqrt{33}}{2},\ \pm\dfrac{5-\sqrt{33}}{2}\)。`,
  sol: String.raw`第一步：\(A\) 的特征值为 \(\lambda_{1,2}=\dfrac{5\pm\sqrt{33}}{2}\)。第二步：\(B\) 的特征值为 \(\mu_{1,2}=\pm1\)。第三步：Kronecker 积的特征值为全部乘积 \(\lambda_i\mu_j\)。第四步：故四个特征值为 \(\pm\dfrac{5+\sqrt{33}}{2}\) 与 \(\pm\dfrac{5-\sqrt{33}}{2}\)。第五步：用 \(\mathrm{tr}(A\otimes B)=\mathrm{tr}A\cdot\mathrm{tr}B=5\cdot0=0\) 与 \(\det(A\otimes B)=(\det A)^{2}(\det B)^{2}=4\) 复核。` },

{ id:'LA05-65', ch:5, type:'计算', diff:5, tags:'行列式恒等式 AB BA 特征值',
  q: String.raw`设 \(A=\begin{pmatrix}1&2&1\\0&1&1\end{pmatrix}\)，\(B=\begin{pmatrix}1&0\\0&1\\1&1\end{pmatrix}\)。求 \(\det(I_{2}+AB)\) 与 \(\det(I_{3}+BA)\)，并验证二者相等。`,
  a: String.raw`二者都等于 \(6\)。`,
  sol: String.raw`第一步：计算
\[
AB=\begin{pmatrix}2&3\\1&2\end{pmatrix}.
\]
第二步：\(I_{2}+AB=\begin{pmatrix}3&3\\1&3\end{pmatrix}\)，故 \(\det(I_{2}+AB)=9-3=6\)。第三步：计算 \(BA\) 并求 \(I_{3}+BA\) 的行列式，得 \(\det(I_{3}+BA)=6\)。第四步：由恒等式 \(\det(I_{m}+AB)=\det(I_{n}+BA)\)，二者必然相等，此处直接验证吻合。` },

{ id:'LA05-66', ch:5, type:'证明', diff:5, tags:'行列式恒等式 分块矩阵 AB BA',
  q: String.raw`设 \(A\) 为 \(m\times n\) 矩阵，\(B\) 为 \(n\times m\) 矩阵。证明
\[
\det(I_{m}+AB)=\det(I_{n}+BA).
\]
`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：构造分块矩阵
\[
M=\begin{pmatrix}I_{m}&A\\-B&I_{n}\end{pmatrix}.
\]
第二步：按第一块作 Schur 消去，得 \(\det M=\det(I_{n})\det(I_{m}+AB)=\det(I_{m}+AB)\)。第三步：按第二块作 Schur 消去，得 \(\det M=\det(I_{m})\det(I_{n}+BA)=\det(I_{n}+BA)\)。第四步：比较两式即得 \(\det(I_{m}+AB)=\det(I_{n}+BA)\)。` },

{ id:'LA05-67', ch:5, type:'计算', diff:5, tags:'矩阵方程 特征值 解空间',
  q: String.raw`设 \(A=\mathrm{diag}(1,2,3)\)，\(B=\mathrm{diag}(1,2,4)\)。求矩阵方程 \(AX=XB\) 的解空间维数，并写出通解。`,
  a: String.raw`维数为 \(2\)；\(X=\begin{pmatrix}x_{11}&0&0\\0&x_{22}&0\\0&0&0\end{pmatrix}\)，\(x_{11},x_{22}\) 任意。`,
  sol: String.raw`第一步：设 \(X=(x_{ij})\)，比较 \(AX=XB\) 的 \((i,j)\) 元得 \((a_i-b_j)x_{ij}=0\)。第二步：此处 \(a=(1,2,3)\)，\(b=(1,2,4)\)。第三步：非零元只能出现在 \(a_i=b_j\) 的位置，即 \((1,1)\) 与 \((2,2)\)。第四步：其余七个位置全为 \(0\)，故解空间维数为 \(2\)。第五步：通解如答案所示。` },

{ id:'LA05-68', ch:5, type:'证明', diff:5, tags:'矩阵方程 特征值 向量化 Kronecker',
  q: String.raw`设 \(A,B\) 分别为 \(m\) 阶与 \(n\) 阶矩阵。证明：矩阵方程 \(AX=XB\) 只有零解，当且仅当 \(A\) 与 \(B\) 没有公共特征值。`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：若 \(\lambda\) 是公共特征值，取 \(Ax=\lambda x\)，\(B^{\mathrm{T}}y=\lambda y\)，令 \(X=xy^{\mathrm{T}}\neq0\)。第二步：则 \(AX=\lambda xy^{\mathrm{T}}=XB\)，故有非零解。第三步：反之，把 \(X\) 按列向量化，\(AX-XB=0\) 等价于 \((I_{n}\otimes A-B^{\mathrm{T}}\otimes I_{m})\mathrm{vec}(X)=0\)。第四步：有非零解当且仅当该矩阵奇异，即存在 \(\lambda\in\sigma(A)\) 与 \(\mu\in\sigma(B)\) 使 \(\lambda-\mu=0\)。第五步：故只有零解当且仅当两矩阵无公共特征值。` },

{ id:'LA05-69', ch:5, type:'计算', diff:4, tags:'谱分解 投影矩阵 矩阵幂',
  q: String.raw`设 \(A=\begin{pmatrix}3&1\\1&3\end{pmatrix}\)。求 \(A\) 的谱分解，并用它求 \(A^{5}\)。`,
  a: String.raw`\(A=4P_{1}+2P_{2}\)，其中 \(P_{1}=\dfrac12\begin{pmatrix}1&1\\1&1\end{pmatrix}\)，\(P_{2}=\dfrac12\begin{pmatrix}1&-1\\-1&1\end{pmatrix}\)；\(A^{5}=\begin{pmatrix}528&496\\496&528\end{pmatrix}\)。`,
  sol: String.raw`第一步：特征值为 \(4,2\)，单位特征向量为 \(u_{1}=\dfrac{1}{\sqrt2}(1,1)^{\mathrm{T}}\)，\(u_{2}=\dfrac{1}{\sqrt2}(1,-1)^{\mathrm{T}}\)。第二步：令 \(P_{1}=u_{1}u_{1}^{\mathrm{T}}\)，\(P_{2}=u_{2}u_{2}^{\mathrm{T}}\)，则 \(P_{1}+P_{2}=I\)，\(P_{1}P_{2}=0\)，\(P_{i}^{2}=P_{i}\)。第三步：谱分解 \(A=4P_{1}+2P_{2}\)。第四步：\(A^{5}=4^{5}P_{1}+2^{5}P_{2}\)。第五步：代入得 \(A^{5}=\begin{pmatrix}528&496\\496&528\end{pmatrix}\)，与直接计算一致。` },

{ id:'LA05-70', ch:5, type:'计算', diff:4, tags:'投影矩阵 特征值 秩 行列式',
  q: String.raw`设 \(u=(1,2,2)^{\mathrm{T}}\)，\(P=\dfrac{uu^{\mathrm{T}}}{u^{\mathrm{T}}u}\)。求 \(P\) 的特征值、秩，以及 \(\det(P+2I)\)。`,
  a: String.raw`特征值为 \(1,0,0\)；\(\mathrm{r}(P)=1\)；\(\det(P+2I)=12\)。`,
  sol: String.raw`第一步：\(P\) 是到 \(u\) 所张直线的正交投影矩阵。第二步：\(Pu=u\)，且对任意 \(v\perp u\) 有 \(Pv=0\)。第三步：故特征值为 \(1,0,0\)（\(0\) 的重数为 \(2\)），秩为 \(1\)。第四步：\(P+2I\) 的特征值为 \(3,2,2\)，故 \(\det(P+2I)=3\cdot2\cdot2=12\)。` },

{ id:'LA05-71', ch:5, type:'计算', diff:5, tags:'正交投影 平面 特征值 迹',
  q: String.raw`设 \(P\) 是 \(\mathbb{R}^{3}\) 到平面 \(x+y+z=0\) 的正交投影矩阵。求 \(P\)、其特征值与迹。`,
  a: String.raw`\(P=I-\dfrac13J=\begin{pmatrix}\frac23&-\frac13&-\frac13\\-\frac13&\frac23&-\frac13\\-\frac13&-\frac13&\frac23\end{pmatrix}\)；特征值为 \(1,1,0\)；\(\mathrm{tr}(P)=2\)。`,
  sol: String.raw`第一步：平面的单位法向量为 \(n=\dfrac{1}{\sqrt3}(1,1,1)^{\mathrm{T}}\)。第二步：到法向的投影为 \(nn^{\mathrm{T}}=\dfrac13J\)，故到平面的投影为 \(P=I-\dfrac13J\)。第三步：\(P\) 在平面内为恒等（特征值 \(1\)，重数 \(2\)），在法向为 \(0\)。第四步：故特征值为 \(1,1,0\)，\(\mathrm{tr}(P)=2\) 等于平面维数。第五步：直接验证 \(P^{2}=P\) 且 \(P^{\mathrm{T}}=P\)。` },

{ id:'LA05-72', ch:5, type:'计算', diff:5, tags:'二次型 标准形 正交变换 特征值',
  q: String.raw`设二次型 \(f(x_{1},x_{2},x_{3})=x^{\mathrm{T}}Ax\)，其中 \(A=\begin{pmatrix}2&1&0\\1&2&1\\0&1&2\end{pmatrix}\)。求 \(f\) 在正交变换下的标准形。`,
  a: String.raw`\(f=(2+\sqrt2)y_{1}^{2}+2y_{2}^{2}+(2-\sqrt2)y_{3}^{2}\)。`,
  sol: String.raw`第一步：\(A\) 为实对称矩阵，其特征值为 \(2+\sqrt2,2,2-\sqrt2\)。第二步：存在正交矩阵 \(Q\) 使 \(Q^{\mathrm{T}}AQ=\mathrm{diag}(2+\sqrt2,2,2-\sqrt2)\)。第三步：作正交变换 \(x=Qy\)，则 \(f=x^{\mathrm{T}}Ax=y^{\mathrm{T}}Q^{\mathrm{T}}AQy\)。第四步：故标准形为 \((2+\sqrt2)y_{1}^{2}+2y_{2}^{2}+(2-\sqrt2)y_{3}^{2}\)，系数的正负号个数由惯性定理确定（此处三个系数均为正）。` },

{ id:'LA05-73', ch:5, type:'计算', diff:4, tags:'正定矩阵 顺序主子式 参数',
  q: String.raw`设 \(A=\begin{pmatrix}1&t\\t&4\end{pmatrix}\)。求 \(t\) 的取值范围，使 \(A\) 为正定矩阵。`,
  a: String.raw`\(|t|<2\)。`,
  sol: String.raw`第一步：实对称矩阵正定的充要条件是各阶顺序主子式全为正。第二步：一阶主子式为 \(1>0\)。第三步：二阶主子式为 \(\det A=4-t^{2}\)，要求 \(4-t^{2}>0\)。第四步：解得 \(-2<t<2\)，即 \(|t|<2\)。` },

{ id:'LA05-74', ch:5, type:'证明', diff:4, tags:'转置矩阵 特征多项式 行列式',
  q: String.raw`设 \(A\) 为 \(n\) 阶矩阵。证明 \(A\) 与 \(A^{\mathrm{T}}\) 有相同的特征多项式，从而有相同的特征值。`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：写出 \(A^{\mathrm{T}}\) 的特征多项式
\[
|\lambda I-A^{\mathrm{T}}|=\left|(\lambda I-A)^{\mathrm{T}}\right|.
\]
第二步：矩阵转置不改变行列式，故右端等于 \(|\lambda I-A|\)。第三步：于是 \(A\) 与 \(A^{\mathrm{T}}\) 的特征多项式相同。第四步：特征多项式相同意味着特征值（含代数重数）完全相同。` },

{ id:'LA05-75', ch:5, type:'计算', diff:4, tags:'特征值 矩阵幂 迹',
  q: String.raw`设 \(3\) 阶矩阵 \(A\) 的特征值为 \(1,2,3\)。求 \(\mathrm{tr}(A^{3})\) 与 \(\mathrm{tr}(A^{-2})\)。`,
  a: String.raw`\(\mathrm{tr}(A^{3})=36\)；\(\mathrm{tr}(A^{-2})=\dfrac{49}{36}\)。`,
  sol: String.raw`第一步：\(A^{3}\) 的特征值为 \(1,8,27\)，故 \(\mathrm{tr}(A^{3})=1+8+27=36\)。第二步：\(A^{-1}\) 的特征值为 \(1,\dfrac12,\dfrac13\)。第三步：\(A^{-2}\) 的特征值为 \(1,\dfrac14,\dfrac19\)。第四步：故 \(\mathrm{tr}(A^{-2})=1+\dfrac14+\dfrac19=\dfrac{36+9+4}{36}=\dfrac{49}{36}\)。` },

{ id:'LA05-76', ch:5, type:'证明', diff:5, tags:'迹 特征值 幂 Schur 三角化',
  q: String.raw`设 \(A\) 为 \(n\) 阶复矩阵，其特征值为 \(\lambda_{1},\dots,\lambda_{n}\)。证明对任意正整数 \(k\)，
\[
\mathrm{tr}(A^{k})=\sum_{i=1}^{n}\lambda_{i}^{k}.
\]
`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：由 Schur 三角化，存在酉矩阵 \(U\) 使 \(A=UTU^{*}\)，其中 \(T\) 为上三角矩阵，对角元为 \(\lambda_{1},\dots,\lambda_{n}\)。第二步：则 \(A^{k}=UT^{k}U^{*}\)，且 \(T^{k}\) 仍为上三角矩阵，对角元为 \(\lambda_{1}^{k},\dots,\lambda_{n}^{k}\)。第三步：迹在相似变换下不变，故 \(\mathrm{tr}(A^{k})=\mathrm{tr}(T^{k})\)。第四步：上三角矩阵的迹等于对角元之和，即 \(\sum_{i}\lambda_{i}^{k}\)。` },

{ id:'LA05-77', ch:5, type:'计算', diff:5, tags:'矩阵方程 逆矩阵 特征值 Fibonacci',
  q: String.raw`设 \(A=\begin{pmatrix}1&1\\1&0\end{pmatrix}\)，已知 \(A^{2}=A+I\)。求 \(A^{3}\)、\(A^{-1}\) 与 \(A\) 的特征值。`,
  a: String.raw`\(A^{3}=2A+I=\begin{pmatrix}3&2\\2&1\end{pmatrix}\)；\(A^{-1}=A-I=\begin{pmatrix}0&1\\1&-1\end{pmatrix}\)；特征值为 \(\dfrac{1\pm\sqrt5}{2}\)。`,
  sol: String.raw`第一步：由 \(A^{2}=A+I\) 得 \(A^{3}=A^{2}+A=(A+I)+A=2A+I\)。第二步：代入 \(A\) 得 \(A^{3}=\begin{pmatrix}3&2\\2&1\end{pmatrix}\)。第三步：由 \(A^{2}-A=I\) 得 \(A(A-I)=I\)，故 \(A^{-1}=A-I=\begin{pmatrix}0&1\\1&-1\end{pmatrix}\)。第四步：设特征值为 \(\lambda\)，则 \(\lambda^{2}=\lambda+1\)，解得 \(\lambda=\dfrac{1\pm\sqrt5}{2}\)。` },

{ id:'LA05-78', ch:5, type:'计算', diff:5, tags:'幂零矩阵 最小多项式 矩阵幂 特征值',
  q: String.raw`设 \(A=\begin{pmatrix}1&1\\0&1\end{pmatrix}\)，满足 \((A-I)^{2}=0\)。求 \(A\) 的特征值、最小多项式，并求 \(A^{n}\)。`,
  a: String.raw`特征值为 \(1,1\)；最小多项式为 \((\lambda-1)^{2}\)；\(A^{n}=\begin{pmatrix}1&n\\0&1\end{pmatrix}\)。`,
  sol: String.raw`第一步：写 \(A=I+N\)，其中 \(N=\begin{pmatrix}0&1\\0&0\end{pmatrix}\)，满足 \(N^{2}=0\)。第二步：\(A\) 为上三角矩阵，特征值为对角元 \(1,1\)。第三步：\((A-I)^{2}=N^{2}=0\) 而 \(A-I\neq0\)，故最小多项式为 \((\lambda-1)^{2}\)。第四步：由二项式定理 \(A^{n}=I+nN=\begin{pmatrix}1&n\\0&1\end{pmatrix}\)（\(N^{2}=0\)，高次项消失）。` },

{ id:'LA05-79', ch:5, type:'计算', diff:4, tags:'特征值 矩阵多项式 行列式',
  q: String.raw`设 \(3\) 阶矩阵 \(A\) 的特征值为 \(1,2,-1\)。求 \(\det(A^{2}+I)\) 与 \(\det(A^{2}-A)\)。`,
  a: String.raw`\(\det(A^{2}+I)=20\)；\(\det(A^{2}-A)=0\)。`,
  sol: String.raw`第一步：\(A^{2}+I\) 的特征值为 \(1^{2}+1,\ 2^{2}+1,\ (-1)^{2}+1\)，即 \(2,5,2\)。第二步：故 \(\det(A^{2}+I)=2\cdot5\cdot2=20\)。第三步：\(A^{2}-A=A(A-I)\) 的特征值为 \(0,2,2\)。第四步：故 \(\det(A^{2}-A)=0\cdot2\cdot2=0\)。` },

{ id:'LA05-80', ch:5, type:'证明', diff:5, tags:'零特征值 代数重数 几何重数 秩',
  q: String.raw`设 \(A\) 为 \(n\) 阶矩阵，\(\mathrm{r}(A)=r\)。证明 \(0\) 作为 \(A\) 的特征值的代数重数至少为 \(n-r\)。`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：由秩-零化度定理，\(\dim\ker A=n-r\)。第二步：\(\ker A\) 中每个非零向量都满足 \(Ax=0\)，即都是 \(\lambda=0\) 的特征向量。第三步：故 \(\lambda=0\) 的几何重数等于 \(n-r\)。第四步：任一特征值的几何重数不超过其代数重数。第五步：故 \(0\) 的代数重数至少为 \(n-r\)。` },

{ id:'LA05-81', ch:5, type:'计算', diff:5, tags:'三对角矩阵 特征多项式 递推 行列式',
  q: String.raw`设 \(A\) 为 \(4\) 阶三对角矩阵，主对角线元素全为 \(2\)，上下次对角线元素全为 \(-1\)，其余元素为 \(0\)。求 \(A\) 的特征多项式、全部特征值与 \(\det A\)。`,
  a: String.raw`特征多项式为 \((\lambda^{2}-3\lambda+1)(\lambda^{2}-5\lambda+5)\)；特征值为 \(\dfrac{3\pm\sqrt5}{2},\dfrac{5\pm\sqrt5}{2}\)；\(\det A=5\)。`,
  sol: String.raw`第一步：记 \(D_{n}(\lambda)=\det(\lambda I_{n}-A_{n})\)，按第一行展开得递推式
\[
D_{n}=(\lambda-2)D_{n-1}-D_{n-2}.
\]
第二步：初值 \(D_{1}=\lambda-2\)，\(D_{2}=(\lambda-2)^{2}-1\)。第三步：依次得 \(D_{3}=(\lambda-2)^{3}-2(\lambda-2)\)，
\[
D_{4}=(\lambda-2)D_{3}-D_{2}=(\lambda-2)^{4}-3(\lambda-2)^{2}+1.
\]
第四步：令 \(t=\lambda-2\)，则 \(t^{4}-3t^{2}+1=(t^{2}-t-1)(t^{2}+t-1)\)，即特征多项式为 \((\lambda^{2}-3\lambda+1)(\lambda^{2}-5\lambda+5)\)。第五步：解两个二次方程得特征值 \(\dfrac{3\pm\sqrt5}{2}\) 与 \(\dfrac{5\pm\sqrt5}{2}\)；\(\det A\) 等于特征多项式在 \(\lambda=0\) 处的值，即 \(1\cdot5=5\)。` },

{ id:'LA05-82', ch:5, type:'计算', diff:4, tags:'循环矩阵 特征值 行列式 迹',
  q: String.raw`设 \(C\) 为 \(4\) 阶循环矩阵，第一行为 \((0,1,0,1)\)，每一行由上一行右移一位得到。求 \(C\) 的全部特征值、\(\det C\) 与 \(\mathrm{tr}(C^{2})\)。`,
  a: String.raw`特征值为 \(2,0,-2,0\)；\(\det C=0\)；\(\mathrm{tr}(C^{2})=8\)。`,
  sol: String.raw`第一步：循环矩阵的特征值为 \(\lambda_{k}=\sum_{j=0}^{3}c_{j}\omega^{jk}\)，其中 \(\omega=\mathrm{i}\)，\(c=(0,1,0,1)\)。第二步：\(\lambda_{k}=\omega^{k}+\omega^{3k}\)。第三步：\(k=0,1,2,3\) 分别得 \(2,0,-2,0\)。第四步：\(\det C=\prod_{k}\lambda_{k}=0\)。第五步：\(C^{2}\) 的特征值为 \(\lambda_{k}^{2}\)，故 \(\mathrm{tr}(C^{2})=4+0+4+0=8\)。` },

{ id:'LA05-83', ch:5, type:'证明', diff:5, tags:'循环矩阵 特征向量 单位根',
  q: String.raw`设 \(C=\mathrm{circ}(c_{0},c_{1},\dots,c_{n-1})\) 为 \(n\) 阶循环矩阵，\(\omega=\mathrm{e}^{2\pi\mathrm{i}/n}\)。证明：对 \(k=0,1,\dots,n-1\)，向量
\[
v_{k}=(1,\omega^{k},\omega^{2k},\dots,\omega^{(n-1)k})^{\mathrm{T}}
\]
是 \(C\) 的特征向量，并求出对应的特征值。`,
  a: String.raw`\(Cv_{k}=\left(\sum_{j=0}^{n-1}c_{j}\omega^{jk}\right)v_{k}\)。`,
  sol: String.raw`第一步：循环矩阵的第 \(i\) 行为 \((c_{-i},c_{1-i},\dots,c_{n-1-i})\)（下标按模 \(n\) 理解）。第二步：计算
\[
(Cv_{k})_{i}=\sum_{j=0}^{n-1}c_{j-i}\omega^{jk}.
\]
第三步：令 \(m=(j-i)\bmod n\)，则 \(j=(m+i)\bmod n\)，且 \(\omega^{jk}=\omega^{(m+i)k}=\omega^{ik}\omega^{mk}\)。第四步：于是
\[
(Cv_{k})_{i}=\omega^{ik}\sum_{m=0}^{n-1}c_{m}\omega^{mk}=\lambda_{k}\,\omega^{ik},
\]
其中 \(\lambda_{k}=\sum_{m}c_{m}\omega^{mk}\)。第五步：这正是 \(Cv_{k}=\lambda_{k}v_{k}\)，故 \(v_{k}\) 为特征向量，特征值为 \(\lambda_{k}\)。` },

{ id:'LA05-84', ch:5, type:'计算', diff:4, tags:'谱半径 矩阵范数 Frobenius 范数',
  q: String.raw`设 \(A=\begin{pmatrix}0&2\\1&0\end{pmatrix}\)。求谱半径 \(\rho(A)\)、\(\|A\|_{1}\)、\(\|A\|_{\infty}\) 与 \(\|A\|_{\mathrm{F}}\)。`,
  a: String.raw`\(\rho(A)=\sqrt2\)；\(\|A\|_{1}=2\)；\(\|A\|_{\infty}=2\)；\(\|A\|_{\mathrm{F}}=\sqrt5\)。`,
  sol: String.raw`第一步：特征多项式 \(\lambda^{2}-2\)，特征值为 \(\pm\sqrt2\)，故 \(\rho(A)=\sqrt2\)。第二步：列绝对值之和分别为 \(1,2\)，故 \(\|A\|_{1}=2\)。第三步：行绝对值之和分别为 \(2,1\)，故 \(\|A\|_{\infty}=2\)。第四步：\(\|A\|_{\mathrm{F}}=\sqrt{0^{2}+2^{2}+1^{2}+0^{2}}=\sqrt5\)。第五步：注意 \(\rho(A)<\|A\|_{2}=2\)（\(A^{\mathrm{T}}A\) 的特征值为 \(4,1\)），说明谱半径一般严格小于范数。` },

{ id:'LA05-85', ch:5, type:'计算', diff:5, tags:'Gershgorin 圆盘 谱半径估计 特征值定位',
  q: String.raw`设 \(A=\begin{pmatrix}10&1&0&0\\1&8&2&0\\0&2&6&1\\0&0&1&4\end{pmatrix}\)。写出 \(A\) 的四个 Gershgorin 行圆盘，给出谱半径的上界，并与实际特征值比较。`,
  a: String.raw`圆盘为 \([9,11]\)、\([5,11]\)、\([3,9]\)、\([3,5]\)；\(\rho(A)\le11\)；实际特征值约为 \(10.59,8.76,5.24,3.41\)，上界偏松。`,
  sol: String.raw`第一步：各行非对角元素绝对值之和为 \(r_{1}=1,\ r_{2}=3,\ r_{3}=3,\ r_{4}=1\)。第二步：圆盘为
\[
[9,11],\quad[5,11],\quad[3,9],\quad[3,5].
\]
第三步：四个圆盘之并含于 \([3,11]\)，故所有特征值满足 \(|\lambda|\le11\)，即 \(\rho(A)\le11\)。第四步：数值求得特征值约为 \(10.59,\ 8.76,\ 5.24,\ 3.41\)。第五步：可见 Gershgorin 上界只能给出粗略估计，实际谱半径约为 \(10.59\)。` },

{ id:'LA05-86', ch:5, type:'证明', diff:4, tags:'严格对角占优 可逆性 Gershgorin',
  q: String.raw`设 \(A=(a_{ij})\) 为 \(n\) 阶严格行对角占优矩阵，即对每个 \(i\) 有 \(|a_{ii}|>\sum_{j\neq i}|a_{ij}|\)。证明 \(A\) 可逆。`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：反设 \(A\) 奇异，则存在非零向量 \(x\) 使 \(Ax=0\)。第二步：取 \(k\) 使 \(|x_{k}|=\max_{i}|x_{i}|>0\)。第三步：由第 \(k\) 个方程
\[
|a_{kk}||x_{k}|=\left|\sum_{j\neq k}a_{kj}x_{j}\right|\le\sum_{j\neq k}|a_{kj}||x_{j}|\le|x_{k}|\sum_{j\neq k}|a_{kj}|.
\]
第四步：约去 \(|x_{k}|\) 得 \(|a_{kk}|\le\sum_{j\neq k}|a_{kj}|\)，与严格对角占优矛盾。第五步：故 \(A\) 可逆（等价地，Gershgorin 圆盘均不含原点）。` },

{ id:'LA05-87', ch:5, type:'计算', diff:5, tags:'AB 与 BA 特征值 特征多项式',
  q: String.raw`设 \(A=\begin{pmatrix}1&2\\3&4\end{pmatrix}\)，\(B=\begin{pmatrix}0&1\\1&0\end{pmatrix}\)。求 \(AB\)、\(BA\)，并分别求它们的特征多项式，验证二者相同。`,
  a: String.raw`\(AB=\begin{pmatrix}2&1\\4&3\end{pmatrix}\)，\(BA=\begin{pmatrix}3&4\\1&2\end{pmatrix}\)；两者特征多项式均为 \(\lambda^{2}-5\lambda+2\)。`,
  sol: String.raw`第一步：计算
\[
AB=\begin{pmatrix}2&1\\4&3\end{pmatrix},\qquad BA=\begin{pmatrix}3&4\\1&2\end{pmatrix}.
\]
第二步：对 \(AB\)，\(\mathrm{tr}=5\)，\(\det=6-4=2\)，故特征多项式为 \(\lambda^{2}-5\lambda+2\)。第三步：对 \(BA\)，\(\mathrm{tr}=5\)，\(\det=6-4=2\)，特征多项式同样为 \(\lambda^{2}-5\lambda+2\)。第四步：二者相同并不偶然：对同阶方阵 \(A,B\)，有 \(\det(\lambda I-AB)=\det(\lambda I-BA)\)。` },

{ id:'LA05-88', ch:5, type:'证明', diff:5, tags:'相似矩阵 不变量 特征多项式 迹 行列式 秩',
  q: String.raw`设 \(A\) 与 \(B\) 相似，即存在可逆矩阵 \(P\) 使 \(B=P^{-1}AP\)。证明：\(A\) 与 \(B\) 有相同的特征多项式、迹、行列式与秩。`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：特征多项式
\[
|\lambda I-B|=|\lambda I-P^{-1}AP|=|P^{-1}(\lambda I-A)P|=|\lambda I-A|.
\]
第二步：迹的相似不变性：\(\mathrm{tr}(P^{-1}AP)=\mathrm{tr}(APP^{-1})=\mathrm{tr}A\)。第三步：行列式：\(\det B=\det(P^{-1})\det A\det P=\det A\)。第四步：秩：左乘、右乘可逆矩阵均不改变秩，故 \(\mathrm{r}(B)=\mathrm{r}(A)\)。第五步：这些量都是相似不变量，可用于判定两矩阵不相似（但相同不变量不保证相似）。` },

{ id:'LA05-89', ch:5, type:'计算', diff:5, tags:'矩阵幂 谱分解 特征值',
  q: String.raw`设 \(A=\begin{pmatrix}2&1\\1&2\end{pmatrix}\)。求 \(A^{n}\) 的显式表达式（\(n\) 为正整数）。`,
  a: String.raw`\(A^{n}=\dfrac{3^{n}}{2}\begin{pmatrix}1&1\\1&1\end{pmatrix}+\dfrac12\begin{pmatrix}1&-1\\-1&1\end{pmatrix}\)。`,
  sol: String.raw`第一步：特征值为 \(3,1\)，单位特征向量为 \(u_{1}=\dfrac{1}{\sqrt2}(1,1)^{\mathrm{T}}\)，\(u_{2}=\dfrac{1}{\sqrt2}(1,-1)^{\mathrm{T}}\)。第二步：令 \(P_{1}=u_{1}u_{1}^{\mathrm{T}}\)，\(P_{2}=u_{2}u_{2}^{\mathrm{T}}\)，则 \(P_{1}+P_{2}=I\)，\(P_{1}P_{2}=0\)。第三步：\(A=3P_{1}+P_{2}\)，故 \(A^{n}=3^{n}P_{1}+P_{2}\)。第四步：写成分量形式即得答案。第五步：取 \(n=1\) 验证，得 \(\dfrac32J+\dfrac12\begin{pmatrix}1&-1\\-1&1\end{pmatrix}=\begin{pmatrix}2&1\\1&2\end{pmatrix}\)，正确。` },

{ id:'LA05-90', ch:5, type:'计算', diff:5, tags:'矩阵指数 旋转矩阵 幂级数',
  q: String.raw`设 \(A=\begin{pmatrix}0&1\\-1&0\end{pmatrix}\)。求 \(\mathrm{e}^{A}\)，并说明它是旋转矩阵。`,
  a: String.raw`\(\mathrm{e}^{A}=\begin{pmatrix}\cos1&\sin1\\-\sin1&\cos1\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(A^{2}=-I\)，故 \(A^{2m}=(-1)^{m}I\)，\(A^{2m+1}=(-1)^{m}A\)。第二步：按幂级数分组
\[
\mathrm{e}^{A}=\sum_{m\ge0}\frac{(-1)^{m}}{(2m)!}I+\sum_{m\ge0}\frac{(-1)^{m}}{(2m+1)!}A=(\cos1)I+(\sin1)A.
\]
第三步：代入 \(A\) 得 \(\mathrm{e}^{A}=\begin{pmatrix}\cos1&\sin1\\-\sin1&\cos1\end{pmatrix}\)。第四步：该矩阵正交且行列式为 \(1\)，是旋转 \(-1\) 弧度的矩阵。` },

{ id:'LA05-91', ch:5, type:'计算', diff:4, tags:'矩阵指数 幂零矩阵 若尔当块',
  q: String.raw`设 \(A=\begin{pmatrix}1&1\\0&1\end{pmatrix}\)。求 \(\mathrm{e}^{A}\)。`,
  a: String.raw`\(\mathrm{e}^{A}=\mathrm{e}\begin{pmatrix}1&1\\0&1\end{pmatrix}\)。`,
  sol: String.raw`第一步：写 \(A=I+N\)，其中 \(N=\begin{pmatrix}0&1\\0&0\end{pmatrix}\)，满足 \(N^{2}=0\)。第二步：由于 \(I\) 与 \(N\) 可交换，\(\mathrm{e}^{A}=\mathrm{e}^{I}\mathrm{e}^{N}=\mathrm{e}\,\mathrm{e}^{N}\)。第三步：由 \(N^{2}=0\) 得 \(\mathrm{e}^{N}=I+N\)。第四步：故 \(\mathrm{e}^{A}=\mathrm{e}(I+N)=\mathrm{e}\begin{pmatrix}1&1\\0&1\end{pmatrix}\)。` },

{ id:'LA05-92', ch:5, type:'证明', diff:5, tags:'矩阵指数 行列式 迹 Schur 三角化',
  q: String.raw`设 \(A\) 为 \(n\) 阶复矩阵。证明
\[
\det(\mathrm{e}^{A})=\mathrm{e}^{\mathrm{tr}A}.
\]
`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：由 Schur 三角化，存在酉矩阵 \(U\) 使 \(A=UTU^{*}\)，\(T\) 为上三角矩阵，对角元为特征值 \(\lambda_{1},\dots,\lambda_{n}\)。第二步：\(\mathrm{e}^{A}=U\mathrm{e}^{T}U^{*}\)，故 \(\det(\mathrm{e}^{A})=\det(\mathrm{e}^{T})\)。第三步：\(\mathrm{e}^{T}\) 仍为上三角矩阵，对角元为 \(\mathrm{e}^{\lambda_{1}},\dots,\mathrm{e}^{\lambda_{n}}\)。第四步：故 \(\det(\mathrm{e}^{T})=\prod_{i}\mathrm{e}^{\lambda_{i}}=\mathrm{e}^{\sum_{i}\lambda_{i}}=\mathrm{e}^{\mathrm{tr}A}\)。` },

{ id:'LA05-93', ch:5, type:'计算', diff:4, tags:'矩阵指数 行列式 迹 验证',
  q: String.raw`设 \(A=\begin{pmatrix}1&1\\0&1\end{pmatrix}\)。利用恒等式 \(\det(\mathrm{e}^{A})=\mathrm{e}^{\mathrm{tr}A}\) 求 \(\det(\mathrm{e}^{A})\)，并与直接计算 \(\mathrm{e}^{A}\) 的结果核对。`,
  a: String.raw`\(\mathrm{tr}A=2\)，故 \(\det(\mathrm{e}^{A})=\mathrm{e}^{2}\)；直接计算亦得 \(\mathrm{e}^{2}\)。`,
  sol: String.raw`第一步：\(\mathrm{tr}A=1+1=2\)，故 \(\mathrm{e}^{\mathrm{tr}A}=\mathrm{e}^{2}\)。第二步：由前面的计算，\(\mathrm{e}^{A}=\mathrm{e}\begin{pmatrix}1&1\\0&1\end{pmatrix}\)。第三步：\(\det(\mathrm{e}^{A})=\mathrm{e}^{2}\det\begin{pmatrix}1&1\\0&1\end{pmatrix}=\mathrm{e}^{2}\cdot1=\mathrm{e}^{2}\)。第四步：两种算法结果一致，恒等式得到验证。` },

{ id:'LA05-94', ch:5, type:'证明', diff:5, tags:'幂零矩阵 行列式 逆矩阵 特征值',
  q: String.raw`设 \(A\) 为 \(n\) 阶幂零矩阵，即存在正整数 \(m\) 使 \(A^{m}=0\)。证明：\(\det(I+A)=1\)，且 \(I+A\) 可逆，其逆为
\[
(I+A)^{-1}=\sum_{k=0}^{m-1}(-A)^{k}.
\]
`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：设 \(\lambda\) 是 \(A\) 的特征值，则 \(\lambda^{m}\) 是 \(A^{m}=0\) 的特征值，故 \(\lambda^{m}=0\)，即 \(\lambda=0\)。第二步：于是 \(A\) 的特征值全为 \(0\)，\(I+A\) 的特征值全为 \(1\)，从而 \(\det(I+A)=1\)。第三步：直接验证
\[
(I+A)\sum_{k=0}^{m-1}(-A)^{k}=\sum_{k=0}^{m-1}(-A)^{k}+\sum_{k=0}^{m-1}(-1)^{k}A^{k+1}=I-(-A)^{m}=I,
\]
最后一步用到 \(A^{m}=0\)。第四步：故 \(I+A\) 可逆，且逆为上述有限和。` },

{ id:'LA05-95', ch:5, type:'计算', diff:5, tags:'幂零矩阵 逆矩阵 若尔当块',
  q: String.raw`设 \(A\) 为 \(3\) 阶矩阵且 \(A^{3}=0\)。求 \((I+A)^{-1}\) 的表达式，并对 \(A=\begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix}\) 写出具体逆矩阵。`,
  a: String.raw`\((I+A)^{-1}=I-A+A^{2}\)；对给定的 \(A\)，\((I+A)^{-1}=\begin{pmatrix}1&-1&1\\0&1&-1\\0&0&1\end{pmatrix}\)。`,
  sol: String.raw`第一步：由 \(A^{3}=0\) 得
\[
(I+A)(I-A+A^{2})=I+A^{3}=I.
\]
第二步：故 \((I+A)^{-1}=I-A+A^{2}\)。第三步：对给定 \(A\)，计算 \(A^{2}=\begin{pmatrix}0&0&1\\0&0&0\\0&0&0\end{pmatrix}\)。第四步：代入得 \((I+A)^{-1}=\begin{pmatrix}1&-1&1\\0&1&-1\\0&0&1\end{pmatrix}\)。第五步：直接相乘验证等于 \(I\)。` },

{ id:'LA05-96', ch:5, type:'证明', diff:5, tags:'伴随矩阵 特征值 逆矩阵',
  q: String.raw`设 \(A\) 为 \(n\) 阶可逆矩阵，\(A^{*}\) 为其伴随矩阵，\(A\) 的特征值为 \(\lambda_{1},\dots,\lambda_{n}\)。证明：\(A^{*}=|A|A^{-1}\)，且 \(A^{*}\) 的特征值为 \(\dfrac{|A|}{\lambda_{1}},\dots,\dfrac{|A|}{\lambda_{n}}\)。`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：由伴随矩阵的基本关系 \(AA^{*}=|A|I\)，两边左乘 \(A^{-1}\) 得 \(A^{*}=|A|A^{-1}\)。第二步：\(A^{-1}\) 的特征值为 \(\lambda_{i}^{-1}\)（因 \(A\) 可逆，各 \(\lambda_{i}\neq0\)）。第三步：数乘矩阵 \(|A|A^{-1}\) 的特征值为 \(|A|\lambda_{i}^{-1}\)。第四步：故 \(A^{*}\) 的特征值为 \(\dfrac{|A|}{\lambda_{i}}\)。第五步：取行列式得 \(\det(A^{*})=|A|^{n}\prod\lambda_{i}^{-1}=|A|^{n-1}\)，与已知公式一致。` },

{ id:'LA05-97', ch:5, type:'计算', diff:4, tags:'伴随矩阵 特征值 迹 行列式',
  q: String.raw`设 \(3\) 阶矩阵 \(A\) 的特征值为 \(1,2,3\)。求 \(\mathrm{tr}(A^{*})\) 与 \(\det(A^{*})\)，其中 \(A^{*}\) 为 \(A\) 的伴随矩阵。`,
  a: String.raw`\(\mathrm{tr}(A^{*})=11\)；\(\det(A^{*})=36\)。`,
  sol: String.raw`第一步：\(|A|=1\cdot2\cdot3=6\)。第二步：\(A^{*}\) 的特征值为 \(\dfrac{6}{1},\dfrac{6}{2},\dfrac{6}{3}\)，即 \(6,3,2\)。第三步：\(\mathrm{tr}(A^{*})=6+3+2=11\)。第四步：\(\det(A^{*})=6\cdot3\cdot2=36\)，与 \(|A|^{n-1}=6^{2}=36\) 一致。` },

{ id:'LA05-98', ch:5, type:'计算', diff:5, tags:'分块矩阵 特征值 反对角块',
  q: String.raw`设 \(A=\mathrm{diag}(1,2)\)，\(B=\mathrm{diag}(4,1)\)，\(M=\begin{pmatrix}0&A\\B&0\end{pmatrix}\)。求 \(M\) 的全部特征值。`,
  a: String.raw`\(2,-2,\sqrt2,-\sqrt2\)。`,
  sol: String.raw`第一步：计算
\[
M^{2}=\begin{pmatrix}AB&0\\0&BA\end{pmatrix}=\mathrm{diag}(4,2,4,2).
\]
第二步：设 \(Mx=\lambda x\)，\(x\neq0\)，则 \(M^{2}x=\lambda^{2}x\)。第三步：故 \(\lambda^{2}\) 是 \(M^{2}\) 的特征值，即 \(\lambda^{2}\in\{4,2\}\)。第四步：于是 \(\lambda=\pm2,\pm\sqrt2\)，共四个，恰为 \(M\) 的全部特征值。第五步：也可直接由 \(\det(\lambda^{2}I-AB)=0\) 得到同样的二次方程。` },

{ id:'LA05-99', ch:5, type:'计算', diff:5, tags:'矩阵幂 幂零扰动 二项式展开',
  q: String.raw`设 \(A=\begin{pmatrix}1&2&3\\0&1&2\\0&0&1\end{pmatrix}\)。求 \(A^{n}\)（\(n\) 为正整数）。`,
  a: String.raw`\(A^{n}=I+nN+\dfrac{n(n-1)}{2}N^{2}=\begin{pmatrix}1&2n&2\binom{n}{2}+3n\\0&1&2n\\0&0&1\end{pmatrix}\)。`,
  sol: String.raw`第一步：写 \(A=I+N\)，其中 \(N=\begin{pmatrix}0&2&3\\0&0&2\\0&0&0\end{pmatrix}\)。第二步：计算 \(N^{2}=\begin{pmatrix}0&0&4\\0&0&0\\0&0&0\end{pmatrix}\)，\(N^{3}=0\)。第三步：由二项式定理
\[
A^{n}=(I+N)^{n}=I+nN+\binom{n}{2}N^{2}.
\]
第四步：代入得 \(A^{n}=\begin{pmatrix}1&2n&2\binom{n}{2}+3n\\0&1&2n\\0&0&1\end{pmatrix}\)。第五步：取 \(n=2\) 验证得 \(\begin{pmatrix}1&4&10\\0&1&4\\0&0&1\end{pmatrix}\)，与直接平方一致。` },

{ id:'LA05-100', ch:5, type:'证明', diff:5, tags:'幂等矩阵 秩 迹 直和',
  q: String.raw`设 \(A,B\) 为 \(n\) 阶矩阵，满足 \(A^{2}=A\)，\(B^{2}=B\)，\(AB=BA=0\)。证明：\(A+B\) 是幂等矩阵，且
\[
\mathrm{r}(A+B)=\mathrm{r}(A)+\mathrm{r}(B).
\]
`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步：展开
\[
(A+B)^{2}=A^{2}+AB+BA+B^{2}=A+B,
\]
故 \(A+B\) 幂等。第二步：幂等矩阵的特征值只能是 \(0\) 或 \(1\)，且它可对角化，故其秩等于迹：\(\mathrm{r}(A+B)=\mathrm{tr}(A+B)\)。第三步：由迹的线性，\(\mathrm{tr}(A+B)=\mathrm{tr}A+\mathrm{tr}B\)。第四步：\(A,B\) 也幂等，故 \(\mathrm{tr}A=\mathrm{r}(A)\)，\(\mathrm{tr}B=\mathrm{r}(B)\)。第五步：于是 \(\mathrm{r}(A+B)=\mathrm{r}(A)+\mathrm{r}(B)\)（几何上即两个像空间直和）。` }
);
