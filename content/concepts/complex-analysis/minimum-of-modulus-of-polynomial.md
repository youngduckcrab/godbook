---
title: 복소 다항함수의 절댓값의 최솟값
title_en: Minimum of the Modulus of a Complex Polynomial
aliases: [다항함수의 절댓값의 최솟값, 절댓값의 최솟값의 존재, minimum modulus of a polynomial, existence of a minimum of the modulus]
kind: theorem
field: complex-analysis
msc: ["30C10", "12D10"]
level: undergrad
summary: 모든 복소 다항함수 p 에 대하여 |p| 는 ℂ 위에서 최솟값을 갖는다. 곧 모든 z 에서 |p(z₀)| ≤ |p(z)| 인 z₀ 이 있다. 차수가 1 이상이면 |z| ≥ R 에서 |p(z)| > |p(0)| 인 R 이 있어, 최솟값을 갖는 점은 모두 |z| < R 에 있다. 증명은 하한을 쓰지 않고 닫힌 원판의 콤팩트성으로 한다.
requires: [function, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, power-of-a-real-number, topological-space, subspace-topology, extreme-value-theorem-for-compact-spaces, complex-number, complex-field, modulus-of-complex-number, complex-conjugate, continuity-of-complex-operations, compact-subsets-of-complex-plane, complex-polynomial-function, growth-of-complex-polynomial]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: "11.5절 Maximum principle and the fundamental theorem of algebra, Theorem 11.5.5 의 증명 (p.170); Remark 11.5.3 (p.170)"
    checked: original
    note: "출처는 대수학의 기본정리(Theorem 11.5.5)의 증명(p.170)에서 μ = inf{|p(z)| : z ∈ ℂ} 을 두고, |z| ≥ R 이면 |p(z)| ≥ μ + 1 인 R 을 잡아, 연속 실함수 |p(z)| 가 콤팩트 집합 C(0, R) 위에서 최솟값을 가지며 'this minimum must be μ' 라고 하여 |p(z₀)| = μ 인 z₀ 을 얻는다. 이 항목의 (1)은 그 z₀ 의 존재를 따로 진술한 것이다. 이 항목은 하한 μ 를 쓰지 않고 R 을 |p(0)| + 1 로 정해, 원판 밖에서는 |p| 가 |p(0)| 보다 크다는 것으로 원판 위의 최솟값이 ℂ 전체의 최솟값임을 보인다. 출처는 nonconstant 인 p 만 다루지만, (1)은 상수함수도 포함한다. 출처 Remark 11.5.3(p.170)은 실수 x 만 보면 x² + 1 이 x = 0 에서 최솟값을 갖지만 그 값이 0 이 아니라는 것을 예로 드는데, 예시 '$zz - 2z + 2$의 최솟값' 의 실수 쪽 계산은 같은 발상이다."
  - ref: lebl-basic-analysis
    loc: "3.3절 Extreme and intermediate value theorems, 3.3.1소절 Min-max or extreme value theorem, Example 3.3.3 (p.131), Example 3.3.5 (p.132); 3.3.3소절 Exercises, Exercise 3.3.11, Exercise 3.3.16 (p.137)"
    checked: original
    note: "Lebl I Exercise 3.3.16(p.137)은 최고차계수가 1 이고 차수가 짝수인 실수 다항식이 ℝ 위에서 최솟값을 갖는다는 것을 증명하게 한다. (1)은 같은 종류의 결론을 복소 다항함수의 절댓값에 대해 말한 것이다. Example 3.3.3(p.131)은 x² + 1 이 [−1, 2] 위에서 x = 0 에서 최솟값 1 을 갖는다고 적는데, 예시 '$zz - 2z + 2$의 최솟값' 의 실수 쪽 계산((x − 1)² + 1 이 x = 1 에서 최솟값 1)은 같은 발상이다. Example 3.3.5(p.132)는 (0, 1) 위의 1/x 가 최솟값을 갖지 않는 연속함수라고 적고, Exercise 3.3.11(p.137)은 최솟값도 최댓값도 갖지 않는 유계인 연속함수 ℝ → ℝ 를 찾게 한다. 반례 '절댓값이 최솟값을 갖지 않는 연속함수' 는 같은 종류의 예를 ℂ 위에서 든 것이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(최솟값 증명 통독, 증가 어림의 R 에 경계값, 출처 메모 표본 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수, 체 $\mathbb{C}$의 연산과 함수 $\iota$는 [[complex-number]]와 [[complex-field]], 절댓값 $|z|$는 [[modulus-of-complex-number]]의 것이고, 복소 다항함수와 그 표현, 함수 $|p|$는 [[complex-polynomial-function|복소 다항함수]], 차수와 최고차계수는 [[growth-of-complex-polynomial|복소 다항함수의 증가와 계수의 유일성]]의 것이다. 함수 $h : X \to \mathbb{R}$가 점 $c$에서 최솟값을 갖는다는 것은 [[extreme-value-theorem-for-compact-spaces|콤팩트 공간 위의 최대·최소 정리]]의 (1)의 뜻, 곧 모든 $x \in X$에서 $h(c) \le h(x)$라는 것이다. 실수의 순서와 두 수의 최대 $\max\{a, b\}$는 [[real-order-axioms]]와 [[absolute-value]]의 것이다.

