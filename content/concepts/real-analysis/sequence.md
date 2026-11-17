---
title: 수열
title_en: Sequence
aliases: [실수열, 수열의 항, 상수 수열, 유계인 수열, 단조수열, 단조증가, 단조감소, sequence, sequence of real numbers, term, constant sequence, bounded sequence, monotone sequence, monotone increasing, monotone decreasing]
kind: definition
field: real-analysis
msc: ["40A05", "26A03"]
level: undergrad
summary: 수열은 자연수 전체에서 실수로의 함수이고 n 에서의 값을 x_n 으로 쓴다. 수열과 그 값의 집합을 구별하고, 위로·아래로 유계, 유계, 단조증가, 단조감소를 정의한다. 유계인 것은 정확히 위로도 아래로도 유계일 때이고, 단조증가이면 n ≤ m 일 때 x_n ≤ x_m 이다.
requires: [cartesian-product, function, mathematical-induction, natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, real-order-axioms, order-properties-of-reals, upper-bound-and-supremum, archimedean-property, absolute-value]
sources:
  - ref: lebl-basic-analysis
    loc: 2.1절 Definition 2.1.1 과 그 뒤 문단 (p.51), Definition 2.1.9 (p.55), Theorem 2.1.10 의 증명과 그 뒤 문단 (p.55–56)
    checked: original
    note: "출처의 Definition 2.1.1(p.51)은 수열을 함수 x : ℕ → ℝ 로 정의하고 x(n) 대신 x_n 을, 수열 전체를 {x_n}_{n=1}^∞ 으로 쓴다. 출처의 각주는 (x_n)_{n=1}^∞ 으로 쓰는 책도 있다고 적는다. 이 항목은 집합 기호와 겹치지 않도록 (x_n) 을 쓴다. 출처는 수열이 유계인 것을 '바탕의 함수가 유계', 곧 모든 n 에서 |x_n| ≤ B 인 B ∈ ℝ 가 있는 것으로 정의하고, 'In other words' 로 집합 {x_n : n ∈ ℕ} 이 유계인 것과 같다고 한 뒤 위로 유계와 아래로 유계를 '비슷하게 정의한다'고만 적는다. 이 항목은 위로 유계와 아래로 유계를 따로 적고, 값의 집합과의 관계 (2)와 '유계인 것은 정확히 위로도 아래로도 유계일 때' (3)을 증명한다. 출처는 수열을 n 의 식으로 주는 일이 많다고 적고, 그런 식이 함수를 정한다는 것은 따로 말하지 않는다. (1)은 그것을 함수의 정의로 보인 것이다. 단조증가·단조감소·단조의 정의는 출처의 Definition 2.1.9(p.55)와 같다. (4)는 출처가 Theorem 2.1.10 의 증명(p.55)에서 '단조증가이므로 n ≥ M 인 모든 n 에서 x_n ≥ x_M 임을 (귀납으로) 쉽게 볼 수 있다'고 넘기는 것을 진술로 올려 증명한 것이다. 선형대수·정수론 입문의 '열'과 구별하는 문장은 이 사이트가 덧붙였다. 예시 '번갈아 바뀌는 수열과 그 값의 집합'의 첫 수열은 출처 p.51 의 수열 {(−1)ⁿ}(값의 집합이 {−1, 1})과 같은 수열이며, 이 사이트에 실수의 거듭제곱이 없으므로 홀짝으로 정의했다. 같은 값의 집합을 갖는 둘째 수열을 함께 드는 것은 출처에 없다(검색한 범위). 출처는 p.55 에서 {1/n} 이 단조감소라고 하며, 예시 '1 − 1/n'은 그것과 같은 발상이다. 반례 '−n'은 출처 p.51 의 수열 {n}(유계가 아니다, why?)과 같은 발상이다. 확인 질문 1 은 출처 p.55 의 '상수 수열 {1} 은 단조증가이자 단조감소'와 같은 내용이고, 확인 질문 2 는 출처 p.56 의 '단조증가 수열은 x_1 이 하계이므로 아래로 유계'와 같은 내용이다. 예시의 '(a_n) 은 단조가 아니다'와 확인 질문 2 의 '{n} 은 단조증가'는 출처 p.55 의 예(Definition 2.1.9 바로 뒤)이고, 확인 질문 2 의 '{n} 은 위로 유계가 아니다'는 p.51 의 예와 같다. 예시 '1 − 1/n'은 출처의 연습문제 2.1.10(p.59, {(n+1)/n} 이 단조이고 유계임을 보여라)과도 같은 발상이다."
