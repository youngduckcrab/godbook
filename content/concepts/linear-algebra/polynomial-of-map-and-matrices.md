---
title: 기저·닮음·대각·삼각과 다항식 대입
title_en: Polynomials of Maps and Matrices under Bases, Similarity, Diagonal and Triangular Forms
aliases: [다항식 대입과 기저, 다항식 대입과 닮음, 대각행렬에 다항식 대입, 위삼각행렬의 곱, 위삼각행렬의 거듭제곱, polynomial of a similar matrix, polynomial of a diagonal matrix, product of upper triangular matrices]
kind: theorem
field: linear-algebra
msc: ["15A04", "15A54"]
level: undergrad
summary: 다항식을 대입한 행렬의 성분을 계수와 거듭제곱의 성분으로 쓰고, 선형사상에 대입한 것의 행렬이 그 행렬에 대입한 것이라는 것, 닮은 행렬에 대입한 것은 닮았다는 것, 대각행렬에 대입하면 대각성분마다 대입한 대각행렬이 된다는 것을 증명한다. 위삼각행렬의 합·스칼라배·곱이 위삼각이고 곱의 대각성분이 대각성분의 곱이라는 것과, 위삼각행렬에 대입한 것이 대각성분마다 대입한 값을 대각성분으로 갖는 위삼각행렬이라는 것도 증명한다.
requires: [function, real-number-arithmetic, vector-space, vector-space-basic-properties, finite-sum-of-vectors, basis, dimension, linear-map, linear-maps-form-a-vector-space, matrix, matrix-vector-product, matrix-of-a-linear-map, matrix-product, matrix-product-properties, invertible-matrix, inverse-matrix-properties, matrix-in-bases, change-of-basis-and-similarity, diagonalizable, eigenvalues-of-triangular-matrix, determinant-and-trace-of-linear-map, mathematical-induction, well-ordering-principle, power-of-a-real-number, group-homomorphism, finite-sums-in-a-ring, polynomial-ring, evaluation-homomorphism, polynomials-and-polynomial-functions, power-of-linear-map, polynomial-of-linear-map]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "9장 1절 Cayley–Hamilton Theorem 의 A \"standard\" proof, p.255; 9장 1절 연습문제 1.1, p.256; 4장 2.2 Some motivations: functions of operators, pp.107–108; 3장 3.3 Determinants of diagonal and triangular matrices, p.81"
    checked: original
    note: "출처 9장 1절의 A \"standard\" proof(p.255)는 'for any polynomial p we have p(UAU^{−1}) = Up(A)U^{−1}' 라고 증명 없이 적는다(이 항목의 (4)). 같은 증명은 위삼각행렬 A 에 대해 부분공간 E_k = span{e_1, …, e_k} 가 A 와 A − λI 의 불변 부분공간이라는 것을 쓴다. 출처 9장 연습문제 1.1(p.256)의 힌트는 D = diag{λ_1, …, λ_n} 이면 p(D) 와 p(A) 를 계산할 수 있느냐고 묻는다(이 항목의 (5)). 출처 4장 2.2(p.107)는 대각행렬인 연산자의 거듭제곱과 지수함수가 대각성분마다의 계산이라고 적는다. 위삼각행렬의 정의는 출처 3장 3.3(p.81)에 있고, 이 사이트는 eigenvalues-of-triangular-matrix 의 정의를 쓴다. (1)–(6)의 진술과 증명은 이 사이트가 썼다."
  - ref: hefferon-linear-algebra
    loc: "5장 Similarity, IV Jordan Form, IV.1 Polynomials of Maps and Matrices 의 Definition 뒤 문단, src/jc/jc4.tex:82–85; II Similarity, II.1 Definition and Examples 의 연습문제, src/jc/jc2.tex:1083–1099; II.2 Diagonalizability 의 연습문제 exer:PowersOfDiags, src/jc/jc2.tex:2234–2250; IV.1 연습문제와 풀이, src/jc/jc4.tex:1133–1145, 1226–1238"
    checked: original
    note: "Hefferon 의 5장은 스칼라를 복소수로 둔다. 이 항목은 실수에서 진술한다. 출처 IV.1(jc4.tex:82–85)은 T = Rep_{B,B}(t) 이면 f(T) = Rep_{B,B}(f(t)) 라고 적고, 그 근거로 T^j = Rep(t^j), cT = Rep(ct), T_1 + T_2 = Rep(t_1 + t_2) 를 한 문장으로 든다(이 항목의 (3)). II.1 의 연습문제(jc2.tex:1083–1099)는 T 와 S 가 닮았으면 p(T) 와 p(S) 가 닮았음을 보이게 하고, 풀이는 P(c_nS^n + ⋯ + c_0)P^{−1} 로 계산한다(이 항목의 (4)와 같은 발상). II.2 의 연습문제 exer:PowersOfDiags(jc2.tex:2234–2250)는 대각행렬의 거듭제곱의 꼴을 묻는다. IV.1 의 한 연습문제의 풀이(jc4.tex:1226–1238)는 대각성분이 모두 1 인 위삼각행렬을 다루며 거듭제곱의 꼴을 귀납법으로 보일 수 있다고 적는다. 확인 질문 '위삼각행렬 $U = \\begin{pmatrix} 2 & 5 \\\\ 0 & 2 \\end{pmatrix}$와 $f = X - 2$에서 $f(U)$의 대각성분은 모두 $0$인데, $f(U)$는 영행렬인가?'의 U 는 IV.1 연습문제(jc4.tex:1133–1145)가 최소다항식을 묻는, 대각성분이 모두 λ 이고 대각선 옆이 1 인 꼴의 행렬과 닮은 꼴이다(그 연습문제는 1 을 대각선 아래에 둔다)."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(사영의 다항식 공식과 3 × 3 예의 거듭제곱, 실수에서 한쪽 포함만 성립하는 고윳값의 예). 독립 검토 없음."
