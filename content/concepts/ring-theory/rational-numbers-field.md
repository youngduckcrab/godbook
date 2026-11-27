---
title: 유리수체
title_en: The Field of Rational Numbers
aliases: [유리수의 체, 기약분수, 공분모, field of rational numbers, lowest terms, common denominator]
kind: proposition
field: ring-theory
msc: ["12", "11A05"]
level: undergrad
summary: 유리수 전체 ℚ 는 실수체 ℝ 의 부분체이고 정수의 환 ℤ 를 부분환으로 갖는다. 모든 유리수는 분모가 양수이고 분자와 분모가 서로소인 꼴로 정확히 한 가지로 쓰이며, 유한 개의 유리수와 유리수 계수의 다항식에는 공분모가 있어 자연수를 곱하면 정수 계수가 된다. ℤ[X] ⊆ ℚ[X] ⊆ ℝ[X] 이다.
requires: [prime-number, well-ordering-principle, even-and-odd, divisibility, integer-cancellation, greatest-common-divisor, coprime-divides-product, rational-and-irrational-numbers, mathematical-induction, real-number-arithmetic, power-in-a-group, ring, ring-basic-properties, ring-examples, subring, ring-homomorphism, field, polynomial-ring, degree-of-a-polynomial, subfield]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "16.1절 Rings, Example 16.9 (p.193); 18.1절 Fields of Fractions 첫머리 (p.225); 17.3절 Irreducible Polynomials, Lemma 17.13 (p.216); 16.1절 Rings, Example 16.2 (p.191)"
    checked: original
    note: "출처 Example 16.9(p.193)는 부분환의 사슬 'Z ⊂ Q ⊂ R ⊂ C' 를 적는다. 이 항목의 (1)은 그 가운데 ℚ 가 ℝ 의 부분체라는 것을 판정법으로 증명한다. 출처 18.1절 첫머리(p.225)는 분수 a/b 와 c/d 가 같은 것이 ad = bc 일 때라는 것을 분수체를 만드는 동기로 적는데, (2)의 (i)이 이것을 실수의 계산으로 보인다. (2)의 기약분수 꼴과 (3)의 공분모는 출처 Lemma 17.13(p.216)의 증명이 계수의 분모를 곱해 c_0 ⋯ c_n 으로 묶고 'Reducing d/(c_0 ⋯ c_n) to its lowest terms' 라고 쓰는 단계를 진술로 올린 것이다. 이 사이트의 유리수 항목은 '둘 다 짝수는 아닌 분수' 꼴을 받아들인 사실로 두는데, 이 항목은 그 사실을 쓰지 않고 최대공약수로 (2)를 증명한다. 예시 '분모를 맞추는 계산' 의 첫 문단은 출처 Lemma 17.13 의 증명(p.216)이 계수의 분모를 곱해 정수 계수로 만드는 것과 같은 계산이다. 반례 '분모의 부호를 정하지 않은 $\\frac{1}{2}$와 $\\frac{-1}{-2}$' 는 출처 18.1절 첫머리(p.225)가 '1/2 = 2/4 = 3/6' 과 'the pairs (3, 6) and (2, 4) both represent the fraction 1/2' 로 한 유리수를 여러 쌍이 나타낸다고 하는 것과 같은 발상이다. 확인 질문 '상수 다항식 $2$는 $\\mathbb{Z}[X]$의 가역원인가? $\\mathbb{Q}[X]$에서는?' 의 ℤ 쪽 답은 출처 16.1절 Example 16.2(p.191)의 'There is no integer that is the multiplicative inverse of 2' 와 같은 내용이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(새로 쓴 가우스 보조정리 증명 통독, 아이젠슈타인의 n = 0 경계 확인). 독립 검토 없음."
added: 2026-11-27
---

:::statement
유리수와 그 집합 $\mathbb{Q}$는 [[rational-and-irrational-numbers|유리수와 무리수]]의 것이고($\mathbb{Q} \subseteq \mathbb{R}$), 실수의 덧셈, 곱셈, $-a$, $a^{-1}$, $a/b = ab^{-1}$은 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다. 환 $\mathbb{Z}$, $\mathbb{R}$는 [[ring-examples|환의 예]]의 (1), (2)의 것이고, 부분체는 [[subfield|부분체]]의 뜻이다. 최대공약수 $\gcd$와 서로소는 [[greatest-common-divisor|최대공약수]]의 것이다.

