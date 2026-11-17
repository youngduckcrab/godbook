---
title: 아르키메데스 성질
title_en: Archimedean Property
aliases: [아르키메데스의 원리, Archimedean property, Archimedean principle, 자연수는 위로 유계가 아니다]
kind: theorem
field: real-analysis
msc: ["26A03", "12J15"]
level: undergrad
summary: 어떤 실수보다도 큰 자연수가 있다. 따라서 양수 x 를 충분히 여러 번 더하면 어떤 실수보다도 커지고, 1/n 은 어떤 양수보다도 작아지며, 모든 실수 t 에 대해 n − 1 ≤ t < n 인 정수 n 이 꼭 하나 있다.
requires: [proof-by-contradiction, natural-numbers-are-infinite, even-and-odd, prime-number, well-ordering-principle, real-number-arithmetic, real-order-axioms, order-properties-of-reals, upper-bound-and-supremum, least-upper-bound-property]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 1.2절 Theorem 1.2.4 (i)과 그 증명 (p.31), Corollary 1.2.5 (p.32), 연습문제 1.2.2 (p.34)
    checked: original
    note: "출처의 Theorem 1.2.4 (i)은 'x, y ∈ ℝ, x > 0 이면 nx > y 인 n ∈ ℕ 이 있다'(이 항목의 (2))이다. 출처는 x 로 나누어 'ℕ ⊂ ℝ 은 위로 유계가 아니다'로 바꾸고, sup ℕ = b 가 있다고 하면 b − 1 보다 큰 m ∈ ℕ 이 있어 m + 1 > b 가 된다는 귀류법으로 증명한다. 이 항목은 그것을 (1)로 따로 진술하고 같은 경로로 증명하며, 출처가 적지 않는 근거(ℕ ⊆ ℝ, m + 1 ∈ ℕ, x 로 나누기)를 적었다. (3)의 앞부분은 출처가 Corollary 1.2.5 의 증명 안에서 'na > 1, 곧 a > 1/n'으로 쓰는 것이고, (3)의 끝문장 inf{1/n : n ∈ ℕ} = 0 은 Corollary 1.2.5 이다. (4)는 출처 연습문제 1.2.2('t ≥ 0 이면 n − 1 ≤ t < n 인 n ∈ ℕ 이 있다')를 모든 실수 t 와 정수 n 으로 넓히고 유일성을 더한 것이다. 출처는 이 연습문제를 따로 증명하지 않지만, Theorem 1.2.4 (ii)의 증명(p.31)에서 t = nx ≥ 0 에 대해 {k ∈ ℕ : k > nx} 의 최소 원소 m 으로 m − 1 ≤ nx < m 을 얻는다. 연습문제 1.2.16(p.35)은 아래로 유계인 정수 집합의 최소 원소를 쓰면 x ≥ 0 이라는 가정이 필요 없어지는 까닭을 묻는다. 이 항목의 (4)는 t 이하인 정수 집합의 최대 원소(well-ordering-principle 의 (나))로 증명한다. 출처는 (i)과 조밀성 (ii)가 'actually equivalent'라고 말한다(p.31, 증명 없음). 이 항목은 그것을 다루지 않는다. 예시, 반례, 확인 질문은 새로 만들었다."
status: reviewed
review_note: "2026-11-17 작성자의 자기 검토 뒤 독립 검토 통과(전반 2회, 후반 1회). 정수와 실수의 순서를 잇는 진술의 범위, 인용 근거, 번호 표기, 출처 메모를 보완했다. 마지막 수정은 지휘자가 변경분을 확인했다."
added: 2026-11-17
---

