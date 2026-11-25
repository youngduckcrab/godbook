---
title: 복소수체
title_en: The Field of Complex Numbers
aliases: [복소수의 체, 실수인 복소수, a + bi 꼴, complex number field, field of complex numbers, real complex number]
kind: theorem
field: complex-analysis
msc: ["30", "12"]
level: undergrad
summary: 복소수의 덧셈과 곱셈으로 ℂ 는 체이다. 실수 x 를 (x, 0) 으로 보내는 함수 ι 는 단사인 환 준동형이고, ι(ℝ) 는 허수부가 0 인 복소수 전체로서 부분환이자 체이다. 실수를 복소수 자리에 쓰면 ι 로 옮긴 것으로 읽는 약속을 정하고, 모든 복소수가 a + bi 꼴로 꼭 한 가지로 쓰인다는 것, 제곱하여 −1 이 되는 복소수는 i 와 −i 뿐이라는 것, ℂ 에는 실수의 순서 공리 (W1)–(W4) 를 만족하는 순서가 없다는 것을 보인다.
requires: [set, subset, cartesian-product, relation, function, injective-surjective-bijective, binary-operation, group, ring, ring-basic-properties, ring-examples, subring, field, ring-homomorphism, real-number-arithmetic, real-order-axioms, order-properties-of-reals, power-of-a-real-number, complex-number]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: 11.1절 Complex numbers, 11.1.1절 The complex plane (p.139), Remark 11.1.2 (p.140), 11.1.4절 Exercise 11.1.1 (p.142)
    checked: original
    note: "출처는 p.139 에서 'the complex number field' 를 정의하겠다고 적고, 두 연산이 평면을 체로 만든다는 것을 연습문제로 남긴다(p.139 의 '(exercise)', Exercise 11.1.1 'Check that ℂ is a field.', p.142). (1)의 증명이 그 확인이다. 출처는 x ∈ ℝ 를 (x, 0) ∈ ℂ 와 동일시하고 그 동일시 아래에서 0 = (0, 0), 1 = (1, 0) 이라 적는다(p.139). 이 항목은 동일시 대신 단사인 환 준동형 ι 를 두고 동일시가 연산과 맞는다는 것을 (2)로, 읽는 약속을 (3)으로 진술한다. 출처는 (x, y) 를 x + iy 로 쓴다(p.139). (4)는 같은 표현을 a + bi 의 순서로 쓰고 표현이 하나뿐임을 더한다. 출처의 i² = (0, 1)(0, 1) = −1 과 'i is a solution to the polynomial equation z² + 1 = 0'(p.139)은 (5)의 앞 문장에 해당한다. p.140 의 'The real numbers are precisely those numbers for which the imaginary part y = 0' 은 (3)의 '실수인 복소수'와 같은 뜻이다. Remark 11.1.2(p.140)는 복소수를 ordered field 로 만드는 순서가 없다고 적고 이유는 적지 않는다. (6)이 그 진술이다."
  - ref: lebl-basic-analysis
    loc: 1.1절 Basic properties, Definition 1.1.1 (p.23), Definition 1.1.7 (p.25), Example 1.1.10 (p.27); 1.1.1절 Exercises 1.1.8 (p.27), 1.1.10 (p.28)
    checked: original
    note: "Lebl I 의 ordered field(Definition 1.1.7, p.25)는 체이면서 ordered set(Definition 1.1.1, p.23 — 삼분법과 추이성)이고 x < y 이면 x + z < y + z, x > 0 이고 y > 0 이면 xy > 0 인 것이다. 이 네 조건이 이 사이트의 (W1)–(W4)이다. Example 1.1.10(p.27)은 '모든 ordered field 에서 −1 < 0 이고 0 이 아닌 x 에서 x² > 0 인데 ℂ 에서는 i² = −1' 이라는 까닭으로 ℂ 를 ordered field 로 만드는 순서가 없다고 적고, ℂ 를 어떤 방식으로 ordered set 으로 만들 수는 있다고 적는다. (6)의 증명은 같은 발상(i 를 제곱하면 −1)이고, 순서체의 성질 대신 (W1)–(W4)에서 바로 0 < −1 과 1 < 0 을 끌어낸다. 반례 '사전식 순서에서 (W4)가 깨지는 예'는 '어떤 방식으로 ordered set 으로 만들 수 있다'는 그 문장의 한 예이고, 사전식 순서(lexicographic ordering)는 같은 절 p.23 의 낱말의 순서와 연습문제 1.1.10(p.28)에 나온다. 연습문제 1.1.8 b)(p.27)는 원소가 셋인 체 {0, 1, 2} 가 ordered field 일 수 없음을 보이게 한다(다른 체에 대한 같은 종류의 진술)."
  - ref: judson-abstract-algebra
    loc: 3.2절 Definitions and Examples, Example 3.16 (p.36); 4.2절 Multiplicative Group of Complex Numbers (p.49), Theorem 4.25 (p.52); 4.5절 Exercises 15 (p.56); 16.1절 Rings, Example 16.3 (p.191); 16.7절 Exercises 7 (p.205)
    checked: original
    note: "Example 3.16(p.36)은 0 이 아닌 복소수 전체 ℂ* 가 곱셈으로 군이고 a + bi 의 역원이 (a − bi)/(a² + b²) 라고 적고 나머지 군의 조건은 쉽게 본다고 적는다. p.49 도 같은 역원 공식을 적는다. (1)의 역원 (Re z · N⁻¹, −Im z · N⁻¹) 은 같은 공식이고, ℂ^× = ℂ − {0} 은 Judson 의 ℂ* 이다(이 사이트는 가역원과 체 항목의 기호 R^× 를 쓴다). Example 16.3(p.191)은 ℚ, ℝ, ℂ 가 보통의 덧셈과 곱셈으로 환이고 모두 체라고 적는다. 예시 '4 − 3i 의 역원'은 p.49 의 Example 4.16 이 2 + 3i 의 역원 2/13 − (3/13)i 를 구한 것과 같은 계산이다. 예시 '약속에 따라 읽은 식'의 z + z + z 는 4.5절 연습문제 15(f)(p.56)의 (1 + i) + (1 + i) 와 같은 종류의 계산이다. 확인 질문 '$z \ne 0$이고 $z^{-1} = z$인 복소수를 모두 구하라.'의 답 ±1 은 p.52 의 Theorem 4.25 가 말하는 1 의 n제곱근에서 n = 2 인 것과 같은 대상이다. 16.7절 연습문제 7(p.205)은 ℝ 와 ℂ 가 환으로서 동형이 아님을 증명하게 하고, 그 힌트(p.329)는 동형사상 φ : ℂ → ℝ 의 φ(i) = a 를 생각하게 한다. 이것은 (5)와 (6)이 쓰는 'i 를 제곱하면 −1' 과 같은 발상이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(ι 의 약속과 정의가 둘이 되지 않는지, 순서가 없다는 증명 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수 전체의 집합 $\mathbb{C}$, 그 덧셈과 곱셈, $\operatorname{Re}$, $\operatorname{Im}$, 허수단위 $i$는 [[complex-number]]의 것이다. 환, 단위원을 갖는 환, 가환환은 [[ring|환]]의 뜻이고, 가역원, 역원 $a^{-1}$, $R^{\times}$, 체는 [[field|가역원과 체]]의 뜻이며, 환 준동형과 환 동형사상, 상 $\varphi(R)$는 [[ring-homomorphism|환 준동형]]의 뜻, 부분환은 [[subring|부분환]]의 뜻이다. 실수의 계산은 [[real-number-arithmetic]], 실수의 순서는 [[real-order-axioms]]의 것이다.

