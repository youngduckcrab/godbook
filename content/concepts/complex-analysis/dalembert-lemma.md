---
title: 달랑베르 보조정리
title_en: d'Alembert's Lemma
aliases: [최소 절댓값 원리, 다항함수의 최소 절댓값 원리, minimum modulus principle, d'Alembert's lemma]
kind: lemma
field: complex-analysis
msc: ["30C10", "12D10"]
level: undergrad
summary: 차수가 1 이상인 복소 다항함수 p 와 p(z₀) ≠ 0 인 점 z₀ 이 있으면, 모든 ε > 0 에 대하여 |w − z₀| < ε 이고 |p(w)| < |p(z₀)| 인 점 w 가 있다. 그래서 |p| 가 최솟값을 갖는 점에서는 p 의 값이 0 이다. 증명은 한 점으로 옮긴 표현과 극형식, 드무아브르 공식으로 방향을 고르고, 반지름을 식으로 정한다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, power-of-a-real-number, prime-number, well-ordering-principle, linearity-and-order-of-finite-sums, series-indexed-from-zero, field, integral-domain, complex-number, complex-field, modulus-of-complex-number, complex-triangle-inequality, power-of-a-complex-number, complex-finite-sum, complex-exponential-function, unit-circle-parametrization, polar-form, de-moivre-formula, complex-polynomial-function, growth-of-complex-polynomial, extreme-value-theorem-for-compact-spaces]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: "11.5절 Maximum principle and the fundamental theorem of algebra, Lemma 11.5.1 과 그 증명, 그 뒤 문단 (p.169); Remark 11.5.3 과 그 뒤 문단 (p.170)"
    checked: original
    note: "출처 Lemma 11.5.1(p.169)은 ε > 0 과 상수가 아닌 복소 다항식(또는 B(z₀, ε) 에서 수렴하는 상수가 아닌 멱급수) p 가 p(z₀) ≠ 0 이면 |p(w)| < |p(z₀)| 인 w ∈ B(z₀, ε) 가 있다는 것이고, 다항식인 경우만 증명한다. 증명은 일반성을 잃지 않고 z₀ = 0, p(0) = 1 로 두고, a_k e^{ikt} = −|a_k| 인 t 를 삼각함수로 고르고, r 이 충분히 작으면 괄호 안이 양수라고 하여 끝낸다. 이 항목은 원점으로 옮기는 것을 복소 다항함수의 (4)로, 방향을 극형식과 드무아브르 공식으로 정하고 p(z₀) 로 나누지 않으며, r 을 네 양수의 최소로 식으로 적는다. 멱급수판은 싣지 않는다. (2)는 출처가 Lemma 11.5.1 뒤 문단에서 'the only minima the modulus of analytic functions has are precisely at the zeros' 라고 말하고 이것을 minimum modulus principle 이라 부른다고 적는 것의 다항함수판(한 방향)이다. 예시 '$zz + 1$을 실수에서만 보면' 은 출처 Remark 11.5.3(p.170)의 x² + 1 과 w = iε 의 예와 같은 대상과 같은 결론이다. Remark 11.5.3 뒤 문단(p.170)은 p(0) = 1 이면 0 가까이에서 다항식이 1 + az^k 처럼 보이고 1 + az^k 는 원점에서 최솟값을 갖지 않는다고 적는데, 이 항목의 증명이 가장 낮은 차수의 항 하나로 방향을 정하는 것과 같은 발상이다. 이 항목의 이름 '달랑베르 보조정리' 는 출처에 나오지 않는다(출처 텍스트 전체 검색: 'Alembert', 'Argand', 'd'Alembert' 0건)."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(달랑베르 증명 통독 — r 의 세 조건이 r^k|b_k| ≤ |b_0| 와 rC' < |b_k| 를 주는지 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수와 $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산과 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 절댓값은 [[modulus-of-complex-number]]의 것이고, 복소 다항함수와 그 표현, 영함수는 [[complex-polynomial-function|복소 다항함수]], 차수 $\deg$는 [[growth-of-complex-polynomial|복소 다항함수의 증가와 계수의 유일성]]의 것이다. 최솟값을 갖는다는 것은 [[extreme-value-theorem-for-compact-spaces|콤팩트 공간 위의 최대·최소 정리]]의 (1)의 뜻이다.

$p$를 영함수가 아니고 $\deg p \ge 1$인 복소 다항함수라 하자.

1. (값을 줄이는 점) 복소수 $z_0$에서 $p(z_0) \ne 0$이면, 모든 실수 $\varepsilon > 0$에 대하여 $|w - z_0| < \varepsilon$이고 $|p(w)| < |p(z_0)|$인 복소수 $w$가 있다.
2. (최솟값을 갖는 점) 함수 $|p| : \mathbb{C} \to \mathbb{R}$가 복소수 $z_0$에서 최솟값을 가지면, 곧 모든 복소수 $z$에서 $|p(z_0)| \le |p(z)|$이면 $p(z_0) = 0$이다.
:::

:::english
Complex numbers and $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, and the convention for writing real numbers where complex numbers are required are those of the entry on the field of complex numbers; moduli are those of the entry on the modulus; complex polynomial functions, their representations, and the zero function are those of the entry on complex polynomial functions; and the degree $\deg$ is that of the entry on growth of complex polynomials and uniqueness of coefficients. Attaining a minimum is meant as in item (1) of the extreme value theorem for compact spaces.

Let $p$ be a complex polynomial function other than the zero function with $\deg p \ge 1$.

1. (A point with a smaller value) If $z_0$ is a complex number with $p(z_0) \ne 0$, then for every real number $\varepsilon > 0$ there is a complex number $w$ with $|w - z_0| < \varepsilon$ and $|p(w)| < |p(z_0)|$.
2. (Points of minimum) If the function $|p| : \mathbb{C} \to \mathbb{R}$ attains its minimum at a complex number $z_0$, that is, $|p(z_0)| \le |p(z)|$ for every complex number $z$, then $p(z_0) = 0$.
:::

## 직관

$p$를 $z_0$ 둘레에서 $h = w - z_0$의 다항함수로 다시 적으면 $p(z_0 + h) = b_0 + b_k h^k + (\text{더 높은 차수의 항})$ 꼴이 됩니다. 여기서 $b_0 = p(z_0)$이고 $b_k$는 $b_0$ 다음으로 처음 $0$이 아닌 계수입니다. $|h|$가 작으면 더 높은 차수의 항은 $b_k h^k$보다 훨씬 작으므로, $b_0 + b_k h^k$가 $b_0$보다 원점에 가까워지게 $h$의 방향을 고르면 값의 절댓값이 줄어듭니다. 그 방향은 $b_k h^k$가 $b_0$와 정반대를 향하게 하는 것이고, 그런 $h$를 찾으려면 복소수의 $k$제곱근이 필요합니다. 극형식과 드무아브르 공식이 그것을 줍니다.

물이 고인 웅덩이를 생각할 수 있습니다. 바닥이 $0$보다 높은 자리에서는 아무리 가까운 범위 안에서 찾아도 더 낮은 곳이 늘 있으므로, 가장 낮은 자리는 바닥이 $0$인 곳뿐입니다((2)). 비유에서 "높이"는 $|p|$의 값이고, "아무리 가까운 범위 안에서"는 (1)의 "모든 $\varepsilon > 0$에 대하여"입니다. 비유가 맞지 않는 것은, 실제 웅덩이에서는 바닥이 $0$보다 높은 가장 낮은 자리가 얼마든지 있다는 점입니다. 복소 다항함수의 절댓값에는 그런 자리가 없다는 것이 이 보조정리입니다. 실수만 보면 그런 자리가 있습니다(아래 예시).

## 증명

:::idea
$z_0$ 둘레의 표현에서 $b_0$ 다음으로 처음 $0$이 아닌 계수 $b_k$를 잡고, $b_k u^k$가 $b_0$와 정반대 방향이 되는 절댓값 $1$인 $u$를 드무아브르 공식으로 만든 뒤, $w = z_0 + r u$의 $r$을 식으로 작게 정한다.
:::

:::hint
$v = -b_0 |b_k| \bigl(|b_0|\, b_k\bigr)^{-1}$로 두면 $|v| = 1$이다. $v$의 편각 $\varphi$로 $u = \exp(i\varphi / k)$를 잡으면 $u^k = v$이다.
:::

:::hint
$0 < r \le 1$이면 $j \ge k + 1$에서 $r^j \le r^{k+1}$이므로 높은 차수의 항들은 합쳐서 $r^{k+1}$에 상수를 곱한 것 이하이다.
:::

:::proof
"다항함수의 ($n$)"은 [[complex-polynomial-function]], "증가의 ($n$)"은 [[growth-of-complex-polynomial]], "합의 ($n$)"은 [[complex-finite-sum]], "복소 절댓값의 ($n$)"은 [[modulus-of-complex-number]], "삼각부등식의 ($n$)"은 [[complex-triangle-inequality]], "복소 거듭제곱의 ($n$)"은 [[power-of-a-complex-number]], "실수의 거듭제곱의 ($n$)"은 [[power-of-a-real-number]], "순서의 ($n$)"은 [[order-properties-of-reals]], "절댓값의 ($n$)"은 [[absolute-value]], "복소수체의 ($n$)"은 [[complex-field]]의 번호이다. 실수의 $0$부터의 합과 범위에서만 정해진 항의 합은 [[series-indexed-from-zero]]의 정의와 [[linearity-and-order-of-finite-sums]]의 (8)로 그 항목의 (1), (3), (6)을 쓴다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다룬다.

**1의 증명.** $d = \deg p$로 두자. 증가의 (3)의 (i)에 의해 $p$는 끝 번호가 $d$이고 끝 계수 $a_d$가 $0$이 아닌 표현을 갖는다. 다항함수의 (4)를 이 표현과 $z_0$에 쓰면, $0$부터 번호가 붙은 복소수의 열 $b_0, \dots, b_d$가 있어 모든 복소수 $h$에서
$$
p(z_0 + h) = \sum_{j=0}^{d} b_j h^j
$$
이고 $b_0 = p(z_0) \ne 0$, $b_d = a_d \ne 0$이다.

(가) *처음 $0$이 아닌 계수.* 자연수의 집합 $\{j \in \mathbb{N} : j \le d,\ b_j \ne 0\}$은 $d$를 원소로 가지므로 공집합이 아니고, [[well-ordering-principle|정렬 원리]]의 (2)에 의해 최소 원소 $k$를 갖는다. 그러면 $1 \le k \le d$, $b_k \ne 0$이고, $1 \le j < k$이면 (L1)에 의해 $j$는 이 집합에 들지 않으므로 $b_j = 0$이다. 복소 절댓값의 (1)에 의해 $0 < |b_0|$, $0 < |b_k|$이다.

(나) *방향.* $v = -b_0\,\iota(|b_k|)\bigl(\iota(|b_0|)\,b_k\bigr)^{-1}$로 두자(분모는 [[field|체]]의 (3)과 [[integral-domain|정역]]의 정의에 의해 $0$이 아니다). 복소 절댓값의 (1), (3), (4), (5)에 의해 $|v| = |b_0|\,|b_k|\,(|b_0|\,|b_k|)^{-1} = 1$이고, 따라서 $v \ne 0$이다. [[polar-form|극형식과 편각]]의 (1)에 의해 $v$의 편각 $\varphi$가 있고, $v = |v|\exp(i\varphi) = \exp(i\varphi)$이다. 실수 $\psi = \varphi\,k^{-1}$로 두고 $u = \exp(i\psi)$로 두자. [[unit-circle-parametrization|원 𝕋 의 매개화]]의 (2)에 의해 $|u| = 1$이고, [[de-moivre-formula|드무아브르 공식]]의 (1)에 의해 $u^k = \exp(ik\psi) = \exp(i\varphi) = v$이다($k\psi = \varphi$). 정의에 의해 $b_k v = -b_0\,\iota(|b_k|\,|b_0|^{-1})$이다(복소수체의 (2)).

(다) *한 반지름에서의 어림.* $C' = \sum_{j=k+1}^{d} |b_j|$로 두자($k = d$이면 빈 합 $0$이다. 항이 $0$ 이상이므로 $0 \le C'$). 실수 $r$이 $0 < r \le 1$이고 $r^k |b_k| \le |b_0|$을 만족한다고 하고 $h = \iota(r)\,u$로 두자. 복소 거듭제곱의 (3)의 (i), (5)에 의해 $h^j = \iota(r^j)\,u^j$이고, 복소 절댓값의 (3), (5)와 복소 거듭제곱의 (4)에 의해 $|b_j h^j| = |b_j|\,r^j$이다.

