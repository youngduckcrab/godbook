---
title: 소수의 거듭제곱과 그 약수
title_en: Powers of a Prime and Their Divisors
aliases: [소수의 거듭제곱, 소수 거듭제곱의 약수, 정수의 0제곱, 정수의 지수법칙, prime power, divisors of a prime power]
kind: theorem
field: number-theory
msc: ["11A05", "11A41"]
level: undergrad
summary: 정수의 0제곱을 1로 정하고 0 이상인 정수 지수의 지수법칙을 증명한 뒤, 소수 p의 거듭제곱의 크기와 나눔, pʳ의 양의 약수가 정확히 pʲ (0 ≤ j ≤ r)라는 것, p로 나누어떨어지지 않는 수와 pʳ이 서로소라는 것, 모든 자연수가 pʳm (p는 m을 나누지 않음)으로 한 가지로 쓰인다는 것을 증명한다.
requires: [prime-number, divisibility, divisibility-is-transitive, integer-cancellation, greatest-common-divisor, coprime-divides-product, finite-product, congruence-arithmetic, congruence-modulo-n, prime-factorization-exists, mathematical-induction, strong-induction, well-ordering-principle, even-and-odd]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 출처는 이 성질들을 번호 붙은 명제로 두지 않는다. 쓰는 곳은 13.1절 Lemma 13.7 의 증명 p.160, 14.2절 Theorem 14.15 의 증명 p.172, 15.1절 Lemma 15.5 의 증명 p.182, Theorem 15.7 의 증명 p.183. 산술의 기본 정리는 2.2절 Theorem 2.15 p.22
    checked: original
    note: "출처는 소수의 거듭제곱의 약수와 'p 를 떼어 낸 꼴'을 정리로 진술하지 않고(검색어 'power of p' 13건(모두 13·15장의 p-군의 정의와 증명 안), 'prime power' 1건(13.1절 첫머리, 유한 아벨군의 분해), 'largest power' 1건, 'highest power' 0건, 'p-part' 0건, 'powers of p' 1건, 'positive power' 3건(4.1절 p.48 의 '양의 거듭제곱' 1건과 15장 증명 안 2건), 2.4절 연습문제 1–31 을 처음부터 읽었다), 군의 증명 안에서 바로 쓴다. Lemma 13.7 의 증명(p.160)은 '위수 pⁿ 인 군의 원소의 위수는 pⁿ 을 나누므로 p 의 거듭제곱'이라 적고(이 항목의 (3)), '|G| 가 p 의 거듭제곱이 아니면 p 가 아닌 소인수 q 가 있다'고 적는다(이 항목의 (6)의 대우). Theorem 14.15 의 증명(p.172)은 'n_i > 1 이고 n_i | |G| 이므로 p 가 각 n_i 를 나눈다'고 적는다 — |G| = pⁿ 이므로 (3)과 (2)이다. Lemma 15.5 의 증명(p.182)은 'P 의 위수는 |G| 를 나누는 p 의 가장 큰 거듭제곱'이라 적고, Theorem 15.7 의 증명(p.183)은 '|G| = p^r m, |P| = p^r' 로 쓴 뒤 '[Q : N(P_i) ∩ Q] 는 |Q| = p^r 의 약수이므로 p 의 거듭제곱'이라 적는다 — 각각 (5)와 (3)이다. Theorem 15.8 의 증명(p.183)은 '|S| 는 p 의 양의 거듭제곱들과 1 의 합이므로 |S| ≡ 1 (mod p)'라 적는데, 이것이 (7)이 쓰이는 꼴이다. Lemma 13.8 의 증명(p.160)은 '항등원의 위수는 p_i⁰ = 1' 이라 적어 소수의 0제곱을 쓴다. 확인 질문 '소수 $p$와 $0$ 이상인 정수 $j$에 대하여 $p^j \\equiv 1 \\pmod p$인 $j$는 무엇인가?'는 같은 사실을 되묻는다. 예시 '$p = 2$와 $n = 24$'의 24 = 2³·3 은 출처 15.4절 연습문제 1(p.187, 위수 18, 24, 54, 72, 80 인 군의 실로우 p-부분군의 위수)이 묻는 것과 같은 계산이고, 출처 Example 15.3(p.182)도 60 = 2²·3·5 로 쓴다. 출처의 2.2절 Theorem 2.15(산술의 기본 정리, p.22)는 소인수분해의 존재와 유일성을 진술하는데, 이 항목의 (3)과 (5)의 유일성은 그 유일성을 쓰지 않고 '곱의 한 인수와 서로소인 약수는 다른 인수를 나눈다'는 사실과 정수의 소거로 증명한다. 출처는 3.2절(p.37)에서 군의 원소에 대해 g⁰ = e 와 거듭제곱을 '보통의 대수에서처럼' 정하고 Theorem 3.23(p.37)에서 군의 지수법칙을 진술하며, 정수의 거듭제곱은 4.3절(p.54)의 57 = 2⁰ + 2³ + 2⁴ + 2⁵ 처럼 쓴다. 이 사이트에서는 정수론 입문의 '합동의 계산'이 자연수 지수만 정의했으므로 이 항목에서 0제곱을 더하고 지수법칙을 증명한다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(아벨 코시의 귀납 통독, '출처는 정리로 진술하지 않는다' 를 검색으로 대조). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$p$가 [[prime-number|소수]]라 하자. 정수 $a$와 자연수 $k$에 대한 **거듭제곱** $a^k$는 [[congruence-arithmetic|합동의 계산]]에서 정한 것, 곧 모든 자리가 $a$인 길이 $k$인 열의 [[finite-product|유한 곱]]이다. 나누어떨어짐 $a \mid b$는 [[divisibility|나누어떨어짐]], 최대공약수 $\gcd$와 서로소는 [[greatest-common-divisor|최대공약수]], 합동은 [[congruence-modulo-n|합동]]의 것이다. 아래에서 $j$, $k$, $r$은 $0$ 이상인 정수이다.

