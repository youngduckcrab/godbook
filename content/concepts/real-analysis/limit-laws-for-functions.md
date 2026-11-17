---
title: 함수의 극한의 사칙연산
title_en: Limit Laws for Functions
aliases: [함수의 극한의 성질, 함수의 극한의 계산 법칙, 몫의 극한, 절댓값의 극한, limit laws, algebra of limits of functions]
kind: proposition
field: real-analysis
msc: ["26A03"]
level: undergrad
summary: 두 실함수가 집적점 c 에서 수렴하면 합, 차, 곱, 상수배, 절댓값도 수렴하고 극한은 극한의 합, 차, 곱, 상수배, 절댓값이다. 분모의 극한이 0 이 아니면 분모가 0 이 아닌 점들의 집합 위의 몫도 그렇다. 극한이 있는 함수가 c 가까이에서 유계라는 것과 분모가 0 에서 떨어진다는 것을 함께 증명한다.
requires: [proof-by-contradiction, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, triangle-inequality, interval, real-valued-function, cluster-point, limit-of-a-function]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 3.1.3절 Corollary 3.1.11 앞 문단, Corollary 3.1.12, 3.1.13 (p.118), 연습문제 3.1.4, 3.1.16 (p.120–121); 4.1절 Example 4.1.2 (p.156)
    checked: original
    note: "출처의 Corollary 3.1.12(p.118)는 c 가 S 의 집적점이고 f, g 의 극한이 있을 때 (i) 합, (ii) 차, (iii) 곱의 극한이 극한의 합, 차, 곱이고, (iv) lim g ≠ 0 이고 S \\ {c} 의 모든 x 에서 g(x) ≠ 0 이면 f(x)/g(x) 의 극한이 극한의 몫이라는 것이다. 이 항목의 (3), (4), (5), (8)이다. Corollary 3.1.13(p.118)은 |f(x)| 의 극한이 극한의 절댓값이라는 것이고, 이 항목의 (7)이다. 출처는 3.1.12 를 'Lemma 3.1.7(수열로 본 극한)을 같은 방식으로 쓰면' 얻는다고 하고 증명을 연습문제 3.1.4(p.120)로 두며, 3.1.13 의 증명은 연습문제 3.1.16 a)(p.121)로 둔다. 이 항목은 모두 ε–δ 로 직접 증명한다. 출처의 (iv)는 lim g ≠ 0 과 S \\ {c} 의 모든 x 에서 g(x) ≠ 0 을 가정한다. 이 항목은 몫을 g 가 0 이 아닌 점들의 집합 Z 위의 함수로 정하고(real-valued-function 의 (5)), c 가 Z 의 집적점임을 (2)로 증명한다. 이 꼴에서는 S \\ {c} 에서 g ≠ 0 이라는 가정을 따로 두지 않는다. 상수배 (6), c 가까이에서 유계 (1), 분모가 0 에서 떨어진다는 (2)는 출처에 명제로 없다(검색한 범위). 예시 '약분'은 출처의 Example 4.1.2(p.156)에서 (x² − c²)/(x − c) = x + c 로 바꾸어 극한을 구하는 것과 같은 계산이다. 반례 '분모의 극한이 0 이면'은 출처의 Example 3.3.5(p.132)가 (0, 1) 위의 1/x 에 대해 '0 에 다가가면 값이 유계가 아니다'라고 적는 것과 같은 식(정의역은 다르다), 같은 발상이고, 이 항목은 그것을 (1)과 귀류법으로 증명했다. 예시 '분모가 0 이 되지 않는 몫'과 확인 질문은 출처에 없다(검색한 범위). 출처는 x² + 1 을 Example 3.3.3(p.131)에서 최댓값·최솟값의 예로, p.134 에서 실근이 없는 다항식의 예로 쓴다."
status: source-checked
added: 2026-11-17
---

