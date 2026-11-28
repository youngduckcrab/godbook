---
title: 선형사상과 행렬의 거듭제곱
title_en: Powers of Linear Maps and Matrices
aliases: [거듭제곱, 선형사상의 거듭제곱, 행렬의 거듭제곱, 행렬의 제곱, 지수법칙, power of a linear map, power of a matrix, matrix power, laws of exponents]
kind: theorem
field: linear-algebra
msc: ["15A04"]
level: undergrad
summary: 선형사상 T 와 정사각행렬 A 의 0 이상인 정수 지수의 거듭제곱을 재귀 정리로 정의한다(0제곱은 항등함수와 단위행렬, k + 1 제곱은 k제곱에 T 나 A 를 오른쪽에서 한 번 더 합성하거나 곱한 것). 지수법칙, 교환하는 두 사상의 거듭제곱, 스칼라배·항등함수·영사상의 거듭제곱, 영벡터 하나뿐인 공간 위의 사상, 기저에 관한 행렬과 거듭제곱, 닮은 행렬과 대각행렬의 거듭제곱을 증명한다.
requires: [function, function-composition, composition-is-associative, inverse-function, recursion-theorem, mathematical-induction, well-ordering-principle, even-and-odd, real-number-arithmetic, power-of-a-real-number, vector-space, vector-space-basic-properties, linear-map, linear-map-examples, linear-maps-form-a-vector-space, composition-of-linear-maps, basis, dimension, matrix, matrix-vector-product, matrix-of-a-linear-map, matrix-product, matrix-product-properties, invertible-matrix, inverse-matrix-properties, matrix-in-bases, change-of-basis-and-similarity, diagonalizable, eigenvalue-examples, ring, ring-examples, finite-products-in-a-commutative-ring]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "9장 2절 Spectral Mapping Theorem, 2.1 Polynomials of operators, p.257; 9장 1절 연습문제 1.1, p.256; 4장 첫머리, p.99; 4장 2.2 Some motivations: functions of operators, pp.107–108; 1장 5절 연습문제 5.7, p.24; 2장 3절 연습문제 3.6, 3.7, p.51; 4장 2.7.3 A non-diagonalizable matrix, p.113"
    checked: original
    note: "출처는 1장 연습문제 5.7(p.24)에서 A^2 = 0 인 영이 아닌 행렬을 찾게 하고, 2장 연습문제 3.6, 3.7(p.51)에서 A^2 = AA, A^3 = AAA 로 적으며, 4장 첫머리(p.99)에서 연산자 A : V → V 를 자기 자신과 곱하고 거듭제곱하고 다항식에 넣을 수 있다고 적는다. 9장 2.1(p.257)과 9장 1절 연습문제 1.1(p.256)은 A^0 = I 를 약속으로 두고, 9장 2.1(p.257)은 지수법칙 A^k A^j = A^j A^k = A^{k+j} 를 증명 없이 적는다. 이 항목의 재귀 정의와 (1)–(8)의 진술과 증명은 이 사이트가 썼다. 거듭제곱을 T^{k+1} = T^k ∘ T 처럼 오른쪽에 한 번 더 합성하는 꼴로 정한 것은 이 사이트의 선택이고, (2)의 (i)에 의해 왼쪽에 합성해도 같다. 출처 4장 2.2(p.107)가 기저 B 에서 행렬이 대각행렬인 연산자 A 에 대해 [A^N]_BB = diag{λ_1^N, …, λ_n^N} 로 적는 것은 이 항목의 (6)과 (8)을 함께 쓴 것과 같고, (7)은 출처 4장 2.2(p.108)가 A = SDS^{−1} 에서 A^N = SD^N S^{−1} 을 'N times' 의 곱으로 적는 것과 같은 발상이다. 예시 '대각행렬이 아닌 행렬의 거듭제곱'의 행렬 B 는 출처 4장 2.7.3(p.113)의 예의 행렬과 같다(출처는 그 거듭제곱을 계산하지 않는다). 반례 '교환하지 않는 두 행렬에서 곱의 제곱이 제곱의 곱과 다른 예'의 G 는 출처 1장 연습문제 5.7(p.24)이 찾게 하는 A^2 = 0 인 영이 아닌 행렬의 한 예이다."
  - ref: hefferon-linear-algebra
    loc: "5장 Similarity, III Nilpotence, III.1 Self-Composition, src/jc/jc3.tex:19–36과 연습문제 src/jc/jc3.tex:411–414; 5장 II Similarity, II.1 Definition and Examples 의 연습문제 src/jc/jc2.tex:882–889, 1061–1064; II.2 Diagonalizability 의 연습문제 exer:PowersOfDiags, src/jc/jc2.tex:2234–2235; 5장 IV Jordan Form, IV.1 Polynomials of Maps and Matrices, src/jc/jc4.tex:82–85; 5장 III.2 Strings 의 연습문제 src/jc/jc3.tex:2089–2106; 연습문제 src/jc/jc4.tex:1444–1447"
    checked: original
    note: "Hefferon 의 5장은 스칼라를 복소수로 둔다. 이 항목은 실수 위의 벡터공간에서 진술한다. 출처 III.1(jc3.tex:23–36)은 t^2 = t ∘ t, t^3 = t ∘ (t ∘ t) 처럼 왼쪽에 합성해 거듭제곱을 적고 Rep_{B,B}(t) = T 이면 Rep_{B,B}(t^j) = T^j 라고 적고(이 항목의 (6)), IV.1(jc4.tex:82–85)은 같은 사실을 f(T) = Rep(f(t)) 의 근거로 'This is because T^j = Rep(t^j)' 라고 한 문장으로 든다. III.1 의 연습문제(jc3.tex:411–414)는 (t ∘ t) ∘ t = t ∘ (t ∘ t) 를 증명하게 하는데, 이 항목은 그것을 합성의 결합법칙으로 인용한다. II.1 의 연습문제(jc2.tex:882–889, 1061–1064)는 닮은 두 행렬의 제곱과 k제곱이 닮았는지 묻고(이 항목의 (7)), II.2 의 연습문제 exer:PowersOfDiags(jc2.tex:2234–2235)는 대각행렬의 거듭제곱의 꼴을 묻는다(이 항목의 (8)). III.2 의 연습문제(jc3.tex:2089–2106)의 풀이는 교환하는 두 행렬에서 (AB)^2 = ABAB = AABB = A^2B^2 이라고 적는다(이 항목의 (3)의 (ii)와 같은 발상). 확인 질문 '제곱해도 그대로인 행렬, 곧 $AA = A$인 $n \\times n$ 행렬 $A$의 $k$제곱은 무엇인가?'의 대상은 IV.1 의 연습문제(jc4.tex:1444–1447)가 사영이라 부르는 t^2 = t 인 변환과 같은 대상이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(Treil 9장 2.1 의 합 첨자 오식을 원문 대조, 교환 조건이 충분조건으로만 진술되었는지, V = {0} 의 경계). 독립 검토 없음."