**$0$제곱.** 정수 $a$에 대하여 $a^0 = 1$로 정한다. 그러면 $0$ 이상인 모든 정수 $k$에 $a^k$가 하나씩 정해지고, $k \ge 1$이면 이것은 원래의 $a^k$이다.

1. (지수법칙) 정수 $a$에 대하여 다음이 성립한다.
   - (i) $a^1 = a$이고, $0$ 이상인 모든 정수 $k$에서 $a^{k+1} = a^k \cdot a$이다.
   - (ii) $a^{j+k} = a^j \cdot a^k$이다.
   - (iii) $(a^j)^k = a^{jk}$이다.
   - (iv) $1^k = 1$이다. $a$가 자연수이면 $a^k$도 자연수이다.
2. (크기와 나눔) $p \ge 2$이고 $p^j \ge 1$이다. $j \ge 1$이면 $p \mid p^j$이고 $p \le p^j$이다. $j < r$이면 $p^j < p^r$이고, 따라서 $p^j = p^r$이면 $j = r$이다. $p^j \mid p^r$인 것은 정확히 $j \le r$일 때이고, 그때 $p^r = p^j \cdot p^{r-j}$이다.
3. (약수) 정수 $d$가 $p^r$의 양의 약수인 것은 정확히 $0 \le j \le r$이고 $d = p^j$인 정수 $j$가 있을 때이다. 그런 $j$는 하나뿐이다.
4. (서로소) $b$가 $p \nmid b$인 정수이면 $\gcd(p^r, b) = 1$이다. 따라서 이때 모든 정수 $a$에 대하여 $p^r \mid ab$이면 $p^r \mid a$이다.
5. ($p$를 떼어 낸 꼴) 모든 자연수 $n$에 대하여, $0$ 이상인 정수 $r$과 자연수 $m$으로서
   $$n = p^r \cdot m, \qquad p \nmid m$$
   인 쌍 $(r, m)$이 정확히 하나 있다. 이 $r$에 대하여, $0$ 이상인 정수 $k$가 $p^k \mid n$인 것은 정확히 $k \le r$일 때이다. 특히 $p \nmid n$인 것은 정확히 $r = 0$일 때이다.
