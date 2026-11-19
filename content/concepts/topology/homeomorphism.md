---
title: 위상동형사상
title_en: Homeomorphism
aliases: [위상동형, 위상동형이다, 위상 동형, homeomorphism, homeomorphic, 열린 사상, 닫힌 사상, open map, closed map]
kind: definition
field: topology
msc: ["54C05", "54C10"]
level: undergrad
summary: 전단사 함수 f 와 그 역함수가 모두 연속이면 위상동형사상이라 하고, 열린집합의 상이 늘 열려 있는 함수를 열린 사상, 닫힌집합의 상이 늘 닫혀 있는 함수를 닫힌 사상이라 한다. 전단사에서는 역함수의 연속, 열린 사상, 닫힌 사상이 같은 말이고, 위상동형사상은 열린집합끼리를 짝짓는다. 항등함수, 역함수, 합성이 위상동형사상이라는 것, 연속인 전단사이지만 위상동형사상이 아닌 예, 서로 거꾸로인 두 연속함수가 위상동형사상을 준다는 것을 보인다.
requires: [set, subset, set-operations, cartesian-product, function, injective-surjective-bijective, inverse-function, bijective-iff-inverse-is-a-function, function-composition, composition-preserves-injectivity-and-surjectivity, image-and-preimage, preimage-and-set-operations, topological-space, topology-examples, closed-set, continuous-map]
sources:
  - ref: fuglede-basic-topology
    loc: "Homeomorphisms 절의 정의와 그 뒤 문단, content/homeomorphisms.tex:14–17; Topological invariants 절의 첫 문단, content/homeomorphisms.tex:63; 예 not-quotient-map, content/homeomorphisms.tex:141–146"
    checked: original
    note: "정의와 기호 X ≃ Y 는 출처(14–16)와 같다. 출처는 그 뒤 문단(17)에서, 전단사 f 는 f = (f⁻¹)⁻¹ 을 만족하므로 위상동형사상을 'U 가 열려 있을 때마다 f(U) 가 열려 있는 연속인 전단사'로 정의해도 같다고 적고, ≃ 가 동치관계의 성질을 갖는다고 적는다. 둘 다 증명은 없다. (1)의 (a)와 (b)가 같다는 것이 앞 문장에 해당하고, (3)은 뒤 문장을 반사·대칭·추이의 세 문장으로 쓴 것이다. '열린 사상'과 '닫힌 사상'이라는 용어는 출처 본문에서 정의되지 않는다. 출처는 연습문제 3.8(a)(content/exercises.tex:116)에서 사영이 'closed, i.e. that images of closed sets are closed' 라고 괄호로 풀어 쓴다. (4)의 둘째 문장은 출처 63행이 X = {a, b} 에 밀착위상과 이산위상을 주면 서로 다른(위상동형이 아닌) 위상공간이 된다고 적는 것과 같은 대상이다. 출처 63행은 그 까닭을 적지 않는다. (4)의 첫째 문장에서 열린집합의 상이 열려 있지 않음을 보여 위상동형사상이 아님을 보이는 것은 출처의 예 not-quotient-map(141–146)이 연속인 전단사 [0, 1) → S¹ 에서 쓰는 논법과 같은 발상이다. 출처는 Theorem funcs-compact 의 증명(content/compactness.tex:62)에서도 전단사 f 의 역함수가 연속임을 보이려고 열린 U 마다 f(U) 가 열려 있음을 보이고, 그 과정에서 f(U)ᶜ = f(Uᶜ) 를 쓴다. 이것은 (1)의 (a)와 (b), (b)와 (c)를 잇는 것과 같은 내용이다. 예시 '세 점 공간에서 자기 자신으로'는 출처 절 첫머리의 예(3–8, 20: 세 점 공간 {1, 2, 3} 과 {4, 5, 6} 사이의 전단사가 위상동형사상이다)처럼 세 점 공간 사이의 전단사가 열린집합을 열린집합으로 보내는지 확인하는 같은 발상이다(위상과 함수는 다르다). 반례 '같은 집합 위의 두 위상이 위상동형이 아닌 경우'는 63행과 같은 종류의 결론(같은 집합에 다른 위상을 주면 위상동형이 아닐 수 있다)을 세 점 집합의 다른 두 위상에서 보인 것이다. (5)는 출처의 예들(22–28 의 (−1, 1) → ℝ, 36–53 의 B(0, 1) → ℝⁿ)이 역함수를 식으로 적어 위상동형사상이라 할 때 증명 없이 쓰는 사실을 진술로 올린 것이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 경계 경우에서 거짓이던 반례 제목과 단원 글 문장, 인용 번호를 고쳤다."