added: 2026-11-28
---

:::statement
$n$이 자연수라 하자. $n \times n$ [[matrix|행렬]]의 성분, 영행렬 $O$, 단위행렬 $I_n$은 [[matrix|행렬]]의 것이고, 행렬의 곱은 [[matrix-product|행렬의 곱]], $T_A$는 [[matrix-vector-product|행렬과 벡터의 곱]]의 (2), $[R]$는 [[matrix-of-a-linear-map|선형사상의 행렬]], $[T]_{\mathcal{B}}$는 [[matrix-in-bases|기저에 관한 선형사상의 행렬]]의 것이다. 닮음은 [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]], 대각행렬과 $\operatorname{diag}(\lambda_1, \dots, \lambda_n)$은 [[diagonalizable|대각화 가능]], 위삼각행렬은 [[eigenvalues-of-triangular-matrix|삼각행렬의 고윳값]]의 것이다. 거듭제곱 $A^k$, $T^k$는 [[power-of-linear-map|선형사상과 행렬의 거듭제곱]]의 것이고, $f \in \mathbb{R}[X]$를 대입한 것 $f(A)$, $f(T)$와 상수 다항식 $\kappa(c)$는 [[polynomial-of-linear-map|선형사상과 행렬에 다항식 대입하기]]의 것이다. 실수 $c$에 대하여 $f(c)$는 [[evaluation-homomorphism|대입 준동형]]의 대입한 값이다.

다음이 성립한다. 아래에서 $A$, $B$, $U$, $W$는 $n \times n$ 행렬이고, $f \in \mathbb{R}[X]$이며, $N$은 $m > N$인 모든 $m$에서 $\operatorname{coef}_m(f) = 0$인 $0$ 이상인 정수이다.

1. (성분) $j, k \in \{1, \dots, n\}$이면 $f(A)$의 $(j, k)$ 성분은
   $$
   \begin{aligned}
   &(f(A))_{j,k} \\
   &\quad = \sum_{m=0}^{N} \operatorname{coef}_m(f)\, (A^m)_{j,k}
   \end{aligned}
   $$
   이다(오른쪽은 실수의 합).