6. (소수인 거듭제곱과 $p$만으로 나누어지는 수) $p^j$가 소수인 것은 정확히 $j = 1$일 때이다. 자연수 $n$을 나누는 모든 소수 $q$가 $q = p$를 만족하면, $n = p^r$인 $0$ 이상인 정수 $r$이 있다.
7. (법 $p$) $j \ge 1$이면 $p^j \equiv 0 \pmod p$이다. $p^0 = 1$은 $p$로 나누어떨어지지 않는다.
:::

:::english
Let $p$ be a prime. For an integer $a$ and a natural number $k$, the **power** $a^k$ is the one defined in the entry on congruence arithmetic, namely the finite product of the sequence of length $k$ all of whose terms are $a$. Divisibility $a \mid b$, the greatest common divisor $\gcd$ and coprimality, and congruence are as in the corresponding entries. Below, $j$, $k$, $r$ are integers $\ge 0$.

**The zeroth power.** For an integer $a$ we define $a^0 = 1$. Then $a^k$ is defined for every integer $k \ge 0$, and for $k \ge 1$ it is the original $a^k$.

1. (Laws of exponents) For every integer $a$:
   - (i) $a^1 = a$, and $a^{k+1} = a^k \cdot a$ for every integer $k \ge 0$.
   - (ii) $a^{j+k} = a^j \cdot a^k$.
   - (iii) $(a^j)^k = a^{jk}$.
   - (iv) $1^k = 1$. If $a$ is a natural number, then so is $a^k$.
2. (Size and divisibility) $p \ge 2$ and $p^j \ge 1$. If $j \ge 1$, then $p \mid p^j$ and $p \le p^j$. If $j < r$, then $p^j < p^r$; hence $p^j = p^r$ implies $j = r$. We have $p^j \mid p^r$ if and only if $j \le r$, and in that case $p^r = p^j \cdot p^{r-j}$.
3. (Divisors) An integer $d$ is a positive divisor of $p^r$ if and only if there is an integer $j$ with $0 \le j \le r$ and $d = p^j$. Such a $j$ is unique.
4. (Coprimality) If $b$ is an integer with $p \nmid b$, then $\gcd(p^r, b) = 1$. Hence, in that case, for every integer $a$, if $p^r \mid ab$ then $p^r \mid a$.
5. (Splitting off $p$) For every natural number $n$ there is exactly one pair $(r, m)$ of an integer $r \ge 0$ and a natural number $m$ with
   $$n = p^r \cdot m, \qquad p \nmid m.$$
   For this $r$, an integer $k \ge 0$ satisfies $p^k \mid n$ if and only if $k \le r$. In particular, $p \nmid n$ if and only if $r = 0$.
6. (Prime powers that are prime, and numbers divisible only by $p$) $p^j$ is prime if and only if $j = 1$. If every prime $q$ dividing a natural number $n$ satisfies $q = p$, then there is an integer $r \ge 0$ with $n = p^r$.
7. (Modulo $p$) If $j \ge 1$, then $p^j \equiv 0 \pmod p$. The number $p^0 = 1$ is not divisible by $p$.
:::

## 직관

소수 $p$의 거듭제곱 $p^r$은 $p$를 $r$번 곱한 수입니다. 이 수의 약수를 고르는 것은 "$p$를 몇 개 가져갈지" 정하는 것과 같아서, $0$개부터 $r$개까지 $r + 1$가지뿐입니다((3)). 상자에 같은 구슬만 $r$개 들어 있으면 꺼낼 수 있는 묶음은 구슬의 개수로만 구별되는 것과 같습니다. 비유가 정의와 맞는 곳은 "양의 약수 $d$에 대해 $p^r = d \cdot c$인 $c$가 있다"를 "구슬을 둘로 나눈다"로 읽은 것이고, 밑이 소수가 아닌 $4$이면 이 비유가 맞지 않습니다(아래 반례).

