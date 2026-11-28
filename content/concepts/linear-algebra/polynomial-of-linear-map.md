---
title: 선형사상과 행렬에 다항식 대입하기
title_en: Polynomials of Linear Maps and Matrices
aliases: [다항식 대입, 선형사상의 다항식, 행렬의 다항식, 행렬 다항식, polynomial of a linear map, polynomial of a matrix, polynomial of an operator, substituting a matrix into a polynomial]
kind: theorem
field: linear-algebra
msc: ["15A04", "15A54"]
level: undergrad
summary: 실수 계수의 다항식 f 와 V 에서 V 로의 선형사상 T 에 대하여 f(T) 를 계수와 T 의 거듭제곱의 일차결합으로 정의하고, 정사각행렬 A 에 대한 f(A) 도 같은 방식으로 정한다. 이 정의가 계수를 적는 범위에 상관없다는 것, 상수와 X 를 대입한 것, 합·스칼라배·곱이 보존되고 두 다항식을 대입한 것끼리 교환된다는 것, 거듭제곱과 여러 다항식의 곱, 나누어떨어지는 다항식의 핵과 상, 영사상과 스칼라배 사상에 대입한 것을 증명한다.
requires: [function, function-composition, composition-is-associative, inverse-function, mathematical-induction, well-ordering-principle, even-and-odd, real-number-arithmetic, vector-space, vector-space-basic-properties, linear-map, linear-map-examples, linear-maps-form-a-vector-space, composition-of-linear-maps, kernel-and-range, matrix, matrix-vector-product, matrix-product, matrix-product-properties, invertible-matrix, diagonalizable, group, group-homomorphism, ring, ring-examples, finite-sums-in-a-ring, rearranging-finite-sums-in-a-ring, finite-products-in-a-commutative-ring, polynomial-ring, evaluation-homomorphism, polynomials-and-polynomial-functions, power-of-linear-map]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "9장 2절 Spectral Mapping Theorem, 2.1 Polynomials of operators, p.257; 9장 1절 Cayley–Hamilton Theorem 의 A wrong proof, p.253; 9장 1절 연습문제 1.1, p.256; 1장 5절 연습문제 5.7, p.24"
    checked: original
    note: "출처 9장 2.1(p.257)은 다항식 p(z) 에 행렬(연산자) A 를 대입한 p(A) 를 정의하는데, 다항식과 정의식의 합이 모두 Σ_{k=1}^N 로 인쇄되어 있으면서 오른쪽에 a_0 I 항이 있다. 합은 k = 0 부터여야 한다. 출처는 같은 곳에서 A^0 = I 를 약속하고, 지수법칙에서 'it is easy to show' 라며 p(A)q(A) = q(A)p(A) = R(A)(R(z) = p(z)q(z))를 증명 없이 적으며, p(z) = a(z − z_1)⋯(z − z_N) 이면 p(A) = a(A − z_1 I)⋯(A − z_N I) 라고 적는다. 이 항목의 (3)의 (ii)와 (4)의 (ii)에 해당한다. 출처 9장 1절의 A wrong proof(p.253)와 연습문제 1.1(p.256)도 특성다항식의 계수로 p(A) := Σ_{k=0}^n c_k A^k 를 정한다. 출처는 다항식을 변수 z 의 식 p(z) 로 적는다. 이 항목은 다항식환과 체 강의의 형식적 다항식 ℝ[X] 에 대입하고, 정의가 계수를 적는 범위에 상관없다는 것((1))과 (2)–(6)의 진술과 증명은 이 사이트가 썼다. 곱의 보존 (3)의 (ii)는 대입 준동형 항목이 가환환에만 진술되어 있어 그것을 인용하지 않고, 다항식의 곱의 계수식과 유한 합의 삼각형 이중 합으로 직접 증명했다. 확인 질문 '$G = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$와 $f = 1 + X + X^2 + X^3$에 대하여 $f(G)$와 $(I_2 - G)\\, f(G)$는 무엇인가?'의 G 는 출처 1장 연습문제 5.7(p.24)이 찾게 하는 A^2 = 0 인 영이 아닌 행렬의 한 예이다."
  - ref: hefferon-linear-algebra
    loc: "5장 Similarity, IV Jordan Form, IV.1 Polynomials of Maps and Matrices 의 Definition, src/jc/jc4.tex:72–80; Remark, src/jc/jc4.tex:87–93; Lemma le:PolyMapsFactor 와 증명, src/jc/jc4.tex:274–314; 연습문제 exer:PolyMapsFactor, src/jc/jc4.tex:1663–1668; 연습문제 src/jc/jc4.tex:1358–1360, 1373–1374"
    checked: original
    note: "Hefferon 의 5장은 스칼라를 복소수로 둔다. 이 항목은 실수 계수의 다항식과 실수 위의 벡터공간에서 진술한다. 출처 IV.1 의 Definition(jc4.tex:72–80)은 f(x) = c_n x^n + ⋯ + c_1 x + c_0 에 대해 사상 t 의 f(t) 를 c_n t^n + ⋯ + c_1 t + c_0 (id) 로, 정사각행렬 T 의 f(T) 를 c_n T^n + ⋯ + c_1 T + c_0 I 로 정한다. 출처의 Remark(jc4.tex:87–93)는 행렬에는 I 를 적고 사상에는 항등사상을 적지 않기로(f(t) = t − 3) 약속하는데, 이 항목은 사상에도 T − c i_V 처럼 항등함수를 적는다. 출처의 le:PolyMapsFactor(jc4.tex:274–287)는 f 가 k(x − λ_1)^{q_1}⋯(x − λ_z)^{q_z} 로 인수분해되면 f(t) 가 k·(t − λ_1)^{q_1} ∘ ⋯ ∘ (t − λ_z)^{q_z} 와 같다고 진술하고, 증명(jc4.tex:289–314)은 차수 2 인 경우만 계산한 뒤 나머지를 연습문제 exer:PolyMapsFactor(jc4.tex:1663–1668)로 돌린다. 그 진술의 실수판은 이 항목의 (2), (3)의 (ii), (4)의 (i), (ii)를 거듭 써서 얻는다. 그 연습문제의 (b)는 t 가 선형이 아니면 결과가 깨지는 예를 찾게 한다. 예시 '전개한 꼴과 인수의 곱이 같은 행렬을 주는 예'는 le:PolyMapsFactor 의 증명이 차수 2 에서 k(t − λ_1) ∘ (t − λ_2) 를 펼쳐 t^2 − (λ_1 + λ_2)t + λ_1λ_2 와 같음을 보이는 것과 같은 발상이다. 예시 '스칼라배 사상에 대입한 예'의 (X − 1)(i_V) = o 는 출처 IV.1 의 연습문제(jc4.tex:1358–1360)의 풀이가 항등사상의 최소다항식을 x − 1 이라 하는 것과 같은 대상이다. 반례 '곱에 대입한 것이 영행렬이어도 인수에 대입한 것은 영행렬이 아닌 예'의 계산은 출처 IV.1 의 연습문제(jc4.tex:1373–1374)의 풀이가 대각행렬 diag(3, 3, 1) 에서 (D − 3I)(D − 1I) 가 영행렬임을 보이는 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(Treil 9장 2.1 의 합 첨자 오식을 원문 대조, 교환 조건이 충분조건으로만 진술되었는지, V = {0} 의 경계). 독립 검토 없음."