status: reviewed
review_note: "2026-11-17 독립 검토 2회(전반 1회, 후반과 전반 재확인 1회). 수학 오류 없음. 출처 메모 보완, 수열 (1)의 전제를 좁힘, 근거 인용 보완"
added: 2026-11-17
---

:::statement
**수열.** **수열**(sequence of real numbers)은 [[function|함수]] $x : \mathbb{N} \to \mathbb{R}$이다. 자연수 $n$에서의 값 $x(n)$을 $x_n$으로 쓰고 수열의 $n$번째 **항**(term)이라 하며, 수열 $x$를 $(x_n)$으로 나타낸다. 선형대수와 정수론 입문에서 쓴 "열"(정수론 입문에서는 유한수열이라고도 불렀다)은 정의역이 $\{1, \dots, n\}$인 함수였고, 이 강의의 수열은 정의역이 $\mathbb{N}$ 전체인 함수이다. 두 수열 $(x_n)$, $(y_n)$은 정의역이 모두 $\mathbb{N}$이므로, [[function]]의 함수의 같음에 의해 $(x_n) = (y_n)$인 것은 정확히 모든 자연수 $n$에서 $x_n = y_n$일 때이다.

수열 $(x_n)$의 **값의 집합**은 $\{x_n : n \in \mathbb{N}\}$, 곧 함수 $x$의 치역이다. 수열은 순서쌍 $(n, x_n)$의 집합이고 값의 집합은 실수를 모은 집합이다. 이 사이트는 둘을 구별해 쓴다(같은 값의 집합을 갖는 서로 다른 수열이 있다. 아래 예시).

**값으로 정한 수열.** 각 자연수 $n$마다 실수 $r_n$이 하나씩 정해져 있으면(예: $r_n = n^{-1}$), 아래 (1)에 의해 집합 $\{(n, r_n) : n \in \mathbb{N}\}$은 수열이고 그 $n$번째 항은 $r_n$이다. 이 수열을 "$n$번째 항이 $r_n$인 수열"이라 부른다. 여기서 "정해져 있다"는 $r_n$이 $n$에 대한 식이나 이미 정해진 대상으로 주어진다는 뜻이다. 각 $n$마다 어떤 조건을 만족하는 수 가운데 하나를 고르는 것은 이 진술에 들어가지 않는다. 그래서 고르는 방식으로 만드는 수열과 재귀로 정하는 수열은 (1)로 정당화되지 않는다. 실수 $c$에 대하여 모든 항이 $c$인 수열을 **상수 수열**(constant sequence)이라 한다.

**유계.** 절댓값은 [[absolute-value]]의 것이다. 수열 $(x_n)$이

- **위로 유계**(bounded above)인 것은 정확히 어떤 실수 $B$가 있어 모든 자연수 $n$에서 $x_n \le B$일 때이고,
- **아래로 유계**(bounded below)인 것은 정확히 어떤 실수 $B$가 있어 모든 자연수 $n$에서 $B \le x_n$일 때이고,
- **유계**(bounded)인 것은 정확히 어떤 실수 $B$가 있어 모든 자연수 $n$에서 $|x_n| \le B$일 때이다.

**단조.** 수열 $(x_n)$이 **단조증가**(monotone increasing)인 것은 정확히 모든 자연수 $n$에서 $x_n \le x_{n+1}$일 때이고, **단조감소**(monotone decreasing)인 것은 정확히 모든 자연수 $n$에서 $x_{n+1} \le x_n$일 때이다. $(x_n)$이 **단조**(monotone)인 것은 정확히 단조증가이거나 단조감소일 때이다.

다음이 성립한다. 아래에서 $(x_n)$은 수열이고 $E = \{x_n : n \in \mathbb{N}\}$은 그 값의 집합이다.