1. (최솟값) 모든 복소 다항함수 $p$에 대하여, 모든 복소수 $z$에서 $|p(z_0)| \le |p(z)|$인 복소수 $z_0$이 있다. 곧 $|p| : \mathbb{C} \to \mathbb{R}$는 $z_0$에서 최솟값을 갖는다.
2. (최솟값을 갖는 점의 자리) 복소 다항함수 $p$가 영함수가 아니고 $\deg p \ge 1$이라 하자. 끝 번호가 $d = \deg p$이고 끝 계수 $a_d$가 최고차계수인 $p$의 표현 $p(z) = \sum_{k=0}^{d} a_k z^k$에 대하여 $C = \sum_{k=0}^{d-1} |a_k|$, $N = |p(0)| + 1 + C$로 두고
   $$
   R = \max\bigl\{1,\ N\,|a_d|^{-1}\bigr\}
   $$
   로 두자. 그러면 $|z| \ge R$인 모든 복소수 $z$에서 $|p(z)| > |p(0)|$이고, $|p|$가 최솟값을 갖는 점 $z_0$은 모두 $|z_0| < R$을 만족한다.
:::

:::english
Complex numbers, the operations of the field $\mathbb{C}$, and the function $\iota$ are those of the entries on complex numbers and on the field of complex numbers, and moduli $|z|$ are those of the entry on the modulus; complex polynomial functions, their representations, and the function $|p|$ are those of the entry on complex polynomial functions, and degree and leading coefficient are those of the entry on growth of complex polynomials and uniqueness of coefficients. That a function $h : X \to \mathbb{R}$ attains its minimum at a point $c$ is meant as in item (1) of the extreme value theorem for compact spaces, that is, $h(c) \le h(x)$ for every $x \in X$. The order of real numbers and the maximum $\max\{a, b\}$ of two numbers are those of their entries.

1. (Minimum) For every complex polynomial function $p$ there is a complex number $z_0$ such that $|p(z_0)| \le |p(z)|$ for every complex number $z$. That is, $|p| : \mathbb{C} \to \mathbb{R}$ attains its minimum at $z_0$.
2. (Where the minimum is attained) Let $p$ be a complex polynomial function other than the zero function with $\deg p \ge 1$. For a representation $p(z) = \sum_{k=0}^{d} a_k z^k$ of $p$ with last index $d = \deg p$ whose last coefficient $a_d$ is the leading coefficient, put $C = \sum_{k=0}^{d-1} |a_k|$, $N = |p(0)| + 1 + C$, and
   $$
   R = \max\bigl\{1,\ N\,|a_d|^{-1}\bigr\}.
   $$
   Then $|p(z)| > |p(0)|$ for every complex number $z$ with $|z| \ge R$, and every point $z_0$ at which $|p|$ attains its minimum satisfies $|z_0| < R$.
:::

## 직관

연속함수의 절댓값은 정의역이 공집합이 아닌 콤팩트 집합이면 최솟값을 갖지만, $\mathbb{C}$ 전체는 콤팩트가 아니어서 그대로는 쓸 수 없습니다. 예컨대 아래 반례의 연속함수는 절댓값이 $|z|$가 커질수록 작아지기만 하고 최솟값에 이르지 않습니다. 차수가 $1$ 이상인 복소 다항함수는 반대로 $|z|$가 충분히 크면 절댓값이 어떤 수보다도 커집니다([[growth-of-complex-polynomial|증가의 어림]]). 그래서 원점에서의 값 $|p(0)|$보다 큰 값만 나오는 바깥 영역을 떼어 내면, 남은 닫힌 원판 $\{z : |z| \le R\}$ 안에서 최솟값을 찾으면 됩니다.

