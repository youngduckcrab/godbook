---
title: 완전히 인수분해되는 특성다항식
title_en: Characteristic Polynomials That Split
aliases: [특성다항식의 완전 인수분해, 완전히 인수분해된다, 일차식의 곱으로 인수분해되는 특성다항식, split characteristic polynomial, characteristic polynomial splits over the reals]
kind: definition
field: linear-algebra
msc: ["15A18"]
level: undergrad
summary: n × n 행렬 A 의 특성다항식이 서로 다른 실수 μ₁, …, μ_r 과 자연수 m₁, …, m_r 로 (−1)ⁿ(t − μ₁)^m₁ ⋯ (t − μ_r)^m_r 꼴이면 완전히 인수분해된다고 한다. 그때 고윳값은 정확히 μ_j 이고 그 대수적 중복도는 m_j 이며, 완전히 인수분해되는 것은 정확히 서로 다른 고윳값들의 대수적 중복도의 합이 n 일 때이다. 삼각행렬은 완전히 인수분해되고, 대각합과 행렬식은 μ_j 와 m_j 로 쓰인다.
requires: [function, real-number-arithmetic, prime-number, well-ordering-principle, mathematical-induction, order-properties-of-reals, vector-space, finite-sum-of-vectors, linear-map, dimension, matrix, matrix-in-bases, change-of-basis-and-similarity, eigenvalue-and-eigenvector, diagonalizable, trace, determinant, finite-product-of-reals, determinant-of-triangular-matrix, determinant-with-leading-columns, power-of-a-real-number, polynomial-function, product-of-polynomial-functions, roots-of-polynomial-function, coefficients-of-polynomial-function, multiplicity-of-a-root, characteristic-polynomial, eigenvalue-iff-root, characteristic-polynomial-of-triangular, characteristic-polynomial-examples, real-eigenvalues-2x2, characteristic-polynomial-coefficients, algebraic-multiplicity]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "4장 1절 Main definitions, 1.4 Complex vs real spaces, p.102; 1.5 Multiplicities of eigenvalues, pp.102–103; 1.6 Trace and determinant, Theorem 1.2, p.103; 1.7 Eigenvalues of a triangular matrix, pp.103–104; 4장 1절 연습문제 1.10, 1.11, p.105; 4장 2절 Diagonalization, 2.5 Criterion of diagonalizability, Theorem 2.8 과 각주 4, p.111; 2.6 Real factorization, Theorem 2.9, p.112; 6장 1절 Upper triangular (Schur) representation of an operator, 두 번째 Remark, p.164, Theorem 1.2 와 그 증명, p.165; 9장 3절 Generalized eigenspaces, Theorem 3.4 의 증명, p.262"
    checked: original
    note: "출처 4장 1.5(p.102)는 차수 n 인 다항식이 복소수 범위에서 중복도를 세어 정확히 n 개의 근을 갖고 p(z) = a_n(z − λ₁)(z − λ₂)⋯(z − λ_n) 으로 쓸 수 있다고 적고(p.103), 1.4(p.102)는 대수학의 기본정리가 복소수 근을 준다고 적는다. 출처는 실행렬을 복소수 공간의 연산자로 보기로 하므로 '실수 범위에서 완전히 인수분해된다'는 이름을 따로 두지 않는다. 같은 조건을 출처는 '고윳값을 중복도를 세어 정확히 n = dim V 개 갖는다'로 말한다: 4장 2.5 의 Theorem 2.8(p.111)의 가정과 그 각주 4(복소수 공간에서는 이 가정이 늘 성립한다), 6장 1절 Theorem 1.2(p.165)의 '모든 고윳값이 실수이다(곧 중복도를 세어 정확히 n 개의 실고윳값을 갖는다)'. 2.6 의 Theorem 2.9(p.112)는 실행렬이 실수로 대각화되는 것은 정확히 복소수로 대각화되고 모든 고윳값이 실수일 때라고 적는다. 이 항목의 정의는 같은 인수를 모은 지수 꼴이고, 9장 3절 Theorem 3.4 의 증명(p.262)이 특성다항식을 (z − λ₁)^{m₁}⋯(z − λ_r)^{m_r} 로 적는 꼴과 같다(출처의 이 식은 부호 (−1)ⁿ 이 없다). (3)은 위의 '중복도를 세어 n 개'를 이 사이트의 대수적 중복도의 합으로 적은 판정이다. (1)과 (4)는 출처 1.7(pp.103–104)이 삼각행렬의 특성다항식을 (a₁,₁ − λ)⋯(a_n,n − λ) 로 적고 '중복도를 세어' 고윳값이 대각성분이라고 적는 것을, 같은 인수를 모으는 귀납으로 지수 꼴까지 밀고 간 것이다. (7)은 출처 4장 1.6 의 Theorem 1.2(p.103)의 trace A = λ₁ + ⋯ + λ_n, det A = λ₁⋯λ_n 을 같은 수끼리 모아 실수 범위에서 적은 것이고, 출처는 그 증명을 연습문제 1.10, 1.11(p.105)로 돌린다. (1)–(7)의 증명은 이 사이트가 썼다. 예시 '같은 대각성분이 떨어져 놓인 대각행렬'은 출처 1.7 의 삼각행렬의 특성다항식의 한 경우이다. 반례 '실수 범위에서 인수분해되지 않는 2 × 2 행렬과 3 × 3 행렬'의 J 는 출처 4장 1.4(p.102)가 실고윳값이 없는 예로 드는 회전 R_α 에서 α 를 직각으로 둔 것이다. 출처 6장 1절의 Remark(p.164)는 회전행렬 R_α (α ≠ kπ) 가 고윳값이 복소수이므로 실수 위삼각행렬과 닮지 않는다고 적는데, 이것은 이 항목의 (4)와 (5)에서 J 가 삼각행렬과 닮지 않는다는 것이 나오는 것과 같은 발상이다. 같은 반례의 C 에서 p_C(x) = (2 − x)p_J(x) 로 쓰는 것은 출처 6장 1절 Theorem 1.2 의 증명(p.165)이 첫 열이 λ₁e₁ 인 행렬에서 det(A − λI) = (λ₁ − λ)det(A₁ − λI) 를 쓰는 것과 같은 꼴이다. 확인 질문 '$3 \\times 3$ 행렬 $A$의 고윳값이 $2$ 하나뿐이고 그 대수적 중복도가 $3$이면 $\\operatorname{tr} A$와 $\\det A$는 무엇인가?' 는 위 Theorem 1.2 를 고윳값 하나에 쓴 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인(새로 쓴 증명 통독, 예의 수치 확인). 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$n$이 자연수이고 $A$가 $n \times n$ [[matrix|행렬]]이라 하자. $p_A$는 [[characteristic-polynomial|특성다항식]]이고, 실수 $c$에 대한 $t - c$는 [[polynomial-function|다항함수]]의 것, 함수의 열의 곱과 거듭제곱은 [[product-of-polynomial-functions|다항함수의 곱]]의 것, 서로 다른 실수의 열은 [[roots-of-polynomial-function|다항함수의 근의 개수]]의 것, 대수적 중복도는 [[algebraic-multiplicity|고윳값의 대수적 중복도와 기하적 중복도]]의 것이다.

