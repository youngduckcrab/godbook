---
title: 거리공간
title_en: Metric Space
aliases: [거리, 거리함수, metric, distance function, 거리의 삼각부등식, triangle inequality for metrics]
kind: definition
field: topology
msc: ["54E35"]
level: undergrad
summary: 집합과 그 위의 실숫값 함수 d 의 순서쌍으로서, d 가 음이 아니고 같은 점에서만 0 이며 대칭이고 삼각부등식을 만족하는 것. 거리의 역삼각부등식 꼴과 네 점 부등식을 함께 증명한다.
requires: [set, function, cartesian-product, quantifiers, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value]
sources:
  - ref: lebl-basic-analysis
    loc: 7.1절 Metric spaces, Definition 7.1.1 (p.255), 연습문제 7.1.2 (p.261), 7.1.4 (p.262), 7.5.10 (p.294)
    checked: original
    note: "정의의 네 조건 (i)–(iv)와 그 차례, '거리공간'과 '거리(거리함수)'라는 이름, 거리가 분명하면 X 만 쓰는 줄임은 출처의 Definition 7.1.1 과 같다. 출처는 X 가 공집합인 경우를 정의에서 따로 말하지 않고, 연습문제 7.1.9(p.262)와 7.2.4(p.272)에서 'nonempty metric space' 라고 조건을 붙인다. 이 항목은 X = ∅ 이 정의를 만족함을 진술에 적는다. 출처 연습문제 7.5.10(p.294)의 a), b)는 x 에서 d(x, p) 로의 함수와 (최대 거리를 준 X × X 위의) d 의 연속성을 묻고, (2)와 (4)는 그 증명에 쓰이는 부등식이다. 출처의 Definition 7.1.1 에서 (iv)의 이름은 'triangle inequality' 이고, 이 사이트는 해석학 입문의 실수의 삼각부등식과 구별하려고 '거리의 삼각부등식'이라 부른다. 예시 '세 점 위의 거리'와 반례 '삼각부등식이 깨지는 세 점'은 출처 연습문제 7.1.4(세 건물 사이의 걷는 시간이 거리인지 묻는다)와 같은 발상이다(원소가 셋인 집합 위의 함수가 거리인지 따진다). 확인 질문 '원소가 하나인 집합 위의 거리'는 출처 연습문제 7.1.2 와 같은 물음이다."
  - ref: fuglede-basic-topology
    loc: "Metric spaces 절의 정의, content/topological-spaces.tex:190–202"
    checked: original
    note: "출처는 d 를 처음부터 음이 아닌 값을 갖는 함수 X × X → ℝ_{≥0} 로 두고, 세 조건 (M1) d(x, y) = 0 ⇔ x = y, (M2) 대칭, (M3) 삼각부등식을 요구한다. 이 항목의 (ii), (iii), (iv)가 그 셋이고, 음이 아님은 (i)로 따로 적는다. 출처는 d 를 metric, d(x, y) 를 x 에서 y 까지의 distance 라 부른다. 출처의 번호 (M1)–(M3)은 쓰지 않는다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 출처 메모의 틀린 주장 4건과 경계 경우의 문장을 고쳤다."
added: 2026-11-19
---

:::statement
순서 $<$, $\le$는 [[real-order-axioms]]의 것이고, 절댓값은 [[absolute-value]]의 것이며, 실수의 계산은 [[real-number-arithmetic]]의 것이다.

**거리공간.** $X$가 집합이고 $d : X \times X \to \mathbb{R}$가 [[function|함수]]일 때(곱집합 $X \times X$의 원소 $(x, y)$에서의 값을 $d(x, y)$로 쓴다), 순서쌍 $(X, d)$가 **거리공간**(metric space)인 것은 정확히 $X$의 모든 원소 $x$, $y$, $z$에 대하여 다음 네 조건이 모두 성립할 때이다.

- (i) $0 \le d(x, y)$이다.
- (ii) $d(x, y) = 0$인 것은 정확히 $x = y$일 때이다.
- (iii) $d(x, y) = d(y, x)$이다.
- (iv) $d(x, z) \le d(x, y) + d(y, z)$이다. 이 부등식을 **거리의 삼각부등식**(triangle inequality)이라 한다.

이때 $d$를 $X$ 위의 **거리**(metric) 또는 거리함수(distance function)라 하고, $d(x, y)$를 $x$와 $y$ 사이의 거리, $X$의 원소를 **점**(point)이라 한다. 거리가 문맥에서 분명하면 $(X, d)$를 "거리공간 $X$"로 줄여 쓴다.