넓은 들판에서 가장 낮은 곳을 찾는 일에 비유할 수 있습니다. 들판의 가장자리가 끝없이 올라가는 비탈이라면, 출발점(원점)보다 높은 비탈은 볼 필요가 없고 울타리 안(닫힌 원판)만 뒤지면 됩니다. 울타리 안은 콤팩트하므로 가장 낮은 점이 실제로 있고([[compact-subsets-of-complex-plane|복소평면의 콤팩트 집합]]의 (4)), 울타리 밖은 모두 출발점보다 높으므로 그 점이 들판 전체에서도 가장 낮습니다. 비유의 "비탈이 끝없이 올라간다"는 차수가 $1$ 이상일 때만 맞습니다. 상수함수는 평평한 들판이어서 어느 점이나 가장 낮은 점입니다.

이 항목은 최솟값을 갖는 점이 있다는 것만 말하고, 그 점이 하나뿐이라거나 최솟값이 얼마라고 말하지 않습니다.

## 증명

:::idea
$|p(0)| + 1$을 넘는 값만 나오는 바깥을 증가의 어림으로 떼어 내고, 남은 닫힌 원판에서 콤팩트 집합 위의 최솟값을 쓴다.
:::

:::hint
원점은 원판 안에 있으므로 원판 위의 최솟값은 $|p(0)|$ 이하이다.
:::

:::proof
"증가의 ($n$)"은 [[growth-of-complex-polynomial]], "다항함수의 ($n$)"은 [[complex-polynomial-function]], "콤팩트의 ($n$)"은 [[compact-subsets-of-complex-plane]], "순서의 ($n$)"은 [[order-properties-of-reals]]의 번호이다.

**2의 증명.** 증가의 (3)의 (i)에 의해 그런 표현이 있고 $a_d \ne 0$이다. $M = |p(0)| + 1$로 두면 [[absolute-value|절댓값]]의 (2)의 $0 \le |p(0)|$과 순서의 (5)의 (ii)의 $0 < 1$, 순서의 (2)의 (iv)에 의해 $0 < M$이므로 절댓값의 (1)에 의해 $|M| = M$이다. 따라서 위의 $R$은 증가의 (1)의 (iii)의 $R$이고, $|z| \ge R$이면 $|p(z)| \ge |p(0)| + 1$이다. 순서의 (5)의 (ii)와 (2)의 (ii)에 의해 $|p(0)| < |p(0)| + 1$이므로 순서의 (1)의 (v)에 의해 $|p(z)| > |p(0)|$이다. $z_0$에서 $|p|$가 최솟값을 가지면 $|p(z_0)| \le |p(0)|$이므로 순서의 (1)의 (i)에 의해 $|p(z_0)| > |p(0)|$일 수 없고, 따라서 $|z_0| \ge R$이 아니다. 순서의 (1)의 (iii)에 의해 $|z_0| < R$이다.

**1의 증명.** 증가의 (3)의 (ii)에 의해 $p$는 상수함수이거나, 영함수가 아니고 $\deg p \ge 1$이다.

$p$가 상수함수이면 모든 $z$에서 $p(z) = p(0)$이므로 $z_0 = 0$으로 두면 $|p(z_0)| = |p(z)|$이고, 특히 $|p(z_0)| \le |p(z)|$이다.

$\deg p \ge 1$이면 (2)의 $R$을 잡고 $K = \{z \in \mathbb{C} : |z - 0| \le R\}$로 두자. $1 \le R$이므로 $0 \le R$이고, 콤팩트의 (2)에 의해 $K$는 $\mathbb{C}$의 콤팩트 부분집합이다. [[modulus-of-complex-number|복소수의 절댓값]]의 (1)에 의해 $|0 - 0| = |0| = 0 \le R$이므로 $0 \in K$이고 $K$는 공집합이 아니다. 다항함수의 (5)에 의해 $p : \mathbb{C} \to \mathbb{C}$는 연속이다. $\mathbb{C}$를 자기 자신의 부분집합으로 보아 [[subspace-topology|부분공간 위상]]을 주어도 열린집합은 $U \cap \mathbb{C} = U$꼴이므로 위상이 같아, 이 연속은 콤팩트의 (4)의 (ii)가 요구하는 연속이다. 콤팩트의 (4)의 (ii)를 $A = \mathbb{C}$, $F = p$에 쓰면 모든 $z \in K$에서 $|p(z_0)| \le |p(z)|$인 $z_0 \in K$가 있다.