1. (부분체) $\mathbb{Q}$는 체 $\mathbb{R}$의 부분체이다. 따라서 실수의 덧셈과 곱셈을 $\mathbb{Q}$로 제한한 연산으로 $\mathbb{Q}$는 체이다. 이 체를 **유리수체**(field of rational numbers)라 한다. $\mathbb{Z} \subseteq \mathbb{Q}$이고, $\mathbb{Z}$는 $1$을 포함하는 체 $\mathbb{Q}$의 부분환이다.
2. (기약분수 꼴)
   - (i) 정수 $a$, $c$와 $0$이 아닌 정수 $b$, $d$에 대하여 $a/b = c/d$인 것은 정확히 $ad = bc$일 때이다.
   - (ii) 모든 유리수 $x$는 $x = a/b$이고 $b \ge 1$이며 $\gcd(a, b) = 1$인 정수 $a$, $b$로 쓸 수 있다. 이것을 $x$의 **기약분수 꼴**이라 한다.
   - (iii) 기약분수 꼴은 하나뿐이다. 곧 $a/b = c/d$이고 $b, d \ge 1$, $\gcd(a, b) = \gcd(c, d) = 1$이면 $a = c$이고 $b = d$이다.
3. (공분모) $n \ge 1$인 정수 $n$과 유리수의 열 $q_1, \dots, q_n$에 대하여, 모든 $k \in \{1, \dots, n\}$에서 $d q_k$가 정수인 자연수 $d$가 있다. 따라서 모든 $f \in \mathbb{Q}[X]$에 대하여 $df \in \mathbb{Z}[X]$인 자연수 $d$가 있다.
4. (다항식환) [[polynomial-ring|다항식환]]의 (7)에 의해 $\mathbb{Z}[X] \subseteq \mathbb{Q}[X] \subseteq \mathbb{R}[X]$이고, 작은 쪽의 다항식의 계수와 합, 차, 곱, 그리고 영다항식인지와 차수, 최고차계수는 큰 쪽의 다항식으로 보아도 같다.
5. (정수배) 정수 $n$과 $x \in \mathbb{Q}$에 대하여 환 $\mathbb{Q}$에서의 정수배 $n \cdot x$([[ring|환]]의 표기)는 곱 $nx$이다. 특히 $n \cdot 1 = n$이다.
:::

:::english
Rational numbers and their set $\mathbb{Q}$ are those of rational and irrational numbers ($\mathbb{Q} \subseteq \mathbb{R}$), and the addition, multiplication, $-a$, $a^{-1}$ and $a/b = ab^{-1}$ of real numbers are those of the arithmetic of real numbers. The rings $\mathbb{Z}$ and $\mathbb{R}$ are those of items (1) and (2) of the examples of rings, and subfields are as in subfields. The greatest common divisor $\gcd$ and coprimality are those of the greatest common divisor.

1. (Subfield) $\mathbb{Q}$ is a subfield of the field $\mathbb{R}$. Hence $\mathbb{Q}$ is a field under the addition and multiplication of real numbers restricted to $\mathbb{Q}$. This field is called the **field of rational numbers**. Moreover $\mathbb{Z} \subseteq \mathbb{Q}$, and $\mathbb{Z}$ is a subring of the field $\mathbb{Q}$ containing $1$.
2. (Lowest terms)
   - (i) For integers $a$, $c$ and nonzero integers $b$, $d$, we have $a/b = c/d$ if and only if $ad = bc$.
   - (ii) Every rational number $x$ can be written as $x = a/b$ with integers $a$, $b$ such that $b \ge 1$ and $\gcd(a, b) = 1$. This is called the **lowest terms** of $x$.
   - (iii) The lowest terms are unique: if $a/b = c/d$ with $b, d \ge 1$ and $\gcd(a, b) = \gcd(c, d) = 1$, then $a = c$ and $b = d$.
3. (Common denominators) For an integer $n \ge 1$ and a sequence $q_1, \dots, q_n$ of rational numbers there is a natural number $d$ such that $d q_k$ is an integer for every $k \in \{1, \dots, n\}$. Hence for every $f \in \mathbb{Q}[X]$ there is a natural number $d$ with $df \in \mathbb{Z}[X]$.
4. (Polynomial rings) By item (7) of the polynomial ring, $\mathbb{Z}[X] \subseteq \mathbb{Q}[X] \subseteq \mathbb{R}[X]$, and the coefficients, sums, differences and products of polynomials of the smaller ring, as well as whether they are zero and their degrees and leading coefficients, are the same when they are regarded as polynomials of the larger ring.
5. (Integer multiples) For an integer $n$ and $x \in \mathbb{Q}$, the integer multiple $n \cdot x$ in the ring $\mathbb{Q}$ (notation of rings) is the product $nx$. In particular $n \cdot 1 = n$.
:::

