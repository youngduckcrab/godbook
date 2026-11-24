---
title: 행렬식과 가역성
title_en: Determinant and Invertibility
aliases: [가역 판정, 행렬식이 0 인 행렬, 역행렬의 행렬식, invertible iff nonzero determinant, determinant of the inverse]
kind: theorem
field: linear-algebra
msc: ["15A15"]
level: undergrad
summary: 정사각행렬 A 가 가역인 것은 정확히 det A ≠ 0 일 때이고, 그때 det(A⁻¹) = (det A)⁻¹ 이다. det A = 0 인 것은 정확히 A 의 열이 일차종속일 때, 동차 연립일차방정식 Ax = 0 이 영벡터가 아닌 해를 가질 때, rank A < n 일 때이다.
requires: [real-number-arithmetic, well-ordering-principle, subspace, linear-independence, injective-surjective-bijective, kernel-and-range, injective-iff-trivial-kernel, matrix, matrix-vector-product, invertible-matrix, one-sided-inverse-of-square-matrix, rank-of-a-matrix, system-of-linear-equations, elementary-matrix, row-equivalence, echelon-form, row-reduction, invertible-matrix-and-row-reduction, determinant]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "3장 3절 Constructing the determinant, 3.2 Properties of determinant deduced from the basic properties, Proposition 3.1 의 4, p.79; 3.4 Computing the determinant, Proposition 3.3, p.82; 3.6 Summary of properties of determinant 의 6–8, p.84; 6절 Minors and rank, Theorem 6.1, p.96; 7절 연습문제 7.1 i), j), p.97; 4장 1절 Main definitions, 1.2, p.100"
    checked: original
    note: "(1)은 출처 Proposition 3.3(p.82) 'det A = 0 if and only if A is not invertible' 과 같은 내용이다. 출처는 열이 일차종속이면 det A = 0 이라는 Proposition 3.1 의 4(p.79, 증명 pp.79–80)와, 3.4절의 열 소거 알고리즘에서 가역이면 삼각행렬에 닿아 행렬식이 대각성분의 곱에 열 연산의 보정을 곱한 것이 된다는 설명을 합쳐 이것을 얻는다. 이 항목은 행렬식 항목의 (7)의 (c)(기약 사다리꼴이 단위행렬일 때만 0 이 아니다)와 선형대수 강의의 가역 판정으로 증명하고 삼각행렬을 쓰지 않는다. (2)는 출처 연습문제 7.1 j)(p.97)의 참·거짓 문항 'If A is an invertible matrix, then det(A⁻¹) = 1/det(A)' 의 내용이다. 출처는 4장 1.3(p.101)에서 닮은 행렬의 행렬식이 같다는 것을 보이며 det S⁻¹ = 1/det S 를 근거로 쓴다. 이 항목은 곱의 행렬식을 쓰지 않고 행 소거의 기본행렬의 곱이 역행렬이라는 것으로 증명한다. (3)의 (a)의 '일차종속이면 det A = 0' 쪽은 출처 Proposition 3.1 의 4 와 3.6절의 6(p.84)에 있다. (3)의 (b)는 출처 4장 1.2(p.100)에서 고윳값을 구하며 쓰는 'A − λI has a non-trivial nullspace if and only if it is not invertible' 과 Proposition 3.3 을 이은 것과 같은 꼴이다. (3)의 (c)는 출처 6절 Theorem 6.1(p.96, 영행렬이 아닌 행렬의 계수는 0 이 아닌 차수 k 의 minor 가 있는 가장 큰 k)을 n × n 행렬에 쓰면, 차수 n 의 minor 는 det A 하나뿐이므로 나오는 내용이다. 연습문제 7.1 i)(p.97)는 (1)을 참·거짓으로 묻는다. 반례 '영행도 같은 두 행도 없지만 행렬식이 0 인 3 × 3 행렬'과 같은 종류의 행렬로, 출처 연습문제 3.3(p.85)의 둘째 행렬 (1 2 3; 4 5 6; 7 8 9) 도 영행과 같은 두 행이 없고 행렬식이 0 이다. 확인 질문 'det A = −2 인 가역 3 × 3 행렬 A 에 대하여 det(A⁻¹) 은 무엇인가?' 는 출처 연습문제 7.1 j)(p.97)와 같은 성질을 쓴다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 거짓이던 직관 2건, 단원 글의 상태 문장 1건, 메모의 부정 주장 2건, 근거 없던 작은 사실 3건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$n$이 자연수이고 $A$가 $n \times n$ [[matrix|행렬]]이라 하자. $\det A$는 [[determinant|행렬식]]이고, 가역과 역행렬 $A^{-1}$은 [[invertible-matrix|가역행렬과 역행렬]]에서, 기본행렬과 그 곱은 [[elementary-matrix|기본행렬]]과 [[row-equivalence|행 동치]] 항목에서 정한 것이다. $\mathbf{a}_1, \dots, \mathbf{a}_n$은 $A$의 열을 차례로 늘어놓은 $\mathbb{R}^n$의 벡터의 열이다.

