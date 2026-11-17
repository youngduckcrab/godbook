---
title: 급수와 부분합
title_en: Series and Partial Sums
aliases: [급수, 부분합, 부분합 수열, 급수의 합, 급수의 수렴, 급수의 발산, 급수의 항, series, partial sum, sequence of partial sums, sum of a series, convergent series, divergent series]
kind: definition
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 수열 (x_n) 의 부분합 수열은 s_1 = x_1, s_{n+1} = s_n + x_{n+1} 로 재귀적으로 정한 수열이고, (x_n) 의 급수가 수렴한다는 것은 부분합 수열이 수렴한다는 뜻이며 그 극한을 급수의 합이라 한다. 부분합을 알아보는 법, 이웃한 부분합의 차, 항의 부호·경계·크기 비교·절댓값과 부분합의 관계를 함께 진술한다.
requires: [proof-by-contradiction, mathematical-induction, natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, triangle-inequality, recursion-theorem, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, basic-limits, tail-of-a-sequence, limit-of-sum-and-product]
sources:
  - ref: lebl-basic-analysis
    loc: 2.5.1절 Definition 2.5.1 과 그 뒤 문단 (p.87), Remark 2.5.2 (p.87), Remark 2.5.3 과 Example 2.5.4 (p.88)
    checked: original
    note: "출처의 Definition 2.5.1(p.87)은 수열 {x_n} 에 대해 형식적 대상 Σ_{n=1}^∞ x_n 을 series 라 하고, s_k = Σ_{n=1}^k x_n = x_1 + x_2 + ⋯ + x_k 로 정한 수열 {s_k} 가 수렴하면 급수가 수렴한다고 하며, s_k 를 partial sums 라 부르고, 그때 Σ_{n=1}^∞ x_n = lim s_k 로 쓴다('we cheat a little and treat Σ x_n as a number'). 출처는 유한 합 자체를 정의하지 않는다. 이 항목은 부분합 수열을 recursion-theorem 으로 재귀적으로 정의하고, 급수를 별도의 대상으로 두지 않은 채 '(x_n) 의 급수가 수렴한다'를 부분합 수열이 수렴한다는 말로 정의한다. 출처는 같은 쪽에서 Σ x_n 이 급수 자체와 부분합의 극한이라는 두 뜻으로 쓰이니 문맥으로 구별하라고 적고, Remark 2.5.3(p.88)에서 x_1 + x_2 + x_3 + ⋯ 꼴은 증명에서 실수를 부르는 비형식적 표기라며 쓰지 않는다고 적는다. 이 항목도 그 꼴과 기호 Σ 를 쓰지 않는다. Remark 2.5.2(p.87)는 첨자를 1 이 아닌 수에서 시작하는 급수(0 부터의 rⁿ)를 쓰기도 한다고 적는다. 이 사이트는 첨자를 언제나 1 부터 쓴다. Example 2.5.4(p.88)는 1/2ⁿ 의 급수에서 부분합에 관한 등식을 'follows by induction, which we leave to the reader'라고 귀납에 맡긴 뒤 |1 − s_k| = 1/2^k 으로 수렴을 보인다. 이 항목의 (1)은 이처럼 부분합이 어떤 식과 같음을 귀납으로 확인하는 일을 재귀 정리의 유일성으로 정당화한 것이다. (2)–(6)은 출처가 유한 합의 성질로 증명 없이 쓰는 것을 부분합으로 진술해 증명한 것이다. (2)의 첫 식은 Proposition 2.5.9 의 증명(p.90)이 |Σ_{i=n+1}^{n+1} x_i| = |x_{n+1}| 로 쓰는, 항 하나짜리 합이 그 항이라는 것에, 둘째 식은 Proposition 2.6.2 의 증명(p.101)에서 이웃한 두 항을 묶는 것에 해당한다. (3)은 p.92 의 '항이 0 이상이면 부분합 수열은 단조증가'(Proposition 2.5.13 앞 문단)이고, (4)는 Example 2.5.11(p.90)이 묶음 하나를 아래에서 누르는 계산, (5)는 Proposition 2.5.16 의 증명(p.93)의 식 (2.1), (6)은 Proposition 2.5.15 의 증명(p.92)이 쓰는 'triangle inequality for a finite sum'에 해당한다. 출처는 이것들을 따로 명제로 진술하지 않는다(검색한 범위). 예시 '모든 항이 같은 수열'의 c = 1 인 경우는 출처 Example 2.5.10(p.90)의 r = 1 인 등비급수이다(출처는 |rⁿ| ≥ 1 로 발산을 보인다). 일반 c 와 부분합 nc 의 계산은 출처에 없다(검색한 범위). 예시 'n⁻¹ − (n+2)⁻¹'의 앞뒤 항이 지워지는 발상은 출처의 연습문제 2.5.1(p.97, k 번째 부분합이 k/(k+1) 인 급수의 항을 찾는 것), 2.5.3 d)(p.97, 1/(n(n+1)) 의 급수), 5.5.3 b)(p.224, 1/(n(n+1)) 의 급수, 'The sum telescopes')와 같다. 반례의 수열 (−1)ⁿ(항이 −1, 1, −1, …)은 출처 Example 2.5.10(p.90)의 r = −1 인 급수(첨자 0 부터의 (−1)ⁿ, 항이 1, −1, 1, …)의 항에 −1 을 곱한 것이고, 연습문제 2.5.13 b)(p.98, 짝수 번째 부분합의 극한은 있지만 항이 0 으로 가지 않는 예를 찾는 것)의 답이 될 수 있으며, 연습문제 2.6.11 b)(p.111)도 같은 급수를 쓴다. 확인 질문 1 은 부분합에서 항을 구하는 질문으로 출처 연습문제 2.5.1 과 같은 종류이다. 다른 강의의 유한 합과의 관계를 밝힌 참고 블록은 이 사이트가 덧붙였다."