2. ($\mathbb{R}^n$ 위의 선형사상) $f(T_A) = T_{f(A)}$이다. 선형사상 $R : \mathbb{R}^n \to \mathbb{R}^n$에 대하여 $[f(R)] = f([R])$이다.
3. (기저에 관한 행렬) $V$가 [[dimension|유한차원]] [[vector-space|벡터공간]]이고 $\dim V = n$이며 $\mathcal{B}$가 $V$의 [[basis|기저]]이고 $T : V \to V$가 선형사상이면 $[f(T)]_{\mathcal{B}} = f([T]_{\mathcal{B}})$이다.
4. (닮음) $Q$가 [[invertible-matrix|가역]] $n \times n$ 행렬이면 $f(Q^{-1}AQ) = Q^{-1}f(A)Q$이고 $f(QAQ^{-1}) = Qf(A)Q^{-1}$이다. 따라서 $A$와 $B$가 닮았으면 $f(A)$와 $f(B)$도 닮았다.
5. (대각행렬) $\lambda_1, \dots, \lambda_n$과 $\mu_1, \dots, \mu_n$은 길이 $n$인 실수의 열이고 $c$는 실수이다.
   - (i) $\operatorname{diag}(\lambda_1, \dots, \lambda_n) + \operatorname{diag}(\mu_1, \dots, \mu_n) = \operatorname{diag}(\lambda_1 + \mu_1, \dots, \lambda_n + \mu_n)$이고 $c\operatorname{diag}(\lambda_1, \dots, \lambda_n) = \operatorname{diag}(c\lambda_1, \dots, c\lambda_n)$이다.
   - (ii) $f(\operatorname{diag}(\lambda_1, \dots, \lambda_n)) = \operatorname{diag}(f(\lambda_1), \dots, f(\lambda_n))$이다. 특히 $n = 1$이면 성분이 $a$인 $1 \times 1$ 행렬 $(a)$에 대하여 $f((a)) = (f(a))$이다.
   - (iii) $A = SDS^{-1}$이고 $S$가 가역, $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$이면 $f(A) = S\operatorname{diag}(f(\lambda_1), \dots, f(\lambda_n))S^{-1}$이다.
6. (위삼각행렬)
   - (i) $I_n$과 모든 대각행렬은 위삼각행렬이다. $U$, $W$가 위삼각행렬이면 $U + W$, $cU$($c$는 실수), $UW$도 위삼각행렬이고, 모든 $k \in \{1, \dots, n\}$에서 $UW$의 대각성분은 $(UW)_{k,k} = u_{k,k} w_{k,k}$이다.
   - (ii) $U$가 위삼각행렬이면, $0$ 이상인 모든 정수 $m$에서 $U^m$은 위삼각행렬이고 $(U^m)_{k,k} = (u_{k,k})^m$이다. 또 $f(U)$는 위삼각행렬이고 모든 $k$에서 $(f(U))_{k,k} = f(u_{k,k})$이다.
:::

:::english
Let $n$ be a natural number. Entries of $n \times n$ matrices, the zero matrix $O$ and the identity matrix $I_n$ are those of the entry on matrices; the product of matrices is that of the entry on the matrix product, $T_A$ is that of (2) of the entry on the product of a matrix and a vector, $[R]$ is that of the entry on the matrix of a linear map, and $[T]_{\mathcal{B}}$ is that of the entry on the matrix of a linear map with respect to bases. Similarity is that of the entry on change of basis and similar matrices, diagonal matrices and $\operatorname{diag}(\lambda_1, \dots, \lambda_n)$ are those of the entry on diagonalizability, and upper triangular matrices are those of the entry on eigenvalues of triangular matrices. The powers $A^k$, $T^k$ are those of the entry on powers of linear maps and matrices, and the evaluations $f(A)$, $f(T)$ of $f \in \mathbb{R}[X]$ and the constant polynomials $\kappa(c)$ are those of the entry on polynomials of linear maps and matrices. For a real number $c$, $f(c)$ is the value of the entry on evaluation homomorphisms.

The following hold, where $A$, $B$, $U$, $W$ are $n \times n$ matrices, $f \in \mathbb{R}[X]$, and $N$ is an integer $\ge 0$ with $\operatorname{coef}_m(f) = 0$ for all $m > N$.

