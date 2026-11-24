---
title: 인수 정리
title_en: Factor Theorem
aliases: [나머지 정리, 일차식으로 나누기, factor theorem, remainder theorem]
kind: theorem
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: n ≥ 1, f ∈ 𝒫ₙ, c 가 실수이면 f = (t − c)q + f(c)t⁰ 인 q ∈ 𝒫ₙ₋₁ 이 있다. 따라서 f(c) = 0 인 것은 정확히 f = (t − c)q 인 q ∈ 𝒫ₙ₋₁ 이 있을 때이다.
requires: [function, mathematical-induction, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, vector-space, vector-space-basic-properties, real-function-space, subspace, finite-sum-of-vectors, linear-combination-and-span, linear-map, standard-basis, power-of-a-real-number, polynomial-function, product-of-polynomial-functions]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 4장 1절, 1.5 Multiplicities of eigenvalues 의 첫 문단, p.102; 3장 5절, 연습문제 5.6 c, p.95
    checked: original
    note: "출처는 4장 1.5(p.102)에서 'p 가 다항식이고 λ 가 그 근(p(λ) = 0)이면 z − λ 가 p(z) 를 나누어, 어떤 다항식 q 로 p(z) = (z − λ)q(z) 라 쓸 수 있다'는 것을 독자에게 '상기시키며'(Let us remind the reader) 증명하지 않고, 이름도 붙이지 않는다. 3장 연습문제 5.6 c(p.95)는 방데르몽드 행렬식에서 이 사실을 쓰게 한다(근 c₀, …, c_{n−1} 을 가지므로 Aₙ(x − c₀)⋯(x − c_{n−1}) 로 쓸 수 있다). q 가 𝒫ₙ₋₁ 에 든다는 것, 나머지가 f(c) 인 (1)의 꼴, '인수 정리'라는 이름, 증명(tᵏ − cᵏt⁰ 을 귀납으로 t − c 로 나누기)은 이 사이트의 것이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 뒤 항목에 기대던 반례 2건을 바꾸고, 예시 메모의 부정 주장 2건을 지웠으며, 정의하지 않은 표기와 범위 없는 변수를 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$t^k$, $t - c$, $\mathcal{P}_n$, 영함수 $o$와 계수의 표기는 [[polynomial-function|다항함수]]의 것이고, 함수의 곱 $fg$는 [[product-of-polynomial-functions|다항함수의 곱]]의 것이다.

$n \ge 1$이 정수이고 $f \in \mathcal{P}_n$이며 $c$가 실수라 하자.

1. (나머지가 $f(c)$인 나눗셈) $f = (t - c)q + f(c)\,t^0$인 $q \in \mathcal{P}_{n-1}$이 있다.
2. (인수 정리) $f(c) = 0$인 것은 정확히 $f = (t - c)q$인 $q \in \mathcal{P}_{n-1}$이 있을 때이다.
3. 함수 $g \in \mathbb{R}^{\mathbb{R}}$에 대하여 $f = (t - c)g$이면 $f(c) = 0$이다.
4. (보조 사실) 정수 $k \ge 1$마다 $t^k - c^k t^0 = (t - c)q_k$인 $q_k \in \mathcal{P}_{k-1}$이 있다.
:::

:::english
$t^k$, $t - c$, $\mathcal{P}_n$, the zero function $o$ and the notation for coefficients are those of the entry on polynomial functions, and the product $fg$ of functions is that of the entry on products of polynomial functions.

Let $n \ge 1$ be an integer, $f \in \mathcal{P}_n$, and $c$ a real number.

1. (Division with remainder $f(c)$) There is $q \in \mathcal{P}_{n-1}$ with $f = (t - c)q + f(c)\,t^0$.
2. (Factor theorem) $f(c) = 0$ exactly when there is $q \in \mathcal{P}_{n-1}$ with $f = (t - c)q$.
3. For a function $g \in \mathbb{R}^{\mathbb{R}}$, if $f = (t - c)g$, then $f(c) = 0$.
4. (Auxiliary fact) For every integer $k \ge 1$ there is $q_k \in \mathcal{P}_{k-1}$ with $t^k - c^k t^0 = (t - c)q_k$.
:::

## 직관

정수를 $7$로 나누면 몫과 나머지가 생기듯, 다항함수를 $t - c$로 "나누면" 몫 $q$와 상수인 나머지가 생깁니다. (1)은 그 나머지가 바로 $f(c)$라는 것입니다. $x = c$를 넣으면 $(t - c)q$ 부분은 $(c - c)q(c) = 0$이 되어 사라지고 나머지만 남기 때문입니다. 그래서 $c$에서 값이 $0$이면 나머지가 없고, $f$는 $t - c$의 배가 됩니다((2)). 정수에서 나머지가 $0$이면 나누어떨어진다는 것과 같은 모양입니다.

