---
title: 근호 확대
title_en: Radical Extension
aliases: [근호 탑, 근호에 의한 확대, 근호로 풀린다, 근호로 풀리는 다항식, extension by radicals, radical tower, solvable by radicals]
kind: definition
field: field-theory
msc: ["12F10"]
level: undergrad
summary: "복소수체의 부분체 F 에서 시작해, 앞 단계의 체에 거듭제곱이 속하는 복소수를 하나씩 붙여 얻는 부분체의 열을 근호 탑, 그 꼭대기를 F 의 근호 확대라 한다. F 위의 다항식의 ℂ 안의 근이 모두 어떤 근호 탑의 꼭대기에 들면 근호로 풀린다고 한다. 탑의 각 단계는 유한 확대이고 꼭대기는 F 에 탑의 근호를 차례로 붙인 체이며, 탑은 잘라 내고 이어 붙일 수 있다. 근호로 풀린다는 것은 근을 모두 붙인 체가 어떤 근호 확대에 포함된다는 것과 같다."
requires: [function, mathematical-induction, rational-and-irrational-numbers, real-number-arithmetic, power-of-a-real-number, square-root-exists, ring, subring, ring-homomorphism, field, finite-products-in-a-commutative-ring, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, subfield, rational-numbers-field, extension-field, algebraic-element-and-minimal-polynomial, simple-algebraic-extension, finite-extension-is-algebraic, tower-law, complex-number, complex-field, power-of-a-complex-number, complex-arithmetic-examples, roots-of-unity, nth-roots-of-complex-numbers, polynomials-and-polynomial-functions, splitting-fields-in-complex-numbers]
sources:
  - ref: judson-abstract-algebra
    loc: "23.3절 Applications, 근호 확대와 'solvable by radicals' 의 정의 (p.303), Example 23.27 (p.303), Lemma 23.28 과 그 증명 (p.304); 23.5절 Exercises, 연습문제 4, 10 (p.308), 16, 17 (p.309)"
    checked: original
    note: "출처 p.303 은 'An extension field E of a field F is an extension by radicals if there exists a chain of subfields F = F_0 ⊂ F_1 ⊂ ⋯ ⊂ F_r = E such for i = 1, 2, …, r, we have F_i = F_{i−1}(α_i) and α_i^{n_i} ∈ F_{i−1} for some positive integer n_i' 라고 정의하고, 'A polynomial f(x) is solvable by radicals over F if the splitting field K of f(x) over F is contained in an extension of F by radicals' 라고 정의한다. 출처는 이 절에서 모든 체의 표수가 0 이라고 가정한다. 이 항목은 체를 ℂ 의 부분체로 좁히고, 원소 α_i 를 β_i 로 적으며, 분해체 대신 'ℂ 안의 근이 모두 꼭대기에 든다' 로 정의한다. 출처의 정의와 같다는 것은 (3)이다(출처의 분해체 K 는 splitting-fields-in-complex-numbers 의 (3)의 (iii)에 의해 F(R) 로 잡을 수 있다). 출처는 열을 정의에서 'a chain of subfields' 라고 부르고, Lemma 23.29(p.304)에서는 열 F = F_0 ⊂ ⋯ ⊂ F_r = E 자체를 'a radical extension of F', 그 증명에서 만드는 열을 'a normal radical extension of F' 라고 부른다. '근호 탑' 은 그 열을 가리키려고 이 항목이 쓰는 이름이다(검색어 'tower' 는 책 전체에서 0건). (2)의 (iv)의 이어 붙이기는 출처에 명제로 없다(검색어 'radical'(27건을 모두 읽었다), 'chain of subfields', 'by radicals', 'tower' 로 책 전체를 찾았고 23.5절 연습문제를 처음부터 끝까지 읽었다). 23.5절 연습문제 10(p.308, F ⊂ E 이고 f 가 F 위에서 풀리면 E 위에서도 풀린다)은 이 항목이 진술하지 않는다. 예시 '이차 다항식 $\\alpha X^2 + \\beta X + \\gamma$의 근호 탑' 은 출처 p.303 의 근의 공식(이차방정식의 근이 판별식의 제곱근으로 나온다)과 같은 발상이고, 23.5절 연습문제 17(p.309, 이차 다항식의 분해체는 F(√(b² − 4ac)))과도 같은 대상이다. 예시 '$X^n - a$의 근호 탑' 은 출처 Example 23.27(p.303, xⁿ − 1 이 ℚ 위에서 근호로 풀리고 그 분해체가 ℚ(ω))과 Lemma 23.28 의 증명(p.304, xⁿ − a 의 근이 ⁿ√a, ωⁿ√a, …, ω^{n−1}ⁿ√a 이다)과 같은 대상이다. 확인 질문 '$\\iota(\\mathbb{Q})$ 위에서 $X^4 - 2X^2 - 1$은 근호로 풀리는가?' 는 23.5절 연습문제 4 (d), (i)(p.308, x⁴ − x² − 6, x⁴ − 3x² − 10 의 근호 풀이 여부를 정하라)와 같은 발상이다(X² 의 이차식으로 푼다). 23.5절 연습문제 16(p.309)은 유한체 위의 근호 확대를 묻는다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(반례 1 + √2 의 거듭제곱, 경계 경우 r = 0·일차 다항식). 독립 검토 없음."
