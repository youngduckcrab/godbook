---
title: 2 × 2 행렬의 실고윳값
title_en: Real Eigenvalues of a 2 × 2 Matrix
aliases: [판별식, 2 × 2 판별식, 2 × 2 대칭행렬의 대각화, discriminant, real eigenvalues of 2 by 2 matrices, symmetric 2 by 2 matrix]
kind: proposition
field: linear-algebra
msc: ["15A18"]
level: undergrad
summary: 2 × 2 행렬 A 의 판별식 disc A = (tr A)² − 4 det A 가 음수이면 고윳값이 없고, 0 이면 고윳값은 (tr A)/2 하나이며, 양수이면 서로 다른 두 고윳값 (tr A ± √disc A)/2 를 갖고 대각화 가능이다. 대칭인 2 × 2 행렬은 판별식이 0 이상이라 늘 고윳값을 갖고 대각화 가능이다.
requires: [function, real-number-arithmetic, real-order-axioms, order-properties-of-reals, square-root-exists, power-of-a-real-number, matrix, matrix-vector-product, change-of-basis-and-similarity, eigenvalue-and-eigenvector, eigenvectors-of-distinct-eigenvalues, diagonalizable, similarity-invariants-examples, determinant, trace, polynomial-function, product-of-polynomial-functions, characteristic-polynomial, eigenvalue-iff-root, characteristic-polynomial-2x2]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "4장 2절 Diagonalization, 2.7 Some example 의 2.7.1 Real eigenvalues, p.112, 2.7.2 Complex eigenvalues, p.113; 4장 1절 1.4 Complex vs real spaces, p.102; 4장 1절 연습문제 1.1 c), p.104; 6장 2절 Spectral theorem for self-adjoint and normal operators, Theorem 2.1 과 그 뒤의 Remark, p.166"
    checked: original
    note: "출처는 고윳값을 복소수 범위에서 찾는다는 약속을 4장 1.4(p.102)에 두고, 실벡터공간의 선형사상은 실고윳값이 없을 수 있다며 회전 R_α 를 예로 든다. 출처 2.7.1(p.112)의 (1 2; 8 1) 은 특성다항식 (1 − λ)² − 16 의 두 실근 5, −3 을, 2.7.2(p.113)의 (1 2; −2 1) 은 (1 − λ)² + 2² 의 복소근 1 ± 2i 를 갖는다. 두 예의 특성다항식은 이미 (x − h)² ∓ (양수) 꼴로 적혀 있고, (1)의 완전제곱 꼴은 이것을 일반 2 × 2 에 한 것과 같은 발상이다. 판별식이라는 이름과 (2)–(4)의 판정은 출처에서 찾지 못했다(검색어 discriminant, quadratic formula 0건, λ2 − 의 3건은 n 차 곱 꼴). (5)와 관련해 출처 6장 2절 Theorem 2.1(p.166)은 내적공간의 자기수반 연산자의 고윳값이 모두 실수이고 고유벡터로 된 정규직교기저가 있다고 하고, 이어지는 Remark(p.166)는 실행렬만 다루는 책에서는 이것을 대칭행렬의 스펙트럼 정리라 부른다고 적는다. (5)는 실대칭인 2 × 2 행렬에서 고윳값이 있고 대각화 가능이라는 부분만을 내적 없이 판별식으로 증명한 것이다(정규직교성은 주장하지 않는다). 예시 '서로 다른 두 실고윳값을 갖는 대칭행렬의 예'는 출처 2.7.1 과 같은 일(특성다항식의 두 실근과 고유벡터)을 대칭행렬에 한 것이다. 출처 4장 연습문제 1.1 c)(p.104)는 실고윳값이 없는 실정사각행렬이 있는지를 묻는다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인(새로 쓴 증명 통독, 예의 수치 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$A$가 $2 \times 2$ [[matrix|행렬]]이고 $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$이라 하자. $\operatorname{tr}$은 [[trace|대각합]], $\det$는 [[determinant|행렬식]], $p_A$는 [[characteristic-polynomial|특성다항식]]이고, 고윳값은 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 것, 대각화 가능은 [[diagonalizable|대각화 가능]]의 것, $\sqrt{\ }$는 [[square-root-exists|제곱근의 존재]]의 것이다. $2^{-1}$, $4^{-1}$은 [[real-number-arithmetic|실수의 계산 법칙]]의 역수이다. 실수 $\operatorname{disc} A = (\operatorname{tr} A)^2 - 4\det A$를 $A$의 **판별식**(discriminant)이라 한다. $h = 2^{-1}\operatorname{tr} A$로 둔다.

