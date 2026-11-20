---
title: 순단조함수의 역함수
title_en: Inverse of a Strictly Monotone Function
aliases: [순단조, 순단조함수, 역함수의 연속, strictly monotone, continuity of the inverse function]
kind: theorem
field: real-analysis
msc: ["26A48"]
level: undergrad
summary: "순증가이거나 순감소인 함수를 순단조라 한다. 순단조함수는 단사이므로 상 위에서 역함수를 갖고, 그 역함수도 같은 방향으로 순단조이다. 정의역이 구간이면 역함수는 연속함수이며, 이때 원래 함수가 연속이거나 상이 구간일 필요는 없다. 원래 함수가 연속이면 상은 구간이다."
requires: [function, function-composition, injective-surjective-bijective, inverse-function, bijective-iff-inverse-is-a-function, image-and-preimage, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, interval, real-valued-function, continuous-function, continuity-of-sum-and-product, composition-of-continuous-functions, intermediate-value-theorem, derivative-and-monotonicity, power-of-a-real-number, square-root-exists, power-function-is-continuous]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 3.6절 Definition 3.6.1 과 그 뒤 문단 (p.149); 3.6.1 소절 Corollary 3.6.3 (p.150); 3.6.2 소절 첫 문단, Proposition 3.6.6 과 증명, Example 3.6.7 과 그 뒤 문단 (p.152); 3.6.3 소절 연습문제 3.6.3, 3.6.5 (p.153); 예와 겹치는 곳 2.2.2 소절 Proposition 2.2.6 (p.65), 3.1.5 소절 연습문제 3.1.1 a) (p.120), 4.4.1 소절 첫 문단 (p.176), Corollary 4.4.3 (p.177)
    checked: original
    note: "순단조(strictly monotone)라는 말은 출처 Definition 3.6.1(p.149)의 것이다. 순증가·순감소는 이 사이트의 '도함수와 증가·감소' 항목의 정의를 그대로 쓰며, 출처의 같은 정의와 뜻이 같다. (2)의 단사는 출처 3.6.2 소절 첫 문단(p.152)이 보이는 것이고, (1)의 거꾸로 쪽(f(x) < f(x′) 이면 x < x′)과 (2)의 '역함수도 순증가'는 출처 Proposition 3.6.6 의 증명 첫 문단에 있다. (3)은 출처 Proposition 3.6.6(p.152)과 같은 진술이다. 출처의 증명은 순증가인 경우에, f(I) 의 집적점이 아닌 c 에서는 저절로 연속이라고 적고, 집적점인 c 에서 두 한쪽 극한이 다 있는 경우를 한쪽 극한(Proposition 3.6.2)으로 보이며, 한쪽 극한이 없는 경우는 연습문제 3.6.5(p.153)로 둔다. 순감소는 '거의 같다'(almost identical)고 적고 따로 증명하지 않는다. 이 사이트에는 한쪽 극한이 없으므로 이 항목은 ε–δ 로 직접 증명하고, 정의역의 한쪽에 점이 없는 경우(끝점)를 따로 다루며, 순감소는 −f 로 옮겨 보인다. 출처도 Definition 3.6.1 뒤 문단(p.149)에서 f 가 증가이면 −f 가 감소이므로 단조함수에 관한 많은 결과는 증가인 경우만 보이면 된다고 적는다. (4)는 출처 Corollary 3.6.3(p.150)의 '연속이면 f(I) 는 구간'인 쪽이고, 증명은 출처와 같이 사잇값 정리를 쓴다. 출처의 Corollary 3.6.3 은 단조이고 상수가 아닌 함수에 대해 거꾸로도(f(I) 가 구간이면 연속) 진술하고 끝점이 아닌 점에서 증명하며 끝점의 경우는 연습문제 3.6.3(p.153)으로 두는데, 이 항목은 그쪽을 싣지 않는다. 출처는 Example 3.6.7 뒤 문단(p.152)에서 f(I) 가 구간이면 Corollary 3.6.3 을 f 와 역함수에 함께 쓸 수 있다고, 곧 구간 I, J 에 대해 순단조인 전사 f : I → J 와 그 역함수가 모두 연속이라고 적는다. 예시 '불연속인 순증가 함수의 역함수'는 출처 Example 3.6.7(p.152; x < 0 이면 x, x ≥ 0 이면 x + 1)과 같은 발상이다(정의역과 뛰는 점만 다르다). 예시 '제곱근 함수의 연속을 다시 얻기'의 제곱근은 출처 Corollary 4.4.3(4.4.1 소절, p.177; 음이 아닌 n 제곱근을 x 의 n 제곱의 역함수로 얻는다)의 n = 2 인 경우와 같은 발상이고, 제곱근 함수의 연속은 출처가 Proposition 2.2.6(2.2.2 소절, p.65; 수열의 극한과 제곱근)과 연습문제 3.1.1 a)(3.1.5 소절, p.120; c ≥ 0 에서 √x 의 극한)로 다루는 것과 같은 결론이다. 둘째 확인 질문(S = {1, 2} 위에서 f(1) = 5, f(2) = 0 인 함수)에서 집적점이 아닌 점에서 연속이라는 근거는 출처 Proposition 3.6.6 의 증명 둘째 문단의 첫 문장과 같다. 첫째 확인 질문(f(x) = −2x + 3 으로 정한 f : [0, 1] → ℝ 의 역함수)은 출처 4.4.1 소절 첫 문단(p.176)의 f(x) = ax 와 그 역함수 y/a 와 같은 발상이다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 확인. 경계 경우에서 거짓이거나 너무 넓던 설명 문장 9개, 틀린 위치 1건, 출처의 말을 옮긴 문장 4건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-20