:::statement
실함수와 그 합 $f + g$, 차 $f - g$, 곱 $fg$, 상수배 $kf$, 절댓값 $|f|$, 몫 $f/g$, $1/g$는 [[real-valued-function]]의 것이고, 집적점은 [[cluster-point]]의 것이며, 수렴, "$c$ 가까이에서 성립한다", 기호 $\lim_{x \to c}$는 [[limit-of-a-function]]의 것이다. $S$를 $\mathbb{R}$의 부분집합, $c$를 $S$의 집적점, $k$를 실수, $f$, $g$를 $S$ 위의 실함수라 하자. 각 번호는 거기 적은 함수의 수렴만 가정한다.

1. ($c$ 가까이에서 유계) $f$가 $c$에서 $L_1$로 수렴하면 "$|f(x)| < |L_1| + 1$"이 $c$ 가까이에서 성립한다. 특히 어떤 양의 실수 $B$가 있어 "$|f(x)| \le B$"가 $c$ 가까이에서 성립한다.
2. (분모가 $0$에서 떨어진다) $g$가 $c$에서 $L_2$로 수렴하고 $L_2 \ne 0$이면 "$2^{-1}|L_2| < |g(x)|$"가 $c$ 가까이에서 성립하고, 특히 "$g(x) \ne 0$"이 $c$ 가까이에서 성립한다.

아래 (3)–(5)에서는 $f$, $g$가 $c$에서 각각 $L_1$, $L_2$로 수렴한다고 하고, (6), (7)에서는 $f$가 $c$에서 $L_1$로 수렴한다고 한다.

3. (합) $f + g$는 $c$에서 $L_1 + L_2$로 수렴한다. 곧 $\lim_{x \to c} (f(x) + g(x)) = L_1 + L_2$이다.
4. (차) $f - g$는 $c$에서 $L_1 - L_2$로 수렴한다.
5. (곱) $fg$는 $c$에서 $L_1 L_2$로 수렴한다.
6. (상수배) $kf$는 $c$에서 $k L_1$로 수렴한다.
7. (절댓값) $|f|$는 $c$에서 $|L_1|$로 수렴한다.
8. (몫) $g$가 $c$에서 $L_2$로 수렴하고 $L_2 \ne 0$이라 하며, $Z = \{x \in S : g(x) \ne 0\}$으로 두자. 그러면 $c$는 $Z$의 집적점이고, $1/g : Z \to \mathbb{R}$는 $c$에서 $L_2^{-1}$로 수렴한다. 또 $f$가 $c$에서 $L_1$로 수렴하면 $f/g : Z \to \mathbb{R}$는 $c$에서 $L_1 / L_2$로 수렴한다. $S$의 모든 원소 $x$에서 $g(x) \ne 0$이면 $Z = S$이다.
:::

:::english
Real-valued functions and their sum $f + g$, difference $f - g$, product $fg$, scalar multiple $kf$, absolute value $|f|$, and quotients $f/g$, $1/g$ are those of the entry on real-valued functions; cluster points are those of the entry on cluster points; and convergence, "holds near $c$", and the symbol $\lim_{x \to c}$ are those of the entry on the limit of a function. Let $S$ be a subset of $\mathbb{R}$, $c$ a cluster point of $S$, $k$ a real number, and $f$, $g$ real-valued functions on $S$. Each item assumes only the convergence of the functions named in it.

1. (Bounded near $c$) If $f$ converges to $L_1$ at $c$, then "$|f(x)| < |L_1| + 1$" holds near $c$. In particular, there is a positive real number $B$ such that "$|f(x)| \le B$" holds near $c$.
2. (The denominator stays away from $0$) If $g$ converges to $L_2$ at $c$ and $L_2 \ne 0$, then "$2^{-1}|L_2| < |g(x)|$" holds near $c$; in particular, "$g(x) \ne 0$" holds near $c$.

In (3)–(5) below, $f$ and $g$ converge at $c$ to $L_1$ and $L_2$ respectively, and in (6) and (7), $f$ converges to $L_1$ at $c$.

