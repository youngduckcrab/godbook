---
title: 제곱근의 존재
title_en: Existence of Square Roots
aliases: [제곱근, 양의 제곱근, square root, √2 의 존재, 유리수는 완비가 아니다]
kind: theorem
field: real-analysis
msc: ["26A03"]
level: undergrad
summary: 0 이상인 모든 실수 a 에 대해 ss = a 인 0 이상의 실수 s 가 꼭 하나 있다(√a). √2 는 무리수이고, 유리수만으로는 최소상계 성질이 성립하지 않는다.
requires: [proof-by-contradiction, rational-and-irrational-numbers, sqrt2-is-irrational, real-number-arithmetic, real-order-axioms, order-properties-of-reals, upper-bound-and-supremum, least-upper-bound-property, rationals-are-dense]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 1.2절 Example 1.2.3 (진술 p.29, 증명 p.30)과 그 뒤 문단 (p.30), 1.1절 Example 1.1.4 (p.24–25), 연습문제 1.2.11, 1.2.14 (p.35)
    checked: original
    note: "출처의 Example 1.2.3 은 '제곱이 2 인 양의 실수 r 이 꼭 하나 있다'를 Example 의 Claim 으로 두고 2 에 대해서만 증명한다. 이 항목은 그것을 정리로 올리고 0 이상의 모든 실수 a 로 넓혔다. 출처는 n 제곱근의 존재를 '같은 방법으로 된다'고만 하고 연습문제 1.2.11(Hard)로 돌린다(p.30, p.35). 출처의 증명은 A = {x ∈ ℝ : x² < 2} 의 상한 r 을 잡고, s² < 2 인 양수 s 에 대해 0 < h < (2 − s²)/(2s + 1), h < 1 인 h 를 '고른다'고 하여 s + h ∈ A 를 보이고, s² > 2 인 양수 s 에 대해 h = (s² − 2)/(2s) 로 s − h 가 상계임을 보인 뒤 'As s was an arbitrary positive number such that s² < 2, it follows that r² ≥ 2'로 마친다. 이 항목은 E = {x ∈ ℝ : 0 ≤ x 이고 xx ≤ a} 와 상계 1 + a 를 쓰고(0 ∈ E 이므로 a = 0 과 0 < a < 1 에서도 공집합이 아니다), s 자신에 대해 ss < a 와 a < ss 를 각각 모순으로 이끈다. 첫째 경우의 h 는 d(k + d)⁻¹(d = a − ss, k = 2s + 1)로 직접 정했고, 둘째 경우의 h = (ss − a)(2s)⁻¹ 은 출처와 같다. 유일성의 논증은 출처와 같다. (2)는 출처에 명제로 없다(검색한 범위). (3)에 관해 출처는 Example 1.1.4 에서 기약분수로 x² = 2 인 유리수가 없음을 보이고, Example 1.2.3 뒤에서 √2 ∉ ℚ 라고 적는다. (4)에 관해 출처는 Example 1.1.4 에서 {x ∈ ℚ : x² < 2} 가 ℚ 안에 상한을 갖지 않는다고 말하고 그 상한이 √2 임은 뒤에서 본다고 하며, 연습문제 1.2.14 로 sup{x ∈ ℚ : x² < 2} = sup{x ∈ ℝ : x² < 2} 를 둔다. 'ℚ 안에 상한이 없다'는 것 자체의 증명은 출처에 없다(검색한 범위). (4)의 증명은 이 사이트가 조밀성으로 쓴 것이다. 예시의 √8 = 2√2, 반례, 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-17
---

:::statement
1. (제곱근의 존재와 유일성) $0 \le a$인 모든 실수 $a$에 대하여 $ss = a$이고 $0 \le s$인 실수 $s$가 정확히 하나 있다. 이 $s$를 $a$의 **제곱근**(square root)이라 하고 $\sqrt{a}$로 쓴다. 곧 $\sqrt{a}$는 $0 \le \sqrt{a}$이고 $\sqrt{a}\sqrt{a} = a$인 실수이다. $0 < a$이면 $0 < \sqrt{a}$이다.
2. (제곱근의 성질) $0 \le a$, $0 \le b$라 하자. $a < b$인 것은 정확히 $\sqrt{a} < \sqrt{b}$일 때이다. $\sqrt{ab} = \sqrt{a}\sqrt{b}$이다. $\sqrt{aa} = a$이다.
3. ($\sqrt{2}$는 무리수) $\sqrt{2}$는 제곱하여 $2$가 되는 양의 실수 가운데 유일한 것이고, 무리수이다.
4. (유리수의 집합에서는 최소상계 성질이 성립하지 않는다) 유리수의 집합 $A = \{q \in \mathbb{Q} : 0 < q \text{이고 } qq < 2\}$는 공집합이 아니고 유리수인 상계를 갖지만, $A$의 유리수인 상계 가운데 가장 작은 것은 없다. 곧 유리수인 실수 $s$가 $A$의 상계이면 $A$의 상계이면서 $s$보다 작은 유리수가 있다. 또 $\sup A = \sqrt{2}$이다.
:::

