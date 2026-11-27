---
title: 체의 확대의 예
title_en: Examples of Field Extensions
aliases: [실수의 부분체의 예, 제곱근을 붙인 체, Q(√2, √5), Q(√2 + √5), 세제곱근을 붙인 체, examples of field extensions]
kind: proposition
field: field-theory
msc: ["12F05"]
level: undergrad
summary: "실수체의 부분체인 유리수체 위에서, 제곱근 √a 가 유리수가 아니면 Q(√a) 의 차수가 2 이고 원소가 x + y√a 꼴로 하나씩 쓰인다는 것, Q(√2, √5) 의 차수가 4 이고 1, √2, √5, √10 이 기저라는 것, √2 + √5 하나를 붙여도 같은 체가 되고 그 최소다항식이 X⁴ − 14X² + 9 라는 것, 세제곱하여 2 가 되는 실수 c 에 대하여 Q(c) 의 차수가 3 이고 √3 이 Q(c) 에 없다는 것을 보인다."
requires: [prime-number, interval, real-number-arithmetic, order-properties-of-reals, power-of-a-real-number, square-root-exists, power-function-is-continuous, intermediate-value-theorem, ring, ring-examples, field, finite-sums-in-a-ring, finite-products-in-a-commutative-ring, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, irreducible-polynomial, rational-numbers-field, eisenstein-criterion, subfield, basis-over-a-field, extension-field, algebraic-element-and-minimal-polynomial, simple-algebraic-extension, tower-law, finite-extension-is-algebraic]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "21.1절 Extension Fields, Example 21.1 (p.260), Example 21.7 (p.262), Example 21.11 (p.263), Example 21.20, 21.21 (p.266); 16.7절 Exercises, 연습문제 1 (p.204); 21.5절 Exercises, 연습문제 1, 2 (p.275–276), 22 (p.277)"
    checked: original
    note: "출처 Example 21.7(p.262)과 21.11(p.263)은 √2 가 Q 위에서 대수적이고 최소다항식이 x² − 2 라는 것을 적고, 이 항목의 (1)은 그것을 'X² − a 가 Q 위에서 기약이면' 으로 넓힌 것이다. 출처는 x² − 2 의 기약성을 따로 보이지 않고, 이 항목은 아이젠슈타인 판정법으로 보인다. (2)의 기저 1, √2, √5, √10 은 출처 16.7절 연습문제 1(d)(p.204)의 Q(√2, √3) = {a + b√2 + c√3 + d√6} 와 같은 꼴이고, 출처 21.5절 연습문제 2(a), (d)(p.275–276)가 Q(√3, √6), Q(√3, √5, √7) 의 기저를 묻는 것과 같은 종류의 계산이다. (3)은 출처 Example 21.20(p.266)이 √3 + √5 의 최소다항식 x⁴ − 16x² + 4 와 Q(√3, √5) = Q(√3 + √5) 를 보이는 것과 같은 발상이고, 출처 21.5절 연습문제 22(p.277, Q(√a, √b) = Q(√a + √b))의 한 경우이다. 출처는 Example 21.20 에서 'It is easy to determine that the minimal polynomial of √3 + √5 is x⁴ − 16x² + 4' 라고 적는데, 이 항목은 γ³ 을 계산해 √2 와 √5 를 γ 의 식으로 쓴다. (4)는 출처 Example 21.21(p.266)이 ∛5 를 붙인 체의 차수 3 을 쓰는 것과 같은 대상이고, √3 이 Q(c) 에 없다는 것을 차수의 나눔으로 보이는 것은 출처 21.5절 연습문제 2(e)(p.276, Q(√2, ∛2) 의 기저)와 같은 발상이다. 출처는 ∛5 가 실수로 있다는 것을 따로 보이지 않고, 이 항목은 세제곱하여 2 가 되는 실수가 있다는 것을 사잇값 정리로 보인다. 예시 '$\\mathbb{Q}(\\sqrt{2}, \\sqrt{5})$에서 $\\sqrt{2} + \\sqrt{5}$의 역원' 의 계산은 출처 Example 21.1(p.260)이 1/(√2 + √3) = √3 − √2 를 쓰는 것과 같은 발상이다. 반례 '차수가 $4$가 아닌 $\\mathbb{Q}(\\sqrt{2}, \\sqrt{8})$' 은 출처 21.5절 연습문제 2(f)(p.276, Q(√8) over Q(√2))와 같은 대상이다. 확인 질문 '$\\sqrt{2} + \\sqrt{7}$의 $\\mathbb{Q}$ 위의 차수가 $3$일 수 있는가?' 의 체 Q(√2, √7) 은 출처 21.5절 연습문제 22(p.277)의 Q(√3, √7) = Q(√3 + √7) 과 같은 꼴이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(예의 수치 재계산, 차수 논법의 경계 경우). 독립 검토 없음."
