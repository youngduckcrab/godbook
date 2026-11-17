---
title: 실수의 순서의 성질
title_en: Properties of the Order on the Real Numbers
aliases: [부등식의 기본 성질, 부등식의 성질, properties of inequalities, ordered field properties]
kind: proposition
field: real-analysis
msc: ["12J15"]
level: undergrad
summary: 부등식을 다루는 기본 규칙(≤ 와 < 의 논리, 부등식의 덧셈, 양수·음수를 곱할 때, 제곱과 역수의 부호, 두 수의 평균, ε 논법, 정수의 순서와의 일치)을 실수의 순서 공리와 계산 법칙에서 증명한다.
requires: [real-order-axioms, real-number-arithmetic, proof-by-contradiction, mathematical-induction, prime-number, well-ordering-principle, even-and-odd]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 1.1절 Proposition 1.1.8, Proposition 1.1.9 (p.26), 연습문제 1.1.1, 1.1.3 (p.27), 1.1.11 (p.28); 1.2절 Theorem 1.2.1 뒤의 문단, Proposition 1.2.2 와 그 뒤 두 문단 (p.29), 연습문제 1.2.4 (p.34)
    checked: original
    note: "출처의 Proposition 1.1.8 은 일반의 순서체에서 (i) x > 0 이면 −x < 0 이고 그 역, (ii) x > 0, y < z 이면 xy < xz, (iii) x < 0, y < z 이면 xy > xz, (iv) x ≠ 0 이면 x² > 0, (v) 0 < x < y 이면 0 < 1/y < 1/x, (vi) 0 < x < y 이면 x² < y², (vii) x ≤ y, z ≤ w 이면 x + z ≤ y + w 를 진술하고, (iv) 뒤에 '특히 1 > 0'이라고 적는다(p.26). 차례로 이 항목의 (3)의 (ii), (4)의 (i), (4)의 (ii), (5)의 (i), (6)의 (ii), (7)의 (i), (2)의 (iii)에 해당하고, '1 > 0'은 (5)의 (ii)이다. 출처는 (iii), (vi), (vii)을 연습문제 1.1.1, 1.1.3, 1.1.11 (a)로 돌리고, (i)의 역은 'similar calculation'이라고만 한다. (2)의 (iv)는 연습문제 1.1.11 (b)이다. (7)의 (i)은 출처의 (vi)을 0 ≤ a 로 넓혀 적은 것이다. (6)의 (i)의 첫 문장은 출처가 (v)의 증명 안에서 보이고, p.29 에서 'n > 0 이면 1/n > 0'으로 다시 언급한다. (6)의 (iii)은 출처의 Proposition 1.1.9 이고, 출처는 대우와 'Without loss of generality'로 증명하며 이 항목은 네 경우를 모두 적는다. (6)의 (iv)의 한 방향은 출처 p.29 의 'm < k 이면 m/n < k/n'과 같은 꼴이다. (5)의 (iv)는 출처 연습문제 1.2.4 이다. (8)은 출처 p.29 의 'c = (a+b)/2 (why?)'이고, (9)는 출처의 Proposition 1.2.2 와 바로 뒤 문단의 'x ≥ 0 이면 x = 0'이다. 출처는 Proposition 1.2.2 를 '0 < x/2 < x (why?)'와 ε = x/2 로 한 줄에 증명하며 이 항목의 증명도 같은 경로이다. (10)에 관해 출처는 Theorem 1.2.1 에서 ℚ ⊂ ℝ 를 받아들이고, ℕ ⊂ ℚ 라는 것과 '귀납법으로 모든 자연수 n 에 대해 n > 0 임을 증명할 수 있다(exercise)'를 적는다(p.29). 그 연습문제에는 번호가 없다. 정수로서의 순서와 실수로서의 순서가 일치한다는 진술은 출처에 없다(1.1–1.2절을 읽은 범위). (1), (2)의 (i), (ii), (3)의 (i), (iii), (4)의 (iii), (iv), (5)의 (iii), (6)의 (i)의 둘째 문장, (7)의 (ii)–(iv)는 출처에 명제로 적혀 있지 않다. 그 가운데 (3)의 (i)은 출처가 Proposition 1.1.8 (ii)의 증명에서, (3)의 (iii)의 ≤ 꼴은 Proposition 1.1.11 의 증명에서, (4)의 (iv)의 둘째 문장은 Proposition 1.1.9 의 증명에서 쓴다. 증명은 이 사이트가 (K1)–(K12)와 (W1)–(W4)를 인용하며 쓴 것이다. (5)의 (i)(양수와 음수로 나누기)과 (6)의 (ii)(두 역수의 곱을 곱하기)의 증명 경로는 출처와 같다. 예시, 반례, 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-17
---

:::statement
순서 $<$, $\le$와 양수, 음수는 [[real-order-axioms]]의 것이고 덧셈과 곱셈, $-a$, $a^{-1}$, 뺄셈과 나눗셈은 [[real-number-arithmetic]]의 것이다. 아래에서 $a$, $b$, $c$, $d$는 임의의 실수이다.

1. ($<$와 $\le$의 논리)
   - (i) $a < b$이면 $a \ne b$이다. $a < b$와 $b \le a$는 함께 성립하지 않는다.
   - (ii) $a \le b$이고 $b \le a$이면 $a = b$이다.
   - (iii) "$a < b$"가 성립하지 않는 것은 정확히 $b \le a$일 때이다. "$a \le b$"가 성립하지 않는 것은 정확히 $b < a$일 때이다.
   - (iv) $a \le a$이다. $a \le b$이거나 $b \le a$이다.
   - (v) (섞인 추이성) $a < b$이고 $b \le c$이면 $a < c$이다. $a \le b$이고 $b < c$이면 $a < c$이다. $a \le b$이고 $b \le c$이면 $a \le c$이다.
