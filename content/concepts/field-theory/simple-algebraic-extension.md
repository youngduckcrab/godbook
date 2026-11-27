---
title: 단순 대수적 확대
title_en: Simple Algebraic Extensions
aliases: [단순 확대, 원소 하나를 붙인 체, F(α), simple extension, simple algebraic extension, adjoining an algebraic element]
kind: theorem
field: field-theory
msc: ["12F05"]
level: undergrad
summary: "확대체 E 의 원소 α 가 F 위에서 대수적이면 α 에 F 위의 다항식을 대입한 값 전체 F[α] 는 F 와 α 를 포함하는 E 의 가장 작은 부분체이고, 이것을 F(α) 로 쓴다. F(α) 는 최소다항식 m 으로 만든 몫환 F[X]/mF[X] 와 환으로서 동형이고, 1, α, …, α^(d−1) 이 F 위의 기저여서 [F(α) : F] 는 α 의 차수 d 이다. 단사인 환 준동형은 F(α) 를 τ(F)(τ(α)) 로 보낸다."
requires: [prime-number, real-number-arithmetic, subring, rational-and-irrational-numbers, square-root-exists, integers-modulo-n, ring, ring-homomorphism, ideal, field, finite-integral-domain-is-a-field, quotient-ring, first-isomorphism-theorem-for-rings, finite-sums-in-a-ring, finite-products-in-a-commutative-ring, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, division-algorithm-for-polynomials, irreducible-polynomial, irreducible-polynomial-and-maximal-ideal, rational-numbers-field, eisenstein-criterion, subfield, span-and-independence-over-a-field, basis-over-a-field, dimension-over-a-field, extension-field, kronecker-theorem, algebraic-element-and-minimal-polynomial]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "21.1절 Extension Fields, 단순 확대와 F(α_1, …, α_n) 의 정의 (p.262), Proposition 21.12 (p.263), Theorem 21.13 (p.263–264), Example 21.14 (p.264); 16.7절 Exercises, 연습문제 1 (p.204); 21.5절 Exercises, 연습문제 22 (p.277), 28 (p.277)"
    checked: original
    note: "출처 p.262 는 F 와 α_1, …, α_n 을 포함하는 가장 작은 체를 F(α_1, …, α_n) 로 쓰고 E = F(α) 이면 E 를 F 의 단순 확대라 부르며, α 가 대수적일 것을 요구하지 않는다. 이 항목은 α 가 대수적일 때만 F(α) 를 정의하고, 가장 작은 부분체가 있다는 것을 F[α] 가 그것임을 보여 얻는다. 출처 Proposition 21.12(p.263)는 F(α) ≅ F[x]/⟨p(x)⟩ 이고, 증명은 제1 동형 정리를 쓴 뒤 'the image of φ_α in E is isomorphic to F(α) since it contains both F and α' 라고 적는다. 이 항목은 대입 준동형의 상 F[α] 가 체라는 것을 기약 다항식과 af + bg = 1 로 보이고((1)), 그 상이 F(α) 와 같은 집합이라는 것을 증명한 뒤 (2)의 동형을 얻는다. (3)은 출처 Theorem 21.13(p.263–264, 'every element β ∈ E can be expressed uniquely in the form β = b_0 + b_1α + ⋯ + b_{n−1}α^{n−1}')이고, 출처는 α^n, α^{n+1}, … 을 차례로 낮은 거듭제곱으로 바꿔 쓰는 'Continuing in this manner' 로 존재를 보인다. 이 항목은 나눗셈 정리의 나머지로 존재를 보인다. [F(α) : F] = d 는 출처 21.5절 연습문제 28(p.277)이다. (7)의 '크로네커 체는 ι(K)(α)' 는 출처 Example 21.14(p.264)가 R[x]/⟨x² + 1⟩ 을 R(α) = {a + bα} 로 보는 것과 같은 관찰이다. 예시 '$\\mathbb{Q}(\\sqrt{7})$의 원소와 역원' 의 꼴 {x + y√7} 은 출처 16.7절 연습문제 1(c)(p.204)의 Q(√2) = {a + b√2 : a, b ∈ Q} 와 같은 꼴이고, √7 은 출처 21.5절 연습문제 22(p.277)의 Q(√3, √7) 에도 나온다. 반례 '$\\sqrt{7}$을 근으로 갖는 사차 다항식 $X^4 - 49$' 는 최소다항식과 다른 다항식의 차수를 비교하는 것이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(예의 수치 재계산, 차수 논법의 경계 경우). 독립 검토 없음."
