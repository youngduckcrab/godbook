---
title: 립시츠 연속
title_en: Lipschitz Continuity
aliases: [립시츠 함수, 립시츠 상수, 립시츠 조건, Lipschitz continuous, Lipschitz function, Lipschitz constant]
kind: definition
field: real-analysis
msc: ["26A16"]
level: undergrad
summary: 실함수 f 가 립시츠 연속이라는 것은 0 이상인 실수 K 가 있어 정의역의 모든 두 점 x, w 에서 |f(x) − f(w)| ≤ K|x − w| 라는 것이다. 립시츠 연속이면 고르게 연속이고, 상수 K 를 키워도 되며, 제한해도 립시츠 연속이다.
requires: [subset, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, square-root-exists, power-of-a-real-number, interval, real-valued-function, continuous-function, power-function-is-continuous, uniform-continuity, continuous-on-closed-interval-is-uniformly-continuous]
sources:
  - ref: lebl-basic-analysis
    loc: 3.4.3절, Definition 3.4.7, Proposition 3.4.8 과 그 증명과 뒤 문단 (p.141), Example 3.4.10 과 뒤 문단 (p.142–143), 연습문제 3.4.3, 3.4.12 (p.143)
    checked: original
    note: "출처의 Definition 3.4.7(p.141, 그림으로 확인)은 K ∈ ℝ 가 있어 모든 x, y ∈ S 에서 |f(x) − f(y)| ≤ K|x − y| 인 것으로 정의하고 K 에 부호 조건을 두지 않는다. 이 항목은 0 ≤ K 를 정의에 두고, (1)로 두 정의가 같은 함수를 고른다는 것을 보였다. '립시츠 상수'라는 말은 출처의 연습문제 3.4.13(p.144)에 나온다. (2)는 출처의 Proposition 3.4.8(p.141)과 같다. 출처의 증명은 δ = ε/K 로 둔다. 이 항목은 δ = ε(K + 1)⁻¹ 로 둔다. (1)과 (3)은 출처에 없다(검색한 범위). 직관의 할선의 기울기 해석은 출처 p.141 의 해석과 같다. 예시 '[0, 1] 위의 x²'는 출처의 Example 3.4.2(p.138)의 부등식 |x² − c²| ≤ 2|x − c| 와 같다. 예시 '1 이상인 실수 위의 √x'는 출처의 Example 3.4.10(p.142)과 같은 함수, 같은 식, 같은 상수 1/2 이다. 반례 '[0, 1] 위의 √x'는 출처가 Example 3.4.10 에서 [0, ∞) 위의 √x 가 립시츠 연속이 아님을 보이고 그 뒤 문단(p.143)에서 [0, 1] 로 제한하면 Theorem 3.4.4 로 고르게 연속이라고 적는 것과 같은 발상이다. 출처는 y = 0 으로 두고 1/K² ≤ x 가 모든 x > 0 에서 성립할 수 없다고 끝내고, 이 항목은 x = (K + 1)⁻² 로 점을 식으로 정했다. 확인 질문 2 는 출처의 연습문제 3.4.3(p.143; c > 0 일 때 (c, ∞) 위의 1/x 가 립시츠 연속)의 c = 1 에 가까운 경우이다. 확인 질문 1 은 출처가 Example 3.4.10(p.142)의 증명에서 'K < 0 일 수 없고 K = 0 이면 함수가 상수'라고 지나가며 적는 것의 뒤쪽과 같은 내용이다. 출처의 합과 상수배(연습문제 3.4.12)와 삼각함수의 예(Example 3.4.9)는 싣지 않았다."
status: source-checked
added: 2026-11-17
---

:::statement
실함수와 제한 $f|_A$는 [[real-valued-function]]의 것이고, 고른 연속은 [[uniform-continuity]]의 것이며, 연속함수는 [[continuous-function]]의 것이다. $S$를 $\mathbb{R}$의 부분집합, $f : S \to \mathbb{R}$를 $S$ 위의 실함수라 하자. 실수 $K$에 대하여 "모든 $x$, $w \in S$에서 $|f(x) - f(w)| \le K\,|x - w|$"를 "$K$가 $f$의 부등식을 만족한다"고 줄여 말한다.