added: 2026-11-28
---

:::statement
$V$가 [[vector-space|벡터공간]]이라 하자. $L(V, V)$와 그 덧셈과 스칼라배, [[linear-map-examples|영사상]] $o$는 [[linear-maps-form-a-vector-space|선형사상의 공간]]의 것이고, $i_V$는 $V$ 위의 [[inverse-function|항등함수]], $S \circ T$는 [[function-composition|합성]]이다. [[composition-of-linear-maps|선형사상의 합성]]의 (1)에 의해 $S, T \in L(V, V)$이면 $S \circ T \in L(V, V)$이고, [[linear-map-examples|선형사상의 예]]의 (2)에 의해 $i_V \in L(V, V)$이다. 실수 $c$의 거듭제곱 $c^k$는 [[power-of-a-real-number|실수의 거듭제곱]]의 것이다. $n \times n$ [[matrix|행렬]] 전체의 집합 $M_{n \times n}$, 단위행렬 $I_n$, 영행렬 $O$는 [[matrix|행렬]]의 것이고, 행렬의 곱은 [[matrix-product|행렬의 곱]], $T_A$는 [[matrix-vector-product|행렬과 벡터의 곱]]의 (2), $[R]$는 [[matrix-of-a-linear-map|선형사상의 행렬]]의 것이다.

**선형사상의 거듭제곱.** $T \in L(V, V)$라 하자. 자연수 $m$과 $S \in L(V, V)$마다 $S \circ T \in L(V, V)$가 정해지므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 $(m, S)$에서의 값이 $S \circ T$인 함수 $\mathbb{N} \times L(V, V) \to L(V, V)$가 있다. 재귀 정리에 의해 $x_T(1) = i_V$이고 모든 자연수 $m$에서 $x_T(m + 1) = x_T(m) \circ T$인 함수 $x_T : \mathbb{N} \to L(V, V)$가 정확히 하나 있다. $0$ 이상인 정수 $k$에 대하여 $k + 1$은 자연수이고, $T$의 **$k$제곱**(the $k$th power) $T^k$를 $x_T(k + 1)$로 정한다. 곧 $T^k \in L(V, V)$이고, $0$ 이상인 정수 $k$에서
$$
T^0 = i_V, \qquad T^{k+1} = T^k \circ T
$$
이다. 지수는 $0$ 이상인 정수만 쓴다. 동형사상 $T$의 역함수 $T^{-1}$은 지금까지의 뜻 그대로이다. $V = \mathbb{R}$이어서 $T$가 실수에서 실수로의 함수이기도 할 때, $T^k$는 $T$를 거듭 합성한 것이고, 강의 "선형대수 2"의 다항함수의 곱에서 쓰는 $f^k$(값마다 곱한 것)와 다르다.

**행렬의 거듭제곱.** $n$이 자연수이고 $A$가 $n \times n$ 행렬이라 하자. 같은 방법으로, $x_A(1) = I_n$이고 모든 자연수 $m$에서 $x_A(m + 1) = x_A(m)A$인 함수 $x_A : \mathbb{N} \to M_{n \times n}$가 정확히 하나 있다. $0$ 이상인 정수 $k$에 대하여 $A$의 **$k$제곱** $A^k$를 $x_A(k + 1)$로 정한다. 곧 $A^0 = I_n$이고 $A^{k+1} = A^k A$이다. 역행렬 $A^{-1}$, 전치행렬 $A^T$, 소행렬 $A^{(j,k)}$는 지금까지의 뜻 그대로이다.

다음이 성립한다. 아래에서 $T$, $S$는 $L(V, V)$의 원소이고, $j$, $k$는 $0$ 이상인 정수, $c$는 실수이다.

1. (정의의 꼴) $T^1 = T$이고 $T^2 = T \circ T$이다. 또 $0$ 이상인 정수 전체의 집합에서 $L(V, V)$로의 함수 $q$가 $q(0) = i_V$이고 $0$ 이상인 모든 정수 $k$에서 $q(k + 1) = q(k) \circ T$를 만족하면, $0$ 이상인 모든 정수 $k$에서 $q(k) = T^k$이다.
2. (지수법칙)
   - (i) $T^j \circ T^k = T^{j+k}$이다. 따라서 $T^j \circ T^k = T^k \circ T^j$이고 $T^{k+1} = T \circ T^k$이다.
   - (ii) $(T^j)^k = T^{jk}$이다.