added: 2026-11-27
---

:::statement
[[field|체]], 가역원과 역원은 [[field|가역원과 체]]의 것이고, 부분체, 확대체, 유한 확대, 차수 $[E : F]$는 [[subfield|부분체]]와 [[extension-field|확대체]]의 것이며, 확대체를 벡터공간으로 볼 때는 확대체의 (1)의 (i)의 연산으로 본다. 다항식환, 상수 다항식과 읽는 약속, 부정원 $X$, 나누어떨어짐은 [[polynomial-ring|다항식환]]의 것이고, 차수 $\deg$는 [[degree-of-a-polynomial|다항식의 차수]]의 것이며, 대입한 값과 계수를 옮긴 다항식 $f^{\varphi}$는 [[evaluation-homomorphism|대입 준동형]]의 것이다. $F[X] \subseteq E[X]$로 보고 대입한 값, 대수적, 최소다항식, 원소의 $F$ 위의 차수는 [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 것이다. 거듭제곱 $\alpha^k$는 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 것이다.

**설정.** $E$가 체이고 $F$가 $E$의 부분체이며, $\alpha \in E$가 $F$ 위에서 대수적이고 $m$이 그 최소다항식, $d = \deg m$이라 하자. $F[\alpha] = \{g(\alpha) : g \in F[X]\}$로 둔다.

1. (가장 작은 부분체) $F[\alpha]$는 $E$의 부분체이고, $F \subseteq F[\alpha]$, $\alpha \in F[\alpha]$이다. $K$가 $E$의 부분체이고 $F \subseteq K$, $\alpha \in K$이면 $F[\alpha] \subseteq K$이다. 이 부분체 $F[\alpha]$를 $F(\alpha)$로 쓰고 **$F$에 $\alpha$를 붙인 체**라 한다. 곧 $F(\alpha) = F[\alpha]$이고, $F(\alpha)$는 $F$와 $\alpha$를 포함하는 $E$의 부분체 가운데 가장 작은 것이다. $E = F(\alpha)$일 때 $E$를 $F$의 **단순 확대**(simple extension)라 한다. $F(\alpha)$는 $F$ 위에서 대수적인 $\alpha$에 대해서만 정의한다.
2. (몫환과의 동형) $I = mF[X]$라 하자. 모든 $g \in F[X]$에서 $\eta(g + I) = g(\alpha)$인 함수 $\eta : F[X]/I \to F(\alpha)$가 정확히 하나 있고, $\eta$는 환 동형사상이다. $\eta$는 상수 다항식 $c$의 잉여류를 $c$로, $X + I$를 $\alpha$로 보낸다.
3. (기저와 차수) 
   - (i) 모든 $g \in F[X]$에 대하여, $g$를 $m$으로 나눈 나머지 $r$에서 $g(\alpha) = r(\alpha)$이다.
   - (ii) $F(\alpha)$의 모든 원소는 $a_0, \dots, a_{d-1} \in F$에 대하여 $\sum_{k=0}^{d-1} a_k \alpha^k$의 꼴로 쓰이고, 이 $a_0, \dots, a_{d-1}$은 정확히 하나로 정해진다.
   - (iii) $k \in \{1, \dots, d\}$마다 $b_k = \alpha^{k-1}$로 둔 길이 $d$인 열 $1, \alpha, \dots, \alpha^{d-1}$은 $F(\alpha)$의 $F$ 위의 기저이다. 따라서 $F(\alpha)$는 $F$의 유한 확대이고 $[F(\alpha) : F] = d$, 곧 $[F(\alpha) : F]$는 $\alpha$의 $F$ 위의 차수이다.
4. (차수 $1$) $F(\alpha) = F$인 것은 정확히 $\alpha \in F$일 때이고, 정확히 $d = 1$일 때이다.
5. (상의 꼴) $E'$이 체이고 $\tau : E \to E'$이 단사인 환 준동형이라 하자. [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (10)에 의해 $\tau(\alpha)$는 $E'$의 부분체 $\tau(F)$ 위에서 대수적이고, $\tau(F(\alpha)) = \tau(F)(\tau(\alpha))$이다.
6. (더 큰 밑체) $K$가 $E$의 부분체이고 $F \subseteq K$이면, $\alpha$는 $K$ 위에서 대수적이고 $F(\alpha) \subseteq K(\alpha)$이며 $[K(\alpha) : K] \le [F(\alpha) : F]$이다.
7. (크로네커의 체) $K$가 체이고 $h \in K[X]$가 기약이며, $L$, $\iota$, 그리고 $X$의 잉여류 $\beta = X + hK[X]$가 [[kronecker-theorem|크로네커 정리]]의 설정의 것($\alpha$를 $\beta$로 바꿔 쓴 것)이라 하자. 그러면 $\beta$는 $\iota(K)$ 위에서 대수적이고 $L = \iota(K)(\beta)$이다. 곧 $L$은 $\iota(K)$의 단순 확대이다.
:::

:::english
Fields, units and inverses are those of units and fields; subfields, extension fields, finite extensions and degrees $[E : F]$ are those of subfields and extension fields, and an extension field is regarded as a vector space with the operations of item (1)(i) of extension fields. Polynomial rings, constant polynomials and the reading convention, the indeterminate $X$ and divisibility are those of polynomial rings; degree $\deg$ is that of degrees of polynomials; values and polynomials $f^{\varphi}$ with transported coefficients are those of evaluation homomorphisms. Values with $F[X] \subseteq E[X]$, algebraic elements, minimal polynomials and the degree of an element over $F$ are those of algebraic elements and minimal polynomials. Powers $\alpha^k$ are those of finite products in a commutative ring.

**Setting.** Let $E$ be a field, $F$ a subfield of $E$, $\alpha \in E$ algebraic over $F$ with minimal polynomial $m$, and $d = \deg m$. Put $F[\alpha] = \{g(\alpha) : g \in F[X]\}$.

1. (Smallest subfield) $F[\alpha]$ is a subfield of $E$ with $F \subseteq F[\alpha]$ and $\alpha \in F[\alpha]$. If $K$ is a subfield of $E$ with $F \subseteq K$ and $\alpha \in K$, then $F[\alpha] \subseteq K$. This subfield $F[\alpha]$ is written $F(\alpha)$ and called the **field obtained by adjoining $\alpha$ to $F$**. Thus $F(\alpha) = F[\alpha]$, and $F(\alpha)$ is the smallest subfield of $E$ containing $F$ and $\alpha$. When $E = F(\alpha)$, $E$ is called a **simple extension** of $F$. $F(\alpha)$ is defined only for $\alpha$ algebraic over $F$.
2. (Isomorphism with a quotient ring) Let $I = mF[X]$. There is exactly one function $\eta : F[X]/I \to F(\alpha)$ with $\eta(g + I) = g(\alpha)$ for every $g \in F[X]$, and $\eta$ is a ring isomorphism. It sends the coset of a constant polynomial $c$ to $c$ and $X + I$ to $\alpha$.
3. (Basis and degree)
   - (i) For every $g \in F[X]$, if $r$ is the remainder of $g$ divided by $m$, then $g(\alpha) = r(\alpha)$.
   - (ii) Every element of $F(\alpha)$ can be written as $\sum_{k=0}^{d-1} a_k \alpha^k$ with $a_0, \dots, a_{d-1} \in F$, these $a_0, \dots, a_{d-1}$ being uniquely determined.
   - (iii) The list $1, \alpha, \dots, \alpha^{d-1}$ of length $d$, with $b_k = \alpha^{k-1}$ for $k \in \{1, \dots, d\}$, is a basis of $F(\alpha)$ over $F$. Hence $F(\alpha)$ is a finite extension of $F$ and $[F(\alpha) : F] = d$; that is, $[F(\alpha) : F]$ is the degree of $\alpha$ over $F$.
4. (Degree $1$) $F(\alpha) = F$ if and only if $\alpha \in F$, and if and only if $d = 1$.
5. (Images) Let $E'$ be a field and $\tau : E \to E'$ an injective ring homomorphism. By item (10) of algebraic elements and minimal polynomials, $\tau(\alpha)$ is algebraic over the subfield $\tau(F)$ of $E'$, and $\tau(F(\alpha)) = \tau(F)(\tau(\alpha))$.
6. (A larger base field) If $K$ is a subfield of $E$ with $F \subseteq K$, then $\alpha$ is algebraic over $K$, $F(\alpha) \subseteq K(\alpha)$, and $[K(\alpha) : K] \le [F(\alpha) : F]$.
7. (Kronecker's field) Let $K$ be a field, $h \in K[X]$ irreducible, and $L$, $\iota$ and the coset $\beta = X + hK[X]$ of $X$ as in the setting of Kronecker's theorem (with $\alpha$ renamed $\beta$). Then $\beta$ is algebraic over $\iota(K)$ and $L = \iota(K)(\beta)$; that is, $L$ is a simple extension of $\iota(K)$.
:::

## 직관

$F$에 $\alpha$ 하나를 더해 체를 만들려면, $\alpha$와 $F$의 원소를 더하고 곱하고 나누어 얻는 것을 모두 넣어야 합니다. 더하고 곱해서 얻는 것은 $\alpha$에 $F$ 위의 다항식을 넣은 값 $g(\alpha)$들입니다. $\alpha$가 대수적이면 나누기를 따로 할 필요가 없습니다. $g(\alpha) \ne 0$이면 최소다항식 $m$이 $g$를 나누지 않으므로 $am + bg = 1$인 다항식이 있고, $\alpha$를 넣으면 $b(\alpha)g(\alpha) = 1$이 되어 역원도 다항식의 값이기 때문입니다((1)).

$\alpha$의 거듭제곱은 $m(\alpha) = 0$을 써서 $\alpha^{d-1}$까지로 줄일 수 있습니다. 그래서 $F(\alpha)$의 원소는 $1, \alpha, \dots, \alpha^{d-1}$의 $F$ 계수 일차결합으로 하나씩 쓰이고, 차수 $[F(\alpha) : F]$는 최소다항식의 차수 $d$입니다((3)). 이것은 [[kronecker-theorem|크로네커 정리]]의 체와 같은 모양입니다. 실제로 (2)는 $F(\alpha)$가 몫환 $F[X]/mF[X]$와 환으로서 동형이라는 것이고, (7)은 크로네커 정리의 체 자신이 단순 확대라는 것입니다.

$d = 1$이면 $\alpha$는 이미 $F$에 있고 $F(\alpha) = F$입니다((4)). 밑체를 $F$에서 더 큰 $K$로 바꾸면 최소다항식은 그것을 나누는 다항식으로 바뀌므로, $\alpha$를 붙여 늘어나는 차수는 작아지거나 그대로입니다((6)).

## 증명

:::idea
대입 준동형 $F[X] \to E$의 상이 $F[\alpha]$이고 핵이 $mF[X]$이다. $m$이 기약이므로 상의 영이 아닌 원소는 역원을 갖고, 제1 동형 정리로 몫환과 동형이다. 기저는 나눗셈 정리의 나머지에서 나온다.
:::

:::hint
(1)에서 $g(\alpha) \ne 0$이면 $m \nmid g$입니다. [[irreducible-polynomial-and-maximal-ideal|기약 다항식과 극대 아이디얼]]의 (6)을 씁니다.
:::

:::hint
(5)에서 $g \in F[X]$이면 [[evaluation-homomorphism|대입 준동형]]의 (5)에 의해 $\tau(g(\alpha)) = g^{\tau}(\tau(\alpha))$입니다.
:::

:::proof
**쓰는 사실.** "최소의 (n)"은 [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (n), "확대체의 (n)"은 [[extension-field|확대체]]의 (n), "부분체의 (n)"은 [[subfield|부분체]]의 (n), "대입의 (n)"은 [[evaluation-homomorphism|대입 준동형]]의 (n), "차수의 (n)"은 [[degree-of-a-polynomial|다항식의 차수]]의 (n)이다. 최소의 (2)에 의해 $g \in F[X]$에 $g(\alpha)$를 대응시키는 함수 $\theta : F[X] \to E$는 $1$을 $1$로 보내는 환 준동형이고, 상수 다항식 $c$를 $c$로, $X$를 $\alpha$로 보내며, 그 상은 $F[\alpha]$이고 핵은 최소의 (3)에 의해 $mF[X]$이다. 최소의 (3)의 (i)에 의해 $m$은 $F$ 위에서 기약이고 $d \ge 1$이다.

**1.** [[ring-homomorphism|환 준동형]]의 (3)의 (i)에 의해 $F[\alpha] = \theta(F[X])$는 $E$의 부분환이고, $1 = \theta(1) \in F[\alpha]$이다. $\gamma \in F[\alpha]$, $\gamma \ne 0$이라 하고 $\gamma = g(\alpha)$인 $g \in F[X]$를 잡자. 최소의 (4)에 의해 $m \nmid g$이고, 기약 다항식과 극대 아이디얼의 (6)에 의해 $am + bg = 1$인 $a, b \in F[X]$가 있다. $\theta$를 쓰면 $a(\alpha)m(\alpha) + b(\alpha)\gamma = 1$이고 $m(\alpha) = 0$이므로 $b(\alpha)\gamma = 1$이다. $E$는 가환이므로 $\gamma^{-1} = b(\alpha) \in F[\alpha]$이다. 부분환은 뺄셈과 곱셈에 닫혀 있으므로([[subring|부분환]]의 (2)) 부분체의 (1)에 의해 $F[\alpha]$는 $E$의 부분체이다. $c \in F$이면 $c = \theta(c) \in F[\alpha]$이고 $\alpha = \theta(X) \in F[\alpha]$이다. 이제 $K$가 $E$의 부분체이고 $F \subseteq K$, $\alpha \in K$라 하자. $g \in F[X]$이고 $N \ge 0$이 $g$의 $N$보다 큰 차수의 계수가 모두 $0$인 정수이면 대입의 (1)에 의해 $g(\alpha) = \sum_{k=0}^{N} \operatorname{coef}_k(g)\alpha^k$이다. 부분체의 (3)의 (iii)에 의해 $K$의 원소의 거듭제곱, 곱, 유한 합은 $K$에서 계산하든 $E$에서 계산하든 같으므로 이 값은 $K$에 속한다. 따라서 $F[\alpha] \subseteq K$이다.

**2.** [[first-isomorphism-theorem-for-rings|환의 제1 동형 정리]]의 (1)을 $\theta$에 쓰면, $\operatorname{Ker}\theta = I$이므로 모든 $g$에서 $\eta(g + I) = \theta(g) = g(\alpha)$인 함수 $\eta : F[X]/I \to \theta(F[X]) = F(\alpha)$가 정확히 하나 있고 환 동형사상이다. 마지막 문장은 $\theta(c) = c$, $\theta(X) = \alpha$이다.

**3.** (i) [[division-algorithm-for-polynomials|다항식의 나눗셈 정리]]의 (2)에 의해 $g = mq + r$이고 $r = 0$이거나 $\deg r < d$이다. $\theta$를 쓰면 $g(\alpha) = m(\alpha)q(\alpha) + r(\alpha) = r(\alpha)$이다.

(ii) 존재: $\gamma = g(\alpha) \in F(\alpha)$이면 (i)의 $r$에 대하여 차수의 (1)에 의해 $r = \sum_{k=0}^{d-1} a_k X^k$($a_k = \operatorname{coef}_k(r)$)이고, 대입의 (1)에 의해 $\gamma = r(\alpha) = \sum_{k=0}^{d-1} a_k\alpha^k$이다. 하나뿐임: $\sum_{k=0}^{d-1} a_k \alpha^k = \sum_{k=0}^{d-1} a'_k \alpha^k$이면 $u = \sum_{k=0}^{d-1} (a_k - a'_k) X^k$에 대하여 대입의 (1)과 $\theta$가 환 준동형이라는 것에서 $u(\alpha) = 0$이다. 최소의 (4)에 의해 $m \mid u$이다. [[polynomial-ring|다항식환]]의 (5)의 (i)과 차수의 (1)에 의해 $u$는 $0$이거나 차수가 $d - 1$ 이하이고, $u \ne 0$이면 $u = mq$이고 $q \ne 0$이어서 차수의 (5)에 의해 $\deg u = d + \deg q \ge d$가 되어 어긋난다. 따라서 $u = 0$이고 다항식환의 (5)의 (iii)에 의해 모든 $k$에서 $a_k = a'_k$이다.

(iii) [[finite-sums-in-a-ring|환의 유한 합]]의 (5)로 첨자를 하나 옮기면 $\sum_{k=0}^{d-1} a_k\alpha^k = \sum_{k=1}^{d} a_{k-1} b_k$이고, 이것은 (1)에 의해 $F(\alpha)$의 원소이며 확대체의 (1)의 (i)로 본 $F$ 위의 벡터공간 $F(\alpha)$에서의 일차결합이다. (ii)의 존재에 의해 $b$는 $F(\alpha)$를 생성하고, (ii)의 하나뿐임을 영인 원소($0 = \sum_{k=0}^{d-1} 0\,\alpha^k$)에 쓰면 $b$는 일차독립이다. 따라서 $b$는 기저이고, [[dimension-over-a-field|체 위의 차원]]의 (4)에 의해 $[F(\alpha) : F] = d$이다.

**4.** 최소의 (6)에 의해 $\alpha \in F$인 것은 정확히 $d = 1$일 때이다. (3)의 (iii)에 의해 $d = [F(\alpha) : F]$이고, 확대체의 (2)의 (ii)에 의해 그것이 $1$인 것은 정확히 $F(\alpha) = F$일 때이다.

**5.** 최소의 (10)에 의해 $m^{\tau} \in \tau(F)[X]$는 $\tau(\alpha)$의 $\tau(F)$ 위의 최소다항식이고, 확대체의 (3)의 (ii)에 의해 $\tau(1) = 1$이다. $\tau(F)(\tau(\alpha)) = \{h(\tau(\alpha)) : h \in \tau(F)[X]\}$이다. $g \in F[X]$이면 $g^{\tau}$의 계수는 $\tau(F)$에 속하므로 다항식환의 (7)의 (i)에 의해 $g^{\tau} \in \tau(F)[X]$이고, 대입의 (5)에 의해 $\tau(g(\alpha)) = g^{\tau}(\tau(\alpha))$이다. 따라서 $\tau(F(\alpha)) \subseteq \tau(F)(\tau(\alpha))$이다. 거꾸로 $h \in \tau(F)[X]$라 하자. 확대체의 (3)의 (iii)에 의해 $\tau$를 $F$로 제한하고 공역을 $\tau(F)$로 선언한 $\sigma : F \to \tau(F)$는 환 동형사상이고, 대입의 (3)의 (ii)에 의해 그 계수 사상은 전사이므로 $g^{\sigma} = h$인 $g \in F[X]$가 있다. 모든 $n$에서 $\operatorname{coef}_n(g^{\tau}) = \tau(\operatorname{coef}_n(g)) = \sigma(\operatorname{coef}_n(g)) = \operatorname{coef}_n(h)$이므로 다항식환의 (7)의 (i)에 의해 $E'[X]$에서 $g^{\tau} = h$이고, $h(\tau(\alpha)) = \tau(g(\alpha)) \in \tau(F(\alpha))$이다.

**6.** 최소의 (7)에 의해 $\alpha$는 $K$ 위에서 대수적이고 그 $K$ 위의 최소다항식 $m_K$는 $\deg m_K \le d$를 만족한다. $K(\alpha)$는 $K \supseteq F$와 $\alpha$를 포함하는 $E$의 부분체이므로 (1)에 의해 $F(\alpha) \subseteq K(\alpha)$이다. (3)의 (iii)을 $K$ 위에서 쓰면 $[K(\alpha) : K] = \deg m_K \le d = [F(\alpha) : F]$이다.

**7.** 최소의 (9)에 의해 $\beta$는 $\iota(K)$ 위에서 대수적이다. (1)에 의해 $\iota(K)(\beta)$는 $\iota(K)$를 포함하고 $\beta$를 원소로 갖는 $L$의 부분체이므로, 크로네커 정리의 (2)의 (iv)에 의해 $L$과 같다.
:::

## 예시와 반례

:::example[$\mathbb{Q}(\sqrt{7})$의 원소와 역원]
[[rational-numbers-field|유리수체]]의 (1)에 의해 $\mathbb{Q}$는 $\mathbb{R}$의 부분체이고, [[square-root-exists|제곱근의 존재]]의 (1)에 의해 $\sqrt{7}\sqrt{7} = 7$인 실수 $\sqrt{7}$이 있습니다. [[eisenstein-criterion|아이젠슈타인 판정법]]의 (3)($p = 7$, $n = 2$)에 의해 $X^2 - 7$은 $\mathbb{Q}$ 위에서 기약이고 모닉이며 $\sqrt{7}$을 근으로 가지므로, 최소의 (5)에 의해 $\sqrt{7}$의 최소다항식입니다. (3)에 의해 $[\mathbb{Q}(\sqrt{7}) : \mathbb{Q}] = 2$이고 $\mathbb{Q}(\sqrt{7}) = \{x + y\sqrt{7} : x, y \in \mathbb{Q}\}$이며, 이 $x$, $y$는 하나로 정해집니다.

$\gamma = 1 + \sqrt{7}$의 역원을 (1)의 증명대로 구해 봅니다. $g = 1 + X$이고, $X^2 - 7 = (X - 1)(X + 1) - 6$이므로 $a = -\tfrac{1}{6}$, $b = \tfrac{1}{6}(X - 1)$로 두면 $a(X^2 - 7) + bg = 1$입니다. 그래서 $\gamma^{-1} = b(\sqrt{7}) = -\tfrac{1}{6} + \tfrac{1}{6}\sqrt{7}$입니다. 검산하면 $(1 + \sqrt{7})(-1 + \sqrt{7}) = 7 - 1 = 6$입니다.
:::

:::counterexample[$\sqrt{7}$을 근으로 갖는 사차 다항식 $X^4 - 49$]
$\sqrt{7}^4 = 7 \cdot 7 = 49$이므로 $\sqrt{7}$은 $X^4 - 49$의 근입니다. 그러나 $[\mathbb{Q}(\sqrt{7}) : \mathbb{Q}]$는 $4$가 아니라 $2$입니다. (3)의 차수는 $\alpha$를 근으로 갖는 아무 다항식의 차수가 아니라 최소다항식의 차수이고, $X^4 - 49 = (X^2 - 7)(X^2 + 7)$은 최소다항식 $X^2 - 7$의 배수입니다(최소의 (4)).
:::

## 확인 질문

:::check[$\mathbb{Z}_3$ 위의 $X^2 + X + [2]$로 만든 크로네커의 체 $L$에서 $\iota(\mathbb{Z}_3)(\iota([2])\beta)$는 무엇인가?]
$L$ 전체입니다. $\mathbb{Z}_3$은 체이고([[finite-integral-domain-is-a-field|유한 정역은 체]]의 (3)) $X^2 + X + [2]$에 $[0], [1], [2]$를 넣으면 $[2], [1], [2]$이므로 기약입니다([[irreducible-polynomial|기약 다항식]]의 (5)). $\gamma = \iota([2])\beta$는 크로네커 정리의 (2)의 (ii)에 의해 $\beta$의 계수가 $[2] \ne [0]$이므로 $\iota(\mathbb{Z}_3)$에 속하지 않고, (4)에 의해 $[\iota(\mathbb{Z}_3)(\gamma) : \iota(\mathbb{Z}_3)] \ne 1$입니다. (3)과 (7)에 의해 $[L : \iota(\mathbb{Z}_3)] = 2$이고, $\iota(\mathbb{Z}_3)(\gamma)$는 $L$의 부분체이므로 [[extension-field|확대체]]의 (2)의 (iii)에 의해 차수는 $2$ 이하이며, 따라서 $2$이고 $\iota(\mathbb{Z}_3)(\gamma) = L$입니다.
:::

:::check[$\mathbb{Q}(\sqrt{7})$에서 $\sqrt{7}^3$의 기저 $1, \sqrt{7}$에 관한 좌표는 무엇인가?]
$0, 7$입니다. $\sqrt{7}^3 = \sqrt{7}^2\sqrt{7} = 7\sqrt{7} = 0 \cdot 1 + 7\sqrt{7}$이고, (3)의 (ii)에 의해 이 계수는 하나뿐입니다. (3)의 (i)로 보면 $X^3$을 $X^2 - 7$로 나눈 나머지가 $7X$입니다.
:::