2. (덧셈과 부등식)
   - (i) $a \le b$이면 $a + c \le b + c$이다.
   - (ii) $a < b$인 것은 정확히 $a + c < b + c$일 때이다. $a \le b$인 것은 정확히 $a + c \le b + c$일 때이다.
   - (iii) $a \le b$이고 $c \le d$이면 $a + c \le b + d$이다.
   - (iv) $a < b$이고 $c \le d$이면 $a + c < b + d$이다.
3. (차와 음수)
   - (i) $a < b$인 것은 정확히 $0 < b - a$일 때이다. $a \le b$인 것은 정확히 $0 \le b - a$일 때이다.
   - (ii) $0 < a$인 것은 정확히 $-a < 0$일 때이다. $a < 0$인 것은 정확히 $0 < -a$일 때이다.
   - (iii) $a < b$인 것은 정확히 $-b < -a$일 때이다. $a \le b$인 것은 정확히 $-b \le -a$일 때이다.
4. (곱셈과 부등식)
   - (i) $0 < c$이고 $a < b$이면 $ac < bc$이다.
   - (ii) $c < 0$이고 $a < b$이면 $bc < ac$이다.
   - (iii) $0 \le c$이고 $a \le b$이면 $ac \le bc$이다. $c \le 0$이고 $a \le b$이면 $bc \le ac$이다.
   - (iv) (곱의 부호) $0 \le a$이고 $0 \le b$이면 $0 \le ab$이다. $0 < a$이고 $b < 0$이면 $ab < 0$이다. $a < 0$이고 $b < 0$이면 $0 < ab$이다. $0 \le a$이고 $b \le 0$이면 $ab \le 0$이다.
5. (제곱)
   - (i) $a \ne 0$이면 $0 < aa$이다.
   - (ii) $0 < 1$이다.
   - (iii) $0 \le aa$이다.
   - (iv) $aa + bb = 0$이면 $a = 0$이고 $b = 0$이다.
6. (역수)
   - (i) $0 < a$이면 $0 < a^{-1}$이다. $a < 0$이면 $a^{-1} < 0$이다.
   - (ii) $0 < a < b$이면 $0 < b^{-1} < a^{-1}$이다.
   - (iii) $0 < ab$이면 "$0 < a$이고 $0 < b$"이거나 "$a < 0$이고 $b < 0$"이다.
   - (iv) $0 < c$이면, $a < b$인 것은 정확히 $ac < bc$일 때이고, $a \le b$인 것은 정확히 $ac \le bc$일 때이다.
7. (음이 아닌 수의 제곱과 순서) $0 \le a$이고 $0 \le b$라 하자.
   - (i) $a < b$이면 $aa < bb$이다.
   - (ii) $a \le b$이면 $aa \le bb$이다.
   - (iii) $aa < bb$이면 $a < b$이다. $aa \le bb$이면 $a \le b$이다.
   - (iv) $aa = bb$이면 $a = b$이다.
8. (두 수의 평균) $a < b$이면 $a < \dfrac{a + b}{2} < b$이다. 특히 $0 < c$이면 $0 < \dfrac{c}{2} < c$이다.
9. (모든 양수 이하인 수) 실수 $x$가 모든 양수 $\varepsilon$에 대하여 $x \le \varepsilon$을 만족하면, 곧 $\forall \varepsilon \in \mathbb{R},\ (0 < \varepsilon \Rightarrow x \le \varepsilon)$이면 $x \le 0$이다. 이때 $0 \le x$이기도 하면 $x = 0$이다.
10. (정수의 순서와의 일치) 정수 $a$, $b$에 대하여, 정수로서 $a < b$인 것([[prime-number]]와 [[well-ordering-principle]]의 순서)은 정확히 실수로서 $a < b$일 때이다. 따라서 정수 사이의 $\le$, $>$, $\ge$도 두 뜻이 같고, (Z1)–(Z8), (L1)–(L3)을 정수에 대해 쓴 진술과 [[well-ordering-principle]]의 정리들은 그 안의 부등호를 실수의 순서로 읽어도 그대로 성립하며, 구체적인 정수 사이의 부등식(예: $0 < 2$)도 실수의 부등식으로 쓸 수 있다. 특히 모든 자연수 $n$은 양의 실수이고 $0 < n^{-1}$이다.
:::

:::english
The order $<$, $\le$ and the notions positive and negative are those of the entry on the order of the real numbers, and addition, multiplication, $-a$, $a^{-1}$, subtraction, and division are those of the entry on arithmetic of the real numbers. Below, $a$, $b$, $c$, $d$ are arbitrary real numbers.

1. (Logic of $<$ and $\le$)
   - (i) If $a < b$, then $a \ne b$. The statements $a < b$ and $b \le a$ do not hold together.
   - (ii) If $a \le b$ and $b \le a$, then $a = b$.
   - (iii) "$a < b$" fails exactly when $b \le a$. "$a \le b$" fails exactly when $b < a$.
   - (iv) $a \le a$. Either $a \le b$ or $b \le a$.
   - (v) (Mixed transitivity) If $a < b$ and $b \le c$, then $a < c$. If $a \le b$ and $b < c$, then $a < c$. If $a \le b$ and $b \le c$, then $a \le c$.
2. (Addition and inequalities)
   - (i) If $a \le b$, then $a + c \le b + c$.
   - (ii) $a < b$ holds exactly when $a + c < b + c$. $a \le b$ holds exactly when $a + c \le b + c$.
   - (iii) If $a \le b$ and $c \le d$, then $a + c \le b + d$.
   - (iv) If $a < b$ and $c \le d$, then $a + c < b + d$.
3. (Differences and negatives)
   - (i) $a < b$ holds exactly when $0 < b - a$. $a \le b$ holds exactly when $0 \le b - a$.
   - (ii) $0 < a$ holds exactly when $-a < 0$. $a < 0$ holds exactly when $0 < -a$.
   - (iii) $a < b$ holds exactly when $-b < -a$. $a \le b$ holds exactly when $-b \le -a$.