3. (교환하는 두 사상) $S \circ T = T \circ S$라 하자.
   - (i) $S^j \circ T^k = T^k \circ S^j$이다. 특히 $S \circ T^k = T^k \circ S$이다.
   - (ii) $(S \circ T)^k = S^k \circ T^k$이다.
4. (스칼라배, 항등함수, 영사상)
   - (i) $(c\, i_V) \circ T = cT = T \circ (c\, i_V)$이다. 또 $(c\, i_V)^k = c^k i_V$이고, 특히 $(i_V)^k = i_V$이다.
   - (ii) $(cT)^k = c^k T^k$이다.
   - (iii) $o^0 = i_V$이고, $k \ge 1$이면 $o^k = o$이다.
   - (iv) $V = \{0_V\}$이면 $L(V, V) = \{o\}$이고 $o = i_V$이다. 따라서 이때 모든 $k$에서 $T^k = o = i_V$이다.
5. (행렬) $n$이 자연수이고 $A$, $B$가 $n \times n$ 행렬이라 하자.
   - (i) $T_{A^k} = (T_A)^k$이다. 또 선형사상 $R : \mathbb{R}^n \to \mathbb{R}^n$에 대하여 $[R^k] = [R]^k$이다.
   - (ii) $A^1 = A$, $A^2 = AA$이고, $A^j A^k = A^{j+k} = A^k A^j$, $A^{k+1} = A A^k$, $(A^j)^k = A^{jk}$이다.
   - (iii) $AB = BA$이면 $A^j B^k = B^k A^j$이고 $(AB)^k = A^k B^k$이다.
   - (iv) $(cI_n)^k = c^k I_n$, $(I_n)^k = I_n$, $(cA)^k = c^k A^k$이고, $k \ge 1$이면 $O^k = O$이다.
   - (v) ($n = 1$) [[ring-examples|환의 예]]의 (5)에 의해 $M_1(\mathbb{R})$은 단위원 $I_1$을 갖는 가환환이다. $1 \times 1$ 행렬 $A$에 대하여 이 항목의 $A^k$는 그 가환환에서의 거듭제곱([[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]])과 같다.
6. (기저에 관한 행렬) $V$가 [[dimension|유한차원]]이고 $\dim V = n \ge 1$이며 $\mathcal{B}$가 $V$의 [[basis|기저]]이면 $[T^k]_{\mathcal{B}} = ([T]_{\mathcal{B}})^k$이다. 여기서 $[T]_{\mathcal{B}}$는 [[matrix-in-bases|기저에 관한 선형사상의 행렬]]의 것이다.
7. (닮음) $Q$가 [[invertible-matrix|가역]] $n \times n$ 행렬이면 $(Q^{-1}AQ)^k = Q^{-1}A^kQ$이고 $(QAQ^{-1})^k = QA^kQ^{-1}$이다. 따라서 $A$와 $B$가 [[change-of-basis-and-similarity|닮았으면]] $A^k$와 $B^k$도 닮았다.
8. (대각행렬) 길이 $n$인 실수의 열 $\lambda_1, \dots, \lambda_n$에 대하여 [[diagonalizable|대각화 가능]]의 대각행렬 $\operatorname{diag}(\lambda_1, \dots, \lambda_n)$의 $k$제곱은 $\operatorname{diag}(\lambda_1^k, \dots, \lambda_n^k)$이다.
:::

:::english
Let $V$ be a vector space. $L(V, V)$ with its addition and scalar multiplication, and the zero map $o$, are those of the entry on the space of linear maps; $i_V$ is the identity function on $V$, and $S \circ T$ is composition. By (1) of the entry on composition of linear maps, $S \circ T \in L(V, V)$ whenever $S, T \in L(V, V)$, and by (2) of the entry on examples of linear maps, $i_V \in L(V, V)$. The power $c^k$ of a real number $c$ is that of the entry on powers of a real number. The set $M_{n \times n}$ of $n \times n$ matrices, the identity matrix $I_n$ and the zero matrix $O$ are those of the entry on matrices; the product of matrices is that of the entry on the matrix product, $T_A$ is that of (2) of the entry on the product of a matrix and a vector, and $[R]$ is that of the entry on the matrix of a linear map.

**Powers of a linear map.** Let $T \in L(V, V)$. For each natural number $m$ and each $S \in L(V, V)$ the map $S \circ T \in L(V, V)$ is determined, so by (1) of the recursion theorem there is a function $\mathbb{N} \times L(V, V) \to L(V, V)$ whose value at $(m, S)$ is $S \circ T$. By the recursion theorem there is exactly one function $x_T : \mathbb{N} \to L(V, V)$ with $x_T(1) = i_V$ and $x_T(m + 1) = x_T(m) \circ T$ for every natural number $m$. For an integer $k \ge 0$, $k + 1$ is a natural number, and we define the **$k$th power** $T^k$ of $T$ to be $x_T(k + 1)$. Thus $T^k \in L(V, V)$ and, for every integer $k \ge 0$,
$$
T^0 = i_V, \qquad T^{k+1} = T^k \circ T.
$$
Only integers $\ge 0$ are used as exponents. For an isomorphism $T$, $T^{-1}$ keeps its meaning as the inverse function. When $V = \mathbb{R}$, so that $T$ is also a function from the reals to the reals, $T^k$ is the repeated composition of $T$, and differs from $f^k$ (the pointwise product) used for products of polynomial functions in the course "Linear Algebra II".