1. (Entries) For $j, k \in \{1, \dots, n\}$ the $(j, k)$ entry of $f(A)$ is
   $$
   \begin{aligned}
   &(f(A))_{j,k} \\
   &\quad = \sum_{m=0}^{N} \operatorname{coef}_m(f)\, (A^m)_{j,k}
   \end{aligned}
   $$
   (a sum of real numbers).
2. (Linear maps on $\mathbb{R}^n$) $f(T_A) = T_{f(A)}$. For a linear map $R : \mathbb{R}^n \to \mathbb{R}^n$, $[f(R)] = f([R])$.
3. (Matrices with respect to a basis) If $V$ is a finite-dimensional vector space with $\dim V = n$, $\mathcal{B}$ is a basis of $V$ and $T : V \to V$ is a linear map, then $[f(T)]_{\mathcal{B}} = f([T]_{\mathcal{B}})$.
4. (Similarity) If $Q$ is an invertible $n \times n$ matrix, then $f(Q^{-1}AQ) = Q^{-1}f(A)Q$ and $f(QAQ^{-1}) = Qf(A)Q^{-1}$. Hence if $A$ and $B$ are similar, so are $f(A)$ and $f(B)$.
5. (Diagonal matrices) Let $\lambda_1, \dots, \lambda_n$ and $\mu_1, \dots, \mu_n$ be sequences of real numbers of length $n$ and $c$ a real number.
   - (i) $\operatorname{diag}(\lambda_1, \dots, \lambda_n) + \operatorname{diag}(\mu_1, \dots, \mu_n) = \operatorname{diag}(\lambda_1 + \mu_1, \dots, \lambda_n + \mu_n)$ and $c\operatorname{diag}(\lambda_1, \dots, \lambda_n) = \operatorname{diag}(c\lambda_1, \dots, c\lambda_n)$.
   - (ii) $f(\operatorname{diag}(\lambda_1, \dots, \lambda_n)) = \operatorname{diag}(f(\lambda_1), \dots, f(\lambda_n))$. In particular, for $n = 1$ and the $1 \times 1$ matrix $(a)$ with entry $a$, $f((a)) = (f(a))$.
   - (iii) If $A = SDS^{-1}$ with $S$ invertible and $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$, then $f(A) = S\operatorname{diag}(f(\lambda_1), \dots, f(\lambda_n))S^{-1}$.
6. (Upper triangular matrices)
   - (i) $I_n$ and every diagonal matrix are upper triangular. If $U$, $W$ are upper triangular, then so are $U + W$, $cU$ ($c$ a real number) and $UW$, and for every $k \in \{1, \dots, n\}$ the diagonal entries of $UW$ are $(UW)_{k,k} = u_{k,k} w_{k,k}$.
   - (ii) If $U$ is upper triangular, then for every integer $m \ge 0$ the matrix $U^m$ is upper triangular with $(U^m)_{k,k} = (u_{k,k})^m$. Moreover $f(U)$ is upper triangular and $(f(U))_{k,k} = f(u_{k,k})$ for every $k$.
:::

## 직관

행렬에 다항식을 대입하는 일은 거듭제곱을 계수배해 더하는 것이므로, 그 둘을 보존하는 변환은 대입도 보존합니다. 기저를 하나 정해 선형사상을 행렬로 옮기는 일은 합, 스칼라배, 합성을 행렬의 합, 스칼라배, 곱으로 옮기므로 (3)이 나오고, 가역행렬 $Q$로 $A$를 $Q^{-1}AQ$로 바꾸는 일도 합과 스칼라배와 곱을 보존하므로 (4)가 나옵니다. 비유하면, 계산을 다른 언어로 옮겨 적어도 덧셈과 곱셈을 같은 규칙으로 옮겨 적는 한 계산 결과도 그대로 옮겨진다는 것입니다. 비유의 "옮겨 적기"가 $[\,\cdot\,]_{\mathcal{B}}$나 $Q^{-1}(\,\cdot\,)Q$이고, "같은 규칙"이 합, 스칼라배, 곱의 보존입니다.

대각행렬은 대각성분끼리만 곱해지므로, 다항식을 대입하면 대각성분마다 그 실수를 대입한 것이 됩니다((5)의 (ii)). 그래서 대각화 가능한 행렬 $A = SDS^{-1}$에 대입한 것은 $D$의 대각성분에 대입한 실수들만 알면 계산됩니다((5)의 (iii)).

