---
title: 실수의 계산 법칙
title_en: Arithmetic of the Real Numbers
aliases: [스칼라, 실수의 덧셈과 곱셈, 체의 공리, scalar, field axioms, real arithmetic]
kind: axiom
field: linear-algebra
msc: ["12"]
level: intro
summary: 이 강의의 스칼라는 실수이다. 실수의 덧셈과 곱셈에 관한 일곱 가지 계산 법칙을 증명 없이 받아들이고, 거기서 유일성, 0과의 곱, 부호 규칙, 곱셈의 소거, 역수의 성질을 증명한다.
requires: [set, cartesian-product, function]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 1절 Vector spaces, 공리 목록 바로 다음의 번호 없는 Remark 두 개, p.2
    checked: original
    note: "출처는 실수의 계산 법칙을 적지 않는다. 벡터공간의 공리가 '고등학교에서 아는 수의 계산 규칙'과 같은 것이라고만 말하고(p.2 첫째 Remark), 스칼라가 실수이면 실벡터공간, 복소수이면 복소벡터공간이며 임의의 체 F도 스칼라로 쓸 수 있다고 한다(p.2 둘째 Remark). 체를 쓰는 까닭으로 '0이 아닌 스칼라로 나눌 수 있어야 한다'는 점을 든다. 이 항목의 (K1)–(K7)과 (K8)–(K12), 그리고 그 증명은 이 사이트가 정한 것이고 출처에 없다. 이 강의는 스칼라를 실수로만 한정하므로 출처가 다루는 복소수와 일반의 체는 다루지 않는다. 출처는 (K8)–(K12)를 따로 적지 않는다. 항목의 이름과 (K) 번호도 이 사이트의 것이다. (K6)의 역수는 출처가 말하는 '0이 아닌 스칼라로 나누기'에 해당한다."
status: reviewed
review_note: "2026-11-16 독립 검토 3회 통과. 정수와 실수를 잇는 문구, 뒤 단원이 쓸 부호 규칙과 계산 법칙, 값으로 함수 정하기, 출처 메모를 보완했다."
added: 2026-11-16
---

:::statement
이 강의에서 **스칼라**(scalar)는 실수이다. 실수 전체의 집합을 $\mathbb{R}$로 쓴다. $\mathbb{R}$에는 [[function|함수]] $+ : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$ (**덧셈**)와 $\cdot : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$ (**곱셈**)이 있다([[cartesian-product|곱집합]] $\mathbb{R} \times \mathbb{R}$의 원소 $(a, b)$에서의 값을 각각 $a + b$, $a \cdot b$로 쓴다). 곱 $a \cdot b$는 $ab$로 줄여 쓰고, $ab + c$는 $(ab) + c$를 뜻한다.

**증명 없이 받아들이는 성질.** 아래에서 $a$, $b$, $c$는 임의의 실수이다.

- (K1) (교환법칙) $a + b = b + a$이고 $ab = ba$이다.
- (K2) (결합법칙) $(a + b) + c = a + (b + c)$이고 $(ab)c = a(bc)$이다.
- (K3) (분배법칙) $a(b + c) = ab + ac$이다.
- (K4) (0과 1) 실수 $0$과 $1$에 대하여 모든 실수 $a$에서 $a + 0 = a$이고 $a \cdot 1 = a$이다. 또 $0 \ne 1$이다.
- (K5) (덧셈의 역원) 각 실수 $a$마다 $a + x = 0$인 실수 $x$가 있다.
- (K6) (곱셈의 역원) $a \ne 0$이면 $ax = 1$인 실수 $x$가 있다.
- (K7) (정수와 구체적인 계산) 정수는 실수이다. 정수 $0$, $1$은 (K4)의 $0$, $1$이다. 두 정수의 합과 곱은 정수로서 계산하든 실수로서 계산하든 같은 수이고, 정수 $n$의 정수로서의 음수 $-n$은 $n + (-n) = 0$이므로 (K5)의 덧셈 역원이다. $1 + 1 = 2$, $2 \cdot 3 = 6$, $2 \ne 0$처럼 **정수 사이의** 구체적인 등식과 "같지 않다"는 계산한 것으로 쓴다. $1/2$ 같은 수는 ((K8)의 기호로) $2^{-1}$을 뜻하며, 그런 수의 계산은 이 법칙들로 그 자리에서 보인다.

**증명하는 성질.** $a$, $b$, $c$는 임의의 실수이다.