1. (완전제곱 꼴) $\operatorname{disc} A = (a - d)^2 + 4bc$이고, 모든 실수 $x$에서
   $$
   p_A(x) = (x - h)^2 - 4^{-1}\operatorname{disc} A
   $$
   이다.
2. (판별식이 음수) $\operatorname{disc} A < 0$이면 모든 실수 $x$에서 $0 < p_A(x)$이고 $A$에는 고윳값이 없다. 따라서 $A$에 고윳값이 있는 것은 정확히 $0 \le \operatorname{disc} A$일 때이다.
3. (판별식이 $0$) $\operatorname{disc} A = 0$이면 $p_A = (t - h)^2$이고 $A$의 고윳값은 정확히 $h$ 하나이다.
4. (판별식이 양수) $0 < \operatorname{disc} A$이면 $\lambda_1 = 2^{-1}(\operatorname{tr} A + \sqrt{\operatorname{disc} A})$, $\lambda_2 = 2^{-1}(\operatorname{tr} A - \sqrt{\operatorname{disc} A})$에 대하여 $\lambda_1 \ne \lambda_2$이고 $p_A = (t - \lambda_1)(t - \lambda_2)$이며, $A$의 고윳값은 정확히 $\lambda_1$과 $\lambda_2$이다. 이때 $A$는 대각화 가능이다.
5. (대칭인 $2 \times 2$ 행렬) $b = c$이면 $\operatorname{disc} A = (a - d)^2 + 4b^2$이고 $0 \le \operatorname{disc} A$이다. 따라서 $A$는 고윳값을 갖고 대각화 가능이다. 또 이때 $\operatorname{disc} A = 0$인 것은 정확히 $a = d$이고 $b = 0$일 때, 곧 $A = aI_2$일 때이다.
:::

:::english
Let $A$ be a $2 \times 2$ matrix, $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$. $\operatorname{tr}$ is the trace, $\det$ the determinant, $p_A$ the characteristic polynomial; eigenvalues are those of the entry on eigenvalues and eigenvectors, diagonalizability is that of the entry on diagonalizable matrices, and $\sqrt{\ }$ is that of the entry on the existence of square roots. $2^{-1}$ and $4^{-1}$ are reciprocals in the sense of the arithmetic of real numbers. The real number $\operatorname{disc} A = (\operatorname{tr} A)^2 - 4\det A$ is called the **discriminant** of $A$. Put $h = 2^{-1}\operatorname{tr} A$.

1. (Completed square) $\operatorname{disc} A = (a - d)^2 + 4bc$, and for every real number $x$,
   $$
   p_A(x) = (x - h)^2 - 4^{-1}\operatorname{disc} A.
   $$
2. (Negative discriminant) If $\operatorname{disc} A < 0$, then $0 < p_A(x)$ for every real number $x$, and $A$ has no eigenvalue. Hence $A$ has an eigenvalue exactly when $0 \le \operatorname{disc} A$.
3. (Zero discriminant) If $\operatorname{disc} A = 0$, then $p_A = (t - h)^2$ and the eigenvalues of $A$ are exactly the single number $h$.
4. (Positive discriminant) If $0 < \operatorname{disc} A$, then for $\lambda_1 = 2^{-1}(\operatorname{tr} A + \sqrt{\operatorname{disc} A})$ and $\lambda_2 = 2^{-1}(\operatorname{tr} A - \sqrt{\operatorname{disc} A})$ we have $\lambda_1 \ne \lambda_2$ and $p_A = (t - \lambda_1)(t - \lambda_2)$, and the eigenvalues of $A$ are exactly $\lambda_1$ and $\lambda_2$. In this case $A$ is diagonalizable.
5. (Symmetric $2 \times 2$ matrices) If $b = c$, then $\operatorname{disc} A = (a - d)^2 + 4b^2$ and $0 \le \operatorname{disc} A$. Hence $A$ has an eigenvalue and is diagonalizable. Moreover, in this case $\operatorname{disc} A = 0$ exactly when $a = d$ and $b = 0$, that is, when $A = aI_2$.
:::

## 직관