합의 (8)의 첫 항과 합의 (3)의 쪼개기, 합의 (2)의 첫 항($k \le d$)으로
$$
\begin{aligned}
p(z_0 + h) &= b_0 + \sum_{j=1}^{k-1} b_j h^j \\
&\qquad + b_k h^k + \sum_{j=k+1}^{d} b_j h^j
\end{aligned}
$$
이다. (가)에 의해 둘째 합의 항은 모두 $0$이므로 합의 (4)의 상수의 합에 의해 그 합은 $0$이다. 셋째 합을 $S$라 하자. (나)에 의해
$$
\begin{aligned}
b_0 + b_k h^k &= b_0 + \iota(r^k)\,b_k v \\
&= b_0\,\iota\bigl(1 - r^k |b_k|\,|b_0|^{-1}\bigr)
\end{aligned}
$$
이다. $t = r^k |b_k|\,|b_0|^{-1}$은 $0 \le t \le 1$인 실수이므로(가정의 양변에 $|b_0|^{-1} > 0$을 곱한다. 순서의 (4)의 (iii), (6)의 (i)) 절댓값의 (1)과 복소 절댓값의 (3), (5)에 의해 $|b_0 + b_k h^k| = |b_0|(1 - t) = |b_0| - r^k |b_k|$이다.