added: 2026-11-28
---

:::statement
$V$가 [[vector-space|벡터공간]]이라 하자. $L(V, V)$와 그 덧셈과 스칼라배, 영사상 $o$는 [[linear-maps-form-a-vector-space|선형사상의 공간]]의 것이고, $i_V$는 $V$ 위의 [[inverse-function|항등함수]], $S \circ T$는 [[function-composition|합성]]이며, $T \in L(V, V)$의 거듭제곱 $T^k$와 $n \times n$ 행렬 $A$의 거듭제곱 $A^k$는 [[power-of-linear-map|선형사상과 행렬의 거듭제곱]]의 것이다. 환 $\mathbb{R}$는 [[ring-examples|환의 예]]의 (2)의 것이고, 다항식환 $\mathbb{R}[X]$, 계수 $\operatorname{coef}_n$, 상수 다항식과 읽는 약속, 부정원 $X$, 나누어떨어짐 $g \mid f$는 [[polynomial-ring|다항식환]]의 것이며, $\mathbb{R}[X]$의 원소의 열의 곱과 거듭제곱은 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 것이다. 실수 $c$에 대하여 $f(c)$는 [[evaluation-homomorphism|대입 준동형]]의 대입한 값이다. 합의 기호 $\sum_{k=m}^{n}$과 빈 합은 [[finite-sums-in-a-ring|환의 유한 합]]의 것으로, 그 항목의 (10)에 의해 벡터공간 $L(V, V)$와 $M_{n \times n}$([[matrix|행렬]]의 (1))의 덧셈군에서 쓴다. $\operatorname{Ker}$와 $\operatorname{Ran}$은 [[kernel-and-range|핵과 상]]의 것이다.

**대입.** $T \in L(V, V)$이고 $f \in \mathbb{R}[X]$라 하자. $N$이 $0$ 이상인 정수이고 $n > N$인 모든 $n$에서 $\operatorname{coef}_n(f) = 0$일 때
$$
f(T) = \sum_{k=0}^{N} \operatorname{coef}_k(f)\, T^k
$$
로 정하고 $f$에 $T$를 **대입한 것**(polynomial $f$ evaluated at $T$)이라 한다. 오른쪽의 각 항은 $L(V, V)$의 스칼라배이므로 $f(T) \in L(V, V)$이고, 아래 (1)에 의해 $f(T)$는 $N$에 상관없다. $n$이 자연수이고 $A$가 $n \times n$ [[matrix|행렬]]이면 같은 $N$으로
$$
f(A) = \sum_{k=0}^{N} \operatorname{coef}_k(f)\, A^k
$$
를 $f$에 $A$를 대입한 것이라 한다. $f(A)$는 $n \times n$ 행렬이다. $f(T)$와 $f(A)$는 각각 선형사상과 행렬이고, 실수 $c$를 대입한 값 $f(c)$와 다른 대상이다.

다음이 성립한다. 아래에서 $T$, $S$는 $L(V, V)$의 원소이고, $f$, $g$, $h$는 $\mathbb{R}[X]$의 원소이며, $c$는 실수, $k$는 $0$ 이상인 정수이다.

1. (대입한 것) $f(T)$는 $N$에 상관없다. $N$이 $0$ 이상인 정수이고 $0 \le k \le N$에서 정해진 실수 $a_k$에 대하여 $f = \sum_{k=0}^{N} a_k X^k$이면 $f(T) = \sum_{k=0}^{N} a_k T^k$이고, 모든 $v \in V$에서 $f(T)v = \sum_{k=0}^{N} a_k\, T^k v$이다(오른쪽은 $V$의 덧셈군에서의 합).
2. (상수와 $X$) 상수 다항식 $\kappa(c)$에 대하여 $\kappa(c)(T) = c\, i_V$이고, 특히 $\kappa(1)(T) = i_V$, $\kappa(0)(T) = o$이다. 또 $X(T) = T$, $(X^k)(T) = T^k$, $(cX^k)(T) = cT^k$, $(X - c)(T) = T - c\, i_V$이다.
3. (합, 스칼라배, 곱)
   - (i) $(f + g)(T) = f(T) + g(T)$, $(cf)(T) = c f(T)$, $(-f)(T) = -f(T)$, $(f - g)(T) = f(T) - g(T)$이다. $m - 1 \le l$인 정수 $m$, $l$과 $m \le i \le l$에서 정해진 $g_i \in \mathbb{R}[X]$에 대하여 $\bigl(\sum_{i=m}^{l} g_i\bigr)(T) = \sum_{i=m}^{l} g_i(T)$이다.
   - (ii) $(fg)(T) = f(T) \circ g(T) = g(T) \circ f(T)$이다. 특히 $f(T) \circ g(T) = g(T) \circ f(T)$이고, $f(T) \circ T = T \circ f(T)$이다.
   - (iii) $S \circ T = T \circ S$이면 $S \circ f(T) = f(T) \circ S$이다.
