---
title: 볼차노–바이어슈트라스 정리
title_en: Bolzano–Weierstrass Theorem
aliases: [볼차노-바이어슈트라스 정리, 유계인 수열은 수렴하는 부분수열을 갖는다, Bolzano-Weierstrass theorem]
kind: theorem
field: real-analysis
msc: ["40A05", "26A03"]
level: undergrad
summary: 유계인 실수열은 수렴하는 부분수열을 갖는다. 모든 항이 a 이상 b 이하이면 수렴하는 부분수열의 극한도 a 이상 b 이하이다.
requires: [even-and-odd, order-properties-of-reals, archimedean-property, absolute-value, sequence, limit-of-sequence, limit-is-unique, basic-limits, convergent-sequence-is-bounded, limits-preserve-inequalities, limit-of-sum-and-product, subsequence, subsequence-converging-to-limsup]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.3.3절 Theorem 2.3.8 과 그 증명 (p.78)
    checked: original
    note: "출처의 Theorem 2.3.8(p.78)은 유계인 실수열에 수렴하는 부분수열이 있다는 것(이 항목의 (1))이고, 증명은 'Theorem 2.3.4 가 상극한으로 수렴하는 부분수열을 준다'는 한 줄이다. 이 항목도 같은 증명이다. 출처는 이어서 이분법을 쓰는 다른 증명(p.78–79)을 싣고, 모든 수열이 단조인 부분수열을 갖는다는 것으로 증명하는 길을 연습문제 2.3.10 으로 둔다. 이 항목은 둘 다 싣지 않았다. (2)(모든 항이 a 이상 b 이하이면 수렴하는 부분수열의 극한도 그렇다)는 출처에 이 정리의 일부로 없다(검색한 범위). 출처는 3.3절의 증명(p.130–131)에서 a ≤ x_n ≤ b 인 수열에 이 정리를 쓰고, 'a ≤ x_{n_i} ≤ b 이므로 a ≤ x ≤ b'라고 적는다. 이 항목은 그것을 진술에 올리고 limits-preserve-inequalities 의 (3)으로 증명했다. 예시, 반례, 확인 질문은 출처에 없다(검색한 범위). 확인 질문 1 의 '엄격한 부등식은 극한에서 유지되지 않는다'는 출처가 p.62 에서 −1/n 과 1/n 으로 보이는 것과 같은 발상이다."
status: source-checked
added: 2026-11-17
---

:::statement
수열과 유계는 [[sequence]]의 것이고, 수렴과 기호 $\lim$은 [[limit-of-sequence]]과 [[limit-is-unique]]의 것이며, 첨자열과 부분수열은 [[subsequence]]의 것이다. $(x_n)$을 수열이라 하자.

1. (**볼차노–바이어슈트라스 정리**, Bolzano–Weierstrass theorem) $(x_n)$이 유계이면 $(x_n)$은 수렴하는 부분수열을 갖는다. 곧 첨자열 $(p_k)$로서 $(x_{p_k})$가 수렴하는 것이 있다.
2. (극한의 범위) 실수 $a$, $b$에 대하여 모든 자연수 $n$에서 $a \le x_n \le b$라 하자. 그러면 $(x_n)$은 유계이고, $(x_n)$의 수렴하는 부분수열 $(x_{p_k})$는 모두 $a \le \lim_{k \to \infty} x_{p_k} \le b$를 만족한다. 따라서 $(x_n)$에는 $a \le L \le b$인 어떤 실수 $L$로 수렴하는 부분수열이 있다.
:::

:::english
Sequences and boundedness are those of the entry on sequences, convergence and the symbol $\lim$ are those of the entries on the limit of a sequence and on uniqueness of limits, and index sequences and subsequences are those of the entry on subsequences. Let $(x_n)$ be a sequence.

1. (**Bolzano–Weierstrass theorem**) If $(x_n)$ is bounded, then $(x_n)$ has a convergent subsequence. That is, there is an index sequence $(p_k)$ such that $(x_{p_k})$ converges.
2. (Where the limit lies) Let $a$, $b$ be real numbers such that $a \le x_n \le b$ for every natural number $n$. Then $(x_n)$ is bounded, and every convergent subsequence $(x_{p_k})$ of $(x_n)$ satisfies $a \le \lim_{k \to \infty} x_{p_k} \le b$. Hence $(x_n)$ has a subsequence converging to some real number $L$ with $a \le L \le b$.
:::

