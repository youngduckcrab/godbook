---
title: 역관계와 역함수
title_en: Inverse Relation and Inverse Function
aliases: [항등함수, 역관계, 역함수, identity function, inverse relation, inverse function]
kind: definition
field: logic-foundations
msc: ["03E20"]
level: intro
summary: "A에서 B로의 관계 R의 역관계 R⁻¹은 R의 순서쌍의 성분을 맞바꾼 B에서 A로의 관계이고, f의 역관계가 B에서 A로의 함수일 때 그것을 f의 역함수라 하며, 이때 f⁻¹∘f = i_A, f∘f⁻¹ = i_B이다(i_A는 A 위의 항등함수)."
requires: [set, subset, cartesian-product, function, function-composition, injective-surjective-bijective]
sources:
  - ref: hammack-book-of-proof
    loc: 12.5절 Inverse Functions, Definition 12.6(p.238), Definition 12.7(p.239), Definition 12.8(p.240)
    checked: original
    note: "출처 Definition 12.6은 항등함수 i_A(x) = x를, Definition 12.7은 'A에서 B로의 관계 R의 역관계 R⁻¹ = {(y, x) : (x, y) ∈ R}'을 정의한다. 출처 Definition 12.8은 'f : A → B가 전단사이면 그 역은 함수 f⁻¹ : B → A이고 f⁻¹∘f = i_A, f∘f⁻¹ = i_B를 만족한다'고 정의한다(정리 12.3, p.240으로 전단사일 때 역관계가 함수임을 보장). 출처는 Definition 12.8 앞의 설명(p.240)에서 f⁻¹(f(x)) = x를 순서쌍 (f(x), x) ∈ f⁻¹로 설명하고 'Similar reasoning'으로 f∘f⁻¹ = i_B를 말한다. 이 항목은 다음 항목(bijective-iff-inverse-is-a-function)이 이 항목의 역관계를 쓰므로 순환을 피하려고 순서를 바꿔, 역함수를 '역관계가 B에서 A로의 함수일 때'로 정의하고 두 등식을 이 정의에서 증명했다. 이 조건이 f가 전단사일 때와 정확히 같다는 것은 다음 항목에서 보인다. 출처가 정의에서 전단사를 요구하는 것과 같은 대상이다. 출처가 항등함수가 전단사임을 p.238–239에서 간단히 보이는 것은 아래 '항등함수는 전단사이다' 블록에서 이 사이트가 다시 썼다. 첫째 예시(원소 4개의 전단사)는 출처 p.239의 원소 3개짜리 f 예와 원소 수와 대응이 다르게 새로 만들었다. 반례의 g(한 쌍이 겹치고 한 원소가 빠진 g)는 출처 p.239의 g 예와 같은 종류이고 집합과 대응은 새로 골랐다. f⁻¹이 역관계를 뜻할 때와 역함수를 뜻할 때를 구별하는 설명, 나머지 예시와 반례는 이 사이트에서 새로 만들었다. 합성에서의 'f⁻¹∘f'는 이 사이트의 function-composition 진술을 따른다."
status: reviewed
review_note: "2026-11-16 독립 검토 4회. 수학적 오류 없음. 공역의 지위(선언에 따른 것)를 명확히 하고 출처에서 가져온 예를 교체, 링크 표시말 정리."
added: 2026-11-16
---

:::statement
**항등함수.** [[set]] $A$에 대하여 $A$ 위의 **항등함수**(identity function) $i_A : A \to A$는 모든 $x \in A$에 대하여 $i_A(x) = x$인 함수, 곧 $i_A = \{(x, x) : x \in A\}$이다.

**역관계.** $R$이 $A$에서 $B$로의 관계, 곧 $R \subseteq A \times B$일 때, $R$의 **역관계**(inverse relation) $R^{-1}$은
$$R^{-1} = \{(y, x) : (x, y) \in R\}$$
이다. 이것은 $B$에서 $A$로의 관계, 곧 $R^{-1} \subseteq B \times A$이다. 따라서 $y \in B$, $x \in A$에 대하여 $(y, x) \in R^{-1}$인 것은 정확히 $(x, y) \in R$일 때이다.