status: reviewed
review_note: "2026-11-17 독립 검토 2회(전반 1회, 후반과 전반 재확인 1회). 증명의 수학 오류 없음. Σ 와 유한 합 없이 재귀로 정한 부분합으로 증명. 첫째 항이 0 인 경우를 빼먹은 설명 문장과 출처 메모를 고침"
added: 2026-11-17
---

:::statement
수열, 단조증가, 유계, 수렴, 발산과 기호 $\lim_{n \to \infty}$는 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이고, 절댓값은 [[absolute-value]]의 것이다. $(x_n)$을 수열이라 하자.

**부분합 수열.** 자연수 $n$에 대하여 $n + 1$은 자연수이므로 $x_{n+1}$은 실수이다. 따라서 $\mathbb{N} \times \mathbb{R}$의 각 원소 $(n, t)$마다 실수 $t + x_{n+1}$이 식으로 정해지고, [[recursion-theorem|재귀 정리]]의 (1)에 의해 $g(n, t) = t + x_{n+1}$인 함수 $g : \mathbb{N} \times \mathbb{R} \to \mathbb{R}$가 있다. 재귀 정리와 그 (3)에 의해
$$
s_1 = x_1 \quad \text{이고} \quad \text{모든 자연수 } n \text{에서 } s_{n+1} = s_n + x_{n+1}
$$
인 수열 $(s_n)$이 정확히 하나 있다. 이 수열을 $(x_n)$의 **부분합 수열**(sequence of partial sums)이라 하고, $s_n$을 $(x_n)$의 $n$번째 **부분합**(partial sum)이라 한다.

**급수.** $(s_n)$을 $(x_n)$의 부분합 수열이라 하자.

- $(x_n)$의 **급수**(series)가 **수렴한다**(converges)는 것은 정확히 $(s_n)$이 수렴할 때이다. 이때 극한 $\lim_{n \to \infty} s_n$을 $(x_n)$의 **급수의 합**(sum of the series)이라 한다.
- $(x_n)$의 급수가 **발산한다**(diverges)는 것은 정확히 $(s_n)$이 발산할 때이다.
- $x_n$을 $(x_n)$의 급수의 $n$번째 **항**(term)이라 한다.

"$(x_n)$의 급수"라는 말은 이 세 문장처럼 수렴, 발산, 합, 항을 말할 때와, "$(x_n)$의 급수의 부분합(부분합 수열)"이라는 말로 $(x_n)$의 부분합(부분합 수열)을 가리킬 때만 쓴다. "$(x_n)$의 급수"에 대해 말하는 그 밖의 문장(예: "$(x_n)$의 급수는 등비급수이다", "항이 음이 아닌 급수")은 수열 $(x_n)$이 그런 수열이라는 뜻이다. 이 사이트는 급수를 수열 $(x_n)$이나 부분합 수열과 다른 별도의 대상으로 정의하지 않고, 급수를 나타내는 기호를 두지 않는다. 급수의 합은 $\lim_{n \to \infty} s_n$으로 쓰거나 글자로 이름을 붙여 쓴다.

