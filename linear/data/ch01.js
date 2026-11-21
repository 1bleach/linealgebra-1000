window.LBANK = window.LBANK || [];
window.LBANK.push(
{ id:'LA01-01', ch:1, type:'计算', diff:5, tags:'范德蒙德行列式 行列式定义',
  q: String.raw`计算五阶行列式
  \[
  D=\begin{vmatrix}
  1&1&1&1&1\\
  1&2&4&8&16\\
  1&3&9&27&81\\
  1&4&16&64&256\\
  1&5&25&125&625
  \end{vmatrix}.
  \]`,
  a: String.raw`\(D=288\)。`,
  sol: String.raw`这是五阶范德蒙德行列式，取 \(x_1=1,x_2=2,\dots,x_5=5\)，则
  \[
  D=\prod_{1\le i<j\le5}(x_j-x_i).
  \]
  逐对计算：
  \[
  D=(2-1)(3-1)(3-2)(4-1)(4-2)(4-3)(5-1)(5-2)(5-3)(5-4).
  \]
  即
  \[
  D=1\cdot2\cdot1\cdot3\cdot2\cdot1\cdot4\cdot3\cdot2\cdot1=288.
  \]
  故 \(D=288\)。` },

{ id:'LA01-02', ch:1, type:'计算', diff:5, tags:'三对角行列式 递推法',
  q: String.raw`计算五阶行列式
  \[
  D_5=\begin{vmatrix}
  5&-2&0&0&0\\
  -2&5&-2&0&0\\
  0&-2&5&-2&0\\
  0&0&-2&5&-2\\
  0&0&0&-2&5
  \end{vmatrix}.
  \]`,
  a: String.raw`\(D_5=1365\)。`,
  sol: String.raw`记同结构的 \(n\) 阶行列式为 \(D_n\)。按第一行展开：
  \[
  D_n=5D_{n-1}-(-2)(-2)D_{n-2}=5D_{n-1}-4D_{n-2}.
  \]
  初值为 \(D_1=5,\ D_2=25-4=21\)。递推特征方程 \(r^2-5r+4=0\) 的两根为 \(1,4\)，故
  \[
  D_n=\frac{4^{n+1}-1}{3}.
  \]
  取 \(n=5\)：
  \[
  D_5=\frac{4^6-1}{3}=\frac{4095}{3}=1365.
  \]
  故 \(D_5=1365\)。` },

{ id:'LA01-03', ch:1, type:'计算', diff:5, tags:'加边法 爪形行列式',
  q: String.raw`计算五阶行列式
  \[
  D=\begin{vmatrix}
  2&1&1&1&1\\
  1&3&0&0&0\\
  1&0&4&0&0\\
  1&0&0&5&0\\
  1&0&0&0&6
  \end{vmatrix}.
  \]`,
  a: String.raw`\(D=378\)。`,
  sol: String.raw`这是爪形（箭形）行列式。将矩阵写成
  \[
  \begin{pmatrix}2&e^T\\ e&D_0\end{pmatrix},\qquad
  D_0=\operatorname{diag}(3,4,5,6),\quad e=(1,1,1,1)^T.
  \]
  由分块行列式公式（舒尔补）：
  \[
  D=\det(D_0)\,(2-e^TD_0^{-1}e).
  \]
  其中 \(\det(D_0)=3\cdot4\cdot5\cdot6=360\)，且
  \[
  e^TD_0^{-1}e=\frac13+\frac14+\frac15+\frac16=\frac{57}{60}.
  \]
  所以
  \[
  D=360\left(2-\frac{57}{60}\right)=360\cdot\frac{63}{60}=378.
  \]
  故 \(D=378\)。` },

{ id:'LA01-04', ch:1, type:'计算', diff:5, tags:'分块行列式 广义特征值',
  q: String.raw`设
  \[
  A=\begin{pmatrix}1&2\\3&4\end{pmatrix},\qquad
  B=\begin{pmatrix}0&1\\2&0\end{pmatrix}.
  \]
  计算分块矩阵
  \[
  M=\begin{pmatrix}A&B\\B&A\end{pmatrix}
  \]
  的行列式。`,
  a: String.raw`\(\det M=-33\)。`,
  sol: String.raw`令
  \[
  P=\begin{pmatrix}I&I\\I&-I\end{pmatrix},
  \]
  则 \(\det P=(-2)^2=4\)，并且
  \[
  \begin{pmatrix}A&B\\B&A\end{pmatrix}
  =\frac12 P\begin{pmatrix}A+B&0\\0&A-B\end{pmatrix}P.
  \]
  两边取行列式：
  \[
  \det M=\left(\frac12\right)^4(\det P)^2\det(A+B)\det(A-B)
  =\det(A+B)\det(A-B).
  \]
  计算
  \[
  A+B=\begin{pmatrix}1&3\\5&4\end{pmatrix},\qquad \det(A+B)=4-15=-11,
  \]
  \[
  A-B=\begin{pmatrix}1&1\\1&4\end{pmatrix},\qquad \det(A-B)=4-1=3.
  \]
  故
  \[
  \det M=(-11)\cdot3=-33.
  \]` },

{ id:'LA01-05', ch:1, type:'计算', diff:5, tags:'特征值乘积法 矩阵多项式',
  q: String.raw`设 3 阶矩阵 \(A\) 的特征多项式为
  \[
  f(\lambda)=\lambda^3-6\lambda^2+11\lambda-6.
  \]
  求 \(\det(A^2+A+I)\)。`,
  a: String.raw`\(\det(A^2+A+I)=273\)。`,
  sol: String.raw`由
  \[
  f(\lambda)=(\lambda-1)(\lambda-2)(\lambda-3)
  \]
  知 \(A\) 的特征值为 \(1,2,3\)。若 \(\lambda\) 是 \(A\) 的特征值，则 \(\lambda^2+\lambda+1\) 是 \(A^2+A+I\) 的特征值。因此
  \[
  \det(A^2+A+I)=\prod_{i=1}^3(\lambda_i^2+\lambda_i+1)
  =(1+1+1)(4+2+1)(9+3+1).
  \]
  即
  \[
  \det(A^2+A+I)=3\cdot7\cdot13=273.
  \]
  故所求行列式为 \(273\)。` },

{ id:'LA01-06', ch:1, type:'计算', diff:5, tags:'循环矩阵 特征值',
  q: String.raw`计算四阶循环矩阵的行列式
  \[
  D=\begin{vmatrix}
  1&2&3&4\\
  4&1&2&3\\
  3&4&1&2\\
  2&3&4&1
  \end{vmatrix}.
  \]`,
  a: String.raw`\(D=-160\)。`,
  sol: String.raw`该循环矩阵的第一行为 \((1,2,3,4)\)，其特征值为
  \[
  \lambda_k=1+2\omega_k+3\omega_k^2+4\omega_k^3,\qquad
  \omega_k=e^{2\pi ik/4}\quad(k=0,1,2,3).
  \]
  分别计算：
  \[
  \lambda_0=10,\qquad \lambda_2=1-2+3-4=-2,
  \]
  \[
  \lambda_1=1+2i-3-4i=-2-2i,\qquad
  \lambda_3=1-2i-3+4i=-2+2i.
  \]
  因此
  \[
  D=10\cdot(-2)\cdot(-2-2i)(-2+2i)
  =10\cdot(-2)\cdot8=-160.
  \]
  故 \(D=-160\)。` },

{ id:'LA01-07', ch:1, type:'计算', diff:5, tags:'打洞公式 秩一修正',
  q: String.raw`设
  \[
  A=\operatorname{diag}(1,2,3,4,5),\qquad
  u=v=(1,1,1,1,1)^T.
  \]
  求 \(\det(A+uv^T)\)。`,
  a: String.raw`\(\det(A+uv^T)=394\)。`,
  sol: String.raw`由矩阵行列式引理（打洞公式）：
  \[
  \det(A+uv^T)=\det A\,\bigl(1+v^TA^{-1}u\bigr).
  \]
  这里
  \[
  \det A=1\cdot2\cdot3\cdot4\cdot5=120,
  \]
  且
  \[
  v^TA^{-1}u=1+\frac12+\frac13+\frac14+\frac15=\frac{137}{60}.
  \]
  于是
  \[
  \det(A+uv^T)=120\left(1+\frac{137}{60}\right)
  =120\cdot\frac{197}{60}=394.
  \]
  故所求为 \(394\)。` },

{ id:'LA01-08', ch:1, type:'计算', diff:5, tags:'伴随矩阵 行列式',
  q: String.raw`设 \(A\) 为 3 阶矩阵，\(\det A=2\)，\(A^*\) 为 \(A\) 的伴随矩阵。求
  \[
  \det(2A^*-3A^{-1}).
  \]`,
  a: String.raw`\(\det(2A^*-3A^{-1})=\dfrac12\)。`,
  sol: String.raw`由伴随矩阵性质
  \[
  A^*=\det(A)A^{-1}=2A^{-1}.
  \]
  于是
  \[
  2A^*-3A^{-1}=4A^{-1}-3A^{-1}=A^{-1}.
  \]
  所以
  \[
  \det(2A^*-3A^{-1})=\det(A^{-1})
  =\frac{1}{\det A}=\frac12.
  \]
  故答案为 \(\dfrac12\)。` },

{ id:'LA01-09', ch:1, type:'计算', diff:5, tags:'带参数行列式 特征值 秩',
  q: String.raw`设
  \[
  A=\begin{pmatrix}
  a&1&1&1\\
  1&a&1&1\\
  1&1&a&1\\
  1&1&1&a
  \end{pmatrix}.
  \]
  求 \(\det A\)；并问当 \(a\) 取何值时 \(A\) 不可逆，此时 \(r(A)\) 各为多少？`,
  a: String.raw`\(\det A=(a-1)^3(a+3)\)；\(a=1\) 时 \(r(A)=1\)，\(a=-3\) 时 \(r(A)=3\)。`,
  sol: String.raw`注意到
  \[
  A=(a-1)I+J,
  \]
  其中 \(J\) 为 4 阶全 1 矩阵。\(J\) 的特征值为 \(4,0,0,0\)，故 \(A\) 的特征值为
  \[
  a+3,\quad a-1,\quad a-1,\quad a-1.
  \]
  因此
  \[
  \det A=(a+3)(a-1)^3.
  \]
  当 \(a=1\) 时 \(A=J\)，故 \(r(A)=1\)。当 \(a=-3\) 时，\(A\) 的特征值为 \(0,-4,-4,-4\)，故 \(r(A)=3\)。其余情形 \(\det A\ne0\)，\(r(A)=4\)。` },

{ id:'LA01-10', ch:1, type:'计算', diff:5, tags:'行列式乘法公式 伴随矩阵',
  q: String.raw`设 \(A,B\) 均为 3 阶矩阵，\(\det A=2,\ \det B=3\)。求
  \[
  \det(2A^*B^{-1}),
  \]
  其中 \(A^*\) 为 \(A\) 的伴随矩阵。`,
  a: String.raw`\(\det(2A^*B^{-1})=\dfrac{32}{3}\)。`,
  sol: String.raw`先求 \(\det(A^*)\)。对 3 阶矩阵，
  \[
  \det(A^*)=\det(A)^{3-1}=2^2=4.
  \]
  再由行列式乘法公式：
  \[
  \det(2A^*B^{-1})=2^3\det(A^*)\det(B^{-1})
  =8\cdot4\cdot\frac13=\frac{32}{3}.
  \]
  故答案为 \(\dfrac{32}{3}\)。` },

{ id:'LA01-11', ch:1, type:'证明', diff:4, tags:'反对称矩阵 奇数阶 行列式',
  q: String.raw`设 \(A\) 是 \(n\) 阶实反对称矩阵，其中 \(n\) 为奇数。证明：\(\det A=0\)。`,
  a: String.raw`奇数阶实反对称矩阵必奇异，故其行列式为 \(0\)。`,
  sol: String.raw`设 \(A\) 为 \(n\) 阶实反对称矩阵，\(n\) 为奇数，则
  \[
  A^T=-A.
  \]
  利用转置不改变行列式：
  \[
  \det A=\det(A^T)=\det(-A)=(-1)^n\det A=-\det A.
  \]
  于是 \(2\det A=0\)，即
  \[
  \det A=0.
  \]
  故奇数阶实反对称矩阵必奇异。证毕。` },

{ id:'LA01-12', ch:1, type:'计算', diff:5, tags:'柯西行列式 范德蒙德行列式',
  q: String.raw`计算三阶行列式
  \[
  D=\begin{vmatrix}
  1&\dfrac12&\dfrac13\\[4pt]
  \dfrac12&\dfrac13&\dfrac14\\[4pt]
  \dfrac13&\dfrac14&\dfrac15
  \end{vmatrix}.
  \]`,
  a: String.raw`\(D=\dfrac{1}{2160}\)。`,
  sol: String.raw`这是柯西行列式。令
  \[
  x_i=i\quad(i=1,2,3),\qquad y_j=j-1\quad(j=1,2,3),
  \]
  则
  \[
  a_{ij}=\frac{1}{x_i+y_j}.
  \]
  柯西行列式公式给出
  \[
  D=\frac{\prod_{1\le i<j\le3}(x_j-x_i)(y_j-y_i)}
  {\prod_{i=1}^3\prod_{j=1}^3(x_i+y_j)}.
  \]
  分子为
  \[
  (1\cdot2\cdot1)(1\cdot2\cdot1)=4,
  \]
  分母为
  \[
  (1\cdot2\cdot3)(2\cdot3\cdot4)(3\cdot4\cdot5)=6\cdot24\cdot60=8640.
  \]
  所以
  \[
  D=\frac{4}{8640}=\frac{1}{2160}.
  \]
  故 \(D=\dfrac{1}{2160}\)。` },

{ id:'LA01-13', ch:1, type:'计算', diff:5, tags:'分块行列式 舒尔补',
  q: String.raw`设
  \[
  A=\begin{pmatrix}1&2\\3&4\end{pmatrix},\quad
  B=\begin{pmatrix}1&0\\0&1\end{pmatrix},\quad
  C=\begin{pmatrix}2&1\\1&1\end{pmatrix},\quad
  D=\begin{pmatrix}3&1\\1&2\end{pmatrix}.
  \]
  计算分块矩阵
  \[
  M=\begin{pmatrix}A&B\\C&D\end{pmatrix}
  \]
  的行列式。`,
  a: String.raw`\(\det M=-18\)。`,
  sol: String.raw`因为 \(\det A=-2\ne0\)，由舒尔补公式
  \[
  \det M=\det A\cdot\det(D-CA^{-1}B).
  \]
  计算
  \[
  A^{-1}=\begin{pmatrix}-2&1\\[2pt] \dfrac32&-\dfrac12\end{pmatrix},
  \]
  \[
  CA^{-1}B=
  \begin{pmatrix}2&1\\1&1\end{pmatrix}
  \begin{pmatrix}-2&1\\[2pt] \dfrac32&-\dfrac12\end{pmatrix}
  =\begin{pmatrix}-\dfrac52&\dfrac32\\[4pt]
  -\dfrac12&\dfrac12\end{pmatrix}.
  \]
  于是
  \[
  D-CA^{-1}B=
  \begin{pmatrix}\dfrac{11}{2}&-\dfrac12\\[4pt]
  \dfrac32&\dfrac32\end{pmatrix},
  \]
  其行列式为
  \[
  \frac{11}{2}\cdot\frac32-\left(-\frac12\right)\cdot\frac32
  =\frac{33}{4}+\frac34=9.
  \]
  故
  \[
  \det M=(-2)\cdot9=-18.
  \]
  答案为 \(-18\)。` },

{ id:'LA01-14', ch:1, type:'计算', diff:5, tags:'代数余子式 伴随矩阵 秩',
  q: String.raw`设 \(J\) 为 4 阶全 1 矩阵，\(A=J-4I\)。求
  \[
  \sum_{i=1}^4\sum_{j=1}^4 A_{ij},
  \]
  其中 \(A_{ij}\) 是元素 \(a_{ij}\) 的代数余子式。`,
  a: String.raw`\(\displaystyle\sum_{i,j}A_{ij}=-256\)。`,
  sol: String.raw`\(A=J-4I\) 的特征值为 \(0,-4,-4,-4\)，故 \(r(A)=3\)。设 \(A^*\) 为 \(A\) 的伴随矩阵。由于
  \[
  A\mathbf1=0,\qquad \mathbf1^TA=0,
  \]
  秩 3 矩阵的伴随矩阵是秩 1 矩阵，且其列空间为 \(\ker A\)、行空间为左零空间，故
  \[
  A^*=cJ
  \]
  对某个常数 \(c\) 成立。

  求 \(c\)：取 \(c=A_{11}\)，即划去第 1 行第 1 列所得 3 阶子式的行列式。该子矩阵对角元为 \(-3\)，其余元素为 \(1\)，特征值为 \(-1,-4,-4\)，故
  \[
  c=(-1)(-4)(-4)=-16.
  \]
  因此
  \[
  A^*=-16J.
  \]
  所有代数余子式之和等于 \(A^*\) 所有元素之和（两者互为转置），所以
  \[
  \sum_{i,j}A_{ij}=\sum_{i,j}(A^*)_{ji}
  =(-16)\cdot16=-256.
  \]
  故答案为 \(-256\)。` },

{ id:'LA01-15', ch:1, type:'计算', diff:4, tags:'行列式定义 排列符号',
  q: String.raw`计算五阶行列式
  \[
  D=\begin{vmatrix}
  0&0&1&0&0\\
  0&1&0&0&0\\
  1&0&0&0&0\\
  0&0&0&1&0\\
  0&0&0&0&1
  \end{vmatrix}.
  \]`,
  a: String.raw`\(D=-1\)。`,
  sol: String.raw`该矩阵是置换矩阵，其非零元位置对应排列
  \[
  \sigma=\begin{pmatrix}1&2&3&4&5\\3&2&1&4&5\end{pmatrix}.
  \]
  \(\sigma\) 只交换了 \(1\) 与 \(3\)，是一个对换，故 \(\sigma\) 为奇排列，符号为 \(-1\)。因此
  \[
  D=\operatorname{sgn}(\sigma)=-1.
  \]
  也可直接交换第 1、3 行化为单位矩阵，行列式变号，同样得 \(D=-1\)。` },

{ id:'LA01-16', ch:1, type:'计算', diff:5, tags:'拉普拉斯展开 分块三角',
  q: String.raw`计算六阶行列式
  \[
  D=\begin{vmatrix}
  1&2&3&0&0&0\\
  0&1&4&0&0&0\\
  5&6&0&0&0&0\\
  1&1&1&2&1&0\\
  2&2&2&1&3&1\\
  3&3&3&0&1&2
  \end{vmatrix}.
  \]`,
  a: String.raw`\(D=8\)。`,
  sol: String.raw`按前 3 行与前 3 列分块：
  \[
  D=\begin{vmatrix}A&0\\C&D_1\end{vmatrix}=\det A\cdot\det D_1,
  \]
  其中
  \[
  A=\begin{pmatrix}1&2&3\\0&1&4\\5&6&0\end{pmatrix},\qquad
  D_1=\begin{pmatrix}2&1&0\\1&3&1\\0&1&2\end{pmatrix}.
  \]
  计算
  \[
  \det A=1(0-24)-2(0-20)+3(0-5)
  =-24+40-15=1,
  \]
  \[
  \det D_1=2(6-1)-1(2-0)=10-2=8.
  \]
  故
  \[
  D=1\cdot8=8.
  \]
  答案为 \(8\)。` },

{ id:'LA01-17', ch:1, type:'证明', diff:5, tags:'范德蒙德推广 行列式性质',
  q: String.raw`设 \(a,b,c\) 互不相同，证明
  \[
  \begin{vmatrix}
  1&1&1\\
  a&b&c\\
  a^3&b^3&c^3
  \end{vmatrix}
  =(a-b)(b-c)(c-a)(a+b+c).
  \]`,
  a: String.raw`等式成立，左边等于 \((a-b)(b-c)(c-a)(a+b+c)\)。`,
  sol: String.raw`从第 2、3 列分别减去第 1 列：
  \[
  \begin{vmatrix}
  1&1&1\\
  a&b&c\\
  a^3&b^3&c^3
  \end{vmatrix}
  =
  \begin{vmatrix}
  1&0&0\\
  a&b-a&c-a\\
  a^3&b^3-a^3&c^3-a^3
  \end{vmatrix}.
  \]
  按第一行展开，并分解
  \[
  b^3-a^3=(b-a)(b^2+ab+a^2),\quad
  c^3-a^3=(c-a)(c^2+ac+a^2),
  \]
  得
  \[
  D=(b-a)(c-a)
  \begin{vmatrix}
  1&1\\
  b^2+ab+a^2&c^2+ac+a^2
  \end{vmatrix}.
  \]
  于是
  \[
  D=(b-a)(c-a)\bigl[(c^2+ac+a^2)-(b^2+ab+a^2)\bigr].
  \]
  即
  \[
  D=(b-a)(c-a)(c-b)(a+b+c).
  \]
  又
  \[
  (b-a)(c-a)(c-b)=(a-b)(b-c)(c-a),
  \]
  故
  \[
  D=(a-b)(b-c)(c-a)(a+b+c).
  \]
  证毕。` },

{ id:'LA01-18', ch:1, type:'计算', diff:5, tags:'范德蒙德逆用 多项式系数',
  q: String.raw`设
  \[
  D(x)=\begin{vmatrix}
  1&1&1&1\\
  1&2&3&x\\
  1&4&9&x^2\\
  1&8&27&x^3
  \end{vmatrix}.
  \]
  求 \(D(x)\) 中 \(x^2\) 的系数。`,
  a: String.raw`\(x^2\) 的系数为 \(-12\)。`,
  sol: String.raw`该行列式是范德蒙德行列式：
  \[
  D(x)=V(1,2,3,x)=\prod_{1\le i<j\le4}(x_j-x_i).
  \]
  取 \(x_1=1,x_2=2,x_3=3,x_4=x\)，则
  \[
  D(x)=(2-1)(3-1)(x-1)(3-2)(x-2)(x-3)
  =2(x-1)(x-2)(x-3).
  \]
  展开：
  \[
  D(x)=2(x^3-6x^2+11x-6)
  =2x^3-12x^2+22x-12.
  \]
  故 \(x^2\) 的系数为 \(-12\)。` },

{ id:'LA01-19', ch:1, type:'计算', diff:5, tags:'伴随矩阵 迭代伴随',
  q: String.raw`设 \(A\) 为 4 阶矩阵，\(\det A=2\)。求
  \[
  \det\bigl((A^*)^*\bigr),
  \]
  其中 \(A^*\) 为 \(A\) 的伴随矩阵。`,
  a: String.raw`\(\det\bigl((A^*)^*\bigr)=512\)。`,
  sol: String.raw`对 4 阶矩阵 \(A\)，有
  \[
  \det(A^*)=\det(A)^{4-1}=2^3=8.
  \]
  \(A^*\) 也是 4 阶矩阵，再对 \(A^*\) 用同一公式：
  \[
  \det\bigl((A^*)^*\bigr)=\det(A^*)^{3}=8^3=512.
  \]
  也可直接写成
  \[
  \det\bigl((A^*)^*\bigr)=\det(A)^{(4-1)^2}=2^9=512.
  \]
  故答案为 \(512\)。` },

{ id:'LA01-20', ch:1, type:'计算', diff:5, tags:'行列式展开 托普利茨行列式',
  q: String.raw`计算四阶行列式
  \[
  D=\begin{vmatrix}
  0&1&2&3\\
  1&0&1&2\\
  2&1&0&1\\
  3&2&1&0
  \end{vmatrix}.
  \]`,
  a: String.raw`\(D=-12\)。`,
  sol: String.raw`按第一行展开：
  \[
  D=a_{12}C_{12}+a_{13}C_{13}+a_{14}C_{14}
  =C_{12}+2C_{13}+3C_{14}.
  \]
  分别计算三个代数余子式：
  \[
  C_{12}=(-1)^{1+2}
  \begin{vmatrix}1&1&2\\2&0&1\\3&1&0\end{vmatrix}
  =-\bigl[1(0-1)-1(0-3)+2(2-0)\bigr]=-6,
  \]
  \[
  C_{13}=(-1)^{1+3}
  \begin{vmatrix}1&0&2\\2&1&1\\3&2&0\end{vmatrix}
  =1(0-2)-0+2(4-3)=0,
  \]
  \[
  C_{14}=(-1)^{1+4}
  \begin{vmatrix}1&0&1\\2&1&0\\3&2&1\end{vmatrix}
  =-\bigl[1(1-0)+1(4-3)\bigr]=-2.
  \]
  因此
  \[
  D=(-6)+2\cdot0+3\cdot(-2)=-12.
  \]
  故 \(D=-12\)。` }
);