위삼각행렬도 대각성분은 대각성분끼리만 곱해집니다. 곱 $UW$의 $(k, k)$ 성분 $u_{k,1}w_{1,k} + \cdots + u_{k,n}w_{n,k}$에서 $l < k$인 항은 $u_{k,l} = 0$ 때문에, $l > k$인 항은 $w_{l,k} = 0$ 때문에 사라지고 $u_{k,k}w_{k,k}$만 남습니다. 대각선 위쪽의 성분은 섞이지만 대각성분은 섞이지 않으므로, 위삼각행렬에 다항식을 대입한 것의 대각성분은 대각성분에 대입한 실수입니다((6)의 (ii)).

## 증명

:::idea
행렬 $C$에 $(j, k)$ 성분을 대응시키는 함수, 선형사상 $R$에 행렬 $[R]$이나 $[R]_{\mathcal{B}}$를 대응시키는 함수, $C$에 $Q^{-1}CQ$를 대응시키는 함수는 모두 합과 스칼라배를 보존하므로 유한 합을 유한 합으로 보낸다. 거듭제곱을 보내는 꼴은 [[power-of-linear-map|선형사상과 행렬의 거듭제곱]]의 (5)–(8)에 있으므로, $f = \sum \operatorname{coef}_m(f) X^m$을 대입한 것에 이 함수를 적용하면 된다. 위삼각행렬은 곱의 성분식에서 사라지는 항을 센다.
:::

:::hint
(4)에서 $Q^{-1}(C_1 + C_2)Q = Q^{-1}C_1Q + Q^{-1}C_2Q$와 $Q^{-1}(\alpha C)Q = \alpha Q^{-1}CQ$를 먼저 확인한다.
:::

:::hint
(6)의 (i)에서 $j > k$이면 $UW$의 $(j, k)$ 성분의 각 항 $u_{j,l}w_{l,k}$에서 $l < j$이거나 $l \ge j > k$이다.
:::