## 직관

유리수는 정수를 $0$이 아닌 정수로 나눈 실수이고, 유리수끼리 더하고 빼고 곱하고 $0$이 아닌 유리수로 나누어도 다시 유리수입니다. 그래서 $\mathbb{Q}$는 $\mathbb{R}$ 안의 작은 체입니다((1)). 정수 계수의 다항식을 유리수체 위의 다항식으로 보면 체 위의 나눗셈 정리와 기약 다항식의 성질을 쓸 수 있고, 다시 정수 계수로 돌아오는 다리가 (3)의 공분모입니다. 분수 몇 개를 더할 때 분모를 통분하듯이, 다항식의 모든 계수의 분모를 한꺼번에 지울 수 있는 자연수가 있습니다.

$\frac{2}{4}$와 $\frac{1}{2}$처럼 같은 유리수를 여러 분수로 쓸 수 있지만, 분모를 양수로 하고 분자와 분모의 공약수를 모두 약분하면 한 가지로 정해집니다((2)). 분모의 부호를 정하지 않으면 $\frac{1}{2} = \frac{-1}{-2}$처럼 두 가지가 남습니다.

## 증명

:::idea
(1)은 부분체의 판정법에 분수의 계산을 넣는다. (2)는 분자와 분모를 최대공약수로 나누고, 유일성은 서로소인 수가 곱을 나누면 다른 인수를 나눈다는 것으로 보인다. (3)은 분모들을 곱한다.
:::

:::hint
(3)은 "처음 $k$개의 유리수에 공분모가 있다"를 $k$에 대한 귀납법으로 보이면 고르는 일 없이 됩니다.
:::

:::proof
**쓰는 사실.** 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K12)를 쓴다. 특히 (K7)에 의해 정수끼리의 합과 곱은 정수로 계산하든 실수로 계산하든 같고, (K12)의 (vi)에 의해 $0$이 아닌 $b$, $d$에서 $bd \ne 0$, $(bd)^{-1} = b^{-1}d^{-1}$이다. 정수끼리 더하고 빼고 곱한 것이 정수라는 것은 [[even-and-odd|짝수와 홀수]]의 받아들인 사실이고, 정수의 순서는 [[prime-number|소수]]의 (Z1)–(Z3)과 [[well-ordering-principle|정렬 원리]]의 (Z5)–(Z7), (L1), (L2)를 쓴다.

**1.** [[field|가역원과 체]]의 (4)에 의해 $\mathbb{R}$은 체이다. 부분체의 (1)의 세 조건을 확인한다. $1 = 1 \cdot 1^{-1} = 1/1$이므로 $1 \in \mathbb{Q}$이다($1 \cdot 1 = 1$이므로 (K8)에 의해 $1^{-1} = 1$). $x = a/b$, $y = c/d$($b, d \ne 0$)이면
$$
\begin{aligned}
x - y &= (ad - bc)(bd)^{-1}, \\
xy &= (ac)(bd)^{-1}
\end{aligned}
$$
이다. 앞의 것은 $(ad - bc)b^{-1}d^{-1} = a b^{-1} (d d^{-1}) - c d^{-1}(b b^{-1}) = ab^{-1} - cd^{-1}$에서, 뒤의 것은 교환법칙과 결합법칙에서 나온다. $ad - bc$, $ac$, $bd$는 정수이고 $bd \ne 0$이므로 $x - y$, $xy \in \mathbb{Q}$이다. $x = a/b \ne 0$이면 $a \ne 0$이고(그렇지 않으면 $x = 0b^{-1} = 0$), $(ab^{-1})(ba^{-1}) = (aa^{-1})(bb^{-1}) = 1$이므로 (K8)에 의해 $x^{-1} = b/a \in \mathbb{Q}$이다. 따라서 $\mathbb{Q}$는 $\mathbb{R}$의 부분체이다. 정수 $n$은 $n = n \cdot 1 = n/1$이므로 $\mathbb{Z} \subseteq \mathbb{Q}$이다. [[subring|부분환]]의 (4)에 의해 $\mathbb{Z}$는 $\mathbb{R}$의 부분환이고, $\mathbb{Q}$가 $\mathbb{R}$의 부분환이므로 부분환의 (3)의 (iii)에 의해 $\mathbb{Z}$는 환 $\mathbb{Q}$의 부분환이다. $1 \in \mathbb{Z}$이다.

