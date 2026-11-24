---
title: 근의 중복도
title_en: Multiplicity of a Root
aliases: [중복도, 중근, 근의 중복도, multiplicity, multiple root, multiplicity of a root]
kind: definition
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 영함수가 아닌 다항함수 f 와 실수 c 에 대하여 f = (t − c)ᵐg 이고 g(c) ≠ 0 인 0 이상의 정수 m 과 다항함수 g 가 정확히 하나씩 있음을 보이고, 이 m 을 c 의 중복도라 한다. 중복도는 곱에서 더해지고, f = a(t − μ₁)^m₁⋯(t − μ_r)^m_r 이면 μ_j 의 중복도는 m_j 이며, 서로 다른 근들의 중복도의 합은 차수 이하이다.
requires: [function, mathematical-induction, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, vector-space, vector-space-basic-properties, real-function-space, finite-sum-of-vectors, eigenvectors-of-distinct-eigenvalues, power-of-a-real-number, finite-product-of-reals, polynomial-function, product-of-polynomial-functions, factor-theorem, roots-of-polynomial-function, coefficients-of-polynomial-function]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 4장 1절, 1.5 Multiplicities of eigenvalues, p.102–103; 4장 2절, 2.7.3, p.113; 9장 3절, Theorem 3.4 의 증명 첫머리, p.262
    checked: original
    note: "출처는 4장 1.5(p.102)에서 p(λ) = 0 이면 p(z) = (z − λ)q(z) 로 쓸 수 있고, q(λ) = 0 이면 q 도 z − λ 로 나누어져 (z − λ)² 이 p 를 나누며 '그렇게 계속된다'고 적은 뒤, (z − λ)^k 가 p(z) 를 나누는 가장 큰 양의 정수 k 를 근 λ 의 중복도라 정의한다. 그런 가장 큰 k 가 있다는 것은 적지 않고, '나눈다'는 z − λ 의 경우에만 'p 를 p(z) = (z − λ)q(z) 로 쓸 수 있다'(i.e.)로 풀어 적는다. 출처의 정의는 근에만 쓰고 양의 정수이다. 이 항목은 f = (t − c)ᵐg, g(c) ≠ 0 인 m 과 g 의 존재와 유일성을 증명해 중복도를 정의하고, 근이 아닌 점의 중복도를 0 으로 둔다. 출처의 정의와는 (2)의 '(t − c)ᵏh 꼴이면 k ≤ m' 과 (1)을 합치면 근에서 같은 수가 된다. 출처 p.103 은 다항식을 중복도만큼 근을 되풀이해 aₙ(z − λ₁)⋯(z − λₙ) 으로 쓰고, 9장 Theorem 3.4 의 증명(p.262)은 p(z) = Π(z − λ_k)^{m_k} 를 m_k 가 고윳값 λ_k 의 중복도인 꼴로 쓴다. 이 항목의 (5)는 실수에서 이 지수 꼴의 μ_j 의 중복도가 m_j 라는 것을 증명한다. 4장 2.7.3(p.113)은 (1 − λ)² 에서 고윳값 1 의 중복도가 2 라고 적는데, 예시 '지수 꼴에서 중복도 읽기'의 인수 (t − 1)² 과 그 중복도 2 는 이것과 같은 꼴이다. (2)–(6)의 진술과 증명은 이 사이트의 것이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 뒤 항목에 기대던 반례 2건을 바꾸고, 예시 메모의 부정 주장 2건을 지웠으며, 정의하지 않은 표기와 범위 없는 변수를 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$t - c$, $\mathcal{P}_n$, 영함수 $o$는 [[polynomial-function|다항함수]]의 것이고, 함수의 곱과 거듭제곱 $(t - c)^k$, 열의 곱 $(t - \mu_1)^{m_1} \cdots (t - \mu_r)^{m_r}$은 [[product-of-polynomial-functions|다항함수의 곱]]의 것이다. 근과 서로 다른 실수의 열은 [[roots-of-polynomial-function|다항함수의 근의 개수]]의 것이고, 차수 $\deg f$는 [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]의 것이다.

$f$가 영함수가 아닌 다항함수이고 $c$가 실수라 하자.