**공집합.** $X = \emptyset$이면 $X \times X = \emptyset$이고, $\emptyset$에서 $\mathbb{R}$로의 함수는 공집합 하나뿐이다. 이 함수 $d = \emptyset$에 대하여 네 조건은 따질 점이 없어 성립하므로 $(\emptyset, \emptyset)$은 거리공간이다.

다음이 성립한다. 아래에서 $(X, d)$는 거리공간이고 $x$, $y$, $z$, $w$는 $X$의 점이다. 세 수의 합 $a + b + c$는 $(a + b) + c$를 뜻한다.

1. $d(x, x) = 0$이다. $x \ne y$이면 $0 < d(x, y)$이다.
2. (거리의 역삼각부등식) $\bigl|d(x, z) - d(y, z)\bigr| \le d(x, y)$이다.
3. (네 점을 잇는 부등식) $d(x, w) \le d(x, y) + d(y, z) + d(z, w)$이다.
4. (두 거리의 차) $\bigl|d(x, y) - d(z, w)\bigr| \le d(x, z) + d(y, w)$이다.
5. ((i)은 나머지 셋에서 나온다) 집합 $X$와 함수 $d : X \times X \to \mathbb{R}$가 $X$의 모든 점 $x$, $y$, $z$에서 (ii), (iii), (iv)를 만족하면 (i)도 만족한다. 따라서 이때 $(X, d)$는 거리공간이다.
:::

:::english
The order $<$, $\le$, the absolute value and the arithmetic of real numbers are as in the earlier entries.

**Metric spaces.** Let $X$ be a set and let $d : X \times X \to \mathbb{R}$ be a function (its value at the element $(x, y)$ of $X \times X$ is written $d(x, y)$). The ordered pair $(X, d)$ is a **metric space** exactly when the following four conditions hold for all elements $x$, $y$, $z$ of $X$.

- (i) $0 \le d(x, y)$.
- (ii) $d(x, y) = 0$ exactly when $x = y$.
- (iii) $d(x, y) = d(y, x)$.
- (iv) $d(x, z) \le d(x, y) + d(y, z)$. This inequality is called the **triangle inequality** for the metric.

In this case $d$ is called a **metric** (or distance function) on $X$, $d(x, y)$ is called the distance between $x$ and $y$, and the elements of $X$ are called **points**. When the metric is clear from the context, we abbreviate $(X, d)$ to "the metric space $X$".

**The empty set.** If $X = \emptyset$, then $X \times X = \emptyset$, and the only function from $\emptyset$ to $\mathbb{R}$ is the empty set. For this function $d = \emptyset$ the four conditions hold, since there are no points to check, so $(\emptyset, \emptyset)$ is a metric space.

The following hold. Here $(X, d)$ is a metric space and $x$, $y$, $z$, $w$ are points of $X$. A sum of three numbers $a + b + c$ means $(a + b) + c$.

1. $d(x, x) = 0$. If $x \ne y$, then $0 < d(x, y)$.
2. (Reverse triangle inequality for the metric) $\bigl|d(x, z) - d(y, z)\bigr| \le d(x, y)$.
3. (An inequality through four points) $d(x, w) \le d(x, y) + d(y, z) + d(z, w)$.
4. (Difference of two distances) $\bigl|d(x, y) - d(z, w)\bigr| \le d(x, z) + d(y, w)$.
5. ((i) follows from the other three) If $X$ is a set and $d : X \times X \to \mathbb{R}$ is a function satisfying (ii), (iii) and (iv) for all points $x$, $y$, $z$ of $X$, then it also satisfies (i). Hence $(X, d)$ is then a metric space.
:::

## 직관

거리공간은 "두 점 사이의 거리"를 잴 수 있는 집합입니다. 무엇을 거리로 쓸지는 정하기 나름이지만, 거리라고 부를 만하려면 네 가지를 지켜야 합니다. 거리는 음수가 아니고, 같은 점끼리만 거리가 $0$이며, 가는 거리와 오는 거리가 같고, 다른 점을 들러 가는 길이 곧장 가는 길보다 짧을 수 없습니다.

지도 위의 도시들을 떠올리면 좋습니다. 도시가 점이고, 두 도시 사이의 거리가 $d$입니다. 거리의 삼각부등식 (iv)는 "서울에서 부산으로 곧장 가는 거리는 대전을 들러 가는 거리보다 길지 않다"는 말입니다. 다만 거리공간의 거리는 지도의 직선거리가 아니어도 됩니다. 네 조건만 지키면 어떤 함수든 거리입니다. 그래서 그림에서 그럴듯해 보이는 사실이 모든 거리공간에서 성립한다고 믿으면 안 됩니다.

