window.LBANK = window.LBANK || [];
window.LBANK.push(
{ id:'LA02-21', ch:2, type:'证明', diff:5, tags:'幂等矩阵 秩等式 迹',
  q: String.raw`设 \(A\) 为 \(n\) 阶矩阵，且 \(A^2=A\)。证明
  \[
  r(A)+r(I-A)=n,
  \]
  并证明 \(\operatorname{tr}(A)=r(A)\)。`,
  a: String.raw`\(r(A)+r(I-A)=n\)，且 \(\operatorname{tr}(A)=r(A)\)。`,
  sol: String.raw`第一步，由
  \[
  (I-A)A=0
  \]
  知 \(\operatorname{Im}A\subset\ker(I-A)\)，于是
  \[
  r(A)\le n-r(I-A),
  \]
  即 \(r(A)+r(I-A)\le n\)。

  第二步，由
  \[
  I=A+(I-A)
  \]
  得
  \[
  n=r(I)\le r(A)+r(I-A).
  \]
  两式合并即得
  \[
  r(A)+r(I-A)=n.
  \]

  第三步，\(A^2=A\) 说明 \(A\) 是多项式 \(\lambda(\lambda-1)\) 的零点，而该多项式无重根，故 \(A\) 可对角化，且相似于
  \[
  \operatorname{diag}(I_r,0),\qquad r=r(A).
  \]
  迹是相似不变量，所以
  \[
  \operatorname{tr}(A)=r.
  \]
  证毕。` },

{ id:'LA02-22', ch:2, type:'计算', diff:5, tags:'幂等矩阵 特征值 行列式',
  q: String.raw`设 \(A\) 为 \(n\) 阶矩阵，\(A^2=A\)，且 \(r(A)=r\)。求
  \[
  \det(2I-A),\qquad \det(A+I).
  \]`,
  a: String.raw`\(\det(2I-A)=2^{\,n-r}\)，\(\det(A+I)=2^{\,r}\)。`,
  sol: String.raw`由 \(A^2=A\) 知 \(A\) 的特征值只能是 \(0\) 或 \(1\)，且 \(A\) 可对角化，相似于
  \[
  \operatorname{diag}(I_r,0).
  \]
  故 \(A\) 的特征值为 \(1\)（\(r\) 重）与 \(0\)（\(n-r\) 重）。

  矩阵 \(2I-A\) 的特征值为
  \[
  \underbrace{1,\dots,1}_{r\text{ 个}},\qquad
  \underbrace{2,\dots,2}_{n-r\text{ 个}},
  \]
  因此
  \[
  \det(2I-A)=1^r\cdot2^{n-r}=2^{\,n-r}.
  \]

  矩阵 \(A+I\) 的特征值为
  \[
  \underbrace{2,\dots,2}_{r\text{ 个}},\qquad
  \underbrace{1,\dots,1}_{n-r\text{ 个}},
  \]
  因此
  \[
  \det(A+I)=2^r\cdot1^{n-r}=2^{\,r}.
  \]
  故答案为上述两式。` },

{ id:'LA02-23', ch:2, type:'计算', diff:5, tags:'对合矩阵 特征值 行列式',
  q: String.raw`设 \(A\) 为 5 阶实矩阵，满足 \(A^2=I\)，且 \(\operatorname{tr}(A)=1\)。求
  \[
  \det(A+I),\qquad \det(2I-A),\qquad \operatorname{tr}(A^2).
  \]`,
  a: String.raw`\(\det(A+I)=0\)，\(\det(2I-A)=9\)，\(\operatorname{tr}(A^2)=5\)。`,
  sol: String.raw`由 \(A^2=I\) 知 \(A\) 的特征值只能是 \(1\) 或 \(-1\)。设特征值 \(-1\) 的重数为 \(k\)，则特征值 \(1\) 的重数为 \(5-k\)。

  由
  \[
  \operatorname{tr}(A)=(5-k)-k=5-2k=1
  \]
  得 \(k=2\)。故特征值为 \(1,1,1,-1,-1\)。

  于是 \(A+I\) 的特征值为 \(2,2,2,0,0\)，从而
  \[
  \det(A+I)=2^3\cdot0^2=0.
  \]

  \(2I-A\) 的特征值为 \(1,1,1,3,3\)，故
  \[
  \det(2I-A)=1^3\cdot3^2=9.
  \]

  又 \(A^2=I\)，所以
  \[
  \operatorname{tr}(A^2)=\operatorname{tr}(I)=5.
  \]
  故答案为上述三值。` },

{ id:'LA02-24', ch:2, type:'证明', diff:5, tags:'幂零矩阵 逆矩阵 行列式',
  q: String.raw`设 \(n\) 阶矩阵 \(A\) 满足 \(A^n=0\)。证明 \(I-A\) 可逆，且
  \[
  (I-A)^{-1}=I+A+A^2+\cdots+A^{n-1},
  \]
  并求 \(\det(I-A)\)。`,
  a: String.raw`\((I-A)^{-1}=\sum_{k=0}^{n-1}A^k\)，\(\det(I-A)=1\)。`,
  sol: String.raw`直接计算
  \[
  (I-A)(I+A+A^2+\cdots+A^{n-1})
  =I-A^n=I.
  \]

  同理
  \[
  (I+A+\cdots+A^{n-1})(I-A)=I-A^n=I.
  \]
  故 \(I-A\) 可逆，且
  \[
  (I-A)^{-1}=I+A+A^2+\cdots+A^{n-1}.
  \]

  对 \((I-A)(I+A+\cdots+A^{n-1})=I\) 两边取行列式：
  \[
  \det(I-A)\det(I+A+\cdots+A^{n-1})=1.
  \]
  两个因子都是实数（或复数）且乘积为 \(1\)，但更直接地，\(I-A\) 的特征值全为 \(1\)（因 \(A\) 的特征值全为 \(0\)），故
  \[
  \det(I-A)=1.
  \]
  证毕。` },

{ id:'LA02-25', ch:2, type:'证明', diff:5, tags:'幂零矩阵 特征值 迹',
  q: String.raw`设 \(A\) 为 \(n\) 阶复矩阵，且存在正整数 \(k\) 使 \(A^k=0\)。证明 \(A\) 的全部特征值都是 \(0\)，并且对任意正整数 \(j\) 有
  \[
  \operatorname{tr}(A^j)=0.
  \]`,
  a: String.raw`\(A\) 的特征值全为 \(0\)，且 \(\operatorname{tr}(A^j)=0\ (j\ge1)\)。`,
  sol: String.raw`设 \(\lambda\) 是 \(A\) 的任一特征值，\(x\ne0\) 为对应特征向量。由
  \[
  Ax=\lambda x
  \]
  反复作用得
  \[
  A^kx=\lambda^kx.
  \]
  又 \(A^k=0\)，故 \(\lambda^kx=0\)，从而
  \[
  \lambda^k=0,\qquad \lambda=0.
  \]
  即 \(A\) 的全部特征值为 \(0\)。

  对任意 \(j\ge1\)，\(A^j\) 的特征值为 \(\lambda^j=0\)，仍全为 \(0\)。

  矩阵的迹等于全部特征值之和（按代数重数计），故
  \[
  \operatorname{tr}(A^j)=0.
  \]
  证毕。` },

{ id:'LA02-26', ch:2, type:'证明', diff:5, tags:'伴随矩阵 行列式 恒等式',
  q: String.raw`设 \(A\) 为 \(n\) 阶矩阵（\(n\ge2\)），\(A^*\) 为其伴随矩阵。证明
  \[
  \det(A^*)=(\det A)^{\,n-1},
  \]
  并证明当 \(A\) 可逆时
  \[
  (A^*)^*=(\det A)^{\,n-2}A.
  \]`,
  a: String.raw`两式均成立。`,
  sol: String.raw`由伴随矩阵的基本恒等式
  \[
  AA^*=(\det A)I
  \]
  两边取行列式，得
  \[
  \det A\cdot\det(A^*)=(\det A)^n.
  \]

  若 \(\det A\ne0\)，两边除以 \(\det A\)，得
  \[
  \det(A^*)=(\det A)^{\,n-1}.
  \]
  若 \(\det A=0\)：当 \(n\ge3\) 时 \(r(A)\le n-1\)，故 \(r(A^*)\le1<n\)，\(\det(A^*)=0\)；当 \(n=2\) 时直接验证 \(A^*=\begin{pmatrix}d&-b\\-c&a\end{pmatrix}\)，\(\det(A^*)=ad-bc=\det A=0\)。两种情形仍有 \(\det(A^*)=0\)。

  当 \(A\) 可逆时，\(A^*=(\det A)A^{-1}\)，于是
  \[
  (A^*)^*=\det(A^*)\,(A^*)^{-1}
  =(\det A)^{\,n-1}\cdot\frac{1}{\det A}A
  =(\det A)^{\,n-2}A.
  \]
  证毕。` },

{ id:'LA02-27', ch:2, type:'计算', diff:5, tags:'伴随矩阵 特征值 迹',
  q: String.raw`设 3 阶矩阵 \(A\) 的特征值为 \(1,2,3\)。求
  \[
  \operatorname{tr}(A^*),\qquad \det(A^*),\qquad \operatorname{tr}\bigl((A^*)^{-1}\bigr).
  \]`,
  a: String.raw`\(\operatorname{tr}(A^*)=11\)，\(\det(A^*)=36\)，\(\operatorname{tr}\bigl((A^*)^{-1}\bigr)=1\)。`,
  sol: String.raw`由特征值知
  \[
  \det A=1\cdot2\cdot3=6.
  \]
  又 \(A\) 可逆时 \(A^*=(\det A)A^{-1}=6A^{-1}\)，故 \(A^*\) 的特征值为
  \[
  \frac{6}{1},\ \frac{6}{2},\ \frac{6}{3},
  \]
  即 \(6,3,2\)。

  于是
  \[
  \operatorname{tr}(A^*)=6+3+2=11,\qquad
  \det(A^*)=6\cdot3\cdot2=36.
  \]

  又
  \[
  (A^*)^{-1}=\frac{1}{6}A,
  \]
  其特征值为 \(\dfrac16,\dfrac13,\dfrac12\)，故
  \[
  \operatorname{tr}\bigl((A^*)^{-1}\bigr)
  =\frac16+\frac13+\frac12=1.
  \]
  故答案为上述三值。` },

{ id:'LA02-28', ch:2, type:'计算', diff:5, tags:'分块矩阵 行列式 舒尔补',
  q: String.raw`设
  \[
  M=\begin{pmatrix}
  1&2&1&0\\
  0&1&1&1\\
  0&1&2&1\\
  1&0&1&2
  \end{pmatrix}.
  \]
  求 \(\det M\)。`,
  a: String.raw`\(\det M=4\)。`,
  sol: String.raw`将 \(M\) 写成 \(2\times2\) 分块矩阵
  \[
  M=\begin{pmatrix}A&B\\C&D\end{pmatrix},
  \]
  其中
  \[
  A=\begin{pmatrix}1&2\\0&1\end{pmatrix},\quad
  B=\begin{pmatrix}1&0\\1&1\end{pmatrix},\quad
  C=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad
  D=\begin{pmatrix}2&1\\1&2\end{pmatrix}.
  \]
  因 \(A\) 可逆，由舒尔补公式
  \[
  \det M=\det A\cdot\det(D-CA^{-1}B).
  \]

  计算
  \[
  A^{-1}=\begin{pmatrix}1&-2\\0&1\end{pmatrix},
  \qquad
  A^{-1}B=\begin{pmatrix}-1&-2\\1&1\end{pmatrix}.
  \]
  于是
  \[
  CA^{-1}B=
  \begin{pmatrix}0&1\\1&0\end{pmatrix}
  \begin{pmatrix}-1&-2\\1&1\end{pmatrix}
  =\begin{pmatrix}1&1\\-1&-2\end{pmatrix}.
  \]

  从而
  \[
  D-CA^{-1}B=
  \begin{pmatrix}2&1\\1&2\end{pmatrix}
  -\begin{pmatrix}1&1\\-1&-2\end{pmatrix}
  =\begin{pmatrix}1&0\\2&4\end{pmatrix}.
  \]
  所以
  \[
  \det M=1\cdot(1\cdot4-0\cdot2)=4.
  \]
  故答案为 \(4\)。` },

{ id:'LA02-29', ch:2, type:'计算', diff:5, tags:'分块矩阵 逆矩阵 反对角块',
  q: String.raw`设
  \[
  A=\begin{pmatrix}1&2\\3&4\end{pmatrix},\qquad
  B=\begin{pmatrix}2&1\\1&1\end{pmatrix},\qquad
  M=\begin{pmatrix}0&A\\B&0\end{pmatrix}.
  \]
  求 \(M^{-1}\)。`,
  a: String.raw`\[
  M^{-1}=\begin{pmatrix}
  0&0&1&-1\\
  0&0&-1&2\\
  -2&1&0&0\\
  \dfrac32&-\dfrac12&0&0
  \end{pmatrix}.
  \]`,
  sol: String.raw`由分块矩阵的逆公式
  \[
  \begin{pmatrix}0&A\\B&0\end{pmatrix}^{-1}
  =\begin{pmatrix}0&B^{-1}\\A^{-1}&0\end{pmatrix}.
  \]

  计算
  \[
  A^{-1}=\frac{1}{4-6}
  \begin{pmatrix}4&-2\\-3&1\end{pmatrix}
  =\begin{pmatrix}-2&1\\[2pt]\dfrac32&-\dfrac12\end{pmatrix},
  \]
  \[
  B^{-1}=\frac{1}{2-1}
  \begin{pmatrix}1&-1\\-1&2\end{pmatrix}
  =\begin{pmatrix}1&-1\\-1&2\end{pmatrix}.
  \]

  代入得
  \[
  M^{-1}=
  \begin{pmatrix}
  0&0&1&-1\\
  0&0&-1&2\\
  -2&1&0&0\\
  \dfrac32&-\dfrac12&0&0
  \end{pmatrix}.
  \]
  故答案为上述矩阵。` },

{ id:'LA02-30', ch:2, type:'计算', diff:5, tags:'矩阵方程 逆矩阵',
  q: String.raw`设
  \[
  A=\begin{pmatrix}1&2\\3&4\end{pmatrix},\qquad
  B=\begin{pmatrix}1&0\\1&2\end{pmatrix},\qquad
  C=\begin{pmatrix}1&0\\0&1\end{pmatrix}.
  \]
  解矩阵方程 \(AXB=C\)。`,
  a: String.raw`\[
  X=\begin{pmatrix}
  -\dfrac52&\dfrac12\\[4pt]
  \dfrac74&-\dfrac14
  \end{pmatrix}.
  \]`,
  sol: String.raw`由 \(A,B\) 均可逆，方程两边左乘 \(A^{-1}\)、右乘 \(B^{-1}\)，得
  \[
  X=A^{-1}CB^{-1}=A^{-1}B^{-1}.
  \]

  计算
  \[
  A^{-1}=\begin{pmatrix}-2&1\\[2pt]\dfrac32&-\dfrac12\end{pmatrix},
  \]
  \[
  B^{-1}=\frac12
  \begin{pmatrix}2&0\\-1&1\end{pmatrix}
  =\begin{pmatrix}1&0\\[2pt]-\dfrac12&\dfrac12\end{pmatrix}.
  \]

  于是
  \[
  X=
  \begin{pmatrix}-2&1\\[2pt]\dfrac32&-\dfrac12\end{pmatrix}
  \begin{pmatrix}1&0\\[2pt]-\dfrac12&\dfrac12\end{pmatrix}
  =
  \begin{pmatrix}
  -\dfrac52&\dfrac12\\[4pt]
  \dfrac74&-\dfrac14
  \end{pmatrix}.
  \]
  故答案为上述矩阵。` },

{ id:'LA02-31', ch:2, type:'证明', diff:5, tags:'Sylvester方程 特征值 存在唯一性',
  q: String.raw`设 \(A\) 为 \(m\) 阶矩阵，\(B\) 为 \(n\) 阶矩阵。证明矩阵方程
  \[
  AX-XB=C
  \]
  对任意 \(m\times n\) 矩阵 \(C\) 都有唯一解，当且仅当 \(A\) 与 \(B\) 没有公共特征值。`,
  a: String.raw`方程对任意 \(C\) 有唯一解 \(\iff\sigma(A)\cap\sigma(B)=\varnothing\)。`,
  sol: String.raw`将矩阵按列拉直，记 \(\operatorname{vec}(X)\) 为把 \(X\) 的列依次摞成的列向量。由恒等式
  \[
  \operatorname{vec}(AX)=(I_n\otimes A)\operatorname{vec}(X),
  \]
  \[
  \operatorname{vec}(XB)=(B^T\otimes I_m)\operatorname{vec}(X),
  \]
  原方程等价于线性方程组
  \[
  \bigl(I_n\otimes A-B^T\otimes I_m\bigr)\operatorname{vec}(X)
  =\operatorname{vec}(C).
  \]

  系数矩阵 \(I_n\otimes A-B^T\otimes I_m\) 的特征值为
  \[
  \lambda_i(A)-\mu_j(B)\qquad(1\le i\le m,\ 1\le j\le n).
  \]

  因此该系数矩阵可逆，当且仅当所有 \(\lambda_i(A)-\mu_j(B)\ne0\)，即
  \[
  \sigma(A)\cap\sigma(B)=\varnothing.
  \]
  系数矩阵可逆时对任意 \(\operatorname{vec}(C)\) 有唯一解；不可逆时取适当的 \(C\) 便无解或有无穷多解。

  故方程对任意 \(C\) 有唯一解的充要条件是 \(A,B\) 没有公共特征值。证毕。` },

{ id:'LA02-32', ch:2, type:'证明', diff:5, tags:'秩不等式 零空间 乘积为零',
  q: String.raw`设 \(A\) 为 \(m\times n\) 矩阵，\(B\) 为 \(n\times s\) 矩阵，且 \(AB=0\)。证明
  \[
  r(A)+r(B)\le n.
  \]`,
  a: String.raw`\(r(A)+r(B)\le n\)。`,
  sol: String.raw`对任意 \(x\in\mathbb R^s\)，由 \(AB=0\) 得
  \[
  A(Bx)=0,
  \]
  即
  \[
  \operatorname{Im}B\subset\ker A.
  \]

  于是
  \[
  r(B)=\dim\operatorname{Im}B\le\dim\ker A=n-r(A).
  \]

  移项即得
  \[
  r(A)+r(B)\le n.
  \]
  证毕。` },

{ id:'LA02-33', ch:2, type:'证明', diff:5, tags:'Frobenius秩不等式 分块矩阵',
  q: String.raw`设 \(A\) 为 \(m\times n\) 矩阵，\(B\) 为 \(n\times p\) 矩阵，\(C\) 为 \(p\times q\) 矩阵。证明 Frobenius 秩不等式
  \[
  r(ABC)\ge r(AB)+r(BC)-r(B).
  \]`,
  a: String.raw`不等式成立。`,
  sol: String.raw`记 \(W=\operatorname{Im}(BC)\subset\operatorname{Im}B\)。考虑 \(AB\) 在 \(W\) 上的限制。设
  \[
  K=\ker(AB)\cap\operatorname{Im}B.
  \]
  由秩－零化度定理，
  \[
  \dim K=r(B)-r(AB).
  \]

  又 \(AB\) 把 \(W\) 映到 \(\operatorname{Im}(ABC)\)，其核为 \(K\cap W\)，故
  \[
  \dim\operatorname{Im}(ABC)
  \ge\dim W-\dim K.
  \]

  代入 \(\dim W=r(BC)\) 与 \(\dim K=r(B)-r(AB)\)，得
  \[
  r(ABC)\ge r(BC)-\bigl(r(B)-r(AB)\bigr)
  =r(AB)+r(BC)-r(B).
  \]
  证毕。` },

{ id:'LA02-34', ch:2, type:'证明', diff:5, tags:'秩等式 分块矩阵 单位阵扰动',
  q: String.raw`设 \(A\) 为 \(m\times n\) 矩阵，\(B\) 为 \(n\times m\) 矩阵。证明
  \[
  r(I_m-AB)-r(I_n-BA)=m-n.
  \]`,
  a: String.raw`等式成立。`,
  sol: String.raw`考虑 \((m+n)\) 阶分块矩阵
  \[
  N=\begin{pmatrix}I_m&A\\B&I_n\end{pmatrix}.
  \]
  用可逆的分块初等矩阵左乘 \(N\)。先计算
  \[
  \begin{pmatrix}I_m&-A\\0&I_n\end{pmatrix}N
  =\begin{pmatrix}I_m-AB&0\\B&I_n\end{pmatrix},
  \]
  故
  \[
  r(N)=r(I_m-AB)+n.
  \]

  再计算
  \[
  \begin{pmatrix}I_m&0\\-B&I_n\end{pmatrix}N
  =\begin{pmatrix}I_m&A\\0&I_n-BA\end{pmatrix},
  \]
  故
  \[
  r(N)=m+r(I_n-BA).
  \]

  两种算法得到同一个 \(r(N)\)，于是
  \[
  r(I_m-AB)+n=m+r(I_n-BA),
  \]
  即
  \[
  r(I_m-AB)-r(I_n-BA)=m-n.
  \]
  证毕。` },

{ id:'LA02-35', ch:2, type:'计算', diff:5, tags:'矩阵行列式引理 秩一扰动',
  q: String.raw`设
  \[
  A=\operatorname{diag}(1,2,3),\qquad
  u=\begin{pmatrix}1\\1\\1\end{pmatrix},\qquad
  v=\begin{pmatrix}2\\-1\\3\end{pmatrix}.
  \]
  求 \(\det(A+uv^T)\)。`,
  a: String.raw`\(\det(A+uv^T)=21\)。`,
  sol: String.raw`由矩阵行列式引理
  \[
  \det(A+uv^T)=\det A\cdot\bigl(1+v^TA^{-1}u\bigr).
  \]

  这里
  \[
  \det A=6,\qquad
  A^{-1}=\operatorname{diag}\left(1,\frac12,\frac13\right).
  \]

  计算
  \[
  v^TA^{-1}u
  =2\cdot1+(-1)\cdot\frac12+3\cdot\frac13
  =2-\frac12+1=\frac52.
  \]

  因此
  \[
  \det(A+uv^T)=6\left(1+\frac52\right)
  =6\cdot\frac72=21.
  \]
  故答案为 \(21\)。` },

{ id:'LA02-36', ch:2, type:'计算', diff:5, tags:'Woodbury公式 分块逆 秩扰动',
  q: String.raw`设
  \[
  A=I_3,\qquad
  U=\begin{pmatrix}1&0\\0&1\\1&1\end{pmatrix},\qquad
  C=\begin{pmatrix}2&0\\0&3\end{pmatrix},\qquad
  V=\begin{pmatrix}1&0&1\\0&1&1\end{pmatrix}.
  \]
  求 \((A+UCV)^{-1}\)。`,
  a: String.raw`\[
  (A+UCV)^{-1}
  =\frac{1}{29}
  \begin{pmatrix}
  15&6&-8\\
  6&14&-9\\
  -8&-9&12
  \end{pmatrix}.
  \]`,
  sol: String.raw`由 Woodbury 公式
  \[
  (A+UCV)^{-1}
  =A^{-1}-A^{-1}U\bigl(C^{-1}+VA^{-1}U\bigr)^{-1}VA^{-1}.
  \]
  这里 \(A^{-1}=I_3\)，故只需计算
  \[
  C^{-1}+VU
  =
  \begin{pmatrix}\dfrac12&0\\[2pt]0&\dfrac13\end{pmatrix}
  +
  \begin{pmatrix}2&1\\1&2\end{pmatrix}
  =
  \begin{pmatrix}\dfrac52&1\\[2pt]1&\dfrac73\end{pmatrix}.
  \]

  其行列式为
  \[
  \frac52\cdot\frac73-1=\frac{29}{6},
  \]
  故
  \[
  \bigl(C^{-1}+VU\bigr)^{-1}
  =\frac{1}{29}
  \begin{pmatrix}14&-6\\-6&15\end{pmatrix}.
  \]

  再算
  \[
  U\bigl(C^{-1}+VU\bigr)^{-1}V
  =\frac{1}{29}
  \begin{pmatrix}
  14&-6&8\\
  -6&15&9\\
  8&9&17
  \end{pmatrix}.
  \]

  于是
  \[
  (A+UCV)^{-1}
  =I_3-\frac{1}{29}
  \begin{pmatrix}
  14&-6&8\\
  -6&15&9\\
  8&9&17
  \end{pmatrix}
  =\frac{1}{29}
  \begin{pmatrix}
  15&6&-8\\
  6&14&-9\\
  -8&-9&12
  \end{pmatrix}.
  \]
  故答案为上述矩阵。` },

{ id:'LA02-37', ch:2, type:'证明', diff:5, tags:'Kronecker积 特征值 迹 行列式',
  q: String.raw`设 \(A\) 为 \(m\) 阶矩阵，\(B\) 为 \(n\) 阶矩阵。若 \(Ax=\lambda x\)，\(By=\mu y\)，证明
  \[
  (A\otimes B)(x\otimes y)=\lambda\mu\,(x\otimes y),
  \]
  并由此证明
  \[
  \operatorname{tr}(A\otimes B)=\operatorname{tr}A\cdot\operatorname{tr}B,
  \qquad
  \det(A\otimes B)=(\det A)^n(\det B)^m.
  \]`,
  a: String.raw`两式均成立。`,
  sol: String.raw`按 Kronecker 积的定义，
  \[
  (A\otimes B)(x\otimes y)=Ax\otimes By
  =\lambda x\otimes\mu y
  =\lambda\mu\,(x\otimes y).
  \]

  取 \(A\) 的特征向量 \(x_i\)（特征值 \(\lambda_i\)）与 \(B\) 的特征向量 \(y_j\)（特征值 \(\mu_j\)），则 \(x_i\otimes y_j\) 构成 \(\mathbb C^{mn}\) 的一组基，且是 \(A\otimes B\) 的特征向量，特征值为 \(\lambda_i\mu_j\)。

  于是
  \[
  \operatorname{tr}(A\otimes B)
  =\sum_{i=1}^{m}\sum_{j=1}^{n}\lambda_i\mu_j
  =\left(\sum_i\lambda_i\right)\left(\sum_j\mu_j\right)
  =\operatorname{tr}A\cdot\operatorname{tr}B.
  \]

  又
  \[
  \det(A\otimes B)
  =\prod_{i=1}^{m}\prod_{j=1}^{n}\lambda_i\mu_j
  =\left(\prod_i\lambda_i\right)^n
  \left(\prod_j\mu_j\right)^m
  =(\det A)^n(\det B)^m.
  \]
  证毕。` },

{ id:'LA02-38', ch:2, type:'计算', diff:5, tags:'Kronecker积 行列式',
  q: String.raw`设
  \[
  A=\begin{pmatrix}1&2\\3&4\end{pmatrix},\qquad
  B=\begin{pmatrix}0&1\\1&0\end{pmatrix}.
  \]
  求 \(A\otimes B\) 与 \(\det(A\otimes B)\)。`,
  a: String.raw`\[
  A\otimes B=
  \begin{pmatrix}
  0&1&0&2\\
  1&0&2&0\\
  0&3&0&4\\
  3&0&4&0
  \end{pmatrix},\qquad
  \det(A\otimes B)=4.
  \]`,
  sol: String.raw`按分块 Kroncker 积的定义，
  \[
  A\otimes B=
  \begin{pmatrix}
  a_{11}B&a_{12}B\\
  a_{21}B&a_{22}B
  \end{pmatrix}
  =
  \begin{pmatrix}
  0&1&0&2\\
  1&0&2&0\\
  0&3&0&4\\
  3&0&4&0
  \end{pmatrix}.
  \]

  由特征值公式，\(\det(A\otimes B)=(\det A)^2(\det B)^2\)。

  这里
  \[
  \det A=1\cdot4-2\cdot3=-2,\qquad
  \det B=0\cdot0-1\cdot1=-1.
  \]
  故
  \[
  \det(A\otimes B)=(-2)^2(-1)^2=4.
  \]
  故答案为上述矩阵与 \(4\)。` },

{ id:'LA02-39', ch:2, type:'计算', diff:5, tags:'矩阵指数 幂零矩阵 矩阵函数',
  q: String.raw`设
  \[
  A=\begin{pmatrix}
  0&1&0\\
  0&0&1\\
  0&0&0
  \end{pmatrix}.
  \]
  求 \(e^A\)。`,
  a: String.raw`\[
  e^A=
  \begin{pmatrix}
  1&1&\dfrac12\\[4pt]
  0&1&1\\[4pt]
  0&0&1
  \end{pmatrix}.
  \]`,
  sol: String.raw`先计算幂：
  \[
  A^2=
  \begin{pmatrix}
  0&0&1\\
  0&0&0\\
  0&0&0
  \end{pmatrix},
  \qquad
  A^3=0.
  \]

  由矩阵指数的定义
  \[
  e^A=\sum_{k=0}^{\infty}\frac{A^k}{k!},
  \]
  因 \(A^3=0\)，级数只有前三项：
  \[
  e^A=I+A+\frac{A^2}{2}.
  \]

  代入得
  \[
  e^A=
  \begin{pmatrix}
  1&0&0\\
  0&1&0\\
  0&0&1
  \end{pmatrix}
  +
  \begin{pmatrix}
  0&1&0\\
  0&0&1\\
  0&0&0
  \end{pmatrix}
  +
  \begin{pmatrix}
  0&0&\dfrac12\\[2pt]
  0&0&0\\
  0&0&0
  \end{pmatrix}
  =
  \begin{pmatrix}
  1&1&\dfrac12\\[4pt]
  0&1&1\\[4pt]
  0&0&1
  \end{pmatrix}.
  \]
  故答案为上述矩阵。` },

{ id:'LA02-40', ch:2, type:'计算', diff:4, tags:'矩阵的幂 二项式展开 矩阵指数',
  q: String.raw`设
  \[
  A=\begin{pmatrix}2&1\\0&2\end{pmatrix}.
  \]
  求 \(A^n\)（\(n\) 为正整数）与 \(e^A\)。`,
  a: String.raw`\[
  A^n=
  \begin{pmatrix}
  2^n&n2^{n-1}\\
  0&2^n
  \end{pmatrix},
  \qquad
  e^A=e^2
  \begin{pmatrix}1&1\\0&1\end{pmatrix}.
  \]`,
  sol: String.raw`令
  \[
  A=2I+N,\qquad N=\begin{pmatrix}0&1\\0&0\end{pmatrix}.
  \]
  则 \(N^2=0\)，且 \(2I\) 与 \(N\) 可交换，故可用二项式定理：
  \[
  A^n=(2I+N)^n=2^nI+n2^{n-1}N.
  \]

  于是
  \[
  A^n=
  \begin{pmatrix}
  2^n&n2^{n-1}\\
  0&2^n
  \end{pmatrix}.
  \]

  对矩阵指数，
  \[
  e^A=e^{2I+N}=e^{2}e^{N}
  =e^2(I+N)
  =e^2
  \begin{pmatrix}1&1\\0&1\end{pmatrix}.
  \]
  故答案为上述两式。` },

{ id:'LA02-41', ch:2, type:'证明', diff:5, tags:'秩一矩阵 可对角化 最小多项式',
  q: String.raw`设 \(u,v\) 为 \(n\) 维非零实列向量，\(A=uv^T\)，且 \(v^Tu\ne0\)。证明 \(A\) 可对角化，其特征值为 \(v^Tu\) 与 \(0\)（\(n-1\) 重），并求 \(A\) 的最小多项式。`,
  a: String.raw`特征值为 \(v^Tu\) 与 \(0\)（\(n-1\) 重），最小多项式为 \(m(\lambda)=\lambda(\lambda-v^Tu)\)。`,
  sol: String.raw`先注意
  \[
  A^2=uv^Tuv^T=u(v^Tu)v^T=(v^Tu)A.
  \]

  由 \(Av=uv^Tv=(v^Tv)u\ne0\) 知 \(u\in\operatorname{Im}A\)，于是
  \[
  Au=uv^Tu=(v^Tu)u,
  \]
  即 \(u\) 是特征值 \(v^Tu\) 对应的特征向量。

  又 \(\ker v^T\) 是 \(n-1\) 维子空间，对其中任一非零向量 \(w\) 有
  \[
  Aw=uv^Tw=0,
  \]
  故 \(0\) 是特征值，且特征子空间维数至少 \(n-1\)。

  两个特征值 \(v^Tu\ne0\) 与 \(0\) 互异，几何重数之和为
  \[
  1+(n-1)=n,
  \]
  故 \(A\) 可对角化，特征值为 \(v^Tu\) 与 \(0\)（\(n-1\) 重）。

  因 \(A\) 满足 \(\lambda(\lambda-v^Tu)\) 且两个特征值都实际出现，最小多项式为
  \[
  m(\lambda)=\lambda(\lambda-v^Tu).
  \]
  证毕。` },

{ id:'LA02-42', ch:2, type:'证明', diff:5, tags:'行列式恒等式 分块矩阵 秩扰动',
  q: String.raw`设 \(A\) 为 \(m\times n\) 矩阵，\(B\) 为 \(n\times m\) 矩阵。证明
  \[
  \det(I_m+AB)=\det(I_n+BA).
  \]`,
  a: String.raw`等式成立。`,
  sol: String.raw`考虑 \((m+n)\) 阶分块矩阵
  \[
  N=\begin{pmatrix}I_m&A\\-B&I_n\end{pmatrix}.
  \]

  一方面，
  \[
  \begin{pmatrix}I_m&A\\0&I_n\end{pmatrix}
  \begin{pmatrix}I_m+AB&0\\-B&I_n\end{pmatrix}
  =
  \begin{pmatrix}I_m&A\\-B&I_n\end{pmatrix},
  \]
  故
  \[
  \det N=\det(I_m+AB).
  \]

  另一方面，
  \[
  \begin{pmatrix}I_m&0\\-B&I_n\end{pmatrix}
  \begin{pmatrix}I_m&A\\0&I_n+BA\end{pmatrix}
  =
  \begin{pmatrix}I_m&A\\-B&I_n\end{pmatrix},
  \]
  故
  \[
  \det N=\det(I_n+BA).
  \]

  比较两式即得
  \[
  \det(I_m+AB)=\det(I_n+BA).
  \]
  证毕。` },

{ id:'LA02-43', ch:2, type:'证明', diff:4, tags:'反对称矩阵 行列式 二次型',
  q: String.raw`设 \(A\) 为 \(n\) 阶实反对称矩阵，即 \(A^T=-A\)。证明：当 \(n\) 为奇数时 \(\det A=0\)；并对任意实向量 \(x\) 证明 \(x^TAx=0\)。`,
  a: String.raw`奇数阶时 \(\det A=0\)，且 \(x^TAx=0\)。`,
  sol: String.raw`由 \(A^T=-A\) 及行列式的性质，
  \[
  \det A=\det(A^T)=\det(-A)=(-1)^n\det A.
  \]
  当 \(n\) 为奇数时 \((-1)^n=-1\)，故
  \[
  \det A=-\det A,
  \]
  从而 \(\det A=0\)。

  对任意实向量 \(x\)，\(x^TAx\) 是一个实数，等于它自己的转置：
  \[
  x^TAx=(x^TAx)^T=x^TA^Tx=-x^TAx.
  \]

  于是
  \[
  2x^TAx=0,\qquad x^TAx=0.
  \]
  证毕。` },

{ id:'LA02-44', ch:2, type:'证明', diff:5, tags:'正交矩阵 行列式 特征值',
  q: String.raw`设 \(A\) 为 \(n\) 阶实矩阵，满足 \(A^TA=I\)，且 \(\det A=-1\)。证明 \(\det A=\pm1\)，并证明 \(A+I\) 不可逆。`,
  a: String.raw`\(\det A=\pm1\)，且 \(\det(A+I)=0\)。`,
  sol: String.raw`由 \(A^TA=I\) 两边取行列式：
  \[
  (\det A)^2=\det(A^TA)=\det I=1,
  \]
  故
  \[
  \det A=\pm1.
  \]

  又 \(A\) 可逆且 \(A^{-1}=A^T\)。计算
  \[
  \det(A+I)=\det A\cdot\det(I+A^{-1})
  =\det A\cdot\det(I+A^T).
  \]

  而
  \[
  \det(I+A^T)=\det\bigl((I+A)^T\bigr)=\det(I+A),
  \]
  所以
  \[
  \det(A+I)=\det A\cdot\det(A+I).
  \]

  移项得
  \[
  (1-\det A)\det(A+I)=0.
  \]
  因 \(\det A=-1\)，故 \(2\det(A+I)=0\)，即
  \[
  \det(A+I)=0.
  \]
  证毕。` },

{ id:'LA02-45', ch:2, type:'证明', diff:5, tags:'对合矩阵 可对角化 相似标准形',
  q: String.raw`设 \(n\) 阶矩阵 \(A\) 满足 \(A^2=I\)。证明 \(A\) 可对角化，且存在正整数 \(k\) 使
  \[
  A\sim\operatorname{diag}(I_k,-I_{n-k}).
  \]`,
  a: String.raw`\(A\) 可对角化，且相似于 \(\operatorname{diag}(I_k,-I_{n-k})\)。`,
  sol: String.raw`由 \(A^2=I\) 得
  \[
  A^2-I=0,
  \]
  即 \(A\) 是多项式
  \[
  f(\lambda)=\lambda^2-1=(\lambda-1)(\lambda+1)
  \]
  的零点。

  矩阵的最小多项式整除 \(f(\lambda)\)，而 \(f(\lambda)\) 的根 \(1,-1\) 互异、无重根，故最小多项式无重根。

  最小多项式无重根的矩阵可对角化，因此 \(A\) 可对角化，其特征值只能是 \(1\) 或 \(-1\)。

  设特征值 \(1\) 的重数为 \(k\)，则 \(A\) 相似于
  \[
  \operatorname{diag}(I_k,-I_{n-k}).
  \]
  证毕。` },

{ id:'LA02-46', ch:2, type:'计算', diff:5, tags:'友矩阵 最小多项式 特征多项式',
  q: String.raw`设
  \[
  A=\begin{pmatrix}
  0&0&6\\
  1&0&-11\\
  0&1&6
  \end{pmatrix}.
  \]
  求 \(A\) 的特征多项式与最小多项式。`,
  a: String.raw`特征多项式与最小多项式均为
  \[
  \lambda^3-6\lambda^2+11\lambda-6=(\lambda-1)(\lambda-2)(\lambda-3).
  \]`,
  sol: String.raw`\(A\) 是多项式
  \[
  p(\lambda)=\lambda^3-6\lambda^2+11\lambda-6
  \]
  的友矩阵，故其特征多项式为
  \[
  \det(\lambda I-A)=p(\lambda).
  \]

  再证最小多项式次数为 \(3\)。取
  \[
  e_1=\begin{pmatrix}1\\0\\0\end{pmatrix},
  \]
  则
  \[
  Ae_1=\begin{pmatrix}0\\1\\0\end{pmatrix}=e_2,
  \qquad
  A^2e_1=Ae_2=\begin{pmatrix}0\\0\\1\end{pmatrix}=e_3.
  \]
  因此 \(e_1,Ae_1,A^2e_1\) 线性无关，\(e_1\) 是循环向量。

  若最小多项式次数小于 \(3\)，则 \(e_1,Ae_1,A^2e_1\) 必线性相关，矛盾。故最小多项式次数为 \(3\)，等于特征多项式：
  \[
  m(\lambda)=\lambda^3-6\lambda^2+11\lambda-6
  =(\lambda-1)(\lambda-2)(\lambda-3).
  \]
  故答案为上述多项式。` },

{ id:'LA02-47', ch:2, type:'计算', diff:5, tags:'循环矩阵 特征值 行列式',
  q: String.raw`设
  \[
  C=\begin{pmatrix}
  1&2&3\\
  3&1&2\\
  2&3&1
  \end{pmatrix}.
  \]
  求 \(C\) 的特征值与 \(\det C\)。`,
  a: String.raw`特征值为
  \[
  6,\qquad -\frac32+\frac{\sqrt3}{2}i,\qquad -\frac32-\frac{\sqrt3}{2}i,
  \]
  且 \(\det C=18\)。`,
  sol: String.raw`\(C\) 是第一行 \((1,2,3)\) 生成的循环矩阵，其特征向量可取
  \[
  (1,\omega,\omega^2)^T,\qquad \omega=e^{2\pi i/3}.
  \]
  对应特征值为
  \[
  \lambda=1+2\omega+3\omega^2.
  \]

  取 \(\omega=-\dfrac12+\dfrac{\sqrt3}{2}i\)，代入得
  \[
  \lambda=1+2\left(-\frac12+\frac{\sqrt3}{2}i\right)
  +3\left(-\frac12-\frac{\sqrt3}{2}i\right)
  =-\frac32-\frac{\sqrt3}{2}i.
  \]
  共轭特征值为 \(-\dfrac32+\dfrac{\sqrt3}{2}i\)。

  又取特征向量 \((1,1,1)^T\)，特征值为
  \[
  1+2+3=6.
  \]

  三个特征值之积为
  \[
  6\left(\frac94+\frac34\right)=6\cdot3=18,
  \]
  故
  \[
  \det C=18.
  \]
  故答案为上述特征值与 \(18\)。` },

{ id:'LA02-48', ch:2, type:'计算', diff:4, tags:'Vandermonde行列式',
  q: String.raw`求
  \[
  \det\begin{pmatrix}
  1&1&1&1\\
  1&2&3&4\\
  1&4&9&16\\
  1&8&27&64
  \end{pmatrix}.
  \]`,
  a: String.raw`行列式为 \(12\)。`,
  sol: String.raw`该行列式是节点 \(x_1=1,x_2=2,x_3=3,x_4=4\) 的 Vandermonde 行列式
  \[
  V(x_1,x_2,x_3,x_4)=\prod_{1\le i<j\le4}(x_j-x_i).
  \]

  逐项计算差值：
  \[
  \begin{aligned}
  &(2-1)(3-1)(4-1)\\
  &\quad\cdot(3-2)(4-2)(4-3).
  \end{aligned}
  \]

  即
  \[
  1\cdot2\cdot3\cdot1\cdot2\cdot1=12.
  \]

  故行列式为 \(12\)。` },

{ id:'LA02-49', ch:2, type:'计算', diff:5, tags:'Cayley-Hamilton定理 矩阵多项式 逆矩阵',
  q: String.raw`设
  \[
  A=\begin{pmatrix}1&2\\3&4\end{pmatrix}.
  \]
  利用 Cayley-Hamilton 定理求 \(A^3\) 与 \(A^{-1}\)。`,
  a: String.raw`\[
  A^3=\begin{pmatrix}37&54\\81&118\end{pmatrix},
  \qquad
  A^{-1}=\begin{pmatrix}-2&1\\[2pt]\dfrac32&-\dfrac12\end{pmatrix}.
  \]`,
  sol: String.raw`特征多项式为
  \[
  \det(\lambda I-A)=\lambda^2-5\lambda-2.
  \]
  由 Cayley-Hamilton 定理，
  \[
  A^2-5A-2I=0,
  \]
  即
  \[
  A^2=5A+2I.
  \]

  于是
  \[
  A^3=A\cdot A^2=5A^2+2A
  =5(5A+2I)+2A=27A+10I.
  \]
  代入 \(A\) 得
  \[
  A^3=
  \begin{pmatrix}27&54\\81&108\end{pmatrix}
  +
  \begin{pmatrix}10&0\\0&10\end{pmatrix}
  =\begin{pmatrix}37&54\\81&118\end{pmatrix}.
  \]

  又由 \(A^2-5A-2I=0\) 得
  \[
  A(A-5I)=2I,
  \]
  故
  \[
  A^{-1}=\frac12(A-5I)
  =\frac12
  \begin{pmatrix}-4&2\\3&-1\end{pmatrix}
  =\begin{pmatrix}-2&1\\[2pt]\dfrac32&-\dfrac12\end{pmatrix}.
  \]
  故答案为上述两矩阵。` },

{ id:'LA02-50', ch:2, type:'证明', diff:4, tags:'迹 内积 Frobenius范数',
  q: String.raw`设 \(A=(a_{ij})\) 为 \(m\times n\) 实矩阵。证明
  \[
  \operatorname{tr}(A^TA)=\sum_{i=1}^{m}\sum_{j=1}^{n}a_{ij}^2\ge0,
  \]
  等号成立当且仅当 \(A=0\)；并证明 \(\operatorname{tr}(A^TA)=\operatorname{tr}(AA^T)\)。`,
  a: String.raw`两式均成立，且等号仅在 \(A=0\) 时取得。`,
  sol: String.raw`记 \(A^TA=(b_{jk})\)，则
  \[
  b_{jj}=\sum_{i=1}^{m}a_{ij}^2.
  \]
  于是
  \[
  \operatorname{tr}(A^TA)=\sum_{j=1}^{n}b_{jj}
  =\sum_{j=1}^{n}\sum_{i=1}^{m}a_{ij}^2
  =\sum_{i=1}^{m}\sum_{j=1}^{n}a_{ij}^2.
  \]

  这是若干实数的平方和，故非负；它等于 \(0\) 当且仅当每个 \(a_{ij}=0\)，即 \(A=0\)。

  最后，利用迹的循环性质 \(\operatorname{tr}(XY)=\operatorname{tr}(YX)\)，取 \(X=A^T,\ Y=A\)，得
  \[
  \operatorname{tr}(A^TA)=\operatorname{tr}(AA^T).
  \]
  证毕。` },

{ id:'LA02-51', ch:2, type:'证明', diff:5, tags:'分块矩阵 秩不等式 行向量',
  q: String.raw`设 \(A\) 为 \(m\times n\) 矩阵，\(B\) 为 \(p\times q\) 矩阵，\(C\) 为 \(m\times q\) 矩阵。证明
  \[
  r\begin{pmatrix}A&C\\0&B\end{pmatrix}\ge r(A)+r(B).
  \]`,
  a: String.raw`不等式成立。`,
  sol: String.raw`从 \(A\) 中取出 \(r(A)\) 个线性无关的行，记为 \(a_1,\dots,a_r\)；从 \(B\) 中取出 \(r(B)\) 个线性无关的行，记为 \(b_1,\dots,b_s\)。

  在分块矩阵中取对应的行。属于 \(A\) 的行形如 \((a_i,c_i)\)，属于 \(B\) 的行形如 \((0,b_j)\)。

  若这些行的一个线性组合为零：
  \[
  \sum_{i=1}^{r}\alpha_i(a_i,c_i)+\sum_{j=1}^{s}\beta_j(0,b_j)=0,
  \]
  比较第一个分量得
  \[
  \sum_{i=1}^{r}\alpha_i a_i=0.
  \]
  因 \(a_1,\dots,a_r\) 线性无关，故 \(\alpha_1=\cdots=\alpha_r=0\)。再比较第二个分量得
  \[
  \sum_{j=1}^{s}\beta_j b_j=0,
  \]
  同理 \(\beta_1=\cdots=\beta_s=0\)。

  所以这 \(r(A)+r(B)\) 行线性无关，故分块矩阵的秩不小于 \(r(A)+r(B)\)。当 \(C=0\) 时矩阵为分块对角形，秩恰为 \(r(A)+r(B)\)。证毕。` },

{ id:'LA02-52', ch:2, type:'证明', diff:5, tags:'分块矩阵 秩 幂等结构',
  q: String.raw`设 \(A\) 为 \(n\) 阶矩阵。证明
  \[
  r\begin{pmatrix}A&A\\A&A\end{pmatrix}=r(A).
  \]`,
  a: String.raw`等式成立。`,
  sol: String.raw`记
  \[
  M=\begin{pmatrix}A&A\\A&A\end{pmatrix}.
  \]
  则 \(M\) 可分解为
  \[
  M=\begin{pmatrix}I_n\\I_n\end{pmatrix}A\begin{pmatrix}I_n&I_n\end{pmatrix}.
  \]

  由秩的乘积不等式，
  \[
  r(M)\le r(A).
  \]

  另一方面，\(M\) 的左上角 \(n\times n\) 子块就是 \(A\)，而矩阵的秩不小于其任一子矩阵的秩，故
  \[
  r(M)\ge r(A).
  \]

  两式合并得
  \[
  r(M)=r(A).
  \]
  证毕。` },

{ id:'LA02-53', ch:2, type:'计算', diff:5, tags:'对合矩阵 矩阵方程 最小多项式',
  q: String.raw`求所有满足
  \[
  X^2=I_2
  \]
  的 2 阶实矩阵 \(X\)。`,
  a: String.raw`\[
  X=\begin{pmatrix}a&b\\c&-a\end{pmatrix},
  \qquad a^2+bc=1,
  \]
  其中 \(a,b,c\) 为任意实数（该式已包含 \(X=\pm I_2\)）。`,
  sol: String.raw`设
  \[
  X=\begin{pmatrix}a&b\\c&d\end{pmatrix}.
  \]
  若 \(X=I\) 或 \(X=-I\)，结论显然成立。

  否则 \(X\) 的最小多项式整除 \(\lambda^2-1=(\lambda-1)(\lambda+1)\)，且不等于 \(\lambda-1\) 或 \(\lambda+1\)，故最小多项式就是 \(\lambda^2-1\)。于是 \(X\) 的特征值为 \(1,-1\)，从而
  \[
  \operatorname{tr}(X)=a+d=0,\qquad \det X=ad-bc=-1.
  \]

  由 \(d=-a\) 得
  \[
  -a^2-bc=-1,
  \]
  即
  \[
  a^2+bc=1.
  \]

  反之，若 \(X=\begin{pmatrix}a&b\\c&-a\end{pmatrix}\) 且 \(a^2+bc=1\)，直接计算
  \[
  X^2=(a^2+bc)I_2=I_2.
  \]
  故全部解为上述形式。` },

{ id:'LA02-54', ch:2, type:'证明', diff:5, tags:'幂等矩阵 乘积 秩',
  q: String.raw`设 \(A,B\) 均为 \(n\) 阶矩阵，满足
  \[
  A^2=A,\qquad B^2=B,\qquad AB=BA.
  \]
  证明 \(AB\) 与 \(A+B-AB\) 都是幂等矩阵，并证明
  \[
  r(AB)\le\min\{r(A),r(B)\}.
  \]`,
  a: String.raw`三者均成立。`,
  sol: String.raw`由 \(A^2=A,\ B^2=B\) 及 \(AB=BA\) 得
  \[
  (AB)^2=A^2B^2=AB,
  \]
  故 \(AB\) 幂等。

  再展开
  \[
  \begin{aligned}
  (A+B-AB)^2
  &=A^2+B^2+(AB)^2+AB+BA\\
  &\quad-AB-AB-AB-AB\\
  &=A+B-AB.
  \end{aligned}
  \]
  故 \(A+B-AB\) 也幂等。

  最后，\(\operatorname{Im}(AB)\subset\operatorname{Im}A\)，故
  \[
  r(AB)\le r(A).
  \]
  又 \(r(AB)\le r(B)\)，所以
  \[
  r(AB)\le\min\{r(A),r(B)\}.
  \]
  证毕。` },

{ id:'LA02-55', ch:2, type:'证明', diff:5, tags:'对合矩阵 乘积 交换性',
  q: String.raw`设 \(A,B\) 均为 \(n\) 阶矩阵，且
  \[
  A^2=B^2=I.
  \]
  证明 \((AB)^2=I\) 当且仅当 \(AB=BA\)。`,
  a: String.raw`\((AB)^2=I\iff AB=BA\)。`,
  sol: String.raw`若 \(AB=BA\)，则
  \[
  (AB)^2=A^2B^2=I,
  \]
  充分性成立。

  反之，设 \((AB)^2=I\)，即
  \[
  ABAB=I.
  \]
  两边左乘 \(A\)、右乘 \(B\)，并利用 \(A^2=B^2=I\)，得
  \[
  A(ABAB)B=A^2BAB^2=BA.
  \]

  而右边为
  \[
  AIB=AB.
  \]
  故
  \[
  BA=AB.
  \]
  证毕。` },

{ id:'LA02-56', ch:2, type:'证明', diff:5, tags:'幂等矩阵 和 交换性',
  q: String.raw`设 \(A,B\) 均为 \(n\) 阶矩阵，满足 \(A^2=A,\ B^2=B\)，且 \(A+B\) 也是幂等矩阵。证明
  \[
  AB=BA=0.
  \]`,
  a: String.raw`\(AB=BA=0\)。`,
  sol: String.raw`由 \((A+B)^2=A+B\) 得
  \[
  A^2+AB+BA+B^2=A+B.
  \]
  利用 \(A^2=A,\ B^2=B\)，化简为
  \[
  AB+BA=0. \tag{1}
  \]

  将 \((1)\) 左乘 \(A\)：
  \[
  AB+ABA=0. \tag{2}
  \]
  将 \((1)\) 右乘 \(A\)：
  \[
  ABA+BA=0. \tag{3}
  \]

  用 \((2)\) 减去 \((3)\)，得
  \[
  AB-BA=0,
  \]
  即 \(AB=BA\)。

  代回 \((1)\) 得 \(2AB=0\)，故
  \[
  AB=0,\qquad BA=0.
  \]
  证毕。` },

{ id:'LA02-57', ch:2, type:'计算', diff:4, tags:'矩阵多项式 逆矩阵 行列式',
  q: String.raw`设 3 阶实矩阵 \(A\) 满足
  \[
  A^2+A+I=0.
  \]
  证明 \(A^3=I\)，并求 \(A^{-1}\) 与 \(\det A\)。`,
  a: String.raw`\(A^3=I\)，\(A^{-1}=A^2\)，\(\det A=1\)。`,
  sol: String.raw`由
  \[
  A^2+A+I=0
  \]
  两边左乘 \(A-I\)，得
  \[
  (A-I)(A^2+A+I)=A^3-I=0,
  \]
  故
  \[
  A^3=I.
  \]

  由 \(A^2+A+I=0\) 移项：
  \[
  A(-A-I)=I,
  \]
  故 \(A\) 可逆，且
  \[
  A^{-1}=-A-I=A^2.
  \]

  对 \(A^3=I\) 取行列式：
  \[
  (\det A)^3=1.
  \]
  因 \(A\) 为实矩阵，\(\det A\) 为实数，故
  \[
  \det A=1.
  \]
  证毕。` },

{ id:'LA02-58', ch:2, type:'证明', diff:5, tags:'矩阵的幂 特征值 迹',
  q: String.raw`设 \(A\) 为 3 阶实矩阵，满足 \(A^3=I\) 且 \(A\ne I\)。证明
  \[
  \operatorname{tr}(A)=0,\qquad \det A=1.
  \]`,
  a: String.raw`\(\operatorname{tr}(A)=0\)，\(\det A=1\)。`,
  sol: String.raw`由 \(A^3=I\) 知 \(A\) 是多项式
  \[
  \lambda^3-1=(\lambda-1)(\lambda^2+\lambda+1)
  \]
  的零点，故最小多项式整除 \(\lambda^3-1\)。该多项式无重根，因此 \(A\) 可对角化，特征值只能是
  \[
  1,\qquad \omega,\qquad \omega^2,
  \]
  其中 \(\omega=e^{2\pi i/3}\)。

  因 \(A\) 为实矩阵，非实特征值成共轭对出现。三个特征值（按重数计）只能有两种可能：
  \[
  1,1,1
  \quad\text{或}\quad
  1,\omega,\omega^2.
  \]

  若三个特征值全为 \(1\)，因 \(A\) 可对角化，必有 \(A=I\)，与题设矛盾。故特征值为
  \[
  1,\ \omega,\ \omega^2.
  \]

  于是
  \[
  \operatorname{tr}(A)=1+\omega+\omega^2=0,
  \qquad
  \det A=1\cdot\omega\cdot\omega^2=1.
  \]
  证毕。` },

{ id:'LA02-59', ch:2, type:'计算', diff:5, tags:'幂零矩阵 若尔当块 最小多项式',
  q: String.raw`设 4 阶矩阵 \(A\) 满足
  \[
  A^4=0,\qquad r(A)=2,\qquad r(A^2)=1.
  \]
  求 \(r(A^3)\) 与 \(A\) 的最小多项式。`,
  a: String.raw`\(r(A^3)=0\)，最小多项式为 \(m(\lambda)=\lambda^3\)。`,
  sol: String.raw`\(A\) 是幂零矩阵，其若尔当标准形由若干个幂零若尔当块组成，各块阶数之和为 \(4\)。

  对幂零矩阵，若尔当块的个数等于
  \[
  4-r(A)=4-2=2.
  \]

  设各块阶数为 \(n_1,n_2\)，则 \(n_1+n_2=4\)。又
  \[
  r(A)-r(A^2)=1
  \]
  等于阶数不小于 \(2\) 的块数，故两块中恰有一块阶数不小于 \(2\)。

  于是可能的阶数组合只有
  \[
  (3,1)\quad\text{或}\quad(2,2).
  \]
  但 \((2,2)\) 时 \(A^2=0\)，与 \(r(A^2)=1\) 矛盾。故阶数组合为 \((3,1)\)。

  因此 \(A\) 相似于 \(\operatorname{diag}(J_3(0),0)\)，从而
  \[
  A^3=0,\qquad r(A^3)=0.
  \]

  最大若尔当块的阶数为 \(3\)，故最小多项式为
  \[
  m(\lambda)=\lambda^3.
  \]
  故答案为上述两值。` },

{ id:'LA02-60', ch:2, type:'计算', diff:5, tags:'伴随矩阵 秩公式 行列式',
  q: String.raw`设 \(A\) 为 3 阶矩阵，且 \(r(A)=2\)。求
  \[
  r(A^*),\qquad \det(A^*),\qquad r\bigl((A^*)^*\bigr).
  \]`,
  a: String.raw`\(r(A^*)=1\)，\(\det(A^*)=0\)，\(r\bigl((A^*)^*\bigr)=0\)。`,
  sol: String.raw`由伴随矩阵的秩公式
  \[
  r(A^*)=
  \begin{cases}
  3,&r(A)=3,\\
  1,&r(A)=2,\\
  0,&r(A)\le1.
  \end{cases}
  \]
  这里 \(r(A)=2=3-1\)，故
  \[
  r(A^*)=1.
  \]

  又 \(r(A^*)<3\)，故
  \[
  \det(A^*)=0.
  \]

  对 \(A^*\) 再用同一公式：\(r(A^*)=1\le3-2=1\)，故
  \[
  r\bigl((A^*)^*\bigr)=0.
  \]
  故答案为上述三值。` },

{ id:'LA02-61', ch:2, type:'证明', diff:4, tags:'伴随矩阵 乘积 恒等式',
  q: String.raw`设 \(A,B\) 均为 \(n\) 阶矩阵。证明
  \[
  (AB)^*=B^*A^*.
  \]`,
  a: String.raw`等式成立。`,
  sol: String.raw`当 \(A,B\) 均可逆时，由 \(A^*=(\det A)A^{-1}\) 得
  \[
  (AB)^*=\det(AB)(AB)^{-1}
  =\det A\det B\cdot B^{-1}A^{-1}
  =B^*A^*.
  \]

  一般情形，令
  \[
  A_t=A+tI,\qquad B_t=B+tI.
  \]
  行列式 \(\det A_t,\det B_t\) 都是关于 \(t\) 的多项式，且不恒为零，故只有有限个 \(t\) 使 \(A_t\) 或 \(B_t\) 不可逆。

  对其余无穷多个 \(t\)，由已证情形
  \[
  (A_tB_t)^*=B_t^*A_t^*.
  \]
  两边矩阵的元素都是 \(t\) 的多项式，该恒等式对无穷多个 \(t\) 成立，故作为多项式恒等。

  令 \(t=0\)，得
  \[
  (AB)^*=B^*A^*.
  \]
  证毕。` },

{ id:'LA02-62', ch:2, type:'计算', diff:5, tags:'伴随矩阵 行列式 迭代',
  q: String.raw`设 \(A\) 为 3 阶矩阵，\(\det A=2\)。求
  \[
  \det(A^*),\qquad \det\bigl((A^*)^*\bigr).
  \]`,
  a: String.raw`\(\det(A^*)=4\)，\(\det\bigl((A^*)^*\bigr)=16\)。`,
  sol: String.raw`由公式
  \[
  \det(A^*)=(\det A)^{\,n-1},
  \]
  取 \(n=3,\ \det A=2\)，得
  \[
  \det(A^*)=2^2=4.
  \]

  对 \(A^*\) 再用同一公式（\(A^*\) 仍为 3 阶矩阵）：
  \[
  \det\bigl((A^*)^*\bigr)
  =\bigl(\det(A^*)\bigr)^{2}=4^2=16.
  \]

  也可写成
  \[
  \det\bigl((A^*)^*\bigr)=(\det A)^{(n-1)^2}=2^4=16.
  \]
  故答案为 \(4\) 与 \(16\)。` },

{ id:'LA02-63', ch:2, type:'计算', diff:4, tags:'分块三角矩阵 行列式',
  q: String.raw`设
  \[
  A=\begin{pmatrix}1&2\\3&4\end{pmatrix},\quad
  B=\begin{pmatrix}1&0\\1&1\end{pmatrix},\quad
  D=\begin{pmatrix}2&1\\0&3\end{pmatrix},\quad
  M=\begin{pmatrix}A&B\\0&D\end{pmatrix}.
  \]
  求 \(\det M\)。`,
  a: String.raw`\(\det M=-12\)。`,
  sol: String.raw`\(M\) 是分块上三角矩阵，故
  \[
  \det M=\det A\cdot\det D.
  \]

  计算
  \[
  \det A=1\cdot4-2\cdot3=-2,
  \qquad
  \det D=2\cdot3-1\cdot0=6.
  \]

  因此
  \[
  \det M=(-2)\cdot6=-12.
  \]
  故答案为 \(-12\)。` },

{ id:'LA02-64', ch:2, type:'计算', diff:5, tags:'分块矩阵 逆矩阵 舒尔补',
  q: String.raw`设
  \[
  M=\begin{pmatrix}
  1&0&1&0\\
  0&1&0&1\\
  1&0&2&0\\
  0&1&0&2
  \end{pmatrix}.
  \]
  求 \(M^{-1}\)。`,
  a: String.raw`\[
  M^{-1}=
  \begin{pmatrix}
  2&0&-1&0\\
  0&2&0&-1\\
  -1&0&1&0\\
  0&-1&0&1
  \end{pmatrix}.
  \]`,
  sol: String.raw`将 \(M\) 写成
  \[
  M=\begin{pmatrix}I_2&I_2\\I_2&2I_2\end{pmatrix}.
  \]
  记 \(A=I_2,\ B=I_2,\ C=I_2,\ D=2I_2\)，则舒尔补为
  \[
  D-CA^{-1}B=2I_2-I_2=I_2,
  \]
  它可逆。

  由分块逆公式
  \[
  \begin{pmatrix}A&B\\C&D\end{pmatrix}^{-1}
  =
  \begin{pmatrix}
  A^{-1}+A^{-1}BS^{-1}CA^{-1}&-A^{-1}BS^{-1}\\
  -S^{-1}CA^{-1}&S^{-1}
  \end{pmatrix},
  \]
  其中 \(S=D-CA^{-1}B=I_2\)。

  代入 \(A=B=C=I_2,\ S^{-1}=I_2\)，得
  \[
  M^{-1}=
  \begin{pmatrix}
  2I_2&-I_2\\
  -I_2&I_2
  \end{pmatrix}
  =
  \begin{pmatrix}
  2&0&-1&0\\
  0&2&0&-1\\
  -1&0&1&0\\
  0&-1&0&1
  \end{pmatrix}.
  \]
  故答案为上述矩阵。` },

{ id:'LA02-65', ch:2, type:'计算', diff:4, tags:'矩阵方程 逆矩阵',
  q: String.raw`设
  \[
  A=\begin{pmatrix}1&2\\3&4\end{pmatrix},\qquad
  B=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad
  C=\begin{pmatrix}1&0\\0&1\end{pmatrix}.
  \]
  解矩阵方程 \((A+B)X=C\)。`,
  a: String.raw`\[
  X=\begin{pmatrix}
  -\dfrac12&\dfrac38\\[4pt]
  \dfrac12&-\dfrac18
  \end{pmatrix}.
  \]`,
  sol: String.raw`先计算
  \[
  A+B=
  \begin{pmatrix}1&3\\4&4\end{pmatrix},
  \qquad
  \det(A+B)=1\cdot4-3\cdot4=-8\ne0.
  \]
  故 \(A+B\) 可逆。

  由 \((A+B)X=I\) 得
  \[
  X=(A+B)^{-1}.
  \]

  计算
  \[
  (A+B)^{-1}
  =\frac{1}{-8}
  \begin{pmatrix}4&-3\\-4&1\end{pmatrix}
  =
  \begin{pmatrix}
  -\dfrac12&\dfrac38\\[4pt]
  \dfrac12&-\dfrac18
  \end{pmatrix}.
  \]
  故答案为上述矩阵。` },

{ id:'LA02-66', ch:2, type:'证明', diff:5, tags:'特征多项式 AB与BA',
  q: String.raw`设 \(A,B\) 均为 \(n\) 阶矩阵。证明 \(AB\) 与 \(BA\) 有相同的特征多项式。`,
  a: String.raw`两者的特征多项式相同。`,
  sol: String.raw`对 \(\lambda\ne0\)，利用
  \[
  \det(I-XY)=\det(I-YX)
  \]
  （取 \(X=\lambda^{-1}A,\ Y=B\)）得
  \[
  \det\left(I-\frac{AB}{\lambda}\right)
  =\det\left(I-\frac{BA}{\lambda}\right).
  \]

  两边乘以 \(\lambda^n\)：
  \[
  \lambda^n\det\left(I-\frac{AB}{\lambda}\right)
  =\lambda^n\det\left(I-\frac{BA}{\lambda}\right),
  \]
  即
  \[
  \det(\lambda I-AB)=\det(\lambda I-BA).
  \]

  上式对无穷多个 \(\lambda\ne0\) 成立，而两边都是关于 \(\lambda\) 的 \(n\) 次多项式，故作为多项式恒等。

  特别地，取 \(\lambda=0\) 也成立，即
  \[
  \det(-AB)=\det(-BA).
  \]
  因此 \(AB\) 与 \(BA\) 的特征多项式相同。证毕。` },

{ id:'LA02-67', ch:2, type:'计算', diff:5, tags:'Woodbury公式 分块逆',
  q: String.raw`设
  \[
  A=\operatorname{diag}(1,2,3),\quad
  U=\begin{pmatrix}1&0\\0&1\\1&1\end{pmatrix},\quad
  C=\begin{pmatrix}2&0\\0&1\end{pmatrix},\quad
  V=\begin{pmatrix}1&0&1\\0&1&0\end{pmatrix}.
  \]
  求 \((A+UCV)^{-1}\)。`,
  a: String.raw`\[
  (A+UCV)^{-1}
  =\begin{pmatrix}
  \dfrac{5}{11}&\dfrac{2}{33}&-\dfrac{2}{11}\\[4pt]
  0&\dfrac13&0\\[4pt]
  -\dfrac{2}{11}&-\dfrac{1}{11}&\dfrac{3}{11}
  \end{pmatrix}.
  \]`,
  sol: String.raw`由 Woodbury 公式
  \[
  (A+UCV)^{-1}
  =A^{-1}-A^{-1}U\bigl(C^{-1}+VA^{-1}U\bigr)^{-1}VA^{-1}.
  \]
  这里
  \[
  A^{-1}=\operatorname{diag}\left(1,\frac12,\frac13\right),
  \qquad
  VA^{-1}U=
  \begin{pmatrix}\dfrac43&\dfrac13\\[2pt]0&\dfrac12\end{pmatrix}.
  \]

  于是
  \[
  C^{-1}+VA^{-1}U=
  \begin{pmatrix}\dfrac{11}{6}&\dfrac13\\[2pt]0&\dfrac32\end{pmatrix},
  \]
  其行列式为 \(\dfrac{11}{4}\)，逆为
  \[
  \begin{pmatrix}\dfrac{6}{11}&-\dfrac{4}{33}\\[2pt]0&\dfrac23\end{pmatrix}.
  \]

  再计算
  \[
  A^{-1}U\bigl(C^{-1}+VA^{-1}U\bigr)^{-1}VA^{-1}
  =
  \begin{pmatrix}
  \dfrac{6}{11}&-\dfrac{2}{33}&\dfrac{2}{11}\\[4pt]
  0&\dfrac16&0\\[4pt]
  \dfrac{2}{11}&\dfrac{1}{11}&\dfrac{2}{33}
  \end{pmatrix}.
  \]

  用 \(A^{-1}\) 减去上式，得
  \[
  (A+UCV)^{-1}
  =\begin{pmatrix}
  \dfrac{5}{11}&\dfrac{2}{33}&-\dfrac{2}{11}\\[4pt]
  0&\dfrac13&0\\[4pt]
  -\dfrac{2}{11}&-\dfrac{1}{11}&\dfrac{3}{11}
  \end{pmatrix}.
  \]
  故答案为上述矩阵。` },

{ id:'LA02-68', ch:2, type:'计算', diff:5, tags:'Kronecker积 特征值 矩阵和',
  q: String.raw`设
  \[
  A=\operatorname{diag}(1,2),\qquad
  B=\operatorname{diag}(0,3).
  \]
  求 \(A\otimes I_2+I_2\otimes B\) 的全部特征值。`,
  a: String.raw`特征值为 \(1,4,2,5\)。`,
  sol: String.raw`设 \(Ax=\lambda x,\ By=\mu y\)。则
  \[
  (A\otimes I_2)(x\otimes y)=\lambda(x\otimes y),
  \]
  \[
  (I_2\otimes B)(x\otimes y)=\mu(x\otimes y).
  \]
  两式相加得
  \[
  (A\otimes I_2+I_2\otimes B)(x\otimes y)
  =(\lambda+\mu)(x\otimes y).
  \]

  \(A\) 的特征值为 \(1,2\)，\(B\) 的特征值为 \(0,3\)，故全部特征值为
  \[
  \lambda_i+\mu_j\qquad(1\le i,j\le2),
  \]
  即
  \[
  1+0=1,\quad1+3=4,\quad2+0=2,\quad2+3=5.
  \]

  故特征值为 \(1,2,4,5\)。` },

{ id:'LA02-69', ch:2, type:'计算', diff:5, tags:'矩阵指数 幂零矩阵',
  q: String.raw`设
  \[
  A=\begin{pmatrix}
  0&1&0\\
  0&0&2\\
  0&0&0
  \end{pmatrix}.
  \]
  求 \(e^A\)。`,
  a: String.raw`\[
  e^A=
  \begin{pmatrix}
  1&1&1\\
  0&1&2\\
  0&0&1
  \end{pmatrix}.
  \]`,
  sol: String.raw`计算幂：
  \[
  A^2=
  \begin{pmatrix}
  0&0&2\\
  0&0&0\\
  0&0&0
  \end{pmatrix},
  \qquad
  A^3=0.
  \]

  由矩阵指数定义，级数在 \(A^3=0\) 处截断：
  \[
  e^A=I+A+\frac{A^2}{2}.
  \]

  代入得
  \[
  e^A=
  \begin{pmatrix}
  1&0&0\\
  0&1&0\\
  0&0&1
  \end{pmatrix}
  +
  \begin{pmatrix}
  0&1&0\\
  0&0&2\\
  0&0&0
  \end{pmatrix}
  +
  \begin{pmatrix}
  0&0&1\\
  0&0&0\\
  0&0&0
  \end{pmatrix}
  =
  \begin{pmatrix}
  1&1&1\\
  0&1&2\\
  0&0&1
  \end{pmatrix}.
  \]
  故答案为上述矩阵。` },

{ id:'LA02-70', ch:2, type:'计算', diff:5, tags:'Sherman-Morrison公式 秩一扰动',
  q: String.raw`设
  \[
  A=\begin{pmatrix}2&1\\1&2\end{pmatrix},\qquad
  u=\begin{pmatrix}1\\1\end{pmatrix},\qquad
  v=\begin{pmatrix}1\\-1\end{pmatrix}.
  \]
  求 \((A+uv^T)^{-1}\)。`,
  a: String.raw`\[
  (A+uv^T)^{-1}
  =\begin{pmatrix}
  \dfrac13&0\\[4pt]
  -\dfrac23&1
  \end{pmatrix}.
  \]`,
  sol: String.raw`由 Sherman-Morrison 公式
  \[
  (A+uv^T)^{-1}
  =A^{-1}-\frac{A^{-1}uv^TA^{-1}}{1+v^TA^{-1}u}.
  \]
  先算
  \[
  A^{-1}=\frac13
  \begin{pmatrix}2&-1\\-1&2\end{pmatrix}.
  \]

  于是
  \[
  A^{-1}u=\frac13\begin{pmatrix}1\\1\end{pmatrix},
  \qquad
  v^TA^{-1}=\begin{pmatrix}1&-1\end{pmatrix}.
  \]
  从而
  \[
  v^TA^{-1}u=\frac13(1-1)=0,
  \]
  分母为 \(1\)。

  计算秩一项
  \[
  A^{-1}uv^TA^{-1}
  =\begin{pmatrix}\dfrac13\\[2pt]\dfrac13\end{pmatrix}
  \begin{pmatrix}1&-1\end{pmatrix}
  =
  \begin{pmatrix}
  \dfrac13&-\dfrac13\\[4pt]
  \dfrac13&-\dfrac13
  \end{pmatrix}.
  \]

  因此
  \[
  (A+uv^T)^{-1}
  =\frac13
  \begin{pmatrix}2&-1\\-1&2\end{pmatrix}
  -
  \begin{pmatrix}
  \dfrac13&-\dfrac13\\[4pt]
  \dfrac13&-\dfrac13
  \end{pmatrix}
  =
  \begin{pmatrix}
  \dfrac13&0\\[4pt]
  -\dfrac23&1
  \end{pmatrix}.
  \]
  故答案为上述矩阵。` },

{ id:'LA02-71', ch:2, type:'计算', diff:5, tags:'行列式引理 秩一扰动',
  q: String.raw`设
  \[
  u=\begin{pmatrix}1\\2\\3\end{pmatrix},\qquad
  v=\begin{pmatrix}1\\1\\1\end{pmatrix}.
  \]
  求 \(\det(I_3+uv^T)\)，并证明一般公式
  \[
  \det(I+uv^T)=1+v^Tu.
  \]`,
  a: String.raw`\(\det(I_3+uv^T)=7\)。`,
  sol: String.raw`先证明一般公式。由矩阵行列式引理（取 \(A=I\)，\(A\) 可逆）
  \[
  \det(I+uv^T)=\det I\cdot\bigl(1+v^TI^{-1}u\bigr)
  =1+v^Tu.
  \]

  也可直接验证：\(uv^T\) 是秩一矩阵，\(I+uv^T\) 的特征值为 \(1+v^Tu\)（一重，特征向量 \(u\)）与 \(1\)（\(n-1\) 重）。

  本题中
  \[
  v^Tu=1\cdot1+1\cdot2+1\cdot3=6.
  \]

  故
  \[
  \det(I_3+uv^T)=1+6=7.
  \]
  答案为 \(7\)。` },

{ id:'LA02-72', ch:2, type:'计算', diff:5, tags:'矩阵多项式 特征值 迹',
  q: String.raw`设 3 阶矩阵 \(A\) 的特征值为 \(1,2,3\)，多项式
  \[
  f(x)=x^3-2x+1.
  \]
  求 \(\operatorname{tr}\bigl(f(A)\bigr)\) 与 \(\det\bigl(f(A)\bigr)\)。`,
  a: String.raw`\(\operatorname{tr}\bigl(f(A)\bigr)=27\)，\(\det\bigl(f(A)\bigr)=0\)。`,
  sol: String.raw`若 \(\lambda\) 是 \(A\) 的特征值，则 \(f(\lambda)\) 是 \(f(A)\) 的特征值。故 \(f(A)\) 的特征值为
  \[
  f(1),\quad f(2),\quad f(3).
  \]

  逐个计算：
  \[
  f(1)=1-2+1=0,
  \]
  \[
  f(2)=8-4+1=5,
  \]
  \[
  f(3)=27-6+1=22.
  \]

  于是
  \[
  \operatorname{tr}\bigl(f(A)\bigr)=0+5+22=27,
  \]
  \[
  \det\bigl(f(A)\bigr)=0\cdot5\cdot22=0.
  \]
  故答案为上述两值。` },

{ id:'LA02-73', ch:2, type:'证明', diff:4, tags:'相似矩阵 不变量 特征多项式',
  q: String.raw`设 \(A,B\) 为 \(n\) 阶矩阵，且 \(A\) 与 \(B\) 相似。证明 \(A,B\) 有相同的特征多项式、迹、行列式与秩。`,
  a: String.raw`四者均相同。`,
  sol: String.raw`由相似的定义，存在可逆矩阵 \(P\) 使
  \[
  B=P^{-1}AP.
  \]

  特征多项式：
  \[
  \det(\lambda I-B)
  =\det(\lambda I-P^{-1}AP)
  =\det\bigl(P^{-1}(\lambda I-A)P\bigr)
  =\det(\lambda I-A).
  \]

  特征多项式相同，故其 \(n-1\) 次项系数（即 \(-\operatorname{tr}\)）与常数项（即 \((-1)^n\det\)）分别相同，从而
  \[
  \operatorname{tr}(A)=\operatorname{tr}(B),\qquad
  \det A=\det B.
  \]

  又 \(P^{-1}\) 与 \(P\) 都可逆，左乘、右乘可逆矩阵不改变秩，故
  \[
  r(B)=r(P^{-1}AP)=r(A).
  \]
  证毕。` },

{ id:'LA02-74', ch:2, type:'计算', diff:5, tags:'特征多项式 主子式 迹 行列式',
  q: String.raw`设
  \[
  A=\begin{pmatrix}
  2&1&0\\
  1&2&1\\
  0&1&2
  \end{pmatrix}.
  \]
  求 \(A\) 的特征多项式，并求 \(\operatorname{tr}(A)\)、\(\det A\) 及全部二阶主子式之和。`,
  a: String.raw`\[
  \det(\lambda I-A)=\lambda^3-6\lambda^2+10\lambda-4,
  \]
  \(\operatorname{tr}(A)=6\)，\(\det A=4\)，二阶主子式之和为 \(10\)。`,
  sol: String.raw`直接展开
  \[
  \det(\lambda I-A)=
  \begin{vmatrix}
  \lambda-2&-1&0\\
  -1&\lambda-2&-1\\
  0&-1&\lambda-2
  \end{vmatrix}.
  \]

  按第一行展开：
  \[
  (\lambda-2)\bigl[(\lambda-2)^2-1\bigr]
  -(\lambda-2).
  \]
  即
  \[
  (\lambda-2)^3-(\lambda-2)+(\lambda-2)
  =(\lambda-2)^3-2(\lambda-2).
  \]

  展开得
  \[
  \lambda^3-6\lambda^2+12\lambda-8-2\lambda+4
  =\lambda^3-6\lambda^2+10\lambda-4.
  \]

  由特征多项式
  \[
  \lambda^3-\operatorname{tr}(A)\lambda^2
  +(\text{二阶主子式之和})\lambda-\det A,
  \]
  对比系数得
  \[
  \operatorname{tr}(A)=6,\qquad
  \det A=4,\qquad
  \text{二阶主子式之和}=10.
  \]
  故答案为上述各值。` },

{ id:'LA02-75', ch:2, type:'计算', diff:4, tags:'牛顿公式 特征多项式 迹',
  q: String.raw`设 3 阶矩阵 \(A\) 满足
  \[
  \operatorname{tr}(A)=4,\qquad
  \operatorname{tr}(A^2)=6,\qquad
  \operatorname{tr}(A^3)=10.
  \]
  求 \(A\) 的特征多项式与 \(\det A\)。`,
  a: String.raw`\[
  \det(\lambda I-A)=\lambda^3-4\lambda^2+5\lambda-2,
  \qquad \det A=2.
  \]`,
  sol: String.raw`设特征值为 \(\lambda_1,\lambda_2,\lambda_3\)，记
  \[
  e_1=\sum\lambda_i,\quad
  e_2=\sum_{i<j}\lambda_i\lambda_j,\quad
  e_3=\lambda_1\lambda_2\lambda_3.
  \]
  则 \(e_1=\operatorname{tr}(A)=4\)。

  由
  \[
  \operatorname{tr}(A^2)=e_1^2-2e_2
  \]
  得
  \[
  6=16-2e_2,
  \]
  故 \(e_2=5\)。

  再由牛顿公式
  \[
  \operatorname{tr}(A^3)-e_1\operatorname{tr}(A^2)
  +e_2\operatorname{tr}(A)-3e_3=0,
  \]
  代入得
  \[
  10-4\cdot6+5\cdot4-3e_3=0,
  \]
  即
  \[
  6-3e_3=0,\qquad e_3=2.
  \]

  因此特征多项式为
  \[
  \lambda^3-4\lambda^2+5\lambda-2,
  \]
  且
  \[
  \det A=e_3=2.
  \]
  故答案为上述两式。` },

{ id:'LA02-76', ch:2, type:'证明', diff:5, tags:'分块矩阵 逆矩阵 特征值',
  q: String.raw`设 \(A\) 为 \(n\) 阶矩阵，
  \[
  M=\begin{pmatrix}I&A\\A&I\end{pmatrix}.
  \]
  证明 \(M\) 可逆当且仅当 \(I-A^2\) 可逆，并求 \(M^{-1}\)。`,
  a: String.raw`\[
  M^{-1}=
  \begin{pmatrix}
  (I-A^2)^{-1}&-A(I-A^2)^{-1}\\
  -A(I-A^2)^{-1}&(I-A^2)^{-1}
  \end{pmatrix}.
  \]`,
  sol: String.raw`令
  \[
  Q=\begin{pmatrix}I&I\\I&-I\end{pmatrix},
  \]
  则 \(Q^2=2I\)，且 \(Q^{-1}=\dfrac12Q\)。

  直接计算
  \[
  QMQ=
  \begin{pmatrix}I&I\\I&-I\end{pmatrix}
  \begin{pmatrix}I&A\\A&I\end{pmatrix}
  \begin{pmatrix}I&I\\I&-I\end{pmatrix}
  =
  \begin{pmatrix}2(I+A)&0\\0&2(I-A)\end{pmatrix}.
  \]
  即
  \[
  M=\frac12Q
  \begin{pmatrix}I+A&0\\0&I-A\end{pmatrix}Q.
  \]

  因 \(Q\) 可逆，\(M\) 可逆当且仅当 \(I+A\) 与 \(I-A\) 都可逆。而
  \[
  \det(I+A)\det(I-A)=\det(I-A^2),
  \]
  故这等价于 \(I-A^2\) 可逆。

  此时
  \[
  M^{-1}
  =\frac12Q
  \begin{pmatrix}(I+A)^{-1}&0\\0&(I-A)^{-1}\end{pmatrix}Q.
  \]
  由
  \[
  (I+A)^{-1}+(I-A)^{-1}=2(I-A^2)^{-1},
  \]
  \[
  (I+A)^{-1}-(I-A)^{-1}=-2A(I-A^2)^{-1},
  \]
  代入并按 \(2\times2\) 分块展开，得
  \[
  M^{-1}=
  \begin{pmatrix}
  (I-A^2)^{-1}&-A(I-A^2)^{-1}\\
  -A(I-A^2)^{-1}&(I-A^2)^{-1}
  \end{pmatrix}.
  \]
  证毕。` },

{ id:'LA02-77', ch:2, type:'证明', diff:5, tags:'矩阵指数 幂等矩阵 矩阵函数',
  q: String.raw`设 \(A\) 为 \(n\) 阶矩阵，且 \(A^2=A\)。证明
  \[
  e^A=I+(e-1)A.
  \]`,
  a: String.raw`\(e^A=I+(e-1)A\)。`,
  sol: String.raw`由 \(A^2=A\) 归纳得
  \[
  A^k=A\qquad(k\ge1).
  \]

  代入矩阵指数的定义：
  \[
  e^A=\sum_{k=0}^{\infty}\frac{A^k}{k!}
  =I+\sum_{k=1}^{\infty}\frac{A}{k!}.
  \]

  注意 \(\displaystyle\sum_{k=1}^{\infty}\frac{1}{k!}=e-1\)，故
  \[
  e^A=I+(e-1)A.
  \]
  证毕。` },

{ id:'LA02-78', ch:2, type:'计算', diff:5, tags:'矩阵多项式 逆矩阵 特征值',
  q: String.raw`设 3 阶矩阵 \(A\) 满足
  \[
  A^2=A+2I.
  \]
  求 \(A\) 的特征值的可能值；证明 \(A\) 可逆并求 \(A^{-1}\)；再用 \(A\) 与 \(I\) 表示 \(A^3\)。`,
  a: String.raw`特征值为 \(2\) 或 \(-1\)；\(A^{-1}=\dfrac12(A-I)\)；\(A^3=3A+2I\)。`,
  sol: String.raw`设 \(\lambda\) 为 \(A\) 的特征值，则
  \[
  \lambda^2=\lambda+2,
  \]
  即
  \[
  (\lambda-2)(\lambda+1)=0.
  \]
  故特征值只能是 \(2\) 或 \(-1\)。

  由
  \[
  A^2-A=2I
  \]
  得
  \[
  A(A-I)=2I,
  \]
  故 \(A\) 可逆，且
  \[
  A^{-1}=\frac12(A-I).
  \]

  又
  \[
  A^3=A\cdot A^2=A(A+2I)=A^2+2A.
  \]
  再用 \(A^2=A+2I\)，得
  \[
  A^3=(A+2I)+2A=3A+2I.
  \]
  故答案为上述各式。` },

{ id:'LA02-79', ch:2, type:'计算', diff:4, tags:'Sylvester秩不等式 乘积的秩',
  q: String.raw`设 \(A\) 为 \(3\times5\) 矩阵，\(r(A)=3\)；\(B\) 为 \(5\times3\) 矩阵，\(r(B)=3\)。求 \(r(AB)\) 的所有可能值。`,
  a: String.raw`\(r(AB)\) 的可能值为 \(1,2,3\)。`,
  sol: String.raw`由 Sylvester 秩不等式
  \[
  r(AB)\ge r(A)+r(B)-5=3+3-5=1.
  \]
  又
  \[
  r(AB)\le\min\{r(A),r(B)\}=3.
  \]
  故
  \[
  1\le r(AB)\le3.
  \]

  下面说明三个值都能取到。\(\ker A\) 是 \(\mathbb R^5\) 中的 \(2\) 维子空间，\(\operatorname{Im}B\) 是 \(3\) 维子空间，故
  \[
  \dim(\ker A\cap\operatorname{Im}B)\ge2+3-5=0,
  \]
  且该交的维数可以取 \(0,1,2\)（在 \(5\) 维空间中适当选取两个子空间即可）。

  而
  \[
  r(AB)=\dim A(\operatorname{Im}B)=\dim\operatorname{Im}B-\dim(\ker A\cap\operatorname{Im}B).
  \]
  故 \(r(AB)\) 分别可取 \(3,2,1\)。所有可能值为 \(1,2,3\)。` },

{ id:'LA02-80', ch:2, type:'计算', diff:4, tags:'齐次方程组 零空间 秩',
  q: String.raw`设
  \[
  A=\begin{pmatrix}
  1&2&3\\
  2&4&6\\
  1&1&1
  \end{pmatrix}.
  \]
  求齐次方程组 \(Ax=0\) 解空间的维数，并写出一组基。`,
  a: String.raw`解空间维数为 \(1\)，一组基为 \(\{(1,-2,1)^T\}\)。`,
  sol: String.raw`对 \(A\) 作初等行变换。第二行是第一行的 \(2\) 倍，故
  \[
  r(A)=r\begin{pmatrix}1&2&3\\1&1&1\end{pmatrix}=2.
  \]

  未知数个数 \(n=3\)，故解空间维数为
  \[
  n-r(A)=3-2=1.
  \]

  解方程组
  \[
  x_1+2x_2+3x_3=0,\qquad
  x_1+x_2+x_3=0.
  \]
  两式相减得
  \[
  x_2+2x_3=0,\qquad x_2=-2x_3.
  \]
  代回第二式：
  \[
  x_1=x_3.
  \]

  令 \(x_3=t\)，得
  \[
  x=t\begin{pmatrix}1\\-2\\1\end{pmatrix}.
  \]
  故解空间维数为 \(1\)，一组基为 \((1,-2,1)^T\)。` },

{ id:'LA02-81', ch:2, type:'证明', diff:5, tags:'秩等式 转置 零空间',
  q: String.raw`设 \(A\) 为 \(m\times n\) 实矩阵。证明
  \[
  r(A^TA)=r(A).
  \]`,
  a: String.raw`\(r(A^TA)=r(A)\)。`,
  sol: String.raw`先证明
  \[
  \ker(A^TA)=\ker A.
  \]
  显然 \(\ker A\subset\ker(A^TA)\)。

  反之，设 \(x\in\ker(A^TA)\)，即 \(A^TAx=0\)。两边左乘 \(x^T\)，得
  \[
  x^TA^TAx=(Ax)^T(Ax)=\|Ax\|^2=0.
  \]
  由实向量长度为零知
  \[
  Ax=0,
  \]
  即 \(x\in\ker A\)。故两个零空间相等。

  于是
  \[
  n-r(A^TA)=\dim\ker(A^TA)=\dim\ker A=n-r(A),
  \]
  从而
  \[
  r(A^TA)=r(A).
  \]
  证毕。` },

{ id:'LA02-82', ch:2, type:'证明', diff:4, tags:'转置 零矩阵 平方和',
  q: String.raw`设 \(A\) 为 \(m\times n\) 实矩阵，且
  \[
  A^TA=0.
  \]
  证明 \(A=0\)。`,
  a: String.raw`\(A=0\)。`,
  sol: String.raw`记 \(A=(a_{ij})\)。矩阵 \(A^TA\) 的第 \((j,j)\) 个对角元为
  \[
  (A^TA)_{jj}=\sum_{i=1}^{m}a_{ij}^2.
  \]
  因 \(A^TA=0\)，故
  \[
  \sum_{i=1}^{m}a_{ij}^2=0
  \]
  对每个 \(j=1,\dots,n\) 成立。

  这是若干实数平方之和，为零当且仅当每一项为零，故
  \[
  a_{ij}=0\qquad(1\le i\le m,\ 1\le j\le n).
  \]

  即 \(A=0\)。证毕。` },

{ id:'LA02-83', ch:2, type:'证明', diff:5, tags:'对称矩阵 幂零 迹',
  q: String.raw`设 \(A\) 为 \(n\) 阶实对称矩阵，且 \(A^2=0\)。证明 \(A=0\)。`,
  a: String.raw`\(A=0\)。`,
  sol: String.raw`因 \(A\) 实对称，\(A^T=A\)，故
  \[
  A^TA=A^2=0.
  \]

  另一方面，
  \[
  \operatorname{tr}(A^TA)
  =\sum_{i=1}^{n}\sum_{j=1}^{n}a_{ij}^2.
  \]
  由 \(A^TA=0\) 得
  \[
  \sum_{i,j}a_{ij}^2=0.
  \]

  这是实数平方和，为零当且仅当所有 \(a_{ij}=0\)，故
  \[
  A=0.
  \]
  证毕。` },

{ id:'LA02-84', ch:2, type:'证明', diff:4, tags:'反对称矩阵 二次型',
  q: String.raw`设 \(A\) 为 \(n\) 阶实反对称矩阵，即 \(A^T=-A\)。证明对任意实列向量 \(x\)，都有
  \[
  x^TAx=0.
  \]`,
  a: String.raw`\(x^TAx=0\)。`,
  sol: String.raw`\(x^TAx\) 是一个实数，等于它自己的转置：
  \[
  x^TAx=(x^TAx)^T=x^TA^Tx.
  \]

  代入 \(A^T=-A\)，得
  \[
  x^TAx=-x^TAx.
  \]

  移项得
  \[
  2x^TAx=0,
  \]
  故
  \[
  x^TAx=0.
  \]
  证毕。` },

{ id:'LA02-85', ch:2, type:'计算', diff:5, tags:'分块矩阵 行列式 矩阵分解',
  q: String.raw`设
  \[
  A=\begin{pmatrix}1&2\\2&1\end{pmatrix},\qquad
  B=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad
  M=\begin{pmatrix}A&B\\B&A\end{pmatrix}.
  \]
  求 \(\det M\)，并证明对任意同阶方阵 \(A,B\) 都有
  \[
  \det\begin{pmatrix}A&B\\B&A\end{pmatrix}
  =\det(A+B)\det(A-B).
  \]`,
  a: String.raw`\(\det M=0\)，且一般公式成立。`,
  sol: String.raw`令
  \[
  Q=\begin{pmatrix}I&I\\I&-I\end{pmatrix},
  \]
  则 \(Q^2=2I\)，且
  \[
  Q\begin{pmatrix}A+B&0\\0&A-B\end{pmatrix}Q
  =
  \begin{pmatrix}2A&2B\\2B&2A\end{pmatrix}.
  \]
  因此
  \[
  \begin{pmatrix}A&B\\B&A\end{pmatrix}
  =\frac12Q
  \begin{pmatrix}A+B&0\\0&A-B\end{pmatrix}Q.
  \]

  两边取行列式。记矩阵阶数为 \(2n\)，则
  \[
  \det M
  =\left(\frac12\right)^{2n}\det(Q)^2
  \det(A+B)\det(A-B).
  \]
  由 \(Q^2=2I\) 得 \(\det(Q)^2=2^{2n}\)，故
  \[
  \det M=\det(A+B)\det(A-B).
  \]

  本题中
  \[
  A+B=\begin{pmatrix}1&3\\3&1\end{pmatrix},\qquad
  A-B=\begin{pmatrix}1&1\\1&1\end{pmatrix}.
  \]
  于是
  \[
  \det(A+B)=1-9=-8,\qquad \det(A-B)=0,
  \]
  故
  \[
  \det M=(-8)\cdot0=0.
  \]
  故答案为 \(0\)。` },

{ id:'LA02-86', ch:2, type:'证明', diff:5, tags:'矩阵方程 迹 无解',
  q: String.raw`证明不存在 \(n\) 阶矩阵 \(X\) 满足
  \[
  AX-XA=I.
  \]`,
  a: String.raw`不存在这样的 \(X\)。`,
  sol: String.raw`假设存在 \(n\) 阶矩阵 \(X\) 使
  \[
  AX-XA=I.
  \]

  两边取迹：
  \[
  \operatorname{tr}(AX-XA)=\operatorname{tr}(I)=n.
  \]

  另一方面，由迹的循环性质
  \[
  \operatorname{tr}(AX)=\operatorname{tr}(XA),
  \]
  故
  \[
  \operatorname{tr}(AX-XA)
  =\operatorname{tr}(AX)-\operatorname{tr}(XA)=0.
  \]

  于是 \(0=n\)，这与 \(n\ge1\) 矛盾。故不存在这样的 \(X\)。证毕。` },

{ id:'LA02-87', ch:2, type:'计算', diff:5, tags:'矩阵的幂 全1矩阵 二项式',
  q: String.raw`设 \(J\) 为 3 阶全 1 矩阵，
  \[
  A=J-I_3.
  \]
  求 \(A^n\)（\(n\) 为正整数）。`,
  a: String.raw`\[
  A^n=(-1)^nI_3+\frac{2^n-(-1)^n}{3}J.
  \]`,
  sol: String.raw`先注意
  \[
  J^2=3J,
  \]
  归纳得
  \[
  J^k=3^{k-1}J\qquad(k\ge1).
  \]

  由 \(A=J-I\) 及 \(J\) 与 \(I\) 可交换，用二项式定理：
  \[
  A^n=\sum_{k=0}^{n}\binom{n}{k}J^k(-1)^{n-k}.
  \]

  分离 \(k=0\) 与 \(k\ge1\) 的项：
  \[
  A^n=(-1)^nI+
  \sum_{k=1}^{n}\binom{n}{k}3^{k-1}(-1)^{n-k}J.
  \]

  其中系数和为
  \[
  \frac13\sum_{k=1}^{n}\binom{n}{k}3^k(-1)^{n-k}
  =\frac13\bigl(2^n-(-1)^n\bigr).
  \]

  故
  \[
  A^n=(-1)^nI+\frac{2^n-(-1)^n}{3}J.
  \]
  故答案为上述表达式。` },

{ id:'LA02-88', ch:2, type:'计算', diff:5, tags:'置换矩阵 矩阵的幂 逆矩阵',
  q: String.raw`设
  \[
  P=\begin{pmatrix}
  0&1&0\\
  0&0&1\\
  1&0&0
  \end{pmatrix}.
  \]
  求 \(P^{100}\) 与 \(P^{-1}\)。`,
  a: String.raw`\[
  P^{100}=P=\begin{pmatrix}0&1&0\\0&0&1\\1&0&0\end{pmatrix},
  \qquad
  P^{-1}=P^2=\begin{pmatrix}0&0&1\\1&0&0\\0&1&0\end{pmatrix}.
  \]`,
  sol: String.raw`\(P\) 是循环置换矩阵，直接计算
  \[
  P^2=\begin{pmatrix}0&0&1\\1&0&0\\0&1&0\end{pmatrix},
  \qquad
  P^3=I.
  \]

  因此 \(P\) 的幂以 \(3\) 为周期：
  \[
  P^k=
  \begin{cases}
  I,&k\equiv0\pmod3,\\
  P,&k\equiv1\pmod3,\\
  P^2,&k\equiv2\pmod3.
  \end{cases}
  \]

  由 \(100=3\cdot33+1\) 得
  \[
  P^{100}=P.
  \]

  又由 \(P^3=I\) 得
  \[
  P^{-1}=P^2
  =\begin{pmatrix}0&0&1\\1&0&0\\0&1&0\end{pmatrix}.
  \]
  故答案为上述两矩阵。` },

{ id:'LA02-89', ch:2, type:'证明', diff:5, tags:'幂等矩阵 行列式 可对角化',
  q: String.raw`设 \(A\) 为 \(n\) 阶矩阵，且 \(A^2=A\)。证明
  \[
  \det A\in\{0,1\},
  \]
  并证明 \(\det A=1\) 当且仅当 \(A=I\)。`,
  a: String.raw`\(\det A\in\{0,1\}\)，且 \(\det A=1\iff A=I\)。`,
  sol: String.raw`由 \(A^2=A\) 知 \(A\) 的特征值只能是 \(0\) 或 \(1\)，且 \(A\) 可对角化。

  于是
  \[
  \det A=\prod_{i=1}^{n}\lambda_i,
  \]
  其中每个 \(\lambda_i\in\{0,1\}\)，故
  \[
  \det A\in\{0,1\}.
  \]

  若 \(A=I\)，显然 \(\det A=1\)。

  反之，若 \(\det A=1\)，则所有特征值都不为 \(0\)，只能全为 \(1\)。因 \(A\) 可对角化，故
  \[
  A\sim I,
  \]
  从而
  \[
  A=I.
  \]
  证毕。` },

{ id:'LA02-90', ch:2, type:'证明', diff:5, tags:'对合矩阵 行列式 迹',
  q: String.raw`设 \(A\) 为 \(n\) 阶矩阵，且 \(A^2=I\)。证明
  \[
  \det A=(-1)^{(n-\operatorname{tr}A)/2}.
  \]`,
  a: String.raw`\(\det A=(-1)^{(n-\operatorname{tr}A)/2}\)。`,
  sol: String.raw`由 \(A^2=I\) 知 \(A\) 的特征值只能是 \(1\) 或 \(-1\)，且 \(A\) 可对角化。

  设特征值 \(-1\) 的重数为 \(k\)，则特征值 \(1\) 的重数为 \(n-k\)。于是
  \[
  \operatorname{tr}A=(n-k)-k=n-2k.
  \]

  由此解出
  \[
  k=\frac{n-\operatorname{tr}A}{2}.
  \]

  又
  \[
  \det A=1^{n-k}(-1)^k=(-1)^k,
  \]
  故
  \[
  \det A=(-1)^{(n-\operatorname{tr}A)/2}.
  \]
  证毕。` },

{ id:'LA02-91', ch:2, type:'计算', diff:5, tags:'伴随矩阵 迭代 行列式',
  q: String.raw`设 \(A\) 为 4 阶矩阵，\(\det A=3\)。求 \((A^*)^*\) 与 \(\det\bigl((A^*)^*\bigr)\)。`,
  a: String.raw`\((A^*)^*=9A\)，\(\det\bigl((A^*)^*\bigr)=19683\)。`,
  sol: String.raw`由公式
  \[
  (A^*)^*=(\det A)^{\,n-2}A
  \]
  取 \(n=4,\ \det A=3\)，得
  \[
  (A^*)^*=3^2A=9A.
  \]

  于是
  \[
  \det\bigl((A^*)^*\bigr)=\det(9A)=9^4\det A.
  \]

  计算
  \[
  9^4=6561,
  \]
  故
  \[
  \det\bigl((A^*)^*\bigr)=6561\cdot3=19683.
  \]
  故答案为上述两式。` },

{ id:'LA02-92', ch:2, type:'计算', diff:5, tags:'分块矩阵 逆矩阵 舒尔补',
  q: String.raw`设
  \[
  M=\begin{pmatrix}
  1&1&0&1\\
  0&1&1&0\\
  1&0&2&0\\
  1&1&0&2
  \end{pmatrix}.
  \]
  求 \(M^{-1}\)。`,
  a: String.raw`\[
  M^{-1}=
  \begin{pmatrix}
  \dfrac43&-\dfrac23&\dfrac13&-\dfrac23\\[4pt]
  \dfrac23&\dfrac23&-\dfrac13&-\dfrac13\\[4pt]
  -\dfrac23&\dfrac13&\dfrac13&\dfrac13\\[4pt]
  -1&0&0&1
  \end{pmatrix}.
  \]`,
  sol: String.raw`将 \(M\) 写成
  \[
  M=\begin{pmatrix}A&B\\C&D\end{pmatrix},
  \]
  其中
  \[
  A=\begin{pmatrix}1&1\\0&1\end{pmatrix},\quad
  B=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad
  C=\begin{pmatrix}1&0\\1&1\end{pmatrix},\quad
  D=2I_2.
  \]

  因 \(A\) 可逆，计算舒尔补
  \[
  S=D-CA^{-1}B.
  \]
  先算
  \[
  A^{-1}=\begin{pmatrix}1&-1\\0&1\end{pmatrix},
  \qquad
  A^{-1}B=\begin{pmatrix}-1&1\\1&0\end{pmatrix},
  \]
  \[
  CA^{-1}B=
  \begin{pmatrix}1&0\\1&1\end{pmatrix}
  \begin{pmatrix}-1&1\\1&0\end{pmatrix}
  =
  \begin{pmatrix}-1&1\\0&1\end{pmatrix}.
  \]
  故
  \[
  S=2I_2-\begin{pmatrix}-1&1\\0&1\end{pmatrix}
  =\begin{pmatrix}3&-1\\0&1\end{pmatrix}.
  \]

  \(S\) 可逆，且
  \[
  S^{-1}=\frac13\begin{pmatrix}1&1\\0&3\end{pmatrix}.
  \]
  由分块逆公式逐块计算
  \[
  \begin{pmatrix}A&B\\C&D\end{pmatrix}^{-1}
  =
  \begin{pmatrix}
  A^{-1}+A^{-1}BS^{-1}CA^{-1}&-A^{-1}BS^{-1}\\
  -S^{-1}CA^{-1}&S^{-1}
  \end{pmatrix},
  \]
  得
  \[
  M^{-1}=
  \begin{pmatrix}
  \dfrac43&-\dfrac23&\dfrac13&-\dfrac23\\[4pt]
  \dfrac23&\dfrac23&-\dfrac13&-\dfrac13\\[4pt]
  -\dfrac23&\dfrac13&\dfrac13&\dfrac13\\[4pt]
  -1&0&0&1
  \end{pmatrix}.
  \]
  故答案为上述矩阵。` },

{ id:'LA02-93', ch:2, type:'计算', diff:5, tags:'Sherman-Morrison公式 秩一扰动',
  q: String.raw`设
  \[
  A=\operatorname{diag}(1,2,3),\qquad
  u=\begin{pmatrix}1\\1\\1\end{pmatrix},\qquad
  v=\begin{pmatrix}1\\1\\0\end{pmatrix}.
  \]
  求 \((A+uv^T)^{-1}\)。`,
  a: String.raw`\[
  (A+uv^T)^{-1}=
  \begin{pmatrix}
  \dfrac35&-\dfrac15&0\\[4pt]
  -\dfrac15&\dfrac25&0\\[4pt]
  -\dfrac{2}{15}&-\dfrac{1}{15}&\dfrac13
  \end{pmatrix}.
  \]`,
  sol: String.raw`由 Sherman-Morrison 公式
  \[
  (A+uv^T)^{-1}
  =A^{-1}-\frac{A^{-1}uv^TA^{-1}}{1+v^TA^{-1}u}.
  \]

  这里
  \[
  A^{-1}=\operatorname{diag}\left(1,\frac12,\frac13\right),
  \]
  且
  \[
  v^TA^{-1}u=1+\frac12+0=\frac32,
  \]
  故分母为
  \[
  1+\frac32=\frac52.
  \]

  又
  \[
  A^{-1}u=\begin{pmatrix}1\\[2pt]\dfrac12\\[4pt]\dfrac13\end{pmatrix},
  \qquad
  v^TA^{-1}=\begin{pmatrix}1&\dfrac12&0\end{pmatrix}.
  \]
  于是
  \[
  \frac{A^{-1}uv^TA^{-1}}{1+v^TA^{-1}u}
  =\frac25
  \begin{pmatrix}
  1&\dfrac12&0\\[4pt]
  \dfrac12&\dfrac14&0\\[4pt]
  \dfrac13&\dfrac16&0
  \end{pmatrix}
  =
  \begin{pmatrix}
  \dfrac25&\dfrac15&0\\[4pt]
  \dfrac15&\dfrac1{10}&0\\[4pt]
  \dfrac{2}{15}&\dfrac{1}{15}&0
  \end{pmatrix}.
  \]

  用 \(A^{-1}\) 减去上式，得
  \[
  (A+uv^T)^{-1}=
  \begin{pmatrix}
  \dfrac35&-\dfrac15&0\\[4pt]
  -\dfrac15&\dfrac25&0\\[4pt]
  -\dfrac{2}{15}&-\dfrac{1}{15}&\dfrac13
  \end{pmatrix}.
  \]
  故答案为上述矩阵。` },

{ id:'LA02-94', ch:2, type:'计算', diff:5, tags:'Cayley-Hamilton定理 逆矩阵 矩阵多项式',
  q: String.raw`设 3 阶矩阵 \(A\) 的特征多项式为
  \[
  f(\lambda)=\lambda^3-2\lambda^2+3\lambda-4.
  \]
  用 \(A\) 与 \(I\) 表示 \(A^{-1}\)。`,
  a: String.raw`\[
  A^{-1}=\frac14\bigl(A^2-2A+3I\bigr).
  \]`,
  sol: String.raw`由 Cayley-Hamilton 定理，
  \[
  A^3-2A^2+3A-4I=0.
  \]

  移项得
  \[
  A^3-2A^2+3A=4I,
  \]
  即
  \[
  A(A^2-2A+3I)=4I.
  \]

  因 \(4I\) 可逆，故 \(A\) 可逆，且
  \[
  A^{-1}=\frac14\bigl(A^2-2A+3I\bigr).
  \]
  故答案为上述表达式。` },

{ id:'LA02-95', ch:2, type:'证明', diff:5, tags:'矩阵指数 幂零矩阵 行列式',
  q: String.raw`设 \(n\) 阶矩阵 \(A\) 满足 \(A^k=0\)。证明
  \[
  e^A=I+A+\frac{A^2}{2!}+\cdots+\frac{A^{k-1}}{(k-1)!},
  \]
  并证明 \(\det(e^A)=1\)。`,
  a: String.raw`两式均成立。`,
  sol: String.raw`由 \(A^k=0\) 知当 \(j\ge k\) 时 \(A^j=0\)。代入矩阵指数定义
  \[
  e^A=\sum_{j=0}^{\infty}\frac{A^j}{j!},
  \]
  级数从第 \(k\) 项起全为零，故
  \[
  e^A=I+A+\frac{A^2}{2!}+\cdots+\frac{A^{k-1}}{(k-1)!}.
  \]

  \(A\) 是幂零矩阵，其特征值全为 \(0\)。因此 \(e^A\) 的特征值全为
  \[
  e^0=1.
  \]

  于是
  \[
  \det(e^A)=1^n=1.
  \]
  证毕。` },

{ id:'LA02-96', ch:2, type:'计算', diff:4, tags:'Sylvester秩不等式 乘积的秩',
  q: String.raw`设 \(A\) 为 \(4\times3\) 矩阵，\(r(A)=3\)；\(B\) 为 \(3\times4\) 矩阵，\(r(B)=2\)。求 \(r(AB)\)。`,
  a: String.raw`\(r(AB)=2\)。`,
  sol: String.raw`由 Sylvester 秩不等式，
  \[
  r(AB)\ge r(A)+r(B)-3=3+2-3=2.
  \]

  又
  \[
  r(AB)\le\min\{r(A),r(B)\}=2.
  \]

  两式合并得
  \[
  r(AB)=2.
  \]
  故答案为 \(2\)。` },

{ id:'LA02-97', ch:2, type:'计算', diff:5, tags:'秩一扰动 奇异矩阵 行列式',
  q: String.raw`设
  \[
  A=\begin{pmatrix}1&2\\2&4\end{pmatrix},\qquad
  u=\begin{pmatrix}1\\1\end{pmatrix},\qquad
  v=\begin{pmatrix}1\\-1\end{pmatrix}.
  \]
  求 \(\det(A+uv^T)\)。`,
  a: String.raw`\(\det(A+uv^T)=3\)。`,
  sol: String.raw`先写出秩一矩阵
  \[
  uv^T=
  \begin{pmatrix}1\\1\end{pmatrix}
  \begin{pmatrix}1&-1\end{pmatrix}
  =
  \begin{pmatrix}1&-1\\1&-1\end{pmatrix}.
  \]

  于是
  \[
  A+uv^T=
  \begin{pmatrix}1&2\\2&4\end{pmatrix}
  +
  \begin{pmatrix}1&-1\\1&-1\end{pmatrix}
  =
  \begin{pmatrix}2&1\\3&3\end{pmatrix}.
  \]

  计算行列式：
  \[
  \det(A+uv^T)=2\cdot3-1\cdot3=3.
  \]
  故答案为 \(3\)。` },

{ id:'LA02-98', ch:2, type:'证明', diff:5, tags:'Sylvester秩不等式 线性映射',
  q: String.raw`设 \(A\) 为 \(m\times n\) 矩阵，\(B\) 为 \(n\times s\) 矩阵。证明 Sylvester 秩不等式
  \[
  r(AB)\ge r(A)+r(B)-n.
  \]`,
  a: String.raw`不等式成立。`,
  sol: String.raw`把 \(B\) 看成线性映射 \(\mathbb R^s\to\mathbb R^n\)，\(A\) 看成 \(\mathbb R^n\to\mathbb R^m\)。则 \(AB\) 的像为
  \[
  \operatorname{Im}(AB)=A(\operatorname{Im}B).
  \]

  考虑 \(A\) 在子空间 \(\operatorname{Im}B\) 上的限制。由秩－零化度定理，
  \[
  \dim A(\operatorname{Im}B)
  \ge\dim\operatorname{Im}B-\dim\ker A.
  \]

  代入
  \[
  \dim\operatorname{Im}B=r(B),\qquad
  \dim\ker A=n-r(A),
  \]
  得
  \[
  r(AB)\ge r(B)-\bigl(n-r(A)\bigr)
  =r(A)+r(B)-n.
  \]
  证毕。` },

{ id:'LA02-99', ch:2, type:'计算', diff:5, tags:'矩阵指数 旋转矩阵 矩阵函数',
  q: String.raw`设
  \[
  A=\begin{pmatrix}0&-1\\1&0\end{pmatrix}.
  \]
  求 \(e^{tA}\)（\(t\) 为实参数）。`,
  a: String.raw`\[
  e^{tA}=
  \begin{pmatrix}
  \cos t&-\sin t\\
  \sin t&\cos t
  \end{pmatrix}.
  \]`,
  sol: String.raw`先计算
  \[
  A^2=\begin{pmatrix}-1&0\\0&-1\end{pmatrix}=-I_2.
  \]

  于是
  \[
  A^{2k}=(-1)^kI_2,\qquad
  A^{2k+1}=(-1)^kA.
  \]

  代入矩阵指数定义并按奇偶项分组：
  \[
  e^{tA}
  =\sum_{k=0}^{\infty}\frac{(-1)^kt^{2k}}{(2k)!}I_2
  +\sum_{k=0}^{\infty}\frac{(-1)^kt^{2k+1}}{(2k+1)!}A.
  \]

  两个级数分别是
  \[
  \cos t=\sum_{k=0}^{\infty}\frac{(-1)^kt^{2k}}{(2k)!},
  \qquad
  \sin t=\sum_{k=0}^{\infty}\frac{(-1)^kt^{2k+1}}{(2k+1)!}.
  \]

  故
  \[
  e^{tA}=\cos t\,I_2+\sin t\,A
  =
  \begin{pmatrix}
  \cos t&-\sin t\\
  \sin t&\cos t
  \end{pmatrix}.
  \]
  故答案为上述矩阵。` },

{ id:'LA02-100', ch:2, type:'证明', diff:5, tags:'对合矩阵 秩等式 综合',
  q: String.raw`设 \(A,B\) 均为 \(n\) 阶矩阵，满足
  \[
  A^2=B^2=I,\qquad AB=BA.
  \]
  证明
  \[
  r(A+B)+r(A-B)=n.
  \]`,
  a: String.raw`\(r(A+B)+r(A-B)=n\)。`,
  sol: String.raw`由 \(AB=BA\) 及 \(A^2=B^2=I\)，计算
  \[
  (A+B)(A-B)=A^2-AB+BA-B^2=I-I=0.
  \]
  由“乘积为零则秩之和不超阶数”得
  \[
  r(A+B)+r(A-B)\le n. \tag{1}
  \]

  另一方面，
  \[
  2A=(A+B)+(A-B),
  \]
  故
  \[
  r(2A)\le r(A+B)+r(A-B).
  \]

  由 \(A^2=I\) 知 \(A\) 可逆，故 \(r(2A)=n\)。于是
  \[
  n\le r(A+B)+r(A-B). \tag{2}
  \]

  合并 \((1)(2)\) 得
  \[
  r(A+B)+r(A-B)=n.
  \]
  证毕。` }
);