다음이 성립한다. 아래에서 $(y_n)$도 수열이고 $(t_n)$은 $(y_n)$의 부분합 수열이며, $(u_n)$은 $n$번째 항이 $|x_n|$인 수열([[sequence]]의 (1))의 부분합 수열이다. 세 수의 합 $a + b + c$는 $(a + b) + c$를 뜻한다.

1. (부분합을 알아보기) 수열 $(v_n)$이 $v_1 = x_1$이고 모든 자연수 $n$에서 $v_{n+1} = v_n + x_{n+1}$을 만족하면 $(v_n) = (s_n)$이다. 곧 모든 자연수 $n$에서 $v_n = s_n$이다.
2. (이웃한 부분합) 모든 자연수 $n$에서 $s_{n+1} - s_n = x_{n+1}$이고 $s_{n+2} = s_n + x_{n+1} + x_{n+2}$이다.
3. (항이 $0$ 이상인 경우) 모든 자연수 $i$에서 $0 \le x_i$이면 $(s_n)$은 단조증가이고, 모든 자연수 $n$에서 $0 \le s_n$이다.
4. (항의 경계와 부분합의 차) $n < k$인 자연수 $n$, $k$와 실수 $a$, $b$에 대하여 다음이 성립한다. 여기서 정수 $k - n$은 실수로 본다.
   - (i) $n < i \le k$인 모든 자연수 $i$에서 $a \le x_i$이면 $(k - n)a \le s_k - s_n$이다.
   - (ii) $n < i \le k$인 모든 자연수 $i$에서 $x_i \le b$이면 $s_k - s_n \le (k - n)b$이다.
5. (항끼리의 비교) 모든 자연수 $i$에서 $x_i \le y_i$이면 모든 자연수 $n$에서 $s_n \le t_n$이다.
6. (절댓값) 모든 자연수 $n$에서 $|s_n| \le u_n$이다. 또 $n < k$인 모든 자연수 $n$, $k$에서 $|s_k - s_n| \le u_k - u_n$이다.
:::

:::english
Sequences, monotone increasing, boundedness, convergence, divergence and the symbol $\lim_{n \to \infty}$ are those of the entries on sequences, on the limit of a sequence, and on uniqueness of limits, and the absolute value is that of the entry on absolute value. Let $(x_n)$ be a sequence.

**Sequence of partial sums.** For each natural number $n$, the number $n + 1$ is a natural number, so $x_{n+1}$ is a real number. Hence for each element $(n, t)$ of $\mathbb{N} \times \mathbb{R}$ the real number $t + x_{n+1}$ is given by a formula, and by item (1) of the recursion theorem there is a function $g : \mathbb{N} \times \mathbb{R} \to \mathbb{R}$ with $g(n, t) = t + x_{n+1}$. By the recursion theorem and its item (3) there is exactly one sequence $(s_n)$ such that
$$
s_1 = x_1 \quad \text{and} \quad s_{n+1} = s_n + x_{n+1} \text{ for every natural number } n.
$$
This sequence is called the **sequence of partial sums** of $(x_n)$, and $s_n$ is called the $n$th **partial sum** of $(x_n)$.

**Series.** Let $(s_n)$ be the sequence of partial sums of $(x_n)$.

- The **series** of $(x_n)$ **converges** exactly when $(s_n)$ converges. In that case the limit $\lim_{n \to \infty} s_n$ is called the **sum of the series** of $(x_n)$.
- The series of $(x_n)$ **diverges** exactly when $(s_n)$ diverges.
- $x_n$ is called the $n$th **term** of the series of $(x_n)$.

The phrase "the series of $(x_n)$" is used only, as in these three sentences, to speak of convergence, divergence, the sum and the terms, and in "the partial sums (sequence of partial sums) of the series of $(x_n)$", which means the partial sums (sequence of partial sums) of $(x_n)$. Any other sentence about "the series of $(x_n)$" (for example, "the series of $(x_n)$ is a geometric series", "a series with nonnegative terms") means that the sequence $(x_n)$ is such a sequence. This site does not define a series as a separate object, different from the sequence $(x_n)$ or its sequence of partial sums, and assigns no symbol to a series. The sum of a series is written $\lim_{n \to \infty} s_n$ or given a letter as a name.

The following hold. Below, $(y_n)$ is also a sequence and $(t_n)$ is the sequence of partial sums of $(y_n)$, and $(u_n)$ is the sequence of partial sums of the sequence whose $n$th term is $|x_n|$ (item (1) of the entry on sequences). A sum of three numbers $a + b + c$ means $(a + b) + c$.

