window.LBANK = window.LBANK || [];
window.LBANK.push(
{ id:'LA01-21', ch:1, type:'计算', diff:5, tags:'循环矩阵 特征值法 单位根',
  q: String.raw`设 \(A\) 为 5 阶循环矩阵，其第一行为 \((2,1,0,0,0)\)，即
\[ A=\begin{pmatrix}2&1&0&0&0\\0&2&1&0&0\\0&0&2&1&0\\0&0&0&2&1\\1&0&0&0&2\end{pmatrix}. \]
求 \(\det A\)。`,
  a: String.raw`\(\det A=33\)。`,
  sol: String.raw`记 \(P\) 为 5 阶循环置换矩阵（第一行为 \((0,1,0,0,0)\)），则 \(A=2I+P\)。
\(P\) 的特征值为 5 次单位根 \(\omega^{k}\)，其中 \(\omega=e^{2\pi i/5}\)，\(k=0,1,2,3,4\)，故 \(A\) 的特征值为 \(\lambda_k=2+\omega^{k}\)。
于是 \(\det A=\prod_{k=0}^{4}(2+\omega^{k})\)。
由 \(\prod_{k=0}^{4}(x-\omega^{k})=x^{5}-1\) 得 \(\prod_{k=0}^{4}(x+\omega^{k})=x^{5}+1\)，令 \(x=2\) 即得 \(\det A=2^{5}+1=33\)。
一般地，首行为 \((a,b,0,\cdots,0)\) 的 \(n\) 阶循环矩阵行列式为 \(a^{n}+(-b)^{n}\)。` },

{ id:'LA01-22', ch:1, type:'计算', diff:5, tags:'三对角 递推 常系数线性递推',
  q: String.raw`计算 6 阶三对角行列式
\[ D_6=\begin{vmatrix}5&2&0&0&0&0\\2&5&2&0&0&0\\0&2&5&2&0&0\\0&0&2&5&2&0\\0&0&0&2&5&2\\0&0&0&0&2&5\end{vmatrix}. \]`,
  a: String.raw`\(D_6=5461\)。`,
  sol: String.raw`按第一行展开，得递推 \(D_n=5D_{n-1}-4D_{n-2}\)，初值 \(D_1=5,\ D_2=21\)。
特征方程 \(r^{2}-5r+4=0\) 的根为 \(r=1,4\)，故 \(D_n=\alpha\cdot 4^{n}+\beta\)。
代入初值：\(4\alpha+\beta=5,\ 16\alpha+\beta=21\)，解得 \(\alpha=\dfrac{4}{3},\ \beta=-\dfrac{1}{3}\)。
所以 \(D_n=\dfrac{4^{n+1}-1}{3}\)，取 \(n=6\) 得 \(D_6=\dfrac{4^{7}-1}{3}=\dfrac{16383}{3}=5461\)。` },

{ id:'LA01-23', ch:1, type:'计算', diff:5, tags:'爪形行列式 消元 分块',
  q: String.raw`计算爪形行列式
\[ D=\begin{vmatrix}3&1&2&1&2\\1&2&0&0&0\\2&0&3&0&0\\1&0&0&4&0\\2&0&0&0&5\end{vmatrix}. \]`,
  a: String.raw`\(D=14\)。`,
  sol: String.raw`记对角块 \(D_0=\mathrm{diag}(2,3,4,5)\)，第一行去掉首元后的行向量为 \(b=(1,2,1,2)\)，第一列去掉首元后的列向量为 \(c=(1,2,1,2)^{T}\)，首元 \(a=3\)。
用 \(D_0^{-1}\) 消去第一行、第一列中的非对角块，得 \(\det D=\left(a-b^{T}D_0^{-1}c\right)\det D_0\)。
计算 \(b^{T}D_0^{-1}c=\dfrac{1}{2}+\dfrac{4}{3}+\dfrac{1}{4}+\dfrac{4}{5}=\dfrac{173}{60}\)，又 \(\det D_0=120\)。
故 \(D=120\left(3-\dfrac{173}{60}\right)=120\cdot\dfrac{7}{60}=14\)。` },

{ id:'LA01-24', ch:1, type:'计算', diff:5, tags:'上Hessenberg行列式 主子式展开',
  q: String.raw`计算上 Hessenberg 行列式
\[ D_5=\begin{vmatrix}2&1&1&1&1\\1&3&1&1&1\\0&2&4&1&1\\0&0&3&5&1\\0&0&0&4&6\end{vmatrix}. \]`,
  a: String.raw`\(D_5=450\)。`,
  sol: String.raw`记 \(D_k\) 为左上角 \(k\) 阶主子式：\(D_0=1,\ D_1=2,\ D_2=5,\ D_3=18,\ D_4=81\)。
上 Hessenberg 行列式有展开式 \(\det H_n=\sum_{r=1}^{n}(-1)^{n-r}h_{rn}\left(\prod_{i=r}^{n-1}h_{i+1,i}\right)D_{r-1}\)（次对角元非零）。
逐项代入：\(r=5:\ 6\cdot 81=486\)；\(r=4:\ -1\cdot 4\cdot 18=-72\)；\(r=3:\ +1\cdot(3\cdot 4)\cdot 5=60\)。
\(r=2:\ -1\cdot(2\cdot 3\cdot 4)\cdot 2=-48\)；\(r=1:\ +1\cdot(1\cdot 2\cdot 3\cdot 4)\cdot 1=24\)。
相加得 \(D_5=486-72+60-48+24=450\)。` },

{ id:'LA01-25', ch:1, type:'计算', diff:5, tags:'柯西行列式 Hilbert矩阵 范德蒙德',
  q: String.raw`计算 4 阶 Hilbert 型行列式
\[ H_4=\begin{vmatrix}1&\dfrac12&\dfrac13&\dfrac14\\ \dfrac12&\dfrac13&\dfrac14&\dfrac15\\ \dfrac13&\dfrac14&\dfrac15&\dfrac16\\ \dfrac14&\dfrac15&\dfrac16&\dfrac17\end{vmatrix}. \]`,
  a: String.raw`\(H_4=\dfrac{1}{6048000}\)。`,
  sol: String.raw`这是柯西行列式 \(a_{ij}=\dfrac{1}{x_i+y_j}\)，取 \(x_i=i,\ y_j=j-1\ (1\le i,j\le 4)\)。
柯西公式：\(\det\left(\dfrac{1}{x_i+y_j}\right)=\dfrac{\prod_{i<j}(x_j-x_i)(y_j-y_i)}{\prod_{i,j}(x_i+y_j)}\)。
分子 \(\prod_{i<j}(j-i)^{2}=\left(1\cdot 2\cdot 3\cdot 1\cdot 2\cdot 1\right)^{2}=12^{2}=144\)。
分母 \(\prod_{i,j}(i+j-1)=24\cdot 120\cdot 360\cdot 840=870912000\)。
故 \(H_4=\dfrac{144}{870912000}=\dfrac{1}{6048000}\)。` },

{ id:'LA01-26', ch:1, type:'计算', diff:4, tags:'范德蒙德行列式 基本公式',
  q: String.raw`计算 4 阶范德蒙德行列式
\[ V=\begin{vmatrix}1&1&1&1\\2&3&5&7\\4&9&25&49\\8&27&125&343\end{vmatrix}. \]`,
  a: String.raw`\(V=240\)。`,
  sol: String.raw`该矩阵为节点 \(x_1=2,\ x_2=3,\ x_3=5,\ x_4=7\) 的转置型范德蒙德矩阵，行列式与标准型相同。
范德蒙德公式：\(V=\prod_{1\le i<j\le 4}(x_j-x_i)\)。
逐个写出差：\(1,\ 3,\ 5,\ 2,\ 4,\ 2\)。
故 \(V=1\cdot 3\cdot 5\cdot 2\cdot 4\cdot 2=240\)。` },

{ id:'LA01-27', ch:1, type:'计算', diff:5, tags:'分块矩阵 Schur补 四块均非零',
  q: String.raw`设
\[ A=\begin{pmatrix}2&1\\1&3\end{pmatrix},\quad B=\begin{pmatrix}1&2\\0&1\end{pmatrix},\quad C=\begin{pmatrix}1&0\\2&1\end{pmatrix},\quad D_0=\begin{pmatrix}4&1\\1&3\end{pmatrix}, \]
计算 4 阶分块矩阵 \(\begin{pmatrix}A&B\\C&D_0\end{pmatrix}\) 的行列式。`,
  a: String.raw`行列式等于 \(17\)。`,
  sol: String.raw`\(\det A=2\cdot 3-1\cdot 1=5\ne 0\)，可用 Schur 补：\(\det M=\det A\cdot\det\left(D_0-CA^{-1}B\right)\)。
求逆：\(A^{-1}=\dfrac15\begin{pmatrix}3&-1\\-1&2\end{pmatrix}\)。
计算 \(CA^{-1}B=\dfrac15\begin{pmatrix}3&-1\\5&0\end{pmatrix}\begin{pmatrix}1&2\\0&1\end{pmatrix}=\dfrac15\begin{pmatrix}3&5\\5&10\end{pmatrix}\)。
于是 \(D_0-CA^{-1}B=\begin{pmatrix}4-\tfrac35&0\\0&1\end{pmatrix}=\begin{pmatrix}\tfrac{17}{5}&0\\0&1\end{pmatrix}\)，其行列式为 \(\dfrac{17}{5}\)。
故 \(\det M=5\cdot\dfrac{17}{5}=17\)。` },

{ id:'LA01-28', ch:1, type:'计算', diff:5, tags:'秩一扰动 行列式引理 特征值',
  q: String.raw`计算
\[ D=\begin{vmatrix}2&1&1&1\\1&3&1&1\\1&1&4&1\\1&1&1&5\end{vmatrix}. \]`,
  a: String.raw`\(D=74\)。`,
  sol: String.raw`记 \(\Lambda=\mathrm{diag}(1,2,3,4)\)，\(\mathbf{1}=(1,1,1,1)^{T}\)，则所给矩阵为 \(\Lambda+\mathbf{1}\mathbf{1}^{T}\)。
由 \(\det(\Lambda+\mathbf{1}\mathbf{1}^{T})=\det\Lambda\left(1+\mathbf{1}^{T}\Lambda^{-1}\mathbf{1}\right)\)（\(\Lambda\) 可逆时成立）。
其中 \(\det\Lambda=24\)，\(\mathbf{1}^{T}\Lambda^{-1}\mathbf{1}=1+\dfrac12+\dfrac13+\dfrac14=\dfrac{25}{12}\)。
故 \(D=24\left(1+\dfrac{25}{12}\right)=24\cdot\dfrac{37}{12}=74\)。` },

{ id:'LA01-29', ch:1, type:'计算', diff:5, tags:'循环三对角 切比雪夫多项式 特征值法',
  q: String.raw`计算循环三对角行列式
\[ D=\begin{vmatrix}3&-1&0&0&-1\\-1&3&-1&0&0\\0&-1&3&-1&0\\0&0&-1&3&-1\\-1&0&0&-1&3\end{vmatrix}. \]`,
  a: String.raw`\(D=121\)。`,
  sol: String.raw`该矩阵是首行 \((3,-1,0,0,-1)\) 的循环矩阵，故特征值为 \(\lambda_k=3-\omega^{k}-\omega^{-k}=3-2\cos\dfrac{2k\pi}{5}\)，\(k=0,\dots,4\)。
\(\lambda_0=3-2=1\)；\(\lambda_1=\lambda_4=3-2\cos 72^{o}=3-\dfrac{\sqrt5-1}{2}=\dfrac{7-\sqrt5}{2}\)；\(\lambda_2=\lambda_3=3-2\cos 144^{o}=3+\dfrac{\sqrt5+1}{2}=\dfrac{7+\sqrt5}{2}\)。
故 \(D=\lambda_0\lambda_1^2\lambda_2^2=1\cdot\left(\dfrac{7-\sqrt5}{2}\cdot\dfrac{7+\sqrt5}{2}\right)^{2}\)。
而 \(\dfrac{(7-\sqrt5)(7+\sqrt5)}{4}=\dfrac{49-5}{4}=11\)，所以 \(D=11^{2}=121\)。` },

{ id:'LA01-30', ch:1, type:'计算', diff:4, tags:'代数余子式 伴随矩阵 方程组',
  q: String.raw`设 \(A=\begin{pmatrix}2&1&0\\1&3&1\\0&1&2\end{pmatrix}\)，\(A_{ij}\) 为元素 \(a_{ij}\) 的代数余子式。求 \(\sum\limits_{i=1}^{3}\sum\limits_{j=1}^{3}A_{ij}\)。`,
  a: String.raw`和为 \(8\)。`,
  sol: String.raw`先算 \(\det A=2(6-1)-1(2-0)+0=8\ne 0\)。
注意 \(\det A\) 与 \(A\) 的伴随矩阵 \(A^{*}\) 满足 \(A^{*}=(A_{ij})^{T}\)，故所求即 \(A^{*}\) 全部元素之和，等于 \(\mathbf{1}^{T}A^{*}\mathbf{1}\)。
由 \(AA^{*}=\det A\cdot I\) 得 \(A^{*}\mathbf{1}=\det A\cdot A^{-1}\mathbf{1}\)，令 \(A y=\mathbf{1}\) 解出 \(y=(\tfrac12,0,\tfrac12)^{T}\)。
于是所求 \(=\det A\cdot\mathbf{1}^{T}y=8\left(\tfrac12+0+\tfrac12\right)=8\)。` },

{ id:'LA01-31', ch:1, type:'计算', diff:5, tags:'摄动法 行列式多线性 导数',
  q: String.raw`设
\[ A=\begin{pmatrix}1&2&0&1\\0&3&1&0\\0&0&2&1\\0&0&0&4\end{pmatrix},\quad B=\begin{pmatrix}0&1&0&0\\1&0&0&0\\0&1&0&1\\1&0&0&0\end{pmatrix}. \]
求 \(\det(A+tB)\) 展开式中 \(t\) 的一次项系数。`,
  a: String.raw`一次项系数为 \(-28\)。`,
  sol: String.raw`由行列式对每行的多线性，\(\det(A+tB)=\det A+t\sum_{i=1}^{4}\det\left(A^{(i)}\right)+t^{2}(\cdots)+\cdots\)，其中 \(A^{(i)}\) 是把 \(A\) 的第 \(i\) 行换成 \(B\) 的第 \(i\) 行所得矩阵。
逐行替换计算：替换第 1 行为 \((0,1,0,0)\) 时行列式为 \(0\)（首列全零以下三角展开即得）。
替换第 2 行为 \((1,0,0,0)\) 得 \(-16\)；替换第 3 行为 \((0,1,0,1)\) 得 \(-4\)；替换第 4 行为 \((1,0,0,0)\) 得 \(-8\)。
故一次项系数 \(=0-16-4-8=-28\)（完整展开式为 \(\det(A+tB)=-t^{3}-10t^{2}-28t+24\)）。` },

{ id:'LA01-32', ch:1, type:'证明', diff:5, tags:'三对角 二阶递推 三角恒等式',
  q: String.raw`设 \(\theta\in(0,\pi)\)，
\[ D_n=\begin{vmatrix}2\cos\theta&1&0&\cdots&0\\1&2\cos\theta&1&\cdots&0\\0&1&2\cos\theta&\ddots&\vdots\\\vdots&\ddots&\ddots&\ddots&1\\0&\cdots&0&1&2\cos\theta\end{vmatrix}_{n\times n}. \]
证明：\(D_n=\dfrac{\sin (n+1)\theta}{\sin\theta}\)。`,
  a: String.raw`结论成立：\(D_n=\dfrac{\sin (n+1)\theta}{\sin\theta}\)。`,
  sol: String.raw`按第一行展开得递推 \(D_n=2\cos\theta\,D_{n-1}-D_{n-2}\)，初值 \(D_1=2\cos\theta,\ D_2=4\cos^{2}\theta-1\)。
用数学归纳法：设 \(D_{k}=\dfrac{\sin (k+1)\theta}{\sin\theta}\) 对 \(k\le n-1\) 成立，则
\(D_n=2\cos\theta\cdot\dfrac{\sin n\theta}{\sin\theta}-\dfrac{\sin (n-1)\theta}{\sin\theta}\)。
利用积化和差 \(2\cos\theta\sin n\theta=\sin (n+1)\theta+\sin (n-1)\theta\)，上式分子化为 \(\sin (n+1)\theta\)。
又 \(n=1\) 时 \(\dfrac{\sin 2\theta}{\sin\theta}=2\cos\theta=D_1\)，故归纳完成，\(D_n=\dfrac{\sin (n+1)\theta}{\sin\theta}\)。` },

{ id:'LA01-33', ch:1, type:'证明', diff:5, tags:'行列式引理 秩一扰动',
  q: String.raw`设 \(u,v\in\mathbb{R}^{n}\) 为列向量。证明：
\[ \det\left(I_n+uv^{T}\right)=1+v^{T}u. \]`,
  a: String.raw`等式成立（对任意 \(u,v\) 均成立，包括 \(1+v^{T}u=0\) 的情形）。`,
  sol: String.raw`思路一（可逆情形再延拓）：若 \(I+uv^{T}\) 可逆，则由 \(v^{T}(I+uv^{T})^{-1}u=\dfrac{v^{T}u}{1+v^{T}u}\) 与行列式引理得结论。
完整证明：取 \(t\in\mathbb{R}\)，考察多项式 \(f(t)=\det\left(I+t\,uv^{T}\right)\)，它是 \(t\) 的至多一次多项式，且 \(f(0)=1\)。
当 \(1+t\,v^{T}u\ne 0\) 时 \(I+t\,uv^{T}\) 可逆，其特征多项式只有 \(1\) 与 \(1+t\,v^{T}u\) 两个特征值（后者重数为 1，其余为 1），故 \(f(t)=1+t\,v^{T}u\)。
由于两边的多项式在无穷多个 \(t\) 上相等，它们恒等，令 \(t=1\) 即得 \(\det(I_n+uv^{T})=1+v^{T}u\)。` },

{ id:'LA01-34', ch:1, type:'证明', diff:5, tags:'分块矩阵 同时对角化 相似变换',
  q: String.raw`设 \(A,B\) 为 \(n\) 阶实矩阵。证明：
\[ \det\begin{pmatrix}A&B\\B&A\end{pmatrix}=\det(A+B)\cdot\det(A-B). \]`,
  a: String.raw`等式成立。`,
  sol: String.raw`取 \(2n\) 阶矩阵 \(P=\begin{pmatrix}I_n&I_n\\I_n&-I_n\end{pmatrix}\)，直接计算得 \(P^{2}=2I_{2n}\)，故 \(P\) 可逆，\(\det P=(-2)^{n}\ne0\)。
计算 \(P\begin{pmatrix}A&B\\B&A\end{pmatrix}=\begin{pmatrix}A+B&B+A\\A-B&B-A\end{pmatrix}\)。
再右乘 \(P\)：\(P\begin{pmatrix}A&B\\B&A\end{pmatrix}P=\begin{pmatrix}2(A+B)&0\\0&2(A-B)\end{pmatrix}\)。
取行列式：\((\det P)^{2}\det\begin{pmatrix}A&B\\B&A\end{pmatrix}=2^{n}\det(A+B)\cdot 2^{n}\det(A-B)\)。
由 \((\det P)^{2}=2^{2n}\)，两边约去同一因子即得 \(\det\begin{pmatrix}A&B\\B&A\end{pmatrix}=\det(A+B)\det(A-B)\)。` },

{ id:'LA01-35', ch:1, type:'计算', diff:5, tags:'Hessenberg 递推 斐波那契',
  q: String.raw`计算 6 阶上 Hessenberg 行列式（主对角线全为 2，主对角线上方元素全为 1，次对角线全为 1，其余为 0）：
\[ D_6=\begin{vmatrix}2&1&1&1&1&1\\1&2&1&1&1&1\\0&1&2&1&1&1\\0&0&1&2&1&1\\0&0&0&1&2&1\\0&0&0&0&1&2\end{vmatrix}. \]`,
  a: String.raw`\(D_6=21\)。`,
  sol: String.raw`按第一行展开：第一行第 1 列元素 2 对应的余子式即同型的 \(D_5\)；第一行第 \(j\ (j\ge2)\) 列元素为 1，其下方一列仅次对角元为 1，逐列展开后余子式退化为 \(D_{j-2}\) 型的行列式。
由此得递推 \(D_n=2D_{n-1}-D_{n-2}\)，初值 \(D_1=2,\ D_2=3\)。
于是 \(D_n\) 为 \(2,3,5,8,13,21,\dots\)，即 \(D_n=F_{n+2}\)（斐波那契数列）。
取 \(n=6\) 得 \(D_6=21\)。` },

{ id:'LA01-36', ch:1, type:'计算', diff:4, tags:'全1扰动 特征值法 秩一矩阵',
  q: String.raw`计算 5 阶行列式（主对角线元素全为 \(1\)，其余元素全为 \(2\)）
\[ D=\begin{vmatrix}1&2&2&2&2\\2&1&2&2&2\\2&2&1&2&2\\2&2&2&1&2\\2&2&2&2&1\end{vmatrix}. \]`,
  a: String.raw`\(D=9\)。`,
  sol: String.raw`记 \(J\) 为全 1 矩阵，则所给矩阵 \(A=I+2(J-I)=2J-I\)。
\(J\) 的特征值为 \(5\)（重数 1）与 \(0\)（重数 4），故 \(2J-I\) 的特征值为 \(2\cdot 5-1=9\) 与 \(2\cdot 0-1=-1\)（重数 4）。
于是 \(\det A=9\cdot(-1)^{4}=9\)。
一般结论：主对角为 \(a\)、其余为 \(b\) 的 \(n\) 阶矩阵行列式为 \((a-b)^{n-1}\left(a+(n-1)b\right)\)，此处 \(a=1,b=2,n=5\) 得 \(9\)。` },

{ id:'LA01-37', ch:1, type:'计算', diff:5, tags:'绝对差矩阵 行变换 分块Schur',
  q: String.raw`计算 5 阶行列式 \(D=\left|\,|i-j|\,\right|_{5\times5}\)，即
\[ D=\begin{vmatrix}0&1&2&3&4\\1&0&1&2&3\\2&1&0&1&2\\3&2&1&0&1\\4&3&2&1&0\end{vmatrix}. \]`,
  a: String.raw`\(D=32\)。`,
  sol: String.raw`作行变换 \(r_i\leftarrow r_i-r_{i+1}\ (i=1,2,3,4)\)，得前四行为 \((-1,1,1,1,1)\) 型的差分行。
再作列变换 \(c_j\leftarrow c_j-c_{j+1}\ (j=1,2,3,4)\)，矩阵化为分块形状 \(\begin{pmatrix}-2I_4&e\\e^{T}&0\end{pmatrix}\)，其中 \(e=(1,1,1,1)^{T}\)。
对分块矩阵用 Schur 补：\(\det\begin{pmatrix}-2I_4&e\\e^{T}&0\end{pmatrix}=\det(-2I_4)\cdot\left(0-e^{T}(-2I_4)^{-1}e\right)\)。
\((-2I_4)^{-1}=-\tfrac12 I_4\)，故 \(e^{T}(-2I_4)^{-1}e=-\tfrac12\cdot 4=-2\)，从而 \(D=16\cdot 2=32\)。` },

{ id:'LA01-38', ch:1, type:'计算', diff:4, tags:'Pascal矩阵 二项式系数 行差',
  q: String.raw`计算 4 阶 Pascal 行列式
\[ D=\begin{vmatrix}1&1&1&1\\1&2&3&4\\1&3&6&10\\1&4&10&20\end{vmatrix}. \]`,
  a: String.raw`\(D=1\)。`,
  sol: String.raw`该矩阵第 \((i,j)\) 元为 \(\binom{i+j-2}{i-1}\)（\(i,j\) 从 1 起算）。
作行变换 \(r_i\leftarrow r_i-r_{i-1}\)（自下而上，\(i=4,3,2\)），再利用 \(\binom{m}{k}-\binom{m-1}{k}=\binom{m-1}{k-1}\)。
每次行差后矩阵化为"左上角 1，右下角为低一阶 Pascal 块"的形状，逐层消去。
重复该过程共 3 次，最终矩阵为上三角且对角元全为 1，故 \(D=1\)。` },

{ id:'LA01-39', ch:1, type:'计算', diff:5, tags:'三对角 变元 递推 多项式行列式',
  q: String.raw`计算 4 阶行列式
\[ D_4(x)=\begin{vmatrix}x&-1&0&0\\-1&x&-1&0\\0&-1&x&-1\\0&0&-1&x\end{vmatrix}. \]`,
  a: String.raw`\(D_4(x)=x^{4}-3x^{2}+1\)。`,
  sol: String.raw`按第一行展开得递推 \(D_n=xD_{n-1}-D_{n-2}\)，初值 \(D_1=x,\ D_2=x^{2}-1\)。
依次计算：\(D_3=x(x^{2}-1)-x=x^{3}-2x\)。
\(D_4=x(x^{3}-2x)-(x^{2}-1)=x^{4}-3x^{2}+1\)。
故 \(D_4(x)=x^{4}-3x^{2}+1\)（其根为 \(x=\pm\dfrac{\sqrt{3\pm\sqrt5}}{2}\)，与第二类切比雪夫多项式相关）。` },

{ id:'LA01-40', ch:1, type:'计算', diff:5, tags:'反对称矩阵 Pfaffian 平方',
  q: String.raw`计算 4 阶反对称行列式
\[ D=\begin{vmatrix}0&1&2&3\\-1&0&4&5\\-2&-4&0&6\\-3&-5&-6&0\end{vmatrix}. \]`,
  a: String.raw`\(D=64\)。`,
  sol: String.raw`设 \(A\) 为所给反对称矩阵，则 \(\det A=\left(\mathrm{Pf}(A)\right)^{2}\)，其中 \(\mathrm{Pf}(A)=a_{12}a_{34}-a_{13}a_{24}+a_{14}a_{23}\)。
代入：\(\mathrm{Pf}(A)=1\cdot 6-2\cdot 5+3\cdot 4=6-10+12=8\)。
故 \(D=8^{2}=64\)。
（也可验证：4 阶反对称矩阵 \(\det A\ge0\)，这与平方形式一致。）` },

{ id:'LA01-41', ch:1, type:'计算', diff:5, tags:'低秩扰动 行列式引理 对角矩阵',
  q: String.raw`设 \(D=\mathrm{diag}(1,2,3,4)\)，\(u_1=(1,0,1,0)^{T},\ u_2=(0,1,0,1)^{T}\)，令 \(U=(u_1,u_2)\)，\(A=D+UU^{T}\)。求 \(\det A\)。`,
  a: String.raw`\(\det A=98\)。`,
  sol: String.raw`\(D\) 可逆，\(\det A=\det D\cdot\det\left(I_2+U^{T}D^{-1}U\right)\)。
计算 \(D^{-1}U\)：第 1 列为 \((1,0,\tfrac13,0)^{T}\)，第 2 列为 \((0,\tfrac12,0,\tfrac14)^{T}\)。
于是 \(U^{T}D^{-1}U=\begin{pmatrix}1+\tfrac13&0\\0&\tfrac12+\tfrac14\end{pmatrix}=\begin{pmatrix}\tfrac43&0\\0&\tfrac34\end{pmatrix}\)。
故 \(\det\left(I_2+U^{T}D^{-1}U\right)=\dfrac73\cdot\dfrac74=\dfrac{49}{12}\)，而 \(\det D=24\)。
所以 \(\det A=24\cdot\dfrac{49}{12}=98\)。` },

{ id:'LA01-42', ch:1, type:'计算', diff:5, tags:'矩阵多项式 行列式乘法 因式分解',
  q: String.raw`设
\[ A=\begin{pmatrix}1&2&0&1\\0&3&1&0\\0&0&2&1\\1&1&1&4\end{pmatrix}. \]
求 \(\det\left(A^{2}-3A+2I\right)\)。`,
  a: String.raw`\(\det\left(A^{2}-3A+2I\right)=8\)。`,
  sol: String.raw`分解因式：\(A^{2}-3A+2I=(A-I)(A-2I)\)，故 \(\det(A^{2}-3A+2I)=\det(A-I)\cdot\det(A-2I)\)。
计算 \(A-I=\begin{pmatrix}0&2&0&1\\0&2&1&0\\0&0&1&1\\1&1&1&3\end{pmatrix}\)，展开得 \(\det(A-I)=-4\)。
计算 \(A-2I=\begin{pmatrix}-1&2&0&1\\0&1&1&0\\0&0&0&1\\1&1&1&2\end{pmatrix}\)，展开得 \(\det(A-2I)=-2\)。
故 \(\det\left(A^{2}-3A+2I\right)=(-4)\cdot(-2)=8\)。` },

{ id:'LA01-43', ch:1, type:'计算', diff:4, tags:'分块矩阵 副对角块 Laplace展开',
  q: String.raw`计算 4 阶行列式
\[ D=\begin{vmatrix}0&0&1&2\\0&0&3&4\\0&1&2&0\\1&1&1&3\end{vmatrix}. \]`,
  a: String.raw`\(D=2\)。`,
  sol: String.raw`按前两行作 Laplace 展开，只有取后两列构成的 \(2\times2\) 子式非零：\(D=(-1)^{1+2+3+4}\begin{vmatrix}1&2\\3&4\end{vmatrix}\cdot\begin{vmatrix}0&1\\1&1\end{vmatrix}\)。
（符号因子为 \((-1)^{(1+2)+(3+4)}=(-1)^{10}=1\)。）
计算两个二阶行列式：\(\begin{vmatrix}1&2\\3&4\end{vmatrix}=-2\)，\(\begin{vmatrix}0&1\\1&1\end{vmatrix}=-1\)。
故 \(D=(-2)\cdot(-1)=2\)。
一般地 \(\det\begin{pmatrix}0&B\\C&D\end{pmatrix}=(-1)^{mn}\det B\det C\)（\(B\) 为 \(m\times n\) 块）。` },

{ id:'LA01-44', ch:1, type:'计算', diff:5, tags:'秩一扰动 伴随矩阵 奇异矩阵',
  q: String.raw`计算
\[ D=\begin{vmatrix}1&1&1&1\\1&3&1&1\\1&1&4&1\\1&1&1&5\end{vmatrix}. \]`,
  a: String.raw`\(D=24\)。`,
  sol: String.raw`记 \(\Lambda=\mathrm{diag}(0,2,3,4)\)，则所给矩阵 \(A=\Lambda+\mathbf{1}\mathbf{1}^{T}\)，其中 \(\mathbf{1}=(1,1,1,1)^{T}\)。
因 \(\Lambda\) 奇异，改用伴随公式：\(\det\left(\Lambda+\mathbf{1}\mathbf{1}^{T}\right)=\det\Lambda+\mathbf{1}^{T}\mathrm{adj}(\Lambda)\mathbf{1}\)（对任意方阵 \(\Lambda\) 与秩一扰动均成立）。
这里 \(\det\Lambda=0\)，而 \(\mathrm{adj}(\Lambda)=\mathrm{diag}(2\cdot 3\cdot 4,\ 0,\ 0,\ 0)=(24,0,0,0)\) 的对角矩阵。
故 \(\mathbf{1}^{T}\mathrm{adj}(\Lambda)\mathbf{1}=24\)，即 \(D=24\)。` },

{ id:'LA01-45', ch:1, type:'计算', diff:5, tags:'分块循环 Hadamard矩阵 符号化行列式',
  q: String.raw`设 \(a,b,c,d\in\mathbb{R}\)，
\[ D=\begin{vmatrix}a&b&c&d\\b&a&d&c\\c&d&a&b\\d&c&b&a\end{vmatrix}. \]
（1）求 \(D\) 的符号表达式；（2）取 \(a=3,\ b=1,\ c=2,\ d=1\) 求 \(D\) 的值。`,
  a: String.raw`（1）\(D=(a+b+c+d)(a+b-c-d)(a-b+c-d)(a-b-c+d)\)；（2）\(D=21\)。`,
  sol: String.raw`取正交矩阵 \(Q=\dfrac12\begin{pmatrix}1&1&1&1\\1&1&-1&-1\\1&-1&1&-1\\1&-1&-1&1\end{pmatrix}\)，则 \(Q^{T}Q=I_4\)。
\(Q\) 的列恰为矩阵各行向量的对称/反对称组合，直接相乘得 \(QAQ^{T}=\mathrm{diag}(a+b+c+d,\ a+b-c-d,\ a-b+c-d,\ a-b-c+d)\)。
故 \(D=(a+b+c+d)(a+b-c-d)(a-b+c-d)(a-b-c+d)\)。
代入 \(a=3,b=1,c=2,d=1\)：四个因子为 \(7,\ 1,\ 3,\ 1\)，得 \(D=7\cdot 1\cdot 3\cdot 1=21\)。` },

{ id:'LA01-46', ch:1, type:'证明', diff:5, tags:'幂等矩阵 特征值 行列式',
  q: String.raw`设 \(n\) 阶实矩阵 \(A\) 满足 \(A^{2}=A\)。证明：\(\det A\in\{0,1\}\)。`,
  a: String.raw`\(\det A\) 只能取 \(0\) 或 \(1\)。`,
  sol: String.raw`由 \(A^{2}=A\) 得 \(A(A-I)=0\)，故对任意向量 \(x\)，\(Ax\) 落入 \(A\) 的像空间且 \((A-I)Ax=0\)。
设 \(\lambda\) 为 \(A\) 的任一特征值，对应特征向量 \(x\ne0\)：\(Ax=\lambda x\)。
则 \(A^{2}x=\lambda^{2}x\)，又 \(A^{2}x=Ax=\lambda x\)，故 \((\lambda^{2}-\lambda)x=0\)，即 \(\lambda\in\{0,1\}\)。
于是 \(A\) 的特征值只有 \(0\) 与 \(1\)，\(\det A\) 等于全部特征值之积，只能为 \(0\) 或 \(1\)。
（两种情形都能取到：零矩阵与单位矩阵。）` },

{ id:'LA01-47', ch:1, type:'计算', diff:5, tags:'三对角 递推 斐波那契',
  q: String.raw`计算 5 阶三对角行列式
\[ D_5=\begin{vmatrix}3&-1&0&0&0\\-1&3&-1&0&0\\0&-1&3&-1&0\\0&0&-1&3&-1\\0&0&0&-1&3\end{vmatrix}. \]`,
  a: String.raw`\(D_5=144\)。`,
  sol: String.raw`按第一行展开得 \(D_n=3D_{n-1}-D_{n-2}\)，初值 \(D_1=3,\ D_2=8\)。
依次算：\(D_3=3\cdot 8-3=21\)，\(D_4=3\cdot 21-8=55\)，\(D_5=3\cdot 55-21=144\)。
（该数列满足 \(D_n=F_{2n+2}\)：\(3=F_4,\ 8=F_6,\ 21=F_8,\ 55=F_{10},\ 144=F_{12}\)，可用归纳验证。）
故 \(D_5=144\)。` },

{ id:'LA01-48', ch:1, type:'证明', diff:5, tags:'分块矩阵 交换性 Schur补',
  q: String.raw`设 \(A,B,C,D\) 均为 \(n\) 阶矩阵，且 \(AC=CA\)。证明：
\[ \det\begin{pmatrix}A&B\\C&D\end{pmatrix}=\det(AD-CB). \]`,
  a: String.raw`等式成立。`,
  sol: String.raw`构造分块矩阵乘法：\(\begin{pmatrix}I&0\\-C&A\end{pmatrix}\begin{pmatrix}A&B\\C&D\end{pmatrix}=\begin{pmatrix}A&B\\0&AD-CB\end{pmatrix}\)，这里用到 \(-CA+AC=0\)。
对等式两边取行列式，左边 \(=\det\begin{pmatrix}I&0\\-C&A\end{pmatrix}\cdot\det\begin{pmatrix}A&B\\C&D\end{pmatrix}=\det A\cdot\det\begin{pmatrix}A&B\\C&D\end{pmatrix}\)。
右边 \(=\det A\cdot\det(AD-CB)\)（分块上三角行列式等于对角块行列式之积）。
若 \(\det A\ne0\)，两边约去 \(\det A\) 即得结论；若 \(\det A=0\)，用 \(A+\varepsilon I\) 替代 \(A\)（它仍与 \(C\) 交换），对无穷多个 \(\varepsilon\) 成立后令 \(\varepsilon\to0\) 由连续性得结论。` },

{ id:'LA01-49', ch:1, type:'计算', diff:4, tags:'min矩阵 行差 三角化',
  q: String.raw`计算 5 阶行列式 \(D=\left|\min(i,j)\right|_{5\times5}\)，即
\[ D=\begin{vmatrix}1&1&1&1&1\\1&2&2&2&2\\1&2&3&3&3\\1&2&3&4&4\\1&2&3&4&5\end{vmatrix}. \]`,
  a: String.raw`\(D=1\)。`,
  sol: String.raw`作行变换 \(r_i\leftarrow r_i-r_{i-1}\ (i=5,4,3,2)\)，即自下而上逐行相减。
每次相减后第 \(i\) 行只在第 \(i\) 列及其后有非零结构，最终矩阵化为下三角形状，对角元全为 \(1\)。
（具体地：第 5 行变为 \((0,0,0,0,1)\)，第 4 行变为 \((0,0,0,1,0)\)，第 3 行变为 \((0,0,1,0,0)\)，第 2 行变为 \((0,1,0,0,0)\)，第 1 行仍为全 1。）
行列式等于对角元之积，故 \(D=1\cdot 1\cdot 1\cdot 1\cdot 1=1\)。` },

{ id:'LA01-50', ch:1, type:'证明', diff:5, tags:'范德蒙德行列式 归纳法 多项式',
  q: String.raw`设 \(x_1,x_2,\dots,x_n\) 为实数，
\[ V_n=\begin{vmatrix}1&1&\cdots&1\\x_1&x_2&\cdots&x_n\\x_1^{2}&x_2^{2}&\cdots&x_n^{2}\\\vdots&\vdots&&\vdots\\x_1^{n-1}&x_2^{n-1}&\cdots&x_n^{n-1}\end{vmatrix}. \]
证明：\(V_n=\prod\limits_{1\le i<j\le n}(x_j-x_i)\)。`,
  a: String.raw`\(V_n=\prod_{1\le i<j\le n}(x_j-x_i)\)。`,
  sol: String.raw`对 \(n\) 归纳。\(n=2\) 时 \(V_2=x_2-x_1\)，成立。
设结论对 \(n-1\) 阶成立。把 \(V_n\) 看作 \(x_n\) 的多项式：自下而上作行变换 \(r_k\leftarrow r_k-x_n r_{k-1}\ (k=n,n-1,\dots,2)\)，第一列化为 \((1,0,\dots,0)^{T}\)。
按第一列展开后，第 \(j\) 列（\(j\ge2\)）元素为 \(x_j^{k}-x_n x_j^{k-1}=x_j^{k-1}(x_j-x_n)\)，从中按列提出因子 \((x_j-x_n)\)。
余下恰为节点 \(x_1,\dots,x_{n-1}\) 的 \(n-1\) 阶范德蒙德行列式，即 \(V_{n-1}\)。
故 \(V_n=V_{n-1}\prod_{j=1}^{n-1}(x_j-x_n)=\prod_{i<j}(x_j-x_i)\)，归纳完成。` },

{ id:'LA01-51', ch:1, type:'计算', diff:5, tags:'柯西行列式 范德蒙德 分母连乘',
  q: String.raw`计算 4 阶行列式
\[ D=\begin{vmatrix}\dfrac12&\dfrac13&\dfrac14&\dfrac15\\ \dfrac13&\dfrac14&\dfrac15&\dfrac16\\ \dfrac14&\dfrac15&\dfrac16&\dfrac17\\ \dfrac15&\dfrac16&\dfrac17&\dfrac18\end{vmatrix}. \]`,
  a: String.raw`\(D=\dfrac{1}{423360000}\)。`,
  sol: String.raw`这是柯西型行列式 \(a_{ij}=\dfrac{1}{x_i+y_j}\)，其中 \(x_i=i,\ y_j=j\)，\(1\le i,j\le4\)。
柯西公式：\(\det\left(\dfrac{1}{x_i+y_j}\right)=\dfrac{\prod_{i<j}(x_j-x_i)\prod_{i<j}(y_j-y_i)}{\prod_{i,j}(x_i+y_j)}\)。
分子 \(=\left(1\cdot2\cdot3\cdot1\cdot2\cdot1\right)^{2}=12^{2}=144\)。
分母 \(=\prod_{i,j}(i+j)=\left(2\cdot3\cdot4\cdot5\right)\left(3\cdot4\cdot5\cdot6\right)\left(4\cdot5\cdot6\cdot7\right)\left(5\cdot6\cdot7\cdot8\right)=120\cdot360\cdot840\cdot1680=60963840000\)。
故 \(D=\dfrac{144}{60963840000}=\dfrac{1}{423360000}\)。` },

{ id:'LA01-52', ch:1, type:'计算', diff:5, tags:'分块矩阵 复化 复数行列式',
  q: String.raw`设 \(A=\begin{pmatrix}1&2\\0&3\end{pmatrix}\)，\(B=\begin{pmatrix}1&0\\1&1\end{pmatrix}\)，计算
\[ D=\begin{vmatrix}A&-B\\B&A\end{vmatrix}=\begin{vmatrix}1&2&-1&0\\0&3&0&-1\\1&0&1&2\\1&1&0&3\end{vmatrix}. \]`,
  a: String.raw`\(D=8\)。`,
  sol: String.raw`记 \(M=\begin{pmatrix}A&-B\\B&A\end{pmatrix}\)，它是复矩阵 \(A+iB\) 的实化矩阵（实矩阵的复数表示）。
关键恒等式：\(\det M=\left|\det(A+iB)\right|^{2}\)。
计算 \(A+iB=\begin{pmatrix}1+i&2\\ i&3+i\end{pmatrix}\)，其行列式 \((1+i)(3+i)-2i=(2+4i)-2i=2+2i\)。
故 \(D=|2+2i|^{2}=2^{2}+2^{2}=8\)。` },

{ id:'LA01-53', ch:1, type:'计算', diff:5, tags:'三对角 递推 常系数',
  q: String.raw`计算 5 阶三对角行列式
\[ D_5=\begin{vmatrix}4&-1&0&0&0\\-1&4&-1&0&0\\0&-1&4&-1&0\\0&0&-1&4&-1\\0&0&0&-1&4\end{vmatrix}. \]`,
  a: String.raw`\(D_5=780\)。`,
  sol: String.raw`按第一行展开得 \(D_n=4D_{n-1}-D_{n-2}\)，初值 \(D_1=4,\ D_2=15\)。
依次计算：\(D_3=4\cdot15-4=56\)，\(D_4=4\cdot56-15=209\)。
再算 \(D_5=4\cdot209-56=836-56=780\)。
（通项为 \(D_n=\dfrac{(2+\sqrt3)^{n+1}-(2-\sqrt3)^{n+1}}{2\sqrt3}\)，此处不必展开。）` },

{ id:'LA01-54', ch:1, type:'计算', diff:4, tags:'范德蒙德 负节点 乘积公式',
  q: String.raw`计算 4 阶范德蒙德行列式
\[ V=\begin{vmatrix}1&1&1&1\\-2&-1&1&2\\4&1&1&4\\-8&-1&1&8\end{vmatrix}. \]`,
  a: String.raw`\(V=72\)。`,
  sol: String.raw`节点为 \(x_1=-2,\ x_2=-1,\ x_3=1,\ x_4=2\)（第 \(k\) 列为 \(x_k\) 的 \(0,1,2,3\) 次幂）。
由范德蒙德公式 \(V=\prod_{1\le i<j\le4}(x_j-x_i)\)。
逐一写出所有差：\(1,\ 3,\ 4,\ 2,\ 3,\ 1\)。
故 \(V=1\cdot3\cdot4\cdot2\cdot3\cdot1=72\)。` },

{ id:'LA01-55', ch:1, type:'计算', diff:5, tags:'分块上三角 行列式乘法 零块',
  q: String.raw`计算 5 阶行列式
\[ D=\begin{vmatrix}1&2&0&1&2\\0&1&3&3&4\\2&0&1&5&6\\0&0&0&2&1\\0&0&0&1&3\end{vmatrix}. \]`,
  a: String.raw`\(D=65\)。`,
  sol: String.raw`按左上 \(3\times3\) 与右下 \(2\times2\) 分块，矩阵为 \(\begin{pmatrix}A&B\\0&C\end{pmatrix}\) 的形状。
分块三角矩阵的行列式等于对角块行列式之积：\(D=\det A\cdot\det C\)。
计算 \(\det A=\begin{vmatrix}1&2&0\\0&1&3\\2&0&1\end{vmatrix}=1(1-0)-2(0-6)+0=1+12=13\)。
计算 \(\det C=\begin{vmatrix}2&1\\1&3\end{vmatrix}=6-1=5\)。
故 \(D=13\cdot5=65\)（右上块 \(B\) 的取值不影响结果）。` },

{ id:'LA01-56', ch:1, type:'证明', diff:5, tags:'行列式定义 排列 转置不变',
  q: String.raw`设 \(A=(a_{ij})\) 为 \(n\) 阶方阵。证明：\(\det A^{T}=\det A\)。`,
  a: String.raw`等式成立。`,
  sol: String.raw`按行列式的完全展开式：\(\det A=\sum\limits_{\sigma\in S_n}\mathrm{sgn}(\sigma)\,a_{1\sigma(1)}a_{2\sigma(2)}\cdots a_{n\sigma(n)}\)。
而 \(A^{T}\) 的 \((i,j)\) 元为 \(a_{ji}\)，故 \(\det A^{T}=\sum\limits_{\sigma}\mathrm{sgn}(\sigma)\,a_{\sigma(1)1}a_{\sigma(2)2}\cdots a_{\sigma(n)n}\)。
令 \(\tau=\sigma^{-1}\)，则 \(\mathrm{sgn}(\tau)=\mathrm{sgn}(\sigma)\)，且乘积 \(a_{\sigma(1)1}\cdots a_{\sigma(n)n}\) 重排为 \(a_{1\tau(1)}\cdots a_{n\tau(n)}\)。
由于 \(\sigma\mapsto\sigma^{-1}\) 是 \(S_n\) 上的双射，求和式化为 \(\sum_{\tau}\mathrm{sgn}(\tau)a_{1\tau(1)}\cdots a_{n\tau(n)}=\det A\)，故 \(\det A^{T}=\det A\)。` },

{ id:'LA01-57', ch:1, type:'计算', diff:4, tags:'反对角矩阵 列倒序 三角化',
  q: String.raw`设 5 阶矩阵 \(A=(a_{ij})\) 满足：当 \(i+j\le 6\) 时 \(a_{ij}=i+j\)，当 \(i+j>6\) 时 \(a_{ij}=0\)。求 \(\det A\)。`,
  a: String.raw`\(\det A=7776=6^{5}\)。`,
  sol: String.raw`写出矩阵：第 \(i\) 行为 \((i+1,i+2,\dots,6,0,\dots,0)\)，即
\[ A=\begin{pmatrix}2&3&4&5&6\\3&4&5&6&0\\4&5&6&0&0\\5&6&0&0&0\\6&0&0&0&0\end{pmatrix}. \]
把列的顺序完全倒过来（第 1 列与第 5 列、第 2 列与第 4 列对换），共作 \(\dfrac{5\cdot4}{2}=10\) 次对换。
倒序后矩阵为上三角，对角元全为 6，符号因子 \((-1)^{10}=1\)。
故 \(\det A=6^{5}=7776\)。` },

{ id:'LA01-58', ch:1, type:'计算', diff:5, tags:'爪形行列式 消元 分块',
  q: String.raw`计算 6 阶爪形行列式
\[ D=\begin{vmatrix}2&1&1&1&1&1\\1&3&0&0&0&0\\1&0&4&0&0&0\\1&0&0&5&0&0\\1&0&0&0&6&0\\1&0&0&0&0&7\end{vmatrix}. \]`,
  a: String.raw`\(D=2286\)。`,
  sol: String.raw`记 \(D_0=\mathrm{diag}(3,4,5,6,7)\)，则 \(\det D_0=2520\)，且用 \(D_0^{-1}\) 消去爪的"两臂"后得
\(\det D=\left(2-\sum_{i=1}^{5}\dfrac{1}{d_i}\right)\det D_0\)，其中 \(d_i\) 为 \(D_0\) 的对角元。
计算 \(\sum\dfrac{1}{d_i}=\dfrac13+\dfrac14+\dfrac15+\dfrac16+\dfrac17=\dfrac{140+105+84+70+60}{420}=\dfrac{459}{420}=\dfrac{153}{140}\)。
故 \(D=2520\left(2-\dfrac{153}{140}\right)=2520\cdot\dfrac{127}{140}=18\cdot127=2286\)。` },

{ id:'LA01-59', ch:1, type:'计算', diff:5, tags:'三对角 边界扰动 递推',
  q: String.raw`计算 6 阶行列式
\[ D_6=\begin{vmatrix}1&-1&0&0&0&0\\-1&2&-1&0&0&0\\0&-1&2&-1&0&0\\0&0&-1&2&-1&0\\0&0&0&-1&2&-1\\0&0&0&0&-1&2\end{vmatrix}. \]`,
  a: String.raw`\(D_6=1\)。`,
  sol: String.raw`记 \(D_n\) 为该型 \(n\) 阶行列式。按第一行展开得 \(D_n=2D_{n-1}-D_{n-2}\)（\(n\ge3\)），因为次对角元之积为 \((-1)(-1)=1\)。
本例首元为 1 而非 2，故初值为 \(D_1=1\)；对 \(n=2\)：\(D_2=1\cdot2-(-1)(-1)=2-1=1\)。
于是 \(D_n=2\cdot1-1=1\) 对一切 \(n\ge1\) 成立（恒为常数 1，可由归纳验证）。
故 \(D_6=1\)。
（对比：若首元也取 2，则 \(D_n=n+1\)，可见边界元素对结果影响极大。）` },

{ id:'LA01-60', ch:1, type:'计算', diff:5, tags:'全1扰动 特征值法 秩一矩阵',
  q: String.raw`计算 5 阶行列式（主对角线元素全为 \(3\)，其余元素全为 \(-1\)）
\[ D=\begin{vmatrix}3&-1&-1&-1&-1\\-1&3&-1&-1&-1\\-1&-1&3&-1&-1\\-1&-1&-1&3&-1\\-1&-1&-1&-1&3\end{vmatrix}. \]`,
  a: String.raw`\(D=-256\)。`,
  sol: String.raw`记所求矩阵为 \(A\)，则 \(A=4I-J\)，其中 \(J\) 为全 1 矩阵。
\(J\) 的特征值为 \(5\)（重数 1）与 \(0\)（重数 4），故 \(A\) 的特征值为 \(4-5=-1\) 与 \(4-0=4\)（重数 4）。
于是 \(D=(-1)\cdot4^{4}=-256\)。
一般公式：主对角为 \(a\)、其余为 \(b\) 的 \(n\) 阶矩阵行列式为 \((a-b)^{n-1}\left(a+(n-1)b\right)\)，此处 \(a=3,b=-1,n=5\)。` },

{ id:'LA01-61', ch:1, type:'证明', diff:5, tags:'三对角 递推 连续子式',
  q: String.raw`设 \(a,b,c\in\mathbb{R}\)，
\[ D_n=\begin{vmatrix}a&c&0&\cdots&0\\b&a&c&\cdots&0\\0&b&a&\ddots&\vdots\\\vdots&\ddots&\ddots&\ddots&c\\0&\cdots&0&b&a\end{vmatrix}_{n\times n},\quad D_0=1. \]
证明：\(D_{n}=aD_{n-1}-bc\,D_{n-2}\ (n\ge2)\)。`,
  a: String.raw`递推式成立。`,
  sol: String.raw`把 \(D_n\) 按第一行展开：首元 \(a\) 的余子式正是 \(D_{n-1}\)。
第一行第二个元素 \(c\) 的余子式：删去第 1 行第 2 列后，第一列只剩 \(b\) 在第 1 行位置，再按该列展开得 \(b\cdot D_{n-2}\)，符号为 \((-1)^{1+2}\)。
故 \(D_n=aD_{n-1}+c\cdot(-1)^{3}bD_{n-2}=aD_{n-1}-bc\,D_{n-2}\)。
初值 \(D_1=a,\ D_2=a^{2}-bc\)，与递推一致；由此可用归纳证明该递推对一切 \(n\ge2\) 成立。` },

{ id:'LA01-62', ch:1, type:'计算', diff:4, tags:'三对角 递推 线性数列',
  q: String.raw`计算 6 阶三对角行列式
\[ D_6=\begin{vmatrix}2&1&0&0&0&0\\1&2&1&0&0&0\\0&1&2&1&0&0\\0&0&1&2&1&0\\0&0&0&1&2&1\\0&0&0&0&1&2\end{vmatrix}. \]`,
  a: String.raw`\(D_6=7\)。`,
  sol: String.raw`按第一行展开得 \(D_n=2D_{n-1}-D_{n-2}\)，初值 \(D_1=2,\ D_2=3\)。
该递推的特征方程 \((r-1)^{2}=0\) 有二重根 1，故 \(D_n=\alpha n+\beta\)。
由 \(D_1=2,\ D_2=3\) 得 \(\alpha=1,\ \beta=1\)，即 \(D_n=n+1\)。
故 \(D_6=7\)。` },

{ id:'LA01-63', ch:1, type:'计算', diff:5, tags:'伴随矩阵 行列式性质 数乘',
  q: String.raw`设 \(A\) 为 3 阶矩阵，\(\det A=-2\)，\(\mathrm{adj}(M)\) 表示矩阵 \(M\) 的伴随矩阵。求 \(\det\left(\mathrm{adj}(2A)\right)\)。`,
  a: String.raw`\(\det\left(\mathrm{adj}(2A)\right)=256\)。`,
  sol: String.raw`用两条基本性质：\(\mathrm{adj}(kA)=k^{n-1}\mathrm{adj}(A)\)（\(n\) 为阶数），以及 \(\det\left(\mathrm{adj}(M)\right)=\left(\det M\right)^{n-1}\)。
取 \(n=3,\ k=2\)：\(\mathrm{adj}(2A)=2^{2}\mathrm{adj}(A)=4\,\mathrm{adj}(A)\)。
故 \(\det\left(\mathrm{adj}(2A)\right)=4^{3}\det\left(\mathrm{adj}(A)\right)=64\cdot\left(\det A\right)^{2}\)。
代入 \(\det A=-2\) 得 \(64\cdot4=256\)。` },

{ id:'LA01-64', ch:1, type:'计算', diff:4, tags:'按行展开 余子式为零',
  q: String.raw`计算 4 阶行列式
\[ D=\begin{vmatrix}0&1&1&0\\1&0&0&1\\1&0&2&1\\0&1&1&3\end{vmatrix}. \]`,
  a: String.raw`\(D=-6\)。`,
  sol: String.raw`按第一行展开：非零元只有 \(a_{12}=1\) 与 \(a_{13}=1\)。
\(a_{13}\) 的余子式：删去第 1 行第 3 列得 \(\begin{vmatrix}1&0&1\\1&0&1\\0&1&3\end{vmatrix}\)，其前两行相同，行列式为 0。
\(a_{12}\) 的余子式：删去第 1 行第 2 列得 \(\begin{vmatrix}1&0&1\\1&2&1\\0&1&3\end{vmatrix}=1(6-1)-0+1(1-0)=6\)。
符号 \((-1)^{1+2}=-1\)，故 \(D=-6+0=-6\)。` },

{ id:'LA01-65', ch:1, type:'计算', diff:4, tags:'全1扰动 伴随矩阵 奇异对角块',
  q: String.raw`计算
\[ D=\begin{vmatrix}1&1&1&1\\1&2&1&1\\1&1&3&1\\1&1&1&4\end{vmatrix}. \]`,
  a: String.raw`\(D=6\)。`,
  sol: String.raw`记 \(\Lambda=\mathrm{diag}(0,1,2,3)\)、\(\mathbf{1}=(1,1,1,1)^{T}\)，则所给矩阵 \(A=\Lambda+\mathbf{1}\mathbf{1}^{T}\)。
\(\Lambda\) 奇异，用伴随公式：\(\det\left(\Lambda+\mathbf{1}\mathbf{1}^{T}\right)=\det\Lambda+\mathbf{1}^{T}\mathrm{adj}(\Lambda)\mathbf{1}\)。
这里 \(\det\Lambda=0\)，\(\mathrm{adj}(\Lambda)=\mathrm{diag}(1\cdot2\cdot3,0,0,0)\)，故 \(\mathbf{1}^{T}\mathrm{adj}(\Lambda)\mathbf{1}=6\)。
所以 \(D=6\)。` },

{ id:'LA01-66', ch:1, type:'证明', diff:5, tags:'行列式乘法 分块矩阵 消元',
  q: String.raw`设 \(A,B\) 为 \(n\) 阶方阵。证明：\(\det(AB)=\det A\cdot\det B\)。`,
  a: String.raw`等式成立。`,
  sol: String.raw`构造 \(2n\) 阶分块矩阵 \(M=\begin{pmatrix}A&0\\-I&B\end{pmatrix}\)。
一方面，\(M\) 是分块下三角矩阵，故 \(\det M=\det A\cdot\det B\)。
另一方面，把 \(A\) 倍的第 2 块行加到第 1 块行上（等价于左乘分块矩阵 \(\begin{pmatrix}I&A\\0&I\end{pmatrix}\)，其行列式为 \(1\)），\(M\) 化为 \(M'=\begin{pmatrix}0&AB\\-I_n&B\end{pmatrix}\)，行列式不变。
对 \(M'\) 用分块公式 \(\det\begin{pmatrix}0&X\\Y&Z\end{pmatrix}=(-1)^{n}\det X\cdot\det Y\)：\(\det M'=(-1)^{n}\det(AB)\cdot\det(-I_n)=(-1)^{n}\cdot(-1)^{n}\det(AB)=\det(AB)\)。
比较两式即得 \(\det(AB)=\det A\cdot\det B\)；当 \(A\) 奇异时以 \(A+\varepsilon I\) 代入，两边是 \(\varepsilon\) 的多项式恒等，令 \(\varepsilon\to0\) 取极限即得结论。` },

{ id:'LA01-67', ch:1, type:'计算', diff:5, tags:'摄动法 行列式多线性 多项式展开',
  q: String.raw`设 \(A=\mathrm{diag}(1,2,3,4)\)，
\[ B=\begin{pmatrix}0&1&0&0\\1&0&1&0\\0&1&0&1\\0&0&1&0\end{pmatrix}. \]
求 \(\det(A+tB)\) 的展开式，并给出 \(t^{2}\) 的系数。`,
  a: String.raw`\(\det(A+tB)=t^{4}-18t^{2}+24\)，\(t^{2}\) 的系数为 \(-18\)。`,
  sol: String.raw`由多线性展开：\(\det(A+tB)\) 是 \(t\) 的 4 次多项式，\(t^{k}\) 项系数等于"把 \(A\) 的 \(k\) 行换成 \(B\) 的相应行"所得行列式之和。
\(t^{0}\) 项：\(\det A=24\)。\(t^{1}\) 项：\(B\) 的行含零对角元，逐行替换后每个行列式都含零行组合，合计为 0（对称性使一阶项消失）。
\(t^{4}\) 项：\(\det B\)，按第 1 行展开得 \(\det B=1\)。
\(t^{2}\) 项：只有把第 2、3 行（或相邻配对）替换才得非零，逐对计算为 \(-12,\ -4,\ -2\)（对应行对 \((1,2),(2,3),(3,4)\)），合计 \(-18\)。
故 \(\det(A+tB)=t^{4}-18t^{2}+24\)，\(t^{2}\) 的系数为 \(-18\)。` },

{ id:'LA01-68', ch:1, type:'计算', diff:5, tags:'GCD矩阵 欧拉函数 矩阵分解',
  q: String.raw`设 \(A=(a_{ij})_{5\times5}\)，其中 \(a_{ij}=\gcd(i,j)\)（\(i,j=1,\dots,5\)），即
\[ A=\begin{pmatrix}1&1&1&1&1\\1&2&1&2&1\\1&1&3&1&1\\1&2&1&4&1\\1&1&1&1&5\end{pmatrix}. \]
求 \(\det A\)。`,
  a: String.raw`\(\det A=16\)。`,
  sol: String.raw`利用恒等式 \(\gcd(i,j)=\sum_{d\mid i,\ d\mid j}\varphi(d)\)（\(\varphi\) 为欧拉函数）。
构造矩阵 \(B=(b_{id})\)，其中 \(b_{id}=1\) 若 \(d\mid i\)，否则为 0；则 \(A=B\Phi B^{T}\)，\(\Phi=\mathrm{diag}\left(\varphi(1),\dots,\varphi(5)\right)\)。
\(B\) 是下三角且对角元全为 1（因 \(d\mid i\) 且 \(d\le i\)），故 \(\det B=1\)。
于是 \(\det A=(\det B)^{2}\prod_{d=1}^{5}\varphi(d)=\varphi(1)\varphi(2)\varphi(3)\varphi(4)\varphi(5)=1\cdot1\cdot2\cdot2\cdot4=16\)。` },

{ id:'LA01-69', ch:1, type:'计算', diff:5, tags:'三对角 递推 变号',
  q: String.raw`计算 6 阶三对角行列式
\[ D_6=\begin{vmatrix}1&2&0&0&0&0\\2&1&2&0&0&0\\0&2&1&2&0&0\\0&0&2&1&2&0\\0&0&0&2&1&2\\0&0&0&0&2&1\end{vmatrix}. \]`,
  a: String.raw`\(D_6=13\)。`,
  sol: String.raw`按第一行展开得 \(D_n=D_{n-1}-4D_{n-2}\)，初值 \(D_1=1,\ D_2=1-4=-3\)。
依次计算：\(D_3=-3-4=-7\)，\(D_4=-7+12=5\)，\(D_5=5+28=33\)。
最后 \(D_6=33-4\cdot5=33-20=13\)。
（注意副对角元平方为 4，故递推中是减号，符号交替使数值不单调。）` },

{ id:'LA01-70', ch:1, type:'计算', diff:5, tags:'加边行列式 Schur补 分块',
  q: String.raw`计算 5 阶加边行列式
\[ D=\begin{vmatrix}5&1&1&1&1\\1&1&0&0&0\\1&0&2&0&0\\1&0&0&3&0\\1&0&0&0&4\end{vmatrix}. \]`,
  a: String.raw`\(D=70\)。`,
  sol: String.raw`按左上 \(1\times1\) 块与右下 \(\Lambda=\mathrm{diag}(1,2,3,4)\) 分块，用 Schur 补：
\(\det D=\left(5-\mathbf{1}^{T}\Lambda^{-1}\mathbf{1}\right)\det\Lambda\)。
其中 \(\det\Lambda=24\)，\(\mathbf{1}^{T}\Lambda^{-1}\mathbf{1}=1+\dfrac12+\dfrac13+\dfrac14=\dfrac{25}{12}\)。
故 \(D=24\left(5-\dfrac{25}{12}\right)=24\cdot\dfrac{35}{12}=70\)。` },

{ id:'LA01-71', ch:1, type:'计算', diff:4, tags:'副对角分块 置换块 行列式乘法',
  q: String.raw`计算 4 阶行列式
\[ D=\begin{vmatrix}0&0&1&2\\0&0&3&4\\2&1&0&0\\0&3&0&0\end{vmatrix}. \]`,
  a: String.raw`\(D=-12\)。`,
  sol: String.raw`矩阵为 \(\begin{pmatrix}0&A\\B&0\end{pmatrix}\) 形，其中 \(A=\begin{pmatrix}1&2\\3&4\end{pmatrix}\)，\(B=\begin{pmatrix}2&1\\0&3\end{pmatrix}\)。
交换前两行与后两行（\(\det\begin{pmatrix}0&I_2\\I_2&0\end{pmatrix}=(-1)^{2}=1\)），得 \(\det D=\det A\cdot\det B\)。
计算 \(\det A=-2\)，\(\det B=6\)。
故 \(D=(-2)\cdot6=-12\)。` },

{ id:'LA01-72', ch:1, type:'计算', diff:4, tags:'Gram矩阵 转置乘法 二阶行列式',
  q: String.raw`设 \(A=\begin{pmatrix}1&0\\2&1\\0&3\end{pmatrix}\)。求 \(\det\left(A^{T}A\right)\)。`,
  a: String.raw`\(\det\left(A^{T}A\right)=46\)。`,
  sol: String.raw`先算 \(A^{T}A\)：\(A^{T}=\begin{pmatrix}1&2&0\\0&1&3\end{pmatrix}\)。
相乘得 \(A^{T}A=\begin{pmatrix}1+4+0&0+2+0\\0+2+0&0+1+9\end{pmatrix}=\begin{pmatrix}5&2\\2&10\end{pmatrix}\)。
故 \(\det\left(A^{T}A\right)=5\cdot10-2\cdot2=50-4=46\)。
（也可用柯西—比内公式：\(\det(A^{T}A)\) 等于 \(A\) 的全部 2 阶子式的平方和，\(A=\begin{pmatrix}1&0\\2&1\\0&3\end{pmatrix}\) 的三个 2 阶子式为 \(1,\ 3,\ 6\)，平方和 \(1+9+36=46\)，与直接计算一致。）` },

{ id:'LA01-73', ch:1, type:'计算', diff:5, tags:'Kronecker积 张量积 行列式公式',
  q: String.raw`设 \(A=\begin{pmatrix}1&2\\3&4\end{pmatrix}\)，\(B=\begin{pmatrix}2&0\\0&3\end{pmatrix}\)，\(A\otimes B\) 为它们的 Kronecker 积（4 阶）。求 \(\det(A\otimes B)\)。`,
  a: String.raw`\(\det(A\otimes B)=144\)。`,
  sol: String.raw`Kronecker 积的定义：\(A\otimes B=(a_{ij}B)\)，即每个元素乘一个 \(2\times2\) 块，所得为 4 阶矩阵。
行列式公式：若 \(A\) 为 \(n\) 阶、\(B\) 为 \(m\) 阶，则 \(\det(A\otimes B)=\left(\det A\right)^{m}\left(\det B\right)^{n}\)。
这里 \(\det A=1\cdot4-2\cdot3=-2\)，\(\det B=6\)，\(n=m=2\)。
故 \(\det(A\otimes B)=(-2)^{2}\cdot6^{2}=4\cdot36=144\)。` },

{ id:'LA01-74', ch:1, type:'证明', diff:5, tags:'Hadamard不等式 正交化 Gram行列式',
  q: String.raw`设 \(A=(a_{1},a_{2},\dots,a_{n})\) 为 \(n\) 阶实矩阵，\(a_{i}\) 为其列向量。证明 Hadamard 不等式：
\[ \left|\det A\right|\le\prod_{i=1}^{n}\left\|a_{i}\right\|. \]`,
  a: String.raw`不等式成立，等号当且仅当各列互相正交（或某个 \(a_i=0\)）。`,
  sol: String.raw`若某列为零向量，两边都为 0，结论显然；以下设各列非零。
对列向量作 Gram–Schmidt 正交化：\(a_{k}=q_{k}+\sum_{i<k}c_{ik}q_{i}\)，其中 \(q_{k}\perp q_{i}\)。
由行列式对列的初等变换不变性，\(\det A=\det(q_{1},\dots,q_{n})\)，而右端为正交（列）矩阵乘 \(\prod\|q_{i}\|\) 的对角阵，故 \(\left|\det A\right|=\prod_{i}\|q_{i}\|\)。
又 \(\|q_{k}\|\le\|a_{k}\|\)（正交化只减去已有分量，不增加长度），故 \(\left|\det A\right|\le\prod\|a_{i}\|\)。
等号成立当且仅当每步都无分量可减，即各列两两正交。` },

{ id:'LA01-75', ch:1, type:'计算', diff:5, tags:'三对角 异号副对角 递推',
  q: String.raw`计算 5 阶三对角行列式（主对角全为 2，上副对角全为 1，下副对角全为 \(-1\)）
\[ D_5=\begin{vmatrix}2&1&0&0&0\\-1&2&1&0&0\\0&-1&2&1&0\\0&0&-1&2&1\\0&0&0&-1&2\end{vmatrix}. \]`,
  a: String.raw`\(D_5=70\)。`,
  sol: String.raw`按第一行展开得 \(D_n=2D_{n-1}-(1)(-1)D_{n-2}=2D_{n-1}+D_{n-2}\)，初值 \(D_1=2,\ D_2=2\cdot2-(-1)=5\)。
依次计算：\(D_3=2\cdot5+2=12\)，\(D_4=2\cdot12+5=29\)。
最后 \(D_5=2\cdot29+12=58+12=70\)。
（若两副对角同号，递推中为减号，结果会完全不同，可用 6 阶同型矩阵验证。）` },

{ id:'LA01-76', ch:1, type:'计算', diff:5, tags:'三对角 递推 斐波那契',
  q: String.raw`计算 6 阶三对角行列式
\[ D_6=\begin{vmatrix}1&1&0&0&0&0\\-1&1&1&0&0&0\\0&-1&1&1&0&0\\0&0&-1&1&1&0\\0&0&0&-1&1&1\\0&0&0&0&-1&1\end{vmatrix}. \]`,
  a: String.raw`\(D_6=13\)。`,
  sol: String.raw`按第一行展开得 \(D_n=1\cdot D_{n-1}-(1)(-1)D_{n-2}=D_{n-1}+D_{n-2}\)，因为上副对角元为 1、下副对角元为 \(-1\)，其积为 \(-1\)。
初值：\(D_1=1\)，\(D_2=1\cdot1-(-1)(-1)=2\)。
由此数列为 \(1,2,3,5,8,13,\dots\)，即 \(D_n=F_{n+1}\)（斐波那契数），可用归纳验证。
故 \(D_6=13\)。` },

{ id:'LA01-77', ch:1, type:'计算', diff:4, tags:'max矩阵 行差 三角形化',
  q: String.raw`计算 5 阶行列式 \(D=\left|\max(i,j)\right|_{5\times5}\)，即
\[ D=\begin{vmatrix}1&2&3&4&5\\2&2&3&4&5\\3&3&3&4&5\\4&4&4&4&5\\5&5&5&5&5\end{vmatrix}. \]`,
  a: String.raw`\(D=5\)。`,
  sol: String.raw`作行变换 \(r_i\leftarrow r_i-r_{1}\ (i=2,3,4,5)\)：第 \(i\) 行化为 \((i-1,i-2,\dots,1,0,\dots,0)\)，即前 \(i-1\) 个元素依次为 \(i-1,i-2,\dots,1\)，其余为 0。
此时第 5 列只有第一行的 5 非零，按第 5 列展开：\(D=5\cdot(-1)^{1+5}\cdot\det M\)，其中 \(M\) 为右下 \(4\times4\) 块。
\(M\) 是下三角且对角元全为 1（第 \(i\) 行第 \(i-1\) 列为 1），故 \(\det M=1\)。
所以 \(D=5\)。一般地，\(n\) 阶 \(\max(i,j)\) 行列式等于 \((-1)^{n+1}n\)。` },

{ id:'LA01-78', ch:1, type:'证明', diff:5, tags:'正交矩阵 行列式 转置',
  q: String.raw`设 \(Q\) 为 \(n\) 阶实正交矩阵（\(Q^{T}Q=I\)）。证明：\(\det Q=\pm1\)。`,
  a: String.raw`\(\det Q\in\{1,-1\}\)。`,
  sol: String.raw`由 \(Q^{T}Q=I\) 两边取行列式：\(\det\left(Q^{T}\right)\det Q=\det I=1\)。
又 \(\det\left(Q^{T}\right)=\det Q\)（转置不改变行列式）。
故 \(\left(\det Q\right)^{2}=1\)，由于 \(\det Q\) 为实数，得 \(\det Q=\pm1\)。
（几何意义：正交变换保持长度与体积，故体积的伸缩因子只能是 \(\pm1\)；\(\det Q=1\) 时为旋转，\(\det Q=-1\) 时含反射。）` },

{ id:'LA01-79', ch:1, type:'计算', diff:4, tags:'范德蒙德 提取公因子 幂次平移',
  q: String.raw`设 4 阶矩阵 \(A=(a_{ij})\)，其中 \(a_{ij}=(i+1)^{j+1}\)（\(i,j=1,2,3,4\)）。求 \(\det A\)。`,
  a: String.raw`\(\det A=172800\)。`,
  sol: String.raw`写出矩阵：\(A=\begin{pmatrix}4&8&16&32\\9&27&81&243\\16&64&256&1024\\25&125&625&3125\end{pmatrix}\)，第 \(i\) 行为 \(x_i^{2},x_i^{3},x_i^{4},x_i^{5}\)，其中 \(x_1=2,x_2=3,x_3=4,x_4=5\)。
从第 \(i\) 行提出公因子 \(x_i^{2}\)，得 \(A=\mathrm{diag}\left(x_1^{2},\dots,x_4^{2}\right)\cdot V\)，其中 \(V\) 的第 \(i\) 行为 \(\left(1,x_i,x_i^{2},x_i^{3}\right)\) 为节点 \(x_1,x_2,x_3,x_4\) 的范德蒙德矩阵。
计算 \(\det V=\prod_{i<j}(x_j-x_i)=1\cdot2\cdot3\cdot1\cdot2\cdot1=12\)。
公因子之积 \(\left(2\cdot3\cdot4\cdot5\right)^{2}=120^{2}=14400\)。
故 \(\det A=14400\cdot12=172800\)。` },

{ id:'LA01-80', ch:1, type:'证明', diff:5, tags:'交换性 复矩阵 行列式非负',
  q: String.raw`设 \(A,B\) 为 \(n\) 阶实矩阵，且 \(AB=BA\)。证明：\(\det\left(A^{2}+B^{2}\right)\ge0\)。`,
  a: String.raw`不等式成立。`,
  sol: String.raw`由 \(AB=BA\) 得 \(A^{2}+B^{2}=(A+iB)(A-iB)\)（展开时交叉项 \(iBA-iAB=0\) 消失）。
故 \(\det\left(A^{2}+B^{2}\right)=\det(A+iB)\cdot\det(A-iB)=\det(A+iB)\cdot\overline{\det(A+iB)}\)。
（第二步用到 \(\overline{A+iB}=A-iB\) 以及行列式对元素取共轭后也取共轭。）
于是 \(\det\left(A^{2}+B^{2}\right)=\left|\det(A+iB)\right|^{2}\ge0\)。
等号情形：如 \(A=\begin{pmatrix}0&1\\-1&0\end{pmatrix},B=I\) 时 \(A^{2}+B^{2}=0\)，说明等号确能取到。` },

{ id:'LA01-81', ch:1, type:'计算', diff:5, tags:'分块矩阵 Schur补 二阶块可逆',
  q: String.raw`计算 5 阶行列式
\[ D=\begin{vmatrix}1&2&1&0&1\\3&4&0&1&2\\2&1&2&1&0\\0&1&1&2&1\\1&0&0&1&2\end{vmatrix}. \]`,
  a: String.raw`\(D=-48\)。`,
  sol: String.raw`按左上 \(2\times2\) 与右下 \(3\times3\) 分块：\(A=\begin{pmatrix}1&2\\3&4\end{pmatrix}\)，\(D_m=\begin{pmatrix}2&1&0\\1&2&1\\0&1&2\end{pmatrix}\)。
\(\det A=4-6=-2\ne0\)，故 \(\det D=\det A\cdot\det\left(D_m-CA^{-1}B\right)\)。
计算 \(A^{-1}=\begin{pmatrix}-2&1\\ \tfrac32&-\tfrac12\end{pmatrix}\)，代入得 \(D_m-CA^{-1}B=\begin{pmatrix}\tfrac92&-\tfrac12&-\tfrac12\\-\tfrac12&\tfrac52&\tfrac12\\2&0&2\end{pmatrix}\)。
按第一行展开该 \(3\times3\) 行列式：\(\dfrac92\cdot5-\left(-\dfrac12\right)\cdot(-2)+\left(-\dfrac12\right)\cdot(-5)=22.5-1+2.5=24\)。
故 \(D=(-2)\cdot24=-48\)。` },

{ id:'LA01-82', ch:1, type:'计算', diff:5, tags:'循环三对角 特征值法 余弦级数',
  q: String.raw`计算 6 阶循环三对角行列式
\[ D=\begin{vmatrix}3&-1&0&0&0&-1\\-1&3&-1&0&0&0\\0&-1&3&-1&0&0\\0&0&-1&3&-1&0\\0&0&0&-1&3&-1\\-1&0&0&0&-1&3\end{vmatrix}. \]`,
  a: String.raw`\(D=320\)。`,
  sol: String.raw`该矩阵为循环矩阵，首行 \((3,-1,0,0,0,-1)\)，特征值 \(\lambda_k=3-\omega^{k}-\omega^{-k}=3-2\cos\dfrac{k\pi}{3}\)，\(k=0,1,\dots,5\)。
逐个求值：\(\lambda_0=3-2=1\)；\(\lambda_1=3-1=2\)；\(\lambda_2=3+1=4\)；\(\lambda_3=3+2=5\)；\(\lambda_4=4\)；\(\lambda_5=2\)。
故 \(D=\prod_{k=0}^{5}\lambda_k=1\cdot2\cdot4\cdot5\cdot4\cdot2=320\)。
（一般地，此类 \(n\) 阶行列式为 \(2\left(T_n\left(\tfrac{a}{2}\right)-1\right)\)，此处 \(a=3,n=6\) 亦得 320。）` },

{ id:'LA01-83', ch:1, type:'计算', diff:5, tags:'合流范德蒙德 重节点 极限法',
  q: String.raw`计算 4 阶"合流范德蒙德"行列式（节点 \(x=1\) 为二重节点，另两节点为 \(2,3\)）：
\[ D=\begin{vmatrix}1&1&1&1\\0&1&2&3\\1&2&4&8\\1&3&9&27\end{vmatrix}. \]`,
  a: String.raw`\(D=4\)。`,
  sol: String.raw`第二行是各列在 \(x=1\) 处的导数值 \((0,1,2,3)\)，即把重节点 \(1\) 的"值行"与"导数行"并列。
用极限法理解：把重节点拆成 \(1\) 与 \(1+h\)，则 4 阶范德蒙德行列式 \(V(h)=h(2-1)(3-1)(2-1-h)(3-1-h)(3-2)\)。
整理得 \(V(h)=h\cdot1\cdot2\cdot(1-h)(2-h)\cdot1\)。
当 \(h\to0\) 时 \(V(h)\to0\)，而 \(V(h)/h\to 1\cdot2\cdot1\cdot2\cdot1=4\)，这个极限正是合流后的行列式。
故 \(D=4\)。` },

{ id:'LA01-84', ch:1, type:'计算', diff:5, tags:'特征值法 矩阵多项式 行列式',
  q: String.raw`设 \(A=\begin{pmatrix}2&1&0\\1&2&0\\0&0&3\end{pmatrix}\)，求 \(\det\left(A^{3}-A+I\right)\)。`,
  a: String.raw`\(\det\left(A^{3}-A+I\right)=625\)。`,
  sol: String.raw`先求 \(A\) 的特征值：左上 \(2\times2\) 块 \(\begin{pmatrix}2&1\\1&2\end{pmatrix}\) 的特征值为 \(3,1\)，右下块给出 \(3\)，故特征值为 \(\lambda_1=\lambda_3=3,\ \lambda_2=1\)。
若 \(p(t)\) 为多项式，则 \(p(A)\) 的特征值为 \(p(\lambda_i)\)（同一组特征向量）。
取 \(p(t)=t^{3}-t+1\)：\(p(3)=27-3+1=25\)，\(p(1)=1-1+1=1\)。
故 \(\det\left(A^{3}-A+I\right)=25\cdot25\cdot1=625\)。` },

{ id:'LA01-85', ch:1, type:'证明', diff:5, tags:'幂零矩阵 特征值 行列式',
  q: String.raw`设 \(n\) 阶复矩阵 \(A\) 满足 \(A^{m}=0\)（某正整数 \(m\)），即 \(A\) 幂零。证明：\(\det(I+A)=1\)。`,
  a: String.raw`\(\det(I+A)=1\)。`,
  sol: String.raw`设 \(\lambda\) 为 \(A\) 的任一特征值，对应特征向量 \(x\ne0\)，则 \(A^{m}x=\lambda^{m}x\)。
由 \(A^{m}=0\) 得 \(\lambda^{m}x=0\)，而 \(x\ne0\)，故 \(\lambda^{m}=0\)，即 \(\lambda=0\)。
于是 \(A\) 的全部特征值都为 \(0\)，\(I+A\) 的全部特征值为 \(1+\lambda=1\)。
行列式等于特征值之积，故 \(\det(I+A)=1^{n}=1\)。
（也可用有限展开：\(\det(I+A)=\det\left((I-A+\cdots)\right)\) 形式的逆矩阵论证，或用 \(A\) 与严格上三角相似。）` },

{ id:'LA01-86', ch:1, type:'计算', diff:4, tags:'全1扰动 特征值法 秩一矩阵',
  q: String.raw`计算 4 阶行列式
\[ D=\begin{vmatrix}0&1&1&1\\1&0&1&1\\1&1&0&1\\1&1&1&0\end{vmatrix}. \]`,
  a: String.raw`\(D=-3\)。`,
  sol: String.raw`所给矩阵 \(A=J-I\)，其中 \(J\) 为 4 阶全 1 矩阵。
\(J\) 的特征值为 \(4\)（重数 1）与 \(0\)（重数 3），故 \(A=J-I\) 的特征值为 \(3\) 与 \(-1\)（重数 3）。
于是 \(D=3\cdot(-1)^{3}=-3\)。
一般地，主对角为 \(0\)、其余为 1 的 \(n\) 阶行列式为 \((-1)^{n-1}(n-1)\)。` },

{ id:'LA01-87', ch:1, type:'计算', diff:5, tags:'Toeplitz矩阵 行变换 递推',
  q: String.raw`计算 5 阶 Toeplitz 型行列式
\[ D=\begin{vmatrix}1&2&4&8&16\\2&1&2&4&8\\4&2&1&2&4\\8&4&2&1&2\\16&8&4&2&1\end{vmatrix}. \]`,
  a: String.raw`\(D=81\)。`,
  sol: String.raw`记 \(a_{ij}=x^{|i-j|}\)，本例 \(x=2\)。用自下而上的行变换 \(r_i\leftarrow r_i-x\,r_{i-1}\ (i=n,\dots,2)\)。
每一步把 \(r_i\) 中"上一行对应位置"的 \(x\) 倍消去，第 \(i\) 行化为仅含两个非零元的行，反复进行后矩阵化为三角形状。
经整理可得 \(\det D=(1-x^{2})^{n-1}\)（每消一次产生因子 \(1-x^{2}\)，共 \(n-1\) 次；符号由 \(n\) 决定并可验证）。
代入 \(n=5,\ x=2\)：\(D=(1-4)^{4}=(-3)^{4}=81\)。
（\(n=3\) 时得 9、\(n=4\) 时得 \(-27\)，均与直接计算一致。）` },

{ id:'LA01-88', ch:1, type:'证明', diff:5, tags:'伴随矩阵 秩 零空间',
  q: String.raw`设 \(A\) 为 \(n\ (n\ge2)\) 阶矩阵，\(\mathrm{adj}(A)\) 为其伴随矩阵，且 \(\mathrm{r}(A)=n-1\)。证明：\(\mathrm{adj}(A)\ne0\) 且 \(A\,\mathrm{adj}(A)=0\)。`,
  a: String.raw`两个结论都成立（且由此得 \(\mathrm{r}\left(\mathrm{adj}(A)\right)=1\)）。`,
  sol: String.raw`由伴随矩阵的基本恒等式 \(A\,\mathrm{adj}(A)=\mathrm{adj}(A)\,A=\det A\cdot I\)，而 \(\mathrm{r}(A)=n-1<n\) 说明 \(\det A=0\)，故 \(A\,\mathrm{adj}(A)=0\)。
再由 \(\mathrm{r}(A)=n-1\) 知 \(A\) 至少有一个 \(n-1\) 阶子式非零（否则秩会更小）。
\(\mathrm{adj}(A)\) 的元素恰为 \(A\) 的 \(n-1\) 阶子式（带符号与转置），故 \(\mathrm{adj}(A)\ne0\)。
最后由 \(A\,\mathrm{adj}(A)=0\) 知 \(\mathrm{adj}(A)\) 的每一列都属于 \(A\) 的零空间，而 \(\dim\ker A=n-\mathrm{r}(A)=1\)。
又 \(\mathrm{adj}(A)\ne0\)，故其非零列张成 \(\ker A\)，从而 \(\mathrm{r}\left(\mathrm{adj}(A)\right)=1\)。` },

{ id:'LA01-89', ch:1, type:'计算', diff:5, tags:'Hilbert矩阵 柯西行列式 连乘',
  q: String.raw`计算 5 阶 Hilbert 行列式
\[ H_5=\left(\frac{1}{i+j-1}\right)_{1\le i,j\le5}. \]`,
  a: String.raw`\(H_5=\dfrac{1}{266716800000}\)。`,
  sol: String.raw`取 \(x_i=i,\ y_j=j-1\)，则 \(H_5\) 为柯西行列式 \(a_{ij}=\dfrac{1}{x_i+y_j}\)。
由柯西公式 \(\det H_5=\dfrac{\prod_{i<j}(x_j-x_i)(y_j-y_i)}{\prod_{i,j}(x_i+y_j)}\)。
分子：\(\prod_{i<j}(j-i)=\prod_{d=1}^{4}d^{\,5-d}=1^{4}\cdot2^{3}\cdot3^{2}\cdot4^{1}=288\)，故分子为 \(288^{2}=82944\)。
分母：\(\prod_{i,j}(i+j-1)=120\cdot720\cdot2520\cdot6720\cdot15120=22122558259200000\)。
约分得 \(H_5=\dfrac{1}{266716800000}\)（即 \(1/(5!\cdot\prod_{k=1}^{4}k!\cdot\cdots)\) 的标准值）。` },

{ id:'LA01-90', ch:1, type:'计算', diff:5, tags:'分块循环矩阵 交换块 同时对角化',
  q: String.raw`设 \(A=\begin{pmatrix}1&2&0\\0&1&2\\2&0&1\end{pmatrix}\)，\(B=\begin{pmatrix}0&1&1\\1&0&1\\1&1&0\end{pmatrix}\)，计算 6 阶行列式
\[ D=\begin{vmatrix}A&B\\B&A\end{vmatrix}. \]`,
  a: String.raw`\(D=80\)。`,
  sol: String.raw`\(A,B\) 都是循环矩阵（\(A\) 首行 \((1,2,0)\)，\(B\) 首行 \((0,1,1)\)），循环矩阵彼此可交换，故 \(AB=BA\)。
取 \(P=\begin{pmatrix}I_3&I_3\\I_3&-I_3\end{pmatrix}\)，则 \(P\begin{pmatrix}A&B\\B&A\end{pmatrix}P=2\begin{pmatrix}A+B&0\\0&A-B\end{pmatrix}\)。
取行列式：\((\det P)^{2}D=2^{6}\det(A+B)\det(A-B)\)，而 \((\det P)^{2}=2^{6}\)，故 \(D=\det(A+B)\det(A-B)\)。
计算 \(A+B=\begin{pmatrix}1&3&1\\1&1&3\\3&1&1\end{pmatrix}\)，其行列式 \(=20\)；\(A-B=\begin{pmatrix}1&1&-1\\-1&1&1\\1&-1&1\end{pmatrix}\)，其行列式 \(=4\)。
故 \(D=20\cdot4=80\)。` },

{ id:'LA01-91', ch:1, type:'计算', diff:4, tags:'全1扰动 特征值法 秩一矩阵',
  q: String.raw`计算 5 阶行列式（主对角线元素全为 \(4\)，其余元素全为 \(1\)）
\[ D=\begin{vmatrix}4&1&1&1&1\\1&4&1&1&1\\1&1&4&1&1\\1&1&1&4&1\\1&1&1&1&4\end{vmatrix}. \]`,
  a: String.raw`\(D=648\)。`,
  sol: String.raw`记所求矩阵 \(A=3I+J\)，其中 \(J\) 为 5 阶全 1 矩阵。
\(J\) 的特征值为 \(5\)（重数 1）与 \(0\)（重数 4），故 \(A\) 的特征值为 \(3+5=8\) 与 \(3+0=3\)（重数 4）。
于是 \(D=8\cdot3^{4}=8\cdot81=648\)。
与通用公式 \((a-b)^{n-1}\left(a+(n-1)b\right)\)（\(a=4,b=1,n=5\)）一致：\(3^{4}\cdot8=648\)。` },

{ id:'LA01-92', ch:1, type:'计算', diff:5, tags:'秩一扰动 行列式引理 对角矩阵',
  q: String.raw`计算 5 阶行列式
\[ D=\begin{vmatrix}3&0&1&0&1\\1&1&1&0&1\\1&0&4&0&1\\1&0&1&1&1\\1&0&1&0&3\end{vmatrix}. \]`,
  a: String.raw`\(D=28\)。`,
  sol: String.raw`该矩阵可写成 \(\Lambda+uv^{T}\)，其中 \(\Lambda=\mathrm{diag}(2,1,3,1,2)\)，\(u=(1,1,1,1,1)^{T}\)，\(v=(1,0,1,0,1)^{T}\)。
\(\Lambda\) 可逆，由行列式引理 \(\det\left(\Lambda+uv^{T}\right)=\det\Lambda\left(1+v^{T}\Lambda^{-1}u\right)\)。
\(\det\Lambda=2\cdot1\cdot3\cdot1\cdot2=12\)，且 \(v^{T}\Lambda^{-1}u=\dfrac12+0+\dfrac13+0+\dfrac12=\dfrac43\)。
故 \(D=12\left(1+\dfrac43\right)=12\cdot\dfrac73=28\)。` },

{ id:'LA01-93', ch:1, type:'计算', diff:5, tags:'三对角 多项式行列式 递推',
  q: String.raw`计算 \(n=5\) 阶行列式（其中 \(x\) 为参数）
\[ D_5(x)=\begin{vmatrix}x&1&0&0&0\\1&x&1&0&0\\0&1&x&1&0\\0&0&1&x&1\\0&0&0&1&x\end{vmatrix}. \]`,
  a: String.raw`\(D_5(x)=x^{5}-4x^{3}+3x\)。`,
  sol: String.raw`按第一行展开得 \(D_n=xD_{n-1}-D_{n-2}\)，初值 \(D_1=x,\ D_2=x^{2}-1\)。
依次计算：\(D_3=x(x^{2}-1)-x=x^{3}-2x\)。
\(D_4=x(x^{3}-2x)-(x^{2}-1)=x^{4}-3x^{2}+1\)。
\(D_5=x(x^{4}-3x^{2}+1)-(x^{3}-2x)=x^{5}-4x^{3}+3x\)。
（该多项式可分解为 \(x(x^{2}-1)(x^{2}-3)\)，根为 \(0,\pm1,\pm\sqrt3\)，与第二类切比雪夫多项式对应。）` },

{ id:'LA01-94', ch:1, type:'计算', diff:5, tags:'友矩阵 特征多项式 首尾系数',
  q: String.raw`计算 5 阶友矩阵的行列式
\[ C=\begin{pmatrix}0&1&0&0&0\\0&0&1&0&0\\0&0&0&1&0\\0&0&0&0&1\\3&-1&0&2&0\end{pmatrix}. \]`,
  a: String.raw`\(\det C=3\)。`,
  sol: String.raw`先写出 \(C\) 的特征多项式：\(\det(\lambda I-C)=\lambda^{5}-2\lambda^{3}+\lambda-3\)（友矩阵的特征多项式由末行系数直接给出，符号为负）。
在上式中令 \(\lambda=0\)：\(\det(-C)=-3\)。
又 \(\det(-C)=(-1)^{5}\det C=-\det C\)，故 \(-\det C=-3\)，即 \(\det C=3\)。
一般结论：友矩阵的行列式 \(\det C=(-1)^{n}c_0\)，其中 \(c_0=-3\) 是特征多项式的常数项，\(n=5\) 时为 \((-1)^{5}\cdot(-3)=3\)，与直接看末行首元 \(3\) 的结果一致。` },

{ id:'LA01-95', ch:1, type:'证明', diff:5, tags:'特征多项式 主子式 系数恒等式',
  q: String.raw`设 \(A=(a_{ij})\) 为 3 阶复矩阵，\(M_{ii}\) 表示划去第 \(i\) 行第 \(i\) 列所得的二阶主子式。证明：
\[ \det(\lambda I-A)=\lambda^{3}-\left(\mathrm{tr}A\right)\lambda^{2}+\left(M_{11}+M_{22}+M_{33}\right)\lambda-\det A. \]`,
  a: String.raw`恒等式成立（一般地 \(\lambda^{n-k}\) 的系数为 \((-1)^{k}\) 倍的全部 \(k\) 阶主子式之和）。`,
  sol: String.raw`记 \(B=\lambda I-A\)，其对角元为 \(\lambda-a_{ii}\)，非对角元为 \(-a_{ij}\)。按行列式定义展开并只保留 \(\lambda\) 的幂。
\(\lambda^{3}\) 项只来自对角元之积 \((\lambda-a_{11})(\lambda-a_{22})(\lambda-a_{33})\)，其 \(\lambda^{2}\) 系数为 \(-(a_{11}+a_{22}+a_{33})=-\mathrm{tr}A\)。
\(\lambda^{2}\) 项还要求恰好两个因子取对角元、一个取非对角元；而非对角元所在位置无法与另外两个对角元构成偶排列（取到非对角元必使该行该列各缺一个对角元），故 \(\lambda^{2}\) 系数确为 \(-\mathrm{tr}A\)。
\(\lambda\) 项要求一个因子取对角元、两个取非对角元：这些项恰好组成三个二阶主子式之和 \(M_{11}+M_{22}+M_{33}\)（每个主子式 \(=(\lambda-a_{ii})(\lambda-a_{jj})-a_{ij}a_{ji}\) 的常数部分之和）。
与 \(\lambda\) 无关的常数项即 \(\det(-A)=-\det A\)，故恒等式成立。` },

{ id:'LA01-96', ch:1, type:'计算', diff:4, tags:'Pascal矩阵 二项式系数 归纳消元',
  q: String.raw`计算 5 阶 Pascal 行列式
\[ D=\begin{vmatrix}1&1&1&1&1\\1&2&3&4&5\\1&3&6&10&15\\1&4&10&20&35\\1&5&15&35&70\end{vmatrix}. \]`,
  a: String.raw`\(D=1\)。`,
  sol: String.raw`该矩阵第 \((i,j)\) 元为 \(\binom{i+j-2}{i-1}\)。
作行变换 \(r_i\leftarrow r_i-r_{i-1}\ (i=5,4,3,2)\)，由 Pascal 恒等式 \(\binom{m}{k}-\binom{m-1}{k}=\binom{m-1}{k-1}\)，行差后矩阵化为"左上角 1 + 低一阶 Pascal 块"的形状。
重复该过程共 4 次，每一步都把阶数降低 1 且不改变行列式（行差是第三类初等变换）。
最终得到对角元全为 1 的上三角矩阵，故 \(D=1\)。
（一般地 \(n\) 阶 Pascal 行列式恒为 1。）` },

{ id:'LA01-97', ch:1, type:'计算', diff:4, tags:'分块矩阵 幂零块 交换分块',
  q: String.raw`设 \(N=\begin{pmatrix}0&1\\0&0\end{pmatrix}\)，计算 4 阶行列式
\[ D=\begin{vmatrix}I_2&N\\N&I_2\end{vmatrix}. \]`,
  a: String.raw`\(D=1\)。`,
  sol: String.raw`\(N\) 与 \(I_2\) 可交换（\(NI=IN\)），故可用分块对角化技巧：取 \(P=\begin{pmatrix}I_2&I_2\\I_2&-I_2\end{pmatrix}\)，得 \(P\begin{pmatrix}I&N\\N&I\end{pmatrix}P=2\begin{pmatrix}I+N&0\\0&I-N\end{pmatrix}\)。
取行列式：\((\det P)^{2}D=2^{4}\det(I+N)\det(I-N)\)，其中 \((\det P)^{2}=2^{4}\)，故 \(D=\det(I+N)\det(I-N)\)。
\(N^{2}=0\) 幂零，\(I\pm N\) 为三角矩阵，对角元全为 1，故 \(\det(I+N)=\det(I-N)=1\)。
所以 \(D=1\cdot1=1\)。` },

{ id:'LA01-98', ch:1, type:'证明', diff:5, tags:'行列式恒等式 分块矩阵 两种消元',
  q: String.raw`设 \(A\) 为 \(m\times n\) 矩阵，\(B\) 为 \(n\times m\) 矩阵。证明：\(\det(I_m+AB)=\det(I_n+BA)\)。`,
  a: String.raw`等式成立（\(AB\) 与 \(BA\) 的特征多项式（除零特征值重数外）相同）。`,
  sol: String.raw`考察 \((m+n)\) 阶分块矩阵 \(M=\begin{pmatrix}I_m&A\\ -B&I_n\end{pmatrix}\)。
第一种消元：\(\begin{pmatrix}I_m&0\\B&I_n\end{pmatrix}M=\begin{pmatrix}I_m&A\\0&I_n+BA\end{pmatrix}\)，故 \(\det M=\det(I_n+BA)\)。
第二种消元：\(\begin{pmatrix}I_m&-A\\0&I_n\end{pmatrix}M=\begin{pmatrix}I_m+AB&0\\-B&I_n\end{pmatrix}\)，故 \(\det M=\det(I_m+AB)\)。
两种算法给出同一个 \(\det M\)，于是 \(\det(I_m+AB)=\det(I_n+BA)\)。
（两种消元矩阵都是对角块为单位的三角矩阵，行列式为 1，不影响 \(\det M\)。）` },

{ id:'LA01-99', ch:1, type:'计算', diff:5, tags:'三对角 秩一扰动 ShermanMorrison 逆元',
  q: String.raw`计算 5 阶行列式
\[ D=\begin{vmatrix}3&-1&0&0&0\\-1&2&-1&0&0\\0&-1&2&-1&0\\0&0&-1&2&-1\\0&0&0&-1&2\end{vmatrix}. \]`,
  a: String.raw`\(D=11\)。`,
  sol: String.raw`记 \(T\) 为主对角全 2、上下副对角全 \(-1\) 的 5 阶三对角矩阵，则 \(T\) 的行列式为 \(n+1=6\)，且所给矩阵 \(M=T+e_1e_1^{T}\)。
由行列式引理：\(\det\left(T+e_1e_1^{T}\right)=\det T\left(1+e_1^{T}T^{-1}e_1\right)=\det T\left(1+\left(T^{-1}\right)_{11}\right)\)。
求 \(\left(T^{-1}\right)_{11}\)：按公式 \(\left(T^{-1}\right)_{11}=\dfrac{\det T_{(1,1)}}{\det T}\)，其中 \(T_{(1,1)}\) 为删去第 1 行第 1 列的 4 阶同型三对角行列式，其值为 \(5\)。
故 \(\left(T^{-1}\right)_{11}=\dfrac56\)，\(D=6\left(1+\dfrac56\right)=6\cdot\dfrac{11}{6}=11\)。` },

{ id:'LA01-100', ch:1, type:'计算', diff:5, tags:'分块矩阵 交换块 特征值法',
  q: String.raw`设 \(A=\begin{pmatrix}1&2&0\\0&2&1\\1&0&3\end{pmatrix}\)，计算 6 阶行列式
\[ D=\begin{vmatrix}A&I_3\\I_3&A\end{vmatrix}. \]`,
  a: String.raw`\(D=52\)。`,
  sol: String.raw`块 \(A\) 与 \(I_3\) 可交换，取 \(P=\begin{pmatrix}I_3&I_3\\I_3&-I_3\end{pmatrix}\)，则 \(P\begin{pmatrix}A&I\\I&A\end{pmatrix}P=2\begin{pmatrix}A+I&0\\0&A-I\end{pmatrix}\)。
取行列式：\((\det P)^{2}D=2^{6}\det(A+I)\det(A-I)\)，而 \((\det P)^{2}=2^{6}\)，故 \(D=\det(A+I)\det(A-I)\)。
计算 \(A+I=\begin{pmatrix}2&2&0\\0&3&1\\1&0&4\end{pmatrix}\)，其行列式 \(=2(12-0)-2(0-1)+0=24+2=26\)。
计算 \(A-I=\begin{pmatrix}0&2&0\\0&1&1\\1&0&2\end{pmatrix}\)，按第一行展开：唯一非零元是 \(a_{12}=2\)，符号 \((-1)^{1+2}=-1\)，余子式 \(\begin{vmatrix}0&1\\1&2\end{vmatrix}=0\cdot2-1\cdot1=-1\)，故 \(\det(A-I)=(-1)\cdot2\cdot(-1)=2\)。
故 \(D=26\cdot2=52\)。` },
);