1. (체) $(\mathbb{C}, +, \cdot)$는 체이다. 이 체의 $0$은 $(0, 0)$이고, 복소수 $z$의 덧셈의 역원은 $-z = (-\operatorname{Re} z, -\operatorname{Im} z)$이며, 단위원은 $1 = (1, 0)$이다. 따라서 복소수 $w$에 대하여 $\operatorname{Re}(z - w) = \operatorname{Re} z - \operatorname{Re} w$이고 $\operatorname{Im}(z - w) = \operatorname{Im} z - \operatorname{Im} w$이다. $z \ne 0$이면 실수 $N = (\operatorname{Re} z)^2 + (\operatorname{Im} z)^2$은 $0$이 아니고
   $$
   \begin{aligned}
   z^{-1} = \bigl(&(\operatorname{Re} z) N^{-1}, \\
   &-(\operatorname{Im} z) N^{-1}\bigr)
   \end{aligned}
   $$
   이다. $\mathbb{C}^{\times} = \mathbb{C} - \{0\}$이고, 이것은 곱셈으로 아벨군이다. 이후 $\mathbb{C}$에는 [[ring|환]]과 [[field|가역원과 체]]의 표기 $0$, $1$, $-z$, $z - w$, $zw$, $z^{-1}$을 쓰고, $w \ne 0$이면 $z w^{-1}$을 $z / w$로도 쓴다.
2. (실수를 복소수로 옮기는 함수) 실수 $x$에서의 값이 $(x, 0)$인 함수 $\iota : \mathbb{R} \to \mathbb{C}$는 환 $\mathbb{R}$([[ring-examples|환의 예]]의 (2))에서 환 $\mathbb{C}$로의 단사인 환 준동형이다. 곧 모든 실수 $x$, $y$에 대하여 $\iota(x + y) = \iota(x) + \iota(y)$, $\iota(xy) = \iota(x)\iota(y)$이고, $\iota(x) = \iota(y)$이면 $x = y$이다. 또 실수 $x$, $y$와 복소수 $z$에 대하여 다음이 성립한다.
   - (i) $\iota(0) = 0$, $\iota(1) = 1$, $\iota(-x) = -\iota(x)$, $\iota(x - y) = \iota(x) - \iota(y)$이다. $x \ne 0$이면 $\iota(x) \ne 0$이고 $\iota(x^{-1}) = \iota(x)^{-1}$이다. $y \ne 0$이면 $\iota(x / y) = \iota(x) / \iota(y)$이다.
   - (ii) $\operatorname{Re} \iota(x) = x$, $\operatorname{Im} \iota(x) = 0$이다. $\iota(x) z = (x \operatorname{Re} z,\ x \operatorname{Im} z)$, 곧 $\operatorname{Re}(\iota(x) z) = x \operatorname{Re} z$이고 $\operatorname{Im}(\iota(x) z) = x \operatorname{Im} z$이다.
   - (iii) $\iota(\mathbb{R}) = \{z \in \mathbb{C} : \operatorname{Im} z = 0\}$이고, $\operatorname{Im} z = 0$이면 $z = \iota(\operatorname{Re} z)$이다. $\iota(\mathbb{R})$는 $\mathbb{C}$의 부분환이고, 덧셈과 곱셈을 $\iota(\mathbb{R})$로 제한한 연산으로 체이다. 공역을 $\iota(\mathbb{R})$로 둔 함수 $\iota : \mathbb{R} \to \iota(\mathbb{R})$는 환 동형사상이다.
