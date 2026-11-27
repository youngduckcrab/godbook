---
title: 유한 확대와 대수적 확대
title_en: Finite Extensions Are Algebraic
aliases: [유한 확대는 대수적 확대, 여러 원소를 붙인 체, 유한 생성 확대, 대수적 원소 전체의 체, finite extension is algebraic, adjoining finitely many elements, finitely generated algebraic extension]
kind: theorem
field: field-theory
msc: ["12F05"]
level: undergrad
summary: "대수적인 원소 α₁, …, αₙ 을 하나씩 차례로 붙여 F(α₁, …, αₙ) 을 정의한다. 이것은 F 와 모든 αᵢ 를 포함하는 가장 작은 부분체이고 붙이는 순서에 상관없으며, 그 차수는 각 원소의 차수의 곱 이하이다. 유한 확대의 원소는 모두 대수적이고, 확대가 유한인 것은 유한 개의 대수적 원소로 생성될 때이며, F 위에서 대수적인 원소 전체는 부분체를 이룬다."
requires: [integers-modulo-n, finite-integral-domain-is-a-field, irreducible-polynomial, function, cartesian-product, power-set, injective-surjective-bijective, recursion-theorem, mathematical-induction, prime-number, well-ordering-principle, ring, field, finite-sums-in-a-ring, finite-products-in-a-commutative-ring, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, subfield, vector-space-over-a-field, span-and-independence-over-a-field, basis-over-a-field, dimension-over-a-field, extension-field, kronecker-theorem, algebraic-element-and-minimal-polynomial, simple-algebraic-extension, tower-law]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "21.1절 Extension Fields, F(α_1, …, α_n) 의 정의 (p.262), Theorem 21.15 와 Remark 21.16 (p.265), Theorem 21.22 (p.266–267), Example 21.20, 21.21 (p.266); Algebraic Closure, Theorem 21.23, Corollary 21.24 (p.267); 21.5절 Exercises, 연습문제 20 (p.276)"
    checked: original
    note: "출처 p.262 는 F(α_1, …, α_n) 을 'the smallest field containing F and α_1, …, α_n' 으로 쓰고, 가장 작은 체가 있다는 것은 따로 보이지 않는다. 이 항목은 대수적인 원소만 다루고, 재귀 정리로 원소를 하나씩 붙여 정의한 뒤 그것이 가장 작은 부분체임을 증명한다. 출처 Theorem 21.22 의 증명(p.267)은 F(α_1, …, α_i) = F(α_1, …, α_{i−1})(α_i) 를 쓰는데, 이 항목에서는 이것이 정의이다. (3)은 출처 Theorem 21.15(p.265, 'Every finite extension field E of a field F is an algebraic extension')이고 증명도 같다(1, α, …, α^n 이 일차종속). 출처 Remark 21.16 은 그 역이 성립하지 않는다고 적고 증명을 연습문제 20(p.276)으로 둔다. 이 항목은 역을 다루지 않는다. (5)는 출처 Theorem 21.22 의 (1)⇔(2)이고, 출처의 (1)⇒(2) 는 기저 α_1, …, α_n 에 대하여 'such that E = F(α_1, …, α_n)' 이라고만 적는다. (4)의 '차수는 각 원소의 차수의 곱 이하' 는 출처 Theorem 21.22 의 (3)⇒(1) 이 '[F(α_1, …, α_i) : F(α_1, …, α_{i−1})] is finite for each i' 라고 적는 데서 한 걸음 더 나간 것이다. (6)은 출처 Theorem 21.23(p.267)이고, 출처의 증명은 'F(α, β) is a finite extension of F' 를 근거 없이 쓴다. 이 항목은 그것을 (4)로 보인다. 출처 Example 21.20, 21.21(p.266)은 F(α_1, …, α_n) 이 단순 확대인 예를 든다. 예시 '$\\mathbb{Z}_2$ 위에 두 번 쌓은 체에서 원소 둘을 붙인 체' 는 출처 Example 21.21 이 두 원소를 붙인 체의 기저와 차수를 사슬로 계산하는 것과 같은 발상이다. 반례 '차수의 곱보다 작은 $\\iota(\\mathbb{Z}_2)(\\alpha, 1 + \\alpha)$' 는 원소 둘을 붙인 체가 원소 하나를 붙인 체와 같아지는 예로, 출처 Example 21.20 의 끝 문장('it is possible that some extension F(α_1, …, α_n) is actually a simple extension of F even though n > 1')과 같은 관찰이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(예의 수치 재계산, 차수 논법의 경계 경우). 독립 검토 없음."
