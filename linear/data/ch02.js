window.LBANK = window.LBANK || [];
window.LBANK.push(
{ id:'LA02-01', ch:2, type:'计算', diff:5, tags:'秩不等式 西尔维斯特不等式',
  q: String.raw`设 \(A\) 为 \(3\times4\) 矩阵，\(r(A)=3\)；\(B\) 为 \(4\times3\) 矩阵，\(r(B)=2\)。求 \(r(AB)\) 的所有可能值。`,
  a: String.raw`\(r(AB)\) 的可能值为 \(1\) 或 \(2\)。`,
  sol: String.raw`由西尔维斯特（Sylvester）秩不等式
  \[
  r(AB)\ge r(A)+r(B)-4=3+2-4=1.
  \]
  又
  \[
  r(AB)\le\min\{r(A),r(B)\}=2.
  \]
  因此 \(r(AB)\in\{1,2\}\)。

  两个值都能取到：\(\ker A\) 是 \(\mathbb R^4\) 中的 1 维子空间，\(\operatorname{col}(B)\) 是 2 维子空间。若
  \[
  \ker A\subset\operatorname{col}(B),
  \]
  则
  \[
  r(AB)=\dim A(\operatorname{col}B)=2-1=1;
  \]
  若 \(\ker A\cap\operatorname{col}(B)=\{0\}\)，则 \(r(AB)=2\)。故可能值为 \(1\) 或 \(2\)。` },

{ id:'LA02-02', ch:2, type:'计算', diff:4, tags:'幂等矩阵 特征值 迹',
  q: String.raw`设 3 阶矩阵 \(A\) 满足 \(A^2=A\)，且 \(\operatorname{tr}(A)=2\)。求 \(\det(A+2I)\)。`,
  a: String.raw`\(\det(A+2I)=18\)。`,
  sol: String.raw`由 \(A^2=A\) 知 \(A\) 的特征值满足
  \[
  \lambda^2=\lambda,
  \]
  即 \(\lambda=0\) 或 \(\lambda=1\)。又
  \[
  \operatorname{tr}(A)=\lambda_1+\lambda_2+\lambda_3=2,
  \]
  故三个特征值为 \(1,1,0\)。于是 \(A+2I\) 的特征值为
  \[
  3,\ 3,\ 2.
  \]
  因此
  \[
  \det(A+2I)=3\cdot3\cdot2=18.
  \]
  答案为 \(18\)。` },

{ id:'LA02-03', ch:2, type:'证明', diff:5, tags:'对合矩阵 秩等式 零空间',
  q: String.raw`设 \(n\) 阶矩阵 \(A\) 满足 \(A^2=I\)。证明
  \[
  r(A+I)+r(A-I)=n.
  \]`,
  a: String.raw`\(r(A+I)+r(A-I)=n\)。`,
  sol: String.raw`由 \(A^2=I\) 得
  \[
  (A+I)(A-I)=A^2-I=0.
  \]
  因此
  \[
  \operatorname{Im}(A-I)\subset\ker(A+I),
  \]
  从而
  \[
  r(A-I)\le n-r(A+I),
  \]
  即
  \[
  r(A+I)+r(A-I)\le n.
  \]
  另一方面，
  \[
  2I=(A+I)-(A-I),
  \]
  故
  \[
  n=r(2I)\le r(A+I)+r(A-I).
  \]
  两式合并得
  \[
  r(A+I)+r(A-I)=n.
  \]
  证毕。` },

{ id:'LA02-04', ch:2, type:'计算', diff:4, tags:'幂零矩阵 逆矩阵 矩阵多项式',
  q: String.raw`设
  \[
  A=\begin{pmatrix}
  0&1&1\\
  0&0&1\\
  0&0&0
  \end{pmatrix}.
  \]
  证明 \(A^3=0\)，并求 \((I-A)^{-1}\)。`,
  a: String.raw`\((I-A)^{-1}=\begin{pmatrix}1&1&2\\0&1&1\\0&0&1\end{pmatrix}\)。`,
  sol: String.raw`直接计算：
  \[
  A^2=\begin{pmatrix}
  0&0&1\\
  0&0&0\\
  0&0&0
  \end{pmatrix},
  \qquad
  A^3=0.
  \]
  于是
  \[
  (I-A)(I+A+A^2)=I-A^3=I,
  \]
  所以
  \[
  (I-A)^{-1}=I+A+A^2
  =\begin{pmatrix}
  1&1&2\\
  0&1&1\\
  0&0&1
  \end{pmatrix}.
  \]
  故所求逆矩阵为上述矩阵。` },

{ id:'LA02-05', ch:2, type:'计算', diff:5, tags:'伴随矩阵的秩 秩公式',
  q: String.raw`设 \(A\) 为 4 阶矩阵，\(r(A)=3\)。求 \(r(A^*)\) 与 \(r\bigl((A^*)^*\bigr)\)。`,
  a: String.raw`\(r(A^*)=1,\quad r\bigl((A^*)^*\bigr)=0\)。`,
  sol: String.raw`伴随矩阵的秩公式为
  \[
  r(A^*)=
  \begin{cases}
  n,&r(A)=n,\\
  1,&r(A)=n-1,\\
  0,&r(A)\le n-2.
  \end{cases}
  \]
  这里 \(n=4,\ r(A)=3=n-1\)，故
  \[
  r(A^*)=1.
  \]
  又 \(r(A^*)=1\le 4-2=2\)，对 \(A^*\) 再用同一公式得
  \[
  r\bigl((A^*)^*\bigr)=0.
  \]
  故答案为 \(r(A^*)=1,\ r\bigl((A^*)^*\bigr)=0\)。` },

{ id:'LA02-06', ch:2, type:'计算', diff:5, tags:'矩阵方程 逆矩阵',
  q: String.raw`设
  \[
  A=\begin{pmatrix}
  1&2&3\\
  0&1&4\\
  5&6&0
  \end{pmatrix},\qquad
  B=\begin{pmatrix}
  1&0\\
  0&1\\
  0&0
  \end{pmatrix}.
  \]
  解矩阵方程 \(AX=B\)。`,
  a: String.raw`\(X=\begin{pmatrix}-24&18\\20&-15\\-5&4\end{pmatrix}\)。`,
  sol: String.raw`先求 \(A^{-1}\)。计算得 \(\det A=1\)，且
  \[
  A^{-1}=
  \begin{pmatrix}
  -24&18&5\\
  20&-15&-4\\
  -5&4&1
  \end{pmatrix}.
  \]
  于是
  \[
  X=A^{-1}B=
  \begin{pmatrix}
  -24&18&5\\
  20&-15&-4\\
  -5&4&1
  \end{pmatrix}
  \begin{pmatrix}
  1&0\\
  0&1\\
  0&0
  \end{pmatrix}
  =
  \begin{pmatrix}
  -24&18\\
  20&-15\\
  -5&4
  \end{pmatrix}.
  \]
  故 \(X\) 为上述矩阵。` },

{ id:'LA02-07', ch:2, type:'计算', diff:5, tags:'迹 特征值 牛顿公式',
  q: String.raw`设 3 阶矩阵 \(A\) 满足
  \[
  \operatorname{tr}(A)=6,\qquad \operatorname{tr}(A^2)=14,\qquad \det A=6.
  \]
  求 \(\operatorname{tr}(A^3)\)。`,
  a: String.raw`\(\operatorname{tr}(A^3)=36\)。`,
  sol: String.raw`设 \(A\) 的特征值为 \(\lambda_1,\lambda_2,\lambda_3\)。则
  \[
  \lambda_1+\lambda_2+\lambda_3=6,\qquad
  \lambda_1^2+\lambda_2^2+\lambda_3^2=14.
  \]
  于是
  \[
  \sum_{i<j}\lambda_i\lambda_j
  =\frac{\left(\sum\lambda_i\right)^2-\sum\lambda_i^2}{2}
  =\frac{36-14}{2}=11.
  \]
  又
  \[
  \lambda_1\lambda_2\lambda_3=\det A=6,
  \]
  故特征多项式为
  \[
  \lambda^3-6\lambda^2+11\lambda-6
  =(\lambda-1)(\lambda-2)(\lambda-3),
  \]
  特征值为 \(1,2,3\)。所以
  \[
  \operatorname{tr}(A^3)=1^3+2^3+3^3=1+8+27=36.
  \]
  答案为 \(36\)。` },

{ id:'LA02-08', ch:2, type:'计算', diff:5, tags:'AB与BA 特征值 特征多项式',
  q: String.raw`设
  \[
  A=\begin{pmatrix}1&2\\3&4\end{pmatrix},\qquad
  B=\begin{pmatrix}2&0\\1&1\end{pmatrix}.
  \]
  求 \(AB\) 与 \(BA\) 的特征值，并验证它们相同。`,
  a: String.raw`两者的特征值均为 \(4+2\sqrt5\) 与 \(4-2\sqrt5\)。`,
  sol: String.raw`计算
  \[
  AB=
  \begin{pmatrix}1&2\\3&4\end{pmatrix}
  \begin{pmatrix}2&0\\1&1\end{pmatrix}
  =\begin{pmatrix}4&2\\10&4\end{pmatrix},
  \]
  \[
  BA=
  \begin{pmatrix}2&0\\1&1\end{pmatrix}
  \begin{pmatrix}1&2\\3&4\end{pmatrix}
  =\begin{pmatrix}2&4\\4&6\end{pmatrix}.
  \]
  \(AB\) 的特征多项式为
  \[
  \lambda^2-8\lambda-4,
  \]
  \(BA\) 的特征多项式也是
  \[
  \lambda^2-8\lambda-4.
  \]
  因此两者的特征值均为
  \[
  \lambda=\frac{8\pm\sqrt{64+16}}{2}=4\pm2\sqrt5.
  \]
  故 \(AB\) 与 \(BA\) 的特征值相同。` },

{ id:'LA02-09', ch:2, type:'计算', diff:4, tags:'初等矩阵 初等变换 行列式',
  q: String.raw`设 \(A\) 为 3 阶矩阵，\(\det A=2\)。令 \(E_1\) 为交换第 1、2 行的初等矩阵，\(E_2\) 为将第 1 行的 3 倍加到第 3 行的初等矩阵，\(E_3\) 为将第 3 行加到第 1 行的初等矩阵。求
  \[
  \det(E_3E_2E_1A).
  \]`,
  a: String.raw`\(\det(E_3E_2E_1A)=-2\)。`,
  sol: String.raw`三次初等变换对应的行列式因子分别为
  \[
  \det E_1=-1,\qquad \det E_2=1,\qquad \det E_3=1.
  \]
  其中 \(E_1\) 是对换，\(E_2,E_3\) 都是倍加变换。于是
  \[
  \det(E_3E_2E_1A)
  =\det E_3\det E_2\det E_1\det A
  =1\cdot1\cdot(-1)\cdot2=-2.
  \]
  故所求为 \(-2\)。` },

{ id:'LA02-10', ch:2, type:'计算', diff:5, tags:'分块矩阵求逆 舒尔补',
  q: String.raw`设
  \[
  M=\begin{pmatrix}
  1&2&1&0\\
  3&4&0&1\\
  0&0&2&1\\
  0&0&0&3
  \end{pmatrix}.
  \]
  求 \(M^{-1}\)。`,
  a: String.raw`\[
  M^{-1}=\begin{pmatrix}
  -2&1&1&-\dfrac23\\[4pt]
  \dfrac32&-\dfrac12&-\dfrac34&\dfrac{5}{12}\\[4pt]
  0&0&\dfrac12&-\dfrac16\\[4pt]
  0&0&0&\dfrac13
  \end{pmatrix}.
  \]`,
  sol: String.raw`将 \(M\) 写成
  \[
  M=\begin{pmatrix}A&B\\0&D\end{pmatrix},
  \]
  其中
  \[
  A=\begin{pmatrix}1&2\\3&4\end{pmatrix},\quad
  B=I_2,\quad
  D=\begin{pmatrix}2&1\\0&3\end{pmatrix}.
  \]
  则
  \[
  M^{-1}=\begin{pmatrix}
  A^{-1}&-A^{-1}BD^{-1}\\
  0&D^{-1}
  \end{pmatrix}.
  \]
  计算
  \[
  A^{-1}=\begin{pmatrix}-2&1\\[2pt] \dfrac32&-\dfrac12\end{pmatrix},
  \qquad
  D^{-1}=\begin{pmatrix}\dfrac12&-\dfrac16\\[4pt] 0&\dfrac13\end{pmatrix}.
  \]
  于是
  \[
  -A^{-1}D^{-1}=
  \begin{pmatrix}
  1&-\dfrac23\\[4pt]
  -\dfrac34&\dfrac{5}{12}
  \end{pmatrix}.
  \]
  故
  \[
  M^{-1}=\begin{pmatrix}
  -2&1&1&-\dfrac23\\[4pt]
  \dfrac32&-\dfrac12&-\dfrac34&\dfrac{5}{12}\\[4pt]
  0&0&\dfrac12&-\dfrac16\\[4pt]
  0&0&0&\dfrac13
  \end{pmatrix}.
  \]
  答案为上述矩阵。` },

{ id:'LA02-11', ch:2, type:'证明', diff:4, tags:'矩阵多项式 逆矩阵',
  q: String.raw`设 3 阶矩阵 \(A\) 满足
  \[
  A^2-3A+2I=0.
  \]
  证明 \(A\) 可逆，并求 \(A^{-1}\)。`,
  a: String.raw`\(A\) 可逆，且 \(A^{-1}=\dfrac12(3I-A)\)。`,
  sol: String.raw`由条件
  \[
  A^2-3A+2I=0
  \]
  移项得
  \[
  3A-A^2=2I,
  \]
  即
  \[
  A(3I-A)=2I.
  \]
  因此
  \[
  A\cdot\frac{3I-A}{2}=I.
  \]
  所以 \(A\) 可逆，且
  \[
  A^{-1}=\frac12(3I-A).
  \]
  证毕。` },

{ id:'LA02-12', ch:2, type:'计算', diff:4, tags:'可交换矩阵 矩阵方程',
  q: String.raw`设
  \[
  A=\begin{pmatrix}1&1\\0&2\end{pmatrix}.
  \]
  求所有与 \(A\) 可交换的 2 阶矩阵 \(X\)。`,
  a: String.raw`\(X=\begin{pmatrix}a&b\\0&a+b\end{pmatrix}\)，其中 \(a,b\) 任意。`,
  sol: String.raw`设
  \[
  X=\begin{pmatrix}x&y\\z&w\end{pmatrix}.
  \]
  由 \(AX=XA\)，计算
  \[
  AX=
  \begin{pmatrix}1&1\\0&2\end{pmatrix}
  \begin{pmatrix}x&y\\z&w\end{pmatrix}
  =\begin{pmatrix}x+z&y+w\\2z&2w\end{pmatrix},
  \]
  \[
  XA=
  \begin{pmatrix}x&y\\z&w\end{pmatrix}
  \begin{pmatrix}1&1\\0&2\end{pmatrix}
  =\begin{pmatrix}x&x+2y\\z&z+2w\end{pmatrix}.
  \]
  比较元素得
  \[
  x+z=x,\quad y+w=x+2y,\quad 2z=z,\quad 2w=z+2w.
  \]
  由第一、三式得 \(z=0\)，由第二式得 \(w=x+y\)，第四式自动成立。故
  \[
  X=\begin{pmatrix}x&y\\0&x+y\end{pmatrix},
  \]
  其中 \(x,y\) 任意。` },

{ id:'LA02-13', ch:2, type:'计算', diff:5, tags:'秩一矩阵 矩阵的幂',
  q: String.raw`设
  \[
  \alpha=(1,2,3)^T,\qquad \beta=(1,-1,1)^T,\qquad A=\alpha\beta^T.
  \]
  求 \(A^{10}\)。`,
  a: String.raw`\[
  A^{10}=512A=
  \begin{pmatrix}
  512&-512&512\\
  1024&-1024&1024\\
  1536&-1536&1536
  \end{pmatrix}.
  \]`,
  sol: String.raw`因为
  \[
  \beta^T\alpha=1\cdot1+(-1)\cdot2+1\cdot3=2,
  \]
  所以
  \[
  A^2=\alpha\beta^T\alpha\beta^T
  =\alpha(\beta^T\alpha)\beta^T=2A.
  \]
  归纳可得
  \[
  A^n=2^{n-1}A\qquad(n\ge1).
  \]
  取 \(n=10\)：
  \[
  A^{10}=2^9A
  =512\begin{pmatrix}
  1&-1&1\\
  2&-2&2\\
  3&-3&3
  \end{pmatrix}
  =\begin{pmatrix}
  512&-512&512\\
  1024&-1024&1024\\
  1536&-1536&1536
  \end{pmatrix}.
  \]
  故答案为上述矩阵。` },

{ id:'LA02-14', ch:2, type:'计算', diff:5, tags:'Sherman-Morrison公式 逆矩阵',
  q: String.raw`设
  \[
  A=\operatorname{diag}(1,2,3),\qquad u=v=(1,1,1)^T.
  \]
  求 \((A+uv^T)^{-1}\)。`,
  a: String.raw`\[
  (A+uv^T)^{-1}=
  \frac1{17}
  \begin{pmatrix}
  11&-3&-2\\
  -3&7&-1\\
  -2&-1&5
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
  \qquad
  v^TA^{-1}u=1+\frac12+\frac13=\frac{11}{6}.
  \]
  故分母为
  \[
  1+\frac{11}{6}=\frac{17}{6}.
  \]
  又
  \[
  A^{-1}u=\begin{pmatrix}1\\[2pt]\dfrac12\\[4pt]\dfrac13\end{pmatrix},
  \]
  所以
  \[
  (A+uv^T)^{-1}
  =A^{-1}-\frac{6}{17}
  \begin{pmatrix}1\\[2pt]\dfrac12\\[4pt]\dfrac13\end{pmatrix}
  \begin{pmatrix}1&\dfrac12&\dfrac13\end{pmatrix}.
  \]
  计算得
  \[
  (A+uv^T)^{-1}=
  \frac1{17}
  \begin{pmatrix}
  11&-3&-2\\
  -3&7&-1\\
  -2&-1&5
  \end{pmatrix}.
  \]
  故答案为上述矩阵。` },

{ id:'LA02-15', ch:2, type:'计算', diff:5, tags:'矩阵的幂 特征值 对角化',
  q: String.raw`设
  \[
  A=\begin{pmatrix}2&1\\1&2\end{pmatrix}.
  \]
  求 \(A^5\)。`,
  a: String.raw`\(A^5=\begin{pmatrix}122&121\\121&122\end{pmatrix}\)。`,
  sol: String.raw`\(A\) 的特征值为 \(3,1\)，对应的特征向量可取
  \[
  p_1=\begin{pmatrix}1\\1\end{pmatrix},\qquad
  p_2=\begin{pmatrix}1\\-1\end{pmatrix}.
  \]
  令 \(P=(p_1,p_2)\)，则
  \[
  P^{-1}AP=\operatorname{diag}(3,1).
  \]
  从而
  \[
  A^n=P\operatorname{diag}(3^n,1)P^{-1}
  =\frac12
  \begin{pmatrix}
  3^n+1&3^n-1\\
  3^n-1&3^n+1
  \end{pmatrix}.
  \]
  取 \(n=5\)，\(3^5=243\)，得
  \[
  A^5=\frac12
  \begin{pmatrix}244&242\\242&244\end{pmatrix}
  =\begin{pmatrix}122&121\\121&122\end{pmatrix}.
  \]
  故答案为上述矩阵。` },

{ id:'LA02-16', ch:2, type:'计算', diff:4, tags:'对称矩阵 反对称矩阵 矩阵分解',
  q: String.raw`将矩阵
  \[
  A=\begin{pmatrix}
  1&2&3\\
  0&4&5\\
  6&7&8
  \end{pmatrix}
  \]
  分解为对称矩阵与反对称矩阵之和。`,
  a: String.raw`\[
  S=\begin{pmatrix}
  1&1&\dfrac92\\[4pt]
  1&4&6\\[4pt]
  \dfrac92&6&8
  \end{pmatrix},\qquad
  K=\begin{pmatrix}
  0&1&-\dfrac32\\[4pt]
  -1&0&-1\\[4pt]
  \dfrac32&1&0
  \end{pmatrix}.
  \]`,
  sol: String.raw`任一矩阵都可分解为
  \[
  A=S+K,\qquad
  S=\frac{A+A^T}{2},\qquad
  K=\frac{A-A^T}{2},
  \]
  其中 \(S\) 为对称矩阵，\(K\) 为反对称矩阵。计算
  \[
  A^T=\begin{pmatrix}
  1&0&6\\
  2&4&7\\
  3&5&8
  \end{pmatrix}.
  \]
  于是
  \[
  S=\frac12
  \begin{pmatrix}
  2&2&9\\
  2&8&12\\
  9&12&16
  \end{pmatrix}
  =\begin{pmatrix}
  1&1&\dfrac92\\[4pt]
  1&4&6\\[4pt]
  \dfrac92&6&8
  \end{pmatrix},
  \]
  \[
  K=\frac12
  \begin{pmatrix}
  0&2&-3\\
  -2&0&-2\\
  3&2&0
  \end{pmatrix}
  =\begin{pmatrix}
  0&1&-\dfrac32\\[4pt]
  -1&0&-1\\[4pt]
  \dfrac32&1&0
  \end{pmatrix}.
  \]
  故 \(A=S+K\) 即为所求分解。` },

{ id:'LA02-17', ch:2, type:'证明', diff:4, tags:'矩阵不等式 秩',
  q: String.raw`设 \(A,B\) 均为 \(m\times n\) 矩阵。证明
  \[
  r(A+B)\le r(A)+r(B).
  \]`,
  a: String.raw`\(r(A+B)\le r(A)+r(B)\)。`,
  sol: String.raw`对任意 \(x\in\mathbb R^n\)，
  \[
  (A+B)x=Ax+Bx\in\operatorname{col}(A)+\operatorname{col}(B),
  \]
  故
  \[
  \operatorname{col}(A+B)\subset
  \operatorname{col}(A)+\operatorname{col}(B).
  \]
  于是
  \[
  r(A+B)=\dim\operatorname{col}(A+B)
  \le\dim\bigl(\operatorname{col}(A)+\operatorname{col}(B)\bigr).
  \]
  而
  \[
  \dim\bigl(\operatorname{col}(A)+\operatorname{col}(B)\bigr)
  \le\dim\operatorname{col}(A)+\dim\operatorname{col}(B)
  =r(A)+r(B).
  \]
  故
  \[
  r(A+B)\le r(A)+r(B).
  \]
  证毕。` },

{ id:'LA02-18', ch:2, type:'证明', diff:5, tags:'逆矩阵展开 矩阵恒等式',
  q: String.raw`设 \(A,B,A+B\) 均可逆。证明
  \[
  A^{-1}+B^{-1}=A^{-1}(A+B)B^{-1},
  \]
  并求 \((A^{-1}+B^{-1})^{-1}\) 的表达式；若
  \[
  A=\begin{pmatrix}2&1\\1&3\end{pmatrix},\qquad
  B=\begin{pmatrix}1&2\\0&1\end{pmatrix},
  \]
  计算 \((A^{-1}+B^{-1})^{-1}\)。`,
  a: String.raw`\((A^{-1}+B^{-1})^{-1}=B(A+B)^{-1}A=\begin{pmatrix}\dfrac79&\dfrac{11}{9}\\[4pt]\dfrac19&\dfrac89\end{pmatrix}\)。`,
  sol: String.raw`由
  \[
  A^{-1}(A+B)B^{-1}
  =A^{-1}ABB^{-1}+A^{-1}BB^{-1}
  =B^{-1}+A^{-1},
  \]
  得
  \[
  A^{-1}+B^{-1}=A^{-1}(A+B)B^{-1}.
  \]
  两边取逆：
  \[
  (A^{-1}+B^{-1})^{-1}=B(A+B)^{-1}A.
  \]
  当
  \[
  A=\begin{pmatrix}2&1\\1&3\end{pmatrix},\qquad
  B=\begin{pmatrix}1&2\\0&1\end{pmatrix}
  \]
  时，
  \[
  A+B=\begin{pmatrix}3&3\\1&4\end{pmatrix},
  \qquad
  (A+B)^{-1}=\frac19
  \begin{pmatrix}4&-3\\-1&3\end{pmatrix}.
  \]
  于是
  \[
  B(A+B)^{-1}A
  =\frac19
  \begin{pmatrix}1&2\\0&1\end{pmatrix}
  \begin{pmatrix}4&-3\\-1&3\end{pmatrix}
  \begin{pmatrix}2&1\\1&3\end{pmatrix}.
  \]
  先算前两个矩阵的乘积：
  \[
  \begin{pmatrix}1&2\\0&1\end{pmatrix}
  \begin{pmatrix}4&-3\\-1&3\end{pmatrix}
  =\begin{pmatrix}2&3\\-1&3\end{pmatrix}.
  \]
  再乘 \(A\)：
  \[
  \frac19
  \begin{pmatrix}2&3\\-1&3\end{pmatrix}
  \begin{pmatrix}2&1\\1&3\end{pmatrix}
  =\frac19
  \begin{pmatrix}7&11\\1&8\end{pmatrix}
  =\begin{pmatrix}\dfrac79&\dfrac{11}{9}\\[4pt]
  \dfrac19&\dfrac89\end{pmatrix}.
  \]
  故答案为上述矩阵。` },

{ id:'LA02-19', ch:2, type:'计算', diff:5, tags:'最小多项式 特征多项式 若尔当块',
  q: String.raw`求矩阵
  \[
  A=\begin{pmatrix}
  2&1&0\\
  0&2&0\\
  0&0&3
  \end{pmatrix}
  \]
  的最小多项式。`,
  a: String.raw`\(m(\lambda)=(\lambda-2)^2(\lambda-3)\)。`,
  sol: String.raw`先求特征多项式：
  \[
  \det(\lambda I-A)=(\lambda-2)^2(\lambda-3).
  \]
  因此最小多项式只能是
  \[
  (\lambda-2)(\lambda-3)
  \quad\text{或}\quad
  (\lambda-2)^2(\lambda-3).
  \]
  计算
  \[
  (A-2I)(A-3I)
  =
  \begin{pmatrix}0&1&0\\0&0&0\\0&0&1\end{pmatrix}
  \begin{pmatrix}-1&1&0\\0&-1&0\\0&0&0\end{pmatrix}
  =
  \begin{pmatrix}0&-1&0\\0&0&0\\0&0&0\end{pmatrix}
  \ne0.
  \]
  而
  \[
  (A-2I)^2(A-3I)=0.
  \]
  故最小多项式为
  \[
  m(\lambda)=(\lambda-2)^2(\lambda-3).
  \]
  答案为上述多项式。` },

{ id:'LA02-20', ch:2, type:'计算', diff:5, tags:'幂零矩阵 若尔当块 秩',
  q: String.raw`设
  \[
  A=\begin{pmatrix}
  0&1&0&0\\
  0&0&1&0\\
  0&0&0&1\\
  0&0&0&0
  \end{pmatrix}.
  \]
  求 \(r(A),r(A^2),r(A^3)\)，并求 \(A^4\)。`,
  a: String.raw`\(r(A)=3,\ r(A^2)=2,\ r(A^3)=1,\ A^4=0\)。`,
  sol: String.raw`\(A\) 是 4 阶幂零若尔当块。直接计算：
  \[
  A^2=
  \begin{pmatrix}
  0&0&1&0\\
  0&0&0&1\\
  0&0&0&0\\
  0&0&0&0
  \end{pmatrix},
  \qquad
  A^3=
  \begin{pmatrix}
  0&0&0&1\\
  0&0&0&0\\
  0&0&0&0\\
  0&0&0&0
  \end{pmatrix},
  \]
  且
  \[
  A^4=0.
  \]
  因此
  \[
  r(A)=3,\qquad r(A^2)=2,\qquad r(A^3)=1.
  \]
  故答案为 \(r(A)=3,\ r(A^2)=2,\ r(A^3)=1,\ A^4=0\)。` }
);