:::statement
자연수는 ([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술에 의해) 양의 정수이고, (K7)에 의해 실수이다. 다음이 성립한다.

1. 모든 실수 $t$에 대하여 $t < n$인 자연수 $n$이 있다. 곧 $\mathbb{N}$은 $\mathbb{R}$의 부분집합으로서 위로 유계가 아니다.
2. $x$, $y$가 실수이고 $0 < x$이면 $y < nx$인 자연수 $n$이 있다.
3. $0 < \varepsilon$이면 $\dfrac{1}{n} < \varepsilon$인 자연수 $n$이 있고, 그 $n$ 이상인 모든 자연수 $m$에 대해서도 $\dfrac{1}{m} < \varepsilon$이다. 또 집합 $\left\{\dfrac{1}{n} : n \in \mathbb{N}\right\}$의 하한은 $0$이다.
4. 모든 실수 $t$에 대하여 $n - 1 \le t < n$인 정수 $n$이 정확히 하나 있다. 이때 $n - 1$은 $t$ 이하인 정수 가운데 가장 큰 것이다. $0 \le t$이면 이 $n$은 자연수이다.
:::

:::english
Natural numbers are positive integers (by the statement of the theorem on the set of natural numbers) and, by (K7), real numbers. The following hold.

1. For every real number $t$ there is a natural number $n$ with $t < n$. That is, $\mathbb{N}$, as a subset of $\mathbb{R}$, is not bounded above.
2. If $x$ and $y$ are real numbers and $0 < x$, then there is a natural number $n$ with $y < nx$.
3. If $0 < \varepsilon$, then there is a natural number $n$ with $\dfrac{1}{n} < \varepsilon$, and $\dfrac{1}{m} < \varepsilon$ also holds for every natural number $m$ with $m \ge n$. Moreover, the infimum of the set $\left\{\dfrac{1}{n} : n \in \mathbb{N}\right\}$ is $0$.
4. For every real number $t$ there is exactly one integer $n$ with $n - 1 \le t < n$. Here $n - 1$ is the greatest integer that is at most $t$. If $0 \le t$, this $n$ is a natural number.
:::

## 직관

$1$, $2$, $3$, $\dots$은 끝없이 커지니 어떤 수보다도 큰 자연수가 있다는 것은 당연해 보입니다. 이 항목은 그것을 [[least-upper-bound-property|최소상계 성질]] (U)로 증명합니다. 자연수 전체가 어떤 실수 아래에 갇혀 있다면 그 상한 $b$가 있을 텐데, $b - 1$보다 큰 자연수 $m$을 잡으면 $m + 1$이 $b$를 넘어 버립니다. (U)가 쓰이는 곳은 이 "상한 $b$가 있다"는 한 단계뿐이고, (2)–(4)는 (U)를 다시 쓰지 않고 (1)에서 나옵니다((4)는 정렬 원리도 씁니다).

비유로는 한 걸음의 폭이 $x$인 사람을 생각할 수 있습니다. 폭이 아무리 좁아도($0 < x$) 충분히 많이 걸으면 어떤 지점 $y$도 넘어선다는 것이 (2)입니다. (3)은 거꾸로, 길이 $1$인 걸음을 $n$ 조각으로 나누면 조각의 길이 $\frac{1}{n}$이 어떤 양수 $\varepsilon$보다도 작아진다는 것입니다. 비유가 맞지 않는 곳은 걷는 사람은 실제로 한 걸음씩 나아가지만, (2)는 "충분히 큰 $n$이 있다"는 존재만 말하고 그 $n$을 찾는 방법은 말하지 않는다는 점입니다.

(4)는 수직선을 길이 $1$인 반열린 칸 "$n - 1$ 이상 $n$ 미만"으로 빈틈없이 겹치지 않게 나눌 수 있다는 것입니다. [[upper-bound-and-supremum|상계와 상한]]의 참고 블록은 실수인 상계를 갖는 정수의 집합이 정수인 상계도 갖는지를 남겨 두었는데, 이 항목의 (1)이 그 답을 줍니다(아래 확인 질문 2).

## 증명

:::idea
$\mathbb{N}$이 위로 유계라면 (U)로 상한 $b$를 잡고, 상한보다 작은 $b - 1$이 상계가 아니라는 데서 $b$보다 큰 자연수 $m + 1$을 얻어 모순을 낸다. (4)는 $t$ 이하인 정수의 집합에 정렬 원리의 (나)를 써서 최대 원소를 잡는다.
:::

:::hint
$t$보다 큰 자연수가 없다면 $t$는 $\mathbb{N}$의 상계입니다. 그러면 $\sup \mathbb{N}$이 있고, [[upper-bound-and-supremum|상계와 상한]]의 (4)를 $c = \sup \mathbb{N} - 1$에 쓸 수 있습니다.
:::

:::hint
(4)에서 $A = \{m \in \mathbb{Z} : m \le t\}$가 공집합이 아니고 정수인 상계를 갖는다는 것을 (1)로 보이세요. 공집합이 아님을 보일 때는 (1)을 $-t$에 씁니다.
:::

:::proof
"(3)의 (iii)" 같은 번호는 [[order-properties-of-reals]]의 번호이고, "이 항목의 (1)"처럼 쓴 것은 위 진술의 번호이다. [[order-properties-of-reals]]의 (10)에 의해 정수 사이의 부등식은 정수로 읽으나 실수로 읽으나 같으므로, (Z1)–(Z8), (L1)–(L3)과 [[well-ordering-principle]]의 정리를 실수의 부등식으로 쓴다. 자연수가 양의 정수라는 것은 [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술이다.

**이 항목의 (1).** [[proof-by-contradiction]]으로 보인다. 어떤 실수 $t$에 대하여 $t < n$인 자연수 $n$이 없다고 하자. 그러면 모든 자연수 $n$에서 $t < n$이 성립하지 않으므로 (1)의 (iii)에 의해 $n \le t$이다. 곧 $t$는 $\mathbb{N}$의 상계이다. $1 \in \mathbb{N}$이므로 $\mathbb{N}$은 공집합이 아니다. [[least-upper-bound-property|최소상계 성질]] (U)에 의해 $\mathbb{N}$은 상한 $b$를 갖는다. (5)의 (ii)의 $0 < 1$에 (W3)으로 $b - 1$을 더하면 $0 + (b - 1) < 1 + (b - 1)$이다. (K1), (K4)에 의해 $0 + (b - 1) = b - 1$이고, (K1), (K2), (K8)의 (ii), (K4)에 의해 $1 + (b - 1) = 1 + (b + (-1)) = (b + (-1)) + 1 = b + ((-1) + 1) = b + 0 = b$이므로 $b - 1 < b$이다. [[upper-bound-and-supremum|상계와 상한]]의 (4)에 의해 $b - 1 < m$인 자연수 $m$이 있다. (W3)으로 양변에 $1$을 더하면 $(b - 1) + 1 < m + 1$이고, (K2), (K1), (K8)의 (ii), (K4)에 의해 $(b - 1) + 1 = b + ((-1) + 1) = b$이므로 $b < m + 1$이다. 한편 $m$은 양의 정수이고, $m + 1$은 정수이며([[even-and-odd]]에서 받아들인 정수의 닫힘), (L3)에 의해 $m < m + 1$이고 $0 < m$이므로 (Z6)에 의해 $0 < m + 1$이다. 따라서 $m + 1$은 양의 정수, 곧 자연수이고, $b$가 $\mathbb{N}$의 상계이므로 $m + 1 \le b$이다. 이것은 $b < m + 1$과 (1)의 (i)에 의해 함께 성립하지 않는다. 모순이므로 모든 실수 $t$에 대하여 $t < n$인 자연수 $n$이 있다. 이것은 어떤 실수도 $\mathbb{N}$의 상계가 아니라는 것((1)의 (i)에 의해 $n \le t$가 성립하지 않으므로), 곧 $\mathbb{N}$이 위로 유계가 아니라는 것이다.

**이 항목의 (2).** $0 < x$이므로 $x \ne 0$이고 (6)의 (i)에 의해 $0 < x^{-1}$이다. 이 항목의 (1)을 실수 $yx^{-1}$에 쓰면 $yx^{-1} < n$인 자연수 $n$이 있다. (4)의 (i)로 양변에 $x$를 곱하면 $(yx^{-1})x < nx$이고, (K2), (K1), (K8)의 (iii), (K4)에 의해 $(yx^{-1})x = y(x^{-1}x) = y(xx^{-1}) = y$이므로 $y < nx$이다.

**이 항목의 (3).** $0 < \varepsilon$이라 하자. 이 항목의 (2)를 $x = \varepsilon$, $y = 1$에 쓰면 $1 < n\varepsilon$인 자연수 $n$이 있다. (10)에 의해 $0 < n$이고 $0 < n^{-1}$이다. (4)의 (i)로 양변에 $n^{-1}$을 곱하면 $1 \cdot n^{-1} < (n\varepsilon)n^{-1}$이다. (K1), (K4)에 의해 $1 \cdot n^{-1} = n^{-1} = \frac{1}{n}$이고, (K1), (K2), (K8)의 (iii), (K4)에 의해 $(n\varepsilon)n^{-1} = (\varepsilon n)n^{-1} = \varepsilon(nn^{-1}) = \varepsilon$이므로 $\frac{1}{n} < \varepsilon$이다.

$m$이 $n \le m$인 자연수라 하자. $m = n$이면 $\frac{1}{m} = \frac{1}{n} < \varepsilon$이다. $n < m$이면 $0 < n < m$이므로 (6)의 (ii)에 의해 $m^{-1} < n^{-1}$이고, (W2)에 의해 $\frac{1}{m} < \varepsilon$이다.

끝으로 $D = \left\{\frac{1}{n} : n \in \mathbb{N}\right\}$의 하한이 $0$임을 보인다. (10)에 의해 모든 자연수 $n$에서 $0 < \frac{1}{n}$이므로 $0$은 $D$의 하계이다. $b$가 $D$의 임의의 하계라 하고 $b \le 0$이 아니라고 하면 (1)의 (iii)에 의해 $0 < b$이다. 앞 문단에 의해 $\frac{1}{n} < b$인 자연수 $n$이 있는데, $\frac{1}{n} \in D$이고 $b$가 하계이므로 $b \le \frac{1}{n}$이어서 (1)의 (i)에 어긋난다. 따라서 $D$의 모든 하계 $b$는 $b \le 0$이고, $0$은 $D$의 하한이다.

**이 항목의 (4).** $t$를 실수라 하고 $A = \{m \in \mathbb{Z} : m \le t\}$로 둔다.

*$A$는 공집합이 아니다.* 이 항목의 (1)을 $-t$에 쓰면 $-t < k$인 자연수 $k$가 있다. (3)의 (iii)과 (K9)의 $-(-t) = t$에 의해 $-k < t$이므로 $-k \le t$이다. $-k$는 정수이므로 $-k \in A$이다.

*$A$는 정수인 상계를 갖는다.* 이 항목의 (1)에 의해 $t < N$인 자연수 $N$이 있다. $m \in A$이면 $m \le t < N$이므로 (1)의 (v)에 의해 $m < N$이고, 따라서 $m \le N$이다. 곧 정수 $N$이 $A$의 모든 원소 이상이므로 $A$는 [[well-ordering-principle]]의 뜻으로 위로 유계이다.

*존재.* [[well-ordering-principle]]의 (나)에 의해 $A$는 최대 원소 $M$을 갖는다. $n = M + 1$로 두면 $n$은 정수이고 $n - 1 = M$이다. $M \in A$이므로 $n - 1 = M \le t$이다. $t < n$이 아니라고 하면 (1)의 (iii)에 의해 $n \le t$이므로 $n \in A$이고, $M$이 최대 원소이므로 $M + 1 = n \le M$이다. 이것은 (L3)의 $M < M + 1$과 (L1)에 의해 함께 성립하지 않는다. 따라서 $t < n$이다. 또 $n - 1 = M$은 $A$의 최대 원소, 곧 $t$ 이하인 정수 가운데 가장 큰 것이다.

*유일성.* 정수 $n$, $n'$이 모두 $n - 1 \le t < n$, $n' - 1 \le t < n'$을 만족한다고 하자. $n < n'$이라 하면 (Z1)에 의해 $n + 1 \le n'$이고, (Z7)로 양변에서 $1$을 빼면 $n \le n' - 1$이다. $n' - 1 \le t$와 (1)의 (v)에 의해 $n \le t$인데, 이것은 $t < n$과 (1)의 (i)에 의해 함께 성립하지 않는다. $n' < n$이라 하면 (Z1)과 (Z7)에 의해 $n' \le n - 1$이고, $n - 1 \le t$와 (1)의 (v)에 의해 $n' \le t$인데, 이것은 $t < n'$과 함께 성립하지 않는다. 따라서 (Z5)에 의해 $n = n'$이다.

*$0 \le t$인 경우.* $0 \le t < n$이므로 (1)의 (v)에 의해 $0 < n$이고, $n$은 양의 정수, 곧 자연수이다. $\blacksquare$
:::

## 예시와 반례

:::example[음수 $t$에서의 $n$]
$t = -\dfrac{5}{2} = (-5) \cdot 2^{-1}$이면 (4)의 $n$은 $-2$입니다. $0 < 2$이므로 [[order-properties-of-reals]]의 (6)의 (iv)에 의해 두 수의 크기는 $2$를 곱한 것으로 비교할 수 있습니다. $(-3) \cdot 2 = -6$, $t \cdot 2 = -5$, $(-2) \cdot 2 = -4$이고 $-6 \le -5 < -4$이므로 $-3 \le t < -2$, 곧 $n - 1 \le t < n$($n = -2$)입니다. $t$ 이하인 가장 큰 정수는 $-3$이고, $-2$가 아닙니다. 음수에서는 "소수점 아래를 버린 수"와 다르다는 점에 주의합니다.
:::

:::counterexample[닫힌 칸으로 바꾸면 하나로 정해지지 않는다]
(4)의 조건을 "$n - 1 \le t \le n$"으로 바꾸면 유일성이 깨집니다. $t = 3$이면 $n = 3$에 대해 $2 \le 3 \le 3$이고, $n = 4$에 대해서도 $3 \le 3 \le 4$입니다. 반열린 꼴 "$t < n$"이 유일성 증명에서 $n \le t$를 모순으로 만드는 자리에 쓰였습니다.
:::

## 역사와 맥락

출처는 각주에서 이 성질이 시라쿠사의 아르키메데스(기원전 287년 무렵–기원전 212년 무렵)의 이름을 딴 것이며, 아르키메데스의 저작 「구와 원기둥에 관하여」(기원전 225년)의 공리 V라고 적습니다.

## 확인 질문

:::check[$x = \dfrac{1}{7}$, $y = 100$일 때 (2)의 $n$으로 $701$을 쓸 수 있는가?]
쓸 수 있습니다. $0 < 7$이므로 [[order-properties-of-reals]]의 (6)의 (iv)에 의해 $100 < 701 \cdot \frac{1}{7}$인 것은 정확히 $100 \cdot 7 < (701 \cdot 7^{-1}) \cdot 7$, 곧 $700 < 701$일 때이고, 이것은 정수의 부등식으로 참입니다($(701 \cdot 7^{-1}) \cdot 7 = 701 \cdot (7^{-1} \cdot 7) = 701$). $700$은 쓸 수 없습니다. $700 \cdot \frac{1}{7} = 100$이어서 $100 < 100$이 아니기 때문입니다.
:::

:::check[정수의 집합 $A$가 실수인 상계 $c$를 가지면 정수인 상계도 갖는가?]
갖습니다. (1)에 의해 $c < N$인 자연수 $N$이 있습니다. $A$의 원소 $m$은 $m \le c < N$이므로 $m < N$, 따라서 $m \le N$이고, 정수 $N$이 상계입니다. 그래서 공집합이 아닌 정수의 집합이 [[upper-bound-and-supremum|상계와 상한]]의 뜻으로 위로 유계이면 [[well-ordering-principle]]의 (나)를 쓸 수 있습니다.
:::
