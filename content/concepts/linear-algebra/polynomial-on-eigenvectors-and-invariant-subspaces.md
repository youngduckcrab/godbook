---
title: 고유벡터·불변 부분공간과 다항식
title_en: Polynomials of a Linear Map on Eigenvectors and Invariant Subspaces
aliases: [고유벡터와 다항식, 불변 부분공간과 다항식, 제한한 사상에 다항식 대입, 교환하는 사상의 핵과 상, polynomial of an operator on an eigenvector, invariant subspace of a polynomial of an operator, restriction and polynomial]
kind: theorem
field: linear-algebra
msc: ["15A04", "15A18"]
level: undergrad
summary: λ 에 속하는 고유벡터 v 에서 T 의 거듭제곱과 다항식을 대입한 사상이 v 를 λ 의 거듭제곱과 f(λ) 의 배로 보낸다는 것, 따라서 f(T) 가 영사상이면 T 의 고윳값은 f 의 근이라는 것을 증명한다. T-불변 부분공간은 T 의 거듭제곱과 다항식을 대입한 사상에도 불변이고 제한한 사상에 대입한 것이 대입한 사상의 제한과 같다는 것, T 와 교환하는 사상 S 에 대하여 f(T) 의 핵과 상이 S-불변이라는 것도 증명한다.
requires: [function, real-number-arithmetic, vector-space, vector-space-basic-properties, subspace, linear-map, linear-maps-form-a-vector-space, kernel-and-range, eigenvalue-and-eigenvector, invariant-subspaces-of-self-adjoint-map, eigenvalue-examples, matrix, matrix-vector-product, mathematical-induction, power-of-a-real-number, group-homomorphism, finite-sums-in-a-ring, polynomial-ring, evaluation-homomorphism, polynomials-and-polynomial-functions, power-of-linear-map, polynomial-of-linear-map, polynomial-of-map-and-matrices]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "9장 2.2 Spectral Mapping Theorem 의 Remark, p.257; 9장 3.1 Invariant subspaces 의 Definition 과 Lemma 3.1, p.259; 9장 1절 A \"standard\" proof, p.255"
    checked: original
    note: "출처 9장 2.2 의 Remark(p.257)는 Ax = λx(x ≠ 0)이면 A^k x = λ^k x 이고 p(A)x = p(λ)x 이므로 p(λ) 가 p(A) 의 고윳값이라고 적고, 이 포함을 trivial 이라 한다(이 항목의 (1)). 출처 9장 3.1(p.259)은 불변 부분공간과 제한 A|_E 를 정의하고, AE ⊂ E 이면 귀납법으로 A^k E ⊂ E (k ≥ 1)이고 따라서 p(A)E ⊂ E 라고 적으며(이 항목의 (3)의 (i)), Lemma 3.1 p(A|_E) = p(A)|_E 의 증명을 'The proof is trivial' 로만 둔다(이 항목의 (3)의 (ii)). 출처 9장 1절의 A \"standard\" proof(p.255)는 E_k 가 A-불변이면 (A − λI)v = Av − λv ∈ E_k 이므로 A − λI 에도 불변이라고 적는다(이 항목의 (3)의 (iii)의 한 방향). 이 사이트는 불변 부분공간과 제한을 선형대수 3 의 invariant-subspaces-of-self-adjoint-map 의 정의로 쓴다. (1)–(5)의 증명은 이 사이트가 썼다. 출처는 스칼라를 복소수로 두어 p(σ(A)) 와 σ(p(A)) 가 같다(Theorem 2.1)고 하지만, 이 항목은 실수에서 한쪽 포함만 진술한다."
  - ref: hefferon-linear-algebra
    loc: "5장 Similarity, IV Jordan Form, IV.1 Polynomials of Maps and Matrices 의 Lemma 와 증명, src/jc/jc4.tex:507–541; IV.2 Jordan Canonical Form 의 Definition def:invariant 와 Lemma le:tInvIfftMinLambdaInv, src/jc/jc4.tex:2986–3022; IV.2 연습문제, src/jc/jc4.tex:4448–4455"
    checked: original
    note: "Hefferon 의 5장은 스칼라를 복소수로 둔다. 이 항목은 실수에서 진술한다. 출처 IV.1 의 Lemma(jc4.tex:507–510, 특성다항식의 일차 인수는 최소다항식의 인수라는 것)의 증명(jc4.tex:512–541)은 고유벡터 v 에서 T^i v = λ^i v 이고 p(T)v = p(λ)v 임을 계산하고, m(T) 가 영행렬이므로 m(λ)v = 0, 따라서 m(λ) = 0 이라고 결론짓는다(이 항목의 (1)과 (2)와 같은 발상). 출처 IV.2 의 le:tInvIfftMinLambdaInv(jc4.tex:2994–3022)는 부분공간이 t-불변인 것이 모든 스칼라 λ 에서 t − λ 에 불변인 것과 같다고 진술한다(이 항목의 (3)의 (iii)). IV.2 의 연습문제(jc4.tex:4448–4455)는 t − λ_1 에 불변인 것이 t − λ_2 에 불변인 것과 같음을 보이게 하고, 그 풀이는 둘 다 t-불변과 같다고 적는다(이 항목의 (3)의 (iii)과 같은 발상)."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(사영의 다항식 공식과 3 × 3 예의 거듭제곱, 실수에서 한쪽 포함만 성립하는 고윳값의 예). 독립 검토 없음."