3. (실수인 복소수와 읽는 약속) 복소수 $z$가 **실수인 복소수**인 것은 정확히 $\operatorname{Im} z = 0$일 때, 곧 (2)의 (iii)에 의해 $z \in \iota(\mathbb{R})$일 때이다. 이 강의에서는 다음과 같이 쓴다.
   - (i) 복소수가 와야 할 자리에 실수 $x$를 쓰면 그것은 $\iota(x)$를 뜻한다. 예컨대 복소수 $z$와 실수 $x$에 대하여 $z + x$는 $z + \iota(x)$, $xz$는 $\iota(x) z$, $z = x$는 $z = \iota(x)$를 뜻한다. 복소수의 실수부 $\operatorname{Re} z$와 허수부 $\operatorname{Im} z$도 실수이므로 같은 약속을 따른다.
   - (ii) 실수끼리의 합, 차, 곱, 역수, 몫이 복소수 자리에 오면, 실수로 계산한 뒤 $\iota$로 옮긴 것으로 읽어도 되고 각 실수를 $\iota$로 옮긴 뒤 $\mathbb{C}$에서 계산한 것으로 읽어도 된다. (2)의 등식들에 의해 두 값은 같으므로 이렇게 읽은 식의 값은 하나로 정해진다. 특히 복소수 $0$과 $1$은 실수 $0$, $1$을 옮긴 $\iota(0)$, $\iota(1)$이다.
   - (iii) $\mathbb{R} \subseteq \mathbb{C}$라고 쓰지 않고, $\mathbb{R}$와 $\iota(\mathbb{R})$를 같은 집합이라 하지 않는다. 부등식 $<$, $\le$은 실수 사이에만 쓴다.
4. ($a + bi$ 꼴) 실수 $a$, $b$에 대하여 $a + bi$, 곧 $\iota(a) + \iota(b) i$는 복소수 $(a, b)$이다. 따라서 모든 복소수 $z$는 $z = \operatorname{Re} z + (\operatorname{Im} z) i$이고, 실수 $a$, $b$, $c$, $d$에 대하여 $a + bi = c + di$인 것은 정확히 $a = c$이고 $b = d$일 때이다. 특히 $\operatorname{Re}(a + bi) = a$, $\operatorname{Im}(a + bi) = b$이다. 또 $a - bi = a + (-b) i$이고, $0 + bi = bi$, $a + 0i = a$, $1i = i$이다.
5. ($-1$의 제곱근) $ii = -1$이고 $(-i)(-i) = -1$이다. 복소수 $z$에 대하여 $zz = -1$인 것은 정확히 $z = i$이거나 $z = -i$일 때이다.
6. (순서를 줄 수 없다) [[real-order-axioms]]의 (W1)–(W4)에서 $\mathbb{R}$를 $\mathbb{C}$로, 실수의 덧셈, 곱셈, $0$을 $\mathbb{C}$의 덧셈, 곱셈, $0$으로 바꾼 네 조건을 모두 만족하는 $\mathbb{C}$ 위의 [[relation|관계]] $<$는 없다.
:::

:::english
The set $\mathbb{C}$ of complex numbers, its addition and multiplication, $\operatorname{Re}$, $\operatorname{Im}$, and the imaginary unit $i$ are those of the entry on complex numbers. Rings, rings with unity, and commutative rings are meant as in the entry on rings; units, inverses $a^{-1}$, $R^{\times}$, and fields as in the entry on units and fields; ring homomorphisms, ring isomorphisms, and the image $\varphi(R)$ as in the entry on ring homomorphisms; subrings as in the entry on subrings. Real arithmetic is that of the entry on real arithmetic, and the order of the reals is that of the order axioms.

1. (Field) $(\mathbb{C}, +, \cdot)$ is a field. Its $0$ is $(0, 0)$, the additive inverse of a complex number $z$ is $-z = (-\operatorname{Re} z, -\operatorname{Im} z)$, and its unity is $1 = (1, 0)$. Hence, for a complex number $w$, $\operatorname{Re}(z - w) = \operatorname{Re} z - \operatorname{Re} w$ and $\operatorname{Im}(z - w) = \operatorname{Im} z - \operatorname{Im} w$. If $z \ne 0$, then the real number $N = (\operatorname{Re} z)^2 + (\operatorname{Im} z)^2$ is not $0$ and
   $$
   \begin{aligned}
   z^{-1} = \bigl(&(\operatorname{Re} z) N^{-1}, \\
   &-(\operatorname{Im} z) N^{-1}\bigr).
   \end{aligned}
   $$
   Moreover $\mathbb{C}^{\times} = \mathbb{C} - \{0\}$, and it is an abelian group under multiplication. From now on we use on $\mathbb{C}$ the notation $0$, $1$, $-z$, $z - w$, $zw$, $z^{-1}$ of rings and fields, and for $w \ne 0$ we also write $z w^{-1}$ as $z / w$.