**Powers of a matrix.** Let $n$ be a natural number and $A$ an $n \times n$ matrix. In the same way there is exactly one function $x_A : \mathbb{N} \to M_{n \times n}$ with $x_A(1) = I_n$ and $x_A(m + 1) = x_A(m)A$ for every natural number $m$. For an integer $k \ge 0$ we define the **$k$th power** $A^k$ of $A$ to be $x_A(k + 1)$. Thus $A^0 = I_n$ and $A^{k+1} = A^k A$. The inverse matrix $A^{-1}$, the transpose $A^T$ and the minor $A^{(j,k)}$ keep their meanings.

The following hold, where $T$, $S$ are elements of $L(V, V)$, $j$, $k$ are integers $\ge 0$, and $c$ is a real number.

1. (Form of the definition) $T^1 = T$ and $T^2 = T \circ T$. Moreover, if a function $q$ from the set of integers $\ge 0$ to $L(V, V)$ satisfies $q(0) = i_V$ and $q(k + 1) = q(k) \circ T$ for every integer $k \ge 0$, then $q(k) = T^k$ for every integer $k \ge 0$.
2. (Laws of exponents)
   - (i) $T^j \circ T^k = T^{j+k}$. Hence $T^j \circ T^k = T^k \circ T^j$ and $T^{k+1} = T \circ T^k$.
   - (ii) $(T^j)^k = T^{jk}$.
3. (Two commuting maps) Suppose $S \circ T = T \circ S$.
   - (i) $S^j \circ T^k = T^k \circ S^j$. In particular $S \circ T^k = T^k \circ S$.
   - (ii) $(S \circ T)^k = S^k \circ T^k$.
4. (Scalar multiples, the identity and the zero map)
   - (i) $(c\, i_V) \circ T = cT = T \circ (c\, i_V)$. Moreover $(c\, i_V)^k = c^k i_V$; in particular $(i_V)^k = i_V$.
   - (ii) $(cT)^k = c^k T^k$.
   - (iii) $o^0 = i_V$, and $o^k = o$ if $k \ge 1$.
   - (iv) If $V = \{0_V\}$, then $L(V, V) = \{o\}$ and $o = i_V$. Hence in this case $T^k = o = i_V$ for every $k$.
5. (Matrices) Let $n$ be a natural number and $A$, $B$ be $n \times n$ matrices.
   - (i) $T_{A^k} = (T_A)^k$. Moreover, for a linear map $R : \mathbb{R}^n \to \mathbb{R}^n$, $[R^k] = [R]^k$.
   - (ii) $A^1 = A$, $A^2 = AA$, and $A^j A^k = A^{j+k} = A^k A^j$, $A^{k+1} = A A^k$, $(A^j)^k = A^{jk}$.
   - (iii) If $AB = BA$, then $A^j B^k = B^k A^j$ and $(AB)^k = A^k B^k$.
   - (iv) $(cI_n)^k = c^k I_n$, $(I_n)^k = I_n$, $(cA)^k = c^k A^k$, and $O^k = O$ if $k \ge 1$.
   - (v) ($n = 1$) By (5) of the entry on examples of rings, $M_1(\mathbb{R})$ is a commutative ring with unity $I_1$. For a $1 \times 1$ matrix $A$, the power $A^k$ of this entry equals the power in that commutative ring (finite products and powers in a commutative ring).
6. (Matrices with respect to a basis) If $V$ is finite-dimensional with $\dim V = n \ge 1$ and $\mathcal{B}$ is a basis of $V$, then $[T^k]_{\mathcal{B}} = ([T]_{\mathcal{B}})^k$, where $[T]_{\mathcal{B}}$ is that of the entry on the matrix of a linear map with respect to bases.
7. (Similarity) If $Q$ is an invertible $n \times n$ matrix, then $(Q^{-1}AQ)^k = Q^{-1}A^kQ$ and $(QAQ^{-1})^k = QA^kQ^{-1}$. Hence if $A$ and $B$ are similar, so are $A^k$ and $B^k$.
8. (Diagonal matrices) For a sequence $\lambda_1, \dots, \lambda_n$ of real numbers of length $n$, the $k$th power of the diagonal matrix $\operatorname{diag}(\lambda_1, \dots, \lambda_n)$ of the entry on diagonalizability is $\operatorname{diag}(\lambda_1^k, \dots, \lambda_n^k)$.
:::

## 직관

선형사상 $T : V \to V$는 정의역과 공역이 같으므로 결과에 다시 $T$를 적용할 수 있습니다. $T$를 $k$번 거듭 적용한 사상이 $T^k$입니다. 같은 요리법을 $k$번 되풀이하는 것에 비유할 수 있는데, 한 번도 하지 않은 것($k = 0$)은 재료를 그대로 두는 항등함수 $i_V$이고, $k + 1$번 한 것은 $k$번 한 결과에 한 번을 더 한 것입니다. 이 "한 번 더"가 재귀 정의의 $T^{k+1} = T^k \circ T$에 해당합니다. $T^0 = i_V$로 정해 두면 지수법칙 $T^j \circ T^k = T^{j+k}$가 $j$나 $k$가 $0$일 때도 그대로 맞습니다. 영사상도 $o^0 = i_V$이고 $o^k = o$는 $k \ge 1$에서 성립합니다. $V$에 영벡터가 아닌 벡터 $v$가 있으면 $i_V(v) = v \ne 0_V = o(v)$이므로 $o^0$은 $o$와 다릅니다.

합성은 일반적으로 순서를 바꿀 수 없지만, 같은 사상의 거듭제곱끼리는 (2)의 (i)에 의해 늘 교환됩니다. 서로 다른 두 사상 $S$, $T$에서는 $(S \circ T)^2 = S \circ T \circ S \circ T$이고, 가운데의 $T \circ S$를 $S \circ T$로 바꾸면 $S^2 \circ T^2$이 됩니다. (3)의 (ii)는 이 바꾸기를 위해 $S \circ T = T \circ S$를 가정합니다. 아래의 반례는 이 가정이 없으면 등식이 깨질 수 있음을 보입니다.

