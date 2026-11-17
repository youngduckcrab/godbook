---
title: 수열의 비 판정법
title_en: Ratio Test for Sequences
aliases: [비 판정법, 비율 판정법, ratio test, ratio test for sequences]
kind: lemma
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 모든 항이 0 이 아닌 수열에서 이웃한 두 항의 절댓값의 비 |x_(n+1)|/|x_n| 이 L 로 수렴할 때, L < 1 이면 수열은 0 으로 수렴하고 L > 1 이면 유계가 아니어서 발산한다. L = 1 이면 이것만으로는 아무것도 알 수 없다. 또 0 이상인 실수 r 에 대해 어떤 번호 M 부터 |x_(n+1)| ≤ r|x_n| 이면 |x_(M+j)| ≤ |x_M| rʲ 이고, 부등호가 ≥ 이면 반대 부등식이 성립한다.
requires: [mathematical-induction, proof-by-contradiction, real-number-arithmetic, real-order-axioms, order-properties-of-reals, archimedean-property, absolute-value, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, basic-limits, convergent-sequence-is-bounded, tail-of-a-sequence, limits-preserve-inequalities, comparison-with-null-sequence, limit-of-sum-and-product, geometric-sequence-limit]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.2.4절 Lemma 2.2.12 와 그 뒤 문단, 증명 (p.68–70)
    checked: original
    note: "출처의 Lemma 2.2.12(p.68–69)는 모든 n 에서 x_n ≠ 0 이고 L := lim |x_{n+1}|/|x_n| 이 있을 때 (i) L < 1 이면 lim x_n = 0, (ii) L > 1 이면 {x_n} 이 유계가 아니다(따라서 발산한다)라는 것이고, 이 항목의 (1), (2)이다. 출처의 증명은 L < r < 1 인 r 을 '고르고'(pick), n ≥ M 에서 비가 r 보다 작게 한 뒤, |x_n| = |x_M| (|x_{M+1}|/|x_M|) ⋯ (|x_n|/|x_{n−1}|) < |x_M| r^{n−M} = (|x_M| r^{−M}) rⁿ 으로 망원 곱과 음의 지수를 쓴다. 이 사이트에는 실수의 유한 곱과 음의 지수가 없으므로, 이 항목은 r 을 두 수의 평균(order-properties-of-reals 의 (8))으로 정하고, 0 이상인 정수 j 에 대한 귀납법으로 |x_{M+j}| ≤ |x_M| r^j 를 보인 뒤 M-꼬리, comparison-with-null-sequence 의 (3), geometric-sequence-limit 의 (1)로 끝낸다. L > 1 인 경우도 같은 귀납법으로 |x_{M+j}| ≥ |x_M| r^j 를 보이고, 유계라면 (rⁿ) 이 유계가 되어 geometric-sequence-limit 의 (3)에 어긋난다는 것으로 끝낸다(출처도 {rⁿ} 이 유계가 아님을 쓴다). 예시 'L = 1 인 네 수열'은 출처가 렘마 바로 뒤(p.69)에서 드는 네 수열 {1/n}, {1}, {(−1)ⁿ}, {n} 과 같고, 이 항목은 각 비의 극한이 1 임을 계산했다. 예시 'n(2⁻¹)ⁿ'은 출처 Example 2.2.14(p.70)가 비 판정법을 쓰는 수열 n/(1+ε)ⁿ 에서 ε = 1 인 경우이고, 연습문제 2.2.8(p.71, n²/2ⁿ → 0)과도 같은 종류이다. Example 2.2.13(2ⁿ/n!)과 Example 2.2.14 의 결론 n^{1/n} → 1 은 계승과 n 제곱근을 쓰므로 싣지 않았다. 진술 (3)은 출처가 증명 안에서 망원 곱으로 얻는 부등식 |x_n| < |x_M| r^{n−M} 을 귀납법으로 얻는 꼴로 진술에 올린 것이다. 확인 질문은 출처에 없다(검색한 범위). 출처의 연습문제 2.2.13 은 '비가 어떤 번호부터 r < 1 이하'인 더 강한 판을 묻는다. 이 항목의 (3)은 그 증명의 중심 부등식이지만, 그 판의 결론(0 으로 수렴, 유계가 아님) 자체는 진술하지 않는다."