1. (값으로 정한 수열) 각 자연수 $n$마다 실수 $r_n$이 위의 뜻으로 하나씩 정해져 있으면, 집합 $\{(n, r_n) : n \in \mathbb{N}\}$은 $\mathbb{N}$에서 $\mathbb{R}$로의 함수이고 $n$에서의 값은 $r_n$이다.
2. (값의 집합과의 관계) $x_1 \in E$이므로 $E$는 공집합이 아니다. 실수 $B$가 $E$의 상계([[upper-bound-and-supremum]])인 것은 정확히 모든 자연수 $n$에서 $x_n \le B$일 때이고, $E$의 하계인 것은 정확히 모든 자연수 $n$에서 $B \le x_n$일 때이다. 따라서 $(x_n)$이 위로 유계인 것은 정확히 $E$가 그 항목의 뜻으로 위로 유계일 때이고, $(x_n)$이 아래로 유계인 것은 정확히 $E$가 그 항목의 뜻으로 아래로 유계일 때이다.
3. (유계) $(x_n)$이 유계인 것은 정확히 $(x_n)$이 위로 유계이고 아래로 유계일 때이다. 따라서 (2)에 의해 $(x_n)$이 유계인 것은 정확히 $E$가 [[upper-bound-and-supremum]]의 뜻으로 유계일 때이다.
4. (단조와 떨어진 두 항) $(x_n)$이 단조증가이면 $n \le m$인 모든 자연수 $n$, $m$에 대하여 $x_n \le x_m$이다. $(x_n)$이 단조감소이면 $n \le m$인 모든 자연수 $n$, $m$에 대하여 $x_m \le x_n$이다.
:::

:::english
**Sequences.** A **sequence** (of real numbers) is a function $x : \mathbb{N} \to \mathbb{R}$. The value $x(n)$ at a natural number $n$ is written $x_n$ and called the $n$th **term** of the sequence, and the sequence $x$ is denoted $(x_n)$. The "lists" used in the linear algebra and number theory courses (the number theory course also called them finite sequences) were functions with domain $\{1, \dots, n\}$; a sequence in this course is a function whose domain is all of $\mathbb{N}$. Since two sequences $(x_n)$ and $(y_n)$ both have domain $\mathbb{N}$, by equality of functions $(x_n) = (y_n)$ exactly when $x_n = y_n$ for every natural number $n$.

The **set of values** of a sequence $(x_n)$ is $\{x_n : n \in \mathbb{N}\}$, that is, the range of the function $x$. A sequence is a set of ordered pairs $(n, x_n)$, while its set of values is a set collecting real numbers. This site keeps the two apart (different sequences can have the same set of values; see the example below).

**Sequences given by values.** If a real number $r_n$ is specified for each natural number $n$ (for example $r_n = n^{-1}$), then by (1) below the set $\{(n, r_n) : n \in \mathbb{N}\}$ is a sequence whose $n$th term is $r_n$. We call it "the sequence whose $n$th term is $r_n$". Here "specified" means that $r_n$ is given by a formula in $n$ or by objects already defined. Choosing, for each $n$, one of the numbers satisfying some condition is not covered by this statement. Hence sequences made by such choices and sequences defined recursively are not justified by (1). For a real number $c$, the sequence all of whose terms equal $c$ is called the **constant sequence**.

**Boundedness.** The absolute value is the one in the entry on absolute value. A sequence $(x_n)$ is

- **bounded above** exactly when there is a real number $B$ with $x_n \le B$ for every natural number $n$,
- **bounded below** exactly when there is a real number $B$ with $B \le x_n$ for every natural number $n$,
- **bounded** exactly when there is a real number $B$ with $|x_n| \le B$ for every natural number $n$.

**Monotonicity.** A sequence $(x_n)$ is **monotone increasing** exactly when $x_n \le x_{n+1}$ for every natural number $n$, and **monotone decreasing** exactly when $x_{n+1} \le x_n$ for every natural number $n$. The sequence $(x_n)$ is **monotone** exactly when it is monotone increasing or monotone decreasing.

The following hold, where $(x_n)$ is a sequence and $E = \{x_n : n \in \mathbb{N}\}$ is its set of values.