:::proof
**쓰는 사실.** 유한 합 $\sum$, 아벨군 사이의 준동형이 유한 합을 보존한다는 것((7)), 벡터공간의 덧셈군의 합과 벡터의 유한 합이 같다는 것((10))은 [[finite-sums-in-a-ring|환의 유한 합]]의 것이고(아래에서 "합의 (n)"은 그 항목의 (n)이다), 준동형은 [[group-homomorphism|군 준동형]]의 뜻이다. 아래에서 "합과 스칼라배를 보존하는 함수"는 벡터공간 $X$에서 $Y$로의 함수 $\varphi$로서 모든 $x, x' \in X$와 실수 $\alpha$에서 $\varphi(x + x') = \varphi(x) + \varphi(x')$, $\varphi(\alpha x) = \alpha \varphi(x)$인 것을 말한다. 이런 $\varphi$는 덧셈군 사이의 준동형이므로, 실수 $\alpha_m$과 $X$의 원소 $x_m$($0 \le m \le N$)에 대하여 $\varphi\bigl(\sum_{m=0}^{N} \alpha_m x_m\bigr) = \sum_{m=0}^{N} \alpha_m \varphi(x_m)$이다. 이것을 (가)라 부른다. 아래에서 $a_m = \operatorname{coef}_m(f)$로 쓴다. [[polynomial-of-linear-map|선형사상과 행렬에 다항식 대입하기]]의 정의와 (1), (6)의 (i)에 의해 $f(A) = \sum_{m=0}^{N} a_m A^m$이고 $f(T) = \sum_{m=0}^{N} a_m T^m$이다.

실수 $c$에 대하여 [[evaluation-homomorphism|대입 준동형]]의 정의에 의해 $f(c) = \sum_{m=0}^{N} a_m c^m$이고, 그 거듭제곱 $c^m$은 [[polynomials-and-polynomial-functions|다항식과 다항함수]]의 (5)의 (ii)에 의해 [[power-of-a-real-number|실수의 거듭제곱]]과 같다. 이것을 (나)라 부른다.

**1의 증명.** [[matrix|행렬]]의 (1)에 의해 $M_{n \times n}$의 합과 스칼라배는 성분마다의 것이므로, $C$에 $C_{j,k}$를 대응시키는 함수 $M_{n \times n} \to \mathbb{R}$는 합과 스칼라배를 보존한다. (가)를 쓰면 된다.

**2의 증명.** [[matrix-vector-product|행렬과 벡터의 곱]]의 (4)에 의해 모든 $x$에서 $(C_1 + C_2)x = C_1x + C_2x$, $(\alpha C)x = \alpha(Cx)$이므로 $C$에 $T_C$를 대응시키는 함수 $M_{n \times n} \to L(\mathbb{R}^n, \mathbb{R}^n)$는 합과 스칼라배를 보존한다([[linear-maps-form-a-vector-space|선형사상의 공간]]의 연산). 선형사상과 행렬의 거듭제곱의 (5)의 (i)에 의해 $T_{A^m} = (T_A)^m$이므로 (가)에 의해
$$
\begin{aligned}
T_{f(A)} &= \sum_{m=0}^{N} a_m T_{A^m} \\
&= \sum_{m=0}^{N} a_m (T_A)^m = f(T_A)
\end{aligned}
$$
이다. 선형사상 $R$에 대해서는 [[matrix-of-a-linear-map|선형사상의 행렬]]의 (1)에 의해 $R = T_{[R]}$이므로 방금 보인 것에 의해 $f(R) = T_{f([R])}$이고, 그 항목의 (2)에 의해 $[f(R)] = f([R])$이다.

**3의 증명.** [[dimension|유한차원과 차원]]의 (2)에 의해 $\mathcal{B}$의 길이는 $n$이고 $n \ge 1$이다. [[determinant-and-trace-of-linear-map|선형사상의 행렬식과 대각합]]의 (5)에 의해 $L(V, V)$의 원소 $R$에 $[R]_{\mathcal{B}}$를 대응시키는 함수는 합과 스칼라배를 보존한다. 선형사상과 행렬의 거듭제곱의 (6)에 의해 $[T^m]_{\mathcal{B}} = ([T]_{\mathcal{B}})^m$이므로 (가)에 의해 $[f(T)]_{\mathcal{B}} = \sum_{m=0}^{N} a_m ([T]_{\mathcal{B}})^m = f([T]_{\mathcal{B}})$이다.

**4의 증명.** [[matrix-product-properties|행렬 곱의 성질]]의 (2)와 (3)에 의해 $Q^{-1}(C_1 + C_2)Q = Q^{-1}C_1Q + Q^{-1}C_2Q$이고 $Q^{-1}(\alpha C)Q = \alpha(Q^{-1}CQ)$이다(세 행렬의 곱은 그 항목의 (1)에 의해 괄호에 상관없다). 곧 $C$에 $Q^{-1}CQ$를 대응시키는 함수는 합과 스칼라배를 보존한다. 선형사상과 행렬의 거듭제곱의 (7)에 의해 $(Q^{-1}AQ)^m = Q^{-1}A^mQ$이므로 (가)에 의해 $Q^{-1}f(A)Q = \sum_{m=0}^{N} a_m (Q^{-1}AQ)^m = f(Q^{-1}AQ)$이다. [[inverse-matrix-properties|역행렬의 성질]]의 (2)에 의해 $Q^{-1}$도 가역이고 $(Q^{-1})^{-1} = Q$이므로, 이것을 $Q^{-1}$에 쓰면 $f(QAQ^{-1}) = Qf(A)Q^{-1}$이다. $A$와 $B$가 닮았으면 [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]의 정의에 의해 $A = Q^{-1}BQ$인 가역행렬 $Q$가 있고, $f(A) = Q^{-1}f(B)Q$이므로 $f(A)$는 $f(B)$와 닮았다.

**5의 증명.** (i) [[diagonalizable|대각화 가능]]의 정의에 의해 $\operatorname{diag}(\lambda_1, \dots, \lambda_n)$의 $(j, k)$ 성분은 $j = k$이면 $\lambda_k$, $j \ne k$이면 $0$이다. 행렬의 (1)에 의해 두 변의 $(j, k)$ 성분은 $j = k$이면 $\lambda_k + \mu_k$와 $c\lambda_k$이고, $j \ne k$이면 $0 + 0 = 0$과 $c \cdot 0 = 0$이다([[real-number-arithmetic]]). 행렬의 (2)에 의해 두 변은 같다.

(ii) $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$이라 하자. 선형사상과 행렬의 거듭제곱의 (8)에 의해 $D^m = \operatorname{diag}(\lambda_1^m, \dots, \lambda_n^m)$이다. (1)에 의해 $j \ne k$이면 $(f(D))_{j,k} = \sum_{m=0}^{N} a_m \cdot 0 = 0$이고(합의 (6)의 (iv)), $j = k$이면 (나)에 의해 $(f(D))_{k,k} = \sum_{m=0}^{N} a_m \lambda_k^m = f(\lambda_k)$이다. 행렬의 (2)에 의해 $f(D) = \operatorname{diag}(f(\lambda_1), \dots, f(\lambda_n))$이다. $n = 1$이면 $1 \times 1$ 행렬 $(a)$는 $\operatorname{diag}(a)$이다(두 행렬의 유일한 성분이 모두 $a$이다).

(iii) $A = SDS^{-1}$이면 (4)를 $Q = S$로 쓴 $f(SDS^{-1}) = Sf(D)S^{-1}$과 (ii)에 의해 성립한다.

**6의 증명.** (i) $I_n$과 대각행렬은 $j \ne k$인 성분이 $0$이므로 특히 $j > k$인 성분이 $0$이다. $j > k$이면 행렬의 (1)에 의해 $(U + W)_{j,k} = 0 + 0 = 0$, $(cU)_{j,k} = c \cdot 0 = 0$이다. [[matrix-product|행렬의 곱]]의 (2)에 의해 $(UW)_{j,k}$는 $l$번째 항이 $u_{j,l}w_{l,k}$인 길이 $n$인 실수의 열의 합이다. $j > k$이고 $1 \le l \le n$이면 [[well-ordering-principle|정렬 원리]]의 진술의 (Z5), (Z6)에 의해 $l < j$이거나 $l \ge j > k$이고, 앞의 경우 $u_{j,l} = 0$, 뒤의 경우 $w_{l,k} = 0$이므로 모든 항이 $0$이다. [[finite-sum-of-vectors|벡터의 유한 합]]의 (H5)에 의해 $(UW)_{j,k} = 0$이다. 대각성분 $(UW)_{k,k}$에서는 $l < k$인 항이 $u_{k,l} = 0$ 때문에, $l > k$인 항이 $w_{l,k} = 0$ 때문에 $0$이다. 벡터의 유한 합의 (H6)으로 $k$번째 항을 떼고 나머지 항이 모두 $0$이므로 (H5)와 (H0)에 의해 $(UW)_{k,k} = 0 + u_{k,k}w_{k,k} = u_{k,k}w_{k,k}$이다.

(ii) $m$에 대한 [[mathematical-induction|귀납법]]. $U^0 = I_n$은 위삼각행렬이고 $(I_n)_{k,k} = 1 = (u_{k,k})^0$이다. $U^m$이 위삼각행렬이고 $(U^m)_{k,k} = (u_{k,k})^m$이면, (i)에 의해 $U^{m+1} = U^mU$는 위삼각행렬이고 $(U^{m+1})_{k,k} = (u_{k,k})^m u_{k,k} = (u_{k,k})^{m+1}$이다(실수의 거듭제곱의 정의). 이제 (1)에 의해 $j > k$이면 $(f(U))_{j,k} = \sum_{m=0}^{N} a_m \cdot 0 = 0$이고, (나)에 의해 $(f(U))_{k,k} = \sum_{m=0}^{N} a_m (u_{k,k})^m = f(u_{k,k})$이다.
:::

## 예시와 반례

:::example[기저를 바꾸어 계산한 예]
$P = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, $R = T_P$, $f = X^2 + X$를 봅니다. [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)에 의해 $R(x_1, x_2) = (x_2, x_1)$이고, [[matrix-of-a-linear-map|선형사상의 행렬]]의 (2)에 의해 $[R] = P$입니다. [[matrix-product|행렬의 곱]]의 (2)로 계산하면 $PP = I_2$이므로 $[R]^2 = I_2$이고, (2)와 [[polynomial-of-linear-map|선형사상과 행렬에 다항식 대입하기]]의 (6)에 의해
$$
\begin{aligned}
[f(R)] &= f([R]) = I_2 + \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} \\
&= \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}
\end{aligned}
$$
입니다. 한편 $S = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$이면 $SS = 2I_2$이므로 $S$는 가역이고 $S^{-1} = \tfrac{1}{2}S$이며, [[invertible-matrix|가역행렬과 역행렬]]의 (3)에 의해 $S$의 두 열 $\mathcal{B} = (1, 1), (1, -1)$은 $\mathbb{R}^2$의 기저입니다. $R(1, 1) = (1, 1)$, $R(1, -1) = -(1, -1)$이므로 [[matrix-in-bases|기저에 관한 선형사상의 행렬]]의 (1), (2)에 의해 $[R]_{\mathcal{B}} = \operatorname{diag}(1, -1)$이고, (3)과 (5)의 (ii)에 의해 $[f(R)]_{\mathcal{B}} = \operatorname{diag}(f(1), f(-1)) = \operatorname{diag}(2, 0)$입니다. 실제로 $f(R)(x_1, x_2) = (x_1 + x_2, x_1 + x_2)$이므로 $f(R)(1, 1) = 2(1, 1)$이고 $f(R)(1, -1) = (0, 0)$이어서 두 계산이 맞습니다.
:::