added: 2026-11-19
---

:::statement
위상공간과 열린집합은 [[topological-space]]의 것이고, 닫힌집합은 [[closed-set]]의 것이며, 이산위상과 밀착위상은 [[topology-examples]]의 것이다. 연속은 [[continuous-map|위상공간 사이의 연속함수]]의 것이고, 전단사는 [[injective-surjective-bijective|단사, 전사, 전단사]]의 것이며, 역함수와 항등함수는 [[inverse-function|역관계와 역함수]]의 것이다. 아래에서 $(X, \mathcal{T}_X)$, $(Y, \mathcal{T}_Y)$, $(Z, \mathcal{T}_Z)$는 위상공간이고, $f : X \to Y$에서 $Y$는 선언한 공역이다.

**위상동형사상.** $f : X \to Y$가 **위상동형사상**(homeomorphism)인 것은 정확히 $f : X \to Y$가 전단사이고, $f$가 연속이며, $f$의 역함수 $f^{-1} : Y \to X$도 연속일 때이다. ($f$가 전단사이면 [[bijective-iff-inverse-is-a-function|전단사일 조건]]에 의해 역함수가 있다.) $X$에서 $Y$로의 위상동형사상이 있을 때 "$X$와 $Y$는 **위상동형**(homeomorphic)이다"라 하고 $X \simeq Y$로 쓴다. 이 기호는 군과 환의 동형을 나타내는 $\cong$와 다른 기호이다.

**열린 사상과 닫힌 사상.** 함수 $f : X \to Y$가 **열린 사상**(open map)인 것은 정확히 $X$의 모든 열린집합 $U$에 대하여 상 $f(U)$가 $Y$에서 열린집합일 때이다. $f$가 **닫힌 사상**(closed map)인 것은 정확히 $X$의 모든 닫힌집합 $F$에 대하여 $f(F)$가 $Y$에서 닫힌집합일 때이다. 두 정의는 전단사도 연속도 요구하지 않는다.

다음이 성립한다.

1. (역함수의 연속) $f : X \to Y$가 전단사이고 $g : Y \to X$가 그 역함수이면 다음 셋은 서로 같은 말이다.
   - (a) $g$는 연속이다.
   - (b) $f$는 열린 사상이다.
   - (c) $f$는 닫힌 사상이다.

   따라서 $f$가 연속인 전단사이면, $f$가 위상동형사상인 것은 정확히 $f$가 열린 사상일 때이고, 또 정확히 $f$가 닫힌 사상일 때이다.
2. (열린집합끼리의 짝) $f : X \to Y$가 위상동형사상이면 다음이 성립한다.
   - (i) $U \subseteq X$에 대하여 $U$가 $X$에서 열린집합인 것은 정확히 $f(U)$가 $Y$에서 열린집합일 때이다. 또 $F \subseteq X$에 대하여 $F$가 $X$에서 닫힌집합인 것은 정확히 $f(F)$가 $Y$에서 닫힌집합일 때이다.
   - (ii) $U \subseteq X$이면 $f^{-1}(f(U)) = U$이고, $V \subseteq Y$이면 $f(f^{-1}(V)) = V$이다(여기서 $f^{-1}(\cdot)$은 역상이다).
   - (iii) $\mathcal{T}_X$의 각 원소 $U$에 $f(U)$를 대응시키는 관계 $\varphi = \{(U, W) \in \mathcal{T}_X \times \mathcal{T}_Y : W = f(U)\}$는 함수 $\varphi : \mathcal{T}_X \to \mathcal{T}_Y$이고 전단사이다.