4. (거듭제곱, 여러 다항식의 곱, 나누어떨어짐)
   - (i) $(f^k)(T) = (f(T))^k$이다. 특히 $\bigl((X - c)^k\bigr)(T) = (T - c\, i_V)^k$이다.
   - (ii) $l$이 자연수이고 $g_1, \dots, g_l$이 $\mathbb{R}[X]$의 원소의 열이면 $(g_1 \cdots g_l)(T) = (g_1 \cdots g_{l-1})(T) \circ g_l(T)$이다. $l = 1$이면 $g_1 \cdots g_{l-1}$은 빈 곱 $1$이다.
   - (iii) $\mathbb{R}[X]$에서 $f = gh$이면 $f(T) = g(T) \circ h(T) = h(T) \circ g(T)$이다. 따라서 $\mathbb{R}[X]$에서 $g \mid f$이면 $\operatorname{Ker} g(T) \subseteq \operatorname{Ker} f(T)$이고 $\operatorname{Ran} f(T) \subseteq \operatorname{Ran} g(T)$이며, $g(T) = o$이면 $f(T) = o$이다.
5. (영사상, 스칼라배 사상, 영벡터 하나뿐인 공간)
   - (i) $f(o) = \operatorname{coef}_0(f)\, i_V$이다.
   - (ii) $f(c\, i_V) = f(c)\, i_V$이다.
   - (iii) $V = \{0_V\}$이면 모든 $f$에서 $f(T) = o = i_V$이다.
6. (행렬) $n$이 자연수이고 $A$, $B$가 $n \times n$ 행렬이며 $I_n$은 단위행렬, $O$는 영행렬이라 하자. 행렬의 곱은 [[matrix-product|행렬의 곱]]의 것이다. (1)–(5)의 등식에서 합성을 행렬의 곱으로 바꾼 다음이 성립한다.
   - (i) $f(A)$는 $N$에 상관없고, $f = \sum_{k=0}^{N} a_k X^k$이면 $f(A) = \sum_{k=0}^{N} a_k A^k$이며, 모든 $x \in \mathbb{R}^n$에서 $f(A)x = \sum_{k=0}^{N} a_k\, A^k x$이다([[matrix-vector-product|행렬과 벡터의 곱]]).
   - (ii) $\kappa(c)(A) = cI_n$, $\kappa(1)(A) = I_n$, $\kappa(0)(A) = O$, $X(A) = A$, $(X^k)(A) = A^k$, $(cX^k)(A) = cA^k$, $(X - c)(A) = A - cI_n$이다.
   - (iii) $(f + g)(A) = f(A) + g(A)$, $(cf)(A) = c f(A)$, $(-f)(A) = -f(A)$, $(f - g)(A) = f(A) - g(A)$, $\bigl(\sum_{i=m}^{l} g_i\bigr)(A) = \sum_{i=m}^{l} g_i(A)$이고, $(fg)(A) = f(A)g(A) = g(A)f(A)$이다. $AB = BA$이면 $B f(A) = f(A) B$이다.
   - (iv) $(f^k)(A) = (f(A))^k$이고, $(g_1 \cdots g_l)(A) = (g_1 \cdots g_{l-1})(A)\, g_l(A)$이며, $f = gh$이면 $f(A) = g(A)h(A) = h(A)g(A)$이다.
   - (v) $f(O) = \operatorname{coef}_0(f)\, I_n$이고 $f(cI_n) = f(c)\, I_n$이다.
:::

:::english
Let $V$ be a vector space. $L(V, V)$ with its addition and scalar multiplication, and the zero map $o$, are those of the entry on the space of linear maps; $i_V$ is the identity function on $V$, $S \circ T$ is composition, and the powers $T^k$ of $T \in L(V, V)$ and $A^k$ of an $n \times n$ matrix $A$ are those of the entry on powers of linear maps and matrices. The ring $\mathbb{R}$ is that of (2) of the entry on examples of rings; the polynomial ring $\mathbb{R}[X]$, the coefficients $\operatorname{coef}_n$, constant polynomials with their reading convention, the indeterminate $X$ and divisibility $g \mid f$ are those of the entry on polynomial rings; products of sequences of elements of $\mathbb{R}[X]$ and their powers are those of the entry on finite products and powers in a commutative ring. For a real number $c$, $f(c)$ is the value of the entry on evaluation homomorphisms. The summation notation $\sum_{k=m}^{n}$ and the empty sum are those of the entry on finite sums in a ring, used, by (10) of that entry, in the additive groups of the vector spaces $L(V, V)$ and $M_{n \times n}$ ((1) of the entry on matrices). $\operatorname{Ker}$ and $\operatorname{Ran}$ are those of the entry on kernel and range.

**Evaluation.** Let $T \in L(V, V)$ and $f \in \mathbb{R}[X]$. When $N$ is an integer $\ge 0$ with $\operatorname{coef}_n(f) = 0$ for all $n > N$, we set
$$
f(T) = \sum_{k=0}^{N} \operatorname{coef}_k(f)\, T^k
$$
and call it the **polynomial $f$ evaluated at $T$**. Each term on the right is a scalar multiple in $L(V, V)$, so $f(T) \in L(V, V)$, and by (1) below $f(T)$ does not depend on $N$. If $n$ is a natural number and $A$ is an $n \times n$ matrix, then with the same $N$ we call
$$
f(A) = \sum_{k=0}^{N} \operatorname{coef}_k(f)\, A^k
$$
the polynomial $f$ evaluated at $A$. $f(A)$ is an $n \times n$ matrix. $f(T)$ and $f(A)$ are a linear map and a matrix respectively, and are different objects from the value $f(c)$ at a real number $c$.

The following hold, where $T$, $S$ are elements of $L(V, V)$, $f$, $g$, $h$ are elements of $\mathbb{R}[X]$, $c$ is a real number and $k$ is an integer $\ge 0$.

1. (The evaluation) $f(T)$ does not depend on $N$. If $N$ is an integer $\ge 0$, $a_k$ are real numbers given for $0 \le k \le N$, and $f = \sum_{k=0}^{N} a_k X^k$, then $f(T) = \sum_{k=0}^{N} a_k T^k$, and $f(T)v = \sum_{k=0}^{N} a_k\, T^k v$ for every $v \in V$ (the sum on the right is taken in the additive group of $V$).
2. (Constants and $X$) For a constant polynomial $\kappa(c)$, $\kappa(c)(T) = c\, i_V$; in particular $\kappa(1)(T) = i_V$ and $\kappa(0)(T) = o$. Also $X(T) = T$, $(X^k)(T) = T^k$, $(cX^k)(T) = cT^k$ and $(X - c)(T) = T - c\, i_V$.
3. (Sums, scalar multiples, products)
   - (i) $(f + g)(T) = f(T) + g(T)$, $(cf)(T) = c f(T)$, $(-f)(T) = -f(T)$ and $(f - g)(T) = f(T) - g(T)$. For integers $m$, $l$ with $m - 1 \le l$ and $g_i \in \mathbb{R}[X]$ given for $m \le i \le l$, $\bigl(\sum_{i=m}^{l} g_i\bigr)(T) = \sum_{i=m}^{l} g_i(T)$.
   - (ii) $(fg)(T) = f(T) \circ g(T) = g(T) \circ f(T)$. In particular $f(T) \circ g(T) = g(T) \circ f(T)$, and $f(T) \circ T = T \circ f(T)$.
   - (iii) If $S \circ T = T \circ S$, then $S \circ f(T) = f(T) \circ S$.
