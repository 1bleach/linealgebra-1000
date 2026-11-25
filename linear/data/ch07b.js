window.LBANK = window.LBANK || [];
window.LBANK.push(
{ id:'LA07-21', ch:7, type:'计算', diff:5, tags:'配方法 标准形 惯性指数 规范形',
  q: String.raw`用配方法将二次型 \(f(x_1,x_2,x_3)=2x_1x_2+2x_1x_3+2x_2x_3\) 化为标准形，写出所作的可逆线性变换，并求其正、负惯性指数与规范形。`,
  a: String.raw`标准形 \(f=2z_1^{2}-2z_2^{2}-2z_3^{2}\)，正惯性指数 \(p=1\)，负惯性指数 \(q=2\)，规范形为 \(z_1^{2}-z_2^{2}-z_3^{2}\)。`,
  sol: String.raw`第一步：先消去交叉项 \(2x_1x_2\)。令 \(x_1=y_1+y_2,\ x_2=y_1-y_2,\ x_3=y_3\)，则 \(2x_1x_2=2(y_1^{2}-y_2^{2})\)，而 \(2x_1x_3+2x_2x_3=2(y_1+y_2)y_3+2(y_1-y_2)y_3=4y_1y_3\)，故 \(f=2y_1^{2}-2y_2^{2}+4y_1y_3\)。
第二步：对 \(y_1\) 配方：\(2y_1^{2}+4y_1y_3=2(y_1+y_3)^{2}-2y_3^{2}\)，于是 \(f=2(y_1+y_3)^{2}-2y_2^{2}-2y_3^{2}\)。
第三步：令 \(z_1=y_1+y_3,\ z_2=y_2,\ z_3=y_3\)，反解得 \(x_1=z_1+z_2-z_3,\ x_2=z_1-z_2-z_3,\ x_3=z_3\)，变换矩阵 \(\begin{pmatrix}1&1&-1\\1&-1&-1\\0&0&1\end{pmatrix}\) 的行列式为 \(-2\neq0\)，确为可逆线性变换。
第四步：标准形是 \(2z_1^{2}-2z_2^{2}-2z_3^{2}\)，平方项系数一正两负，故 \(p=1,\ q=2\)，秩为 \(3\)；再令 \(z_1=w_1,\ z_2=w_2/\sqrt2,\ z_3=w_3/\sqrt2\) 即得规范形 \(w_1^{2}-w_2^{2}-w_3^{2}\)。
第五步：注意此处先消 \(x_1x_2\) 再配 \(y_1\)，所得系数与配方次序有关，但惯性指数不变，可验证矩阵 \(\begin{pmatrix}0&1&1\\1&0&1\\1&1&0\end{pmatrix}\) 的特征值为 \(2,-1,-1\)，与结论一致。` },

{ id:'LA07-22', ch:7, type:'计算', diff:5, tags:'含参数二次型 正定 半正定 特征值',
  q: String.raw`设 \(f(x_1,x_2,x_3)=x_1^{2}+x_2^{2}+x_3^{2}+2a(x_1x_2+x_1x_3+x_2x_3)\)，其中 \(a\) 为实参数。(1) 求 \(a\) 的范围使 \(f\) 正定；(2) 求 \(a\) 的范围使 \(f\) 半正定；(3) 说明不存在 \(a\) 使 \(f\) 负定；(4) 写出用正交变换化 \(f\) 为标准形的结果。`,
  a: String.raw`(1) \(-\frac12<a<1\)；(2) \(-\frac12\le a\le1\)；(3) 无解；(4) 标准形为 \((1+2a)y_1^{2}+(1-a)(y_2^{2}+y_3^{2})\)。`,
  sol: String.raw`第一步：二次型矩阵 \(A=(1-a)I+aJ\)，其中 \(J\) 为三阶全 \(1\) 矩阵；\(J\) 的特征值为 \(3,0,0\)，对应特征向量 \((1,1,1)^{T}\) 与平面 \(x_1+x_2+x_3=0\)。
第二步：故 \(A\) 的特征值为 \(\lambda_1=1+2a\)（一重）与 \(\lambda_2=\lambda_3=1-a\)（二重），且 \(A\) 实对称，可用正交变换对角化。
第三步：正定要求三个特征值全正，即 \(1+2a>0\) 且 \(1-a>0\)，得 \(-\frac12<a<1\)。
第四步：半正定要求特征值全非负，即 \(a\ge-\frac12\) 且 \(a\le1\)，得 \(-\frac12\le a\le1\)；其中 \(a=-\frac12\) 时 \(p=2,\ q=0\)（秩 \(2\)），\(a=1\) 时 \(p=1,\ q=0\)（秩 \(1\)）。
第五步：负定要求 \(\lambda_1<0\) 且 \(\lambda_2<0\)，即 \(a<-\frac12\) 且 \(a>1\)，无解，故不存在使 \(f\) 负定的 \(a\)。
第六步：取 \(Q\) 的列向量为 \(\frac{1}{\sqrt3}(1,1,1)^{T},\ \frac{1}{\sqrt2}(1,-1,0)^{T},\ \frac{1}{\sqrt6}(1,1,-2)^{T}\)，作 \(x=Qy\) 即得所述标准形。` },

{ id:'LA07-23', ch:7, type:'计算', diff:4, tags:'半正定 秩 二次方程解集 规范形',
  q: String.raw`设 \(f(x_1,x_2,x_3,x_4)=x_1^{2}+x_2^{2}+x_3^{2}+x_4^{2}-2x_1x_2-2x_3x_4\)。(1) 写出 \(f\) 的矩阵 \(A\)，求 \(\operatorname{rank}A\)；(2) 求正、负惯性指数与规范形；(3) 判断 \(f\) 是否半正定、是否正定；(4) 求方程 \(f=0\) 的全部解。`,
  a: String.raw`\(\operatorname{rank}A=2\)，\(p=2,\ q=0\)，规范形 \(z_1^{2}+z_2^{2}\)；\(f\) 半正定但非正定；\(f=0\) 的解集为 \(\{(s,s,t,t)^{T}\mid s,t\in\mathbb R\}\)。`,
  sol: String.raw`第一步：\(A=\begin{pmatrix}1&-1&0&0\\-1&1&0&0\\0&0&1&-1\\0&0&-1&1\end{pmatrix}\)，它是两个二阶块 \(\begin{pmatrix}1&-1\\-1&1\end{pmatrix}\) 的分块对角矩阵。
第二步：每个二阶块的特征值为 \(0,2\)，故 \(A\) 的特征值为 \(2,0,2,0\)，秩为 \(2\)，\(p=2,\ q=0\)。
第三步：配方得 \(f=(x_1-x_2)^{2}+(x_3-x_4)^{2}\ge0\)，且取 \(x=(1,1,0,0)^{T}\neq0\) 时 \(f=0\)，故 \(f\) 半正定而非正定。
第四步：由两个平方和非负，\(f=0\) 当且仅当 \(x_1=x_2\) 且 \(x_3=x_4\)，即解集为 \(\{(s,s,t,t)^{T}\}\)，它是二维子空间（即 \(\ker A\)），与秩 \(2\) 吻合。
第五步：规范形为 \(z_1^{2}+z_2^{2}\)（补 \(0\cdot z_3^{2}+0\cdot z_4^{2}\)）。` },

{ id:'LA07-24', ch:7, type:'计算', diff:5, tags:'秩 惯性指数 行列式 特征多项式',
  q: String.raw`设 \(f(x_1,x_2,x_3,x_4)=x_1^{2}+x_2^{2}+x_3^{2}+x_4^{2}-2x_1x_2-2x_2x_3-2x_3x_4\)。求 \(f\) 的矩阵 \(A\) 的行列式与秩，求正、负惯性指数，并写出规范形。`,
  a: String.raw`\(|A|=-1\)，\(\operatorname{rank}A=4\)，\(p=3,\ q=1\)，规范形为 \(z_1^{2}+z_2^{2}+z_3^{2}-z_4^{2}\)。`,
  sol: String.raw`第一步：\(A=\begin{pmatrix}1&-1&0&0\\-1&1&-1&0\\0&-1&1&-1\\0&0&-1&1\end{pmatrix}=I-P\)，其中 \(P\) 是四阶路径图的邻接矩阵。
第二步：\(P\) 的特征值为 \(2\cos\frac{k\pi}{5}\ (k=1,2,3,4)\)，即 \(\frac{1+\sqrt5}{2},\ \frac{-1+\sqrt5}{2},\ \frac{-1-\sqrt5}{2},\ \frac{1-\sqrt5}{2}\)。
第三步：于是 \(A\) 的特征值为 \(1-2\cos\frac{k\pi}{5}\)，即 \(\frac{1-\sqrt5}{2}\approx-0.618,\ \frac{3-\sqrt5}{2}\approx0.382,\ \frac{1+\sqrt5}{2}\approx1.618,\ \frac{3+\sqrt5}{2}\approx2.618\)。
第四步：也可直接算 \(|\lambda I-A|=(\lambda^{2}-3\lambda+1)(\lambda^{2}-\lambda-1)\)，与第三步一致；三个特征值为正、一个为负，故 \(p=3,\ q=1\)，秩 \(4\)。
第五步：\(|A|=\prod\lambda_i=\frac{1-5}{4}\cdot\frac{9-5}{4}=(-1)\cdot1=-1\)。
第六步：规范形为 \(z_1^{2}+z_2^{2}+z_3^{2}-z_4^{2}\)。` },

{ id:'LA07-25', ch:7, type:'计算', diff:4, tags:'顺序主子式 正定 半正定 参数讨论',
  q: String.raw`设 \(A=\begin{pmatrix}2&1&0&0\\1&2&1&0\\0&1&2&1\\0&0&1&a\end{pmatrix}\)。(1) 求 \(a\) 的范围使 \(A\) 正定；(2) 当 \(a=\frac34\) 时判断 \(A\) 的类型并求秩；(3) 当 \(a<\frac34\) 时求正、负惯性指数。`,
  a: String.raw`(1) \(a>\frac34\)；(2) \(a=\frac34\) 时 \(A\) 半正定但非正定，秩为 \(3\)；(3) \(a<\frac34\) 时 \(p=3,\ q=1\)。`,
  sol: String.raw`第一步：计算各阶顺序主子式：\(\Delta_1=2,\ \Delta_2=\begin{vmatrix}2&1\\1&2\end{vmatrix}=3,\ \Delta_3=\begin{vmatrix}2&1&0\\1&2&1\\0&1&2\end{vmatrix}=4,\ \Delta_4=|A|=4a-3\)。
第二步：\(\Delta_1,\Delta_2,\Delta_3\) 恒正，故 \(A\) 正定当且仅当 \(\Delta_4=4a-3>0\)，即 \(a>\frac34\)。
第三步：\(a=\frac34\) 时 \(\Delta_4=0\) 而前三阶顺序主子式全正，故秩为 \(3\) 且 \(A\) 半正定（对任意 \(x\)，\(x^{T}Ax\) 是 \(a\) 的增函数，或由四阶顺序主子式为零、三阶正定直接判定）。
第四步：\(a<\frac34\) 时 \(\Delta_3=4>0\)，说明前三个特征值同号且为正的个数不少于 \(3\)；又 \(|A|<0\) 说明特征值之积为负，故第四个特征值为负，即 \(p=3,\ q=1\)。` },

{ id:'LA07-26', ch:7, type:'证明', diff:5, tags:'半正定 主子式 判定定理 反例',
  q: String.raw`设 \(A\) 为 \(n\) 阶实对称矩阵。证明：\(A\) 半正定当且仅当 \(A\) 的所有主子式（不限于顺序主子式）都非负；并举例说明仅要求顺序主子式非负不能判定半正定。`,
  a: String.raw`结论成立；反例 \(A=\operatorname{diag}(0,-1)\) 的一、二阶顺序主子式为 \(0,0\)，但取 \(x=(0,1)^{T}\) 得 \(x^{T}Ax=-1<0\)，故 \(A\) 不是半正定矩阵。`,
  sol: String.raw`第一步（必要性）：设 \(A\) 半正定，\(S\subseteq\{1,\dots,n\}\)，\(A_S\) 为对应的主子矩阵。对任意 \(u\neq0\)，把 \(u\) 按 \(S\) 的位置嵌入 \(\mathbb R^{n}\) 得 \(v\neq0\)，则 \(u^{T}A_Su=v^{T}Av\ge0\)，故 \(A_S\) 半正定，从而 \(|A_S|\ge0\)。
第二步（充分性）：设 \(A\) 的所有主子式非负。对 \(\varepsilon>0\)，按行列式的多重线性展开，\((A+\varepsilon I)_S\) 的行列式为 \(\sum_{T\subseteq S}\varepsilon^{|S|-|T|}|A_T|\)。
第三步：上式每一项都非负，且 \(T=S\) 与 \(T=\varnothing\) 两项给出 \(|A_S|\ge0\) 与 \(\varepsilon^{|S|}>0\)，故 \((A+\varepsilon I)\) 的所有主子式（特别是所有顺序主子式）都严格大于零。
第四步：由顺序主子式全正知 \(A+\varepsilon I\) 正定，于是对任意 \(x\neq0\) 有 \(x^{T}(A+\varepsilon I)x>0\)；令 \(\varepsilon\to0^{+}\) 得 \(x^{T}Ax\ge0\)，即 \(A\) 半正定。
第五步（反例）：\(A=\operatorname{diag}(0,-1)\) 的一阶顺序主子式为 \(0\)，二阶顺序主子式为 \(|A|=0\)，均非负，但 \(A\) 有负特征值 \(-1\)，不是半正定矩阵；问题出在它的一阶主子式 \(a_{22}=-1<0\) 被漏掉了。` },

{ id:'LA07-27', ch:7, type:'证明', diff:5, tags:'正定 C转置C分解 谱分解',
  q: String.raw`设 \(A\) 为 \(n\) 阶实对称矩阵。证明：\(A\) 正定当且仅当存在可逆实矩阵 \(C\) 使 \(A=C^{T}C\)。`,
  a: String.raw`结论成立；此时 \(C\) 不唯一，例如 \(C=\Lambda^{\frac12}Q^{T}\) 或 Cholesky 因子均可。`,
  sol: String.raw`第一步（充分性）：若 \(A=C^{T}C\) 且 \(C\) 可逆，则 \(A^{T}=C^{T}C=A\) 实对称；对 \(x\neq0\)，\(Cx\neq0\)，故 \(x^{T}Ax=(Cx)^{T}(Cx)=\|Cx\|^{2}>0\)，即 \(A\) 正定。
第二步（必要性）：\(A\) 实对称，存在正交矩阵 \(Q\) 使 \(A=Q\Lambda Q^{T}\)，\(\Lambda=\operatorname{diag}(\lambda_1,\dots,\lambda_n)\)，且正定性给出 \(\lambda_i>0\)。
第三步：令 \(C=\Lambda^{\frac12}Q^{T}\)，其中 \(\Lambda^{\frac12}=\operatorname{diag}(\sqrt{\lambda_1},\dots,\sqrt{\lambda_n})\)，则 \(C\) 可逆且 \(C^{T}C=Q\Lambda^{\frac12}\Lambda^{\frac12}Q^{T}=Q\Lambda Q^{T}=A\)。
第四步：也可取 \(C\) 为对角元全正的上三角矩阵（Cholesky 分解），说明这样的 \(C\) 不唯一；但对角元全正的上三角解唯一。
第五步：该结论把「正定」转化为「\(A\) 是某个可逆矩阵的 Gram 矩阵」，是判定正定与构造合同变换的常用工具。` },

{ id:'LA07-28', ch:7, type:'证明', diff:4, tags:'正定 逆矩阵 幂 伴随矩阵 特征值',
  q: String.raw`设 \(A\) 为 \(n\) 阶实正定矩阵，\(k\) 为正整数。证明 \(A^{-1}\)、\(A^{k}\) 与 \(A^{*}\)（\(A\) 的伴随矩阵）都是正定矩阵。`,
  a: String.raw`三者的特征值分别为 \(\frac{1}{\lambda_i}\)、\(\lambda_i^{k}\)、\(\frac{|A|}{\lambda_i}\)，均大于零，且都实对称，故都正定。`,
  sol: String.raw`第一步：\(A\) 实对称且特征值 \(\lambda_1,\dots,\lambda_n\) 全为正。
第二步：\(A^{-1}\) 实对称，特征值为 \(\lambda_i^{-1}>0\)，故 \(A^{-1}\) 正定。
第三步：\(A^{k}\) 实对称（\(A\) 的多项式），特征值为 \(\lambda_i^{k}>0\)，故 \(A^{k}\) 正定。
第四步：\(A^{*}=|A|A^{-1}\)，由 \(|A|=\prod\lambda_i>0\) 知它实对称且特征值为 \(|A|/\lambda_i>0\)，故 \(A^{*}\) 正定。
第五步：更一般地，若 \(g(t)\) 在 \(A\) 的谱上取正值，则 \(g(A)\) 正定；这里分别取 \(g(t)=t^{-1},t^{k},|A|t^{-1}\)。` },

{ id:'LA07-29', ch:7, type:'证明', diff:5, tags:'分块矩阵 正定 对角块 反例',
  q: String.raw`设 \(M=\begin{pmatrix}A&B\\B^{T}&D\end{pmatrix}\) 为实对称分块矩阵，其中 \(A\) 为 \(m\) 阶、\(D\) 为 \(k\) 阶。(1) 证明：若 \(M\) 正定，则 \(A\) 与 \(D\) 都正定；(2) 举例说明 \(A\)、\(D\) 都正定时 \(M\) 未必正定。`,
  a: String.raw`(1) 成立；(2) 反例 \(A=D=I_2,\ B=2I_2\)，此时 \(M\) 有负特征值 \(-1\)，不是正定矩阵。`,
  sol: String.raw`第一步：设 \(M\) 正定。对任意 \(u\neq0\)，取 \(x=(u^{T},0^{T})^{T}\neq0\)，则 \(x^{T}Mx=u^{T}Au>0\)，故 \(A\) 正定；同理取 \(x=(0^{T},v^{T})^{T}\) 得 \(D\) 正定。
第二步：反之不成立。取 \(A=D=I_2,\ B=2I_2\)，则 \(M=\begin{pmatrix}1&0&2&0\\0&1&0&2\\2&0&1&0\\0&2&0&1\end{pmatrix}\)。
第三步：把 \(M\) 按 \(2\times2\) 分块看作 \(\begin{pmatrix}1&2\\2&1\end{pmatrix}\otimes I_2\)，而 \(\begin{pmatrix}1&2\\2&1\end{pmatrix}\) 的特征值为 \(3,-1\)。
第四步：故 \(M\) 的特征值为 \(3,3,-1,-1\)，既不正定也不半正定；这说明对角块正定只是分块正定的必要条件，还需交叉块 \(B\) 满足 Schur 补条件。` },

{ id:'LA07-30', ch:7, type:'证明', diff:4, tags:'分块行列式 Schur补 合同变换',
  q: String.raw`设 \(A\) 为 \(m\) 阶可逆矩阵，\(B\) 为 \(m\times k\) 矩阵，\(D\) 为 \(k\) 阶矩阵，\(M=\begin{pmatrix}A&B\\B^{T}&D\end{pmatrix}\)。证明 \(|M|=|A|\cdot|D-B^{T}A^{-1}B|\)。`,
  a: String.raw`恒等式成立，其中 \(D-B^{T}A^{-1}B\) 为 Schur 补。`,
  sol: String.raw`第一步：取 \(P=\begin{pmatrix}I_m&-A^{-1}B\\0&I_k\end{pmatrix}\)，则 \(|P|=1\)，\(P\) 可逆，且 \(P^{-1}=\begin{pmatrix}I_m&A^{-1}B\\0&I_k\end{pmatrix}\)。
第二步：计算 \(MP=\begin{pmatrix}A&B\\B^{T}&D\end{pmatrix}\begin{pmatrix}I&-A^{-1}B\\0&I\end{pmatrix}=\begin{pmatrix}A&0\\B^{T}&D-B^{T}A^{-1}B\end{pmatrix}\)。
第三步：再左乘 \(P^{-1}\) 得 \(P^{-1}MP=\begin{pmatrix}A&0\\0&D-B^{T}A^{-1}B\end{pmatrix}\)，这是分块对角矩阵。
第四步：两边取行列式，注意 \(|P^{-1}|=|P|=1\)，故 \(|M|=|P^{-1}MP|=|A|\cdot|D-B^{T}A^{-1}B|\)。
第五步：该式说明 Schur 补的行列式等于 \(|M|/|A|\)，也是后面判定分块正定与 Fischer 不等式的出发点。` },

{ id:'LA07-31', ch:7, type:'计算', diff:4, tags:'加边矩阵 Schur补 正定 行列式',
  q: String.raw`设 \(A=\begin{pmatrix}2&1\\1&2\end{pmatrix}\)，\(b=(1,1)^{T}\)，\(M=\begin{pmatrix}A&b\\b^{T}&c\end{pmatrix}\)。(1) 求 \(c\) 的范围使 \(M\) 正定；(2) 求 \(|M|\) 关于 \(c\) 的表达式，并验证 \(c\) 取临界值时 \(|M|=0\)。`,
  a: String.raw`(1) \(c>\frac23\)；(2) \(|M|=3c-2\)，当 \(c=\frac23\) 时 \(|M|=0\)。`,
  sol: String.raw`第一步：\(A\) 的顺序主子式为 \(2,3\)，正定，故 \(A^{-1}=\frac13\begin{pmatrix}2&-1\\-1&2\end{pmatrix}\)。
第二步：计算 \(b^{T}A^{-1}b=\frac13(2-1-1+2)=\frac23\)。
第三步：由分块正定判据（Schur 补），\(M\) 正定当且仅当 \(A\) 正定且 \(c-b^{T}A^{-1}b>0\)，即 \(c>\frac23\)。
第四步：由分块行列式公式 \(|M|=|A|(c-b^{T}A^{-1}b)=3\left(c-\frac23\right)=3c-2\)。
第五步：直接按第三行展开也可验证：\(|M|=-1-1+3c=3c-2\)；当 \(c=\frac23\) 时 \(|M|=0\)，此时 \(M\) 半正定、秩为 \(2\)。` },

{ id:'LA07-32', ch:7, type:'计算', diff:4, tags:'分块矩阵 惯性指数 奇异值 行列式',
  q: String.raw`设 \(B=\begin{pmatrix}1&2\\3&4\end{pmatrix}\)，\(M=\begin{pmatrix}0&B\\B^{T}&0\end{pmatrix}\) 为 \(4\) 阶实对称矩阵。求 \(M\) 的秩、正、负惯性指数与行列式。`,
  a: String.raw`\(\operatorname{rank}M=4\)，\(p=2,\ q=2\)，\(|M|=4\)。`,
  sol: String.raw`第一步：设 \(B=U\Sigma V^{T}\) 为奇异值分解，\(\Sigma=\operatorname{diag}(\sigma_1,\sigma_2)\)，\(\sigma_1,\sigma_2>0\)（因 \(|B|=-2\neq0\)）。
第二步：取 \(P=\frac{1}{\sqrt2}\begin{pmatrix}U&U\\V&-V\end{pmatrix}\)，可验证 \(P\) 正交，且 \(P^{T}MP=\operatorname{diag}(\sigma_1,\sigma_2,-\sigma_1,-\sigma_2)\)。
第三步：故 \(M\) 的特征值为 \(\pm\sigma_1,\pm\sigma_2\)，两正两负，\(p=q=2\)，秩为 \(4\)。
第四步：\(|M|=\sigma_1\sigma_2(-\sigma_1)(-\sigma_2)=(\sigma_1\sigma_2)^{2}=|B|^{2}=4\)；也可用分块行列式公式 \(|M|=(-1)^{2}|B|^{2}=4\)。
第五步：一般地，\(\begin{pmatrix}0&B\\B^{T}&0\end{pmatrix}\) 的惯性指数由 \(B\) 的秩决定：\(p=q=\operatorname{rank}B\)，零特征值个数为 \(2(n-\operatorname{rank}B)\)。` },

{ id:'LA07-33', ch:7, type:'计算', diff:4, tags:'正交变换 谱分解 特征向量 全1矩阵',
  q: String.raw`设 \(A=\begin{pmatrix}0&1&1\\1&0&1\\1&1&0\end{pmatrix}\)。求正交矩阵 \(Q\) 使 \(Q^{T}AQ\) 为对角矩阵，写出对角元，并写出 \(A\) 的谱分解。`,
  a: String.raw`取 \(Q=\begin{pmatrix}\frac{1}{\sqrt3}&\frac{1}{\sqrt2}&\frac{1}{\sqrt6}\\\frac{1}{\sqrt3}&-\frac{1}{\sqrt2}&\frac{1}{\sqrt6}\\\frac{1}{\sqrt3}&0&-\frac{2}{\sqrt6}\end{pmatrix}\)，则 \(Q^{T}AQ=\operatorname{diag}(2,-1,-1)\)；谱分解 \(A=2\xi_1\xi_1^{T}-\xi_2\xi_2^{T}-\xi_3\xi_3^{T}\)。`,
  sol: String.raw`第一步：\(A=J-I\)，其中 \(J\) 为三阶全 \(1\) 矩阵；\(J\) 的特征值为 \(3,0,0\)，故 \(A\) 的特征值为 \(2,-1,-1\)。
第二步：\(\lambda=2\) 的特征向量满足 \(x_1=x_2=x_3\)，取单位向量 \(\xi_1=\frac{1}{\sqrt3}(1,1,1)^{T}\)。
第三步：\(\lambda=-1\) 的特征子空间是 \(x_1+x_2+x_3=0\)，在其上取标准正交基 \(\xi_2=\frac{1}{\sqrt2}(1,-1,0)^{T}\)，\(\xi_3=\frac{1}{\sqrt6}(1,1,-2)^{T}\)。
第四步：令 \(Q=(\xi_1,\xi_2,\xi_3)\)，则 \(Q^{T}Q=I\) 且 \(Q^{T}AQ=\operatorname{diag}(2,-1,-1)\)；直接验算可知 \(Q\) 的各列确为单位正交向量。
第五步：谱分解为 \(A=2\xi_1\xi_1^{T}+(-1)\xi_2\xi_2^{T}+(-1)\xi_3\xi_3^{T}\)，即 \(A=\frac23J-(I-\frac13J)=J-I\)，与原始表达式一致。` },

{ id:'LA07-34', ch:7, type:'计算', diff:4, tags:'合同 相似 半正定 反例',
  q: String.raw`设 \(A=\begin{pmatrix}1&1\\1&1\end{pmatrix}\)，\(B=\begin{pmatrix}1&0\\0&0\end{pmatrix}\)。(1) 判断 \(A\) 与 \(B\) 是否合同、是否相似，说明理由；(2) 求可逆矩阵 \(C\) 使 \(C^{T}BC=A\)。`,
  a: String.raw`\(A\) 与 \(B\) 合同但不相似；取 \(C=\begin{pmatrix}1&1\\0&1\end{pmatrix}\) 即有 \(C^{T}BC=A\)。`,
  sol: String.raw`第一步：\(A,B\) 都实对称半正定，秩都为 \(1\)，正惯性指数都为 \(1\)、负惯性指数都为 \(0\)，故由惯性定理它们合同。
第二步：相似要求特征值相同。\(A\) 的特征值为 \(2,0\)，\(B\) 的特征值为 \(1,0\)，故 \(A\) 与 \(B\) 不相似（相似矩阵的迹也必须相同，而 \(\operatorname{tr}A=2\neq1=\operatorname{tr}B\)）。
第三步：求 \(C\)：注意 \(C^{T}BC=(C^{T}e_1)(e_1^{T}C)=aa^{T}\)，其中 \(a=C^{T}e_1\) 是 \(C\) 的第一行转置，故只需 \(C\) 的第一行为 \((1,1)\)。
第四步：取第二行为 \((0,1)\)，得 \(C=\begin{pmatrix}1&1\\0&1\end{pmatrix}\)，\(|C|=1\neq0\)，且 \(C^{T}BC=\begin{pmatrix}1\\1\end{pmatrix}(1,1)=\begin{pmatrix}1&1\\1&1\end{pmatrix}=A\)。
第五步：本例说明「合同」只保持秩与惯性指数，不保持特征值；因此合同矩阵未必相似。` },

{ id:'LA07-35', ch:7, type:'证明', diff:5, tags:'惯性定理 合同 符号差 负矩阵',
  q: String.raw`设 \(A\) 为 \(n\) 阶实对称矩阵，正、负惯性指数分别为 \(p,q\)。证明：\(A\) 与 \(-A\) 合同当且仅当 \(p=q\)。`,
  a: String.raw`结论成立；此时 \(A\) 的符号差 \(p-q=0\)。`,
  sol: String.raw`第一步：\(-A\) 仍是实对称矩阵，且对任意 \(x\) 有 \(x^{T}(-A)x=-(x^{T}Ax)\)，故 \(A\) 的正惯性子空间恰是 \(-A\) 的负惯性子空间，反之亦然；于是 \(-A\) 的惯性指数为 \((q,p)\)。
第二步：由惯性定理，两个实对称矩阵合同当且仅当秩相同且正惯性指数相同。
第三步：\(A\) 的正惯性指数为 \(p\)，\(-A\) 的正惯性指数为 \(q\)，秩都为 \(p+q\)（相同），故 \(A\) 与 \(-A\) 合同等价于 \(p=q\)。
第四步：当 \(p=q\) 时，\(A\) 与 \(-A\) 都合同于 \(\operatorname{diag}(I_p,-I_p)\)，由合同的传递性它们合同。
第五步：当 \(p\neq q\) 时正惯性指数不同，故不合同；例如 \(A=\operatorname{diag}(1,1,-1)\) 的 \(p=2,q=1\)，而 \(-A=\operatorname{diag}(-1,-1,1)\) 的 \(p=1,q=2\)，二者不合同。` },

{ id:'LA07-36', ch:7, type:'计算', diff:5, tags:'条件极值 子空间限制 Rayleigh商',
  q: String.raw`求 \(f=x_1^{2}+2x_2^{2}+3x_3^{2}\) 在条件 \(x_1+x_2+x_3=0,\ x_1^{2}+x_2^{2}+x_3^{2}=1\) 下的最大值与最小值。`,
  a: String.raw`最大值 \(2+\frac{\sqrt3}{3}\)，最小值 \(2-\frac{\sqrt3}{3}\)。`,
  sol: String.raw`第一步：记 \(A=\operatorname{diag}(1,2,3)\)，线性条件确定子空间 \(W=\{x\mid x_1+x_2+x_3=0\}\)，\(\dim W=2\)。
第二步：取 \(W\) 的标准正交基 \(u_1=\frac{1}{\sqrt2}(1,-1,0)^{T},\ u_2=\frac{1}{\sqrt6}(1,1,-2)^{T}\)，令 \(x=y_1u_1+y_2u_2\)，球面条件化为 \(y_1^{2}+y_2^{2}=1\)。
第三步：计算 \(u_1^{T}Au_1=\frac32\)，\(u_2^{T}Au_2=\frac{1+2+12}{6}=\frac52\)，\(u_1^{T}Au_2=\frac{1-2}{2\sqrt3}=-\frac{\sqrt3}{6}\)，故限制后的矩阵为 \(M=\begin{pmatrix}\frac32&-\frac{\sqrt3}{6}\\-\frac{\sqrt3}{6}&\frac52\end{pmatrix}\)。
第四步：\(\operatorname{tr}M=4\)，\(|M|=\frac{15}{4}-\frac{3}{36}=\frac{15}{4}-\frac{1}{12}=\frac{11}{3}\)，特征值满足 \(\lambda^{2}-4\lambda+\frac{11}{3}=0\)，解得 \(\lambda=2\pm\frac{\sqrt3}{3}\)。
第五步：在 \(y_1^{2}+y_2^{2}=1\) 上 \(f\) 的取值介于 \(M\) 的两个特征值之间，故最大值 \(2+\frac{\sqrt3}{3}\)，最小值 \(2-\frac{\sqrt3}{3}\)。` },

{ id:'LA07-37', ch:7, type:'证明', diff:5, tags:'Rayleigh商 特征值 加权平均 连续性',
  q: String.raw`设 \(A\) 为 \(n\) 阶实对称矩阵，特征值 \(\lambda_1\le\lambda_2\le\cdots\le\lambda_n\)。对 \(x\neq0\) 记 \(R(x)=\frac{x^{T}Ax}{x^{T}x}\)。证明：(1) \(\lambda_1\le R(x)\le\lambda_n\)；(2) 当 \(x\) 取遍所有非零向量时 \(R(x)\) 取遍区间 \([\lambda_1,\lambda_n]\)；(3) \(R(x)=\lambda_n\) 当且仅当 \(x\) 是 \(A\) 的属于 \(\lambda_n\) 的特征向量。`,
  a: String.raw`三条结论都成立。`,
  sol: String.raw`第一步：\(A\) 实对称，存在正交矩阵 \(Q\) 使 \(A=Q\Lambda Q^{T}\)，\(\Lambda=\operatorname{diag}(\lambda_1,\dots,\lambda_n)\)；令 \(y=Q^{T}x\)，则 \(R(x)=\frac{\sum\lambda_i y_i^{2}}{\sum y_i^{2}}\)。
第二步：这是 \(\lambda_1,\dots,\lambda_n\) 以 \(y_i^{2}/\sum y_j^{2}\) 为权的加权平均，故 \(\lambda_1\le R(x)\le\lambda_n\)。
第三步：取 \(x\) 为 \(\lambda_1\)、\(\lambda_n\) 对应的单位特征向量，得 \(R=\lambda_1\) 与 \(R=\lambda_n\)；又单位球面连通、\(R\) 在其上连续，故 \(R\) 的像为连通区间，必为 \([\lambda_1,\lambda_n]\)（也可用 \(x(t)=(1-t)\xi_1+t\xi_n\) 直接构造）。
第四步：若 \(R(x)=\lambda_n\)，则加权平均取到最大值，故所有权 \(\lambda_i<\lambda_n\) 的分量 \(y_i=0\)，即 \(x\) 落在 \(\lambda_n\) 的特征子空间中。
第五步：反之若 \(x\) 是 \(\lambda_n\) 的特征向量，则 \(x^{T}Ax=\lambda_n x^{T}x\)，\(R(x)=\lambda_n\)；同理 \(R(x)=\lambda_1\) 当且仅当 \(x\) 是 \(\lambda_1\) 的特征向量。` },

{ id:'LA07-38', ch:7, type:'计算', diff:5, tags:'正交变换 全1矩阵 球面最值 特征值',
  q: String.raw`设 \(f=x_1^{2}+x_2^{2}+x_3^{2}+4(x_1x_2+x_1x_3+x_2x_3)\)。(1) 求正交变换把 \(f\) 化为标准形；(2) 求 \(f\) 在单位球面 \(x_1^{2}+x_2^{2}+x_3^{2}=1\) 上的最大值与最小值，并指出取到最小值的点集。`,
  a: String.raw`标准形 \(9y_1^{2}-3y_2^{2}-3y_3^{2}\)；最大值 \(9\)，在 \(x=\pm\frac{1}{\sqrt3}(1,1,1)^{T}\) 处取得；最小值 \(-3\)，在平面 \(x_1+x_2+x_3=0\) 与球面的交线（一个圆）上处处取得。`,
  sol: String.raw`第一步：二次型矩阵 \(A=I+4(J-I)=4J-3I\)，其中 \(J\) 为三阶全 \(1\) 矩阵。
第二步：\(J\) 的特征值为 \(3,0,0\)，故 \(A\) 的特征值为 \(4\cdot3-3=9\)（一重，特征向量 \((1,1,1)^{T}\)）与 \(4\cdot0-3=-3\)（二重，特征子空间 \(x_1+x_2+x_3=0\)）。
第三步：取 \(Q\) 的列为 \(\frac{1}{\sqrt3}(1,1,1)^{T},\ \frac{1}{\sqrt2}(1,-1,0)^{T},\ \frac{1}{\sqrt6}(1,1,-2)^{T}\)，作 \(x=Qy\) 得 \(f=9y_1^{2}-3y_2^{2}-3y_3^{2}\)。
第四步：球面条件化为 \(y_1^{2}+y_2^{2}+y_3^{2}=1\)，故 \(-3\le f\le9\)。
第五步：最大值在 \(y=\pm e_1\) 取到，即 \(x=\pm\frac{1}{\sqrt3}(1,1,1)^{T}\)；最小值在 \(y_1=0\) 时取到，即整个圆 \(\{x\mid x_1+x_2+x_3=0,\ \|x\|=1\}\)，此时 \(f=-3\)。` },

{ id:'LA07-39', ch:7, type:'计算', diff:5, tags:'广义特征值 条件极值 正定二次型 椭球',
  q: String.raw`设 \(A=\begin{pmatrix}2&1&0\\1&2&0\\0&0&3\end{pmatrix}\)，\(B=\begin{pmatrix}1&0&0\\0&1&0\\0&0&2\end{pmatrix}\)。求 \(f(x)=x^{T}Ax\) 在条件 \(x^{T}Bx=1\) 下的最大值与最小值，并指出取到最大值的点。`,
  a: String.raw`最大值 \(3\)，在 \(x=\pm\frac{1}{\sqrt2}(1,1,0)^{T}\) 处取得；最小值 \(1\)，在 \(x=\pm\frac{1}{\sqrt2}(1,-1,0)^{T}\) 处取得。`,
  sol: String.raw`第一步：\(B\) 的顺序主子式为 \(1,1,2\)，全正，故 \(B\) 正定，条件 \(x^{T}Bx=1\) 是有界闭椭球面，最值必存在。
第二步：令 \(u=B^{\frac12}x\)，则条件化为 \(u^{T}u=1\)，且 \(f=u^{T}B^{-\frac12}AB^{-\frac12}u\)，故最值等于 \(B^{-\frac12}AB^{-\frac12}\) 的特征值，即广义特征值问题 \(\det(A-\lambda B)=0\) 的根。
第三步：计算 \(\det(A-\lambda B)=\begin{vmatrix}2-\lambda&1&0\\1&2-\lambda&0\\0&0&3-2\lambda\end{vmatrix}=-(\lambda-3)(\lambda-1)(2\lambda-3)\)，得 \(\lambda=3,\ \frac32,\ 1\)。
第四步：最大值为 \(3\)，对应 \((A-3B)x=0\)，即 \(x_1=x_2,\ x_3=0\)，单位化解为 \(x=\pm\frac{1}{\sqrt2}(1,1,0)^{T}\)，此时 \(x^{T}Bx=1\) 满足。
第五步：最小值为 \(1\)，对应 \((A-B)x=0\)，即 \(x_1+x_2=0,\ x_3=0\)，得 \(x=\pm\frac{1}{\sqrt2}(1,-1,0)^{T}\)；中间值 \(\frac32\) 不是最值。` },

{ id:'LA07-40', ch:7, type:'证明', diff:5, tags:'正定矩阵乘积 交换性 相似',
  q: String.raw`设 \(A,B\) 都是 \(n\) 阶实正定矩阵。证明：\(AB\) 正定当且仅当 \(AB=BA\)。`,
  a: String.raw`结论成立。`,
  sol: String.raw`第一步（必要性）：若 \(AB\) 正定，则 \(AB\) 是实对称矩阵，故 \(AB=(AB)^{T}=B^{T}A^{T}=BA\)。
第二步（充分性）：设 \(AB=BA\)，则 \((AB)^{T}=B^{T}A^{T}=BA=AB\)，即 \(AB\) 实对称。
第三步：由 \(A\) 正定知 \(A^{\frac12}\) 正定且与 \(A\) 可交换，\(AB=BA\) 又推出 \(B\) 与 \(A^{\frac12}\) 也可交换（\(B\) 与 \(A\) 的多项式可交换）。
第四步：于是 \(AB=A^{-\frac12}(A^{\frac12}BA^{\frac12})A^{\frac12}\)，即 \(AB\) 与 \(A^{\frac12}BA^{\frac12}\) 相似；后者是正定矩阵（\(B\) 正定，\(A^{\frac12}\) 可逆）。
第五步：相似矩阵特征值相同，故 \(AB\) 的特征值全为正；结合第二步的实对称性，\(AB\) 正定。
第六步：注意 \(AB\) 一般不是对称矩阵；例如 \(A=\begin{pmatrix}2&0\\0&1\end{pmatrix},\ B=\begin{pmatrix}1&1\\1&2\end{pmatrix}\) 时 \(AB=\begin{pmatrix}2&2\\1&2\end{pmatrix}\) 不对称，从而不正定，此时 \(AB\neq BA\)。` },

{ id:'LA07-41', ch:7, type:'证明', diff:4, tags:'相似 特征值 迹 行列式',
  q: String.raw`设 \(A,B\) 为 \(n\) 阶方阵且 \(A\) 可逆。证明 \(AB\) 与 \(BA\) 相似，从而它们有相同的特征多项式、迹与行列式。`,
  a: String.raw`\(AB=A(BA)A^{-1}\)，故 \(AB\) 与 \(BA\) 相似。`,
  sol: String.raw`第一步：由 \(A\) 可逆，\(A^{-1}\) 存在，直接计算 \(A(BA)A^{-1}=A B A A^{-1}=AB\)。
第二步：按相似的定义，存在可逆矩阵 \(P=A\) 使 \(P^{-1}(BA)P=AB\)，故 \(BA\) 与 \(AB\) 相似。
第三步：相似矩阵有相同的特征多项式，从而特征值（含重数）、迹与行列式都相同。
第四步：当 \(A\) 不可逆时结论仍成立（可用连续性论证：\(A+tI\) 对充分小的 \(t\) 可逆，令 \(t\to0\)），但此时不能直接用上述相似变换。` },

{ id:'LA07-42', ch:7, type:'计算', diff:5, tags:'平方和分解 秩 正定 配方法',
  q: String.raw`将二次型 \(f=x_1^{2}+2x_2^{2}+5x_3^{2}+2x_1x_2+2x_2x_3\) 表示为独立线性型的平方和，并说明平方项的个数不能减少。`,
  a: String.raw`\(f=(x_1+x_2)^{2}+(x_2+x_3)^{2}+4x_3^{2}\)，平方项个数 \(3\) 已是最少。`,
  sol: String.raw`第一步：先按 \(x_1\) 配方：\(x_1^{2}+2x_1x_2=(x_1+x_2)^{2}-x_2^{2}\)，故 \(f=(x_1+x_2)^{2}+x_2^{2}+2x_2x_3+5x_3^{2}\)。
第二步：再按 \(x_2\) 配方：\(x_2^{2}+2x_2x_3=(x_2+x_3)^{2}-x_3^{2}\)，故 \(f=(x_1+x_2)^{2}+(x_2+x_3)^{2}+4x_3^{2}\)。
第三步：三个线性型 \(x_1+x_2,\ x_2+x_3,\ x_3\) 的系数矩阵行列式为 \(1\neq0\)，故它们相互独立，平方项个数为 \(3\)。
第四步：\(f\) 的矩阵 \(A=\begin{pmatrix}1&1&0\\1&2&1\\0&1&5\end{pmatrix}\)，顺序主子式为 \(1,1,4\)，全正，故 \(A\) 正定、秩为 \(3\)。
第五步：若 \(f=\sum_{i=1}^{r}l_i^{2}\)，设 \(L\) 为以 \(l_i\) 为行的 \(r\times3\) 矩阵，则 \(A=L^{T}L\)，\(\operatorname{rank}A\le r\)，故 \(r\ge\operatorname{rank}A=3\)，平方项不能少于 \(3\) 个。` },

{ id:'LA07-43', ch:7, type:'证明', diff:5, tags:'半正定 幂等 正交投影 谱分解',
  q: String.raw`设 \(A\) 为 \(n\) 阶实对称矩阵。证明：\(A\) 半正定且 \(A^{2}=A\) 当且仅当存在正交矩阵 \(Q\) 与整数 \(r\ (0\le r\le n)\) 使 \(A=Q\operatorname{diag}(I_r,0)Q^{T}\)。`,
  a: String.raw`结论成立，即半正定幂等矩阵恰为正交投影矩阵。`,
  sol: String.raw`第一步（必要性）：\(A\) 实对称，存在正交矩阵 \(Q\) 使 \(A=Q\Lambda Q^{T}\)，\(\Lambda=\operatorname{diag}(\lambda_1,\dots,\lambda_n)\)。
第二步：由 \(A^{2}=A\) 得 \(Q\Lambda^{2}Q^{T}=Q\Lambda Q^{T}\)，即 \(\lambda_i^{2}=\lambda_i\)，故每个 \(\lambda_i\in\{0,1\}\)。
第三步：半正定性给出 \(\lambda_i\ge0\)，与 \(\lambda_i\in\{0,1\}\) 相容；把等于 \(1\) 的特征值排在前面，即得 \(A=Q\operatorname{diag}(I_r,0)Q^{T}\)。
第四步（充分性）：设 \(A=Q\operatorname{diag}(I_r,0)Q^{T}\)。则 \(A^{T}=A\)，\(A^{2}=Q\operatorname{diag}(I_r,0)Q^{T}=A\)，且对任意 \(x\)，令 \(y=Q^{T}x\)，\(x^{T}Ax=y_1^{2}+\cdots+y_r^{2}\ge0\)。
第五步：故 \(A\) 半正定且幂等；几何上 \(A\) 是到 \(r\) 维子空间 \(\operatorname{Im}A\) 的正交投影。` },

{ id:'LA07-44', ch:7, type:'证明', diff:4, tags:'半正定 迹 特征值',
  q: String.raw`设 \(A\) 为 \(n\) 阶实半正定矩阵，且 \(\operatorname{tr}A=0\)。证明 \(A=0\)。`,
  a: String.raw`\(A=0\)。`,
  sol: String.raw`第一步：\(A\) 实对称，存在正交矩阵 \(Q\) 使 \(A=Q\Lambda Q^{T}\)，\(\Lambda=\operatorname{diag}(\lambda_1,\dots,\lambda_n)\)。
第二步：半正定性给出 \(\lambda_i\ge0\ (i=1,\dots,n)\)。
第三步：\(\operatorname{tr}A=\sum_{i=1}^{n}\lambda_i=0\)，而每项非负，故 \(\lambda_1=\cdots=\lambda_n=0\)。
第四步：于是 \(\Lambda=0\)，\(A=Q\cdot0\cdot Q^{T}=0\)。
第五步：该结论常用来判断「半正定矩阵的迹为零则它必为零矩阵」，也是证明半正定矩阵等式（如 \(A^{2}=0\Rightarrow A=0\)）的常用引理。` },

{ id:'LA07-45', ch:7, type:'计算', diff:5, tags:'二次曲面 椭球 半轴 体积 特征值',
  q: String.raw`方程 \(x_1^{2}+2x_2^{2}+3x_3^{2}+2x_1x_2+2x_2x_3=1\) 表示什么曲面？求它的三条半轴长与所围立体的体积。`,
  a: String.raw`椭球面；半轴长为 \(\frac{1}{\sqrt{2+\sqrt3}},\ \frac{1}{\sqrt2},\ \frac{1}{\sqrt{2-\sqrt3}}\)，体积为 \(\frac{2\sqrt2}{3}\pi\)。`,
  sol: String.raw`第一步：二次型矩阵 \(A=\begin{pmatrix}1&1&0\\1&2&1\\0&1&3\end{pmatrix}\)，顺序主子式为 \(1,1,2\)，全正，故 \(A\) 正定，曲面是有界椭球面。
第二步：求特征值：\(|\lambda I-A|=\lambda^{3}-6\lambda^{2}+9\lambda-2=(\lambda-2)(\lambda^{2}-4\lambda+1)\)，故特征值为 \(2,\ 2+\sqrt3,\ 2-\sqrt3\)。
第三步：作正交变换 \(x=Qy\) 化方程为 \((2+\sqrt3)y_1^{2}+2y_2^{2}+(2-\sqrt3)y_3^{2}=1\)。
第四步：半轴长分别为 \(\frac{1}{\sqrt{2+\sqrt3}},\ \frac{1}{\sqrt2},\ \frac{1}{\sqrt{2-\sqrt3}}\)，其中 \(\frac{1}{\sqrt{2-\sqrt3}}=\sqrt{2+\sqrt3}\)。
第五步：正交变换不改变体积，故 \(V=\frac43\pi\cdot\frac{1}{\sqrt{(2+\sqrt3)\cdot2\cdot(2-\sqrt3)}}=\frac43\pi\cdot\frac{1}{\sqrt2}=\frac{2\sqrt2}{3}\pi\)。` },

{ id:'LA07-46', ch:7, type:'计算', diff:5, tags:'广义特征值 条件极值 椭球 正定',
  q: String.raw`设 \(A=\begin{pmatrix}2&1\\1&2\end{pmatrix}\)，\(B=\begin{pmatrix}3&1\\1&3\end{pmatrix}\)。求 \(x^{T}Ax\) 在条件 \(x^{T}Bx=1\) 下的最大值与最小值。`,
  a: String.raw`最大值 \(\frac34\)，最小值 \(\frac12\)。`,
  sol: String.raw`第一步：\(B\) 的顺序主子式为 \(3,8\)，正定，故条件 \(x^{T}Bx=1\) 是椭圆，最值存在。
第二步：令 \(u=B^{\frac12}x\)，条件化为 \(u^{T}u=1\)，\(x^{T}Ax=u^{T}B^{-\frac12}AB^{-\frac12}u\)，故最值为广义特征值 \(\det(A-\lambda B)=0\) 的根。
第三步：\(\det(A-\lambda B)=\begin{vmatrix}2-3\lambda&1-\lambda\\1-\lambda&2-3\lambda\end{vmatrix}=(2-3\lambda)^{2}-(1-\lambda)^{2}=(1-2\lambda)(3-4\lambda)\)。
第四步：得 \(\lambda=\frac12\) 与 \(\lambda=\frac34\)，二者都是正数，故最大值 \(\frac34\)，最小值 \(\frac12\)。
第五步：最值分别在 \((A-\lambda B)x=0\) 的非零解处取到；由于 \(B\) 正定，这些解经单位化后确实满足 \(x^{T}Bx=1\)。` },

{ id:'LA07-47', ch:7, type:'证明', diff:5, tags:'Hadamard不等式 Gram矩阵 行向量 正交',
  q: String.raw`设 \(A\) 为 \(n\) 阶实方阵，\(a_1,\dots,a_n\) 为其行向量。证明 \(|\det A|\le\|a_1\|\cdot\|a_2\|\cdots\|a_n\|\)，并给出等号成立的条件。`,
  a: String.raw`不等式成立；等号成立当且仅当 \(a_1,\dots,a_n\) 两两正交，或有某个 \(a_i=0\)（此时两边都为 \(0\)）。`,
  sol: String.raw`第一步：若 \(a_1,\dots,a_n\) 线性相关，则 \(\det A=0\)，而不等式右边非负，结论成立；下面设它们线性无关，此时 \(\det A\neq0\)。
第二步：令 \(G=AA^{T}\)，则 \(G_{ij}=a_i^{T}a_j\) 是 Gram 矩阵，\(G\) 正定，且 \(|G|=|A|^{2}\)。
第三步：对正定矩阵 \(G\) 用 Hadamard 不等式（由 Cholesky 分解 \(G=C^{T}C\) 可得）\(|G|\le G_{11}G_{22}\cdots G_{nn}\)。
第四步：注意 \(G_{ii}=a_i^{T}a_i=\|a_i\|^{2}\)，故 \(|\det A|^{2}=|G|\le\prod\|a_i\|^{2}\)，开方即得 \(|\det A|\le\prod\|a_i\|\)。
第五步：等号成立当且仅当 \(G\) 为对角矩阵（正定矩阵 Hadamard 不等式的取等条件），即 \(a_i^{T}a_j=0\ (i\neq j)\)，也就是各行两两正交。
第六步：若某些 \(a_i=0\)，则 \(\det A=0\)、右边也为 \(0\)，等号同样成立，此时「两两正交」的说法要单独说明。` },

{ id:'LA07-48', ch:7, type:'证明', diff:5, tags:'Minkowski不等式 行列式 均值不等式 正定',
  q: String.raw`设 \(A,B\) 为 \(n\) 阶实正定矩阵。证明 \(|\det(A+B)|^{\frac1n}\ge|\det A|^{\frac1n}+|\det B|^{\frac1n}\)。`,
  a: String.raw`不等式成立，等号当且仅当 \(B=kA\)（\(k>0\)）。`,
  sol: String.raw`第一步：\(A+B=A(I+A^{-1}B)\)，取行列式得 \(|A+B|=|A|\cdot|I+A^{-1}B|\)。
第二步：\(A^{-1}B\) 与 \(A^{-\frac12}BA^{-\frac12}\) 相似，而后者正定，故 \(A^{-1}B\) 的特征值 \(\mu_1,\dots,\mu_n\) 全为正实数，且 \(\prod\mu_i=|A^{-1}B|=\frac{|B|}{|A|}\)。
第三步：\(|I+A^{-1}B|=\prod_{i=1}^{n}(1+\mu_i)\)，由均值不等式 \(\left(\prod(1+\mu_i)\right)^{\frac1n}\ge1+\left(\prod\mu_i\right)^{\frac1n}\)。
第四步：代入得 \(|A+B|^{\frac1n}\ge|A|^{\frac1n}\left(1+\left(\frac{|B|}{|A|}\right)^{\frac1n}\right)=|A|^{\frac1n}+|B|^{\frac1n}\)。
第五步：均值不等式取等当且仅当 \(\mu_1=\cdots=\mu_n=k\)，即 \(A^{-1}B=kI\)，亦即 \(B=kA\)；反之 \(B=kA\) 时两边显然相等。` },

{ id:'LA07-49', ch:7, type:'证明', diff:5, tags:'Fischer不等式 分块半正定 Schur补 行列式',
  q: String.raw`设 \(M=\begin{pmatrix}A&B\\B^{T}&D\end{pmatrix}\) 为 \(n\) 阶实半正定矩阵，其中 \(A\) 为 \(m\) 阶、\(D\) 为 \(k\) 阶。证明 \(|M|\le|A|\cdot|D|\)。`,
  a: String.raw`不等式成立（Fischer 不等式）。`,
  sol: String.raw`第一步：先设 \(A,D\) 都可逆。由 \(M\) 半正定知 \(A,D\) 半正定，加上可逆性得 \(A,D\) 正定。
第二步：对 \(M\) 作合同变换 \(P=\begin{pmatrix}I&-A^{-1}B\\0&I\end{pmatrix}\)，得 \(P^{T}MP=\operatorname{diag}(A,\ D-B^{T}A^{-1}B)\)，故 Schur 补 \(S=D-B^{T}A^{-1}B\) 半正定。
第三步：由 \(S\) 半正定得 \(D-S=B^{T}A^{-1}B\) 半正定，于是 \(D\succeq S\)，从而 \(|D|\ge|S|\)（半正定矩阵的单调性：\(D\succeq S\succeq0\Rightarrow|D|\ge|S|\)）。
第四步：由分块行列式公式 \(|M|=|A||S|\le|A||D|\)，即得结论。
第五步：一般情形（\(A\) 或 \(D\) 奇异）用扰动：对 \(\varepsilon>0\)，\(M+\varepsilon I\) 仍半正定且两个对角块 \(A+\varepsilon I,\ D+\varepsilon I\) 正定，套用上面的结论再令 \(\varepsilon\to0^{+}\)，由行列式的连续性即得 \(|M|\le|A||D|\)。` },

{ id:'LA07-50', ch:7, type:'计算', diff:4, tags:'Cholesky分解 正定 下三角 行列式',
  q: String.raw`设 \(A=\begin{pmatrix}1&2&0\\2&5&3\\0&3&10\end{pmatrix}\)。(1) 证明 \(A\) 正定；(2) 求对角元全正的下三角矩阵 \(C\) 使 \(A=CC^{T}\)；(3) 求 \(|A|\)，并说明这样的 \(C\) 是否唯一。`,
  a: String.raw`\(C=\begin{pmatrix}1&0&0\\2&1&0\\0&3&1\end{pmatrix}\)，\(|A|=1\)；限定对角元全正时 \(C\) 唯一。`,
  sol: String.raw`第一步：顺序主子式为 \(\Delta_1=1,\ \Delta_2=1,\ \Delta_3=1\)，全大于零，故 \(A\) 正定。
第二步：设 \(C=(c_{ij})\) 为下三角且 \(c_{ii}>0\)，则 \(A=CC^{T}\) 的 \((i,j)\) 元为 \(a_{ij}=\sum_{k\le\min(i,j)}c_{ik}c_{jk}\)。
第三步：由 \(a_{11}=c_{11}^{2}=1\) 得 \(c_{11}=1\)；由 \(a_{21}=c_{21}c_{11}=2,\ a_{31}=c_{31}c_{11}=0\) 得 \(c_{21}=2,\ c_{31}=0\)。
第四步：由 \(a_{22}=c_{21}^{2}+c_{22}^{2}=5\) 得 \(c_{22}=1\)；由 \(a_{32}=c_{31}c_{21}+c_{32}c_{22}=3\) 得 \(c_{32}=3\)。
第五步：由 \(a_{33}=c_{31}^{2}+c_{32}^{2}+c_{33}^{2}=10\) 得 \(c_{33}=1\)，故 \(C\) 如上，直接相乘可验证 \(CC^{T}=A\)。
第六步：\(|A|=|C|^{2}=(c_{11}c_{22}c_{33})^{2}=1\)；由于每一步的 \(c_{ii}\) 都由正号唯一确定，对角元全正的下三角分解（Cholesky 分解）唯一。` },
{ id:'LA07-51', ch:7, type:'计算', diff:5, tags:'矩阵平方根 对称平方根',
  q: String.raw`设 \(A=\begin{pmatrix}5&4\\4&5\end{pmatrix}\)。求所有满足 \(B^{2}=A\) 的实对称矩阵 \(B\)，并指出其中正定的那一个，说明正定平方根的唯一性。`,
  a: String.raw`共有 4 个实对称平方根：\(\pm\begin{pmatrix}2&1\\1&2\end{pmatrix}\) 与 \(\pm\begin{pmatrix}1&2\\2&1\end{pmatrix}\)；其中正定的是 \(B_0=\begin{pmatrix}2&1\\1&2\end{pmatrix}\)，且正定平方根唯一。`,
  sol: String.raw`第一步：\(A\) 对称，特征值 \(3,1\)。若 \(B\) 对称且 \(B^{2}=A\)，则 \(BA=B^{3}=AB\)，即 \(B\) 与 \(A\) 可交换。
第二步：\(A\) 的特征值互异，故 \(B\) 与 \(A\) 可用同一组标准正交特征向量对角化：取 \(Q=\frac{1}{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}\)，有 \(Q^{T}AQ=\mathrm{diag}(3,1)\)，于是 \(B=Q\,\mathrm{diag}(\varepsilon_1\sqrt3,\varepsilon_2)\,Q^{T}\)，\(\varepsilon_i=\pm1\)。
第三步：四种符号组合给出全部解：\(\varepsilon_1=\varepsilon_2=1\) 得 \(B_0=\begin{pmatrix}2&1\\1&2\end{pmatrix}\)，都取 \(-1\) 得 \(-B_0\)；一正一负得 \(\pm\begin{pmatrix}1&2\\2&1\end{pmatrix}\)。
第四步：\(B_0\) 的特征值为 \(3,1\) 全正，是正定矩阵；由 \(B^{2}=A\) 得 \(B\) 的特征值只能是 \(\pm\sqrt3,\pm1\)，若 \(B\) 正定则两个特征值都取正号，故正定平方根唯一。`,
},
{ id:'LA07-52', ch:7, type:'证明', diff:5, tags:'极分解 正定矩阵 正交矩阵',
  q: String.raw`设 \(A\) 为 \(n\) 阶实可逆矩阵。证明：存在正交矩阵 \(Q\) 与正定矩阵 \(P\)，使 \(A=QP\)，并且这样的分解是唯一的。`,
  a: String.raw`取 \(P=(A^{T}A)^{1/2}\)，\(Q=AP^{-1}\) 即得分解；唯一性由 \(A^{T}A=P^{2}\) 及正定平方根唯一得到。`,
  sol: String.raw`第一步：\(A\) 可逆，故 \(A^{T}A\) 正定，于是存在唯一的正定矩阵 \(P\) 使 \(P^{2}=A^{T}A\)，即 \(P=(A^{T}A)^{1/2}\)。
第二步：令 \(Q=AP^{-1}\)，则 \(Q^{T}Q=P^{-1}A^{T}AP^{-1}=P^{-1}P^{2}P^{-1}=I\)，故 \(Q\) 是正交矩阵，且 \(A=QP\)。
第三步：唯一性。设 \(A=Q_1P_1\) 也满足条件，则 \(A^{T}A=P_1Q_1^{T}Q_1P_1=P_1^{2}\)，由正定平方根的唯一性得 \(P_1=P\)，再由 \(Q_1=AP_1^{-1}=Q\) 得 \(Q_1=Q\)。
第四步：把 \(A=QP\) 改写为 \(A=(QPQ^{T})Q\)，其中 \(QPQ^{T}\) 正定、\(Q\) 正交，即得左极分解；右极分解存在唯一当且仅当 \(A\) 可逆。`,
},
{ id:'LA07-53', ch:7, type:'证明', diff:4, tags:'正定矩阵 特征值 不等式',
  q: String.raw`设 \(A\) 为 \(n\) 阶实正定矩阵。证明：\(A+A^{-1}\succeq 2I\)，并指出等号成立的条件。`,
  a: String.raw`\(A+A^{-1}-2I\) 半正定，等号成立当且仅当 \(A=I\)。`,
  sol: String.raw`第一步：\(A\) 正定，存在正交矩阵 \(Q\) 使 \(A=Q\Lambda Q^{T}\)，其中 \(\Lambda=\mathrm{diag}(\lambda_1,\dots,\lambda_n)\)，\(\lambda_i>0\)。
第二步：\(A^{-1}=Q\Lambda^{-1}Q^{T}\)，故 \(A+A^{-1}=Q(\Lambda+\Lambda^{-1})Q^{T}\)。
第三步：对每个 \(i\)，由均值不等式 \(\lambda_i+\lambda_i^{-1}\ge2\)，等号当且仅当 \(\lambda_i=1\)。
第四步：于是 \(A+A^{-1}-2I=Q\,\mathrm{diag}(\lambda_1+\lambda_1^{-1}-2,\dots,\lambda_n+\lambda_n^{-1}-2)\,Q^{T}\) 半正定；全部等号成立 \(\iff\Lambda=I\iff A=I\)。`,
},
{ id:'LA07-54', ch:7, type:'计算', diff:5, tags:'全一矩阵 正定判定 逆矩阵',
  q: String.raw`设 \(J\) 为 4 阶全 1 矩阵，\(A=aI+bJ\)（\(a,b\) 为实常数）。求 \(A\) 正定的充要条件、\(|A|\) 以及 \(A^{-1}\)（在 \(A\) 可逆时）。`,
  a: String.raw`\(A\) 正定 \(\iff a>0\) 且 \(a+4b>0\)；\(|A|=a^{3}(a+4b)\)；\(A^{-1}=\frac{1}{a}I-\frac{b}{a(a+4b)}J\)。`,
  sol: String.raw`第一步：\(J\) 的特征值为 \(4\)（特征向量 \(\mathbf{1}=(1,1,1,1)^{T}\)）与 \(0\)（三重，特征子空间 \(\mathbf{1}^{\perp}\)）。
第二步：故 \(A=aI+bJ\) 的特征值为 \(a+4b\)（一重）与 \(a\)（三重），\(|A|=a^{3}(a+4b)\)。
第三步：实对称矩阵正定 \(\iff\) 特征值全正，故 \(a>0\) 且 \(a+4b>0\)。
第四步：在上式成立时设 \(A^{-1}=\frac{1}{a}I+cJ\)，由 \(AA^{-1}=I\) 并按 \(I\) 与 \(J\) 比较系数（注意 \(J^{2}=4J\)）得 \(c=-\frac{b}{a(a+4b)}\)，即 \(A^{-1}=\frac{1}{a}I-\frac{b}{a(a+4b)}J\)，直接回代可验证。`,
},
{ id:'LA07-55', ch:7, type:'证明', diff:5, tags:'惯性定理 迹 行列式 特征值',
  q: String.raw`设 \(A\) 为 3 阶实对称矩阵，满足 \(\mathrm{tr}A=0\) 且 \(|A|>0\)。证明：\(A\) 的正惯性指数为 1、负惯性指数为 2。`,
  a: String.raw`三个实特征值之和为 0、之积为正，只能是一正两负，故 \(p=1,\ q=2\)。`,
  sol: String.raw`第一步：实对称矩阵的特征值 \(\lambda_1,\lambda_2,\lambda_3\) 都是实数，且 \(\lambda_1+\lambda_2+\lambda_3=\mathrm{tr}A=0\)，\(\lambda_1\lambda_2\lambda_3=|A|>0\)。
第二步：若三个特征值全正，则和为正，与和为 0 矛盾；若全负，则积为负，与积为正矛盾。
第三步：积为正说明负特征值的个数是偶数，即 0 个或 2 个；0 个时三个全正，已排除。
第四步：故恰有一个正特征值、两个负特征值，即 \(p=1,\ q=2\)。又 \(|A|>0\) 保证没有零特征值，\(\mathrm{rank}A=3\)。`,
},
{ id:'LA07-56', ch:7, type:'计算', diff:4, tags:'合同变换 Cholesky 分解',
  q: String.raw`设 \(A=\begin{pmatrix}1&2\\2&5\end{pmatrix}\)。求一个可逆矩阵 \(C\)，使 \(C^{T}AC=I\)，并说明这样的 \(C\) 是否唯一。`,
  a: String.raw`\(C=\begin{pmatrix}1&-2\\0&1\end{pmatrix}\) 即满足要求；一般解为 \(C=C_0Q\)（\(Q\) 为任意 2 阶正交矩阵），故不唯一。`,
  sol: String.raw`第一步：\(A\) 正定，作 Cholesky 分解 \(A=LL^{T}\)，其中 \(L=\begin{pmatrix}1&0\\2&1\end{pmatrix}\)。
第二步：取 \(C=L^{-T}=\begin{pmatrix}1&-2\\0&1\end{pmatrix}\)，它可逆。
第三步：验证：\(C^{T}AC=L^{-1}LL^{T}L^{-T}=(L^{-1}L)(L^{T}L^{-T})=I\)。
第四步：若 \(C_0\) 是一个解，则对任意正交矩阵 \(Q\)，\(C_0Q\) 仍满足 \((C_0Q)^{T}A(C_0Q)=Q^{T}Q=I\)；故解不唯一，几何上对应把标准形再作一次正交变换。`,
},
{ id:'LA07-57', ch:7, type:'计算', diff:5, tags:'矩阵平方根 正交对角化',
  q: String.raw`设 \(A=\begin{pmatrix}2&1\\1&2\end{pmatrix}\)。求 \(A\) 的正定平方根 \(A^{1/2}\)，并验证 \((A^{1/2})^{2}=A\)。`,
  a: String.raw`\(A^{1/2}=\frac{1}{2}\begin{pmatrix}\sqrt3+1&\sqrt3-1\\\sqrt3-1&\sqrt3+1\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(A\) 的特征值为 \(3,1\)，对应标准正交特征向量 \(\frac{1}{\sqrt2}(1,1)^{T}\) 与 \(\frac{1}{\sqrt2}(1,-1)^{T}\)。
第二步：取 \(Q=\frac{1}{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}\)，则 \(Q^{T}AQ=\mathrm{diag}(3,1)\)。
第三步：正定平方根为 \(A^{1/2}=Q\,\mathrm{diag}(\sqrt3,1)\,Q^{T}=\frac12\begin{pmatrix}\sqrt3+1&\sqrt3-1\\\sqrt3-1&\sqrt3+1\end{pmatrix}\)。
第四步：平方验证：对角元为 \(\frac14\left[(\sqrt3+1)^{2}+(\sqrt3-1)^{2}\right]=\frac14(8+2\cdot3-2\cdot1+2)=2\)，非对角元为 \(\frac14\cdot2(\sqrt3+1)(\sqrt3-1)=\frac14\cdot4=1\)，故平方等于 \(A\)。`,
},
{ id:'LA07-58', ch:7, type:'证明', diff:5, tags:'正定矩阵 集合封闭性 反例',
  q: String.raw`记 \(P_n\) 为全体 \(n\) 阶实正定矩阵之集。证明：\(P_n\) 对矩阵加法、正数乘法、求逆都封闭，但对矩阵乘法不封闭（举出反例）。`,
  a: String.raw`加法、正数乘、求逆封闭；乘法不封闭，如 \(A=\begin{pmatrix}2&0\\0&1\end{pmatrix}\)、\(B=\begin{pmatrix}1&1\\1&2\end{pmatrix}\) 都正定，而 \(AB=\begin{pmatrix}2&2\\1&2\end{pmatrix}\) 不对称，不是正定矩阵。`,
  sol: String.raw`第一步：加法封闭。设 \(A,B\in P_n\)，对任意 \(x\ne0\)，\(x^{T}(A+B)x=x^{T}Ax+x^{T}Bx>0\)，故 \(A+B\) 正定。
第二步：正数乘封闭。\(k>0\) 时 \(x^{T}(kA)x=k\,x^{T}Ax>0\)。
第三步：求逆封闭。\(A\) 正定 \(\Rightarrow\) 特征值 \(\lambda_i>0\)，而 \(A^{-1}\) 的特征值为 \(\lambda_i^{-1}>0\)，故 \(A^{-1}\) 正定。
第四步：乘法不封闭。取 \(A=\begin{pmatrix}2&0\\0&1\end{pmatrix}\)、\(B=\begin{pmatrix}1&1\\1&2\end{pmatrix}\)，两者正定；但 \(AB=\begin{pmatrix}2&2\\1&2\end{pmatrix}\) 不满足对称性，所以不是正定矩阵。注意：若 \(AB\) 恰好对称且 \(A,B\) 正定，则 \(AB\) 确实正定，因此反例必须让乘积失去对称性。`,
},
{ id:'LA07-59', ch:7, type:'计算', diff:5, tags:'分块矩阵 Schur 补 行列式',
  q: String.raw`设 \(M=\begin{pmatrix}A&I\\I&D\end{pmatrix}\)，其中 \(A=\begin{pmatrix}2&1\\1&2\end{pmatrix}\)，\(D=\begin{pmatrix}3&1\\1&3\end{pmatrix}\)。求 \(M\) 的 Schur 补、\(|M|\)，并判断 \(M\) 是否正定、写出其惯性指数。`,
  a: String.raw`Schur 补为 \(\begin{pmatrix}7/3&4/3\\4/3&7/3\end{pmatrix}\)，\(|M|=11\)；\(M\) 正定，\(p=4,\ q=0\)。`,
  sol: String.raw`第一步：\(A\) 正定，\(|A|=3\)，\(A^{-1}=\frac13\begin{pmatrix}2&-1\\-1&2\end{pmatrix}\)。
第二步：Schur 补 \(S=D-A^{-1}=\begin{pmatrix}3&1\\1&3\end{pmatrix}-\frac13\begin{pmatrix}2&-1\\-1&2\end{pmatrix}=\begin{pmatrix}7/3&4/3\\4/3&7/3\end{pmatrix}\)。
第三步：\(|S|=\frac{49-16}{9}=\frac{11}{3}\)，由分块行列式公式 \(|M|=|A|\,|S|=3\cdot\frac{11}{3}=11\)。
第四步：作合同变换，取 \(P=\begin{pmatrix}I&-A^{-1}\\0&I\end{pmatrix}\)，得 \(P^{T}MP=\mathrm{diag}(A,S)\)。\(A\) 与 \(S\) 都正定（\(S\) 的顺序主子式为 \(7/3>0\) 与 \(11/3>0\)），故 \(M\) 正定，\(p=4,\ q=0\)。`,
},
{ id:'LA07-60', ch:7, type:'证明', diff:5, tags:'Schur 补 分块正定 合同变换',
  q: String.raw`设 \(A\) 为 \(m\) 阶实正定矩阵，\(B\) 为 \(m\times k\) 实矩阵，\(D\) 为 \(k\) 阶实对称矩阵，令 \(M=\begin{pmatrix}A&B\\B^{T}&D\end{pmatrix}\)。证明：\(M\) 正定当且仅当 Schur 补 \(D-B^{T}A^{-1}B\) 正定。`,
  a: String.raw`\(M\) 与 \(\mathrm{diag}(A,\ D-B^{T}A^{-1}B)\) 合同，合同变换保持正定性，而 \(A\) 已正定，故结论成立。`,
  sol: String.raw`第一步：\(A\) 正定故可逆，取 \(P=\begin{pmatrix}I&-A^{-1}B\\0&I\end{pmatrix}\)，它是可逆矩阵。
第二步：直接计算 \(MP=\begin{pmatrix}A&0\\B^{T}&D-B^{T}A^{-1}B\end{pmatrix}\)，再左乘 \(P^{T}\) 得 \(P^{T}MP=\begin{pmatrix}A&0\\0&D-B^{T}A^{-1}B\end{pmatrix}\)。
第三步：合同变换保持正定性：对 \(x\ne0\) 有 \(Px\ne0\)，且 \(x^{T}Mx=(Px)^{T}(P^{T}MP)(Px)\)。
第四步：于是 \(M\) 正定 \(\iff\mathrm{diag}(A,S)\) 正定 \(\iff A\) 与 \(S=D-B^{T}A^{-1}B\) 同时正定；题设 \(A\) 正定，故 \(M\) 正定 \(\iff S\) 正定。`,
},
{ id:'LA07-61', ch:7, type:'计算', diff:5, tags:'平方和 半正定 秩 惯性指数',
  q: String.raw`设 \(f(x_1,x_2,x_3,x_4)=(x_1+x_2+x_3)^{2}+(x_2+x_3+x_4)^{2}+(x_3+x_4)^{2}\)。写出 \(f\) 的矩阵 \(A\)，求 \(\mathrm{rank}A\) 与惯性指数，并解方程 \(f=0\)。`,
  a: String.raw`\(A=\begin{pmatrix}1&1&1&0\\1&2&2&1\\1&2&3&2\\0&1&2&2\end{pmatrix}\)，\(\mathrm{rank}A=3\)，\(p=3,\ q=0\)；\(f=0\) 的解为 \(x=t(1,0,-1,1)^{T}\)。`,
  sol: String.raw`第一步：展开得 \(f=x_1^{2}+2x_1x_2+2x_1x_3+2x_2^{2}+4x_2x_3+2x_2x_4+3x_3^{2}+4x_3x_4+2x_4^{2}\)，故 \(A\) 如上。
第二步：把三个括号写成矩阵形式 \(f=\|Lx\|^{2}\)，其中 \(L=\begin{pmatrix}1&1&1&0\\0&1&1&1\\0&0&1&1\end{pmatrix}\)，于是 \(A=L^{T}L\)。
第三步：\(L\) 行满秩，\(\mathrm{rank}A=\mathrm{rank}L=3\)（也可由 \(A\) 的四阶子式为 0、三阶子式非 0 得到）。
第四步：\(A=L^{T}L\) 半正定，且 \(\mathrm{rank}A=3\) 说明零特征值只有一个，故 \(p=3,\ q=0\)。
第五步：\(f=0\iff Lx=0\)，即 \(x_1+x_2+x_3=0\)、\(x_2+x_3+x_4=0\)、\(x_3+x_4=0\)，解得 \(x_2=0,\ x_1=-x_3,\ x_4=-x_3\)，即 \(x=t(1,0,-1,1)^{T}\)。`,
},
{ id:'LA07-62', ch:7, type:'证明', diff:5, tags:'Schur 乘积定理 Hadamard 积 正定',
  q: String.raw`设 \(A,B\) 都是 \(n\) 阶实正定矩阵，\(\circ\) 表示 Hadamard 乘积（对应元素相乘）。证明：\(A\circ B\) 也是正定矩阵。`,
  a: String.raw`利用 \(B=\sum_k\lambda_kv_kv_k^{T}\) 与 \(A\circ(vv^{T})=\mathrm{diag}(v)A\,\mathrm{diag}(v)\)，把 \(A\circ B\) 写成半正定矩阵之和，再证其正定。`,
  sol: String.raw`第一步：\(B\) 正定，作谱分解 \(B=\sum_{k=1}^{n}\lambda_kv_kv_k^{T}\)，其中 \(\lambda_k>0\)，\(v_k\) 为两两正交的单位特征向量。
第二步：对任意向量 \(v\)，有 \(A\circ(vv^{T})=\mathrm{diag}(v)\,A\,\mathrm{diag}(v)\)：两边 \((i,j)\) 元分别为 \(a_{ij}v_iv_j\) 与 \(v_ia_{ij}v_j\)。
第三步：故 \(A\circ B=\sum_k\lambda_k\,\mathrm{diag}(v_k)A\,\mathrm{diag}(v_k)\)，每一项都半正定，因为 \(x^{T}\mathrm{diag}(v)A\,\mathrm{diag}(v)x=(\mathrm{diag}(v)x)^{T}A(\mathrm{diag}(v)x)\ge0\)。
第四步：正定性。对 \(x\ne0\)，\(x^{T}(A\circ B)x=\sum_k\lambda_k\,(\mathrm{diag}(v_k)x)^{T}A(\mathrm{diag}(v_k)x)\)。由于 \(\{v_k\}\) 是基，存在 \(k\) 使 \(v_k\circ x\ne0\)（否则对每个 \(k\) 都有 \(v_k\circ x=0\)，与 \(x\ne0\) 矛盾），该项严格为正，其余项非负，故总和大于 0，即 \(A\circ B\) 正定。`,
},
{ id:'LA07-63', ch:7, type:'证明', diff:5, tags:'半正定 矩阵分解 秩',
  q: String.raw`设 \(A\) 为 \(n\) 阶实对称矩阵。证明：\(A\) 半正定当且仅当存在实矩阵 \(B\) 使 \(A=B^{T}B\)；并证明此时 \(\mathrm{rank}A=\mathrm{rank}B\)。`,
  a: String.raw`谱分解给出 \(A=(\Lambda^{1/2}Q^{T})^{T}(\Lambda^{1/2}Q^{T})\)；反向由 \(x^{T}Ax=\|Bx\|^{2}\ge0\)，且 \(\ker(B^{T}B)=\ker B\) 给出秩相等。`,
  sol: String.raw`第一步：必要性。\(A\) 半正定 \(\Rightarrow\) 存在正交矩阵 \(Q\) 使 \(A=Q\Lambda Q^{T}\)，其中 \(\Lambda=\mathrm{diag}(\lambda_1,\dots,\lambda_n)\)，\(\lambda_i\ge0\)。
第二步：令 \(B=\Lambda^{1/2}Q^{T}\)（\(\Lambda^{1/2}=\mathrm{diag}(\sqrt{\lambda_i})\)），则 \(B^{T}B=Q\Lambda^{1/2}\Lambda^{1/2}Q^{T}=A\)。
第三步：充分性。若 \(A=B^{T}B\)，则对任意 \(x\)，\(x^{T}Ax=(Bx)^{T}(Bx)=\|Bx\|^{2}\ge0\)，故 \(A\) 半正定。
第四步：秩。若 \(Bx=0\) 则 \(B^{T}Bx=0\)；反之若 \(B^{T}Bx=0\)，则 \(\|Bx\|^{2}=x^{T}B^{T}Bx=0\)，故 \(Bx=0\)。于是两个零空间相同，\(\mathrm{rank}(B^{T}B)=\mathrm{rank}B\)。`,
},
{ id:'LA07-64', ch:7, type:'计算', diff:5, tags:'子空间限制 二次型最值 全一矩阵',
  q: String.raw`设 \(A=\begin{pmatrix}2&1&1\\1&2&1\\1&1&2\end{pmatrix}\)，\(f(x)=x^{T}Ax\)。求 \(f\) 在条件 \(x_1+x_2+x_3=0\) 与 \(\|x\|=1\) 下的最大值与最小值，并写出 \(f\) 在该子空间上的表达式。`,
  a: String.raw`在该子空间上恒有 \(f=\|x\|^{2}=1\)，故最大值与最小值都等于 1。`,
  sol: String.raw`第一步：记 \(\mathbf{1}=(1,1,1)^{T}\)，\(J=\mathbf{1}\mathbf{1}^{T}\)，则 \(A=I+J\)。
第二步：条件 \(x_1+x_2+x_3=0\) 即 \(\mathbf{1}^{T}x=0\)，此时 \(Jx=\mathbf{1}(\mathbf{1}^{T}x)=0\)。
第三步：故在该子空间上 \(f=x^{T}(I+J)x=x^{T}x=\|x\|^{2}\)，二次型退化为长度平方。
第四步：结合 \(\|x\|=1\) 得 \(f\equiv1\)：最大值与最小值都是 1，且在该子空间的任意单位向量处同时取到（这也说明 \(A\) 在该子空间上的限制矩阵是单位矩阵）。`,
},
{ id:'LA07-65', ch:7, type:'计算', diff:4, tags:'合同 相似 惯性定理',
  q: String.raw`设 \(A=I_3\)，\(B=\mathrm{diag}(2,1,1)\)。判断 \(A\) 与 \(B\) 是否合同、是否相似；若合同，给出相应的可逆矩阵 \(C\)。`,
  a: String.raw`\(A\) 与 \(B\) 合同但不相似；\(C=\mathrm{diag}(\sqrt2,1,1)\) 满足 \(C^{T}AC=B\)。`,
  sol: String.raw`第一步：相似看特征值。\(A\) 的特征值为 \(1,1,1\)，\(B\) 的特征值为 \(2,1,1\)，两者特征值不同，故不相似。
第二步：合同看惯性指数。\(A,B\) 都正定，正惯性指数都是 3，负惯性指数都是 0。
第三步：由惯性定理，实对称矩阵合同的充要条件是秩与正、负惯性指数分别相同，故 \(A\) 与 \(B\) 合同。
第四步：取 \(C=\mathrm{diag}(\sqrt2,1,1)\)，它可逆，且 \(C^{T}AC=C^{2}=\mathrm{diag}(2,1,1)=B\)。这说明合同关系比相似关系更粗：同一合同类里可以含有互不相似的矩阵。`,
},
{ id:'LA07-66', ch:7, type:'计算', diff:5, tags:'配方法 惯性指数 规范形',
  q: String.raw`用配方法化二次型 \(f=x_1x_2+x_3x_4\) 为标准形，写出所用的可逆线性变换，并求其正、负惯性指数。`,
  a: String.raw`令 \(y_1=\frac{x_1+x_2}{2},\ y_2=\frac{x_1-x_2}{2},\ y_3=\frac{x_3+x_4}{2},\ y_4=\frac{x_3-x_4}{2}\)，得 \(f=y_1^{2}-y_2^{2}+y_3^{2}-y_4^{2}\)，故 \(p=2,\ q=2\)。`,
  sol: String.raw`第一步：利用 \(x_1x_2=\left(\frac{x_1+x_2}{2}\right)^{2}-\left(\frac{x_1-x_2}{2}\right)^{2}\)，同理处理 \(x_3x_4\)。
第二步：令 \(y_1=\frac{x_1+x_2}{2},\ y_2=\frac{x_1-x_2}{2},\ y_3=\frac{x_3+x_4}{2},\ y_4=\frac{x_3-x_4}{2}\)。这是可逆线性变换，其逆为 \(x_1=y_1+y_2,\ x_2=y_1-y_2,\ x_3=y_3+y_4,\ x_4=y_3-y_4\)。
第三步：代入得标准形 \(f=y_1^{2}-y_2^{2}+y_3^{2}-y_4^{2}\)，其中平方项系数为 \(1,1,-1,-1\)。
第四步：故正惯性指数 \(p=2\)、负惯性指数 \(q=2\)、\(\mathrm{rank}A=4\)；再令 \(z_1=y_1,\ z_2=y_3,\ z_3=y_2,\ z_4=y_4\) 得规范形 \(z_1^{2}+z_2^{2}-z_3^{2}-z_4^{2}\)。`,
},
{ id:'LA07-67', ch:7, type:'证明', diff:5, tags:'半正定 秩 零空间',
  q: String.raw`设 \(A\) 为 \(m\times n\) 实矩阵。证明：\(A^{T}A\) 半正定，且 \(\mathrm{rank}(A^{T}A)=\mathrm{rank}A\)；并给出 \(A^{T}A\) 正定的充要条件。`,
  a: String.raw`\(A^{T}A\) 半正定，\(\mathrm{rank}(A^{T}A)=\mathrm{rank}A\)；\(A^{T}A\) 正定当且仅当 \(A\) 的列向量线性无关（即 \(\mathrm{rank}A=n\)）。`,
  sol: String.raw`第一步：对任意 \(x\in\mathbf{R}^{n}\)，\(x^{T}(A^{T}A)x=(Ax)^{T}(Ax)=\|Ax\|^{2}\ge0\)，故 \(A^{T}A\) 半正定。
第二步：证明 \(\ker(A^{T}A)=\ker A\)。若 \(Ax=0\)，则 \(A^{T}Ax=0\)；反之若 \(A^{T}Ax=0\)，则 \(\|Ax\|^{2}=x^{T}A^{T}Ax=0\)，故 \(Ax=0\)。
第三步：由秩-零化度定理，\(\mathrm{rank}(A^{T}A)=n-\dim\ker(A^{T}A)=n-\dim\ker A=\mathrm{rank}A\)。
第四步：\(A^{T}A\) 正定 \(\iff\ker(A^{T}A)=\{0\}\iff\ker A=\{0\}\iff A\) 的列向量线性无关 \(\iff\mathrm{rank}A=n\)。`,
},
{ id:'LA07-68', ch:7, type:'计算', diff:5, tags:'半正定判定 秩 主子式 矩阵分解',
  q: String.raw`设 \(A=\begin{pmatrix}1&2&3\\2&5&7\\3&7&10\end{pmatrix}\)。判断 \(A\) 是否半正定，求 \(\mathrm{rank}A\) 与惯性指数，解 \(f(x)=x^{T}Ax=0\)，并写出一个 \(2\times3\) 矩阵 \(B\) 使 \(A=B^{T}B\)。`,
  a: String.raw`\(A\) 半正定，\(\mathrm{rank}A=2\)，\(p=2,\ q=0\)；\(f=0\iff x=t(-1,-1,1)^{T}\)；可取 \(B=\begin{pmatrix}1&2&3\\0&1&1\end{pmatrix}\)。`,
  sol: String.raw`第一步：计算主子式。一阶为 \(1,5,10>0\)；二阶主子式为 \(\begin{vmatrix}1&2\\2&5\end{vmatrix}=1\)、\(\begin{vmatrix}1&3\\3&10\end{vmatrix}=1\)、\(\begin{vmatrix}5&7\\7&10\end{vmatrix}=1\)；三阶 \(|A|=0\)。所有主子式非负，故 \(A\) 半正定（注意不能只看顺序主子式 \(1,1,0\) 就下结论，需全部主子式）。
第二步：二阶子式非零、三阶为零，故 \(\mathrm{rank}A=2\)，于是零特征值只有一个，\(p=2,\ q=0\)。
第三步：解 \(Ax=0\)：第二、三两式相减并消元得 \(x_1=x_2=-x_3\)，即 \(x=t(-1,-1,1)^{T}\)，这就是 \(f=0\) 的全部解。
第四步：验证分解：取 \(B=\begin{pmatrix}1&2&3\\0&1&1\end{pmatrix}\)，则 \(B^{T}B\) 的 \((i,j)\) 元为两列内积，得 \(\begin{pmatrix}1&2&3\\2&5&7\\3&7&10\end{pmatrix}=A\)。`,
},
{ id:'LA07-69', ch:7, type:'证明', diff:5, tags:'半正定 合同 秩 零空间',
  q: String.raw`设 \(A\) 为 \(n\) 阶实半正定矩阵，\(B\) 为 \(n\times m\) 实矩阵。证明：\(B^{T}AB\) 半正定，且 \(\mathrm{rank}(B^{T}AB)=\mathrm{rank}(AB)\)。`,
  a: String.raw`\(B^{T}AB\) 半正定；其零空间与 \(AB\) 的零空间相同，故秩相等。`,
  sol: String.raw`第一步：对任意 \(x\in\mathbf{R}^{m}\)，\(x^{T}B^{T}ABx=(Bx)^{T}A(Bx)\ge0\)（\(A\) 半正定），故 \(B^{T}AB\) 半正定。
第二步：证明 \(\ker(B^{T}AB)=\ker(AB)\)。若 \(ABx=0\)，则 \(B^{T}ABx=0\)；反之设 \(B^{T}ABx=0\)，记 \(y=Bx\)，则 \(y^{T}Ay=x^{T}B^{T}ABx=0\)。
第三步：\(A\) 半正定，存在 \(C\) 使 \(A=C^{T}C\)，于是 \(0=y^{T}Ay=\|Cy\|^{2}\)，得 \(Cy=0\)，从而 \(Ay=C^{T}Cy=0\)，即 \(ABx=0\)。
第四步：两个零空间相同，由秩-零化度定理得 \(\mathrm{rank}(B^{T}AB)=m-\dim\ker(B^{T}AB)=m-\dim\ker(AB)=\mathrm{rank}(AB)\)。`,
},
{ id:'LA07-70', ch:7, type:'计算', diff:5, tags:'配方法 全一矩阵 半正定 惯性指数',
  q: String.raw`设 \(f(x_1,x_2,x_3,x_4)=\sum_{1\le i<j\le4}(x_i-x_j)^{2}\)。写出 \(f\) 的矩阵 \(A\)，求其标准形、惯性指数与秩，并解 \(f=0\)。`,
  a: String.raw`\(A=4I-J\)，特征值为 \(0,4,4,4\)，标准形 \(f=4(y_2^{2}+y_3^{2}+y_4^{2})\)，\(p=3,\ q=0\)，\(\mathrm{rank}A=3\)；\(f=0\iff x_1=x_2=x_3=x_4\)。`,
  sol: String.raw`第一步：展开平方和。每个 \(x_i^{2}\) 出现 3 次，每个 \(x_ix_j\)（\(i\ne j\)）在 \((x_i-x_j)^{2}\) 中的系数为 \(-1\)，两次对称出现共 \(-2\)，故 \(f=3\sum x_i^{2}-2\sum_{i<j}x_ix_j=4\sum x_i^{2}-\left(\sum x_i\right)^{2}\)。
第二步：写成矩阵形式，\(f=x^{T}(4I-J)x\)，其中 \(J\) 为 4 阶全 1 矩阵。
第三步：\(J\) 的特征值为 \(4,0,0,0\)，故 \(A=4I-J\) 的特征值为 \(0,4,4,4\)，标准形为 \(f=4(y_2^{2}+y_3^{2}+y_4^{2})\)。
第四步：\(p=3,\ q=0,\ \mathrm{rank}A=3\)（\(A\) 半正定但不正定）。
第五步：\(f=0\iff\) 每个 \((x_i-x_j)^{2}=0\iff x_1=x_2=x_3=x_4\)，解空间为 \(\mathrm{span}\{(1,1,1,1)^{T}\}\)。`,
},
{ id:'LA07-71', ch:7, type:'证明', diff:5, tags:'正定矩阵乘积 特征值 相似',
  q: String.raw`设 \(A\) 为 \(n\) 阶实正定矩阵，\(B\) 为 \(n\) 阶实对称矩阵。证明：\(AB\) 的特征值全是实数；并举反例说明 \(AB\) 不一定是对称矩阵。`,
  a: String.raw`\(AB\) 相似于实对称矩阵 \(A^{1/2}BA^{1/2}\)，故特征值全为实数；反例：\(A=\begin{pmatrix}2&1\\1&2\end{pmatrix}\)、\(B=\begin{pmatrix}1&0\\0&0\end{pmatrix}\) 时 \(AB=\begin{pmatrix}2&0\\1&0\end{pmatrix}\) 不对称。`,
  sol: String.raw`第一步：\(A\) 正定，故 \(A^{1/2}\) 正定且可逆，\(A^{-1/2}\) 存在。
第二步：计算 \(A^{1/2}(AB)A^{-1/2}=A^{1/2}BA^{1/2}\)，右端是实对称矩阵（\(B\) 对称）。
第三步：相似矩阵特征值相同，而实对称矩阵的特征值全为实数，故 \(AB\) 的特征值全为实数。
第四步：反例。取 \(A=\begin{pmatrix}2&1\\1&2\end{pmatrix}\)（正定）与 \(B=\begin{pmatrix}1&0\\0&0\end{pmatrix}\)（对称），则 \(AB=\begin{pmatrix}2&0\\1&0\end{pmatrix}\) 不是对称矩阵；它的特征值为 \(2,0\)，确为实数。`,
},
{ id:'LA07-72', ch:7, type:'计算', diff:5, tags:'全一矩阵 特征值 正定判定 参数讨论',
  q: String.raw`设 \(A=\begin{pmatrix}a&1&1\\1&a&1\\1&1&a\end{pmatrix}\)（\(a\) 为实常数）。求 \(A\) 的特征值与行列式，并讨论 \(a\) 取何值时 \(A\) 正定、负定、半正定、半负定，以及各种情形下 \(A\) 的秩。`,
  a: String.raw`特征值 \(a+2,\ a-1,\ a-1\)，\(|A|=(a+2)(a-1)^{2}\)；正定 \(\iff a>1\)；负定 \(\iff a<-2\)；半正定 \(\iff a\ge1\)；半负定 \(\iff a\le-2\)。\(a=1\) 时秩 1（\(A=J\)，\(p=1\)），\(a=-2\) 时秩 2（\(p=0,\ q=2\)）。`,
  sol: String.raw`第一步：\(A=(a-1)I+J\)，其中 \(J\) 为 3 阶全 1 矩阵，特征值 \(3,0,0\)。
第二步：故 \(A\) 的特征值为 \(a+2\)（对应 \((1,1,1)^{T}\)）与 \(a-1\)（二重，对应 \(\mathbf{1}^{\perp}\)），\(|A|=(a+2)(a-1)^{2}\)。
第三步：正定要求三个特征值全正，即 \(a>1\)；负定要求全负，即 \(a<-2\)。
第四步：半正定要求全非负，即 \(a\ge1\)。其中 \(a=1\) 时 \(A=J\)，特征值 \(3,0,0\)，秩 1，\(p=1\)。半负定要求全非正，即 \(a\le-2\)，其中 \(a=-2\) 时特征值 \(0,-3,-3\)，秩 2，\(p=0,\ q=2\)；\(a<-2\) 时三个特征值全负，属于更强的负定。
第五步：秩：\(a\ne1\) 且 \(a\ne-2\) 时三个特征值非零，秩 3；\(a=1\) 时秩 1；\(a=-2\) 时秩 2。`,
},
{ id:'LA07-73', ch:7, type:'证明', diff:5, tags:'分块矩阵 秩 Schur 补',
  q: String.raw`设 \(A\) 为 \(m\) 阶可逆矩阵，\(M=\begin{pmatrix}A&B\\B^{T}&D\end{pmatrix}\) 为实对称矩阵。证明：\(\mathrm{rank}M=\mathrm{rank}A+\mathrm{rank}(D-B^{T}A^{-1}B)\)。`,
  a: String.raw`\(M\) 合同于 \(\mathrm{diag}(A,\ D-B^{T}A^{-1}B)\)，右乘、左乘可逆矩阵不改变秩，故秩等于两块秩之和。`,
  sol: String.raw`第一步：\(A\) 可逆，取 \(P=\begin{pmatrix}I&-A^{-1}B\\0&I\end{pmatrix}\)，则 \(P\) 可逆。
第二步：直接计算得 \(P^{T}MP=\begin{pmatrix}A&0\\0&D-B^{T}A^{-1}B\end{pmatrix}\)。
第三步：可逆矩阵乘不改变秩：\(\mathrm{rank}M=\mathrm{rank}(P^{T}MP)\)。
第四步：分块对角矩阵的秩等于各块秩之和，而 \(A\) 可逆故 \(\mathrm{rank}A\) 就是 \(A\) 的阶数 \(m\)，于是 \(\mathrm{rank}M=m+\mathrm{rank}(D-B^{T}A^{-1}B)\)。特别地 \(M\) 可逆 \(\iff\) Schur 补 \(D-B^{T}A^{-1}B\) 可逆，这就是分块矩阵可逆的 Schur 补判别法。`,
},
{ id:'LA07-74', ch:7, type:'计算', diff:5, tags:'条件极值 二次型最值 子空间',
  q: String.raw`设 \(f=x_1^{2}+2x_2^{2}+3x_3^{2}\)。求 \(f\) 在条件 \(x_1=x_2\) 与 \(x_1^{2}+x_2^{2}+x_3^{2}=1\) 下的最大值与最小值，并指出取到最值的点。`,
  a: String.raw`最大值 \(3\)，在 \((0,0,\pm1)\) 处取到；最小值 \(\frac{3}{2}\)，在 \(\pm\frac{1}{\sqrt2}(1,1,0)\) 处取到。`,
  sol: String.raw`第一步：令 \(x_1=x_2=t,\ x_3=s\)，则 \(f=3t^{2}+3s^{2}\)，约束变为 \(2t^{2}+s^{2}=1\)。
第二步：由约束解出 \(s^{2}=1-2t^{2}\)，代入得 \(f=3(t^{2}+s^{2})=3(1-t^{2})\)，它是 \(t^{2}\) 的严格递减函数。
第三步：由 \(s^{2}\ge0\) 得 \(0\le t^{2}\le\frac12\)。当 \(t=0\) 时 \(s^{2}=1\)，\(f=3\)；当 \(t^{2}=\frac12\) 时 \(s=0\)，\(f=\frac32\)。
第四步：故最大值 3（在 \((0,0,\pm1)\)），最小值 \(\frac32\)（在 \(\pm\frac{1}{\sqrt2}(1,1,0)\)）。
第五步：也可用拉格朗日乘子法：方程组给出 \(3t=\lambda\cdot2t\)、\(3s=\lambda s\)，分 \(t=0\) 与 \(s=0\) 两种情况即得上面对应的两个驻点。`,
},
{ id:'LA07-75', ch:7, type:'证明', diff:5, tags:'矩阵平方 半正定 秩',
  q: String.raw`设 \(A\) 为 \(n\) 阶实对称矩阵。证明：\(A^{2}\) 半正定，且 \(\mathrm{rank}(A^{2})=\mathrm{rank}A\)；并说明 \(A^{2}\) 正定与 \(A\) 可逆等价。`,
  a: String.raw`\(A^{2}\) 的特征值为 \(\lambda_i^{2}\ge0\)，非零个数与 \(\lambda_i\) 的非零个数相同，故半正定且秩不变；\(A^{2}\) 正定 \(\iff\) 所有 \(\lambda_i\ne0\iff A\) 可逆。`,
  sol: String.raw`第一步：\(A\) 实对称，存在正交矩阵 \(Q\) 使 \(A=Q\Lambda Q^{T}\)，\(\Lambda=\mathrm{diag}(\lambda_1,\dots,\lambda_n)\)，\(\lambda_i\) 为实数。
第二步：\(A^{2}=Q\Lambda^{2}Q^{T}\)，特征值为 \(\lambda_i^{2}\ge0\)，故 \(A^{2}\) 半正定。
第三步：\(\mathrm{rank}(A^{2})\) 等于 \(\Lambda^{2}\) 中非零元的个数，即 \(\#\{i:\lambda_i\ne0\}\)，这正是 \(\mathrm{rank}A\)。
第四步：\(A^{2}\) 正定 \(\iff\) 所有 \(\lambda_i^{2}>0\iff\) 所有 \(\lambda_i\ne0\iff A\) 可逆。注意 \(A\) 本身不必正定：\(A=\mathrm{diag}(1,-1)\) 时 \(A^{2}=I\) 正定，而 \(A\) 既不正定也不负定。`,
},
{ id:'LA07-76', ch:7, type:'证明', diff:5, tags:'Rayleigh 商 特征值估计 不等式',
  q: String.raw`设 \(A,B\) 为 \(n\) 阶实对称矩阵。证明：\(\lambda_{\max}(A+B)\le\lambda_{\max}(A)+\lambda_{\max}(B)\)，并举一个严格不等式成立的例子。`,
  a: String.raw`由 Rayleigh 商 \(x^{T}Ax\le\lambda_{\max}(A)\|x\|^{2}\) 逐项估计即得；严格例子：\(A=\begin{pmatrix}1&0\\0&0\end{pmatrix}\)、\(B=\begin{pmatrix}1&1\\1&1\end{pmatrix}\) 时左端 \(\frac{3+\sqrt5}{2}\approx2.618\) 严格小于右端 \(1+2=3\)。`,
  sol: String.raw`第一步：记 \(\alpha=\lambda_{\max}(A)\)，\(\beta=\lambda_{\max}(B)\)，则对任意 \(x\) 有 \(x^{T}Ax\le\alpha\|x\|^{2}\)、\(x^{T}Bx\le\beta\|x\|^{2}\)。
第二步：两式相加得 \(x^{T}(A+B)x\le(\alpha+\beta)\|x\|^{2}\)，对一切 \(x\) 成立。
第三步：取 \(x\) 为 \(A+B\) 的最大特征值对应的单位特征向量，得 \(\lambda_{\max}(A+B)\le\alpha+\beta\)。
第四步：严格例子。取 \(A=\begin{pmatrix}1&0\\0&0\end{pmatrix}\)、\(B=\begin{pmatrix}1&1\\1&1\end{pmatrix}\)，则 \(\lambda_{\max}(A)=1\)、\(\lambda_{\max}(B)=2\)，而 \(A+B=\begin{pmatrix}2&1\\1&1\end{pmatrix}\) 的特征值为 \(\frac{3\pm\sqrt5}{2}\)，最大者约 \(2.618<3\)。原因是最值方向不同，两个上界不能同时取到。`,
},
{ id:'LA07-77', ch:7, type:'计算', diff:5, tags:'半正定判定 参数讨论 矩阵行列式',
  q: String.raw`设 \(f=x_1^{2}+x_2^{2}+x_3^{2}+2ax_1x_2+2x_1x_3\)。讨论 \(a\) 取何值时 \(f\) 正定、半正定；并求 \(a=0\) 时 \(f\) 的秩、惯性指数与 \(f=0\) 的解。`,
  a: String.raw`对任何 \(a\) 都不正定；半正定当且仅当 \(a=0\)，此时 \(\mathrm{rank}=2\)、\(p=2,\ q=0\)，\(f=0\iff x=t(1,0,-1)^{T}\)。`,
  sol: String.raw`第一步：\(A=\begin{pmatrix}1&a&1\\a&1&0\\1&0&1\end{pmatrix}\)，顺序主子式为 \(\Delta_1=1\)、\(\Delta_2=1-a^{2}\)、\(\Delta_3=|A|=1-a^{2}-1=-a^{2}\)。
第二步：正定要求 \(\Delta_3>0\)，即 \(-a^{2}>0\)，无解，故 \(f\) 对任何 \(a\) 都不正定。
第三步：半正定要求所有主子式非负（一阶为 \(1,1,1\)，二阶为 \(1-a^{2}\) 与 \(1\)，三阶为 \(-a^{2}\)），由 \(-a^{2}\ge0\) 得 \(a=0\)，此时 \(1-a^{2}=1>0\)，条件全部满足。
第四步：\(a=0\) 时 \(A=\begin{pmatrix}1&0&1\\0&1&0\\1&0&1\end{pmatrix}\)，特征值 \(2,1,0\)，故秩 2、\(p=2,\ q=0\)。
第五步：\(f=0\iff x_1+x_3=0\) 且 \(x_2=0\)，即 \(x=t(1,0,-1)^{T}\)。当 \(a\ne0\) 时 \(|A|<0\)，\(f\) 不定（\(p=2,\ q=1\)）。`,
},
{ id:'LA07-78', ch:7, type:'计算', diff:5, tags:'分块矩阵 惯性指数 Schur 补 行列式',
  q: String.raw`设 \(M=\begin{pmatrix}A&B\\B^{T}&0\end{pmatrix}\)，其中 \(A=\begin{pmatrix}2&1\\1&2\end{pmatrix}\)，\(B=I_2\)。求 \(|M|\)、惯性指数，并判断 \(M\) 是否半正定。`,
  a: String.raw`\(|M|=1\)，\(p=2,\ q=2\)，\(\mathrm{rank}M=4\)；\(M\) 不是半正定矩阵。`,
  sol: String.raw`第一步：\(A\) 正定，\(|A|=3\)，\(A^{-1}=\frac13\begin{pmatrix}2&-1\\-1&2\end{pmatrix}\)。
第二步：Schur 补为 \(0-B^{T}A^{-1}B=-A^{-1}\)，其特征值为 \(-1,-\frac13\)，负定。
第三步：作合同变换得 \(M\) 合同于 \(\mathrm{diag}(A,-A^{-1})\)，故 \(p=2,\ q=2\)，\(\mathrm{rank}M=4\)。
第四步：\(|M|=|A|\cdot|-A^{-1}|=3\cdot\frac13=1\)（\(B=I_2\) 时也可由分块行列式 \(|M|=(-1)^{2}|B|^{2}=1\) 得到）。
第五步：因为出现了负特征值，\(M\) 不是半正定矩阵；它是不定矩阵。`,
},
{ id:'LA07-79', ch:7, type:'证明', diff:5, tags:'正定矩阵乘积 迹 不等式 等号条件',
  q: String.raw`设 \(A,B\) 都是 \(n\) 阶实正定矩阵。证明：\(\mathrm{tr}(AB)\ge n\left(|A||B|\right)^{1/n}\)，并求等号成立的条件。`,
  a: String.raw`\(\mathrm{tr}(AB)=\sum\mu_i\ge n\left(\prod\mu_i\right)^{1/n}=n(|A||B|)^{1/n}\)，等号成立当且仅当 \(B=kA^{-1}\)（\(k>0\)）。`,
  sol: String.raw`第一步：\(A\) 正定，令 \(C=A^{1/2}BA^{1/2}\)，则 \(C\) 正定（与 \(B\) 合同），设其特征值为 \(\mu_1,\dots,\mu_n>0\)。
第二步：利用迹的循环性，\(\mathrm{tr}(AB)=\mathrm{tr}(A^{1/2}A^{1/2}B)=\mathrm{tr}(A^{1/2}BA^{1/2})=\sum_{i=1}^{n}\mu_i\)。
第三步：\(|C|=|A^{1/2}|\,|B|\,|A^{1/2}|=|A||B|=\prod\mu_i\)，由 AM-GM 不等式得 \(\sum\mu_i\ge n\left(\prod\mu_i\right)^{1/n}=n(|A||B|)^{1/n}\)。
第四步：等号成立 \(\iff\mu_1=\dots=\mu_n=\mu\)，即 \(C=\mu I\)，亦即 \(A^{1/2}BA^{1/2}=\mu I\)，左乘右乘 \(A^{-1/2}\) 得 \(B=\mu A^{-1}\)；记 \(k=\mu>0\) 即为 \(B=kA^{-1}\)，等价地 \(A=k'B\)。取 \(B=A\) 时两端都等于 \(n|A|^{2/n}\) 当且仅当 \(A\) 的特征值全相等。`,
},
{ id:'LA07-80', ch:7, type:'计算', diff:5, tags:'配方法 全一矩阵 球面最值 惯性指数',
  q: String.raw`设 \(f=2x_1^{2}+2x_2^{2}+2x_3^{2}-2x_1x_2-2x_2x_3-2x_1x_3\)。求其标准形、惯性指数，以及 \(f\) 在 \(\|x\|=1\) 上的最大值与最小值，并解 \(f=0\)。`,
  a: String.raw`标准形 \(f=3y_2^{2}+3y_3^{2}\)，\(p=2,\ q=0\)，\(\mathrm{rank}A=2\)；球面上最大值 3、最小值 0；\(f=0\iff x_1=x_2=x_3\)。`,
  sol: String.raw`第一步：配方。\(f=3\sum x_i^{2}-\left(\sum x_i\right)^{2}\)（因为 \(2\sum x_i^{2}-2\sum_{i<j}x_ix_j=3\sum x_i^{2}-(\sum x_i)^{2}\)），矩阵为 \(A=3I-J\)。
第二步：\(J\) 的特征值为 \(3,0,0\)，故 \(A\) 的特征值为 \(0,3,3\)。
第三步：由此得标准形 \(f=3y_2^{2}+3y_3^{2}\)，\(p=2,\ q=0,\ \mathrm{rank}A=2\)，\(f\) 半正定但不正定。
第四步：在 \(\|x\|=1\) 上 \(f=x^{T}Ax\in[0,3]\)：最大值 3 在 \(A\) 的 3 特征子空间（即 \(x\perp(1,1,1)\)）中的单位向量处取到；最小值 0 在 \(x=\pm\frac{1}{\sqrt3}(1,1,1)\) 处取到。
第五步：\(f=0\iff\left(\sum x_i\right)^{2}=3\sum x_i^{2}\iff x_1=x_2=x_3\)（由柯西不等式取等条件）。`,
},
{ id:'LA07-81', ch:7, type:'计算', diff:5, tags:'参数讨论 正定判定 三对角 特征值',
  q: String.raw`设 \(f=x_1^{2}+x_2^{2}+x_3^{2}+2a(x_1x_2+x_2x_3)\)（\(a\) 为实常数）。求 \(a\) 的取值范围使 \(f\) 正定、使 \(f\) 半正定；并求 \(a=\frac{1}{\sqrt2}\) 时 \(f\) 的标准形、惯性指数与 \(f=0\) 的解集。`,
  a: String.raw`正定 \(\iff |a|<\frac{1}{\sqrt2}\)；半正定 \(\iff |a|\le\frac{1}{\sqrt2}\)。\(a=\frac{1}{\sqrt2}\) 时特征值为 \(2,1,0\)，标准形 \(2y_1^{2}+y_2^{2}\)，\(p=2,\ q=0\)，\(f=0\iff x=t(1,-\sqrt2,1)^{T}\)。`,
  sol: String.raw`第一步：二次型的矩阵为 \(A=I+aP\)，其中 \(P=\begin{pmatrix}0&1&0\\1&0&1\\0&1&0\end{pmatrix}\)。
第二步：\(P\) 的特征值为 \(\sqrt2,0,-\sqrt2\)（特征向量分别为 \((1,\sqrt2,1)^{T},(1,0,-1)^{T},(1,-\sqrt2,1)^{T}\)），且 \(A\) 与 \(P\) 可用同一组标准正交特征向量对角化。
第三步：故 \(A\) 的特征值为 \(1+\sqrt2a,\ 1,\ 1-\sqrt2a\)；正定 \(\iff\) 三个特征值全正 \(\iff|a|<\frac{1}{\sqrt2}\)。
第四步：半正定 \(\iff\) 三个特征值全非负 \(\iff|a|\le\frac{1}{\sqrt2}\)。
第五步：\(a=\frac{1}{\sqrt2}\) 时特征值为 \(2,1,0\)，作正交变换即得标准形 \(2y_1^{2}+y_2^{2}\)，故 \(p=2,\ q=0,\ \mathrm{rank}A=2\)；零特征值对应特征向量 \((1,-\sqrt2,1)^{T}\)，故 \(f=0\iff x=t(1,-\sqrt2,1)^{T}\)。`,
},
{ id:'LA07-82', ch:7, type:'证明', diff:5, tags:'半正定矩阵乘积 特征值',
  q: String.raw`设 \(A,B\) 都是 \(n\) 阶实半正定矩阵。证明：\(AB\) 的特征值都是非负实数。`,
  a: String.raw`设 \(ABx=\lambda x\)（\(x\ne0\)），左乘 \(x^{T}B\) 得 \(\lambda\,x^{T}Bx=(Bx)^{T}A(Bx)\ge0\)，而 \(x^{T}Bx>0\)，故 \(\lambda\) 是非负实数。`,
  sol: String.raw`第一步：设 \(\lambda\) 是 \(AB\) 的特征值，\(x\ne0\) 使 \(ABx=\lambda x\)。把等式转置得 \(x^{T}BA=\lambda x^{T}\)。
第二步：若 \(Bx=0\)，则 \(\lambda x=ABx=0\)，故 \(\lambda=0\)，结论成立。
第三步：若 \(Bx\ne0\)：由 \(B\) 半正定，\(x^{T}Bx=\|B^{1/2}x\|^{2}\)，而 \(B^{1/2}x=0\) 会推出 \(Bx=0\)，故 \(x^{T}Bx>0\)。
第四步：用 \(x^{T}BA=\lambda x^{T}\) 右乘 \(Bx\)，得 \(x^{T}BABx=\lambda\,x^{T}Bx\)。左端 \(=(Bx)^{T}A(Bx)\ge0\)（\(A\) 半正定），右端为 \(\lambda\) 乘一个正实数，故 \(\lambda\) 是非负实数。`,
},
{ id:'LA07-83', ch:7, type:'计算', diff:5, tags:'矩阵平方根 分块对角 正交对角化',
  q: String.raw`设 \(A=\begin{pmatrix}2&1&0\\1&2&0\\0&0&4\end{pmatrix}\)。求 \(A\) 的正定平方根 \(B\)（即 \(B^{2}=A\) 且 \(B\) 正定）。`,
  a: String.raw`\(B=\begin{pmatrix}\frac{\sqrt3+1}{2}&\frac{\sqrt3-1}{2}&0\\\frac{\sqrt3-1}{2}&\frac{\sqrt3+1}{2}&0\\0&0&2\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(A\) 是分块对角矩阵，左上块 \(A_1=\begin{pmatrix}2&1\\1&2\end{pmatrix}\)，右下块为 \((4)\)，故正定平方根也分块对角。
第二步：\(A_1\) 的特征值为 \(3,1\)，由 \(Q=\frac{1}{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}\) 得 \(A_1^{1/2}=Q\,\mathrm{diag}(\sqrt3,1)\,Q^{T}=\frac12\begin{pmatrix}\sqrt3+1&\sqrt3-1\\\sqrt3-1&\sqrt3+1\end{pmatrix}\)。
第三步：一阶块 \((4)\) 的正定平方根为 \(2\)，故 \(B\) 如上；\(B\) 对称且特征值 \(\sqrt3,1,2\) 全正，故 \(B\) 正定。
第四步：验证：左上块平方得 \(\frac14\begin{pmatrix}8&4\\4&8\end{pmatrix}=\begin{pmatrix}2&1\\1&2\end{pmatrix}\)，右下块 \(2^{2}=4\)，故 \(B^{2}=A\)。`,
},
{ id:'LA07-84', ch:7, type:'计算', diff:5, tags:'二次曲面 惯性定理 参数分类',
  q: String.raw`设 \(\lambda\) 为实常数，讨论方程 \(x_1^{2}+x_2^{2}+\lambda x_3^{2}+2x_1x_2=1\) 所表示的曲面类型（按 \(\lambda>0\)、\(\lambda=0\)、\(\lambda<0\) 分类），并说明理由。`,
  a: String.raw`\(\lambda>0\) 时为椭圆柱面；\(\lambda=0\) 时为两张平行平面 \(x_1+x_2=\pm1\)；\(\lambda<0\) 时为双曲柱面。`,
  sol: String.raw`第一步：二次型的矩阵为 \(A=\begin{pmatrix}1&1&0\\1&1&0\\0&0&\lambda\end{pmatrix}\)，左上块 \(\begin{pmatrix}1&1\\1&1\end{pmatrix}\) 的特征值为 \(2,0\)。
第二步：故 \(A\) 的特征值为 \(2,\ 0,\ \lambda\)。作正交变换 \(x=Qy\)（\(Q\) 取 \(A\) 的标准正交特征向量组），方程化为 \(2y_1^{2}+\lambda y_3^{2}=1\)，而 \(y_2\) 不出现（柱面方向）。
第三步：\(\lambda>0\) 时两个系数同为正且有一个变量自由，是椭圆柱面（母线平行于 \(y_2\) 轴）。
第四步：\(\lambda=0\) 时方程化为 \(2y_1^{2}=1\)，即 \(y_1=\pm\frac{1}{\sqrt2}\)，是两张平行平面；由 \(y_1=\frac{1}{\sqrt2}(x_1+x_2)\) 回到原变量，得 \(x_1+x_2=\pm1\)（两平面距离为 \(\sqrt2\)）。
第五步：\(\lambda<0\) 时方程化为 \(2y_1^{2}-|\lambda|y_3^{2}=1\)，是双曲柱面。`,
},
{ id:'LA07-85', ch:7, type:'证明', diff:4, tags:'正定判定 合同 单位矩阵',
  q: String.raw`设 \(A\) 为 \(n\) 阶实对称矩阵。证明：\(A\) 正定当且仅当存在可逆矩阵 \(C\) 使 \(C^{T}AC=I\)。`,
  a: String.raw`必要性取 \(C=Q\Lambda^{-1/2}\)；充分性由 \(A=C^{-T}C^{-1}\) 得 \(x^{T}Ax=\|C^{-1}x\|^{2}>0\)。`,
  sol: String.raw`第一步：必要性。\(A\) 正定，存在正交矩阵 \(Q\) 使 \(A=Q\Lambda Q^{T}\)，\(\Lambda=\mathrm{diag}(\lambda_i)\)，\(\lambda_i>0\)。
第二步：令 \(C=Q\Lambda^{-1/2}\)，则 \(C\) 可逆，且 \(C^{T}AC=\Lambda^{-1/2}Q^{T}Q\Lambda Q^{T}Q\Lambda^{-1/2}=\Lambda^{-1/2}\Lambda\Lambda^{-1/2}=I\)。
第三步：充分性。设 \(C^{T}AC=I\)，则 \(A=C^{-T}C^{-1}\)，且 \(A\) 对称。对任意 \(x\ne0\)，\(C^{-1}x\ne0\)，故 \(x^{T}Ax=(C^{-1}x)^{T}(C^{-1}x)=\|C^{-1}x\|^{2}>0\)，即 \(A\) 正定。
第四步：这说明正定矩阵恰好构成单位矩阵所在的合同类；结合惯性定理，一般实对称矩阵合同于 \(\mathrm{diag}(I_p,-I_q,0)\)。`,
},
{ id:'LA07-86', ch:7, type:'计算', diff:5, tags:'参数讨论 正定判定 主子式',
  q: String.raw`设 \(A=\begin{pmatrix}1&1&1\\1&2&a\\1&a&3\end{pmatrix}\)（\(a\) 为实常数）。求 \(a\) 的取值范围使 \(A\) 正定、使 \(A\) 半正定。`,
  a: String.raw`正定 \(\iff 1-\sqrt2<a<1+\sqrt2\)；半正定 \(\iff 1-\sqrt2\le a\le 1+\sqrt2\)。`,
  sol: String.raw`第一步：顺序主子式 \(\Delta_1=1\)，\(\Delta_2=\begin{vmatrix}1&1\\1&2\end{vmatrix}=1\)，\(\Delta_3=|A|=1+2a-a^{2}\)。
第二步：正定 \(\iff\) 顺序主子式全正 \(\iff a^{2}-2a-1<0\iff 1-\sqrt2<a<1+\sqrt2\)。
第三步：半正定需所有主子式非负。二阶主子式为 \(1,\ 2,\ \begin{vmatrix}2&a\\a&3\end{vmatrix}=6-a^{2}\)，要求 \(|a|\le\sqrt6\)。
第四步：与 \(\Delta_3=1+2a-a^{2}\ge0\) 即 \(1-\sqrt2\le a\le 1+\sqrt2\) 取交集。由于 \(1+\sqrt2\approx2.414<\sqrt6\approx2.449\)、\(1-\sqrt2\approx-0.414>-\sqrt6\)，该区间整体包含在 \(|a|\le\sqrt6\) 之内。
第五步：故半正定 \(\iff 1-\sqrt2\le a\le 1+\sqrt2\)；在端点 \(a=1\pm\sqrt2\) 处 \(|A|=0\)、秩为 2，是半正定但非正定。`,
},
{ id:'LA07-87', ch:7, type:'计算', diff:5, tags:'三对角矩阵 行列式递推 特征值 最值',
  q: String.raw`设 \(f=2\sum_{i=1}^{4}x_i^{2}-2\sum_{i=1}^{3}x_ix_{i+1}\)。写出 \(f\) 的矩阵 \(A\)，证明 \(A\) 正定并求 \(|A|\)；再求 \(f\) 在 \(\|x\|=1\) 上的最大值与最小值。`,
  a: String.raw`\(A\) 为 4 阶三对角矩阵（主对角 2，次对角 \(-1\)），\(A\) 正定，\(|A|=5\)；球面上最大值 \(\frac{5+\sqrt5}{2}\)，最小值 \(\frac{3-\sqrt5}{2}\)。`,
  sol: String.raw`第一步：\(A=\begin{pmatrix}2&-1&0&0\\-1&2&-1&0\\0&-1&2&-1\\0&0&-1&2\end{pmatrix}\)，记 \(D_n\) 为其 \(n\) 阶顺序主子式。
第二步：按第一行展开得递推 \(D_n=2D_{n-1}-D_{n-2}\)，初值 \(D_1=2,\ D_2=3\)，故 \(D_n=n+1\)。
第三步：\(D_1,D_2,D_3,D_4=2,3,4,5\) 全正，由顺序主子式判据 \(A\) 正定，\(|A|=D_4=5\)。
第四步：\(A\) 的特征值为 \(2-2\cos\frac{k\pi}{5}\)（\(k=1,2,3,4\)），即 \(\frac{3-\sqrt5}{2},\ \frac{5-\sqrt5}{2},\ \frac{3+\sqrt5}{2},\ \frac{5+\sqrt5}{2}\)。
第五步：由 Rayleigh 商，\(\|x\|=1\) 上 \(f\) 的最大值、最小值就是最大、最小特征值：最大值 \(\frac{5+\sqrt5}{2}\)，最小值 \(\frac{3-\sqrt5}{2}\)（都为正，与正定性一致）。`,
},
{ id:'LA07-88', ch:7, type:'证明', diff:5, tags:'矩阵幂 半正定 正定 反例',
  q: String.raw`设 \(A\) 为 \(n\) 阶实对称矩阵，\(k\) 为正整数。证明：(1) 若 \(A\) 半正定，则 \(A^{k}\) 半正定；(2) 若 \(A\) 正定，则 \(A^{k}\) 正定；(3) 当 \(k\) 为偶数时，由 \(A^{k}\) 正定不能推出 \(A\) 正定，给出反例；(4) 当 \(k\) 为奇数时，由 \(A^{k}\) 正定可推出 \(A\) 正定。`,
  a: String.raw`\(A^{k}\) 的特征值为 \(\lambda_i^{k}\)；(3) 的反例为 \(A=\mathrm{diag}(1,-1)\)、\(k=2\)，此时 \(A^{2}=I\) 正定而 \(A\) 不正定。`,
  sol: String.raw`第一步：\(A\) 实对称，存在正交矩阵 \(Q\) 使 \(A=Q\Lambda Q^{T}\)，\(\Lambda=\mathrm{diag}(\lambda_1,\dots,\lambda_n)\)，\(\lambda_i\) 为实数。
第二步：\(A^{k}=Q\Lambda^{k}Q^{T}\)，其特征值为 \(\lambda_i^{k}\)。
第三步：(1) 若 \(\lambda_i\ge0\)，则 \(\lambda_i^{k}\ge0\)，故 \(A^{k}\) 半正定；(2) 若 \(\lambda_i>0\)，则 \(\lambda_i^{k}>0\)，故 \(A^{k}\) 正定。
第四步：(3) 取 \(A=\mathrm{diag}(1,-1)\)、\(k=2\)，则 \(A^{2}=I\) 正定，但 \(A\) 的特征值有负数，\(A\) 不正定。
第五步：(4) 若 \(k\) 为奇数且 \(A^{k}\) 正定，则每个 \(\lambda_i^{k}>0\)；\(k\) 为奇数时 \(\lambda_i^{k}\) 与 \(\lambda_i\) 同号，故 \(\lambda_i>0\) 对一切 \(i\) 成立，即 \(A\) 正定。`,
},
{ id:'LA07-89', ch:7, type:'证明', diff:5, tags:'同时合同对角化 广义特征值 正定矩阵',
  q: String.raw`设 \(A,B\) 都是 \(n\) 阶实对称矩阵，且 \(A\) 正定。证明：存在可逆矩阵 \(C\)，使 \(C^{T}AC=I\) 且 \(C^{T}BC=\mathrm{diag}(\mu_1,\dots,\mu_n)\)，其中 \(\mu_i\) 是 \(A^{-1}B\) 的特征值。`,
  a: String.raw`先取 \(C_1=A^{-1/2}\) 把 \(A\) 化为 \(I\)，再对对称矩阵 \(C_1^{T}BC_1\) 作正交对角化，令 \(C=C_1Q\) 即可。`,
  sol: String.raw`第一步：\(A\) 正定，令 \(C_1=A^{-1/2}\)，则 \(C_1^{T}AC_1=A^{-1/2}AA^{-1/2}=I\)。
第二步：记 \(B_1=C_1^{T}BC_1\)，它是对称矩阵，故存在正交矩阵 \(Q\) 使 \(Q^{T}B_1Q=\mathrm{diag}(\mu_1,\dots,\mu_n)\)。
第三步：令 \(C=C_1Q\)，则 \(C\) 可逆，且 \(C^{T}AC=Q^{T}Q=I\)，\(C^{T}BC=Q^{T}B_1Q=\mathrm{diag}(\mu_1,\dots,\mu_n)\)。
第四步：说明 \(\mu_i\) 是广义特征值。由 \(C^{T}AC=I\) 得 \(A=C^{-T}C^{-1}\)，故 \(A^{-1}=CC^{T}\)；于是 \(A^{-1}BC=CC^{T}BC=C\,\mathrm{diag}(\mu_1,\dots,\mu_n)\)，即 \(C\) 的第 \(i\) 列是 \(A^{-1}B\) 对应于 \(\mu_i\) 的特征向量。`,
},
{ id:'LA07-90', ch:7, type:'计算', diff:5, tags:'二次曲面 退化 全一矩阵 秩一',
  q: String.raw`化方程 \(x_1^{2}+x_2^{2}+x_3^{2}+2x_1x_2+2x_1x_3+2x_2x_3=4\) 为标准形，判断它表示什么图形，并求两图形之间的距离。`,
  a: String.raw`标准形为 \(3y_1^{2}=4\)，图形是两张平行平面 \(x_1+x_2+x_3=\pm2\)，两平面之间的距离为 \(\frac{4}{\sqrt3}\)。`,
  sol: String.raw`第一步：方程左端的矩阵为 \(A=J\)（三阶全 1 矩阵），因为 \(x^{T}Jx=\left(\sum x_i\right)^{2}\)。
第二步：\(J\) 的特征值为 \(3,0,0\)，\(\mathrm{rank}J=1\)，故二次型半正定、秩 1。
第三步：取单位特征向量 \(\frac{1}{\sqrt3}(1,1,1)^{T}\) 及 \(\mathbf{1}^{\perp}\) 中的两个标准正交向量作正交变换 \(x=Qy\)，方程化为 \(3y_1^{2}=4\)，即 \(y_1=\pm\frac{2}{\sqrt3}\)。
第四步：回到原变量，\(y_1=\frac{1}{\sqrt3}(x_1+x_2+x_3)\)，故 \(x_1+x_2+x_3=\pm2\)，是两张平行平面。
第五步：两平面法向量为 \((1,1,1)^{T}\)，距离为 \(\frac{|2-(-2)|}{\sqrt3}=\frac{4}{\sqrt3}\)。`,
},
{ id:'LA07-91', ch:7, type:'证明', diff:4, tags:'合同 相似 逆矩阵 正定',
  q: String.raw`设 \(A\) 为 \(n\) 阶实正定矩阵。证明：\(A\) 与 \(A^{-1}\) 合同；并举反例说明它们不一定相似。`,
  a: String.raw`取 \(C=A^{-1}\) 得 \(C^{T}AC=A^{-1}AA^{-1}=A^{-1}\)，故合同；\(A=\mathrm{diag}(1,2)\) 时 \(A^{-1}=\mathrm{diag}(1,\frac12)\)，特征值不同，故不相似。`,
  sol: String.raw`第一步：\(A\) 正定故可逆，取 \(C=A^{-1}\)，它可逆且对称。
第二步：\(C^{T}AC=A^{-1}AA^{-1}=A^{-1}\)，故 \(A\) 与 \(A^{-1}\) 合同（也可取 \(C=A^{-1/2}\)，此时 \(C^{T}AC=I\)，再注意 \(I\) 与 \(A^{-1}\) 同为正定）。
第三步：也可用惯性定理解释：\(A\) 与 \(A^{-1}\) 的特征值都为正，正惯性指数都是 \(n\)、负惯性指数都是 0，故必合同。
第四步：反例。\(A=\mathrm{diag}(1,2)\) 正定，\(A^{-1}=\mathrm{diag}(1,\frac12)\)，特征值组 \(\{1,2\}\) 与 \(\{1,\frac12\}\) 不同，故不相似。相似要求特征值完全相同，而合同只要求惯性指数相同。`,
},
{ id:'LA07-92', ch:7, type:'证明', diff:5, tags:'Sylvester 判据 顺序主子式 归纳法',
  q: String.raw`设 \(A=(a_{ij})\) 为 \(n\) 阶实对称矩阵，\(\Delta_k\) 为其 \(k\) 阶顺序主子式。用归纳法证明 Sylvester 判据：\(A\) 正定当且仅当 \(\Delta_1,\Delta_2,\dots,\Delta_n\) 全大于 0。`,
  a: String.raw`必要性由主子矩阵正定得到；充分性对 \(n\) 归纳，用 Schur 补 \(S=a_{nn}-\alpha^{T}A_{n-1}^{-1}\alpha=\Delta_n/\Delta_{n-1}>0\) 与分块合同变换完成。`,
  sol: String.raw`第一步：必要性。设 \(A\) 正定，取 \(k\) 阶顺序主子矩阵 \(A_k\) 及 \(x=(x_k,0)^{T}\ne0\)，则 \(x^{T}Ax=x_k^{T}A_kx_k>0\)，故 \(A_k\) 正定，\(\Delta_k=|A_k|>0\)。
第二步：充分性对 \(n\) 归纳。\(n=1\) 时 \(\Delta_1=a_{11}>0\) 即正定。设结论对 \(n-1\) 成立，则由 \(\Delta_1,\dots,\Delta_{n-1}>0\) 知 \(A_{n-1}\) 正定、可逆。
第三步：把 \(A\) 分块为 \(\begin{pmatrix}A_{n-1}&\alpha\\\alpha^{T}&a_{nn}\end{pmatrix}\)，取 \(P=\begin{pmatrix}I&-A_{n-1}^{-1}\alpha\\0&1\end{pmatrix}\)，得 \(P^{T}AP=\mathrm{diag}(A_{n-1},\,S)\)，其中 \(S=a_{nn}-\alpha^{T}A_{n-1}^{-1}\alpha\) 为 Schur 补。
第四步：两边取行列式得 \(\Delta_n=|A_{n-1}|\,S\)，而 \(\Delta_n>0,\ |A_{n-1}|=\Delta_{n-1}>0\)，故 \(S>0\)。
第五步：\(A\) 合同于 \(\mathrm{diag}(A_{n-1},S)\)，两者都正定，合同变换保持正定性，故 \(A\) 正定。`,
},
{ id:'LA07-93', ch:7, type:'证明', diff:5, tags:'半正定 柯西不等式 判别式',
  q: String.raw`设 \(A\) 为 \(n\) 阶实半正定矩阵。证明：对任意 \(x,y\in\mathbf{R}^{n}\)，有 \(\left(x^{T}Ay\right)^{2}\le\left(x^{T}Ax\right)\left(y^{T}Ay\right)\)。`,
  a: String.raw`对任意实数 \(t\)，\((x+ty)^{T}A(x+ty)\ge0\)，这是 \(t\) 的非负二次式，判别式非正即得结论。`,
  sol: String.raw`第一步：令 \(\varphi(t)=(x+ty)^{T}A(x+ty)=t^{2}\,y^{T}Ay+2t\,x^{T}Ay+x^{T}Ax\)，由 \(A\) 半正定知 \(\varphi(t)\ge0\) 对一切实数 \(t\) 成立。
第二步：若 \(y^{T}Ay=0\)，则 \(\varphi(t)=2t\,x^{T}Ay+x^{T}Ax\ge0\) 对一切 \(t\) 成立，只能 \(x^{T}Ay=0\)，此时待证不等式两边都为 0，成立。
第三步：若 \(y^{T}Ay>0\)，则 \(\varphi\) 是首项系数为正的二次式且恒非负，其判别式 \(\Delta=4\left(x^{T}Ay\right)^{2}-4\left(x^{T}Ax\right)\left(y^{T}Ay\right)\le0\)，即得 \(\left(x^{T}Ay\right)^{2}\le\left(x^{T}Ax\right)\left(y^{T}Ay\right)\)。
第四步：等号成立当且仅当存在 \(t\) 使 \(A(x+ty)=0\)；当 \(A\) 正定时即 \(x+ty=0\)，也就是 \(x,y\) 共线。取 \(A=I\) 即退化为通常的柯西不等式。`,
},
{ id:'LA07-94', ch:7, type:'证明', diff:4, tags:'正定矩阵 对角元 二阶主子式',
  q: String.raw`设 \(A=(a_{ij})\) 为 \(n\) 阶实正定矩阵。证明：对任意 \(i\)，\(a_{ii}>0\)；且当 \(i\ne j\) 时 \(\left|a_{ij}\right|<\sqrt{a_{ii}a_{jj}}\)。`,
  a: String.raw`二阶主子矩阵 \(\begin{pmatrix}a_{ii}&a_{ij}\\a_{ji}&a_{jj}\end{pmatrix}\) 正定，故 \(a_{ii}>0\) 且 \(a_{ii}a_{jj}-a_{ij}^{2}>0\)。`,
  sol: String.raw`第一步：正定矩阵的主子矩阵仍正定。取一阶主子矩阵得 \(a_{ii}>0\)。
第二步：当 \(i\ne j\) 时，取二阶主子矩阵 \(A_{ij}=\begin{pmatrix}a_{ii}&a_{ij}\\a_{ji}&a_{jj}\end{pmatrix}\)，它正定（\(A\) 限制在坐标子空间上仍正定）。
第三步：二阶矩阵正定的充要条件是 \(a_{ii}>0\) 且 \(a_{ii}a_{jj}-a_{ij}^{2}>0\)（用了 \(a_{ji}=a_{ij}\)），即 \(a_{ij}^{2}<a_{ii}a_{jj}\)。
第四步：开方得 \(\left|a_{ij}\right|<\sqrt{a_{ii}a_{jj}}\)。这说明正定矩阵的对角元全正，且绝对值最大的元素一定出现在对角线上；等号情形 \(\left|a_{ij}\right|=\sqrt{a_{ii}a_{jj}}\) 只在半正定而非正定时出现。`,
},
{ id:'LA07-95', ch:7, type:'计算', diff:5, tags:'分块正定 Schur 补 参数讨论',
  q: String.raw`设 \(M=\begin{pmatrix}I_2&B\\B^{T}&aI_2\end{pmatrix}\)，其中 \(B=\begin{pmatrix}1&1\\0&1\end{pmatrix}\)，\(a\) 为实常数。求 \(a\) 的取值范围使 \(M\) 正定。`,
  a: String.raw`\(M\) 正定 \(\iff a>\frac{3+\sqrt5}{2}\)。`,
  sol: String.raw`第一步：左上块 \(A=I_2\) 正定，故 \(M\) 正定 \(\iff\) Schur 补 \(S=aI_2-B^{T}B\) 正定。
第二步：计算 \(B^{T}B=\begin{pmatrix}1&1\\1&2\end{pmatrix}\)，故 \(S=\begin{pmatrix}a-1&-1\\-1&a-2\end{pmatrix}\)。
第三步：二阶对称矩阵正定 \(\iff\) 顺序主子式全正，即 \(a-1>0\) 且 \(|S|=(a-1)(a-2)-1=a^{2}-3a+1>0\)。
第四步：\(a^{2}-3a+1>0\) 的解为 \(a<\frac{3-\sqrt5}{2}\) 或 \(a>\frac{3+\sqrt5}{2}\)；与 \(a>1\) 取交集，得 \(a>\frac{3+\sqrt5}{2}\)。`,
},
{ id:'LA07-96', ch:7, type:'计算', diff:4, tags:'秩一矩阵 二次型 规范形',
  q: String.raw`设 \(A=vv^{T}\)，其中 \(v=(1,2,3)^{T}\)。求 \(\mathrm{rank}A\)、\(A\) 的特征值与惯性指数；写出 \(f(x)=x^{T}Ax\) 的标准形与规范形，解 \(f=0\)，并求 \(f\) 在 \(\|x\|=1\) 上的最值。`,
  a: String.raw`\(\mathrm{rank}A=1\)，特征值 \(14,0,0\)，\(p=1,\ q=0\)；标准形 \(14y_1^{2}\)，规范形 \(z_1^{2}\)；\(f=0\iff x_1+2x_2+3x_3=0\)；球面上最大值 14、最小值 0。`,
  sol: String.raw`第一步：\(\mathrm{tr}A=\|v\|^{2}=14\)，且 \(Av=v(v^{T}v)=14v\)，故 \(A\) 的特征值为 \(14,0,0\)，秩为 1。
第二步：\(f=x^{T}vv^{T}x=(v^{T}x)^{2}=(x_1+2x_2+3x_3)^{2}\)，故 \(p=1,\ q=0\)，半正定。
第三步：取 \(u=\frac{v}{\|v\|}\) 及 \(u^{\perp}\) 的标准正交基构成正交矩阵 \(Q\)，令 \(x=Qy\)，得标准形 \(14y_1^{2}\)；再令 \(z_1=\sqrt{14}\,y_1\) 得规范形 \(z_1^{2}\)。
第四步：\(f=0\iff v^{T}x=0\iff x_1+2x_2+3x_3=0\)，即过原点、以 \(v\) 为法向量的平面。
第五步：在 \(\|x\|=1\) 上，由柯西不等式 \(f=(v^{T}x)^{2}\le\|v\|^{2}\|x\|^{2}=14\)，最大值 14 在 \(x=\pm\frac{v}{\|v\|}\) 取到；最小值 0 在 \(x\perp v\) 的单位向量处取到。`,
},
{ id:'LA07-97', ch:7, type:'证明', diff:5, tags:'正定矩阵 逆矩阵 对角元 Schur 补',
  q: String.raw`设 \(A=(a_{ij})\) 为 \(n\) 阶实正定矩阵，记 \(A^{-1}=(a^{ij})\)。证明：\(a^{ii}\ge\frac{1}{a_{ii}}\)，并指出等号成立的条件。`,
  a: String.raw`\(a^{ii}=\frac{1}{a_{ii}-\alpha^{T}A_1^{-1}\alpha}\ge\frac{1}{a_{ii}}\)，等号成立当且仅当第 \(i\) 行除对角元外全为 0。`,
  sol: String.raw`第一步：把第 \(i\) 个坐标放到最后，将 \(A\) 分块为 \(\begin{pmatrix}A_1&\alpha\\\alpha^{T}&a_{ii}\end{pmatrix}\)，其中 \(A_1\) 是 \(n-1\) 阶主子矩阵，正定。
第二步：由分块求逆公式，\(A^{-1}\) 的相应对角元为 \(a^{ii}=\left(a_{ii}-\alpha^{T}A_1^{-1}\alpha\right)^{-1}\)；由正定性该 Schur 补为正。
第三步：\(A_1\) 正定故 \(A_1^{-1}\) 正定，\(\alpha^{T}A_1^{-1}\alpha\ge0\)，于是 \(0<a_{ii}-\alpha^{T}A_1^{-1}\alpha\le a_{ii}\)，取倒数得 \(a^{ii}\ge\frac{1}{a_{ii}}\)。
第四步：等号成立 \(\iff\alpha^{T}A_1^{-1}\alpha=0\iff\alpha=0\)，即第 \(i\) 行（第 \(i\) 列）除对角元外全为 0。特别地当 \(A\) 没有这种分块结构时严格不等号成立。`,
},
{ id:'LA07-98', ch:7, type:'计算', diff:5, tags:'二次曲面 椭球 体积 正交变换',
  q: String.raw`设 \(f=3x_1^{2}+3x_2^{2}+3x_3^{2}+2x_1x_2+2x_1x_3+2x_2x_3\)。用正交变换化 \(f\) 为标准形，判断曲面 \(f=1\) 的类型并求其体积；再求 \(f\) 在 \(\|x\|=1\) 上的最值。`,
  a: String.raw`标准形 \(5y_1^{2}+2y_2^{2}+2y_3^{2}\)，曲面为椭球，体积 \(\frac{2\pi}{3\sqrt5}\)；球面上最大值 5、最小值 2。`,
  sol: String.raw`第一步：\(f\) 的矩阵为 \(A=2I+J\)，因为 \(3\sum x_i^{2}+2\sum_{i<j}x_ix_j=2\sum x_i^{2}+\left(\sum x_i\right)^{2}\)。
第二步：\(J\) 的特征值为 \(3,0,0\)，故 \(A\) 的特征值为 \(5,2,2\)，标准形为 \(f=5y_1^{2}+2y_2^{2}+2y_3^{2}\)（\(y_1\) 沿 \(\frac{1}{\sqrt3}(1,1,1)\)，另两个方向取 \(\mathbf{1}^{\perp}\) 的标准正交基）。
第三步：\(f=1\) 即 \(\frac{y_1^{2}}{1/5}+\frac{y_2^{2}}{1/2}+\frac{y_3^{2}}{1/2}=1\)，是椭球，三个半轴为 \(\frac{1}{\sqrt5},\frac{1}{\sqrt2},\frac{1}{\sqrt2}\)。
第四步：正交变换不改变体积，故体积为 \(\frac{4}{3}\pi\cdot\frac{1}{\sqrt5}\cdot\frac{1}{\sqrt2}\cdot\frac{1}{\sqrt2}=\frac{2\pi}{3\sqrt5}\)。
第五步：由 Rayleigh 商，\(\|x\|=1\) 上 \(f\) 的最大值为最大特征值 5，最小值为最小特征值 2。`,
},
{ id:'LA07-99', ch:7, type:'证明', diff:5, tags:'行列式引理 秩一修正 正定矩阵',
  q: String.raw`设 \(A\) 为 \(n\) 阶实正定矩阵，\(x\in\mathbf{R}^{n}\)。证明：\(A+xx^{T}\) 正定，且 \(\left|A+xx^{T}\right|=|A|\left(1+x^{T}A^{-1}x\right)\)。`,
  a: String.raw`\(A+xx^{T}=A^{1/2}\left(I+yy^{T}\right)A^{1/2}\)（\(y=A^{-1/2}x\)），\(I+yy^{T}\) 的特征值为 \(1+\|y\|^{2}\) 与 \(1\)（\(n-1\) 重），故行列式为 \(|A|\left(1+x^{T}A^{-1}x\right)\)。`,
  sol: String.raw`第一步：\(A\) 正定，\(A^{1/2}\) 可逆，记 \(y=A^{-1/2}x\)，则 \(A+xx^{T}=A^{1/2}\left(I+yy^{T}\right)A^{1/2}\)。
第二步：\(I+yy^{T}\) 是实对称矩阵，特征值为 \(1+\|y\|^{2}\)（特征向量 \(y\)）与 \(1\)（\(n-1\) 重，特征子空间 \(y^{\perp}\)），全部为正，故 \(I+yy^{T}\) 正定。
第三步：合同变换保持正定性，故 \(A+xx^{T}\) 正定；由行列式乘法得 \(\left|A+xx^{T}\right|=|A|\cdot\left|I+yy^{T}\right|=|A|\left(1+\|y\|^{2}\right)\)。
第四步：\(\|y\|^{2}=x^{T}A^{-1}x\)，故 \(\left|A+xx^{T}\right|=|A|\left(1+x^{T}A^{-1}x\right)\)。这也说明正定矩阵加上一个秩一半正定矩阵后行列式严格增大。`,
},
{ id:'LA07-100', ch:7, type:'计算', diff:5, tags:'分块矩阵 半正定 秩 零空间',
  q: String.raw`设 \(A=\begin{pmatrix}2&1\\1&2\end{pmatrix}\)，\(B=\begin{pmatrix}1&1\\0&1\end{pmatrix}\)，\(M=\begin{pmatrix}A&B\\B^{T}&B^{T}A^{-1}B\end{pmatrix}\)。写出 \(M\)，判断它是否半正定，求 \(\mathrm{rank}M\)、\(|M|\)，并求 \(M\) 的零空间的一组基。`,
  a: String.raw`\(M=\begin{pmatrix}2&1&1&1\\1&2&0&1\\1&0&2/3&1/3\\1&1&1/3&2/3\end{pmatrix}\)，\(M\) 半正定，\(\mathrm{rank}M=2\)，\(|M|=0\)，零空间的一组基为 \((-2,1,3,0)^{T}\) 与 \((-1,-1,0,3)^{T}\)。`,
  sol: String.raw`第一步：\(A^{-1}=\frac13\begin{pmatrix}2&-1\\-1&2\end{pmatrix}\)，故 \(B^{T}A^{-1}B=\frac13\begin{pmatrix}1&0\\1&1\end{pmatrix}\begin{pmatrix}2&-1\\-1&2\end{pmatrix}\begin{pmatrix}1&1\\0&1\end{pmatrix}=\frac13\begin{pmatrix}2&1\\1&2\end{pmatrix}\)，于是 \(M\) 如上。
第二步：取 \(P=\begin{pmatrix}I&-A^{-1}B\\0&I\end{pmatrix}\) 可逆，则 \(P^{T}MP=\mathrm{diag}(A,\ 0)\)（Schur 补为 \(B^{T}A^{-1}B-B^{T}A^{-1}B=0\)），故 \(M\) 半正定，\(\mathrm{rank}M=\mathrm{rank}A=2\)。
第三步：秩小于阶数，故 \(|M|=0\)，也说明 \(M\) 不正定。
第四步：解 \(M\begin{pmatrix}u\\v\end{pmatrix}=0\)，即 \(Au+Bv=0\) 与 \(B^{T}u+B^{T}A^{-1}Bv=0\)。由第一式 \(u=-A^{-1}Bv\)，代入第二式恒成立，故零空间为 \(\left\{\begin{pmatrix}-A^{-1}Bv\\v\end{pmatrix}:v\in\mathbf{R}^{2}\right\}\)。
第五步：\(A^{-1}B=\frac13\begin{pmatrix}2&1\\-1&1\end{pmatrix}\)，取 \(v=e_1,e_2\) 得 \(\left(-\frac23,\frac13,1,0\right)^{T}\) 与 \(\left(-\frac13,-\frac13,0,1\right)^{T}\)，同乘 3 得基 \((-2,1,3,0)^{T}\)、\((-1,-1,0,3)^{T}\)。`,
}
);