3. (항등함수, 역함수, 합성)
   - (i) 항등함수 $i_X : (X, \mathcal{T}_X) \to (X, \mathcal{T}_X)$는 위상동형사상이다. 따라서 $X \simeq X$이다.
   - (ii) $f : X \to Y$가 위상동형사상이면 그 역함수 $f^{-1} : Y \to X$도 위상동형사상이고, $f^{-1}$의 역함수는 $f$이다. 따라서 $X \simeq Y$이면 $Y \simeq X$이다.
   - (iii) $f : X \to Y$와 $h : Y \to Z$가 위상동형사상이면 합성 $h \circ f : X \to Z$도 위상동형사상이다. 따라서 $X \simeq Y$이고 $Y \simeq Z$이면 $X \simeq Z$이다.
4. (연속인 전단사이지만 위상동형사상이 아닌 것) $X$에 서로 다른 두 점 $a$, $b$가 있으면, 항등함수 $i_X : (X, \mathscr{P}(X)) \to (X, \{\emptyset, X\})$는 연속인 전단사이지만 위상동형사상이 아니다. 또 $(X, \mathscr{P}(X))$에서 $(X, \{\emptyset, X\})$로의 위상동형사상은 없다. 곧 이산위상을 준 $X$와 밀착위상을 준 $X$는 위상동형이 아니다.
5. (서로 거꾸로인 두 함수) $f : X \to Y$와 $g : Y \to X$가 함수이고 $g \circ f = i_X$, $f \circ g = i_Y$이면, $f : X \to Y$는 전단사이고 $g$는 $f$의 역함수이다. 따라서 이때 $f$와 $g$가 모두 연속이면 $f$는 위상동형사상이다.
:::

:::english
Topological spaces and open sets, closed sets, and the discrete and indiscrete topologies are as in the earlier entries. Continuity is as in the entry on continuous maps between topological spaces, bijectivity as before, and inverse and identity functions as before. Throughout, $(X, \mathcal{T}_X)$, $(Y, \mathcal{T}_Y)$ and $(Z, \mathcal{T}_Z)$ are topological spaces, and in $f : X \to Y$ the set $Y$ is the declared codomain.

**Homeomorphisms.** A map $f : X \to Y$ is a **homeomorphism** exactly when $f : X \to Y$ is bijective, $f$ is continuous, and the inverse function $f^{-1} : Y \to X$ is also continuous. (If $f$ is bijective, it has an inverse function.) When there is a homeomorphism from $X$ to $Y$, we say that $X$ and $Y$ are **homeomorphic** and write $X \simeq Y$. This symbol is different from the symbol $\cong$ used for isomorphisms of groups and rings.

**Open and closed maps.** A function $f : X \to Y$ is an **open map** exactly when, for every open set $U$ of $X$, the image $f(U)$ is open in $Y$. It is a **closed map** exactly when, for every closed set $F$ of $X$, the image $f(F)$ is closed in $Y$. Neither definition requires bijectivity or continuity.

The following hold.

1. (Continuity of the inverse) If $f : X \to Y$ is bijective and $g : Y \to X$ is its inverse function, the following three statements are equivalent.
   - (a) $g$ is continuous.
   - (b) $f$ is an open map.
   - (c) $f$ is a closed map.

   Hence, if $f$ is a continuous bijection, then $f$ is a homeomorphism exactly when $f$ is an open map, and also exactly when $f$ is a closed map.
2. (Matching of open sets) If $f : X \to Y$ is a homeomorphism, then:
   - (i) For $U \subseteq X$, $U$ is open in $X$ exactly when $f(U)$ is open in $Y$. Likewise, for $F \subseteq X$, $F$ is closed in $X$ exactly when $f(F)$ is closed in $Y$.
   - (ii) If $U \subseteq X$, then $f^{-1}(f(U)) = U$, and if $V \subseteq Y$, then $f(f^{-1}(V)) = V$ (here $f^{-1}(\cdot)$ is a preimage).
   - (iii) The relation $\varphi = \{(U, W) \in \mathcal{T}_X \times \mathcal{T}_Y : W = f(U)\}$, which assigns $f(U)$ to each element $U$ of $\mathcal{T}_X$, is a function $\varphi : \mathcal{T}_X \to \mathcal{T}_Y$ and is bijective.
