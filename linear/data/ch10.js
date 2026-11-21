window.LBANK = window.LBANK || [];
window.LBANK.push(
{ id:'LA10-01', ch:10, type:'证明', diff:5, tags:'幂等矩阵 秩等式',
  q: String.raw`设 \(A\) 为 \(n\) 阶方阵，且 \(A^{2}=A\)。证明 \(\operatorname{rank}A+\operatorname{rank}(I-A)=n\)。`,
  a: String.raw`由 \(A(I-A)=0\) 得 \(\le n\)，由 \(I=A+(I-A)\) 得 \(\ge n\)，故等号成立。`,
  sol: String.raw`一方面，\(A(I-A)=A-A^{2}=0\)。由秩不等式
  \[
  \operatorname{rank}A+\operatorname{rank}(I-A)\le n+\operatorname{rank}\bigl(A(I-A)\bigr)=n.
  \]
  另一方面，\(I=A+(I-A)\)，故
  \[
  n=\operatorname{rank}I\le\operatorname{rank}A+\operatorname{rank}(I-A).
  \]
  两式合并即得 \(\operatorname{rank}A+\operatorname{rank}(I-A)=n\)。` },

{ id:'LA10-02', ch:10, type:'证明', diff:5, tags:'对合矩阵 秩等式',
  q: String.raw`设 \(A\) 为 \(n\) 阶方阵，且 \(A^{2}=I\)。证明 \(\operatorname{rank}(A-I)+\operatorname{rank}(A+I)=n\)。`,
  a: String.raw`由 \((A-I)(A+I)=0\) 得 \(\le n\)，由 \(2I=(A+I)-(A-I)\) 得 \(\ge n\)。`,
  sol: String.raw`由
  \[
  (A-I)(A+I)=A^{2}-I=0
  \]
  及秩不等式得
  \[
  \operatorname{rank}(A-I)+\operatorname{rank}(A+I)\le n.
  \]
  又
  \[
  2I=(A+I)-(A-I),
  \]
  故
  \[
  n=\operatorname{rank}(2I)\le\operatorname{rank}(A+I)+\operatorname{rank}(A-I).
  \]
  两边夹逼，等号成立。` },

{ id:'LA10-03', ch:10, type:'证明', diff:5, tags:'Sylvester秩不等式',
  q: String.raw`设 \(A\) 为 \(m\times n\) 实矩阵，\(B\) 为 \(n\times p\) 实矩阵。证明
  \[
  \operatorname{rank}(AB)\ge\operatorname{rank}A+\operatorname{rank}B-n.
  \]`,
  a: String.raw`把 \(A\) 限制在 \(\operatorname{Im}B\) 上，用维数定理。`,
  sol: String.raw`记 \(V=\operatorname{Im}B\subseteq\mathbb{R}^{n}\)，则 \(\dim V=\operatorname{rank}B\)。把 \(A\) 看作线性映射 \(\mathbb{R}^{n}\to\mathbb{R}^{m}\)，则
  \[
  \operatorname{Im}(AB)=A(V),\qquad \dim A(V)=\operatorname{rank}(AB).
  \]
  对 \(A|_{V}:V\to\mathbb{R}^{m}\) 用维数定理：
  \[
  \dim V=\dim\ker(A|_{V})+\dim A(V).
  \]
  而 \(\ker(A|_{V})\subseteq\ker A\)，故 \(\dim\ker(A|_{V})\le n-\operatorname{rank}A\)。于是
  \[
  \operatorname{rank}(AB)=\dim A(V)\ge\dim V-(n-\operatorname{rank}A)
  =\operatorname{rank}B+\operatorname{rank}A-n.
  \]` },

{ id:'LA10-04', ch:10, type:'计算', diff:4, tags:'幂零矩阵 逆矩阵',
  q: String.raw`设 \(A\) 为 \(n\) 阶方阵，且 \(A^{k}=0\)（\(k\) 为正整数）。证明 \(I-A\) 可逆，并求 \((I-A)^{-1}\)。`,
  a: String.raw`\((I-A)^{-1}=I+A+A^{2}+\cdots+A^{k-1}\)。`,
  sol: String.raw`直接计算：
  \[
  (I-A)(I+A+A^{2}+\cdots+A^{k-1})
  =I-A^{k}=I,
  \]
  同理 \((I+A+\cdots+A^{k-1})(I-A)=I\)。故 \(I-A\) 可逆，且
  \[
  (I-A)^{-1}=I+A+A^{2}+\cdots+A^{k-1}.
  \]` },

{ id:'LA10-05', ch:10, type:'证明', diff:4, tags:'幂零 行列式',
  q: String.raw`设 \(A\) 为 \(n\) 阶复方阵，且 \(A^{k}=0\)。证明 \(\det(I+A)=1\)。`,
  a: String.raw`\(A\) 的特征值全为 \(0\)，故 \(\det(I+A)=\prod(1+\lambda_i)=1\)。`,
  sol: String.raw`设 \(\lambda\) 是 \(A\) 的任一特征值，\(Ax=\lambda x\ (x\neq0)\)。则
  \[
  A^{k}x=\lambda^{k}x=0,
  \]
  故 \(\lambda^{k}=0\)，\(\lambda=0\)。因此 \(A\) 的 \(n\) 个特征值（计重数）全为 \(0\)。
  \(I+A\) 的特征值为 \(1+\lambda_i=1\)，于是
  \[
  \det(I+A)=\prod_{i=1}^{n}(1+\lambda_i)=1.
  \]` },

{ id:'LA10-06', ch:10, type:'证明', diff:5, tags:'AB与BA 非零特征值',
  q: String.raw`设 \(A\) 为 \(m\times n\) 复矩阵，\(B\) 为 \(n\times m\) 复矩阵。证明 \(AB\) 与 \(BA\) 的非零特征值（计重数）完全相同。`,
  a: String.raw`由分块行列式恒等式 \(\lambda^{n}\det(\lambda I_m-AB)=\lambda^{m}\det(\lambda I_n-BA)\) 推出。`,
  sol: String.raw`考虑 \((m+n)\times(m+n)\) 分块矩阵
  \[
  M=\begin{pmatrix}\lambda I_m&A\\ B&I_n\end{pmatrix}.
  \]
  按第一行块消元：
  \[
  \det M=\det(\lambda I_m)\det\bigl(I_n-B(\lambda I_m)^{-1}A\bigr)
  =\lambda^{m}\det\left(I_n-\frac{BA}{\lambda}\right)
  =\lambda^{m-n}\det(\lambda I_n-BA).
  \]
  按第二列块消元：
  \[
  \det M=\det(I_n)\det(\lambda I_m-AB)=\det(\lambda I_m-AB).
  \]
  故
  \[
  \lambda^{n}\det(\lambda I_m-AB)=\lambda^{m}\det(\lambda I_n-BA).
  \]
  两边都是关于 \(\lambda\) 的多项式，约去 \(\lambda\) 的幂后可知：除 \(\lambda=0\) 外，两个特征多项式的根及重数相同，即非零特征值完全一致。` },

{ id:'LA10-07', ch:10, type:'证明', diff:4, tags:'实对称 幂零 特征值',
  q: String.raw`设 \(A\) 为 \(n\) 阶实对称矩阵，且 \(A^{3}+A=0\)。证明 \(A=0\)。`,
  a: String.raw`实对称矩阵可正交对角化，特征值满足 \(\lambda^{3}+\lambda=0\)，只能 \(\lambda=0\)。`,
  sol: String.raw`实对称矩阵可正交对角化，设
  \[
  A=Q\operatorname{diag}(\lambda_1,\dots,\lambda_n)Q^{T}.
  \]
  由 \(A^{3}+A=0\) 得 \(\lambda_i^{3}+\lambda_i=0\)，即
  \[
  \lambda_i(\lambda_i^{2}+1)=0.
  \]
  因 \(\lambda_i\in\mathbb{R}\)，\(\lambda_i^{2}+1>0\)，故 \(\lambda_i=0\)。于是 \(A=Q\cdot0\cdot Q^{T}=0\)。` },

{ id:'LA10-08', ch:10, type:'证明', diff:4, tags:'正定矩阵 行列式不等式',
  q: String.raw`设 \(A\) 为 \(n\) 阶正定矩阵。证明 \(A+I\) 正定，且 \(\det(A+I)>1\)。`,
  a: String.raw`特征值 \(\lambda_i>0\)，故 \(\lambda_i+1>1\)，乘积大于 \(1\)。`,
  sol: String.raw`\(A\) 正定，故存在正交矩阵 \(Q\) 使
  \[
  A=Q\operatorname{diag}(\lambda_1,\dots,\lambda_n)Q^{T},\qquad \lambda_i>0.
  \]
  于是
  \[
  A+I=Q\operatorname{diag}(\lambda_1+1,\dots,\lambda_n+1)Q^{T}.
  \]
  其特征值 \(\lambda_i+1>1>0\)，故 \(A+I\) 正定。并且
  \[
  \det(A+I)=\prod_{i=1}^{n}(\lambda_i+1)>1^{n}=1.
  \]` },

{ id:'LA10-09', ch:10, type:'证明', diff:4, tags:'实对称 秩 非零特征值',
  q: String.raw`设 \(A\) 为 \(n\) 阶实对称矩阵。证明 \(\operatorname{rank}A\) 等于 \(A\) 的非零特征值的个数（计重数）。`,
  a: String.raw`正交对角化后，秩等于对角矩阵中非零元的个数。`,
  sol: String.raw`由谱定理，存在正交矩阵 \(Q\) 使
  \[
  A=Q\Lambda Q^{T},\qquad \Lambda=\operatorname{diag}(\lambda_1,\dots,\lambda_n).
  \]
  正交矩阵可逆，左乘右乘可逆矩阵不改变秩，故
  \[
  \operatorname{rank}A=\operatorname{rank}\Lambda.
  \]
  对角矩阵的秩等于其对角线上非零元素的个数，即非零特征值的个数（计重数）。` },

{ id:'LA10-10', ch:10, type:'证明', diff:4, tags:'秩 A^TA',
  q: String.raw`设 \(A\) 为 \(m\times n\) 实矩阵。证明 \(\operatorname{rank}(A^{T}A)=\operatorname{rank}A\)。`,
  a: String.raw`证明 \(\ker(A^{T}A)=\ker A\)，再用秩-零化度定理。`,
  sol: String.raw`显然 \(\ker A\subseteq\ker(A^{T}A)\)。反之，若 \(A^{T}Ax=0\)，左乘 \(x^{T}\)：
  \[
  x^{T}A^{T}Ax=(Ax)^{T}(Ax)=\|Ax\|^{2}=0,
  \]
  故 \(Ax=0\)，即 \(x\in\ker A\)。因此 \(\ker(A^{T}A)=\ker A\)，两者的零化度相等。由秩-零化度定理，
  \[
  \operatorname{rank}(A^{T}A)=n-\dim\ker(A^{T}A)=n-\dim\ker A=\operatorname{rank}A.
  \]` },

{ id:'LA10-11', ch:10, type:'证明', diff:5, tags:'Hadamard不等式 行列式',
  q: String.raw`设 \(A=(a_1,a_2,\dots,a_n)\) 为 \(n\) 阶实矩阵，其中 \(a_j\) 为列向量。证明 Hadamard 不等式
  \[
  |\det A|\le\prod_{j=1}^{n}\|a_j\|.
  \]`,
  a: String.raw`对列向量作 Gram-Schmidt，\(A=QR\)，则 \(|\det A|=\prod|r_{jj}|\le\prod\|a_j\|\)。`,
  sol: String.raw`若 \(a_1,\dots,a_n\) 线性相关，则 \(\det A=0\)，不等式显然成立。否则对列向量作 Gram-Schmidt 正交化，得 \(A=QR\)，其中 \(Q\) 是正交矩阵，\(R=(r_{ij})\) 是上三角矩阵，且
  \[
  a_j=\sum_{i=1}^{j}r_{ij}q_i,\qquad r_{jj}=q_j^{T}a_j.
  \]
  于是 \(|r_{jj}|=|q_j^{T}a_j|\le\|q_j\|\,\|a_j\|=\|a_j\|\)（Cauchy-Schwarz，\(\|q_j\|=1\)）。又
  \[
  |\det A|=|\det Q|\,|\det R|=\prod_{j=1}^{n}|r_{jj}|,
  \]
  故 \(|\det A|\le\prod_{j=1}^{n}\|a_j\|\)。` },

{ id:'LA10-12', ch:10, type:'证明', diff:5, tags:'正定矩阵 乘积特征值',
  q: String.raw`设 \(A,B\) 均为 \(n\) 阶正定矩阵。证明 \(AB\) 的特征值全为正实数。`,
  a: String.raw`\(AB\) 相似于正定矩阵 \(B^{1/2}AB^{1/2}\)。`,
  sol: String.raw`\(B\) 正定，故存在正定矩阵 \(B^{1/2}\)，且
  \[
  AB=B^{-1/2}\bigl(B^{1/2}AB^{1/2}\bigr)B^{1/2}.
  \]
  因此 \(AB\) 与 \(C=B^{1/2}AB^{1/2}\) 相似，特征值相同。而 \(C\) 是正定矩阵：对任意 \(x\neq0\)，令 \(y=B^{1/2}x\neq0\)，则
  \[
  x^{T}Cx=x^{T}B^{1/2}AB^{1/2}x=y^{T}Ay>0.
  \]
  正定矩阵的特征值全为正实数，故 \(AB\) 的特征值全为正实数。` },

{ id:'LA10-13', ch:10, type:'证明', diff:5, tags:'伴随矩阵 秩',
  q: String.raw`设 \(A\) 为 \(n\) 阶方阵（\(n\ge2\)），\(A^{*}\) 为其伴随矩阵。证明
  \[
  \operatorname{rank}A^{*}=
  \begin{cases}
  n,&\operatorname{rank}A=n,\\
  1,&\operatorname{rank}A=n-1,\\
  0,&\operatorname{rank}A\le n-2.
  \end{cases}
  \]`,
  a: String.raw`利用 \(AA^{*}=\det(A)I\) 与秩不等式，分三种情况讨论。`,
  sol: String.raw`由伴随矩阵的基本关系
  \[
  AA^{*}=\det(A)I.
  \]
  （1）若 \(\operatorname{rank}A=n\)，则 \(A\) 可逆，\(A^{*}=\det(A)A^{-1}\) 也可逆，故 \(\operatorname{rank}A^{*}=n\)。
  （2）若 \(\operatorname{rank}A=n-1\)，则 \(\det A=0\)，故 \(AA^{*}=0\)，从而 \(\operatorname{rank}A+\operatorname{rank}A^{*}\le n\)，即 \(\operatorname{rank}A^{*}\le1\)。另一方面，\(\operatorname{rank}A=n-1\) 说明 \(A\) 至少有一个 \(n-1\) 阶子式非零，即 \(A^{*}\neq0\)，故 \(\operatorname{rank}A^{*}\ge1\)。因此 \(\operatorname{rank}A^{*}=1\)。
  （3）若 \(\operatorname{rank}A\le n-2\)，则 \(A\) 的所有 \(n-1\) 阶子式全为 \(0\)，故 \(A^{*}=0\)，\(\operatorname{rank}A^{*}=0\)。` },

{ id:'LA10-14', ch:10, type:'证明', diff:4, tags:'幂等矩阵 迹',
  q: String.raw`设 \(A\) 为 \(n\) 阶方阵，\(A^{2}=A\)。证明 \(\operatorname{tr}A=\operatorname{rank}A\)。`,
  a: String.raw`\(A\) 可对角化，特征值只能是 \(0,1\)；秩等于特征值 \(1\) 的个数，也等于迹。`,
  sol: String.raw`由 \(A^{2}=A\) 知 \(A\) 的最小多项式整除 \(\lambda^{2}-\lambda=\lambda(\lambda-1)\)，无重根，故 \(A\) 可对角化，且特征值只能是 \(0\) 或 \(1\)。
  设 \(\operatorname{rank}A=r\)。对角化后 \(A\sim\operatorname{diag}(1,\dots,1,0,\dots,0)\)（\(r\) 个 \(1\)），故
  \[
  \operatorname{tr}A=r=\operatorname{rank}A.
  \]` },

{ id:'LA10-15', ch:10, type:'证明', diff:5, tags:'Sylvester判据 正定',
  q: String.raw`设 \(A\) 为 \(n\) 阶实对称矩阵。证明：\(A\) 正定当且仅当 \(A\) 的所有顺序主子式全大于 \(0\)。`,
  a: String.raw`必要性显然；充分性对阶数归纳，用分块合同变换消去非对角块。`,
  sol: String.raw`必要性：若 \(A\) 正定，则任一主子矩阵 \(A_{S}\) 正定（对 \(y\neq0\)，把 \(y\) 嵌入 \(\mathbb{R}^{n}\) 的相应分量得 \(y^{T}A_{S}y>0\)），故其行列式大于 \(0\)。顺序主子式是特殊的主子式，故全大于 \(0\)。
  充分性：对 \(n\) 归纳。\(n=1\) 显然。设 \(A=\begin{pmatrix}A_{n-1}&b\\ b^{T}&a\end{pmatrix}\)，由归纳假设 \(A_{n-1}\) 正定，故 \(A_{n-1}\) 可逆。作合同变换
  \[
  P=\begin{pmatrix}I&-A_{n-1}^{-1}b\\0&1\end{pmatrix},\qquad
  P^{T}AP=\begin{pmatrix}A_{n-1}&0\\0&a-b^{T}A_{n-1}^{-1}b\end{pmatrix}.
  \]
  合同变换保持正定性，故 \(A\) 正定当且仅当右下角元素
  \[
  a-b^{T}A_{n-1}^{-1}b=\frac{\det A}{\det A_{n-1}}>0,
  \]
  而 \(\det A>0,\ \det A_{n-1}>0\)，故成立。` },

{ id:'LA10-16', ch:10, type:'证明', diff:4, tags:'AA^T A^TA 非零特征值',
  q: String.raw`设 \(A\) 为 \(m\times n\) 实矩阵。证明 \(AA^{T}\) 与 \(A^{T}A\) 的非零特征值（计重数）相同。`,
  a: String.raw`用分块行列式恒等式，或注意两者都是 \(A\) 的奇异值的平方。`,
  sol: String.raw`对任意 \(\lambda\)，考虑分块矩阵
  \[
  M=\begin{pmatrix}\lambda I_m&A\\ A^{T}&I_n\end{pmatrix}.
  \]
  按不同方式消元可得
  \[
  \lambda^{n}\det(\lambda I_m-AA^{T})=\lambda^{m}\det(\lambda I_n-A^{T}A).
  \]
  因此两个特征多项式除 \(\lambda=0\) 的因子外完全相同，非零特征值及其重数一致。
  （等价说法：\(AA^{T}\) 与 \(A^{T}A\) 的非零特征值都是 \(A\) 的非零奇异值的平方。）` },

{ id:'LA10-17', ch:10, type:'证明', diff:5, tags:'Fitting分解 秩稳定 核与像',
  q: String.raw`设 \(A\) 为 \(n\) 阶复矩阵，记 \(\operatorname{Im}A^{k}\) 与 \(\ker A^{k}\) 分别为 \(A^{k}\) 的像与核。(1) 证明
  \[
  r(A^{n})=r(A^{n+1}).
  \]
  (2) 证明 \(\operatorname{Im}A^{n}\cap\ker A^{n}=\{0\}\)，并由此证明
  \[
  \mathbb{C}^{n}=\operatorname{Im}A^{n}\oplus\ker A^{n}.
  \]`,
  a: String.raw`(1) 秩列稳定；(2) \(A^{n}\) 在 \(\operatorname{Im}A^{n}\) 上可逆，故交为零，再由维数公式得直和。`,
  sol: String.raw`(1) 记 \(r_{k}=r(A^{k})\)。由于 \(\operatorname{Im}A^{k+1}=A(\operatorname{Im}A^{k})\)，有 \(r_{k+1}\le r_{k}\)，即
  \[
  n=r_{0}\ge r_{1}\ge\cdots\ge r_{n}\ge r_{n+1}\ge0.
  \]
  若对每个 \(k=0,1,\dots,n\) 都有 \(r_{k}>r_{k+1}\)，则这 \(n+2\) 个非负整数严格递减，从 \(r_{0}=n\) 起每一步至少减 \(1\)，得到 \(r_{n+1}\le n-(n+1)=-1\)，矛盾。故存在 \(k\le n\) 使 \(r_{k}=r_{k+1}\)。

  一旦 \(r_{k}=r_{k+1}\)，则 \(A\) 限制在 \(\operatorname{Im}A^{k}\) 上单射：若 \(Ax=0\) 且 \(x\in\operatorname{Im}A^{k}\)，则 \(x\in\ker A\cap\operatorname{Im}A^{k}\)，于是
  \[
  \dim\bigl(\ker A\cap\operatorname{Im}A^{k}\bigr)
  =\dim\operatorname{Im}A^{k}-\dim\operatorname{Im}A^{k+1}=0,
  \]
  故 \(x=0\)。单射的线性映射把基映为基，维数不变，故 \(\operatorname{Im}A^{k+1}=\operatorname{Im}A^{k}\)，且归纳得对一切 \(j\ge k\) 有 \(\operatorname{Im}A^{j}=\operatorname{Im}A^{k}\)。取 \(j=n\) 即得 \(r_{n}=r_{n+1}\)。

  (2) 由 (1) 及上述稳定性，\(\operatorname{Im}A^{2n}=\operatorname{Im}A^{n}\)。设 \(x\in\operatorname{Im}A^{n}\cap\ker A^{n}\)，则存在 \(y\) 使 \(x=A^{n}y\)，且
  \[
  A^{n}x=A^{2n}y=0.
  \]
  但 \(A^{n}\) 限制在 \(\operatorname{Im}A^{n}\) 上是满射（像为 \(\operatorname{Im}A^{2n}=\operatorname{Im}A^{n}\)），维数相同，故是同构，特别地单射。由 \(A^{n}x=0\) 与 \(x\in\operatorname{Im}A^{n}\) 得 \(x=0\)。于是
  \[
  \operatorname{Im}A^{n}\cap\ker A^{n}=\{0\}.
  \]
  又由秩–零化度定理，
  \[
  \dim\operatorname{Im}A^{n}+\dim\ker A^{n}=n,
  \]
  两子空间交为零且维数之和为 \(n\)，故 \(\mathbb{C}^{n}=\operatorname{Im}A^{n}\oplus\ker A^{n}\)。` },

{ id:'LA10-18', ch:10, type:'证明', diff:5, tags:'可交换矩阵 公共特征向量',
  q: String.raw`设 \(A,B\) 为 \(n\) 阶复矩阵，且 \(AB=BA\)。证明 \(A\) 与 \(B\) 有公共特征向量。`,
  a: String.raw`取 \(B\) 的特征子空间 \(V_{\lambda}\)，它关于 \(A\) 不变；在 \(V_{\lambda}\) 上取 \(A\) 的特征向量。`,
  sol: String.raw`在复数域上，\(B\) 必有特征值 \(\lambda\)，其特征子空间
  \[
  V_{\lambda}=\ker(B-\lambda I)\neq\{0\}.
  \]
  对任意 \(x\in V_{\lambda}\)，
  \[
  B(Ax)=A(Bx)=A(\lambda x)=\lambda Ax,
  \]
  故 \(Ax\in V_{\lambda}\)，即 \(V_{\lambda}\) 是 \(A\) 的不变子空间。把 \(A\) 限制在 \(V_{\lambda}\) 上，它仍是复线性变换，故有特征向量 \(x_0\in V_{\lambda}\)，即 \(Ax_0=\mu x_0\)。又 \(x_0\in V_{\lambda}\) 给出 \(Bx_0=\lambda x_0\)。因此 \(x_0\) 是 \(A,B\) 的公共特征向量。` },

{ id:'LA10-19', ch:10, type:'证明', diff:5, tags:'A^3=A 可对角化 最小多项式',
  q: String.raw`设 \(A\) 为 \(n\) 阶复矩阵，且 \(A^{3}=A\)。证明 \(A\) 可对角化。`,
  a: String.raw`最小多项式整除 \(x(x-1)(x+1)\)，无重根；或直接证明 \(V=\ker A\oplus\ker(A-I)\oplus\ker(A+I)\)。`,
  sol: String.raw`由 \(A^{3}=A\) 知 \(A\) 的最小多项式整除
  \[
  x^{3}-x=x(x-1)(x+1),
  \]
  该多项式无重根，故 \(A\) 可对角化。
  也可直接验证：由恒等式
  \[
  1=(1-x^{2})+\frac{x(x+1)}{2}+\frac{x(x-1)}{2},
  \]
  对任意向量 \(v\)，
  \[
  v=(I-A^{2})v+\frac{A(A+I)}{2}v+\frac{A(A-I)}{2}v.
  \]
  第一项属于 \(\ker A\)（因为 \(A(I-A^{2})=A-A^{3}=0\)）；第二项属于 \(\ker(A-I)\)（因为 \((A-I)A(A+I)=A(A^{2}-I)=0\)）；第三项属于 \(\ker(A+I)\)（因为 \((A+I)A(A-I)=A(A^{2}-I)=0\)）。故
  \[
  V=\ker A+\ker(A-I)+\ker(A+I),
  \]
  且三个子空间两两交集为 \(\{0\}\)（不同特征值的特征子空间线性无关），故为直和。取各子空间的基合并，即得 \(V\) 的特征向量基，\(A\) 可对角化。` },

{ id:'LA10-20', ch:10, type:'证明', diff:4, tags:'正定 主子式',
  q: String.raw`设 \(A\) 为 \(n\) 阶正定矩阵。证明 \(A\) 的任意主子式都大于 \(0\)。`,
  a: String.raw`主子矩阵正定，故其行列式大于 \(0\)。`,
  sol: String.raw`任取行指标集 \(S\subseteq\{1,\dots,n\}\)，设 \(A_{S}\) 为对应的主子矩阵。对任意非零向量 \(y\in\mathbb{R}^{|S|}\)，构造 \(x\in\mathbb{R}^{n}\)：在 \(S\) 对应位置取 \(y\) 的分量，其余位置取 \(0\)。则 \(x\neq0\)，且
  \[
  x^{T}Ax=y^{T}A_{S}y.
  \]
  由 \(A\) 正定，\(x^{T}Ax>0\)，故 \(y^{T}A_{S}y>0\) 对任意 \(y\neq0\) 成立，即 \(A_{S}\) 正定。正定矩阵的行列式等于其特征值之积，特征值全正，故 \(\det A_{S}>0\)。` }
);