**완전히 인수분해된다.** $A$의 특성다항식이 **완전히 인수분해된다**(splits)는 것은 정확히 정수 $r \ge 1$, 서로 다른 실수의 열 $\mu_1, \dots, \mu_r$, 자연수의 열 $m_1, \dots, m_r$이 있어
$$
p_A = (-1)^n (t - \mu_1)^{m_1} \cdots (t - \mu_r)^{m_r}
$$
일 때이다. 오른쪽은 $j$번째 항이 $(t - \mu_j)^{m_j}$인 함수의 열의 곱의 $(-1)^n$배이다. 이런 $r$, $\mu$, $m$을 $p_A$의 **완전 인수분해**라 한다. 줄여서 "$A$가 완전히 인수분해된다"고도 쓴다. 유한차원 [[vector-space|벡터공간]] $V$($\dim V = n$) 위의 [[linear-map|선형사상]] $T$에 대해서도 [[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 $p_T$로 같게 정한다.

다음이 성립한다.

1. (같은 인수 모으기) $p \ge 1$이 정수이고 $c_1, \dots, c_p$가 실수의 열이면, 정수 $r \ge 1$, 서로 다른 실수의 열 $\mu_1, \dots, \mu_r$, 자연수의 열 $m_1, \dots, m_r$이 있어 $(t - c_1) \cdots (t - c_p) = (t - \mu_1)^{m_1} \cdots (t - \mu_r)^{m_r}$이다.
2. (완전 인수분해에서 읽기) $r$, $\mu$, $m$이 $p_A$의 완전 인수분해이면
   - (i) $m_1 + \cdots + m_r = n$이다.
   - (ii) $A$의 [[eigenvalue-and-eigenvector|고윳값]]은 정확히 $\mu_1, \dots, \mu_r$이다. 곧 실수 $\lambda$가 $A$의 고윳값인 것은 정확히 $\lambda = \mu_j$인 $j$가 있을 때이다.
   - (iii) 모든 $j$에서 $A$에서 $\mu_j$의 대수적 중복도는 $m_j$이다.
   - (iv) $s$, $\nu$, $k$도 $p_A$의 완전 인수분해이면, 모든 $i \in \{1, \dots, s\}$에서 $\nu_i = \mu_j$인 $j$가 있고 그때 $k_i = m_j$이며, 모든 $j$에서 $\mu_j = \nu_i$인 $i$가 있다.
3. (판정) $A$가 완전히 인수분해되는 것은 정확히 모든 항이 $A$의 고윳값인 서로 다른 실수의 열 $\mu_1, \dots, \mu_r$로서 대수적 중복도의 합이 $n$인 것이 있을 때이다. 이런 열에 대하여, $m_j$를 $\mu_j$의 대수적 중복도라 하면 $r$, $\mu$, $m$은 $p_A$의 완전 인수분해이고, $A$의 모든 고윳값은 이 열의 어떤 항과 같다.
4. (삼각행렬) $A$가 삼각행렬([[determinant-of-triangular-matrix|삼각행렬의 행렬식]]의 뜻)이면 $A$는 완전히 인수분해된다. 특히 대각행렬([[diagonalizable|대각화 가능]]의 뜻)과 $1 \times 1$ 행렬은 완전히 인수분해된다.
5. (닮은 행렬과 선형사상) $B$가 $n \times n$ 행렬이고 $A$와 $B$가 [[change-of-basis-and-similarity|닮았으면]], $A$가 완전히 인수분해되는 것은 정확히 $B$가 완전히 인수분해될 때이고, 완전 인수분해도 같다. $V$의 기저 $\mathcal{B}$에 대하여 $T$가 완전히 인수분해되는 것은 정확히 $[T]_{\mathcal{B}}$([[matrix-in-bases|기저에 관한 선형사상의 행렬]])가 완전히 인수분해될 때이다.
6. ($2 \times 2$) $n = 2$이면, $A$가 완전히 인수분해되는 것은 정확히 [[real-eigenvalues-2x2|2 × 2 행렬의 실고윳값]]의 판별식이 $0 \le \operatorname{disc} A$일 때이다.
7. (대각합과 행렬식) $r$, $\mu$, $m$이 $p_A$의 완전 인수분해이면
   $$
   \begin{aligned}
   \operatorname{tr} A &= m_1 \mu_1 + \cdots + m_r \mu_r, \\
   \det A &= \mu_1^{m_1} \mu_2^{m_2} \cdots \mu_r^{m_r}
   \end{aligned}
   $$
   이다. 첫째 식의 오른쪽은 $j$번째 항이 $m_j \mu_j$인 실수의 열의 [[finite-sum-of-vectors|합]]이고, 둘째 식의 오른쪽은 $j$번째 항이 $\mu_j^{m_j}$인 실수의 열의 [[finite-product-of-reals|곱]]이다($\operatorname{tr}$은 [[trace|대각합]], $\det$는 [[determinant|행렬식]]).
:::

:::english
Let $n$ be a natural number and let $A$ be an $n \times n$ matrix. $p_A$ is the characteristic polynomial; $t - c$ for a real number $c$ is that of the entry on polynomial functions, products of sequences of functions and powers are those of the entry on products of polynomial functions, sequences of distinct real numbers are those of the entry on the number of roots of a polynomial function, and the algebraic multiplicity is that of the entry on the algebraic and geometric multiplicity of an eigenvalue.

**Splitting.** The characteristic polynomial of $A$ **splits** exactly when there are an integer $r \ge 1$, a sequence $\mu_1, \dots, \mu_r$ of distinct real numbers and a sequence $m_1, \dots, m_r$ of natural numbers such that
$$
p_A = (-1)^n (t - \mu_1)^{m_1} \cdots (t - \mu_r)^{m_r}.
$$
The right-hand side is $(-1)^n$ times the product of the sequence of functions whose $j$-th term is $(t - \mu_j)^{m_j}$. Such $r$, $\mu$, $m$ are called a **complete factorization** of $p_A$. We also say briefly that "$A$ splits". For a linear map $T$ on a finite-dimensional vector space $V$ ($\dim V = n$) we define the same with $p_T$ of the entry on eigenvalues as roots of the characteristic polynomial.

The following hold.

1. (Collecting equal factors) If $p \ge 1$ is an integer and $c_1, \dots, c_p$ is a sequence of real numbers, then there are an integer $r \ge 1$, a sequence $\mu_1, \dots, \mu_r$ of distinct real numbers and a sequence $m_1, \dots, m_r$ of natural numbers with $(t - c_1) \cdots (t - c_p) = (t - \mu_1)^{m_1} \cdots (t - \mu_r)^{m_r}$.
2. (Reading off a complete factorization) If $r$, $\mu$, $m$ is a complete factorization of $p_A$, then
   - (i) $m_1 + \cdots + m_r = n$.
   - (ii) The eigenvalues of $A$ are exactly $\mu_1, \dots, \mu_r$; that is, a real number $\lambda$ is an eigenvalue of $A$ exactly when $\lambda = \mu_j$ for some $j$.
   - (iii) For every $j$, the algebraic multiplicity of $\mu_j$ in $A$ is $m_j$.
   - (iv) If $s$, $\nu$, $k$ is also a complete factorization of $p_A$, then for every $i \in \{1, \dots, s\}$ there is $j$ with $\nu_i = \mu_j$, and then $k_i = m_j$; and for every $j$ there is $i$ with $\mu_j = \nu_i$.
3. (Criterion) $A$ splits exactly when there is a sequence $\mu_1, \dots, \mu_r$ of distinct real numbers, all of whose terms are eigenvalues of $A$, whose algebraic multiplicities add up to $n$. For such a sequence, if $m_j$ is the algebraic multiplicity of $\mu_j$, then $r$, $\mu$, $m$ is a complete factorization of $p_A$, and every eigenvalue of $A$ equals some term of the sequence.
4. (Triangular matrices) If $A$ is triangular (in the sense of the entry on the determinant of a triangular matrix), then $A$ splits. In particular, diagonal matrices (in the sense of the entry on diagonalizability) and $1 \times 1$ matrices split.
5. (Similar matrices and linear maps) If $B$ is an $n \times n$ matrix and $A$ and $B$ are similar, then $A$ splits exactly when $B$ splits, and they have the same complete factorizations. For a basis $\mathcal{B}$ of $V$, $T$ splits exactly when $[T]_{\mathcal{B}}$ splits.
6. ($2 \times 2$) If $n = 2$, then $A$ splits exactly when its discriminant of the entry on real eigenvalues of $2 \times 2$ matrices satisfies $0 \le \operatorname{disc} A$.
7. (Trace and determinant) If $r$, $\mu$, $m$ is a complete factorization of $p_A$, then
   $$
   \begin{aligned}
   \operatorname{tr} A &= m_1 \mu_1 + \cdots + m_r \mu_r, \\
   \det A &= \mu_1^{m_1} \mu_2^{m_2} \cdots \mu_r^{m_r}.
   \end{aligned}
   $$
   The right-hand side of the first is the sum of the sequence of real numbers whose $j$-th term is $m_j \mu_j$, and that of the second is the product of the sequence of real numbers whose $j$-th term is $\mu_j^{m_j}$.
:::

## 직관

특성다항식을 일차식 $t - \mu$들의 곱으로 끝까지 쪼갤 수 있으면, 고윳값과 그 대수적 중복도가 한눈에 보입니다. 쪼갤 때 같은 일차식은 거듭제곱으로 모읍니다. 그래서 정의에서 $\mu_j$들은 서로 다르고 지수 $m_j$는 $1$ 이상입니다. 그러면 (2)처럼 $\mu_j$가 바로 고윳값이고 $m_j$가 그 대수적 중복도이며, 지수를 모두 더하면 차수 $n$입니다.

영수증에 같은 물건이 여러 줄에 흩어져 적혀 있으면 "사과 3개, 배 1개"처럼 물건마다 한 줄로 모아 적을 수 있습니다. (1)이 그 일을 합니다. 대각성분이 $1, 2, 1$인 대각행렬의 특성다항식은 $-(t - 1)(t - 2)(t - 1)$이지만, 모으면 $-(t - 1)^2(t - 2)$입니다. 비유와 다른 점은, 영수증은 물건의 순서를 마음대로 바꿔 적어도 되지만 이 항목은 열의 순서를 바꾸는 일반 법칙을 쓰지 않고, 한 항씩 덧붙이며 이미 있는 줄에 더하거나 새 줄을 만드는 귀납으로 모은다는 것입니다.

실수만 쓰면 쪼개지지 않는 특성다항식이 있습니다. $J = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$의 특성다항식 $t^2 + t^0$은 실수 근이 없어서 일차식을 하나도 떼어 낼 수 없습니다. 복소수를 허락하면 차수가 $1$ 이상인 모든 다항식이 일차식의 곱으로 쪼개진다는 것이 알려져 있지만(출처는 이것을 대수학의 기본정리로 적습니다. 실행렬의 경우는 강의 "복소수"의 항목 "특성다항식의 복소수 근"이 증명합니다), 이 강의는 복소수를 다루지 않으므로 그 사실을 쓰지 않습니다. 삼각행렬과 닮은 행렬의 특성다항식이 완전히 인수분해된다는 것은 (4)와 (5)에서 나오지만, 그 거꾸로(완전히 인수분해되면 삼각행렬과 닮는다)는 이 항목이 다루지 않습니다.

(3)의 판정은 고윳값마다 대수적 중복도를 알면 인수분해를 직접 쓰지 않고도 쪼개지는지 알 수 있다는 것입니다. 대수적 중복도의 합은 늘 $n$ 이하이고([[algebraic-multiplicity|고윳값의 대수적 중복도와 기하적 중복도]]의 (3)), 그 합이 $n$에 닿을 때가 정확히 완전히 인수분해될 때입니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]]의 것이고, (Z…)와 (L…)은 [[prime-number]]와 [[well-ordering-principle]]의 것이며, (H…)는 [[finite-sum-of-vectors]]의 것이다. 실수의 순서의 성질의 번호는 [[order-properties-of-reals]]의 것이다. 함수의 곱의 번호는 [[product-of-polynomial-functions|다항함수의 곱]]의 것이고, "곱의 (2)"는 끝항 떼기와 $k$번째 항 떼어 내기, "곱의 (3)"은 $f^1 = f$, $f^{k+1} = f^k f$이다. 두 함수는 모든 $x$에서 값이 같으면 같다([[function|함수]]의 같음).

