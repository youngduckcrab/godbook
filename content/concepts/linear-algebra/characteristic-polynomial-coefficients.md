---
title: 특성다항식의 계수와 대각합
title_en: Coefficients of the Characteristic Polynomial and the Trace
aliases: [특성다항식의 계수, 특성다항식과 대각합, 최고차 다음의 계수, coefficients of the characteristic polynomial, trace and characteristic polynomial]
kind: theorem
field: linear-algebra
msc: ["15A18"]
level: undergrad
summary: n × n 행렬 A 의 특성다항식 p_A 에서 tⁿ⁻¹ 의 계수는 (−1)ⁿ⁻¹ tr A 이다. 그래서 p_A 의 tⁿ 의 계수, tⁿ⁻¹ 의 계수, 상수항은 (−1)ⁿ, (−1)ⁿ⁻¹ tr A, det A 이고, 특성다항식이 같은 두 행렬은 대각합과 행렬식이 같다. 증명은 첫째 열 전개와 n 에 대한 귀납으로 한다.
requires: [function, real-number-arithmetic, mathematical-induction, vector-space, vector-space-basic-properties, real-function-space, finite-sum-of-vectors, linear-map, dimension, matrix, matrix-in-bases, change-of-basis-and-similarity, diagonalizable, minor-matrix, trace, determinant, determinant-of-product, finite-product-of-reals, determinant-of-triangular-matrix, similarity-invariants, determinant-and-trace-of-linear-map, power-of-a-real-number, polynomial-function, product-of-polynomial-functions, coefficients-of-polynomial-function, determinant-of-matrix-pencil, characteristic-polynomial, eigenvalue-iff-root]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "4장 1절 Main definitions, 1.6 Trace and determinant, Theorem 1.2, p.103; 1.7 Eigenvalues of a triangular matrix, pp.103–104; 4장 1절 연습문제 1.10, 1.11, p.105; 2장 8절 Representation of a linear transformation in arbitrary bases, 연습문제 8.5, p.73; 4장 1절 연습문제 1.2, p.104; 4장 2절 Diagonalization, 2.7.1 Real eigenvalues, p.112; 1장 5절 Composition of linear transformations and matrix multiplication, 연습문제 5.7, p.24; 7장 4절 Positive definite forms, 4.1 Sylvester's criterion of positivity, p.209; 6장 1절 Upper triangular (Schur) representation of an operator, 연습문제 1.1, p.165"
    checked: original
    note: "출처 4장 1.6 의 Theorem 1.2(p.103)는 n × n 행렬 A 의 (복소) 고윳값을 중복도를 세어 λ₁, …, λₙ 이라 할 때 trace A = λ₁ + ⋯ + λₙ, det A = λ₁⋯λₙ 이라 적고, 증명을 연습문제 1.10, 1.11(p.105)로 돌린다. 연습문제 1.11 은 세 단계를 귀띔한다: det(A − λI) = (λ₁ − λ)⋯(λₙ − λ) 의 오른쪽에서 λ^{n−1} 의 계수를 구하고, det(A − λI) = (a₁,₁ − λ)⋯(aₙ,ₙ − λ) + q(λ) 이고 q 의 차수가 n − 2 이하임을 보인 뒤, 양쪽의 λ^{n−1} 의 계수를 비교하라는 것이다. 이 항목의 (2)는 그 둘째 단계에서 왼쪽의 λ^{n−1} 의 계수가 (−1)^{n−1} trace A 라는 것에 해당한다. 출처는 이 계수를 명제로 적지 않는다(책 전체 검색: 'coefficient of' 1건, 'coefficients of' 3건 가운데 λ 에 관한 1건, 'λn−1' 의 4장 2건은 모두 연습문제 1.11 이고, 'leading' 5건은 사다리꼴의 leading entry, '(−1)n' 2건은 9장 p.255 의 삼각행렬, 'sum of eigenvalues' 3건은 p.105, p.165, p.182 이다. 4장 1절 연습문제 1.1–1.11 은 처음부터 읽었다). 이 사이트는 복소 고윳값을 쓰지 않으므로 고윳값의 합과 곱으로 쓰는 꼴은 싣지 않는다. (2)의 증명은 출처가 귀띔하는 '대각성분의 곱 + 차수 n − 2 이하' 꼴을 거치지 않고, determinant-of-matrix-pencil 의 첫째 열 전개와 n 에 대한 귀납으로 한 이 사이트의 것이다. (1)은 그 귀납에 쓰려고 둔 진술이다. (3)의 상수항은 characteristic-polynomial 의 (2)이고, 출처 연습문제 1.10 의 귀띔(상수항을 비교하거나 λ = 0 을 넣어라)과 같은 발상이다. (4)와 관련해 출처 2장 연습문제 8.5(p.73)는 닮은 행렬의 대각합이 같음을 trace(XY) = trace(YX) 로 보이라고 하고, 6장 1절 연습문제 1.1(p.165)은 상삼각 표현으로 행렬식이 고윳값의 곱, 대각합이 고윳값의 합임을 다시 보이라고 한다. (5)는 출처 4장 1.3(p.101)이 연산자의 특성다항식을 아무 기저에서의 행렬의 것으로 정하는 것을 따랐다(eigenvalue-iff-root 의 p_T). 예시 '2 × 2 행렬의 특성다항식'은 출처 4장 2.7.1(p.112)이 2 × 2 행렬 (1 2; 8 1) 의 특성다항식을 행렬식으로 계산하는 것, 4장 1절 연습문제 1.2(p.104)가 2 × 2 행렬 둘의 특성다항식을 구하라고 하는 것과 같은 계산이다. 출처 7장 4.1(p.209)은 2 × 2 행렬의 두 고윳값에 대해 λ₁λ₂ = det A, λ₁ + λ₂ = trace A 를 쓴다. 예시 '단위행렬에서 두 계산을 맞춰 보는 예'의 p_{Iₙ} 은 출처 4장 1.7(pp.103–104)이 삼각행렬에 대해 적는 det(A − λI) = (a₁,₁ − λ)⋯(aₙ,ₙ − λ) 의 한 경우이다. 반례 '대각합과 행렬식이 같아도 특성다항식이 다른 3 × 3 행렬의 예'의 두 대각행렬의 특성다항식도 같은 꼴로 계산한다. 확인 질문 '$n \\ge 2$이고 $n \\times n$ 행렬 $A$의 특성다항식이 $(-1)^n t^n$이면 $\\operatorname{tr} A$와 $\\det A$는 무엇인가? $A$는 영행렬이어야 하는가?' 의 행렬 (0 1; 0 0) 은 출처 1장 연습문제 5.7(p.24)이 만들라고 하는 '영행렬이 아니고 제곱이 영행렬인 행렬'의 한 예이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인(증명 통독, 부호와 경계 n = 1 확인). 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$n$이 자연수이고 $A$가 $n \times n$ [[matrix|행렬]]이라 하자. $p_A$는 [[characteristic-polynomial|특성다항식]]이고, $t^k$의 계수, 상수항, 최고차계수는 [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]의 것이다. $\operatorname{tr}$은 [[trace|대각합]], $\det$는 [[determinant|행렬식]], $A^{(1,1)}$은 [[minor-matrix|소행렬]]이고, $(-1)^{n-1}$은 [[power-of-a-real-number|실수의 거듭제곱]]이다.

