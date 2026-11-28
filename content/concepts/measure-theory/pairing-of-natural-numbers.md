---
title: ℕ × ℕ 과 ℕ 의 전단사
title_en: A Bijection Between ℕ × ℕ and ℕ
aliases: [짝짓기 함수, 자연수의 순서쌍에 번호 매기기, ℕ × ℕ 은 가산 무한, pairing function, ℕ × ℕ is countably infinite]
kind: theorem
field: measure-theory
msc: ["03E10"]
level: undergrad
summary: 모든 자연수가 2 의 거듭제곱과 홀수인 자연수의 곱으로 정확히 한 가지로 쓰인다는 것을 증명하고, 이것으로 (k, l) 을 2^(k−1)(2l − 1) 로 보내는 함수 π 가 ℕ × ℕ 에서 ℕ 으로의 전단사임을 보인 뒤, 역함수의 두 성분과 π 의 값의 크기를 진술한다.
requires: [set, cartesian-product, function, injective-surjective-bijective, inverse-function, bijective-iff-inverse-is-a-function, equal-cardinality, countably-infinite-set, mathematical-induction, recursion-theorem, natural-numbers-are-infinite, even-and-odd, prime-number, well-ordering-principle, real-number-arithmetic, real-order-axioms, order-properties-of-reals, power-of-a-real-number]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 0.3.5절 Cardinality, Example 0.3.31 과 Figure 4 (p.18–19); 0.3.6절 Exercise 0.3.11 (p.21)
    checked: original
    note: "출처 Example 0.3.31 은 'ℕ × ℕ is a countably infinite set' 을 ℕ × ℕ 의 원소를 (1, 1), (1, 2), (2, 1), (1, 3), (2, 2), (3, 1), … 로, 곧 두 성분의 합이 같은 것끼리 차례로 늘어놓고 1 을 (1, 1), 2 를 (1, 2) 로 보내는 식으로 증명한다(Figure 4 는 그 길을 그린 그림이다). 함수의 식과 그것이 전단사라는 증명은 적지 않는다. 이 항목은 다른 함수 π(k, l) = 2^{k−1}(2l − 1) 을 쓰고, 그 전단사를 '모든 자연수는 2 의 거듭제곱과 홀수의 곱으로 정확히 한 가지로 쓰인다'((5))로 증명한다. 결론 'ℕ × ℕ 은 가산 무한'은 출처의 것과 같다. 증명 안의 부등식 2^{k−1} ≥ k 는 출처 Exercise 0.3.11(모든 n ∈ ℕ 에서 n < 2^n 을 귀납법으로 증명하라)과 같은 꼴의 사실이다. '짝짓기 함수'(pairing function)라는 이름은 출처에서 찾지 못했다(검색어 'pairing' 0건, 'Cantor' 17건은 칸토어–베른슈타인–슈뢰더 정리, Theorem 0.3.34(칸토어 정리), ℝ 이 비가산이라는 Theorem 1.4.2·1.5.2, 칸토어 대각선 논법, 인명 각주, 찾아보기뿐이다. 책 전체). 출처 Exercise 2.6.15(p.112)는 전단사 σ : ℕ → ℕ² 를 주어진 것으로 두고 이중급수를 다룬다. 반례 '성분의 합으로 보내는 함수의 예'의 함수 k + l 은 출처 Example 0.3.31 이 순서쌍을 두 성분의 합으로 묶어 늘어놓는 데 쓰는 것과 같은 대상이다."
  - ref: kanovei-katz-positive-function-vanishing-integral
    loc: 1절 Introduction (p.2)
    checked: original
    note: "출처는 첨수가 붙은 서로소인 'counted' 집합들의 족이 'immediately identifiable with N × N' 이고 그 합집합은 'a snaking argument in N × N familiar to each freshman, in the context of enumerating Q' 로 가산이라고 적는다. 이 항목은 그 논법에 쓰는 ℕ × ℕ 과 ℕ 의 전단사를 식으로 준다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 표본 확인(러셀의 논법, Kanovei–Katz 인용 대조, min·max 와 1 의 합의 경계 경우). 독립 검토 없음."