:::english
1. (Existence and uniqueness of square roots) For every real number $a$ with $0 \le a$ there is exactly one real number $s$ with $ss = a$ and $0 \le s$. This $s$ is called the **square root** of $a$ and is written $\sqrt{a}$. That is, $\sqrt{a}$ is the real number with $0 \le \sqrt{a}$ and $\sqrt{a}\sqrt{a} = a$. If $0 < a$, then $0 < \sqrt{a}$.
2. (Properties of square roots) Let $0 \le a$ and $0 \le b$. Then $a < b$ exactly when $\sqrt{a} < \sqrt{b}$. Also $\sqrt{ab} = \sqrt{a}\sqrt{b}$ and $\sqrt{aa} = a$.
3. ($\sqrt{2}$ is irrational) $\sqrt{2}$ is the only positive real number whose square is $2$, and it is irrational.
4. (The least-upper-bound property fails within the rationals) The set of rational numbers $A = \{q \in \mathbb{Q} : 0 < q \text{ and } qq < 2\}$ is nonempty and has a rational upper bound, but among the rational upper bounds of $A$ there is no least one. That is, if a rational number $s$ is an upper bound of $A$, then there is a rational number smaller than $s$ that is also an upper bound of $A$. Moreover, $\sup A = \sqrt{2}$.
:::

## 직관

정사각형의 넓이가 $a$이면 한 변의 길이는 $\sqrt{a}$입니다. 이 항목은 그런 길이가 실수 안에 꼭 하나 있다는 것을 [[least-upper-bound-property|최소상계 성질]]로 보입니다. "제곱이 $a$ 이하인 $0$ 이상의 수"를 모두 모으면 위로 유계이고, 그 상한 $s$가 바로 $\sqrt{a}$입니다. $ss$가 $a$보다 작으면 $s$를 조금 늘려도 아직 집합 안에 있어 $s$가 상계일 수 없고, $ss$가 $a$보다 크면 $s$를 조금 줄여도 상계여서 $s$가 가장 작은 상계일 수 없습니다. 비유가 맞지 않는 곳은, 넓이가 $2$인 정사각형을 그릴 수 있다는 그림이 있어도 그것이 실수 $\sqrt{2}$의 존재를 증명해 주지는 않는다는 점입니다. 존재는 (U)에서 나옵니다.

(4)는 같은 이야기를 유리수 안에서만 하면 실패한다는 것입니다. 제곱이 $2$보다 작은 양의 유리수들의 "가장 작은 유리수 상계"를 찾으면, 그것은 $\sqrt{2}$여야 하는데 $\sqrt{2}$는 유리수가 아닙니다. 수직선에서 유리수만 남기면 $\sqrt{2}$ 자리에 구멍이 생긴다는 그림입니다.

## 증명

:::idea
$E = \{x \in \mathbb{R} : 0 \le x \text{이고 } xx \le a\}$의 상한 $s$를 잡고, $ss < a$이면 $s$보다 조금 큰 수가 $E$에 들어가고, $a < ss$이면 $s$보다 조금 작은 수가 $E$의 상계가 되어 어느 쪽이든 상한의 정의에 어긋남을 보인다. (4)는 조밀성으로 가장 작은 유리수 상계가 $\sqrt{2}$일 수밖에 없음을 보인다.
:::

:::hint
$h$가 $0 < h < 1$이면 $(s + h)(s + h) = ss + h(2s + h) < ss + h(2s + 1)$입니다. $h(2s + 1)$이 $a - ss$보다 작도록 $h$를 고르세요.
:::

:::hint
$a < ss$이면 $h = (ss - a)(2s)^{-1}$로 두면 $(s - h)(s - h) = a + hh$입니다.
:::

:::proof
"(7)의 (i)" 같은 번호는 [[order-properties-of-reals]]의 번호이고, "이 항목의 (1)"처럼 쓴 것은 위 진술의 번호이다. 식을 전개하고 정리할 때는 (K1)–(K4), (K8), (K9), (K12)를 쓴다.

**이 항목의 (1).** $0 \le a$라 하고 $E = \{x \in \mathbb{R} : 0 \le x \text{이고 } xx \le a\}$로 둔다.