**립시츠 연속.** $f$가 **립시츠 연속**(Lipschitz continuous)이라는 것은 정확히 $0 \le K$이고 $f$의 부등식을 만족하는 실수 $K$가 있을 때이다. 이런 $K$를 $f$의 **립시츠 상수**(Lipschitz constant)라 한다.

다음이 성립한다.

1. (상수를 키우기) 실수 $K$가 $f$의 부등식을 만족하고 $K \le K'$이면 $K'$도 $f$의 부등식을 만족한다. 특히 어떤 실수 $K$가 ($K < 0$이어도) $f$의 부등식을 만족하면 $\max\{K, 0\}$은 $f$의 립시츠 상수이고, $f$는 립시츠 연속이다.
2. (고른 연속) $K$가 $f$의 립시츠 상수이면, 모든 양의 실수 $\varepsilon$에 대하여 $\delta = \varepsilon\,(K + 1)^{-1}$은 양수이고, $x$, $w \in S$이고 $|x - w| < \delta$이면 $|f(x) - f(w)| < \varepsilon$이다. 따라서 립시츠 연속인 함수는 고르게 연속이고, 연속함수이다.
3. (제한) $A \subseteq S$이고 $K$가 $f$의 립시츠 상수이면 $K$는 $f|_A$의 립시츠 상수이다. 따라서 립시츠 연속인 함수의 제한은 립시츠 연속이다.
:::

:::english
Real-valued functions and the restriction $f|_A$ are those of the entry on real-valued functions; uniform continuity is that of the entry on uniform continuity; and continuous functions are those of the entry on continuous functions. Let $S$ be a subset of $\mathbb{R}$ and let $f : S \to \mathbb{R}$ be a real-valued function on $S$. For a real number $K$, we say briefly that "$K$ satisfies the inequality for $f$" when $|f(x) - f(w)| \le K\,|x - w|$ for all $x$, $w \in S$.

**Lipschitz continuity.** The function $f$ is **Lipschitz continuous** exactly when there is a real number $K$ with $0 \le K$ that satisfies the inequality for $f$. Such a $K$ is called a **Lipschitz constant** of $f$.

The following hold.

1. (Enlarging the constant) If a real number $K$ satisfies the inequality for $f$ and $K \le K'$, then $K'$ also satisfies the inequality for $f$. In particular, if some real number $K$ (even with $K < 0$) satisfies the inequality for $f$, then $\max\{K, 0\}$ is a Lipschitz constant of $f$, and $f$ is Lipschitz continuous.
2. (Uniform continuity) If $K$ is a Lipschitz constant of $f$, then for every positive real number $\varepsilon$ the number $\delta = \varepsilon\,(K + 1)^{-1}$ is positive, and $|f(x) - f(w)| < \varepsilon$ whenever $x$, $w \in S$ and $|x - w| < \delta$. Hence a Lipschitz continuous function is uniformly continuous and is a continuous function.
3. (Restriction) If $A \subseteq S$ and $K$ is a Lipschitz constant of $f$, then $K$ is a Lipschitz constant of $f|_A$. Hence the restriction of a Lipschitz continuous function is Lipschitz continuous.
:::

## 직관

$x \ne w$이면 부등식을 $|x - w|$로 나누어
$$
\left| \frac{f(x) - f(w)}{x - w} \right| \le K
$$
로 쓸 수 있습니다. 왼쪽은 그래프 위의 두 점 $(x, f(x))$와 $(w, f(w))$를 잇는 선분(할선)의 기울기의 절댓값입니다. 그래서 립시츠 연속은 "그래프 위의 어떤 두 점을 이어도 기울기가 $K$를 넘지 않는다"는 뜻입니다. 경사로에 비유하면, 어디서 어디까지 재어도 경사가 정해진 한도를 넘지 않는 길입니다. 비유가 맞는 곳은 "모든 두 지점 사이의 평균 경사"를 재는 부분이고, 맞지 않는 곳은 실제 길에는 끊긴 곳이 없다고 미리 가정하지만 여기서는 끊기지 않는다는 것(연속)이 이 조건에서 나오는 결론이라는 점입니다.