1. (가역 판정) $A$가 가역인 것은 정확히 $\det A \ne 0$일 때이다. 곧 $A$가 가역이 아닌 것은 정확히 $\det A = 0$일 때이다.
2. (역행렬의 행렬식) $A$가 가역이면 $\det(A^{-1}) = (\det A)^{-1}$이다. 특히 $\det(A^{-1}) \ne 0$이다.
3. (행렬식이 $0$인 것과 같은 조건) 다음 세 조건은 각각 $\det A = 0$과 같다. 곧 $\det A = 0$이면 셋이 모두 성립하고, 셋 가운데 어느 하나가 성립하면 $\det A = 0$이다.
   - (a) 벡터의 열 $\mathbf{a}_1, \dots, \mathbf{a}_n$은 [[linear-independence|일차종속]]이다.
   - (b) $Ax = 0$이고 $x \ne 0$인 $x \in \mathbb{R}^n$이 있다. 곧 [[system-of-linear-equations|동차 연립일차방정식]] $Ax = 0$이 영벡터가 아닌 해를 갖는다.
   - (c) $\operatorname{rank} A < n$이다([[rank-of-a-matrix|행렬의 계수]]).
4. (기본행렬) $n \times n$ 기본행렬과 기본행렬의 곱 $E$는 가역이고 $\det E \ne 0$이다. 이것은 (1)과 맞는다.
5. ($n = 1$) $n = 1$이면 $A$가 가역인 것은 정확히 $a_{1,1} \ne 0$일 때이고, 그때 $\det(A^{-1}) = a_{1,1}^{-1}$이다.
:::

:::english
Let $n$ be a natural number and $A$ an $n \times n$ matrix. $\det A$ is the determinant; invertibility and the inverse $A^{-1}$ are as in the entry on invertible matrices, and elementary matrices and their products are as in the entries on elementary matrices and row equivalence. $\mathbf{a}_1, \dots, \mathbf{a}_n$ is the sequence of vectors in $\mathbb{R}^n$ listing the columns of $A$ in order.

1. (Invertibility test) $A$ is invertible exactly when $\det A \ne 0$. That is, $A$ is not invertible exactly when $\det A = 0$.
2. (Determinant of the inverse) If $A$ is invertible, then $\det(A^{-1}) = (\det A)^{-1}$. In particular $\det(A^{-1}) \ne 0$.
3. (Conditions equivalent to a zero determinant) Each of the following three conditions is equivalent to $\det A = 0$. That is, if $\det A = 0$ then all three hold, and if any one of them holds then $\det A = 0$.
   - (a) The sequence $\mathbf{a}_1, \dots, \mathbf{a}_n$ is linearly dependent.
   - (b) There is $x \in \mathbb{R}^n$ with $Ax = 0$ and $x \ne 0$. That is, the homogeneous system $Ax = 0$ has a solution other than the zero vector.
   - (c) $\operatorname{rank} A < n$.
4. (Elementary matrices) Every $n \times n$ elementary matrix and every product $E$ of elementary matrices is invertible and has $\det E \ne 0$. This agrees with (1).
5. ($n = 1$) If $n = 1$, then $A$ is invertible exactly when $a_{1,1} \ne 0$, and in that case $\det(A^{-1}) = a_{1,1}^{-1}$.
:::

## 직관

행 소거는 $A$에 기본행렬을 하나씩 곱해 기약 사다리꼴 $EA$에 닿는 과정이고, 기본행렬을 곱할 때마다 행렬식은 $0$이 아닌 수배가 됩니다. 물건값을 다른 나라 돈으로 바꿔 적으면 숫자는 달라져도 공짜인 물건은 어느 돈으로 적어도 $0$인 것처럼, $0$이 아닌 수를 곱하는 일은 값이 $0$인지 아닌지를 바꾸지 않습니다. 환율에 해당하는 것이 기본행렬이 행렬식에 곱하는 $0$이 아닌 수입니다. 그래서 $\det A$가 $0$인지는 끝의 기약 사다리꼴 $EA$만 보면 압니다.