*$E$는 공집합이 아니다.* (K9)에 의해 $0 \cdot 0 = 0 \le a$이므로 $0 \in E$이다($a = 0$이든 $0 < a < 1$이든 마찬가지로 $0 \in E$이다).

*$1 + a$는 $E$의 상계이다.* $x \in E$인데 $x \le 1 + a$가 아니라고 하면 (1)의 (iii)에 의해 $1 + a < x$이다. (5)의 (ii)에 의해 $0 < 1$이고 $0 \le a$이므로 (2)의 (iv)에 의해 $0 + 0 < 1 + a$, 곧 $0 < 1 + a$이다. 또 $0 \le a$에 (2)의 (i)로 $1$을 더하면 $1 \le 1 + a$이고, (1)의 (v)에 의해 $1 < x$이다. 이제 (11)의 (ii)를 "$0 \le 1$, $1 < x$"와 "$0 \le 1 + a$, $1 + a < x$"에 쓰면 $1 \cdot (1 + a) < xx$, 곧 $1 + a < xx$이다. $a < 1 + a$($0 < 1$에 (W3)으로 $a$를 더한 것)이므로 (W2)에 의해 $a < xx$인데, 이것은 $xx \le a$와 (1)의 (i)에 의해 함께 성립하지 않는다. 따라서 $x \le 1 + a$이다.

[[least-upper-bound-property|최소상계 성질]] (U)에 의해 $E$는 상한 $s$를 갖는다. $0 \in E$이고 $s$는 상계이므로 $0 \le s$이다. 이제 $ss < a$와 $a < ss$가 모두 일어나지 않음을 보인다.

*$ss < a$는 일어나지 않는다.* $ss < a$라 하자. $d = a - ss$, $k = s + s + 1$로 두면 (3)의 (i)에 의해 $0 < d$이고, $0 \le s$에서 (2)의 (iii)에 의해 $0 \le s + s$, (2)의 (iv)에 의해 $0 < (s + s) + 1 = k$이다. $0 < k + d$이므로((2)의 (iv)) $h = d(k + d)^{-1}$로 두면 (6)의 (i)과 (W4)에 의해 $0 < h$이다. 다음 두 부등식을 보인다.

- $h < 1$: $0 < k$에 (W3)으로 $d$를 더하면 $d < k + d$이다($0 + d = d$). (4)의 (i)로 양변에 $(k + d)^{-1}$을 곱하면 $d(k + d)^{-1} < (k + d)(k + d)^{-1} = 1$이다.
- $hk < d$: $0 < d$에 (W3)으로 $k$를 더하면 $k < k + d$이다. (4)의 (i)로 양변에 양수 $d(k + d)^{-1}$을 곱하면 $k \cdot d(k + d)^{-1} < (k + d) \cdot d(k + d)^{-1} = d$이고, 왼쪽은 (K1)에 의해 $hk$이다.

계산 법칙에 의해 $(s + h)(s + h) = ss + h(s + s + h)$이다. $h < 1$에 (W3)으로 $s + s$를 더하면 $s + s + h < s + s + 1 = k$이고, $0 < h$이므로 (4)의 (i)에 의해 $h(s + s + h) < hk$이다. $hk < d$와 (W2)에 의해 $h(s + s + h) < d$이고, (W3)으로 양변에 $ss$를 더하면 $(s + h)(s + h) < ss + d = a$이다. 또 $0 \le s$, $0 < h$이므로 (2)의 (iv)에 의해 $0 < s + h$이다. 따라서 $s + h \in E$이고, $s$가 $E$의 상계이므로 $s + h \le s$이다. 그러나 $0 < h$에 (W3)으로 $s$를 더하면 $s < s + h$이므로 (1)의 (i)에 어긋난다.

*$a < ss$는 일어나지 않는다.* $a < ss$라 하자. $s = 0$이면 $ss = 0 \le a$이므로 (1)의 (i)에 어긋난다. 따라서 $s \ne 0$이고 $0 \le s$이므로 $0 < s$이다. $0 < s + s$((2)의 (iv))이므로 $(s + s)^{-1}$이 있고 양수이다((6)의 (i)). $d = ss - a$로 두면 (3)의 (i)에 의해 $0 < d$이고, $h = d(s + s)^{-1}$로 두면 (W4)에 의해 $0 < h$이다. 계산 법칙에 의해 $(s + s)h = d$이다.

