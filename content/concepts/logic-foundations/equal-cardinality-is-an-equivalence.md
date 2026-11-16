---
title: 크기가 같다는 관계는 반사적, 대칭적, 추이적이다
title_en: Equal Cardinality Is Reflexive, Symmetric, and Transitive
aliases: [크기가 같다는 관계의 성질, 기수의 같음의 반사 대칭 추이]
kind: theorem
field: logic-foundations
msc: ["03E10"]
level: intro
summary: 모든 집합 A에 대해 |A| = |A|이고, |A| = |B|이면 |B| = |A|이며, |A| = |B|이고 |B| = |C|이면 |A| = |C|이다.
requires: [set, function, injective-surjective-bijective, function-composition, inverse-function, bijective-iff-inverse-is-a-function, composition-preserves-injectivity-and-surjectivity, equal-cardinality, n-and-z-have-equal-cardinality, even-and-odd, prime-number]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 14.1절 Sets with Equal Cardinalities, 'equality of cardinalities is an equivalence relation on sets'로 시작하는 문단, p.273 (이 문단 뒤에서 Example 14.4가 추이성을 쓴다. 같은 내용이 p.274에서 '동치류'를 설명할 때 다시 언급된다.)
    checked: original
    note: "출처는 이 사실을 번호가 붙은 정리로 진술하지 않고, p.273의 본문 한 문단에서 '|A| = |B|는 집합들 위의 동치관계이다. 반사적, 대칭적, 추이적이다'라고 말한 뒤 짧게 확인한다. 출처의 확인은 항등함수가 전단사이고, 전단사의 역함수가 전단사이며, 전단사의 합성이 전단사(Theorem 12.2)라는 것을 쓴다. 아래 증명은 출처 12장에 해당하는 이 사이트 7단원의 항목들(합성은 composition-preserves-injectivity-and-surjectivity, 역함수는 inverse-function과 bijective-iff-inverse-is-a-function)로 직접 쓴 것이고, 출처가 '그 역함수는 전단사이다'를 이유 없이 적는 대목은 이 사이트에서 f⁻¹∘f = i_A, f∘f⁻¹ = i_B로 단사와 전사를 각각 보였다. 출처는 이 관계를 '집합들 위의 동치관계'라고 부르지만, 모든 집합의 모임은 이 강의에서 집합으로 다루지 않으므로(set 항목의 러셀의 역설 언급 참조) 이 항목은 '동치관계이다'라고 진술하지 않고 세 성질을 각각 진술한다. 이 항목은 properties-of-relations 항목의 정의를 인용하지 않고, 반사·대칭·추이는 진술의 세 문장의 이름으로만 쓴다."
status: source-checked
added: 2026-11-16
---

:::statement
임의의 [[set|집합]] $A$, $B$, $C$에 대하여 [[equal-cardinality|크기가 같다는 정의]]의 뜻으로 다음이 성립한다.

1. (반사) $|A| = |A|$이다.
2. (대칭) $|A| = |B|$이면 $|B| = |A|$이다.
3. (추이) $|A| = |B|$이고 $|B| = |C|$이면 $|A| = |C|$이다.
:::

:::english
For any sets $A$, $B$, and $C$, the following hold, with "$|A| = |B|$" understood as in the definition of equal cardinality.

1. (Reflexivity) $|A| = |A|$.
2. (Symmetry) If $|A| = |B|$, then $|B| = |A|$.
3. (Transitivity) If $|A| = |B|$ and $|B| = |C|$, then $|A| = |C|$.
:::

## 직관

"$|A| = |B|$"는 $A$에서 $B$로의 전단사가 있다는 뜻이므로, 위의 세 문장은 전단사를 만드는 세 가지 방법을 말합니다. 가만히 두는 함수는 전단사이고(반사), 전단사를 거꾸로 돌려도 전단사이고(대칭), 전단사 둘을 이어 붙여도 전단사입니다(추이). 짝지어진 손님과 의자의 비유([[equal-cardinality]])로는, 손님을 자기 자신에게 짝짓거나 짝짓기를 반대로 읽거나 두 단계의 짝짓기를 이어서 한 번에 읽어도 일대일 대응이 유지된다는 말입니다.

정의가 $A$에서 $B$로 가는 방향으로만 쓰여 있었기 때문에, 대칭은 당연한 말이 아닙니다. 정의만 보면 $|A| = |B|$는 $A$에서 $B$로의 전단사가 있다는 말이고 $|B| = |A|$는 $B$에서 $A$로의 전단사가 있다는 말입니다. 둘이 서로를 함의하는 것은 역함수 덕분이며, 이 항목이 그것을 확인합니다.