status: reviewed
review_note: "2026-11-17 독립 검토 2회(전반 1회, 후반과 전반 재확인 1회), 비 판정법 (3)은 3차 확인. 증명의 수학 오류 없음. 거듭제곱 직관의 n ≥ 1 누락과 출처 메모를 고침"
added: 2026-11-17
---

:::statement
수열, 유계, 수렴과 기호 $\lim_{n \to \infty}$는 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이고, 절댓값은 [[absolute-value]]의 것이다. $(x_n)$을 모든 자연수 $n$에서 $x_n \ne 0$인 수열이라 하자. 그러면 $|x_n| \ne 0$이므로, $n$번째 항이
$$
q_n = |x_{n+1}|\,|x_n|^{-1}
$$
인 수열 $(q_n)$이 [[sequence]]의 (1)로 정해진다. $(q_n)$이 수렴한다고 하고 $L = \lim_{n \to \infty} q_n$으로 두자.

1. $L < 1$이면 $(x_n)$은 $0$으로 수렴한다. 곧 $\lim_{n \to \infty} x_n = 0$이다.
2. $L > 1$이면 $(x_n)$은 유계가 아니고, 따라서 발산한다.

다음 (3)은 항이 $0$이 아니라는 가정을 쓰지 않는다.

3. (어떤 번호부터 비가 $r$ 이하인 경우) $(x_n)$을 수열, $r$을 $0 \le r$인 실수, $M$을 자연수라 하자. $M$ 이상인 모든 자연수 $n$에서 $|x_{n+1}| \le r\,|x_n|$이면, $0$ 이상인 모든 정수 $j$에서 $|x_{M+j}| \le |x_M|\,r^j$이다. $M$ 이상인 모든 자연수 $n$에서 $|x_{n+1}| \ge r\,|x_n|$이면, $0$ 이상인 모든 정수 $j$에서 $|x_{M+j}| \ge |x_M|\,r^j$이다.
:::

:::english
Sequences, boundedness, convergence and the symbol $\lim_{n \to \infty}$ are those of the entries on sequences, on the limit of a sequence, and on uniqueness of limits, and the absolute value is the one in the entry on absolute value. Let $(x_n)$ be a sequence with $x_n \ne 0$ for every natural number $n$. Then $|x_n| \ne 0$, so the sequence $(q_n)$ whose $n$th term is
$$
q_n = |x_{n+1}|\,|x_n|^{-1}
$$
is defined by item (1) of the entry on sequences. Suppose that $(q_n)$ converges, and put $L = \lim_{n \to \infty} q_n$.

1. If $L < 1$, then $(x_n)$ converges to $0$. That is, $\lim_{n \to \infty} x_n = 0$.
2. If $L > 1$, then $(x_n)$ is not bounded, and hence diverges.

Item (3) below does not use the assumption that the terms are nonzero.

3. (When the ratio is at most $r$ from some index on) Let $(x_n)$ be a sequence, $r$ a real number with $0 \le r$, and $M$ a natural number. If $|x_{n+1}| \le r\,|x_n|$ for every natural number $n$ with $n \ge M$, then $|x_{M+j}| \le |x_M|\,r^j$ for every integer $j \ge 0$. If $|x_{n+1}| \ge r\,|x_n|$ for every natural number $n$ with $n \ge M$, then $|x_{M+j}| \ge |x_M|\,r^j$ for every integer $j \ge 0$.
:::

## 직관

[[geometric-sequence-limit|등비수열]]은 이웃한 두 항의 비가 언제나 같은 $c$입니다. 비 판정법은 비가 일정하지 않아도 어떤 수 $L$로 다가가면, 결국 등비수열처럼 행동한다는 것입니다. 이자율이 해마다 조금씩 바뀌어도 그 이자율이 $1$보다 작은 값으로 다가가면, 몇 해 뒤부터는 $1$보다 작은 일정한 비율 $r$ 이하로 줄어든다고 볼 수 있습니다. 비유가 맞지 않는 곳은, 이자율과 달리 여기서는 절댓값의 비만 보므로 항의 부호가 마음대로 바뀌어도 된다는 점입니다.