1. (존재와 유일성) $f = (t - c)^m g$이고 $g(c) \ne 0$인 $0$ 이상의 정수 $m$과 다항함수 $g$가 있다. 또 $0$ 이상의 정수 $m'$과 다항함수 $g'$이 $f = (t - c)^{m'} g'$이고 $g'(c) \ne 0$이면 $m' = m$이고 $g' = g$이다.

   **중복도.** (1)의 $m$을 $f$의 근 $c$의, 또는 $f$에서 $c$의 **중복도**(multiplicity)라 한다. $c$가 $f$의 근이 아니면 중복도는 $0$이다((2)). 중복도는 기호 없이 "$f$에서 $c$의 중복도"라고 쓴다. 영함수에서는 중복도를 정의하지 않는다.

2. $c$가 $f$의 근인 것은 정확히 $c$의 중복도가 $1$ 이상일 때이다. $c$의 중복도를 $m$, (1)의 $g$를 $g$라 하면 $g \ne o$이고 $\deg g = \deg f - m$이며, 따라서 $0 \le m \le \deg f$이다. 또 정수 $k \ge 0$과 다항함수 $h$에 대하여 $f = (t - c)^k h$이면 $k \le m$이다.
3. (곱) $u$, $v$가 영함수가 아닌 다항함수이면, $uv$에서 $c$의 중복도는 $u$에서 $c$의 중복도와 $v$에서 $c$의 중복도의 합이다. 특히 $v(c) \ne 0$이면 $uv$에서 $c$의 중복도는 $u$에서 $c$의 중복도와 같다.
4. 실수 $a \ne 0$과 정수 $k \ge 0$에 대하여 $a(t - c)^k$에서 $c$의 중복도는 $k$이고, $d \ne c$인 실수 $d$의 중복도는 $0$이다.
5. (지수 꼴) $a \ne 0$이 실수이고 $\mu_1, \dots, \mu_r$이 서로 다른 실수의 열이며 $m_1, \dots, m_r$이 $0$ 이상의 정수의 열이고($r \ge 0$)
   $$
   f = a(t - \mu_1)^{m_1} \cdots (t - \mu_r)^{m_r}
   $$
   이라 하자($r = 0$이면 $f = a\,t^0$). 그러면 (i) 모든 $j$에서 $f$에서 $\mu_j$의 중복도는 $m_j$이고, (ii) 실수 $x$가 $f$의 근인 것은 정확히 $x = \mu_j$이고 $m_j \ge 1$인 $j$가 있을 때이며, (iii) $\deg f = m_1 + \cdots + m_r$이다. 특히 모든 $m_j \ge 1$이면 $f$의 근은 정확히 $\mu_1, \dots, \mu_r$이고 그 중복도의 합은 $\deg f$이다.
6. (중복도의 합) $\mu_1, \dots, \mu_r$이 서로 다른 실수의 열이고($r \ge 0$) $m_j$가 $f$에서 $\mu_j$의 중복도이면, 모든 $j$에서 $g(\mu_j) \ne 0$이고
   $$
   f = (t - \mu_1)^{m_1} \cdots (t - \mu_r)^{m_r}\, g
   $$
   인 영함수가 아닌 다항함수 $g$가 있다. 따라서 $m_1 + \cdots + m_r \le \deg f$이고, 등호는 정확히 이 $g$가 값이 $0$이 아닌 상수함수일 때 성립한다.
:::

:::english
$t - c$, $\mathcal{P}_n$ and the zero function $o$ are those of the entry on polynomial functions, and products of functions, powers $(t - c)^k$ and products of sequences $(t - \mu_1)^{m_1} \cdots (t - \mu_r)^{m_r}$ are those of the entry on products of polynomial functions. Roots and distinct sequences of real numbers are those of the entry on the number of roots of a polynomial function, and the degree $\deg f$ is that of the entry on coefficients and degree of a polynomial function.

Let $f$ be a polynomial function other than the zero function and $c$ a real number.

1. (Existence and uniqueness) There are an integer $m \ge 0$ and a polynomial function $g$ with $f = (t - c)^m g$ and $g(c) \ne 0$. Moreover, if an integer $m' \ge 0$ and a polynomial function $g'$ satisfy $f = (t - c)^{m'} g'$ and $g'(c) \ne 0$, then $m' = m$ and $g' = g$.

   **Multiplicity.** The $m$ of (1) is called the **multiplicity** of the root $c$ of $f$, or of $c$ in $f$. If $c$ is not a root of $f$, its multiplicity is $0$ (by (2)). The multiplicity is written in words, "the multiplicity of $c$ in $f$", without a symbol. Multiplicity is not defined for the zero function.

2. $c$ is a root of $f$ exactly when the multiplicity of $c$ is at least $1$. If $m$ is the multiplicity of $c$ and $g$ is the $g$ of (1), then $g \ne o$ and $\deg g = \deg f - m$; hence $0 \le m \le \deg f$. Also, for an integer $k \ge 0$ and a polynomial function $h$, if $f = (t - c)^k h$, then $k \le m$.
3. (Products) If $u$, $v$ are polynomial functions other than the zero function, then the multiplicity of $c$ in $uv$ is the sum of the multiplicities of $c$ in $u$ and in $v$. In particular, if $v(c) \ne 0$, the multiplicity of $c$ in $uv$ equals the multiplicity of $c$ in $u$.
4. For a real number $a \ne 0$ and an integer $k \ge 0$, the multiplicity of $c$ in $a(t - c)^k$ is $k$, and the multiplicity of every real number $d \ne c$ is $0$.
5. (Exponent form) Let $a \ne 0$ be a real number, $\mu_1, \dots, \mu_r$ a distinct sequence of real numbers, and $m_1, \dots, m_r$ a sequence of integers that are at least $0$ ($r \ge 0$), and suppose
   $$
   f = a(t - \mu_1)^{m_1} \cdots (t - \mu_r)^{m_r}
   $$
   ($f = a\,t^0$ if $r = 0$). Then (i) for every $j$, the multiplicity of $\mu_j$ in $f$ is $m_j$; (ii) a real number $x$ is a root of $f$ exactly when there is $j$ with $x = \mu_j$ and $m_j \ge 1$; and (iii) $\deg f = m_1 + \cdots + m_r$. In particular, if every $m_j \ge 1$, then the roots of $f$ are exactly $\mu_1, \dots, \mu_r$, and the sum of their multiplicities is $\deg f$.
6. (Sum of multiplicities) If $\mu_1, \dots, \mu_r$ is a distinct sequence of real numbers ($r \ge 0$) and $m_j$ is the multiplicity of $\mu_j$ in $f$, then there is a polynomial function $g$ other than the zero function with $g(\mu_j) \ne 0$ for every $j$ and
   $$
   f = (t - \mu_1)^{m_1} \cdots (t - \mu_r)^{m_r}\, g.
   $$
   Hence $m_1 + \cdots + m_r \le \deg f$, with equality exactly when this $g$ is a constant function with nonzero value.
:::

## 직관

$c$가 근이면 [[factor-theorem|인수 정리]]로 $t - c$를 하나 떼어 낼 수 있습니다. 남은 몫이 다시 $c$에서 $0$이면 또 떼어 내고, 그렇게 몫의 $c$에서의 값이 $0$이 아니게 될 때까지 떼어 낸 횟수가 중복도입니다. 이 과정이 끝없이 이어지지 않는 것은 한 번 뗄 때마다 몫의 차수가 하나씩 줄기 때문입니다. 그래서 중복도는 차수를 넘지 않습니다((2)).

(1)이 "정확히 하나"를 말하는 까닭은 떼어 내는 순서나 방법에 따라 횟수가 달라지지 않는다는 것을 보장하기 위해서입니다. 이 유일성은 영함수가 아닌 두 다항함수의 곱이 영함수가 아니라는 사실([[coefficients-of-polynomial-function|계수와 차수]]의 (5))에서 나옵니다.

(5)는 다항함수가 이미 일차식의 거듭제곱들의 곱으로 주어져 있으면 중복도를 지수에서 바로 읽을 수 있다는 것입니다. $\mu_j$에서 다른 인수 $(t - \mu_i)^{m_i}$의 값은 $(\mu_j - \mu_i)^{m_i} \ne 0$이므로 $\mu_j$의 중복도에 아무것도 더하지 않습니다. 여기서 $\mu$들이 서로 다르다는 가정이 쓰입니다. (6)은 일반적으로는 서로 다른 근들의 중복도를 다 더해도 차수에 이르지 못할 수 있다는 것도 말합니다. 남은 몫 $g$가 실수 근이 없는 상수가 아닌 다항함수일 수 있기 때문입니다(아래 반례).

## 성질의 증명

:::proof
두 함수는 모든 $x$에서 값이 같으면 같다([[function|함수]]의 같음). (K…)는 [[real-number-arithmetic]]의 것, (B…)는 [[vector-space-basic-properties]]의 것이다. [[polynomial-function|다항함수]]를 "다항함수의", [[product-of-polynomial-functions|다항함수의 곱]]을 "곱의", [[factor-theorem|인수 정리]]를 "인수 정리의", [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]를 "계수의"로 줄여 번호를 인용한다. 곱의 (3)에 의해 $(t - c)^k$의 $x$에서의 값은 $(x - c)^k$이다. 정수의 순서는 [[prime-number|(Z1)]]과 [[well-ordering-principle|(Z5)–(Z7), (L1)–(L3)]]으로 다루고, 정수의 합과 차는 정수이다([[even-and-odd]]). 실수의 거듭제곱은 [[power-of-a-real-number]]의 것이다.

**보조 사실 (가).** $0 \le j \le k$인 정수 $j$, $k$와 다항함수 $u$, $v$에 대하여 $(t - c)^j u = (t - c)^k v$이면 $u = (t - c)^{k-j} v$이다.

증명. 곱의 (3)의 $f^{j + (k-j)} = f^j f^{k-j}$와 곱의 (1)의 결합법칙에 의해 $(t - c)^k v = (t - c)^j \bigl((t - c)^{k-j} v\bigr)$이고, 곱의 (1)의 분배법칙에 의해 $(t - c)^j \bigl(u - (t - c)^{k-j} v\bigr) = o$이다. 계수의 (8)에 의해 $(t - c)^j \ne o$이고, 괄호 안은 다항함수이다(곱의 (4)와 다항함수의 (5)). 계수의 (5)의 마지막 문장에 의해 괄호 안은 $o$이고, (B12)에 의해 $u = (t - c)^{k-j} v$이다.

**(1)의 증명.** 정수 $k \ge 0$ 가운데 $f = (t - c)^k q$인 다항함수 $q$가 있는 것들의 집합을 $M$이라 하자. $(t - c)^0 f = t^0 f = f$(곱의 (3), (1))이므로 $0 \in M$이다. $k \in M$이고 $f = (t - c)^k q$이면, $q = o$일 때 $f = o$(곱의 (1))이므로 $q \ne o$이고, 계수의 (8)과 (5)에 의해 $\deg f = k + \deg q \ge k$이다((Z7)). 따라서 $M$은 공집합이 아니고 $\deg f$로 위로 유계이며, [[well-ordering-principle|정렬 원리]]의 (나)에 의해 최대 원소 $m$이 있다. $f = (t - c)^m g$인 다항함수 $g$를 잡는다. $g(c) = 0$이라 하자. $g \in \mathcal{P}_N$이면 다항함수의 (2)에 의해 $g \in \mathcal{P}_{N+1}$이고 $N + 1 \ge 1$이므로, 인수 정리의 (2)에 의해 $g = (t - c)q'$인 $q' \in \mathcal{P}_N$이 있다. 그러면 곱의 (1), (3)에 의해 $f = (t - c)^m (t - c) q' = (t - c)^{m+1} q'$이므로 $m + 1 \in M$인데, (L3)에 의해 $m < m + 1$이므로 $m$이 최대 원소라는 데 어긋난다. 따라서 $g(c) \ne 0$이다.

유일성: $f = (t - c)^{m'} g'$이고 $g'(c) \ne 0$이라 하자. (Z5)에 의해 $m < m'$, $m = m'$, $m' < m$ 가운데 하나이다. $m < m'$이면 (가)에 의해 $g = (t - c)^{m'-m} g'$이고, $m' - m \ge 1$이므로 거듭제곱의 (2)의 (iv)와 (K9)에 의해 $g(c) = 0^{m'-m} g'(c) = 0$이 되어 어긋난다. $m' < m$이면 (가)를 두 표현의 자리를 바꿔 써서 $g' = (t - c)^{m-m'} g$이고 같은 계산으로 $g'(c) = 0$이 되어 어긋난다. 따라서 $m = m'$이고, (가)를 $j = k = m$으로 쓰면 $g = (t - c)^0 g' = g'$이다.

**(2)의 증명.** 중복도가 $0$이면 $f = t^0 g = g$이므로 $f(c) = g(c) \ne 0$이고, $c$는 근이 아니다. 중복도 $m \ge 1$이면 $f(c) = 0^m g(c) = 0$이다. $g(c) \ne 0$이므로 $g \ne o$이고, 계수의 (8)과 (5)에 의해 $\deg f = m + \deg g$, 곧 $\deg g = \deg f - m$이다. $\deg g \ge 0$이므로 $m \le \deg f$이다. 마지막 문장: $k \in M$이고 $m$이 $M$의 최대 원소이다(앞 증명의 $M$).

**(3)의 증명.** (1)로 $u = (t - c)^a u'$, $v = (t - c)^b v'$, $u'(c) \ne 0$, $v'(c) \ne 0$이라 하자. 곱의 (1), (3)에 의해 $uv = (t - c)^{a+b} (u'v')$이고, $u'v'$은 다항함수이며(곱의 (4)) $(u'v')(c) = u'(c)v'(c) \ne 0$이다((K12)의 (vi)). (1)의 유일성에 의해 $uv$에서 $c$의 중복도는 $a + b$이다. $v(c) \ne 0$이면 (2)에 의해 $b = 0$이다.

**(4)의 증명.** 곱의 (1)에 의해 $a(t - c)^k = (t - c)^k (a\,t^0)$이고 $(a\,t^0)(c) = a \ne 0$이므로 (1)에 의해 중복도는 $k$이다. $d \ne c$이면 $(a(t - c)^k)(d) = a(d - c)^k$이고 $d - c \ne 0$((K12)의 (v))이므로 거듭제곱의 (3)과 (K12)의 (vi)에 의해 $0$이 아니다. (2)에 의해 $d$의 중복도는 $0$이다.

**(5)의 증명.** (i) $r \ge 1$이고 $j \in \{1, \dots, r\}$이라 하자. 곱의 (2)의 셋째 문장(열의 $j$번째 항 떼어 내기)과 곱의 (1)에 의해 $f = (t - \mu_j)^{m_j} h_j$이고, $h_j$는 $a$와 $j$번째 항을 지운 열의 곱의 곱이다. $h_j$는 다항함수이다(곱의 (6)과 다항함수의 (1)). $h_j(\mu_j)$는 $a$와, $i \ne j$인 $i$마다의 $(\mu_j - \mu_i)^{m_i}$를 늘어놓은 실수의 열의 곱의 곱이다. $\mu$가 서로 다르므로 $\mu_j - \mu_i \ne 0$이고 거듭제곱의 (3)에 의해 $(\mu_j - \mu_i)^{m_i} \ne 0$이다. [[finite-product-of-reals|실수의 유한 곱]]의 (5)에 의해 그 곱은 $0$이 아니고, (K12)의 (vi)에 의해 $h_j(\mu_j) \ne 0$이다. (1)에 의해 $\mu_j$의 중복도는 $m_j$이다.

(ii) $f(x) = a \cdot (x - \mu_1)^{m_1} \cdots (x - \mu_r)^{m_r}$이다. $a \ne 0$이므로 (K10), (K9)와 실수의 유한 곱의 (5)에 의해 $f(x) = 0$인 것은 정확히 어떤 $j$에서 $(x - \mu_j)^{m_j} = 0$일 때이다. 거듭제곱의 (3)에 의해 $x - \mu_j \ne 0$이면 $(x - \mu_j)^{m_j} \ne 0$이고, $x - \mu_j = 0$이면 거듭제곱의 정의와 (2)의 (iv)에 의해 $0^{m_j}$는 $m_j = 0$일 때 $1$, $m_j \ge 1$일 때 $0$이다. 따라서 $(x - \mu_j)^{m_j} = 0$인 것은 정확히 $x = \mu_j$이고 $m_j \ge 1$일 때이다((K12)의 (v)).

(iii)은 계수의 (8)의 마지막 문장이다. 마지막 문장은 (i)–(iii)을 합친 것이다.

**(6)의 증명.** $r$에 대한 [[mathematical-induction|수학적 귀납법]](시작점 $0$)으로, 길이 $r$인 모든 서로 다른 열에 대해 그런 $g$가 있음을 보인다. $r = 0$이면 곱은 $t^0$이므로 $g = f$로 둔다(조건 "모든 $j$에서"는 공허하게 참이다).

길이 $r$에서 성립한다고 하고 $\mu_1, \dots, \mu_{r+1}$이 서로 다르다고 하자. 처음 $r$개도 서로 다르므로 귀납 가정에 의해 $f = P g$, $P = (t - \mu_1)^{m_1} \cdots (t - \mu_r)^{m_r}$, $g \ne o$이고 $i \le r$에서 $g(\mu_i) \ne 0$인 다항함수 $g$가 있다. $P(\mu_{r+1})$은 $i \le r$마다의 $(\mu_{r+1} - \mu_i)^{m_i}$를 늘어놓은 실수의 열의 곱이고, $\mu_{r+1} \ne \mu_i$이므로 각 항은 $0$이 아니며(거듭제곱의 (3)) 실수의 유한 곱의 (5)에 의해 $P(\mu_{r+1}) \ne 0$이다. 따라서 (3)에 의해 $f$에서 $\mu_{r+1}$의 중복도 $m_{r+1}$은 $g$에서 $\mu_{r+1}$의 중복도이다. $P \ne o$은 계수의 (8)이다. (1)에 의해 $g = (t - \mu_{r+1})^{m_{r+1}} g'$, $g'(\mu_{r+1}) \ne 0$인 다항함수 $g'$이 있고 $g' \ne o$이다. $i \le r$이면 $g'(\mu_i) = 0$일 때 $g(\mu_i) = (\mu_i - \mu_{r+1})^{m_{r+1}} \cdot 0 = 0$이 되므로 $g'(\mu_i) \ne 0$이다. 곱의 (2)의 첫 문장과 곱의 (1)의 결합법칙에 의해 $f = \bigl(P\,(t - \mu_{r+1})^{m_{r+1}}\bigr) g' = (t - \mu_1)^{m_1} \cdots (t - \mu_{r+1})^{m_{r+1}}\, g'$이다.

계수의 (8)과 (5)에 의해 $\deg f = (m_1 + \cdots + m_r) + \deg g$이고 $\deg g \ge 0$이므로 (Z7)에 의해 $m_1 + \cdots + m_r \le \deg f$이며, 등호는 정확히 $\deg g = 0$일 때, 곧 계수의 (4)에 의해 $g$가 값이 $0$이 아닌 상수함수일 때이다. $\blacksquare$
:::

## 예시와 반례

:::example[지수 꼴에서 중복도 읽기]
$f = 2(t - 1)^2 (t - 3)^1$이면 (5)에 의해 $1$의 중복도는 $2$, $3$의 중복도는 $1$이고, 근은 $1$과 $3$뿐이며 $\deg f = 3 = 2 + 1$입니다. $0$은 근이 아니므로 중복도가 $0$입니다: $f(0) = 2 \cdot 1 \cdot (-3) = -6 \ne 0$. (2)도 확인됩니다: $f = (t - 1)^2 g$, $g = 2(t - 3)$이고 $g(1) = -4 \ne 0$, $\deg g = 1 = 3 - 2$입니다.
:::

:::counterexample[중복도의 합이 차수보다 작은 예]
$h = 1\,t^0 + 1\,t^2$은 근이 없습니다([[roots-of-polynomial-function|근의 개수]]의 반례와 같은 함수입니다). $f = (t - 2)h$는 차수가 $3$이고, $h(2) = 5 \ne 0$이므로 (3)과 (4)에 의해 $2$의 중복도는 $1$입니다. $2$가 아닌 실수 $x$에서 $f(x) = (x - 2)h(x)$는 두 인수가 모두 $0$이 아니라 $0$이 아니므로 $f$의 근은 $2$뿐입니다. 서로 다른 근들의 중복도의 합은 $1$이고 차수 $3$보다 작습니다. (6)의 $g$는 $h$이고 상수함수가 아닙니다.
:::

## 확인 질문

:::check[$f = t^3 (t - (-1))$에서 $0$과 $-1$의 중복도는 각각 무엇인가?]
$t^3 = (t - 0)^3$(곱의 (3)과 $t - 0 = t$)이므로 (5)를 서로 다른 열 $0, -1$과 지수 $3, 1$, $a = 1$로 쓰면 $0$의 중복도는 $3$, $-1$의 중복도는 $1$입니다. 합 $4$는 $\deg f = 4$와 같습니다.
:::

:::check[$f$가 영함수가 아닌 다항함수이고 $f(c) \ne 0$이면 (1)의 $m$과 $g$는 무엇인가?]
$m = 0$이고 $g = f$입니다. $(t - c)^0 f = t^0 f = f$이고 $f(c) \ne 0$이므로 (1)의 조건을 만족하고, 유일성에 의해 이것뿐입니다.
:::