added: 2026-11-28
---

:::statement
$V$가 [[vector-space|벡터공간]]이고 $T, S \in L(V, V)$라 하자([[linear-maps-form-a-vector-space|선형사상의 공간]]). 고윳값, 고유벡터, 고유공간은 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 것이고, $T$-불변 부분공간과 제한한 사상 $T|_E$는 [[invariant-subspaces-of-self-adjoint-map|자기수반사상의 고유벡터와 불변 부분공간]]의 정의의 것이다. 거듭제곱 $T^k$, $A^k$는 [[power-of-linear-map|선형사상과 행렬의 거듭제곱]]의 것이고, $f \in \mathbb{R}[X]$를 대입한 것 $f(T)$, $f(A)$는 [[polynomial-of-linear-map|선형사상과 행렬에 다항식 대입하기]]의 것이며, 실수 $c$에 대하여 $f(c)$는 [[evaluation-homomorphism|대입 준동형]]의 대입한 값이다. $\operatorname{Ker}$, $\operatorname{Ran}$은 [[kernel-and-range|핵과 상]]의 것이다.

다음이 성립한다. 아래에서 $f \in \mathbb{R}[X]$이고 $\lambda$는 실수, $k$는 $0$ 이상인 정수이다.

1. (고유벡터) $v \in V$이고 $Tv = \lambda v$이면 $T^k v = \lambda^k v$이고 $f(T)v = f(\lambda)\, v$이다. 따라서
   - (i) $v$가 $\lambda$에 속하는 $T$의 고유벡터이면 $v$는 $f(\lambda)$에 속하는 $f(T)$의 고유벡터이다. 특히 $\lambda$가 $T$의 고윳값이면 $f(\lambda)$는 $f(T)$의 고윳값이다.
   - (ii) $\operatorname{Ker}(T - \lambda\, i_V) \subseteq \operatorname{Ker}\bigl(f(T) - f(\lambda)\, i_V\bigr)$이다.
2. (영사상이 되는 다항식) $f(T) = o$이고 $\lambda$가 $T$의 고윳값이면 $f(\lambda) = 0$이다. 곧 $T$의 고윳값은 모두 $f$의 근이다.
3. (불변 부분공간) $E$가 $T$-불변 부분공간이라 하자.
   - (i) 모든 $k$에서 $E$는 $T^k$-불변이고, $E$는 $f(T)$-불변이다.
   - (ii) $(T|_E)^k = T^k|_E$이고 $f(T|_E) = f(T)|_E$이다. 오른쪽은 (i)에 의해 정해지는 제한한 사상이다.
   - (iii) 실수 $c$에 대하여, $V$의 부분공간 $E$가 $T$-불변인 것은 정확히 $E$가 $(T - c\, i_V)$-불변일 때이다.