3. (Identity, inverse, composition)
   - (i) The identity $i_X : (X, \mathcal{T}_X) \to (X, \mathcal{T}_X)$ is a homeomorphism. Hence $X \simeq X$.
   - (ii) If $f : X \to Y$ is a homeomorphism, then its inverse function $f^{-1} : Y \to X$ is also a homeomorphism, and the inverse function of $f^{-1}$ is $f$. Hence $X \simeq Y$ implies $Y \simeq X$.
   - (iii) If $f : X \to Y$ and $h : Y \to Z$ are homeomorphisms, then the composite $h \circ f : X \to Z$ is a homeomorphism. Hence $X \simeq Y$ and $Y \simeq Z$ imply $X \simeq Z$.
4. (A continuous bijection that is not a homeomorphism) If $X$ has two distinct points $a$ and $b$, then the identity $i_X : (X, \mathscr{P}(X)) \to (X, \{\emptyset, X\})$ is a continuous bijection but not a homeomorphism. Moreover, there is no homeomorphism from $(X, \mathscr{P}(X))$ to $(X, \{\emptyset, X\})$; that is, $X$ with the discrete topology and $X$ with the indiscrete topology are not homeomorphic.
5. (Two mutually inverse functions) If $f : X \to Y$ and $g : Y \to X$ are functions with $g \circ f = i_X$ and $f \circ g = i_Y$, then $f : X \to Y$ is bijective and $g$ is the inverse function of $f$. Hence, if moreover $f$ and $g$ are both continuous, then $f$ is a homeomorphism.
:::

## 직관

위상동형사상은 두 공간의 점을 하나씩 짝지으면서 열린집합도 열린집합끼리 짝짓는 함수입니다((2)). 점마다 이름표를 바꿔 붙이는 것에 빗댈 수 있습니다. 이름표만 바뀌고 "어느 점들의 모임이 열린집합인가"라는 목록은 그대로 옮겨 가므로, 예컨대 한쪽에서 모든 부분집합이 열린집합이면 다른 쪽에서도 그렇습니다. 전단사가 "점을 하나씩 짝짓기"에, $f$와 역함수의 연속이 "열린집합의 목록이 양쪽으로 옮겨 가기"에 해당합니다.

연속인 전단사만으로는 모자랍니다. $f$의 연속은 $Y$의 열린집합이 $X$로 거꾸로 옮겨 가 열린집합이 된다는 것뿐이고, $X$에 열린집합이 더 많으면 그것들은 $Y$로 옮겨 가지 못할 수 있습니다. (4)가 그런 예입니다. 이산위상에서 밀착위상으로 가는 항등함수는 점을 짝짓지만, $\{a\}$ 같은 열린집합은 밀착위상에서 열린집합이 아닙니다.

(1)에서 역함수의 연속을 열린 사상으로 바꿀 수 있는 까닭은, 전단사 $f$에서는 역함수에 의한 역상이 $f$에 의한 상과 같기 때문입니다([[preimage-and-set-operations|역상과 집합의 연산]]의 (6)). 열린 사상과 닫힌 사상이 같아지는 것도 전단사이기 때문이고, 전단사가 아닌 함수에서는 둘이 다를 수 있습니다(아래 반례).

## 성질의 증명

:::proof
역상과 상의 성질은 [[preimage-and-set-operations|역상과 집합의 연산]]의 것이고, 닫힌집합의 (5)는 [[closed-set]]의 (5)이다. 연속인 것은 [[continuous-map|위상공간 사이의 연속함수]]의 정의대로 모든 열린집합의 역상이 열려 있다는 것이다.

**(1).** [[preimage-and-set-operations]]의 (6)의 (i)에 의해 모든 $U \subseteq X$에서 $g^{-1}(U) = f(U)$이다. 또 그 (6)의 (iii)에 의해 모든 $U \subseteq X$에서 $f(X - U) = Y - f(U)$이다. 이것을 (가)라 부른다.