이 조건은 고른 연속보다 강합니다. 고른 연속은 "$\varepsilon$에 맞는 $\delta$가 있다"까지만 말하지만, 립시츠 연속은 $\delta$를 $\varepsilon$의 식으로 바로 줍니다(이 항목의 (2)). 거꾸로 고르게 연속이어도 립시츠 연속이 아닐 수 있습니다. 아래 반례의 $[0, 1]$ 위의 $\sqrt{x}$는 $0$ 근처에서 할선이 점점 가팔라집니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (4)의 (iii)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (10)"은 [[absolute-value]]의 번호이다. $x$, $w \in S$이면 절댓값 (2)에 의해 $0 \le |x - w|$이다. 이것을 (ㄱ)이라 하자.

**1의 증명.** $K$가 $f$의 부등식을 만족하고 $K \le K'$이라 하자. $x$, $w \in S$이면 (ㄱ)과 순서 성질 (4)의 (iii)에 의해 $K\,|x - w| \le K'\,|x - w|$이고, $|f(x) - f(w)| \le K\,|x - w|$와 순서 성질 (1)의 (v)에 의해 $|f(x) - f(w)| \le K'\,|x - w|$이다. 따라서 $K'$도 $f$의 부등식을 만족한다. 절댓값 (10)에 의해 $K \le \max\{K, 0\}$이고 $0 \le \max\{K, 0\}$이므로, 어떤 실수 $K$가 $f$의 부등식을 만족하면 방금 보인 것에 의해 $\max\{K, 0\}$도 만족하고, 그것은 $0$ 이상이므로 립시츠 상수이다.

**2의 증명.** $K$가 $f$의 립시츠 상수, 곧 $0 \le K$이고 $f$의 부등식을 만족한다고 하자. 순서 성질 (5)의 (ii)의 $0 < 1$과 (2)의 (ii)에 의해 $K < K + 1$이고, $0 \le K$와 순서 성질 (1)의 (v)에 의해 $0 < K + 1$이다. 양의 실수 $\varepsilon$에 대하여 순서 성질 (6)의 (i)과 (W4)에 의해 $\delta = \varepsilon\,(K + 1)^{-1}$은 양수이다. $x$, $w \in S$이고 $|x - w| < \delta$라 하자. $0 \le K$이므로 순서 성질 (4)의 (iii)에 의해 $K\,|x - w| \le K\delta$이다. $0 < \delta$이고 $K < K + 1$이므로 순서 성질 (4)의 (i)에 의해 $K\delta < (K + 1)\,\delta = \varepsilon$이다((K1), (K2), (K8)의 (iii), (K4)). 순서 성질 (1)의 (v)에 의해
$$
|f(x) - f(w)| \le K\,|x - w| \le K\delta < \varepsilon
$$
에서 $|f(x) - f(w)| < \varepsilon$이다. $\varepsilon$은 임의의 양의 실수였으므로 [[uniform-continuity|고른 연속]]의 정의에 의해 $f$는 고르게 연속이고, 그 항목의 (2)에 의해 연속함수이다.

**3의 증명.** [[real-valued-function]]의 (6)에 의해 $f|_A$는 $A$ 위의 실함수이고 $x \in A$에서 $(f|_A)(x) = f(x)$이다. $x$, $w \in A$이면 $A \subseteq S$이므로 $x$, $w \in S$이고 $\bigl|(f|_A)(x) - (f|_A)(w)\bigr| = |f(x) - f(w)| \le K\,|x - w|$이다. $0 \le K$이므로 $K$는 $f|_A$의 립시츠 상수이다. $\blacksquare$
:::

## 예시와 반례