4. (Multiplication and inequalities)
   - (i) If $0 < c$ and $a < b$, then $ac < bc$.
   - (ii) If $c < 0$ and $a < b$, then $bc < ac$.
   - (iii) If $0 \le c$ and $a \le b$, then $ac \le bc$. If $c \le 0$ and $a \le b$, then $bc \le ac$.
   - (iv) (Signs of products) If $0 \le a$ and $0 \le b$, then $0 \le ab$. If $0 < a$ and $b < 0$, then $ab < 0$. If $a < 0$ and $b < 0$, then $0 < ab$. If $0 \le a$ and $b \le 0$, then $ab \le 0$.
5. (Squares)
   - (i) If $a \ne 0$, then $0 < aa$.
   - (ii) $0 < 1$.
   - (iii) $0 \le aa$.
   - (iv) If $aa + bb = 0$, then $a = 0$ and $b = 0$.
6. (Reciprocals)
   - (i) If $0 < a$, then $0 < a^{-1}$. If $a < 0$, then $a^{-1} < 0$.
   - (ii) If $0 < a < b$, then $0 < b^{-1} < a^{-1}$.
   - (iii) If $0 < ab$, then either "$0 < a$ and $0 < b$" or "$a < 0$ and $b < 0$".
   - (iv) If $0 < c$, then $a < b$ holds exactly when $ac < bc$, and $a \le b$ holds exactly when $ac \le bc$.
7. (Squares of nonnegative numbers and order) Suppose $0 \le a$ and $0 \le b$.
   - (i) If $a < b$, then $aa < bb$.
   - (ii) If $a \le b$, then $aa \le bb$.
   - (iii) If $aa < bb$, then $a < b$. If $aa \le bb$, then $a \le b$.
   - (iv) If $aa = bb$, then $a = b$.
8. (Average of two numbers) If $a < b$, then $a < \dfrac{a + b}{2} < b$. In particular, if $0 < c$, then $0 < \dfrac{c}{2} < c$.
9. (A number below every positive number) If a real number $x$ satisfies $x \le \varepsilon$ for every positive $\varepsilon$, that is, $\forall \varepsilon \in \mathbb{R},\ (0 < \varepsilon \Rightarrow x \le \varepsilon)$, then $x \le 0$. If moreover $0 \le x$, then $x = 0$.
10. (Agreement with the order of the integers) For integers $a$ and $b$, $a < b$ holds as integers (the order used in the entries on prime numbers and on the well-ordering principle) exactly when $a < b$ holds as real numbers. Hence $\le$, $>$, $\ge$ between integers also have the same meaning in both senses; the statements (Z1)–(Z8), (L1)–(L3) applied to integers and the theorems of the well-ordering principle remain true when their inequality signs are read in the order of the real numbers; and concrete inequalities between integers (for example $0 < 2$) may be used as inequalities of real numbers. In particular, every natural number $n$ is a positive real number and $0 < n^{-1}$.
:::

## 직관

이 항목의 목록은 고등학교에서 익숙하게 쓰던 부등식의 규칙입니다. 이 강의에서는 이 규칙들을 그냥 쓰지 않고 [[real-order-axioms|실수의 순서]]의 네 문장 (W1)–(W4)와 계산 법칙 (K1)–(K12)에서 하나씩 끌어냅니다. 여기서 근거를 한 번 확인해 두면 뒤의 항목들은 이 목록을 번호로 인용할 수 있습니다.

$-1$을 곱하는 것은 수직선을 $0$을 중심으로 뒤집는 것과 같습니다. 뒤집으면 왼쪽과 오른쪽이 바뀌므로 $a < b$가 $-b < -a$로 바뀝니다((3)의 (iii)). 음수 $c$를 곱하면 부등호가 뒤집히는 것((4)의 (ii))도 증명에서는 $-c$가 양수라는 것과 이 뒤집기를 이어서 얻습니다. 비유가 맞지 않는 곳도 있습니다. 양수 $c$를 곱하는 것은 뒤집기가 아니라 $0$을 중심으로 늘이거나 줄이는 것이며, 순서가 유지된다는 것은 그림이 아니라 (W4)에서 나옵니다.

공리 가운데 곱셈을 말하는 것은 (W4) 하나뿐입니다. 그래서 곱이 들어간 (4)–(8)은 모두 (W4)에 기댑니다. 경우를 나누는 곳(어떤 수가 양수인지, $0$인지, 음수인지)의 근거는 (W1)이거나 $\le$의 정의입니다. 마지막 (10)은 정수에 두 가지 순서가 있는 것처럼 보이는 문제를 정리합니다. [[prime-number]]와 [[well-ordering-principle]]에서 받아들인 정수의 순서와 이 강의의 실수의 순서가 정수 위에서는 같은 것이므로, 앞으로는 $0 < 2$ 같은 정수의 부등식을 실수의 부등식으로 그대로 씁니다.

## 증명

:::idea
(W1)로 경우를 나누고, 양변에 같은 수를 더하는 (W3)와 양수끼리의 곱이 양수라는 (W4)를 계산 법칙으로 정리한다. 곱셈에 관한 성질은 (W4)와, 그것을 $0 < b - a$에 쓴 "$0 < (b - a)c$"((4)의 (i))에서 나온다. (10)은 자연수가 양의 실수임을 귀납법으로 보인 뒤 삼분법으로 마무리한다.
:::

:::hint
$a < b$를 $0 < b - a$로 바꾸는 (3)의 (i)을 먼저 증명하세요. 그러면 $0 < c$일 때 $ac < bc$는 $0 < (b - a)c$, 곧 (W4)의 한 경우가 됩니다.
:::

