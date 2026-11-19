---
title: 지표가 2인 부분군은 정규부분군이다
title_en: A Subgroup of Index Two Is Normal
aliases: [지표 2인 부분군, 지수가 2인 부분군, index two subgroup, subgroup of index 2]
kind: theorem
field: group-theory
msc: ["20A05"]
level: undergrad
summary: 군 G의 부분군 H의 지표가 2이면, H 밖의 원소 g에 대하여 왼쪽 잉여류 gH와 오른쪽 잉여류 Hg가 모두 H의 여집합 G − H이다. 따라서 모든 g에서 gH = Hg이고 H는 정규부분군이다. G가 유한군일 필요는 없다.
requires: [set, subset, set-operations, function, injective-surjective-bijective, recursion-theorem, finite-set, number-of-elements-is-unique, adding-or-removing-an-element, subset-of-finite-set, partition, group, group-basic-properties, subgroup, subgroup-examples, symmetric-group, left-coset, lagrange-theorem, normal-subgroup, number-groups, even-and-odd, integer-cancellation]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 6.5절 연습문제 17, 18 p.79, 10.4절 연습문제 10 p.131 (본문의 정리가 아니다)
    checked: original
    note: "출처 본문에 이 정리는 없다. (2)의 '모든 g 에서 gH = Hg'는 출처 6장 연습문제 18(p.79), (3)은 10장 연습문제 10(p.131, 지표가 2 인 부분군은 정규임을 보이고 S_n 이 단순군이 아님을 결론지으라)이다. 출처 Proposition 6.15 의 증명(p.76)과 힌트 15.4.5(p.328)는 '잉여류가 둘뿐이므로 왼쪽과 오른쪽이 같다', '지표가 2 이므로 정규'를 증명 없이 쓴다. 출처의 연습문제는 G 가 유한군인지를 말하지 않는다. 이 항목은 G 의 원소의 개수를 쓰지 않으므로 G 가 무한군이어도 된다. (1)의 G/H = {H, gH} 와 gH = G − H, (2)의 Hg = G − H 는 출처에 명제로 없다(검색어 'index 2|[G : H] = 2' 7건은 Example 6.7, 연습문제 6.17, 6.18, 10.10, 23장, 힌트 13.4.16, 힌트 15.4.5). 증명의 '원소가 둘인 집합에 서로 다른 두 원소가 있으면 그 둘이 전부'와 오른쪽 잉여류를 라그랑주 정리의 (4)로 다루는 것은 이 사이트의 경로다. 예시 '정수의 덧셈군에서 짝수 전체'는 출처에서 찾지 못했다(검색어 '1 + 2Z|2Z + 1' 0건, 'even integers.{0,80}(coset|index|normal)' 0건, '2Z' 1건은 p.38 의 군의 예). 반례 '왼쪽 잉여류가 셋 이상이면 정규부분군이 아닐 수 있다'는 X = {1, 2, 3}, z = 3 으로 두면 출처 Example 6.2(p.74–75)가 왼쪽·오른쪽 잉여류를 늘어놓는 K = {(1), (1 2)} 와 같은 대상이고, 출처 Example 6.7(p.75)은 [S₃ : K] = 3 이라고 적는다(이 사이트는 |S₃| = 6 을 진술로 갖지 않으므로 이 항목은 지표를 구하지 않고 서로 다른 잉여류 셋을 보인다). 정규가 아니라는 것은 출처 Example 10.2(p.125)와 같은 대상이다. 첫째 확인 질문(|G| = 2|H| 이면 정규)은 출처 Proposition 6.15 의 증명(p.76)이 |H| = 6, |A₄| = 12 에서 [A₄ : H] = 2 를 얻는 것과 같은 발상이다(검색어 'twice the order|half the order|2|H|' 0건). 둘째 확인 질문은 출처 6장 연습문제 17(p.79)과 같은 물음이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 단원 글의 '같다'를 '동형'으로, 근거 누락과 출처 예와 겹치는 것을 고침"
added: 2026-11-19
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이며 $H$가 $G$의 [[subgroup|부분군]]이라 하자. 왼쪽 잉여류 $aH$, 오른쪽 잉여류 $Ha$, 왼쪽 잉여류 전체의 집합 $G/H$는 [[left-coset|잉여류]]의 것이고, 지표 $[G : H]$는 [[lagrange-theorem|라그랑주 정리]]의 것이다. $H$의 지표가 유한하고 $[G : H] = 2$라 하자. 그러면 다음이 성립한다.