4. (Powers, products of several polynomials, divisibility)
   - (i) $(f^k)(T) = (f(T))^k$. In particular $\bigl((X - c)^k\bigr)(T) = (T - c\, i_V)^k$.
   - (ii) If $l$ is a natural number and $g_1, \dots, g_l$ is a sequence of elements of $\mathbb{R}[X]$, then $(g_1 \cdots g_l)(T) = (g_1 \cdots g_{l-1})(T) \circ g_l(T)$, where for $l = 1$ the product $g_1 \cdots g_{l-1}$ is the empty product $1$.
   - (iii) If $f = gh$ in $\mathbb{R}[X]$, then $f(T) = g(T) \circ h(T) = h(T) \circ g(T)$. Hence if $g \mid f$ in $\mathbb{R}[X]$, then $\operatorname{Ker} g(T) \subseteq \operatorname{Ker} f(T)$ and $\operatorname{Ran} f(T) \subseteq \operatorname{Ran} g(T)$, and $g(T) = o$ implies $f(T) = o$.
5. (The zero map, scalar multiples of the identity, the space with only the zero vector)
   - (i) $f(o) = \operatorname{coef}_0(f)\, i_V$.
   - (ii) $f(c\, i_V) = f(c)\, i_V$.
   - (iii) If $V = \{0_V\}$, then $f(T) = o = i_V$ for every $f$.
6. (Matrices) Let $n$ be a natural number, $A$, $B$ be $n \times n$ matrices, $I_n$ the identity matrix and $O$ the zero matrix. The product of matrices is that of the entry on the matrix product. The following equalities, obtained from those of (1)–(5) by replacing composition with the matrix product, hold.
   - (i) $f(A)$ does not depend on $N$, and if $f = \sum_{k=0}^{N} a_k X^k$ then $f(A) = \sum_{k=0}^{N} a_k A^k$ and $f(A)x = \sum_{k=0}^{N} a_k\, A^k x$ for every $x \in \mathbb{R}^n$ (product of a matrix and a vector).
   - (ii) $\kappa(c)(A) = cI_n$, $\kappa(1)(A) = I_n$, $\kappa(0)(A) = O$, $X(A) = A$, $(X^k)(A) = A^k$, $(cX^k)(A) = cA^k$ and $(X - c)(A) = A - cI_n$.
   - (iii) $(f + g)(A) = f(A) + g(A)$, $(cf)(A) = c f(A)$, $(-f)(A) = -f(A)$, $(f - g)(A) = f(A) - g(A)$, $\bigl(\sum_{i=m}^{l} g_i\bigr)(A) = \sum_{i=m}^{l} g_i(A)$, and $(fg)(A) = f(A)g(A) = g(A)f(A)$. If $AB = BA$, then $B f(A) = f(A) B$.
   - (iv) $(f^k)(A) = (f(A))^k$, $(g_1 \cdots g_l)(A) = (g_1 \cdots g_{l-1})(A)\, g_l(A)$, and if $f = gh$ then $f(A) = g(A)h(A) = h(A)g(A)$.
   - (v) $f(O) = \operatorname{coef}_0(f)\, I_n$ and $f(cI_n) = f(c)\, I_n$.
:::

## 직관

다항식 $f = a_0 + a_1 X + \cdots + a_N X^N$에 선형사상 $T$를 대입하는 것은 $X$의 자리에 $T$를, $X^k$의 자리에 $T^k$를, 상수항 $a_0$의 자리에 $a_0 i_V$를 놓고 더하는 것입니다. 상수항에 항등함수를 붙이는 까닭은 $X^0 = 1$의 자리에 $T^0 = i_V$가 오기 때문이고, 그래서 $(X - c)(T)$는 실수 $c$를 뺀 것이 아니라 사상 $c\, i_V$를 뺀 $T - c\, i_V$입니다. 다항식은 계수의 열이므로 $f(T)$는 "함수 $f$의 $T$에서의 값"이 아니라 이 규칙으로 새로 만든 선형사상입니다.

이 대입의 쓸모는 (3)의 (ii)에 있습니다. 합성은 일반적으로 교환되지 않지만, 한 사상 $T$에 다항식을 대입한 것끼리는 다항식의 곱처럼 계산할 수 있고 순서도 바꿀 수 있습니다. 비유하면, 한 사람의 하루 일과를 몇 번 되풀이하고 상수배하고 더한 것들은 서로 어떤 순서로 겹쳐도 같다는 것입니다. 비유에서 "같은 사람의 일과"가 $T$의 거듭제곱들이고, 이것들이 서로 교환된다는 것이 [[power-of-linear-map|선형사상과 행렬의 거듭제곱]]의 (2)의 (i)입니다. 그래서 $f = gh$이면 $f(T)$는 $g(T)$와 $h(T)$를 어느 순서로 합성해도 같습니다. $f$가 상수와 일차식들의 곱이면 (4)의 (ii)를 거듭 써서 $f(T)$를 상수배 사상과 $T - c\, i_V$ 꼴의 사상들을 차례로 합성한 것으로 계산할 수 있습니다.

다만 다항식환 $\mathbb{R}[X]$에 수를 넣는 [[evaluation-homomorphism|대입 준동형]]은 가환환의 원소를 대입하는 것입니다. $n \ge 2$인 $n \times n$ 행렬 전체는 곱이 교환되지 않는 환이고([[ring-examples|환의 예]]의 (5)), $L(V, V)$를 합성으로 환이라 진술한 항목은 없으므로 그 항목을 그대로 쓸 수 없습니다. 그래서 곱의 보존을 다항식의 곱의 계수식에서 직접 증명합니다. 영벡터 하나뿐인 공간 $V = \{0_V\}$에서는 $o = i_V$이므로 모든 다항식을 대입한 것이 $o$입니다((5)의 (iii)).