:::hint
$0 < 1$은 $1 \ne 0$((K4))과 $1 = 1 \cdot 1$에 (5)의 (i)을 쓰면 나옵니다. (10)에서는 "$1$ 이상인 정수 $n$은 실수로서 양수이다"를 시작점이 $1$인 귀납법으로 보이세요.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술, (W…)는 [[real-order-axioms]]의 진술이다. 자주 쓰는 계산 $0 + x = x$와 $1x = x$는 (K1)과 (K4)에서, $x + (-x) = 0$은 (K8)의 (ii)에서 나온다.

**(1)의 증명.** (i) $a < b$이고 $a = b$이면 (W1)의 세 문장 가운데 둘이 성립하므로 (W1)에 어긋난다. 따라서 $a \ne b$이다. 이제 $a < b$이고 $b \le a$라 하자. $b \le a$는 $b < a$이거나 $b = a$이다. $b < a$이면 $a < b$와 $b < a$가 함께 성립하여 (W1)에 어긋나고, $b = a$이면 $a = b$이므로 방금 보인 것에 어긋난다. 따라서 둘은 함께 성립하지 않는다.

(ii) $a \le b$, $b \le a$이고 $a \ne b$라 하자. $\le$의 정의에 의해 $a < b$이다. 이것과 $b \le a$는 (i)에 의해 함께 성립할 수 없으므로 모순이다. 따라서 $a = b$이다.

(iii) 첫째 문장: $a < b$가 성립하지 않는다고 하자. (W1)에 의해 $a = b$이거나 $b < a$이고, 어느 쪽이든 $b \le a$이다. 거꾸로 $b \le a$이면 (i)에 의해 $a < b$는 성립하지 않는다. 둘째 문장: $a \le b$가 성립하지 않으면 $a < b$도 $a = b$도 아니므로 (W1)에 의해 $b < a$이다. 거꾸로 $b < a$이면 (i)(문자 $a$, $b$를 바꾸어 읽은 것: $b < a$와 $a \le b$는 함께 성립하지 않는다)에 의해 $a \le b$는 성립하지 않는다.

(iv) $a = a$이므로 $a \le a$이다. (W1)에 의해 $a < b$, $a = b$, $b < a$ 가운데 하나가 성립한다. 앞의 둘이면 $a \le b$이고, 셋째이면 $b \le a$이다.

(v) $a < b$이고 $b \le c$라 하자. $b < c$이면 (W2)에 의해 $a < c$이고, $b = c$이면 $a < b$가 곧 $a < c$이다. 다음에 $a \le b$이고 $b < c$라 하자. $a < b$이면 (W2)에 의해 $a < c$이고, $a = b$이면 $b < c$가 곧 $a < c$이다. 마지막으로 $a \le b$이고 $b \le c$라 하자. $a = b$이면 $b \le c$가 곧 $a \le c$이다. $a < b$이면 방금 보인 첫째 문장에 의해 $a < c$이므로 $a \le c$이다.

**(2)의 증명.** (i) $a < b$이면 (W3)에 의해 $a + c < b + c$이고, $a = b$이면 $a + c = b + c$이다. 어느 쪽이든 $a + c \le b + c$이다.

(ii) 실수 $p$에 대하여 $(p + c) + (-c) = p + (c + (-c)) = p + 0 = p$이다((K2), (K8)의 (ii), (K4)). $a < b$이면 (W3)에 의해 $a + c < b + c$이다. 거꾸로 $a + c < b + c$이면 (W3)으로 양변에 $-c$를 더해 $(a + c) + (-c) < (b + c) + (-c)$, 곧 $a < b$이다. $\le$에 대해서도 같은 계산을 (i)로 한다. $a \le b$이면 (i)에 의해 $a + c \le b + c$이고, 거꾸로 $a + c \le b + c$이면 (i)로 양변에 $-c$를 더해 $a \le b$이다.

(iii) (i)에 의해 $a + c \le b + c$이다. 또 $c \le d$에서 (i)로 양변에 $b$를 더하면 $c + b \le d + b$이고, (K1)에 의해 $b + c \le b + d$이다. (1)의 (v)에 의해 $a + c \le b + d$이다.

(iv) (W3)에 의해 $a + c < b + c$이다. (iii)의 증명에서처럼 $c \le d$에서 $b + c \le b + d$이다. (1)의 (v)에 의해 $a + c < b + d$이다.

**(3)의 증명.** (i) (2)의 (ii)를 $c = -a$로 쓰면 $a < b$인 것은 정확히 $a + (-a) < b + (-a)$일 때이다. $a + (-a) = 0$이고 $b + (-a) = b - a$(뺄셈의 정의)이므로 이것은 $0 < b - a$이다. $\le$도 (2)의 (ii)의 둘째 문장으로 같은 계산을 한다.

(ii) (2)의 (ii)를 $c = -a$로 쓰면 $0 < a$인 것은 정확히 $0 + (-a) < a + (-a)$, 곧 $-a < 0$일 때이다. 또 $a < 0$인 것은 정확히 $a + (-a) < 0 + (-a)$, 곧 $0 < -a$일 때이다.

(iii) $c = (-a) + (-b)$로 둔다. (K2), (K8)의 (ii), (K1), (K4)에 의해
$$a + c = (a + (-a)) + (-b) = 0 + (-b) = -b$$
이고, (K1), (K2), (K8)의 (ii), (K4)에 의해
$$b + c = b + ((-b) + (-a)) = (b + (-b)) + (-a) = 0 + (-a) = -a$$
이다. (2)의 (ii)에 의해 $a < b$인 것은 정확히 $a + c < b + c$, 곧 $-b < -a$일 때이다. $\le$도 (2)의 (ii)의 둘째 문장으로 같다.