added: 2026-11-27
---

:::statement
[[field|체]], 가역원과 역원은 [[field|가역원과 체]]의 것이고, 부분체는 [[subfield|부분체]]의 뜻이며, 확대체, 유한 확대, 차수 $[E : F]$는 [[extension-field|확대체]]의 것이다. 다항식환, 상수 다항식과 읽는 약속, 부정원 $X$는 [[polynomial-ring|다항식환]]의 것이고, 차수 $\deg$는 [[degree-of-a-polynomial|다항식의 차수]], 대입한 값과 근은 [[evaluation-homomorphism|대입 준동형]], 거듭제곱 $\beta^n$은 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 것이다. 대수적과 원소의 차수는 [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 것이고, 원소 하나를 붙인 체 $F(\beta)$는 [[simple-algebraic-extension|단순 대수적 확대]], 여러 원소를 붙인 체 $F(\beta_1, \dots, \beta_k)$는 [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (1)의 것이다. 체 $\mathbb{C}$와 함수 $\iota$는 [[complex-field|복소수체]]의 것이고, $\mathbb{C}$의 부분체 $F$ 위의 다항식 $f$의 $\mathbb{C}$ 안의 근 전체의 집합 $R$과 $F$에 $f$의 근을 모두 붙인 체 $F(R)$은 [[splitting-fields-in-complex-numbers|ℂ 안의 분해체]]의 (3)의 것이다.

**근호 탑.** $F$가 $\mathbb{C}$의 부분체이고 $r$가 $0$ 이상인 정수라 하자. $\mathbb{C}$의 부분체의 열 $F_0, F_1, \dots, F_r$, 복소수의 열 $\beta_1, \dots, \beta_r$, 자연수의 열 $n_1, \dots, n_r$가 다음을 만족할 때, 이 셋을 함께 $F$의 길이 $r$인 **근호 탑**(radical tower)이라 한다.

- $F_0 = F$이다.
- $1 \le i \le r$인 모든 $i$에서 $\beta_i^{n_i} \in F_{i-1}$이고 $F_i = F_{i-1}(\beta_i)$이다.

둘째 조건의 $\beta_i$는 $\beta_i^{n_i} \in F_{i-1}$이므로 $F_{i-1}$ 위에서 대수적이고(아래 (1)의 (i)), 그래서 $F_{i-1}(\beta_i)$가 정해진다. $\beta_i$를 탑의 $i$번째 **근호**, $n_i$를 그 **지수**, $F_r$을 탑의 **꼭대기**라 한다. $r = 0$이면 탑은 $F_0 = F$ 하나이고 꼭대기는 $F$이다.

**근호 확대.** $F$와 $E$가 $\mathbb{C}$의 부분체일 때, $E$가 $F$의 **근호 확대**(extension by radicals)인 것은 정확히 꼭대기가 $E$인 $F$의 근호 탑이 있을 때이다.

**근호로 풀린다.** $F$가 $\mathbb{C}$의 부분체이고 $f \in F[X]$가 영다항식이 아니며 $\deg f \ge 1$이라 하자. $f$가 **$F$ 위에서 근호로 풀린다**(solvable by radicals over $F$)는 것은 정확히 꼭대기가 $f$의 $\mathbb{C}$ 안의 근을 모두 원소로 갖는 $F$의 근호 탑이 있을 때이다.

다음이 성립한다. (1)과 (2)의 (iii)에서 $F_0, \dots, F_r$, $\beta_1, \dots, \beta_r$, $n_1, \dots, n_r$은 $\mathbb{C}$의 부분체 $F$의 근호 탑이다.

1. (탑의 성질)
   - (i) (한 단계) $1 \le i \le r$이면 $\beta_i$는 $F_{i-1}[X]$의 다항식 $X^{n_i} - \beta_i^{n_i}$의 근이고 $F_{i-1}$ 위에서 대수적이며, $\beta_i$의 $F_{i-1}$ 위의 차수는 $n_i$ 이하이다. $F_{i-1} \subseteq F_i$이고 $\beta_i \in F_i$이며, $F_i$는 $F_{i-1}$의 유한 확대이고 $[F_i : F_{i-1}] \le n_i$이다.
   - (ii) (포함) $0 \le j \le i \le r$이면 $F_j \subseteq F_i$이다. 특히 모든 $i$에서 $F \subseteq F_i$이다. $F_r$은 $F$의 유한 확대이다.
   - (iii) (붙인 체) $\beta_1, \dots, \beta_r$은 모두 $F$ 위에서 대수적이고, $0 \le i \le r$인 모든 $i$에서 $F_i = F(\beta_1, \dots, \beta_i)$이다. 특히 꼭대기는 $F_r = F(\beta_1, \dots, \beta_r)$이다.
2. (탑 만들기) $F$와 $E$가 $\mathbb{C}$의 부분체라 하자.
   - (i) $F$는 $F$의 근호 확대이다.
   - (ii) (근호 하나) $\beta \in \mathbb{C}$이고 $n$이 자연수이며 $\beta^n \in F$이면, $F(\beta)$는 $F$의 근호 확대이다.
   - (iii) (잘라 내기) $0 \le j \le r$이면, $k \in \{0, \dots, r - j\}$마다 $F_{j+k}$로 둔 열과 $k \in \{1, \dots, r - j\}$마다 $\beta_{j+k}$, $n_{j+k}$로 둔 열은 $F_j$의 길이 $r - j$인 근호 탑이다. 따라서 $F_r$은 모든 $F_j$의 근호 확대이다.
   - (iv) (이어 붙이기) $E$가 $F$의 근호 확대이고, $\mathbb{C}$의 부분체 $E'$이 $E$의 근호 확대이면, $E'$은 $F$의 근호 확대이다.
3. (근호로 풀린다의 판정) $F$가 $\mathbb{C}$의 부분체이고, $f \in F[X]$가 영다항식이 아니며 $\deg f \ge 1$이고, $R$이 $f$의 $\mathbb{C}$ 안의 근 전체의 집합이라 하자.
   - (i) 다음 세 조건은 서로 동치이다: $f$가 $F$ 위에서 근호로 풀린다, $R \subseteq E$인 $F$의 근호 확대 $E$가 있다, $F(R) \subseteq E$인 $F$의 근호 확대 $E$가 있다.
   - (ii) $R \subseteq F$이면 $f$는 $F$ 위에서 근호로 풀린다. 특히 $\deg f = 1$이면 그렇다.
:::

:::english
Fields, units and inverses are as in "Units and Fields"; subfields are meant as in "Subfield"; extension fields, finite extensions and the degree $[E : F]$ are as in "Extension Field". The polynomial ring, constant polynomials with the reading convention and the indeterminate $X$ are as in "Polynomial Ring"; the degree $\deg$ is as in "Degree of a Polynomial", values and roots as in "Evaluation Homomorphism", and powers $\beta^n$ as in "Finite Products and Powers in a Commutative Ring". Algebraic elements and the degree of an element are as in "Algebraic Elements and Minimal Polynomials"; the field $F(\beta)$ obtained by adjoining one element is as in "Simple Algebraic Extension", and the field $F(\beta_1, \dots, \beta_k)$ obtained by adjoining several elements is that of (1) in "Finite Extensions Are Algebraic". The field $\mathbb{C}$ and the function $\iota$ are as in "The Field of Complex Numbers", and for a polynomial $f$ over a subfield $F$ of $\mathbb{C}$, the set $R$ of all roots of $f$ in $\mathbb{C}$ and the field $F(R)$ obtained by adjoining all roots of $f$ to $F$ are those of (3) in "Splitting Fields inside the Complex Numbers".

**Radical tower.** Let $F$ be a subfield of $\mathbb{C}$ and let $r$ be an integer $\ge 0$. When a sequence $F_0, F_1, \dots, F_r$ of subfields of $\mathbb{C}$, a sequence $\beta_1, \dots, \beta_r$ of complex numbers and a sequence $n_1, \dots, n_r$ of natural numbers satisfy the following, the three together are called a **radical tower** of $F$ of length $r$.

- $F_0 = F$.
- For every $i$ with $1 \le i \le r$, $\beta_i^{n_i} \in F_{i-1}$ and $F_i = F_{i-1}(\beta_i)$.

In the second condition, $\beta_i$ is algebraic over $F_{i-1}$ because $\beta_i^{n_i} \in F_{i-1}$ ((1)(i) below), so $F_{i-1}(\beta_i)$ is defined. $\beta_i$ is called the $i$th **radical** of the tower, $n_i$ its **exponent**, and $F_r$ the **top** of the tower. If $r = 0$, the tower consists of $F_0 = F$ alone and its top is $F$.

**Extension by radicals.** For subfields $F$ and $E$ of $\mathbb{C}$, $E$ is an **extension by radicals** of $F$ exactly when there is a radical tower of $F$ whose top is $E$.

**Solvable by radicals.** Let $F$ be a subfield of $\mathbb{C}$ and let $f \in F[X]$ be nonzero with $\deg f \ge 1$. $f$ is **solvable by radicals over $F$** exactly when there is a radical tower of $F$ whose top contains all roots of $f$ in $\mathbb{C}$.

The following hold. In (1) and (2)(iii), $F_0, \dots, F_r$, $\beta_1, \dots, \beta_r$, $n_1, \dots, n_r$ is a radical tower of a subfield $F$ of $\mathbb{C}$.

1. (Properties of a tower)
   - (i) (One step) If $1 \le i \le r$, then $\beta_i$ is a root of the polynomial $X^{n_i} - \beta_i^{n_i}$ in $F_{i-1}[X]$ and is algebraic over $F_{i-1}$, and the degree of $\beta_i$ over $F_{i-1}$ is at most $n_i$. $F_{i-1} \subseteq F_i$ and $\beta_i \in F_i$, and $F_i$ is a finite extension of $F_{i-1}$ with $[F_i : F_{i-1}] \le n_i$.
   - (ii) (Inclusion) If $0 \le j \le i \le r$, then $F_j \subseteq F_i$. In particular $F \subseteq F_i$ for every $i$. $F_r$ is a finite extension of $F$.
   - (iii) (Adjoined field) $\beta_1, \dots, \beta_r$ are all algebraic over $F$, and $F_i = F(\beta_1, \dots, \beta_i)$ for every $i$ with $0 \le i \le r$. In particular the top is $F_r = F(\beta_1, \dots, \beta_r)$.
2. (Building towers) Let $F$ and $E$ be subfields of $\mathbb{C}$.
   - (i) $F$ is an extension by radicals of $F$.
   - (ii) (One radical) If $\beta \in \mathbb{C}$, $n$ is a natural number and $\beta^n \in F$, then $F(\beta)$ is an extension by radicals of $F$.
   - (iii) (Cutting) If $0 \le j \le r$, then the sequence with $F_{j+k}$ for each $k \in \{0, \dots, r - j\}$, together with the sequences with $\beta_{j+k}$ and $n_{j+k}$ for each $k \in \{1, \dots, r - j\}$, is a radical tower of $F_j$ of length $r - j$. Hence $F_r$ is an extension by radicals of every $F_j$.
   - (iv) (Concatenation) If $E$ is an extension by radicals of $F$ and a subfield $E'$ of $\mathbb{C}$ is an extension by radicals of $E$, then $E'$ is an extension by radicals of $F$.
3. (Criteria for solvability by radicals) Let $F$ be a subfield of $\mathbb{C}$, let $f \in F[X]$ be nonzero with $\deg f \ge 1$, and let $R$ be the set of all roots of $f$ in $\mathbb{C}$.
   - (i) The following three conditions are equivalent: $f$ is solvable by radicals over $F$; there is an extension by radicals $E$ of $F$ with $R \subseteq E$; there is an extension by radicals $E$ of $F$ with $F(R) \subseteq E$.
   - (ii) If $R \subseteq F$, then $f$ is solvable by radicals over $F$. In particular this holds if $\deg f = 1$.
:::

## 직관

이차방정식의 근의 공식은 계수에서 시작해 더하기, 빼기, 곱하기, 나누기와 제곱근 하나로 근을 적습니다. "근호로 푼다"는 이것을 일반화한 말입니다. 계수가 사는 체 $F$에서 시작해, 거듭제곱하면 이미 가진 체에 들어오는 수 $\beta_i$를 하나씩 붙여 가며 체를 키웁니다. $\beta_i$는 $\beta_i^{n_i}$의 $n_i$제곱근이므로 "근호 하나를 새로 쓰는 것"에 해당하고, 붙인 체 $F_{i-1}(\beta_i)$는 그 근호와 이미 가진 수로 사칙연산을 해서 얻는 수 전체입니다. 사다리를 한 칸씩 오르는 것과 같습니다. 비유의 "한 칸"은 정의의 둘째 조건이고, "사다리 꼭대기에서 근이 모두 보인다"는 것이 근호로 풀린다는 정의입니다.

정의는 체의 열로 하고 식으로 하지 않습니다. 근이 꼭대기의 원소라는 것은 대략 근을 $F$의 원소와 근호들로 사칙연산을 유한 번 해서 적을 수 있다는 뜻이지만, 이 항목은 그런 식을 형식적으로 다루지 않습니다. 근호 $\beta_i$가 이미 $F_{i-1}$에 들어 있어도 되고 $n_i = 1$이어도 되며, 그런 단계에서는 $F_i = F_{i-1}$입니다. 그래서 꼭대기가 같은 탑의 길이는 하나로 정해지지 않습니다.

어떤 원소가 근호 확대 $E$를 만든다고 해서 그 원소 자신의 거듭제곱이 $F$에 들어야 하는 것은 아닙니다. 아래 반례의 $1 + \sqrt{2}$는 자연수 지수의 거듭제곱이 어느 것도 유리수가 아니지만, $F(1 + \sqrt{2}) = F(\sqrt{2})$는 근호 하나로 얻는 근호 확대입니다. 근호 확대인지는 "그런 탑이 하나라도 있는가"로 정해집니다.

## 증명

:::idea
(1)은 $\beta_i$가 $X^{n_i} - \beta_i^{n_i}$의 근이라는 것과 차수의 곱셈 공식, 여러 원소를 붙인 체의 유일성에서 나온다. (2)는 열을 다시 번호 매기는 것이고, (3)은 $F(R)$이 $F$와 $R$을 포함하는 가장 작은 부분체라는 것이다.
:::

:::hint
$F_i = F(\beta_1, \dots, \beta_i)$를 보이려면, 여러 원소를 붙인 체의 정의가 "그런 열이 정확히 하나 있다"는 꼴이라는 것을 씁니다. 근호 탑의 $F_0, \dots, F_r$이 그 조건을 만족하는지 봅니다.
:::

:::proof
**쓰는 사실.** [[extension-field|확대체]]의 (1)의 (ii)에 의해, $K$와 $L$이 $\mathbb{C}$의 부분체이고 $L \subseteq K$이면 $L$은 체 $K$의 부분체이다. [[evaluation-homomorphism|대입 준동형]]의 (8)에 의해 부분체 위의 다항식에 대입한 값은 큰 체에서 계산한 것과 같다.

**(1)의 (i).** $b = \beta_i^{n_i} \in F_{i-1}$로 두고 $h = X^{n_i} - b \in F_{i-1}[X]$라 하자. [[degree-of-a-polynomial|다항식의 차수]]의 (2)에 의해 $X^{n_i}$는 차수가 $n_i \ge 1$인 모닉 다항식이고, 상수 다항식 $b$는 $0$이거나 차수가 $0$이므로 그 (3)에 의해 $h \ne 0$, $\deg h = n_i$이다. 대입 준동형의 (1)과 (2)에 의해 $h(\beta_i) = \beta_i^{n_i} - b = 0$이다. [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (1)에 의해 $\beta_i$는 $F_{i-1}$ 위에서 대수적이고, 그 (3)의 (ii)에 의해 최소다항식의 차수는 $\deg h = n_i$ 이하이다. [[simple-algebraic-extension|단순 대수적 확대]]의 (1)에 의해 $F_{i-1} \subseteq F_{i-1}(\beta_i) = F_i$이고 $\beta_i \in F_i$이며, 그 (3)의 (iii)에 의해 $F_i$는 $F_{i-1}$의 유한 확대이고 $[F_i : F_{i-1}]$은 $\beta_i$의 차수이므로 $n_i$ 이하이다.

**(1)의 (ii).** $j$를 고정하고 $i$에 대한 [[mathematical-induction|수학적 귀납법]]으로 $F_j \subseteq F_i$($j \le i \le r$)를 보인다. $i = j$이면 같다. $F_j \subseteq F_i$이고 $i + 1 \le r$이면 (i)에 의해 $F_i \subseteq F_{i+1}$이다. $j = 0$이 둘째 문장이다. $r = 0$이면 $F_r = F$이고 확대체의 (2)의 (ii)에 의해 $F$의 유한 확대이다. $r \ge 1$이면 쓰는 사실에 의해 각 $F_{i-1}$은 체 $F_i$의 부분체이고 (i)에 의해 $F_i$는 $F_{i-1}$의 유한 확대이므로, [[tower-law|차수의 곱셈 공식]]의 (4)를 체의 열 $F_0, \dots, F_r$에 쓰면 $F_r$은 $F_0 = F$의 유한 확대이다.

**(1)의 (iii).** (ii)에 의해 $F_r$은 $F$의 유한 확대이고, (i)과 (ii)에 의해 모든 $\beta_i$는 $F_r$의 원소이다. [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (3)을 체 $F_r$에 쓰면 $\beta_i$는 $F$ 위에서 대수적이다. 곧 $g(\beta_i) = 0$인 영이 아닌 $g \in F[X]$가 있고, 쓰는 사실에 의해 이것은 $\mathbb{C}$에서 계산해도 같으므로 $\beta_i$는 체 $\mathbb{C}$의 원소로서도 $F$ 위에서 대수적이다. 유한 확대와 대수적 확대의 (1)의 (i)을 체 $\mathbb{C}$와 열 $\beta_1, \dots, \beta_r$에 쓰면, $\mathbb{C}$의 부분체의 열 $G_0, \dots, G_r$로서 $G_0 = F$이고 $1 \le k \le r$에서 $F \subseteq G_{k-1}$, $\beta_k$가 $G_{k-1}$ 위에서 대수적, $G_k = G_{k-1}(\beta_k)$인 것이 정확히 하나 있고 $G_k = F(\beta_1, \dots, \beta_k)$이다. 근호 탑의 $F_0, \dots, F_r$은 $F_0 = F$이고, (ii)에 의해 $F \subseteq F_{k-1}$, (i)에 의해 $\beta_k$가 $F_{k-1}$ 위에서 대수적이며, 정의에 의해 $F_k = F_{k-1}(\beta_k)$이므로 이 조건을 만족한다. 유일성에 의해 모든 $k$에서 $F_k = G_k = F(\beta_1, \dots, \beta_k)$이다.

**(2)의 (i).** 길이 $0$인 탑 $F_0 = F$는 첫째 조건을 만족하고 둘째 조건은 해당하는 $i$가 없다. 꼭대기는 $F$이다.

**(2)의 (ii).** (1)의 (i)의 첫 문단과 같은 계산으로 $\beta$는 $F$ 위에서 대수적이므로 $F(\beta)$가 정해진다. $F_0 = F$, $F_1 = F(\beta)$, $\beta_1 = \beta$, $n_1 = n$은 $\beta_1^{n_1} \in F_0$이고 $F_1 = F_0(\beta_1)$이므로 꼭대기가 $F(\beta)$인 길이 $1$인 근호 탑이다.

**(2)의 (iii).** $G_k = F_{j+k}$, $\gamma_k = \beta_{j+k}$, $m_k = n_{j+k}$로 두자. $G_0 = F_j$이고, $1 \le k \le r - j$이면 $1 \le j + k \le r$이므로 근호 탑의 둘째 조건을 $i = j + k$에 쓰면 $\gamma_k^{m_k} \in F_{j+k-1} = G_{k-1}$이고 $G_k = F_{j+k-1}(\beta_{j+k}) = G_{k-1}(\gamma_k)$이다. 따라서 이것은 $F_j$의 근호 탑이고 꼭대기는 $G_{r-j} = F_r$이다.

**(2)의 (iv).** $F_0, \dots, F_r$, $\beta_1, \dots, \beta_r$, $n_1, \dots, n_r$이 꼭대기가 $E$인 $F$의 근호 탑이고, $E_0, \dots, E_s$, $\gamma_1, \dots, \gamma_s$, $m_1, \dots, m_s$가 꼭대기가 $E'$인 $E$의 근호 탑이라 하자. $0 \le k \le r$이면 $G_k = F_k$, $1 \le l \le s$이면 $G_{r+l} = E_l$로 두고, $1 \le k \le r$이면 $\delta_k = \beta_k$, $p_k = n_k$, $1 \le l \le s$이면 $\delta_{r+l} = \gamma_l$, $p_{r+l} = m_l$로 두자. $E_0 = E = F_r = G_r$이므로 $0 \le l \le s$인 모든 $l$에서 $G_{r+l} = E_l$이다. $G_0 = F$이다. $1 \le k \le r$이면 둘째 조건은 $F$의 탑의 것이다. $k = r + l$($1 \le l \le s$)이면 $\delta_k^{p_k} = \gamma_l^{m_l} \in E_{l-1} = G_{k-1}$이고 $G_k = E_l = E_{l-1}(\gamma_l) = G_{k-1}(\delta_k)$이다. 따라서 이것은 꼭대기가 $G_{r+s} = E'$인 $F$의 길이 $r + s$인 근호 탑이다.

**(3)의 (i).** 첫째 조건이 성립하면 그 탑의 꼭대기 $E$는 $F$의 근호 확대이고 $R \subseteq E$이므로 둘째 조건이 성립한다. 둘째 조건이 성립하면, (1)의 (ii)에 의해 $F \subseteq E$이고 $R \subseteq E$이므로 [[splitting-fields-in-complex-numbers|ℂ 안의 분해체]]의 (3)의 (ii)에 의해 $F(R) \subseteq E$이다. 셋째 조건이 성립하면, 같은 (3)의 (ii)에 의해 $R \subseteq F(R) \subseteq E$이고 $E$를 꼭대기로 갖는 $F$의 근호 탑이 있으므로 첫째 조건이 성립한다.

**(3)의 (ii).** $R \subseteq F$이면 (2)의 (i)의 길이 $0$인 탑의 꼭대기 $F$가 $R$을 포함한다. $\deg f = 1$이면 $f = aX + b$($a, b \in F$, $a \ne 0$)이고, 대입 준동형의 (1)에 의해 복소수 $z$에서 $f(z) = az + b$이므로 $f(z) = 0$인 것은 정확히 $z = -a^{-1}b$일 때이다. $-a^{-1}b \in F$이므로 $R \subseteq F$이다.
:::

## 예시와 반례

:::example[이차 다항식 $\alpha X^2 + \beta X + \gamma$의 근호 탑]
$F$가 $\mathbb{C}$의 부분체이고 $\alpha, \beta, \gamma \in F$, $\alpha \ne 0$, $f = \alpha X^2 + \beta X + \gamma$라 합시다. $D = \beta\beta - 4\alpha\gamma$로 두면, [[splitting-fields-in-complex-numbers|ℂ 안의 분해체]]의 (1)의 (i)에 의해 $4 = \iota(4) \in F$이므로 $D \in F$입니다. [[complex-arithmetic-examples|복소수 계산의 예]]의 (3)에 의해 $uu = D$인 복소수 $u$가 있고, (2)의 (ii)에 의해 $F(u)$는 $F$의 근호 확대입니다(근호 $u$, 지수 $2$). 대입 준동형의 (1)에 의해 $f(z) = \alpha zz + \beta z + \gamma$이므로, 복소수 계산의 예의 (4)에 의해 $R$은 $(-\beta + u)/(2\alpha)$와 $(-\beta - u)/(2\alpha)$로 이루어집니다. $2\alpha \ne 0$이고 이 두 수는 $F(u)$의 원소로 사칙연산을 한 것이므로 $F(u)$에 속합니다. 따라서 (3)의 (i)에 의해 $f$는 $F$ 위에서 근호로 풀립니다. $D$의 제곱근이 이미 $F$에 있으면 $F(u) = F$이고 근은 $F$에 있습니다.
:::

:::example[$X^n - a$의 근호 탑]
$F$가 $\mathbb{C}$의 부분체이고 $a \in F$, $n$이 자연수, $f = X^n - a$라 합시다. [[polynomials-and-polynomial-functions|다항식과 다항함수]]의 (5)의 (iv)에 의해 환 $\mathbb{C}$의 거듭제곱은 복소수의 거듭제곱과 같으므로 아래에서 둘을 구별하지 않습니다. $\omega = \omega_n$은 [[roots-of-unity|1 의 n제곱근]]의 것이고, 그 (2)에 의해 $\omega \in \mu_n$, 곧 $\omega^n = 1 \in F$입니다. [[nth-roots-of-complex-numbers|복소수의 n제곱근]]의 (3)에 의해 $\gamma^n = a$인 복소수 $\gamma$가 있습니다. $F_0 = F$, $F_1 = F(\omega)$, $F_2 = F_1(\gamma)$, 근호 $\omega$, $\gamma$, 지수 $n$, $n$은 $\gamma^n = a \in F \subseteq F_1$이므로 길이 $2$인 근호 탑입니다. 대입 준동형의 (1)에 의해 $R$은 $z^n = a$인 복소수 $z$ 전체입니다. $a \ne 0$이면 복소수의 n제곱근의 (5)에 의해 $R = \{\gamma u : u \in \mu_n\}$이고, 1 의 n제곱근의 (1)과 (2)에 의해 $\mu_n = \{\omega^k : 0 \le k \le n - 1\}$이며, $F_1$은 $\omega$를 포함하고 곱에 닫혀 있으므로 이 원소들은 $F_1$에 속합니다. 따라서 $R \subseteq F_2$입니다. $a = 0$이면 복소수의 n제곱근의 (2)에 의해 $R = \{0\} \subseteq F$입니다. 어느 경우든 $f$는 $F$ 위에서 근호로 풀립니다.
:::

:::counterexample[생성원 $1 + \sqrt{2}$의 어떤 거듭제곱도 $\iota(\mathbb{Q})$에 들지 않는 근호 확대]
$F = \iota(\mathbb{Q})$, $\delta = \iota(\sqrt{2})$, $\beta = 1 + \delta$라 합시다. 실수 $(1 + \sqrt{2})^n$은 자연수 $n$마다 $a_n + b_n\sqrt{2}$이고 $a_n$, $b_n$이 $1$ 이상인 정수라는 것을 $n$에 대한 [[mathematical-induction|수학적 귀납법]]으로 볼 수 있습니다. $n = 1$이면 $a_1 = b_1 = 1$이고, $\sqrt{2}\sqrt{2} = 2$([[square-root-exists|제곱근의 존재]]의 (1))이므로 $(a + b\sqrt{2})(1 + \sqrt{2}) = (a + 2b) + (a + b)\sqrt{2}$에서 $a_{n+1} = a_n + 2b_n$, $b_{n+1} = a_n + b_n$입니다. $(1 + \sqrt{2})^n$이 유리수 $q$이면 $b_n \ne 0$이고 [[rational-numbers-field|유리수체]]의 (1)에 의해 $\sqrt{2} = (q - a_n)/b_n$이 유리수가 되어 제곱근의 존재의 (3)에 어긋납니다. [[complex-field|복소수체]]의 (2)에 의해 $\beta = \iota(1 + \sqrt{2})$이고, [[power-of-a-complex-number|복소수의 거듭제곱]]의 (5)와 다항식과 다항함수의 (5)의 (iv)에 의해 $\beta^n = \iota((1 + \sqrt{2})^n)$입니다. $\iota$는 단사이고 [[splitting-fields-in-complex-numbers|ℂ 안의 분해체]]의 (1)의 (ii)에 의해 $F$의 원소는 유리수를 옮긴 것이므로, 어떤 자연수 $n$에서도 $\beta^n \notin F$입니다. 그래도 $\delta^2 = 2 \in F$이므로 (2)의 (ii)에 의해 $F(\delta)$는 $F$의 근호 확대입니다. $\beta = 1 + \delta \in F(\delta)$이고 $F(\delta)$는 $F$의 유한 확대이므로 $\beta$는 $F$ 위에서 대수적이고([[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (3)), $F(\beta) \subseteq F(\delta)$입니다. $\delta = \beta - 1 \in F(\beta)$이므로 $F(\delta) \subseteq F(\beta)$이고, $F(\beta) = F(\delta)$는 $F$의 근호 확대입니다. 근호 확대 $F(\beta)$의 생성원 $\beta$가 근호일 필요는 없습니다.
:::

## 확인 질문

:::check[$\mathbb{C}$의 부분체 $F$ 위에서 일차 다항식 $aX + b$($a \ne 0$)는 근호로 풀리는가? 탑의 길이는 몇이면 되는가?]
풀립니다. 근은 $-a^{-1}b \in F$ 하나이므로 길이 $0$인 탑, 곧 $F$ 자신의 꼭대기에 근이 들어 있습니다((3)의 (ii)). 근호를 하나도 쓰지 않아도 됩니다.
:::

:::check[$\iota(\mathbb{Q})$ 위에서 $X^4 - 2X^2 - 1$은 근호로 풀리는가?]
풀립니다. $F = \iota(\mathbb{Q})$, $\delta = \iota(\sqrt{2})$라 하면 $\delta^2 = 2$이고, 복소수에서 $(z^2 - 1 - \delta)(z^2 - 1 + \delta) = (z^2 - 1)^2 - \delta^2 = z^4 - 2z^2 - 1$이므로 근은 $z^2 = 1 + \delta$ 또는 $z^2 = 1 - \delta$인 $z$입니다. $(\pm 1)^2 = 1 \ne 2$이므로 $\delta \ne \pm 1$, 곧 $1 \pm \delta \ne 0$이고, [[complex-arithmetic-examples|복소수 계산의 예]]의 (3)에 의해 $uu = 1 + \delta$, $vv = 1 - \delta$인 $u$, $v$를 잡으면 근은 $\pm u$, $\pm v$입니다. $F_1 = F(\delta)$, $F_2 = F_1(u)$, $F_3 = F_2(v)$는 근호 $\delta$, $u$, $v$와 지수 $2$, $2$, $2$의 근호 탑이고($u^2 = 1 + \delta \in F_1$, $v^2 = 1 - \delta \in F_1 \subseteq F_2$), 네 근은 모두 $F_3$에 있습니다.
:::