이 세 성질이 있으므로 $|A| = |B|$와 $|B| = |C|$를 보인 뒤 $|A| = |C|$라고 결론지을 수 있습니다. 이 항목은 이 관계를 "동치관계"라고 부르지 않습니다. 동치관계는 집합 하나 위의 관계로 정의했는데, 모든 집합을 한데 모은 모임은 이 강의에서 집합으로 다루지 않기 때문입니다([[set]]의 러셀의 역설 언급). 세 성질을 따로 쓰는 것으로 충분합니다.

## 증명

:::idea
항등함수, 역관계, 합성이 각각 전단사를 준다. 역관계가 전단사인 것은 $f^{-1} \circ f$와 $f \circ f^{-1}$이 항등함수라는 사실로 단사와 전사를 따로 보인다.
:::

:::hint
$|A| = |A|$를 보이려면 $A$에서 $A$로의 전단사가 하나 필요하다. 아무것도 바꾸지 않는 함수를 생각한다.
:::

:::hint
$f : A \to B$가 전단사이면 [[bijective-iff-inverse-is-a-function|전단사일 조건]]에 의해 $f^{-1}$이 $B$에서 $A$로의 함수이다. 이 $f^{-1}$이 단사인지는 $f \circ f^{-1}$을, 전사인지는 $f^{-1} \circ f$를 보면 된다.
:::