**2.** (i) $ab^{-1} = cd^{-1}$이면 양변에 $bd$를 곱해 $ad = cb$이다. 거꾸로 $ad = bc$이면 양변에 $b^{-1}d^{-1}$을 곱해 $ab^{-1} = cd^{-1}$이다.

(ii) $x = a_0/b_0$($b_0 \ne 0$)라 하자. (Z5)에 의해 $b_0 > 0$이거나 $b_0 < 0$이다. $b_0 < 0$이면 $(-a_0)b_0 = a_0(-b_0)$이므로 (i)에 의해 $x = (-a_0)/(-b_0)$이고 $-b_0 > 0$이다((Z7)). 따라서 $x = a_1/b_1$, $b_1 \ge 1$인 정수 $a_1$, $b_1$이 있다((Z1)). $b_1 \ne 0$이므로 $g = \gcd(a_1, b_1)$이 있고 $g \ge 1$이다([[greatest-common-divisor|최대공약수]]의 (i)). $g$는 공약수이므로 $a_1 = ga$, $b_1 = gb$인 정수 $a$, $b$가 있다. $b \le 0$이면 (Z2)에 의해 $b_1 = gb \le 0$이 되어 어긋나므로 $b > 0$, 곧 $b \ge 1$이다. $a_1 b = gab = a b_1$이므로 (i)에 의해 $x = a/b$이다. $\gcd(a, b) = 1$을 보인다. $1$은 $a$와 $b$의 공약수이다. $e$가 $a$와 $b$의 공약수이고 $e \ge 2$라 하면 $a = ea'$, $b = eb'$이고 $a_1 = (ge)a'$, $b_1 = (ge)b'$이므로 $ge$는 $a_1$과 $b_1$의 공약수이고, 최대공약수의 정의에 의해 $ge \le g$이다. 그런데 (Z3)에 의해 $ge \ge 2g = g + g \ge g + 1 > g$이므로 어긋난다((L1)). 따라서 모든 공약수는 $1$ 이하이고, $\gcd(a, b) = 1$이다.

(iii) (i)에 의해 $ad = bc$이다. $b \mid bc = ad$이고 $\gcd(b, a) = \gcd(a, b) = 1$(최대공약수의 (ii))이므로 [[coprime-divides-product|서로소인 수가 곱을 나누면]]에 의해 $b \mid d$이다. 같은 항목을 $d \mid ad$, $\gcd(d, c) = 1$에 쓰면 $d \mid b$이다. $b$, $d$는 자연수이고, [[prime-number|소수]]의 진술에 의해 자연수의 양의 약수는 그 수 이하이므로 $b \le d$이고 $d \le b$이다. (L2)에 의해 $b = d$이고, $ad = dc$와 $d \ne 0$에서 [[integer-cancellation|정수의 소거법칙]]의 (2)에 의해 $a = c$이다.

**3.** "$1 \le k \le m$인 모든 $k$에서 $dq_k$가 정수인 자연수 $d$가 있다"를 $m$에 대한 [[mathematical-induction|수학적 귀납법]]으로 보인다($1 \le m \le n$). $m = 1$: (2)의 (ii)에 의해 $q_1 = a/b$, $b \ge 1$이고 $bq_1 = a$는 정수이므로 $d = b$이다. $m$에서 $d$가 있고 $m + 1 \le n$이라 하자. 같은 이유로 $bq_{m+1}$이 정수인 자연수 $b$가 있다. $d' = db$는 자연수이고, $k \le m$이면 $d'q_k = b(dq_k)$, $k = m + 1$이면 $d'q_{m+1} = d(bq_{m+1})$이 정수이다.