:::example[$[0, 1]$ 위의 $x^2$: 립시츠 상수 $2$]
$f(x) = x^2$으로 정한 $f : [0, 1] \to \mathbb{R}$는 $K = 2$로 립시츠 연속입니다. $x$, $w \in [0, 1]$이면 [[power-of-a-real-number]]의 (1)의 $x^2 = xx$와 (K1)–(K3), (K12)에 의해 $x^2 - w^2 = (x + w)(x - w)$이고, [[absolute-value|절댓값]]의 (4)에 의해 $|x^2 - w^2| = |x + w|\,|x - w|$입니다. $0 \le x \le 1$, $0 \le w \le 1$이므로 [[order-properties-of-reals]]의 (2)의 (iii)에 의해 $0 \le x + w \le 2$이고 절댓값 (1)에 의해 $|x + w| \le 2$입니다. 절댓값 (2)의 $0 \le |x - w|$와 [[order-properties-of-reals]]의 (4)의 (iii)에 의해 $|f(x) - f(w)| \le 2\,|x - w|$입니다. (2)에 의해 $\varepsilon$에 대해 $\delta = \varepsilon \cdot 3^{-1}$이 통합니다.
:::

:::example[$1$ 이상인 실수 위의 $\sqrt{x}$: 립시츠 상수 $1/2$]
$T_1 = \{x \in \mathbb{R} : 1 \le x\}$ 위에서 $q_1(x) = \sqrt{x}$로 정한 함수 $q_1 : T_1 \to \mathbb{R}$은 $K = 2^{-1}$로 립시츠 연속입니다. 아래에서 "순서 성질"은 [[order-properties-of-reals]]의 번호, "제곱근 (2)"는 [[square-root-exists]]의 번호입니다.

$x$, $w \in T_1$이라 합시다. 제곱근 (2)의 $\sqrt{aa} = a$를 $a = 1$에 쓰면 $\sqrt{1} = 1$이고, $1 \le x$이므로 제곱근 (2)에 의해 $1 \le \sqrt{x}$입니다($1 = x$이면 같고, $1 < x$이면 $\sqrt{1} < \sqrt{x}$). 같은 이유로 $1 \le \sqrt{w}$이므로, $s = \sqrt{x} + \sqrt{w}$로 두면 순서 성질 (2)의 (iii)에 의해 $2 \le s$이고 $0 < s$입니다. (K1)–(K3), (K12)로 전개하고 [[square-root-exists]]의 (1)의 $\sqrt{x}\sqrt{x} = x$, $\sqrt{w}\sqrt{w} = w$를 쓰면 $(\sqrt{x} - \sqrt{w})\,s = x - w$이므로, (K8)의 (iii)에 의해 $\sqrt{x} - \sqrt{w} = (x - w)\,s^{-1}$입니다. 순서 성질 (6)의 (i)에 의해 $0 < s^{-1}$이므로 [[absolute-value|절댓값]]의 (4), (1)에 의해 $|\sqrt{x} - \sqrt{w}| = |x - w|\,s^{-1}$입니다. $2 = s$이면 $s^{-1} = 2^{-1}$이고, $2 < s$이면 순서 성질 (6)의 (ii)에 의해 $s^{-1} < 2^{-1}$이므로 $s^{-1} \le 2^{-1}$입니다. 절댓값 (2)의 $0 \le |x - w|$와 순서 성질 (4)의 (iii)에 의해 $|q_1(x) - q_1(w)| \le 2^{-1}\,|x - w|$입니다((K1)).
:::

:::counterexample[$[0, 1]$ 위의 $\sqrt{x}$: 고르게 연속이지만 립시츠 연속이 아니다]
$q(x) = \sqrt{x}$로 정한 $q : [0, 1] \to \mathbb{R}$를 봅니다. 아래에서 "순서 성질"은 [[order-properties-of-reals]]의 번호, "제곱근 (2)"는 [[square-root-exists]]의 번호입니다.

$q$는 고르게 연속입니다. $T = \{x \in \mathbb{R} : 0 \le x\}$ 위의 제곱근 함수는 [[power-function-is-continuous]]의 (2)에 의해 연속함수이고, $[0, 1] \subseteq T$이므로 [[continuous-on-closed-interval-is-uniformly-continuous|닫힌구간 위의 연속함수의 고른 연속성]]의 (2)에 의해 그 함수를 $[0, 1]$로 제한한 $q$는 고르게 연속입니다.