자연수 $n$은 $p$를 몇 번 나눌 수 있는지 세어 $n = p^r m$으로 쓸 수 있습니다. $m$이 더는 $p$로 나누어지지 않을 때 멈춥니다. 어떻게 나누어 가도 $r$과 $m$은 하나로 정해지고((5)의 유일성), $p^k$가 $n$을 나누는 것은 정확히 $k$가 그 횟수 $r$ 이하일 때입니다((5)). 출처 Judson 은 실로우 정리의 증명에서 유한군의 원소의 개수를 $|G| = p^r m$으로 이렇게 씁니다.

정수론 입문은 거듭제곱 $a^k$를 자연수 $k$에만 정했습니다. 이 항목은 $a^0 = 1$을 더해 $p^0 = 1$도 "$p$의 거듭제곱"에 넣습니다. 그래야 $p$로 나누어지지 않는 자연수 $n$도 $n = p^0 \cdot n$으로 같은 꼴에 들어갑니다.

## 증명

:::idea
(1)은 $a^{k+1} = a^k \cdot a$에서 $k$에 대한 귀납이다. (3)은 $r$에 대한 귀납으로, 약수 $d$가 $p$로 나누어지면 $p$ 하나를 떼어 내고, 나누어지지 않으면 $d$와 $p$가 서로소이므로 $p$ 하나를 버린다. (5)의 존재는 $p$를 하나씩 떼어 내는 강한 귀납, 유일성은 소거이다.
:::

:::hint
(3)의 귀납 단계에서 $d \mid p \cdot p^r$이고 $p \nmid d$이면 $\gcd(d, p)$는 $p$의 양의 약수이면서 $p$가 아니므로 $1$입니다.
:::

:::hint
(5)의 유일성에서 $r < s$이고 $p^r m = p^s m'$이라 하면 양변에서 $p^r$을 소거해 $m = p^{s-r} m'$을 얻습니다. 그러면 $p \mid m$이 됩니다.
:::

:::proof
정수의 계산(교환·결합·분배법칙, $1 \cdot a = a$)은 [[well-ordering-principle|정렬 원리]]의 진술에서 받아들인 계산 법칙으로 쓰고, 정수끼리의 곱이 정수라는 것은 [[even-and-odd|짝수와 홀수]]에서 받아들인 사실을 쓴다. 부등식은 [[prime-number|소수]]의 진술의 (Z1)–(Z3)과 정렬 원리의 진술의 (Z5)–(Z7), (L1), (L2)를 인용한다. 소수의 진술에서 자연수 $n$의 양의 약수 $d$는 $1 \le d \le n$을 만족한다는 것을 "약수의 크기"라 부른다.

**$0$제곱.** $k \ge 1$이면 $a^k$는 원래 정의되어 있었고 이 정의는 그것을 바꾸지 않는다. $k = 0$에는 $a^0 = 1$ 하나를 정했다.

**(1)** (i) [[finite-product|유한 곱]]의 정의에서 길이 $1$인 열의 곱은 그 항이므로 $a^1 = a$이다. $k \ge 1$이면 모든 자리가 $a$인 길이 $k + 1$인 열의 곱은 유한 곱의 정의에 의해 (처음 $k$개의 곱)$\cdot a$이고, 처음 $k$개는 모든 자리가 $a$인 길이 $k$인 열이므로 그 곱은 $a^k$이다. 따라서 $a^{k+1} = a^k \cdot a$이다. $k = 0$이면 $a^{0+1} = a = 1 \cdot a = a^0 \cdot a$이다.

(ii) $j$를 고정하고 $k$에 대한 귀납([[mathematical-induction|수학적 귀납법]]의 시작점이 $0$인 꼴)으로 보인다. $k = 0$이면 $a^{j+0} = a^j = a^j \cdot 1 = a^j \cdot a^0$이다. $a^{j+k} = a^j \cdot a^k$라 하면 (i)에 의해
$$a^{j+(k+1)} = a^{(j+k)+1} = a^{j+k} \cdot a = (a^j \cdot a^k) \cdot a = a^j \cdot (a^k \cdot a) = a^j \cdot a^{k+1}$$
이다.