added: 2026-11-28
---

:::statement
곱집합과 순서쌍은 [[cartesian-product]], 함수와 전단사는 [[function|함수]]와 [[injective-surjective-bijective|단사, 전사, 전단사]], 역관계와 역함수는 [[inverse-function|역관계와 역함수]]의 것이고, 가산 무한은 [[countably-infinite-set|가산 무한 집합]]의 것이다. $\mathbb{N}$은 양의 정수의 집합이고([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]), 짝수와 홀수는 [[even-and-odd]]의 것이다. 거듭제곱 $2^j$($j$는 $0$ 이상인 정수)는 실수의 거듭제곱([[power-of-a-real-number|실수의 거듭제곱]])이고, 그 (7)에 의해 자연수이다. 정수의 순서는 [[prime-number]]의 (Z1)–(Z3)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)으로 다루고, 정수 사이의 부등식은 실수의 부등식으로 읽어도 같다([[order-properties-of-reals]]의 (10)).

**짝짓기 함수.** 자연수 $k$, $l$에 대하여 $k - 1$은 $0$ 이상인 정수이고 $2l - 1$은 자연수이다(아래 증명의 준비). 그래서 함수
$$
\begin{gathered} \pi : \mathbb{N} \times \mathbb{N} \to \mathbb{N}, \\ \pi(k, l) = 2^{k-1}(2l - 1) \end{gathered}
$$
가 정해진다. 이 강의에서 글자 $\pi$는 이 함수의 이름이고 원주율이 아니다.

다음이 성립한다.

1. (전단사) $\pi : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$은 전단사이다. 따라서 [[bijective-iff-inverse-is-a-function|전단사일 조건]]에 의해 역관계 $\pi^{-1}$은 $\mathbb{N}$에서 $\mathbb{N} \times \mathbb{N}$으로의 함수이고, 자연수 $m$에 대하여 $\pi^{-1}(m)$은 $\pi(k, l) = m$인 하나뿐인 순서쌍 $(k, l)$이다. 그 첫째 성분과 둘째 성분을 $\kappa_1(m)$, $\kappa_2(m)$으로 써서 두 함수 $\kappa_1, \kappa_2 : \mathbb{N} \to \mathbb{N}$을 정한다. 곧 $\pi^{-1}(m) = (\kappa_1(m), \kappa_2(m))$이고, 모든 자연수 $m$, $k$, $l$에서
   $$
   \begin{gathered} \pi(\kappa_1(m), \kappa_2(m)) = m, \\ \kappa_1(\pi(k, l)) = k, \\ \kappa_2(\pi(k, l)) = l \end{gathered}
   $$
   이다. 특히 $|\mathbb{N} \times \mathbb{N}| = |\mathbb{N}|$이고, 역함수 $\pi^{-1} : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$, 곧 $m$에서의 값이 $(\kappa_1(m), \kappa_2(m))$인 함수가 전단사이므로 $\mathbb{N} \times \mathbb{N}$은 가산 무한이다.
2. (작은 성분의 값은 작다) 모든 자연수 $N$에 대하여, $k \le N$이고 $l \le N$인 모든 자연수 $k$, $l$에서
   $$
   \pi(k, l) \le 2^{N-1}(2N - 1)
   $$
   이다. 곧 $M = 2^{N-1}(2N - 1)$로 두면 $k, l \le N$인 모든 $(k, l)$에서 $\pi(k, l) \le M$이다.