- (K8) (유일성) (i) 모든 실수 $b$에서 $b + z = b$인 실수 $z$는 $0$뿐이고, 모든 실수 $b$에서 $be = b$인 실수 $e$는 $1$뿐이다. (ii) $a + x = 0$인 실수 $x$는 ((K5)에 의해 있고) 하나뿐이다. 이 수를 $-a$로 쓴다. (iii) $a \ne 0$이면 $ax = 1$인 실수 $x$는 ((K6)에 의해 있고) 하나뿐이다. 이 수를 $a^{-1}$로 쓴다.
- (K9) $0a = 0$이고 $a0 = 0$이다. $(-1)a = -a$이다. $-(-a) = a$이다. $(-a)b = -(ab)$이다.
- (K10) $ab = 0$이면 $a = 0$이거나 $b = 0$이다.
- (K11) $a \ne 0$이고 $ab = ac$이면 $b = c$이다.
- (K12) (i) $(a + b)c = ac + bc$이다. (ii) $a(-b) = -(ab)$이다. (iii) $(-a)(-b) = ab$이다. (iv) $-(a + b) = (-a) + (-b)$이다. (v) $a - b = 0$인 것은 정확히 $a = b$일 때이다. (vi) $a \ne 0$이고 $b \ne 0$이면 $ab \ne 0$이고 $(ab)^{-1} = a^{-1}b^{-1}$이다.

**뺄셈과 나눗셈.** (K8)에 의해 $-a$와 $a^{-1}$이 하나로 정해지므로 $a - b = a + (-b)$로, $b \ne 0$일 때 $a / b = a \cdot b^{-1}$로 정한다.
:::

:::english
In this course a **scalar** is a real number. Write $\mathbb{R}$ for the set of real numbers. On $\mathbb{R}$ there are a function $+ : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$ (**addition**) and a function $\cdot : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$ (**multiplication**); we write $a + b$ and $a \cdot b$ for their values at $(a, b) \in \mathbb{R} \times \mathbb{R}$. We abbreviate $a \cdot b$ to $ab$, and $ab + c$ means $(ab) + c$.

**Properties accepted without proof.** Below, $a$, $b$, $c$ are arbitrary real numbers.

- (K1) (Commutativity) $a + b = b + a$ and $ab = ba$.
- (K2) (Associativity) $(a + b) + c = a + (b + c)$ and $(ab)c = a(bc)$.
- (K3) (Distributivity) $a(b + c) = ab + ac$.
- (K4) (Zero and one) For the real numbers $0$ and $1$, we have $a + 0 = a$ and $a \cdot 1 = a$ for every real number $a$. Moreover $0 \ne 1$.
- (K5) (Additive inverses) For each real number $a$ there is a real number $x$ with $a + x = 0$.
- (K6) (Multiplicative inverses) If $a \ne 0$, there is a real number $x$ with $ax = 1$.
- (K7) (Integers and concrete computations) Integers are real numbers. The integers $0$ and $1$ are the $0$ and $1$ of (K4). The sum and the product of two integers are the same number whether computed as integers or as real numbers, and the negative $-n$ of an integer $n$ (as an integer) is the additive inverse of (K5), since $n + (-n) = 0$. Concrete equalities and inequations ("not equal") **between integers**, such as $1 + 1 = 2$, $2 \cdot 3 = 6$, $2 \ne 0$, are used as computed. A number such as $1/2$ means $2^{-1}$ (in the notation of (K8)), and computations with such numbers are justified on the spot by these laws.

**Properties that are proved.** $a$, $b$, $c$ are arbitrary real numbers.

- (K8) (Uniqueness) (i) The only real number $z$ with $b + z = b$ for every real number $b$ is $0$, and the only real number $e$ with $be = b$ for every real number $b$ is $1$. (ii) There is exactly one real number $x$ with $a + x = 0$ (one exists by (K5)); we write it $-a$. (iii) If $a \ne 0$, there is exactly one real number $x$ with $ax = 1$ (one exists by (K6)); we write it $a^{-1}$.
- (K9) $0a = 0$ and $a0 = 0$. $(-1)a = -a$. $-(-a) = a$. $(-a)b = -(ab)$.
- (K10) If $ab = 0$, then $a = 0$ or $b = 0$.
- (K11) If $a \ne 0$ and $ab = ac$, then $b = c$.
- (K12) (i) $(a + b)c = ac + bc$. (ii) $a(-b) = -(ab)$. (iii) $(-a)(-b) = ab$. (iv) $-(a + b) = (-a) + (-b)$. (v) $a - b = 0$ exactly when $a = b$. (vi) If $a \ne 0$ and $b \ne 0$, then $ab \ne 0$ and $(ab)^{-1} = a^{-1}b^{-1}$.