1. (Recognizing partial sums) If a sequence $(v_n)$ satisfies $v_1 = x_1$ and $v_{n+1} = v_n + x_{n+1}$ for every natural number $n$, then $(v_n) = (s_n)$; that is, $v_n = s_n$ for every natural number $n$.
2. (Neighbouring partial sums) For every natural number $n$, $s_{n+1} - s_n = x_{n+1}$ and $s_{n+2} = s_n + x_{n+1} + x_{n+2}$.
3. (Nonnegative terms) If $0 \le x_i$ for every natural number $i$, then $(s_n)$ is monotone increasing and $0 \le s_n$ for every natural number $n$.
4. (Bounds on terms and differences of partial sums) For natural numbers $n < k$ and real numbers $a$, $b$ the following hold, where the integer $k - n$ is regarded as a real number.
   - (i) If $a \le x_i$ for every natural number $i$ with $n < i \le k$, then $(k - n)a \le s_k - s_n$.
   - (ii) If $x_i \le b$ for every natural number $i$ with $n < i \le k$, then $s_k - s_n \le (k - n)b$.
5. (Termwise comparison) If $x_i \le y_i$ for every natural number $i$, then $s_n \le t_n$ for every natural number $n$.
6. (Absolute values) $|s_n| \le u_n$ for every natural number $n$. Moreover, $|s_k - s_n| \le u_k - u_n$ for all natural numbers $n < k$.
:::

## 직관

통장에 날마다 돈을 넣거나 뺀다고 해 봅시다. $n$째 날에 넣은 돈을 $x_n$(뺀 날은 음수)이라 하면, 첫날의 잔고는 $x_1$이고 다음 날의 잔고는 "오늘 잔고 + 내일 넣은 돈"입니다. 이 잔고가 부분합 $s_n$이고, 정의의 $s_1 = x_1$, $s_{n+1} = s_n + x_{n+1}$이 그대로 이 규칙입니다. 급수가 수렴한다는 것은 날이 갈수록 잔고가 어떤 금액으로 다가간다는 것이고, 그 금액이 급수의 합입니다.

비유가 맞지 않는 곳은 "끝없이 넣은 뒤의 잔고"입니다. 어느 날의 잔고든 유한한 날까지의 값일 뿐이고, 무한히 많은 수를 실제로 더하는 일은 없습니다. 급수의 합은 더한 결과가 아니라 부분합 수열의 극한이며, 극한이 없으면 합도 없습니다. 그래서 이 사이트는 "모든 항을 더한 것"처럼 보이는 표기를 쓰지 않고, 급수에 관한 모든 말을 부분합 수열에 관한 말로 정의합니다.

부분합을 "처음 $n$개의 항을 더한 것"으로 정의하려면 임의의 개수의 실수를 더하는 법이 먼저 있어야 하는데, 이 강의에는 그것이 없습니다. 대신 [[recursion-theorem|재귀 정리]]로 부분합 수열을 한 번에 정하고, (1)로 "이 식이 부분합이다"를 처음 값과 한 걸음씩의 규칙만 확인해 알아봅니다. (2)–(6)은 부분합의 차, 항의 부호·경계·크기 비교·절댓값과 부분합의 관계 같은 기본 계산을 모아 증명한 것입니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이다. "순서 성질 (2)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이고, "절댓값 (6)"은 [[absolute-value]]의 번호이다. [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술에 의해 자연수는 양의 정수이다. 정수의 합과 차는 정수이고([[even-and-odd]]), 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)을 쓴다. 순서 성질 (10)에 의해 이것들을 실수의 부등식으로 써도 되고, (K7)에 의해 정수끼리의 계산은 실수로서의 계산과 같다. 실수 $a$, $b$, $c$에 대하여 다음 계산을 쓴다.

- (ㄱ) $(a + b) - a = b$이다. (K1), (K2), (K8)의 (ii), (K4)에 의해 $(a + b) + (-a) = (b + a) + (-a) = b + (a + (-a)) = b + 0 = b$이다.
- (ㄴ) $(a - b) + (b - c) = a - c$이다. (K2)를 두 번 쓰면 $(a + (-b)) + (b + (-c)) = a + (((-b) + b) + (-c))$이고, (K1)과 (K8)의 (ii)에 의해 $(-b) + b = 0$이며, (K1), (K4)에 의해 $0 + (-c) = -c$이다.
- (ㄷ) 자연수 $n$에 대하여 $n + 1$은 자연수이다. $n + 1$은 정수이고 (L3)에 의해 $n < n + 1$이므로, $0 < n$과 (Z6)에 의해 $0 < n + 1$이기 때문이다. 같은 이유로 $n + 1$ 이상인 정수 $j$는 $0 < n < n + 1 \le j$와 (Z6)에 의해 자연수이다.