added: 2026-11-27
---

:::statement
유리수체 $\mathbb{Q}$는 [[rational-numbers-field|유리수체]]의 (1)에 의해 체 $\mathbb{R}$의 부분체이고, 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 것, 제곱근 $\sqrt{a}$는 [[square-root-exists|제곱근의 존재]]의 것이다. 부분체, 확대체, 차수 $[E : F]$는 [[subfield|부분체]]와 [[extension-field|확대체]]의 것이고, 대수적, 최소다항식, 원소의 차수는 [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 것이며, $F(\alpha)$와 $F(\alpha_1, \dots, \alpha_n)$은 [[simple-algebraic-extension|단순 대수적 확대]]와 [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 것이다. 아래의 체는 모두 $\mathbb{R}$의 부분체이고, 거듭제곱 $x^k$는 환 $\mathbb{R}$에서의 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]이다.

1. (제곱근을 붙인 체) $a$가 $0 \le a$인 유리수이고 $X^2 - a \in \mathbb{Q}[X]$가 $\mathbb{Q}$ 위에서 기약이라 하자. 그러면 $\sqrt{a} \notin \mathbb{Q}$이고, $\sqrt{a}$는 $\mathbb{Q}$ 위에서 대수적이며 그 최소다항식은 $X^2 - a$이다. $[\mathbb{Q}(\sqrt{a}) : \mathbb{Q}] = 2$이고, $\mathbb{Q}(\sqrt{a})$의 모든 원소는 유리수 $x$, $y$에 대하여 $x + y\sqrt{a}$로 쓰이며, 이 $x$, $y$는 정확히 하나로 정해진다. 특히 $a$가 [[prime-number|소수]]이거나 $a = 10$이면 $X^2 - a$는 $\mathbb{Q}$ 위에서 기약이다.
2. ($\mathbb{Q}(\sqrt{2}, \sqrt{5})$) $\sqrt{5} \notin \mathbb{Q}(\sqrt{2})$이고, $\sqrt{5}$의 $\mathbb{Q}(\sqrt{2})$ 위의 최소다항식은 $X^2 - 5$이다. $[\mathbb{Q}(\sqrt{2}, \sqrt{5}) : \mathbb{Q}] = 4$이고, 길이 $4$인 열 $1, \sqrt{2}, \sqrt{5}, \sqrt{10}$은 $\mathbb{Q}(\sqrt{2}, \sqrt{5})$의 $\mathbb{Q}$ 위의 기저이다.
3. ($\sqrt{2} + \sqrt{5}$) $\gamma = \sqrt{2} + \sqrt{5}$라 하면 $\gamma^3 = 17\sqrt{2} + 11\sqrt{5}$이고
   $$
   \begin{aligned}
   \sqrt{2} &= \tfrac{1}{6}(\gamma^3 - 11\gamma), \\
   \sqrt{5} &= \tfrac{1}{6}(17\gamma - \gamma^3)
   \end{aligned}
   $$
   이다. 따라서 $\mathbb{Q}(\gamma) = \mathbb{Q}(\sqrt{2}, \sqrt{5})$이고, $\gamma$의 $\mathbb{Q}$ 위의 차수는 $4$이며 최소다항식은 $X^4 - 14X^2 + 9$이다.
4. (세제곱하여 $2$가 되는 실수) $c^3 = 2$이고 $1 < c < 2$인 실수 $c$가 있다. 그런 $c$에 대하여 $c$의 $\mathbb{Q}$ 위의 최소다항식은 $X^3 - 2$이고 $[\mathbb{Q}(c) : \mathbb{Q}] = 3$이며, $\sqrt{3} \notin \mathbb{Q}(c)$이다.
:::

:::english
The field $\mathbb{Q}$ of rational numbers is a subfield of the field $\mathbb{R}$ by item (1) of the field of rational numbers; real arithmetic is that of real-number arithmetic, and square roots $\sqrt{a}$ are those of the existence of square roots. Subfields, extension fields and degrees $[E : F]$ are those of subfields and extension fields; algebraic elements, minimal polynomials and degrees of elements are those of algebraic elements and minimal polynomials; $F(\alpha)$ and $F(\alpha_1, \dots, \alpha_n)$ are those of simple algebraic extensions and of finite extensions being algebraic. All fields below are subfields of $\mathbb{R}$, and powers $x^k$ are those in the ring $\mathbb{R}$ as finite products in a commutative ring.

1. (Adjoining a square root) Let $a$ be a rational number with $0 \le a$ such that $X^2 - a \in \mathbb{Q}[X]$ is irreducible over $\mathbb{Q}$. Then $\sqrt{a} \notin \mathbb{Q}$, $\sqrt{a}$ is algebraic over $\mathbb{Q}$, and its minimal polynomial is $X^2 - a$. $[\mathbb{Q}(\sqrt{a}) : \mathbb{Q}] = 2$, and every element of $\mathbb{Q}(\sqrt{a})$ can be written as $x + y\sqrt{a}$ with rational numbers $x$, $y$, which are uniquely determined. In particular, if $a$ is a prime or $a = 10$, then $X^2 - a$ is irreducible over $\mathbb{Q}$.
2. ($\mathbb{Q}(\sqrt{2}, \sqrt{5})$) $\sqrt{5} \notin \mathbb{Q}(\sqrt{2})$, and the minimal polynomial of $\sqrt{5}$ over $\mathbb{Q}(\sqrt{2})$ is $X^2 - 5$. $[\mathbb{Q}(\sqrt{2}, \sqrt{5}) : \mathbb{Q}] = 4$, and the list $1, \sqrt{2}, \sqrt{5}, \sqrt{10}$ of length $4$ is a basis of $\mathbb{Q}(\sqrt{2}, \sqrt{5})$ over $\mathbb{Q}$.
3. ($\sqrt{2} + \sqrt{5}$) With $\gamma = \sqrt{2} + \sqrt{5}$, we have $\gamma^3 = 17\sqrt{2} + 11\sqrt{5}$ and
   $$
   \begin{aligned}
   \sqrt{2} &= \tfrac{1}{6}(\gamma^3 - 11\gamma), \\
   \sqrt{5} &= \tfrac{1}{6}(17\gamma - \gamma^3)
   \end{aligned}.
   $$
   Hence $\mathbb{Q}(\gamma) = \mathbb{Q}(\sqrt{2}, \sqrt{5})$; the degree of $\gamma$ over $\mathbb{Q}$ is $4$ and its minimal polynomial is $X^4 - 14X^2 + 9$.
4. (A real number whose cube is $2$) There is a real number $c$ with $c^3 = 2$ and $1 < c < 2$. For such $c$, the minimal polynomial of $c$ over $\mathbb{Q}$ is $X^3 - 2$, $[\mathbb{Q}(c) : \mathbb{Q}] = 3$, and $\sqrt{3} \notin \mathbb{Q}(c)$.
:::

## 직관

유리수가 아닌 제곱근 하나를 붙이면 차수가 $2$인 체가 생기고, 그 원소는 "유리수 $+$ 유리수 $\times$ 제곱근"으로 하나씩 쓰입니다((1)). 제곱근을 하나 더 붙일 때 그것이 앞의 체에 없으면 차수가 다시 두 배가 됩니다((2)). $\sqrt{5}$가 $\mathbb{Q}(\sqrt{2})$에 없다는 것은 $x + y\sqrt{2}$를 제곱해 $5$가 되는 유리수 $x$, $y$가 없다는 계산으로 확인합니다.

붙이는 원소가 둘이어도 체는 원소 하나로 생성될 수 있습니다((3)). $\gamma = \sqrt{2} + \sqrt{5}$의 거듭제곱을 계산하면 $\sqrt{2}$와 $\sqrt{5}$가 $\gamma$의 유리수 계수 식으로 나오기 때문입니다. 차수가 $3$인 원소 $c$를 붙인 체에는 차수가 $2$인 $\sqrt{3}$이 들어갈 수 없습니다((4)). 원소의 차수는 체의 차수를 나누는데 $2$는 $3$을 나누지 않기 때문입니다.

## 증명

:::idea
기약성은 아이젠슈타인 판정법으로, 차수는 최소다항식과 곱셈 공식으로 얻는다. $\sqrt{5} \notin \mathbb{Q}(\sqrt{2})$는 $x + y\sqrt{2}$의 제곱을 계수로 비교하고, 세제곱근의 존재는 사잇값 정리로 얻는다.
:::

:::hint
(2)에서 $(x + y\sqrt{2})^2 = 5$이면 (1)의 하나뿐임에 의해 $2xy = 0$이고 $x^2 + 2y^2 = 5$입니다.
:::

:::proof
**쓰는 사실.** "최소의 (n)"은 [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (n), "단순의 (n)"은 [[simple-algebraic-extension|단순 대수적 확대]]의 (n), "곱셈 공식의 (n)"은 [[tower-law|차수의 곱셈 공식]]의 (n), "아이젠슈타인의 (n)"은 [[eisenstein-criterion|아이젠슈타인 판정법]]의 (n), "기약의 (n)"은 [[irreducible-polynomial|기약 다항식]]의 (n), "제곱근의 (n)"은 [[square-root-exists|제곱근의 존재]]의 (n)이다. $\mathbb{R}$은 체이고([[field|가역원과 체]]의 (4)) $\mathbb{Q}[X] \subseteq \mathbb{R}[X]$이다(유리수체의 (4)). $\mathbb{Q}$의 원소에 대입한 값은 $\mathbb{R}$에서 계산한 것과 같다([[evaluation-homomorphism|대입 준동형]]의 (8)). 환 $\mathbb{R}$에서 $x^2 = xx$, $x^3 = x^2x$이다(가환환의 유한 곱의 (1), (6)).

**1.** 제곱근의 (1)에 의해 $\sqrt{a}\sqrt{a} = a$이므로 대입 준동형의 (1)에 의해 $\sqrt{a}$는 $X^2 - a$의 근이다. $X^2 - a$는 모닉이고 가정에 의해 기약이므로 최소의 (5)에 의해 $\sqrt{a}$의 최소다항식이다. 그 차수가 $2 \ne 1$이므로 최소의 (6)에 의해 $\sqrt{a} \notin \mathbb{Q}$이다. 단순의 (3)의 (ii), (iii)에 의해 $[\mathbb{Q}(\sqrt{a}) : \mathbb{Q}] = 2$이고 원소는 $x + y\sqrt{a}$로 하나씩 쓰인다. $a = p$가 소수이면 아이젠슈타인의 (3)($n = 2$)에 의해 $X^2 - p$는 기약이다. $a = 10$이면 $X^2 - 10 \in \mathbb{Z}[X]$의 계수 $1, 0, -10$에 대하여 $2 \nmid 1$, $2 \mid 0$, $2 \mid -10$, $4 \nmid -10$이므로 아이젠슈타인의 (1)($p = 2$)에 의해 기약이다.

**2.** $K = \mathbb{Q}(\sqrt{2})$라 하자. $\sqrt{5} \in K$라 하면 (1)에 의해 $\sqrt{5} = x + y\sqrt{2}$인 유리수 $x$, $y$가 있고, $\sqrt{2}\sqrt{2} = 2$이므로
$$
\begin{aligned}
5 &= (x + y\sqrt{2})^2 \\
&= (x^2 + 2y^2) + 2xy\sqrt{2}
\end{aligned}
$$
이다. $5 = 5 + 0\sqrt{2}$이고 $x^2 + 2y^2$, $2xy$는 유리수이므로(유리수체의 (1)) (1)의 하나뿐임에 의해 $2xy = 0$이고 $x^2 + 2y^2 = 5$이다. $\mathbb{Q}$는 체이므로 $x = 0$이거나 $y = 0$이다. $y = 0$이면 $x^2 = 5$이므로 유리수 $x$가 $X^2 - 5$의 근이고, $X^2 - 5$는 (1)에 의해 기약이며 차수가 $2$이므로 기약의 (4)와 어긋난다. $x = 0$이면 $2y^2 = 5$이므로 $(2y)^2 = 10$이고 유리수 $2y$가 기약인 $X^2 - 10$의 근이 되어 같은 이유로 어긋난다. 따라서 $\sqrt{5} \notin K$이다.

최소의 (7)에 의해 $\sqrt{5}$는 $K$ 위에서 대수적이고 그 최소다항식 $m_K$는 $X^2 - 5$를 나누며 $\deg m_K \le 2$이다. $\sqrt{5} \notin K$이므로 최소의 (6)에 의해 $\deg m_K \ne 1$이고, 따라서 $\deg m_K = 2$이며 최소의 (3)의 (iii)에 의해 $m_K = X^2 - 5$이다. [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (1)의 (i)에 의해 $\mathbb{Q}(\sqrt{2}, \sqrt{5}) = K(\sqrt{5})$이고, 단순의 (3)의 (iii)에 의해 $1, \sqrt{2}$는 $K$의 $\mathbb{Q}$ 위의 기저, $1, \sqrt{5}$는 $K(\sqrt{5})$의 $K$ 위의 기저이다. 곱셈 공식의 (2)를 $m = n = 2$에 쓰면 $[\mathbb{Q}(\sqrt{2}, \sqrt{5}) : \mathbb{Q}] = 4$이고, $l = (j - 1)2 + i$에 대한 곱 $1 \cdot 1$, $\sqrt{2} \cdot 1$, $1 \cdot \sqrt{5}$, $\sqrt{2}\sqrt{5}$가 기저이다. 제곱근의 (2)에 의해 $\sqrt{2}\sqrt{5} = \sqrt{10}$이다.

**3.** 제곱근의 (2)에 의해 $\sqrt{2}\sqrt{10} = \sqrt{20} = \sqrt{4}\sqrt{5} = 2\sqrt{5}$이고 $\sqrt{5}\sqrt{10} = \sqrt{50} = \sqrt{25}\sqrt{2} = 5\sqrt{2}$이다($\sqrt{4} = \sqrt{2 \cdot 2} = 2$, $\sqrt{25} = 5$). 따라서
$$
\begin{aligned}
\gamma^2 &= 2 + 2\sqrt{10} + 5 = 7 + 2\sqrt{10}, \\
\gamma^3 &= (\sqrt{2} + \sqrt{5})(7 + 2\sqrt{10}) \\
&= 7\sqrt{2} + 4\sqrt{5} + 7\sqrt{5} + 10\sqrt{2} \\
&= 17\sqrt{2} + 11\sqrt{5}
\end{aligned}
$$
이다. $\gamma^3 - 11\gamma = 6\sqrt{2}$이고 $17\gamma - \gamma^3 = 6\sqrt{5}$이므로 두 식이 나온다. $\mathbb{Q}(\gamma)$는 $\mathbb{Q}$와 $\gamma$를 포함하는 부분체이므로 $\gamma^3$, $\tfrac{1}{6}$과의 곱, 차가 그 안에 있고([[subfield|부분체]]의 (1)) $\sqrt{2}, \sqrt{5} \in \mathbb{Q}(\gamma)$이다. 유한 확대와 대수적 확대의 (1)의 (ii)에 의해 $\mathbb{Q}(\sqrt{2}, \sqrt{5}) \subseteq \mathbb{Q}(\gamma)$이다. 거꾸로 $\gamma \in \mathbb{Q}(\sqrt{2}, \sqrt{5})$이고 $\gamma$는 대수적이므로(유한 확대와 대수적 확대의 (3)) 단순의 (1)에 의해 $\mathbb{Q}(\gamma) \subseteq \mathbb{Q}(\sqrt{2}, \sqrt{5})$이다. 따라서 두 체는 같고, 단순의 (3)의 (iii)과 (2)에 의해 $\gamma$의 차수는 $4$이다. 또 $\gamma^4 = (7 + 2\sqrt{10})^2 = 49 + 28\sqrt{10} + 40 = 89 + 28\sqrt{10}$이므로 $\gamma^4 - 14\gamma^2 + 9 = 89 + 28\sqrt{10} - 98 - 28\sqrt{10} + 9 = 0$이다. $X^4 - 14X^2 + 9$는 차수가 $4$인 모닉 다항식이고 $\gamma$를 근으로 가지므로 최소의 (3)의 (iii)에 의해 최소다항식이다.

**4.** [[power-function-is-continuous|거듭제곱 함수의 연속성]]의 (1)에 의해 $x$에서의 값이 $x^3$인 함수 $p_3 : \mathbb{R} \to \mathbb{R}$은 연속함수이다. 여기서 $x^3$은 [[power-of-a-real-number|실수의 거듭제곱]]의 것인데, 그 항목의 (1)에 의해 그 값은 $x^2 x = (xx)x$이고 환 $\mathbb{R}$에서의 $x^3$과 같다. $p_3(1) = 1$, $p_3(2) = 8$이고, [[order-properties-of-reals|실수의 순서의 성질]]의 (10)에 의해 실수로서 $1 < 2 < 8$이다. [[intermediate-value-theorem|사잇값 정리]]의 (3)을 구간 $[1, 2]$([[interval|구간]])와 $y = 2$에 쓰면 $1 < c < 2$이고 $c^3 = 2$인 실수 $c$가 있다. 그런 $c$는 $X^3 - 2$의 근이고, 아이젠슈타인의 (3)($p = 2$, $n = 3$)에 의해 $X^3 - 2$는 $\mathbb{Q}$ 위에서 기약인 모닉 다항식이므로 최소의 (5)에 의해 최소다항식이며, 단순의 (3)의 (iii)에 의해 $[\mathbb{Q}(c) : \mathbb{Q}] = 3$이다. $\sqrt{3} \in \mathbb{Q}(c)$라 하면, (1)에 의해 $\sqrt{3}$은 $\mathbb{Q}$ 위에서 차수가 $2$인 대수적 원소이고 곱셈 공식의 (5)에 의해 $2$가 $3$을 나누어야 하는데 그렇지 않다. 따라서 $\sqrt{3} \notin \mathbb{Q}(c)$이다.
:::

## 예시와 반례

:::example[$\mathbb{Q}(\sqrt{2}, \sqrt{5})$에서 $\sqrt{2} + \sqrt{5}$의 역원]
$(\sqrt{5} + \sqrt{2})(\sqrt{5} - \sqrt{2}) = 5 - 2 = 3$이므로 $\sqrt{2} + \sqrt{5}$의 역원은 $\tfrac{1}{3}(\sqrt{5} - \sqrt{2})$입니다. 기저 $1, \sqrt{2}, \sqrt{5}, \sqrt{10}$에 관한 좌표는 $0, -\tfrac{1}{3}, \tfrac{1}{3}, 0$이고, (2)에 의해 이 좌표는 하나뿐입니다. (3)으로 보면 이 역원은 $\gamma = \sqrt{2} + \sqrt{5}$의 식이기도 합니다. $\gamma^4 - 14\gamma^2 + 9 = 0$에서 $\gamma(\gamma^3 - 14\gamma) = -9$이므로 $\gamma^{-1} = -\tfrac{1}{9}(\gamma^3 - 14\gamma)$이고, $\gamma^3 - 14\gamma = 17\sqrt{2} + 11\sqrt{5} - 14\sqrt{2} - 14\sqrt{5} = 3\sqrt{2} - 3\sqrt{5}$이므로 같은 값 $\tfrac{1}{3}(\sqrt{5} - \sqrt{2})$가 나옵니다.
:::

:::counterexample[차수가 $4$가 아닌 $\mathbb{Q}(\sqrt{2}, \sqrt{8})$]
$\sqrt{2}$와 $\sqrt{8}$은 둘 다 $\mathbb{Q}$ 위의 차수가 $2$입니다($\sqrt{8} = \sqrt{4}\sqrt{2} = 2\sqrt{2}$이고 $2\sqrt{2} \notin \mathbb{Q}$). 그러나 $\sqrt{8} = 2\sqrt{2} \in \mathbb{Q}(\sqrt{2})$이므로 [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (1)의 (ii)에 의해 $\mathbb{Q}(\sqrt{2}, \sqrt{8}) = \mathbb{Q}(\sqrt{2})$이고 차수는 $2$입니다. (2)에서 차수가 $4$가 된 것은 $\sqrt{5}$가 $\mathbb{Q}(\sqrt{2})$에 없었기 때문이고, 제곱근 둘을 붙이면 늘 차수가 $4$인 것은 아닙니다.
:::

## 확인 질문

:::check[$[\mathbb{Q}(\sqrt{2}, \sqrt{5}) : \mathbb{Q}(\sqrt{10})]$은 얼마인가?]
$2$입니다. $\sqrt{10} = \sqrt{2}\sqrt{5} \in \mathbb{Q}(\sqrt{2}, \sqrt{5})$이므로 $\mathbb{Q}(\sqrt{10})$은 사이의 체이고, (1)에 의해 $[\mathbb{Q}(\sqrt{10}) : \mathbb{Q}] = 2$입니다. [[tower-law|차수의 곱셈 공식]]의 (3)에 의해 $4 = [\mathbb{Q}(\sqrt{2}, \sqrt{5}) : \mathbb{Q}(\sqrt{10})] \cdot 2$입니다.
:::

:::check[$\sqrt{2} + \sqrt{7}$의 $\mathbb{Q}$ 위의 차수가 $3$일 수 있는가?]
없습니다. $E = \mathbb{Q}(\sqrt{2}, \sqrt{7})$은 유한 확대와 대수적 확대의 (4)에 의해 차수가 $4$ 이하인 유한 확대이고, 곱셈 공식의 (3)에 의해 $[E : \mathbb{Q}] = [E : \mathbb{Q}(\sqrt{2})] \cdot 2$는 짝수이므로 $2$이거나 $4$입니다. $\sqrt{2} + \sqrt{7} \in E$의 차수는 곱셈 공식의 (5)에 의해 $[E : \mathbb{Q}]$를 나누는데, $3$은 $2$도 $4$도 나누지 않습니다.
:::