- $h < s$: $0 \le a$이므로 (3)의 (iii)에 의해 $-a \le 0$이고, (2)의 (i)로 $ss$를 더하면 $d = ss - a \le ss$이다. (5)의 (i)에 의해 $0 < ss$이므로 (W3)에 의해 $ss < ss + ss = (s + s)s$이다. (1)의 (v)에 의해 $d < (s + s)s$이고, (4)의 (i)로 양변에 $(s + s)^{-1}$을 곱하면 $h < s$이다. 따라서 (3)의 (i)에 의해 $0 < s - h$이다.
- $(s - h)(s - h) = a + hh$: 계산 법칙에 의해 $(s - h)(s - h) = ss - (s + s)h + hh = ss - d + hh = a + hh$이다.

(5)의 (i)에 의해 $0 < hh$이므로 (W3)에 의해 $a < a + hh = (s - h)(s - h)$이다. 이제 $s - h$가 $E$의 상계임을 보인다. $x \in E$인데 $x \le s - h$가 아니라고 하면 (1)의 (iii)에 의해 $s - h < x$이고, $0 \le s - h$이므로 (7)의 (i)에 의해 $(s - h)(s - h) < xx$이다. (W2)에 의해 $a < xx$인데, 이것은 $xx \le a$와 (1)의 (i)에 의해 함께 성립하지 않는다. 따라서 $s - h$는 $E$의 상계이고, $s$가 상한이므로 $s \le s - h$이다. 그러나 $0 < h$에서 $s - h < s$((3)의 (i): $s - (s - h) = h$)이므로 (1)의 (i)에 어긋난다.

두 경우가 모두 일어나지 않으므로 (W1)에 의해 $ss = a$이다. 이로써 $0 \le s$이고 $ss = a$인 $s$가 있다.

*유일성.* $0 \le s$, $0 \le s'$이고 $ss = a = s's'$이면 (7)의 (iv)에 의해 $s = s'$이다.

*$0 < a$인 경우.* $\sqrt{a} = 0$이면 $a = 0 \cdot 0 = 0$이므로, $0 < a$이면 $\sqrt{a} \ne 0$이고 $0 \le \sqrt{a}$와 함께 $0 < \sqrt{a}$이다.

**이 항목의 (2).** $0 \le \sqrt{a}$, $0 \le \sqrt{b}$이다. $\sqrt{a} < \sqrt{b}$이면 (7)의 (i)에 의해 $a = \sqrt{a}\sqrt{a} < \sqrt{b}\sqrt{b} = b$이다. 거꾸로 $a < b$이면 $\sqrt{a}\sqrt{a} < \sqrt{b}\sqrt{b}$이므로 (7)의 (iii)에 의해 $\sqrt{a} < \sqrt{b}$이다. 다음에 (4)의 (iv)에 의해 $0 \le ab$이고 $0 \le \sqrt{a}\sqrt{b}$이며, (K1), (K2)에 의해 $(\sqrt{a}\sqrt{b})(\sqrt{a}\sqrt{b}) = (\sqrt{a}\sqrt{a})(\sqrt{b}\sqrt{b}) = ab$이다. 이 항목의 (1)의 유일성에 의해 $\sqrt{ab} = \sqrt{a}\sqrt{b}$이다. 끝으로 $0 \le a$이고 $aa = aa$이므로 유일성에 의해 $\sqrt{aa} = a$이다.

**이 항목의 (3).** (10)에 의해 $0 < 2$이므로 (1)에 의해 $\sqrt{2}$는 양수이고 $\sqrt{2}\sqrt{2} = 2$이다. 제곱하여 $2$가 되는 양의 실수 $t$는 $0 \le t$이고 $tt = 2$이므로 (1)의 유일성에 의해 $t = \sqrt{2}$이다. [[sqrt2-is-irrational|√2가 무리수라는 정리]]의 진술 첫 문장은 "$x$가 실수이고 $x^2 = 2$이면 $x$는 무리수이다"이고, 여기서 $x^2$은 $xx$이다. 따라서 $\sqrt{2}$는 무리수이다.

**이 항목의 (4).** $r = \sqrt{2}$로 둔다. 유리수에 관한 계산이 유리수라는 것은 [[rationals-are-dense|유리수의 조밀성]]의 (1)이다.

*$A$는 공집합이 아니고 유리수인 상계를 갖는다.* $1$은 유리수이고 $0 < 1$, $1 \cdot 1 = 1 < 2$이므로 $1 \in A$이다. $2$는 $A$의 상계이다. $q \in A$인데 $q \le 2$가 아니라고 하면 $2 < q$이고 $0 \le 2$이므로 (7)의 (i)에 의해 $4 = 2 \cdot 2 < qq$이며, $2 < 4$와 (W2)에 의해 $2 < qq$이어서 $qq < 2$와 (1)의 (i)에 의해 함께 성립하지 않는다.

