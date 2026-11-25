window.LBANK = window.LBANK || [];
window.LBANK.push(
{ id:'LA09-21', ch:9, type:'计算', diff:5, tags:'施密特正交化 标准正交基',
  q: String.raw`在 \(\mathbb{R}^{4}\) 中，对向量组 \(a_1=(1,1,0,0)^{T},\ a_2=(0,1,1,0)^{T},\ a_3=(0,0,1,1)^{T},\ a_4=(1,0,0,0)^{T}\) 作施密特正交化，求与之等价的标准正交组 \(e_1,e_2,e_3,e_4\)。`,
  a: String.raw`\(e_1=\dfrac{1}{\sqrt2}(1,1,0,0)^{T},\ e_2=\dfrac{1}{\sqrt6}(-1,1,2,0)^{T},\ e_3=\dfrac{1}{2\sqrt3}(1,-1,1,3)^{T},\ e_4=\dfrac12(1,-1,1,-1)^{T}\)。`,
  sol: String.raw`第一步：取 \(b_1=a_1=(1,1,0,0)^{T}\)，则 \(\|b_1\|^{2}=2\)。
第二步：\(b_2=a_2-\dfrac{a_2\cdot b_1}{b_1\cdot b_1}b_1=(0,1,1,0)^{T}-\dfrac12(1,1,0,0)^{T}=\left(-\dfrac12,\dfrac12,1,0\right)^{T}\)，\(\|b_2\|^{2}=\dfrac32\)。
第三步：\(a_3\cdot b_1=0,\ a_3\cdot b_2=1\)，故 \(b_3=a_3-\dfrac{1}{3/2}b_2=\left(\dfrac13,-\dfrac13,\dfrac13,1\right)^{T}\)，\(\|b_3\|^{2}=\dfrac43\)。
第四步：\(a_4\cdot b_1=1,\ a_4\cdot b_2=-\dfrac12,\ a_4\cdot b_3=\dfrac13\)，故
\[
b_4=a_4-\dfrac12b_1+\dfrac13b_2-\dfrac14b_3=\dfrac14(1,-1,1,-1)^{T},\qquad \|b_4\|^{2}=\dfrac14.
\]
第五步：分别单位化 \(e_i=b_i/\|b_i\|\)，即得所需标准正交组。` },

{ id:'LA09-22', ch:9, type:'计算', diff:5, tags:'正交补 标准正交基 点到子空间距离',
  q: String.raw`设 \(W=\operatorname{span}\{(1,1,1,0)^{T},(0,1,1,1)^{T}\}\subset\mathbb{R}^{4}\)。(1) 求 \(W\) 的一组标准正交基；(2) 求 \(W^{\perp}\) 的一组标准正交基；(3) 求点 \(b=(2,1,0,1)^{T}\) 到 \(W\) 的距离。`,
  a: String.raw`(1) \(\dfrac{1}{\sqrt3}(1,1,1,0)^{T},\ \dfrac{1}{\sqrt{15}}(-2,1,1,3)^{T}\)；(2) \(\dfrac{1}{\sqrt2}(0,-1,1,0)^{T},\ \dfrac{1}{\sqrt{10}}(2,-1,-1,2)^{T}\)；(3) \(\sqrt3\)。`,
  sol: String.raw`第一步：记 \(a_1=(1,1,1,0)^{T},\ a_2=(0,1,1,1)^{T}\)，则 \(a_1\cdot a_2=2,\ \|a_1\|^{2}=3\)，故
\[
b_2=a_2-\frac23a_1=\left(-\frac23,\frac13,\frac13,1\right)^{T},\qquad \|b_2\|^{2}=\frac53.
\]
于是 \(e_1=\dfrac1{\sqrt3}(1,1,1,0)^{T}\)，\(e_2=\dfrac1{\sqrt{15}}(-2,1,1,3)^{T}\)。
第二步：设 \(x\in W^{\perp}\)，则 \(x_1+x_2+x_3=0,\ x_2+x_3+x_4=0\)。令 \(x_3=s,\ x_4=t\)，得 \(x_2=-s-t,\ x_1=t\)，即
\[
x=s(0,-1,1,0)^{T}+t(1,-1,0,1)^{T}.
\]
第三步：对 \(c_1=(0,-1,1,0)^{T},\ c_2=(1,-1,0,1)^{T}\) 正交化：\(c_1\cdot c_2=1,\ \|c_1\|^{2}=2\)，故
\[
c_2-\frac12c_1=\left(1,-\frac12,-\frac12,1\right)^{T},\qquad \left\|c_2-\frac12c_1\right\|^{2}=\frac52.
\]
单位化得 \(f_1=\dfrac1{\sqrt2}(0,-1,1,0)^{T}\)，\(f_2=\dfrac1{\sqrt{10}}(2,-1,-1,2)^{T}\)。
第四步：\(b\cdot e_1=\sqrt3,\ b\cdot e_2=0\)，故 \(b\) 在 \(W\) 上的投影为 \(p=\sqrt3 e_1=(1,1,1,0)^{T}\)。
第五步：\(b-p=(1,0,-1,1)^{T}\)，故距离 \(\|b-p\|=\sqrt3\)。` },

{ id:'LA09-23', ch:9, type:'证明', diff:5, tags:'正交投影矩阵 幂等 自伴 迹',
  q: String.raw`设 \(P\) 为 \(n\) 阶实矩阵。证明：\(P\) 是 \(\mathbb{R}^{n}\) 到某子空间的正交投影矩阵，当且仅当 \(P^{2}=P\) 且 \(P^{T}=P\)。此时若 \(U=\operatorname{Col}P\)，则 \(U\) 就是投影的目标子空间，\(\operatorname{rank}P=\operatorname{tr}P\)，且 \(I-P\) 是到 \(U^{\perp}\) 的正交投影。`,
  a: String.raw`充要条件成立；特征值只能是 \(0,1\)，且 \(\operatorname{rank}P=\operatorname{tr}P\)。`,
  sol: String.raw`第一步（必要性）：设 \(P\) 是到子空间 \(U\) 的正交投影。对任意 \(x\)，\(Px\in U\) 且 \(x-Px\in U^{\perp}\)，故 \(P(Px)=Px\)，即 \(P^{2}=P\)。
第二步：仍设 \(P\) 为到 \(U\) 的正交投影。对任意 \(x,y\)，由 \(Px\in U,\ y-Py\in U^{\perp}\) 得 \((Px)\cdot(y-Py)=0\)；同理 \((x-Px)\cdot Py=0\)。于是
\[
(Px)\cdot y=(Px)\cdot Py=x\cdot(Py),
\]
即 \(P^{T}=P\)。
第三步（充分性）：设 \(P^{2}=P,\ P^{T}=P\)，令 \(U=\operatorname{Col}P\)。若 \(x=Pz\in U\)，则 \(Px=P^{2}z=Pz=x\)，即 \(P\) 在 \(U\) 上为恒等映射。
第四步：对任意 \(y\) 与任意 \(x=Pz\in U\)，有
\[
x\cdot(y-Py)=z^{T}P^{T}y-z^{T}P^{T}Py=z^{T}Py-z^{T}P^{2}y=0,
\]
故 \(y-Py\in U^{\perp}\)。于是 \(Py\) 正是 \(y\) 在 \(U\) 上的正交投影。
第五步：由 \(Px=\lambda x\) 得 \(\lambda^{2}=\lambda\)，故特征值只能是 \(0\) 或 \(1\)；因此 \(\operatorname{tr}P\) 等于特征值 \(1\) 的个数，即 \(\operatorname{rank}P\)。又 \(I-P\) 满足 \((I-P)^{2}=I-P\) 且 \((I-P)^{T}=I-P\)，其像为 \(U^{\perp}\)，故它是到 \(U^{\perp}\) 的正交投影。` },

{ id:'LA09-24', ch:9, type:'计算', diff:5, tags:'正交投影 正规方程 距离',
  q: String.raw`设 \(W=\operatorname{span}\{(1,1,0,0)^{T},(1,0,1,0)^{T},(1,0,0,1)^{T}\}\subset\mathbb{R}^{4}\)，\(b=(1,2,3,4)^{T}\)。求 \(b\) 在 \(W\) 上的正交投影 \(p\) 及 \(\|b-p\|\)。`,
  a: String.raw`\(p=(3,0,1,2)^{T},\qquad \|b-p\|=4\)。`,
  sol: String.raw`第一步：记 \(A=(a_1,a_2,a_3)\)，则 \(G=A^{T}A=\begin{pmatrix}2&1&1\\1&2&1\\1&1&2\end{pmatrix}\)，且
\[
G^{-1}=\frac14\begin{pmatrix}3&-1&-1\\-1&3&-1\\-1&-1&3\end{pmatrix}.
\]
第二步：\(A^{T}b=(3,4,5)^{T}\)，故投影坐标 \(c=G^{-1}A^{T}b=\dfrac14(0,4,8)^{T}=(0,1,2)^{T}\)。
第三步：\(p=Ac=a_2+2a_3=(3,0,1,2)^{T}\)。
第四步：\(b-p=(-2,2,2,2)^{T}\)，故 \(\|b-p\|=\sqrt{4+4+4+4}=4\)。
第五步：注意 \(W\) 的三维体积元的平方为 \(\det G=4\)，这也从侧面说明 \(b\) 到 \(W\) 的距离不超过 \(\|b\|\)。` },

{ id:'LA09-25', ch:9, type:'计算', diff:5, tags:'最小二乘 二次拟合 正规方程',
  q: String.raw`用最小二乘法求二次多项式 \(y=a+bx+cx^{2}\)，使它与点 \((0,1),(1,0),(2,2),(3,5)\) 的偏差平方和最小。`,
  a: String.raw`\(y=x^{2}-\dfrac85x+\dfrac{9}{10}\)，最小偏差平方和为 \(\dfrac15\)。`,
  sol: String.raw`第一步：以 \(1,x,x^{2}\) 为列构造设计矩阵，则
\[
A^{T}A=\begin{pmatrix}4&6&14\\6&14&36\\14&36&98\end{pmatrix},\qquad A^{T}y=\begin{pmatrix}8\\19\\53\end{pmatrix}.
\]
第二步：正规方程为
\[
4a+6b+14c=8,\qquad 6a+14b+36c=19,\qquad 14a+36b+98c=53.
\]
第三步：由第一式得 \(2a+3b+7c=4\)；再消元得 \(b+3c=\dfrac75,\quad 15b+49c=25\)。
第四步：解得 \(c=1,\ b=-\dfrac85,\ a=\dfrac9{10}\)。
第五步：残差为 \((0.1,-0.3,0.3,-0.1)^{T}\)，偏差平方和为 \(0.01+0.09+0.09+0.01=\dfrac15\)。` },

{ id:'LA09-26', ch:9, type:'证明', diff:5, tags:'正交矩阵 行列式 特征值 -1',
  q: String.raw`设 \(A\) 为 \(n\) 阶正交矩阵。证明：(1) \(\det A=\pm1\)；(2) \(A\) 的每个特征值的模为 \(1\)；(3) 若 \(\det A=-1\)，则 \(-1\) 必是 \(A\) 的特征值。`,
  a: String.raw`三条结论都成立。`,
  sol: String.raw`第一步：由 \(A^{T}A=I\) 得 \((\det A)^{2}=\det(A^{T}A)=1\)，故 \(\det A=\pm1\)。
第二步：设 \(Ax=\lambda x\)（\(x\in\mathbb{C}^{n},\ x\neq0\)）。取共轭转置得 \(x^{*}A^{T}=\overline{\lambda}x^{*}\)，两边右乘 \(Ax\)：
\[
x^{*}A^{T}Ax=\overline{\lambda}x^{*}Ax=\overline{\lambda}\lambda\,x^{*}x=|\lambda|^{2}x^{*}x.
\]
第三步：左边 \(x^{*}A^{T}Ax=x^{*}x\)，而 \(x^{*}x>0\)，故 \(|\lambda|^{2}=1\)，即每个特征值的模为 \(1\)。
第四步：若 \(\det A=-1\)，注意 \(A^{T}+I=A^{T}(I+A)\)，于是
\[
\det(A+I)=\det A\cdot\det(A^{T}+I)=-\det(I+A),
\]
故 \(\det(A+I)=0\)，即 \(-1\) 是 \(A\) 的特征值。` },

{ id:'LA09-27', ch:9, type:'计算', diff:4, tags:'正交矩阵 二阶 旋转 反射',
  q: String.raw`求所有以 \(\left(\dfrac35,\dfrac45\right)\) 为第一行的二阶正交矩阵。`,
  a: String.raw`\(\begin{pmatrix}\frac35&\frac45\\[2pt]-\frac45&\frac35\end{pmatrix}\) 与 \(\begin{pmatrix}\frac35&\frac45\\[2pt]\frac45&-\frac35\end{pmatrix}\)。`,
  sol: String.raw`第一步：设第二行为 \((c,d)\)。正交条件给出 \(3c+4d=0\) 且 \(c^{2}+d^{2}=1\)。
第二步：由 \(3c+4d=0\) 得 \((c,d)=t\left(-\dfrac45,\dfrac35\right)\)，\(t\in\mathbb{R}\)；再由单位长得 \(|t|=1\)。
第三步：故只有两个矩阵：\(t=1\) 时行列式为 \(1\)，\(t=-1\) 时行列式为 \(-1\)。
第四步：它们分别是旋转角为 \(\arccos\frac35\) 的旋转与相应的反射。` },

{ id:'LA09-28', ch:9, type:'证明', diff:5, tags:'正交矩阵 分类 旋转 反射',
  q: String.raw`证明：二阶正交矩阵必为 \(\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}\) 或 \(\begin{pmatrix}\cos\theta&\sin\theta\\\sin\theta&-\cos\theta\end{pmatrix}\) 之一，前者行列式为 \(1\)（旋转），后者行列式为 \(-1\)（反射）。`,
  a: String.raw`两类标准形穷尽了全部二阶正交矩阵。`,
  sol: String.raw`第一步：设 \(Q=\begin{pmatrix}a&b\\c&d\end{pmatrix}\) 正交，则第一行是单位向量，可写 \((a,b)=(\cos\theta,\sin\theta)\)。
第二步：第二行与第一行正交且为单位向量，故 \((c,d)=\pm(-\sin\theta,\cos\theta)\)。
第三步：取 \(+\) 号得 \(Q=\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}\)，\(\det Q=\cos^{2}\theta+\sin^{2}\theta=1\)，它把每个向量旋转 \(\theta\)。
第四步：取 \(-\) 号得 \(Q=\begin{pmatrix}\cos\theta&\sin\theta\\\sin\theta&-\cos\theta\end{pmatrix}\)，\(\det Q=-1\)，它关于直线 \(\sin\theta\cdot x-(\cos\theta-1)y=0\) 作镜面反射。` },

{ id:'LA09-29', ch:9, type:'证明', diff:5, tags:'正交矩阵 三阶 旋转轴 迹',
  q: String.raw`设 \(Q\) 为三阶正交矩阵且 \(\det Q=1\)。证明：(1) \(1\) 是 \(Q\) 的特征值；(2) 若 \(Q\neq I\)，则特征值 \(1\) 的几何重数为 \(1\)，其对应特征向量给出旋转轴；(3) 若旋转角为 \(\theta\)，则 \(\operatorname{tr}Q=1+2\cos\theta\)。`,
  a: String.raw`三阶行列式为 \(1\) 的正交矩阵是绕某轴的旋转，且 \(\operatorname{tr}Q=1+2\cos\theta\)。`,
  sol: String.raw`第一步：计算 \(\det(Q-I)\)。由 \(Q-I=-Q(I-Q^{T})\) 得
\[
\det(Q-I)=\det Q\cdot\det(I-Q^{T})=\det(I-Q).
\]
又 \(I-Q^{T}=(I-Q)^{T}\)，故 \(\det(I-Q^{T})=\det(I-Q)=(-1)^{3}\det(Q-I)=-\det(Q-I)\)，于是 \(\det(Q-I)=0\)，\(1\) 是特征值。
第二步：设不动点集 \(E=\{x:Qx=x\}\)。若 \(\dim E\ge2\)，则 \(E^{\perp}\) 是一维不变子空间，\(Q\) 在其上为 \(\pm1\)；由 \(\det Q=1\) 及 \(Q\) 在 \(E\) 上为恒等，只能取 \(+1\)，从而 \(Q=I\)，与 \(Q\neq I\) 矛盾。故 \(\dim E=1\)，即旋转轴。
第三步：\(E^{\perp}\) 是二维不变子空间，\(Q|_{E^{\perp}}\) 是行列式为 \(1\) 的二阶正交变换，由二阶分类知它是旋转 \(\theta\)。
第四步：在 \(E^{\perp}\) 内取标准正交基，\(Q\) 的特征值为 \(e^{i\theta},e^{-i\theta}\)；连同轴上的特征值 \(1\)，得 \(\operatorname{tr}Q=1+e^{i\theta}+e^{-i\theta}=1+2\cos\theta\)。` },

{ id:'LA09-30', ch:9, type:'计算', diff:5, tags:'正交矩阵 旋转 旋转轴 周期',
  q: String.raw`设 \(R=\begin{pmatrix}0&0&1\\1&0&0\\0&1&0\end{pmatrix}\)。(1) 验证 \(R\) 是正交矩阵且 \(\det R=1\)；(2) 求 \(R\) 的旋转轴与旋转角；(3) 求 \(R^{2024}\)。`,
  a: String.raw`(2) 转轴为 \(\dfrac{1}{\sqrt3}(1,1,1)^{T}\)，旋转角为 \(\dfrac{2\pi}{3}\)；(3) \(R^{2024}=\begin{pmatrix}0&1&0\\0&0&1\\1&0&0\end{pmatrix}\)。`,
  sol: String.raw`第一步：直接计算得 \(RR^{T}=I\)，且 \(R\) 对应循环置换 \((1\,2\,3)\)，是偶置换，故 \(\det R=1\)。
第二步：\(R(1,1,1)^{T}=(1,1,1)^{T}\)，故转轴为 \(\dfrac1{\sqrt3}(1,1,1)^{T}\)。
第三步：\(\operatorname{tr}R=0\)，由 \(\operatorname{tr}R=1+2\cos\theta\) 得 \(\cos\theta=-\dfrac12\)，故 \(\theta=\dfrac{2\pi}{3}\)。
第四步：由 \(R^{3}=I\) 及 \(2024=3\times674+2\)，得 \(R^{2024}=R^{2}=\begin{pmatrix}0&1&0\\0&0&1\\1&0&0\end{pmatrix}\)。` },

{ id:'LA09-31', ch:9, type:'计算', diff:5, tags:'QR分解 施密特正交化 上三角',
  q: String.raw`求 \(A=\begin{pmatrix}1&2&2\\2&1&2\\2&2&1\end{pmatrix}\) 的 \(QR\) 分解，其中 \(Q\) 为正交矩阵，\(R\) 为主对角元为正的上三角矩阵。`,
  a: String.raw`\(Q=\begin{pmatrix}\frac13&\frac{10}{\sqrt{153}}&\frac{2}{\sqrt{17}}\\[3pt]\frac23&-\frac7{\sqrt{153}}&\frac2{\sqrt{17}}\\[3pt]\frac23&\frac2{\sqrt{153}}&-\frac3{\sqrt{17}}\end{pmatrix},\qquad R=\begin{pmatrix}3&\frac83&\frac83\\[3pt]0&\frac{\sqrt{17}}3&\frac{8}{3\sqrt{17}}\\[3pt]0&0&\frac5{\sqrt{17}}\end{pmatrix}\)。`,
  sol: String.raw`第一步：记三列为 \(a_1,a_2,a_3\)。\(\|a_1\|=3\)，故 \(q_1=\dfrac13(1,2,2)^{T}\)。
第二步：\(r_{12}=q_1^{T}a_2=\dfrac83\)，于是
\[
b_2=a_2-\frac83q_1=\left(\frac{10}9,-\frac79,\frac29\right)^{T},\qquad \|b_2\|=\frac{\sqrt{17}}3,
\]
故 \(q_2=\dfrac1{\sqrt{153}}(10,-7,2)^{T}\)，\(r_{22}=\dfrac{\sqrt{17}}3\)。
第三步：\(r_{13}=q_1^{T}a_3=\dfrac83\)，\(r_{23}=q_2^{T}a_3=\dfrac8{3\sqrt{17}}\)。
第四步：\(b_3=a_3-r_{13}q_1-r_{23}q_2=\dfrac5{17}(2,2,-3)^{T}\)，\(\|b_3\|=\dfrac5{\sqrt{17}}\)，故 \(q_3=\dfrac1{\sqrt{17}}(2,2,-3)^{T}\)，\(r_{33}=\dfrac5{\sqrt{17}}\)。
第五步：令 \(Q=(q_1,q_2,q_3)\)，\(R=(r_{ij})\)，则 \(A=QR\)，且 \(R\) 的主对角元 \(3,\dfrac{\sqrt{17}}3,\dfrac5{\sqrt{17}}\) 均为正。` },

{ id:'LA09-32', ch:9, type:'证明', diff:5, tags:'QR分解 存在性 唯一性 列满秩',
  q: String.raw`设 \(A\) 为 \(m\times n\) 实矩阵且 \(\operatorname{rank}A=n\)。证明：(1) 存在分解 \(A=QR\)，其中 \(Q\) 为 \(m\times n\) 列正交矩阵（\(Q^{T}Q=I_n\)），\(R\) 为 \(n\) 阶主对角元为正的上三角矩阵；(2) 当 \(m=n\) 且 \(A\) 可逆时，这样的分解唯一。`,
  a: String.raw`分解存在；方阵可逆时分解唯一。`,
  sol: String.raw`第一步：设 \(A=(a_1,\dots,a_n)\) 列满秩。对列向量作施密特正交化，得标准正交向量 \(q_1,\dots,q_n\)，且
\[
a_j=\sum_{i=1}^{j}r_{ij}q_i,\qquad r_{ij}=q_i^{T}a_j\ (i<j),\quad r_{jj}=\|b_j\|>0.
\]
第二步：令 \(Q=(q_1,\dots,q_n)\)，\(R=(r_{ij})\)，则 \(R\) 为主对角元为正的上三角矩阵，且 \(A=QR\)，存在性得证。
第三步：唯一性。设 \(A=Q_1R_1=Q_2R_2\)，其中 \(Q_1,Q_2\) 正交，\(R_1,R_2\) 主对角元为正的上三角。则
\[
Q_2^{T}Q_1=R_2R_1^{-1}.
\]
第四步：左边是正交矩阵；右边是主对角元为正的上三角矩阵。上三角的正交矩阵必为对角矩阵且对角元为 \(\pm1\)，而其对角元为正，故它只能是 \(I\)。
第五步：于是 \(Q_1=Q_2\)，进而 \(R_1=R_2\)，唯一性得证。` },

{ id:'LA09-33', ch:9, type:'计算', diff:5, tags:'Householder变换 反射 正交矩阵',
  q: String.raw`设 \(x=(1,1,1,1)^{T}\)。构造 Householder 矩阵 \(H=I-2\dfrac{vv^{T}}{v^{T}v}\)，使 \(Hx=2e_1\)，写出 \(H\)，并求 \(\det H\)。`,
  a: String.raw`\(H=\dfrac12\begin{pmatrix}1&1&1&1\\1&1&-1&-1\\1&-1&1&-1\\1&-1&-1&1\end{pmatrix},\qquad \det H=-1\)。`,
  sol: String.raw`第一步：\(\|x\|=2\)，取 \(v=x-2e_1=(-1,1,1,1)^{T}\)，则 \(v^{T}v=4\)。
第二步：\(H=I-\dfrac12vv^{T}\)，计算得
\[
H=\frac12\begin{pmatrix}1&1&1&1\\1&1&-1&-1\\1&-1&1&-1\\1&-1&-1&1\end{pmatrix}.
\]
第三步：\(v^{T}x=2\)，故 \(Hx=x-\dfrac12v\cdot 2=x-v=2e_1\)。
第四步：\(H\) 是 Householder 矩阵，沿 \(v\) 方向特征值为 \(-1\)，在 \(v^{\perp}\) 上特征值为 \(1\)，故特征值为 \(-1,1,1,1\)，\(\det H=-1\)。` },

{ id:'LA09-34', ch:9, type:'证明', diff:5, tags:'Householder变换 特征值 行列式',
  q: String.raw`设 \(u\in\mathbb{R}^{n}\)，\(\|u\|=1\)，\(H=I-2uu^{T}\)。证明：(1) \(H^{T}=H\)；(2) \(H^{T}H=I\)；(3) \(Hu=-u\)，且当 \(v\perp u\) 时 \(Hv=v\)；(4) \(H\) 的特征值为 \(-1\)（一重）与 \(1\)（\(n-1\) 重），\(\det H=-1\)。`,
  a: String.raw`\(H\) 是关于超平面 \(u^{\perp}\) 的镜面反射。`,
  sol: String.raw`第一步：\(H^{T}=I-2(uu^{T})^{T}=I-2uu^{T}=H\)。
第二步：\(H^{T}H=H^{2}=I-4uu^{T}+4u(u^{T}u)u^{T}=I-4uu^{T}+4uu^{T}=I\)，故 \(H\) 正交。
第三步：\(Hu=u-2u(u^{T}u)=-u\)；若 \(v\perp u\)，则 \(Hv=v-2u(u^{T}v)=v\)。
第四步：取 \(u\) 以及 \(u^{\perp}\) 的一组标准正交基，它们都是 \(H\) 的特征向量，对应特征值 \(-1\) 与 \(1\)，故特征值为 \(-1\)（一重）、\(1\)（\(n-1\) 重），\(\det H=(-1)\cdot1^{n-1}=-1\)。` },

{ id:'LA09-35', ch:9, type:'证明', diff:5, tags:'列空间 左零空间 正交补 直和',
  q: String.raw`设 \(A\) 为 \(m\times n\) 实矩阵。证明 \((\operatorname{Col}A)^{\perp}=\operatorname{Nul}A^{T}\)，并由此证明 \(\mathbb{R}^{m}=\operatorname{Col}A\oplus\operatorname{Nul}A^{T}\)。`,
  a: String.raw`两个结论都成立。`,
  sol: String.raw`第一步：\(y\in(\operatorname{Col}A)^{\perp}\) 当且仅当 \(y^{T}Ax=0\) 对一切 \(x\in\mathbb{R}^{n}\) 成立。
第二步：注意 \(y^{T}Ax=(A^{T}y)^{T}x\)，它对一切 \(x\) 为零当且仅当 \(A^{T}y=0\)，即 \(y\in\operatorname{Nul}A^{T}\)。故 \((\operatorname{Col}A)^{\perp}=\operatorname{Nul}A^{T}\)。
第三步：对任意子空间 \(U\) 有 \(\mathbb{R}^{m}=U\oplus U^{\perp}\)（把 \(U\) 的标准正交基扩充为全空间的标准正交基即得）。
第四步：取 \(U=\operatorname{Col}A\)，便得 \(\mathbb{R}^{m}=\operatorname{Col}A\oplus\operatorname{Nul}A^{T}\)。` },

{ id:'LA09-36', ch:9, type:'证明', diff:4, tags:'行空间 零空间 秩 转置',
  q: String.raw`设 \(A\) 为 \(m\times n\) 实矩阵。证明 \((\operatorname{Row}A)^{\perp}=\operatorname{Nul}A\)，并证明 \(\operatorname{rank}A=\operatorname{rank}A^{T}\)。`,
  a: String.raw`两个结论都成立。`,
  sol: String.raw`第一步：注意 \(\operatorname{Row}A=\operatorname{Col}A^{T}\)，对矩阵 \(A^{T}\) 用上一题的结论得 \((\operatorname{Col}A^{T})^{\perp}=\operatorname{Nul}A\)，即 \((\operatorname{Row}A)^{\perp}=\operatorname{Nul}A\)。
第二步：于是 \(\dim\operatorname{Row}A=n-\dim\operatorname{Nul}A\)。
第三步：由 \(A\) 的秩-零化度定理，\(\dim\operatorname{Col}A=n-\dim\operatorname{Nul}A\)。
第四步：两式右边相同，故 \(\operatorname{rank}A=\dim\operatorname{Col}A=\dim\operatorname{Row}A=\operatorname{rank}A^{T}\)。` },

{ id:'LA09-37', ch:9, type:'计算', diff:5, tags:'正交投影矩阵 列空间 幂等',
  q: String.raw`设 \(A=\begin{pmatrix}1&0\\1&1\\0&1\end{pmatrix}\)。求到 \(\operatorname{Col}A\) 的正交投影矩阵 \(P\)，并验证 \(P^{2}=P,\ P^{T}=P,\ \operatorname{rank}P=2\)。`,
  a: String.raw`\(P=\dfrac13\begin{pmatrix}2&1&-1\\1&2&1\\-1&1&2\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(G=A^{T}A=\begin{pmatrix}2&1\\1&2\end{pmatrix}\)，\(G^{-1}=\dfrac13\begin{pmatrix}2&-1\\-1&2\end{pmatrix}\)。
第二步：由投影公式
\[
P=A(A^{T}A)^{-1}A^{T}=\frac13\begin{pmatrix}2&1&-1\\1&2&1\\-1&1&2\end{pmatrix}.
\]
第三步：直接计算得 \(P^{2}=P\)，且 \(P^{T}=P\)，故 \(P\) 是正交投影矩阵。
第四步：\(PA=A\)，故 \(\operatorname{Col}P=\operatorname{Col}A\)；又 \(\operatorname{tr}P=2\)，特征值为 \(1,1,0\)，故 \(\operatorname{rank}P=2=\operatorname{rank}A\)。` },

{ id:'LA09-38', ch:9, type:'计算', diff:5, tags:'奇异值分解 奇异值 正交矩阵',
  q: String.raw`求 \(A=\begin{pmatrix}1&1&0\\0&1&1\end{pmatrix}\) 的奇异值分解 \(A=U\Sigma V^{T}\)，其中 \(U,V\) 为正交矩阵。`,
  a: String.raw`\(U=\dfrac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix},\ \Sigma=\begin{pmatrix}\sqrt3&0&0\\0&1&0\end{pmatrix},\ V=\begin{pmatrix}\frac1{\sqrt6}&\frac1{\sqrt2}&\frac1{\sqrt3}\\[3pt]\frac2{\sqrt6}&0&-\frac1{\sqrt3}\\[3pt]\frac1{\sqrt6}&-\frac1{\sqrt2}&\frac1{\sqrt3}\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(A^{T}A=\begin{pmatrix}1&1&0\\1&2&1\\0&1&1\end{pmatrix}\)，其特征多项式为 \(\lambda(\lambda-1)(\lambda-3)\)，特征值为 \(3,1,0\)。
第二步：对应标准正交特征向量为
\[
v_1=\frac1{\sqrt6}(1,2,1)^{T},\quad v_2=\frac1{\sqrt2}(1,0,-1)^{T},\quad v_3=\frac1{\sqrt3}(1,-1,1)^{T}.
\]
第三步：奇异值 \(\sigma_1=\sqrt3,\ \sigma_2=1\)，且
\[
u_1=\frac{Av_1}{\sqrt3}=\frac1{\sqrt2}(1,1)^{T},\qquad u_2=Av_2=\frac1{\sqrt2}(1,-1)^{T}.
\]
第四步：令 \(U=(u_1,u_2)\)，\(V=(v_1,v_2,v_3)\)，\(\Sigma=\begin{pmatrix}\sqrt3&0&0\\0&1&0\end{pmatrix}\)，则 \(A=U\Sigma V^{T}\)。` },

{ id:'LA09-39', ch:9, type:'证明', diff:5, tags:'奇异值分解 秩 像空间 核空间',
  q: String.raw`设 \(A=U\Sigma V^{T}\) 是 \(m\times n\) 矩阵 \(A\) 的奇异值分解，奇异值 \(\sigma_1\ge\cdots\ge\sigma_r>0\)。证明 \(\operatorname{rank}A=r\)，\(\operatorname{Im}A=\operatorname{span}\{u_1,\dots,u_r\}\)，\(\operatorname{Ker}A=\operatorname{span}\{v_{r+1},\dots,v_n\}\)。`,
  a: String.raw`三个结论都成立。`,
  sol: String.raw`第一步：由 \(A=U\Sigma V^{T}\)，对任意 \(x\) 有
\[
Ax=\sum_{i=1}^{r}\sigma_i(v_i^{T}x)u_i.
\]
第二步：故 \(\operatorname{Im}A\subseteq\operatorname{span}\{u_1,\dots,u_r\}\)；又 \(Av_i=\sigma_iu_i\)，且 \(\sigma_i>0\)，故 \(u_i\in\operatorname{Im}A\)，从而 \(\operatorname{Im}A=\operatorname{span}\{u_1,\dots,u_r\}\)。
第三步：\(u_1,\dots,u_r\) 线性无关，故 \(\operatorname{rank}A=\dim\operatorname{Im}A=r\)。
第四步：\(Ax=0\) 当且仅当 \(v_i^{T}x=0\ (i=1,\dots,r)\)，即 \(x\in\operatorname{span}\{v_{r+1},\dots,v_n\}\)。` },

{ id:'LA09-40', ch:9, type:'证明', diff:4, tags:'奇异值 转置 数乘 正交不变性',
  q: String.raw`设 \(A\) 为 \(m\times n\) 实矩阵，\(Q\) 为 \(m\) 阶正交矩阵，\(c\neq0\)。证明：(1) \(A\) 与 \(A^{T}\) 的奇异值相同；(2) \(cA\) 的奇异值为 \(|c|\sigma_i(A)\)；(3) \(QA\) 的奇异值与 \(A\) 相同。`,
  a: String.raw`三个结论都成立。`,
  sol: String.raw`第一步：若 \(A=U\Sigma V^{T}\)，则 \(A^{T}=V\Sigma^{T}U^{T}\) 是 \(A^{T}\) 的奇异值分解，奇异值仍为 \(\sigma_i\)。
第二步：\((cA)^{T}(cA)=c^{2}A^{T}A\)，其特征值等于 \(A^{T}A\) 的特征值乘以 \(c^{2}\)，故奇异值为 \(|c|\sigma_i(A)\)。
第三步：\((QA)^{T}(QA)=A^{T}Q^{T}QA=A^{T}A\)，特征值不变，故 \(QA\) 与 \(A\) 的奇异值相同。` },

{ id:'LA09-41', ch:9, type:'证明', diff:5, tags:'奇异值 扰动 极小极大 稳定性',
  q: String.raw`设 \(A,E\) 为 \(m\times n\) 实矩阵，\(\sigma_i(\cdot)\) 表示第 \(i\) 个奇异值（降序）。证明对每个 \(i\)，\(|\sigma_i(A+E)-\sigma_i(A)|\le\sigma_1(E)\)。`,
  a: String.raw`奇异值对扰动是 \(1\)-Lipschitz 的。`,
  sol: String.raw`第一步：先证明变分刻画
\[
\sigma_i(A)=\min_{\dim S=n-i+1}\ \max_{x\in S,\ \|x\|=1}\|Ax\|.
\]
第二步：取 \(S_0=\operatorname{span}\{v_i,\dots,v_n\}\)，由奇异值分解得 \(\max_{x\in S_0}\|Ax\|=\sigma_i\)；反之任一 \(n-i+1\) 维子空间 \(S\) 与 \(\operatorname{span}\{v_1,\dots,v_i\}\) 必有非零交，在其中取单位向量 \(x\)，得 \(\|Ax\|\ge\sigma_i\)。故刻画成立。
第三步：设 \(S_0\) 是使 \(A\) 取到最小值的子空间，则
\[
\sigma_i(A+E)\le\max_{x\in S_0}\|(A+E)x\|\le\sigma_i(A)+\max_{x\in S_0}\|Ex\|\le\sigma_i(A)+\sigma_1(E).
\]
第四步：交换 \(A\) 与 \(A+E\) 得 \(\sigma_i(A)\le\sigma_i(A+E)+\sigma_1(E)\)，两式合并即得 \(|\sigma_i(A+E)-\sigma_i(A)|\le\sigma_1(E)\)。` },

{ id:'LA09-42', ch:9, type:'证明', diff:5, tags:'奇异值 算子范数 最大最小值',
  q: String.raw`设 \(A\) 为 \(m\times n\) 实矩阵。证明 \(\sigma_1(A)=\max\limits_{\|x\|=\|y\|=1}y^{T}Ax=\|A\|_2\)；若 \(A\) 为 \(n\) 阶可逆矩阵，则 \(\sigma_n(A)=\min\limits_{\|x\|=1}\|Ax\|\)。`,
  a: String.raw`两个等式都成立。`,
  sol: String.raw`第一步：设 \(A=U\Sigma V^{T}\)，\(y=\sum a_iu_i\)，\(x=\sum b_jv_j\)，则 \(\|a\|=\|b\|=1\)，且
\[
y^{T}Ax=\sum_{i}\sigma_ia_ib_i.
\]
第二步：由 Cauchy-Schwarz 不等式，
\[
\sum\sigma_ia_ib_i\le\sigma_1\sum|a_ib_i|\le\sigma_1\|a\|\|b\|=\sigma_1,
\]
等号在 \(x=v_1,\ y=u_1\) 处取得。
第三步：另一方面 \(\|A\|_2=\max_{\|x\|=1}\|Ax\|=\max\sum\sigma_i^{2}b_i^{2}=\sigma_1\)，故三者相等。
第四步：对可逆方阵，\(\|Ax\|^{2}=\sum\sigma_i^{2}b_i^{2}\ge\sigma_n^{2}\|b\|^{2}=\sigma_n^{2}\)，等号在 \(x=v_n\) 处取得，故 \(\min_{\|x\|=1}\|Ax\|=\sigma_n\)。` },

{ id:'LA09-43', ch:9, type:'证明', diff:4, tags:'奇异值 乘积 次乘性',
  q: String.raw`设 \(A,B\) 分别为 \(m\times n\) 与 \(n\times p\) 实矩阵。证明 \(\sigma_1(AB)\le\sigma_1(A)\sigma_1(B)\)；若 \(A,B\) 均为 \(n\) 阶可逆矩阵，则 \(\sigma_n(AB)\ge\sigma_n(A)\sigma_n(B)\)。`,
  a: String.raw`两个不等式都成立。`,
  sol: String.raw`第一步：由奇异值的算子范数意义，\(\sigma_1(A)=\max_{\|x\|=1}\|Ax\|\)。
第二步：对任意 \(x\)，
\[
\|ABx\|\le\sigma_1(A)\|Bx\|\le\sigma_1(A)\sigma_1(B)\|x\|,
\]
取上确界得 \(\sigma_1(AB)\le\sigma_1(A)\sigma_1(B)\)。
第三步：若 \(A,B\) 可逆，则对任意 \(x\)，
\[
\|ABx\|\ge\sigma_n(A)\|Bx\|\ge\sigma_n(A)\sigma_n(B)\|x\|.
\]
第四步：取下确界得 \(\sigma_n(AB)\ge\sigma_n(A)\sigma_n(B)\)。` },

{ id:'LA09-44', ch:9, type:'证明', diff:5, tags:'瑞利商 特征值 正交约束',
  q: String.raw`设 \(A\) 为 \(n\) 阶实对称矩阵，特征值 \(\lambda_1\ge\lambda_2\ge\cdots\ge\lambda_n\)，对应标准正交特征向量 \(v_1,\dots,v_n\)。证明 \(\min\limits_{\|x\|=1,\ x\perp v_1}x^{T}Ax=\lambda_2\)，并推广到 \(\min\limits_{\|x\|=1,\ x\perp\operatorname{span}\{v_1,\dots,v_{k-1}\}}x^{T}Ax=\lambda_k\)。`,
  a: String.raw`两个最小值分别等于 \(\lambda_2\) 与 \(\lambda_k\)。`,
  sol: String.raw`第一步：设 \(x=\sum c_iv_i\)，则 \(x^{T}Ax=\sum\lambda_ic_i^{2}\)，\(\|x\|^{2}=\sum c_i^{2}\)。
第二步：约束 \(x\perp v_1\) 即 \(c_1=0\)，于是
\[
x^{T}Ax=\sum_{i\ge2}\lambda_ic_i^{2}\ge\lambda_2\sum_{i\ge2}c_i^{2}=\lambda_2.
\]
第三步：取 \(x=v_2\) 得等号，故最小值为 \(\lambda_2\)。
第四步：一般地，约束 \(x\perp\operatorname{span}\{v_1,\dots,v_{k-1}\}\) 即 \(c_1=\cdots=c_{k-1}=0\)，同理 \(x^{T}Ax\ge\lambda_k\)，等号在 \(x=v_k\) 处取得。` },

{ id:'LA09-45', ch:9, type:'证明', diff:5, tags:'Courant-Fischer 极小极大 特征值',
  q: String.raw`证明 Courant–Fischer 极小极大原理：设 \(A\) 为 \(n\) 阶实对称矩阵，特征值 \(\lambda_1\ge\cdots\ge\lambda_n\)，则
\[
\lambda_k=\max_{\dim S=k}\ \min_{x\in S,\ \|x\|=1}x^{T}Ax
=\min_{\dim T=n-k+1}\ \max_{x\in T,\ \|x\|=1}x^{T}Ax.
\]`,
  a: String.raw`两个等式都成立。`,
  sol: String.raw`第一步：令 \(S_k=\operatorname{span}\{v_1,\dots,v_k\}\)，在 \(S_k\) 上展开系数知 \(\min_{x\in S_k,\|x\|=1}x^{T}Ax=\lambda_k\)。
第二步：对任一 \(k\) 维子空间 \(S\)，\(S\) 与 \(\operatorname{span}\{v_k,\dots,v_n\}\)（维数 \(n-k+1\)）必有非零交。取交中的单位向量 \(x\)，其展开式中 \(c_1=\cdots=c_{k-1}=0\)，故 \(x^{T}Ax\le\lambda_k\)。于是 \(\min_{x\in S}x^{T}Ax\le\lambda_k\)。
第三步：对 \(S\) 取上确界得 \(\max_{\dim S=k}\min_{x\in S}x^{T}Ax=\lambda_k\)。
第四步：对偶地，令 \(T_k=\operatorname{span}\{v_k,\dots,v_n\}\)，则 \(\max_{x\in T_k}x^{T}Ax=\lambda_k\)；任一 \(n-k+1\) 维 \(T\) 与 \(\operatorname{span}\{v_1,\dots,v_k\}\) 有非零交，在其中取单位向量得 \(\max_{x\in T}x^{T}Ax\ge\lambda_k\)。
第五步：取下确界得 \(\min_{\dim T=n-k+1}\max_{x\in T}x^{T}Ax=\lambda_k\)，两个等式合起来即极小极大原理。` },

{ id:'LA09-46', ch:9, type:'计算', diff:4, tags:'瑞利商 特征值 约束最值',
  q: String.raw`设三阶实对称矩阵 \(A\) 的特征值为 \(5,2,-1\)，对应标准正交特征向量为 \(u_1,u_2,u_3\)。求：(1) \(\max x^{T}Ax\)，约束 \(\|x\|=1,\ x\perp u_3\)；(2) \(\max x^{T}Ax\)，约束 \(\|x\|=1,\ x\perp u_1,\ x\perp u_2\)；(3) \(\max x^{T}Ax\)，约束 \(\|x\|=1,\ x\perp u_1\)。`,
  a: String.raw`(1) \(5\)；(2) \(-1\)；(3) \(2\)。`,
  sol: String.raw`第一步：设 \(x=c_1u_1+c_2u_2+c_3u_3\)，则 \(\|x\|^{2}=c_1^{2}+c_2^{2}+c_3^{2}\)，\(x^{T}Ax=5c_1^{2}+2c_2^{2}-c_3^{2}\)。
第二步：(1) 约束 \(x\perp u_3\) 即 \(c_3=0\)，\(c_1^{2}+c_2^{2}=1\)，最大值为 \(5\)（在 \(x=u_1\) 处取得）。
第三步：(2) 约束 \(x\perp u_1,u_2\) 即 \(x=\pm u_3\)，值为 \(-1\)。
第四步：(3) 约束 \(x\perp u_1\) 即 \(c_1=0\)，\(c_2^{2}+c_3^{2}=1\)，最大值为 \(2\)（在 \(x=u_2\) 处取得）。` },

{ id:'LA09-47', ch:9, type:'证明', diff:4, tags:'瑞利商 特征值范围 等号条件',
  q: String.raw`设 \(A\) 为 \(n\) 阶实对称矩阵，\(\lambda_{\min}=\lambda_n\le\cdots\le\lambda_1=\lambda_{\max}\)。证明对任意 \(x\neq0\)，\(\lambda_{\min}\le\dfrac{x^{T}Ax}{x^{T}x}\le\lambda_{\max}\)，并给出两端取等号的充要条件。`,
  a: String.raw`不等式成立；上端取等号当且仅当 \(x\) 是 \(\lambda_{\max}\) 的特征向量，下端取等号当且仅当 \(x\) 是 \(\lambda_{\min}\) 的特征向量。`,
  sol: String.raw`第一步：取标准正交特征向量 \(v_1,\dots,v_n\)，设 \(x=\sum c_iv_i\)，则
\[
\frac{x^{T}Ax}{x^{T}x}=\frac{\sum\lambda_ic_i^{2}}{\sum c_i^{2}},
\]
它是 \(\lambda_1,\dots,\lambda_n\) 的加权平均。
第二步：故 \(\lambda_{\min}\le\dfrac{x^{T}Ax}{x^{T}x}\le\lambda_{\max}\)。
第三步：上端取等号当且仅当所有权重集中在 \(\lambda_{\max}\) 对应的特征向量上，即 \(c_i=0\) 当 \(\lambda_i<\lambda_{\max}\)，也就是 \(x\) 是 \(\lambda_{\max}\) 的特征向量；下端同理。` },

{ id:'LA09-48', ch:9, type:'计算', diff:4, tags:'镜面反射 Householder变换 平面',
  q: String.raw`求关于平面 \(\Pi:x+2y+2z=0\) 的镜面反射矩阵 \(H\)，并求点 \(P(1,1,1)\) 的像点坐标。`,
  a: String.raw`\(H=\dfrac19\begin{pmatrix}7&-4&-4\\-4&1&-8\\-4&-8&1\end{pmatrix}\)，像点为 \(\left(-\dfrac19,-\dfrac{11}9,-\dfrac{11}9\right)^{T}\)。`,
  sol: String.raw`第一步：平面的单位法向量 \(n=\dfrac13(1,2,2)^{T}\)，反射矩阵为 \(H=I-2nn^{T}\)。
第二步：\(nn^{T}=\dfrac19\begin{pmatrix}1&2&2\\2&4&4\\2&4&4\end{pmatrix}\)，故
\[
H=\frac19\begin{pmatrix}7&-4&-4\\-4&1&-8\\-4&-8&1\end{pmatrix}.
\]
第三步：\(H\) 沿 \(n\) 的特征值为 \(-1\)，在平面内的特征值为 \(1\)，故 \(\det H=-1\)。
第四步：\(P(1,1,1)\) 的像为
\[
H(1,1,1)^{T}=(1,1,1)^{T}-\frac{2}{3}\cdot\frac53(1,2,2)^{T}=\left(-\frac19,-\frac{11}9,-\frac{11}9\right)^{T}.
\]` },

{ id:'LA09-49', ch:9, type:'证明', diff:5, tags:'Householder变换 QR分解 上三角化',
  q: String.raw`设 \(a\in\mathbb{R}^{m}\)，\(a\neq0\)，\(\sigma=\operatorname{sign}(a_1)\)（若 \(a_1=0\) 取 \(\sigma=1\)），\(v=a+\sigma\|a\|e_1\)，\(H=I-2\dfrac{vv^{T}}{v^{T}v}\)。证明 \(Ha=-\sigma\|a\|e_1\)，并说明如何用 Householder 变换把任意矩阵化为上三角矩阵，从而得到 \(QR\) 分解。`,
  a: String.raw`\(Ha=-\sigma\|a\|e_1\)；逐列消元即得上三角矩阵与 \(QR\) 分解。`,
  sol: String.raw`第一步：记 \(\alpha=\|a\|\)。由 \(v=a+\sigma\alpha e_1\) 得
\[
v^{T}v=\alpha^{2}+2\sigma\alpha a_1+\alpha^{2}=2\alpha(\alpha+\sigma a_1),\qquad v^{T}a=\alpha^{2}+\sigma\alpha a_1=\alpha(\alpha+\sigma a_1).
\]
第二步：故 \(\dfrac{2v^{T}a}{v^{T}v}=1\)，于是
\[
Ha=a-\frac{2v(v^{T}a)}{v^{T}v}=a-v=-\sigma\alpha e_1.
\]
第三步：对矩阵 \(A\) 的第一列 \(a\) 作上述变换，则 \(HA\) 的第一列除第一个元素外全为零，且 \(H\) 为正交矩阵。
第四步：对 \(HA\) 右下角的 \((m-1)\times(n-1)\) 子矩阵重复同样的操作（用分块对角的正交矩阵），有限步后得到上三角矩阵 \(R\)。
第五步：把所有变换矩阵相乘得正交矩阵 \(Q=H_1H_2\cdots H_k\)，于是 \(A=QR\)。` },

{ id:'LA09-50', ch:9, type:'计算', diff:5, tags:'二次型 正交变换 标准形 谱定理',
  q: String.raw`用正交变换化二次型 \(f(x_1,x_2,x_3)=2x_1^{2}+2x_2^{2}+2x_3^{2}+2x_1x_2+2x_1x_3+2x_2x_3\) 为标准形，并写出所用的正交矩阵。`,
  a: String.raw`\(f=4y_1^{2}+y_2^{2}+y_3^{2}\)，正交矩阵 \(Q=\begin{pmatrix}\frac1{\sqrt3}&\frac1{\sqrt2}&\frac1{\sqrt6}\\[3pt]\frac1{\sqrt3}&-\frac1{\sqrt2}&\frac1{\sqrt6}\\[3pt]\frac1{\sqrt3}&0&-\frac2{\sqrt6}\end{pmatrix}\)。`,
  sol: String.raw`第一步：二次型矩阵为 \(A=I+J=\begin{pmatrix}2&1&1\\1&2&1\\1&1&2\end{pmatrix}\)，其中 \(J\) 为全 \(1\) 矩阵。
第二步：\(A(1,1,1)^{T}=4(1,1,1)^{T}\)；若 \(x_1+x_2+x_3=0\)，则 \(Ax=x\)。故特征值为 \(4,1,1\)。
第三步：取标准正交特征向量
\[
q_1=\frac1{\sqrt3}(1,1,1)^{T},\quad q_2=\frac1{\sqrt2}(1,-1,0)^{T},\quad q_3=\frac1{\sqrt6}(1,1,-2)^{T}.
\]
第四步：令 \(x=Qy\)，\(Q=(q_1,q_2,q_3)\)，则 \(Q^{T}AQ=\operatorname{diag}(4,1,1)\)，故 \(f=4y_1^{2}+y_2^{2}+y_3^{2}\)。` },

{ id:'LA09-51', ch:9, type:'证明', diff:5, tags:'正交投影矩阵 列空间 迹 秩',
  q: String.raw`设 \(A\) 为 \(m\times n\) 实矩阵且 \(\operatorname{rank}A=n\)，\(P=A(A^{T}A)^{-1}A^{T}\)。证明：(1) \(P^{2}=P\)，\(P^{T}=P\)；(2) \(PA=A\)，从而 \(\operatorname{Col}P=\operatorname{Col}A\)；(3) \(\operatorname{rank}P=\operatorname{tr}P=\operatorname{rank}A\)。`,
  a: String.raw`三条结论都成立。`,
  sol: String.raw`第一步：记 \(G=A^{T}A\)。由 \(\operatorname{rank}A=n\) 知 \(G\) 可逆，且 \(G^{T}=G\)。
第二步：\(P^{2}=AG^{-1}A^{T}AG^{-1}A^{T}=AG^{-1}GG^{-1}A^{T}=AG^{-1}A^{T}=P\)。
第三步：\(P^{T}=A(G^{-1})^{T}A^{T}=AG^{-1}A^{T}=P\)，故 \(P\) 是正交投影矩阵。
第四步：\(PA=AG^{-1}A^{T}A=AG^{-1}G=A\)。于是 \(\operatorname{Col}A\subseteq\operatorname{Col}P\)；又显然 \(\operatorname{Col}P\subseteq\operatorname{Col}A\)，故 \(\operatorname{Col}P=\operatorname{Col}A\)。
第五步：由 \(P^{2}=P\) 知特征值只能是 \(0,1\)，故 \(\operatorname{rank}P\) 等于特征值 \(1\) 的个数，即 \(\operatorname{tr}P\)；而 \(\operatorname{rank}P=\dim\operatorname{Col}A=\operatorname{rank}A\)。` },

{ id:'LA09-52', ch:9, type:'证明', diff:5, tags:'最佳逼近 正交性 投影定理',
  q: String.raw`设 \(W\) 是欧氏空间 \(V\) 的子空间，\(b\in V\)，\(p\in W\)。证明：\(p\) 是 \(b\) 在 \(W\) 上的最佳逼近（即 \(\|b-p\|\le\|b-w\|\) 对一切 \(w\in W\) 成立）当且仅当 \(b-p\perp W\)；此时最佳逼近唯一。`,
  a: String.raw`最佳逼近的充要条件是误差向量与子空间正交，且最佳逼近唯一。`,
  sol: String.raw`第一步：对任意 \(w\in W\)，有
\[
\|b-w\|^{2}=\|(b-p)+(p-w)\|^{2}=\|b-p\|^{2}+\|p-w\|^{2}+2(b-p)\cdot(p-w).
\]
第二步：若 \(b-p\perp W\)，则交叉项为零，故 \(\|b-w\|^{2}\ge\|b-p\|^{2}\)，等号仅在 \(w=p\) 时成立，\(p\) 是最佳逼近且唯一。
第三步：反之设 \(p\) 是最佳逼近。对任意 \(w\in W\) 与实数 \(t\)，由最小性得
\[
\|b-p-tw\|^{2}\ge\|b-p\|^{2}.
\]
第四步：展开得 \(-2t(b-p)\cdot w+t^{2}\|w\|^{2}\ge0\) 对一切 \(t\) 成立，令 \(t\to0^{+}\) 与 \(t\to0^{-}\) 得 \((b-p)\cdot w=0\)。
第五步：由 \(w\in W\) 任意，得 \(b-p\perp W\)。若 \(p_1,p_2\) 都是最佳逼近，则 \(p_1-p_2\in W\) 且 \(p_1-p_2\perp W\)，故 \(p_1=p_2\)。` },

{ id:'LA09-53', ch:9, type:'计算', diff:4, tags:'最小二乘 最小范数解 正规方程',
  q: String.raw`设 \(A=\begin{pmatrix}1&2\\2&4\end{pmatrix}\)，\(b=(1,1)^{T}\)。求方程组 \(Ax=b\) 的最小二乘解中范数最小者。`,
  a: String.raw`\(x=\dfrac{3}{25}(1,2)^{T}\)。`,
  sol: String.raw`第一步：\(A^{T}A=\begin{pmatrix}5&10\\10&20\end{pmatrix}\)，\(A^{T}b=(3,6)^{T}\)。
第二步：正规方程 \(A^{T}Ax=A^{T}b\) 即 \(5x_1+10x_2=3\)，等价于 \(x_1+2x_2=\dfrac35\)。
第三步：通解为 \(x=\left(\dfrac35-2t,\ t\right)^{T}\)。
第四步：\(\|x\|^{2}=\left(\dfrac35-2t\right)^{2}+t^{2}\)，由 \(\dfrac{d}{dt}\|x\|^{2}=0\) 得 \(t=\dfrac6{25}\)。
第五步：故最小范数解为 \(x=\left(\dfrac3{25},\dfrac6{25}\right)^{T}=\dfrac3{25}(1,2)^{T}\)。` },

{ id:'LA09-54', ch:9, type:'证明', diff:5, tags:'最小二乘 解集 零空间 唯一性',
  q: String.raw`设 \(A\) 为 \(m\times n\) 实矩阵，\(b\in\mathbb{R}^{m}\)。证明 \(Ax=b\) 的最小二乘解集为 \(x_0+\operatorname{Nul}A\)（\(x_0\) 为任一最小二乘解），并证明最小二乘解唯一当且仅当 \(\operatorname{rank}A=n\)。`,
  a: String.raw`解集是 \(x_0+\operatorname{Nul}A\)；唯一性等价于列满秩。`,
  sol: String.raw`第一步：最小二乘解即正规方程 \(A^{T}Ax=A^{T}b\) 的解。先证该方程相容：\(\operatorname{Col}A^{T}=\operatorname{Col}(A^{T}A)\)，因为两者的正交补都等于 \(\operatorname{Nul}A\)。
第二步：于是 \(A^{T}b\in\operatorname{Col}A^{T}=\operatorname{Col}(A^{T}A)\)，正规方程有解，取一个解 \(x_0\)。
第三步：若 \(x\) 也是最小二乘解，则 \(A^{T}A(x-x_0)=0\)，即 \(x-x_0\in\operatorname{Nul}(A^{T}A)=\operatorname{Nul}A\)；反之 \(x_0+z\ (z\in\operatorname{Nul}A)\) 显然也是解。
第四步：故解集为 \(x_0+\operatorname{Nul}A\)。它只有一个元素当且仅当 \(\operatorname{Nul}A=\{0\}\)，即 \(\operatorname{rank}A=n\)。` },

{ id:'LA09-55', ch:9, type:'证明', diff:5, tags:'正交 Procrustes 奇异值分解 Frobenius范数',
  q: String.raw`设 \(A,B\) 为 \(m\times n\) 实矩阵，\(M=AB^{T}=U\Sigma V^{T}\) 为奇异值分解。证明：在一切 \(n\) 阶正交矩阵 \(Q\) 中，\(\|A-QB\|_{F}\) 的最小值在 \(Q=UV^{T}\) 处取得，最小值为 \(\sqrt{\|A\|_{F}^{2}+\|B\|_{F}^{2}-2\sum\sigma_i(M)}\)。`,
  a: String.raw`最优的 \(Q\) 为 \(UV^{T}\)，最小值为上式。`,
  sol: String.raw`第一步：展开 Frobenius 范数，
\[
\|A-QB\|_{F}^{2}=\|A\|_{F}^{2}+\|B\|_{F}^{2}-2\operatorname{tr}(QBA^{T}).
\]
第二步：注意 \(BA^{T}=(AB^{T})^{T}=M^{T}=V\Sigma U^{T}\)，故只需最大化 \(\operatorname{tr}(QM^{T})=\operatorname{tr}(QV\Sigma U^{T})=\operatorname{tr}(U^{T}QV\Sigma)\)。
第三步：\(U^{T}QV\) 是正交矩阵，其对角元绝对值不超过 \(1\)，故
\[
\operatorname{tr}(U^{T}QV\Sigma)=\sum_i (U^{T}QV)_{ii}\sigma_i\le\sum_i\sigma_i.
\]
第四步：取 \(Q=UV^{T}\) 时 \(U^{T}QV=I\)，等号成立，故最小值在 \(Q=UV^{T}\) 处取得。
第五步：代回第一步即得最小值为 \(\sqrt{\|A\|_{F}^{2}+\|B\|_{F}^{2}-2\sum\sigma_i(M)}\)。` },

{ id:'LA09-56', ch:9, type:'证明', diff:5, tags:'极分解 奇异值分解 正定矩阵',
  q: String.raw`设 \(A\) 为 \(n\) 阶可逆实矩阵。证明存在唯一的正交矩阵 \(Q\) 与正定对称矩阵 \(H\)，使 \(A=QH\)（极分解）。`,
  a: String.raw`分解 \(A=QH\) 存在且唯一。`,
  sol: String.raw`第一步：由奇异值分解 \(A=U\Sigma V^{T}\)，令 \(Q=UV^{T}\)，\(H=V\Sigma V^{T}\)。
第二步：\(Q\) 正交，\(H\) 对称；因 \(A\) 可逆，\(\Sigma\) 的对角元全为正，故 \(H\) 正定。且
\[
QH=UV^{T}V\Sigma V^{T}=U\Sigma V^{T}=A.
\]
第三步：唯一性。若 \(A=QH\)，则 \(A^{T}A=H^{T}Q^{T}QH=H^{2}\)。
第四步：正定矩阵 \(A^{T}A\) 的半正定平方根唯一，故 \(H\) 由 \(A\) 唯一确定；再由 \(Q=AH^{-1}\) 知 \(Q\) 也唯一。` },

{ id:'LA09-57', ch:9, type:'证明', diff:5, tags:'奇异值分解 存在性 谱定理',
  q: String.raw`证明任意 \(m\times n\) 实矩阵 \(A\) 都存在奇异值分解 \(A=U\Sigma V^{T}\)，其中 \(U,V\) 为正交矩阵，\(\Sigma\) 为对角元非负的 \(m\times n\) 矩阵。`,
  a: String.raw`利用 \(A^{T}A\) 的谱分解即可构造 \(U,\Sigma,V\)。`,
  sol: String.raw`第一步：\(A^{T}A\) 是 \(n\) 阶实对称半正定矩阵，由谱定理存在标准正交特征向量 \(v_1,\dots,v_n\)，对应特征值 \(\lambda_1\ge\cdots\ge\lambda_r>0=\lambda_{r+1}=\cdots=\lambda_n\)。
第二步：令 \(\sigma_i=\sqrt{\lambda_i}\ (i\le r)\)，\(u_i=\dfrac{Av_i}{\sigma_i}\)。则
\[
u_i\cdot u_j=\frac{v_i^{T}A^{T}Av_j}{\sigma_i\sigma_j}=\frac{\lambda_j\delta_{ij}}{\sigma_i\sigma_j}=\delta_{ij},
\]
故 \(u_1,\dots,u_r\) 标准正交。
第三步：把 \(u_1,\dots,u_r\) 扩充为 \(\mathbb{R}^{m}\) 的标准正交基 \(u_1,\dots,u_m\)，令 \(U=(u_1,\dots,u_m)\)，\(V=(v_1,\dots,v_n)\)。
第四步：对 \(i\le r\) 有 \(Av_i=\sigma_iu_i\)；对 \(i>r\) 有 \(\|Av_i\|^{2}=v_i^{T}A^{T}Av_i=0\)，故 \(Av_i=0\)。于是 \(A=U\Sigma V^{T}\)。` },

{ id:'LA09-58', ch:9, type:'证明', diff:5, tags:'谱定理 瑞利商 拉格朗日乘数',
  q: String.raw`用瑞利商的极值证明：实对称矩阵的特征值全为实数，且存在由特征向量构成的标准正交基。`,
  a: String.raw`在单位球面上求 \(x^{T}Ax\) 的最大值，用拉格朗日乘数法得到特征向量，再对正交补归纳。`,
  sol: String.raw`第一步：设 \(A\) 为 \(n\) 阶实对称矩阵。函数 \(f(x)=x^{T}Ax\) 在紧集 \(\|x\|=1\) 上连续，必有最大值点 \(x_1\)，且 \(x_1\neq0\)。
第二步：用拉格朗日乘数法，\(\nabla f=2Ax_1\)，约束的梯度为 \(2x_1\)，故存在 \(\lambda_1\) 使 \(Ax_1=\lambda_1x_1\)。
第三步：两边左乘 \(x_1^{T}\) 得 \(\lambda_1=x_1^{T}Ax_1\)，它是实数，故 \(A\) 有实特征值。
第四步：令 \(W=x_1^{\perp}\)。对 \(y\in W\)，\(x_1^{T}(Ay)=(Ax_1)^{T}y=\lambda_1x_1^{T}y=0\)，故 \(W\) 是 \(A\) 的不变子空间，且 \(A|_{W}\) 仍是实对称变换。
第五步：对 \(W\) 重复上述论证并归纳，得到标准正交特征向量基 \(x_1,\dots,x_n\)，对应特征值全为实数。` },

{ id:'LA09-59', ch:9, type:'证明', diff:5, tags:'同时对角化 交换性 实对称矩阵',
  q: String.raw`设 \(A,B\) 为 \(n\) 阶实对称矩阵且 \(AB=BA\)。证明存在同一个正交矩阵 \(Q\)，使 \(Q^{T}AQ\) 与 \(Q^{T}BQ\) 同时为对角矩阵。`,
  a: String.raw`在 \(A\) 的每个特征子空间内对 \(B\) 作正交对角化。`,
  sol: String.raw`第一步：由谱定理，存在正交矩阵 \(Q_0\) 使 \(Q_0^{T}AQ_0=\operatorname{diag}(\lambda_1,\dots,\lambda_n)\)。把相同特征值对应的列排在一起，得到 \(A\) 的特征子空间分解 \(\mathbb{R}^{n}=E_1\oplus\cdots\oplus E_s\)，各 \(E_j\) 两两正交。
第二步：证明每个 \(E_j\) 都是 \(B\) 的不变子空间。若 \(x\in E_j\)，\(Ax=\lambda x\)，则
\[
A(Bx)=B(Ax)=\lambda(Bx),
\]
故 \(Bx\in E_j\)。
第三步：\(B|_{E_j}\) 仍是实对称变换（对 \(x,y\in E_j\)，\((Bx)\cdot y=x\cdot(By)\)），故存在 \(E_j\) 的标准正交基使 \(B|_{E_j}\) 对角化。
第四步：把所有 \(E_j\) 的这样的标准正交基合并，得到 \(\mathbb{R}^{n}\) 的标准正交基，它同时由 \(A,B\) 的特征向量组成。以它们为列作 \(Q\)，则 \(Q^{T}AQ\) 与 \(Q^{T}BQ\) 同时为对角矩阵。` },

{ id:'LA09-60', ch:9, type:'证明', diff:5, tags:'半正定矩阵 平方根 唯一性',
  q: String.raw`设 \(A\) 为 \(n\) 阶半正定实对称矩阵。证明存在唯一的半正定实对称矩阵 \(B\)，使 \(B^{2}=A\)。`,
  a: String.raw`这样的 \(B\) 存在且唯一。`,
  sol: String.raw`第一步（存在性）：由谱定理，\(A=Q\Lambda Q^{T}\)，\(\Lambda=\operatorname{diag}(\lambda_1,\dots,\lambda_n)\)，\(\lambda_i\ge0\)。令
\[
B=Q\operatorname{diag}(\sqrt{\lambda_1},\dots,\sqrt{\lambda_n})Q^{T},
\]
则 \(B\) 半正定、对称，且 \(B^{2}=Q\Lambda Q^{T}=A\)。
第二步（唯一性）：设 \(B\) 半正定对称且 \(B^{2}=A\)。由 \(BA=B^{3}=AB\) 知 \(B\) 与 \(A\) 交换。
第三步：于是 \(B\) 保持 \(A\) 的每个特征子空间 \(E_\lambda\) 不变（若 \(Ax=\lambda x\)，则 \(A(Bx)=B(Ax)=\lambda Bx\)）。
第四步：在 \(E_\lambda\) 上 \(A=\lambda I\)，故 \(B^{2}=\lambda I\)。\(B\) 对称，其特征值为 \(\pm\sqrt{\lambda}\)；又 \(B\) 半正定，只能取 \(+\sqrt{\lambda}\)，故 \(B\) 在 \(E_\lambda\) 上等于 \(\sqrt{\lambda}I\)，由 \(A\) 唯一确定。` },

{ id:'LA09-61', ch:9, type:'证明', diff:5, tags:'奇异值 A^TA AA^T 非零特征值',
  q: String.raw`设 \(A\) 为 \(m\times n\) 实矩阵。证明 \(A^{T}A\) 与 \(AA^{T}\) 的非零特征值（计重数）完全相同。`,
  a: String.raw`两者的非零特征值都是奇异值的平方。`,
  sol: String.raw`第一步：设 \(A=U\Sigma V^{T}\) 为奇异值分解，\(\sigma_1,\dots,\sigma_r>0\)。
第二步：\(A^{T}A=V\Sigma^{T}\Sigma V^{T}\)，故 \(A^{T}A\) 的特征值为 \(\sigma_1^{2},\dots,\sigma_r^{2}\) 与 \(n-r\) 个 \(0\)。
第三步：\(AA^{T}=U\Sigma\Sigma^{T}U^{T}\)，故 \(AA^{T}\) 的特征值为 \(\sigma_1^{2},\dots,\sigma_r^{2}\) 与 \(m-r\) 个 \(0\)。
第四步：两者非零特征值都是 \(\sigma_1^{2},\dots,\sigma_r^{2}\)（计重数），故相同。` },

{ id:'LA09-62', ch:9, type:'计算', diff:4, tags:'Frobenius范数 迹 奇异值',
  q: String.raw`设 \(A=\begin{pmatrix}1&2\\3&4\end{pmatrix}\)。求 \(\operatorname{tr}(A^{T}A)\)、\(\|A\|_{F}\) 及 \(A\) 的全部奇异值的平方和。`,
  a: String.raw`\(\operatorname{tr}(A^{T}A)=30,\quad \|A\|_{F}=\sqrt{30},\quad \sum\sigma_i^{2}=30\)。`,
  sol: String.raw`第一步：\(A^{T}A=\begin{pmatrix}10&14\\14&20\end{pmatrix}\)，故 \(\operatorname{tr}(A^{T}A)=30\)。
第二步：\(\|A\|_{F}^{2}=1^{2}+2^{2}+3^{2}+4^{2}=30\)，故 \(\|A\|_{F}=\sqrt{30}\)。
第三步：奇异值平方和 \(\sum\sigma_i^{2}=\operatorname{tr}(A^{T}A)=30\)。
第四步：验算：\(A^{T}A\) 的特征值为 \(15\pm\sqrt{221}\)，两者之和为 \(30\)，与上述结果一致。` },

{ id:'LA09-63', ch:9, type:'证明', diff:4, tags:'Frobenius范数 正交不变性',
  q: String.raw`设 \(A\) 为 \(m\times n\) 实矩阵，\(Q_1,Q_2\) 分别为 \(m,n\) 阶正交矩阵。证明 \(\|Q_1AQ_2\|_{F}=\|A\|_{F}\)。`,
  a: String.raw`Frobenius 范数在正交变换下不变。`,
  sol: String.raw`第一步：\(\|Q_1AQ_2\|_{F}^{2}=\operatorname{tr}\left((Q_1AQ_2)^{T}Q_1AQ_2\right)\)。
第二步：展开得 \(\operatorname{tr}(Q_2^{T}A^{T}Q_1^{T}Q_1AQ_2)=\operatorname{tr}(Q_2^{T}A^{T}AQ_2)\)。
第三步：利用 \(\operatorname{tr}(XY)=\operatorname{tr}(YX)\)，得 \(\operatorname{tr}(A^{T}AQ_2Q_2^{T})=\operatorname{tr}(A^{T}A)\)。
第四步：故 \(\|Q_1AQ_2\|_{F}^{2}=\|A\|_{F}^{2}\)，两边开方即得结论。` },

{ id:'LA09-64', ch:9, type:'证明', diff:5, tags:'Eckart-Young 最佳秩一逼近 奇异值',
  q: String.raw`设 \(A\) 为 \(m\times n\) 实矩阵，奇异值 \(\sigma_1\ge\sigma_2\ge\cdots\)，\(A_1=\sigma_1u_1v_1^{T}\)。证明：对任意秩不超过 \(1\) 的矩阵 \(B\)，\(\|A-B\|_2\ge\sigma_2\)，且 \(\|A-A_1\|_2=\sigma_2\)，故 \(A_1\) 是 \(A\) 的最佳秩 \(1\) 逼近。`,
  a: String.raw`最佳秩 \(1\) 逼近为 \(\sigma_1u_1v_1^{T}\)，谱范数误差为 \(\sigma_2\)。`,
  sol: String.raw`第一步：由奇异值扰动不等式（Weyl），对每个 \(i\) 有 \(\sigma_i(A)\le\sigma_i(B)+\sigma_1(A-B)\)。
第二步：取 \(i=2\)。因 \(\operatorname{rank}B\le1\)，故 \(\sigma_2(B)=0\)，于是
\[
\sigma_2(A)\le\|A-B\|_2.
\]
第三步：另一方面，由奇异值分解
\[
A-A_1=\sum_{i\ge2}\sigma_iu_iv_i^{T},
\]
其奇异值为 \(\sigma_2,\sigma_3,\dots\)，故 \(\|A-A_1\|_2=\sigma_2\)。
第四步：结合第二步与第三步，对任意秩不超过 \(1\) 的 \(B\) 都有 \(\|A-B\|_2\ge\sigma_2=\|A-A_1\|_2\)，故 \(A_1\) 是最佳秩 \(1\) 逼近。` },

{ id:'LA09-65', ch:9, type:'计算', diff:5, tags:'最佳秩一逼近 谱范数 特征值',
  q: String.raw`求 \(A=\begin{pmatrix}2&1\\1&2\end{pmatrix}\) 的最佳秩 \(1\) 逼近（按谱范数），并求最小误差。`,
  a: String.raw`\(A_1=\dfrac32\begin{pmatrix}1&1\\1&1\end{pmatrix}\)，最小误差为 \(1\)。`,
  sol: String.raw`第一步：\(A\) 实对称，特征值为 \(3,1\)，对应单位特征向量 \(u_1=\dfrac1{\sqrt2}(1,1)^{T}\)，\(u_2=\dfrac1{\sqrt2}(1,-1)^{T}\)。
第二步：奇异值为 \(3,1\)，由 Eckart–Young 定理，最佳秩 \(1\) 逼近为
\[
A_1=\sigma_1u_1u_1^{T}=3\cdot\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix}=\frac32\begin{pmatrix}1&1\\1&1\end{pmatrix}.
\]
第三步：最小误差为 \(\sigma_2=1\)（谱范数），也可直接验证 \(\|A-A_1\|_2=1\)。` },

{ id:'LA09-66', ch:9, type:'证明', diff:5, tags:'条件数 奇异值 正交不变性',
  q: String.raw`设 \(A,B\) 为 \(n\) 阶可逆实矩阵，\(\kappa_2(M)=\sigma_1(M)/\sigma_n(M)\)。证明 \(\kappa_2(AB)\le\kappa_2(A)\kappa_2(B)\)，且对正交矩阵 \(Q\) 有 \(\kappa_2(QA)=\kappa_2(A)\)。`,
  a: String.raw`两个结论都成立。`,
  sol: String.raw`第一步：由奇异值的次乘性，\(\sigma_1(AB)\le\sigma_1(A)\sigma_1(B)\)。
第二步：又 \(\sigma_n(AB)\ge\sigma_n(A)\sigma_n(B)\)（见乘积下界）。
第三步：两式相除得
\[
\kappa_2(AB)=\frac{\sigma_1(AB)}{\sigma_n(AB)}\le\frac{\sigma_1(A)\sigma_1(B)}{\sigma_n(A)\sigma_n(B)}=\kappa_2(A)\kappa_2(B).
\]
第四步：对正交矩阵 \(Q\)，\((QA)^{T}(QA)=A^{T}A\)，故 \(QA\) 与 \(A\) 的奇异值相同，\(\kappa_2(QA)=\kappa_2(A)\)。` },

{ id:'LA09-67', ch:9, type:'计算', diff:4, tags:'条件数 奇异值 特征值',
  q: String.raw`求 \(A=\begin{pmatrix}2&1\\0&1\end{pmatrix}\) 的谱条件数 \(\kappa_2(A)\)。`,
  a: String.raw`\(\kappa_2(A)=\dfrac{3+\sqrt5}{2}\)。`,
  sol: String.raw`第一步：\(A^{T}A=\begin{pmatrix}4&2\\2&2\end{pmatrix}\)，特征多项式为 \((\lambda-3)^{2}-5=\lambda^{2}-6\lambda+4\)。
第二步：特征值为 \(3+\sqrt5\) 与 \(3-\sqrt5\)，故奇异值为 \(\sqrt{3+\sqrt5}\) 与 \(\sqrt{3-\sqrt5}\)。
第三步：于是
\[
\kappa_2(A)=\sqrt{\frac{3+\sqrt5}{3-\sqrt5}}=\sqrt{\frac{(3+\sqrt5)^{2}}{4}}=\frac{3+\sqrt5}{2}.
\]` },

{ id:'LA09-68', ch:9, type:'证明', diff:5, tags:'正交矩阵 特征值 酉对角化 Schur',
  q: String.raw`设 \(Q\) 为 \(n\) 阶正交矩阵。证明：(1) \(Q\) 的实特征值只能是 \(\pm1\)；(2) 属于不同特征值的特征向量相互正交；(3) \(Q\) 在复数域上可酉对角化，即存在酉矩阵 \(U\) 使 \(U^{*}QU\) 为对角矩阵。`,
  a: String.raw`三条结论都成立；正交矩阵是正规矩阵。`,
  sol: String.raw`第一步：(1) 由正交矩阵特征值的模为 \(1\)，实特征值只能是 \(1\) 或 \(-1\)。
第二步：(2) 设 \(Qx=\lambda x,\ Qy=\mu y\)，\(\lambda\neq\mu\)，则
\[
x\cdot y=(Qx)\cdot(Qy)=\lambda\mu\,x\cdot y.
\]
而 \(\lambda,\mu\in\{1,-1\}\) 且不同，故 \(\lambda\mu=-1\)，于是 \(2x\cdot y=0\)，即 \(x\perp y\)。
第三步：(3) \(Q\) 正规：\(Q^{*}Q=QQ^{*}=I\)。由 Schur 定理，存在酉矩阵 \(U\) 使 \(T=U^{*}QU\) 为上三角矩阵。
第四步：于是 \(T^{*}T=U^{*}Q^{*}UU^{*}QU=I\)。比较 \(T^{*}T=I\) 的第一列可知 \(T\) 的第一行非对角元全为零；逐列比较可知 \(T\) 为对角矩阵。
第五步：故 \(U^{*}QU\) 为对角矩阵，且对角元模为 \(1\)。` },

{ id:'LA09-69', ch:9, type:'证明', diff:5, tags:'Householder变换 正交矩阵 分解',
  q: String.raw`证明任意 \(n\) 阶正交矩阵都可表示为不超过 \(n\) 个 Householder 矩阵的乘积。`,
  a: String.raw`对阶数归纳，每次用 Householder 变换把第一列化为 \(e_1\)。`,
  sol: String.raw`第一步：对 \(n\) 归纳。\(n=1\) 时正交矩阵为 \(\pm1\)，结论显然。
第二步：设 \(Q\) 为 \(n\) 阶正交矩阵，第一列为 \(q_1\)，\(\|q_1\|=1\)。若 \(q_1=e_1\) 取 \(H_1=I\)；否则取 Householder 矩阵 \(H_1\) 使 \(H_1q_1=e_1\)。
第三步：于是 \(H_1Q\) 的第一列为 \(e_1\)，且 \(H_1Q\) 正交，故
\[
H_1Q=\begin{pmatrix}1&0\\0&Q_1\end{pmatrix},
\]
其中 \(Q_1\) 为 \(n-1\) 阶正交矩阵。
第四步：由归纳假设，\(Q_1=H_2\cdots H_k\)（\(k-1\le n-1\) 个 \(n-1\) 阶 Householder 矩阵的乘积）。
第五步：令 \(\tilde H_j=\operatorname{diag}(1,H_j)\)，它们仍是 Householder 矩阵，且 \(Q=H_1\tilde H_2\cdots\tilde H_k\)，共不超过 \(n\) 个。` },

{ id:'LA09-70', ch:9, type:'证明', diff:5, tags:'Hadamard不等式 行列式 QR分解',
  q: String.raw`设 \(A=(a_1,\dots,a_n)\) 为 \(n\) 阶实矩阵。证明 \(|\det A|\le\prod_{i=1}^{n}\|a_i\|\)，并指出等号成立的充要条件。`,
  a: String.raw`不等式成立；等号成立当且仅当各列两两正交（或某个 \(a_i=0\)）。`,
  sol: String.raw`第一步：若 \(A\) 奇异，则 \(\det A=0\)，不等式显然成立（此时若所有 \(a_i\neq0\)，等号不成立）。
第二步：若 \(A\) 可逆，作 QR 分解 \(A=QR\)，其中 \(Q\) 正交，\(R=(r_{ij})\) 为主对角元为正的上三角矩阵，故 \(|\det A|=\prod_{i=1}^{n}r_{ii}\)。
第三步：由 \(a_j=\sum_{i\le j}r_{ij}q_i\) 及 \(q_i\) 标准正交，得
\[
\|a_j\|^{2}=\sum_{i\le j}r_{ij}^{2}\ge r_{jj}^{2},
\]
故 \(r_{jj}\le\|a_j\|\)。
第四步：相乘得 \(|\det A|=\prod r_{jj}\le\prod\|a_j\|\)。
第五步：等号成立当且仅当对每个 \(j\) 都有 \(r_{ij}=0\ (i<j)\)，即 \(a_j\perp\operatorname{span}\{a_1,\dots,a_{j-1}\}\)，也就是各列两两正交。` },

{ id:'LA09-71', ch:9, type:'证明', diff:5, tags:'Cauchy-Schwarz不等式 Gram矩阵 等号条件',
  q: String.raw`设 \(x,y\) 为欧氏空间 \(V\) 中的向量。利用 Gram 矩阵证明 Cauchy–Schwarz 不等式 \(|x\cdot y|\le\|x\|\|y\|\)，并给出等号成立的条件。`,
  a: String.raw`不等式成立；等号成立当且仅当 \(x,y\) 线性相关。`,
  sol: String.raw`第一步：考虑 Gram 矩阵
\[
G=\begin{pmatrix}\|x\|^{2}&x\cdot y\\x\cdot y&\|y\|^{2}\end{pmatrix}.
\]
第二步：对任意 \(u=(u_1,u_2)^{T}\)，有 \(u^{T}Gu=\|u_1x+u_2y\|^{2}\ge0\)，故 \(G\) 半正定，从而 \(\det G\ge0\)。
第三步：\(\det G=\|x\|^{2}\|y\|^{2}-(x\cdot y)^{2}\ge0\)，即 \((x\cdot y)^{2}\le\|x\|^{2}\|y\|^{2}\)，开方得 \(|x\cdot y|\le\|x\|\|y\|\)。
第四步：等号成立当且仅当 \(\det G=0\)，即 \(G\) 奇异，等价于存在非零 \(u\) 使 \(u_1x+u_2y=0\)，也就是 \(x,y\) 线性相关。` },

{ id:'LA09-72', ch:9, type:'证明', diff:5, tags:'Bessel不等式 Parseval等式 标准正交组',
  q: String.raw`设 \(e_1,\dots,e_k\) 是欧氏空间 \(V\) 中的标准正交组，\(x\in V\)。证明 Bessel 不等式 \(\sum_{i=1}^{k}(x\cdot e_i)^{2}\le\|x\|^{2}\)；并证明当 \(e_1,\dots,e_n\) 为 \(V\) 的标准正交基时等号成立（Parseval 等式）。`,
  a: String.raw`两个结论都成立。`,
  sol: String.raw`第一步：令 \(c_i=x\cdot e_i\)，\(z=x-\sum_{i=1}^{k}c_ie_i\)。
第二步：对每个 \(j\)，\(z\cdot e_j=c_j-\sum_i c_i\delta_{ij}=0\)，故 \(z\perp\operatorname{span}\{e_1,\dots,e_k\}\)。
第三步：于是
\[
\|x\|^{2}=\left\|\sum c_ie_i\right\|^{2}+\|z\|^{2}=\sum c_i^{2}+\|z\|^{2}\ge\sum c_i^{2},
\]
即 Bessel 不等式。
第四步：当 \(e_1,\dots,e_n\) 为 \(V\) 的标准正交基时，\(z\perp V\) 且 \(z\in V\)，故 \(z=0\)，于是 \(\|x\|^{2}=\sum c_i^{2}\)，即 Parseval 等式。` },

{ id:'LA09-73', ch:9, type:'证明', diff:5, tags:'正交补 子空间的和与交 对偶',
  q: String.raw`设 \(U,W\) 是 \(n\) 维欧氏空间 \(V\) 的子空间。证明 \((U+W)^{\perp}=U^{\perp}\cap W^{\perp}\)，\((U\cap W)^{\perp}=U^{\perp}+W^{\perp}\)。`,
  a: String.raw`两个等式都成立。`,
  sol: String.raw`第一步：\(x\in(U+W)^{\perp}\) 当且仅当 \(x\) 与 \(U\) 及 \(W\) 中所有向量正交，即 \(x\in U^{\perp}\cap W^{\perp}\)。故 \((U+W)^{\perp}=U^{\perp}\cap W^{\perp}\)。
第二步：把第一步用于 \(U^{\perp},W^{\perp}\)，得 \((U^{\perp}+W^{\perp})^{\perp}=U^{\perp\perp}\cap W^{\perp\perp}=U\cap W\)。
第三步：在有限维空间中 \(S^{\perp\perp}=S\)（把 \(S\) 的标准正交基扩充为全空间的基即知）。
第四步：对第二步两边取正交补，得 \((U\cap W)^{\perp}=U^{\perp}+W^{\perp}\)。` },

{ id:'LA09-74', ch:9, type:'证明', diff:5, tags:'正交投影 乘积 交换性 交空间',
  q: String.raw`设 \(P_U,P_W\) 分别是到子空间 \(U,W\) 的正交投影。证明 \(P_UP_W\) 是正交投影当且仅当 \(P_UP_W=P_WP_U\)；此时它是到 \(U\cap W\) 的正交投影。`,
  a: String.raw`充要条件是两个投影可交换；此时 \(P_UP_W\) 投影到 \(U\cap W\)。`,
  sol: String.raw`第一步：若 \(P_UP_W=P_WP_U\)，则
\[
(P_UP_W)^{2}=P_UP_WP_UP_W=P_UP_UP_WP_W=P_UP_W,
\]
且 \((P_UP_W)^{T}=P_WP_U=P_UP_W\)，故 \(P_UP_W\) 是正交投影。
第二步：反之若 \(P_UP_W\) 是正交投影，则它自伴，即 \(P_UP_W=(P_UP_W)^{T}=P_WP_U\)。
第三步：此时 \(\operatorname{Im}(P_UP_W)\subseteq\operatorname{Im}P_U=U\)，且 \(P_UP_Wx=P_WP_Ux\in W\)，故 \(\operatorname{Im}(P_UP_W)\subseteq U\cap W\)。
第四步：反之若 \(x\in U\cap W\)，则 \(P_Ux=P_Wx=x\)，故 \(P_UP_Wx=x\)。因此 \(\operatorname{Im}(P_UP_W)=U\cap W\)，它是到 \(U\cap W\) 的正交投影。` },

{ id:'LA09-75', ch:9, type:'证明', diff:5, tags:'正交变换 分类 旋转 反射',
  q: String.raw`证明三阶正交矩阵必为下列之一：\(\det Q=1\) 时是绕某轴的旋转（含恒等）；\(\det Q=-1\) 时是绕某轴的旋转再关于垂直于该轴的平面作反射。`,
  a: String.raw`三阶正交变换只有旋转与「旋转加反射」两类。`,
  sol: String.raw`第一步：若 \(\det Q=1\)，由三阶正交矩阵的旋转轴定理，\(Q\) 有特征值 \(1\)，取单位特征向量 \(e\)，则 \(Qe=e\)。
第二步：\(e^{\perp}\) 是二维不变子空间，\(Q|_{e^{\perp}}\) 是行列式为 \(1\) 的二阶正交变换，即旋转 \(\theta\)。故 \(Q\) 是绕轴 \(e\) 的旋转。
第三步：若 \(\det Q=-1\)，由正交矩阵行列式为 \(-1\) 时必有特征值 \(-1\)，取单位特征向量 \(e\)，则 \(Qe=-e\)。
第四步：\(e^{\perp}\) 仍是不变子空间，且
\[
\det(Q|_{e^{\perp}})=\frac{\det Q}{-1}=1,
\]
故 \(Q|_{e^{\perp}}\) 是旋转 \(\theta\)。
第五步：在标准正交基 \((e,f_1,f_2)\) 下，\(Q=\operatorname{diag}(-1,R_\theta)=\operatorname{diag}(1,R_\theta)\operatorname{diag}(-1,1,1)\)，即先绕 \(e\) 旋转 \(\theta\)，再关于平面 \(e^{\perp}\) 作反射。` },

{ id:'LA09-76', ch:9, type:'计算', diff:5, tags:'施密特正交化 勒让德多项式 内积空间',
  q: String.raw`在 \(C[-1,1]\) 上取内积 \(\langle f,g\rangle=\int_{-1}^{1}f(x)g(x)\,dx\)。对 \(1,x,x^{2},x^{3}\) 作施密特正交化，求所得的标准正交多项式组。`,
  a: String.raw`\(\dfrac1{\sqrt2},\quad \sqrt{\dfrac32}\,x,\quad \dfrac{3\sqrt{10}}4\left(x^{2}-\dfrac13\right),\quad \dfrac{5\sqrt{14}}4\left(x^{3}-\dfrac35x\right)\)。`,
  sol: String.raw`第一步：\(\langle1,1\rangle=2\)，故 \(p_0=1\)，\(e_0=\dfrac1{\sqrt2}\)。
第二步：\(\langle x,1\rangle=0\)，\(\langle x,x\rangle=\dfrac23\)，故 \(p_1=x\)，\(e_1=\sqrt{\dfrac32}x\)。
第三步：\(\langle x^{2},1\rangle=\dfrac23\)，\(\langle x^{2},x\rangle=0\)，故
\[
p_2=x^{2}-\frac13,\qquad \langle p_2,p_2\rangle=\frac8{45},\quad e_2=\frac{3\sqrt{10}}4\left(x^{2}-\frac13\right).
\]
第四步：由奇偶性 \(\langle x^{3},1\rangle=\langle x^{3},x^{2}-\frac13\rangle=0\)，又 \(\langle x^{3},x\rangle=\dfrac25\)，故
\[
p_3=x^{3}-\frac35x,\qquad \langle p_3,p_3\rangle=\frac8{175},\quad e_3=\frac{5\sqrt{14}}4\left(x^{3}-\frac35x\right).
\]` },

{ id:'LA09-77', ch:9, type:'计算', diff:5, tags:'最佳平方逼近 内积 正规方程',
  q: String.raw`在 \(C[0,1]\) 上取内积 \(\langle f,g\rangle=\int_{0}^{1}f(x)g(x)\,dx\)。求 \(f(x)=x^{2}\) 在子空间 \(\operatorname{span}\{1,x\}\) 上的最佳平方逼近，并求最小平方误差。`,
  a: String.raw`\(p(x)=x-\dfrac16\)，最小平方误差为 \(\dfrac1{180}\)。`,
  sol: String.raw`第一步：设 \(p=a+bx\)。Gram 矩阵与右端为
\[
G=\begin{pmatrix}1&\frac12\\\frac12&\frac13\end{pmatrix},\qquad \left(\langle x^{2},1\rangle,\langle x^{2},x\rangle\right)^{T}=\left(\frac13,\frac14\right)^{T}.
\]
第二步：正规方程为 \(a+\dfrac12b=\dfrac13,\quad \dfrac12a+\dfrac13b=\dfrac14\)。
第三步：解得 \(b=1,\ a=-\dfrac16\)，故 \(p(x)=x-\dfrac16\)。
第四步：最小平方误差为
\[
\int_0^1\left(x^{2}-x+\frac16\right)^{2}dx=\frac1{180}.
\]` },

{ id:'LA09-78', ch:9, type:'证明', diff:5, tags:'正交矩阵 保范数 极化恒等式',
  q: String.raw`设 \(A\) 为 \(n\) 阶实矩阵。证明 \(A\) 是正交矩阵当且仅当 \(\|Ax\|=\|x\|\) 对一切 \(x\in\mathbb{R}^{n}\) 成立。`,
  a: String.raw`保范数与正交性等价。`,
  sol: String.raw`第一步：若 \(A\) 正交，则 \(\|Ax\|^{2}=x^{T}A^{T}Ax=x^{T}x=\|x\|^{2}\)。
第二步：反之，设 \(\|Ax\|=\|x\|\) 对一切 \(x\) 成立。对任意 \(x,y\)，有
\[
\|A(x+y)\|^{2}=\|x+y\|^{2},\qquad \|A(x-y)\|^{2}=\|x-y\|^{2}.
\]
第三步：两式相减得 \(4(Ax)\cdot(Ay)=4x\cdot y\)，即 \(x^{T}A^{T}Ay=x^{T}y\)。
第四步：固定 \(x\)，上式对一切 \(y\) 成立，故 \(A^{T}Ax=x\)；再令 \(x\) 任意，得 \(A^{T}A=I\)，即 \(A\) 正交。` },

{ id:'LA09-79', ch:9, type:'计算', diff:5, tags:'奇异值分解 奇异值 正交矩阵',
  q: String.raw`求 \(A=\begin{pmatrix}3&0\\4&5\end{pmatrix}\) 的奇异值分解 \(A=U\Sigma V^{T}\)。`,
  a: String.raw`\(U=\dfrac1{\sqrt{10}}\begin{pmatrix}1&3\\3&-1\end{pmatrix},\quad \Sigma=\begin{pmatrix}3\sqrt5&0\\0&\sqrt5\end{pmatrix},\quad V=\dfrac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(A^{T}A=\begin{pmatrix}25&20\\20&25\end{pmatrix}\)，特征值为 \(45,5\)，单位特征向量为
\[
v_1=\frac1{\sqrt2}(1,1)^{T},\qquad v_2=\frac1{\sqrt2}(1,-1)^{T}.
\]
第二步：奇异值 \(\sigma_1=3\sqrt5,\ \sigma_2=\sqrt5\)。
第三步：\(u_1=\dfrac{Av_1}{3\sqrt5}=\dfrac1{\sqrt{10}}(1,3)^{T}\)，\(u_2=\dfrac{Av_2}{\sqrt5}=\dfrac1{\sqrt{10}}(3,-1)^{T}\)。
第四步：令 \(U=(u_1,u_2)\)，\(V=(v_1,v_2)\)，则 \(A=U\Sigma V^{T}\)，其中 \(\Sigma=\operatorname{diag}(3\sqrt5,\sqrt5)\)。` },

{ id:'LA09-80', ch:9, type:'证明', diff:5, tags:'Schur三角化 正交相似 实特征值',
  q: String.raw`设 \(A\) 为 \(n\) 阶实矩阵且其特征值全为实数。证明存在正交矩阵 \(Q\)，使 \(Q^{T}AQ\) 为上三角矩阵。`,
  a: String.raw`对阶数归纳，每次用不变子空间降阶。`,
  sol: String.raw`第一步：对 \(n\) 归纳。\(n=1\) 时结论显然。
第二步：取 \(A\) 的单位特征向量 \(q_1\)（特征值为实数），\(Aq_1=\lambda q_1\)。把 \(q_1\) 扩充为标准正交基 \(q_1,q_2,\dots,q_n\)，令 \(Q_1=(q_1,\dots,q_n)\)。
第三步：由 \(Aq_1=\lambda q_1\) 得
\[
Q_1^{T}AQ_1=\begin{pmatrix}\lambda&*\\0&B\end{pmatrix},
\]
其中 \(B\) 为 \(n-1\) 阶实矩阵，其特征值是 \(A\) 的其余特征值，仍全为实数。
第四步：由归纳假设，存在 \(n-1\) 阶正交矩阵 \(Q_2\) 使 \(Q_2^{T}BQ_2\) 为上三角矩阵。
第五步：令 \(Q=Q_1\operatorname{diag}(1,Q_2)\)，则 \(Q\) 正交，且
\[
Q^{T}AQ=\begin{pmatrix}\lambda&*\\0&Q_2^{T}BQ_2\end{pmatrix}
\]
为上三角矩阵。` },

{ id:'LA09-81', ch:9, type:'计算', diff:5, tags:'奇异值分解 奇异值 左奇异向量',
  q: String.raw`求 \(A=\begin{pmatrix}1&1\\1&1\\1&-1\end{pmatrix}\) 的奇异值分解 \(A=U\Sigma V^{T}\)。`,
  a: String.raw`\(U=\begin{pmatrix}\frac1{\sqrt2}&0&\frac1{\sqrt2}\\\frac1{\sqrt2}&0&-\frac1{\sqrt2}\\0&1&0\end{pmatrix},\quad \Sigma=\begin{pmatrix}2&0\\0&\sqrt2\\0&0\end{pmatrix},\quad V=\dfrac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(A^{T}A=\begin{pmatrix}3&1\\1&3\end{pmatrix}\)，特征值为 \(4,2\)，单位特征向量
\[
v_1=\frac1{\sqrt2}(1,1)^{T},\qquad v_2=\frac1{\sqrt2}(1,-1)^{T}.
\]
第二步：奇异值 \(\sigma_1=2,\ \sigma_2=\sqrt2\)。
第三步：\(u_1=\dfrac{Av_1}{2}=\dfrac1{\sqrt2}(1,1,0)^{T}\)，\(u_2=\dfrac{Av_2}{\sqrt2}=(0,0,1)^{T}\)。
第四步：取 \(u_3=\dfrac1{\sqrt2}(1,-1,0)^{T}\)，与 \(u_1,u_2\) 构成 \(\mathbb{R}^{3}\) 的标准正交基，令 \(U=(u_1,u_2,u_3)\)。
第五步：则 \(A=U\Sigma V^{T}\)，其中 \(\Sigma\) 为 \(3\times2\) 矩阵，主对角元为 \(2,\sqrt2\)。` },

{ id:'LA09-82', ch:9, type:'计算', diff:5, tags:'奇异值分解 奇异值 逆矩阵',
  q: String.raw`求 \(A=\begin{pmatrix}2&2\\1&-1\end{pmatrix}\) 的奇异值分解 \(A=U\Sigma V^{T}\)，并写出 \(A^{-1}\)。`,
  a: String.raw`\(U=\begin{pmatrix}1&0\\0&1\end{pmatrix},\quad \Sigma=\begin{pmatrix}2\sqrt2&0\\0&\sqrt2\end{pmatrix},\quad V=\dfrac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}\)；\(A^{-1}=\dfrac14\begin{pmatrix}1&2\\1&-2\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(A^{T}A=\begin{pmatrix}5&3\\3&5\end{pmatrix}\)，特征值为 \(8,2\)，单位特征向量
\[
v_1=\frac1{\sqrt2}(1,1)^{T},\qquad v_2=\frac1{\sqrt2}(1,-1)^{T}.
\]
第二步：奇异值 \(\sigma_1=2\sqrt2,\ \sigma_2=\sqrt2\)。
第三步：\(u_1=\dfrac{Av_1}{2\sqrt2}=(1,0)^{T}\)，\(u_2=\dfrac{Av_2}{\sqrt2}=(0,1)^{T}\)，故 \(U=I\)。
第四步：于是 \(A=U\Sigma V^{T}\)。又 \(\det A=-4\)，\(A^{-1}=\dfrac{1}{-4}\begin{pmatrix}-1&-2\\-1&2\end{pmatrix}=\dfrac14\begin{pmatrix}1&2\\1&-2\end{pmatrix}\)。` },

{ id:'LA09-83', ch:9, type:'计算', diff:5, tags:'最小范数解 广义逆 零空间',
  q: String.raw`设 \(A=\begin{pmatrix}1&1&0\\0&1&1\end{pmatrix}\)，\(b=(1,0)^{T}\)。求方程组 \(Ax=b\) 的最小范数解。`,
  a: String.raw`\(x=\left(\dfrac23,\dfrac13,-\dfrac13\right)^{T}\)。`,
  sol: String.raw`第一步：\(AA^{T}=\begin{pmatrix}2&1\\1&2\end{pmatrix}\)，\((AA^{T})^{-1}=\dfrac13\begin{pmatrix}2&-1\\-1&2\end{pmatrix}\)。
第二步：取 \(x=A^{T}(AA^{T})^{-1}b\)，得
\[
x=A^{T}\cdot\frac13(2,-1)^{T}=\frac13(2,\,2-1,\,-1)^{T}=\frac13(2,1,-1)^{T}.
\]
第三步：验证 \(Ax=\dfrac13(3,0)^{T}=(1,0)^{T}=b\)。
第四步：\(\operatorname{Nul}A=\operatorname{span}\{(1,-1,1)^{T}\}\)，而 \(x\cdot(1,-1,1)=\dfrac13(2-1-1)=0\)，故 \(x\perp\operatorname{Nul}A\)。
第五步：通解为 \(x+z\ (z\in\operatorname{Nul}A)\)，由勾股定理 \(\|x+z\|^{2}=\|x\|^{2}+\|z\|^{2}\)，故 \(x\) 范数最小。` },

{ id:'LA09-84', ch:9, type:'计算', diff:5, tags:'投影矩阵 正交基 施密特正交化',
  q: String.raw`设 \(W=\operatorname{span}\{(1,2,2)^{T},(2,1,-2)^{T}\}\)。求到 \(W\) 的正交投影矩阵 \(P\)，并求 \(b=(1,0,0)^{T}\) 在 \(W\) 上的投影。`,
  a: String.raw`\(P=\dfrac19\begin{pmatrix}5&4&-2\\4&5&2\\-2&2&8\end{pmatrix}\)，投影为 \(\dfrac19(5,4,-2)^{T}\)。`,
  sol: String.raw`第一步：两向量内积 \(2+2-4=0\)，已正交，范数平方均为 \(9\)。
第二步：\(P=\dfrac{1}{9}aa^{T}+\dfrac{1}{9}bb^{T}\)，其中 \(a=(1,2,2)^{T}\)，\(b=(2,1,-2)^{T}\)。
第三步：\(aa^{T}=\begin{pmatrix}1&2&2\\2&4&4\\2&4&4\end{pmatrix}\)，\(bb^{T}=\begin{pmatrix}4&2&-4\\2&1&-2\\-4&-2&4\end{pmatrix}\)。
第四步：相加除以 \(9\) 得 \(P=\dfrac19\begin{pmatrix}5&4&-2\\4&5&2\\-2&2&8\end{pmatrix}\)。
第五步：投影 \(Pb=\dfrac19(5,4,-2)^{T}\)。` },

{ id:'LA09-85', ch:9, type:'计算', diff:5, tags:'Householder变换 正交矩阵 反射',
  q: String.raw`求 Householder 矩阵 \(H\)，使 \(H(1,2,2)^{T}=(3,0,0)^{T}\)，并求 \(\det H\) 与 \(H^{2}\)。`,
  a: String.raw`\(H=\dfrac13\begin{pmatrix}1&2&2\\2&1&-2\\2&-2&1\end{pmatrix}\)，\(\det H=-1\)，\(H^{2}=I\)。`,
  sol: String.raw`第一步：\(x=(1,2,2)^{T}\)，\(\|x\|=3\)。取 \(v=x-3e_1=(-2,2,2)^{T}\)，\(v^{T}v=12\)。
第二步：\(H=I-\dfrac{2}{v^{T}v}vv^{T}=I-\dfrac16vv^{T}\)。
第三步：\(vv^{T}=\begin{pmatrix}4&-4&-4\\-4&4&4\\-4&4&4\end{pmatrix}\)，故
\[
H=I-\frac16vv^{T}=\frac13\begin{pmatrix}1&2&2\\2&1&-2\\2&-2&1\end{pmatrix}.
\]
第四步：验证 \(Hx=\dfrac13(9,0,0)^{T}=(3,0,0)^{T}\)。
第五步：\(H\) 是反射矩阵，\(\det H=-1\)，且 \(H^{2}=I\)。` },

{ id:'LA09-86', ch:9, type:'计算', diff:5, tags:'正交对角化 特征值 谱定理',
  q: String.raw`求正交矩阵 \(Q\)，使 \(Q^{T}AQ\) 为对角矩阵，其中 \(A=\begin{pmatrix}1&2&0\\2&1&0\\0&0&3\end{pmatrix}\)。`,
  a: String.raw`\(Q=\begin{pmatrix}\frac1{\sqrt2}&0&\frac1{\sqrt2}\\\frac1{\sqrt2}&0&-\frac1{\sqrt2}\\0&1&0\end{pmatrix}\)，\(Q^{T}AQ=\operatorname{diag}(3,3,-1)\)。`,
  sol: String.raw`第一步：\(|\lambda I-A|=(\lambda-3)\left[(\lambda-1)^{2}-4\right]=(\lambda-3)^{2}(\lambda+1)\)，特征值为 \(3,3,-1\)。
第二步：\(\lambda=3\) 时解 \((A-3I)x=0\) 得特征子空间 \(\operatorname{span}\{(1,1,0)^{T},(0,0,1)^{T}\}\)。
第三步：\(\lambda=-1\) 时得特征子空间 \(\operatorname{span}\{(1,-1,0)^{T}\}\)。
第四步：取单位特征向量 \(q_1=\dfrac1{\sqrt2}(1,1,0)^{T}\)，\(q_2=(0,0,1)^{T}\)，\(q_3=\dfrac1{\sqrt2}(1,-1,0)^{T}\)，三者标准正交。
第五步：令 \(Q=(q_1,q_2,q_3)\)，则 \(Q^{T}AQ=\operatorname{diag}(3,3,-1)\)。` },

{ id:'LA09-87', ch:9, type:'计算', diff:4, tags:'正交补 投影矩阵 距离',
  q: String.raw`设 \(W=\operatorname{span}\{(1,1,0,0)^{T},(0,0,1,1)^{T}\}\subset\mathbb{R}^{4}\)。求到 \(W^{\perp}\) 的正交投影矩阵，并求 \(b=(1,2,3,4)^{T}\) 到 \(W\) 的距离。`,
  a: String.raw`\(P_{W^{\perp}}=\dfrac12\begin{pmatrix}1&-1&0&0\\-1&1&0&0\\0&0&1&-1\\0&0&-1&1\end{pmatrix}\)，距离为 \(1\)。`,
  sol: String.raw`第一步：\(W\) 的两向量标准正交且范数为 \(\sqrt2\)，故 \(P_W=\dfrac12\begin{pmatrix}1&1&0&0\\1&1&0&0\\0&0&1&1\\0&0&1&1\end{pmatrix}\)。
第二步：\(P_{W^{\perp}}=I-P_W=\dfrac12\begin{pmatrix}1&-1&0&0\\-1&1&0&0\\0&0&1&-1\\0&0&-1&1\end{pmatrix}\)。
第三步：\(P_{W^{\perp}}b=\dfrac12(-1,1,-1,1)^{T}\)。
第四步：\(b\) 到 \(W\) 的距离等于 \(\|P_{W^{\perp}}b\|=\sqrt{4\cdot\frac14}=1\)。` },

{ id:'LA09-88', ch:9, type:'计算', diff:5, tags:'秩 零空间 正交补 行空间',
  q: String.raw`设 \(A=\begin{pmatrix}1&0&1\\0&1&1\\1&1&2\end{pmatrix}\)。求 \(\operatorname{rank}A\)、\(\operatorname{Nul}A\) 的标准正交基、\(\operatorname{Col}A\) 的标准正交基，并验证 \((\operatorname{Col}A)^{\perp}=\operatorname{Nul}A^{T}\)。`,
  a: String.raw`\(\operatorname{rank}A=2\)；\(\operatorname{Nul}A=\operatorname{span}\left\{\dfrac1{\sqrt3}(-1,-1,1)^{T}\right\}\)；\(\operatorname{Col}A\) 的标准正交基为 \(\dfrac1{\sqrt2}(1,0,1)^{T},\ \dfrac1{\sqrt6}(-1,2,1)^{T}\)；\((\operatorname{Col}A)^{\perp}=\operatorname{Nul}A^{T}=\operatorname{span}\left\{\dfrac1{\sqrt3}(1,1,-1)^{T}\right\}\)。`,
  sol: String.raw`第一步：第三行等于前两行之和，且前两行线性无关，故 \(\operatorname{rank}A=2\)。
第二步：解 \(Ax=0\) 得 \(x_1+x_3=0,\ x_2+x_3=0\)，即 \(x=t(-1,-1,1)^{T}\)，单位化得 \(\dfrac1{\sqrt3}(-1,-1,1)^{T}\)。
第三步：\(\operatorname{Col}A=\operatorname{span}\{(1,0,1)^{T},(0,1,1)^{T}\}\)，对它们作施密特正交化：\(e_1=\dfrac1{\sqrt2}(1,0,1)^{T}\)，\(e_2=\dfrac1{\sqrt6}(-1,2,1)^{T}\)。
第四步：\(A^{T}=\begin{pmatrix}1&0&1\\0&1&1\\1&1&2\end{pmatrix}\)，解 \(A^{T}z=0\) 得 \(z=s(1,1,-1)^{T}\)。
第五步：直接验证 \((1,0,1)\cdot(1,1,-1)=0\)、\((0,1,1)\cdot(1,1,-1)=0\)，即 \(\operatorname{Nul}A^{T}\perp\operatorname{Col}A\)，且两者维数之和 \(1+2=3\)，故 \((\operatorname{Col}A)^{\perp}=\operatorname{Nul}A^{T}\)。` },

{ id:'LA09-89', ch:9, type:'计算', diff:5, tags:'QR迭代 QR分解 特征值算法',
  q: String.raw`对 \(A=\begin{pmatrix}2&1\\1&2\end{pmatrix}\) 作一步 QR 迭代：先作 QR 分解 \(A=QR\)，再令 \(A_1=RQ\)。求 \(Q,R,A_1\)，并说明迭代的意义。`,
  a: String.raw`\(Q=\dfrac1{\sqrt5}\begin{pmatrix}2&-1\\1&2\end{pmatrix},\quad R=\begin{pmatrix}\sqrt5&\frac4{\sqrt5}\\0&\frac3{\sqrt5}\end{pmatrix},\quad A_1=\dfrac15\begin{pmatrix}14&3\\3&6\end{pmatrix}\)。`,
  sol: String.raw`第一步：第一列 \(a_1=(2,1)^{T}\)，\(\|a_1\|=\sqrt5\)，\(q_1=\dfrac1{\sqrt5}(2,1)^{T}\)。
第二步：\(r_{12}=a_2\cdot q_1=\dfrac4{\sqrt5}\)，\(z=a_2-r_{12}q_1=\left(-\dfrac35,\dfrac65\right)^{T}\)，\(\|z\|=\dfrac3{\sqrt5}\)，\(q_2=\dfrac1{\sqrt5}(-1,2)^{T}\)。
第三步：故 \(Q=(q_1,q_2)\)，\(R=\begin{pmatrix}\sqrt5&\frac4{\sqrt5}\\0&\frac3{\sqrt5}\end{pmatrix}\)。
第四步：\(A_1=RQ=\begin{pmatrix}\sqrt5&\frac4{\sqrt5}\\0&\frac3{\sqrt5}\end{pmatrix}\cdot\dfrac1{\sqrt5}\begin{pmatrix}2&-1\\1&2\end{pmatrix}=\dfrac15\begin{pmatrix}14&3\\3&6\end{pmatrix}\)。
第五步：\(A_1\) 与 \(A\) 相似（\(A_1=Q^{T}AQ\)），特征值不变，仍为 \(3,1\)，且非对角元由 \(1\) 降到 \(3/5\)，迭代下去收敛到 \(\operatorname{diag}(3,1)\)。` },

{ id:'LA09-90', ch:9, type:'计算', diff:5, tags:'极分解 正定矩阵 正交矩阵',
  q: String.raw`求 \(A=\begin{pmatrix}1&2\\2&1\end{pmatrix}\) 的极分解 \(A=QH\)（\(Q\) 正交，\(H\) 正定对称）。`,
  a: String.raw`\(Q=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad H=\begin{pmatrix}2&1\\1&2\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(A^{T}A=\begin{pmatrix}5&4\\4&5\end{pmatrix}\)，特征值为 \(9,1\)，单位特征向量 \(\dfrac1{\sqrt2}(1,1)^{T}\) 与 \(\dfrac1{\sqrt2}(1,-1)^{T}\)。
第二步：\(H\) 是 \(A^{T}A\) 的正定平方根，按特征值 \(9,1\) 与单位特征向量 \(\dfrac1{\sqrt2}(1,1)^{T},\dfrac1{\sqrt2}(1,-1)^{T}\) 展开：
\[
H=3\cdot\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix}+1\cdot\frac12\begin{pmatrix}1&-1\\-1&1\end{pmatrix}=\begin{pmatrix}2&1\\1&2\end{pmatrix}.
\]
第三步：验证 \(H^{2}=\begin{pmatrix}5&4\\4&5\end{pmatrix}=A^{T}A\)，\(H\) 正定。
第四步：\(H^{-1}=\dfrac13\begin{pmatrix}2&-1\\-1&2\end{pmatrix}\)，故
\[
Q=AH^{-1}=\frac13\begin{pmatrix}1&2\\2&1\end{pmatrix}\begin{pmatrix}2&-1\\-1&2\end{pmatrix}=\begin{pmatrix}0&1\\1&0\end{pmatrix}.
\]
第五步：\(Q\) 正交，且 \(QH=\begin{pmatrix}2&1\\1&2\end{pmatrix}=A\)。` },

{ id:'LA09-91', ch:9, type:'计算', diff:5, tags:'最佳秩一逼近 Eckart-Young定理 谱范数',
  q: String.raw`求 \(A=\begin{pmatrix}2&2&0\\2&2&0\\0&0&1\end{pmatrix}\) 的最佳秩 \(1\) 逼近（按谱范数），并求最小误差。`,
  a: String.raw`\(A_1=\begin{pmatrix}2&2&0\\2&2&0\\0&0&0\end{pmatrix}\)，最小误差为 \(1\)。`,
  sol: String.raw`第一步：\(A\) 对称，\(A^{2}=\begin{pmatrix}8&8&0\\8&8&0\\0&0&1\end{pmatrix}\)，故特征值为 \(4,1,0\)，奇异值为 \(4,1,0\)。
第二步：\(\lambda=4\) 的单位特征向量 \(u_1=\dfrac1{\sqrt2}(1,1,0)^{T}\)；\(\lambda=1\) 对应 \((0,0,1)^{T}\)。
第三步：由 Eckart–Young 定理，最佳秩 \(1\) 逼近为
\[
A_1=4u_1u_1^{T}=4\cdot\frac12\begin{pmatrix}1&1&0\\1&1&0\\0&0&0\end{pmatrix}=\begin{pmatrix}2&2&0\\2&2&0\\0&0&0\end{pmatrix}.
\]
第四步：最小误差为 \(\sigma_2=1\)，可直接验证 \(A-A_1=\operatorname{diag}(0,0,1)\) 的谱范数为 \(1\)。` },

{ id:'LA09-92', ch:9, type:'计算', diff:5, tags:'Householder变换 三对角化 相似变换',
  q: String.raw`用 Householder 变换把 \(A=\begin{pmatrix}4&1&2\\1&3&0\\2&0&5\end{pmatrix}\) 化为三对角矩阵：取 \(H=\operatorname{diag}(1,P)\) 使 \(P(1,2)^{T}=(\sqrt5,0)^{T}\)，求 \(P\) 与 \(B=HAH\)。`,
  a: String.raw`\(P=\dfrac1{\sqrt5}\begin{pmatrix}1&2\\2&-1\end{pmatrix},\quad B=\begin{pmatrix}4&\sqrt5&0\\\sqrt5&\frac{23}5&-\frac45\\0&-\frac45&\frac{17}5\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(x=(1,2)^{T}\)，\(\|x\|=\sqrt5\)，取 \(H\) 的反射方向 \(w=x-\sqrt5e_1\)。
第二步：计算得 \(P=I-\dfrac{2}{w^{T}w}ww^{T}=\dfrac1{\sqrt5}\begin{pmatrix}1&2\\2&-1\end{pmatrix}\)，且 \(Px=(\sqrt5,0)^{T}\)。
第三步：记 \(A=\begin{pmatrix}4&u^{T}\\u&C\end{pmatrix}\)，\(u=(1,2)^{T}\)，\(C=\begin{pmatrix}3&0\\0&5\end{pmatrix}\)，则 \(Pu=(\sqrt5,0)^{T}\)。
第四步：\(PCP=\dfrac15\begin{pmatrix}1&2\\2&-1\end{pmatrix}\begin{pmatrix}3&0\\0&5\end{pmatrix}\begin{pmatrix}1&2\\2&-1\end{pmatrix}=\dfrac15\begin{pmatrix}23&-4\\-4&17\end{pmatrix}\)。
第五步：故 \(B=HAH=\begin{pmatrix}4&\sqrt5&0\\\sqrt5&\frac{23}5&-\frac45\\0&-\frac45&\frac{17}5\end{pmatrix}\)，已是三对角矩阵。` },

{ id:'LA09-93', ch:9, type:'计算', diff:4, tags:'加权最小二乘 正规方程 拟合',
  q: String.raw`用直线 \(y=a+bx\) 拟合数据点 \((0,1),(1,2),(2,4)\)，权重分别为 \(1,2,1\)。求使加权残差平方和 \(\sum w_i(a+bx_i-y_i)^{2}\) 最小的 \(a,b\)。`,
  a: String.raw`\(a=\dfrac34,\quad b=\dfrac32\)，即 \(y=\dfrac34+\dfrac32x\)。`,
  sol: String.raw`第一步：加权正规方程为
\[
\left(\sum w_i\right)a+\left(\sum w_ix_i\right)b=\sum w_iy_i,\qquad \left(\sum w_ix_i\right)a+\left(\sum w_ix_i^{2}\right)b=\sum w_ix_iy_i.
\]
第二步：计算 \(\sum w_i=4\)，\(\sum w_ix_i=0+2+2=4\)，\(\sum w_ix_i^{2}=0+2+4=6\)。
第三步：\(\sum w_iy_i=1+4+4=9\)，\(\sum w_ix_iy_i=0+4+8=12\)。
第四步：解 \(4a+4b=9,\ 4a+6b=12\)，得 \(b=\dfrac32\)，\(a=\dfrac34\)。` },

{ id:'LA09-94', ch:9, type:'计算', diff:4, tags:'投影 距离 正交基',
  q: String.raw`设 \(W=\operatorname{span}\{(1,1,1,1)^{T},(1,-1,1,-1)^{T}\}\subset\mathbb{R}^{4}\)。求 \(b=(1,2,3,4)^{T}\) 在 \(W\) 上的投影及到 \(W\) 的距离。`,
  a: String.raw`投影为 \((2,3,2,3)^{T}\)，距离为 \(2\)。`,
  sol: String.raw`第一步：两向量内积 \(1-1+1-1=0\)，范数平方均为 \(4\)，已正交。
第二步：投影系数 \(c_1=\dfrac{b\cdot a_1}{4}=\dfrac{1+2+3+4}{4}=\dfrac52\)，\(c_2=\dfrac{b\cdot a_2}{4}=\dfrac{1-2+3-4}{4}=-\dfrac12\)。
第三步：投影 \(p=\dfrac52(1,1,1,1)^{T}-\dfrac12(1,-1,1,-1)^{T}=(2,3,2,3)^{T}\)。
第四步：\(b-p=(-1,-1,1,1)^{T}\)，距离 \(\|b-p\|=\sqrt{1+1+1+1}=2\)。` },

{ id:'LA09-95', ch:9, type:'计算', diff:4, tags:'Moore-Penrose广义逆 奇异值分解',
  q: String.raw`设 \(A=\begin{pmatrix}1&1\\1&1\end{pmatrix}\)。求 \(A\) 的 Moore–Penrose 广义逆 \(A^{+}\)，并验证四个 Penrose 条件。`,
  a: String.raw`\(A^{+}=\dfrac14\begin{pmatrix}1&1\\1&1\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(A=2uv^{T}\)，其中 \(u=v=\dfrac1{\sqrt2}(1,1)^{T}\)，这是 \(A\) 的奇异值分解（\(\sigma_1=2\)）。
第二步：由 SVD 的广义逆公式 \(A^{+}=\dfrac1{\sigma_1}vu^{T}=\dfrac12\cdot\dfrac12\begin{pmatrix}1&1\\1&1\end{pmatrix}=\dfrac14J\)，其中 \(J=\begin{pmatrix}1&1\\1&1\end{pmatrix}\)。
第三步：验证 \(AA^{+}A=\dfrac14JAJ=\dfrac14\cdot 4J=J=A\)（用到 \(J^{2}=2J\)，\(J^{3}=4J\)）。
第四步：\(A^{+}AA^{+}=\dfrac1{16}JAJ=\dfrac14J=A^{+}\)；\(AA^{+}=\dfrac12J\) 与 \(A^{+}A=\dfrac12J\) 都对称。四条 Penrose 条件全部成立。` },

{ id:'LA09-96', ch:9, type:'计算', diff:5, tags:'二次型 标准形 正交变换 特征值',
  q: String.raw`用正交变换化二次型 \(f=2x_1^{2}+2x_2^{2}+5x_3^{2}+2x_1x_2\) 为标准形，写出所用的正交变换。`,
  a: String.raw`\(f=3y_1^{2}+y_2^{2}+5y_3^{2}\)，正交变换 \(x=Qy\)，\(Q\) 的列为 \(\dfrac1{\sqrt2}(1,1,0)^{T},\ \dfrac1{\sqrt2}(1,-1,0)^{T},\ (0,0,1)^{T}\)。`,
  sol: String.raw`第一步：二次型的矩阵为 \(A=\begin{pmatrix}2&1&0\\1&2&0\\0&0&5\end{pmatrix}\)。
第二步：特征值为 \(3,1,5\)（左上 \(2\times2\) 块的特征值为 \(3,1\)，另加 \(5\)）。
第三步：\(\lambda=3,1\) 的单位特征向量为 \(q_1=\dfrac1{\sqrt2}(1,1,0)^{T}\)，\(q_2=\dfrac1{\sqrt2}(1,-1,0)^{T}\)；\(\lambda=5\) 对应 \(q_3=(0,0,1)^{T}\)。
第四步：令 \(Q=(q_1,q_2,q_3)\)，\(x=Qy\)，则 \(Q^{T}AQ=\operatorname{diag}(3,1,5)\)，故 \(f=3y_1^{2}+y_2^{2}+5y_3^{2}\)。` },

{ id:'LA09-97', ch:9, type:'计算', diff:4, tags:'投影矩阵 点到平面距离 法向量',
  q: String.raw`求到平面 \(\pi:x+y+z=0\) 的正交投影矩阵 \(P\)，并求点 \(b=(1,2,3)^{T}\) 到该平面的距离。`,
  a: String.raw`\(P=\dfrac13\begin{pmatrix}2&-1&-1\\-1&2&-1\\-1&-1&2\end{pmatrix}\)，距离为 \(2\sqrt3\)。`,
  sol: String.raw`第一步：平面法向量 \(n=(1,1,1)^{T}\)，\(\|n\|^{2}=3\)，到法向量的投影为 \(\dfrac{nn^{T}}{3}\)。
第二步：\(P=I-\dfrac13nn^{T}=\dfrac13\left[3I-nn^{T}\right]=\dfrac13\begin{pmatrix}2&-1&-1\\-1&2&-1\\-1&-1&2\end{pmatrix}\)。
第三步：\(b\) 到平面的距离等于它在法向上的分量长度：\(\dfrac{|n\cdot b|}{\|n\|}=\dfrac{|1+2+3|}{\sqrt3}=2\sqrt3\)。
第四步：验证 \(Pb=(-1,0,1)^{T}\)，\(\|b-Pb\|=\|(2,2,2)^{T}\|=2\sqrt3\)，等于法向分量长度。` },

{ id:'LA09-98', ch:9, type:'计算', diff:5, tags:'奇异值分解 对称矩阵 特征值',
  q: String.raw`求 \(A=\begin{pmatrix}3&1\\1&3\end{pmatrix}\) 的奇异值分解，并求 \(A\) 的谱条件数。`,
  a: String.raw`\(A=U\Sigma V^{T}\)，\(U=V=\dfrac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}\)，\(\Sigma=\operatorname{diag}(4,2)\)；\(\kappa_2(A)=2\)。`,
  sol: String.raw`第一步：\(A^{T}A=A^{2}=\begin{pmatrix}10&6\\6&10\end{pmatrix}\)，特征值为 \(16,4\)，故奇异值为 \(4,2\)。
第二步：\(A\) 的特征值为 \(4,2\)，单位特征向量 \(v_1=\dfrac1{\sqrt2}(1,1)^{T}\)，\(v_2=\dfrac1{\sqrt2}(1,-1)^{T}\)。
第三步：\(u_i\) 与 \(v_i\) 同向（因 \(A\) 对称且特征值为正），故 \(U=V=\dfrac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}\)。
第四步：\(\kappa_2(A)=\dfrac{\sigma_1}{\sigma_2}=\dfrac42=2\)。` },

{ id:'LA09-99', ch:9, type:'计算', diff:5, tags:'正交补 叉积 点到平面距离',
  q: String.raw`设 \(W=\operatorname{span}\{(1,2,3)^{T},(2,3,1)^{T}\}\subset\mathbb{R}^{3}\)。求 \(W^{\perp}\) 的标准正交基，并求点 \(b=(1,0,0)^{T}\) 到 \(W\) 的距离。`,
  a: String.raw`\(W^{\perp}=\operatorname{span}\left\{\dfrac1{5\sqrt3}(-7,5,-1)^{T}\right\}\)，距离为 \(\dfrac{7\sqrt3}{15}\)。`,
  sol: String.raw`第一步：\(n=a_1\times a_2=(2\cdot1-3\cdot3,\ 3\cdot2-1\cdot1,\ 1\cdot3-2\cdot2)=(-7,5,-1)\)。
第二步：\(n\) 与两向量都正交，故 \(W^{\perp}=\operatorname{span}\{n\}\)；\(\|n\|=\sqrt{49+25+1}=\sqrt{75}=5\sqrt3\)，单位化为 \(\dfrac1{5\sqrt3}(-7,5,-1)^{T}\)。
第三步：\(b\) 到 \(W\) 的距离等于它在 \(W^{\perp}\) 上投影的长度：
\[
d=\frac{|n\cdot b|}{\|n\|}=\frac{7}{5\sqrt3}=\frac{7\sqrt3}{15}.
\]` },

{ id:'LA09-100', ch:9, type:'证明', diff:5, tags:'正交矩阵 对合矩阵 对称性',
  q: String.raw`设 \(A\) 为 \(n\) 阶实矩阵，满足 \(A^{2}=I\) 且 \(A\) 是正交矩阵。证明 \(A\) 是对称矩阵。`,
  a: String.raw`\(A=A^{T}\)。`,
  sol: String.raw`第一步：由 \(A^{2}=I\) 知 \(A\) 可逆，且 \(A^{-1}=A\)。
第二步：由 \(A\) 正交知 \(A^{T}A=I\)，故 \(A^{T}=A^{-1}\)。
第三步：于是 \(A^{T}=A^{-1}=A\)，即 \(A\) 对称。
第四步：反过来，对称且 \(A^{2}=I\) 的矩阵一定是正交矩阵：\(A^{T}A=A^{2}=I\)，故这类矩阵正是「反射」型的正交变换。` }
);