**역함수.** $f : A \to B$가 [[function]]이면 $f$는 $A$에서 $B$로의 관계이므로 역관계 $f^{-1} \subseteq B \times A$가 있다. 이 $f^{-1}$이 $B$에서 $A$로의 함수일 때(여기서 $B$는 $f : A \to B$라고 쓸 때 밝힌 공역이다), $f^{-1} : B \to A$를 $f$의 **역함수**(inverse function)라 한다. ([[bijective-iff-inverse-is-a-function|전단사일 조건을 다루는 항목]]에서, 이것은 $f : A \to B$가 [[injective-surjective-bijective|전단사]]일 때와 정확히 같음을 보인다.) $f$의 역함수가 있으면 다음 두 등식이 성립한다.
$$f^{-1} \circ f = i_A, \qquad f \circ f^{-1} = i_B$$
:::

:::english
**Identity function.** For a set $A$, the **identity function** $i_A : A \to A$ on $A$ is the function with $i_A(x) = x$ for every $x \in A$; that is, $i_A = \{(x, x) : x \in A\}$.

**Inverse relation.** If $R$ is a relation from $A$ to $B$, that is, $R \subseteq A \times B$, the **inverse relation** $R^{-1}$ of $R$ is
$$R^{-1} = \{(y, x) : (x, y) \in R\}.$$
It is a relation from $B$ to $A$, that is, $R^{-1} \subseteq B \times A$. Hence for $y \in B$ and $x \in A$, we have $(y, x) \in R^{-1}$ exactly when $(x, y) \in R$.

**Inverse function.** If $f : A \to B$ is a function, then $f$ is a relation from $A$ to $B$, so it has an inverse relation $f^{-1} \subseteq B \times A$. When this $f^{-1}$ is a function from $B$ to $A$ (here $B$ is the codomain named in the notation $f : A \to B$), we call $f^{-1} : B \to A$ the **inverse function** of $f$. (A later entry shows that this happens exactly when $f : A \to B$ is bijective.) If $f$ has an inverse function, then the following two equations hold.
$$f^{-1} \circ f = i_A, \qquad f \circ f^{-1} = i_B$$
:::

## 직관

학생과 담임의 명단([[function]]의 비유)에서 쌍 (학생, 담임)을 (담임, 학생)으로 뒤집어 적은 명단이 역관계입니다. 명단을 뒤집는 일은 언제든 할 수 있습니다. 그러나 뒤집은 명단이 "각 선생님에게 학생이 정확히 한 명"이라는 함수의 조건을 만족하느냐는 별개의 문제입니다. 한 선생님이 학생 둘을 맡고 있으면 뒤집은 명단에서 그 선생님 옆에 학생이 둘 적히고, 학생을 맡지 않은 선생님은 뒤집은 명단에 아예 나오지 않습니다. 뒤집은 명단이 함수일 때가 역함수입니다.

이 비유에서 맞는 부분은 "화살표를 거꾸로 그린다"는 것입니다. 비유가 놓치는 곳은 표기입니다. 같은 기호 $f^{-1}$이 역관계, 곧 순서쌍의 집합을 가리키기도 하고, 역함수의 값을 읽을 때 $f^{-1}(y)$로도 쓰입니다. $f^{-1}(y)$라고 쓰려면 $f^{-1}$이 함수여야 합니다. 또 [[image-and-preimage|상과 역상]]에서 배울 $f^{-1}(Y)$는 $Y$가 $B$의 부분집합일 때의 다른 뜻이며, 역함수가 없어도 쓸 수 있습니다. 이 세 가지를 구별해서 읽어야 합니다.

두 등식은 "$f$로 보낸 다음 $f^{-1}$로 돌려보내면 처음 자리로 돌아오고, $f^{-1}$로 보낸 다음 $f$로 보내도 그렇다"는 뜻입니다. 항등함수는 아무것도 바꾸지 않는 함수입니다.