2. (The map carrying real numbers to complex numbers) The function $\iota : \mathbb{R} \to \mathbb{C}$ whose value at a real number $x$ is $(x, 0)$ is an injective ring homomorphism from the ring $\mathbb{R}$ (item (2) of the examples of rings) to the ring $\mathbb{C}$. That is, $\iota(x + y) = \iota(x) + \iota(y)$ and $\iota(xy) = \iota(x)\iota(y)$ for all real numbers $x$, $y$, and $\iota(x) = \iota(y)$ implies $x = y$. Moreover, for real numbers $x$, $y$ and a complex number $z$:
   - (i) $\iota(0) = 0$, $\iota(1) = 1$, $\iota(-x) = -\iota(x)$, and $\iota(x - y) = \iota(x) - \iota(y)$. If $x \ne 0$, then $\iota(x) \ne 0$ and $\iota(x^{-1}) = \iota(x)^{-1}$. If $y \ne 0$, then $\iota(x / y) = \iota(x) / \iota(y)$.
   - (ii) $\operatorname{Re} \iota(x) = x$ and $\operatorname{Im} \iota(x) = 0$. Moreover $\iota(x) z = (x \operatorname{Re} z,\ x \operatorname{Im} z)$; that is, $\operatorname{Re}(\iota(x) z) = x \operatorname{Re} z$ and $\operatorname{Im}(\iota(x) z) = x \operatorname{Im} z$.
   - (iii) $\iota(\mathbb{R}) = \{z \in \mathbb{C} : \operatorname{Im} z = 0\}$, and if $\operatorname{Im} z = 0$ then $z = \iota(\operatorname{Re} z)$. $\iota(\mathbb{R})$ is a subring of $\mathbb{C}$, and with addition and multiplication restricted to $\iota(\mathbb{R})$ it is a field. The function $\iota : \mathbb{R} \to \iota(\mathbb{R})$, with codomain $\iota(\mathbb{R})$, is a ring isomorphism.
3. (Real complex numbers and the reading convention) A complex number $z$ is a **real complex number** exactly when $\operatorname{Im} z = 0$, that is, by (2)(iii), exactly when $z \in \iota(\mathbb{R})$. In this course we write as follows.
   - (i) If a real number $x$ is written where a complex number is required, it means $\iota(x)$. For instance, for a complex number $z$ and a real number $x$, $z + x$ means $z + \iota(x)$, $xz$ means $\iota(x) z$, and $z = x$ means $z = \iota(x)$. The real part $\operatorname{Re} z$ and the imaginary part $\operatorname{Im} z$ are real numbers and follow the same convention.
   - (ii) If a sum, difference, product, reciprocal, or quotient of real numbers stands where a complex number is required, it may be read as computed in $\mathbb{R}$ and then carried over by $\iota$, or as computed in $\mathbb{C}$ after carrying each real number over by $\iota$. By the identities of (2) the two values agree, so an expression read this way has a single value. In particular, the complex numbers $0$ and $1$ are $\iota(0)$ and $\iota(1)$, the images of the real numbers $0$ and $1$.
   - (iii) We do not write $\mathbb{R} \subseteq \mathbb{C}$, and we do not say that $\mathbb{R}$ and $\iota(\mathbb{R})$ are the same set. The inequalities $<$ and $\le$ are used only between real numbers.
4. (The form $a + bi$) For real numbers $a$, $b$, the expression $a + bi$, that is, $\iota(a) + \iota(b) i$, is the complex number $(a, b)$. Hence every complex number $z$ satisfies $z = \operatorname{Re} z + (\operatorname{Im} z) i$, and for real numbers $a$, $b$, $c$, $d$, $a + bi = c + di$ exactly when $a = c$ and $b = d$. In particular $\operatorname{Re}(a + bi) = a$ and $\operatorname{Im}(a + bi) = b$. Moreover $a - bi = a + (-b) i$, and $0 + bi = bi$, $a + 0i = a$, $1i = i$.
5. (Square roots of $-1$) $ii = -1$ and $(-i)(-i) = -1$. For a complex number $z$, $zz = -1$ exactly when $z = i$ or $z = -i$.
6. (No order can be given) There is no relation $<$ on $\mathbb{C}$ satisfying all four conditions obtained from (W1)–(W4) of the order axioms by replacing $\mathbb{R}$ with $\mathbb{C}$ and the real addition, multiplication, and $0$ with the addition, multiplication, and $0$ of $\mathbb{C}$.
:::

## 직관

[[complex-number|복소수]]는 실수의 순서쌍에 덧셈과 곱셈을 정한 것이었습니다. (1)은 이 두 연산이 실수의 계산 법칙과 같은 법칙들, 곧 [[field|체]]의 조건을 모두 만족한다는 것입니다. 가장 눈여겨볼 곳은 곱셈의 역원입니다. $(a, b) \ne (0, 0)$이면 $a^2 + b^2$이 $0$이 아니어서 그것으로 나눌 수 있고, 이것은 실수의 순서에서 나오는 사실 "제곱의 합이 $0$이면 둘 다 $0$"([[order-properties-of-reals]]의 (5))에 기댑니다.

$\iota$는 실수의 말을 복소수의 말로 옮기는 사전입니다. 실수 $x$는 복소평면의 가로축 위의 점 $(x, 0)$으로 옮겨집니다. 사전이 좋으려면 "먼저 계산하고 옮기나 먼저 옮기고 계산하나 같아야" 하는데, 그것이 (2)의 $\iota(x + y) = \iota(x) + \iota(y)$, $\iota(xy) = \iota(x)\iota(y)$입니다. 이 덕분에 (3)의 약속처럼 복소수 자리에 실수를 그냥 써도 뜻이 하나로 정해지고, $(a, b)$를 익숙한 $a + bi$로 쓸 수 있습니다((4)). 다만 사전으로 옮긴 $\iota(x)$는 실수 $x$ 자체가 아니라 순서쌍이므로 $\mathbb{R} \subseteq \mathbb{C}$라고 쓰지는 않습니다.