4. (교환하는 사상) $S \circ T = T \circ S$이면 $\operatorname{Ker} f(T)$와 $\operatorname{Ran} f(T)$는 $S$-불변이다. 특히 $\operatorname{Ker} f(T)$와 $\operatorname{Ran} f(T)$는 $T$-불변이고, 모든 $g \in \mathbb{R}[X]$에서 $g(T)$-불변이다.
5. (행렬) $n$이 자연수이고 $A$가 $n \times n$ [[matrix|행렬]]이며 $x \in \mathbb{R}^n$이고 $Ax = \lambda x$이면 $A^k x = \lambda^k x$이고 $f(A)x = f(\lambda)\, x$이다. 따라서 $\lambda$가 $A$의 고윳값이면 $f(\lambda)$는 $f(A)$의 고윳값이고, $f(A) = O$이면 $A$의 고윳값은 모두 $f$의 근이다.
:::

:::english
Let $V$ be a vector space and $T, S \in L(V, V)$ (the space of linear maps). Eigenvalues, eigenvectors and eigenspaces are those of the entry on eigenvalues and eigenvectors, and $T$-invariant subspaces and the restriction $T|_E$ are those of the definitions in the entry on eigenvectors and invariant subspaces of self-adjoint maps. The powers $T^k$, $A^k$ are those of the entry on powers of linear maps and matrices, the evaluations $f(T)$, $f(A)$ of $f \in \mathbb{R}[X]$ are those of the entry on polynomials of linear maps and matrices, and for a real number $c$, $f(c)$ is the value of the entry on evaluation homomorphisms. $\operatorname{Ker}$ and $\operatorname{Ran}$ are those of the entry on kernel and range.

The following hold, where $f \in \mathbb{R}[X]$, $\lambda$ is a real number and $k$ is an integer $\ge 0$.

1. (Eigenvectors) If $v \in V$ and $Tv = \lambda v$, then $T^k v = \lambda^k v$ and $f(T)v = f(\lambda)\, v$. Hence
   - (i) if $v$ is an eigenvector of $T$ belonging to $\lambda$, then $v$ is an eigenvector of $f(T)$ belonging to $f(\lambda)$. In particular, if $\lambda$ is an eigenvalue of $T$, then $f(\lambda)$ is an eigenvalue of $f(T)$.
   - (ii) $\operatorname{Ker}(T - \lambda\, i_V) \subseteq \operatorname{Ker}\bigl(f(T) - f(\lambda)\, i_V\bigr)$.
2. (Polynomials giving the zero map) If $f(T) = o$ and $\lambda$ is an eigenvalue of $T$, then $f(\lambda) = 0$. That is, every eigenvalue of $T$ is a root of $f$.
3. (Invariant subspaces) Let $E$ be a $T$-invariant subspace.
   - (i) For every $k$, $E$ is $T^k$-invariant, and $E$ is $f(T)$-invariant.
   - (ii) $(T|_E)^k = T^k|_E$ and $f(T|_E) = f(T)|_E$, where the right-hand side is the restriction determined by (i).
   - (iii) For a real number $c$, a subspace $E$ of $V$ is $T$-invariant exactly when it is $(T - c\, i_V)$-invariant.
4. (Commuting maps) If $S \circ T = T \circ S$, then $\operatorname{Ker} f(T)$ and $\operatorname{Ran} f(T)$ are $S$-invariant. In particular $\operatorname{Ker} f(T)$ and $\operatorname{Ran} f(T)$ are $T$-invariant, and $g(T)$-invariant for every $g \in \mathbb{R}[X]$.
5. (Matrices) If $n$ is a natural number, $A$ is an $n \times n$ matrix, $x \in \mathbb{R}^n$ and $Ax = \lambda x$, then $A^k x = \lambda^k x$ and $f(A)x = f(\lambda)\, x$. Hence if $\lambda$ is an eigenvalue of $A$, then $f(\lambda)$ is an eigenvalue of $f(A)$, and if $f(A) = O$, then every eigenvalue of $A$ is a root of $f$.
:::

## 직관