1. (Sequences given by values) If a real number $r_n$ is specified for each natural number $n$ in the above sense, then the set $\{(n, r_n) : n \in \mathbb{N}\}$ is a function from $\mathbb{N}$ to $\mathbb{R}$ whose value at $n$ is $r_n$.
2. (Relation to the set of values) Since $x_1 \in E$, the set $E$ is nonempty. A real number $B$ is an upper bound of $E$ (in the sense of the entry on upper bounds and suprema) exactly when $x_n \le B$ for every natural number $n$, and $B$ is a lower bound of $E$ exactly when $B \le x_n$ for every natural number $n$. Hence $(x_n)$ is bounded above exactly when $E$ is bounded above in the sense of that entry, and $(x_n)$ is bounded below exactly when $E$ is bounded below in that sense.
3. (Boundedness) $(x_n)$ is bounded exactly when $(x_n)$ is bounded above and bounded below. Hence, by (2), $(x_n)$ is bounded exactly when $E$ is bounded in the sense of the entry on upper bounds and suprema.
4. (Monotonicity and distant terms) If $(x_n)$ is monotone increasing, then $x_n \le x_m$ for all natural numbers $n$, $m$ with $n \le m$. If $(x_n)$ is monotone decreasing, then $x_m \le x_n$ for all natural numbers $n$, $m$ with $n \le m$.
:::

## 직관

기차의 객차에 $1, 2, 3, \dots$ 번호가 끝없이 붙어 있고, 객차마다 실수가 하나씩 실려 있다고 해 봅시다. 수열은 "몇 번 객차에 어떤 수가 실렸는가"를 모두 적은 것이고, $x_n$은 $n$번 객차에 실린 수입니다. 번호가 있는 모든 객차에 수가 꼭 하나씩 실린다는 것이 함수의 정의의 두 조건(존재와 유일)에 해당합니다.

값의 집합은 "어떤 수들이 실렸는가"만 적은 목록입니다. 같은 수가 여러 객차에 실려도 목록에는 한 번만 오르고, 어느 객차에 실렸는지는 사라집니다. 그래서 서로 다른 두 수열이 같은 값의 집합을 가질 수 있습니다(아래 예시). 유계, 위로 유계는 값의 집합만 보고 정해지는 성질이고(이 항목의 (2), (3)), 단조는 객차의 번호 순서를 보는 성질입니다.

비유가 맞지 않는 곳은 실제 기차는 객차 수가 유한하다는 점입니다. 수열에는 마지막 항이 없고, 모든 자연수 $n$에 $x_n$이 있습니다. 이 점이 정의역이 $\{1, \dots, n\}$인 "열"과 다른 점입니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (1)의 (v)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (7)"처럼 쓴 것은 [[absolute-value]]의 번호, "이 항목의 (1)"은 위 진술의 번호이다.