## 직관

유계인 수열은 수렴하지 않을 수 있지만, 항을 잘 골라 내면 한 수로 모이는 부분수열을 언제나 찾을 수 있다는 것이 이 정리입니다. 상자 안에서 끝없이 움직이는 공을 일정한 간격으로 찍은 사진을 떠올려 봅시다. 공이 한곳에 머물지 않더라도, 사진 가운데 어떤 것들만 골라 차례로 늘어놓으면 공의 위치가 한 점으로 모여 가게 할 수 있습니다. 상자가 유계라는 가정에, 고른 사진들이 부분수열에, 모여 가는 점이 극한에 해당합니다. 비유가 맞지 않는 곳은, 실제 공의 위치는 연속적으로 바뀌지만 수열의 항은 번호마다 아무 값이나 될 수 있다는 점입니다.

이 사이트에서는 증명할 일이 이미 끝나 있습니다. [[subsequence-converging-to-limsup|상극한으로 수렴하는 부분수열]]이 상극한으로 수렴하는 부분수열을 실제로 만들어 주기 때문입니다. 유계라는 가정은 상극한이 있다는 데에서 쓰이고, 빼면 결론이 깨집니다(아래 반례).

(2)는 모든 항이 $a$와 $b$ 사이에 있으면 부분수열의 극한도 그 사이에 있다는 것입니다. 극한은 부등식 "$\le$"를 지키기 때문입니다([[limits-preserve-inequalities|극한과 부등식]]). "$<$"는 지켜지지 않을 수 있습니다(아래 확인 질문).

## 증명

:::idea
(1)은 상극한으로 수렴하는 부분수열이 있다는 정리에서 바로 나온다. (2)는 부분수열의 항도 $a$와 $b$ 사이에 있다는 것과 극한과 부등식에서 나온다.
:::

:::hint
$a \le x_n \le b$이면 $|x_n|$을 $|a|$와 $|b|$ 가운데 큰 것으로 누를 수 있다.
:::

:::proof
"순서 성질 (1)의 (v)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (6)"은 [[absolute-value]]의 번호, "부분수열 (6)"은 [[subsequence]]의 번호이다.

**1의 증명.** $(x_n)$이 유계이므로 [[subsequence-converging-to-limsup]]의 (1)에 의해 첨자열 $(p_k)$가 있어 $(x_{p_k})$가 $(x_n)$의 상극한으로 수렴한다. 이 부분수열이 수렴하는 부분수열이다.

**2의 증명.** $B = \max\{|a|, |b|\}$로 둔다. 절댓값 (10)에 의해 $|a| \le B$이고 $|b| \le B$이다. 자연수 $n$에 대하여, 절댓값 (6)에 의해 $x_n \le b \le |b| \le B$이다. 또 절댓값 (6)에 의해 $-|a| \le a$이고, $|a| \le B$에 순서 성질 (3)의 (iii)을 쓰면 $-B \le -|a|$이므로 $-B \le a \le x_n$이다. 순서 성질 (1)의 (v)로 이으면 $-B \le x_n \le B$이고, 절댓값 (7)에 의해 $|x_n| \le B$이다. 따라서 $(x_n)$은 유계이다.

$(x_{p_k})$가 $(x_n)$의 수렴하는 부분수열이라 하자. 부분수열 (6)(모든 $n$에서 $a \le x_n$이면 모든 $k$에서 $a \le x_{p_k}$, $x_n \le b$도 같다)에 의해 모든 자연수 $k$에서 $a \le x_{p_k} \le b$이다. [[limits-preserve-inequalities|극한과 부등식]]의 (3)에 의해 $a \le \lim_{k \to \infty} x_{p_k} \le b$이다.

마지막 문장은 (1)이 주는 수렴하는 부분수열에 방금 보인 것을 쓴 것이다. $(x_n)$이 유계이므로 (1)에 의해 수렴하는 부분수열 $(x_{p_k})$가 있고, $L = \lim_{k \to \infty} x_{p_k}$로 두면 $a \le L \le b$이다. $\blacksquare$
:::