고유벡터 $v$는 $T$가 방향을 바꾸지 않고 $\lambda$배만 하는 벡터입니다. 그런 벡터에 $T$를 $k$번 적용하면 $\lambda$배를 $k$번 하는 것이므로 $\lambda^k$배가 되고, $T$의 거듭제곱들을 계수배해 더한 $f(T)$는 $v$를 $\lambda^k$들을 같은 계수로 더한 수, 곧 $f(\lambda)$배로 보냅니다. 고유벡터 위에서는 사상 $T$를 수 $\lambda$로 바꿔 놓고 계산해도 된다는 뜻입니다. 그래서 $f(T)$가 영사상이면 고유벡터 $v \ne 0_V$에서 $f(\lambda)v = 0_V$이고 $f(\lambda) = 0$이 됩니다((2)).

(1)의 (i)의 거꾸로는 실수에서 일반적으로 성립하지 않습니다. $f(T)$의 고윳값이 모두 $T$의 고윳값 $\lambda$에서 오는 $f(\lambda)$꼴인 것은 아닙니다. 예컨대 [[eigenvalue-examples|고윳값이 없는 행렬과 대각화할 수 없는 행렬]]의 (1)의 $J$는 고윳값이 없지만, $JJ$를 계산하면 $-I_2$이고 $-I_2$는 고윳값 $-1$을 갖습니다.

불변 부분공간 $E$는 $T$가 밖으로 내보내지 않는 부분공간입니다. $T$를 몇 번 적용해도, 그 결과들을 계수배해 더해도 $E$ 안에 남으므로 $E$는 $f(T)$에도 불변이고, $E$ 안에서만 본 $T|_E$에 다항식을 대입한 것은 $f(T)$를 $E$ 안에서만 본 것과 같습니다((3)). $T$와 교환하는 사상 $S$는 $f(T)$와도 교환되므로, $f(T)$가 $0_V$로 보내는 벡터를 $S$로 옮겨도 여전히 $0_V$로 보내집니다((4)). 예컨대 $f = (X - \lambda)^m$이면 (4)에 의해 $\operatorname{Ker}\bigl((T - \lambda\, i_V)^m\bigr)$는 $T$-불변입니다([[polynomial-of-linear-map|선형사상과 행렬에 다항식 대입하기]]의 (4)의 (i)).

## 증명

:::idea
(1)은 $k$에 대한 귀납법과 $f(T)v = \sum \operatorname{coef}_k(f) T^k v$이다. (3)은 거듭제곱의 재귀 정의를 제한한 사상에서 다시 따라가고, 부분공간 $E$ 안의 유한 합이 $V$에서의 유한 합과 같다는 것을 포함 함수로 본다. (4)는 $S \circ f(T) = f(T) \circ S$에서 바로 나온다.
:::

:::hint
$T^{k+1} v = T^k(Tv) = T^k(\lambda v) = \lambda\, T^k v$이다.
:::

:::hint
(3)의 (ii)의 첫째 등식은 [[power-of-linear-map|선형사상과 행렬의 거듭제곱]]의 (1)의 둘째 문장을 $E$ 위의 사상 $T|_E$에 쓰면 된다.
:::

:::proof
**쓰는 사실.** (V…)는 [[vector-space|벡터공간]]의 공리, (B…)는 [[vector-space-basic-properties|벡터공간의 기본 성질]], (S…)는 [[subspace|부분공간]]의 조건이다. 유한 합 $\sum$은 [[finite-sums-in-a-ring|환의 유한 합]]의 것이고 "합의 (n)"은 그 항목의 (n)이며, 준동형은 [[group-homomorphism|군 준동형]]의 뜻이다. "거듭제곱의 (n)"은 [[power-of-linear-map|선형사상과 행렬의 거듭제곱]]의 (n), "대입의 (n)"은 [[polynomial-of-linear-map|선형사상과 행렬에 다항식 대입하기]]의 (n)이다. $N$은 $m > N$에서 $\operatorname{coef}_m(f) = 0$인 $0$ 이상인 정수이고 $a_m = \operatorname{coef}_m(f)$이다. [[evaluation-homomorphism|대입 준동형]]의 정의와 [[polynomials-and-polynomial-functions|다항식과 다항함수]]의 (5)의 (ii)에 의해 실수 $c$에서 $f(c) = \sum_{m=0}^{N} a_m c^m$이고 이 $c^m$은 [[power-of-a-real-number|실수의 거듭제곱]]이다. 이것을 (가)라 부른다. 실수 사이의 계산은 [[real-number-arithmetic]]의 것이다.