그러나 $q$는 립시츠 연속이 아닙니다. $0 \le K$인 실수 $K$가 $q$의 부등식을 만족한다고 해 봅시다. 순서 성질 (5)의 (ii)와 (2)의 (i), (ii)에 의해 $1 \le K + 1$이고 $0 < K + 1$이므로, $r = (K + 1)^{-1}$로 두면 순서 성질 (6)의 (i)에 의해 $0 < r$이고, $K + 1 = 1$이면 $r = 1$, $1 < K + 1$이면 순서 성질 (6)의 (ii)에 의해 $r < 1$이므로 $r \le 1$입니다. $x = rr$, $w = 0$으로 두면 순서 성질 (4)의 (iii)과 (iv)에 의해 $0 \le rr \le r \cdot 1 = r \le 1$이므로 $x$, $w \in [0, 1]$입니다. 제곱근 (2)의 $\sqrt{aa} = a$에 의해 $q(x) = \sqrt{rr} = r$이고 $q(0) = \sqrt{0 \cdot 0} = 0$이므로 $|q(x) - q(w)| = r$이고, $K\,|x - w| = K\,rr$입니다([[absolute-value|절댓값]]의 (1)). 그런데 $0 < r$이고 $K < K + 1$이므로 순서 성질 (4)의 (i)에 의해 $Kr < (K + 1)\,r = 1$이고, 다시 순서 성질 (4)의 (i)에 의해 $K\,rr = (Kr)\,r < 1 \cdot r = r$입니다((K2), (K4)). 따라서 이 두 점에서 $r \le K\,rr$은 성립하지 않습니다(순서 성질 (1)의 (i)). 이것은 가정에 어긋나므로 $0$ 이상인 어떤 $K$도 $q$의 부등식을 만족하지 않고, $q$는 립시츠 연속이 아닙니다.

(3)의 대우에 의해 $T$ 전체 위의 제곱근 함수도 립시츠 연속이 아닙니다. 두 점은 $K$가 클수록 $0$ 가까이로 다가가고, 그곳에서 할선이 점점 가팔라집니다. 이 반례는 (2)의 거꾸로가 성립하지 않는다는 것을 보입니다.
:::

## 확인 질문

:::check[립시츠 상수로 $0$을 갖는 함수는 어떤 함수인가?]
상수함수입니다. $S$ 위의 값이 $k$인 상수함수는 모든 $x$, $w$에서 $|k - k| = 0 \le 0 \cdot |x - w|$이므로 $0$이 립시츠 상수입니다((K9), [[absolute-value|절댓값]]의 (2)). 거꾸로 $0$이 $f$의 립시츠 상수이면 모든 $x$, $w \in S$에서 $|f(x) - f(w)| \le 0$이고 절댓값 (2)의 $0 \le |f(x) - f(w)|$와 [[order-properties-of-reals]]의 (1)의 (ii)에 의해 $|f(x) - f(w)| = 0$, 곧 $f(x) = f(w)$입니다. $S$가 공집합이 아니면 한 점 $w_0$을 잡아 $f$는 값이 $f(w_0)$인 상수함수입니다([[real-valued-function]]의 (2), (3)).
:::

:::check[$1$ 이상인 실수 위에서 값이 $1/x$인 함수는 립시츠 연속인가?]
그렇습니다. $K = 1$이 립시츠 상수입니다. $1 \le x$, $1 \le w$이면 [[order-properties-of-reals]]의 (11)의 (i)에 의해 $1 \le xw$이고, 그래서 $0 < xw$이며 같은 항목의 (6)의 (i), (ii)에 의해 $0 < (xw)^{-1} \le 1$입니다($xw = 1$이면 같고). (K1)–(K3), (K8), (K12)로 $x^{-1} - w^{-1} = (w - x)(xw)^{-1}$이므로 [[absolute-value|절댓값]]의 (4), (1), (3)에 의해 $|x^{-1} - w^{-1}| = |x - w|\,(xw)^{-1} \le |x - w|$입니다(절댓값 (2)와 같은 항목의 (4)의 (iii)).
:::