*$r$은 $A$의 상계이다.* $q \in A$이면 $0 < q$, $0 < r$이고 $qq < 2 = rr$이므로 (7)의 (iii)에 의해 $q < r$이고, 따라서 $q \le r$이다.

*$A$의 상계 $c$는 $r \le c$를 만족한다.* $c < r$이라 하자. $1 \in A$이므로 $1 \le c$이다. 조밀성의 (2)에 의해 $c < p < r$인 유리수 $p$가 있다. $0 < 1 \le c < p$이므로 $0 < p$이고, $0 \le p < r$이므로 (7)의 (i)에 의해 $pp < rr = 2$이다. 따라서 $p \in A$인데 $c < p$이므로 $c$는 상계가 아니다. 모순이므로 $r \le c$이다. 이로써 $r$은 $A$의 상한이다. 곧 $\sup A = \sqrt{2}$이다.

*가장 작은 유리수 상계는 없다.* 유리수 $s$가 $A$의 상계라 하자. 바로 위에서 $r \le s$이고, $s$는 유리수이며 $r$은 무리수이므로 $s \ne r$, 따라서 $r < s$이다. 조밀성의 (2)에 의해 $r < p < s$인 유리수 $p$가 있다. $A$의 원소 $q$는 $q \le r < p$이므로 $q \le p$이고, $p$는 $A$의 상계이다. 곧 $s$보다 작은 유리수 상계 $p$가 있다. $\blacksquare$
:::

:::remark[다른 항목이 받아들였던 사실과의 관계]
[[sqrt2-is-irrational|√2가 무리수라는 정리]]는 "제곱하여 $2$가 되는 양의 실수가 꼭 하나 있다"를 증명 없이 받아들이고 그 수를 $\sqrt{2}$로 썼습니다. 이 사실은 이 항목의 (1)을 $a = 2$에 쓴 것, 곧 (3)의 첫 문장으로 증명되었습니다. 그 항목이 증명한 "제곱하여 $2$가 되는 실수는 유리수가 아니다"는 받아들인 사실에 기대지 않으므로, 이 항목의 (3)은 그것을 그대로 인용합니다. 그 항목은 고치지 않고 그대로 둡니다.
:::

## 예시와 반례

:::example[제곱근 계산하기]
$\left(\frac{1}{2}\right)\left(\frac{1}{2}\right) = \frac{1}{4}$이고 $0 \le \frac{1}{2}$이므로 (1)의 유일성에 의해 $\sqrt{\frac{1}{4}} = \frac{1}{2}$입니다. $2 \cdot 2 = 4$이므로 $\sqrt{4} = 2$이고, (2)에 의해 $\sqrt{8} = \sqrt{4 \cdot 2} = \sqrt{4}\sqrt{2} = 2\sqrt{2}$입니다. 또 $2 < 3$이므로 (2)에 의해 $\sqrt{2} < \sqrt{3}$입니다.
:::

:::counterexample[$0 \le s$를 빼면 하나로 정해지지 않는다]
$ss = 4$인 실수는 $2$와 $-2$ 둘입니다((K12)의 (iii)에 의해 $(-2)(-2) = 2 \cdot 2 = 4$). 그래서 $\sqrt{4}$는 $0$ 이상인 쪽 $2$로 정합니다. 또 $a < 0$이면 제곱근이 없습니다. 모든 실수 $s$에 대하여 [[order-properties-of-reals]]의 (5)의 (iii)에 의해 $0 \le ss$이므로 $ss = a < 0$일 수 없기 때문입니다.
:::

## 확인 질문

:::check[$\sqrt{2} < \dfrac{3}{2}$인가?]
그렇습니다. $\frac{3}{2}\cdot\frac{3}{2} = \frac{9}{4}$이고 $2 < \frac{9}{4}$($4$를 곱하면 $8 < 9$)입니다. $\frac{3}{2} = \sqrt{\frac{9}{4}}$이므로((1)의 유일성) (2)에 의해 $\sqrt{2} < \sqrt{\frac{9}{4}} = \frac{3}{2}$입니다.
:::

:::check[$\sqrt{2} + \sqrt{8} = \sqrt{18}$인가?]
그렇습니다. (2)에 의해 $\sqrt{8} = \sqrt{4}\sqrt{2} = 2\sqrt{2}$이고 $\sqrt{18} = \sqrt{9}\sqrt{2} = 3\sqrt{2}$이므로, $\sqrt{2} + \sqrt{8} = \sqrt{2} + 2\sqrt{2} = 3\sqrt{2} = \sqrt{18}$입니다.
:::