사전으로 옮겨지지 않는 것도 있습니다. 실수의 크기 비교입니다. 실수에서는 $0$이 아닌 수의 제곱이 늘 양수이지만, 복소수에는 제곱하여 $-1$이 되는 $i$가 있습니다((5)). 그래서 덧셈·곱셈과 맞물리는 순서를 $\mathbb{C}$ 전체에 줄 수 없고((6)), 이 강의는 부등식을 실수 사이에만 씁니다.

## 증명

:::idea
(1)–(5)는 [[complex-number|복소수]]의 연산의 정의를 성분마다 계산해 실수의 계산 법칙으로 확인한다. 역원은 $N = a^2 + b^2 \ne 0$으로 나눠 만든다. (6)은 $i$를 양수라 하든 음수라 하든 (W4)로 $0 < ii = -1$이 되고, 거기서 $0 < 1$과 $1 < 0$이 함께 나와 모순이라는 것이다.
:::

:::hint
결합법칙과 분배법칙은 $z = (a, b)$, $w = (c, d)$, $u = (e, f)$로 놓고 양변의 첫째 성분과 둘째 성분을 실수의 식으로 전개해 비교한다. 오른쪽 분배법칙은 곱셈의 교환법칙과 왼쪽 분배법칙에서 나온다.
:::

