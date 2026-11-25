window.LBANK = window.LBANK || [];
window.LBANK.push(
{ id:'LA08-01', ch:8, type:'计算', diff:4, tags:'子空间判定 维数 基 反对称矩阵',
  q: String.raw`设 \(V=\{A\in M_3(\mathbb R)\mid A^{T}=-A\}\)。(1) 证明 \(V\) 是 \(M_3(\mathbb R)\) 的子空间；(2) 求 \(\dim V\) 并给出一组基。`,
  a: String.raw`\(V\) 是子空间，\(\dim V=3\)，基为 \(E_{12}-E_{21},\ E_{13}-E_{31},\ E_{23}-E_{32}\)。`,
  sol: String.raw`第一步：零矩阵满足 \(0^{T}=-0\)，故 \(V\) 非空。
第二步：设 \(A,B\in V,\ k\in\mathbb R\)，则 \((A+B)^{T}=A^{T}+B^{T}=-A-B=-(A+B)\)，\((kA)^{T}=kA^{T}=-kA\)，故 \(A+B\in V,\ kA\in V\)，\(V\) 是子空间。
第三步：设 \(A=(a_{ij})\) 反对称，则 \(a_{ii}=0\)，且 \(a_{ji}=-a_{ij}\)，故 \(A\) 完全由严格上三角的 \(\frac{3\cdot2}{2}=3\) 个元素决定。
第四步：这 3 个元素对应的矩阵 \(E_{12}-E_{21},\ E_{13}-E_{31},\ E_{23}-E_{32}\) 线性无关（它们各在不同的位置上非零），且任一反对称矩阵都是它们的线性组合，故构成基，\(\dim V=3\)。
第五步：一般地，\(n\) 阶反对称矩阵空间的维数为 \(\frac{n(n-1)}{2}\)。` },

{ id:'LA08-02', ch:8, type:'计算', diff:5, tags:'基与维数 参数讨论 坐标',
  q: String.raw`设 \(\alpha_1=(1,1,a)^{T},\ \alpha_2=(1,a,1)^{T},\ \alpha_3=(a,1,1)^{T}\) 是 \(\mathbb R^{3}\) 中的向量。(1) 求 \(a\) 的值使 \(\alpha_1,\alpha_2,\alpha_3\) 构成 \(\mathbb R^{3}\) 的基；(2) 当 \(a=2\) 时求 \(\beta=(1,1,1)^{T}\) 在该基下的坐标。`,
  a: String.raw`(1) \(a\neq1\) 且 \(a\neq-2\)；(2) 坐标为 \(\left(\frac14,\frac14,\frac14\right)^{T}\)。`,
  sol: String.raw`第一步：以三向量为列作矩阵 \(A\)，则 \(|A|=\begin{vmatrix}1&1&a\\1&a&1\\a&1&1\end{vmatrix}=-(a-1)^{2}(a+2)\)。
第二步：三向量构成基当且仅当 \(|A|\neq0\)，即 \(a\neq1\) 且 \(a\neq-2\)；\(a=1\) 时三向量全为 \((1,1,1)^{T}\)，\(a=-2\) 时 \(\alpha_1+\alpha_2+\alpha_3=0\)，均线性相关。
第三步：\(a=2\) 时三向量关于坐标轮换对称，设 \(\beta=c_1\alpha_1+c_2\alpha_2+c_3\alpha_3\)，由对称性可取 \(c_1=c_2=c_3=c\)。
第四步：此时 \(c(\alpha_1+\alpha_2+\alpha_3)=c(4,4,4)^{T}=(1,1,1)^{T}\)，得 \(c=\frac14\)，故坐标为 \(\left(\frac14,\frac14,\frac14\right)^{T}\)；由 \(|A|=-4\neq0\) 知坐标唯一。` },

{ id:'LA08-03', ch:8, type:'计算', diff:5, tags:'过渡矩阵 坐标变换公式 基变换',
  q: String.raw`在 \(\mathbb R^{3}\) 中取基 \(\alpha_1=(1,1,0)^{T},\ \alpha_2=(1,0,1)^{T},\ \alpha_3=(0,1,1)^{T}\) 与基 \(\beta_1=(2,1,1)^{T},\ \beta_2=(1,1,2)^{T},\ \beta_3=(1,2,1)^{T}\)。(1) 求由基 \(\alpha\) 到基 \(\beta\) 的过渡矩阵 \(P\)；(2) 求 \(\gamma=(2,2,0)^{T}\) 在两组基下的坐标，并验证坐标变换公式。`,
  a: String.raw`\(P=\begin{pmatrix}1&0&1\\1&1&0\\0&1&1\end{pmatrix}\)；\(\gamma\) 在 \(\alpha\) 下坐标为 \((2,0,0)^{T}\)，在 \(\beta\) 下坐标为 \((1,-1,1)^{T}\)，且 \(x=Py\) 成立。`,
  sol: String.raw`第一步：过渡矩阵按定义满足 \((\beta_1,\beta_2,\beta_3)=(\alpha_1,\alpha_2,\alpha_3)P\)，即 \(P=A^{-1}B\)，其中 \(A,B\) 分别以 \(\alpha_i,\beta_j\) 为列。
第二步：直接观察得 \(\beta_1=\alpha_1+\alpha_2,\ \beta_2=\alpha_2+\alpha_3,\ \beta_3=\alpha_1+\alpha_3\)，故 \(P\) 如答案所示，\(|P|=2\neq0\)，确为过渡矩阵。
第三步：\(\gamma=2\alpha_1\)，故 \(\gamma\) 在基 \(\alpha\) 下的坐标为 \(x=(2,0,0)^{T}\)。
第四步：坐标变换公式为 \(x=Py\)（\(y\) 为 \(\beta\) 下的坐标），而 \(P^{-1}=\frac12\begin{pmatrix}1&1&-1\\-1&1&1\\1&-1&1\end{pmatrix}\)，故 \(y=P^{-1}x=(1,-1,1)^{T}\)。
第五步：验证 \(\beta_1-\beta_2+\beta_3=(2,1,1)-(1,1,2)+(1,2,1)=(2,2,0)=\gamma\)，与坐标 \((1,-1,1)^{T}\) 一致。` },

{ id:'LA08-04', ch:8, type:'计算', diff:5, tags:'线性变换的矩阵 核与像 维数定理',
  q: String.raw`设 \(\mathbb R[x]_3\) 是次数小于 \(3\) 的多项式（含零多项式）构成的线性空间，\(T(f(x))=f(x+1)-f(x)\)。(1) 求 \(T\) 在基 \(1,x,x^{2}\) 下的矩阵 \(A\)；(2) 求 \(\ker T\) 与 \(\operatorname{Im}T\) 的基和维数，并验证 \(\dim\ker T+\dim\operatorname{Im}T=\dim\mathbb R[x]_3\)。`,
  a: String.raw`\(A=\begin{pmatrix}0&1&1\\0&0&2\\0&0&0\end{pmatrix}\)；\(\ker T=\operatorname{span}\{1\}\)，\(\operatorname{Im}T=\operatorname{span}\{1,2x+1\}\)，维数分别为 \(1,2\)，和为 \(3\)。`,
  sol: String.raw`第一步：\(T(1)=0\)，\(T(x)=(x+1)-x=1\)，\(T(x^{2})=(x+1)^{2}-x^{2}=2x+1\)，把像的坐标按列排得 \(A\)。
第二步：解 \(A\xi=0\)：由 \(A(a,b,c)^{T}=(b+c,2c,0)^{T}=0\) 得 \(b=c=0\)，故 \(\ker T=\operatorname{span}\{(1,0,0)^{T}\}\)，对应常值多项式 \(1\)，\(\dim\ker T=1\)。
第三步：\(\operatorname{Im}T=\operatorname{span}\{T(1),T(x),T(x^{2})\}=\operatorname{span}\{1,2x+1\}\)，两多项式不成比例，故线性无关，\(\dim\operatorname{Im}T=2\)。
第四步：\(1+2=3=\dim\mathbb R[x]_3\)，维数定理成立。
第五步：这也说明 \(T\) 不是单射也不是满射，其核恰为常值多项式全体。` },

{ id:'LA08-05', ch:8, type:'计算', diff:5, tags:'核与像 值域的基 矩阵的秩',
  q: String.raw`设 \(T:\mathbb R^{4}\to\mathbb R^{3}\)，\(T(x)=Ax\)，其中 \(A=\begin{pmatrix}1&2&0&1\\2&4&0&2\\1&2&-1&1\end{pmatrix}\)。求 \(\ker T\) 与 \(\operatorname{Im}T\) 的基和维数。`,
  a: String.raw`\(\ker T=\operatorname{span}\{(-2,1,0,0)^{T},(-1,0,0,1)^{T}\}\)，\(\dim\ker T=2\)；\(\operatorname{Im}T=\operatorname{span}\{(1,2,1)^{T},(0,0,-1)^{T}\}\)，\(\dim\operatorname{Im}T=2\)。`,
  sol: String.raw`第一步：对 \(A\) 作初等行变换：第二行是第一行的 \(2\) 倍，第三行减去第一行得 \((0,0,-1,0)\)，故行最简形为 \(\begin{pmatrix}1&2&0&1\\0&0&1&0\\0&0&0&0\end{pmatrix}\)。
第二步：秩为 \(2\)，主元列是第 \(1,3\) 列，故 \(\operatorname{Im}T\) 的基取 \(A\) 的第 \(1,3\) 列：\((1,2,1)^{T}\) 与 \((0,0,-1)^{T}\)，\(\dim\operatorname{Im}T=2\)。
第三步：由行最简形得 \(x_1=-2x_2-x_4,\ x_3=0\)，令 \(x_2=1,x_4=0\) 与 \(x_2=0,x_4=1\) 得 \(\ker T\) 的基 \((-2,1,0,0)^{T}\) 与 \((-1,0,0,1)^{T}\)，\(\dim\ker T=2\)。
第四步：\(2+2=4=\dim\mathbb R^{4}\)，维数定理成立。` },

{ id:'LA08-06', ch:8, type:'证明', diff:5, tags:'维数定理 核 像 可逆判定',
  q: String.raw`设 \(T\) 是 \(n\) 维线性空间 \(V\) 上的线性变换。证明：(1) \(\dim\ker T+\dim\operatorname{Im}T=n\)；(2) \(T\) 可逆当且仅当 \(\ker T=\{0\}\)。`,
  a: String.raw`(1) 维数定理成立；(2) \(T\) 可逆当且仅当 \(\ker T=\{0\}\)，此时 \(\operatorname{Im}T=V\)。`,
  sol: String.raw`第一步：取 \(\ker T\) 的一组基 \(\varepsilon_1,\dots,\varepsilon_k\)，由基扩充定理把它扩充为 \(V\) 的基 \(\varepsilon_1,\dots,\varepsilon_k,\varepsilon_{k+1},\dots,\varepsilon_n\)。
第二步：证明 \(T\varepsilon_{k+1},\dots,T\varepsilon_n\) 线性无关：若 \(\sum_{i>k}c_iT\varepsilon_i=0\)，则 \(T\left(\sum_{i>k}c_i\varepsilon_i\right)=0\)，即 \(\sum_{i>k}c_i\varepsilon_i\in\ker T\)。
第三步：于是 \(\sum_{i>k}c_i\varepsilon_i=\sum_{i\le k}d_i\varepsilon_i\)，由基的线性无关性得所有系数为 \(0\)，特别地 \(c_i=0\)。
第四步：又对任意 \(v=\sum a_i\varepsilon_i\)，有 \(Tv=\sum_{i>k}a_iT\varepsilon_i\)（因 \(i\le k\) 时 \(T\varepsilon_i=0\)），故这 \(n-k\) 个向量张成 \(\operatorname{Im}T\)，是它的一组基，\(\dim\operatorname{Im}T=n-k\)。
第五步：故 \(\dim\ker T+\dim\operatorname{Im}T=k+(n-k)=n\)。
第六步：\(T\) 可逆 \(\iff T\) 是双射 \(\iff T\) 是单射 \(\iff\ker T=\{0\}\)；由维数定理，此时 \(\dim\operatorname{Im}T=n\)，故 \(\operatorname{Im}T=V\)，单射自动是满射（有限维情形）。` },

{ id:'LA08-07', ch:8, type:'证明', diff:5, tags:'不变子空间 核与像 分块上三角',
  q: String.raw`设 \(T\) 是 \(V\) 上的线性变换，\(W\le V\)。(1) 证明 \(\ker T\) 与 \(\operatorname{Im}T\) 都是 \(T\) 的不变子空间；(2) 设 \(W\) 是 \(T\) 的不变子空间且 \(\dim W=k\)，证明存在 \(V\) 的基使 \(T\) 的矩阵形如 \(\begin{pmatrix}A&B\\0&C\end{pmatrix}\)，其中 \(A\) 为 \(k\) 阶方阵。`,
  a: String.raw`(1) 二者均为 \(T\) 的不变子空间；(2) 取 \(W\) 的基并扩充为 \(V\) 的基即可，此时 \(T\) 的矩阵为分块上三角。`,
  sol: String.raw`第一步：设 \(x\in\ker T\)，则 \(T(Tx)=T(0)=0\)，故 \(Tx\in\ker T\)，\(\ker T\) 不变。
第二步：设 \(y\in\operatorname{Im}T\)，则存在 \(x\) 使 \(y=Tx\)，于是 \(Ty=T(Tx)\in\operatorname{Im}T\)，\(\operatorname{Im}T\) 不变。
第三步：取 \(W\) 的基 \(\varepsilon_1,\dots,\varepsilon_k\)，扩充为 \(V\) 的基 \(\varepsilon_1,\dots,\varepsilon_k,\varepsilon_{k+1},\dots,\varepsilon_n\)。
第四步：因 \(W\) 不变，\(i\le k\) 时 \(T\varepsilon_i\in W\)，其在基下的坐标后 \(n-k\) 个分量全为 \(0\)，故矩阵前 \(k\) 列的下块为零。
第五步：于是 \(T\) 在该基下的矩阵为 \(\begin{pmatrix}A&B\\0&C\end{pmatrix}\)，其中 \(A\) 是 \(T|_W\) 在 \(\varepsilon_1,\dots,\varepsilon_k\) 下的矩阵，为 \(k\) 阶方阵。` },

{ id:'LA08-08', ch:8, type:'计算', diff:4, tags:'特征值 特征子空间 可对角化',
  q: String.raw`设 \(A=\begin{pmatrix}2&1&1\\1&2&1\\1&1&2\end{pmatrix}\)。求 \(A\) 的全部特征值及对应的特征子空间（各写出基），并判断 \(A\) 能否对角化。`,
  a: String.raw`特征值 \(4,1,1\)；\(V_4=\operatorname{span}\{(1,1,1)^{T}\}\)，\(V_1=\operatorname{span}\{(1,-1,0)^{T},(1,0,-1)^{T}\}\)；\(A\) 可对角化。`,
  sol: String.raw`第一步：\(A=I+J\)，\(J\) 为三阶全 \(1\) 矩阵；\(J(1,1,1)^{T}=3(1,1,1)^{T}\)，且 \(\ker J=\{x\mid x_1+x_2+x_3=0\}\) 是二维的，故 \(J\) 的特征值为 \(3,0,0\)。
第二步：于是 \(A\) 的特征值为 \(4,1,1\)，\(|\lambda I-A|=(\lambda-4)(\lambda-1)^{2}\)。
第三步：\(\lambda=4\) 时 \(A-4I=J-3I\)，解 \((A-4I)x=0\) 得 \(x_1=x_2=x_3\)，故 \(V_4=\operatorname{span}\{(1,1,1)^{T}\}\)，\(\dim V_4=1\)。
第四步：\(\lambda=1\) 时 \(A-I=J\)，解 \((A-I)x=0\) 得 \(x_1+x_2+x_3=0\)，故 \(V_1=\operatorname{span}\{(1,-1,0)^{T},(1,0,-1)^{T}\}\)，\(\dim V_1=2\)。
第五步：\(\dim V_4+\dim V_1=3=\dim\mathbb R^{3}\)，特征向量可拼成基，故 \(A\) 可对角化，且 \(A=Q\operatorname{diag}(4,1,1)Q^{T}\)（\(Q\) 为正交矩阵）。` },

{ id:'LA08-09', ch:8, type:'证明', diff:5, tags:'零化多项式 可对角化 特征值',
  q: String.raw`设 \(T\) 是 \(n\) 维线性空间 \(V\) 上的线性变换，满足 \(T^{2}-3T+2I=0\)。证明：(1) \(T\) 的特征值只能是 \(1\) 或 \(2\)；(2) \(T\) 可对角化；(3) \(T\) 可逆，并求 \(T^{-1}\)。`,
  a: String.raw`(1) 特征值 \(\in\{1,2\}\)；(2) \(V=\ker(T-I)\oplus\ker(T-2I)\)，故可对角化；(3) \(T^{-1}=\frac12(3I-T)\)。`,
  sol: String.raw`第一步：设 \(T\xi=\lambda\xi,\ \xi\neq0\)，则 \((T^{2}-3T+2I)\xi=(\lambda^{2}-3\lambda+2)\xi=0\)，故 \(\lambda^{2}-3\lambda+2=0\)，\(\lambda=1\) 或 \(2\)。
第二步：由 \(T^{2}-3T+2I=(T-I)(T-2I)=0\)，对任意 \(v\in V\) 令 \(v_1=-(T-2I)v,\ v_2=(T-I)v\)。
第三步：则 \(v_1+v_2=(-T+2I+T-I)v=v\)，且 \((T-I)v_1=-(T-I)(T-2I)v=0\)，\((T-2I)v_2=(T-2I)(T-I)v=0\)，即 \(v_1\in\ker(T-I),\ v_2\in\ker(T-2I)\)，故 \(V=\ker(T-I)+\ker(T-2I)\)。
第四步：若 \(v\) 同时属于两个核，则 \(Tv=v\) 且 \(Tv=2v\)，得 \(v=0\)，故和为直和，\(V=\ker(T-I)\oplus\ker(T-2I)\)。
第五步：分别取两个特征子空间的基拼成 \(V\) 的基，\(T\) 在该基下的矩阵为 \(\operatorname{diag}(1,\dots,1,2,\dots,2)\)，故 \(T\) 可对角化。
第六步：由 \(T^{2}-3T+2I=0\) 得 \(T(3I-T)=2I\)，故 \(T\) 可逆且 \(T^{-1}=\frac12(3I-T)\)。` },

{ id:'LA08-10', ch:8, type:'证明', diff:5, tags:'幂零变换 可逆 逆变换 不可对角化',
  q: String.raw`设 \(T\) 是 \(n\) 维线性空间 \(V\) 上的线性变换（\(n\ge2\)），\(T^{n}=0\) 而 \(T^{n-1}\neq0\)。证明：(1) \(I-T\) 可逆，并求 \((I-T)^{-1}\)；(2) \(T\) 不可对角化。`,
  a: String.raw`(1) \((I-T)^{-1}=I+T+\cdots+T^{n-1}\)；(2) 若 \(T\) 可对角化则 \(T=0\)，与 \(T^{n-1}\neq0\) 矛盾，故不可对角化。`,
  sol: String.raw`第一步：注意 \((I-T)(I+T+\cdots+T^{n-1})=I-T^{n}=I\)，同理右乘也得 \(I\)，故 \(I-T\) 可逆且 \((I-T)^{-1}=I+T+\cdots+T^{n-1}\)。
第二步：反设 \(T\) 可对角化，则存在 \(V\) 的基使 \(T\) 的矩阵为 \(\operatorname{diag}(\lambda_1,\dots,\lambda_n)\)。
第三步：由 \(T^{n}=0\) 得 \(\lambda_i^{n}=0\)，故所有 \(\lambda_i=0\)，即 \(T\) 在该基下的矩阵为零矩阵，\(T=0\)。
第四步：但 \(T^{n-1}\neq0\)（\(n\ge2\) 时 \(T^{n-1}\) 是有意义的非零变换），矛盾；故 \(T\) 不可对角化。
第五步：这也说明幂零变换的若尔当标准形必含非平凡块，只有零变换才是可对角化的幂零变换。` },

{ id:'LA08-11', ch:8, type:'证明', diff:4, tags:'同构 维数 坐标映射',
  q: String.raw`设 \(V\) 是数域 \(F\) 上 \(n\) 维线性空间。证明 \(V\) 与 \(F^{n}\) 同构；并判断 \(M_{2\times3}(F)\) 与 \(F^{6}\) 是否同构，说明理由。`,
  a: String.raw`\(V\cong F^{n}\)；\(M_{2\times3}(F)\cong F^{6}\)，因为二者维数都是 \(6\)。`,
  sol: String.raw`第一步：取 \(V\) 的一组基 \(\varepsilon_1,\dots,\varepsilon_n\)，定义 \(\varphi:V\to F^{n}\)，\(\varphi(x)=(x_1,\dots,x_n)^{T}\)，其中 \(x=\sum x_i\varepsilon_i\) 是 \(x\) 的坐标。
第二步：\(\varphi\) 是线性映射：由坐标的唯一性与线性运算的坐标公式，\(\varphi(x+y)=\varphi(x)+\varphi(y)\)，\(\varphi(kx)=k\varphi(x)\)。
第三步：\(\ker\varphi=\{0\}\)（坐标全零即 \(x=0\)），且对任意 \((a_1,\dots,a_n)^{T}\in F^{n}\)，取 \(x=\sum a_i\varepsilon_i\) 即得原像，故 \(\varphi\) 是双射，从而 \(V\cong F^{n}\)。
第四步：\(M_{2\times3}(F)\) 的维数为 \(2\times3=6\)（基为 \(E_{ij}\)），\(F^{6}\) 的维数为 \(6\)。
第五步：有限维线性空间同构当且仅当维数相同，故 \(M_{2\times3}(F)\cong F^{6}\)，例如可按行拉直建立同构。` },

{ id:'LA08-12', ch:8, type:'证明', diff:5, tags:'直和 对称矩阵 反对称矩阵 维数',
  q: String.raw`记 \(S=\{A\in M_n(\mathbb R)\mid A^{T}=A\}\)，\(K=\{A\in M_n(\mathbb R)\mid A^{T}=-A\}\)。证明 \(M_n(\mathbb R)=S\oplus K\)。`,
  a: String.raw`结论成立；分解为 \(A=\frac12(A+A^{T})+\frac12(A-A^{T})\)，且 \(\dim S+\dim K=n^{2}\)。`,
  sol: String.raw`第一步：对任意 \(A\in M_n(\mathbb R)\)，令 \(S_A=\frac12(A+A^{T}),\ K_A=\frac12(A-A^{T})\)，则 \(S_A^{T}=S_A,\ K_A^{T}=-K_A\)，且 \(A=S_A+K_A\)，故 \(M_n(\mathbb R)=S+K\)。
第二步：设 \(A\in S\cap K\)，则 \(A=A^{T}\) 且 \(A=-A^{T}\)，故 \(A=-A\)，即 \(A=0\)，从而 \(S\cap K=\{0\}\)。
第三步：由和空间中零向量分解唯一可知 \(M_n(\mathbb R)=S\oplus K\)。
第四步：\(\dim S=\frac{n(n+1)}{2}\)（由对角线及上三角的 \(\frac{n(n+1)}{2}\) 个自由元素决定），\(\dim K=\frac{n(n-1)}{2}\)。
第五步：两者之和为 \(\frac{n(n+1)}{2}+\frac{n(n-1)}{2}=n^{2}=\dim M_n(\mathbb R)\)，与直和分解一致。` },

{ id:'LA08-13', ch:8, type:'计算', diff:5, tags:'商空间 维数 陪集',
  q: String.raw`设 \(U=\operatorname{span}\{(1,1,0)^{T},(0,1,1)^{T}\}\le\mathbb R^{3}\)。(1) 求 \(\dim(\mathbb R^{3}/U)\)；(2) 写出 \(\mathbb R^{3}/U\) 的一组基；(3) 求陪集 \((1,2,3)^{T}+U\) 在这组基下的坐标。`,
  a: String.raw`(1) \(\dim(\mathbb R^{3}/U)=1\)；(2) 基为 \(\{e_1+U\}\)，\(e_1=(1,0,0)^{T}\)；(3) 坐标为 \(2\)。`,
  sol: String.raw`第一步：\((1,1,0)^{T}\) 与 \((0,1,1)^{T}\) 不成比例，线性无关，故 \(\dim U=2\)。
第二步：由 \(\dim(V/U)=\dim V-\dim U\) 得 \(\dim(\mathbb R^{3}/U)=3-2=1\)。
第三步：验证 \(e_1\notin U\)：若 \(e_1=s(1,1,0)^{T}+t(0,1,1)^{T}\)，比较第三个分量得 \(t=0\)，第一个分量得 \(s=1\)，但第二个分量要求 \(s+t=1\neq0\)，矛盾。
第四步：故 \(e_1+U\) 是 \(V/U\) 中的非零向量，一维空间中任一非零向量即为基，\(\{e_1+U\}\) 是基。
第五步：\((1,2,3)^{T}-2e_1=(-1,2,3)^{T}=-(1,1,0)^{T}+3(0,1,1)^{T}\in U\)，故 \((1,2,3)^{T}+U=2(e_1+U)\)，坐标为 \(2\)。` },

{ id:'LA08-14', ch:8, type:'计算', diff:5, tags:'可对角化判定 几何重数 若尔当标准形',
  q: String.raw`设 \(A=\begin{pmatrix}1&1&1\\0&1&1\\0&0&2\end{pmatrix}\)。判断 \(A\) 能否对角化并说明理由；若不能，写出 \(A\) 的若尔当标准形（不计块的次序）。`,
  a: String.raw`不能对角化；若尔当标准形为 \(\begin{pmatrix}1&1&0\\0&1&0\\0&0&2\end{pmatrix}\)。`,
  sol: String.raw`第一步：\(A\) 为上三角矩阵，特征值为对角元 \(1,1,2\)，其中 \(\lambda=1\) 的代数重数为 \(2\)。
第二步：\(A-I=\begin{pmatrix}0&1&1\\0&0&1\\0&0&1\end{pmatrix}\)，其秩为 \(2\)（第一行与第三行不等，第二、三行成比例）。
第三步：\(\dim\ker(A-I)=3-2=1\)，即 \(\lambda=1\) 的几何重数为 \(1\)，小于代数重数 \(2\)。
第四步：矩阵可对角化当且仅当每个特征值的几何重数等于代数重数，故 \(A\) 不可对角化。
第五步：\(\lambda=1\) 只有一个若尔当块，即 \(J_2(1)\)；\(\lambda=2\) 为单根，给出一阶块，故若尔当标准形如答案所示。` },

{ id:'LA08-15', ch:8, type:'计算', diff:5, tags:'基变换 相似矩阵 迹与行列式',
  q: String.raw`设 \(T\) 是 \(\mathbb R^{3}\) 上的线性变换，在标准基下的矩阵为 \(A=\begin{pmatrix}2&0&1\\0&3&0\\1&0&2\end{pmatrix}\)。取基 \(\eta_1=(1,1,1)^{T},\ \eta_2=(1,1,0)^{T},\ \eta_3=(1,0,0)^{T}\)。(1) 求 \(T\) 在基 \(\eta\) 下的矩阵 \(B\)；(2) 验证 \(\operatorname{tr}B=\operatorname{tr}A\) 且 \(|B|=|A|\)。`,
  a: String.raw`\(B=\begin{pmatrix}3&1&1\\0&2&-1\\0&-1&2\end{pmatrix}\)；\(\operatorname{tr}B=7=\operatorname{tr}A\)，\(|B|=9=|A|\)。`,
  sol: String.raw`第一步：设 \(P=(\eta_1,\eta_2,\eta_3)=\begin{pmatrix}1&1&1\\1&1&0\\1&0&0\end{pmatrix}\)，\(|P|=-1\neq0\)，则 \(B=P^{-1}AP\)，\(B\) 的列是 \(T\eta_j\) 在 \(\eta\) 下的坐标。
第二步：\(T\eta_1=(3,3,3)^{T}=3\eta_1\)，故 \(B\) 的第一列为 \((3,0,0)^{T}\)。
第三步：\(T\eta_2=(2,3,1)^{T}\)，解 \(c_1\eta_1+c_2\eta_2+c_3\eta_3=(2,3,1)^{T}\) 得 \(c_1=1,\ c_2=2,\ c_3=-1\)，第二列为 \((1,2,-1)^{T}\)。
第四步：\(T\eta_3=(2,0,1)^{T}\)，同法解得 \(c_1=1,\ c_2=-1,\ c_3=2\)，第三列为 \((1,-1,2)^{T}\)。
第五步：故 \(B\) 如答案所示；\(\operatorname{tr}B=3+2+2=7=\operatorname{tr}A\)，\(|B|=3(4-1)=9\)，而 \(|A|=2\cdot6-1\cdot3=9\)，说明迹与行列式是相似不变量。` },

{ id:'LA08-16', ch:8, type:'计算', diff:5, tags:'线性变换的秩 交换子 核',
  q: String.raw`设 \(T:M_2(\mathbb R)\to M_2(\mathbb R)\)，\(T(X)=AX-XA\)，其中 \(A=\begin{pmatrix}1&0\\0&2\end{pmatrix}\)。(1) 求 \(T\) 在基 \(E_{11},E_{12},E_{21},E_{22}\) 下的矩阵；(2) 求 \(\operatorname{rank}T\) 与 \(\ker T\)。`,
  a: String.raw`矩阵为 \(\operatorname{diag}(0,-1,1,0)\)；\(\operatorname{rank}T=2\)；\(\ker T=\operatorname{span}\{E_{11},E_{22}\}\)，即全体对角矩阵。`,
  sol: String.raw`第一步：\(AE_{11}=E_{11}=E_{11}A\)，故 \(T(E_{11})=0\)；同理 \(T(E_{22})=0\)。
第二步：\(AE_{12}=E_{12}\)，而 \(E_{12}A=2E_{12}\)，故 \(T(E_{12})=E_{12}-2E_{12}=-E_{12}\)。
第三步：\(AE_{21}=2E_{21}\)，而 \(E_{21}A=E_{21}\)，故 \(T(E_{21})=2E_{21}-E_{21}=E_{21}\)。
第四步：按基的顺序把像的坐标排成列，得矩阵 \(\operatorname{diag}(0,-1,1,0)\)，其秩为 \(2\)，故 \(\operatorname{rank}T=2\)。
第五步：解 \(T(X)=0\) 即 \(AX=XA\)：设 \(X=(x_{ij})\)，比较得 \(x_{12}=2x_{12}\) 与 \(2x_{21}=x_{21}\)，故 \(x_{12}=x_{21}=0\)，\(X\) 为对角矩阵。
第六步：故 \(\ker T=\operatorname{span}\{E_{11},E_{22}\}\)，\(\dim\ker T=2\)，与 \(2+2=4\) 相符。` },

{ id:'LA08-17', ch:8, type:'证明', diff:5, tags:'线性变换的秩 秩不等式 像空间',
  q: String.raw`设 \(S,T\) 都是 \(n\) 维线性空间 \(V\) 上的线性变换。证明：(1) \(\operatorname{rank}(ST)\le\min\{\operatorname{rank}S,\operatorname{rank}T\}\)；(2) \(\operatorname{rank}(S+T)\le\operatorname{rank}S+\operatorname{rank}T\)。`,
  a: String.raw`两不等式均成立；其中 \(\operatorname{rank}T\) 指 \(\dim\operatorname{Im}T\)。`,
  sol: String.raw`第一步：由定义 \(\operatorname{rank}(ST)=\dim\operatorname{Im}(ST)\)，而 \(\operatorname{Im}(ST)=\{S(Tv)\mid v\in V\}=S(\operatorname{Im}T)\subseteq\operatorname{Im}S\)。
第二步：取子空间再取像不会增加维数，故 \(\dim S(\operatorname{Im}T)\le\dim\operatorname{Im}T\)，即 \(\operatorname{rank}(ST)\le\operatorname{rank}T\)。
第三步：同时由 \(\operatorname{Im}(ST)\subseteq\operatorname{Im}S\) 得 \(\operatorname{rank}(ST)\le\operatorname{rank}S\)，两式合并即 (1)。
第四步：对任意 \(v\)，\((S+T)v=Sv+Tv\in\operatorname{Im}S+\operatorname{Im}T\)，故 \(\operatorname{Im}(S+T)\subseteq\operatorname{Im}S+\operatorname{Im}T\)。
第五步：于是 \(\operatorname{rank}(S+T)\le\dim(\operatorname{Im}S+\operatorname{Im}T)\le\dim\operatorname{Im}S+\dim\operatorname{Im}T=\operatorname{rank}S+\operatorname{rank}T\)，即 (2)。` },

{ id:'LA08-18', ch:8, type:'计算', diff:5, tags:'复合变换 矩阵乘积 不可交换',
  q: String.raw`设 \(S,T:\mathbb R^{3}\to\mathbb R^{3}\)，\(S(x_1,x_2,x_3)=(x_1-x_2,\ x_2-x_3,\ 0)\)，\(T(x_1,x_2,x_3)=(x_2,\ x_1,\ x_3)\)。(1) 求 \(S,T\) 在标准基下的矩阵 \(A,B\)；(2) 求 \(ST\) 与 \(TS\) 的矩阵，说明 \(ST\neq TS\)；(3) 求 \(\ker(ST)\) 与 \(\operatorname{rank}(ST)\)。`,
  a: String.raw`\(A=\begin{pmatrix}1&-1&0\\0&1&-1\\0&0&0\end{pmatrix}\)，\(B=\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}\)；\(AB=\begin{pmatrix}-1&1&0\\1&0&-1\\0&0&0\end{pmatrix}\)，\(BA=\begin{pmatrix}0&1&-1\\1&-1&0\\0&0&0\end{pmatrix}\)；\(\ker(ST)=\operatorname{span}\{(1,1,1)^{T}\}\)，\(\operatorname{rank}(ST)=2\)。`,
  sol: String.raw`第一步：把 \(S\) 的像按标准基坐标写成列，得 \(A\)；\(B\) 是交换前两个坐标的矩阵。
第二步：复合变换的矩阵等于矩阵的乘积，故 \(ST\) 的矩阵为 \(AB\)，\(TS\) 的矩阵为 \(BA\)。
第三步：计算 \(AB=\begin{pmatrix}-1&1&0\\1&0&-1\\0&0&0\end{pmatrix}\)，\(BA=\begin{pmatrix}0&1&-1\\1&-1&0\\0&0&0\end{pmatrix}\)，两者不相等，故 \(ST\neq TS\)。
第四步：解 \(ABx=0\)：由 \(-x_1+x_2=0\) 与 \(x_1-x_3=0\) 得 \(x_1=x_2=x_3\)，故 \(\ker(ST)=\operatorname{span}\{(1,1,1)^{T}\}\)。
第五步：\(AB\) 的前两行不成比例，秩为 \(2\)，故 \(\operatorname{rank}(ST)=2\)，与 \(3-1=2\) 一致。` },

{ id:'LA08-19', ch:8, type:'证明', diff:5, tags:'幂等变换 直和 投影',
  q: String.raw`设 \(P\) 是 \(n\) 维线性空间 \(V\) 上的线性变换，且 \(P^{2}=P\)。证明 \(V=\operatorname{Im}P\oplus\ker P\)，并证明 \(P\) 在 \(\operatorname{Im}P\) 上的限制是恒等变换。`,
  a: String.raw`\(V=\operatorname{Im}P\oplus\ker P\)；对 \(y\in\operatorname{Im}P\) 有 \(P y=y\)。`,
  sol: String.raw`第一步：对任意 \(v\in V\)，写 \(v=Pv+(v-Pv)\)，其中 \(Pv\in\operatorname{Im}P\)。
第二步：由 \(P^{2}=P\) 得 \(P(v-Pv)=Pv-P^{2}v=Pv-Pv=0\)，故 \(v-Pv\in\ker P\)，从而 \(V=\operatorname{Im}P+\ker P\)。
第三步：设 \(v\in\operatorname{Im}P\cap\ker P\)，则存在 \(u\) 使 \(v=Pu\)，且 \(Pv=0\)；于是 \(v=Pu=P^{2}u=P(Pu)=Pv=0\)，故交为零。
第四步：和为零且交为零，故 \(V=\operatorname{Im}P\oplus\ker P\)。
第五步：若 \(y\in\operatorname{Im}P\)，则 \(y=Pu\)，于是 \(Py=P^{2}u=Pu=y\)，即 \(P|_{\operatorname{Im}P}=I\)。
第六步：于是 \(P\) 在基（\(\operatorname{Im}P\) 的基接 \(\ker P\) 的基）下的矩阵为 \(\operatorname{diag}(I_r,0)\)，\(r=\operatorname{rank}P\)。` },

{ id:'LA08-20', ch:8, type:'证明', diff:5, tags:'对合变换 直和 特征子空间',
  q: String.raw`设 \(T\) 是 \(n\) 维实线性空间 \(V\) 上的线性变换，且 \(T^{2}=I\)。证明 \(V=\ker(T-I)\oplus\ker(T+I)\)，并写出 \(T\) 在适当基下的矩阵。`,
  a: String.raw`\(V=\ker(T-I)\oplus\ker(T+I)\)；取两个核的基拼成 \(V\) 的基，\(T\) 的矩阵为 \(\operatorname{diag}(I_k,-I_{n-k})\)。`,
  sol: String.raw`第一步：对任意 \(v\in V\)，令 \(v_1=\frac12(v+Tv),\ v_2=\frac12(v-Tv)\)，则 \(v_1+v_2=v\)。
第二步：\((T-I)v_1=\frac12(Tv+T^{2}v-v-Tv)=\frac12(Tv+v-v-Tv)=0\)，故 \(v_1\in\ker(T-I)\)。
第三步：\((T+I)v_2=\frac12(Tv-T^{2}v+v-Tv)=\frac12(Tv-v+v-Tv)=0\)，故 \(v_2\in\ker(T+I)\)，于是 \(V=\ker(T-I)+\ker(T+I)\)。
第四步：若 \(v\) 同时属于两个核，则 \(Tv=v\) 且 \(Tv=-v\)，得 \(2v=0\)，即 \(v=0\)，故和是直和。
第五步：取 \(\ker(T-I)\) 的基 \(\varepsilon_1,\dots,\varepsilon_k\) 与 \(\ker(T+I)\) 的基 \(\varepsilon_{k+1},\dots,\varepsilon_n\)，拼成 \(V\) 的基，则 \(T\varepsilon_i=\varepsilon_i\ (i\le k)\)，\(T\varepsilon_i=-\varepsilon_i\ (i>k)\)。
第六步：故 \(T\) 在该基下的矩阵为 \(\operatorname{diag}(I_k,-I_{n-k})\)，这说明对合变换总是可对角化的，特征值只能是 \(\pm1\)。` }
);