1. (왼쪽 잉여류) $H \ne G$이다. $g \in G - H$이면 $G/H = \{H, gH\}$이고 $gH = G - H$이다.
2. (오른쪽 잉여류) $g \in G - H$이면 $Hg = G - H$이다. 따라서 모든 $g \in G$에서 $gH = Hg$이다.
3. (정규부분군) $H$는 $G$의 [[normal-subgroup|정규부분군]]이다.

$G$가 유한군이라는 가정은 없다.
:::

:::english
Let $G$ be a group with identity $e$, and let $H$ be a subgroup of $G$. Left cosets $aH$, right cosets $Ha$ and the set $G/H$ of all left cosets are those of the entry on cosets, and the index $[G : H]$ is that of the entry on Lagrange's theorem. Suppose that $H$ has finite index and $[G : H] = 2$. Then the following hold.

1. (Left cosets) $H \ne G$. If $g \in G - H$, then $G/H = \{H, gH\}$ and $gH = G - H$.
2. (Right cosets) If $g \in G - H$, then $Hg = G - H$. Hence $gH = Hg$ for every $g \in G$.
3. (Normality) $H$ is a normal subgroup of $G$.

$G$ is not assumed to be finite.
:::

## 직관

지표가 $2$라는 것은 $H$의 왼쪽 잉여류가 꼭 두 개라는 뜻입니다. 하나는 $H$ 자신이므로, 다른 하나는 $H$ 밖의 원소 전체일 수밖에 없습니다((1)). 라그랑주 정리의 (4)에 의해 오른쪽 잉여류도 두 개이고 같은 까닭으로 $H$와 $H$ 밖의 원소 전체가 됩니다((2)). 그래서 어느 원소로 잉여류를 만들든 왼쪽과 오른쪽이 같은 집합이 되고, 이것이 [[normal-subgroup|정규부분군]]의 (1)의 (ii)입니다.

교실을 둘로 나누는 데 비유할 수 있습니다. 한 모둠이 정해져 있고 모둠이 둘뿐이면, 나머지 모둠은 그 모둠에 들지 않은 학생 전체로 정해지고 누가 어느 쪽에서 나누었는지는 상관이 없습니다. 비유에서 "모둠이 둘뿐"이 $[G : H] = 2$에, "누가 어느 쪽에서 나누었는지"가 왼쪽 잉여류와 오른쪽 잉여류의 차이에 해당합니다.

잉여류가 셋 이상이면 이 논법은 쓸 수 없습니다. $H$ 밖의 원소들이 여러 잉여류로 갈라지고, 왼쪽에서 나눈 것과 오른쪽에서 나눈 것이 다를 수 있습니다(아래 반례). 증명은 $G$의 원소의 개수를 쓰지 않고 잉여류가 둘이라는 것만 쓰므로 $G$가 무한군이어도 됩니다.

## 증명

:::idea
원소가 둘인 집합 $G/H$에 서로 다른 두 원소 $H$와 $gH$가 있으면 $G/H = \{H, gH\}$이다. 잉여류들은 $G$를 서로 겹치지 않게 나누므로 $gH$는 $H$의 여집합이다. 오른쪽 잉여류도 같은 방법으로 다룬다.
:::

:::hint
$H$ 자신이 왼쪽 잉여류 $eH$라는 것과, $aH = H$인 것은 정확히 $a \in H$일 때라는 것을 쓴다.
:::

:::hint
오른쪽 잉여류 전체도 원소가 둘이라는 것은 [[lagrange-theorem|라그랑주 정리]]의 (4)에 있다.
:::

:::proof
아래에서 "잉여류의 ($k$)"는 [[left-coset|잉여류]]의 ($k$)이다. 지표의 정의에 의해 $G/H$는 유한집합이고 $|G/H| = 2$이다. 오른쪽 잉여류 전체의 집합 $\{Ha : a \in G\}$를 이 증명에서 $\mathcal{R}$로 쓴다.

먼저 쓸 사실 하나를 보인다. 이것을 "(가)"라 부른다. **(가)** $B$가 원소를 $2$개 갖는 집합이고 $p$, $q$가 $B$의 서로 다른 원소이면 $B = \{p, q\}$이다. [[group|군]]의 (5)에 의해 $\{p\}$는 원소를 $1$개 갖고, $q \notin \{p\}$이므로 [[adding-or-removing-an-element|원소 하나를 더하거나 빼기]]의 (a)에 의해 $\{p, q\} = \{p\} \cup \{q\}$는 원소를 $2$개 갖는다. $\{p, q\} \subseteq B$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $\{p, q\} = B$이다([[number-of-elements-is-unique|원소의 개수]]).