added: 2026-11-27
---

:::statement
[[field|체]]는 [[field|가역원과 체]]의 뜻이고, 부분체, 확대체, 유한 확대, 차수 $[E : F]$는 [[subfield|부분체]]와 [[extension-field|확대체]]의 것이며, 확대체를 벡터공간으로 볼 때는 확대체의 (1)의 (i)의 연산으로 본다. 대수적, 대수적 확대, 최소다항식, 원소의 차수는 [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 것이고, 원소 하나를 붙인 체 $F(\alpha)$는 [[simple-algebraic-extension|단순 대수적 확대]]의 것이다. 정수의 열의 곱은 환 $\mathbb{Z}$에서의 [[finite-products-in-a-commutative-ring|가환환의 유한 곱]]이다.

아래에서 $E$는 체이고 $F$는 $E$의 부분체이다.

1. (여러 원소를 붙인 체) $n$이 $0$ 이상인 정수이고 $\alpha_1, \dots, \alpha_n$이 $F$ 위에서 대수적인 $E$의 원소의 열이라 하자.
   - (i) (정의) $E$의 부분체의 열 $F_0, F_1, \dots, F_n$이 정확히 하나 있어 $F_0 = F$이고, $1 \le k \le n$인 모든 $k$에서 $F \subseteq F_{k-1}$, $\alpha_k$는 $F_{k-1}$ 위에서 대수적이며 $F_k = F_{k-1}(\alpha_k)$이다. $F_k$를 $F(\alpha_1, \dots, \alpha_k)$로 쓰고 **$F$에 $\alpha_1, \dots, \alpha_k$를 붙인 체**라 한다. 곧 $F(\alpha_1, \dots, \alpha_k) = F(\alpha_1, \dots, \alpha_{k-1})(\alpha_k)$이고, $k = 0$이면 $F$, $k = 1$이면 $F(\alpha_1)$이다.
   - (ii) (가장 작은 부분체) $F(\alpha_1, \dots, \alpha_n)$은 $F$를 포함하고 모든 $\alpha_i$를 원소로 갖는 $E$의 부분체이다. $K$가 $E$의 부분체이고 $F \subseteq K$이며 모든 $i$에서 $\alpha_i \in K$이면 $F(\alpha_1, \dots, \alpha_n) \subseteq K$이다. 이 두 성질을 갖는 $E$의 부분체는 $F(\alpha_1, \dots, \alpha_n)$뿐이다.
   - (iii) (순서) $\sigma : \{1, \dots, n\} \to \{1, \dots, n\}$이 전단사이면 $F(\alpha_{\sigma(1)}, \dots, \alpha_{\sigma(n)}) = F(\alpha_1, \dots, \alpha_n)$이다.
   - (iv) (나누어 붙이기) $0 \le k \le n$이면 $\alpha_{k+1}, \dots, \alpha_n$은 $F(\alpha_1, \dots, \alpha_k)$ 위에서 대수적이고, $F(\alpha_1, \dots, \alpha_k)$에 $\alpha_{k+1}, \dots, \alpha_n$을 붙인 체는 $F(\alpha_1, \dots, \alpha_n)$이다.
2. (상의 꼴) $E'$이 체이고 $\tau : E \to E'$이 단사인 환 준동형이면, (1)의 열에 대하여 $\tau(\alpha_1), \dots, \tau(\alpha_n)$은 $E'$의 부분체 $\tau(F)$ 위에서 대수적이고
   $$
   \begin{aligned}
   &\tau\bigl(F(\alpha_1, \dots, \alpha_n)\bigr) \\
   &\quad = \tau(F)\bigl(\tau(\alpha_1), \dots, \tau(\alpha_n)\bigr)
   \end{aligned}
   $$
   이다.
3. (유한 확대는 대수적) $E$가 $F$의 유한 확대이면 $E$의 모든 원소는 $F$ 위에서 대수적이고, 그 $F$ 위의 차수는 $[E : F]$를 나눈다. 곧 유한 확대는 대수적 확대이다.
4. (차수의 상한) (1)의 열에서 $\alpha_i$의 $F$ 위의 차수를 $e_i$라 하자. 그러면 $F(\alpha_1, \dots, \alpha_n)$은 $F$의 유한 확대이고
   $$
   [F(\alpha_1, \dots, \alpha_n) : F] \le e_1 e_2 \cdots e_n
   $$
   이다. $n = 0$이면 오른쪽은 빈 곱 $1$이다.
5. (유한 확대의 판정) $E$가 $F$의 유한 확대인 것은 정확히 어떤 $n \ge 0$과 $F$ 위에서 대수적인 $E$의 원소의 열 $\alpha_1, \dots, \alpha_n$이 있어 $E = F(\alpha_1, \dots, \alpha_n)$일 때이다. 이때 $\alpha_1, \dots, \alpha_n$으로 $E$의 $F$ 위의 기저를 잡을 수 있다.
6. (대수적 원소 전체) $E$의 원소 가운데 $F$ 위에서 대수적인 것 전체의 집합을 $A$라 하면, $A$는 $F$를 포함하는 $E$의 부분체이고 체 $A$는 $F$의 대수적 확대이다.
:::

:::english
Fields are as in units and fields; subfields, extension fields, finite extensions and degrees $[E : F]$ are those of subfields and extension fields, and an extension field is regarded as a vector space with the operations of item (1)(i) of extension fields. Algebraic elements, algebraic extensions, minimal polynomials and degrees of elements are those of algebraic elements and minimal polynomials, and the field $F(\alpha)$ obtained by adjoining one element is that of simple algebraic extensions. Products of lists of integers are finite products in the ring $\mathbb{Z}$.

Below, $E$ is a field and $F$ is a subfield of $E$.

1. (Adjoining several elements) Let $n$ be a nonnegative integer and $\alpha_1, \dots, \alpha_n$ a list of elements of $E$ algebraic over $F$.
   - (i) (Definition) There is exactly one list $F_0, F_1, \dots, F_n$ of subfields of $E$ such that $F_0 = F$ and, for every $k$ with $1 \le k \le n$, $F \subseteq F_{k-1}$, $\alpha_k$ is algebraic over $F_{k-1}$, and $F_k = F_{k-1}(\alpha_k)$. We write $F_k$ as $F(\alpha_1, \dots, \alpha_k)$ and call it the **field obtained by adjoining $\alpha_1, \dots, \alpha_k$ to $F$**. Thus $F(\alpha_1, \dots, \alpha_k) = F(\alpha_1, \dots, \alpha_{k-1})(\alpha_k)$; for $k = 0$ it is $F$, and for $k = 1$ it is $F(\alpha_1)$.
   - (ii) (Smallest subfield) $F(\alpha_1, \dots, \alpha_n)$ is a subfield of $E$ containing $F$ and having every $\alpha_i$ as an element. If $K$ is a subfield of $E$ with $F \subseteq K$ and $\alpha_i \in K$ for every $i$, then $F(\alpha_1, \dots, \alpha_n) \subseteq K$. $F(\alpha_1, \dots, \alpha_n)$ is the only subfield of $E$ with these two properties.
   - (iii) (Order) If $\sigma : \{1, \dots, n\} \to \{1, \dots, n\}$ is a bijection, then $F(\alpha_{\sigma(1)}, \dots, \alpha_{\sigma(n)}) = F(\alpha_1, \dots, \alpha_n)$.
   - (iv) (Adjoining in two steps) If $0 \le k \le n$, then $\alpha_{k+1}, \dots, \alpha_n$ are algebraic over $F(\alpha_1, \dots, \alpha_k)$, and the field obtained by adjoining $\alpha_{k+1}, \dots, \alpha_n$ to $F(\alpha_1, \dots, \alpha_k)$ is $F(\alpha_1, \dots, \alpha_n)$.
2. (Images) If $E'$ is a field and $\tau : E \to E'$ is an injective ring homomorphism, then, for the list in (1), $\tau(\alpha_1), \dots, \tau(\alpha_n)$ are algebraic over the subfield $\tau(F)$ of $E'$, and
   $$
   \begin{aligned}
   &\tau\bigl(F(\alpha_1, \dots, \alpha_n)\bigr) \\
   &\quad = \tau(F)\bigl(\tau(\alpha_1), \dots, \tau(\alpha_n)\bigr)
   \end{aligned}.
   $$
3. (Finite extensions are algebraic) If $E$ is a finite extension of $F$, then every element of $E$ is algebraic over $F$, and its degree over $F$ divides $[E : F]$. That is, a finite extension is an algebraic extension.
4. (Bound on the degree) For the list in (1), let $e_i$ be the degree of $\alpha_i$ over $F$. Then $F(\alpha_1, \dots, \alpha_n)$ is a finite extension of $F$ and
   $$
   [F(\alpha_1, \dots, \alpha_n) : F] \le e_1 e_2 \cdots e_n.
   $$
   If $n = 0$, the right side is the empty product $1$.
5. (Criterion for finiteness) $E$ is a finite extension of $F$ if and only if there are $n \ge 0$ and a list $\alpha_1, \dots, \alpha_n$ of elements of $E$ algebraic over $F$ with $E = F(\alpha_1, \dots, \alpha_n)$. In that case $\alpha_1, \dots, \alpha_n$ can be taken to be a basis of $E$ over $F$.
6. (All algebraic elements) If $A$ is the set of elements of $E$ that are algebraic over $F$, then $A$ is a subfield of $E$ containing $F$, and the field $A$ is an algebraic extension of $F$.
:::

## 직관

원소를 여러 개 붙일 때는 하나씩 붙입니다. 먼저 $F$에 $\alpha_1$을 붙이고, 그 체에 $\alpha_2$를 붙이는 식입니다. 이렇게 차례로 만든 체는 결국 "$F$와 $\alpha_1, \dots, \alpha_n$을 모두 포함하는 가장 작은 부분체"이고((1)의 (ii)), 이 성질은 순서를 말하지 않으므로 붙이는 순서를 바꿔도 같은 체가 나옵니다((1)의 (iii)).

유한 확대에서는 원소의 거듭제곱 $1, \alpha, \alpha^2, \dots$를 차원보다 많이 늘어놓으면 일차종속이 되고, 그 종속 관계의 계수가 $\alpha$를 근으로 갖는 다항식이 됩니다((3)). 거꾸로 대수적인 원소를 유한 개 붙인 체는 한 번 붙일 때마다 차수에 그 원소의 차수 이하인 자연수가 곱해지므로 유한 확대입니다((4)). 그래서 "유한 확대"와 "유한 개의 대수적 원소로 생성된 확대"는 같은 말입니다((5)).

(6)은 대수적 원소끼리 빼고 곱하고 $0$이 아닌 원소로 나누어도 대수적이라는 것입니다. $\alpha$와 $\beta$를 붙인 체가 유한 확대이고 $\alpha + \beta$ 같은 원소가 모두 그 안에 있으므로, (3)이 그것들이 대수적이라고 말해 줍니다. $\alpha + \beta$를 근으로 갖는 다항식을 직접 찾지 않아도 됩니다.

## 증명

:::idea
붙이는 체의 열은 재귀 정리로 정한다. 가장 작다는 성질은 한 원소씩의 가장 작다는 성질에서 귀납으로 나오고, 차수의 상한은 사슬의 곱셈 공식과 "밑체가 커지면 원소를 붙이는 차수가 작아진다"에서 나온다. (3)은 길이가 차원보다 긴 열이 일차종속이라는 것이다.
:::

:::hint
(1)의 (ii)에서 $K$가 $F$와 모든 $\alpha_i$를 포함하면, $F_{k-1} \subseteq K$이고 $\alpha_k \in K$이므로 $F_k = F_{k-1}(\alpha_k) \subseteq K$입니다.
:::

:::hint
(3)에서 $[E : F] = N$이면 길이 $N + 1$인 열 $1, \alpha, \dots, \alpha^N$은 일차종속입니다.
:::

:::proof
**쓰는 사실.** "최소의 (n)"은 [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (n), "단순의 (n)"은 [[simple-algebraic-extension|단순 대수적 확대]]의 (n), "확대체의 (n)"은 [[extension-field|확대체]]의 (n), "곱셈 공식의 (n)"은 [[tower-law|차수의 곱셈 공식]]의 (n), "부분체의 (n)"은 [[subfield|부분체]]의 (n)이다. 정수의 부등식은 [[prime-number|소수]]의 (Z1)–(Z3)과 [[well-ordering-principle|정렬 원리]]의 (Z5)–(Z8)을 쓴다.

**1.** (i) $X = \mathscr{P}(E)$로 두고([[power-set|멱집합]]), 자연수 $k$와 $S \in X$에 대하여 $g(k, S)$를 다음과 같이 정한다: $k \le n$이고 $S$가 $E$의 부분체이며 $F \subseteq S$이면 $g(k, S) = S(\alpha_k)$, 그렇지 않으면 $g(k, S) = S$. 앞의 경우 최소의 (7)에 의해 $\alpha_k$는 $S$ 위에서 대수적이므로 $S(\alpha_k)$는 단순의 (1)에 의해 하나로 정해진 $E$의 부분집합이고, 따라서 $g : \mathbb{N} \times X \to X$는 함수이다. [[recursion-theorem|재귀 정리]]에 의해 $x(1) = F$이고 모든 자연수 $k$에서 $x(k + 1) = g(k, x(k))$인 함수 $x : \mathbb{N} \to X$가 정확히 하나 있다. $0 \le k \le n$에서 $F_k = x(k + 1)$로 두자. $k$에 대한 [[mathematical-induction|수학적 귀납법]]으로 "$F_k$는 $F$를 포함하는 $E$의 부분체"를 보인다. $F_0 = F$는 부분체이다. $F_{k-1}$이 그러하고 $k \le n$이면 $F_k = g(k, F_{k-1}) = F_{k-1}(\alpha_k)$이고, 단순의 (1)에 의해 이것은 $F_{k-1} \supseteq F$를 포함하는 부분체이다. 따라서 이 열은 (i)의 조건을 만족한다. 조건을 만족하는 다른 열 $F'_0, \dots, F'_n$이 있으면 같은 귀납법으로 $F'_k = F_k$이다($F'_0 = F = F_0$이고, $F'_{k-1} = F_{k-1}$이면 $F'_k = F'_{k-1}(\alpha_k) = F_k$).

(ii) $k$에 대한 귀납법으로 "$F_k$는 $F$와 $\alpha_1, \dots, \alpha_k$를 포함하고, 그것들을 포함하는 $E$의 모든 부분체 $K$에서 $F_k \subseteq K$이다"를 보인다. $k = 0$이면 $F_0 = F$이다. $k - 1$에서 성립하면, $F_k = F_{k-1}(\alpha_k)$는 단순의 (1)에 의해 $F_{k-1}$과 $\alpha_k$를 포함하므로 $F$와 $\alpha_1, \dots, \alpha_k$를 포함한다. $K$가 $F$와 $\alpha_1, \dots, \alpha_k$를 포함하는 부분체이면 귀납 가정에 의해 $F_{k-1} \subseteq K$이고 $\alpha_k \in K$이므로 단순의 (1)에 의해 $F_k \subseteq K$이다. 마지막 문장: $M$도 두 성질을 가지면 $F(\alpha_1, \dots, \alpha_n) \subseteq M$이고 $M \subseteq F(\alpha_1, \dots, \alpha_n)$이다.

(iii) $\sigma$가 전단사이므로 $\{\alpha_{\sigma(1)}, \dots, \alpha_{\sigma(n)}\} = \{\alpha_1, \dots, \alpha_n\}$이고, 두 체는 모두 (ii)의 두 성질을 같은 원소들에 대해 갖는다. (ii)의 마지막 문장에 의해 같다.

(iv) $K_0 = F(\alpha_1, \dots, \alpha_k)$는 $F$를 포함하므로 최소의 (7)에 의해 $\alpha_{k+1}, \dots, \alpha_n$은 $K_0$ 위에서 대수적이다. $K_0$에 그것들을 붙인 체를 $M$이라 하자. (ii)를 $K_0$ 위에서 쓰면 $M$은 $K_0 \supseteq F$와 $\alpha_{k+1}, \dots, \alpha_n$을 포함하고 $K_0$은 $\alpha_1, \dots, \alpha_k$를 포함하므로, $M$은 $F$와 모든 $\alpha_i$를 포함한다. 거꾸로 $F$와 모든 $\alpha_i$를 포함하는 부분체 $K$는 (ii)에 의해 $K_0$을 포함하고 $\alpha_{k+1}, \dots, \alpha_n$을 포함하므로, $K_0$ 위의 (ii)에 의해 $M \subseteq K$이다. (ii)의 마지막 문장에 의해 $M = F(\alpha_1, \dots, \alpha_n)$이다.

**2.** 최소의 (10)에 의해 각 $\tau(\alpha_i)$는 $\tau(F)$ 위에서 대수적이다. $k$에 대한 귀납법으로 $\tau(F_k) = \tau(F)(\tau(\alpha_1), \dots, \tau(\alpha_k))$를 보인다. $k = 0$이면 양쪽이 $\tau(F)$이다. $k - 1$에서 성립하면, 확대체의 (5)의 (i)에 의해 $\tau(F_{k-1})$은 $E'$의 부분체이고, 단순의 (5)를 $F_{k-1}$과 $\alpha_k$에 쓰면 $\tau(F_k) = \tau(F_{k-1})(\tau(\alpha_k))$이며, 귀납 가정과 (1)의 (i)의 정의에 의해 이것은 $\tau(F)(\tau(\alpha_1), \dots, \tau(\alpha_k))$이다.

**3.** $[E : F] = N$이고 $\alpha \in E$라 하자. $k \in \{1, \dots, N + 1\}$마다 $w_k = \alpha^{k-1}$인 길이 $N + 1$인 열은 [[dimension-over-a-field|체 위의 차원]]의 (5)의 (iii)에 의해 일차종속이다. 곧 $\sum_{k=1}^{N+1} a_k \alpha^{k-1} = 0$이고 어떤 $a_k \ne 0$인 $F$의 원소의 열 $a$가 있다. $g = \sum_{k=0}^{N} a_{k+1} X^k \in F[X]$로 두면 [[polynomial-ring|다항식환]]의 (5)의 (i)에 의해 $g$의 계수 가운데 $0$이 아닌 것이 있어 $g \ne 0$이고, [[evaluation-homomorphism|대입 준동형]]의 (1)과 [[finite-sums-in-a-ring|환의 유한 합]]의 (5)에 의해 $g(\alpha) = \sum_{k=1}^{N+1} a_k\alpha^{k-1} = 0$이다. 따라서 $\alpha$는 대수적이고, 곱셈 공식의 (5)에 의해 그 차수는 $N$을 나눈다.

**4.** $F_0, \dots, F_n$을 (1)의 (i)의 열이라 하자. $1 \le k \le n$이면 단순의 (3)의 (iii)에 의해 $F_k = F_{k-1}(\alpha_k)$는 $F_{k-1}$의 유한 확대이고 $[F_k : F_{k-1}]$은 $\alpha_k$의 $F_{k-1}$ 위의 차수이며, 단순의 (6)에 의해 이것은 $[F(\alpha_k) : F] = e_k$ 이하이다. (1)의 (i)에서 $F_{k-1}$은 $F_k$의 부분체이다(부분체의 (5)의 (i)). 곱셈 공식의 (4)를 길이 $n + 1$인 사슬 $F_0, \dots, F_n$에 쓰면 $F_n$은 $F$의 유한 확대이고 $[F_n : F]$는 $[F_1 : F_0], \dots, [F_n : F_{n-1}]$의 곱이다. 이 곱이 $e_1 \cdots e_n$ 이하라는 것을 길이에 대한 귀납법으로 보인다. 빈 곱은 둘 다 $1$이다. 처음 $k - 1$개의 곱 $P$와 $Q = e_1 \cdots e_{k-1}$에서 $1 \le P \le Q$이면, $1 \le [F_k : F_{k-1}] \le e_k$이고 (Z3)과 (Z6)에 의해 $P\,[F_k : F_{k-1}] \le Q\,[F_k : F_{k-1}] \le Q e_k$이며, [[finite-products-in-a-commutative-ring|가환환의 유한 곱]]의 (2)에 의해 양쪽은 처음 $k$개의 곱이다.

**5.** 거꾸로 방향은 (4)이다. $E$가 유한 확대이고 $[E : F] = n$이라 하자. [[dimension-over-a-field|체 위의 차원]]의 (4)에 의해 길이 $n$인 기저 $v_1, \dots, v_n$이 있고, (3)에 의해 각 $v_i$는 $F$ 위에서 대수적이다. $M = F(v_1, \dots, v_n)$은 $F$를 포함하는 $E$의 부분체이고 모든 $v_i$를 포함하므로, $M$의 원소의 $F$ 계수 일차결합은 $M$에 속하고(부분체의 (1)과 (3)의 (iii)) $E = \operatorname{span}_F(v_1, \dots, v_n) \subseteq M$이다. 따라서 $E = M$이다.

**6.** 최소의 (1)에 의해 $F \subseteq A$이고 특히 $1 \in A$이다. $\alpha, \beta \in A$라 하자. (4)에 의해 $F(\alpha, \beta)$는 $F$의 유한 확대이고, (1)의 (ii)에 의해 $\alpha$, $\beta$를 포함하는 부분체이므로 $\alpha - \beta$, $\alpha\beta$와 $\alpha \ne 0$일 때 $\alpha^{-1}$을 포함한다(부분체의 (1)). (3)을 체 $F(\alpha, \beta)$에 쓰면 이 원소들은 $F$ 위에서 대수적이고, 대수적이라는 것은 $E$에서 근이 되는 영이 아닌 다항식이 있다는 것이므로 $E$의 원소로서도 대수적이다. 따라서 이것들은 $A$에 속하고, 부분체의 (1)에 의해 $A$는 $E$의 부분체이다. 부분체의 (5)의 (i)에 의해 $F$는 $A$의 부분체이고, $A$의 원소는 모두 $F$ 위에서 대수적이므로($A$의 원소에 대한 대입은 $E$에서 계산한 것과 같다, 부분체의 (3)의 (iii)) $A$는 $F$의 대수적 확대이다.
:::

## 예시와 반례

:::example[$\mathbb{Z}_2$ 위에 두 번 쌓은 체에서 원소 둘을 붙인 체]
$\mathbb{Z}_2$ 위의 기약 다항식 $X^2 + X + [1]$로 만든 [[kronecker-theorem|크로네커 정리]]의 체를 $L$(원소 $0, 1, \alpha, 1 + \alpha$, 단사 $\iota$)이라 합시다. $L$ 위의 $X^2 + X + \alpha$는 $L$의 네 원소에서 값이 $\alpha, \alpha, 1 + \alpha, 1 + \alpha$여서 근이 없고 차수가 $2$이므로 기약입니다([[irreducible-polynomial|기약 다항식]]의 (5)). 이것으로 만든 크로네커의 체를 $L'$, 단사를 $\iota' : L \to L'$, $X$의 잉여류를 $\alpha'$, $P = \iota'(\iota(\mathbb{Z}_2))$라 합시다. 크로네커 정리의 (2)의 (iii)과 [[extension-field|확대체]]의 (5)의 (iii), [[tower-law|차수의 곱셈 공식]]의 (2)에 의해 $[L' : P] = [L' : \iota'(L)]\,[\iota'(L) : P] = 2 \cdot 2 = 4$이고, (3)에 의해 $\iota'(\alpha)$와 $\alpha'$은 $P$ 위에서 대수적입니다.

(1)의 (i)과 (2)에 의해 $P(\iota'(\alpha), \alpha') = P(\iota'(\alpha))(\alpha') = \iota'(\iota(\mathbb{Z}_2)(\alpha))(\alpha')$이고, [[simple-algebraic-extension|단순 대수적 확대]]의 (7)에 의해 $\iota(\mathbb{Z}_2)(\alpha) = L$, $\iota'(L)(\alpha') = L'$이므로 $P(\iota'(\alpha), \alpha') = L'$입니다. $\iota'(\alpha)$의 $P$ 위의 차수는 $2$이고($[\iota'(L) : P] = 2$와 단순 대수적 확대의 (3)), $\alpha'$의 $P$ 위의 차수를 $e$라 하면 (4)에 의해 $4 \le 2e$, 곧 $e \ge 2$이고, (3)에 의해 $e$는 $4$를 나눕니다. 그래서 $e$는 $2$이거나 $4$입니다.
:::