**1의 증명.** $T^k v = \lambda^k v$를 $k$에 대한 [[mathematical-induction|귀납법]]으로 보인다. $T^0 v = i_V v = v = 1v = \lambda^0 v$이다((V5), 실수의 거듭제곱의 정의). $T^k v = \lambda^k v$이면 거듭제곱의 정의 $T^{k+1} = T^k \circ T$와 $T^k$의 선형성([[linear-map|선형사상]]의 (T-배)), (V6)에 의해
$$
\begin{aligned}
T^{k+1} v &= T^k(\lambda v) = \lambda\, T^k v \\
&= \lambda(\lambda^k v) = (\lambda^k \lambda) v = \lambda^{k+1} v
\end{aligned}
$$
이다. 대입의 (1)에 의해 $f(T)v = \sum_{m=0}^{N} a_m T^m v = \sum_{m=0}^{N} a_m(\lambda^m v)$이고, (V6)과, 실수 $\alpha$에 $\alpha v$를 대응시키는 함수가 (V8)에 의해 덧셈군 $(\mathbb{R}, +)$에서 $(V, +)$로의 준동형이라는 것과 합의 (7), (10)에 의해 이것은 $\bigl(\sum_{m=0}^{N} a_m \lambda^m\bigr) v = f(\lambda)\, v$이다((가)).

(i) $v$가 $\lambda$에 속하는 고유벡터이면 $Tv = \lambda v$이고 $v \ne 0_V$이므로, $f(T)v = f(\lambda)v$와 고유벡터의 정의에 의해 $v$는 $f(\lambda)$에 속하는 $f(T)$의 고유벡터이다. 대입의 정의에 의해 $f(T) \in L(V, V)$이다. $\lambda$가 고윳값이면 그런 $v$가 있으므로 $f(\lambda)$는 $f(T)$의 고윳값이다.

(ii) 고윳값과 고유벡터의 (1)에 의해 $\operatorname{Ker}(T - \lambda\, i_V) = \{v : Tv = \lambda v\}$이고 $\operatorname{Ker}(f(T) - f(\lambda)\, i_V) = \{v : f(T)v = f(\lambda)v\}$이다. 앞 집합의 원소는 위에서 보인 것에 의해 뒤 집합에 속한다.

**2의 증명.** $\lambda$가 고윳값이면 $Tv = \lambda v$, $v \ne 0_V$인 $v$가 있고, (1)에 의해 $f(\lambda)v = f(T)v = o(v) = 0_V$이다. (B6)과 $v \ne 0_V$에 의해 $f(\lambda) = 0$이다. 곧 $\lambda$는 $f$의 근이다(대입 준동형의 근의 정의).

**3의 증명.** (i) $E$가 $T^k$-불변임을 $k$에 대한 귀납법으로 보인다. $T^0 = i_V$이므로 $v \in E$이면 $T^0 v = v \in E$이다. $E$가 $T^k$-불변이고 $v \in E$이면 $Tv \in E$이므로 $T^{k+1}v = T^k(Tv) \in E$이다. $E$가 $f(T)$-불변임을 보이자. [[subspace|부분공간]]의 (P1)에 의해 $E$는 제한한 연산으로 벡터공간이고, 합의 (10)에 의해 $(E, +)$는 아벨군이다. 포함 함수 $\iota : E \to V$, $\iota(w) = w$는 (P1)의 제한한 연산의 정의에 의해 덧셈군 $(E, +)$에서 $(V, +)$로의 준동형이다. $v \in E$이면 각 $a_m T^m v$는 (S3)에 의해 $E$에 속하므로, $E$에서의 합 $s = \sum_{m=0}^{N} a_m T^m v$가 정해지고 합의 (7)에 의해 $\iota(s)$는 $V$에서의 합 $\sum_{m=0}^{N} a_m T^m v$, 곧 대입의 (1)에 의해 $f(T)v$이다. 따라서 $f(T)v = s \in E$이다. 이 논법을 (다)라 부른다.