## 증명

:::idea
선형사상과 행렬을 함께 다룬다. 둘 다 벡터공간이고 결합법칙과 분배법칙을 만족하는 곱과 그 곱의 항등원을 가지며, 거듭제곱의 지수법칙이 성립한다. (1)과 (3)의 (i)은 덧셈군에서의 유한 합의 계산이다. (3)의 (ii)는 $f(T) \circ g(T)$를 두 합의 곱으로 펼쳐 이중 합을 만든 뒤, 삼각형 이중 합의 순서를 바꾸어 곱 $fg$의 계수식과 맞춘다.
:::

:::hint
$f$와 $g$의 계수가 모두 $N$보다 큰 번호에서 $0$이면, $fg$의 계수는 $2N$보다 큰 번호에서 $0$이다. $M = 2N$까지의 합으로 세 사상을 모두 적어 본다.
:::

:::hint
$j > N$인 번호에서는 $\operatorname{coef}_j(f) = 0$이므로 그 번호의 항은 모두 $0$이다. 그래서 $j \le N$일 때만 $g(T)$를 $M - j$까지의 합으로 적으면 된다.
:::

:::proof
**쓰는 사실.** 아래에서 $\mathfrak{A}$는 $L(V, V)$이거나 $M_{n \times n}$이다. $\mathfrak{A}$의 두 원소 $U$, $W$의 곱 $UW$는 $\mathfrak{A} = L(V, V)$이면 합성 $U \circ W$, $\mathfrak{A} = M_{n \times n}$이면 행렬의 곱이고, $e$는 각각 $i_V$와 $I_n$, $\mathsf{0}$은 각각 $o$와 $O$이다. $Y$는 $\mathfrak{A}$의 원소이고, $f(Y)$는 위의 정의로 정한 $\mathfrak{A}$의 원소이다. 다음을 쓴다.

- (A1) $\mathfrak{A}$는 벡터공간이고 그 영벡터는 $\mathsf{0}$이다([[linear-maps-form-a-vector-space|선형사상의 공간]]의 (2), [[matrix|행렬]]의 (1)). (V…)는 [[vector-space|벡터공간]]의 공리, (B…)는 [[vector-space-basic-properties|벡터공간의 기본 성질]]을 $\mathfrak{A}$에 쓴 것이다.
- (A2) $(UW)Z = U(WZ)$이고 $eU = U = Ue$이다([[composition-is-associative|함수의 합성은 결합법칙을 만족한다]], [[composition-of-linear-maps|선형사상의 합성]]의 (2), [[matrix-product-properties|행렬 곱의 성질]]의 (1), (4)).
- (A3) $(U_1 + U_2)W = U_1W + U_2W$, $U(W_1 + W_2) = UW_1 + UW_2$, $(\alpha U)W = \alpha(UW) = U(\alpha W)$이다($\alpha$는 실수. 선형사상의 합성의 (3), 행렬 곱의 성질의 (2), (3)). $\alpha = 0$으로 두고 (B3)을 쓰면 $\mathsf{0}W = (0U)W = 0(UW) = \mathsf{0}$이고 같은 방법으로 $W\mathsf{0} = \mathsf{0}$이다.
- (A4) $Y^0 = e$, $Y^{k+1} = Y^k Y$, $Y^1 = Y$, $Y^j Y^k = Y^{j+k}$이다. $UW = WU$이면 $UW^k = W^k U$이다. $(ce)^k = c^k e$이고, $k \ge 1$이면 $\mathsf{0}^k = \mathsf{0}$이다. 이것은 [[power-of-linear-map|선형사상과 행렬의 거듭제곱]]의 정의와 (1), (2)의 (i), (3)의 (i), (4)의 (i), (iii)이고, 행렬에서는 그 항목의 (5)의 (ii)–(iv)이다. 여기서 $c^k$는 실수의 거듭제곱이다.
- (A5) (유한 합을 보존하는 함수) [[group-homomorphism|군 준동형]]은 [[finite-sums-in-a-ring|환의 유한 합]]의 (7)에 의해 유한 합을 유한 합으로 보낸다. 다음 네 함수는 덧셈군 사이의 준동형이다. *오른쪽 곱*: $W \in \mathfrak{A}$를 정하고 $U$에 $UW$를 대응시키는 함수 $(\mathfrak{A}, +) \to (\mathfrak{A}, +)$((A3)). *왼쪽 곱*: $W$를 정하고 $U$에 $WU$를 대응시키는 함수 $(\mathfrak{A}, +) \to (\mathfrak{A}, +)$((A3)). *스칼라배*: 실수 $\alpha$를 정하고 $U$에 $\alpha U$를 대응시키는 함수 $(\mathfrak{A}, +) \to (\mathfrak{A}, +)$((V7)). *실수배*: $U$를 정하고 실수 $\alpha$에 $\alpha U$를 대응시키는 함수 $(\mathbb{R}, +) \to (\mathfrak{A}, +)$((V8)). 실수의 합은 그 항목의 (10)에 의해 덧셈군 $(\mathbb{R}, +)$에서의 합이다.

"합의 (n)"은 [[finite-sums-in-a-ring|환의 유한 합]]의 (n)이고, "다항식환의 (n)"은 [[polynomial-ring|다항식환]]의 (n)이다. 정수의 순서와 계산은 [[well-ordering-principle]]의 진술의 (Z5)–(Z7), (L3)과 거기서 받아들인 계산 법칙, 정수의 합과 차가 정수라는 것은 [[even-and-odd]]에서 받아들인 사실이고, 실수의 계산은 [[real-number-arithmetic]]의 것이다. 아래에서 $a_k = \operatorname{coef}_k(f)$, $b_k = \operatorname{coef}_k(g)$($k \ge 0$)로 쓴다.