:::counterexample[위삼각행렬의 곱에서 대각선 위의 성분은 성분끼리의 곱이 아닌 예]
$U = \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix}$, $W = \begin{pmatrix} 3 & 1 \\ 0 & 1 \end{pmatrix}$이면
$$
UW = \begin{pmatrix} 3 & 2 \\ 0 & 2 \end{pmatrix}
$$
입니다. 대각성분은 $1 \cdot 3$과 $2 \cdot 1$로 (6)의 (i)대로이지만, $(1, 2)$ 성분은 $u_{1,2}w_{1,2} = 1$이 아니라 $u_{1,1}w_{1,2} + u_{1,2}w_{2,2} = 1 + 1 = 2$입니다. 그래서 $f(U)$의 대각성분은 $f(u_{k,k})$로 읽을 수 있지만, 대각선 위의 성분은 일반적으로 성분 하나에 $f$를 대입한 값이 아닙니다. 예컨대 $f = X^2$이면 $U^2 = \begin{pmatrix} 1 & 3 \\ 0 & 4 \end{pmatrix}$이고 $(1, 2)$ 성분은 $3$이지만 $f(u_{1,2}) = 1$입니다.
:::

## 확인 질문

:::check[위삼각행렬 $U = \begin{pmatrix} 2 & 5 \\ 0 & 2 \end{pmatrix}$와 $f = X - 2$에서 $f(U)$의 대각성분은 모두 $0$인데, $f(U)$는 영행렬인가?]
아닙니다. (6)의 (ii)에 의해 대각성분은 $f(2) = 0$, $f(2) = 0$이고 $f(U)$는 위삼각행렬이므로 $(2, 1)$ 성분도 $0$이지만, [[polynomial-of-linear-map|선형사상과 행렬에 다항식 대입하기]]의 (6)의 (ii)에 의해 $f(U) = U - 2I_2 = \begin{pmatrix} 0 & 5 \\ 0 & 0 \end{pmatrix}$이고 $(1, 2)$ 성분은 $5$입니다. 대각성분만으로는 $f(U)$가 영행렬인지 알 수 없습니다.
:::

:::check[$A$가 닮은 행렬 $Q^{-1}AQ$로 바뀌면 $f(A) = O$라는 성질은 유지되는가?]
유지됩니다. (4)에 의해 $f(Q^{-1}AQ) = Q^{-1}f(A)Q$이고, $f(A) = O$이면 이것은 $Q^{-1}OQ = O$입니다. 거꾸로 $f(Q^{-1}AQ) = O$이면 $f(A) = Qf(Q^{-1}AQ)Q^{-1} = O$입니다.
:::