---

:::statement
실함수와 그 연산은 [[real-valued-function]]의 것이고, 단조증가, 순증가, 단조감소, 순감소는 [[derivative-and-monotonicity|도함수와 증가·감소]]의 것이다. 단사, 전사, 전단사는 [[injective-surjective-bijective|단사·전사·전단사]] 항목의 것이고, 역함수는 [[inverse-function]]의 것이며, 상 $f(S)$는 [[image-and-preimage]]의 것이다. 구간은 [[interval]]의 것이고, 연속과 연속함수는 [[continuous-function]]의 것이다. 아래에서 $S$는 $\mathbb{R}$의 부분집합이다.

**순단조.** $S$ 위의 실함수 $f$가 **순단조**(strictly monotone)인 것은 정확히 $f$가 순증가이거나 순감소일 때이다.

다음이 성립한다. (1), (2)에서 $f : S \to \mathbb{R}$는 $S$ 위의 실함수이다.

1. (부등식이 옮겨진다) $x$, $x'$이 $S$의 원소라 하자. $f$가 순증가이면, $x < x'$인 것은 정확히 $f(x) < f(x')$일 때이고, $x \le x'$인 것은 정확히 $f(x) \le f(x')$일 때이다. $f$가 순감소이면, $x < x'$인 것은 정확히 $f(x') < f(x)$일 때이고, $x \le x'$인 것은 정확히 $f(x') \le f(x)$일 때이다.
2. (역함수) $f$가 순단조이면 $f$는 단사이다. $f$의 모든 값은 $f(S)$에 속하므로 [[function]]의 진술("공역은 선언하기 나름이다")에 의해 $f$를 $f : S \to f(S)$로 선언할 수 있고, 이 $f : S \to f(S)$는 전단사이며 역함수 $g : f(S) \to S$를 갖는다. $y \in f(S)$와 $x \in S$에 대하여 $g(y) = x$인 것은 정확히 $f(x) = y$일 때이다. $S \subseteq \mathbb{R}$이므로 $g$는 $f(S)$ 위의 실함수이기도 하고, $f$가 순증가이면 $g$도 순증가이며, $f$가 순감소이면 $g$도 순감소이다. 또 $T \subseteq \mathbb{R}$이고 $f : S \to T$가 전사이면 $T = f(S)$이므로, 위의 $g$는 $f : S \to T$의 역함수 $g : T \to S$이다.
3. (역함수의 연속) $I$가 구간이고 $f : I \to \mathbb{R}$가 순단조이면, (2)의 역함수 $g : f(I) \to I$는 연속함수이다. $f$가 연속이라는 것은 가정하지 않으며, $f(I)$는 구간이 아니어도 된다.
4. (연속이면 상은 구간) $I$가 구간이고 $f : I \to \mathbb{R}$가 순단조인 연속함수이면 $f(I)$는 구간이다.
:::

:::english
Real-valued functions and their operations are those of the entry on real-valued functions; increasing, strictly increasing, decreasing and strictly decreasing are those of the entry on derivatives and monotonicity. Injective, surjective and bijective are those of the entry on these notions, inverse functions are those of the entry on inverse functions, and the image $f(S)$ is that of the entry on images and preimages. Intervals are those of the entry on intervals, and continuity and continuous functions are those of the entry on continuous functions. Below, $S$ is a subset of $\mathbb{R}$.

**Strictly monotone.** A real-valued function $f$ on $S$ is **strictly monotone** precisely when $f$ is strictly increasing or strictly decreasing.

The following hold. In (1) and (2), $f : S \to \mathbb{R}$ is a real-valued function on $S$.

1. (Inequalities carry over) Let $x$, $x'$ be elements of $S$. If $f$ is strictly increasing, then $x < x'$ precisely when $f(x) < f(x')$, and $x \le x'$ precisely when $f(x) \le f(x')$. If $f$ is strictly decreasing, then $x < x'$ precisely when $f(x') < f(x)$, and $x \le x'$ precisely when $f(x') \le f(x)$.
2. (Inverse function) If $f$ is strictly monotone, then $f$ is injective. Every value of $f$ lies in $f(S)$, so by the entry on functions ("the codomain is a matter of declaration") $f$ may be declared as $f : S \to f(S)$; this $f : S \to f(S)$ is bijective and has an inverse function $g : f(S) \to S$. For $y \in f(S)$ and $x \in S$, we have $g(y) = x$ precisely when $f(x) = y$. Since $S \subseteq \mathbb{R}$, $g$ is also a real-valued function on $f(S)$; if $f$ is strictly increasing then so is $g$, and if $f$ is strictly decreasing then so is $g$. Moreover, if $T \subseteq \mathbb{R}$ and $f : S \to T$ is surjective, then $T = f(S)$, so the above $g$ is the inverse function $g : T \to S$ of $f : S \to T$.
3. (Continuity of the inverse) If $I$ is an interval and $f : I \to \mathbb{R}$ is strictly monotone, then the inverse function $g : f(I) \to I$ of (2) is a continuous function. Continuity of $f$ is not assumed, and $f(I)$ need not be an interval.
4. (A continuous one has an interval as image) If $I$ is an interval and $f : I \to \mathbb{R}$ is a strictly monotone continuous function, then $f(I)$ is an interval.
:::

## 직관

순증가 함수는 줄을 선 사람들에게 번호표를 앞에서부터 커지게 나눠 주는 것과 같습니다. 번호표만 보고도 누가 앞에 섰는지 알 수 있으니, 번호표에서 사람으로 거꾸로 가는 대응, 곧 역함수가 있고 그것도 순서를 지킵니다. (1)과 (2)가 이것입니다. 비유에서 "번호표가 겹치지 않는다"가 단사이고, "나눠 준 번호표만 받는다"가 공역을 상 $f(S)$로 줄이는 것입니다.

(3)은 역함수가 끊기지 않는다는 것입니다. 아래 예시의 함수 $f$는 한 점에서 위로 뛰지만, 그 뛴 자리는 $f(I)$의 빈틈이 될 뿐입니다. 역함수 $g$는 그 빈틈 위에서는 정의되지 않으므로 $g$의 그래프에는 끊긴 곳이 생기지 않습니다. 거꾸로 $g$가 뛰려면 $f$의 정의역에 빈틈이 있어야 하는데, 정의역 $I$가 구간이면 그런 빈틈이 없습니다. (3)의 증명에서 $I$가 구간이라는 가정은 $y_0 = f(x_0)$ 근처의 기준점 $a'$, $b'$이 $I$에 속한다는 것을 보이는 한 단계에서 쓰이고, 아래 반례는 바로 그 단계가 깨지는 경우입니다.

(4)는 거꾸로 $f$가 연속이면 $f(I)$에 빈틈이 생기지 않는다는 것이고, 사잇값 정리에서 나옵니다.

## 증명

:::idea
(1)은 삼분법으로 경우를 나눈다. (3)은 순증가인 경우 $y_0 = f(x_0)$의 양쪽에 $x_0$에서 $\varepsilon$의 절반 안쪽에 있는 정의역의 점 $a'$, $b'$을 잡고, $f(a')$과 $f(b')$ 사이에 든 값의 역상은 $a'$과 $b'$ 사이에 있다는 것을 (1)로 본다. 순감소인 경우는 $-f$로 옮긴다.
:::

:::hint
(3)에서 $x_0$보다 작은 $I$의 원소가 아예 없으면 왼쪽은 따질 것이 없습니다. 그때는 $\delta$의 왼쪽 몫을 아무 양수, 예컨대 $1$로 두세요.
:::

:::hint
$x_0$보다 작은 원소 $u$가 있으면 $a' = \max\{u, x_0 - \varepsilon/2\}$은 $u$ 자신이거나 $u$와 $x_0$ 사이에 있으므로, $I$가 구간이라는 것에서 $I$의 원소입니다.
:::

:::proof
"순서 (n)"은 [[order-properties-of-reals]]의 (n), "절댓값 (n)"은 [[absolute-value]]의 (n), "구간 (n)"은 [[interval]]의 (n)이다.

**1의 증명.** $f$가 순증가라 하자. $x < x'$이면 순증가의 정의에 의해 $f(x) < f(x')$이다. 거꾸로 $f(x) < f(x')$이라 하고 $x < x'$이 아니라고 하자. 순서 (1)의 (iii)에 의해 $x' \le x$이다. $x' = x$이면 $f(x') = f(x)$이고, $x' < x$이면 순증가의 정의에 의해 $f(x') < f(x)$이다. 어느 쪽이든 $f(x') \le f(x)$이고, 이것은 $f(x) < f(x')$과 함께 성립하지 않는다(순서 (1)의 (i)). 따라서 $x < x'$이다. 이제 $\le$에 관한 문장을 보자. 순서 (1)의 (iii)에 의해 $x \le x'$인 것은 정확히 "$x' < x$"가 성립하지 않을 때이고, 방금 보인 것을 $x'$과 $x$의 자리를 바꾸어 쓰면 이것은 정확히 "$f(x') < f(x)$"가 성립하지 않을 때이며, 다시 순서 (1)의 (iii)에 의해 이것은 정확히 $f(x) \le f(x')$일 때이다.

$f$가 순감소이면 $x < x'$일 때 순감소의 정의에 의해 $f(x') < f(x)$이다. 거꾸로 $f(x') < f(x)$이고 $x < x'$이 아니라 하면 순서 (1)의 (iii)에 의해 $x' \le x$이고, $x' = x$이면 $f(x) = f(x')$, $x' < x$이면 순감소의 정의에 의해 $f(x) < f(x')$이므로 어느 쪽이든 $f(x) \le f(x')$이 되어 순서 (1)의 (i)에 어긋난다. 따라서 $x < x'$이다. $\le$에 관한 문장은 순증가의 경우와 같이 순서 (1)의 (iii)으로 부정을 두 번 거쳐 얻는다.

**2의 증명.** $f$가 순단조라 하자. $x$, $x'$이 $S$의 원소이고 $x \ne x'$이면 [[real-order-axioms]]의 (W1)에 의해 $x < x'$이거나 $x' < x$이다. $f$가 순증가이면 각각 $f(x) < f(x')$이거나 $f(x') < f(x)$이고, 순감소이면 각각 $f(x') < f(x)$이거나 $f(x) < f(x')$이다. 어느 경우든 순서 (1)의 (i)에 의해 $f(x) \ne f(x')$이다. 따라서 $f$는 단사이다.

[[image-and-preimage]]의 (1)에 의해 모든 $x \in S$에서 $f(x) \in f(S)$이므로 $f$를 $f : S \to f(S)$로 선언할 수 있다. 단사인지는 공역과 상관없이 집합 $f$만으로 정해지므로([[injective-surjective-bijective|단사·전사·전단사]] 항목의 진술) 이 $f$도 단사이다. $y \in f(S)$이면 상의 정의에 의해 $f(x) = y$인 $x \in S$가 있으므로 $f : S \to f(S)$는 전사이다. 따라서 전단사이고, [[bijective-iff-inverse-is-a-function|전단사일 조건]]에 의해 역관계가 $f(S)$에서 $S$로의 함수, 곧 역함수 $g : f(S) \to S$이다. [[inverse-function]]의 진술에 의해 $g \circ f = i_S$이고 $f \circ g = i_{f(S)}$이다. $f(x) = y$이면 $g(y) = g(f(x)) = i_S(x) = x$이고, $g(y) = x$이면 $f(x) = f(g(y)) = i_{f(S)}(y) = y$이다. $g$의 값은 $S \subseteq \mathbb{R}$에 속하므로 [[function]]의 진술에 의해 $g$는 $f(S)$에서 $\mathbb{R}$로의 함수, 곧 $f(S)$ 위의 실함수이기도 하다.

$y$, $y'$이 $f(S)$의 원소이고 $y < y'$이라 하자. $x = g(y)$, $x' = g(y')$으로 두면 방금 보인 것에 의해 $f(x) = y$, $f(x') = y'$이다. $f$가 순증가이면 $f(x) < f(x')$이므로 (1)에 의해 $x < x'$, 곧 $g(y) < g(y')$이다. 따라서 $g$는 순증가이다. $f$가 순감소이면, (1)의 순감소에 관한 문장을 $x'$, $x$의 순서로 쓰면 "$x' < x$인 것은 정확히 $f(x) < f(x')$일 때"이므로 $x' < x$, 곧 $g(y') < g(y)$이다. 따라서 $g$는 순감소이다.

마지막으로 $T \subseteq \mathbb{R}$이고 $f : S \to T$가 전사라 하자. [[image-and-preimage]]의 (1)에 의해 $f(S) \subseteq T$이고, 전사의 정의에 의해 $T$의 모든 원소 $y$에 $f(x) = y$인 $x \in S$가 있으므로 $T \subseteq f(S)$이다. 따라서 $T = f(S)$이고, $f : S \to T$와 $f : S \to f(S)$는 같은 집합 $f$에 같은 공역을 선언한 것이므로 역관계와 역함수도 같다.

**3의 증명, $f$가 순증가인 경우.** $g$가 $f(I)$의 모든 점에서 연속임을 보인다. $y_0 \in f(I)$이고 $x_0 = g(y_0)$이라 하자. (2)에 의해 $x_0 \in I$이고 $f(x_0) = y_0$이다. 양의 실수 $\varepsilon$이 주어졌다고 하자. 순서 (8)에 의해 $0 < \varepsilon/2 < \varepsilon$이므로, 순서 (2)의 (ii)와 (3)의 (iii)에 의해 다음이 성립한다. 이 부등식을 아래에서 (ㄱ)이라 부른다.
$$
\begin{aligned}
&x_0 - \varepsilon < x_0 - \varepsilon/2 < x_0, \\
&x_0 < x_0 + \varepsilon/2 < x_0 + \varepsilon
\end{aligned}
$$

왼쪽 몫 $\delta_1$을 다음과 같이 정한다.

- (가) $u < x_0$인 $I$의 원소 $u$가 있으면, 그런 원소를 하나 $u$라 하고 $a' = \max\{u, x_0 - \varepsilon/2\}$로 둔다. 절댓값 (10)에 의해 $a'$은 $u$이거나 $x_0 - \varepsilon/2$이다. $a' = u$이면 $a' \in I$이다. $a' = x_0 - \varepsilon/2 \ne u$이면, $\max$의 정의에 의해 $u \le x_0 - \varepsilon/2$이고 $u \ne a'$이므로 $u < a'$이며, 또 (ㄱ)에 의해 $a' = x_0 - \varepsilon/2 < x_0$이므로 $u < a' < x_0$이고 $u$, $x_0 \in I$이므로 [[interval]]의 조건 (ii)에 의해 $a' \in I$이다. 어느 쪽이든 $a' \in I$이다. $u < x_0$이고 (ㄱ)에 의해 $x_0 - \varepsilon/2 < x_0$이며 $a'$은 둘 가운데 하나이므로 $a' < x_0$이고, 절댓값 (10)에 의해 $x_0 - \varepsilon/2 \le a'$이다. $f$가 순증가이므로 $f(a') < f(x_0) = y_0$이고, $\delta_1 = y_0 - f(a')$로 두면 순서 (3)의 (i)에 의해 $0 < \delta_1$이다.
- (나) $u < x_0$인 $I$의 원소 $u$가 없으면 $\delta_1 = 1$로 둔다.

오른쪽 몫 $\delta_2$도 같은 방식으로 정한다.

- (다) $x_0 < v$인 $I$의 원소 $v$가 있으면, 그런 원소를 하나 $v$라 하고 $b' = \min\{v, x_0 + \varepsilon/2\}$로 둔다. 절댓값 (10)에 의해 $b'$은 $v$이거나 $x_0 + \varepsilon/2$이다. $b' = v$이면 $b' \in I$이다. $b' = x_0 + \varepsilon/2 \ne v$이면, $\min$의 정의에 의해 $x_0 + \varepsilon/2 < v$이고 (ㄱ)에 의해 $x_0 < x_0 + \varepsilon/2$이므로 $x_0 < b' < v$이고, [[interval]]의 조건 (ii)에 의해 $b' \in I$이다. 어느 쪽이든 $b' \in I$이고, $v$와 $x_0 + \varepsilon/2$가 모두 $x_0$보다 크므로 $x_0 < b'$이며 절댓값 (10)에 의해 $b' \le x_0 + \varepsilon/2$이다. $f$가 순증가이므로 $y_0 = f(x_0) < f(b')$이고, $\delta_2 = f(b') - y_0$으로 두면 $0 < \delta_2$이다.
- (라) $x_0 < v$인 $I$의 원소 $v$가 없으면 $\delta_2 = 1$로 둔다.

$\delta = \min\{\delta_1, \delta_2\}$로 두면 $\delta$는 $\delta_1$이거나 $\delta_2$이므로 양수이고, $\delta \le \delta_1$, $\delta \le \delta_2$이다(절댓값 (10)).

이제 $y \in f(I)$이고 $|y - y_0| < \delta$라 하고 $x = g(y)$로 두자. (2)에 의해 $x \in I$이고 $f(x) = y$이다. [[real-order-axioms]]의 (W1)에 의해 세 경우가 있다.

- $x = x_0$이면 $|x - x_0| = 0 < \varepsilon$이다(절댓값 (2)).
- $x < x_0$이면 $x$ 자신이 $x_0$보다 작은 $I$의 원소이므로 (가)의 경우이고, $a'$과 $\delta_1 = y_0 - f(a')$이 정해져 있다. 절댓값 (6)을 $y - y_0$에 쓰면 $y_0 - y \le |y - y_0|$이므로 $y_0 - y < \delta \le \delta_1 = y_0 - f(a')$이고, 순서 (1)의 (v), (2)의 (ii), (3)의 (iii)에 의해 $f(a') < y = f(x)$이다. (1)에 의해 $a' < x$이다. 따라서 (ㄱ)과 순서 (1)의 (v)에 의해 $x_0 - \varepsilon < x_0 - \varepsilon/2 \le a' < x < x_0 < x_0 + \varepsilon$이고, 절댓값 (8)에 의해 $|x - x_0| < \varepsilon$이다.
- $x_0 < x$이면 같은 방식으로 (다)의 경우이고, $y - y_0 \le |y - y_0| < \delta \le \delta_2 = f(b') - y_0$이므로 같은 순서의 성질에 의해 $f(x) = y < f(b')$이며, (1)에 의해 $x < b'$이다. 따라서 (ㄱ)에 의해 $x_0 - \varepsilon < x_0 < x < b' \le x_0 + \varepsilon/2 < x_0 + \varepsilon$이고 $|x - x_0| < \varepsilon$이다.

어느 경우든 $|g(y) - g(y_0)| = |x - x_0| < \varepsilon$이므로 $g$는 $y_0$에서 연속이다. $y_0$은 $f(I)$의 아무 원소였으므로 $g$는 연속함수이다. 고른 것은 (가)와 (다)에서 "그런 원소가 있다"는 문장 하나씩을 예화한 $u$와 $v$뿐이고, 수의 열을 만들지 않았다.

**3의 증명, $f$가 순감소인 경우.** $h = (-1)f$, 곧 $h(x) = -f(x)$로 정한 $I$ 위의 실함수를 생각한다([[real-valued-function]]의 (4)). $x < x'$이면 $f(x') < f(x)$이므로 순서 (3)의 (iii)에 의해 $-f(x) < -f(x')$, 곧 $h(x) < h(x')$이다. 따라서 $h$는 순증가이고, 앞의 경우에 의해 $h$의 역함수 $g_h : h(I) \to I$는 연속함수이다. $y \in f(I)$이면 $y = f(x)$인 $x \in I$가 있고 $-y = h(x) \in h(I)$이다. 따라서 $n(y) = -y$로 정한 $f(I)$ 위의 실함수 $n$의 값은 모두 $h(I)$에 속한다. $n = (-1)\,i_{f(I)}$이므로 [[continuous-function]]의 (4)와 [[continuity-of-sum-and-product|연속함수의 합·곱·몫]]의 (3)에 의해 $n$은 연속함수이고, [[composition-of-continuous-functions|연속함수의 합성]]의 (2), (3)에 의해 $n$을 $n : f(I) \to h(I)$로 선언한 합성 $g_h \circ n : f(I) \to \mathbb{R}$는 연속함수이다([[function-composition]]의 진술). 이제 $y \in f(I)$이고 $x = g(y)$이면 (2)에 의해 $f(x) = y$이므로 $h(x) = -y$이고, (2)를 $h$에 쓰면 $g_h(-y) = x$이다. 곧 모든 $y \in f(I)$에서 $(g_h \circ n)(y) = g(y)$이므로 [[real-valued-function]]의 (2)에 의해 $g = g_h \circ n$이고, $g$는 연속함수이다.

**4의 증명.** [[interval]]의 두 조건을 확인한다. (i): $I$는 구간이므로 $x \ne z$인 $I$의 원소 $x$, $z$가 있고, (2)에 의해 $f$는 단사이므로 $f(x) \ne f(z)$이다. 둘 다 $f(I)$의 원소이다. (ii): $y_1$, $y_2$가 $f(I)$의 원소이고 $y$가 실수이며 $y_1 < y < y_2$라 하자. $f(x_1) = y_1$, $f(x_2) = y_2$인 $x_1$, $x_2 \in I$가 있다.

$f$가 순증가이면 $f(x_1) < f(x_2)$이므로 (1)에 의해 $x_1 < x_2$이다. 구간 (4)에 의해 $[x_1, x_2] \subseteq I$이고, $f$는 $I$의 모든 점에서 연속이므로 $[x_1, x_2]$에서 연속이다. $f(x_1) < y < f(x_2)$이므로 [[intermediate-value-theorem|사잇값 정리]]의 (1)과 (3)에 의해 $x_1 < c < x_2$이고 $f(c) = y$인 실수 $c$가 있다. 구간 (3)에 의해 $c \in [x_1, x_2] \subseteq I$이므로 $y = f(c) \in f(I)$이다.

$f$가 순감소이면 $f(x_1) < f(x_2)$이므로 (1)에 의해 $x_2 < x_1$이다. 구간 (4)에 의해 $[x_2, x_1] \subseteq I$이고, $f(x_1) < y < f(x_2)$는 닫힌구간 $[x_2, x_1]$의 오른쪽 끝의 값이 $y$보다 작고 왼쪽 끝의 값이 $y$보다 큰 꼴이므로, 사잇값 정리의 (1)과 (3)에 의해 $x_2 < c < x_1$이고 $f(c) = y$인 실수 $c$가 있다. 앞과 같이 $y \in f(I)$이다.

따라서 $f(I)$는 구간이다. $\blacksquare$
:::

## 예시와 반례

:::example[제곱근 함수의 연속을 다시 얻기]
$T = \{x \in \mathbb{R} : 0 \le x\}$로 두고, $f(x) = x^2$으로 정한 $f : T \to \mathbb{R}$를 생각합니다. $T$는 [[interval]]의 (2)에 의해 구간입니다. $0 \le x < x'$이면 [[power-of-a-real-number]]의 (6)의 (ii)에 의해 $x^2 < x'^2$이므로 $f$는 순증가이고, [[power-function-is-continuous]]의 (1)과 [[continuous-function]]의 (5)에 의해 연속함수입니다.

$f(T) = T$입니다. $x \in T$이면 거듭제곱의 (6)의 (i)에 의해 $0 \le x^2$이고, $y \in T$이면 [[square-root-exists]]의 (1)에 의해 $\sqrt{y} \in T$이며 $f(\sqrt{y}) = \sqrt{y}\sqrt{y} = y$입니다(거듭제곱의 (1)). (4)도 $f(T)$가 구간이라고 말하는데, 실제로 $T$입니다.

(2)의 역함수 $g : T \to T$는 $g(y) = x$인 것이 정확히 $x \in T$이고 $x^2 = y$일 때인 함수입니다. 제곱근의 (1)에 의해 그런 $x$는 $\sqrt{y}$ 하나뿐이므로 $g(y) = \sqrt{y}$입니다. 따라서 (3)에 의해 $q(y) = \sqrt{y}$로 정한 제곱근 함수 $q : T \to \mathbb{R}$는 연속함수입니다. 이것은 [[power-function-is-continuous]]의 (2)와 같은 결론을, 제곱근에 관한 식을 다루지 않고 얻은 것입니다. (2)에 의해 $q$는 순증가이기도 한데, 이것은 제곱근의 (2)와 맞습니다.
:::

:::example[불연속인 순증가 함수의 역함수]
$0 \le x < 1$이면 $f(x) = x$, $1 \le x \le 2$이면 $f(x) = x + 1$로 정한 $f : [0, 2] \to \mathbb{R}$를 생각합니다. $f$는 순증가입니다. 두 점이 모두 $1$보다 작거나 모두 $1$ 이상이면 바로 확인되고, $x < 1 \le x'$이면 $f(x) = x < 1 < 2 \le x' + 1 = f(x')$입니다.

$0 \le x < 1$이면 $f(x) = x$이고 $1 \le x \le 2$이면 $2 \le f(x) \le 3$이며, 거꾸로 $0 \le y < 1$이면 $f(y) = y$이고 $2 \le y \le 3$이면 $1 \le y - 1 \le 2$이고 $f(y - 1) = y$입니다. 따라서 상은 $f([0, 2]) = \{y : 0 \le y < 1\} \cup [2, 3]$이고, (2)에 의해 역함수 $g$는 $0 \le y < 1$이면 $g(y) = y$, $2 \le y \le 3$이면 $g(y) = y - 1$입니다. 이 상은 구간이 아닙니다. $0$과 $2$가 상에 속하고 $0 < 3/2 < 2$인데, $f(x) = 3/2$이라면 $x < 1$일 때 $x = 3/2$이 되고 $1 \le x$일 때 $x = 1/2$이 되어 어느 쪽도 맞지 않으므로 $3/2$은 상에 속하지 않습니다.

$[0, 2]$는 구간이므로 (3)에 의해 $g$는 연속함수입니다. 실제로 $g$의 정의역에서 $2$와 $1$보다 작은 점들은 $1$ 넘게 떨어져 있으므로, $y_0 = 2$에서 $\delta \le 1$로 잡으면 $2 \le y$인 점만 보면 됩니다. 한편 $f(I)$가 구간이 아니므로 (4)의 대우에 의해 $f$는 연속함수가 아닙니다. $f$는 $1$에서 뜁니다.
:::

:::counterexample[정의역이 구간이 아닌 예]
$S = [0, 1] \cup (2, 3]$에서 $0 \le x \le 1$이면 $f(x) = x$, $2 < x \le 3$이면 $f(x) = x - 1$로 정한 $f : S \to \mathbb{R}$를 생각합니다. $x \le 1 < 2 < x'$이면 $f(x) = x \le 1 < x' - 1 = f(x')$이므로 $f$는 순증가입니다. $0 \le y \le 1$이면 $f(y) = y$이고 $1 < y \le 2$이면 $2 < y + 1 \le 3$이고 $f(y + 1) = y$이며, $f$의 값은 모두 $0$ 이상 $2$ 이하이므로 상은 $[0, 1] \cup (1, 2] = [0, 2]$로 구간입니다. 역함수 $g : [0, 2] \to S$는 $0 \le y \le 1$이면 $g(y) = y$, $1 < y \le 2$이면 $g(y) = y + 1$입니다.

$g$는 $1$에서 연속이 아닙니다. $\varepsilon = 1$로 두면, 어떤 양수 $\delta$에 대해서도 $y = 1 + \min\{\delta, 1\}/2$는 $1 < y \le 3/2$이므로 $g$의 정의역에 속하고 $|y - 1| < \delta$인데, $|g(y) - g(1)| = (y + 1) - 1 = y > 1$입니다. 따라서 [[continuous-function]]의 (1)에 의해 $g$는 $1$에서 불연속입니다.

증명이 깨지는 곳은 (다)입니다. $x_0 = g(1) = 1$의 오른쪽에서 $v = 3$을 잡으면 $\varepsilon < 2$일 때 $b' = \min\{3, 1 + \varepsilon/2\} = 1 + \varepsilon/2$인데, 이 수는 $1$과 $3$ 사이에 있지만 $S$에 속하지 않습니다. $S$가 [[interval]]의 조건 (ii)를 만족하지 않기 때문입니다.
:::

## 확인 질문

:::check[$f(x) = -2x + 3$으로 정한 $f : [0, 1] \to \mathbb{R}$의 역함수는 무엇이고, 어느 방향으로 순단조인가?]
$0 \le x < x' \le 1$이면 $-2x' < -2x$이므로([[order-properties-of-reals]]의 (4)의 (ii)) $f(x') < f(x)$이고, $f$는 순감소입니다. $f(0) = 3$, $f(1) = 1$이고, $1 \le y \le 3$이면 $x = (3 - y)/2$는 $0 \le x \le 1$이고 $f(x) = y$입니다. 또 $0 \le x \le 1$이면 $1 \le -2x + 3 \le 3$이므로 $f([0, 1]) = [1, 3]$입니다. (2)에 의해 역함수 $g : [1, 3] \to [0, 1]$는 $g(y) = (3 - y)/2$이고, $f$가 순감소이므로 $g$도 순감소입니다. 실제로 $y < y'$이면 $(3 - y')/2 < (3 - y)/2$입니다.
:::

:::check[$S = \{1, 2\}$ 위에서 $f(1) = 5$, $f(2) = 0$인 함수의 역함수는 연속인가?]
$1 < 2$이고 $f(2) < f(1)$이므로 $f$는 순감소이고, (2)에 의해 역함수 $g : \{0, 5\} \to \{1, 2\}$는 $g(0) = 2$, $g(5) = 1$인 순감소 함수입니다. $S$는 구간이 아니므로 (3)은 쓸 수 없습니다. 그래도 $g$는 연속함수입니다. $\{0, 5\}$의 두 원소는 서로 $5$만큼 떨어져 있어 어느 것도 $\{0, 5\}$의 집적점이 아니므로 [[continuous-function]]의 (2)에 의해 $g$는 두 점에서 모두 연속입니다. (3)의 "$I$가 구간"은 역함수가 연속이기 위한 충분조건이지 필요조건이 아닙니다.
:::