**1의 증명.** $N \le N'$이 둘 다 $n > N$, $n > N'$에서 계수가 $0$이 되는 정수라 하자. 합의 (4)를 $l = N$에 쓰면($-1 \le N \le N'$)
$$
\sum_{k=0}^{N'} a_k Y^k = \sum_{k=0}^{N} a_k Y^k + \sum_{k=N+1}^{N'} a_k Y^k
$$
이다. $N + 1 \le k \le N'$이면 $k > N$이므로 $a_k = 0$이고 (B3)에 의해 $a_k Y^k = \mathsf{0}$이다. 합의 (3)과 (6)의 (iv)에 의해 둘째 합은 $\mathsf{0}$이므로 두 합은 같다. 그런 정수 둘은 (Z5)에 의해 크기를 비교할 수 있으므로 $f(Y)$는 $N$에 상관없다. $f = \sum_{k=0}^{N} a_k X^k$이면 다항식환의 (5)의 (i)에 의해 $0 \le k \le N$에서 $\operatorname{coef}_k(f) = a_k$이고 $k > N$에서 $\operatorname{coef}_k(f) = 0$이므로, 정의와 합의 (3)에 의해 $f(Y) = \sum_{k=0}^{N} a_k Y^k$이다. $\mathfrak{A} = L(V, V)$이고 $v \in V$이면, [[linear-maps-form-a-vector-space|선형사상의 공간]]의 덧셈과 스칼라배의 정의에 의해 $L(V, V)$의 원소 $U$에 $Uv$를 대응시키는 함수는 덧셈군 $(L(V, V), +)$에서 $(V, +)$로의 준동형이고 $(\alpha U)v = \alpha(Uv)$이므로, 합의 (7)에 의해 $f(T)v = \sum_{k=0}^{N} (a_k T^k)v = \sum_{k=0}^{N} a_k\, T^k v$이다. $\mathfrak{A} = M_{n \times n}$이고 $x \in \mathbb{R}^n$이면 [[matrix-vector-product|행렬과 벡터의 곱]]의 (4)에 의해 $C$에 $Cx$를 대응시키는 함수가 덧셈군 $(M_{n \times n}, +)$에서 $(\mathbb{R}^n, +)$로의 준동형이고 $(\alpha C)x = \alpha(Cx)$이므로 같은 방법으로 $f(A)x = \sum_{k=0}^{N} a_k\, A^k x$이다.

**3의 (i)의 증명.** $N$을 $n > N$에서 $a_n = b_n = 0$인 정수로 잡는다(두 다항식에 대한 정수 가운데 큰 쪽). 다항식환의 정의에 의해 $\operatorname{coef}_n(f + g) = a_n + b_n$이므로 $n > N$에서 $0$이다. 정의, (V8), 합의 (6)의 (i)에 의해
$$
\begin{aligned}
(f + g)(Y) &= \sum_{k=0}^{N} (a_k + b_k) Y^k \\
&= \sum_{k=0}^{N} (a_k Y^k + b_k Y^k) \\
&= f(Y) + g(Y)
\end{aligned}
$$
이다. $cf$는 $\kappa(c) f$이고 다항식환의 (3)의 (iii)에 의해 $\operatorname{coef}_n(cf) = c a_n$이므로 $n > N$에서 $0$이다. (V6)과 (A5)의 스칼라배에 의해 $(cf)(Y) = \sum_{k=0}^{N} (c a_k) Y^k = \sum_{k=0}^{N} c(a_k Y^k) = c f(Y)$이다. 다항식환의 (1)에 의해 $\operatorname{coef}_n(-f) = -a_n$이므로, (B9)와 합의 (6)의 (ii)에 의해 $(-f)(Y) = \sum_{k=0}^{N} (-(a_k Y^k)) = -f(Y)$이다. $f - g = f + (-g)$이므로 앞의 두 결과에서 $(f - g)(Y) = f(Y) - g(Y)$이다. 끝으로 $f$에 $f(Y)$를 대응시키는 함수는 방금 보인 것에 의해 덧셈군 $(\mathbb{R}[X], +)$(다항식환의 (1))에서 $(\mathfrak{A}, +)$로의 준동형이므로, 합의 (7)에 의해 $\bigl(\sum_{i=m}^{l} g_i\bigr)(Y) = \sum_{i=m}^{l} g_i(Y)$이다.

**2의 증명.** 상수 다항식 $c = \kappa(c)$는 $\operatorname{coef}_0 = c$이고 $n \ge 1$에서 $\operatorname{coef}_n = 0$이므로 $N = 0$으로 두면 합의 (1)에 의해 $\kappa(c)(Y) = cY^0 = ce$이다. (V5)에 의해 $\kappa(1)(Y) = 1e = e$이고, (B3)에 의해 $\kappa(0)(Y) = 0e = \mathsf{0}$이다. 다항식환의 (4)의 (iii)에 의해 $\operatorname{coef}_k(X^k) = 1$이고 $j \ne k$이면 $\operatorname{coef}_j(X^k) = 0$이다. $N = k$로 두면 $j \ne k$인 항은 (B3)에 의해 $\mathsf{0}$이므로 합의 (6)의 (v)와 (V5)에 의해 $(X^k)(Y) = 1Y^k = Y^k$이다. 다항식환의 (4)의 (iii)의 $X^1 = X$와 (A4)의 $Y^1 = Y$에 의해 $X(Y) = Y$이다. (3)의 (i)에 의해 $(cX^k)(Y) = c\,(X^k)(Y) = cY^k$이고 $(X - c)(Y) = X(Y) - \kappa(c)(Y) = Y - ce$이다.

**3의 (ii)의 증명.** (3)의 (i)에서처럼 $N$을 잡고 $M = 2N$이라 하자.

*$fg$의 계수.* 다항식환의 정의에 의해 $\operatorname{coef}_l(fg) = \sum_{j=0}^{l} a_j b_{l-j}$이다. $l > M$이고 $0 \le j \le l$이면, $j > N$이거나 $j \le N$이고, 뒤의 경우 $l - j > M - N = N$이다. 어느 경우든 $a_j = 0$이거나 $b_{l-j} = 0$이므로 $a_j b_{l-j} = 0$이고, 합의 (6)의 (iv)에 의해 $\operatorname{coef}_l(fg) = 0$이다. 따라서 정의에서 $N$ 대신 $M$을 쓸 수 있고, (A5)의 실수배($U = Y^l$)와 (A4)의 $Y^l = Y^{j + (l - j)}$에 의해
$$
\begin{aligned}
(fg)(Y) &= \sum_{l=0}^{M} \Bigl(\sum_{j=0}^{l} a_j b_{l-j}\Bigr) Y^l \\
&= \sum_{l=0}^{M} \sum_{j=0}^{l} u_{j,\,l-j}
\end{aligned}
$$
이다. 여기서 $0 \le j$, $0 \le k$, $j + k \le M$인 정수의 쌍 $(j, k)$마다 $u_{j,k} = (a_j b_k) Y^{j+k}$로 둔다.

*순서 바꾸기.* [[rearranging-finite-sums-in-a-ring|유한 합의 재배열과 이중 합]]의 (5)의 (ii)를 $n = M$에 쓰면
$$
(fg)(Y) = \sum_{j=0}^{M} \sum_{k=0}^{M-j} u_{j,k}
$$
이다.

*안쪽 합.* $0 \le j \le M$인 각 $j$에서 $\sum_{k=0}^{M-j} u_{j,k} = (a_j Y^j)\, g(Y)$임을 보인다. $j \le N$이면 $M - j \ge N$이므로 (1)에 의해 $g(Y) = \sum_{k=0}^{M-j} b_k Y^k$이고, (A5)의 왼쪽 곱($W = a_j Y^j$), (A3), (V6), (A4)에 의해
$$
\begin{aligned}
(a_j Y^j)\, g(Y) &= \sum_{k=0}^{M-j} (a_j Y^j)(b_k Y^k) \\
&= \sum_{k=0}^{M-j} (a_j b_k)(Y^j Y^k) \\
&= \sum_{k=0}^{M-j} u_{j,k}
\end{aligned}
$$
이다. $j > N$이면 $a_j = 0$이므로 (B3)과 (A3)에 의해 $(a_j Y^j)\, g(Y) = \mathsf{0}\, g(Y) = \mathsf{0}$이고, 모든 $k$에서 $u_{j,k} = (0 b_k) Y^{j+k} = \mathsf{0}$이므로 합의 (6)의 (iv)에 의해 안쪽 합도 $\mathsf{0}$이다.

*마무리.* $M \ge N$이므로 (1)에 의해 $f(Y) = \sum_{j=0}^{M} a_j Y^j$이고, (A5)의 오른쪽 곱($W = g(Y)$)에 의해
$$
\begin{aligned}
(fg)(Y) &= \sum_{j=0}^{M} (a_j Y^j)\, g(Y) \\
&= \Bigl(\sum_{j=0}^{M} a_j Y^j\Bigr) g(Y) \\
&= f(Y)\, g(Y)
\end{aligned}
$$
이다. 다항식환의 (1)에 의해 $\mathbb{R}[X]$는 가환환이므로 $gf = fg$이고, 방금 보인 것을 $g$, $f$의 순서로 쓰면 $g(Y)\, f(Y) = (gf)(Y) = (fg)(Y)$이다. 특히 $g = X$이면 (2)에 의해 $f(Y)\, Y = Y f(Y)$이다.

**3의 (iii)의 증명.** $S$와 $Y$가 교환되면 (A4)에 의해 모든 $k$에서 $S Y^k = Y^k S$이다. (1)의 $N$에 대하여 (A5)의 왼쪽 곱과 오른쪽 곱($W = S$), (A3)에 의해
$$
\begin{aligned}
S f(Y) &= \sum_{k=0}^{N} S(a_k Y^k) \\
&= \sum_{k=0}^{N} a_k (S Y^k) \\
&= \sum_{k=0}^{N} a_k (Y^k S) \\
&= \sum_{k=0}^{N} (a_k Y^k) S = f(Y) S
\end{aligned}
$$
이다.

**4의 증명.** (i) $k$에 대한 [[mathematical-induction|귀납법]]. [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 (6)의 (i)에 의해 $f^0 = 1$, $f^{k+1} = f^k f$이다. (2)에 의해 $(f^0)(Y) = \kappa(1)(Y) = e = (f(Y))^0$이다. $(f^k)(Y) = (f(Y))^k$이면 (3)의 (ii)와 (A4)에 의해 $(f^{k+1})(Y) = (f^k)(Y)\, f(Y) = (f(Y))^k f(Y) = (f(Y))^{k+1}$이다. 이것을 $f = X - c$에 쓰고 (2)를 쓰면 $\bigl((X - c)^k\bigr)(Y) = (Y - ce)^k$이다.

(ii) 가환환의 유한 곱의 (2)를 길이 $l - 1 \ge 0$에 쓰면 $g_1 \cdots g_l = (g_1 \cdots g_{l-1})\, g_l$이고, (3)의 (ii)를 쓴다.

(iii) $f = gh$이면 (3)의 (ii)에 의해 $f(Y) = g(Y)\, h(Y) = h(Y)\, g(Y)$이다. 다항식환의 (6)에 의해 $g \mid f$이면 이런 $h$가 있다. $\mathfrak{A} = L(V, V)$이고 $v \in \operatorname{Ker} g(T)$이면 [[linear-map|선형사상]]의 (T1)에 의해 $f(T)v = h(T)\bigl(g(T)v\bigr) = h(T)0_V = 0_V$이므로 $v \in \operatorname{Ker} f(T)$이다. $v \in V$이면 $f(T)v = g(T)\bigl(h(T)v\bigr) \in \operatorname{Ran} g(T)$이다. $g(T) = o$이면 (A3)에 의해 $f(T) = h(T) \circ o = o$이다.

**5의 증명.** (i) (A4)에 의해 $\mathsf{0}^0 = e$이고 $k \ge 1$에서 $\mathsf{0}^k = \mathsf{0}$이다. $N \ge 0$이므로 합의 (2)의 둘째 식으로 첫 항을 떼면, (B4), 합의 (6)의 (iv), 영벡터의 정의에 의해 $f(\mathsf{0}) = a_0 e + \sum_{k=1}^{N} a_k \mathsf{0} = a_0 e + \mathsf{0} = a_0 e$이다.

(ii) (A4)에 의해 $(ce)^k = c^k e$이므로 (V6)과 (A5)의 실수배($U = e$)에 의해
$$
\begin{aligned}
f(ce) &= \sum_{k=0}^{N} a_k (c^k e) = \sum_{k=0}^{N} (a_k c^k) e \\
&= \Bigl(\sum_{k=0}^{N} a_k c^k\Bigr) e
\end{aligned}
$$
이다. [[evaluation-homomorphism|대입 준동형]]의 정의에 의해 $f(c) = \sum_{k=0}^{N} a_k c^k$이고, 그 식의 $c^k$는 환 $\mathbb{R}$에서의 거듭제곱인데 [[polynomials-and-polynomial-functions|다항식과 다항함수]]의 (5)의 (ii)에 의해 실수의 거듭제곱과 같다. 따라서 $f(ce) = f(c)\, e$이다.

(iii) [[power-of-linear-map|선형사상과 행렬의 거듭제곱]]의 (4)의 (iv)에 의해 $L(V, V) = \{o\}$이고 $o = i_V$이며, $f(T) \in L(V, V)$이다.

**6의 증명.** 위의 (1)–(5)의 증명은 (A1)–(A5)만 썼고 (A1)–(A5)는 $\mathfrak{A} = M_{n \times n}$에서도 성립하므로, $Y = A$, $S = B$로 두면 (6)의 각 줄이 그대로 나온다.
:::

## 예시와 반례

:::example[전개한 꼴과 인수의 곱이 같은 행렬을 주는 예]
$B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$와 $f = X^2 - 1$을 봅니다. $\mathbb{R}[X]$에서 분배법칙으로 $(X - 1)(X + 1) = X^2 + X - X - 1 = X^2 - 1$입니다. [[matrix-product|행렬의 곱]]의 (2)로 계산하면 $B^2 = BB = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$이므로, (6)의 (i)과 (ii)에 의해
$$
f(B) = B^2 - I_2 = \begin{pmatrix} 0 & 2 \\ 0 & 0 \end{pmatrix}
$$
입니다. 한편 (6)의 (iii)에 의해 $f(B) = (B - I_2)(B + I_2)$이고, 실제로
$$
\begin{aligned}
&(B - I_2)(B + I_2) \\
&\quad = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 0 & 2 \\ 0 & 0 \end{pmatrix}, \\
&(B + I_2)(B - I_2) \\
&\quad = \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix} \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 2 \\ 0 & 0 \end{pmatrix}
\end{aligned}
$$
입니다. 두 인수를 어느 순서로 곱해도 전개한 꼴로 계산한 것과 같습니다.
:::

:::example[스칼라배 사상에 대입한 예]
$f = (X - 1)(X - 2)$라 하면 $\mathbb{R}[X]$에서 $f = X^2 - 3X + 2$이고, 실수를 대입하면 $f(1) = 1 - 3 + 2 = 0$, $f(2) = 4 - 6 + 2 = 0$입니다. 어떤 벡터공간 $V$에서든 $i_V = 1\, i_V$([[vector-space|벡터공간]]의 (V5))이므로 (5)의 (ii)에 의해
$$
\begin{aligned}
f(i_V) &= f(1)\, i_V = 0\, i_V = o, \\
f(2\, i_V) &= f(2)\, i_V = 0\, i_V = o
\end{aligned}
$$
입니다. 한편 $f(3\, i_V) = f(3)\, i_V = 2\, i_V$이고, $V \ne \{0_V\}$이면 이것은 $o$가 아닙니다($v \ne 0_V$에서 $2v \ne 0_V$, [[vector-space-basic-properties|(B6)]]). 스칼라배 사상에 대입한 것은 그 스칼라를 대입한 실수 $f(c)$의 배가 됩니다.
:::

:::counterexample[곱에 대입한 것이 영행렬이어도 인수에 대입한 것은 영행렬이 아닌 예]
$D = \operatorname{diag}(1, 2)$([[diagonalizable|대각화 가능]]의 대각행렬)와 위의 $f = (X - 1)(X - 2)$를 봅니다. (6)의 (ii)에 의해 $(X - 1)(D) = D - I_2 = \operatorname{diag}(0, 1)$이고 $(X - 2)(D) = D - 2I_2 = \operatorname{diag}(-1, 0)$이며, (6)의 (iii)과 대각화 가능의 (3)에 의해
$$
\begin{aligned}
f(D) &= \operatorname{diag}(0, 1)\operatorname{diag}(-1, 0) \\
&= \operatorname{diag}(0, 0) = O
\end{aligned}
$$
입니다. 그러나 $D - I_2$와 $D - 2I_2$는 둘 다 영행렬이 아닙니다. 실수에서는 $(c - 1)(c - 2) = 0$이면 $c = 1$이거나 $c = 2$이지만, 행렬에서는 $f(D) = O$이어도 $D = I_2$나 $D = 2I_2$가 아닐 수 있습니다. 행렬의 곱에서는 영행렬이 아닌 두 행렬의 곱이 영행렬일 수 있기 때문입니다.
:::

## 확인 질문

:::check[$G = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$와 $f = 1 + X + X^2 + X^3$에 대하여 $f(G)$와 $(I_2 - G)\, f(G)$는 무엇인가?]
[[matrix-product|행렬의 곱]]의 (2)로 계산하면 $GG = O$이고, 영행렬과의 곱 $OG$도 성분이 모두 $0$이므로 $O$입니다. 따라서 [[power-of-linear-map|선형사상과 행렬의 거듭제곱]]의 (5)의 (ii)와 정의에 의해 $G^2 = GG = O$이고 $G^3 = G^2 G = OG = O$입니다. 따라서 (6)의 (i)에 의해 $f(G) = I_2 + G + O + O = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$입니다. [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 (11)의 (i)에 의해 $\mathbb{R}[X]$에서 $(X - 1)f = X^4 - 1$이므로 $(1 - X)f = 1 - X^4$이고, (6)의 (ii), (iii)에 의해 $(I_2 - G)\, f(G) = \bigl((1 - X)f\bigr)(G) = I_2 - G^4 = I_2$입니다($G^4 = G^3 G = O$). (6)의 (iii)에 의해 $f(G)(I_2 - G)$도 같은 행렬 $I_2$이므로, $f(G)$는 $I_2 - G$의 [[invertible-matrix|역행렬]]입니다.
:::

:::check[$f(T) = o$이면 모든 $g \in \mathbb{R}[X]$에서 $(fg)(T)$는 무엇인가?]
$o$입니다. $\mathbb{R}[X]$에서 $fg = f \cdot g$이므로 $f \mid fg$이고, (4)의 (iii)에 의해 $f(T) = o$이면 $(fg)(T) = o$입니다. (3)의 (ii)로 직접 보면 $(fg)(T) = g(T) \circ f(T) = g(T) \circ o$이고, 선형사상 $g(T)$는 $0_V$를 $0_V$로 보내므로 이것은 $o$입니다.
:::