**Subtraction and division.** Since (K8) determines $-a$ and $a^{-1}$ uniquely, we define $a - b = a + (-b)$ and, for $b \ne 0$, $a / b = a \cdot b^{-1}$.
:::

## 직관

벡터공간의 규칙은 중학교와 고등학교에서 익힌 수의 계산 규칙을 벡터로 옮긴 것입니다. 경기를 시작하기 전에 규칙표를 정해 두듯이, 이 강의는 수에 대해 어디까지를 그냥 써도 되는지를 이 항목에서 미리 정합니다. 규칙표에 없는 것은 쓰기 전에 규칙표에서 끌어내야 하고, 그것이 (K8)–(K12)입니다. 비유가 어긋나는 곳은, 경기 규칙은 마음대로 바꿀 수 있지만 이 목록은 실수가 실제로 따르는 법칙을 적은 것이라는 점입니다. 목록은 덧셈과 곱셈의 교환·결합·분배 법칙, $0$과 $1$, 덧셈의 역원($-a$), 0이 아닌 수의 역수($a^{-1}$)입니다. 뺄셈과 나눗셈은 이 둘로 정의됩니다.

이 목록에는 일부러 넣지 않은 것이 있습니다. 수의 순서($<$)와 절댓값, 제곱근, 극한은 이 강의가 다루는 범위에서는 필요하지 않으므로 쓰지 않습니다. (K7)은 $1 + 1 \ne 0$ 같은 정수 사이의 계산을 허락하는 조항입니다. (K1)–(K6)만으로는 이것이 나오지 않기 때문입니다. $0$과 $1$ 두 수뿐이고 $0 + 0 = 0$, $0 + 1 = 1 + 0 = 1$, $1 + 1 = 0$, $0 \cdot 0 = 0 \cdot 1 = 1 \cdot 0 = 0$, $1 \cdot 1 = 1$로 계산하는 체계도 (K1)–(K6)을 모두 만족하는데($a$, $b$, $c$에 $0$과 $1$을 넣는 여덟 가지 경우를 모두 따져 보면 확인됩니다), 거기서는 $1 + 1 = 0$입니다.

이 사이트의 기존 항목 가운데에는 실수를 쓰는 것이 있고, 이 항목은 그 항목들을 고치지 않습니다. [[bernoulli-inequality|베르누이 부등식]]은 자기 증명 첫머리에 순서 법칙까지 포함한 목록 (R1)–(R6)을 두고, [[reals-are-not-countably-infinite|실수 집합이 가산 무한이 아니라는 정리]]는 소수 전개에 관한 (D1), (D2)를 받아들입니다. 이 강의의 항목들은 (K1)–(K12)만 인용하고 그 항목들이 받아들인 것에는 기대지 않습니다. [[rational-and-irrational-numbers|유리수와 무리수]] 항목은 분수 $a/b$를 익숙한 것으로 썼고, 이 강의에서는 $a/b$를 $a \cdot b^{-1}$로 정의합니다. 이 항목은 "공리"로 분류되지만 (K8)–(K12)는 (K1)–(K6)에서 증명하는 것입니다.

## (K8)–(K12)의 증명

:::proof
먼저 이 증명에서 자주 쓰는 두 가지를 보인다. $a$, $b$, $c$는 실수이다.

(가) $0 + a = a$이고 $1a = a$이다. (K1)에 의해 $0 + a = a + 0$이고 $1a = a1$인데, (K4)에 의해 $a + 0 = a$, $a \cdot 1 = a$이다.

(나) (오른쪽 분배법칙, 곧 (K12)의 (i)) $(b + c)a = ba + ca$이다. (K1)에 의해 $(b + c)a = a(b + c)$이고, (K3)에 의해 $a(b + c) = ab + ac$이며, (K1)에 의해 $ab + ac = ba + ca$이다.

**(K8)의 증명.** (i) 모든 실수 $b$에서 $b + z = b$라 하자. $b = 0$으로 두면 $0 + z = 0$이다. (K4)에 의해 $z + 0 = z$이고 (K1)에 의해 $0 + z = z + 0$이므로 $z = 0$이다. 다음에 모든 실수 $b$에서 $be = b$라 하자. $b = 1$로 두면 $1e = 1$이다. (K4)에 의해 $e \cdot 1 = e$이고 (K1)에 의해 $1e = e1$이므로 $e = 1$이다.