$f \in \mathbb{Q}[X]$이면 $n > N$에서 $\operatorname{coef}_n(f) = 0$인 $0$ 이상인 정수 $N$이 있다. 앞의 것을 $\operatorname{coef}_0(f), \dots, \operatorname{coef}_N(f)$에 쓰면 자연수 $d$가 있어 $k \le N$이면 $d\operatorname{coef}_k(f)$가 정수이고, $k > N$이면 $d\operatorname{coef}_k(f) = d0 = 0$이다. 다항식환의 (3)의 (iii)에 의해 $\operatorname{coef}_k(df) = d\operatorname{coef}_k(f)$이므로 $df$의 계수는 모두 정수이고, (1)과 다항식환의 (7)의 (i)에 의해 $df \in \mathbb{Z}[X]$이다.

**4.** (1)에 의해 $\mathbb{Z}$는 $1$을 포함하는 $\mathbb{Q}$의 부분환이고 $\mathbb{Q}$는 $1$을 포함하는 $\mathbb{R}$의 부분환이다. 다항식환의 (7)의 (i), (ii)와 [[degree-of-a-polynomial|다항식의 차수]]의 (8)을 두 번 쓴다.

**5.** (1)과 [[ring-homomorphism|환 준동형]]의 (7)의 (ii)에 의해 포함 함수 $\iota : \mathbb{Z} \to \mathbb{Q}$는 환 준동형이므로, 환 준동형의 (1)에 의해 $\iota(n \cdot 1) = n \cdot \iota(1)$이다. [[power-in-a-group|군의 거듭제곱]]의 (6)에 의해 환 $\mathbb{Z}$에서 $n \cdot 1 = n1 = n$이므로 환 $\mathbb{Q}$에서 $n \cdot 1 = n$이다. [[ring-basic-properties|환의 기본 성질]]의 (6)에 의해 $n \cdot x = (n \cdot 1)x = nx$이다.
:::

## 예시와 반례

:::example[분모를 맞추는 계산]
$f = \frac{1}{2}X^2 + \frac{2}{3}X - \frac{1}{6} \in \mathbb{Q}[X]$의 계수 $-\frac{1}{6}$, $\frac{2}{3}$, $\frac{1}{2}$는 기약분수 꼴이고, 분모의 곱 $6 \cdot 3 \cdot 2 = 36$을 $d$로 잡으면 (3)의 증명대로 $36f \in \mathbb{Z}[X]$입니다. 더 작은 $d = 6$도 됩니다: $6f = 3X^2 + 4X - 1$. (3)은 이런 $d$가 있다는 것만 말하고 가장 작은 것을 고르라고 하지 않습니다.

$\frac{-6}{-4}$의 기약분수 꼴은 (2)의 증명대로 분모를 양수로 바꾼 $\frac{6}{4}$에서 $\gcd(6, 4) = 2$로 나눈 $\frac{3}{2}$입니다.
:::

:::counterexample[분모의 부호를 정하지 않은 $\frac{1}{2}$와 $\frac{-1}{-2}$]
$1 \cdot (-2) = 2 \cdot (-1)$이므로 (2)의 (i)에 의해 $\frac{1}{2} = \frac{-1}{-2}$이고, $\gcd(1, 2) = \gcd(-1, -2) = 1$입니다(최대공약수의 (iii)). 분자와 분모가 서로소라는 조건만으로는 꼴이 하나로 정해지지 않으며, (2)의 (iii)은 $b \ge 1$이라는 조건이 있어야 성립합니다.
:::

## 확인 질문

:::check[$\frac{3}{4} - \frac{5}{6}$의 기약분수 꼴은?]
(1)의 증명의 식으로 $\frac{3 \cdot 6 - 4 \cdot 5}{4 \cdot 6} = \frac{-2}{24}$이고, $\gcd(-2, 24) = 2$로 나누면 $\frac{-1}{12}$입니다. 분모가 양수이고 $\gcd(-1, 12) = 1$이므로 (2)의 (iii)에 의해 이것이 하나뿐인 기약분수 꼴입니다.
:::

:::check[상수 다항식 $2$는 $\mathbb{Z}[X]$의 가역원인가? $\mathbb{Q}[X]$에서는?]
$\mathbb{Z}[X]$에서는 아닙니다. [[degree-of-a-polynomial|다항식의 차수]]의 (7)에 의해 $\mathbb{Z}[X]$의 가역원은 $\mathbb{Z}^{\times} = \{1, -1\}$의 상수이기 때문입니다. $\mathbb{Q}$는 체이므로 $\mathbb{Q}[X]$에서는 영이 아닌 상수 $2$가 가역원이고, 역원은 $\frac{1}{2}$입니다.
:::
