---
title: 롤의 정리
title_en: Rolle's Theorem
aliases: [롤 정리, Rolle's theorem, Rolle theorem]
kind: theorem
field: real-analysis
msc: ["26A24"]
level: undergrad
summary: "a < b 이고 f : [a, b] → ℝ 가 연속이며 열린구간 (a, b) 에서 미분가능하고 f(a) = f(b) 이면, f′(c) = 0 인 c ∈ (a, b) 가 있다."
requires: [subset, real-number-arithmetic, order-properties-of-reals, absolute-value, interval, real-valued-function, limit-of-a-function, continuous-function, continuity-of-sum-and-product, extreme-value-theorem, derivative, differentiable-implies-continuous, derivative-rules, derivative-of-power, interior-extremum]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 4.2.2절 Theorem 4.2.3 과 그 증명, 그 뒤 문단 (p.163–164)
    checked: original
    note: "출처의 Theorem 4.2.3(p.163)은 f : [a, b] → ℝ 가 연속이고 (a, b) 에서 미분가능하며 f(a) = f(b) 이면 f′(c) = 0 인 c ∈ (a, b) 가 있다는 것이고, 이 항목의 진술과 같다(출처는 a < b 를 구간의 기호에 담는다). 출처는 최대·최소 정리로 최댓값과 최솟값을 얻고, K = f(a) = f(b) 보다 큰 값이 있으면 최댓값을 갖는 점이, 작은 값이 있으면 최솟값을 갖는 점이 (a, b) 안에 있다고 하여 Lemma 4.2.2 를 쓰며, 둘 다 없으면 f 가 상수이므로 아무 c 나 된다고 한다. 이 항목은 경우를 '최댓값을 갖는 점이 (a, b) 안에 있는가, 최솟값을 갖는 점이 (a, b) 안에 있는가'로 나누고, 둘 다 끝점이면 최댓값과 최솟값이 모두 K 이므로 f 가 상수함수라는 것을 보인다. 출처의 Lemma 4.2.2 는 정의역이 (a, b) 인 함수에 대한 것이고, 이 항목은 [a, b] 위의 함수에 그대로 쓸 수 있는 interior-extremum 의 (3)을 쓴다. 상수인 경우의 c 로 (a + b)/2 를 고른 것과 최댓값을 갖는 점이 극대라는 단계(interior-extremum 의 (1))는 이 항목이 밝혔다. 반례 '꺾인 점이 있으면'은 출처가 증명 뒤 문단(p.164)에서 [−1, 1] 위의 |x| 에 대하여 f(−1) = f(1) 이지만 f′(c) = 0 인 점이 없다고 적는 것과 같은 함수이고, 이 항목은 derivative 의 (3)으로 그것을 보인다. 출처는 Rolle(1652–1719)의 이름을 각주에 적는다. 예시와 확인 질문은 출처에 없다(검색한 범위)."
status: reviewed
review_note: "2026-11-17 독립 검토 2회(전반 1회, 후반과 전반 재확인 1회). 증명의 수학 오류 없음. 수열을 따라 극한을 계산하는 길 없이 증명. 절댓값 함수의 미분가능성을 진술로 올림, 반례 제목의 일반화와 출처 메모를 고침"
added: 2026-11-17
---

:::statement
닫힌구간과 열린구간은 [[interval]]의 것이고, 연속은 [[continuous-function]]의 것이며, 미분가능, 미분계수와 "열린구간에서 미분가능하다"는 말은 [[derivative]]의 것이다.

$a < b$인 실수 $a$, $b$와 $f : [a, b] \to \mathbb{R}$에 대하여, $f$가 연속함수이고 열린구간 $(a, b)$에서 미분가능하며 $f(a) = f(b)$이면, $f'(c) = 0$인 $c \in (a, b)$가 있다.
:::

:::english
Closed and open intervals are those of the entry on intervals, continuity is that of the entry on continuous functions, and differentiability, derivatives and "differentiable on an open interval" are those of the entry on derivatives.

For real numbers $a < b$ and $f : [a, b] \to \mathbb{R}$, if $f$ is a continuous function that is differentiable on the open interval $(a, b)$ and $f(a) = f(b)$, then there is $c \in (a, b)$ with $f'(c) = 0$.
:::

## 직관

같은 높이에서 출발해 같은 높이로 돌아오는 산길을 떠올려 봅시다. 길이 한 번이라도 올라갔다면 어딘가에 가장 높은 곳이 있고, 내려갔다면 가장 낮은 곳이 있습니다. 그곳이 길의 양 끝이 아니면, 거기서는 오르막도 내리막도 아니어서 기울기가 $0$입니다. 비유가 맞는 곳은 "가장 높은 곳이 있다"(최대·최소 정리)와 "안쪽의 꼭대기에서 기울기는 $0$"([[interior-extremum|극값에서 미분계수는 0]])이라는 두 단계입니다. 맞지 않는 곳은 길이 평평한 경우입니다. 평평한 길에서는 모든 점이 꼭대기이자 바닥이어서, 증명은 이 경우를 따로 다룹니다(가장 높은 곳과 가장 낮은 곳이 둘 다 끝에 있을 수 있기 때문입니다).

연속이라는 가정은 최댓값과 최솟값이 있다는 데에, $(a, b)$에서의 미분가능은 안쪽에서 극값을 갖는 점에서 미분계수가 $0$이라는 데에, $f(a) = f(b)$는 최댓값과 최솟값을 갖는 점이 둘 다 끝점이면 함수가 상수라는 데에 쓰입니다.

## 증명

:::idea
최대·최소 정리로 최댓값을 갖는 점과 최솟값을 갖는 점을 얻는다. 그 가운데 하나가 $(a, b)$ 안에 있으면 그 점에서 극값을 가지므로 미분계수가 $0$이고, 둘 다 끝점이면 $f(a) = f(b)$이므로 최댓값과 최솟값이 같아 $f$는 상수함수이다.
:::

:::hint
$c_1 \in [a, b]$가 $(a, b)$에 속하지 않으면 $c_1 = a$이거나 $c_1 = b$이다. 이것을 순서의 성질로 보인다.
:::

:::proof
"순서 성질 (1)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다.

[[extreme-value-theorem|최대·최소 정리]]의 (2)에 의해 $f$가 최댓값을 갖는 점 $c_1 \in [a, b]$와 최솟값을 갖는 점 $d_1 \in [a, b]$가 있다. 곧 모든 $x \in [a, b]$에서 $f(d_1) \le f(x) \le f(c_1)$이다. $[a, b]$는 [[interval]]의 (1)에 의해 구간이고, 같은 항목의 (3)에 의해 $a$와 $b$는 $[a, b]$의 원소이다.

**$c_1 \in (a, b)$인 경우.** $a < c_1 < b$이고, 가정에 의해 $f$는 $c_1$에서 미분가능하다. [[interior-extremum|극값의 보조정리]]의 (1)에 의해 $f$는 $c_1$에서 극대이므로, 같은 항목의 (3)을 구간 $[a, b]$와 그 원소 $a$, $b$에 쓰면 $f'(c_1) = 0$이다. $c = c_1$로 둔다.

**$d_1 \in (a, b)$인 경우.** 같은 방식으로 [[interior-extremum|극값의 보조정리]]의 (1)에 의해 $f$는 $d_1$에서 극소이고, 같은 항목의 (3)에 의해 $f'(d_1) = 0$이다. $c = d_1$로 둔다.

**$c_1 \notin (a, b)$이고 $d_1 \notin (a, b)$인 경우.** $a \le c_1 \le b$이다. $a < c_1$이고 $c_1 < b$이면 $c_1 \in (a, b)$이므로 둘 가운데 하나는 성립하지 않고, 순서 성질 (1)의 (iii)에 의해 $c_1 \le a$이거나 $b \le c_1$이다. 앞의 경우 $a \le c_1$과 함께 순서 성질 (1)의 (ii)에 의해 $c_1 = a$이고, 뒤의 경우 같은 까닭으로 $c_1 = b$이다. 같은 논증으로 $d_1 = a$이거나 $d_1 = b$이다. $K = f(a) = f(b)$로 두면 어느 경우든 $f(c_1) = K$이고 $f(d_1) = K$이다. 따라서 모든 $x \in [a, b]$에서 $K \le f(x) \le K$이고, 순서 성질 (1)의 (ii)에 의해 $f(x) = K$이다. [[real-valued-function]]의 (2), (3)에 의해 $f$는 $[a, b]$ 위의 값이 $K$인 상수함수이고, [[derivative]]의 (1)에 의해 $[a, b]$의 모든 점에서 미분계수가 $0$이다. $c = 2^{-1}(a + b)$로 두면 [[interval]]의 (3)에 의해 $c \in (a, b)$이고 $f'(c) = 0$이다.

세 경우가 모든 경우를 덮으므로, 어느 경우든 $f'(c) = 0$인 $c \in (a, b)$가 있다. $\blacksquare$
:::

## 예시와 반례

:::example[양 끝 값이 같은 이차식 꼴의 함수]
$f(x) = x^2 - 3x$로 정한 $f : [0, 3] \to \mathbb{R}$를 생각합니다. $f = (p_2 - 3p_1)|_{[0, 3]}$이므로([[derivative-of-power]]의 $p_n$, [[real-valued-function]]의 (2), (4), (6)) [[derivative-of-power]]의 (1), [[derivative-rules|미분의 연산]]의 (1), (3), [[derivative]]의 (2)에 의해 미분가능한 함수이고 $f'(c) = 2c - 3$이며, [[differentiable-implies-continuous|미분가능하면 연속]]의 (2)에 의해 연속함수입니다. $f(0) = 0 = 9 - 9 = f(3)$이므로 롤의 정리에 의해 $f'(c) = 0$인 $c \in (0, 3)$가 있고, 실제로 $c = 3 \cdot 2^{-1}$입니다. 정리는 그런 점이 있다는 것만 말하고 어디인지는 말하지 않습니다. 여기서는 $2c - 3 = 0$을 풀어 찾았습니다.
:::

:::counterexample[꺾인 점이 있으면 성립하지 않을 수 있다]
$s(x) = |x|$로 정한 $s : [-1, 1] \to \mathbb{R}$는 $s = |i_{[-1, 1]}|$이므로 [[continuous-function]]의 (4)와 [[continuity-of-sum-and-product|연속함수의 연산]]의 (3)에 의해 연속함수이고, [[absolute-value|절댓값]]의 (1), (3)에 의해 $s(-1) = 1 = s(1)$입니다. [[derivative]]의 (3)을 $I = [-1, 1]$, $r = 1$로 쓰면 $s$는 $0$에서 미분가능하지 않고, $0 < c$이면 $s'(c) = 1$, $c < 0$이면 $s'(c) = -1$입니다. 따라서 $s'(c) = 0$인 $c \in (-1, 1)$는 없습니다. 정리의 가정 가운데 "$(-1, 1)$에서 미분가능"이 $0$에서 깨졌습니다. 가정이 깨졌다고 결론이 늘 거짓인 것은 아닙니다.
:::

## 역사와 맥락

Lebl은 이 정리가 프랑스 수학자 롤(Michel Rolle, 1652–1719)의 이름을 딴 것이라고 각주에 적습니다.

## 확인 질문

:::check[닫힌구간 $[0, 1]$ 위의 항등함수에는 롤의 정리를 쓸 수 있는가?]
쓸 수 없습니다. 연속이고 모든 점에서 미분가능하지만, 양 끝 값이 $0$과 $1$로 다릅니다. 실제로 [[derivative]]의 (1)에 의해 모든 점에서 미분계수가 $1$이어서 $0$이 되는 점이 없습니다.
:::

:::check[$0 \le x < 1$이면 $f(x) = x$, $f(1) = 0$으로 정한 $f : [0, 1] \to \mathbb{R}$에서 $f'(c) = 0$인 $c \in (0, 1)$가 있는가?]
없습니다. $0 < c < 1$이면 $\delta_0 = 1 - c$로 두어, $x \in [0, 1] - \{c\}$이고 $|x - c| < \delta_0$인 $x$는 $x < 1$이므로([[absolute-value|절댓값]]의 (8)) 차분몫이 $(x - c)(x - c)^{-1} = 1$입니다. "차분몫 $= 1$"이 $c$ 가까이에서 성립하므로 [[limit-of-a-function]]의 (4), (5)에 의해 $f'(c) = 1$입니다. $f(0) = 0 = f(1)$이지만 $f$는 $1$에서 연속이 아니어서 정리의 가정이 성립하지 않습니다. 양수 $\delta$마다 $x = \max\{2^{-1}, 1 - 2^{-1}\delta\}$로 두면 $2^{-1} \le x < 1$이고 $|x - 1| = 1 - x \le 2^{-1}\delta < \delta$이며 $|f(x) - f(1)| = x \ge 2^{-1}$이므로([[absolute-value|절댓값]]의 (1), (10), [[order-properties-of-reals]]의 (3), (8)), [[continuous-function]]의 (1)이 $\varepsilon = 2^{-1}$로 성립합니다.
:::
