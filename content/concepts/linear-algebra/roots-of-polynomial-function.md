---
title: 다항함수의 근의 개수
title_en: Number of Roots of a Polynomial Function
aliases: [근, 다항함수의 근, 영점, 서로 다른 근, root, zero of a polynomial, number of roots]
kind: theorem
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 다항함수의 근을 정의하고, 영함수가 아닌 f ∈ 𝒫ₙ 의 서로 다른 근의 열의 길이는 n 이하임을 증명한다. 따라서 𝒫ₙ 의 두 원소가 서로 다른 n + 1 개의 점에서 같으면 같고, 한 점을 뺀 모든 점에서 같아도 같다. t − c 를 곱해 영함수가 되는 다항함수는 영함수이다.
requires: [function, mathematical-induction, order-properties-of-reals, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, vector-space, vector-space-basic-properties, real-function-space, finite-sum-of-vectors, eigenvectors-of-distinct-eigenvalues, power-of-a-real-number, polynomial-function, product-of-polynomial-functions, factor-theorem]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 3장 6절, Corollary 6.2 의 증명, p.96; 8장 1절, 1.4.2 Lagrange interpolation, p.223, 연습문제 1.2, p.224; 4장 1절, 1.5 Multiplicities of eigenvalues, p.102–103
    checked: original
    note: "출처는 3장 Corollary 6.2 의 증명(p.96)에서 '항등적으로 0 이 아닌 다항식은 유한 개의 점에서만 0 이 될 수 있다'를 증명 없이 쓴다. 8장 1.4.2(p.223)는 서로 다른 점 a₁, …, a_{n+1} 에서 값을 매기는 범함수들이 (𝒫ₙ)′ 의 기저임을 라그랑주 다항식으로 보이고, 연습문제 1.2(p.224)는 서로 다른 점 a₁, …, a_{n+1} 과 값 y₁, …, y_{n+1} 에 대해 p(a_k) = y_k 인 차수 n 이하의 다항식이 하나뿐임을 선형대수의 생각으로 증명하라고 한다. 이것은 이 항목의 (3)과 같은 내용이고, 본문 p.224 의 식 (1.5) 앞에서도 그 다항식을 '(unique)'라고 괄호 안에 적는다. 연습문제 1.2 는 값 y_k 가 '반드시 서로 다르지는 않다(not necessarily distinct)'고 적는데, 확인 질문 '$f \\in \\mathcal{P}_2$이고 $f(-1) = f(0) = f(5) = 7$이면 $f$는 무엇인가?'는 그 값이 모두 같은 경우와 같은 대상이다. 4장 1.5(p.102–103)는 차수 n 인 다항식이 중복도를 세어 정확히 n 개의 복소근을 갖는다는 대수학의 기본정리를 증명 없이 적는다. 실수의 서로 다른 근의 열의 길이가 n 이하라는 (1)과 그 증명(인수 정리와 n 에 대한 귀납), (4)–(6)은 이 사이트의 것이다. 반례 '근이 없는 다항함수의 예'의 1 + x² 은 출처 4장 2.7.2(p.113)의 특성다항식 (1 − λ)² + 2² 처럼 실수에서 0 이 되지 않는 이차식이라는 같은 발상이다. 반례 '같은 근을 되풀이한 열'은 출처 4장 1.5(p.102)가 근을 중복도만큼 되풀이해 세는 것(counting multiplicities: 중복도가 d 인 근은 d 번 늘어놓는다)과 같은 발상이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 뒤 항목에 기대던 반례 2건을 바꾸고, 예시 메모의 부정 주장 2건을 지웠으며, 정의하지 않은 표기와 범위 없는 변수를 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$\mathcal{P}_n$, 영함수 $o$, $t - c$는 [[polynomial-function|다항함수]]의 것이고 함수의 곱은 [[product-of-polynomial-functions|다항함수의 곱]]의 것이다. 길이 $r$인 실수의 열 $c_1, \dots, c_r$이 **서로 다르다**는 것은 [[eigenvectors-of-distinct-eigenvalues|서로 다른 고윳값의 고유벡터]]의 진술에서 정한 뜻, 곧 $j \ne k$인 모든 $j, k \in \{1, \dots, r\}$에서 $c_j \ne c_k$라는 것이다.

함수 $f : \mathbb{R} \to \mathbb{R}$와 실수 $c$에 대하여, $c$가 $f$의 **근**(root)인 것은 정확히 $f(c) = 0$일 때이다. 근의 개수는 서로 다른 근의 열의 길이로 말한다.

다음이 성립한다. $n \ge 0$은 정수이다.