$2 \times 2$ 행렬의 특성다항식은 [[characteristic-polynomial-2x2|2 × 2 행렬의 특성다항식]]의 (1)에 의해 이차식 $x^2 - (\operatorname{tr} A)x + \det A$의 값을 갖습니다. 중학교에서 배우는 완전제곱처럼 이것을 $(x - h)^2$에서 수 하나를 뺀 꼴로 고치면, 근이 있는지는 빼는 수 $4^{-1}\operatorname{disc} A$의 부호로 정해집니다. 제곱은 음수가 아니므로 빼는 수가 음수이면 값이 늘 양수이고, $0$이면 근이 $h$ 하나, 양수이면 $h$에서 같은 거리만큼 떨어진 근이 둘입니다.

과녁의 중심 $h$에서 $\sqrt{\operatorname{disc} A}$의 절반만큼 떨어진 두 자리가 고윳값이라고 생각할 수 있습니다. 판별식이 음수이면 그 거리가 실수로 정해지지 않아 과녁에 맞는 자리가 없습니다. 비유와 다른 점은, 판별식이 $0$이어서 두 자리가 겹칠 때 대각화 가능인지는 판별식만으로 정해지지 않는다는 것입니다. 같은 $\operatorname{disc} A = 0$에서 $aI_2$는 대각화 가능이고 아래 반례의 행렬은 그렇지 않습니다. 그래서 (3)은 대각화에 대해 아무 말도 하지 않습니다.

(5)는 대칭인 $2 \times 2$ 행렬에서 $bc = b^2 \ge 0$이라 판별식이 음수가 될 수 없다는 것입니다. 판별식이 $0$인 대칭행렬은 $aI_2$뿐이고, 이것은 이미 대각행렬입니다. 크기가 $3$ 이상인 대칭행렬에 대한 같은 결론(대칭행렬의 스펙트럼 정리)은 이 강의에서 다루지 않습니다.

## 증명

:::idea
(1)은 이차식을 완전제곱으로 고치는 계산이다. 고윳값이 정확히 특성다항식의 근이라는 것을 쓰고, 판별식의 부호에 따라 근을 센다. 서로 다른 고윳값이 둘이면 대각화 가능이다.
:::

:::hint
$(x - h)^2 = x^2 - (\operatorname{tr} A)x + 4^{-1}(\operatorname{tr} A)^2$이다. $\det A$와 맞추려면 무엇을 더하고 빼야 하는가?
:::

:::hint
판별식이 양수이면 $u = 2^{-1}\sqrt{\operatorname{disc} A}$로 두고 $(x - h)^2 - uu$를 두 일차식의 곱으로 쓴다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 것이고, 순서의 번호는 [[order-properties-of-reals|실수의 순서의 성질]]의 것이다. 실수의 제곱 $y^2 = yy$는 [[power-of-a-real-number|실수의 거듭제곱]]의 (1)의 것이다. $s = \operatorname{tr} A$, $q = \det A$로 쓰면 [[characteristic-polynomial-2x2|2 × 2 행렬의 특성다항식]]의 (1)에 의해 $s = a + d$, $q = ad - bc$이고 모든 $x$에서 $p_A(x) = x^2 - sx + q$이다. $2 \cdot 2^{-1} = 1$, $2^{-1} 2^{-1} = 4^{-1}$((K12)의 (vi)과 (K7)), $4^{-1} \cdot 4 = 1$을 쓴다. 순서의 (10)에 의해 $0 < 2$, $0 < 4$이고, (6)의 (i)에 의해 $0 < 2^{-1}$, $0 < 4^{-1}$이다.

**(1)의 증명.** (K1)–(K4), (K9), (K12)에 의해 $s^2 - 4q = (a + d)^2 - 4(ad - bc) = a^2 + 2ad + d^2 - 4ad + 4bc = (a - d)^2 + 4bc$이다. 또
$$
\begin{aligned}
(x - h)^2 &= x^2 - 2hx + h^2 \\
&= x^2 - sx + 4^{-1}s^2
\end{aligned}
$$
이므로 $(x - h)^2 - 4^{-1}(s^2 - 4q) = x^2 - sx + 4^{-1}s^2 - 4^{-1}s^2 + q = x^2 - sx + q = p_A(x)$이다.