$S$를 어림한다. $k + 1 \le j \le d$이면 $j - k - 1 \ge 0$이고, $0 \le r \le 1$이므로 실수의 거듭제곱의 (6)의 (ii), (2)의 (iv)에 의해 $r^{j-k-1} \le 1$, 같은 (2)의 (i)과 (6)의 (i), 순서의 (4)의 (iii)에 의해 $r^j = r^{k+1} r^{j-k-1} \le r^{k+1}$이다. 합의 (7)과 항별 비교, 상수배([[linearity-and-order-of-finite-sums]]의 (3), (1))에 의해
$$
|S| \le \sum_{j=k+1}^{d} |b_j|\,r^j \le r^{k+1} C'
$$
이다. 삼각부등식의 (2)에 의해
$$
\begin{aligned}
|p(z_0 + h)| &\le |b_0| - r^k |b_k| + r^{k+1} C' \\
&= |b_0| - r^k\bigl(|b_k| - r C'\bigr)
\end{aligned}
$$
이다. 이것을 (★)이라 부른다.

(라) *반지름의 선택.* 네 양수 $1$, $\varepsilon/2$, $|b_0|\,|b_k|^{-1}$, $|b_k|\,(C' + 1)^{-1}$으로 $r_1 = \min\{1, \varepsilon/2\}$, $r_2 = \min\bigl\{|b_0|\,|b_k|^{-1},\ |b_k|\,(C' + 1)^{-1}\bigr\}$, $r = \min\{r_1, r_2\}$로 두자. 절댓값의 (10)에 의해 두 수의 최소는 그 둘 가운데 하나이므로 $r$은 네 수 가운데 하나여서 양수이고(순서의 (6)의 (i), (8)), 같은 (10)에 의해 $r$은 네 수 각각 이하이다. $r \le 1$이고 $k \ge 1$이므로 위와 같이 $r^k = r\,r^{k-1} \le r$이고, 따라서 $r^k |b_k| \le r |b_k| \le |b_0|\,|b_k|^{-1}|b_k| = |b_0|$이다. 그러므로 (다)의 가정이 성립하고 (★)을 쓸 수 있다.