**(1)** $H = G$라면 [[lagrange-theorem|라그랑주 정리]]의 (2)에 의해 $G/H = G/G = \{G\}$이고, [[group|군]]의 (5)에 의해 $\{G\}$는 원소를 $1$개 가지므로 원소의 개수의 유일성에 의해 $|G/H| = 1 \ne 2$가 되어 모순이다. 따라서 $H \ne G$이다.

$g \in G - H$라 하자. 잉여류의 (5)에 의해 $H = eH \in G/H$이고, $g \notin H$이므로 $gH \ne H$이다. $gH \in G/H$이므로 (가)에 의해 $G/H = \{H, gH\}$이다.

$gH \subseteq G - H$: $gH \ne H = eH$이므로 잉여류의 (4)에 의해 $gH \cap H = \emptyset$이다. 따라서 $gH$의 원소는 $H$에 속하지 않는다. $G - H \subseteq gH$: $x \in G - H$이면 $xH \in G/H = \{H, gH\}$이고, $x \notin H$이므로 잉여류의 (5)에 의해 $xH \ne H$이다. 따라서 $xH = gH$이고, 잉여류의 (2)에 의해 $x \in xH = gH$이다. 따라서 $gH = G - H$이다.

**(2)** 오른쪽 잉여류에 관한 사실 둘을 먼저 적는다. 잉여류의 (7)에 의해 $\mathcal{R}$은 $G$의 분할이고, $a, b \in G$에 대하여 $Ha = Hb$인 것은 정확히 $ab^{-1} \in H$일 때이다. $b = e$로 두면 기본 성질([[group-basic-properties|군의 기본 성질]])의 (4)에 의해 $ae^{-1} = ae = a$이므로, $Ha = He$인 것은 정확히 $a \in H$일 때이다. 또 $x \in He$인 것은 정확히 $x = he = h$인 $h \in H$가 있을 때이므로 $He = H$이다. 곧 $Ha = H$인 것은 정확히 $a \in H$일 때이다.

[[lagrange-theorem|라그랑주 정리]]의 (4)에 의해 $\mathcal{R}$은 유한집합이고 $|\mathcal{R}| = [G : H] = 2$이다. $g \in G - H$라 하자. $H = He \in \mathcal{R}$이고 $g \notin H$이므로 $Hg \ne H$이며, (가)에 의해 $\mathcal{R} = \{H, Hg\}$이다. $Hg \ne H$이고 $\mathcal{R}$은 분할이므로 [[partition|분할]]의 정의에 의해 $Hg \cap H = \emptyset$이고, $Hg \subseteq G - H$이다. $x \in G - H$이면 $Hx \in \mathcal{R} = \{H, Hg\}$이고 $x \notin H$이므로 $Hx \ne H$, 곧 $Hx = Hg$이다. 잉여류의 (7)에 의해 $x \in Hx = Hg$이다. 따라서 $Hg = G - H$이다.

$g \in G$라 하자. $g \in H$이면 잉여류의 (5)와 위의 사실에 의해 $gH = H = Hg$이다. $g \notin H$이면 (1)과 방금 보인 것에 의해 $gH = G - H = Hg$이다. 따라서 모든 $g \in G$에서 $gH = Hg$이다.

**(3)** (2)와 [[normal-subgroup|정규부분군]]의 (1)의 (ii)에서 (i)로 가는 방향에 의해 $H$는 $G$의 정규부분군이다. $\blacksquare$
:::

## 예시와 반례

:::example[정수의 덧셈군에서 짝수 전체]
[[lagrange-theorem|라그랑주 정리]]의 (5)에 의해 $(\mathbb{Z}, +)$에서 $2\mathbb{Z}$의 지표는 $2$입니다. [[subgroup-examples|부분군의 예와 교집합]]의 (2)에 의해 $2\mathbb{Z}$는 짝수 전체이고, [[even-and-odd|짝수와 홀수]]에서 받아들인 사실에 의해 $\mathbb{Z} - 2\mathbb{Z}$는 홀수 전체입니다. $1 = 2 \cdot 0 + 1$은 홀수이므로 짝수가 아니고 $1 \notin 2\mathbb{Z}$입니다. (1)을 $1 \in \mathbb{Z} - 2\mathbb{Z}$에 쓰면 $1 + 2\mathbb{Z} = \mathbb{Z} - 2\mathbb{Z}$, 곧 홀수 전체입니다. 이 경우는 $(\mathbb{Z}, +)$가 아벨군([[number-groups|수로 이루어진 군]]의 (1))이므로 [[normal-subgroup|정규부분군]]의 (3)으로도 정규부분군임을 압니다. 이 정리가 새로 주는 것은 아벨군이 아닌 군에 대한 결론입니다.
:::

