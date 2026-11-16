---
title: 단사, 전사, 전단사
title_en: Injective, Surjective, and Bijective Functions
aliases: [단사함수, 전사함수, 전단사함수, 일대일, 일대일 함수, 일대일 대응, 위로의 함수, injective, surjective, bijective, one-to-one, onto]
kind: definition
field: logic-foundations
msc: ["03E20"]
level: intro
summary: "함수가 단사인 것은 서로 다른 입력이 서로 다른 출력을 내는 것, 전사인 것은 공역의 모든 원소가 어떤 입력의 출력인 것이며, 둘을 모두 만족하면 전단사이다."
requires: [set, subset, function, quantifiers, conditional-statement, contrapositive-law, negation-of-quantified-statements, negation-of-conditional, de-morgan-laws-logic]
sources:
  - ref: hammack-book-of-proof
    loc: 12.2절 Injective and Surjective Functions, Definition 12.4, p.228 (예 f(x) = x², x³과 '전사 여부는 공역에 달려 있다'는 설명은 p.229, 증명 방법과 부정은 p.230)
    checked: original
    note: "출처 Definition 12.4는 단사를 'a ≠ a′이면 f(a) ≠ f(a′)'의 꼴로 정의하고, 이것을 증명하는 방법으로 직접 방법과 대우를 쓰는 방법(f(a) = f(a′)에서 a = a′을 이끌어냄)을 p.230에서 소개한다. 아래 진술의 'f(a) = f(a′)이면 a = a′'이라는 동치 꼴은 이 사이트에서 대우 법칙으로 연결한 것이다. 전사는 출처의 ∀b ∈ B, ∃a ∈ A, f(a) = b이고, 출처는 이 부정이 ∃b ∈ B, ∀a ∈ A, f(a) ≠ b라고 p.230에서 적는다. 단사의 부정(a ≠ a′이고 f(a) = f(a′)인 쌍이 있다)도 p.230에 있고, 아래의 한정 기호와 조건문의 부정 규칙으로 도출하는 과정과 전단사의 부정은 이 사이트에서 덧붙였다. '전사는 치역이 공역과 같은 것과 동치'라는 말은 출처 p.229에 지나가는 말로 나오고, 아래 설명 블록의 증명은 이 사이트의 것이다. 출처는 'f(x) = x²은 R에서 R로 단사도 전사도 아니고 R에서 [0, ∞)로는 전사'라고 p.229에서 말하는데, 이 항목은 제곱근의 존재에 기대지 않으려고 이 마지막 사실은 쓰지 않았다. 첫째 예시(x²을 작은 집합 위에서 보기)는 출처 p.229의 '전사 여부는 공역에 달려 있다'는 지적을 새 예로 보인 것이고, 단사·전사 여부의 네 조합을 작은 화살표 그림으로 보이는 p.229의 표와 같은 취지로 f₁–f₄를 골랐다. 단사 여부가 정의역에 따라 달라진다는 점, 같은 집합이 공역에 따라 전사이거나 아니라는 설명(공역 선언에 대한 remark)은 이 사이트에서 덧붙였다. 직관의 '등식에서 출발하면 다루기 쉽다'는 설명은 출처 p.230의 같은 취지의 말을 따른 것이다. 공집합이 정의역일 때의 설명과 나머지 예시, 반례, 확인 질문은 이 사이트에서 새로 만들었다. '단사, 전사, 전단사'라는 한국어 이름은 출처에 나오지 않는다."
status: source-checked
added: 2026-11-16
---

:::statement
$f : A \to B$가 [[function]]일 때 다음과 같이 정의한다. 여기서 $B$는 $f : A \to B$라고 쓸 때 밝힌 공역이다.

1. $f$가 **단사**(injective, one-to-one)라는 것은 모든 $a, a' \in A$에 대하여 $a \ne a'$이면 $f(a) \ne f(a')$라는 것이다. 곧 $f$가 단사인 것은 정확히 $\forall a \in A,\ \forall a' \in A,\ \bigl(a \ne a' \Rightarrow f(a) \ne f(a')\bigr)$일 때이다.
2. $f : A \to B$가 **전사**(surjective, onto)라는 것은 모든 $b \in B$에 대하여 $f(a) = b$인 $a \in A$가 존재한다는 것이다. 곧 $f : A \to B$가 전사인 것은 정확히 $\forall b \in B,\ \exists a \in A,\ f(a) = b$일 때이다.
3. $f : A \to B$가 **전단사**(bijective)라는 것은 $f$가 단사이고 $f : A \to B$가 전사라는 것이다. 곧 정확히 단사이면서 전사일 때이다.

단사의 조건에는 공역 $B$가 나오지 않으므로 단사 여부는 집합 $f$만으로 정해진다. 전사와 전단사는 선언한 공역 $B$에 대한 성질이다. 집합으로서 같은 $f$라도 공역을 다르게 선언하면 전사 여부가 달라질 수 있다.