**(4)의 증명.** (i) (3)의 (i)에 의해 $0 < b - a$이다. (W4)에 의해 $0 < (b - a)c$이다. (K12)의 (i)과 (K9)의 $(-a)c = -(ac)$에 의해 $(b - a)c = (b + (-a))c = bc + (-a)c = bc - ac$이다. 따라서 $0 < bc - ac$이고, (3)의 (i)에 의해 $ac < bc$이다.

(ii) (3)의 (ii)에 의해 $0 < -c$이다. (i)에 의해 $a(-c) < b(-c)$이다. (K12)의 (ii)에 의해 $a(-c) = -(ac)$, $b(-c) = -(bc)$이므로 $-(ac) < -(bc)$이다. (3)의 (iii)을 두 수 $bc$, $ac$에 쓰면 "$bc < ac$인 것은 정확히 $-(ac) < -(bc)$일 때"이므로 $bc < ac$이다.

(iii) 첫째 문장: $0 \le c$, $a \le b$라 하자. $c = 0$이면 (K9)에 의해 $ac = 0 = bc$이다. $a = b$이면 $ac = bc$이다. 남은 경우는 $0 < c$이고 $a < b$인 경우이고, (i)에 의해 $ac < bc$이다. 어느 경우든 $ac \le bc$이다. 둘째 문장: $c \le 0$, $a \le b$라 하자. $c = 0$이면 $bc = 0 = ac$이고, $a = b$이면 $bc = ac$이다. 남은 경우는 $c < 0$이고 $a < b$인 경우이고, (ii)에 의해 $bc < ac$이다. 어느 경우든 $bc \le ac$이다.

(iv) 첫째: $0 \le a$, $0 \le b$이면 (iii)의 첫째 문장을 "$0 \le b$이고 $0 \le a$"에 쓰면 $0 \cdot b \le ab$이고, (K9)에 의해 $0 \cdot b = 0$이므로 $0 \le ab$이다. 둘째: $0 < a$, $b < 0$이면 (i)을 "$0 < a$이고 $b < 0$"에 쓰면 $ba < 0a$이고, (K1)과 (K9)에 의해 $ab < 0$이다. 셋째: $a < 0$, $b < 0$이면 (ii)를 "$a < 0$이고 $b < 0$"에 쓰면 $0a < ba$이고, (K9)와 (K1)에 의해 $0 < ab$이다. 넷째: $0 \le a$, $b \le 0$이면 (iii)의 첫째 문장을 "$0 \le a$이고 $b \le 0$"에 쓰면 $ba \le 0a$이고, (K1)과 (K9)에 의해 $ab \le 0$이다.

**(5)의 증명.** (i) $a \ne 0$이면 (W1)에 의해 $0 < a$이거나 $a < 0$이다. $0 < a$이면 (W4)에서 두 수를 모두 $a$로 두어 $0 < aa$이다. $a < 0$이면 (4)의 (iv)의 셋째 문장에 의해 $0 < aa$이다.

(ii) (K4)에 의해 $1 \ne 0$이므로 (i)에 의해 $0 < 1 \cdot 1$이고, (K4)에 의해 $1 \cdot 1 = 1$이다.

(iii) $a = 0$이면 (K9)에 의해 $aa = 0$이므로 $0 \le aa$이다. $a \ne 0$이면 (i)에 의해 $0 < aa$이다.

(iv) $aa + bb = 0$이라 하자. [[proof-by-contradiction]]으로 $a = 0$을 보인다. $a \ne 0$이라 하면 (i)에 의해 $0 < aa$이고 (iii)에 의해 $0 \le bb$이므로, (2)의 (iv)에 의해 $0 + 0 < aa + bb$, 곧 $0 < 0$이다. 이것은 $0 = 0$과 함께 (W1)에 어긋난다. 따라서 $a = 0$이다. 같은 방식으로 $b = 0$을 보인다. $b \ne 0$이라 하면 (i)에 의해 $0 < bb$이고 (iii)에 의해 $0 \le aa$이므로, (2)의 (iv)에 의해 $0 + 0 < bb + aa$이다. (K1)에 의해 $bb + aa = aa + bb = 0$이므로 $0 < 0$이 되어 (W1)에 어긋난다. 따라서 $b = 0$이다.

**(6)의 증명.** (i) $0 < a$라 하자. (1)의 (i)에 의해 $a \ne 0$이므로 (K8)의 (iii)에 의해 $a^{-1}$이 있고 $aa^{-1} = 1$이다. $a^{-1} = 0$이면 (K9)에 의해 $1 = aa^{-1} = a \cdot 0 = 0$이 되어 (K4)의 $0 \ne 1$에 어긋나므로 $a^{-1} \ne 0$이다. $a^{-1} < 0$이라 하면 (4)의 (iv)의 둘째 문장에 의해 $aa^{-1} < 0$, 곧 $1 < 0$이다. 이것은 (5)의 (ii)의 $0 < 1$과 함께 (W1)에 어긋난다. 따라서 (W1)에 의해 $0 < a^{-1}$이다. 다음에 $a < 0$이라 하자. 위와 같은 이유로 $a^{-1}$이 있고 $a^{-1} \ne 0$이다. $0 < a^{-1}$이라 하면 (4)의 (iv)의 둘째 문장(양수 $a^{-1}$과 음수 $a$)에 의해 $a^{-1}a < 0$이고, (K1)에 의해 $a^{-1}a = aa^{-1} = 1$이므로 $1 < 0$이 되어 (W1)에 어긋난다. 따라서 (W1)에 의해 $a^{-1} < 0$이다.