**1의 증명.** $f = \{(n, r_n) : n \in \mathbb{N}\}$이라 하자. $f$의 원소는 첫째 성분이 자연수이고 둘째 성분이 실수인 순서쌍이므로 [[cartesian-product|곱집합]]의 정의에 의해 $f \subseteq \mathbb{N} \times \mathbb{R}$이고, $f$는 $\mathbb{N}$에서 $\mathbb{R}$로의 관계이다. 자연수 $a$를 하나 잡는다. (존재) $(a, r_a) \in f$이다. (유일) 실수 $b$, $b'$에 대하여 $(a, b) \in f$이고 $(a, b') \in f$라 하자. $(a, b) \in f$이므로 $(a, b) = (m, r_m)$인 자연수 $m$이 있고, [[cartesian-product|곱집합]]의 진술의 순서쌍의 같음에 의해 $a = m$이고 $b = r_m$이다. $m = a$이므로 $b = r_a$이다. 같은 이유로 $(a, b') = (m', r_{m'})$인 자연수 $m'$이 있고 $a = m'$, $b' = r_{m'} = r_a$이다. 따라서 $b = b'$이다. [[function]]의 정의에 의해 $f$는 $\mathbb{N}$에서 $\mathbb{R}$로의 함수이고, $(a, r_a) \in f$이므로 $f(a) = r_a$이다.

**2의 증명.** $1 \in \mathbb{N}$이므로 $x_1 \in E$이고, $E$는 공집합이 아니다.

$B$가 $E$의 상계라 하자. 자연수 $n$마다 $x_n \in E$이므로 $x_n \le B$이다. 거꾸로 모든 자연수 $n$에서 $x_n \le B$라 하자. $E$의 원소 $z$는 어떤 자연수 $n$에 대하여 $z = x_n$이므로 $z \le B$이다. 따라서 $B$는 $E$의 상계이다.

$B$가 $E$의 하계라 하자. 자연수 $n$마다 $x_n \in E$이므로 $B \le x_n$이다. 거꾸로 모든 자연수 $n$에서 $B \le x_n$이라 하자. $E$의 원소 $z$는 어떤 자연수 $n$에 대하여 $z = x_n$이므로 $B \le z$이다. 따라서 $B$는 $E$의 하계이다.

$(x_n)$이 위로 유계인 것은 정의에 의해 정확히 "모든 $n$에서 $x_n \le B$"인 실수 $B$가 있을 때이고, 방금 보인 것에 의해 이것은 정확히 $E$의 상계인 실수가 있을 때, 곧 $E$가 위로 유계일 때이다. 아래로 유계인 경우도 같은 문장을 하계로 바꾸어 쓴다. $(x_n)$이 아래로 유계인 것은 정확히 "모든 $n$에서 $B \le x_n$"인 실수 $B$가 있을 때이고, 이것은 정확히 $E$의 하계인 실수가 있을 때, 곧 $E$가 아래로 유계일 때이다.

**3의 증명.** $(x_n)$이 유계라 하자. 모든 자연수 $n$에서 $|x_n| \le B$인 실수 $B$가 있다. 절댓값 (7)의 첫 문장에 의해 모든 $n$에서 $-B \le x_n \le B$이다. 따라서 $B$는 "모든 $n$에서 $x_n \le B$"를, $-B$는 "모든 $n$에서 $-B \le x_n$"을 만족하므로 $(x_n)$은 위로 유계이고 아래로 유계이다.

거꾸로 $(x_n)$이 위로 유계이고 아래로 유계라 하자. 모든 자연수 $n$에서 $x_n \le B_1$인 실수 $B_1$과 $B_2 \le x_n$인 실수 $B_2$가 있다. $B = \max\{|B_1|, |B_2|\}$로 둔다. 절댓값 (10)에 의해 $|B_1| \le B$이고 $|B_2| \le B$이다. 자연수 $n$을 하나 잡는다.

- 절댓값 (6)에 의해 $B_1 \le |B_1|$이므로, $x_n \le B_1 \le |B_1| \le B$와 순서 성질 (1)의 (v)에 의해 $x_n \le B$이다.
- 순서 성질 (3)의 (iii)을 $|B_2| \le B$에 쓰면 $-B \le -|B_2|$이고, 절댓값 (6)에 의해 $-|B_2| \le B_2$이다. $-B \le -|B_2| \le B_2 \le x_n$과 순서 성질 (1)의 (v)에 의해 $-B \le x_n$이다.

따라서 $-B \le x_n \le B$이고, 절댓값 (7)의 첫 문장에 의해 $|x_n| \le B$이다. $n$은 임의의 자연수였으므로 $(x_n)$은 유계이다.

마지막 문장을 보인다. [[upper-bound-and-supremum]]의 정의에 의해 $E$가 유계인 것은 정확히 $E$가 위로 유계이고 아래로 유계일 때이다. 이 항목의 (2)에 의해 이것은 정확히 $(x_n)$이 위로 유계이고 아래로 유계일 때이고, 방금 보인 것에 의해 정확히 $(x_n)$이 유계일 때이다.

**4의 증명.** [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술에 의해 $\mathbb{N}$은 양의 정수의 집합이다. 자연수 $n$을 하나 잡아 고정한다. 먼저 $n \le m$인 정수 $m$은 자연수임을 보인다. $n$은 양의 정수이므로 [[prime-number]]의 (Z1)에 의해 $1 \le n$이고, $n \le m$과 [[well-ordering-principle]]의 (Z6)에 의해 $1 \le m$이다. (Z8)의 $0 < 1$과 (Z6)에 의해 $0 < m$이므로 $m$은 양의 정수, 곧 자연수이다. 따라서 $n \le m$인 정수 $m$마다 $x_m$이 뜻을 갖는다.

$(x_n)$이 단조증가라 하자. $n \le m$인 정수 $m$에 대한 명제 $S_m$을 "$x_n \le x_m$"으로 두고, [[mathematical-induction]]의 시작점이 $n$인 꼴로 증명한다.

- 기초 단계: 순서 성질 (1)의 (iv)에 의해 $x_n \le x_n$이므로 $S_n$이 참이다.
- 귀납 단계: $n \le k$인 정수 $k$에 대하여 $S_k$, 곧 $x_n \le x_k$라 가정한다. 위에서 본 대로 $k$는 자연수이므로 단조증가의 정의에 의해 $x_k \le x_{k+1}$이다. 순서 성질 (1)의 (v)에 의해 $x_n \le x_{k+1}$이고, 이것이 $S_{k+1}$이다.

따라서 $n \le m$인 모든 정수 $m$에 대하여 $x_n \le x_m$이고, $n \le m$인 자연수 $m$은 그런 정수이다.

$(x_n)$이 단조감소라 하자. $n \le m$인 정수 $m$에 대한 명제 $T_m$을 "$x_m \le x_n$"으로 두고 같은 꼴의 귀납법을 쓴다.

- 기초 단계: 순서 성질 (1)의 (iv)에 의해 $x_n \le x_n$이므로 $T_n$이 참이다.
- 귀납 단계: $n \le k$인 정수 $k$에 대하여 $T_k$, 곧 $x_k \le x_n$이라 가정한다. $k$는 자연수이므로 단조감소의 정의에 의해 $x_{k+1} \le x_k$이다. 순서 성질 (1)의 (v)에 의해 $x_{k+1} \le x_n$이고, 이것이 $T_{k+1}$이다.

따라서 $n \le m$인 모든 자연수 $m$에 대하여 $x_m \le x_n$이다. $n$은 임의의 자연수였으므로 (4)가 성립한다. $\blacksquare$
:::

## 예시와 반례

:::example[번갈아 바뀌는 수열과 그 값의 집합]
자연수 $n$이 짝수이면 $a_n = 1$, 홀수이면 $a_n = -1$로 둡니다. [[even-and-odd]]에서 받아들인 사실에 의해 모든 정수는 짝수이거나 홀수이고 둘 다인 정수는 없으므로, 각 $n$마다 $a_n$이 하나씩 정해지고 이 항목의 (1)에 의해 $(a_n)$은 수열입니다. 같은 방식으로 $n$이 짝수이면 $b_n = -1$, 홀수이면 $b_n = 1$인 수열 $(b_n)$을 둡니다. $1 = 2 \cdot 0 + 1$, $3 = 2 \cdot 1 + 1$은 홀수이고 $2 = 2 \cdot 1$은 짝수이므로 처음 세 항은 $a_1 = -1$, $a_2 = 1$, $a_3 = -1$이고 $b_1 = 1$, $b_2 = -1$, $b_3 = 1$입니다.

두 수열의 값의 집합은 모두 $\{-1, 1\}$입니다. 각 항이 $1$이거나 $-1$이고, $-1 = a_1$, $1 = a_2$이며 $1 = b_1$, $-1 = b_2$이기 때문입니다. 그러나 [[order-properties-of-reals]]의 (5)의 (ii)의 $0 < 1$과 그 항목의 (3)의 (ii)에 의해 $-1 < 0$이고, (W2)에 의해 $-1 < 1$이므로 그 항목의 (1)의 (i)에 의해 $a_1 \ne b_1$이고, 두 수열은 다릅니다. 값의 집합이 같아도 수열은 같지 않을 수 있습니다.

$(a_n)$은 유계입니다. [[absolute-value|절댓값]]의 정의와 (K9)에 의해 $|1| = 1$이고 $|-1| = -(-1) = 1$이므로 모든 $n$에서 $|a_n| \le 1$입니다. $(a_n)$은 단조가 아닙니다. $a_1 = -1 < 1 = a_2$이므로 그 항목의 (1)의 (i)에 의해 $a_2 \le a_1$이 성립하지 않아 단조감소가 아니고, $a_3 = -1 < 1 = a_2$이므로 $a_2 \le a_3$이 성립하지 않아 단조증가도 아닙니다.
:::

:::example[$n$번째 항이 $1 - n^{-1}$인 수열]
[[order-properties-of-reals]]의 (10)에 의해 자연수 $n$은 양의 실수이고 $0 < n^{-1}$이므로, $x_n = 1 - n^{-1}$로 두면 이 항목의 (1)에 의해 수열 $(x_n)$이 정해집니다. 아래에서 "순서 성질"은 그 항목의 번호입니다.

단조증가입니다. 자연수 $n$에 대하여 [[well-ordering-principle]]의 (L3)과 순서 성질 (10)에 의해 $0 < n < n + 1$이므로, 순서 성질 (6)의 (ii)에 의해 $(n + 1)^{-1} < n^{-1}$입니다. 순서 성질 (3)의 (iii)에 의해 $-n^{-1} < -(n + 1)^{-1}$이고, 순서 성질 (2)의 (ii)로 양변에 $1$을 더하고 (K1)을 쓰면 $1 + (-n^{-1}) < 1 + (-(n + 1)^{-1})$, 곧 $x_n < x_{n+1}$이므로 $x_n \le x_{n+1}$입니다.

유계입니다. $0 < n^{-1}$에서 순서 성질 (3)의 (ii)에 의해 $-n^{-1} < 0$이고, 순서 성질 (2)의 (ii)로 $1$을 더하면 (K1), (K4)에 의해 $x_n < 1$입니다. 또 $n$은 양의 정수이므로 [[prime-number]]의 (Z1)과 순서 성질 (10)에 의해 $1 \le n$입니다. $n = 1$이면 (K4)와 (K8)의 (iii)에 의해 $n^{-1} = 1^{-1} = 1$이고, $1 < n$이면 순서 성질 (6)의 (ii)를 $0 < 1 < n$에 써서 $n^{-1} < 1^{-1} = 1$입니다. 어느 경우든 $n^{-1} \le 1$이고, 순서 성질 (3)의 (i)에 의해 $0 \le 1 - n^{-1} = x_n$입니다. 순서 성질 (5)의 (ii), (3)의 (ii)에 의해 $-1 < 0$이므로, $-1 < 0 \le x_n$과 순서 성질 (1)의 (v)에 의해 $-1 \le x_n \le 1$이고, [[absolute-value|절댓값]]의 (7)에 의해 모든 $n$에서 $|x_n| \le 1$입니다.
:::

:::counterexample[$n$번째 항이 $-n$인 수열: 위로 유계이지만 유계가 아니다]
$x_n = -n$으로 둡니다. [[order-properties-of-reals]]의 (10)에 의해 $0 < n$이고, 그 항목의 (3)의 (ii)에 의해 $-n < 0$이므로 모든 $n$에서 $x_n \le 0$입니다. 따라서 $(x_n)$은 위로 유계입니다.

그러나 아래로 유계가 아닙니다. 실수 $B$를 아무것이나 잡습니다. [[archimedean-property]]의 (1)을 $t = -B$에 쓰면 $-B < n$인 자연수 $n$이 있고, [[order-properties-of-reals]]의 (3)의 (iii)과 (K9)에 의해 $-n < -(-B) = B$, 곧 $x_n < B$입니다. 그 항목의 (1)의 (i)에 의해 이 $n$에서 $B \le x_n$은 성립하지 않으므로, "모든 $n$에서 $B \le x_n$"인 실수 $B$는 없습니다. 이 항목의 (3)에 의해 $(x_n)$은 유계도 아닙니다. 위로 유계인 것만으로는 유계라고 할 수 없습니다.
:::

## 확인 질문

:::check[실수 $c$의 상수 수열은 단조증가인가, 단조감소인가, 유계인가?]
셋 다입니다. 모든 $n$에서 $x_n = x_{n+1} = c$이고 [[order-properties-of-reals]]의 (1)의 (iv)에 의해 $c \le c$이므로, $x_n \le x_{n+1}$과 $x_{n+1} \le x_n$이 모두 성립합니다. 또 $B = |c|$로 두면 같은 항목의 (1)의 (iv)에 의해 모든 $n$에서 $|x_n| = |c| \le B$이므로 유계입니다.
:::

:::check[단조증가인 수열은 언제나 아래로 유계인가?]
그렇습니다. $(x_n)$이 단조증가라 합시다. 자연수 $m$은 양의 정수이므로([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]) [[prime-number]]의 (Z1)에 의해 $1 \le m$이고, 이 항목의 (4)에 의해 $x_1 \le x_m$입니다. 따라서 $B = x_1$이 "모든 $m$에서 $B \le x_m$"을 만족합니다. 위로 유계인지는 수열에 따라 다릅니다. 위의 예시에서 본 대로 $n$번째 항이 $1 - n^{-1}$인 단조증가 수열은 위로 유계입니다. 한편 $n$번째 항이 $n$인 수열은 [[well-ordering-principle]]의 (L3)과 [[order-properties-of-reals]]의 (10)에 의해 $n < n + 1$이므로 단조증가이지만, 실수 $B$를 아무것이나 잡으면 [[archimedean-property]]의 (1)에 의해 $B < n$인 자연수 $n$이 있고, [[order-properties-of-reals]]의 (1)의 (i)에 의해 $n \le B$가 성립하지 않으므로 위로 유계가 아닙니다.
:::