**진술 첫 문단의 확인.** (ㄷ)에 의해 $n + 1$은 자연수이므로 $x_{n+1}$은 실수이고, 덧셈은 $\mathbb{R} \times \mathbb{R}$에서 $\mathbb{R}$로의 함수이므로 $t + x_{n+1}$은 실수이다. [[recursion-theorem|재귀 정리]]의 (1)을 $A = \mathbb{N} \times \mathbb{R}$, $B = \mathbb{R}$와 $(n, t)$마다 정해진 $t + x_{n+1}$에 쓰면 $g$가 함수이다. 재귀 정리를 집합 $\mathbb{R}$, 처음 값 $x_1$, 함수 $g$에 쓰면 $s(1) = x_1$이고 모든 자연수 $n$에서 $s(n+1) = g(n, s(n)) = s(n) + x_{n+1}$인 함수 $s : \mathbb{N} \to \mathbb{R}$가 정확히 하나 있고, 재귀 정리의 (3)에 의해 이것은 수열이다.

**1의 증명.** $(v_n)$은 함수 $v : \mathbb{N} \to \mathbb{R}$이고 $v(1) = x_1$이며, 모든 자연수 $n$에서 $v(n+1) = v(n) + x_{n+1} = g(n, v(n))$이다. 재귀 정리의 유일성에 의해 $v = s$이고, [[sequence]]의 수열의 같음에 의해 모든 자연수 $n$에서 $v_n = s_n$이다.

**2의 증명.** 부분합 수열의 정의와 (ㄱ)에 의해 $s_{n+1} - s_n = (s_n + x_{n+1}) - s_n = x_{n+1}$이다. 또 (ㄷ)에 의해 $n + 1$은 자연수이므로 정의를 $n + 1$에 쓰면 $s_{(n+1)+1} = s_{n+1} + x_{(n+1)+1}$이고, 정수의 계산으로 $(n + 1) + 1 = n + 2$이다. 따라서 $s_{n+2} = s_{n+1} + x_{n+2} = (s_n + x_{n+1}) + x_{n+2} = s_n + x_{n+1} + x_{n+2}$이다.

**3의 증명.** 자연수 $n$에서 (2)에 의해 $s_{n+1} - s_n = x_{n+1}$이고, 가정에 의해 $0 \le x_{n+1}$이므로 순서 성질 (3)의 (i)에 의해 $s_n \le s_{n+1}$이다. 따라서 $(s_n)$은 단조증가이다. 자연수 $n$은 (Z1)에 의해 $1 \le n$이므로 [[sequence]]의 (4)에 의해 $s_1 \le s_n$이고, $0 \le x_1 = s_1$이므로 순서 성질 (1)의 (v)에 의해 $0 \le s_n$이다.

**4의 증명.** $n < k$이므로 (Z1)에 의해 $n + 1 \le k$이다. 아래 두 귀납법은 시작점이 $n + 1$인 [[mathematical-induction|수학적 귀납법]]이고, (ㄷ)에 의해 $n + 1$ 이상인 정수 $j$는 자연수이므로 $s_j$와 $x_{j+1}$은 뜻을 갖는다.

(i) $n + 1$ 이상인 정수 $j$에 대한 명제 $P_j$를 "$j \le k$이면 $(j - n)a \le s_j - s_n$"으로 둔다.