(2)는 실수의 역삼각부등식을 거리로 옮긴 것으로, $x$와 $y$가 가까우면 두 점에서 $z$까지의 거리도 비슷하다는 뜻입니다. (4)는 두 점 쌍의 거리를 서로 비교하는 꼴로, 증명은 네 점을 잇는 부등식 (3)을 두 번 씁니다.

## 성질의 증명

:::proof
**공집합.** [[cartesian-product|곱집합]]의 원소는 첫째 성분이 $X$에 속하는 순서쌍이므로, $X = \emptyset$이면 $X \times X$에는 원소가 없다. 같은 이유로 $\emptyset \times \mathbb{R} = \emptyset$이다. [[function|함수]]의 정의에 의해 $\emptyset$에서 $\mathbb{R}$로의 함수는 $\emptyset \times \mathbb{R} = \emptyset$의 부분집합이므로 $\emptyset$뿐이다. 거꾸로 $\emptyset$은 $\emptyset \times \mathbb{R}$의 부분집합이고, 정의역 $\emptyset$에 원소가 없으므로 함수의 두 조건(존재, 유일)은 따질 원소가 없어 성립한다. 따라서 $\emptyset$은 $\emptyset$에서 $\mathbb{R}$로의 유일한 함수이다. 네 조건은 "$X$의 모든 원소 $x$, $y$, $z$에 대하여"로 시작하고 $X$에 원소가 없으므로 참이다([[quantifiers]]).

아래에서 실수의 순서에 관한 사실은 [[order-properties-of-reals]]의 번호로 인용한다.

**(1).** (ii)에서 $y = x$로 두면 $x = x$이므로 $d(x, x) = 0$이다. $x \ne y$이면 (ii)에 의해 $d(x, y) \ne 0$이다. (i)에 의해 $0 \le d(x, y)$, 곧 $0 < d(x, y)$이거나 $0 = d(x, y)$인데 뒤의 것이 아니므로 $0 < d(x, y)$이다.

**(2).** (iv)를 점 $x$, $y$, $z$에 쓰면 $d(x, z) \le d(x, y) + d(y, z)$이고, 양변에서 $d(y, z)$를 빼면([[order-properties-of-reals]]의 (2)의 (i)) $d(x, z) - d(y, z) \le d(x, y)$이다. (iv)를 점 $y$, $x$, $z$에 쓰고 (iii)을 쓰면 $d(y, z) \le d(y, x) + d(x, z) = d(x, y) + d(x, z)$이고, 양변에서 $d(x, y) + d(y, z)$를 빼면 $-d(x, y) \le d(x, z) - d(y, z)$이다. 두 부등식을 합치면 $-d(x, y) \le d(x, z) - d(y, z) \le d(x, y)$이고, [[absolute-value]]의 (7)에 의해 $\bigl|d(x, z) - d(y, z)\bigr| \le d(x, y)$이다.

**(3).** (iv)를 점 $x$, $y$, $w$에 쓰면 $d(x, w) \le d(x, y) + d(y, w)$이고, 점 $y$, $z$, $w$에 쓰면 $d(y, w) \le d(y, z) + d(z, w)$이다. 뒤의 부등식의 양변에 $d(x, y)$를 더하고([[order-properties-of-reals]]의 (2)의 (i)) 결합법칙 (K2)를 쓰면 $d(x, y) + d(y, w) \le d(x, y) + d(y, z) + d(z, w)$이다. 섞인 추이성(같은 항목의 (1)의 (v))에 의해 $d(x, w) \le d(x, y) + d(y, z) + d(z, w)$이다.

**(4).** $c = d(x, z) + d(y, w)$라 하자. (3)을 점 $x$, $z$, $w$, $y$에 쓰고 (iii)으로 $d(w, y) = d(y, w)$로 바꾸면 $d(x, y) \le d(x, z) + d(z, w) + d(y, w)$이다. 양변에서 $d(z, w)$를 빼고 (K1), (K2)로 정리하면 $d(x, y) - d(z, w) \le c$이다. 마찬가지로 (3)을 점 $z$, $x$, $y$, $w$에 쓰고 (iii)으로 $d(z, x) = d(x, z)$로 바꾸면 $d(z, w) \le d(x, z) + d(x, y) + d(y, w)$이고, 양변에서 $d(x, y)$를 빼고 정리하면 $d(z, w) - d(x, y) \le c$이다. 같은 항목의 (3)의 (iii)에 의해 $-c \le -\bigl(d(z, w) - d(x, y)\bigr) = d(x, y) - d(z, w)$이다(등식은 (K9), (K12)의 (iv)). 따라서 $-c \le d(x, y) - d(z, w) \le c$이고 [[absolute-value]]의 (7)에 의해 $\bigl|d(x, y) - d(z, w)\bigr| \le c$이다.