1. (근의 개수) $f \in \mathcal{P}_n$이고 $f \ne o$라 하자. $c_1, \dots, c_r$이 서로 다른 실수의 열이고 모든 항이 $f$의 근이면 $r \le n$이다.
2. $f \in \mathcal{P}_n$이고, 모든 항이 $f$의 근인 서로 다른 실수의 열 가운데 길이가 $n + 1$인 것이 있으면 $f = o$이다.
3. $f$, $g \in \mathcal{P}_n$이고 서로 다른 실수의 열 $c_1, \dots, c_{n+1}$의 모든 항에서 $f(c_i) = g(c_i)$이면 $f = g$이다.
4. $f$, $g \in \mathcal{P}_n$이고 $c$가 실수이며 $x \ne c$인 모든 실수 $x$에서 $f(x) = g(x)$이면 $f = g$이다. 특히 $x \ne c$인 모든 $x$에서 $f(x) = 0$이면 $f = o$이다.
5. (소거) $h \in \mathcal{P}_n$이고 $c$가 실수이며 $(t - c)h = o$이면 $h = o$이다. 또 $u$, $v \in \mathcal{P}_n$이고 $(t - c)u = (t - c)v$이면 $u = v$이다.
6. ([[factor-theorem|인수 정리]]의 몫의 유일성) $n \ge 1$, $f \in \mathcal{P}_n$, $c$가 실수이고, $q$, $q' \in \mathcal{P}_{n-1}$과 실수 $d$, $d'$에 대하여 $f = (t - c)q + d\,t^0 = (t - c)q' + d'\,t^0$이면 $q = q'$이고 $d = d' = f(c)$이다. 특히 인수 정리의 (1)의 $q$는 하나뿐이고, $f(c) = 0$일 때 $f = (t - c)q$인 $q \in \mathcal{P}_{n-1}$도 하나뿐이다.
:::

:::english
$\mathcal{P}_n$, the zero function $o$ and $t - c$ are those of the entry on polynomial functions, and products of functions are those of the entry on products of polynomial functions. A sequence of real numbers $c_1, \dots, c_r$ of length $r$ is **distinct** in the sense fixed in the statement of the entry on eigenvectors of distinct eigenvalues, that is, $c_j \ne c_k$ for all $j, k \in \{1, \dots, r\}$ with $j \ne k$.

For a function $f : \mathbb{R} \to \mathbb{R}$ and a real number $c$, $c$ is a **root** of $f$ exactly when $f(c) = 0$. The number of roots is expressed by the length of a distinct sequence of roots.

The following hold. $n \ge 0$ is an integer.

1. (Number of roots) Let $f \in \mathcal{P}_n$ with $f \ne o$. If $c_1, \dots, c_r$ is a distinct sequence of real numbers all of whose terms are roots of $f$, then $r \le n$.
2. If $f \in \mathcal{P}_n$ and there is a distinct sequence of real numbers of length $n + 1$ all of whose terms are roots of $f$, then $f = o$.
3. If $f, g \in \mathcal{P}_n$ and $f(c_i) = g(c_i)$ for every term of a distinct sequence of real numbers $c_1, \dots, c_{n+1}$, then $f = g$.
4. If $f, g \in \mathcal{P}_n$, $c$ is a real number, and $f(x) = g(x)$ for every real number $x \ne c$, then $f = g$. In particular, if $f(x) = 0$ for every $x \ne c$, then $f = o$.
5. (Cancellation) If $h \in \mathcal{P}_n$, $c$ is a real number and $(t - c)h = o$, then $h = o$. Also, if $u, v \in \mathcal{P}_n$ and $(t - c)u = (t - c)v$, then $u = v$.
6. (Uniqueness of the quotient in the factor theorem) If $n \ge 1$, $f \in \mathcal{P}_n$, $c$ is a real number, and $f = (t - c)q + d\,t^0 = (t - c)q' + d'\,t^0$ for $q, q' \in \mathcal{P}_{n-1}$ and real numbers $d, d'$, then $q = q'$ and $d = d' = f(c)$. In particular, the $q$ of item (1) of the factor theorem is unique, and when $f(c) = 0$ the $q \in \mathcal{P}_{n-1}$ with $f = (t - c)q$ is also unique.
:::

## 직관

근은 그래프가 가로축과 만나는 자리입니다. (1)은 $\mathcal{P}_n$의 원소가 영함수가 아니면 가로축과 많아야 $n$번 만난다는 것입니다. 까닭은 [[factor-theorem|인수 정리]]에 있습니다. 근 $c_1$이 하나 있으면 $f = (t - c_1)q$로 쓸 수 있고 $q$는 $\mathcal{P}_{n-1}$에 듭니다. 다른 근 $c_i$에서는 $(c_i - c_1)q(c_i) = 0$이고 $c_i - c_1 \ne 0$이므로 $c_i$는 $q$의 근입니다. 근 하나를 뗄 때마다 $n$이 하나씩 줄어드니 근은 $n$개를 넘을 수 없습니다. 이 논증에서 근들이 서로 다르다는 가정은 $c_i - c_1 \ne 0$에 쓰입니다.