(ii) $0 < a$이고 $a < b$이므로 (W2)에 의해 $0 < b$이다. (i)에 의해 $0 < a^{-1}$, $0 < b^{-1}$이고, (W4)에 의해 $0 < a^{-1}b^{-1}$이다. (4)의 (i)을 $c = a^{-1}b^{-1}$로 쓰면 $a(a^{-1}b^{-1}) < b(a^{-1}b^{-1})$이다. (K2), (K8)의 (iii), (K1), (K4)에 의해 $a(a^{-1}b^{-1}) = (aa^{-1})b^{-1} = 1b^{-1} = b^{-1}$이고, (K1), (K2), (K8)의 (iii), (K4)에 의해 $b(a^{-1}b^{-1}) = b(b^{-1}a^{-1}) = (bb^{-1})a^{-1} = 1a^{-1} = a^{-1}$이다. 따라서 $b^{-1} < a^{-1}$이다. $0 < b^{-1}$과 합치면 $0 < b^{-1} < a^{-1}$이다.

(iii) $0 < ab$라 하자. $a = 0$이거나 $b = 0$이면 (K9)에 의해 $ab = 0$이어서 $0 < 0$이 되어 (W1)에 어긋나므로 $a \ne 0$이고 $b \ne 0$이다. (W1)에 의해 $a$는 양수이거나 음수이고 $b$도 그렇다. 네 경우를 따진다. $a$, $b$가 모두 양수이거나 모두 음수이면 결론이 성립한다. $0 < a$이고 $b < 0$이면 (4)의 (iv)의 둘째 문장에 의해 $ab < 0$이고, 이것은 $0 < ab$와 함께 (W1)에 어긋나므로 이 경우는 일어나지 않는다. $a < 0$이고 $0 < b$이면 (4)의 (iv)의 둘째 문장(양수 $b$와 음수 $a$)에 의해 $ba < 0$이고 (K1)에 의해 $ab < 0$이므로, 역시 (W1)에 어긋나 이 경우도 일어나지 않는다.

(iv) $0 < c$라 하자. $a < b$이면 (4)의 (i)에 의해 $ac < bc$이다. 거꾸로 $ac < bc$라 하자. (i)에 의해 $0 < c^{-1}$이므로 (4)의 (i)에 의해 $(ac)c^{-1} < (bc)c^{-1}$이다. (K2), (K8)의 (iii), (K4)에 의해 $(ac)c^{-1} = a(cc^{-1}) = a \cdot 1 = a$이고 같은 계산으로 $(bc)c^{-1} = b(cc^{-1}) = b$이므로 $a < b$이다. $\le$에 대해서는 $0 < c$에서 $0 \le c$이고 $0 < c^{-1}$에서 $0 \le c^{-1}$이므로, (4)의 (iii)의 첫째 문장으로 같은 계산을 한다. $a \le b$이면 $ac \le bc$이고, 거꾸로 $ac \le bc$이면 $(ac)c^{-1} \le (bc)c^{-1}$, 곧 $a \le b$이다.

**(7)의 증명.** $0 \le a$, $0 \le b$이다.

(i) $a < b$라 하자. $0 \le a$이고 $a < b$이므로 (1)의 (v)에 의해 $0 < b$이다. (4)의 (iii)의 첫째 문장을 $c = a$($0 \le a$)와 $a \le b$에 쓰면 $aa \le ba$이다. (4)의 (i)을 $c = b$($0 < b$)와 $a < b$에 쓰면 $ab < bb$이다. (K1)에 의해 $ba = ab$이므로 $aa \le ab$이고 $ab < bb$이다. (1)의 (v)에 의해 $aa < bb$이다.

(ii) $a \le b$라 하자. $a = b$이면 $aa = bb$이고, $a < b$이면 (i)에 의해 $aa < bb$이다. 어느 쪽이든 $aa \le bb$이다.

(iii) $aa < bb$라 하고 $a < b$가 성립하지 않는다고 하자. (1)의 (iii)에 의해 $b \le a$이다. $0 \le b$, $0 \le a$이므로 (ii)를 두 수의 역할을 바꾸어 쓰면 $bb \le aa$이다. 이것은 $aa < bb$와 (1)의 (i)에 의해 함께 성립할 수 없다. 따라서 $a < b$이다. 다음에 $aa \le bb$라 하고 $a \le b$가 성립하지 않는다고 하자. (1)의 (iii)에 의해 $b < a$이다. (i)을 두 수의 역할을 바꾸어 쓰면($0 \le b$, $0 \le a$, $b < a$) $bb < aa$이다. 이것은 $aa \le bb$와 (1)의 (i)에 의해 함께 성립할 수 없다. 따라서 $a \le b$이다.

(iv) $aa = bb$라 하자. $a < b$이면 (i)에 의해 $aa < bb$이고, (1)의 (i)에 의해 $aa \ne bb$이므로 가정에 어긋난다. $b < a$이면 (i)을 두 수의 역할을 바꾸어 쓰면 $bb < aa$이고, (1)의 (i)에 의해 $bb \ne aa$이므로 역시 어긋난다. 따라서 (W1)에 의해 $a = b$이다.

**(8)의 증명.** (5)의 (ii)에 의해 $0 < 1$이고 따라서 $0 \le 1$이므로, (2)의 (iv)에 의해 $0 + 0 < 1 + 1$이다. (K4)에 의해 $0 + 0 = 0$이고 (K7)에 의해 $1 + 1 = 2$이므로 $0 < 2$이다. (1)의 (i)에 의해 $2 \ne 0$이므로 $2^{-1}$이 있고, (6)의 (i)에 의해 $0 < 2^{-1}$이다. 실수 $x$에 대하여 $x + x = 2x$이다. (K4), (K3), (K7), (K1)에 의해 $x + x = x \cdot 1 + x \cdot 1 = x(1 + 1) = x \cdot 2 = 2x$이기 때문이다. 또 (K1), (K2), (K8)의 (iii), (K4)에 의해 $(2x)2^{-1} = (x \cdot 2)2^{-1} = x(2 \cdot 2^{-1}) = x \cdot 1 = x$이다.