**(5).** $x$, $y$를 $X$의 점이라 하자. (iv)를 점 $x$, $y$, $x$에 쓰고 (iii)을 쓰면 $d(x, x) \le d(x, y) + d(y, x) = d(x, y) + d(x, y)$이다. (ii)에 의해 $d(x, x) = 0$이므로 $0 \le d(x, y) + d(x, y)$이다. $d(x, y) < 0$이라 하면, $d(x, y) < 0$과 $d(x, y) \le 0$에서 [[order-properties-of-reals]]의 (2)의 (iv)에 의해 $d(x, y) + d(x, y) < 0 + 0 = 0$이 되어, 같은 항목의 (1)의 (i)에 의해 $0 \le d(x, y) + d(x, y)$와 함께 성립할 수 없다. 따라서 $d(x, y) < 0$이 아니고, 같은 항목의 (1)의 (iii)에 의해 $0 \le d(x, y)$이다.
:::

## 예시와 반례

:::example[세 점 위의 거리]
서로 다른 세 대상 $p$, $q$, $s$로 이루어진 집합 $X = \{p, q, s\}$에서, $d(p, q) = d(q, p) = 1$, $d(q, s) = d(s, q) = 1$, $d(p, s) = d(s, p) = 3/2$, $d(p, p) = d(q, q) = d(s, s) = 0$으로 정합니다. $X \times X$의 아홉 원소마다 값을 하나씩 적었으므로 $d$는 함수이고, (i), (ii), (iii)은 표에서 바로 보입니다.

(iv) $d(u, w) \le d(u, v) + d(v, w)$를 확인합니다. $u = w$이면 왼쪽이 $0$이고 오른쪽은 (i)에 의해 $0$ 이상입니다. $u \ne w$이고 $v$가 $u$나 $w$와 같으면 오른쪽의 한 항이 $0$이고 다른 항이 $d(u, w)$이므로 등호입니다. 남은 것은 $u$, $v$, $w$가 서로 다른 경우이고, 대칭 (iii) 때문에 가운데 점 $v$가 무엇인지만 보면 됩니다.

- $v = q$: $d(p, s) = 3/2 \le d(p, q) + d(q, s) = 2$.
- $v = p$: $d(q, s) = 1 \le d(q, p) + d(p, s) = 5/2$.
- $v = s$: $d(p, q) = 1 \le d(p, s) + d(s, q) = 5/2$.

따라서 $(X, d)$는 거리공간입니다.
:::

:::counterexample[세 점 사이의 거리를 아무렇게나 정하면 삼각부등식이 깨질 수 있다]
위 예에서 $d(p, s) = d(s, p)$만 $3$으로 바꾸면 (i), (ii), (iii)은 그대로 성립하지만 $d(p, s) = 3 > 2 = d(p, q) + d(q, s)$이므로 (iv)가 깨집니다. $p$에서 $s$로 곧장 가는 것보다 $q$를 들러 가는 것이 짧아지는 셈입니다.
:::

## 확인 질문

:::check[원소가 하나인 집합 $X = \{p\}$ 위의 거리는 몇 개인가?]
하나입니다. $X \times X = \{(p, p)\}$이므로 함수 $d$는 값 $d(p, p)$ 하나로 정해지고, (1)에 의해 $d(p, p) = 0$이어야 합니다. 거꾸로 $d(p, p) = 0$으로 정하면 네 조건은 모두 $x = y = z = p$에서만 따지면 되고 모두 성립합니다.
:::

:::check[거리공간의 네 점에서 $d(x, y) = 5$, $d(z, w) = 1$, $d(x, z) = 1$이면 $d(y, w)$는 얼마 이상인가?]
(4)에 의해 $5 - 1 = |d(x, y) - d(z, w)| \le d(x, z) + d(y, w) = 1 + d(y, w)$이므로 $d(y, w) \ge 3$입니다.
:::