- 기초 단계: $n + 1 \le k$라 하자. (L3)에 의해 $n < n + 1$이므로 $i = n + 1$은 $n < i \le k$를 만족하고, 가정에 의해 $a \le x_{n+1}$이다. (2)에 의해 $x_{n+1} = s_{n+1} - s_n$이다. 정수의 계산으로 $(n + 1) - n = 1$이고 (K1), (K4)에 의해 $1 \cdot a = a$이므로 $((n + 1) - n)a \le s_{n+1} - s_n$이다.
- 귀납 단계: $j \ge n + 1$인 정수 $j$에 대하여 $P_j$를 가정하고 $j + 1 \le k$라 하자. (L3)에 의해 $j < j + 1$이므로 (Z6)에 의해 $j \le k$이고, $P_j$에 의해 $(j - n)a \le s_j - s_n$이다. 또 $n < n + 1 \le j < j + 1$과 (Z6)에 의해 $n < j + 1$이고 $j + 1 \le k$이므로, 가정에 의해 $a \le x_{j+1}$이며 (2)에 의해 $x_{j+1} = s_{j+1} - s_j$이다. 두 부등식을 순서 성질 (2)의 (iii)으로 더하면
$$
(j - n)a + a \le (s_j - s_n) + (s_{j+1} - s_j)
$$
이다. 왼쪽은 (K1), (K4)와 (K12)의 (i)에 의해 $((j - n) + 1)a$이고, 정수의 계산으로 $(j - n) + 1 = (j + 1) - n$이다. 오른쪽은 (K1)과 (ㄴ)에 의해 $(s_{j+1} - s_j) + (s_j - s_n) = s_{j+1} - s_n$이다. 따라서 $P_{j+1}$이 참이다.

$n + 1 \le k$이고 $k \le k$이므로 $P_k$에서 $(k - n)a \le s_k - s_n$이다.

(ii) $n + 1$ 이상인 정수 $j$에 대한 명제 $Q_j$를 "$j \le k$이면 $s_j - s_n \le (j - n)b$"로 둔다.

- 기초 단계: $n + 1 \le k$라 하자. (L3)에 의해 $i = n + 1$은 $n < i \le k$를 만족하므로 가정에 의해 $x_{n+1} \le b$이고, (2)와 $((n + 1) - n)b = 1 \cdot b = b$에 의해 $s_{n+1} - s_n \le ((n + 1) - n)b$이다.
- 귀납 단계: $j \ge n + 1$인 정수 $j$에 대하여 $Q_j$를 가정하고 $j + 1 \le k$라 하자. (L3)과 (Z6)에 의해 $j \le k$이고 $n < j + 1$이므로, $Q_j$에 의해 $s_j - s_n \le (j - n)b$이고, 가정과 (2)에 의해 $s_{j+1} - s_j = x_{j+1} \le b$이다. 순서 성질 (2)의 (iii)으로 더하면 $(s_j - s_n) + (s_{j+1} - s_j) \le (j - n)b + b$이다. (K1)과 (ㄴ)에 의해 왼쪽은 $s_{j+1} - s_n$이고, (K1), (K4)와 (K12)의 (i), 정수의 계산에 의해 오른쪽은 $((j + 1) - n)b$이다. 따라서 $Q_{j+1}$이 참이다.

$n + 1 \le k$이고 $k \le k$이므로 $Q_k$에서 $s_k - s_n \le (k - n)b$이다.

**5의 증명.** 자연수 $n$에 대한 명제 "$s_n \le t_n$"을 귀납법으로 보인다. 기초 단계는 $s_1 = x_1 \le y_1 = t_1$이다. $s_n \le t_n$이면, 가정에 의해 $x_{n+1} \le y_{n+1}$이므로 순서 성질 (2)의 (iii)에 의해 $s_{n+1} = s_n + x_{n+1} \le t_n + y_{n+1} = t_{n+1}$이다.

**6의 증명.** $(u_n)$의 정의에 의해 $u_1 = |x_1|$이고 모든 자연수 $n$에서 $u_{n+1} = u_n + |x_{n+1}|$이다.

첫째 문장은 $n$에 대한 귀납법으로 보인다. 기초 단계는 $|s_1| = |x_1| = u_1$이다. $|s_n| \le u_n$이면 [[triangle-inequality|삼각부등식]]의 (1)에 의해 $|s_{n+1}| = |s_n + x_{n+1}| \le |s_n| + |x_{n+1}|$이고, 순서 성질 (2)의 (i)에 의해 $|s_n| + |x_{n+1}| \le u_n + |x_{n+1}| = u_{n+1}$이므로, 순서 성질 (1)의 (v)에 의해 $|s_{n+1}| \le u_{n+1}$이다.

둘째 문장. 자연수 $n$을 잡고, $n + 1$ 이상인 정수 $j$에 대한 명제 "$|s_j - s_n| \le u_j - u_n$"을 시작점이 $n + 1$인 귀납법으로 보인다((ㄷ)에 의해 $j$는 자연수이다).