(a)와 (b). $g$가 연속인 것은 정확히 모든 $U \in \mathcal{T}_X$에서 $g^{-1}(U) \in \mathcal{T}_Y$일 때이다. $g^{-1}(U) = f(U)$이므로 이것은 정확히 모든 $U \in \mathcal{T}_X$에서 $f(U) \in \mathcal{T}_Y$일 때, 곧 $f$가 열린 사상일 때이다.

(b)에서 (c). $f$가 열린 사상이고 $F$가 $X$의 닫힌집합이라 하자. 닫힌집합의 정의에 의해 $X - F$는 열린집합이므로 $f(X - F)$는 $Y$에서 열린집합이다. (가)에 의해 $Y - f(F) = f(X - F)$는 열린집합이고, $f(F) \subseteq Y$이므로 닫힌집합의 정의에 의해 $f(F)$는 $Y$에서 닫힌집합이다.

(c)에서 (b). $f$가 닫힌 사상이고 $U$가 $X$의 열린집합이라 하자. 닫힌집합의 (5)에 의해 $X - U$는 닫힌집합이므로 $f(X - U)$는 $Y$에서 닫힌집합이다. (가)에 의해 $Y - f(U)$가 닫힌집합이고, $f(U) \subseteq Y$이므로 닫힌집합의 (5)에 의해 $f(U)$는 $Y$에서 열린집합이다.

끝 문장. $f$가 연속인 전단사이면, 위상동형사상의 정의에서 남은 조건은 (a)이고, 이것은 (b)와도 (c)와도 같은 말이다.

**(2).** $f$가 위상동형사상이고 $g$가 그 역함수라 하자. $f$는 연속이고, (1)에 의해 열린 사상이고 닫힌 사상이다.

(ii) [[preimage-and-set-operations]]의 (6)의 (ii)에 의해 $f^{-1}(f(U)) = g(f(U))$이고, 그 (4)의 둘째 등식에 의해 $g(f(U)) = (g \circ f)(U)$이다. [[inverse-function|역관계와 역함수]]의 진술에 의해 $g \circ f = i_X$이고, $i_X(U) = \{i_X(x) : x \in U\} = \{x : x \in U\} = U$이다. 따라서 $f^{-1}(f(U)) = U$이다. 같은 방식으로 $f(f^{-1}(V)) = f(g(V)) = (f \circ g)(V) = i_Y(V) = V$이다.

(i) $U$가 열린집합이면 $f$가 열린 사상이므로 $f(U)$는 열린집합이다. 거꾸로 $f(U)$가 열린집합이면 $f$가 연속이므로 $f^{-1}(f(U))$가 열린집합이고, (ii)에 의해 이것은 $U$이다. 닫힌집합에 대하여, $F$가 닫힌집합이면 $f$가 닫힌 사상이므로 $f(F)$는 닫힌집합이다. 거꾸로 $f(F)$가 닫힌집합이면 $Y - f(F)$가 열린집합이고, (1)의 (가)에 의해 이것은 $f(X - F)$이다. 앞의 문장에 의해 $X - F$는 열린집합이고, $F \subseteq X$이므로 $F$는 닫힌집합이다.