행렬의 거듭제곱도 같은 방식으로 정하고, (5)의 (i)에 의해 $A^k$는 사상 $T_A$의 $k$제곱의 행렬입니다. 특히 $A^2 = AA$이므로, 앞 강의들이 곱으로 적은 $AA$(예: [[eigenvalue-examples|고윳값이 없는 행렬과 대각화할 수 없는 행렬]]의 (3))와 $BB$(예: [[positive-semidefinite-square-root|양의 준정부호 제곱근]])는 이 항목의 $A^2$, $B^2$와 같은 행렬입니다. (6)은 기저를 하나 정해 사상을 행렬로 옮기면 거듭제곱도 행렬의 거듭제곱으로 옮겨진다는 뜻이고, (7)과 (8)은 대각화 가능한 행렬 $A = SDS^{-1}$의 거듭제곱을 $SD^kS^{-1}$로, 곧 $D$의 대각성분의 거듭제곱과 $S$, $S^{-1}$의 곱으로 계산할 수 있게 해 줍니다.

## 증명

:::idea
대부분의 진술은 지수 $k$에 대한 귀납법으로 보인다. 귀납 단계에서는 정의 $T^{k+1} = T^k \circ T$와 합성의 결합법칙만으로 괄호를 옮긴다. 행렬에 관한 진술은 (5)의 (i) $T_{A^k} = (T_A)^k$로 선형사상에 관한 진술로 옮기고, 두 행렬이 같다는 것을 두 선형사상이 같다는 것에서 얻는다.
:::

:::hint
(2)의 (i)은 $j$를 고정하고 $k$에 대한 귀납법으로 보인다. 귀납 단계는 $T^j \circ (T^k \circ T) = (T^j \circ T^k) \circ T$이다.
:::

:::hint
(3)의 (ii)의 귀납 단계에서는 $(S^k \circ T^k) \circ (S \circ T)$의 가운데 $T^k \circ S$를 (3)의 (i)로 $S \circ T^k$로 바꾼다.
:::

:::proof
**쓰는 사실.** 귀납법은 [[mathematical-induction|수학적 귀납법]]의 시작점이 $0$이나 $1$인 꼴이다. $0$ 이상인 정수 $k$에 대하여 $k + 1 \ge 1$이라는 것은 [[well-ordering-principle|정렬 원리]]의 진술의 (Z7)이고, 정수끼리의 계산($j + (k + 1) = (j + k) + 1$, $j(k + 1) = jk + j$ 등)은 그 진술에서 받아들인 계산 법칙, 정수끼리의 합과 곱이 정수라는 것은 [[even-and-odd]]의 진술에서 받아들인 사실이다. 사상의 같음은 [[function|함수]]의 같음(모든 점에서 값이 같다)이다. 합성의 결합법칙은 [[composition-is-associative|함수의 합성은 결합법칙을 만족한다]]이고, 이것에 의해 세 개 이상의 사상의 합성은 괄호를 어떻게 치든 같다. 실수의 계산은 [[real-number-arithmetic]]의 것이고, (V…)는 [[vector-space|벡터공간]]의 공리를 $L(V, V)$에 쓴 것이다.

**정의에 대하여.** [[recursion-theorem|재귀 정리]]를 집합 $X = L(V, V)$, $a = i_V$에 쓴다. 행렬도 $X = M_{n \times n}$, $a = I_n$, $(m, C)$에서의 값이 $CA$인 함수 $\mathbb{N} \times M_{n \times n} \to M_{n \times n}$으로 같다(곱 $CA$는 $n \times n$ 행렬이다). $T^{k+1} = x_T(k + 2) = x_T(k + 1) \circ T = T^k \circ T$이고, 같은 까닭으로 $A^{k+1} = A^k A$이다.

**1의 증명.** $T^1 = T^0 \circ T = i_V \circ T = T$이다([[composition-of-linear-maps|선형사상의 합성]]의 (2)). $T^2 = T^1 \circ T = T \circ T$이다. $q$에 대해서는 $q(k) = T^k$를 $k$에 대한 귀납법으로 보인다. $q(0) = i_V = T^0$이고, $q(k) = T^k$이면 $q(k + 1) = q(k) \circ T = T^k \circ T = T^{k+1}$이다.

**2의 증명.** (i) $j$를 고정하고 $k$에 대한 귀납법을 쓴다. $k = 0$이면 $T^j \circ T^0 = T^j \circ i_V = T^j$이다(합성의 (2)). $T^j \circ T^k = T^{j+k}$이면 결합법칙에 의해
$$
\begin{aligned}
T^j \circ T^{k+1} &= T^j \circ (T^k \circ T) \\
&= (T^j \circ T^k) \circ T \\
&= T^{j+k} \circ T = T^{j+k+1}
\end{aligned}
$$
이다. 따라서 $T^j \circ T^k = T^{j+k} = T^{k+j} = T^k \circ T^j$이고, $j = 1$, (1)의 $T^1 = T$에 의해 $T \circ T^k = T^{1+k} = T^{k+1}$이다.

(ii) $k$에 대한 귀납법. $(T^j)^0 = i_V = T^0 = T^{j \cdot 0}$이다. $(T^j)^k = T^{jk}$이면 정의와 (i)에 의해 $(T^j)^{k+1} = (T^j)^k \circ T^j = T^{jk} \circ T^j = T^{jk + j} = T^{j(k+1)}$이다.