$C' < C' + 1$이고 $0 < (C' + 1)^{-1}$이므로 $C'(C' + 1)^{-1} < 1$이고(순서의 (4)의 (i)), $|b_k| > 0$이므로 $r C' \le |b_k|\,C'(C' + 1)^{-1} < |b_k|$이다($C' = 0$이면 왼쪽이 $0$이다). 따라서 $0 < |b_k| - rC'$이고, 실수의 거듭제곱의 (6)의 (i)에 의해 $0 < r^k$이므로 [[real-order-axioms]]의 (W4)에 의해 $0 < r^k(|b_k| - rC')$이고, (★)과 순서의 (3)의 (i), (1)의 (v)에 의해 $|p(z_0 + h)| < |b_0| = |p(z_0)|$이다.

$w = z_0 + h$로 두면 $|w - z_0| = |\iota(r)\,u| = r \cdot 1 = r \le \varepsilon/2 < \varepsilon$이고(순서의 (8)), $|p(w)| < |p(z_0)|$이다.

**2의 증명.** $p(z_0) \ne 0$이라 하자. (1)을 $\varepsilon = 1$에 쓰면 $|p(w)| < |p(z_0)|$인 $w$가 있는데, 가정에 의해 $|p(z_0)| \le |p(w)|$이므로 순서의 (1)의 (i)에 어긋난다. 따라서 $p(z_0) = 0$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$zz + 1$을 실수에서만 보면]
$p(z) = zz + 1$이라 합시다. 실수 $x$에서 $p(\iota(x)) = \iota(xx + 1)$이고 $xx + 1 \ge 1$이므로, 실수를 옮긴 점만 보면 $|p|$는 $\iota(0)$에서 가장 작은 값 $1$을 갖고 그 값은 $0$이 아닙니다. 그러나 $\mathbb{C}$ 전체에서는 그렇지 않습니다. $z_0 = 0$, $p(0) = 1$에서 증명을 따라가면 $b_0 = 1$, $b_1 = 0$, $b_2 = 1$이므로 $k = 2$이고, $v = -1$, $\varphi = \pi$, $u = \exp(i\pi/2) = i$입니다([[polar-form|극형식과 편각]]의 (6)). 실수 $0 < r \le 1$에서 $p(ri) = -rr + 1 = 1 - r^2$이므로 $|p(ri)| = 1 - r^2 < 1$입니다. 값을 줄이는 점은 실수인 복소수가 아닌 $ri$ 쪽에 있습니다.
:::

:::example[일차 다항함수]
$p(z) = 2z - 2$, $z_0 = 0$, $p(0) = -2$이면 $b_0 = -2$, $b_1 = 2$, $k = 1$이고 $v = -(-2) \cdot 2 \cdot (2 \cdot 2)^{-1} = 1$이므로 $u = 1$로 잡을 수 있습니다($\varphi = 0$). $C' = 0$이므로 $r_2 = \min\{1, 2\} = 1$이고 $r = \min\{1, \varepsilon/2\}$입니다. 실수 $0 < r \le 1$에서 $p(r) = 2r - 2$이고 $|p(r)| = 2 - 2r < 2$입니다. 실제로 값은 $z = 1$ 쪽으로 가며 줄어듭니다.
:::

:::counterexample[값이 3 인 상수함수]
$\deg p \ge 1$이라는 가정을 빼면 (1)과 (2)가 성립하지 않을 수 있습니다. 값이 $3$인 상수함수는 모든 점에서 $|p(z)| = 3$이므로 $|p(w)| < |p(z_0)|$인 $w$가 없고, (2)에서도 모든 점이 최솟값을 갖는 점이지만 값은 $0$이 아닙니다. 증명에서 이 가정은 (가)의 집합이 공집합이 아니라는 데($b_d = a_d \ne 0$이고 $d \ge 1$) 쓰입니다.
:::

## 확인 질문

:::check[$p(z) = z^3 + 8$, $z_0 = 0$에서 증명의 $k$, $v$, $u$는 무엇인가?]
$b_0 = 8$, $b_1 = b_2 = 0$, $b_3 = 1$이므로 $k = 3$이고 $v = -8 \cdot 1 \cdot (8 \cdot 1)^{-1} = -1$입니다. $\varphi = \pi$로 잡으면 $u = \exp(i\pi/3)$이고 $u^3 = \exp(i\pi) = -1 = v$입니다. 그러면 $r$이 작을 때 $p(ru) = 8 - r^3$이므로 절댓값이 $8$보다 작습니다.
:::

:::check[(1)의 $w$는 $\varepsilon$에 대해 하나로 정해지는가?]
진술은 그런 $w$가 있다는 것만 말합니다. 위 예시 '$zz + 1$을 실수에서만 보면' 에서 $0 < r \le 1$인 모든 $r$에 대해 $w = ri$가 조건을 만족하고, $|p(-ri)| = 1 - r^2$이므로 $-ri$도 만족합니다. 그래서 하나로 정해지지 않을 수 있습니다.
:::