나눗셈의 핵심은 $x^k - c^k$이 $x - c$로 나누어떨어진다는 (4)입니다. $k = 2$이면 $x^2 - c^2 = (x - c)(x + c)$이고, 일반적으로는 $x^{k+1} - c^{k+1} = x(x^k - c^k) + c^k(x - c)$로 한 단계씩 넘어갑니다. $f$의 각 항 $a_k t^k$에서 $a_k c^k$를 빼면 모두 $t - c$로 나누어떨어지고, 뺀 것들을 모으면 $f(c)$입니다.

$n \ge 1$이라는 가정은 몫이 드는 공간 $\mathcal{P}_{n-1}$을 말하기 위한 것입니다. $n = 0$이면 $f$는 상수함수이고, $f(c) = 0$이면 $f$는 영함수입니다. 그런 $f$도 $\mathcal{P}_1$의 원소로 보면 $q = o$로 (2)가 성립합니다.

## 증명

:::idea
$t^k - c^k t^0$이 $t - c$의 배라는 것을 $k$에 대한 귀납으로 보이고, $f - f(c)t^0$을 그런 함수들의 일차결합으로 쓴다.
:::

:::hint
값으로 확인한다: $x^{k+1} - c^{k+1} = x(x^k - c^k) + c^k(x - c)$이다.
:::

:::hint
$f = a_0 t^0 + \cdots + a_n t^n$이면 $f(x) - f(c)$는 $i$번째 항이 $a_{i-1}(x^{i-1} - c^{i-1})$인 열의 합이고, 첫째 항은 $0$이다.
:::

:::proof
두 함수는 모든 $x$에서 값이 같으면 같다([[function|함수]]의 같음). (K…)는 [[real-number-arithmetic]]의 것, (H…), (C…)는 [[finite-sum-of-vectors]]의 것, (S3)은 [[subspace]]의 것, (T5)는 [[linear-map]]의 것, (B…)는 [[vector-space-basic-properties]]의 것이다. [[polynomial-function|다항함수]]와 [[product-of-polynomial-functions|다항함수의 곱]]의 번호는 그 항목의 것이다. $t - c$의 값은 $x - c$이고(다항함수의 "상수함수" 문단), 함수의 곱의 값은 값의 곱이다.

**(4)의 증명.** $k$에 대한 [[mathematical-induction|수학적 귀납법]]을 쓴다. $k = 1$이면 $q_1 = t^0 \in \mathcal{P}_0$으로 둔다. 곱의 (1)에 의해 $(t - c)t^0 = t^0(t - c) = t - c$이고, $t - c$는 정의에 의해 $t^1 - c\,t^0$이며 $c^1 = c$(거듭제곱의 (1))이다.

$k \ge 1$에서 $t^k - c^k t^0 = (t - c)q_k$, $q_k \in \mathcal{P}_{k-1}$이라 하자. $q_{k+1} = t\,q_k + c^k t^0$으로 둔다. 곱의 (4)에 의해 $t\,q_k \in \mathcal{P}_{1 + (k - 1)} = \mathcal{P}_k$이고, 다항함수의 (2)와 (1)에 의해 $c^k t^0 \in \mathcal{P}_0 \subseteq \mathcal{P}_k$이므로 $q_{k+1} \in \mathcal{P}_k$이다. 모든 실수 $x$에서
$$
\begin{aligned}
&\bigl((t - c)q_{k+1}\bigr)(x) \\
&= (x - c)\bigl(x\,q_k(x) + c^k\bigr) \\
&= x\,(x - c)q_k(x) + c^k(x - c) \\
&= x\,(x^k - c^k) + c^k(x - c) \\
&= x^{k+1} - c^{k+1}
\end{aligned}
$$
이다. 첫째·둘째 등호는 곱과 합과 스칼라배의 값, (K1)–(K3)이고, 셋째 등호는 귀납 가정의 $x$에서의 값($(x - c)q_k(x) = x^k - c^k$)이며, 마지막 등호는 (K3), (K12)와 거듭제곱의 (1)의 $x\,x^k = x^{k+1}$, $c^k c = c^{k+1}$이다($x c^k$와 $c^k x$가 지워진다). 오른쪽은 $t^{k+1} - c^{k+1}t^0$의 $x$에서의 값이므로 두 함수는 같다.

**(1)의 증명.** $f = a_0 t^0 + \cdots + a_n t^n$이라 하자. (4)의 $q_1, \dots, q_n$으로, 길이 $n$이고 $i$번째 항이 $a_i q_i$인 열의 합을 $q = a_1 q_1 + \cdots + a_n q_n$으로 둔다. $1 \le i \le n$이면 $q_i \in \mathcal{P}_{i-1} \subseteq \mathcal{P}_{n-1}$(다항함수의 (2). $i - 1 \le n - 1$은 (Z7))이므로 (S3)과 (H1)에 의해 $q \in \mathcal{P}_{n-1}$이다.