**(1)의 증명.** $p$에 대한 [[mathematical-induction|수학적 귀납법]]으로 증명한다. $p = 1$이면 곱의 (2)에 의해 왼쪽은 $t - c_1$이고, $r = 1$, $\mu_1 = c_1$, $m_1 = 1$로 두면 곱의 (2)와 (3)에 의해 오른쪽은 $(t - c_1)^1 = t - c_1$이다.

길이 $p$의 모든 열에서 성립한다고 하고 길이 $p + 1$인 열 $c_1, \dots, c_{p+1}$을 잡자. 곱의 (2)에 의해 $P = (t - c_1) \cdots (t - c_{p+1})$은 $\bigl((t - c_1) \cdots (t - c_p)\bigr)(t - c_{p+1})$이고, 귀납 가정에 의해 $(t - c_1) \cdots (t - c_p) = F_1 \cdots F_r$인 $r$, $\mu$, $m$이 있다. 여기서 $F_j = (t - \mu_j)^{m_j}$이다. $c = c_{p+1}$로 두자.

- $c = \mu_k$인 $k$가 있는 경우. $G_1, \dots, G_{r-1}$을 열 $F$에서 $k$번째 항을 지운 열이라 하면 곱의 (2)에 의해 $F_1 \cdots F_r = (G_1 \cdots G_{r-1}) F_k$이다. 곱의 (1)의 결합법칙과 곱의 (3)에 의해
  $$
  \begin{aligned}
  P &= \bigl((G_1 \cdots G_{r-1}) F_k\bigr)(t - \mu_k) \\
  &= (G_1 \cdots G_{r-1})(t - \mu_k)^{m_k + 1}
  \end{aligned}
  $$
  이다. $m'$을 $m$에서 $k$번째 항만 $m_k + 1$로 바꾼 자연수의 열이라 하고 $F'_j = (t - \mu_j)^{m'_j}$로 두면, $F'$에서 $k$번째 항을 지운 열은 $G$이므로 곱의 (2)에 의해 $F'_1 \cdots F'_r = (G_1 \cdots G_{r-1})(t - \mu_k)^{m_k + 1} = P$이다. $r$과 $\mu$는 그대로이므로 $r$, $\mu$, $m'$이 길이 $p + 1$에서의 것이다.
- 모든 $j$에서 $c \ne \mu_j$인 경우. $\mu_1, \dots, \mu_r$에 $c$를 덧붙인 길이 $r + 1$인 열은 서로 다른 실수의 열이다. $m$에 $1$을 덧붙인 열을 $m'$이라 하면, 곱의 (2)와 (3)에 의해 $F_1 \cdots F_r (t - c)^1 = (F_1 \cdots F_r)(t - c) = P$이다.

두 경우는 "$c = \mu_k$인 $k$가 있다"와 그 부정이므로 하나가 성립한다. 귀납법의 원리에 의해 모든 $p \ge 1$에서 성립한다.

**(2)의 증명.** $F = (t - \mu_1)^{m_1} \cdots (t - \mu_r)^{m_r}$로 두면 $p_A = (-1)^n F$이고, [[power-of-a-real-number|실수의 거듭제곱]]의 (5)에 의해 $(-1)^n \ne 0$이다((K4), (K7)). [[multiplicity-of-a-root|근의 중복도]]의 (5)를 $f = p_A$, $a = (-1)^n$에 쓰면, 모든 $m_j \ge 1$이므로 $p_A$의 근은 정확히 $\mu_1, \dots, \mu_r$이고, $\mu_j$의 중복도는 $m_j$이며, $\deg p_A = m_1 + \cdots + m_r$이다. [[characteristic-polynomial|특성다항식]]의 (1)에 의해 $\deg p_A = n$이므로 (i)이 성립한다. [[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 (1)에 의해 고윳값은 정확히 $p_A$의 근이므로 (ii)가 성립하고, 대수적 중복도의 정의에 의해 (iii)이 성립한다. (iv): (ii)를 두 완전 인수분해에 쓰면 각 $\nu_i$는 고윳값이므로 어떤 $\mu_j$와 같고, 각 $\mu_j$는 고윳값이므로 어떤 $\nu_i$와 같다. $\nu_i = \mu_j$이면 (iii)을 두 완전 인수분해에 써서 $k_i$와 $m_j$는 둘 다 같은 수의 대수적 중복도이므로 $k_i = m_j$이다.

**(3)의 증명.** $A$가 완전히 인수분해되면 완전 인수분해 $r$, $\mu$, $m$에서 (2)의 (ii)에 의해 모든 $\mu_j$가 고윳값이고 (iii)과 (i)에 의해 그 대수적 중복도의 합은 $n$이다.

거꾸로 모든 항이 고윳값인 서로 다른 실수의 열 $\mu_1, \dots, \mu_r$의 대수적 중복도 $m_1, \dots, m_r$의 합이 $n$이라 하자. [[algebraic-multiplicity|고윳값의 대수적 중복도와 기하적 중복도]]의 (1)에 의해 모든 $m_j \ge 1$이므로 $m_j$는 자연수이다. $r = 0$이면 합은 빈 열의 합 $0$이고 $n \ge 1$이므로 $r \ge 1$이다((Z5)와 (L1)). 근의 중복도의 (6)을 $f = p_A$에 쓰면, 영함수가 아닌 다항함수 $g$가 있어 $p_A = (t - \mu_1)^{m_1} \cdots (t - \mu_r)^{m_r}\, g$이고, $m_1 + \cdots + m_r = n = \deg p_A$이므로 $g$는 값이 $0$이 아닌 상수함수 $c\,t^0$이다. 곱의 (1)에 의해 $p_A = c\,F$이다. [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]의 (8)에 의해 $c\,F$의 최고차계수는 $c$이고, 특성다항식의 (1)에 의해 $p_A$의 최고차계수는 $(-1)^n$이므로 $c = (-1)^n$이다. 따라서 $r$, $\mu$, $m$은 $p_A$의 완전 인수분해이다.

마지막 문장. $\lambda$가 고윳값이고 모든 $j$에서 $\lambda \ne \mu_j$라 가정하자. $\mu$에 $\lambda$를 덧붙인 길이 $r + 1$인 열은 서로 다른 실수의 열이고, 그 대수적 중복도의 합은 정의(끝항을 더하는 규칙)에 의해 $n + m_\lambda$이다. 여기서 $m_\lambda \ge 1$은 $\lambda$의 대수적 중복도이다(고윳값의 대수적 중복도와 기하적 중복도의 (1)). 같은 항목의 (3)에 의해 $n + m_\lambda \le n$이고, 실수의 순서의 성질의 (2)에 의해 $m_\lambda \le 0$이 되어 $m_\lambda \ge 1$과 모순이다((Z8), (L1)). 따라서 $\lambda = \mu_j$인 $j$가 있다.

**(4)의 증명.** [[characteristic-polynomial-of-triangular|삼각행렬의 특성다항식]]의 (2)에 의해 $p_A = (-1)^n (t - a_{1,1}) \cdots (t - a_{n,n})$이다. (1)을 $p = n$, $c_k = a_{k,k}$에 쓰면 이 곱은 $(t - \mu_1)^{m_1} \cdots (t - \mu_r)^{m_r}$ 꼴이므로 $A$는 완전히 인수분해된다. 대각행렬은 삼각행렬이고, $1 \times 1$ 행렬은 삼각행렬의 행렬식의 마지막 문단에 의해 삼각행렬이다.

**(5)의 증명.** 고윳값과 특성다항식의 근의 (4)에 의해 $p_A = p_B$이므로 두 특성다항식은 같은 함수이고, 완전 인수분해의 정의는 함수와 $n$에만 기대므로 같다. $T$에 대해서는 $p_T$의 정의에 의해 $p_T = p_{[T]_{\mathcal{B}}}$이고, [[dimension|유한차원과 차원]]의 (2)에 의해 $[T]_{\mathcal{B}}$는 $n \times n$ 행렬이므로 같은 이유이다.

**(6)의 증명.** 판별식이 $0$이면 2 × 2 행렬의 실고윳값의 (3)에 의해 $p_A = (t - h)^2$이고, 거듭제곱의 (5)와 [[vector-space|(V5)]], 곱의 (2)에 의해 이것은 $(-1)^2 (t - h)^2$, 곧 $r = 1$, $\mu_1 = h$, $m_1 = 2$인 완전 인수분해이다. 판별식이 양수이면 같은 항목의 (4)에 의해 $\lambda_1 \ne \lambda_2$이고 $p_A = (t - \lambda_1)(t - \lambda_2)$이며, 곱의 (3)에 의해 이것은 $(-1)^2 (t - \lambda_1)^1 (t - \lambda_2)^1$이다. 거꾸로 $A$가 완전히 인수분해되면 (2)의 (ii)에 의해 $\mu_1$이 고윳값이므로 $A$는 고윳값을 갖고, 같은 항목의 (2)에 의해 $0 \le \operatorname{disc} A$이다.

**(7)의 증명.** $F$를 (2)의 증명의 것으로 두고, $q \in \{1, \dots, r\}$마다 $F_{(q)}$를 처음 $q$개의 인수의 곱, $s_q = m_1 + \cdots + m_q$로 두자. 다항함수의 계수와 차수의 (8)에 의해 $F_{(q)}$는 영함수가 아니고 최고차계수가 $1$이며 차수가 $s_q$이고, $s_q \ge 1$이다. 먼저 $F_{(q)}$의 $t^{s_q - 1}$의 계수가 $-(m_1 \mu_1 + \cdots + m_q \mu_q)$임을 $q$에 대한 귀납으로 보인다. $q = 1$이면 $F_{(1)} = (t - \mu_1)^{m_1}$이고(곱의 (2)) 계수와 차수의 (9)의 둘째 문장에 의해 그 계수는 $-m_1 \mu_1$이다. $q < r$에서 성립하면, 곱의 (2)에 의해 $F_{(q+1)} = F_{(q)} (t - \mu_{q+1})^{m_{q+1}}$이고, 계수와 차수의 (9)를 $f = F_{(q)}$($s_q \ge 1$), $g = (t - \mu_{q+1})^{m_{q+1}}$에 쓰면 $t^{s_q + m_{q+1} - 1}$의 계수는 $-(m_1 \mu_1 + \cdots + m_q \mu_q) + (-m_{q+1}\mu_{q+1})$이다. 합의 정의(끝항을 더하는 규칙)와 (K12)의 (iv)에 의해 이것은 $-(m_1 \mu_1 + \cdots + m_{q+1} \mu_{q+1})$이고, $s_q + m_{q+1} = s_{q+1}$이다.

$F = F_{(r)}$이고 (2)의 (i)에 의해 $s_r = n$이다. 계수와 차수의 (3)의 (i)에 의해 $p_A = (-1)^n F$의 $t^{n-1}$의 계수는 $(-1)^n \cdot \bigl(-(m_1 \mu_1 + \cdots + m_r \mu_r)\bigr)$이고, 거듭제곱의 (1)과 (K9), (K12)에 의해 이것은 $(-1)^{n-1}(m_1 \mu_1 + \cdots + m_r \mu_r)$이다. [[characteristic-polynomial-coefficients|특성다항식의 계수와 대각합]]의 (2)에 의해 이 계수는 $(-1)^{n-1} \operatorname{tr} A$이고 $(-1)^{n-1} \ne 0$이므로 (K11)에 의해 $\operatorname{tr} A = m_1 \mu_1 + \cdots + m_r \mu_r$이다.

행렬식. 특성다항식의 (2)에 의해 $\det A = p_A(0) = (-1)^n F(0)$이다. 함수의 열의 곱과 거듭제곱의 값에 의해 $F(0)$은 $j$번째 항이 $(0 - \mu_j)^{m_j} = (-\mu_j)^{m_j}$인 실수의 열의 곱이고, (K9)와 거듭제곱의 (2)의 (iii)에 의해 $(-\mu_j)^{m_j} = (-1)^{m_j} \mu_j^{m_j}$이다. [[finite-product-of-reals|실수의 유한 곱]]의 (3)에 의해 $F(0)$은 $j$번째 항이 $(-1)^{m_j}$인 열의 곱과 $j$번째 항이 $\mu_j^{m_j}$인 열의 곱의 곱이다. 앞의 곱은 $(-1)^{m_1 + \cdots + m_r}$이다: 실수 $a$와 $0$ 이상인 정수의 열 $d_1, \dots, d_q$에 대하여 $a^{d_1} \cdots a^{d_q} = a^{d_1 + \cdots + d_q}$임을 $q$에 대한 귀납으로 보이면 된다. $q = 0$이면 빈 곱 $1$과 $a^0 = 1$이고, $q$에서 $q + 1$로는 유한 곱의 (1), 합의 정의, 거듭제곱의 (2)의 (i)에 의해 $(a^{d_1 + \cdots + d_q}) a^{d_{q+1}} = a^{d_1 + \cdots + d_{q+1}}$이다. (2)의 (i)에 의해 지수의 합은 $n$이므로
$$
\begin{aligned}
\det A &= (-1)^n (-1)^n\, \mu_1^{m_1} \cdots \mu_r^{m_r} \\
&= \mu_1^{m_1} \cdots \mu_r^{m_r}
\end{aligned}
$$
이다. 마지막 등호는 거듭제곱의 (2)의 (i), (ii), (iv)에 의해 $(-1)^n (-1)^n = (-1)^{2n} = ((-1)^2)^n = 1^n = 1$이기 때문이다(거듭제곱의 (5)로 $(-1)^2 = 1$). $\blacksquare$
:::

## 예시와 반례

:::example[같은 대각성분이 떨어져 놓인 대각행렬]
$D = \operatorname{diag}(1, 2, 1)$이라 합시다. [[characteristic-polynomial-of-triangular|삼각행렬의 특성다항식]]의 (4)에 의해 $p_D = (-1)^3 (t - 1)(t - 2)(t - 1)$입니다. 같은 대각성분 $1$이 이어져 있지 않으므로 그 항목의 (5)를 바로 쓸 수는 없습니다. 대신 [[product-of-polynomial-functions|다항함수의 곱]]의 (2)로 둘째 인수를 떼어 내면 $(t - 1)(t - 2)(t - 1) = \bigl((t - 1)(t - 1)\bigr)(t - 2)$이고, 같은 항목의 (2), (3)에 의해 이것은 $(t - 1)^2 (t - 2)^1$, 곧 항이 $(t - 1)^2$, $(t - 2)^1$인 길이 $2$인 열의 곱입니다. (1)이 일반적으로 하는 일을 이 경우에 직접 한 것입니다. 따라서 $p_D = (-1)^3 (t - 1)^2 (t - 2)^1$이고 $D$는 완전히 인수분해됩니다. (2)에 의해 고윳값은 $1$과 $2$, 대수적 중복도는 $2$와 $1$이고 그 합은 $3$입니다. (7)에 의해 $\operatorname{tr} D = 2 \cdot 1 + 1 \cdot 2 = 4$, $\det D = 1^2 \cdot 2^1 = 2$이며, 대각성분으로 직접 계산한 $1 + 2 + 1 = 4$와 $1 \cdot 2 \cdot 1 = 2$와 맞습니다.
:::

:::counterexample[실수 범위에서 인수분해되지 않는 2 × 2 행렬과 3 × 3 행렬]
$J = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$은 [[characteristic-polynomial-examples|특성다항식의 계산 예]]의 (2)에 의해 고윳값이 없습니다. 완전히 인수분해되면 (2)의 (ii)에 의해 $\mu_1$이 고윳값이어야 하므로 $J$는 완전히 인수분해되지 않습니다. (6)으로 보아도 $\operatorname{tr} J = 0$, $\det J = 1$이므로 판별식은 $0 - 4 = -4 < 0$입니다.

$3 \times 3$ 행렬
$$
C = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 0 & -1 \\ 0 & 1 & 0 \end{pmatrix}
$$
은 첫째 열이 $2e_1$이고 오른쪽 아래 $2 \times 2$ 부분이 $J$이므로, [[determinant-with-leading-columns|처음 몇 열이 정해진 행렬의 행렬식]]의 (3)에 의해 모든 실수 $x$에서 $p_C(x) = (2 - x)\, p_J(x)$입니다. 특성다항식의 계산 예의 (2)에 의해 $1 \le p_J(x)$이므로 $p_J(x) \ne 0$이고, [[real-number-arithmetic|(K10)]]에 의해 $p_C(x) = 0$인 것은 정확히 $x = 2$일 때입니다. 따라서 $C$의 고윳값은 $2$뿐입니다. $h = (-1)p_J$로 두면 (K9)에 의해 $p_C = (t - 2)\,h$이고 $h(2) = -5 \ne 0$이므로, [[multiplicity-of-a-root|근의 중복도]]의 (1)의 유일성에 의해 $2$의 대수적 중복도는 $1$입니다. 모든 항이 고윳값인 서로 다른 실수의 열은 빈 열이거나 길이 $1$인 열 $2$뿐이고, 그 대수적 중복도의 합은 $0$이나 $1$로 $3$보다 작습니다. (3)에 의해 $C$는 완전히 인수분해되지 않습니다. 고윳값이 있어도 완전히 인수분해되지 않을 수 있는 예입니다.
:::

## 확인 질문

:::check[$4 \times 4$ 행렬 $A$의 고윳값이 정확히 $1$과 $3$이고 대수적 중복도가 각각 $1$과 $3$이면 $p_A$는 무엇인가?]
$p_A = (t - 1)^1 (t - 3)^3$입니다. 열 $1, 3$은 서로 다르고 두 항이 모두 고윳값이며 대수적 중복도의 합이 $1 + 3 = 4$이므로, (3)에 의해 $p_A = (-1)^4 (t - 1)^1 (t - 3)^3$이고 [[power-of-a-real-number|실수의 거듭제곱]]의 (5)에 의해 $(-1)^4 = 1$입니다. (7)에 의해 $\operatorname{tr} A = 1 + 3 \cdot 3 = 10$이고 $\det A = 1 \cdot 3^3 = 27$입니다.
:::

:::check[$3 \times 3$ 행렬 $A$의 고윳값이 $2$ 하나뿐이고 그 대수적 중복도가 $3$이면 $\operatorname{tr} A$와 $\det A$는 무엇인가?]
$\operatorname{tr} A = 6$, $\det A = 8$입니다. 길이 $1$인 열 $2$의 대수적 중복도의 합이 $3$이므로 (3)에 의해 $p_A = (-1)^3 (t - 2)^3$은 완전 인수분해이고, (7)에 의해 $\operatorname{tr} A = 3 \cdot 2 = 6$, $\det A = 2^3 = 8$입니다. 위삼각행렬 $\begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}$이 그런 행렬의 한 예입니다.
:::