(ii) $a + x = 0$이고 $a + y = 0$이라 하자. 그러면
$$x = x + 0 = x + (a + y) = (x + a) + y = (a + x) + y = 0 + y = y$$
이다. 차례로 (K4), $a + y = 0$, (K2), (K1), $a + x = 0$, (가)에 의한다. 존재는 (K5)이다.

(iii) $a \ne 0$이고 $ax = 1$, $ay = 1$이라 하자. 그러면
$$x = x \cdot 1 = x(ay) = (xa)y = (ax)y = 1y = y$$
이다. 차례로 (K4), $ay = 1$, (K2), (K1), $ax = 1$, (가)에 의한다. 존재는 (K6)이다.

**(K9)의 증명.** (a) $a0 = 0$: $x = a0$라 하자. (K4)에 의해 $0 + 0 = 0$이므로 (K3)에 의해 $x = a(0 + 0) = a0 + a0 = x + x$이다. (K5)에 의해 $x + y = 0$인 실수 $y$가 있다. 그러면
$$0 = x + y = (x + x) + y = x + (x + y) = x + 0 = x$$
이다. 차례로 $x + y = 0$, $x = x + x$, (K2), $x + y = 0$, (K4)에 의한다. 따라서 $a0 = 0$이다. (K1)에 의해 $0a = a0 = 0$이다.

(b) $(-1)a = -a$: (K8)에 의해 $-1$은 $1 + (-1) = 0$인 수이다. (가)에 의해 $a = 1a$이므로
$$a + (-1)a = 1a + (-1)a = (1 + (-1))a = 0a = 0$$
이다. 차례로 (가), (나), $1 + (-1) = 0$, (a)에 의한다. 따라서 $(-1)a$는 $a + x = 0$인 실수 $x$이고, (K8)의 (ii)에 의해 $(-1)a = -a$이다.

(c) $-(-a) = a$: $-a$의 정의 $a + (-a) = 0$과 (K1)에 의해 $(-a) + a = 0$이다. 곧 $a$는 $(-a) + x = 0$인 실수 $x$이다. (K8)의 (ii)를 실수 $-a$에 적용하면 이런 수는 $-(-a)$뿐이므로 $a = -(-a)$이다.

(d) $(-a)b = -(ab)$: (나)와 (a)에 의해 $ab + (-a)b = (a + (-a))b = 0b = 0$이다. 따라서 $(-a)b$는 $ab + x = 0$인 실수 $x$이고, (K8)의 (ii)에 의해 $(-a)b = -(ab)$이다.

**(K10)의 증명.** $ab = 0$이라 하자. $a = 0$이면 결론이 성립하므로 $a \ne 0$이라 하고 $b = 0$을 보인다. (K8)의 (iii)에 의해 $aa^{-1} = 1$이고 (K1)에 의해 $a^{-1}a = 1$이다. 그러면
$$b = 1b = (a^{-1}a)b = a^{-1}(ab) = a^{-1} \cdot 0 = 0$$
이다. 차례로 (가), $a^{-1}a = 1$, (K2), 가정 $ab = 0$, (K9)의 (a)에 의한다.

**(K11)의 증명.** $a \ne 0$이고 $ab = ac$라 하자. (K8)의 (iii)에 의해 $aa^{-1} = 1$이고 (K1)에 의해 $a^{-1}a = 1$이다. 그러면
$$b = 1b = (a^{-1}a)b = a^{-1}(ab) = a^{-1}(ac) = (a^{-1}a)c = 1c = c$$
이다. 차례로 (가), $a^{-1}a = 1$, (K2), 가정 $ab = ac$, (K2), $a^{-1}a = 1$, (가)에 의한다.

**(K12)의 증명.** (i)는 증명 첫머리의 (나)이다(문자만 바꾸면 $(a + b)c = ac + bc$).

(ii) (K1)에 의해 $a(-b) = (-b)a$이고, (K9)에 의해 $(-b)a = -(ba)$이며, (K1)에 의해 $-(ba) = -(ab)$이다.

(iii) (K9)의 마지막 등식에서 $b$ 자리에 $-b$를 두면 $(-a)(-b) = -(a(-b))$이다. (ii)에 의해 $a(-b) = -(ab)$이므로 $(-a)(-b) = -(-(ab))$이고, (K9)의 $-(-x) = x$에 의해 $-(-(ab)) = ab$이다.