:::counterexample[차수의 곱보다 작은 $\iota(\mathbb{Z}_2)(\alpha, 1 + \alpha)$]
$\mathbb{Z}_2$ 위의 $X^2 + X + [1]$로 만든 체 $L$에서 $\alpha$와 $1 + \alpha$는 둘 다 $\iota(\mathbb{Z}_2)$ 위의 차수가 $2$입니다(크로네커 정리의 (2)의 (ii)에 의해 $\alpha$의 계수가 $[1]$이어서 둘 다 $\iota(\mathbb{Z}_2)$에 속하지 않으므로 [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (6)에 의해 차수가 $1$이 아니고, $[L : \iota(\mathbb{Z}_2)] = 2$이므로 (3)에 의해 차수는 $2$의 약수입니다). 그러나 $1 + \alpha \in \iota(\mathbb{Z}_2)(\alpha)$이므로 (1)의 (ii)에 의해 $\iota(\mathbb{Z}_2)(\alpha, 1 + \alpha) = \iota(\mathbb{Z}_2)(\alpha) = L$이고 차수는 $2$입니다. (4)는 부등식이고, 붙이는 원소의 차수를 곱한 $4$에 닿지 않을 수 있습니다.
:::

## 확인 질문

:::check[$\alpha$, $\beta$가 $F$ 위에서 대수적이고 차수가 각각 $2$, $3$이면 $[F(\alpha, \beta) : F]$는 얼마인가?]
$6$입니다. (4)에 의해 $6$ 이하이고, [[tower-law|차수의 곱셈 공식]]의 (5)에 의해 $F(\alpha, \beta)$의 차수는 $\alpha$의 차수 $2$와 $\beta$의 차수 $3$으로 모두 나누어떨어집니다($F(\alpha, \beta)$는 $F$의 유한 확대이고 $\alpha$, $\beta$를 포함합니다). $2$와 $3$으로 나누어떨어지는 $1$ 이상 $6$ 이하의 정수는 $6$뿐입니다.
:::

:::check[$E$가 $F$의 유한 확대이고 $\alpha \in E$이면 $\alpha^2 + \alpha$는 $F$ 위에서 대수적인가?]
그렇습니다. $\alpha^2 + \alpha \in E$이고 (3)에 의해 유한 확대의 모든 원소는 대수적입니다. (6)으로 보아도 $\alpha$가 대수적이므로 대수적 원소 전체의 부분체에 $\alpha^2 + \alpha$가 들어 있습니다.
:::