**3의 증명.** (i) 먼저 $S \circ T^k = T^k \circ S$를 $k$에 대한 귀납법으로 보인다. $k = 0$이면 두 변이 합성의 (2)에 의해 모두 $S$이다. $S \circ T^k = T^k \circ S$이면 결합법칙과 가정에 의해
$$
\begin{aligned}
S \circ T^{k+1} &= (S \circ T^k) \circ T \\
&= (T^k \circ S) \circ T \\
&= T^k \circ (S \circ T) \\
&= T^k \circ (T \circ S) \\
&= (T^k \circ T) \circ S = T^{k+1} \circ S
\end{aligned}
$$
이다. 이제 $k$를 고정하면 $T^k \circ S = S \circ T^k$이므로, 방금 보인 것을 $T$ 대신 $S$, $S$ 대신 $T^k$에 쓰면 모든 $j$에서 $T^k \circ S^j = S^j \circ T^k$이다.

(ii) $k$에 대한 귀납법. $(S \circ T)^0 = i_V = i_V \circ i_V = S^0 \circ T^0$이다. $(S \circ T)^k = S^k \circ T^k$이면 결합법칙과 (i)의 $T^k \circ S = S \circ T^k$에 의해
$$
\begin{aligned}
(S \circ T)^{k+1} &= (S^k \circ T^k) \circ (S \circ T) \\
&= S^k \circ (T^k \circ S) \circ T \\
&= S^k \circ (S \circ T^k) \circ T \\
&= (S^k \circ S) \circ (T^k \circ T) \\
&= S^{k+1} \circ T^{k+1}
\end{aligned}
$$
이다.

**4의 증명.** (i) 합성의 (3)과 (2)에 의해 $(c\, i_V) \circ T = c(i_V \circ T) = cT$이고 $T \circ (c\, i_V) = c(T \circ i_V) = cT$이다. $(c\, i_V)^k = c^k i_V$는 $k$에 대한 귀납법으로 보인다. $k = 0$이면 $(c\, i_V)^0 = i_V = 1 i_V$이고((V5)) $c^0 = 1$이다([[power-of-a-real-number|실수의 거듭제곱]]의 정의). $(c\, i_V)^k = c^k i_V$이면, 방금 보인 것을 $T = c\, i_V$에 쓰고 (V6)을 쓰면
$$
\begin{aligned}
(c\, i_V)^{k+1} &= (c^k i_V) \circ (c\, i_V) \\
&= c^k (c\, i_V) \\
&= (c^k c)\, i_V = c^{k+1} i_V
\end{aligned}
$$
이다. 마지막 등식은 실수의 거듭제곱의 정의 $c^{k+1} = c^k c$이다. $c = 1$이면 실수의 거듭제곱의 (2)의 (iv)에 의해 $1^k = 1$이므로 $(i_V)^k = (1 i_V)^k = 1 i_V = i_V$이다((V5)).

(ii) (i)에 의해 $cT = (c\, i_V) \circ T$이고 $c\, i_V$와 $T$는 교환된다. (3)의 (ii)와 (i), 합성의 (3)과 (2)에 의해 $(cT)^k = (c\, i_V)^k \circ T^k = (c^k i_V) \circ T^k = c^k(i_V \circ T^k) = c^k T^k$이다.

(iii) $o^0 = i_V$는 정의이다. 모든 $S \in L(V, V)$와 $v \in V$에서 $(o \circ S)(v) = o(Sv) = 0_V = o(v)$이므로 $o \circ S = o$이다. $o^1 = o$이고((1)), $k \ge 1$에서 $o^k = o$이면 $o^{k+1} = o^k \circ o = o \circ o = o$이다.

(iv) $V = \{0_V\}$이고 $S \in L(V, V)$이면, $V$의 원소 $v$는 $0_V$뿐이고 [[linear-map|선형사상]]의 (T1)에 의해 $S(0_V) = 0_V = o(0_V)$이므로 $S = o$이다. 따라서 $L(V, V)$의 원소는 $o$뿐이고, $o \in L(V, V)$이므로 $L(V, V) = \{o\}$이다. $i_V$와 $T^k$도 $L(V, V)$의 원소이므로 $o$와 같다.

**5의 증명.** 쓰는 사실은 다음과 같다. [[matrix-product|행렬의 곱]]의 (1)에 의해 $T_{CD} = T_C \circ T_D$이다($C$, $D$는 $n \times n$ 행렬). [[matrix-vector-product|행렬과 벡터의 곱]]의 (3)에 의해 $T_{I_n} = i_{\mathbb{R}^n}$이고, (4)에 의해 모든 $x$에서 $(cC)x = c(Cx)$이므로 $T_{cC} = c\,T_C$이며, (5)에 의해 $C = D$인 것은 정확히 $T_C = T_D$일 때이다. 영행렬은 $O = 0O$이므로(행렬의 (1)) $Ox = (0O)x = 0(Ox) = 0$이고([[vector-space-basic-properties|(B3)]]) $T_O = o$이다. 아래에서 $W = \mathbb{R}^n$이라 하고 위 (1)–(4)를 $V = W$에 쓴다.

(i) $k$에 대한 귀납법. $T_{A^0} = T_{I_n} = i_W = (T_A)^0$이다. $T_{A^k} = (T_A)^k$이면 $T_{A^{k+1}} = T_{A^k A} = T_{A^k} \circ T_A = (T_A)^k \circ T_A = (T_A)^{k+1}$이다. 선형사상 $R : W \to W$에 대해서는 [[matrix-of-a-linear-map|선형사상의 행렬]]의 (1)에 의해 $R = T_{[R]}$이므로 $R^k = (T_{[R]})^k = T_{[R]^k}$이고, 그 항목의 (2)에 의해 $[R^k] = [T_{[R]^k}] = [R]^k$이다.