1. (대각합의 첫 항 떼기) $n \ge 2$이면 $\operatorname{tr} A = a_{1,1} + \operatorname{tr} A^{(1,1)}$이다.
2. (최고차 다음의 계수) $p_A$의 $t^{n-1}$의 계수는 $(-1)^{n-1} \operatorname{tr} A$이다. $n = 1$이면 $t^{n-1}$은 $t^0$이므로, 이것은 $p_A$의 상수항이 $a_{1,1} = \operatorname{tr} A$라는 것이다.
3. (세 계수) $p_A$의 $t^n$의 계수는 $(-1)^n$이고, $t^{n-1}$의 계수는 $(-1)^{n-1} \operatorname{tr} A$이며, 상수항은 $\det A$이다. $n = 1$이면 뒤의 두 계수는 같은 $t^0$의 계수이고, 실제로 $\operatorname{tr} A = \det A = a_{1,1}$이다.
4. (특성다항식이 같은 두 행렬) $B$가 $n \times n$ 행렬이고 $p_A = p_B$이면 $\operatorname{tr} A = \operatorname{tr} B$이고 $\det A = \det B$이다. 특히 $A$와 $B$가 [[change-of-basis-and-similarity|닮았으면]] [[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 (4)에 의해 $p_A = p_B$이므로 대각합과 행렬식이 같다. 이것은 [[similarity-invariants|닮은 행렬의 행렬식과 대각합]]의 (1)과 같은 결론이다.
5. (선형사상) $V$가 유한차원 [[vector-space|벡터공간]]이고 $\dim V = n$이며 $T : V \to V$가 [[linear-map|선형사상]]이면, $p_T$의 $t^{n-1}$의 계수는 $(-1)^{n-1} \operatorname{tr} T$이다. 여기서 $p_T$는 고윳값과 특성다항식의 근에서, $\operatorname{tr} T$는 [[determinant-and-trace-of-linear-map|선형사상의 행렬식과 대각합]]에서 정한 것이다.
:::

:::english
Let $n$ be a natural number and let $A$ be an $n \times n$ matrix. $p_A$ is the characteristic polynomial, and the coefficient of $t^k$, the constant term and the leading coefficient are those of the entry on coefficients and degree of polynomial functions. $\operatorname{tr}$ is the trace, $\det$ is the determinant, $A^{(1,1)}$ is a minor matrix, and $(-1)^{n-1}$ is a power of a real number.

1. (Splitting off the first term of the trace) If $n \ge 2$, then $\operatorname{tr} A = a_{1,1} + \operatorname{tr} A^{(1,1)}$.
2. (The coefficient after the leading one) The coefficient of $t^{n-1}$ in $p_A$ is $(-1)^{n-1} \operatorname{tr} A$. If $n = 1$, then $t^{n-1}$ is $t^0$, so this says that the constant term of $p_A$ is $a_{1,1} = \operatorname{tr} A$.
3. (Three coefficients) The coefficient of $t^n$ in $p_A$ is $(-1)^n$, the coefficient of $t^{n-1}$ is $(-1)^{n-1} \operatorname{tr} A$, and the constant term is $\det A$. If $n = 1$, the last two are the same coefficient of $t^0$, and indeed $\operatorname{tr} A = \det A = a_{1,1}$.
4. (Two matrices with the same characteristic polynomial) If $B$ is an $n \times n$ matrix and $p_A = p_B$, then $\operatorname{tr} A = \operatorname{tr} B$ and $\det A = \det B$. In particular, if $A$ and $B$ are similar, then $p_A = p_B$ by (4) of the entry on eigenvalues as roots of the characteristic polynomial, so they have the same trace and the same determinant. This is the same conclusion as (1) of the entry on the determinant and trace of similar matrices.
5. (Linear maps) If $V$ is a finite-dimensional vector space with $\dim V = n$ and $T : V \to V$ is a linear map, then the coefficient of $t^{n-1}$ in $p_T$ is $(-1)^{n-1} \operatorname{tr} T$. Here $p_T$ is the one defined in the entry on eigenvalues as roots of the characteristic polynomial, and $\operatorname{tr} T$ is the one defined in the entry on the determinant and trace of a linear map.
:::

## 직관

[[characteristic-polynomial|특성다항식]]은 $p_A$의 양 끝, 곧 $t^n$의 계수 $(-1)^n$과 상수항 $\det A$를 알려 주었습니다. 이 항목은 그 바로 안쪽의 계수, $t^{n-1}$의 계수가 대각성분의 합으로 정해진다는 것을 보입니다. 이 셋 말고 다른 계수들, 곧 $n \ge 3$일 때 $t^{n-2}, \dots, t^1$의 계수는 이 항목이 말하지 않습니다.

왜 대각성분만 남는지는 삼각행렬에서 잘 보입니다. 위삼각행렬이면 $p_A(x) = (a_{1,1} - x)(a_{2,2} - x) \cdots (a_{n,n} - x)$입니다. 상자 $n$개가 있고 $k$번째 상자에는 쪽지 두 장, 수 $a_{k,k}$와 $-x$가 들어 있다고 합시다. 상자마다 쪽지를 한 장씩 꺼내 곱한 것을 꺼내는 방법 전체에 걸쳐 더하면 이 곱을 펼친 것이 됩니다. $x^{n-1}$이 나오는 것은 정확히 한 상자에서만 수 $a_{k,k}$를 꺼내고 나머지 $n - 1$개의 상자에서 $-x$를 꺼낼 때입니다. 그런 방법은 $k$마다 하나씩이고 각각 $(-1)^{n-1} a_{k,k} x^{n-1}$을 주므로, 모두 모으면 $(-1)^{n-1}(a_{1,1} + \cdots + a_{n,n})$입니다. 이 비유가 맞는 것은 삼각행렬의 곱 꼴까지이고, 일반 행렬의 행렬식은 이런 곱 하나가 아닙니다.

일반 행렬에서는 대각선 밖의 성분도 행렬식에 들어옵니다. 그러나 첫째 열로 전개하면, 대각선 밖의 성분 $a_{j,1}$($j \ge 2$)에 곱해지는 소행렬식은 $x$가 들어 있는 대각성분 둘, 곧 $(1, 1)$과 $(j, j)$ 자리를 잃은 행렬의 행렬식이라 $\mathcal{P}_{n-2}$에 듭니다(영함수일 수도 있습니다). 그래서 $t^{n-1}$의 계수에는 $(a_{1,1} - x)$와 한 크기 작은 특성다항식의 곱만 남고, 크기에 대한 귀납이 됩니다. 이것이 증명의 줄거리입니다.

$n = 2$에서는 $p_A = (\det A)\,t^0 - (\operatorname{tr} A)\,t + t^2$이 되어 특성다항식이 대각합과 행렬식만으로 정해집니다. $n = 3$이면 그렇지 않을 수 있습니다. 아래 반례가 대각합과 행렬식이 같지만 특성다항식이 다른 두 $3 \times 3$ 행렬을 보입니다. 따라서 (4)의 거꾸로, 곧 "대각합과 행렬식이 같으면 특성다항식이 같다"는 $n = 3$에서 성립하지 않을 수 있습니다.

## 증명

:::idea
첫째 열 전개를 함수의 등식으로 쓰면, $t^{n-1}$의 계수에 이바지하는 것은 첫 항 $(a_{1,1} t^0 - t)\,p_{A^{(1,1)}}$뿐이다. 그 계수를 한 크기 작은 행렬의 대각합으로 적고 $n$에 대한 귀납으로 마친다.
:::

:::hint
$C = -I_n$이라 하자. $j \ge 2$이면 $C^{(j,1)}$의 첫째 행은 어떻게 되는가? 그러면 $j$번째 항은 어느 $\mathcal{P}_m$에 드는가?
:::

:::hint
다항함수 $g$에 대하여 $(a_{1,1} t^0 - t)g$의 $t^{n-1}$의 계수를 $g$의 $t^{n-1}$, $t^{n-2}$의 계수로 나타내 보라. $g$가 $(n-1) \times (n-1)$ 행렬의 특성다항식이면 두 계수는 무엇인가?
:::

:::proof
(V…)는 [[vector-space]]의 공리, (B…)는 [[vector-space-basic-properties]]의 것을 $\mathbb{R}^{\mathbb{R}}$과 $M_{n \times n}$에 쓴 것이고, (K…)는 [[real-number-arithmetic]]의 것이다. $\mathbb{R}^{\mathbb{R}}$, $t^k$, $t - c$, $\mathcal{P}_m$은 [[polynomial-function|다항함수]]의 것이고, 함수의 곱은 [[product-of-polynomial-functions|다항함수의 곱]]의 것이다. 두 함수는 모든 $x$에서 값이 같으면 같다([[function|함수]]의 같음). "계수"는 다항함수의 계수와 차수의 (2)의 계수이고, 같은 함수의 $t^k$의 계수는 같다.

**(1)의 증명.** $n \ge 2$라 하자. $d$를 $k$번째 항이 $a_{k,k}$인 길이 $n$인 실수의 열이라 하면, 대각합의 정의에 의해 $\operatorname{tr} A = d_1 + \cdots + d_n$이다. $n = (n - 1) + 1$이고 $n - 1 \ge 1$이므로, [[finite-sum-of-vectors|벡터의 유한 합]]의 (H6)을 $k = 1$에 쓰면, 첫째 항을 지운 길이 $n - 1$인 열 $c$($c_i = d_{i+1} = a_{i+1,i+1}$, $1 \le i \le n - 1$)에 대하여 $\operatorname{tr} A = (c_1 + \cdots + c_{n-1}) + a_{1,1}$이다. [[minor-matrix|소행렬]]의 (2)를 $l = i$에 쓰면 $(A^{(1,1)})_{i,i} = a_{i+1,i+1} = c_i$이므로, $c$는 $(n-1) \times (n-1)$ 행렬 $A^{(1,1)}$의 대각성분의 열과 같은 열이다. 같은 열의 합은 같으므로 $c_1 + \cdots + c_{n-1} = \operatorname{tr} A^{(1,1)}$이고, (K1)에 의해 $\operatorname{tr} A = a_{1,1} + \operatorname{tr} A^{(1,1)}$이다.

**(2)의 증명.** 자연수 $n$마다 $S_n$을 "모든 $n \times n$ 행렬 $A$에서 $p_A$의 $t^{n-1}$의 계수는 $(-1)^{n-1} \operatorname{tr} A$이다"로 두고 [[mathematical-induction|수학적 귀납법]](시작점 $1$)으로 증명한다.

기초 단계. $n = 1$이라 하자. $t^0$의 계수는 상수항이고, 특성다항식의 (2)에 의해 상수항은 $\det A$이며, [[determinant|행렬식]]의 (2)에 의해 $\det A = a_{1,1}$이다. [[trace|대각합]]의 (5)에 의해 $\operatorname{tr} A = a_{1,1}$이고, 거듭제곱의 정의에 의해 $(-1)^0 = 1$이므로 (K4)에 의해 $(-1)^0 \operatorname{tr} A = a_{1,1}$이다. 따라서 $S_1$이 참이다.

귀납 단계. 자연수 $m$에 대하여 $S_m$이 참이라 하고, $n = m + 1$, $A$를 $n \times n$ 행렬이라 하자. $n \ge 2$이다. $A' = A^{(1,1)}$로 두면 $A'$은 $(n-1) \times (n-1)$ 행렬이고 $n - 1 = m$이다. $C = -I_n$으로 두자. [[matrix|행렬]]의 (1)과 (6)에 의해 모든 $j$, $l$에서 $c_{j,l} = -(I_n)_{j,l}$이므로, $c_{1,1} = -1$이고 $j \ge 2$이면 $c_{j,1} = -0 = 0$이다((K9)의 $(-1)0 = 0$과 $(-1)a = -a$).

특성다항식의 (1)에 의해 $p_A$는 [[determinant-of-matrix-pencil|성분이 일차식인 행렬의 행렬식]]의 $B = A$, $C = -I_n$인 함수 $\varphi$이다. 그 항목의 (2)에 의해 $j \in \{1, \dots, n\}$마다 $x$에서의 값이 $\det(A^{(j,1)} + xC^{(j,1)})$인 함수 $\varphi_j$가 있고, $j$번째 항이
$$
f_j = (-1)^{j+1}(a_{j,1} t^0 + c_{j,1} t)\varphi_j
$$
인 길이 $n$인 $\mathbb{R}^{\mathbb{R}}$의 열에 대하여 $p_A = f_1 + \cdots + f_n$이다.

(가) $j = 1$인 항. 소행렬의 (2)에 의해 $i$, $l \in \{1, \dots, n-1\}$에서 $(C^{(1,1)})_{i,l} = c_{i+1,l+1} = -(I_n)_{i+1,l+1}$이다. $i + 1 = l + 1$인 것은 정확히 $i = l$일 때이므로, 이 값은 $i = l$이면 $-1$, $i \ne l$이면 $0$이고, 행렬의 (1)과 (6)에 의해 이것은 $-I_{n-1}$의 $(i, l)$ 성분이다. 행렬의 (2)에 의해 $C^{(1,1)} = -I_{n-1}$이다. 따라서 실수 $x$에서 $\varphi_1(x) = \det(A' + x(-I_{n-1}))$이고, 특성다항식의 (1)의 첫 문장을 $A'$에 쓰면 $A' + x(-I_{n-1}) = A' - xI_{n-1}$이므로 $\varphi_1(x) = p_{A'}(x)$이다. 곧 $\varphi_1 = p_{A'}$이다. 이 함수를 $g$로 쓰자.

특성다항식의 (1)을 $A'$에 쓰면 $g \in \mathcal{P}_{n-1}$이고 $\deg g = n - 1$이며 최고차계수는 $(-1)^{n-1}$이다. 최고차계수는 $t^{\deg g}$의 계수이므로 $g$의 $t^{n-1}$의 계수는 $(-1)^{n-1}$이다. 귀납 가정 $S_{n-1}$($= S_m$)에 의해 $g$의 $t^{n-2}$의 계수는 $(-1)^{n-2} \operatorname{tr} A'$이다.

$h = a_{1,1} t^0 + c_{1,1} t = a_{1,1} t^0 + (-1)t$로 두자. 실수 $x$에서 $h(x) = a_{1,1} - x$이고, $t - a_{1,1}$의 값은 $x - a_{1,1}$이므로 $\bigl((-1)(t - a_{1,1})\bigr)(x) = (-1)(x - a_{1,1}) = a_{1,1} - x$이다((K3), (K9), (K12)). 따라서 $h = (-1)(t - a_{1,1})$이다. 거듭제곱의 (1)과 (K12)의 (iii)에 의해 $(-1)^{1+1} = (-1)(-1) = 1$이므로, (V5)와 다항함수의 곱의 (1)의 $(\alpha f)g = \alpha(fg)$에 의해
$$
\begin{aligned}
f_1 &= 1 \cdot (hg) = hg \\
&= (-1)\bigl((t - a_{1,1})g\bigr)
\end{aligned}
$$
이다. 다항함수의 계수와 차수의 (3)의 (iii)을 $c = a_{1,1}$과 $k = n - 1 \ge 1$에 쓰면 $(t - a_{1,1})g$의 $t^{n-1}$의 계수는
$$
(-1)^{n-2} \operatorname{tr} A' - a_{1,1}(-1)^{n-1}
$$
이고, 같은 항목의 (3)의 (i)을 $\alpha = -1$에 쓰면 $f_1$의 $t^{n-1}$의 계수는 이것의 $-1$배, 곧 (K9), (K12)에 의해 $a_{1,1}(-1)^{n-1} - (-1)^{n-2} \operatorname{tr} A'$이다. $n - 2 \ge 0$이므로 거듭제곱의 (1)에 의해 $(-1)^{n-1} = (-1)^{n-2}(-1)$이고, (K9)와 (K1)에 의해 $-(-1)^{n-2} = (-1)^{n-1}$이다. 따라서 (K3)과 (1)에 의해 $f_1$의 $t^{n-1}$의 계수는
$$
\begin{aligned}
&(-1)^{n-1} a_{1,1} + (-1)^{n-1} \operatorname{tr} A' \\
&\quad = (-1)^{n-1}(a_{1,1} + \operatorname{tr} A') \\
&\quad = (-1)^{n-1} \operatorname{tr} A
\end{aligned}
$$
이다. 또 $h$는 $0$부터 번호가 붙은 계수의 열 $a_{1,1}, -1$로 쓴 $\mathcal{P}_1$의 원소이므로, 다항함수의 곱의 (4)에 의해 $hg \in \mathcal{P}_{1 + (n-1)} = \mathcal{P}_n$이고, 다항함수의 (1)에 의해 $f_1 \in \mathcal{P}_n$이다.

(나) $j \ge 2$인 항. 소행렬의 (2)에 의해 $l \in \{1, \dots, n-1\}$에서 $(C^{(j,1)})_{1,l} = c_{s_j(1), l+1}$이고, $1 < j$이므로 소행렬의 정의에 의해 $s_j(1) = 1$이다. $l + 1 \ge 2$이므로 $l + 1 \ne 1$이고, 따라서 $c_{1,l+1} = -(I_n)_{1,l+1} = -0 = 0$이다. 곧 $(n-1) \times (n-1)$ 행렬 $C^{(j,1)}$의 첫째 행의 성분은 모두 $0$이다. 성분이 일차식인 행렬의 행렬식의 (2)에 의해 $\varphi_j$는 $(n-1) \times (n-1)$ 행렬 $A^{(j,1)}$, $C^{(j,1)}$로 만든 그 항목의 함수이므로, 그 항목의 (4)를 크기 $n - 1$에 쓰면 $\varphi_j \in \mathcal{P}_{n-2}$이다. 또 $c_{j,1} = 0$이므로 실수 $x$에서 $(a_{j,1} t^0 + 0\,t)(x) = a_{j,1} \cdot 1 + 0 \cdot x = a_{j,1}$((K4), (K9))이고, 따라서 $a_{j,1} t^0 + 0\,t = a_{j,1} t^0$이다. 다항함수의 곱의 (1)의 $(\alpha f)g = \alpha(fg)$, $t^0 f = f$와 (V6)에 의해
$$
\begin{aligned}
f_j &= (-1)^{j+1}\bigl(a_{j,1}(t^0 \varphi_j)\bigr) \\
&= \bigl((-1)^{j+1} a_{j,1}\bigr)\varphi_j
\end{aligned}
$$
이다. 다항함수의 (1)에 의해 $f_j \in \mathcal{P}_{n-2}$이고, $0 \le n - 2 \le n$이므로 다항함수의 (2)에 의해 $f_j \in \mathcal{P}_n$이다. $n - 1 > n - 2$이므로 다항함수의 계수와 차수의 (2)의 (iii)에 의해 $f_j$의 $t^{n-1}$의 계수는 $0$이다.

(다) 모으기. (가)와 (나)에 의해 $f_1, \dots, f_n$의 모든 항이 $\mathcal{P}_n$에 든다. 성분이 일차식인 행렬의 행렬식의 (1)에 의해 $p_A = f_1 + \cdots + f_n$의 $t^{n-1}$의 계수는 $j$번째 항이 $f_j$의 $t^{n-1}$의 계수인 길이 $n$인 실수의 열의 합이다. 이 열은 $j \ge 2$인 모든 항이 $0$이고, 길이는 $(n - 1) + 1$이므로 벡터의 유한 합의 (H7)을 $k = 1$에 쓰면 그 합은 첫째 항 $(-1)^{n-1} \operatorname{tr} A$이다. 따라서 $S_n$, 곧 $S_{m+1}$이 참이다.

귀납법의 원리에 의해 모든 자연수 $n$에서 $S_n$이 참이다. $n = 1$인 경우의 둘째 문장은 기초 단계에서 보였다.

**(3)의 증명.** 특성다항식의 (1)에 의해 $\deg p_A = n$이고 최고차계수는 $(-1)^n$이며, 최고차계수는 $t^{\deg p_A}$의 계수이므로 $t^n$의 계수는 $(-1)^n$이다. $t^{n-1}$의 계수는 (2)이고, 상수항은 특성다항식의 (2)에 의해 $\det A$이다. $n = 1$이면 $t^{n-1} = t^0$이므로 뒤의 두 계수는 같은 계수이고, 대각합의 (5)와 행렬식의 (2)에 의해 $\operatorname{tr} A = a_{1,1} = \det A$이다.

**(4)의 증명.** $p_A = p_B$이면 두 함수의 $t^{n-1}$의 계수가 같으므로 (2)에 의해 $(-1)^{n-1} \operatorname{tr} A = (-1)^{n-1} \operatorname{tr} B$이다. 거듭제곱의 (5)에 의해 $(-1)^{n-1}$은 $1$이거나 $-1$이고, 어느 쪽이든 $0$이 아니므로((K4), (K7)) (K11)에 의해 $\operatorname{tr} A = \operatorname{tr} B$이다. 두 함수의 상수항도 같으므로 특성다항식의 (2)에 의해 $\det A = \det B$이다. $A$와 $B$가 닮았으면 고윳값과 특성다항식의 근의 (4)에 의해 $p_A = p_B$이므로 앞의 결론이 성립한다.

**(5)의 증명.** [[dimension|유한차원과 차원]]의 (1)과 (2)에 의해 $V$에는 길이 $n$인 기저 $\mathcal{B}$가 있고, $M = [T]_{\mathcal{B}}$는 [[matrix-in-bases|기저에 관한 선형사상의 행렬]]의 $n \times n$ 행렬이다. 고윳값과 특성다항식의 근에서 정한 대로 $p_T = p_M$이고, 선형사상의 행렬식과 대각합에서 정한 대로 $\operatorname{tr} T = \operatorname{tr} M$이다. (2)를 $M$에 쓰면 $p_T$의 $t^{n-1}$의 계수는 $(-1)^{n-1} \operatorname{tr} M = (-1)^{n-1} \operatorname{tr} T$이다. $\blacksquare$
:::

## 예시와 반례

:::example[2 × 2 행렬의 특성다항식]
$n = 2$라 합시다. 특성다항식의 (1)에 의해 $p_A \in \mathcal{P}_2$이므로 $p_A = c_0 t^0 + c_1 t^1 + c_2 t^2$인 실수 $c_0$, $c_1$, $c_2$가 있고, [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]의 (2)의 (iii)에 의해 $c_k$는 $p_A$의 $t^k$의 계수입니다. (3)에 의해 그 계수는 상수항 $\det A$, $t$의 계수 $(-1)^1 \operatorname{tr} A = -\operatorname{tr} A$, $t^2$의 계수 $(-1)^2 = 1$이므로([[power-of-a-real-number|실수의 거듭제곱]]의 (5))

$$
p_A = (\det A)\,t^0 - (\operatorname{tr} A)\,t + t^2
$$

이고, 모든 실수 $x$에서 $p_A(x) = x^2 - (\operatorname{tr} A)x + \det A$입니다.

예를 들어 $A = \begin{pmatrix} 3 & 1 \\ 2 & 5 \end{pmatrix}$이면 $\operatorname{tr} A = 8$이고 [[determinant|행렬식]]의 (4)에 의해 $\det A = 3 \cdot 5 - 2 \cdot 1 = 13$이므로 $p_A(x) = x^2 - 8x + 13$입니다. 직접 계산과 맞춰 보면, $A - xI_2 = \begin{pmatrix} 3 - x & 1 \\ 2 & 5 - x \end{pmatrix}$이고 행렬식의 (4)에 의해 $\det(A - xI_2) = (3 - x)(5 - x) - 2 \cdot 1 = x^2 - 8x + 13$입니다.
:::

:::example[단위행렬에서 두 계산을 맞춰 보는 예]
$n$이 자연수일 때 $I_n$의 특성다항식을 두 길로 계산해 $t^{n-1}$의 계수를 맞춰 봅시다.

(2)로 계산하면, [[trace|대각합]]의 (4)에 의해 $\operatorname{tr} I_n = n$이므로 $t^{n-1}$의 계수는 $(-1)^{n-1} n$입니다.

직접 계산하면, 실수 $x$에서 [[vector-space-basic-properties|(B11)]]과 [[vector-space|(V5)]]에 의해 $I_n - xI_n = (1 - x)I_n$이고, [[determinant-of-product|곱의 행렬식]]의 (4)에 의해 $p_{I_n}(x) = (1 - x)^n$입니다. [[real-number-arithmetic|(K9)]]와 (K12)의 (iv)에 의해 $1 - x = (-1)(x - 1)$이므로 [[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (iii)에 의해 $(1 - x)^n = (-1)^n (x - 1)^n$이고, [[product-of-polynomial-functions|다항함수의 곱]]에서 정한 거듭제곱의 값에 의해 이것은 함수 $(-1)^n (t - 1)^n$의 $x$에서의 값입니다. 따라서 $p_{I_n} = (-1)^n (t - 1)^n$입니다. 다항함수의 계수와 차수의 (9)를 $k = n$, $c = 1$에 쓰면 $(t - 1)^n$의 $t^{n-1}$의 계수는 $-n$이고, 같은 항목의 (3)의 (i)에 의해 $p_{I_n}$의 $t^{n-1}$의 계수는 $(-1)^n(-n) = (-1)^{n+1} n$입니다. 거듭제곱의 (2)의 (i)과 (5)에 의해 $(-1)^{n+1} = (-1)^{n-1}(-1)^2 = (-1)^{n-1}$이므로 두 계산이 맞습니다.

$n = 1$이면 $p_{I_1}(x) = 1 - x$이고, 상수항 $1$은 $\operatorname{tr} I_1 = \det I_1 = 1$입니다. $n = 2$이면 $p_{I_2}(x) = x^2 - 2x + 1$이고, $t$의 계수 $-2$는 $-\operatorname{tr} I_2$입니다.
:::

:::counterexample[대각합과 행렬식이 같아도 특성다항식이 다른 3 × 3 행렬의 예]
$A = \operatorname{diag}(0, 1, 5)$, $B = \operatorname{diag}(0, 2, 4)$라 합시다([[diagonalizable|대각화 가능]]의 대각행렬 기호). $\operatorname{tr} A = 0 + 1 + 5 = 6 = 0 + 2 + 4 = \operatorname{tr} B$입니다. 실수 $x$에서 $A - xI_3 = \operatorname{diag}(-x, 1 - x, 5 - x)$이고 $B - xI_3 = \operatorname{diag}(-x, 2 - x, 4 - x)$이므로, [[determinant-of-triangular-matrix|삼각행렬의 행렬식]]의 (5)와 [[finite-product-of-reals|실수의 유한 곱]]의 (1)에 의해

$$
\begin{aligned}
p_A(x) &= (-x)(1 - x)(5 - x), \\
p_B(x) &= (-x)(2 - x)(4 - x)
\end{aligned}
$$

입니다. $x = 0$을 넣으면 $\det A = p_A(0) = 0$이고 $\det B = p_B(0) = 0$이어서 행렬식도 같습니다. 그러나 $x = 1$을 넣으면 $p_A(1) = (-1) \cdot 0 \cdot 4 = 0$이고 $p_B(1) = (-1) \cdot 1 \cdot 3 = -3$이므로 $p_A \ne p_B$입니다.

(3)에 의해 두 특성다항식은 $t^3$의 계수 $-1$, $t^2$의 계수 $(-1)^2 \cdot 6 = 6$, 상수항 $0$이 같습니다. 다른 것은 (3)이 말하지 않는 $t$의 계수입니다. 실제로 펼치면 $p_A(x) = -x^3 + 6x^2 - 5x$, $p_B(x) = -x^3 + 6x^2 - 8x$입니다.
:::

## 확인 질문

:::check[$3 \times 3$ 행렬 $A$의 특성다항식에서 $t^2$의 계수가 $4$이면 $\operatorname{tr} A$는 무엇인가?]
$4$입니다. (2)에 의해 $t^2$의 계수는 $(-1)^{3-1} \operatorname{tr} A$이고, [[power-of-a-real-number|실수의 거듭제곱]]의 (5)에 의해 $(-1)^2 = 1$이므로 $\operatorname{tr} A = 4$입니다.
:::

:::check[$n \ge 2$이고 $n \times n$ 행렬 $A$의 특성다항식이 $(-1)^n t^n$이면 $\operatorname{tr} A$와 $\det A$는 무엇인가? $A$는 영행렬이어야 하는가?]
둘 다 $0$입니다. $(-1)^n t^n$은 $t^n$의 자리만 $(-1)^n$이고 나머지 자리가 모두 $0$인 $0$부터 번호가 붙은 계수의 열로 쓴 $\mathcal{P}_n$의 원소이므로, [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]의 (2)의 (iii)에 의해 $t^{n-1}$의 계수와 상수항은 $0$입니다($n \ge 2$이므로 $n - 1$과 $0$은 $n$이 아닙니다). (2)에 의해 $(-1)^{n-1} \operatorname{tr} A = 0$이고 $(-1)^{n-1} \ne 0$이므로 [[real-number-arithmetic|(K10)]]에 의해 $\operatorname{tr} A = 0$이며, (3)에 의해 $\det A = 0$입니다.

영행렬일 필요는 없습니다. $n = 2$이고 $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$이면 [[determinant|행렬식]]의 (4)에 의해 $p_A(x) = \det\begin{pmatrix} -x & 1 \\ 0 & -x \end{pmatrix} = (-x)(-x) - 0 \cdot 1 = x^2$이므로 $p_A = t^2 = (-1)^2 t^2$입니다.
:::