(ii) [[invariant-subspaces-of-self-adjoint-map|자기수반사상의 고유벡터와 불변 부분공간]]의 (2)에 의해 $T|_E \in L(E, E)$이고, (i)과 같은 항목의 (2)에 의해 $T^k|_E \in L(E, E)$이다. $0$ 이상인 정수 $k$에 $T^k|_E$를 대응시키는 함수 $q$는 $q(0) = i_V|_E = i_E$이고, $v \in E$이면 $q(k + 1)v = T^{k+1}v = T^k(Tv) = q(k)(T|_E v)$이므로 $q(k + 1) = q(k) \circ T|_E$이다. 거듭제곱의 (1)을 벡터공간 $E$와 $T|_E$에 쓰면 모든 $k$에서 $q(k) = (T|_E)^k$, 곧 $(T|_E)^k = T^k|_E$이다. 이제 $v \in E$이면 대입의 (1)을 $E$와 $T|_E$에 써서 $f(T|_E)v$는 $E$에서의 합 $\sum_{m=0}^{N} a_m (T|_E)^m v = \sum_{m=0}^{N} a_m T^m v$이고, (다)에 의해 이것은 $f(T)v$와 같다. 두 함수 $f(T|_E)$와 $f(T)|_E$는 정의역 $E$의 모든 점에서 값이 같으므로 같다([[function|함수]]).

(iii) $v \in E$이면 고윳값과 고유벡터의 (1)에 의해 $(T - c\, i_V)v = Tv - cv$이다. $E$가 $T$-불변이면 $Tv \in E$이고, (B2)의 뜻과 (B5)에 의해 $Tv - cv = Tv + (-1)(cv)$이므로 (S3), (S2)에 의해 이것은 $E$에 속한다. 거꾸로 $E$가 $(T - c\, i_V)$-불변이면 $Tv = (Tv - cv) + cv \in E$이다((S2), (S3), 벡터공간의 계산).

**4의 증명.** 대입의 (3)의 (iii)에 의해 $S \circ f(T) = f(T) \circ S$이다. [[kernel-and-range|핵과 상]]의 (1)에 의해 두 집합은 $V$의 부분공간이다. $v \in \operatorname{Ker} f(T)$이면 $f(T)(Sv) = S(f(T)v) = S(0_V) = 0_V$([[linear-map|선형사상]]의 (T1))이므로 $Sv \in \operatorname{Ker} f(T)$이다. $w \in \operatorname{Ran} f(T)$이면 $w = f(T)u$인 $u$가 있고 $Sw = S(f(T)u) = f(T)(Su) \in \operatorname{Ran} f(T)$이다. $S = T$는 $T$와 교환된다. $S = g(T)$이면 대입의 (3)의 (ii)에 의해 $g(T) \circ T = T \circ g(T)$이므로 $g(T)$도 $T$와 교환된다.

**5의 증명.** [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)와 거듭제곱의 (5)의 (i)에 의해 $A^k x = T_{A^k}x = (T_A)^k x$이고, $T_A x = Ax = \lambda x$이므로 (1)을 $T_A$에 쓰면 이것은 $\lambda^k x$이다. [[polynomial-of-map-and-matrices|기저·닮음·대각·삼각과 다항식 대입]]의 (2)에 의해 $f(A)x = T_{f(A)}x = f(T_A)x$이고, (1)에 의해 이것은 $f(\lambda)x$이다. $A$의 고윳값은 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 정의에 의해 $T_A$의 고윳값이고, $f(A)$의 고윳값은 $T_{f(A)} = f(T_A)$의 고윳값이므로 나머지는 (1)의 (i)과 (2)를 $T_A$에 쓴 것이다. $f(A) = O$이면 $f(T_A) = T_O = o$이다(영행렬과 벡터의 곱은 행렬과 벡터의 곱의 (4)에 의해 $Ox = (0O)x = 0(Ox) = 0$).
:::

## 예시와 반례