(ii) $A^1 = A^0 A = I_n A = A$([[matrix-product-properties|행렬 곱의 성질]]의 (4))이고 $A^2 = A^1 A = AA$이다. 나머지는 (i)과 (2)로 옮긴다. $T_{A^j A^k} = T_{A^j} \circ T_{A^k} = (T_A)^j \circ (T_A)^k = (T_A)^{j+k} = T_{A^{j+k}}$이므로 $A^j A^k = A^{j+k}$이고, 같은 식에서 $j$와 $k$를 바꾸면 $A^k A^j = A^{k+j} = A^{j+k}$이다. $j = 1$이면 $A A^k = A^{k+1}$이다. 또 (i)을 행렬 $A^j$에 쓰면 $T_{(A^j)^k} = (T_{A^j})^k = ((T_A)^j)^k = (T_A)^{jk} = T_{A^{jk}}$이므로 $(A^j)^k = A^{jk}$이다.

(iii) $AB = BA$이면 $T_A \circ T_B = T_{AB} = T_{BA} = T_B \circ T_A$이다. (3)에 의해 $T_{A^j B^k} = (T_A)^j \circ (T_B)^k = (T_B)^k \circ (T_A)^j = T_{B^k A^j}$이고 $T_{(AB)^k} = (T_A \circ T_B)^k = (T_A)^k \circ (T_B)^k = T_{A^k B^k}$이다.

(iv) (4)에 의해 $T_{(cI_n)^k} = (c\, i_W)^k = c^k i_W = T_{c^k I_n}$이고, $c = 1$에서 $1 I_n = I_n$(행렬의 (1)의 벡터공간에서 (V5))이므로 $(I_n)^k = I_n$이다. $T_{(cA)^k} = (c\,T_A)^k = c^k (T_A)^k = c^k T_{A^k} = T_{c^k A^k}$이다. $k \ge 1$이면 $T_{O^k} = o^k = o = T_O$이다.

(v) [[ring-examples|환의 예]]의 (5)에 의해 $M_1(\mathbb{R})$의 곱셈은 행렬의 곱이고 단위원은 $I_1$이다. 그 환에서의 거듭제곱을 $a_k$라 쓰면 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 (6)의 (i)에 의해 $a_0 = I_1$이고 $a_{k+1} = a_k A$이다. $A^0 = I_1$, $A^{k+1} = A^k A$이므로 $k$에 대한 귀납법으로 모든 $k$에서 $a_k = A^k$이다.

**6의 증명.** [[dimension|유한차원과 차원]]의 (2)에 의해 $\mathcal{B}$의 길이는 $n$이다. $k$에 대한 귀납법을 쓴다. [[matrix-in-bases|기저에 관한 선형사상의 행렬]]의 (5)에 의해 $[T^0]_{\mathcal{B}} = [i_V]_{\mathcal{B}} = I_n = ([T]_{\mathcal{B}})^0$이다. $[T^k]_{\mathcal{B}} = ([T]_{\mathcal{B}})^k$이면, 그 항목의 (4)를 $U = V$, $\mathcal{A} = \mathcal{C} = \mathcal{B}$에 쓰면 $[T^{k+1}]_{\mathcal{B}} = [T^k \circ T]_{\mathcal{B}} = [T^k]_{\mathcal{B}}[T]_{\mathcal{B}} = ([T]_{\mathcal{B}})^k [T]_{\mathcal{B}} = ([T]_{\mathcal{B}})^{k+1}$이다.

**7의 증명.** $k$에 대한 귀납법. [[invertible-matrix|가역행렬과 역행렬]]의 (1)에 의해 $Q^{-1}Q = I_n = QQ^{-1}$이므로 $(Q^{-1}AQ)^0 = I_n = Q^{-1}Q = Q^{-1}I_nQ = Q^{-1}A^0Q$이다(행렬 곱의 성질의 (4)). $(Q^{-1}AQ)^k = Q^{-1}A^kQ$이면 행렬 곱의 성질의 (1)(결합법칙)과 (4)에 의해
$$
\begin{aligned}
&(Q^{-1}AQ)^{k+1} \\
&\quad = (Q^{-1}A^kQ)(Q^{-1}AQ) \\
&\quad = Q^{-1}A^k(QQ^{-1})AQ \\
&\quad = Q^{-1}(A^kA)Q = Q^{-1}A^{k+1}Q
\end{aligned}
$$
이다. [[inverse-matrix-properties|역행렬의 성질]]의 (2)에 의해 $Q^{-1}$도 가역이고 $(Q^{-1})^{-1} = Q$이므로, 방금 보인 것을 $Q$ 대신 $Q^{-1}$에 쓰면 $(QAQ^{-1})^k = QA^kQ^{-1}$이다. $A$와 $B$가 닮았으면 [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]의 정의에 의해 $A = Q^{-1}BQ$인 가역행렬 $Q$가 있고, $A^k = Q^{-1}B^kQ$이므로 $A^k$는 $B^k$와 닮았다.

**8의 증명.** $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$이라 하고 $k$에 대한 귀납법을 쓴다. [[diagonalizable|대각화 가능]]의 정의에 의해 $\operatorname{diag}(1, \dots, 1)$의 $(j, l)$ 성분은 $j = l$이면 $1$, $j \ne l$이면 $0$이고, 이것은 $I_n$의 성분과 같으므로 행렬의 (2)에 의해 $\operatorname{diag}(1, \dots, 1) = I_n$이다. 실수의 거듭제곱의 정의에서 $\lambda_l^0 = 1$이므로 $D^0 = I_n = \operatorname{diag}(\lambda_1^0, \dots, \lambda_n^0)$이다. $D^k = \operatorname{diag}(\lambda_1^k, \dots, \lambda_n^k)$이면 대각화 가능의 (3)에 의해 $D^{k+1} = D^k D = \operatorname{diag}(\lambda_1^k \lambda_1, \dots, \lambda_n^k \lambda_n) = \operatorname{diag}(\lambda_1^{k+1}, \dots, \lambda_n^{k+1})$이다.
:::

