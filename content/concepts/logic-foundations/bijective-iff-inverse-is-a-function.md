---
title: "전단사일 조건: 역관계가 함수이다"
title_en: A Function Is Bijective Exactly When Its Inverse Relation Is a Function
aliases: [전단사와 역함수, 역함수의 존재 조건, 역함수가 존재할 조건]
kind: theorem
field: logic-foundations
msc: ["03E20"]
level: intro
summary: "f : A → B가 전단사인 것은 정확히 역관계 f⁻¹이 B에서 A로의 함수일 때이다."
requires: [function, injective-surjective-bijective, inverse-function]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 12.5절 Inverse Functions, Theorem 12.3, p.240 (동기가 되는 예와 설명은 pp.239–240)
    checked: original
    note: "출처 Theorem 12.3의 진술은 'f : A → B가 함수일 때 f가 전단사인 것은 역관계 f⁻¹이 B에서 A로의 함수일 때 그리고 그때에 한한다'이다. 출처는 이 정리의 증명을 싣지 않는다. 정리 앞의 두 문단(pp.239–240)에서 예 g로 '단사가 아니면 역관계가 함수가 될 수 없고, 전사가 아니면 첫째 성분이 없는 원소가 생긴다'는 필요성을 설명하고 'this is easy to verify', '충분성은 easily seen'이라고 말할 뿐이며 연습문제 12.5절에도 이 증명은 없다. 아래 증명은 두 방향 모두 이 사이트에서 직접 쓴 것이다. 필요성(단사가 아니면, 전사가 아니면)을 설명하는 출처의 예 g의 발상은 아래 반례들과 같고 집합은 새로 골랐다. 단사만으로는 역관계가 치역에서 A로의 함수가 된다는 '단사만 있으면 치역에서 A로의 함수가 된다' 블록과 그 증명은 출처에 없고 이 사이트에서 덧붙였다. 예시, 반례, 확인 질문은 모두 새로 만들었다."
status: reviewed
review_note: "2026-11-16 독립 검토 4회. 수학적 오류 없음. 공역의 지위(선언에 따른 것)를 명확히 하고 출처에서 가져온 예를 교체, 링크 표시말 정리."
added: 2026-11-16
---

:::statement
$f : A \to B$가 [[function]]라 하자. 곧 $B$는 $f$의 선언한 공역이다. 그러면 $f : A \to B$가 전단사인 것은 정확히 [[inverse-function|역관계와 역함수]]에서 정의한 역관계 $f^{-1} = \{(y, x) : (x, y) \in f\}$가 $B$에서 $A$로의 함수일 때이다.
:::

:::english
Let $f : A \to B$ be a function, where $B$ is the declared codomain of $f$. Then $f : A \to B$ is bijective exactly when the inverse relation $f^{-1} = \{(y, x) : (x, y) \in f\}$, as defined for inverse functions, is a function from $B$ to $A$.
:::

## 직관

뒤집은 명단이 함수가 되려면 두 가지가 필요합니다. 뒤집은 명단에 모든 원소 $y \in B$가 첫째 성분으로 나와야 하고, 각 $y$ 옆에 적힌 것이 많아야 하나여야 합니다. 첫째 조건은 "$B$의 모든 원소가 $f$의 값이다"이므로 전사이고, 둘째 조건은 "$B$의 한 원소에 $f$로 오는 $A$의 원소가 많아야 하나이다"이므로 단사입니다. 그래서 두 조건이 정확히 전단사를 이룹니다.

이 대응에서 비유가 놓치는 곳은 공역입니다. 전사는 선언한 공역 $B$에 대한 성질이므로, 정리는 $f : A \to B$라고 공역 $B$를 밝혀서 말합니다. 단사만 있으면 어떻게 되는지는 아래 반례에 있습니다.

## 증명

:::idea
$f^{-1}$이 $B$에서 $A$로의 함수가 되는 조건은 (존재)와 (유일)이다. (존재)는 전사의 정의와, (유일)은 단사의 동치 꼴과 같은 내용임을 순서쌍을 뒤집어 확인한다.
:::