## 예시와 반례

:::example[두 값 근처를 오가는 수열]
$n$이 짝수이면 $x_n = 2 + n^{-1}$, 홀수이면 $x_n = -n^{-1}$인 수열을 생각합니다([[even-and-odd]]에서 받아들인 사실로 각 항이 하나로 정해집니다). [[order-properties-of-reals]]의 (10)과 (6)의 (ii)에 의해 $0 < n^{-1} \le 1$이므로 짝수 번째 항은 $2$보다 크고 $3$ 이하이며, 홀수 번째 항은 $-1$ 이상이고 $0$보다 작습니다. 따라서 모든 $n$에서 $-1 \le x_n \le 3$이고, (2)에 의해 이 수열은 유계이며 수렴하는 부분수열의 극한은 모두 $-1$ 이상 $3$ 이하입니다.

실제로 두 부분수열을 찾을 수 있습니다. $k$에서의 값이 $2k$인 첨자열로 얻은 부분수열의 $k$번째 항은 $2 + (2k)^{-1}$입니다. $k$번째 항이 $(2k)^{-1}$인 수열은 $n^{-1}$인 수열의 부분수열이므로 [[subsequence]]의 (3)과 [[basic-limits]]의 (2)에 의해 $0$으로 수렴하고, [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)에 의해 $2 + (2k)^{-1}$은 $2$로 수렴합니다. 같은 방법으로 $2k - 1$로 얻은 부분수열의 $k$번째 항 $-(2k - 1)^{-1}$은, $(2k - 1)^{-1}$이 $n^{-1}$의 부분수열이어서 $0$으로 수렴하므로 (5)를 $c = -1$로 써서 $0$으로 수렴합니다. 두 극한 $2$와 $0$은 모두 $-1$ 이상 $3$ 이하입니다. 극한이 다른 두 부분수열이 있으므로 [[subsequence]]의 (3)과 [[limit-is-unique]]에 의해 수열 자체는 발산합니다.

이 정리는 수렴하는 부분수열이 있다는 것만 말하고, 어느 부분수열인지나 극한이 무엇인지는 말하지 않습니다.
:::

:::counterexample[유계가 아닌 수열]
$n$이 짝수이면 $x_n = n$, 홀수이면 $x_n = -n$인 수열에는 수렴하는 부분수열이 없습니다. 모든 $n$에서 $|x_n| = n$입니다. 첨자열 $(p_k)$로 얻은 부분수열이 수렴한다면 [[convergent-sequence-is-bounded|수렴하는 수열은 유계라는 정리]]의 (2)에 의해 모든 $k$에서 $|x_{p_k}| \le B$인 실수 $B$가 있습니다. [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $B < k$인 자연수 $k$가 있고, [[subsequence]]의 (1)에 의해 $|x_{p_k}| = p_k \ge k > B$이므로 모순입니다. 유계라는 가정은 뺄 수 없습니다.
:::

## 확인 질문

:::check[(2)에서 모든 $n$에서 $a < x_n < b$이면, 수렴하는 부분수열의 극한 $L$은 언제나 $a < L < b$인가?]
아닙니다. $x_n = n^{-1}$이면 모든 $n$에서 $0 < x_n < 2$입니다([[order-properties-of-reals]]의 (10), (6)의 (ii)). 그러나 [[subsequence]]의 (3)과 [[basic-limits]]의 (2)에 의해 모든 부분수열이 $0$으로 수렴하고, $0 < 0$은 성립하지 않습니다. (2)가 말하는 것은 $a \le L \le b$까지입니다.
:::

:::check[유계인 수열의 부분수열은 모두 수렴하는가?]
아닙니다. [[basic-limits]]의 (3)의 수열($n$이 짝수이면 $1$, 홀수이면 $-1$)은 유계이고 발산합니다. [[subsequence]]의 (4)에 의해 이 수열은 자기 자신의 부분수열이므로, 발산하는 부분수열이 있습니다. 이 정리는 수렴하는 부분수열이 적어도 하나 있다는 것만 말합니다.
:::