**단사의 동치 꼴.** $f$가 단사인 것은 정확히 $\forall a \in A,\ \forall a' \in A,\ \bigl(f(a) = f(a') \Rightarrow a = a'\bigr)$일 때이다. 각 $a, a' \in A$에 대하여 $\bigl(a \ne a'\bigr) \Rightarrow \bigl(f(a) \ne f(a')\bigr)$의 [[contrapositive-law|대우]]는 $\lnot\bigl(f(a) \ne f(a')\bigr) \Rightarrow \lnot\bigl(a \ne a'\bigr)$이고, $\ne$는 $=$의 부정이므로 이중 부정을 지우면 $\bigl(f(a) = f(a')\bigr) \Rightarrow \bigl(a = a'\bigr)$이다.

**부정.** [[negation-of-quantified-statements]], [[negation-of-conditional]], [[de-morgan-laws-logic]]에 의해 다음이 성립한다.

- $f$가 단사가 아닌 것은 정확히 $\exists a \in A,\ \exists a' \in A,\ \bigl(a \ne a' \land f(a) = f(a')\bigr)$일 때이다. 곧 $a \ne a'$이고 $f(a) = f(a')$인 $a, a' \in A$가 존재할 때이다.
- $f : A \to B$가 전사가 아닌 것은 정확히 $\exists b \in B,\ \forall a \in A,\ f(a) \ne b$일 때이다. 곧 어떤 $b \in B$가 존재하여, 모든 $a \in A$에 대하여 $f(a) \ne b$일 때이다.
- $f : A \to B$가 전단사가 아닌 것은 정확히 $f$가 단사가 아니거나 $f : A \to B$가 전사가 아닐 때이다.
:::

:::english
Let $f : A \to B$ be a function, where $B$ is the codomain named in the notation $f : A \to B$.

1. $f$ is **injective** (one-to-one) if for all $a, a' \in A$, $a \ne a'$ implies $f(a) \ne f(a')$. That is, $f$ is injective exactly when $\forall a \in A,\ \forall a' \in A,\ \bigl(a \ne a' \Rightarrow f(a) \ne f(a')\bigr)$.
2. $f : A \to B$ is **surjective** (onto) if for every $b \in B$ there exists $a \in A$ with $f(a) = b$. That is, $f : A \to B$ is surjective exactly when $\forall b \in B,\ \exists a \in A,\ f(a) = b$.
3. $f : A \to B$ is **bijective** if $f$ is injective and $f : A \to B$ is surjective. That is, exactly when it is both injective and surjective.

The condition for injectivity does not mention the codomain $B$, so whether $f$ is injective is determined by the set $f$ alone. Surjectivity and bijectivity are properties relative to the declared codomain $B$. Even for the same set $f$, declaring a different codomain can change whether it is surjective.

**An equivalent form of injectivity.** $f$ is injective exactly when $\forall a \in A,\ \forall a' \in A,\ \bigl(f(a) = f(a') \Rightarrow a = a'\bigr)$. Indeed, for each $a, a' \in A$, the contrapositive of $\bigl(a \ne a'\bigr) \Rightarrow \bigl(f(a) \ne f(a')\bigr)$ is $\lnot\bigl(f(a) \ne f(a')\bigr) \Rightarrow \lnot\bigl(a \ne a'\bigr)$, and since $\ne$ is the negation of $=$, removing the double negations gives $\bigl(f(a) = f(a')\bigr) \Rightarrow \bigl(a = a'\bigr)$.

**Negations.** By the rules for negating quantified statements and conditional statements and by De Morgan's laws, the following hold.

- $f$ is not injective exactly when $\exists a \in A,\ \exists a' \in A,\ \bigl(a \ne a' \land f(a) = f(a')\bigr)$. That is, exactly when there exist $a, a' \in A$ with $a \ne a'$ and $f(a) = f(a')$.
- $f : A \to B$ is not surjective exactly when $\exists b \in B,\ \forall a \in A,\ f(a) \ne b$. That is, exactly when there is some $b \in B$ such that $f(a) \ne b$ for every $a \in A$.
- $f : A \to B$ is not bijective exactly when $f$ is not injective or $f : A \to B$ is not surjective.
:::

## 직관

한 학교의 학생과 선생님의 담임 명단([[function]]의 비유)을 다시 생각합시다. 단사는 "어느 선생님도 담임을 맡은 학생이 많아야 한 명이다"입니다. 서로 다른 학생은 서로 다른 선생님에게 가고, 담임을 맡지 않은 선생님은 있어도 됩니다. 전사는 "모든 선생님이 담임을 맡고 있다"입니다. 전단사는 학생과 선생님이 빠짐없이 일대일로 짝지어진 상태입니다.

비유에서 학생이 정의역, 선생님이 공역에 해당합니다. 비유가 놓치는 곳이 하나 있습니다. 단사 여부는 정의역을 어떻게 잡느냐에 따라 달라지고, 전사 여부는 선언한 공역을 어떻게 잡느냐에 따라 달라지는데, 비유의 학교는 고정되어 있어서 이 점이 드러나지 않습니다. 아래 예시에서 같은 식 $x^2$이 정의역과 공역에 따라 다르게 분류되는 것을 봅니다.

단사의 두 꼴 가운데 "$f(a) = f(a')$이면 $a = a'$"은 식으로 주어진 함수에서 쓰기 편합니다. "같지 않다" 대신 "같다"에서 출발하기 때문입니다. 한편 모든 함수는 $a = a'$이면 $f(a) = f(a')$를 만족하는데, 이것은 단사의 조건과 방향이 반대인 다른 문장입니다. $f(a)$는 $a$에 대해 하나의 값으로 정해지기 때문입니다.

:::remark[전사와 치역]
$f : A \to B$가 전사인 것은 정확히 치역이 공역 $B$와 같을 때이다. 치역은 항상 $B$의 부분집합이므로, 치역이 $B$와 같은 것은 $B$의 모든 원소가 치역에 속하는 것과 같다. 그런데 $b \in B$가 치역에 속한다는 것은 $f(a) = b$인 $a \in A$가 있다는 뜻이다. 이것이 전사의 정의이다.

정의역이 공집합 $A = \emptyset$인 함수 $\emptyset : \emptyset \to B$는 단사이다. 다룰 $a, a'$이 없으므로 단사의 조건이 공허하게 참이기 때문이다. 치역이 $\emptyset$이므로 이 함수가 전사인 것은 정확히 $B = \emptyset$일 때이다.
:::

:::remark[같은 집합, 다른 공역]
$f = \{(1, 1), (2, 4)\}$는 [[function]]의 진술에 의해 $\{1, 2\}$에서 $\{1, 4, 9\}$로의 함수이고, 모든 값이 $\{1, 4\}$에 속하므로 $\{1, 2\}$에서 $\{1, 4\}$로의 함수이기도 하다. 집합으로서 같은 함수이다. $f : \{1, 2\} \to \{1, 4, 9\}$는 $9$가 어떤 $f(a)$와도 같지 않으므로 전사가 아니다. $f : \{1, 2\} \to \{1, 4\}$는 $1 = f(1)$, $4 = f(2)$이므로 전사이다. 같은 집합 $f$가 한 공역에 대해서는 전사가 아니고 다른 공역에 대해서는 전사이다. 두 경우 모두 $f(1) = 1 \ne 4 = f(2)$이므로 단사이다.
:::

## 예시와 반례

:::example[같은 식 $x^2$, 다른 정의역과 공역]
$x^2$을 정의역과 공역을 바꿔 가며 단사·전사 여부를 따져 봅시다. 아래에서 제곱은 정수의 곱으로 직접 계산합니다. 네 함수는 단사·전사 여부의 조합 가운데 '둘 다', '전사만', '단사만'을 보입니다.

- $f_1 : \{1, 2, 3\} \to \{1, 4, 9\}$, $f_1 = \{(1, 1), (2, 4), (3, 9)\}$. 값 $1, 4, 9$가 서로 다르므로 단사이고, 공역의 원소 $1, 4, 9$가 모두 값으로 나오므로 전사입니다. 전단사입니다.
- $f_2 : \{-1, 1, 2\} \to \{1, 4\}$, $f_2 = \{(-1, 1), (1, 1), (2, 4)\}$. $-1 \ne 1$인데 $f_2(-1) = f_2(1) = 1$이므로 단사가 아닙니다. $1 = f_2(1)$, $4 = f_2(2)$이므로 전사입니다.
- $f_3 : \{1, 2\} \to \{1, 4, 9\}$, $f_3 = \{(1, 1), (2, 4)\}$. 값 $1, 4$가 다르므로 단사입니다. $9$는 어떤 $f_3(a)$와도 같지 않으므로 전사가 아닙니다.
- $f_4 : \{-1, 1\} \to \{1\}$, $f_4 = \{(-1, 1), (1, 1)\}$. $-1 \ne 1$인데 $f_4(-1) = f_4(1) = 1$이므로 단사가 아닙니다. 공역의 유일한 원소 $1$이 $f_4(1)$이므로 전사입니다.

단사도 전사도 아닌 경우는 아래의 $\mathbb{Z}$ 위의 제곱이 보입니다.
:::

:::example[$\mathbb{Z}$ 위의 식들]
정수 $n$에 대하여 $g(n) = n + 3$으로 정한 $g : \mathbb{Z} \to \mathbb{Z}$는 전단사입니다. 단사: $g(a) = g(a')$이면 $a + 3 = a' + 3$이고 양변에서 $3$을 빼면 $a = a'$입니다. 전사: $b \in \mathbb{Z}$이면 $a = b - 3$은 정수이고 $g(a) = (b - 3) + 3 = b$입니다.

$h(n) = 2n$으로 정한 $h : \mathbb{Z} \to \mathbb{Z}$는 단사이지만 전사가 아닙니다. 단사: $h(a) = h(a')$이면 $2a = 2a'$이고 양변을 $2$로 나누면 $a = a'$입니다. 전사가 아님: $b = 1$에 대하여 $2a = 1$인 정수 $a$가 있다고 하면, $a \le 0$일 때 $2a \le 0 < 1$이고 $a \ge 1$일 때 $2a \ge 2 > 1$이라 모순입니다. 따라서 모든 $a \in \mathbb{Z}$에 대하여 $h(a) \ne 1$입니다.
:::

:::example[$\mathbb{Z}$와 $\mathbb{N}$ 위의 제곱]
$s : \mathbb{Z} \to \mathbb{Z}$, $s(n) = n^2$은 단사가 아닙니다. $-1 \ne 1$이지만 $s(-1) = s(1) = 1$입니다. 전사도 아닙니다. $b = 2$에 대하여, $|a| \le 1$이면 $a^2 \le 1$이고 $|a| \ge 2$이면 $a^2 \ge 4$이므로 $a^2 = 2$인 정수 $a$가 없습니다.

같은 식을 $t : \mathbb{N} \to \mathbb{N}$, $t(n) = n^2$으로 보면 단사입니다. $a, a' \in \mathbb{N}$이고 $a \ne a'$라 합시다. 그러면 $a < a'$이거나 $a' < a$입니다. $a < a'$이면, $a \ge 1$이므로 $a \cdot a < a \cdot a'$이고 $a' \ge 1$이므로 $a \cdot a' < a' \cdot a'$입니다. 따라서 $a^2 < a'^2$입니다. $a' < a$이면, $a' \ge 1$이므로 $a' \cdot a' < a' \cdot a$이고 $a \ge 1$이므로 $a' \cdot a < a \cdot a$입니다. 따라서 $a'^2 < a^2$입니다. 어느 경우든 $t(a) \ne t(a')$입니다. 전사는 아닙니다. $2$에 대하여, $a = 1$이면 $a^2 = 1$이고 $a \ge 2$이면 $a^2 \ge 4$이므로 $t(a) = 2$인 $a \in \mathbb{N}$이 없습니다.
:::

:::counterexample[단사이면 전사일 것이라는 착각]
위의 $h(n) = 2n$은 단사이지만 전사가 아닙니다. 반대로 위의 $f_2$는 전사이지만 단사가 아닙니다. 단사라고 해서 전사인 것은 아니고, 전사라고 해서 단사인 것도 아닙니다.
:::

:::counterexample[역방향 조건을 단사로 착각하기]
"모든 $a, a' \in A$에 대하여 $f(a) \ne f(a')$이면 $a \ne a'$이다"는 단사의 조건이 아닙니다. 이 문장은 모든 함수에서 성립합니다. $a = a'$이면 $f(a) = f(a')$이기 때문입니다. 예를 들어 $f_2$는 단사가 아니지만 이 문장은 $f_2$에서도 모든 $a, a' \in \{-1, 1, 2\}$에 대해 참입니다. 단사 여부를 가르는 것은 $a \ne a'$인데 $f(a) = f(a')$인 쌍이 있느냐입니다.
:::

## 확인 질문

:::check[$f : \{1, 2, 3\} \to \{\text{가}, \text{나}, \text{다}, \text{라}\}$, $f = \{(1, \text{가}), (2, \text{다}), (3, \text{라})\}$는 단사인가? 전사인가?]
$f(1) = \text{가}$, $f(2) = \text{다}$, $f(3) = \text{라}$가 서로 다르므로 단사입니다. 나에 대하여 $f(x) = \text{나}$인 $x \in \{1, 2, 3\}$이 없으므로 전사가 아닙니다.
:::

:::check[$g : \{1, 2, 3\} \to \{\text{가}, \text{나}\}$, $g = \{(1, \text{가}), (2, \text{나}), (3, \text{가})\}$가 단사가 아님을 단사의 부정을 써서 보이고, 전사인지 판단하라.]
$1 \ne 3$이지만 $g(1) = g(3) = \text{가}$입니다. 곧 $a \ne a'$이고 $g(a) = g(a')$인 $a, a' \in \{1, 2, 3\}$이 존재하므로 단사가 아닙니다. 공역의 가는 $g(1)$, 나는 $g(2)$이므로 전사입니다.
:::