정사각인 기약 사다리꼴은 단위행렬이거나 마지막 행이 영행이고, 행렬식은 앞의 것에서 $1$, 뒤의 것에서 $0$입니다. 한편 선형대수 강의에서 $A$가 가역인 것은 정확히 행 소거가 단위행렬에 닿을 때라는 것을 증명했습니다. 두 사실을 이으면 (1)이 나옵니다. 가역일 때는 끝까지 간 기본행렬의 곱 $E$가 바로 $A^{-1}$이므로, $\det A = (\det E)^{-1}$에서 (2)도 함께 얻습니다.

(3)의 세 조건은 선형대수 강의의 진술들을 이으면 "가역이 아니다"와 같아지는 것들입니다. (1)이 "가역이 아니다"를 "$\det A = 0$"으로 바꾸어 주므로, 행렬식 하나를 계산해 열의 일차종속, 동차 연립일차방정식의 해, 계수를 한꺼번에 판정할 수 있습니다.

## 증명

:::idea
$EA$가 기약 사다리꼴인 기본행렬의 곱 $E$를 잡으면, [[determinant|행렬식]]의 (7)의 (c)에 의해 $\det A \ne 0$은 정확히 $EA = I_n$일 때이고, [[invertible-matrix-and-row-reduction|가역행렬과 행 소거]]의 (1)에 의해 $A$가 가역인 것도 정확히 $EA = I_n$일 때이다.
:::

:::hint
$EA = I_n$이면 $A$와 $I_n$은 행 동치입니다. 거꾸로 $A$가 가역이면 $A$와 행 동치인 기약 사다리꼴은 무엇뿐입니까?
:::

:::hint
(2)에서는 $EA = I_n$이 $E$가 $A$의 왼쪽 역이라는 뜻임을 쓰세요. (3)은 [[one-sided-inverse-of-square-matrix|정사각행렬의 한쪽 역]]과 [[rank-of-a-matrix|행렬의 계수]]의 진술을 (1)에 잇기만 하면 됩니다.
:::

:::proof
행렬식 항목의 번호는 "행렬식의 (n)"으로, [[invertible-matrix-and-row-reduction|가역행렬과 행 소거]]의 번호는 "행 소거 판정의 (n)"으로 인용한다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 번호로 인용한다.

**준비.** [[row-reduction|행 소거]]의 (2)에 의해 $EA$가 [[echelon-form|기약 사다리꼴]]인 $n \times n$ 기본행렬의 곱 $E$가 있다. 이 $E$를 끝까지 쓴다. 행렬식의 (7)의 (c)에 의해 $\det A \ne 0$인 것은 정확히 $EA = I_n$일 때이고, 그때 $\det A = (\det E)^{-1}$이다. 또 행렬식의 (6)에 의해 $\det E \ne 0$이다.

**(1)의 증명.** $A$가 가역인 것이 정확히 $EA = I_n$일 때임을 보이면, 준비의 첫 사실과 이어 (1)이 나온다.

$EA = I_n$이라 하자. [[row-equivalence|행 동치]]의 정의($B = EA$인 기본행렬의 곱 $E$가 있을 때 $A$와 $B$는 행 동치)에서 $B = I_n$으로 두면 $A$와 $I_n$은 행 동치이다. 행 소거 판정의 (1)의 (ii)에서 (i)로 가는 방향에 의해 $A$는 가역이다.

거꾸로 $A$가 가역이라 하자. $EA$는 $A$와 행 동치인 기약 사다리꼴이다. 행 소거 판정의 (1)에 의해 $A$가 가역이면 $A$와 행 동치인 기약 사다리꼴은 $I_n$뿐이므로 $EA = I_n$이다.

뒤의 문장은 앞의 문장의 양쪽을 부정한 것이다.