곱의 (1)에 의해 $u$를 $u(t - c)$로 보내는 사상은 선형사상이고 $u(t - c) = (t - c)u$이므로, (T5)와 (4)에 의해
$$
\begin{aligned}
(t - c)q &= a_1 \bigl(t^1 - c^1 t^0\bigr) + \cdots \\
&\quad + a_n \bigl(t^n - c^n t^0\bigr)
\end{aligned}
$$
이다(오른쪽은 $i$번째 항이 $a_i(t^i - c^i t^0)$인 열의 합). [[standard-basis|ℝⁿ의 표준기저]]의 (1)에 의해 그 $x$에서의 값은 $i$번째 항이 $a_i(x^i - c^i)$인 실수의 열의 합 $s(x)$이다.

한편 다항함수의 (3)에 의해 $f(x)$와 $f(c)$는 $j$번째 항이 각각 $a_{j-1}x^{j-1}$, $a_{j-1}c^{j-1}$인 길이 $n + 1$인 실수의 열의 합이다. (H3)과 (H4)($\alpha = -1$)와 (K9), (K3)에 의해 $f(x) - f(c)$는 $j$번째 항이 $a_{j-1}(x^{j-1} - c^{j-1})$인 열의 합이다. 이 열의 첫째 항은 $a_0(x^0 - c^0) = a_0(1 - 1) = 0$이고, 첫째 항을 지운 열의 $i$번째 항은 $a_i(x^i - c^i)$이다. (H6)을 첫째 항에 쓰면 $f(x) - f(c) = s(x) + 0 = s(x)$이다.

따라서 모든 $x$에서 $f(x) = ((t - c)q)(x) + f(c) = \bigl((t - c)q + f(c)t^0\bigr)(x)$이고, $f = (t - c)q + f(c)\,t^0$이다.

**(3)의 증명.** $f(c) = (c - c)g(c) = 0 \cdot g(c) = 0$이다((K12)의 (v), (K9)).

**(2)의 증명.** $f(c) = 0$이면 (1)의 $q$에 대해 $f = (t - c)q + 0\,t^0 = (t - c)q + o = (t - c)q$이다((B3)과 영벡터). 거꾸로 $f = (t - c)q$인 $q$가 있으면 (3)에 의해 $f(c) = 0$이다. $\blacksquare$
:::

## 예시와 반례

:::example[이차 다항함수를 t − 2 로 나누기]
$f = -5t^0 + 1\,t^1 + 1\,t^2$와 $c = 2$이면 $f(2) = -5 + 2 + 4 = 1$입니다. (1)의 증명을 따라 $q_1 = t^0$, $q_2 = t\,q_1 + 2t^0 = 2t^0 + 1\,t^1$이고, $q = a_1 q_1 + a_2 q_2 = 1\,t^0 + (2t^0 + t^1) = 3t^0 + 1\,t^1$입니다. 실제로 $(x - 2)(x + 3) + 1 = x^2 + x - 6 + 1 = x^2 + x - 5$이므로 $f = (t - 2)q + 1\,t^0$입니다. 나머지 $1$이 $f(2)$와 같습니다.
:::

:::example[근에서 일차식 떼어 내기]
$g = 6t^0 - 5t^1 + 1\,t^2$은 $g(3) = 6 - 15 + 9 = 0$이므로 (2)에 의해 $g = (t - 3)q$인 $q \in \mathcal{P}_1$이 있습니다. (1)의 증명대로 $q_1 = t^0$, $q_2 = t\,q_1 + 3t^0 = 3t^0 + 1\,t^1$이고 $q = (-5)q_1 + 1\,q_2 = -2t^0 + 1\,t^1$입니다. $(x - 3)(x - 2) = x^2 - 5x + 6$으로 맞습니다.
:::

:::counterexample[근이 아닌 점에서는 나머지가 남는 예]
$h = 1\,t^0 + 1\,t^2$은 모든 $x$에서 $h(x) = 1 + x^2$입니다. $c = 0$이면 $h(0) = 1 \ne 0$이므로 (3)의 대우에 의해 어떤 함수 $g$로도 $h = (t - 0)g$라 쓸 수 없습니다. (1)은 여전히 $h = t\,q + 1\,t^0$, $q = 1\,t^1$을 줍니다. 나머지 $1$이 $0$이 아니어서 $t$가 인수가 되지 않습니다.
:::

## 확인 질문

:::check[$f = 2t^0 + 0\,t^1 - 1\,t^2 + 1\,t^3$을 $t - 1$로 나눈 (1)의 나머지는 무엇인가?]
나머지는 $f(1)\,t^0$이고 $f(1) = 2 + 0 - 1 + 1 = 2$이므로 $2t^0$입니다.
:::

:::check[$n = 1$이고 $f = a_0 t^0 + a_1 t^1$일 때 (1)의 $q$는 무엇인가?]
증명의 $q = a_1 q_1 = a_1 t^0$, 곧 값이 $a_1$인 상수함수입니다. 확인하면 $(x - c)a_1 + (a_0 + a_1 c) = a_1 x + a_0$입니다.
:::