:::hint
(6)에서 $i \ne 0$이므로 (W1)에 의해 $0 < i$이거나 $i < 0$이다. 뒤의 경우는 (W3)으로 양변에 $-i$를 더해 $0 < -i$로 바꾼다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (5)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다. "복소수의 (3)"처럼 쓴 것은 [[complex-number]]의 번호이다. 아래에서 $z = (a, b)$, $w = (c, d)$, $u = (e, f)$는 복소수이다. [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 실수 $a$에서 $a^2 = aa$이다.

**1의 증명.** 복소수의 정의에 의해 $+$와 $\cdot$은 $\mathbb{C}$ 위의 이항연산이다. 실수의 식은 (K1)–(K3), (K9), (K12)로 전개하고 정리한다.

*덧셈.* $(z + w) + u = ((a + c) + e,\ (b + d) + f)$이고 $z + (w + u) = (a + (c + e),\ b + (d + f))$이므로 (K2)와 복소수의 (1)에 의해 둘은 같다. $z + w = (a + c, b + d)$와 $w + z = (c + a, d + b)$는 (K1)에 의해 같다. (K1), (K4)에 의해 $(0, 0) + z = (0 + a, 0 + b) = z$이고 교환법칙에 의해 $z + (0, 0) = z$이므로 $(0, 0)$은 덧셈의 항등원이다. (K8)의 (ii)의 $-a$, $-b$에 대하여 $z + (-a, -b) = (a + (-a), b + (-b)) = (0, 0)$이고 교환법칙에 의해 $(-a, -b) + z = (0, 0)$이다. 따라서 [[group|군]]의 세 조건과 교환법칙이 성립하여 $(\mathbb{C}, +)$는 아벨군이고, 그 항등원 $0$은 $(0, 0)$, $z$의 역원 $-z$는 $(-a, -b) = (-\operatorname{Re} z, -\operatorname{Im} z)$이다. 그러면 복소수의 (2)와 뺄셈의 정의에 의해 $\operatorname{Re}(z - w) = \operatorname{Re}(z + (-w)) = \operatorname{Re} z + (-\operatorname{Re} w) = \operatorname{Re} z - \operatorname{Re} w$이고, 허수부도 같다.

*곱셈의 교환법칙과 결합법칙.* $wz = (ca - db,\ cb + da)$는 (K1)에 의해 $zw = (ac - bd,\ ad + bc)$와 같다. 곱셈의 정의를 두 번 쓰면
$$
\begin{aligned}
(zw)u &= \bigl((ac - bd)e - (ad + bc)f, \\
&\qquad (ac - bd)f + (ad + bc)e\bigr), \\
z(wu) &= \bigl(a(ce - df) - b(cf + de), \\
&\qquad a(cf + de) + b(ce - df)\bigr)
\end{aligned}
$$
이다. 실수의 식으로 전개하면 두 첫째 성분은 모두 $ace - bde - adf - bcf$이고, 두 둘째 성분은 모두 $acf - bdf + ade + bce$이다. 따라서 복소수의 (1)에 의해 $(zw)u = z(wu)$이다.

*분배법칙.* $w + u = (c + e, d + f)$이므로
$$
\begin{aligned}
z(w + u) &= \bigl(a(c + e) - b(d + f), \\
&\qquad a(d + f) + b(c + e)\bigr) \\
&= \bigl((ac - bd) + (ae - bf), \\
&\qquad (ad + bc) + (af + be)\bigr) \\
&= zw + zu
\end{aligned}
$$
이다. 곱셈의 교환법칙과 이 등식에 의해 $(z + w)u = u(z + w) = uz + uw = zu + wu$이다. 따라서 $(\mathbb{C}, +, \cdot)$는 환이고 가환환이다.

*단위원.* 복소수의 (3)과 (K1), (K4)에 의해 $(1, 0)z = (1a, 1b) = (a, b) = z$이고, 교환법칙에 의해 $z(1, 0) = z$이다. 따라서 $(1, 0)$은 곱셈의 항등원이다. (K4)에 의해 $1 \ne 0$이므로 복소수의 (1)에 의해 $(1, 0) \ne (0, 0)$이다. 따라서 $\mathbb{C}$는 단위원 $1 = (1, 0)$을 갖는 가환환이다.

*역원.* $z \ne 0$이라 하자. $0 = (0, 0)$이므로 복소수의 (1)에 의해 $a \ne 0$이거나 $b \ne 0$이다. $N = a^2 + b^2 = aa + bb$이다. $N = 0$이면 순서 성질 (5)의 (iv)에 의해 $a = 0$이고 $b = 0$이므로, $N \ne 0$이고 (K8)의 (iii)의 $N^{-1}$이 있다. $v = (aN^{-1},\ -bN^{-1})$로 두면 곱셈의 정의와 (K9), (K12)에 의해
$$
\begin{aligned}
zv &= \bigl(a(aN^{-1}) - b(-bN^{-1}), \\
&\qquad a(-bN^{-1}) + b(aN^{-1})\bigr) \\
&= \bigl((aa + bb)N^{-1}, \\
&\qquad (-(ab) + ab)N^{-1}\bigr) \\
&= (NN^{-1},\ 0N^{-1}) = (1, 0)
\end{aligned}
$$
이고, 교환법칙에 의해 $vz = 1$이다. 따라서 $z$는 가역원이고 [[field|가역원과 체]]의 정의에서 역원이 하나뿐이므로 $z^{-1} = v$이다. $0$이 아닌 모든 복소수가 가역원이므로 $\mathbb{C}$는 체이다.

*가역원의 군.* [[field|가역원과 체]]의 (1)에 의해 $0$은 가역원이 아니므로 $\mathbb{C}^{\times} \subseteq \mathbb{C} - \{0\}$이고, 방금 보인 것에 의해 $\mathbb{C} - \{0\} \subseteq \mathbb{C}^{\times}$이다. 같은 (1)에 의해 $\mathbb{C}^{\times}$는 곱셈으로 군이고, $\mathbb{C}$가 가환환이므로 아벨군이다.

**2의 증명.** 각 실수 $x$에 대해 $(x, 0)$은 $\mathbb{C}$의 원소 하나이므로 $\iota$는 함수 $\mathbb{R} \to \mathbb{C}$이다. 복소수의 (3)에 의해 $\iota(x) + \iota(y) = (x, 0) + (y, 0) = (x + y, 0) = \iota(x + y)$이고 $\iota(x)\iota(y) = (x, 0)(y, 0) = (xy, 0) = \iota(xy)$이다. [[ring-examples|환의 예]]의 (2)에 의해 $\mathbb{R}$는 환이므로 $\iota$는 환 준동형이다. $\iota(x) = \iota(y)$이면 $(x, 0) = (y, 0)$이므로 복소수의 (1)에 의해 $x = y$이다.

(i) [[ring-homomorphism|환 준동형]]의 (1)에 의해 $\iota(0) = 0$, $\iota(-x) = -\iota(x)$, $\iota(x - y) = \iota(x) - \iota(y)$이다. $\iota(1) = (1, 0)$은 (1)에 의해 $\mathbb{C}$의 단위원 $1$이다. $x \ne 0$이면 $x$와 $0$이 다르므로 단사에 의해 $\iota(x) \ne \iota(0) = 0$이다. 또 (K8)의 (iii)에 의해 $xx^{-1} = 1$이므로 $\iota(x)\iota(x^{-1}) = \iota(xx^{-1}) = \iota(1) = 1$이고, 곱셈의 교환법칙에 의해 $\iota(x^{-1})\iota(x) = 1$이다. 역원은 하나뿐이므로 $\iota(x^{-1}) = \iota(x)^{-1}$이다. $y \ne 0$이면 실수의 나눗셈의 정의와 방금 보인 것에 의해 $\iota(x / y) = \iota(xy^{-1}) = \iota(x)\iota(y^{-1}) = \iota(x)\iota(y)^{-1} = \iota(x) / \iota(y)$이다.

(ii) $\iota(x) = (x, 0)$이므로 실수부와 허수부의 정의에 의해 $\operatorname{Re} \iota(x) = x$, $\operatorname{Im} \iota(x) = 0$이다. 복소수의 (3)에 의해 $\iota(x) z = (x, 0)(a, b) = (xa, xb) = (x \operatorname{Re} z,\ x \operatorname{Im} z)$이다.

(iii) $z \in \iota(\mathbb{R})$이면 어떤 실수 $x$에서 $z = (x, 0)$이므로 $\operatorname{Im} z = 0$이다. 거꾸로 $\operatorname{Im} z = 0$이면 복소수의 (1)에 의해 $z = (\operatorname{Re} z, 0) = \iota(\operatorname{Re} z) \in \iota(\mathbb{R})$이다. [[subring|부분환]]의 (3)의 (i)에 의해 $\mathbb{R}$는 환 $\mathbb{R}$의 부분환이므로, [[ring-homomorphism|환 준동형]]의 (3)의 (i)에 의해 $\iota(\mathbb{R})$는 $\mathbb{C}$의 부분환이다. $\mathbb{C}$가 가환환이므로 부분환의 (3)의 (ii)에 의해 $\iota(\mathbb{R})$는 가환환이고, $1 = \iota(1) \in \iota(\mathbb{R})$이므로 부분환의 (5)의 (i)에 의해 단위원 $1$을 갖는 환이다. $\iota(\mathbb{R})$의 원소 $u \ne 0$을 잡으면 $u = \iota(x)$인 실수 $x$가 있고, $\iota(0) = 0$이므로 $x \ne 0$이다. (i)에 의해 $\iota(x^{-1}) \in \iota(\mathbb{R})$이고 $\mathbb{C}$에서 $u\iota(x^{-1}) = 1 = \iota(x^{-1})u$이며, 부분환의 (1)에 의해 $\iota(\mathbb{R})$에서의 곱은 $\mathbb{C}$에서의 곱과 같다. 따라서 $u$는 환 $\iota(\mathbb{R})$의 가역원이고, $\iota(\mathbb{R})$는 체이다. 끝으로 환 준동형의 (3)의 (iii)에 의해 $\iota : \mathbb{R} \to \iota(\mathbb{R})$는 환 준동형이고, 단사이며, 같은 항목 (3)의 (i)에 의해 상이 공역 $\iota(\mathbb{R})$ 전체이므로 전사이다. 따라서 환 동형사상이다.

**3에 대하여.** (3)은 이름과 읽는 약속을 정한 것이다. 첫 문장의 "곧"은 (2)의 (iii)이고, (ii)의 "두 값은 같다"는 (2)의 $\iota(x + y) = \iota(x) + \iota(y)$, $\iota(xy) = \iota(x)\iota(y)$와 (2)의 (i)의 등식들이며, 실수 $0$, $1$을 옮긴 것이 복소수 $0$, $1$이라는 것은 (2)의 (i)이다.

**4의 증명.** 복소수의 (4)에 의해 $\iota(a) + \iota(b) i = (a, 0) + (b, 0)i = (a, b)$이다. 따라서 복소수의 (1)에 의해 $z = (\operatorname{Re} z, \operatorname{Im} z) = \iota(\operatorname{Re} z) + \iota(\operatorname{Im} z) i$이고, $a + bi = c + di$는 $(a, b) = (c, d)$이므로 정확히 $a = c$이고 $b = d$일 때 성립한다. $a + bi = (a, b)$이므로 $\operatorname{Re}(a + bi) = a$, $\operatorname{Im}(a + bi) = b$이다. [[ring-basic-properties|환의 기본 성질]]의 (2)와 (2)의 (i)에 의해 $-(\iota(b) i) = (-\iota(b)) i = \iota(-b) i$이므로 $a - bi = \iota(a) + \iota(-b) i = a + (-b) i$이다. $\iota(0) = 0$이고 $0$은 덧셈의 항등원이므로 $0 + bi = bi$이다. 환의 기본 성질의 (1)에 의해 $0i = 0$이므로 $a + 0i = a$이다. $\iota(1) = 1$은 곱셈의 항등원이므로 $1i = i$이다.

**5의 증명.** (1)에 의해 $-1 = -(1, 0) = (-1, 0)$이고, 복소수의 (4)에 의해 $ii = (-1, 0) = -1$이다. 환의 기본 성질의 (3)에 의해 $(-i)(-i) = ii = -1$이다. 거꾸로 $zz = -1$이라 하자. 곱셈의 정의에 의해 $zz = (aa - bb,\ ab + ba)$이므로 복소수의 (1)에 의해 $aa - bb = -1$이고 $ab + ba = 0$이다. (K1)과 (K3), (K7)에 의해 $ab + ba = 2(ab)$이고 $2 \ne 0$이므로 (K10)에 의해 $ab = 0$이고, 다시 (K10)에 의해 $a = 0$이거나 $b = 0$이다. $b = 0$이라면 $aa = -1$인데, 순서 성질 (5)의 (iii)에 의해 $0 \le aa$이고 순서 성질 (5)의 (ii)와 (3)의 (ii)에 의해 $-1 < 0$이므로 순서 성질 (1)의 (v)에 의해 $-1 < aa$가 되어 $aa \ne -1$이다(순서 성질 (1)의 (i)). 따라서 $b \ne 0$이고 $a = 0$이다. 그러면 $-(bb) = -1$이므로 $bb = 1$이고, (K12)에 의해 $(b - 1)(b + 1) = bb - 1 = 0$이므로 (K10)에 의해 $b = 1$이거나 $b = -1$이다. $b = 1$이면 $z = (0, 1) = i$이고, $b = -1$이면 (1)에 의해 $z = (0, -1) = (-0, -1) = -i$이다($-0 = 0$은 $0 + 0 = 0$과 (K8)의 (ii)).

**6의 증명.** $\mathbb{C}$ 위의 관계 $<$가 네 조건을 모두 만족한다고 하고 모순을 끌어낸다. $\operatorname{Im} i = 1 \ne 0 = \operatorname{Im} 0$이므로 $i \ne 0$이다. (W1)을 $0$과 $i$에 쓰면 $0 < i$, $0 = i$, $i < 0$ 가운데 정확히 하나가 성립하고 $0 = i$는 아니므로 $0 < i$이거나 $i < 0$이다.

- $0 < i$이면 (W4)를 $i$와 $i$에 써서 $0 < ii$이다.
- $i < 0$이면 (W3)을 $c = -i$로 써서 $i + (-i) < 0 + (-i)$, 곧 $0 < -i$이다. (W4)를 $-i$와 $-i$에 써서 $0 < (-i)(-i)$이다.

(5)에 의해 $ii = (-i)(-i) = -1$이므로 어느 경우든 $0 < -1$이다. (W4)를 $-1$과 $-1$에 쓰면 $0 < (-1)(-1)$이고, 환의 기본 성질의 (3)에 의해 $(-1)(-1) = 1 \cdot 1 = 1$이므로 $0 < 1$이다. 또 $0 < -1$에 (W3)을 $c = 1$로 쓰면 $0 + 1 < -1 + 1$, 곧 $1 < 0$이다. (W2)에 의해 $0 < 1$과 $1 < 0$에서 $0 < 0$이다. 그런데 $0 = 0$이므로 (W1)을 $0$과 $0$에 쓰면 $0 < 0$은 성립하지 않는다. 모순이므로 그런 관계는 없다. $\blacksquare$
:::

## 예시와 반례

:::example[4 − 3i 의 역원]
$z = 4 - 3i$, 곧 $z = (4, -3)$이라 합시다. $N = 4^2 + (-3)^2 = 16 + 9 = 25$이므로 (1)에 의해
$$
\begin{aligned}
z^{-1} &= \bigl(4 \cdot 25^{-1},\ -(-3) \cdot 25^{-1}\bigr) \\
&= \tfrac{4}{25} + \tfrac{3}{25} i
\end{aligned}
$$
입니다. 곱해서 확인하면 곱셈의 정의에 의해 $(4, -3)\bigl(\tfrac{4}{25}, \tfrac{3}{25}\bigr) = \bigl(\tfrac{16}{25} - (-3) \cdot \tfrac{3}{25},\ 4 \cdot \tfrac{3}{25} + (-3) \cdot \tfrac{4}{25}\bigr) = \bigl(\tfrac{25}{25}, 0\bigr) = 1$입니다.
:::

:::example[약속에 따라 읽은 식]
$z = -2 + 5i$라 합시다. (3)의 약속에 의해 $3z$는 $\iota(3) z$이고, (2)의 (ii)에 의해 $\iota(3) z = (3 \cdot (-2),\ 3 \cdot 5) = -6 + 15i$입니다. 이것은 $z + z + z = (-2 - 2 - 2,\ 5 + 5 + 5)$와 같습니다. $z + 1$은 $z + \iota(1) = (-2 + 1, 5) = -1 + 5i$이고, $\tfrac{1}{2} i$는 $\iota(2^{-1}) i = (0, \tfrac{1}{2})$이며 (2)의 (i)에 의해 이것은 $i / \iota(2)$와 같습니다. 실수인 복소수 $\iota(-7) = -7 + 0i$의 허수부는 $0$입니다.
:::

:::counterexample[사전식 순서에서 (W4)가 깨지는 예]
$\mathbb{C}$ 위의 관계 $\prec$를, $(a, b) \prec (c, d)$인 것이 정확히 "$a < c$이거나, $a = c$이고 $b < d$"일 때로 정해 봅시다(사전에서 낱말을 첫 글자부터 비교하는 방식). $0 = (0, 0)$과 $i = (0, 1)$은 첫째 성분이 같고 $0 < 1$이므로 $0 \prec i$입니다. 그러나 $ii = (-1, 0)$이고 $-1 < 0$이므로 $ii \prec 0$입니다. $0 \prec ii$이려면 $0 < -1$이거나 "$0 = -1$이고 $0 < 0$"이어야 하는데 둘 다 거짓이므로, $0 \prec i$이고 $0 \prec i$인데 $0 \prec ii$가 아닙니다. 곧 이 관계는 (W4)를 만족하지 않습니다. (6)은 어떤 관계를 고르든 네 조건 가운데 하나는 깨진다는 것입니다.
:::

## 확인 질문

:::check[$\operatorname{Im} z \ne 0$인 복소수 $z$에서 $zz$가 실수인 복소수인 것은 언제인가?]
$z = (a, b)$이면 곱셈의 정의에 의해 $zz = (aa - bb,\ ab + ba)$이고, (K1), (K3)에 의해 $\operatorname{Im}(zz) = 2(ab)$입니다. 이것이 $0$인 것은 (K10)과 $2 \ne 0$에 의해 정확히 $ab = 0$일 때이고, $b \ne 0$이므로 (K10)에 의해 정확히 $a = 0$일 때입니다. 곧 실수부가 $0$일 때입니다. 예컨대 $z = 3i$이면 $zz = -9$입니다.
:::

:::check[$z \ne 0$이고 $z^{-1} = z$인 복소수를 모두 구하라.]
$z^{-1} = z$이면 $zz = 1$입니다. $z = (a, b)$로 두면 $aa - bb = 1$이고 $2(ab) = 0$이므로 $a = 0$이거나 $b = 0$입니다. $a = 0$이면 $-(bb) = 1$이 되어 $bb = -1 < 0$인데 $0 \le bb$이므로 불가능합니다(순서 성질 (5)의 (iii)). 따라서 $b = 0$이고 $aa = 1$입니다. (K12)에 의해 $(a - 1)(a + 1) = aa - 1 = 0$이므로 (K10)에 의해 $a = 1$이거나 $a = -1$입니다. 거꾸로 $1 \cdot 1 = 1$이고 [[ring-basic-properties|환의 기본 성질]]의 (3)에 의해 $(-1)(-1) = 1 \cdot 1 = 1$이므로 답은 $z = 1$과 $z = -1$입니다.
:::