(2)–(4)는 같은 사실을 다르게 읽은 것입니다. 두 원소의 차도 $\mathcal{P}_n$에 들므로, 서로 다른 $n + 1$개의 점에서 값이 같으면 차는 근이 $n + 1$개이고 영함수입니다. 점 하나를 뺀 모든 점에서 값이 같으면 그런 $n + 1$개의 점은 얼마든지 고를 수 있습니다. 그래서 (5)처럼 $t - c$를 곱해 $0$이 되는 다항함수는 $c$ 밖의 모든 점에서 $0$이고, 따라서 영함수입니다.

## 증명

:::idea
인수 정리로 근 하나를 떼어 $\mathcal{P}_{n-1}$의 원소로 내려가는 $n$에 대한 귀납법으로 (1)을 보이고, 나머지는 차와 대우로 얻는다.
:::

:::hint
$f(c_1) = 0$이면 $f = (t - c_1)q$이다. $i \ge 2$에서 $q(c_i)$는 무엇인가?
:::

:::hint
(4)에서는 $c + 1, c + 2, \dots, c + n + 1$이 서로 다르고 $c$와 다르다는 것을 쓴다.
:::

:::proof
두 함수는 모든 $x$에서 값이 같으면 같다([[function|함수]]의 같음). (K…)는 [[real-number-arithmetic]]의 것이고, [[polynomial-function|다항함수]], [[product-of-polynomial-functions|다항함수의 곱]], [[factor-theorem|인수 정리]]의 번호는 그 항목의 것이다. 열의 "지운 열"은 [[finite-sum-of-vectors]]의 진술의 것이다. 정수의 순서는 [[prime-number|(Z1)]]과 [[well-ordering-principle|(Z5)–(Z8), (L1)–(L3)]]으로 다루고, 정수의 합은 정수이다([[even-and-odd]]).

**(1)의 증명.** $n$에 대한 [[mathematical-induction|수학적 귀납법]](시작점 $0$)으로, "영함수가 아닌 모든 $f \in \mathcal{P}_n$과, 모든 항이 $f$의 근인 모든 서로 다른 열 $c_1, \dots, c_r$에 대하여 $r \le n$"을 보인다. 정수 $r \ge 0$은 (Z5)와 (Z1)에 의해 $r = 0$이거나 $r \ge 1$이고, $r = 0$이면 $r \le n$이므로 $r \ge 1$인 경우만 보면 된다.

$n = 0$이라 하자. 다항함수의 (4)에 의해 $f$는 상수함수 $a\,t^0$이고, $a = 0$이면 $f = 0\,t^0 = o$이므로 $a \ne 0$이다. $r \ge 1$이면 $f(c_1) = a \ne 0$이므로 $c_1$이 근이라는 데 어긋난다. 따라서 $r = 0 \le 0$이다.

$n \ge 0$에서 성립한다고 하고 $f \in \mathcal{P}_{n+1}$, $f \ne o$, $r \ge 1$이라 하자. $n + 1 \ge 1$이고 $f(c_1) = 0$이므로 인수 정리의 (2)에 의해 $f = (t - c_1)q$인 $q \in \mathcal{P}_n$이 있다. $q = o$이면 곱의 (1)에 의해 $f = (t - c_1)o = o$이므로 $q \ne o$이다. $2 \le i \le r$이면 $0 = f(c_i) = (c_i - c_1)q(c_i)$이고, $i \ne 1$이라 $c_i \ne c_1$이므로 (K12)의 (v)에 의해 $c_i - c_1 \ne 0$이며, (K10)에 의해 $q(c_i) = 0$이다. 첫째 항을 지운 열 $b_1, \dots, b_{r-1}$($b_j = c_{j+1}$)은 서로 다르다: $j \ne k$이면 $j + 1 \ne k + 1$((Z7))이므로 $b_j = c_{j+1} \ne c_{k+1} = b_k$이다. 그 모든 항은 $q$의 근이다($j + 1 \ge 2$). 귀납 가정에 의해 $r - 1 \le n$이고, (Z7)에 의해 $r \le n + 1$이다.

**(2)의 증명.** $f \ne o$이면 (1)에 의해 $n + 1 \le n$인데, (L3)에 의해 $n < n + 1$이므로 (L1)에 어긋난다. 따라서 $f = o$이다.

**(3)의 증명.** 다항함수의 (1)에 의해 $f - g \in \mathcal{P}_n$이고 $(f - g)(c_i) = f(c_i) - g(c_i) = 0$이다. (2)에 의해 $f - g = o$이고, [[vector-space-basic-properties|(B12)]]에 의해 $f = g$이다.