**(2)의 증명.** $A$가 가역이라 하자. (1)의 증명에서 본 것처럼 $EA = I_n$이므로, $n \times n$ 행렬 $E$는 [[invertible-matrix|가역행렬과 역행렬]]의 정의에서 $A$의 왼쪽 역이다. 그 항목의 (1)에 의해 가역인 $A$의 왼쪽 역은 $A^{-1}$ 하나뿐이므로 $E = A^{-1}$이다. 준비에 의해 $\det E \ne 0$이고 $\det A = (\det E)^{-1}$이므로, (K8)의 (iii)에서 $(\det E)(\det E)^{-1} = 1$이고 (K1)에 의해 $(\det A)(\det E) = 1$이다. (1)에 의해 $\det A \ne 0$이고, (K8)의 (iii)에 의해 $(\det A)x = 1$인 실수 $x$는 $(\det A)^{-1}$ 하나뿐이므로 $\det(A^{-1}) = \det E = (\det A)^{-1}$이다. $\det E \ne 0$이므로 $\det(A^{-1}) \ne 0$이다.

**(3)의 증명.** (1)에 의해 $\det A = 0$인 것은 정확히 $A$가 가역이 아닐 때이므로, 세 조건이 각각 "$A$가 가역이 아니다"와 같음을 보인다.

(a) [[one-sided-inverse-of-square-matrix|정사각행렬의 한쪽 역]]의 (가)와 (바)가 같으므로, $A$가 가역인 것은 정확히 $\mathbf{a}_1, \dots, \mathbf{a}_n$이 일차독립일 때이다. 양쪽을 부정하면, $A$가 가역이 아닌 것은 정확히 이 열이 일차독립이 아닐 때, 곧 [[linear-independence|일차종속]]의 정의에 의해 일차종속일 때이다.

(b) $T_A : \mathbb{R}^n \to \mathbb{R}^n$을 [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)의 선형사상이라 하면 모든 $x$에서 $T_A x = Ax$이다. 정사각행렬의 한쪽 역의 (가)와 (라)가 같으므로 $A$가 가역인 것은 정확히 $T_A$가 [[injective-surjective-bijective|단사]]일 때이고, [[injective-iff-trivial-kernel|단사인 선형사상과 핵]]의 (1)에 의해 이것은 정확히 $\operatorname{Ker} T_A = \{0\}$일 때이다. [[kernel-and-range|핵과 상]]의 (1)에 의해 $\operatorname{Ker} T_A$는 $\mathbb{R}^n$의 부분공간이므로 [[subspace|부분공간]]의 (S1)에 의해 $0 \in \operatorname{Ker} T_A$이다. 따라서 $\operatorname{Ker} T_A \ne \{0\}$인 것은 정확히 $\operatorname{Ker} T_A$에 $0$이 아닌 원소가 있을 때이고, $\operatorname{Ker} T_A = \{x \in \mathbb{R}^n : Ax = 0\}$이므로([[system-of-linear-equations|연립일차방정식]]의 (2)) 정확히 $Ax = 0$이고 $x \ne 0$인 $x$가 있을 때이다. 앞의 "정확히 ~일 때"들의 양쪽을 부정해 이으면, $A$가 가역이 아닌 것은 정확히 (b)가 성립할 때이다.

(c) [[rank-of-a-matrix|행렬의 계수]]의 (5)에 의해 $A$가 가역인 것은 정확히 $\operatorname{rank} A = n$일 때이므로, $A$가 가역이 아닌 것은 정확히 $\operatorname{rank} A \ne n$일 때이다. 그 항목의 (1)에 의해 $\operatorname{rank} A \le n$, 곧 $\operatorname{rank} A < n$이거나 $\operatorname{rank} A = n$이다. 따라서 $\operatorname{rank} A \ne n$이면 $\operatorname{rank} A < n$이다. 거꾸로 $\operatorname{rank} A < n$이면 [[well-ordering-principle|정렬 원리]] 항목의 (Z5)에 의해 $\operatorname{rank} A = n$은 성립하지 않는다. 그러므로 $\operatorname{rank} A \ne n$인 것은 정확히 $\operatorname{rank} A < n$일 때이다.

**(4)의 증명.** [[elementary-matrix|기본행렬]]의 (3)에 의해 모든 기본행렬은 가역이고, [[row-equivalence|행 동치]]의 (3)에 의해 기본행렬의 곱도 가역이다. 행렬식의 (5)에 의해 기본행렬 $G$에서 $\det G \ne 0$이고, 행렬식의 (6)에 의해 기본행렬의 곱 $E$에서 $\det E \ne 0$이다. 가역이고 행렬식이 $0$이 아니므로 (1)의 두 쪽이 함께 성립한다.

**(5)의 증명.** 행렬식의 (2)에 의해 $n = 1$이면 $\det A = a_{1,1}$이다. (1)에 의해 $A$가 가역인 것은 정확히 $a_{1,1} \ne 0$일 때이고, 그때 (2)에 의해 $\det(A^{-1}) = a_{1,1}^{-1}$이다. $\blacksquare$
:::