:::counterexample[왼쪽 잉여류가 셋 이상이면 정규부분군이 아닐 수 있다]
$X$를 서로 다른 세 원소 $x$, $y$, $z$를 갖는 집합이라 하고, [[symmetric-group|대칭군]] $S_X$의 부분군 $H = \{f \in S_X : f(z) = z\}$([[subgroup-examples|부분군의 예와 교집합]]의 (6))를 봅시다. 곱 $fg$는 합성 $f \circ g$입니다.

$w = x$이면 $y$를, $w = y$이면 $x$를, 나머지 $w$이면 $w$를 정하는 함수 $t : X \to X$와, 같은 방법으로 $y$와 $z$를 맞바꾸는 함수 $s : X \to X$를 [[recursion-theorem|재귀 정리]]의 (1)로 정합니다. $t(t(x)) = t(y) = x$, $t(t(y)) = t(x) = y$이고 $x$도 $y$도 아닌 $w$에서 $t(t(w)) = w$이므로 $t \circ t = i_X$이고, 같은 계산으로 $s \circ s = i_X$입니다. 그러면 $t$는 [[injective-surjective-bijective|전단사]]입니다($t(a) = t(b)$이면 $a = t(t(a)) = t(t(b)) = b$이고, $b = t(t(b))$). $s$도 마찬가지로 전단사이므로 $t, s \in S_X$입니다.

*잉여류는 $z$에서의 값으로 정해진다.* $f, g \in S_X$이면 [[left-coset|잉여류]]의 (3)에 의해 $fH = gH$인 것은 정확히 $f^{-1}g \in H$, 곧 $f^{-1}(g(z)) = z$일 때입니다. $f^{-1}(g(z)) = z$이면 양변에 $f$를 적용해 $g(z) = f(z)$이고, 거꾸로 $g(z) = f(z)$이면 $f^{-1}(g(z)) = f^{-1}(f(z)) = z$입니다. 곧 $fH = gH$인 것은 정확히 $f(z) = g(z)$일 때입니다. $i_X(z) = z$, $s(z) = y$, $(ts)(z) = t(y) = x$이고 $x$, $y$, $z$는 서로 다르므로 $i_XH = H$, $sH$, $(ts)H$는 서로 다른 세 왼쪽 잉여류입니다. $H$의 지표가 유한하고 $2$라면, $s(z) = y \ne z$이어서 $s \notin H$이므로 (1)에 의해 $S_X/H = \{H, sH\}$이어야 하는데 $(ts)H$가 둘 다와 다르므로, $H$의 지표는 $2$가 아닙니다.

*정규부분군이 아니다.* $t(z) = z$이므로 $t \in H$입니다. $s(z) = y$, $t(y) = x$, $s(x) = x$이고 $ss = i_X$이므로 [[group-basic-properties|군의 기본 성질]]의 (3)에 의해 $s^{-1} = s$이며, $(sts^{-1})(z) = s(t(s(z))) = s(x) = x \ne z$입니다. 따라서 $sts^{-1} \notin H$이고 $H$는 정규부분군이 아닙니다. 지표가 $2$라는 가정을 빼면 (3)의 결론이 깨질 수 있습니다.
:::

## 확인 질문

:::check[$G$가 유한군이고 $H$가 $|G| = 2 \cdot |H|$인 부분군이면 $H$는 정규부분군인가?]
그렇습니다. [[lagrange-theorem|라그랑주 정리]]의 (1)에 의해 $|G| = [G : H] \cdot |H|$이고 가정과 함께 $|H| \cdot [G : H] = |H| \cdot 2$입니다. [[subgroup|부분군]]의 (1)에 의해 $e \in H$이므로 $H \ne \emptyset$이고, [[finite-set|유한집합]]의 (F2)에 의해 $|H| \ne 0$입니다. [[integer-cancellation|정수 곱셈의 소거 법칙]]의 (2)에 의해 $[G : H] = 2$이고, (3)에 의해 $H$는 정규부분군입니다.
:::

:::check[$[G : H] = 2$이고 $a, b \in G$가 둘 다 $H$에 속하지 않으면 $ab \in H$인가?]
그렇습니다. $ab \notin H$라 해 봅시다. (1)을 $a \in G - H$에 쓰면 $aH = G - H$이므로 $ab \in aH$이고, $ab = ah$인 $h \in H$가 있습니다. [[group-basic-properties|군의 기본 성질]]의 (7)의 왼쪽 소거에 의해 $b = h \in H$가 되어 가정에 어긋납니다. 따라서 $ab \in H$입니다.
:::