- 기초 단계: (2)를 $(x_n)$과 $n$번째 항이 $|x_n|$인 수열에 쓰면 $s_{n+1} - s_n = x_{n+1}$이고 $u_{n+1} - u_n = |x_{n+1}|$이므로 $|s_{n+1} - s_n| = u_{n+1} - u_n$이다.
- 귀납 단계: $j \ge n + 1$이고 $|s_j - s_n| \le u_j - u_n$이라 하자. (K1)과 (ㄴ), (2)에 의해 $s_{j+1} - s_n = (s_j - s_n) + (s_{j+1} - s_j) = (s_j - s_n) + x_{j+1}$이므로, 삼각부등식 (1)에 의해 $|s_{j+1} - s_n| \le |s_j - s_n| + |x_{j+1}|$이다. 귀납 가정과 순서 성질 (2)의 (i)에 의해 이것은 $(u_j - u_n) + |x_{j+1}|$ 이하이고, (2)에 의해 $|x_{j+1}| = u_{j+1} - u_j$이므로 (K1)과 (ㄴ)에 의해 $(u_j - u_n) + (u_{j+1} - u_j) = u_{j+1} - u_n$이다. 순서 성질 (1)의 (v)에 의해 $|s_{j+1} - s_n| \le u_{j+1} - u_n$이다.

$n < k$이면 (Z1)에 의해 $k \ge n + 1$이므로 $|s_k - s_n| \le u_k - u_n$이다. $\blacksquare$
:::

:::remark[기호와 다른 강의의 유한 합]
다른 책에서는 급수와 그 합을 그리스 문자 Σ(시그마)를 쓴 기호로 나타내는 경우가 많고, 같은 기호가 급수 자체와 부분합의 극한이라는 두 가지를 함께 가리킵니다. 이 사이트는 그 기호도, 항들을 줄임표로 이어 더하는 꼴도 쓰지 않습니다. 급수에 관한 말은 모두 위의 세 문장으로 부분합 수열에 관한 말로 바꾸어 씁니다.

선형대수 강의에서는 벡터의 유한 합을 정의했고, 실수를 벡터로 보면 실수의 유한 합도 그 정의로 얻습니다. 이 항목의 부분합은 그것과 따로 재귀 정리로 정의한 것이며, 이 강의는 두 값이 같다는 사실을 쓰지 않습니다.
:::

## 예시와 반례

:::example[모든 항이 같은 수열]
실수 $c$에 대하여 모든 항이 $c$인 수열 $(x_n)$의 급수를 봅니다. $n$번째 항이 $nc$인 수열 $(v_n)$([[sequence]]의 (1))은 (K1), (K4)에 의해 $v_1 = 1 \cdot c = c = x_1$이고, (K7), (K12)의 (i), (K4)에 의해 $v_{n+1} = (n + 1)c = nc + 1 \cdot c = v_n + x_{n+1}$입니다. 이 항목의 (1)에 의해 부분합은 $s_n = nc$입니다.

$c = 0$이면 (K9)에 의해 모든 $n$에서 $s_n = 0$이므로 [[basic-limits]]의 (1)에 의해 급수는 수렴하고 합은 $0$입니다. $c \ne 0$이면 급수는 발산합니다. $(s_n)$이 어떤 $L$로 수렴한다고 하면, [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)에 의해 $n$번째 항이 $c^{-1}(nc)$인 수열은 $c^{-1}L$로 수렴하는데, (K1), (K2), (K8)의 (iii), (K4)에 의해 $c^{-1}(nc) = (c^{-1}c)n = n$이므로 $n$번째 항이 $n$인 수열이 수렴하게 되어 [[basic-limits]]의 (4)에 어긋나기 때문입니다.
:::

:::example[$n$번째 항이 $n^{-1} - (n+2)^{-1}$인 수열]
자연수 $m$에 대하여 $b_m = m^{-1}$로 쓰고, $x_n = b_n - b_{n+2}$, $A = 1 + b_2$, $v_n = A - (b_{n+1} + b_{n+2})$로 둡니다. $1 \cdot 1 = 1$이므로 (K8)의 (iii)에 의해 $b_1 = 1$이고, (K1), (K2), (K12)의 (iv), (K8)의 (ii)로 정리하면
$$
v_1 = (1 + b_2) - (b_2 + b_3) = 1 - b_3 = b_1 - b_3 = x_1
$$
입니다. 같은 계산 법칙으로
$$
v_n + x_{n+1} = A - (b_{n+1} + b_{n+2}) + (b_{n+1} - b_{n+3}) = A - (b_{n+2} + b_{n+3}) = v_{n+1}
$$
이므로, 이 항목의 (1)에 의해 부분합은 $s_n = v_n$입니다. 처음 세 부분합은 $s_1 = 1 - 3^{-1}$, $s_2 = s_1 + (2^{-1} - 4^{-1})$, $s_3 = s_2 + (3^{-1} - 5^{-1})$이고, $s_3 = 1 + 2^{-1} - 4^{-1} - 5^{-1} = A - (b_4 + b_5)$로 식과 맞습니다.