:::remark[역관계는 B에서 A로의 관계이다]
$R \subseteq A \times B$이고 $(y, x) \in R^{-1}$이라 하자. 역관계의 정의에 의해 $(x, y) \in R$이고 $R \subseteq A \times B$이므로 $x \in A$이고 $y \in B$이다. 따라서 $(y, x) \in B \times A$이고 $R^{-1} \subseteq B \times A$이다.
:::

:::remark[항등함수는 전단사이다]
$i_A = \{(x, x) : x \in A\}$는 $A \times A$의 부분집합이다. $a \in A$이면 $(a, a) \in i_A$이고, $(a, b) \in i_A$이면 어떤 $x \in A$에 대하여 $(a, b) = (x, x)$이므로 $a = x = b$이다. 따라서 $i_A : A \to A$는 함수이다. $i_A(a) = i_A(a')$이면 $a = a'$이므로 단사이다. $b \in A$이면 $i_A(b) = b$이므로 $i_A : A \to A$는 전사이다. 따라서 전단사이다.
:::

:::remark[두 등식의 증명]
$f : A \to B$이고 $f^{-1}$이 $B$에서 $A$로의 함수라 하자.

$f^{-1} \circ f$: $f : A \to B$, $f^{-1} : B \to A$이므로 [[function-composition]]의 진술에 의해 $f^{-1} \circ f : A \to A$이다. $x \in A$라 하자. $(x, f(x)) \in f$이므로 역관계의 정의에 의해 $(f(x), x) \in f^{-1}$이고, 이는 $f^{-1}(f(x)) = x$를 뜻한다. 따라서 $(f^{-1} \circ f)(x) = f^{-1}(f(x)) = x = i_A(x)$이다. 두 함수는 정의역이 $A$로 같고 모든 $x \in A$에서 값이 같으므로 [[function]]의 진술에 의해 $f^{-1} \circ f = i_A$이다.

$f \circ f^{-1}$: $f^{-1} : B \to A$, $f : A \to B$이므로 $f \circ f^{-1} : B \to B$이다. $y \in B$라 하자. $f^{-1}$이 $B$에서 $A$로의 함수이므로 $f^{-1}(y) = x$인 $x \in A$가 있고, 이는 $(y, x) \in f^{-1}$을 뜻한다. 역관계의 정의에 의해 $(x, y) \in f$이므로 $f(x) = y$이다. 따라서 $(f \circ f^{-1})(y) = f(f^{-1}(y)) = f(x) = y = i_B(y)$이다. 두 함수는 정의역이 $B$로 같고 모든 $y \in B$에서 값이 같으므로 $f \circ f^{-1} = i_B$이다.
:::

## 예시와 반례

:::example[순서쌍으로 적은 역함수]
$A = \{1, 2, 3, 4\}$, $B = \{\text{가}, \text{나}, \text{다}, \text{라}\}$이고 $f = \{(1, \text{다}), (2, \text{가}), (3, \text{라}), (4, \text{나})\}$라 합시다. 가, 나, 다, 라는 서로 다른 대상입니다. 역관계는 $f^{-1} = \{(\text{다}, 1), (\text{가}, 2), (\text{라}, 3), (\text{나}, 4)\}$입니다. 가, 나, 다, 라가 각각 첫째 성분으로 정확히 한 번씩 나오므로 $f^{-1}$은 $B$에서 $A$로의 함수이고, $f^{-1}(\text{가}) = 2$입니다. 두 등식을 확인하면 $(f^{-1} \circ f)(1) = f^{-1}(\text{다}) = 1$, $(f^{-1} \circ f)(2) = f^{-1}(\text{가}) = 2$, $(f^{-1} \circ f)(3) = f^{-1}(\text{라}) = 3$, $(f^{-1} \circ f)(4) = f^{-1}(\text{나}) = 4$이고, $(f \circ f^{-1})(\text{가}) = f(2) = \text{가}$, $(f \circ f^{-1})(\text{나}) = f(4) = \text{나}$, $(f \circ f^{-1})(\text{다}) = f(1) = \text{다}$, $(f \circ f^{-1})(\text{라}) = f(3) = \text{라}$입니다.
:::

:::example[$\mathbb{Z}$ 위의 역함수]
$f : \mathbb{Z} \to \mathbb{Z}$, $f(n) = n + 3$이라 합시다. $(m, n) \in f^{-1}$인 것은 정확히 $(n, m) \in f$일 때, 곧 $m = n + 3$일 때이고, 이는 $n = m - 3$과 같습니다. 따라서 $f^{-1} = \{(m, m - 3) : m \in \mathbb{Z}\}$이고 이것은 $\mathbb{Z}$에서 $\mathbb{Z}$로의 함수 $f^{-1}(m) = m - 3$입니다. 두 등식은 $(f^{-1} \circ f)(n) = (n + 3) - 3 = n$, $(f \circ f^{-1})(m) = (m - 3) + 3 = m$으로 확인됩니다.
:::

:::counterexample[역관계가 함수가 아닌 경우]
$A = \{1, 2, 3\}$, $B = \{\text{가}, \text{나}, \text{다}\}$이고 $g = \{(1, \text{가}), (2, \text{가}), (3, \text{다})\}$는 $A$에서 $B$로의 함수입니다. 역관계는 $g^{-1} = \{(\text{가}, 1), (\text{가}, 2), (\text{다}, 3)\}$인데, 가를 첫째 성분으로 하는 순서쌍이 둘이고 $1 \ne 2$라서 (유일)이 깨지고, 나를 첫째 성분으로 하는 순서쌍이 없어서 (존재)가 깨집니다. 그러므로 $g^{-1}$은 $B$에서 $A$로의 함수가 아니고 $g$는 역함수가 없습니다. 이때에도 $g^{-1}$은 $B$에서 $A$로의 관계로서 존재합니다.
:::

:::counterexample[$f^{-1}$의 값은 역함수가 있을 때만 읽을 수 있다]
$h : \mathbb{Z} \to \mathbb{Z}$, $h(n) = 2n$의 역관계는 $h^{-1} = \{(2n, n) : n \in \mathbb{Z}\}$입니다. $h^{-1}(1)$이라고 쓸 수 없습니다. $(1, x) \in h^{-1}$이려면 $2x = 1$이어야 하는데 그런 정수 $x$가 없기 때문입니다($x \le 0$이면 $2x \le 0$, $x \ge 1$이면 $2x \ge 2$). $h^{-1}$은 $\mathbb{Z}$에서 $\mathbb{Z}$로의 함수가 아닙니다.
:::

## 확인 질문

:::check[$f : \{1, 2, 3\} \to \{\text{가}, \text{나}, \text{다}\}$, $f = \{(1, \text{다}), (2, \text{가}), (3, \text{나})\}$의 역관계를 구하고, 이것이 $\{\text{가}, \text{나}, \text{다}\}$에서 $\{1, 2, 3\}$으로의 함수인지 판단하라.]
$f^{-1} = \{(\text{다}, 1), (\text{가}, 2), (\text{나}, 3)\}$입니다. 가, 나, 다가 각각 첫째 성분으로 정확히 한 번씩 나오므로 함수이고, 역함수입니다.
:::

:::check[$f : \mathbb{Z} \to \mathbb{Z}$, $f(n) = n - 5$의 역함수를 구하고 $(f^{-1} \circ f)(7)$을 계산하라.]
$(m, n) \in f^{-1}$은 $(n, m) \in f$, 곧 $m = n - 5$와 같고 이는 $n = m + 5$입니다. 따라서 $f^{-1}(m) = m + 5$입니다. $(f^{-1} \circ f)(7) = f^{-1}(f(7)) = f^{-1}(2) = 7$입니다.
:::