## 예시와 반례

:::example[반사의 거듭제곱]
[[linear-map-examples|선형사상의 예]]의 (6)의 선형사상 $F : \mathbb{R}^2 \to \mathbb{R}^2$, $F(x_1, x_2) = (x_1, -x_2)$를 봅니다. 모든 $(x_1, x_2)$에서 $F(F(x_1, x_2)) = F(x_1, -x_2) = (x_1, x_2)$이므로 $F^2 = F \circ F = i_{\mathbb{R}^2}$입니다((1)). 그러면 $0$ 이상인 정수 $m$에 대하여 (2)의 (ii)와 (4)의 (i)에 의해 $F^{2m} = (F^2)^m = (i_{\mathbb{R}^2})^m = i_{\mathbb{R}^2}$이고, $F^{2m+1} = F^{2m} \circ F = F$입니다. [[even-and-odd|짝수와 홀수]]에 의해 $0$ 이상인 정수 $k$는 $2m$ 꼴이거나 $2m + 1$ 꼴이므로, $F^k$는 $k$가 짝수이면 $i_{\mathbb{R}^2}$, 홀수이면 $F$입니다.

행렬로 계산해도 같습니다. $[F]$의 열은 $Fe_1 = e_1$, $Fe_2 = -e_2$이므로 $[F] = \operatorname{diag}(1, -1)$이고, (5)의 (i)과 (8)에 의해 $[F^k] = [F]^k = \operatorname{diag}(1^k, (-1)^k)$입니다. [[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (iv)와 (5)에 의해 이것은 $k$가 짝수이면 $\operatorname{diag}(1, 1) = I_2$, 홀수이면 $\operatorname{diag}(1, -1)$이고, 위의 결과와 맞습니다.
:::

:::example[대각행렬이 아닌 행렬의 거듭제곱]
$B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$이면 $0$ 이상인 모든 정수 $k$에서
$$
B^k = \begin{pmatrix} 1 & k \\ 0 & 1 \end{pmatrix}
$$
입니다. $k$에 대한 귀납법으로 보입니다. $k = 0$이면 오른쪽은 $I_2$입니다. 식이 $k$에서 성립하면 [[matrix-product|행렬의 곱]]의 (2)에 의해 $B^{k+1} = B^k B$의 성분은
$$
\begin{aligned}
(1,1)&: 1 \cdot 1 + k \cdot 0 = 1, \\
(1,2)&: 1 \cdot 1 + k \cdot 1 = k + 1, \\
(2,1)&: 0 \cdot 1 + 1 \cdot 0 = 0, \\
(2,2)&: 0 \cdot 1 + 1 \cdot 1 = 1
\end{aligned}
$$
이므로 식이 $k + 1$에서도 성립합니다. 대각행렬과 달리 오른쪽 위 성분이 $k$에 비례해 커집니다. 이 $B$는 [[eigenvalue-examples|고윳값이 없는 행렬과 대각화할 수 없는 행렬]]의 (2)의 대각화할 수 없는 행렬과 같으므로, [[diagonalizable|대각화 가능]]의 (5)에 의해 $B = SDS^{-1}$인 가역행렬 $S$와 대각행렬 $D$가 없습니다. 그래서 $B^k$는 (7)과 (8)로 계산할 수 없고, 위처럼 곱을 직접 계산했습니다.
:::

:::counterexample[교환하지 않는 두 행렬에서 곱의 제곱이 제곱의 곱과 다른 예]
$G = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$, $H = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$이라 합시다. [[matrix-product|행렬의 곱]]의 (2)로 계산하면
$$
\begin{aligned}
GG &= O, \qquad HH = O, \\
GH &= \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, \quad HG = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}
\end{aligned}
$$
입니다. 따라서 $GH \ne HG$이고, $G^2 H^2 = OO = O$입니다. 한편 $GH = \operatorname{diag}(1, 0)$이므로 (8)에 의해 $(GH)^2 = \operatorname{diag}(1^2, 0^2) = \operatorname{diag}(1, 0) \ne O$입니다. 곧 $(GH)^2 \ne G^2 H^2$입니다. (5)의 (iii)의 가정 $AB = BA$를 빼면 이 등식이 깨질 수 있습니다.
:::

## 확인 질문

:::check[영벡터 하나뿐인 공간 $V = \{0_V\}$ 위의 선형사상 $T$에서 $T^0$과 $T^3$은 무엇인가?]
둘 다 영사상 $o$이고, 이것은 항등함수 $i_V$와 같습니다. (4)의 (iv)에 의해 $L(V, V)$의 원소는 $o$ 하나뿐이고 $o = i_V$입니다. 정의의 $T^0 = i_V$와 "$k \ge 1$이면 $o^k = o$"가 이 공간에서는 같은 것을 말합니다.
:::

:::check[제곱해도 그대로인 행렬, 곧 $AA = A$인 $n \times n$ 행렬 $A$의 $k$제곱은 무엇인가?]
$k \ge 1$이면 $A^k = A$이고, $A^0 = I_n$입니다. $k = 1$이면 (5)의 (ii)에 의해 $A^1 = A$이고, $A^k = A$이면 $A^{k+1} = A^k A = AA = A$이므로 귀납법에 의해 모든 $k \ge 1$에서 성립합니다. $A^0 = I_n$은 정의이므로, 예를 들어 $A = O$이면 $A^0 = I_n \ne O = A^1$입니다.
:::