3. (Sum) $f + g$ converges to $L_1 + L_2$ at $c$. That is, $\lim_{x \to c} (f(x) + g(x)) = L_1 + L_2$.
4. (Difference) $f - g$ converges to $L_1 - L_2$ at $c$.
5. (Product) $fg$ converges to $L_1 L_2$ at $c$.
6. (Scalar multiple) $kf$ converges to $k L_1$ at $c$.
7. (Absolute value) $|f|$ converges to $|L_1|$ at $c$.
8. (Quotient) Suppose $g$ converges to $L_2$ at $c$ with $L_2 \ne 0$, and let $Z = \{x \in S : g(x) \ne 0\}$. Then $c$ is a cluster point of $Z$ and $1/g : Z \to \mathbb{R}$ converges to $L_2^{-1}$ at $c$. If moreover $f$ converges to $L_1$ at $c$, then $f/g : Z \to \mathbb{R}$ converges to $L_1 / L_2$ at $c$. If $g(x) \ne 0$ for every element $x$ of $S$, then $Z = S$.
:::

## 직관

수열의 극한의 사칙연산과 같은 내용을 함수에 대해 말한 것입니다. $c$ 가까이에서 $f(x)$가 $L_1$에, $g(x)$가 $L_2$에 가까우면 $f(x) + g(x)$는 $L_1 + L_2$에 가깝습니다. 두 저울의 오차가 각각 $\varepsilon/2$ 미만이면 두 무게를 더한 값의 오차는 $\varepsilon$ 미만이라는 것과 같습니다. 비유가 맞는 곳은 오차가 더해진다는 것(삼각부등식)이고, 맞지 않는 곳은 곱과 몫입니다. 곱에서는 오차가 곱해지는 수의 크기만큼 커지므로, 그 수가 $c$ 가까이에서 유계라는 (1)이 필요합니다.

몫에서는 두 가지를 더 챙깁니다. 하나는 $g(x)$가 $0$에 너무 가까워지지 않아야 $1/g(x)$의 오차를 누를 수 있다는 것이고, 이것이 (2)입니다. 다른 하나는 정의역입니다. $f/g$는 $g$가 $0$이 아닌 점들의 집합 $Z$ 위의 함수이므로, $Z$ 위에서 극한을 말하려면 $c$가 $Z$의 집적점이어야 합니다. (2)가 "$c$ 가까이에서는 $g$가 $0$이 아니다"를 주므로 이것도 해결됩니다. $g(c) = 0$이어도 상관없습니다. $c$는 $Z$에 속하지 않을 뿐 여전히 $Z$의 집적점입니다.

이 법칙들은 $f$와 $g$가 각각 수렴한다는 가정 아래에서만 쓸 수 있습니다. 아래 예시처럼 분모의 극한이 $0$인 몫도 수렴할 수 있지만, 그때는 (8)이 아니라 다른 방법으로 보여야 합니다.

## 증명

:::idea
합과 차는 삼각부등식과 $\varepsilon/2$로 보인다. 곱은 $f(x)g(x) - L_1L_2 = f(x)(g(x) - L_2) + L_2(f(x) - L_1)$로 나누고 (1)로 $|f(x)|$를 누른다. 몫은 (2)로 $|g(x)|$를 아래에서 누른 뒤 $|g(x)^{-1} - L_2^{-1}|$을 $|g(x) - L_2|$의 상수배로 누른다.
:::

:::hint
여러 부등식이 각각 $c$ 가까이에서 성립하면 함께 성립한다([[limit-of-a-function]]의 (2)의 (i)). 각 부등식에 필요한 $\varepsilon$을 미리 정해 두고 한꺼번에 쓴다.
:::

:::hint
몫에서는 $g(x)^{-1} - L_2^{-1} = (L_2 - g(x))\,g(x)^{-1} L_2^{-1}$을 쓰고, $2^{-1}|L_2| < |g(x)|$에서 $|g(x)|^{-1} < 2|L_2|^{-1}$을 얻는다.
:::