(iv) $(a + b) + ((-a) + (-b))$를 계산한다. (K2)에 의해 이것은 $((a + b) + (-a)) + (-b)$이다. $(a + b) + (-a) = (b + a) + (-a) = b + (a + (-a)) = b + 0 = b$이다. 차례로 (K1), (K2), $a + (-a) = 0$, (K4)에 의한다. 따라서 합은 $b + (-b) = 0$이다. 곧 $(-a) + (-b)$는 $(a + b) + x = 0$인 실수 $x$이고, (K8)의 (ii)에 의해 $(-a) + (-b) = -(a + b)$이다.

(v) $a = b$이면 $a - b = a + (-a) = 0$이다. 거꾸로 $a - b = a + (-b) = 0$이라 하자. $(-b) + b = b + (-b) = 0$((K1))이므로
$$a = a + 0 = a + ((-b) + b) = (a + (-b)) + b = 0 + b = b$$
이다. 차례로 (K4), $(-b) + b = 0$, (K2), 가정, (가)에 의한다.

(vi) $a \ne 0$, $b \ne 0$이라 하자. $ab = 0$이면 (K10)에 의해 $a = 0$이거나 $b = 0$이어서 가정에 어긋나므로 $ab \ne 0$이다. 이제 $a^{-1}b^{-1}$이 $(ab)x = 1$인 수임을 보인다. (K2)에 의해 $(ab)(a^{-1}b^{-1}) = ((ab)a^{-1})b^{-1}$이고, $(ab)a^{-1} = (ba)a^{-1} = b(aa^{-1}) = b \cdot 1 = b$이다. 차례로 (K1), (K2), $aa^{-1} = 1$, (K4)에 의한다. 따라서 $(ab)(a^{-1}b^{-1}) = bb^{-1} = 1$이다. $ab \ne 0$이므로 (K8)의 (iii)에 의해 $(ab)^{-1} = a^{-1}b^{-1}$이다. $\blacksquare$
:::


## 예시와 반례

:::example[곱이 0이면 인수 하나가 0이다]
실수 $x$가 $(x + (-2))(x + (-3)) = 0$을 만족한다고 합시다. (K10)에 의해 $x + (-2) = 0$이거나 $x + (-3) = 0$입니다. 앞의 경우
$$x = x + 0 = x + ((-2) + 2) = (x + (-2)) + 2 = 0 + 2 = 2$$
입니다. 차례로 (K4), $(-2) + 2 = 2 + (-2) = 0$((K1)과 (K7)의 계산 $2 + (-2) = 0$), (K2), 가정, $0 + 2 = 2$((K1)과 (K4))에 의합니다. 뒤의 경우도 같은 계산으로 $x = 3$입니다. 곧 $x = 2$ 또는 $x = 3$입니다.
:::

:::counterexample[소거에서 $a \ne 0$을 뺄 수 없다]
$a = 0$, $b = 1$, $c = 2$로 두면 (K9)에 의해 $ab = 0 \cdot 1 = 0$이고 $ac = 0 \cdot 2 = 0$이므로 $ab = ac$입니다. 그러나 $b = 1 \ne 2 = c$입니다($1 \ne 2$는 (K7)의 구체적인 계산). 그래서 (K11)에는 $a \ne 0$이 필요합니다. 같은 이유로 $0$의 역수는 없습니다. $0x = 1$인 실수 $x$가 있다면 (K9)에 의해 $0 = 0x = 1$이어서 (K4)의 $0 \ne 1$에 어긋나기 때문입니다.
:::

## 확인 질문

:::check[실수 $a$, $b$, $c$에 대하여 $a(b - c) = ab - ac$임을 (K1)–(K12) 가운데 필요한 것을 인용하며 보여라.]
뺄셈의 정의에 의해 $a(b - c) = a(b + (-c))$이고 (K3)에 의해 $ab + a(-c)$입니다. (K12)의 (ii)에 의해 $a(-c) = -(ac)$이므로 $a(b - c) = ab + (-(ac)) = ab - ac$입니다.
:::

:::check[실수 $a \ne 0$과 $x$에 대하여 $ax = a$이면 $x = 1$인가?]
그렇습니다. (K4)에 의해 $a = a \cdot 1$이므로 $ax = a \cdot 1$입니다. $a \ne 0$이므로 (K11)에서 $b = x$, $c = 1$로 두면 $x = 1$입니다.
:::