3. (작은 값은 작은 성분에서 온다) 모든 자연수 $M$에 대하여, $m \le M$인 모든 자연수 $m$은 $k \le M$이고 $l \le M$인 어떤 자연수 $k$, $l$의 $\pi(k, l)$이다. 실제로 $k = \kappa_1(m)$, $l = \kappa_2(m)$이 그런 쌍이다.
4. (값은 성분보다 작지 않다) 모든 자연수 $k$, $l$에서 $k \le \pi(k, l)$이고 $l \le \pi(k, l)$이다. 따라서 모든 자연수 $m$에서 $\kappa_1(m) \le m$이고 $\kappa_2(m) \le m$이다.
5. (2 의 거듭제곱과 홀수로 쓰기) 모든 자연수 $m$에 대하여, $0$ 이상인 정수 $r$과 홀수인 자연수 $o$로서 $m = 2^r o$인 쌍 $(r, o)$가 정확히 하나 있다. 그 쌍은 $r = \kappa_1(m) - 1$, $o = 2\kappa_2(m) - 1$이다.
:::

:::english
Cartesian products and ordered pairs are as in the entry on Cartesian products, functions and bijections as in the entries on functions and on injective, surjective, and bijective functions, inverse relations and inverse functions as in the entry on them, and countably infinite sets as in the entry on countably infinite sets. $\mathbb{N}$ is the set of positive integers, and even and odd integers are as in the entry on them. The power $2^j$ (for an integer $j \ge 0$) is the power of a real number, and by (7) of that entry it is a natural number. The order of the integers is handled by (Z1)–(Z3), (Z5)–(Z8), and (L1)–(L3), and inequalities between integers may equally be read as inequalities between real numbers.

**The pairing function.** For natural numbers $k$, $l$, the number $k - 1$ is an integer $\ge 0$ and $2l - 1$ is a natural number (see the preparation in the proof below). Hence the function
$$
\begin{gathered} \pi : \mathbb{N} \times \mathbb{N} \to \mathbb{N}, \\ \pi(k, l) = 2^{k-1}(2l - 1) \end{gathered}
$$
is determined. In this course the letter $\pi$ is the name of this function, not the circle constant.

The following hold.

1. (Bijection) $\pi : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ is a bijection. Hence the inverse relation $\pi^{-1}$ is a function from $\mathbb{N}$ to $\mathbb{N} \times \mathbb{N}$, and for a natural number $m$, $\pi^{-1}(m)$ is the unique ordered pair $(k, l)$ with $\pi(k, l) = m$. Writing its first and second components as $\kappa_1(m)$ and $\kappa_2(m)$, we define two functions $\kappa_1, \kappa_2 : \mathbb{N} \to \mathbb{N}$. That is, $\pi^{-1}(m) = (\kappa_1(m), \kappa_2(m))$, and for all natural numbers $m$, $k$, $l$
   $$
   \begin{gathered} \pi(\kappa_1(m), \kappa_2(m)) = m, \\ \kappa_1(\pi(k, l)) = k, \\ \kappa_2(\pi(k, l)) = l \end{gathered}.
   $$
   In particular $|\mathbb{N} \times \mathbb{N}| = |\mathbb{N}|$, and since the inverse $\pi^{-1} : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$, that is, the function whose value at $m$ is $(\kappa_1(m), \kappa_2(m))$, is a bijection, the set $\mathbb{N} \times \mathbb{N}$ is countably infinite.
2. (Small components give small values) For every natural number $N$ and all natural numbers $k$, $l$ with $k \le N$ and $l \le N$,
   $$
   \pi(k, l) \le 2^{N-1}(2N - 1).
   $$
   That is, with $M = 2^{N-1}(2N - 1)$ we have $\pi(k, l) \le M$ for all $(k, l)$ with $k, l \le N$.
3. (Small values come from small components) For every natural number $M$, every natural number $m$ with $m \le M$ equals $\pi(k, l)$ for some natural numbers $k$, $l$ with $k \le M$ and $l \le M$. Indeed $k = \kappa_1(m)$, $l = \kappa_2(m)$ is such a pair.
4. (Values are not smaller than components) For all natural numbers $k$, $l$ we have $k \le \pi(k, l)$ and $l \le \pi(k, l)$. Hence $\kappa_1(m) \le m$ and $\kappa_2(m) \le m$ for every natural number $m$.
5. (Writing as a power of 2 times an odd number) For every natural number $m$ there is exactly one pair $(r, o)$ of an integer $r \ge 0$ and an odd natural number $o$ with $m = 2^r o$. This pair is $r = \kappa_1(m) - 1$, $o = 2\kappa_2(m) - 1$.
:::