:::proof
(K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (8)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (4)"는 [[absolute-value]]의 번호, "삼각부등식 (1)"은 [[triangle-inequality]]의 번호, "실함수 (2)"는 [[real-valued-function]]의 번호, "극한 (2)"는 [[limit-of-a-function]]의 번호이다. 기호의 약속에 의해 "$\lim_{x \to c} h(x) = L$"은 정확히 $h$가 $c$에서 $L$로 수렴한다는 뜻이다. 먼저 사실 하나를 본다.

- (ㄱ) 양의 실수 $\varepsilon$에 대하여 순서 성질 (8)의 둘째 문장에 의해 $0 < \varepsilon 2^{-1}$이고, (K3), (K4), (K7)의 $1 + 1 = 2$, (K1), (K8)의 (iii)에 의해 $\varepsilon 2^{-1} + \varepsilon 2^{-1} = \varepsilon(2^{-1}(1 + 1)) = \varepsilon(2^{-1} \cdot 2) = \varepsilon$이다.

**1의 증명.** 순서 성질 (5)의 (ii)에 의해 $1$은 양수이므로, 수렴의 정의에 의해 "$|f(x) - L_1| < 1$"이 $c$ 가까이에서 성립한다. 그런 $x$에서 (K2), (K8)의 (ii), (K4)에 의해 $f(x) = (f(x) - L_1) + L_1$이므로, 삼각부등식 (1)과 순서 성질 (2)의 (iv)에 의해
$$
|f(x)| \le |f(x) - L_1| + |L_1| < 1 + |L_1|
$$
이고 순서 성질 (1)의 (v)와 (K1)에 의해 $|f(x)| < |L_1| + 1$이다. $B = |L_1| + 1$로 두면, 절댓값 (2)의 $0 \le |L_1|$과 $0 < 1$, 순서 성질 (2)의 (iv)와 (K4)에 의해 $0 < B$이고, $|f(x)| < B$에서 $|f(x)| \le B$이다.

**2의 증명.** $L_2 \ne 0$이므로 절댓값 (2)에 의해 $|L_2| \ne 0$이고 $0 \le |L_2|$이므로 $0 < |L_2|$이다. $\eta = 2^{-1}|L_2|$로 두면 (ㄱ)에 의해 $0 < \eta$이고 $\eta + \eta = |L_2|$이다. 수렴의 정의에 의해 "$|g(x) - L_2| < \eta$"가 $c$ 가까이에서 성립한다. 그런 $x$에서 절댓값 (6), 삼각부등식 (2), 절댓값 (3)에 의해
$$
|L_2| - |g(x)| \le \bigl|\,|L_2| - |g(x)|\,\bigr| \le |L_2 - g(x)| = |g(x) - L_2| < \eta
$$
이다. 순서 성질 (1)의 (v)에 의해 $|L_2| - |g(x)| < \eta$이고, 순서 성질 (2)의 (ii)로 양변에 $|g(x)| - \eta$를 더하면 (K1), (K2), (K8)의 (ii), (K4)와 $|L_2| = \eta + \eta$에 의해 $\eta < |g(x)|$이다. $0 < \eta$이므로 (W2)에 의해 $0 < |g(x)|$이고, 순서 성질 (1)의 (i)과 절댓값 (2)에 의해 $g(x) \ne 0$이다.

**3의 증명.** 양의 실수 $\varepsilon$을 잡는다. (ㄱ)에 의해 $\varepsilon 2^{-1}$은 양수이므로 "$|f(x) - L_1| < \varepsilon 2^{-1}$"과 "$|g(x) - L_2| < \varepsilon 2^{-1}$"이 각각 $c$ 가까이에서 성립하고, 극한 (2)의 (i)에 의해 함께 성립한다. 그런 $x$에서 (K1), (K2), (K12)의 (iv)에 의해 $(f(x) + g(x)) - (L_1 + L_2) = (f(x) - L_1) + (g(x) - L_2)$이므로, 삼각부등식 (1), 순서 성질 (2)의 (iv), (ㄱ)에 의해
$$
|(f + g)(x) - (L_1 + L_2)| \le |f(x) - L_1| + |g(x) - L_2| < \varepsilon 2^{-1} + \varepsilon 2^{-1} = \varepsilon
$$
이다(순서 성질 (1)의 (v)). 따라서 "$|(f + g)(x) - (L_1 + L_2)| < \varepsilon$"이 $c$ 가까이에서 성립하고, $\varepsilon$은 임의였으므로 $f + g$는 $c$에서 $L_1 + L_2$로 수렴한다.

**4의 증명.** 3의 증명과 같이 두 부등식이 함께 성립하는 $x$를 다룬다. (K1), (K2), (K12)의 (iv), (K9)에 의해 $(f(x) - g(x)) - (L_1 - L_2) = (f(x) - L_1) - (g(x) - L_2)$이므로, 삼각부등식 (3)과 순서 성질 (2)의 (iv), (ㄱ)에 의해
$$
|(f - g)(x) - (L_1 - L_2)| \le |f(x) - L_1| + |g(x) - L_2| < \varepsilon
$$
이다. 따라서 $f - g$는 $c$에서 $L_1 - L_2$로 수렴한다.

**5의 증명.** 이 항목의 (1)의 $B = |L_1| + 1$과 $C = |L_2| + 1$을 쓴다. (1)의 증명에서와 같이 $B$, $C$는 양수이고, 순서 성질 (2)의 (ii)로 $0 < 1$의 양변에 $|L_2|$를 더하면 $|L_2| < C$이다. 양의 실수 $\varepsilon$을 잡고 $\varepsilon_1 = \varepsilon 2^{-1} B^{-1}$, $\varepsilon_2 = \varepsilon 2^{-1} C^{-1}$로 두면 (ㄱ), 순서 성질 (6)의 (i), (W4)에 의해 둘 다 양수이다. 다음 세 부등식이 각각 $c$ 가까이에서 성립하고(앞의 둘은 수렴의 정의, 셋째는 (1)), 극한 (2)의 (i)에 의해 함께 성립한다.
$$
|g(x) - L_2| < \varepsilon_1, \qquad |f(x) - L_1| < \varepsilon_2, \qquad |f(x)| \le B.
$$
그런 $x$를 다룬다. (K1)–(K3), (K12)의 (i), (ii)로 전개하면 $f(x)(g(x) - L_2) = f(x)g(x) - f(x)L_2$이고 $L_2(f(x) - L_1) = f(x)L_2 - L_1L_2$이므로, (K2), (K8)의 (ii), (K4)에 의해
$$
f(x)g(x) - L_1 L_2 = f(x)\bigl(g(x) - L_2\bigr) + L_2\bigl(f(x) - L_1\bigr)
$$
이다. 삼각부등식 (1)과 절댓값 (4)에 의해 왼쪽의 절댓값은 $|f(x)|\,|g(x) - L_2| + |L_2|\,|f(x) - L_1|$ 이하이다. 절댓값 (2)에 의해 $|g(x) - L_2|$와 $|f(x) - L_1|$은 $0$ 이상이므로, 순서 성질 (4)의 (iii)과 (4)의 (i)에 의해
$$
|f(x)|\,|g(x) - L_2| \le B\,|g(x) - L_2| \le B \varepsilon_1 = \varepsilon 2^{-1}, \qquad |L_2|\,|f(x) - L_1| \le C\,|f(x) - L_1| < C \varepsilon_2 = \varepsilon 2^{-1}
$$
이다(첫 줄의 둘째 부등식은 $|g(x) - L_2| < \varepsilon_1$에 양수 $B$를 곱한 것이고, 두 등식은 (K1), (K2), (K8)의 (iii), (K4)). 순서 성질 (2)의 (iv)와 (ㄱ), (1)의 (v)에 의해 $|(fg)(x) - L_1L_2| < \varepsilon 2^{-1} + \varepsilon 2^{-1} = \varepsilon$이다. 따라서 $fg$는 $c$에서 $L_1L_2$로 수렴한다.

**6의 증명.** $S$ 위의 값이 $k$인 상수함수를 $u$라 하면 극한 (4)에 의해 $u$는 $c$에서 $k$로 수렴한다. 모든 $x \in S$에서 $(uf)(x) = u(x)f(x) = k\,f(x) = (kf)(x)$이므로 실함수 (2)에 의해 $uf = kf$이다. 이 항목의 (5)를 $u$와 $f$에 쓰면 $kf$는 $c$에서 $kL_1$로 수렴한다.

**7의 증명.** 양의 실수 $\varepsilon$에 대하여 "$|f(x) - L_1| < \varepsilon$"이 $c$ 가까이에서 성립한다. 그런 $x$에서 삼각부등식 (2)에 의해 $\bigl||f|(x) - |L_1|\bigr| = \bigl||f(x)| - |L_1|\bigr| \le |f(x) - L_1| < \varepsilon$이다. 따라서 $|f|$는 $c$에서 $|L_1|$로 수렴한다.

**8의 증명.** (2)에 의해 "$g(x) \ne 0$"이 $c$ 가까이에서 성립하므로, 극한 (2)의 (ii)에 의해 $c$는 $\{x \in S : g(x) \ne 0\} = Z$의 집적점이다. $Z = S$인 경우는 실함수 (5)이다.

$1/g$의 극한. $\eta = 2^{-1}|L_2|$로 두면 (2)의 증명에서와 같이 $\eta$는 양수이다. 양의 실수 $\varepsilon$을 잡고 $\varepsilon_3 = \varepsilon\,\eta\,|L_2|$로 두면 (W4)에 의해 양수이다. "$\eta < |g(x)|$"((2))와 "$|g(x) - L_2| < \varepsilon_3$"(수렴의 정의)이 각각 $c$ 가까이에서 성립하고, 극한 (2)의 (i)에 의해 함께 성립한다. 그러면 어떤 양수 $\delta_0$이 있어 $x \in S$, $x \ne c$, $|x - c| < \delta_0$인 모든 $x$에서 두 부등식이 성립한다. $x \in Z$, $x \ne c$, $|x - c| < \delta_0$인 $x$를 잡으면 $Z \subseteq S$이므로 두 부등식이 성립하고, $g(x) \ne 0$이다.

이런 $x$에서 (K1)–(K4), (K8)의 (iii), (K12)의 (i), (ii)로 전개하면
$$
\bigl(L_2 - g(x)\bigr)\,g(x)^{-1} L_2^{-1} = g(x)^{-1}\bigl(L_2 L_2^{-1}\bigr) - \bigl(g(x)\,g(x)^{-1}\bigr) L_2^{-1} = g(x)^{-1} - L_2^{-1}
$$
이다. $0 < \eta < |g(x)|$이므로 순서 성질 (6)의 (ii)에 의해 $|g(x)|^{-1} < \eta^{-1}$이다. 절댓값 (4), (3), (9)에 의해
$$
\bigl|(1/g)(x) - L_2^{-1}\bigr| = |g(x) - L_2|\,|L_2|^{-1}\,|g(x)|^{-1}
$$
이다. 순서 성질 (6)의 (i)에 의해 $|L_2|^{-1}$은 양수이고 $|g(x) - L_2|$는 $0$ 이상이므로 순서 성질 (4)의 (iv)에 의해 $|g(x) - L_2|\,|L_2|^{-1} \ge 0$이고, 순서 성질 (4)의 (iii)에 의해 오른쪽은 $|g(x) - L_2|\,|L_2|^{-1}\,\eta^{-1}$ 이하이다. 또 $|L_2|^{-1}\eta^{-1}$은 양수이므로 순서 성질 (4)의 (i)에 의해 이것은 $\varepsilon_3\,|L_2|^{-1}\eta^{-1}$보다 작다. (K1), (K2), (K8)의 (iii), (K4)에 의해 $\varepsilon_3\,|L_2|^{-1}\eta^{-1} = \varepsilon\,(\eta\,\eta^{-1})(|L_2|\,|L_2|^{-1}) = \varepsilon$이다. 순서 성질 (1)의 (v)에 의해 $|(1/g)(x) - L_2^{-1}| < \varepsilon$이다. 따라서 $1/g$는 $c$에서 $L_2^{-1}$로 수렴한다.

$f/g$의 극한. $c$가 $Z$의 집적점이고 $Z \subseteq S$이므로, 극한 (7)에 의해 제한 $f|_Z$는 $c$에서 $L_1$로 수렴한다. $Z$ 위의 두 실함수 $f|_Z$와 $1/g$에 대하여, 모든 $x \in Z$에서 실함수 (6)에 의해 $(f|_Z \cdot (1/g))(x) = f(x)\,g(x)^{-1} = (f/g)(x)$이므로 실함수 (2)에 의해 $f|_Z \cdot (1/g) = f/g$이다. 이 항목의 (5)를 $S$ 대신 $Z$에, $f$ 대신 $f|_Z$에, $g$ 대신 $1/g$에 쓰면 $f/g$는 $c$에서 $L_1 L_2^{-1} = L_1/L_2$로 수렴한다. $\blacksquare$
:::

## 예시와 반례

:::example[분모가 $0$이 되지 않는 몫]
$\lim_{x \to 2} \dfrac{1}{x x + 1}$을 구합니다. $g(x) = x x + 1$로 정한 $g : \mathbb{R} \to \mathbb{R}$를 생각합니다. $\mathbb{R}$은 [[interval|구간]]이므로 [[cluster-point]]의 (6)에 의해 $2$는 $\mathbb{R}$의 집적점입니다. 항등함수 $i = i_{\mathbb{R}}$는 $2$에서 $2$로, 값이 $1$인 상수함수 $u$는 $1$로 수렴합니다([[limit-of-a-function]]의 (4)). (5)에 의해 $i\,i$는 $2 \cdot 2 = 4$로, (3)에 의해 $i\,i + u$는 $4 + 1 = 5$로 수렴하고, 모든 $x$에서 $(i\,i + u)(x) = x x + 1 = g(x)$이므로 $g$는 $2$에서 $5$로 수렴합니다.

모든 실수 $x$에서 [[order-properties-of-reals]]의 (5)의 (iii)에 의해 $0 \le x x$이므로 $0 < 1 \le x x + 1$이고 $g(x) \ne 0$입니다. 그래서 (8)의 $Z$는 $\mathbb{R}$ 전체이고, $5 \ne 0$이므로 $1/g$는 $2$에서 $5^{-1}$로 수렴합니다. 곧 $\lim_{x \to 2} \dfrac{1}{x x + 1} = \dfrac{1}{5}$입니다.
:::

:::example[분모의 극한이 $0$이어도 몫이 수렴할 수 있다: 약분]
$f(x) = x x - 1$, $g(x) = x - 1$로 정한 $\mathbb{R}$ 위의 실함수를 생각합니다. $g$는 $1$에서 $0$으로 수렴하므로(위의 예시와 같이 (4)와 [[limit-of-a-function]]의 (4)) (8)을 쓸 수 없습니다. $f/g$의 정의역은 $Z = \{x \in \mathbb{R} : x \ne 1\}$입니다. $Z$는 열린구간 $(1, 2)$를 포함하고 $1 \in [1, 2]$이므로 [[cluster-point]]의 (5), (4)에 의해 $1$은 $Z$의 집적점입니다.

$x \in Z$이면 (K1)–(K3), (K12)로 전개해 $x x - 1 = (x + 1)(x - 1)$이고 $x - 1 \ne 0$이므로 (K8)의 (iii)에 의해 $(f/g)(x) = (x + 1)(x - 1)(x - 1)^{-1} = x + 1$입니다. $h(x) = x + 1$로 정한 $h : \mathbb{R} \to \mathbb{R}$는 (3)에 의해 $1$에서 $1 + 1 = 2$로 수렴하고, [[limit-of-a-function]]의 (7)에 의해 $h|_Z$도 그렇습니다. 모든 $x \in Z$에서 $h|_Z(x) = x + 1 = (f/g)(x)$이므로 [[real-valued-function]]의 (2)에 의해 $f/g = h|_Z$이고, $\lim_{x \to 1} \dfrac{x x - 1}{x - 1} = 2$입니다.
:::

:::counterexample[분모의 극한이 $0$이면 몫이 수렴하지 않을 수 있다]
$f$를 $\mathbb{R}$ 위의 값이 $1$인 상수함수, $g = i_{\mathbb{R}}$이라 합시다. $g$는 $0$에서 $0$으로 수렴하고, $1/g$의 정의역은 $Z = \{x \in \mathbb{R} : x \ne 0\}$이며 $(1/g)(x) = x^{-1}$입니다. 위의 예시와 같은 이유로 $0$은 $Z$의 집적점입니다. $1/g$가 $0$에서 어떤 실수 $L$로 수렴한다고 하고 모순을 끌어냅니다([[proof-by-contradiction|귀류법]]).

(1)을 $Z$ 위의 $1/g$에 쓰면, $x \in Z$, $|x - 0| < \delta_0$인 모든 $x$에서 $|x^{-1}| < B$인 양수 $\delta_0$이 있습니다. 여기서 $B = |L| + 1$입니다. $x = \min\{2^{-1}\delta_0, B^{-1}\}$로 두면 $x$는 양수이고([[absolute-value|절댓값]]의 (10), [[order-properties-of-reals]]의 (8), (6)의 (i)) $x \le 2^{-1}\delta_0 < \delta_0$이므로 $x \in Z$이고 $|x - 0| < \delta_0$입니다. 그런데 $0 < x \le B^{-1}$이므로 $x = B^{-1}$이면 $x^{-1} = B$이고((K8)의 (iii)의 유일성), $x < B^{-1}$이면 그 항목의 (6)의 (ii)에 의해 $B < x^{-1}$입니다. 어느 쪽이든 $|x^{-1}| = x^{-1} \ge B$이어서 $|x^{-1}| < B$와 어긋납니다. 따라서 $1/g$는 $0$에서 수렴하지 않습니다.
:::

## 확인 질문

:::check[$g(x) = 1$ ($x \ne 0$일 때), $g(0) = 0$으로 정한 $g : \mathbb{R} \to \mathbb{R}$에 대하여 $1/g$의 정의역은 무엇이고, $1/g$는 $0$에서 수렴하는가?]
정의역은 $Z = \mathbb{R} - \{0\}$입니다. $g$는 $0$과 다른 모든 점에서 값이 $1$인 상수함수와 같으므로 [[limit-of-a-function]]의 (4), (5)에 의해 $0$에서 $1$로 수렴하고, $1 \ne 0$입니다. (8)에 의해 $0$은 $Z$의 집적점이고 $1/g$는 $0$에서 $1^{-1} = 1$로 수렴합니다. $g(0) = 0$이어서 $0$은 $1/g$의 정의역에 없지만, 극한을 말하는 데는 지장이 없습니다.
:::

:::check[$f + g$와 $f$가 $c$에서 수렴하면 $g$도 $c$에서 수렴하는가?]
그렇습니다. 모든 $x \in S$에서 $((f + g) - f)(x) = (f(x) + g(x)) - f(x) = g(x)$이므로([[real-number-arithmetic|실수의 계산 법칙]]의 (K1), (K2), (K8)의 (ii), (K4)) [[real-valued-function]]의 (2)에 의해 $g = (f + g) - f$입니다. (4)에 의해 $g$는 $c$에서 $\lim_{x \to c} (f(x) + g(x)) - \lim_{x \to c} f(x)$로 수렴합니다.
:::