:::proof
**(1) 반사.** $A$ 위의 항등함수 $i_A : A \to A$($i_A(x) = x$)를 생각한다([[inverse-function]]). $a, a' \in A$이고 $i_A(a) = i_A(a')$이면 $a = i_A(a) = i_A(a') = a'$이므로 $i_A$는 단사이다. $a \in A$이면 $i_A(a) = a$이므로 $a$는 $i_A$의 값이고, 따라서 $i_A : A \to A$는 전사이다. 그러므로 $i_A$는 $A$에서 $A$로의 전단사이고 $|A| = |A|$이다.

**(2) 대칭.** $|A| = |B|$라 하자. 정의에 의해 전단사 $f : A \to B$가 있다. [[bijective-iff-inverse-is-a-function|전단사일 조건]]에 의해 역관계 $f^{-1}$은 $B$에서 $A$로의 함수 $f^{-1} : B \to A$이다. [[inverse-function]]에 의해 다음 두 등식이 성립한다.
$$f^{-1} \circ f = i_A, \qquad f \circ f^{-1} = i_B$$
[[function-composition]]에 의해 $b \in B$에 대하여 $(f \circ f^{-1})(b) = f(f^{-1}(b))$이고, $a \in A$에 대하여 $(f^{-1} \circ f)(a) = f^{-1}(f(a))$이다. 따라서 모든 $b \in B$에 대하여 $f(f^{-1}(b)) = i_B(b) = b$이고, 모든 $a \in A$에 대하여 $f^{-1}(f(a)) = i_A(a) = a$이다.

$f^{-1} : B \to A$가 단사임을 보인다. $b, b' \in B$이고 $f^{-1}(b) = f^{-1}(b')$라 하자. 그러면 $f$를 적용한 값도 같으므로 $f(f^{-1}(b)) = f(f^{-1}(b'))$이고, 위의 등식에 의해 $b = b'$이다.

$f^{-1} : B \to A$가 전사임을 보인다. $a \in A$라 하자. $b = f(a)$는 $B$의 원소이고, $f^{-1}(b) = f^{-1}(f(a)) = a$이다. 따라서 $f^{-1}(b) = a$인 $b \in B$가 있다.

$f^{-1} : B \to A$는 단사이고 전사이므로 $B$에서 $A$로의 전단사이다. 그러므로 $|B| = |A|$이다.

**(3) 추이.** $|A| = |B|$이고 $|B| = |C|$라 하자. 정의에 의해 전단사 $f : A \to B$와 $g : B \to C$가 있다. [[composition-preserves-injectivity-and-surjectivity|합성 정리]]의 (3)에 의해 합성 $g \circ f : A \to C$는 전단사이다. 그러므로 $|A| = |C|$이다.
:::

## 예시와 반례

:::example[전단사를 뒤집고 이어 붙이기]
$A = \{1, 2\}$, $B = \{\text{가}, \text{나}\}$, $C = \{5, 6\}$이고 $f = \{(1, \text{나}), (2, \text{가})\}$, $g = \{(\text{가}, 5), (\text{나}, 6)\}$이라 합시다. $f : A \to B$와 $g : B \to C$는 각각 값이 서로 다르고 공역의 원소가 모두 값으로 나오므로 전단사입니다.

역관계는 $f^{-1} = \{(\text{나}, 1), (\text{가}, 2)\}$이고 $f^{-1}(\text{가}) = 2$, $f^{-1}(\text{나}) = 1$입니다. 증명대로 $f(f^{-1}(\text{가})) = f(2) = \text{가}$, $f(f^{-1}(\text{나})) = f(1) = \text{나}$이고 $f^{-1}(f(1)) = f^{-1}(\text{나}) = 1$, $f^{-1}(f(2)) = f^{-1}(\text{가}) = 2$입니다. $f^{-1}$의 값 $2, 1$이 서로 다르고 $A$의 원소 $1, 2$가 모두 나오므로 $f^{-1} : B \to A$는 전단사입니다.

합성은 $(g \circ f)(1) = g(\text{나}) = 6$, $(g \circ f)(2) = g(\text{가}) = 5$이고 값 $6, 5$가 서로 다르며 $C$의 원소가 모두 나오므로 $g \circ f : A \to C$는 전단사입니다. 이렇게 $|A| = |B|$, $|B| = |A|$, $|B| = |C|$, $|A| = |C|$가 모두 확인됩니다.
:::

:::example[무한집합에서]
$E = \{n \in \mathbb{N} : n \text{은 짝수}\}$라 하고 $f(n) = 2n$으로 정한 $f : \mathbb{N} \to E$를 봅시다. $n \ge 1$이므로 (Z3)에 의해 $2n \ge 2$이고 $2n = 2 \cdot n$은 짝수이므로 $f(n) \in E$입니다. $f$는 단사입니다($2a = 2a'$이면 $a = a'$). 또 전사입니다. $e \in E$이면 $e = 2k$인 정수 $k$가 있고, $k \le 0$이면 [[prime-number|소수]] 항목의 진술의 (Z3)에 의해 $e = 2k \le 0$이어서 $e \ge 1$에 모순이므로 $k > 0$이고 (Z1)에 의해 $k \ge 1$입니다. 따라서 $k \in \mathbb{N}$이고 $f(k) = e$입니다. 따라서 $|\mathbb{N}| = |E|$입니다. 대칭에 의해 $|E| = |\mathbb{N}|$이고, $E$에서 $\mathbb{N}$으로의 전단사는 역관계 $f^{-1}$로 주어집니다. $f^{-1}(2) = 1$, $f^{-1}(4) = 2$, $f^{-1}(6) = 3$이므로 $f^{-1}(e) = e/2$ 꼴입니다. $f(n) = 2n = e$이면 $n = e/2$이기 때문입니다.
:::

:::counterexample[전단사가 아닌 함수는 뒤집지 못한다]
대칭의 증명은 전단사 $f$의 역관계가 함수라는 사실에 기댑니다. 전단사가 아닌 함수는 뒤집을 수 없습니다. $A = \{1, 2\}$, $B = \{\text{가}, \text{나}\}$이고 $f = \{(1, \text{가}), (2, \text{가})\}$라 하면 $f : A \to B$는 $f(1) = f(2)$이므로 단사가 아닙니다. 역관계 $f^{-1} = \{(\text{가}, 1), (\text{가}, 2)\}$는 가에 두 값이 있고 나에는 값이 없으므로 $B$에서 $A$로의 함수가 아닙니다. 그래도 $|A| = |B|$입니다. 전단사 $\{(1, \text{가}), (2, \text{나})\}$가 따로 있기 때문입니다. 곧 $|A| = |B|$인 것과 임의의 함수 $f : A \to B$를 뒤집을 수 있는 것은 다른 문제이고, 대칭은 "전단사 하나를 골라 그것을 뒤집는다"로 증명됩니다.
:::

## 확인 질문

:::check[$|\mathbb{N}| = |\mathbb{Z}|$이고 $|\mathbb{Z}| = |\mathbb{N}|$인가? 같은 내용인가?]
$|\mathbb{N}| = |\mathbb{Z}|$는 $\mathbb{N}$에서 $\mathbb{Z}$로의 전단사가 있다는 뜻이고 $|\mathbb{Z}| = |\mathbb{N}|$은 $\mathbb{Z}$에서 $\mathbb{N}$으로의 전단사가 있다는 뜻으로, 정의의 글자로는 다른 문장입니다. 이 항목의 대칭에 의해 한쪽이 성립하면 다른 쪽도 성립합니다. [[n-and-z-have-equal-cardinality|앞의 정리]]에 의해 전단사 $f : \mathbb{N} \to \mathbb{Z}$가 있으므로 $f^{-1} : \mathbb{Z} \to \mathbb{N}$이 전단사이고 $|\mathbb{Z}| = |\mathbb{N}|$입니다.
:::

:::check[$|A| = |B|$이고 $|C| = |B|$이면 $|A| = |C|$인가?]
그렇습니다. $|C| = |B|$에 대칭을 적용하면 $|B| = |C|$입니다. 그러면 $|A| = |B|$와 $|B| = |C|$에 추이를 적용해 $|A| = |C|$입니다.
:::