증명은 $L$과 $1$ 사이에 $r$을 하나 끼워 넣는 것으로 시작합니다. 비가 $L$로 다가가므로 어떤 번호 $M$부터는 비가 $r$보다 작고, 그러면 $|x_{M+j}| \le |x_M|\,r^j$입니다. $r < 1$이므로 오른쪽이 $0$으로 갑니다. 비가 $r$보다 작아지는 것은 $M$ 뒤부터이므로, 처음 $M$개 항은 [[tail-of-a-sequence|수열의 꼬리]]로 떼어 냅니다.

$L = 1$이면 끼워 넣을 $r$이 없습니다. 실제로 $L = 1$인 수열은 $0$으로 수렴할 수도, 다른 수로 수렴할 수도, 유계이면서 발산할 수도, 유계가 아닐 수도 있습니다(아래 예시).

## 증명

:::idea
$L < r < 1$인 $r$을 잡으면 어떤 $M$부터 $|x_{n+1}| < r|x_n|$이고, 귀납법으로 $|x_{M+j}| \le |x_M|\,r^j$이다. $M$-꼬리를 $0$으로 가는 수열 $|x_M|\,r^n$과 비교한다. $L > 1$이면 부등호가 거꾸로 되어 $(r^n)$이 유계가 된다는 모순이 나온다.
:::

:::hint
$r = \dfrac{L + 1}{2}$로 두고 수렴의 정의를 $\varepsilon = r - L$에 쓴다. $q_n |x_n| = |x_{n+1}|$이다.
:::

:::hint
$0$ 이상인 정수 $j$에 대한 귀납법에서 귀납 단계는 $|x_{M+j+1}| \le r\,|x_{M+j}| \le r\,|x_M|\,r^j$이다. 여기서 $0 \le r$이 쓰인다. 이 귀납이 진술 (3)이다.
:::