이제 $a < b$라 하자. (W3)에 의해 $a + a < b + a$이고 (K1)에 의해 $b + a = a + b$이므로 $2a < a + b$이다. (4)의 (i)을 $c = 2^{-1}$로 쓰면 $(2a)2^{-1} < (a + b)2^{-1}$, 곧 $a < \dfrac{a + b}{2}$이다(나눗셈의 정의에 의해 $\dfrac{a + b}{2} = (a + b)2^{-1}$). 또 (W3)에 의해 $a + b < b + b = 2b$이고, (4)의 (i)에 의해 $(a + b)2^{-1} < (2b)2^{-1} = b$, 곧 $\dfrac{a + b}{2} < b$이다.

특히 $0 < c$이면 $a = 0$, $b = c$로 두어 $0 < \dfrac{0 + c}{2} < c$이고, (K1)과 (K4)에 의해 $0 + c = c$이므로 $0 < \dfrac{c}{2} < c$이다.

**(9)의 증명.** $x$가 모든 양수 $\varepsilon$에 대하여 $x \le \varepsilon$을 만족한다고 하자. [[proof-by-contradiction]]으로 $x \le 0$을 보인다. $x \le 0$이 성립하지 않는다고 하면 (1)의 (iii)에 의해 $0 < x$이다. (8)에 의해 $0 < \dfrac{x}{2} < x$이다. $\varepsilon = \dfrac{x}{2}$는 양수이므로 가정에 의해 $x \le \dfrac{x}{2}$이다. 그러나 $\dfrac{x}{2} < x$와 $x \le \dfrac{x}{2}$는 (1)의 (i)에 의해 함께 성립하지 않는다. 모순이므로 $x \le 0$이다. 이때 $0 \le x$이기도 하면 (1)의 (ii)에 의해 $x = 0$이다.

**(10)의 증명.** 이 증명에서 "정수로서 $a < b$"는 [[prime-number]]와 [[well-ordering-principle]]에서 받아들인 정수의 순서를 뜻하고, 그 순서에 대한 $\le$도 [[well-ordering-principle]]의 정의를 따른다. 정수끼리의 합, 차가 정수라는 것은 [[even-and-odd]]에서 받아들인 사실이다. (K7)에 의해 정수는 실수이고, 두 정수의 합은 정수로서 계산하든 실수로서 계산하든 같으며, 정수 $a$의 정수로서의 음수 $-a$는 실수로서의 $-a$와 같다. 따라서 정수 $a$, $b$의 차 $b - a$도 정수로서 계산하든 실수로서 $b + (-a)$로 계산하든 같은 수이다.

*1단계: $1$ 이상인 정수는 실수로서 양수이다.* 정수로서 $n \ge 1$인 정수 $n$마다 명제 $S_n$을 "실수로서 $0 < n$이다"로 두고, 시작점이 $1$인 [[mathematical-induction]]으로 보인다. 기초 단계: (K7)에 의해 정수 $1$은 (K4)의 실수 $1$이고, (5)의 (ii)에 의해 $0 < 1$이므로 $S_1$이 참이다. 귀납 단계: 정수로서 $k \ge 1$인 정수 $k$에 대하여 $S_k$, 곧 실수로서 $0 < k$라고 가정한다. (W3)으로 양변에 $1$을 더하면 $0 + 1 < k + 1$이고, $0 + 1 = 1$이므로 $1 < k + 1$이다. 여기서 $k + 1$은 (K7)에 의해 정수로서의 합과 같은 수이다. $0 < 1$과 $1 < k + 1$에서 (W2)에 의해 $0 < k + 1$이므로 $S_{k+1}$이 참이다. 귀납법에 의해 $1$ 이상인 모든 정수 $n$에 대하여 실수로서 $0 < n$이다.

*2단계: 정수로서 $a < b$이면 실수로서 $a < b$이다.* 정수로서 $a < b$라 하자. (Z7)로 양변에서 정수 $a$를 빼면 정수로서 $a - a < b - a$, 곧 $0 < b - a$이다. $b - a$는 정수이므로 (Z1)에 의해 정수로서 $0 + 1 \le b - a$, 곧 $1 \le b - a$이다. 1단계에 의해 실수로서 $0 < b - a$이다. 위에서 본 것처럼 이 $b - a$는 실수로서의 $b - a$와 같으므로 (3)의 (i)에 의해 실수로서 $a < b$이다.

*3단계: 실수로서 $a < b$이면 정수로서 $a < b$이다.* 실수로서 $a < b$라 하자. (Z5)에 의해 정수로서 $a < b$, $a = b$, $b < a$ 가운데 하나가 성립한다. $a = b$이면 실수로서 $a < b$와 $a = b$가 함께 성립하여 (W1)에 어긋난다. 정수로서 $b < a$이면 2단계에 의해 실수로서 $b < a$이고, 이것은 실수로서 $a < b$와 함께 (W1)에 어긋난다. 따라서 정수로서 $a < b$이다.

*나머지.* 2단계와 3단계에 의해 두 정수 사이의 $<$는 두 뜻이 같다. $\le$는 "$<$ 또는 $=$"이고 $>$, $\ge$는 순서를 바꾼 것이므로 이것들도 두 뜻이 같다. (Z1)–(Z8), (L1)–(L3)과 [[well-ordering-principle]]의 정리들은 정수와 그 합·차·곱과 부등호로 이루어진 진술이다. 정수의 합·곱·음수는 (K7)에 의해 실수로서의 것과 같고 부등호는 방금 보인 대로 두 뜻이 같으므로, 그 진술들은 부등호를 실수의 순서로 읽어도 같은 진술이다. 구체적인 정수 사이의 부등식은 정수로서의 부등식이므로 방금 보인 것에 의해 실수의 부등식이기도 하다. 끝으로 자연수 $n$은 양의 정수이므로 (Z1)에 의해 정수로서 $1 \le n$이고, 1단계에 의해 실수로서 $0 < n$이다. (6)의 (i)에 의해 $0 < n^{-1}$이다. $\blacksquare$
:::