(iv) $k = 0$이면 $1^0 = 1$이다. $1^k = 1$이면 (i)에 의해 $1^{k+1} = 1^k \cdot 1 = 1$이다. 따라서 귀납법에 의해 모든 $k$에서 $1^k = 1$이다. $a$가 자연수이고 $k \ge 1$이면 $a^k$는 양의 정수들의 곱이므로 유한 곱의 (P5)에 의해 양의 정수, 곧 자연수이다. $k = 0$이면 $a^0 = 1$은 자연수이다.

(iii) $j$를 고정하고 $k$에 대한 귀납으로 보인다. $k = 0$이면 $(a^j)^0 = 1 = a^0 = a^{j \cdot 0}$이다. $(a^j)^k = a^{jk}$라 하면 (i)과 (ii)에 의해
$$(a^j)^{k+1} = (a^j)^k \cdot a^j = a^{jk} \cdot a^j = a^{jk + j} = a^{j(k+1)}$$
이다.

**(2)** $p$는 소수이므로 자연수이고 $p \ne 1$이다. (Z5)에 의해 $p < 1$, $p = 1$, $p > 1$ 가운데 하나인데, 자연수는 $1$ 이상이므로((Z1)) $p < 1$이 아니고((L1)), $p \ne 1$이므로 $p > 1$이며, (Z1)에 의해 $p \ge 2$이다.

(1)(iv)에 의해 $p^j$는 자연수이므로 (Z1)에 의해 $p^j \ge 1$이다. $j \ge 1$이면 (1)(i)에 의해 $p^j = p^{j-1} \cdot p = p \cdot p^{j-1}$이고 $p^{j-1}$은 정수이므로 $p \mid p^j$이다([[divisibility|나누어떨어짐]]). 또 $p^{j-1} \ge 1$이고 $p > 0$이므로 (Z3)에 의해 $p = 1 \cdot p \le p^{j-1} \cdot p = p^j$이다.

$j < r$이라 하자. $r - j \ge 1$이므로 (1)(ii)에 의해 $p^r = p^j \cdot p^{r-j}$이고, 앞 문단에 의해 $p^{r-j} \ge p \ge 2$이다. $p^j > 0$이므로 (Z3)에 의해 $p^r = p^j \cdot p^{r-j} \ge p^j \cdot 2 = p^j + p^j$이고, $0 < p^j$에 (Z7)을 쓰면 $p^j = 0 + p^j < p^j + p^j$이다. (Z6)에 의해 $p^j < p^r$이다. 이제 $p^j = p^r$이라 하자. $j < r$이면 $p^j < p^r$이 되어 (L1)에 어긋나고, $r < j$이면 같은 이유로 $p^r < p^j$가 되어 어긋난다. (Z5)에 의해 $j = r$이다.

$j \le r$이면 $r - j \ge 0$이고 (1)(ii)에 의해 $p^r = p^j \cdot p^{r-j}$이므로 $p^j \mid p^r$이다. 거꾸로 $p^j \mid p^r$이라 하고 $j \le r$이 아니라고 하자. (Z5)에 의해 $r < j$이므로 위에서 $p^r < p^j$이다. $p^r = p^j \cdot c$인 정수 $c$가 있다. $c \le 0$이면 (Z2)에 의해 $p^j \cdot c \le 0$인데 $p^r \ge 1$이므로 어긋난다. 따라서 $c > 0$이고 (Z1)에 의해 $c \ge 1$이며, (Z3)에 의해 $p^r = p^j \cdot c \ge p^j \cdot 1 = p^j$이다. 이는 $p^r < p^j$와 함께 (L1)에 어긋난다. 따라서 $j \le r$이다.