[[basic-limits]]의 (2)에 의해 $(b_n)$은 $0$으로 수렴하고, [[tail-of-a-sequence|수열의 꼬리]]의 (1)에 의해 그 $1$-꼬리 $(b_{n+1})$과 $2$-꼬리 $(b_{n+2})$도 $0$으로 수렴합니다. [[limit-of-sum-and-product|극한의 사칙연산]]의 (1)에 의해 $(b_{n+1} + b_{n+2})$는 $0$으로 수렴하고, (5)를 $c = -1$과 상수 $A$에 차례로 쓰면((K9)) $(s_n)$은 $A - 0 = A$로 수렴합니다. 따라서 급수는 수렴하고 합은 $1 + 2^{-1}$입니다.
:::

:::counterexample[부분합 수열이 유계여도 급수는 발산할 수 있다]
$x_n = (-1)^n$인 수열([[power-of-a-real-number|실수의 거듭제곱]])의 급수를 봅니다. [[even-and-odd]]에서 받아들인 대로 모든 자연수는 짝수이거나 홀수이고 둘 다는 아니므로, $n$이 홀수이면 $v_n = -1$, 짝수이면 $v_n = 0$으로 수열 $(v_n)$을 정할 수 있습니다([[sequence]]의 (1)). 거듭제곱의 (1)에 의해 $v_1 = -1 = (-1)^1 = x_1$입니다. $n$이 홀수이면 $n = 2m + 1$에서 $n + 1 = 2(m + 1)$이 짝수이므로 거듭제곱의 (5)에 의해 $v_n + x_{n+1} = -1 + 1 = 0 = v_{n+1}$이고, $n$이 짝수이면 $n = 2m$에서 $n + 1 = 2m + 1$이 홀수이므로 $v_n + x_{n+1} = 0 + (-1) = -1 = v_{n+1}$입니다. 이 항목의 (1)에 의해 부분합은 $s_n = v_n$이고, 모든 $n$에서 $|s_n| \le 1$이므로 $(s_n)$은 유계입니다.

그러나 급수는 발산합니다. [[basic-limits]]의 (3)의 수열 $(a_n)$($n$이 짝수이면 $1$, 홀수이면 $-1$)은 모든 $n$에서 $a_n = 2s_n + 1$입니다($2 \cdot 0 + 1 = 1$, $2 \cdot (-1) + 1 = -1$). $(s_n)$이 수렴한다면 [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)를 두 번 써서 $(a_n)$도 수렴하게 되어 [[basic-limits]]의 (3)에 어긋납니다. 부분합 수열이 유계라는 것만으로는 급수가 수렴한다고 할 수 없습니다.
:::

## 확인 질문

:::check[모든 자연수 $n$에서 부분합이 $s_n = 1$인 수열 $(x_n)$은 무엇인가?]
$x_1 = 1$이고 $n \ge 2$에서 $x_n = 0$인 수열입니다. 부분합 수열의 정의에 의해 $x_1 = s_1 = 1$이고, 이 항목의 (2)에 의해 모든 자연수 $n$에서 $x_{n+1} = s_{n+1} - s_n = 1 - 1 = 0$입니다. $n \ge 2$인 자연수는 $n = (n - 1) + 1$이고 $n - 1$이 자연수이므로 $x_n = 0$입니다.
:::

:::check[부분합 수열이 단조증가이면 모든 항이 $0$ 이상인가?]
그렇지 않습니다. 단조증가이면 이 항목의 (2)에 의해 모든 $n$에서 $x_{n+1} = s_{n+1} - s_n \ge 0$이므로 둘째 항부터는 $0$ 이상이지만, 첫째 항은 그렇지 않을 수 있습니다. 예컨대 $x_1 = -1$이고 $n \ge 2$에서 $x_n = 0$이면, 모든 항이 $-1$인 수열 $(v_n)$이 $v_1 = x_1$, $v_{n+1} = -1 = -1 + 0 = v_n + x_{n+1}$을 만족하므로 (1)에 의해 $s_n = -1$이고, 상수 수열은 단조증가입니다. 그런데 $x_1 = -1 < 0$입니다.
:::