## 예시와 반례

:::example[행렬식으로 판정한 2 × 2 행렬과 그 역행렬]
$A = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}$이면 [[determinant|행렬식]]의 (4)에 의해 $\det A = 2 \cdot 3 - 1 \cdot 1 = 5 \ne 0$이므로 (1)에 의해 $A$는 가역입니다. 실제로

$$
C = \begin{pmatrix} 3 \cdot 5^{-1} & -5^{-1} \\ -5^{-1} & 2 \cdot 5^{-1} \end{pmatrix}
$$

이라 하면 $AC$의 성분은 $2 \cdot 3 \cdot 5^{-1} - 5^{-1} = 5 \cdot 5^{-1} = 1$, $-2 \cdot 5^{-1} + 2 \cdot 5^{-1} = 0$, $3 \cdot 5^{-1} - 3 \cdot 5^{-1} = 0$, $-5^{-1} + 6 \cdot 5^{-1} = 1$이므로 $AC = I_2$이고, [[one-sided-inverse-of-square-matrix|정사각행렬의 한쪽 역]]의 (1)에 의해 $C = A^{-1}$입니다. 행렬식의 (4)로 직접 계산하면

$$
\begin{aligned}
\det C &= (3 \cdot 5^{-1})(2 \cdot 5^{-1}) \\
&\quad - (-5^{-1})(-5^{-1}) \\
&= 6 \cdot 25^{-1} - 25^{-1} \\
&= 5 \cdot 25^{-1} = 5^{-1}
\end{aligned}
$$

이고, 이것은 (2)가 주는 $(\det A)^{-1} = 5^{-1}$과 같습니다. 여기서 $25^{-1} = 5^{-1} \cdot 5^{-1}$은 [[real-number-arithmetic|(K12)]]의 (vi)입니다.
:::

:::counterexample[영행도 같은 두 행도 없지만 행렬식이 0 인 3 × 3 행렬]
$$
M = \begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & 1 \\ 1 & 1 & 3 \end{pmatrix}
$$

은 영행도 없고 같은 두 행도 없습니다. 그래도 [[determinant|행렬식]]의 (4)에 의해

$$
\begin{aligned}
\det M &= 1 \cdot (1 \cdot 3 - 1 \cdot 1) \\
&\quad - 0 \cdot (0 \cdot 3 - 1 \cdot 2) \\
&\quad + 1 \cdot (0 \cdot 1 - 1 \cdot 2) \\
&= 2 - 0 - 2 = 0
\end{aligned}
$$

입니다. 셋째 행은 첫째 행과 둘째 행의 합입니다. (3)이 말하는 세 조건도 실제로 성립합니다. 셋째 열은 첫째 열의 $2$배와 둘째 열의 합이므로 $x = (2, 1, -1)$이라 하면 $Mx = 2\mathbf{m}_1 + \mathbf{m}_2 - \mathbf{m}_3 = 0$이고 $x \ne 0$입니다. 따라서 열은 일차종속이고, (3)의 (c)에 의해 $\operatorname{rank} M < 3$입니다. 행렬식이 $0$이 되는 까닭이 영행이나 같은 두 행처럼 눈에 띄는 모양으로 드러나지 않을 수 있습니다.
:::

## 확인 질문

:::check[$A = \begin{pmatrix} 2 & -3 \\ -4 & 6 \end{pmatrix}$일 때 $Ax = 0$은 영벡터가 아닌 해를 갖는가?]
갖습니다. $\det A = 2 \cdot 6 - (-4)(-3) = 12 - 12 = 0$이므로 (3)의 (b)에 의해 영벡터가 아닌 해가 있습니다. 예를 들어 $x = (3, 2)$이면 $2 \cdot 3 + (-3) \cdot 2 = 0$이고 $(-4) \cdot 3 + 6 \cdot 2 = 0$입니다.
:::

:::check[$\det A = -2$인 가역 $3 \times 3$ 행렬 $A$에 대하여 $\det(A^{-1})$은 무엇인가?]
(2)에 의해 $\det(A^{-1}) = (-2)^{-1}$입니다. $(-2)(-2^{-1}) = 2 \cdot 2^{-1} = 1$이므로 [[real-number-arithmetic|(K8)]]의 (iii)의 유일성에 의해 $(-2)^{-1} = -2^{-1}$입니다.
:::