## 직관

$\mathbb{N} \times \mathbb{N}$은 가로와 세로로 끝없이 펼쳐진 격자의 칸들입니다. 이 칸들에 빠짐없이, 겹치지 않게 $1, 2, 3, \dots$의 번호를 붙일 수 있다는 것이 이 정리입니다. 번호를 붙이는 방법은 여럿인데, 이 항목은 자연수를 "$2$로 몇 번 나누어지는가"와 "더 나눌 수 없을 때 남는 홀수가 무엇인가"로 읽는 방법을 씁니다. 예를 들어 $12 = 2^2 \cdot 3$이고 $3 = 2 \cdot 2 - 1$이므로 $12$번 칸은 $(3, 2)$입니다. (5)가 이 읽기가 늘 하나로 정해진다고 말하고, 그것이 $\pi$가 전단사라는 것과 같은 말입니다.

건물의 방 번호에 비유할 수 있습니다. 첫째 성분 $k$는 층, 둘째 성분 $l$은 그 층의 방 순서이고, $1$층에는 홀수 번호 $1, 3, 5, \dots$가, $2$층에는 $2 \times$홀수인 $2, 6, 10, \dots$이, $3$층에는 $4 \times$홀수인 $4, 12, 20, \dots$이 차례로 붙습니다. 모든 번호는 정확히 한 방에 쓰입니다. 비유가 맞지 않는 곳도 있습니다. 실제 건물과 달리 층마다 방이 끝없이 많고, 번호가 층을 따라 차례로 커지지도 않습니다($2$층의 방 $2$가 $1$층의 방 $3$보다 번호가 작습니다).

(2)와 (3)은 이중으로 번호가 붙은 것을 한 줄로 늘어놓고 유한 개씩 비교할 때 쓰는 부등식입니다. (2)는 "성분이 $N$ 이하인 칸들은 모두 어떤 번호 $M$ 안에 든다"를, (3)은 거꾸로 "번호가 $M$ 이하인 칸들은 모두 성분이 $M$ 이하인 사각형 안에 든다"를 말합니다.

## 증명

:::idea
자연수를 $2$로 나누어지지 않을 때까지 나누면 $2$의 거듭제곱과 홀수의 곱으로 쓰이고, 그런 곱으로 쓰는 방법은 하나뿐이다. 지수 $r$에 $1$을 더해 첫째 성분으로, 홀수 $o = 2l - 1$의 $l$을 둘째 성분으로 읽으면 $\pi$의 역함수가 된다.
:::

:::hint
$2^r o = 2^s o'$이고 $r < s$이면, 양변을 $2^r$로 나누어 $o$가 짝수가 됨을 보인다.
:::

:::hint
있다는 것은 그런 곱으로 쓰이지 않는 가장 작은 자연수를 잡아 모순을 끌어낸다. 그 수가 짝수이면 절반이 더 작은 자연수이다.
:::