:::example[고유벡터에서 다항식을 대입한 사상을 계산한 예]
$A = \begin{pmatrix} 1 & 2 \\ 0 & 3 \end{pmatrix}$, $x = (1, 1)$이면 [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)에 의해 $Ax = (1 + 2, 0 + 3) = (3, 3) = 3x$입니다. $f = X^3 - 2X$이면 (5)에 의해 $f(A)x = f(3)x = (27 - 6)x = (21, 21)$입니다. 직접 계산하면 $A^2 = \begin{pmatrix} 1 & 8 \\ 0 & 9 \end{pmatrix}$, $A^3 = \begin{pmatrix} 1 & 26 \\ 0 & 27 \end{pmatrix}$이므로 $f(A) = A^3 - 2A = \begin{pmatrix} -1 & 22 \\ 0 & 21 \end{pmatrix}$이고, $f(A)x = (-1 + 22, 0 + 21) = (21, 21)$이어서 맞습니다.
:::

:::example[핵이 불변 부분공간이 되는 예]
$T : \mathbb{R}^3 \to \mathbb{R}^3$, $T(x_1, x_2, x_3) = (x_1 + x_2, x_2, 2x_3)$이라 하면 $T = T_B$, $B = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}$입니다. $f = X - 1$이면 $f(T) = T - i_{\mathbb{R}^3}$이고 $f(T)(x_1, x_2, x_3) = (x_2, 0, x_3)$이므로 $\operatorname{Ker} f(T) = \{(t, 0, 0) : t \in \mathbb{R}\}$입니다. (4)에 의해 이 핵은 $T$-불변이고, 실제로 $T(t, 0, 0) = (t, 0, 0)$입니다. $g = (X - 1)^2$이면 $g(T)(x_1, x_2, x_3) = f(T)(x_2, 0, x_3) = (0, 0, x_3)$이므로 $\operatorname{Ker} g(T) = \{(s, t, 0) : s, t \in \mathbb{R}\}$이고, 이것도 $T$-불변입니다: $T(s, t, 0) = (s + t, t, 0)$. 다만 $(0, 1, 0) \in \operatorname{Ker} g(T)$는 $T$의 고유벡터가 아닙니다($T(0, 1, 0) = (1, 1, 0)$). 불변 부분공간의 원소가 모두 고유벡터일 필요는 없습니다.
:::

:::counterexample[교환하지 않는 사상 $S$에 대하여 핵이 $S$-불변이 아닌 예]
$G = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$, $H = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$, $T = T_G$, $S = T_H$, $f = X$라 하면 $\operatorname{Ker} f(T) = \operatorname{Ker} T = \{(t, 0) : t \in \mathbb{R}\}$입니다. 그런데 $S(1, 0) = (0, 1)$은 이 핵에 속하지 않으므로 $\operatorname{Ker} f(T)$는 $S$-불변이 아닙니다. 이때 $GH = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} \ne \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix} = HG$이므로 $S \circ T \ne T \circ S$입니다. (4)의 가정 $S \circ T = T \circ S$를 빼면 결론이 깨질 수 있습니다.
:::

## 확인 질문

:::check[$T(v) = 2v$인 모든 $v$에 대하여 $f = X^2 - 4$이면 $f(T)v$는 무엇인가?]
$0_V$입니다. (1)에 의해 $f(T)v = f(2)v = (4 - 4)v = 0v = 0_V$입니다([[vector-space-basic-properties|(B3)]]). 곧 고유공간 $\operatorname{Ker}(T - 2\, i_V)$는 $\operatorname{Ker} f(T)$에 포함됩니다.
:::

:::check[$f = X^2 + 1$에 대하여 $f(T) = o$이면 $T$는 고윳값을 가질 수 있는가?]
가질 수 없습니다. (2)에 의해 고윳값 $\lambda$가 있으면 $f(\lambda) = \lambda\lambda + 1 \cdot 1 = 0$이어야 합니다([[power-of-a-real-number|실수의 거듭제곱]]의 (1)의 $\lambda^2 = \lambda\lambda$). [[eigenvalue-examples|고윳값이 없는 행렬과 대각화할 수 없는 행렬]]의 진술에서 받아들인 (Y1)에 의해 그러면 $1 = 0$이 되어 모순입니다.
:::