이 $z_0$이 $\mathbb{C}$ 전체에서 최솟값을 주는 것을 보인다. $z \in K$이면 이미 보았다. $z \notin K$이면 $|z| = |z - 0| \le R$이 아니므로 순서의 (1)의 (iii)에 의해 $R < |z|$, 특히 $|z| \ge R$이고 (2)에 의해 $|p(z)| > |p(0)|$이다. 한편 $0 \in K$이므로 $|p(z_0)| \le |p(0)|$이고, 순서의 (1)의 (v)에 의해 $|p(z_0)| < |p(z)|$, 특히 $|p(z_0)| \le |p(z)|$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$zz - 2z + 2$의 최솟값]
$p(z) = zz - 2z + 2$, 곧 계수가 $2, -2, 1$인 복소 다항함수를 봅시다. $p(1 + i) = (1 + i)(1 + i) - 2(1 + i) + 2 = 2i - 2 - 2i + 2 = 0$이므로 $|p(1 + i)| = 0$이고, [[modulus-of-complex-number|복소수의 절댓값]]의 (1)에 의해 모든 $z$에서 $0 \le |p(z)|$입니다. 따라서 $|p|$는 $1 + i$에서 최솟값 $0$을 갖습니다. [[complex-conjugate|켤레복소수]]와 [[complex-polynomial-function|복소 다항함수]]의 (6)에 의해 계수가 모두 실수인 복소수이므로 $p(1 - i) = \overline{p(1 + i)} = 0$이어서, 최솟값을 갖는 점은 $1 - i$이기도 합니다. (1)은 그런 점이 하나뿐이라고 말하지 않습니다.

(2)의 $R$을 계산하면 $d = 2$, $a_2 = 1$, $C = |2| + |-2| = 4$, $|p(0)| = 2$이므로 $R = \max\{1, 2 + 1 + 4\} = 7$입니다. 두 점은 $|1 \pm i| = \sqrt{2} < 7$을 만족합니다.

실수를 옮긴 점만 보면 사정이 다릅니다. 실수 $x$에서 $p(\iota(x)) = \iota\bigl((x - 1)(x - 1) + 1\bigr)$이고 $(x - 1)(x - 1) \ge 0$이므로 $|p(\iota(x))| \ge 1$이며, $x = 1$에서 $1$입니다. 실수만 보았을 때의 최솟값 $1$보다 작은 값이 실수가 아닌 점에서 나옵니다.
:::

:::counterexample[절댓값이 최솟값을 갖지 않는 연속함수]
$F(z) = 1 + z\,\overline{z}$로 두면 [[continuity-of-complex-operations|복소수 연산의 연속]]의 (2), (3)에 의해 $F : \mathbb{C} \to \mathbb{C}$는 연속이고, [[modulus-of-complex-number|복소수의 절댓값]]의 (2)에 의해 $F(z) = \iota(1 + |z|^2)$는 $0$이 아닙니다. 따라서 같은 연속 항목의 (4)의 (i)에 의해 $G = 1/F$는 연속이고, 절댓값 항목의 (4), (5)에 의해 $|G(z)| = (1 + |z|^2)^{-1}$입니다. 어느 점 $c$를 잡아도 $w = \iota(|c| + 1)$에서 절댓값 항목의 (5)에 의해 $|w| = |c| + 1 > |c| \ge 0$이므로 [[order-properties-of-reals|순서]]의 (7)의 (i)과 (2)의 (ii)에 의해 $1 + |w|^2 > 1 + |c|^2 > 0$이고, 같은 순서의 (6)의 (ii)에 의해 $|G(w)| < |G(c)|$입니다. 그래서 $|G|$는 최솟값을 갖지 않습니다. $G$는 연속이지만 (1)이 쓰는 증가의 어림을 만족하지 않습니다.
:::

## 확인 질문

:::check[$p(z) = z - 3$이면 (2)의 $R$은 무엇이고, 최솟값을 갖는 점은 어디인가?]
$d = 1$, $a_1 = 1$, $C = |-3| = 3$, $|p(0)| = 3$이므로 $R = \max\{1, 3 + 1 + 3\} = 7$입니다. $p(3) = 0$이고 모든 $z$에서 $0 \le |p(z)|$이므로 $|p|$는 $3$에서 최솟값 $0$을 갖고, $|3| = 3 < 7$입니다. $|p(z)| = |z - 3| = 0$인 것은 $z = 3$일 때뿐이므로 최솟값을 갖는 점은 $3$ 하나입니다.
:::

:::check[$p(z) = zz$에서 $|p|$가 최솟값을 갖는 점은 어디인가?]
[[modulus-of-complex-number|복소수의 절댓값]]의 (3)에 의해 $|zz| = |z|\,|z|$이고, 이것은 $0$ 이상이며 $0$인 것은 정확히 $|z| = 0$, 곧 $z = 0$일 때입니다. 따라서 최솟값은 $0$이고 그 점은 $0$ 하나입니다.
:::