:::remark[다른 항목이 받아들였던 사실과의 관계]
선형대수 강의의 "고윳값이 없는 행렬과 대각화할 수 없는 행렬" 항목은 (Y1) "실수 $a$, $b$에 대하여 $aa + bb = 0$이면 $a = 0$이고 $b = 0$이다"를 증명 없이 받아들였습니다. 이것은 이 항목의 (5)의 (iv)와 같은 진술이며, 여기서 (W1)–(W4)와 계산 법칙에서 증명되었습니다.

수학의 언어 강의의 "베르누이 부등식" 항목은 증명 첫머리에 그 항목만의 목록 (R1)–(R6)을 두었습니다. 그 가운데 순서에 관한 것은 이 항목에서 증명됩니다. (R3) "$a \ge b$이면 $a + c \ge b + c$ ($>$에서도 같다)"는 (2)의 (i)과 (W3), (R4) "$a \ge b$이고 $c > 0$이면 $ac \ge bc$"는 (4)의 (iii), (R5) "$a \ge b$이고 $b \ge c$이면 $a \ge c$"는 (1)의 (v), (R6) "$a^2 \ge 0$이다. 또 $a > 0$이고 $b \ge 0$이면 $ab \ge 0$이다"는 $a^2$을 (R2)에 따라 $aa$로 읽으면 (5)의 (iii)과 (4)의 (iv)입니다. (R1)은 계산 법칙이고 (R2)는 거듭제곱의 뜻이어서 이 항목이 다루지 않습니다. 두 항목은 고치지 않고 그대로 둡니다.

[[prime-number]]의 (Z2) "양수와 $0$ 이하인 수의 곱은 $0$ 이하", (Z3) "$a \le b$이고 $c > 0$이면 $ac \le bc$" 등은 수를 "정수 또는 실수"라고 적은 목록에 들어 있습니다. 실수에 대한 그 내용은 (4)의 (iv)와 (iii)으로 증명됩니다.
:::

## 예시와 반례

:::example[분모를 없애 두 분수 비교하기]
$\dfrac{2}{3} = 2 \cdot 3^{-1}$과 $\dfrac{3}{4} = 3 \cdot 4^{-1}$을 비교해 봅시다. (10)에 의해 정수의 부등식 $0 < 12$는 실수의 부등식이므로, (6)의 (iv)에 의해 두 수에 $12$를 곱한 것을 비교하면 됩니다. (K7)의 $12 = 3 \cdot 4$와 (K1), (K2), (K8)의 (iii), (K4)에 의해
$$(2 \cdot 3^{-1}) \cdot 12 = 2 \cdot (3^{-1} \cdot 3) \cdot 4 = 2 \cdot 4 = 8, \qquad (3 \cdot 4^{-1}) \cdot 12 = 3 \cdot 3 \cdot (4^{-1} \cdot 4) = 9$$
입니다. $8 < 9$도 (10)에 의해 실수의 부등식이므로, (6)의 (iv)에 의해 $\dfrac{2}{3} < \dfrac{3}{4}$입니다.
:::

:::counterexample[부등식끼리 곱할 수는 없다]
$a < b$이고 $c < d$라고 해서 $ac < bd$인 것은 아닙니다. $a = -2$, $b = 1$, $c = -3$, $d = 0$으로 두면 (10)에 의해 $-2 < 1$, $-3 < 0$이지만, $ac = (-2)(-3) = 6$이고 $bd = 1 \cdot 0 = 0$이며 $0 < 6$이므로 (W1)에 의해 $6 < 0$은 성립하지 않습니다. 곱셈에 관한 성질 (4)는 언제나 한쪽 부등식에 같은 수 $c$를 곱하는 꼴이고, 곱하는 수의 부호를 따로 확인해야 합니다.
:::

:::counterexample[(7)의 (i)에서 $0 \le a$를 뺄 수 없다]
$a = -3$, $b = 2$로 두면 $a < b$이지만 $aa = 9$, $bb = 4$이고, (10)에 의해 $4 < 9$이므로 (W1)에 의해 $9 < 4$는 성립하지 않습니다. 증명에서 $0 \le a$는 "$aa \le ab$"를 얻을 때, 곧 $a$를 곱해도 부등호가 유지된다고 할 때 쓰였습니다. $a = -3$이면 그 단계가 $9 \le -6$이 되어 깨집니다.
:::

## 확인 질문

:::check[실수 $a$가 음수일 때 $a^{-1}$과 $aa$는 양수인가, 음수인가?]
(6)의 (i)에 의해 $a^{-1}$은 음수입니다. $a < 0$이면 (1)의 (i)에 의해 $a \ne 0$이므로, (5)의 (i)에 의해 $aa$는 양수입니다.
:::

:::check[실수 $x$가 $-1 < x < 1$을 만족하면 $xx < 1$인가?]
그렇습니다. (1)의 (iv)에 의해 $0 \le x$이거나 $x \le 0$입니다. $0 \le x$이면 $0 \le x < 1$이므로 (7)의 (i)에 의해 $xx < 1 \cdot 1 = 1$입니다. $x \le 0$이면 $-1 < x$에서 (3)의 (iii)에 의해 $-x < -(-1) = 1$이고((K9)의 $-(-a) = a$), $x \le 0$에서 (3)의 (iii)에 의해 $-0 \le -x$, 곧 $0 \le -x$입니다($-0 = 0$은 $0 + 0 = 0$과 (K8)의 (ii)에서 나옵니다). 따라서 $0 \le -x < 1$이고, (7)의 (i)에 의해 $(-x)(-x) < 1$입니다. (K12)의 (iii)에 의해 $(-x)(-x) = xx$이므로 $xx < 1$입니다.
:::