:::proof
(K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (8)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (9)"는 [[absolute-value]]의 번호, "극한 (1)"은 [[limit-of-sequence]]의 번호, "거듭제곱 (1)"은 [[power-of-a-real-number]]의 번호, "등비 (1)"은 [[geometric-sequence-limit]]의 번호이다. $0$ 이상인 정수에 관한 귀납법은 [[mathematical-induction]]의 시작점이 $0$인 꼴이다.

**3의 증명.** $j$에 대한 귀납법을 쓴다. 첫 문장을 보인다. $j = 0$이면 거듭제곱의 정의와 (K4)에 의해 $|x_M|\,r^0 = |x_M|$이므로 등호가 성립한다. $j$에서 성립한다고 하자. $M + j$는 $M$ 이상인 자연수이므로 가정, $0 \le r$과 순서 성질 (4)의 (iii), (K1), (K2), 거듭제곱 (1)에 의해
$$
|x_{M+j+1}| \le r\,|x_{M+j}| \le r\,(|x_M|\,r^j) = |x_M|\,r^{j+1}
$$
이고, 순서 성질 (1)의 (v)에 의해 $|x_{M+(j+1)}| \le |x_M|\,r^{j+1}$이다. 둘째 문장도 같은 귀납법이다. $j = 0$이면 양변이 $|x_M|$이고, 귀납 단계는 같은 근거로 $|x_M|\,r^{j+1} = r\,(|x_M|\,r^j) \le r\,|x_{M+j}| \le |x_{M+j+1}|$이다.

이제 (1), (2)의 가정 아래에서 본다. 자연수 $n$마다 $x_n \ne 0$이므로 절댓값 (2), (9)에 의해 $0 < |x_n|$이고 $|x_n|^{-1}$이 있다. (K2), (K8)의 (iii), (K4)에 의해
$$
q_n |x_n| = |x_{n+1}|\,(|x_n|^{-1} |x_n|) = |x_{n+1}|
$$
이다. 이 식을 (가)라 한다. 또 절댓값 (2)와 순서 성질 (6)의 (i), (4)의 (iv)에 의해 $0 \le q_n$이므로 [[limits-preserve-inequalities|극한과 부등식]]의 (3)에 의해 $0 \le L$이다.

**1의 증명.** $L < 1$이라 하자. $r = \dfrac{L + 1}{2}$로 두면 순서 성질 (8)에 의해 $L < r < 1$이고, $0 \le L < r$이므로 순서 성질 (1)의 (v)에 의해 $0 < r$이다. 순서 성질 (3)의 (i)에 의해 $0 < r - L$이므로, 극한 (1)을 $\varepsilon = r - L$에 쓰면 $M$ 이상인 모든 자연수 $n$에서 $q_n < L + (r - L) = r$인 자연수 $M$이 있다((K1), (K2), (K8)의 (ii), (K4)). 그런 $n$에서 $0 < |x_n|$이므로 순서 성질 (4)의 (i)과 (가)에 의해
$$
|x_{n+1}| < r\,|x_n| \qquad (n \ge M)
$$
이다((K1)). 이 부등식을 (나)라 한다.

(나)에 의해 $M$ 이상인 모든 자연수 $n$에서 $|x_{n+1}| \le r\,|x_n|$이고 $0 \le r$이므로, 이 항목의 (3)에 의해 $0$ 이상인 모든 정수 $j$에서 $|x_{M+j}| \le |x_M|\,r^j$이다.

$(x_n)$의 $M$-꼬리를 $(y_n)$이라 하면 자연수 $n$마다 (K1)에 의해 $y_n = x_{n+M} = x_{M+n}$이고, 방금 보인 것에 의해 $|y_n - 0| = |y_n| \le |x_M|\,r^n$이다. $|r| = r < 1$이므로(절댓값 (1)) 등비 (1)에 의해 $(r^n)$은 $0$으로 수렴하고, [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)와 (K9)에 의해 $n$번째 항이 $|x_M|\,r^n$인 수열은 $0$으로 수렴한다. [[comparison-with-null-sequence|0 으로 가는 수열과의 비교]]의 (3)에 의해 $(y_n)$은 $0$으로 수렴하고, [[tail-of-a-sequence|수열의 꼬리]]의 (1)에 의해 $(x_n)$도 $0$으로 수렴한다.

**2의 증명.** $L > 1$이라 하자. $r = \dfrac{1 + L}{2}$로 두면 순서 성질 (8)에 의해 $1 < r < L$이고, 순서 성질 (5)의 (ii)와 (W2)에 의해 $0 < r$이다. $0 < L - r$이므로 극한 (1)을 $\varepsilon = L - r$에 쓰면 $M$ 이상인 모든 자연수 $n$에서 $L - (L - r) < q_n$, 곧 $r < q_n$인 자연수 $M$이 있다. 그런 $n$에서 순서 성질 (4)의 (i)과 (가)에 의해 $r\,|x_n| < |x_{n+1}|$이고, 따라서 $|x_{n+1}| \ge r\,|x_n|$이다. $0 \le r$이므로 이 항목의 (3)에 의해 $0$ 이상인 모든 정수 $j$에서 $|x_M|\,r^j \le |x_{M+j}|$이다.

$(x_n)$이 유계라고 가정하고 모순을 이끈다. 모든 자연수 $n$에서 $|x_n| \le B$인 실수 $B$가 있다. 자연수 $n$에 대하여 $|x_M|\,r^n \le |x_{M+n}| \le B$이다. $0 < |x_M|^{-1}$이므로 순서 성질 (4)의 (iii)으로 양변에 $|x_M|^{-1}$을 곱하면 (K1), (K2), (K8)의 (iii), (K4)에 의해 $r^n \le B\,|x_M|^{-1}$이다. 거듭제곱 (6)의 (i)에 의해 $0 < r^n$이므로 절댓값 (1)에 의해 $|r^n| = r^n \le B\,|x_M|^{-1}$이고, $(r^n)$은 유계이다. 그러나 $|r| = r > 1$이므로 등비 (3)에 의해 $(r^n)$은 유계가 아니다. 이 모순으로 $(x_n)$은 유계가 아니고, [[convergent-sequence-is-bounded|수렴하는 수열이 유계라는 정리]]의 (2)에 의해 수렴하지 않는다. $\blacksquare$
:::

## 예시와 반례

:::example[$n$번째 항이 $n\,(2^{-1})^n$인 수열]
모든 항이 양수이므로([[order-properties-of-reals]]의 (10), [[power-of-a-real-number|거듭제곱]]의 (6)의 (i), (W4)) $x_n \ne 0$이고 $|x_n| = x_n$입니다. 거듭제곱의 (1), (3)과 (K1), (K2), (K8)의 (iii), (K4)에 의해
$$
q_n = (n + 1)(2^{-1})^{n+1}\,\bigl(n\,(2^{-1})^n\bigr)^{-1} = (n + 1)\,n^{-1}\,2^{-1} = 2^{-1}(1 + n^{-1})
$$
입니다. [[basic-limits]]의 (2)와 [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)에 의해 $(q_n)$은 $2^{-1}(1 + 0) = 2^{-1}$로 수렴하고, [[order-properties-of-reals]]의 (8)에 의해 $2^{-1} < 1$이므로 이 항목의 (1)에 의해 $\lim_{n \to \infty} n\,(2^{-1})^n = 0$입니다. 항마다 곱해지는 $n$이 커지는데도, 비가 $2^{-1}$ 근처로 가므로 $0$으로 갑니다.
:::

:::example[$L = 1$이면 아무것도 말할 수 없다]
네 수열을 봅니다. 아래의 계산은 (K1)–(K4), (K8)의 (iii), (K12)와 [[basic-limits]]의 (1), (2), [[tail-of-a-sequence|수열의 꼬리]]의 (1), [[limit-of-sum-and-product|극한의 사칙연산]]의 (2), (5)를 씁니다. 특히 $n$번째 항이 $(n + 1)^{-1}$인 수열은 $(n^{-1})$의 $1$-꼬리이므로 $0$으로 수렴합니다.

- $x_n = n^{-1}$: $n = (n + 1) - 1$이므로 $q_n = (n + 1)^{-1}\,n = 1 - (n + 1)^{-1}$이고 $L = 1 - 0 = 1$입니다. $(x_n)$은 $0$으로 수렴합니다.
- 모든 항이 $1$인 상수 수열: $q_n = 1$이고 $L = 1$입니다. $(x_n)$은 $1$로 수렴합니다.
- [[basic-limits]]의 (3)의 수열 $(s_n)$: 모든 항의 절댓값이 $1$이므로 $q_n = 1$이고 $L = 1$입니다. $(s_n)$은 유계이지만 발산합니다.
- $x_n = n$: $q_n = (n + 1)\,n^{-1} = 1 + n^{-1}$이고 $L = 1 + 0 = 1$입니다. $(x_n)$은 유계가 아닙니다. 실수 $B$를 아무것이나 잡으면 [[archimedean-property]]의 (1)에 의해 $B < n$인 자연수 $n$이 있고, $|x_n| = n$이므로 $|x_n| \le B$가 아닙니다.

넷 다 $L = 1$인데 결과는 모두 다릅니다. 이 항목의 가정 $L < 1$, $L > 1$에서 등호를 허용할 수 없습니다.
:::

## 확인 질문

:::check[$L < 1$이면 어떤 번호부터 $|x_n|$이 줄어드는가?]
그렇습니다. $0 < 1 - L$이므로 수렴의 정의를 $\varepsilon = 1 - L$에 쓰면 어떤 번호 $M$ 이상인 모든 $n$에서 $q_n < L + (1 - L) = 1$입니다. 그런 $n$에서 $0 < |x_n|$이므로 [[order-properties-of-reals]]의 (4)의 (i)에 의해 $|x_{n+1}| = q_n |x_n| < 1 \cdot |x_n| = |x_n|$입니다. 곧 $M$ 이상인 모든 $n$에서 $|x_{n+1}| < |x_n|$입니다.
:::

:::check[$n$번째 항이 $3^n$인 수열에 이 항목을 쓰면 무엇을 알 수 있는가?]
유계가 아니고 발산한다는 것입니다. 거듭제곱의 (1)과 (K8)의 (iii)에 의해 $q_n = 3^{n+1}(3^n)^{-1} = 3$이므로 $L = 3 > 1$이고, 이 항목의 (2)를 씁니다. 이것은 [[geometric-sequence-limit|등비수열의 극한]]의 (3)과 같은 결론이고, 비가 일정한 수열은 비 판정법의 가장 단순한 경우입니다.
:::