**(2)의 증명.** $\operatorname{disc} A < 0$이면 순서의 (3)의 (ii)에 의해 $0 < -\operatorname{disc} A$이고, (4)의 (i)과 (K9)에 의해 $0 = 4^{-1} \cdot 0 < 4^{-1}(-\operatorname{disc} A)$이다. (5)의 (iii)에 의해 $0 \le (x - h)^2$이므로 (2)의 (iv)에 의해 $0 = 0 + 0 < (x - h)^2 + 4^{-1}(-\operatorname{disc} A) = p_A(x)$이다((1)과 (K12)). 순서의 (1)의 (i)에 의해 $p_A(x) \ne 0$이므로 $p_A$에는 근이 없고, [[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 (1)에 의해 $A$에는 고윳값이 없다. 거꾸로 $0 \le \operatorname{disc} A$이면 순서의 [[real-order-axioms|(W1)]]에 의해 $\operatorname{disc} A = 0$이거나 $0 < \operatorname{disc} A$이고, 아래 (3), (4)에 의해 $A$는 고윳값을 갖는다.

**(3)의 증명.** $\operatorname{disc} A = 0$이면 (1)에 의해 모든 $x$에서 $p_A(x) = (x - h)^2$이고, 이것은 [[product-of-polynomial-functions|다항함수의 곱]]의 정의에 의해 $(t - h)^2$의 $x$에서의 값이다([[polynomial-function|다항함수]]의 (3)). 따라서 $p_A = (t - h)^2$이다. (K10)에 의해 $(\lambda - h)(\lambda - h) = 0$인 것은 정확히 $\lambda - h = 0$, 곧 ((K12)의 (v)) $\lambda = h$일 때이므로, 고윳값과 근의 항목의 (1)에 의해 고윳값은 정확히 $h$이다.

**(4)의 증명.** $0 < \operatorname{disc} A$이므로 제곱근의 존재의 (1)에 의해 $r = \sqrt{\operatorname{disc} A}$는 $0 < r$이고 $rr = \operatorname{disc} A$이다. $u = 2^{-1}r$로 두면 $uu = 4^{-1}\operatorname{disc} A$이고, (K12)에 의해 모든 $x$에서
$$
\begin{aligned}
p_A(x) &= (x - h)^2 - uu \\
&= (x - (h + u))(x - (h - u))
\end{aligned}
$$
이다. $h + u = 2^{-1}(s + r) = \lambda_1$이고 $h - u = 2^{-1}(s - r) = \lambda_2$이다((K3)). 따라서 (3)과 같이 $p_A = (t - \lambda_1)(t - \lambda_2)$이다. $\lambda_1 - \lambda_2 = 2u = r$이고 $0 < r$이므로 $\lambda_1 - \lambda_2 \ne 0$, 곧 $\lambda_1 \ne \lambda_2$이다((K12)의 (v)). 2 × 2 행렬의 특성다항식의 (4)에 의해 $A$의 고윳값은 정확히 $\lambda_1$과 $\lambda_2$이다. 길이 $2$인 열 $\lambda_1, \lambda_2$는 서로 다르고 모든 항이 $A$의 고윳값이므로, [[eigenvectors-of-distinct-eigenvalues|서로 다른 고윳값의 고유벡터]]의 (5)에 의해 $A$는 대각화 가능이다.

**(5)의 증명.** $b = c$이면 (1)에 의해 $\operatorname{disc} A = (a - d)^2 + 4bb = (a - d)(a - d) + (2b)(2b)$이다((K1), (K2)). 순서의 (5)의 (iii)에 의해 두 항은 $0$ 이상이고, (2)의 (iii)에 의해 $0 = 0 + 0 \le \operatorname{disc} A$이다. 그러므로 (W1)에 의해 $0 < \operatorname{disc} A$이거나 $\operatorname{disc} A = 0$이다.

$0 < \operatorname{disc} A$이면 (4)에 의해 $A$는 고윳값을 갖고 대각화 가능이다. $\operatorname{disc} A = 0$이면 순서의 (5)의 (iv)에 의해 $a - d = 0$이고 $2b = 0$이므로, (K12)의 (v)와 (K10)($2 \ne 0$)에 의해 $a = d$이고 $b = 0$이며 $c = b = 0$이다. 그러면 [[matrix|행렬]]의 (2), (6)과 (1)에 의해 $A = aI_2 = \operatorname{diag}(a, a)$는 대각행렬이다. [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]의 (4)에 의해 닮음은 반사적이므로 $A$는 대각행렬 $A$ 자신과 닮았고, 대각화 가능이다. 또 (3)에 의해 고윳값 $a$를 갖는다. 거꾸로 $a = d$이고 $b = 0$이면 $\operatorname{disc} A = 0 \cdot 0 + 0 \cdot 0 = 0$이다. $\blacksquare$
:::

## 예시와 반례

:::example[서로 다른 두 실고윳값을 갖는 대칭행렬의 예]
$A = \begin{pmatrix} 2 & 3 \\ 3 & -6 \end{pmatrix}$이면 $\operatorname{tr} A = -4$, $\det A = -12 - 9 = -21$이므로 $\operatorname{disc} A = 16 + 84 = 100$이고, (1)의 식으로도 $(2 + 6)^2 + 4 \cdot 9 = 64 + 36 = 100$입니다. $0 \le 10$이고 $10 \cdot 10 = 100$이므로 [[square-root-exists|제곱근의 존재]]의 (1)의 유일성에 의해 $\sqrt{100} = 10$입니다. (4)에 의해 고윳값은 $2^{-1}(-4 + 10) = 3$과 $2^{-1}(-4 - 10) = -7$이고 $A$는 대각화 가능입니다. 실제로 $v = (3, 1)$, $w = (1, -3) \in \mathbb{R}^2$이라 하면 [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)에 의해 $Av = (6 + 3, 9 - 6) = 3v$이고 $Aw = (2 - 9, 3 + 18) = (-7)w$입니다.
:::

:::example[판별식이 음수인 예]
$A = \begin{pmatrix} 1 & -2 \\ 1 & -1 \end{pmatrix}$이면 $\operatorname{tr} A = 0$, $\det A = -1 + 2 = 1$이므로 $\operatorname{disc} A = 0 - 4 = -4$입니다. (1)의 식으로도 $(1 + 1)^2 + 4 \cdot (-2) \cdot 1 = 4 - 8 = -4$입니다. (2)에 의해 모든 $x$에서 $p_A(x) = x^2 + 1 > 0$이고 $A$에는 고윳값이 없습니다.
:::

:::counterexample[판별식이 0 이고 대각화 가능이 아닌 예]
$A = \begin{pmatrix} 1 & -1 \\ 1 & 3 \end{pmatrix}$이면 $\operatorname{tr} A = 4$, $\det A = 3 + 1 = 4$이므로 $\operatorname{disc} A = 16 - 16 = 0$이고, (3)에 의해 고윳값은 $2$ 하나입니다. $A$가 대각화 가능이라면 대각행렬 $D$와 닮았을 것이고, [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]의 (5)에 의해 $D$의 고윳값도 $2$뿐이므로 [[diagonalizable|대각화 가능]]의 (4)에 의해 $D$의 대각성분은 모두 $2$, 곧 $D = 2I_2$입니다. 그러면 [[similarity-invariants-examples|행렬식과 대각합이 같지만 닮지 않은 행렬의 예]]의 (1)에 의해 $A = 2I_2$여야 하는데 그렇지 않습니다. 따라서 $A$는 대각화 가능이 아닙니다. 같은 판별식 $0$을 갖는 $2I_2$는 대각화 가능이므로, (3)만으로는 대각화 가능인지 정할 수 없습니다.
:::

## 확인 질문

:::check[$2 \times 2$ 행렬 $A$에서 $bc > 0$이면 대각성분과 상관없이 $A$는 대각화 가능인가?]
그렇습니다. (1)에 의해 $\operatorname{disc} A = (a - d)^2 + 4bc$이고, $0 \le (a - d)^2$이며 $0 < 4bc$이므로 [[order-properties-of-reals|실수의 순서의 성질]]의 (2)의 (iv)에 의해 $0 < \operatorname{disc} A$입니다. (4)에 의해 $A$는 서로 다른 두 고윳값을 갖고 대각화 가능입니다.
:::

:::check[실수 $c$에 대하여 $A = cI_2$의 판별식과 고윳값은 무엇인가?]
$\operatorname{tr} A = 2c$, $\det A = cc$이므로 $\operatorname{disc} A = 4cc - 4cc = 0$이고, (3)에 의해 고윳값은 $h = 2^{-1} \cdot 2c = c$ 하나입니다. $cI_2$는 이미 대각행렬이므로 대각화 가능입니다. 이것은 (5)의 $b = 0$, $a = d$인 경우이기도 합니다.
:::