**(3)** 먼저 $0 \le j \le r$이면 (2)에 의해 $p^j \mid p^r$이고 $p^j \ge 1$이므로 $p^j$는 $p^r$의 양의 약수이다. 또 $d = p^j = p^{j'}$이면 (2)에 의해 $j = j'$이므로 그런 $j$는 하나뿐이다.

남은 것은 "$p^r$의 모든 양의 약수 $d$는 $0 \le j \le r$인 어떤 $j$에 대해 $d = p^j$"이다. $r$에 대한 귀납(시작점 $0$)으로 보인다.

$r = 0$: $d$가 $p^0 = 1$의 양의 약수이면 약수의 크기에 의해 $1 \le d \le 1$이고 (L2)에 의해 $d = 1 = p^0$이다.

귀납 단계: $p^r$의 양의 약수가 모두 $p^j$($0 \le j \le r$) 꼴이라 하고, $d$가 $p^{r+1}$의 양의 약수라 하자. $p^{r+1} = d \cdot c$인 정수 $c$가 있고, (1)(i)에 의해 $p^{r+1} = p^r \cdot p = p \cdot p^r$이다.
- $p \mid d$인 경우. $d = p \cdot d'$인 정수 $d'$이 있다. $d' \le 0$이면 (Z2)에 의해 $d = p \cdot d' \le 0$이 되어 $d > 0$에 어긋나므로 $d' > 0$이다. $p \cdot p^r = p \cdot (d' \cdot c)$이고 $p \ne 0$이므로 [[integer-cancellation|정수의 소거]]의 (2)에 의해 $p^r = d' \cdot c$이다. 따라서 $d'$은 $p^r$의 양의 약수이고, 귀납 가정에 의해 $d' = p^j$인 $0 \le j \le r$이 있다. (1)(i)에 의해 $d = p \cdot p^j = p^{j+1}$이고 $0 \le j + 1 \le r + 1$이다.
- $p \nmid d$인 경우. $d \ne 0$이므로 $g = \gcd(d, p)$가 정의되고, [[greatest-common-divisor|최대공약수]]의 (i)에 의해 $g \ge 1$이며 $g \mid p$이다. 곧 $g$는 소수 $p$의 양의 약수이므로 $g = 1$이거나 $g = p$이다. $g = p$이면 $p = g \mid d$가 되어 가정에 어긋나므로 $g = 1$이다. $d \mid p \cdot p^r$이고 $\gcd(d, p) = 1$이므로 [[coprime-divides-product|서로소와 곱의 나누어떨어짐]]에 의해 $d \mid p^r$이다. 귀납 가정에 의해 $d = p^j$인 $0 \le j \le r$이 있고, $j \le r + 1$이다.

두 경우 모두 $d = p^j$인 $0 \le j \le r + 1$이 있다. 귀납법에 의해 모든 $r \ge 0$에서 성립한다.

**(4)** $p \mid 0$이므로($0 = p \cdot 0$) $b \ne 0$이고, $p^r \ge 1$이므로 $p^r \ne 0$이다. 따라서 $g = \gcd(p^r, b)$가 정의되고, 최대공약수의 (i)에 의해 $g \ge 1$이며 $g \mid p^r$이다. (3)에 의해 $g = p^j$인 $0 \le j \le r$이 있다. $j \ge 1$이면 (2)에 의해 $p \mid p^j = g$이고 $g \mid b$이므로 [[divisibility-is-transitive|나누어떨어짐의 추이성]]에 의해 $p \mid b$가 되어 가정에 어긋난다. 따라서 $j = 0$이고 $g = p^0 = 1$이다.

이제 $p^r \mid ab = ba$라 하자. $\gcd(p^r, b) = 1$이므로 서로소와 곱의 나누어떨어짐을 $p^r$, $b$, $a$에 쓰면 $p^r \mid a$이다.