**(4)의 증명.** $1 \le i \le n + 1$인 정수 $i$마다 $c_i = c + i$로 둔다($i$는 실수이다. (K7)). 이 열은 서로 다르다: $c + j = c + k$이면 양변에 $-c$를 더해 (K1), (K2), (K4), (K5)에 의해 $j = k$이다. 또 모든 $i$에서 $c_i \ne c$이다: $c + i = c$이면 같은 계산으로 $i = 0$인데 $i \ge 1$이고 (Z8)과 (Z6)에 의해 $0 < i$이므로 (Z5)에 의해 $i \ne 0$이다. 따라서 가정에 의해 모든 $i$에서 $f(c_i) = g(c_i)$이고, (3)에 의해 $f = g$이다. 둘째 문장은 $g = o$인 경우이다($o \in \mathcal{P}_n$).

**(5)의 증명.** $x \ne c$이면 $0 = ((t - c)h)(x) = (x - c)h(x)$이고 $x - c \ne 0$((K12)의 (v))이므로 (K10)에 의해 $h(x) = 0$이다. (4)에 의해 $h = o$이다. 둘째 문장: 곱의 (1)의 분배법칙과 $(-1)$배에 의해 $(t - c)(u - v) = (t - c)u - (t - c)v = o$이고, $u - v \in \mathcal{P}_n$이므로 $u - v = o$, 곧 $u = v$이다((B12)).

**(6)의 증명.** 두 식의 $c$에서의 값은 $(c - c)q(c) + d = d$와 $d'$이고 둘 다 $f(c)$이다((K9)). 따라서 $d = d'$이고, 두 식에서 $d\,t^0$을 지우면([[vector-space-basic-properties|(B7)]]) $(t - c)q = (t - c)q'$이며 (5)에 의해 $q = q'$이다. 인수 정리의 $f(c) = 0$인 경우는 $d = d' = 0$인 경우이다. $\blacksquare$
:::

## 예시와 반례

:::example[근을 세 개 가진 𝒫₃ 의 원소]
$f = (t - 1)(t - 4)(t - 6)$, 곧 실수의 열 $1, 4, 6$에 대한 $(t - c_1)(t - c_2)(t - c_3)$은 곱의 (5)에 의해 $\mathcal{P}_3$에 들고, $f(0) = (-1)(-4)(-6) = -24 \ne 0$이므로 영함수가 아닙니다. 근 $1$, $4$, $6$은 서로 다르고 길이가 $3$이므로 (1)의 상계 $n = 3$을 채웁니다. (1)에 의해 이 셋과 다른 근은 없습니다: 근이 하나 더 있으면 서로 다른 근의 열의 길이가 $4$가 됩니다.
:::

:::counterexample[근이 없는 다항함수의 예]
$h = 1\,t^0 + 1\,t^2$은 모든 실수 $x$에서 $h(x) = 1 + x^2$입니다. [[order-properties-of-reals|실수의 순서의 성질]]의 (5)의 (iii)과 (ii)에 의해 $0 \le xx$이고 $0 < 1$이므로 (2)의 (iv)에 의해 $0 < 1 + xx$, 곧 $h(x) \ne 0$입니다. 따라서 $h$는 근이 없고 서로 다른 근의 열은 빈 열뿐입니다. (1)은 근이 $n$개 "이하"라는 것만 말하며, $\mathcal{P}_2$의 영함수가 아닌 원소가 근을 꼭 가진다는 뜻이 아닙니다.
:::

:::counterexample[같은 근을 되풀이한 열]
$f = (t - 3)(t - 3)$은 $\mathcal{P}_2$에 들고 근은 $3$뿐입니다. 열 $3, 3, 3$의 모든 항이 근이지만 길이 $3$은 $n = 2$보다 큽니다. 이 열은 서로 다르지 않으므로 (1)과 어긋나지 않습니다. (1)의 "서로 다른"은 이런 열을 막습니다.
:::

## 확인 질문

:::check[$f \in \mathcal{P}_2$이고 $f(-1) = f(0) = f(5) = 7$이면 $f$는 무엇인가?]
상수함수 $7t^0$도 $\mathcal{P}_2$에 들고(다항함수의 (2)) 세 점 $-1, 0, 5$에서 값이 $7$입니다. 이 세 점은 서로 다르므로 (3)에 의해 $f = 7t^0$입니다.
:::

:::check[$h \in \mathcal{P}_4$이고 $(t - 2)h$가 영함수이면 $h(2)$는 무엇인가?]
(5)에 의해 $h = o$이므로 $h(2) = 0$입니다. $(t - 2)h$의 값만 보면 $x = 2$에서 $0 \cdot h(2) = 0$이라 $h(2)$에 대해 아무것도 알 수 없지만, 다른 모든 점에서 $h$가 $0$이라는 것과 (4)가 $h(2) = 0$까지 정합니다.
:::