:::proof
**준비.** [[power-of-a-real-number]]의 (1), (2)의 (i), (6), (7)을 밑 $2$에 쓴다. 곧 $0$ 이상인 정수 $j$, $j'$에 대하여 $2^0 = 1$, $2^{j+1} = 2^j \cdot 2 = 2 \cdot 2^j$, $2^{j+j'} = 2^j \cdot 2^{j'}$, $0 < 2^j$, $1 \le 2^j$이고 $2^j$는 자연수이다($1 < 2$이므로 (6)의 (iv)에서 $1 \le 2^j$). 정수끼리의 합·차·곱은 정수이다([[even-and-odd]]에서 받아들인 사실). 실수의 계산은 [[real-number-arithmetic]]의 (K1)–(K7)을 쓰고, 정수의 계산은 실수로서의 계산과 같다((K7)).

두 자연수 $a$, $b$의 곱은 자연수이다. $1 \le a$이고 $0 < b$이므로 (Z3)에 의해 $b = 1 \cdot b \le ab$이고, $1 \le b$이므로 (Z6)에 의해 $1 \le ab$이기 때문이다. 자연수 $l$에 대하여 $1 \le l$이므로 (Z3)에 의해 $2 \le 2l$이고 (Z7)에 의해 $1 \le 2l - 1$이며, $2l - 1 = 2(l - 1) + 1$이고 $l - 1$은 정수이므로 $2l - 1$은 홀수인 자연수이다. 자연수 $k$에 대하여 $1 \le k$이므로 $0 \le k - 1$이다. 따라서 $\pi(k, l) = 2^{k-1}(2l - 1)$은 두 자연수의 곱이라 자연수이고, [[recursion-theorem|재귀 정리]]의 (1)에 의해 $\pi$는 $\mathbb{N} \times \mathbb{N}$에서 $\mathbb{N}$으로의 함수이다.

**(5)의 유일성.** $m = 2^r o = 2^s o'$이고 $r$, $s$는 $0$ 이상인 정수, $o$, $o'$은 홀수인 자연수라 하자. $r < s$라 가정하자. $s - r$은 $1$ 이상인 정수이므로 준비에 의해 $2^s = 2^r \cdot 2^{s-r}$이고 $2^{s-r} = 2 \cdot 2^{s-r-1}$이다. 따라서 $2^r o = 2^r \bigl(2 \cdot 2^{s-r-1} o'\bigr)$이고, $2^r \ne 0$이므로 양변에 $2^r$의 역수를 곱하면 $o = 2 \cdot \bigl(2^{s-r-1} o'\bigr)$이다. $2^{s-r-1} o'$은 정수이므로 $o$는 짝수이다. 그런데 $o$는 홀수이고, 짝수이면서 홀수인 정수는 없다([[even-and-odd]]). 이 모순으로 $r < s$가 아니다. $s < r$인 경우도 $r$과 $s$, $o$와 $o'$을 맞바꾸어 같은 모순에 이른다. 따라서 (Z5)에 의해 $r = s$이고, $2^r o = 2^r o'$의 양변에 $2^r$의 역수를 곱하면 $o = o'$이다.

**(5)의 존재.** $F$를 $0$ 이상인 정수 $r$과 홀수인 자연수 $o$로 $m = 2^r o$라 쓸 수 없는 자연수 $m$ 전체의 집합이라 하고, $F \ne \emptyset$이라 가정하자. [[well-ordering-principle|정렬 원리]]에 의해 $F$는 최소 원소 $m_0$을 갖는다. [[even-and-odd]]에서 받아들인 사실에 의해 $m_0$은 짝수이거나 홀수이다. $m_0$이 홀수이면 $m_0 = 2^0 m_0$이므로 $m_0 \notin F$가 되어 어긋난다. $m_0$이 짝수이면 $m_0 = 2c$인 정수 $c$가 있다. $c \le 0$이면 (Z3)에 의해 $2c \le 0$이 되어 $1 \le m_0$과 (L1)에 어긋나므로 $0 < c$이고, (Z1)에 의해 $c$는 자연수이다. $0 < c$이므로 (Z7)에 의해 $c < c + c = m_0$이고, $m_0$은 $F$의 최소 원소이므로 (L1)에 의해 $c \notin F$이다. 따라서 $c = 2^r o$인 $0$ 이상인 정수 $r$과 홀수인 자연수 $o$가 있고, $m_0 = 2 \cdot 2^r o = 2^{r+1} o$이며 $r + 1$은 $0$ 이상인 정수이다. 이는 $m_0 \in F$에 어긋난다. 따라서 $F = \emptyset$이다.

**(1)** 단사: $\pi(k, l) = \pi(k', l')$이라 하자. 준비에 의해 $2l - 1$과 $2l' - 1$은 홀수인 자연수이고 $k - 1$, $k' - 1$은 $0$ 이상인 정수이므로, (5)의 유일성에 의해 $k - 1 = k' - 1$이고 $2l - 1 = 2l' - 1$이다. (Z7)에 의해 $k = k'$이고 $2l = 2l'$이며, 양변에 $2$의 역수를 곱하면 $l = l'$이다. 따라서 $(k, l) = (k', l')$이다([[cartesian-product]]의 순서쌍의 같음).

전사: 자연수 $m$을 잡자. (5)의 존재에 의해 $m = 2^r o$인 $0$ 이상인 정수 $r$과 홀수인 자연수 $o$가 있다. $o = 2c + 1$인 정수 $c$가 있다. $c \le -1$이면 (Z3)에 의해 $2c \le -2$이고 (Z7)에 의해 $o = 2c + 1 \le -1 < 1$이 되어 $1 \le o$와 어긋나므로, (Z5)와 (Z1)에 의해 $0 \le c$이다. $l = c + 1$은 $1$ 이상인 정수, 곧 자연수이고 $2l - 1 = 2c + 1 = o$이다. $k = r + 1$은 $1$ 이상인 정수, 곧 자연수이고 $k - 1 = r$이다. 따라서 $\pi(k, l) = 2^r o = m$이다.

$\pi$는 전단사이므로 [[bijective-iff-inverse-is-a-function|전단사일 조건]]에 의해 역관계 $\pi^{-1}$은 $\mathbb{N}$에서 $\mathbb{N} \times \mathbb{N}$으로의 함수이다. [[inverse-function]]의 역관계의 정의에 의해 $(m, (k, l)) \in \pi^{-1}$인 것은 정확히 $\pi(k, l) = m$일 때이므로, $\pi^{-1}(m)$은 $\pi(k, l) = m$인 순서쌍이고 그런 순서쌍은 단사이므로 하나뿐이다. 순서쌍 $\pi^{-1}(m)$의 두 성분은 $m$에 의해 이미 정해진 자연수이므로, [[recursion-theorem]]의 (1)에 의해 $\kappa_1, \kappa_2 : \mathbb{N} \to \mathbb{N}$이 정해진다. $\pi^{-1}(m) = (\kappa_1(m), \kappa_2(m))$이므로 $\pi(\kappa_1(m), \kappa_2(m)) = m$이다. 또 $m = \pi(k, l)$로 두면 $\pi^{-1}(m)$은 $\pi(k', l') = m$인 하나뿐인 순서쌍이고 $(k, l)$이 그런 순서쌍이므로 $(\kappa_1(m), \kappa_2(m)) = (k, l)$, 곧 $\kappa_1(\pi(k, l)) = k$, $\kappa_2(\pi(k, l)) = l$이다.

[[equal-cardinality]]의 정의에 의해 $|\mathbb{N} \times \mathbb{N}| = |\mathbb{N}|$이다. 역함수 $\pi^{-1} : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$은 [[inverse-function]]의 두 등식 $\pi^{-1} \circ \pi = i_{\mathbb{N} \times \mathbb{N}}$, $\pi \circ \pi^{-1} = i_{\mathbb{N}}$에서 단사이고 전사이다($\pi^{-1}(m) = \pi^{-1}(m')$이면 $m = \pi(\pi^{-1}(m)) = \pi(\pi^{-1}(m')) = m'$이고, $(k, l) = \pi^{-1}(\pi(k, l))$이다). 따라서 [[countably-infinite-set]]의 정의에 의해 $\mathbb{N} \times \mathbb{N}$은 가산 무한이다.

**(4)** 먼저 모든 자연수 $k$에서 $k \le 2^{k-1}$임을 $k$에 관한 [[mathematical-induction|수학적 귀납법]]으로 보인다. $k = 1$이면 $2^0 = 1$이다. $k \le 2^{k-1}$이면 (Z3)에 의해 $2k \le 2 \cdot 2^{k-1} = 2^k$이고, $1 \le k$이므로 (Z7)에 의해 $k + 1 \le k + k = 2k$이어서 (Z6)에 의해 $k + 1 \le 2^k$이다. 이제 $1 \le 2l - 1$이고 $0 < 2^{k-1}$이므로 (Z3)에 의해 $2^{k-1} \le 2^{k-1}(2l - 1) = \pi(k, l)$이고, (Z6)에 의해 $k \le \pi(k, l)$이다. 또 $1 \le l$이므로 (Z7)에 의해 $l = 2l - l \le 2l - 1$이고, $1 \le 2^{k-1}$이며 $0 < 2l - 1$이므로 (Z3)에 의해 $2l - 1 \le 2^{k-1}(2l - 1) = \pi(k, l)$이어서 $l \le \pi(k, l)$이다. 자연수 $m$에 대하여 $k = \kappa_1(m)$, $l = \kappa_2(m)$으로 두면 (1)에 의해 $\pi(k, l) = m$이므로 $\kappa_1(m) \le m$, $\kappa_2(m) \le m$이다.

**(2)** $k \le N$, $l \le N$이라 하자. $(k - 1) + \bigl((N - 1) - (k - 1)\bigr) = N - 1$이고 $(N - 1) - (k - 1) = N - k$는 $0$ 이상인 정수이므로, 준비에 의해 $2^{N-1} = 2^{k-1} \cdot 2^{N-k}$이고 $1 \le 2^{N-k}$이다. $0 < 2^{k-1}$이므로 (Z3)에 의해 $2^{k-1} = 2^{k-1} \cdot 1 \le 2^{k-1} \cdot 2^{N-k} = 2^{N-1}$이다. 또 $l \le N$이므로 (Z3)과 (Z7)에 의해 $2l - 1 \le 2N - 1$이다. 따라서 (Z3)을 두 번 쓰면($0 < 2l - 1$, $0 < 2^{N-1}$)
$$
\begin{aligned}
\pi(k, l) &= 2^{k-1}(2l - 1) \\
&\le 2^{N-1}(2l - 1) \\
&\le 2^{N-1}(2N - 1)
\end{aligned}
$$
이고 (Z6)에 의해 원하는 부등식이 나온다.

**(3)** $m \le M$이라 하고 $k = \kappa_1(m)$, $l = \kappa_2(m)$이라 하자. (1)에 의해 $\pi(k, l) = m$이고, (4)에 의해 $k \le m$, $l \le m$이므로 (Z6)에 의해 $k \le M$, $l \le M$이다.

**(5)의 마지막 문장.** 자연수 $m$에 대하여 $k = \kappa_1(m)$, $l = \kappa_2(m)$으로 두면 (1)에 의해 $m = \pi(k, l) = 2^{k-1}(2l - 1)$이고, 준비에 의해 $k - 1$은 $0$ 이상인 정수, $2l - 1$은 홀수인 자연수이다. (5)의 유일성에 의해 그 쌍은 $(\kappa_1(m) - 1, 2\kappa_2(m) - 1)$이다.
:::

## 예시와 반례

:::example[작은 칸들의 번호]
$k, l \le 3$인 칸의 번호 $\pi(k, l) = 2^{k-1}(2l - 1)$을 표로 적으면 다음과 같습니다.

| | $l = 1$ | $l = 2$ | $l = 3$ |
|---|---|---|---|
| $k = 1$ | $1$ | $3$ | $5$ |
| $k = 2$ | $2$ | $6$ | $10$ |
| $k = 3$ | $4$ | $12$ | $20$ |

아홉 개의 값은 모두 다르고, 가장 큰 값은 $\pi(3, 3) = 20$입니다. (2)에서 $N = 3$이면 $M = 2^2 \cdot 5 = 20$이므로 이 표의 값은 모두 $20$ 이하입니다. 거꾸로 $1$부터 $20$까지의 번호 가운데 이 표에 없는 것($7, 8, 9, \dots$)도 있습니다. 예를 들어 $8 = 2^3 \cdot 1$이므로 $8 = \pi(4, 1)$이고 첫째 성분이 $3$보다 큽니다. (3)은 $8$이 성분이 $8$ 이하인 칸에서 온다는 것만 말합니다.
:::

:::example[번호에서 칸을 읽기]
$m = 40$이라 합시다. $40 = 2 \cdot 20 = 2^2 \cdot 10 = 2^3 \cdot 5$이고 $5$는 홀수이므로 (5)의 쌍은 $(r, o) = (3, 5)$입니다. 따라서 $\kappa_1(40) = r + 1 = 4$이고, $o = 2l - 1 = 5$에서 $\kappa_2(40) = 3$입니다. 실제로 $\pi(4, 3) = 2^3 \cdot 5 = 40$입니다. (4)대로 $4 \le 40$, $3 \le 40$입니다.
:::

:::counterexample[지수를 하나 바꾸면 전사가 아닐 수 있다]
$\pi$ 대신 $\rho(k, l) = 2^{k}(2l - 1)$로 정한 함수 $\rho : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$을 생각해 봅시다. $k \ge 1$이면 $2^k = 2 \cdot 2^{k-1}$이므로 $\rho(k, l) = 2 \cdot \bigl(2^{k-1}(2l - 1)\bigr)$은 짝수입니다. 홀수인 $1$은 짝수가 아니므로 $\rho(k, l) = 1$인 $(k, l)$은 없고, $\rho$는 전사가 아닙니다. (5)의 유일성에 의해 $\rho$는 여전히 단사입니다. 지수 $k - 1$의 "$-1$"은 지수 $0$, 곧 홀수인 번호들을 쓰기 위해 있습니다.
:::

:::counterexample[성분의 합으로 보내는 함수의 예]
$s(k, l) = k + l$로 정한 함수 $s : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$은 $s(1, 2) = 3 = s(2, 1)$이고 $(1, 2) \ne (2, 1)$이므로 단사가 아닙니다. 또 $1 \le k$, $1 \le l$이면 $2 \le k + l$이므로 $1$이 값으로 나오지 않아 전사도 아닙니다.
:::

## 확인 질문

:::check[$\pi(5, 4)$를 구하고, $\pi(k, l) = 48$인 $(k, l)$을 찾아라.]
$\pi(5, 4) = 2^4 \cdot 7 = 16 \cdot 7 = 112$입니다. $48 = 2^4 \cdot 3$이고 $3$은 홀수이므로 (5)의 쌍은 $(4, 3)$입니다. 따라서 $k = 4 + 1 = 5$이고 $2l - 1 = 3$에서 $l = 2$입니다. 검산하면 $\pi(5, 2) = 2^4 \cdot 3 = 48$입니다.
:::

:::check[(2)의 $M$은 $N = 1$, $N = 2$일 때 얼마이고, 그때 성분이 $N$ 이하인 칸들의 번호 가운데 가장 큰 것과 같은가?]
$N = 1$이면 $M = 2^0 \cdot 1 = 1$이고, 성분이 $1$ 이하인 칸은 $(1, 1)$ 하나로 번호는 $1$입니다. $N = 2$이면 $M = 2^1 \cdot 3 = 6$이고, 칸 $(1, 1), (1, 2), (2, 1), (2, 2)$의 번호는 $1, 3, 2, 6$이라 가장 큰 것은 $6$입니다. 두 경우 모두 같습니다. 일반적으로 정의에 의해 $M = 2^{N-1}(2N - 1) = \pi(N, N)$이므로, $M$은 성분이 $N$ 이하인 칸의 번호 가운데 하나이고 (2)에 의해 그 가운데 가장 큽니다.
:::