:::hint
$f^{-1}$이 $B$에서 $A$로의 함수라는 말은 [[function]]의 정의로 풀면 무엇인가? $y \in B$마다 무엇을 보여야 하는가?
:::

:::hint
$(y, x) \in f^{-1}$은 정확히 $(x, y) \in f$, 곧 $f(x) = y$이다. 존재 조건은 전사의 정의와, 유일 조건은 단사의 동치 꼴과 비교해 보자.
:::

:::proof
먼저 $f^{-1} \subseteq B \times A$임을 확인한다. $(y, x) \in f^{-1}$이면 역관계의 정의에 의해 $(x, y) \in f \subseteq A \times B$이므로 $x \in A$이고 $y \in B$이다. 따라서 $f^{-1}$은 $B$에서 $A$로의 관계이고, [[function]]의 정의에 의해 $f^{-1}$이 $B$에서 $A$로의 함수인 것은 정확히 모든 $y \in B$에 대하여 (존재) $(y, x) \in f^{-1}$인 $x \in A$가 있고, (유일) $x, x' \in A$이고 $(y, x) \in f^{-1}$, $(y, x') \in f^{-1}$이면 $x = x'$일 때이다. 이하 $(y, x) \in f^{-1}$은 정확히 $(x, y) \in f$, 곧 $f(x) = y$라는 것을 쓴다.

**($\Rightarrow$) $f : A \to B$가 전단사이면 $f^{-1}$은 $B$에서 $A$로의 함수이다.** $y \in B$라 하자.

(존재) $f : A \to B$가 전사이므로 $f(x) = y$인 $x \in A$가 있다. $(x, y) \in f$이므로 $(y, x) \in f^{-1}$이다.

(유일) $x, x' \in A$이고 $(y, x) \in f^{-1}$, $(y, x') \in f^{-1}$이라 하자. 그러면 $f(x) = y$이고 $f(x') = y$이므로 $f(x) = f(x')$이다. $f$가 단사이므로 [[injective-surjective-bijective|단사]]의 동치 꼴에 의해 $x = x'$이다.

**($\Leftarrow$) $f^{-1}$이 $B$에서 $A$로의 함수이면 $f : A \to B$는 전단사이다.**

단사: $a, a' \in A$이고 $f(a) = f(a')$라 하고 이 값을 $b$라 하자. $b \in B$이고 $(a, b) \in f$, $(a', b) \in f$이므로 $(b, a) \in f^{-1}$이고 $(b, a') \in f^{-1}$이다. $f^{-1}$이 함수이므로 (유일)에 의해 $a = a'$이다. 따라서 단사의 동치 꼴에 의해 $f$는 단사이다.

전사: $b \in B$라 하자. $f^{-1}$이 $B$에서 $A$로의 함수이므로 (존재)에 의해 $(b, x) \in f^{-1}$인 $x \in A$가 있다. 그러면 $(x, b) \in f$이므로 $f(x) = b$이다. 따라서 모든 $b \in B$에 대하여 $f(a) = b$인 $a \in A$가 있고, $f : A \to B$는 전사이다.

단사이고 $f : A \to B$가 전사이므로 $f : A \to B$는 전단사이다. $\blacksquare$
:::

:::remark[단사만 있으면 치역에서 $A$로의 함수가 된다]
$f : A \to B$가 단사이고 $V = \{f(a) : a \in A\}$가 $f$의 치역이면, [[function]]의 진술에 의해 같은 집합 $f$는 $A$에서 $V$로의 함수이기도 하다. $f : A \to V$는 단사이고(단사는 공역과 무관하다), $V$의 원소는 정의에 의해 모두 어떤 $f(a)$이므로 전사이다. 따라서 위 정리에 의해 $f^{-1}$은 $V$에서 $A$로의 함수이다. 그러나 $V \ne B$이면 $f^{-1}$은 $B$에서 $A$로의 함수가 아니다. $B$의 원소 $b \notin V$은 $f^{-1}$의 순서쌍의 첫째 성분으로 나오지 않기 때문이다.
:::

## 예시와 반례