**(5)** *존재.* 자연수 $n$에 대한 명제 "$n = p^r \cdot m$이고 $p \nmid m$인 $0$ 이상인 정수 $r$과 자연수 $m$이 있다"를 [[strong-induction|강한 귀납법]](시작점 $1$, 기초 단계 하나)으로 보인다. $n = 1$이면 $p \ge 2$이고 $1$의 양의 약수는 $1$ 이하이므로(약수의 크기) $p \nmid 1$이고, $1 = p^0 \cdot 1$이다. $t \ge 1$이고 $1, \dots, t$에서 명제가 참이라 하자. $n = t + 1$이 $p \nmid n$이면 $n = p^0 \cdot n$이다. $p \mid n$이면 $n = p \cdot n'$인 정수 $n'$이 있고, 위 (3)의 증명과 같이 (Z2)에 의해 $n' > 0$이다. $p \ge 2$이므로 (Z3)과 (Z7)에 의해 $n = p \cdot n' \ge 2n' = n' + n' > n'$이고, $n' < t + 1$이므로 (Z1)과 (Z7)에 의해 $1 \le n' \le t$이다. 귀납 가정에 의해 $n' = p^{r'} \cdot m$이고 $p \nmid m$인 $r' \ge 0$과 자연수 $m$이 있으며, (1)(i)에 의해 $n = p \cdot (p^{r'} \cdot m) = (p^{r'} \cdot p) \cdot m = p^{r'+1} \cdot m$이다.

*이 $r$에서의 나눔.* $n = p^r \cdot m$, $p \nmid m$이라 하자. $k \le r$이면 (2)에 의해 $p^k \mid p^r$이고 $p^r \mid n$이므로 나누어떨어짐의 추이성에 의해 $p^k \mid n$이다. $r < k$이고 $p^k \mid n$이라 하자. $n = p^k \cdot c$인 정수 $c$가 있고, (1)(ii)에 의해 $p^r \cdot m = p^r \cdot (p^{k-r} \cdot c)$이다. $p^r \ne 0$이므로 정수의 소거의 (2)에 의해 $m = p^{k-r} \cdot c$이다. $k - r \ge 1$이므로 (2)에 의해 $p^{k-r} = p \cdot u$인 정수 $u$가 있고, $m = p \cdot (u \cdot c)$이므로 $p \mid m$이 되어 어긋난다. 따라서 $p^k \mid n$인 것은 정확히 $k \le r$일 때이다. $k = 1$에 쓰면 $p \mid n$인 것은 정확히 $1 \le r$일 때이므로, (Z5)와 (Z1)에 의해 $p \nmid n$인 것은 정확히 $r = 0$일 때이다.

*유일성.* $n = p^r \cdot m = p^s \cdot m'$이고 $p \nmid m$, $p \nmid m'$이라 하자. 바로 앞 문단을 쌍 $(r, m)$에 쓰면 $p^s \mid n$이므로 $s \le r$이고, 쌍 $(s, m')$에 쓰면 $p^r \mid n$이므로 $r \le s$이다. (L2)에 의해 $r = s$이고, $p^r \cdot m = p^r \cdot m'$에서 정수의 소거의 (2)에 의해 $m = m'$이다.

**(6)** $p^0 = 1$은 소수가 아니고(소수의 정의), $p^1 = p$는 소수이다. $j \ge 2$라 하자. (2)에 의해 $p \mid p^j$이고 $1 < j$이므로 $p = p^1 < p^j$이며, $p \ge 2 > 1$이다. 따라서 $p$는 $1$도 $p^j$도 아닌 $p^j$의 양의 약수이고, $p^j \ge p \ge 2$이므로 소수의 진술에 의해 $p^j$는 소수가 아니다.

자연수 $n$을 나누는 모든 소수가 $p$라 하자. (5)에 의해 $n = p^r \cdot m$이고 $p \nmid m$인 $r$, $m$이 있다. $m \ne 1$이라 하면 $m$은 자연수이므로 (Z5)와 (Z1)에 의해 $m \ge 2$이고, [[prime-factorization-exists|소인수분해의 존재]]에 의해 $m = q_1 \cdot q_2 \cdots q_\ell$인 소수 $q_1, \dots, q_\ell$이 있다. 유한 곱의 (P4)에 의해 $q_1 \mid m$이고 $m \mid n$($n = m \cdot p^r$)이므로 $q_1 \mid n$이다. 가정에 의해 $q_1 = p$이므로 $p \mid m$이 되어 어긋난다. 따라서 $m = 1$이고 $n = p^r$이다.

**(7)** $j \ge 1$이면 (2)에 의해 $p \mid p^j = p^j - 0$이므로 [[congruence-modulo-n|합동]]의 정의에 의해 $p^j \equiv 0 \pmod p$이다. $p \mid 1$이면 약수의 크기에 의해 $p \le 1$이 되어 $p \ge 2$와 함께 (L1)에 어긋나므로, $p^0 = 1$은 $p$로 나누어떨어지지 않는다. $\blacksquare$
:::

## 예시와 반례

:::example[$p = 2$와 $n = 24$]
$24 = 8 \cdot 3$이고 (1)(i)에 의해 $2^3 = 8$이며, $3 = 2 \cdot 1 + 1$은 홀수이므로 $2 \nmid 3$입니다(짝수이면서 홀수인 정수는 없습니다, [[even-and-odd|짝수와 홀수]]). 따라서 (5)의 쌍은 $(r, m) = (3, 3)$이고, $2^k \mid 24$인 것은 정확히 $k \le 3$일 때입니다. 예를 들어 $2^4 = 16$은 $24$를 나누지 않습니다. 또 (3)에 의해 $2^3 = 8$의 양의 약수는 정확히 $2^0, 2^1, 2^2, 2^3$, 곧 $1, 2, 4, 8$입니다.

$n = 1$에서는 $(r, m) = (0, 1)$입니다. $p$로 나누어떨어지지 않는 자연수에서는 늘 $r = 0$, $m = n$입니다.
:::

:::counterexample[밑이 소수가 아닌 $4$의 예]
(3)은 밑이 소수일 때의 진술입니다. 밑을 $4$로, $r$을 $1$로 바꾸어 옮기면 "$4^1 = 4$의 양의 약수는 $4^0 = 1$과 $4^1 = 4$뿐"이라는 말이 되는데, $4 = 2 \cdot 2$이므로 $2$도 $4$의 양의 약수입니다. 증명에서는 "$\gcd(d, p)$는 $p$의 양의 약수이므로 $1$이거나 $p$"라는 단계에서 $p$가 소수라는 것을 썼습니다. $d = 2$, $p = 4$이면 $\gcd(2, 4) = 2$여서 이 단계가 깨집니다.
:::

:::counterexample[$p \mid b$이면 (4)가 깨질 수 있다]
$p = 2$, $r = 2$, $a = 2$, $b = 2$이면 $p^r = 4$는 $ab = 4$를 나누지만 $a = 2$를 나누지 않습니다(약수의 크기에 의해 $2$의 양의 약수는 $2$ 이하). 여기서는 $2 \mid b$여서 (4)의 가정이 성립하지 않고, 실제로 $\gcd(4, 2) = 2 \ne 1$입니다.
:::

## 확인 질문

:::check[$p = 5$일 때 $n = 250$의 쌍 $(r, m)$은 무엇인가?]
$250 = 125 \cdot 2$이고 $5^3 = 125$입니다. $5$는 $2$를 나누지 않습니다($2$의 양의 약수는 $2$ 이하). 따라서 (5)에 의해 $(r, m) = (3, 2)$이고, $5^k \mid 250$인 것은 정확히 $k \le 3$일 때입니다.
:::

:::check[소수 $p$와 $0$ 이상인 정수 $j$에 대하여 $p^j \equiv 1 \pmod p$인 $j$는 무엇인가?]
$j = 0$뿐입니다. $p^0 = 1$이고 $1 - 1 = 0 = p \cdot 0$이므로 $p^0 \equiv 1 \pmod p$입니다. $j \ge 1$이면 (2)에 의해 $p^j = p \cdot t$인 정수 $t$가 있습니다. $p^j \equiv 1 \pmod p$이기도 하면 $p^j - 1 = p \cdot c$인 정수 $c$가 있어 $1 = p \cdot t - p \cdot c = p \cdot (t - c)$, 곧 $p \mid 1$이 되는데 (7)에 의해 그렇지 않습니다.
:::