(iii) $U \in \mathcal{T}_X$이면 (i)에 의해 $f(U) \in \mathcal{T}_Y$이므로 $(U, f(U)) \in \varphi$이고, $(U, W) \in \varphi$이고 $(U, W') \in \varphi$이면 $W = f(U) = W'$이다. 따라서 [[function]]의 정의에 의해 $\varphi$는 $\mathcal{T}_X$에서 $\mathcal{T}_Y$로의 함수이고 $\varphi(U) = f(U)$이다. 단사: $U, U' \in \mathcal{T}_X$이고 $f(U) = f(U')$이면 (ii)에 의해 $U = f^{-1}(f(U)) = f^{-1}(f(U')) = U'$이다. 전사: $V \in \mathcal{T}_Y$이면 $f$가 연속이므로 $U = f^{-1}(V) \in \mathcal{T}_X$이고, (ii)에 의해 $\varphi(U) = f(f^{-1}(V)) = V$이다.

**(3).** (i) 모든 $x, x' \in X$에서 $i_X(x) = i_X(x')$이면 $x = x'$이므로 $i_X$는 단사이고, $x \in X$이면 $i_X(x) = x$이므로 $i_X : X \to X$는 전사이다. $i_X = \{(x, x) : x \in X\}$의 역관계는 [[inverse-function|역관계와 역함수]]의 정의에 의해 $\{(x, x) : x \in X\} = i_X$이고 이것은 함수이므로, $i_X$의 역함수는 $i_X$이다. [[continuous-map]]의 (1)에 의해 $i_X$는 연속이므로 $i_X$는 위상동형사상이다.

(ii) $g = f^{-1}$을 역함수라 하자. 역관계의 정의에 의해, $y \in Y$, $x \in X$에서 $(y, x) \in g$인 것은 정확히 $(x, y) \in f$일 때이다. 따라서 $g$의 역관계 $\{(x, y) : (y, x) \in g\}$는 $\{(x, y) : (x, y) \in f\} = f$이고, 이것은 $X$에서 $Y$로의 함수이다. [[bijective-iff-inverse-is-a-function|전단사일 조건]]에 의해 $g : Y \to X$는 전단사이고, 역함수의 정의에 의해 $g$의 역함수는 $f$이다. $g$는 연속이고(위상동형사상 $f$의 조건), $g$의 역함수 $f$도 연속이므로 $g$는 위상동형사상이다.

(iii) [[composition-preserves-injectivity-and-surjectivity|합성은 단사와 전사를 보존한다]]의 3에 의해 $h \circ f : X \to Z$는 전단사이다. 연속: $W \in \mathcal{T}_Z$이면 $h$가 연속이므로 $h^{-1}(W) \in \mathcal{T}_Y$이고, $f$가 연속이므로 $f^{-1}(h^{-1}(W)) \in \mathcal{T}_X$이다. [[preimage-and-set-operations]]의 (4)의 첫째 등식에 의해 이것은 $(h \circ f)^{-1}(W)$이다. 열린 사상: (1)에 의해 $f$와 $h$는 열린 사상이다. $U \in \mathcal{T}_X$이면 $f(U) \in \mathcal{T}_Y$이고 $h(f(U)) \in \mathcal{T}_Z$이며, 그 (4)의 둘째 등식에 의해 이것은 $(h \circ f)(U)$이다. 따라서 $h \circ f$는 연속인 전단사이고 열린 사상이므로, (1)의 끝 문장에 의해 위상동형사상이다.

**(4).** $i_X$는 (3)의 (i)의 증명에서처럼 전단사이고, [[continuous-map]]의 (3)에 의해 $(X, \mathscr{P}(X))$에서 나가는 함수이므로 연속이다. [[topology-examples]]의 (3)에 의해 $\{a\}$는 $\mathscr{P}(X)$의 원소이지만 $\{\emptyset, X\}$의 원소가 아니다. $i_X(\{a\}) = \{a\}$이므로 $i_X$는 열린 사상이 아니고, (1)에 의해 위상동형사상이 아니다.

둘째 문장. $f : (X, \mathscr{P}(X)) \to (X, \{\emptyset, X\})$가 위상동형사상이라 하자. $\{a\}$는 이산위상의 열린집합이므로 (2)의 (i)에 의해 $f(\{a\}) = \{f(a)\}$는 $\{\emptyset, X\}$의 원소이다. $\{f(a)\}$는 $f(a)$를 원소로 가지므로 $\emptyset$이 아니고, 따라서 $\{f(a)\} = X$이다. 그러면 $a$와 $b$가 모두 $\{f(a)\}$의 원소이므로 $a = f(a)$이고 $b = f(a)$이다. 곧 $a = b$가 되어 $a \ne b$에 어긋난다. 따라서 그런 위상동형사상은 없다.

**(5).** [[function-composition|함수의 합성]]의 진술에 의해 모든 $x \in X$에서 $g(f(x)) = i_X(x) = x$이고, 모든 $y \in Y$에서 $f(g(y)) = i_Y(y) = y$이다. 단사: $x, x' \in X$이고 $f(x) = f(x')$이면 $x = g(f(x)) = g(f(x')) = x'$이다. 전사: $y \in Y$이면 $x = g(y) \in X$에서 $f(x) = f(g(y)) = y$이다. 따라서 [[injective-surjective-bijective|단사, 전사, 전단사]]의 1, 2, 3에 의해 $f : X \to Y$는 전단사이고, [[bijective-iff-inverse-is-a-function|전단사일 조건]]에 의해 역관계 $f^{-1} = \{(y, x) : (x, y) \in f\}$는 $Y$에서 $X$로의 함수, 곧 [[inverse-function|역관계와 역함수]]의 뜻의 역함수이다. 이제 두 집합 $f^{-1}$과 $g$가 같음을 보인다. 둘 다 $Y \times X$의 부분집합이다. $y \in Y$, $x \in X$에 대하여 $(y, x) \in f^{-1}$이면 $(x, y) \in f$, 곧 $f(x) = y$이므로 $g(y) = g(f(x)) = x$이고 $(y, x) \in g$이다. 거꾸로 $(y, x) \in g$, 곧 $g(y) = x$이면 $f(x) = f(g(y)) = y$이므로 $(x, y) \in f$이고 $(y, x) \in f^{-1}$이다. 따라서 $g = f^{-1}$이다. 끝 문장: $f$는 연속인 전단사이고 그 역함수 $g$도 연속이므로 위상동형사상의 정의에 의해 위상동형사상이다.
:::

## 예시와 반례

:::example[세 점 공간에서 자기 자신으로]
$X = \{1, 2, 3\}$에 위상 $\mathcal{T} = \{\emptyset, \{2\}, \{1, 2\}, \{2, 3\}, X\}$([[topology-examples]]의 (8)의 (ii))를 줍니다.

- $s(1) = 3$, $s(2) = 2$, $s(3) = 1$인 $s : X \to X$는 위상동형사상입니다. $s$는 전단사이고, 역관계 $\{(3, 1), (2, 2), (1, 3)\}$이 $s$ 자신이므로 역함수도 $s$입니다. 다섯 열린집합의 상은 차례로 $\emptyset$, $\{2\}$, $\{2, 3\}$, $\{1, 2\}$, $X$로 모두 열린집합이므로 $s$는 열린 사상이고, (1)에 의해 역함수 $s$는 연속입니다. $s$ 자신이 그 역함수이므로 $s$도 연속이고, $s$는 위상동형사상입니다.
- $t(1) = 2$, $t(2) = 1$, $t(3) = 3$인 $t : X \to X$는 전단사이지만 위상동형사상이 아닙니다. $t(\{2\}) = \{1\}$은 열린집합이 아니므로 $t$는 열린 사상이 아닙니다. $t$의 역함수도 $t$이므로 $t^{-1}(\{2\}) = \{1\}$이고, $t$는 연속도 아닙니다.
:::

:::counterexample[같은 집합 위의 두 위상이 위상동형이 아닌 경우]
같은 $X = \{1, 2, 3\}$ 위에서 $\mathcal{T}' = \{\emptyset, \{1\}, \{1, 2\}, X\}$([[topology-examples]]의 (8)의 (i))와 위의 $\mathcal{T}$를 비교합니다. $\mathcal{T}'$의 네 원소는 $\emptyset \subseteq \{1\} \subseteq \{1, 2\} \subseteq X$로 한 줄로 늘어서 있어서, 어느 두 원소를 골라도 한쪽이 다른 쪽에 포함됩니다. $\mathcal{T}$에서는 $\{1, 2\}$와 $\{2, 3\}$이 어느 쪽으로도 포함되지 않습니다.

위상동형사상 $f : (X, \mathcal{T}) \to (X, \mathcal{T}')$가 있다고 합시다. (2)의 (i)에 의해 $f(\{1, 2\})$와 $f(\{2, 3\})$는 $\mathcal{T}'$의 원소이므로 한쪽이 다른 쪽에 포함됩니다. $f(\{1, 2\}) \subseteq f(\{2, 3\})$라 합시다. [[preimage-and-set-operations|역상과 집합의 연산]]의 (7)에 의해 $f^{-1}(f(\{1, 2\})) \subseteq f^{-1}(f(\{2, 3\}))$이고, (2)의 (ii)에 의해 이것은 $\{1, 2\} \subseteq \{2, 3\}$이 되어 거짓입니다. 포함이 거꾸로이면 같은 논증으로 $\{2, 3\} \subseteq \{1, 2\}$가 되어 역시 거짓입니다. 따라서 $(X, \mathcal{T})$와 $(X, \mathcal{T}')$는 위상동형이 아니고, (3)의 (ii)에 의해 $(X, \mathcal{T}')$에서 $(X, \mathcal{T})$로의 위상동형사상도 없습니다.
:::

:::counterexample[열린 사상인 전단사가 연속이 아닐 수 있다]
(1)의 끝 문장에서 "연속인"을 뺄 수 없습니다. $a \ne b$이고 $X = \{a, b\}$일 때 $i_X : (X, \{\emptyset, X\}) \to (X, \mathscr{P}(X))$를 봅시다. 열린집합은 $\emptyset$과 $X$뿐이고 상은 $\emptyset$과 $X$로 이산위상에서 열려 있으므로 $i_X$는 열린 사상인 전단사입니다. 그러나 [[continuous-map]]의 (6)의 (i)에 의해 이 함수는 연속이 아니므로 위상동형사상이 아닙니다. (1)에 의해 역함수는 연속이고, 역함수는 (4)의 함수입니다.
:::

:::counterexample[전단사가 아니면 열린 사상이 닫힌 사상이 아닐 수 있다]
$X = \{1, 2\}$에 이산위상을 주고, $a \ne b$인 $Y = \{a, b\}$에 위상 $\{\emptyset, \{a\}, Y\}$를 주며, $f : X \to Y$를 값이 늘 $a$인 상수함수라 합시다. $X$의 부분집합의 상은 $\emptyset$이거나 $\{a\}$이고 둘 다 $Y$에서 열려 있으므로 $f$는 열린 사상입니다. 그러나 $\{1\}$은 이산위상에서 닫힌집합이고([[closed-set]]의 (7)) $f(\{1\}) = \{a\}$이며, $Y - \{a\} = \{b\}$는 열린집합이 아니므로 $\{a\}$는 닫힌집합이 아닙니다. 곧 $f$는 닫힌 사상이 아닙니다. 이 $f$는 단사가 아니고 $f : X \to Y$는 전사도 아닙니다.
:::

## 확인 질문

:::check[원소가 하나씩인 두 위상공간 $\{p\}$와 $\{q\}$는 위상동형인가?]
그렇습니다. $\{p\}$의 부분집합은 $\emptyset$과 $\{p\}$뿐이고 위상의 조건 (i)에 의해 둘 다 열린집합이어야 하므로, $\{p\}$ 위의 위상은 $\{\emptyset, \{p\}\}$ 하나뿐이고 이것은 이산위상입니다([[topology-examples]]의 (3)). $\{q\}$도 같습니다. $f = \{(p, q)\}$는 전단사이고, [[continuous-map]]의 (3)에 의해 $f$도 그 역함수 $\{(q, p)\}$도 연속입니다.
:::

:::check[두 집합 $X$, $Y$에 모두 이산위상을 주면 $X$에서 $Y$로의 전단사는 모두 위상동형사상인가?]
그렇습니다. 전단사 $f : X \to Y$와 그 역함수 $f^{-1} : Y \to X$는 모두 이산위상에서 나가는 함수이므로 [[continuous-map]]의 (3)에 의해 연속입니다. 밀착위상끼리도 같습니다. 이번에는 [[continuous-map]]의 (4)에 의해 밀착위상으로 들어가는 함수이므로 연속입니다.
:::