:::example[전단사의 역관계]
$f : \{1, 2, 3, 4\} \to \{\text{가}, \text{나}, \text{다}, \text{라}\}$, $f = \{(1, \text{다}), (2, \text{가}), (3, \text{라}), (4, \text{나})\}$는 단사이고(값 다, 가, 라, 나가 서로 다르다) 전사입니다(가, 나, 다, 라가 모두 값이다). 역관계 $f^{-1} = \{(\text{다}, 1), (\text{가}, 2), (\text{라}, 3), (\text{나}, 4)\}$는 $\{\text{가}, \text{나}, \text{다}, \text{라}\}$의 각 원소가 첫째 성분으로 정확히 한 번씩 나오므로 함수입니다. 가, 나, 다, 라는 서로 다른 대상입니다.
:::

:::example[$\mathbb{Z}$ 위의 전단사]
$f : \mathbb{Z} \to \mathbb{Z}$, $f(n) = n + 3$은 전단사이므로($f(a) = f(a')$이면 $a = a'$, 그리고 $b \in \mathbb{Z}$에 대하여 $f(b - 3) = b$), 정리에 의해 $f^{-1}$이 $\mathbb{Z}$에서 $\mathbb{Z}$로의 함수입니다. 실제로 $f^{-1} = \{(m, m - 3) : m \in \mathbb{Z}\}$입니다.
:::

:::counterexample[단사이지만 전사가 아닌 경우]
$h : \mathbb{Z} \to \mathbb{Z}$, $h(n) = 2n$은 단사입니다($2a = 2a'$이면 $a = a'$). 그러나 $h : \mathbb{Z} \to \mathbb{Z}$는 전사가 아니므로($h(a) = 1$인 정수 $a$가 없다. $a \le 0$이면 $2a \le 0$이고 $a \ge 1$이면 $2a \ge 2$이기 때문이다) 정리에 의해 $h^{-1} = \{(2n, n) : n \in \mathbb{Z}\}$는 $\mathbb{Z}$에서 $\mathbb{Z}$로의 함수가 아닙니다. 첫째 성분 $1$을 갖는 순서쌍이 없어서 (존재)가 깨집니다. 단사만으로는 부족합니다. 같은 집합 $h$를 공역 $\{2n : n \in \mathbb{Z}\}$의 함수로 보면 전단사이고, 그 역관계 $h^{-1}$은 $\{2n : n \in \mathbb{Z}\}$에서 $\mathbb{Z}$로의 함수입니다.
:::

:::counterexample[전사이지만 단사가 아닌 경우]
$g : \{1, 2, 3\} \to \{\text{가}, \text{나}\}$, $g = \{(1, \text{가}), (2, \text{나}), (3, \text{가})\}$는 전사입니다. 그러나 $1 \ne 3$이고 $g(1) = g(3) = \text{가}$라서 단사가 아니므로, $g^{-1} = \{(\text{가}, 1), (\text{나}, 2), (\text{가}, 3)\}$은 (유일)이 깨져 함수가 아닙니다. 전사만으로도 부족합니다.
:::

## 확인 질문

:::check[$f : \{1, 2, 3\} \to \{\text{가}, \text{나}, \text{다}\}$, $f = \{(1, \text{가}), (2, \text{가}), (3, \text{나})\}$의 역관계는 함수인가? 왜 그런가?]
$f^{-1} = \{(\text{가}, 1), (\text{가}, 2), (\text{나}, 3)\}$입니다. 가를 첫째 성분으로 하는 순서쌍이 둘이고, 다를 첫째 성분으로 하는 순서쌍이 없으므로 함수가 아닙니다. 정리의 관점에서는 $f$가 단사도 전사도 아니기 때문입니다.
:::

:::check[$f : \mathbb{Z} \to \mathbb{Z}$, $f(n) = 3n$의 역관계는 $\mathbb{Z}$에서 $\mathbb{Z}$로의 함수인가?]
아닙니다. $f$는 단사이지만 전사가 아닙니다. $3a = 1$인 정수 $a$가 없기 때문입니다($a \le 0$이면 $3a \le 0$, $a \ge 1$이면 $3a \ge 3$). 따라서 정리에 의해 $f^{-1}$은 $\mathbb{Z}$에서 $\mathbb{Z}$로의 함수가 아닙니다.
:::
