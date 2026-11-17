---
title: 하한의 존재
title_en: Existence of Infima
aliases: [하한 공리, 최대하계 성질, greatest-lower-bound property, existence of infimum]
kind: proposition
field: real-analysis
msc: ["26A03"]
level: undergrad
summary: 공집합이 아니고 아래로 유계인 실수의 집합은 하한을 갖는다. 부호를 바꾼 집합 −E 의 상한으로 inf E = −sup(−E) 이다.
requires: [set, real-number-arithmetic, real-order-axioms, order-properties-of-reals, upper-bound-and-supremum, least-upper-bound-property]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 1.1절 Proposition 1.1.11 (p.27)
    checked: original
    note: "출처의 Proposition 1.1.11 은 최소상계 성질을 가진 순서체 F 에서 공집합이 아니고 아래로 유계인 A ⊂ F 가 inf A 를 갖는다고 진술하고, B = {−x : x ∈ A} 의 상한 c 를 잡아 −c 가 A 의 하한임을 보인다. 증명의 경로는 출처와 같다. 출처는 B 가 공집합이 아니라는 것과 'x ≥ b 이면 −x ≤ −b'의 근거를 적지 않는다. 이 항목은 하계·상계·하한·상한이 부호를 바꾸면 서로 바뀐다는 것((1)–(3))과 −(−E) = E 를 진술에 두고 증명했으며, 이것들은 출처에 명제로 없다(검색한 범위). 기호 −E 는 이 사이트의 것이다. 예시, 반례, 확인 질문은 새로 만들었다. 확인 질문 2 의 inf E ≤ sup E 는 출처 연습문제 1.1.4 의 inf A ≤ sup A 와 같다."
status: reviewed
review_note: "2026-11-17 작성자의 자기 검토 뒤 독립 검토 통과(전반 2회, 후반 1회). 정수와 실수의 순서를 잇는 진술의 범위, 인용 근거, 번호 표기, 출처 메모를 보완했다. 마지막 수정은 지휘자가 변경분을 확인했다."
added: 2026-11-17
---

:::statement
상계, 하계, 상한, 하한, 위로·아래로 유계는 [[upper-bound-and-supremum]]의 것이다. $\mathbb{R}$의 부분집합 $E$에 대하여 $-E = \{-x : x \in E\}$로 쓴다. 곧 실수 $y$가 $-E$의 원소인 것은 정확히 $y = -x$인 $E$의 원소 $x$가 있을 때이다. 다음이 성립한다.

1. 실수 $b$가 $E$의 하계인 것은 정확히 $-b$가 $-E$의 상계일 때이다. 실수 $b$가 $E$의 상계인 것은 정확히 $-b$가 $-E$의 하계일 때이다. 따라서 $E$가 아래로 유계인 것은 정확히 $-E$가 위로 유계일 때이고, $E$가 위로 유계인 것은 정확히 $-E$가 아래로 유계일 때이다.
2. $-(-E) = E$이다. $E$가 공집합이 아닌 것은 정확히 $-E$가 공집합이 아닐 때이다.
3. 실수 $t$가 $E$의 하한인 것은 정확히 $-t$가 $-E$의 상한일 때이다. 실수 $s$가 $E$의 상한인 것은 정확히 $-s$가 $-E$의 하한일 때이다.
4. (하한의 존재) $E$가 공집합이 아니고 아래로 유계이면 $E$는 하한을 가지며 $\inf E = -\sup(-E)$이다. 또 $E$가 공집합이 아니고 위로 유계이면 $-E$는 하한을 가지며 $\inf(-E) = -\sup E$이다.
:::

:::english
Upper bounds, lower bounds, suprema, infima, and bounded above and below are as in the entry on upper bounds and suprema. For a subset $E$ of $\mathbb{R}$ we write $-E = \{-x : x \in E\}$; that is, a real number $y$ is an element of $-E$ exactly when $y = -x$ for some element $x$ of $E$. The following hold.

1. A real number $b$ is a lower bound of $E$ exactly when $-b$ is an upper bound of $-E$. A real number $b$ is an upper bound of $E$ exactly when $-b$ is a lower bound of $-E$. Hence $E$ is bounded below exactly when $-E$ is bounded above, and $E$ is bounded above exactly when $-E$ is bounded below.
2. $-(-E) = E$. The set $E$ is nonempty exactly when $-E$ is nonempty.
3. A real number $t$ is an infimum of $E$ exactly when $-t$ is a supremum of $-E$. A real number $s$ is a supremum of $E$ exactly when $-s$ is an infimum of $-E$.
4. (Existence of infima) If $E$ is nonempty and bounded below, then $E$ has an infimum and $\inf E = -\sup(-E)$. Also, if $E$ is nonempty and bounded above, then $-E$ has an infimum and $\inf(-E) = -\sup E$.
:::

## 직관

수직선을 $0$을 중심으로 뒤집으면 왼쪽과 오른쪽이 바뀝니다. 집합 $E$를 뒤집은 것이 $-E$이고, $E$의 아래쪽 경계(하계)는 뒤집으면 $-E$의 위쪽 경계(상계)가 됩니다. 가장 큰 하계는 뒤집으면 가장 작은 상계가 되므로, 하한은 "뒤집어서 상한을 구하고 다시 뒤집은 것"입니다. [[least-upper-bound-property|최소상계 성질]] (U)는 상한에 대해서만 말하지만, 이 뒤집기 덕분에 하한에 대해 따로 받아들일 것이 없습니다. 비유가 맞지 않는 곳은, 뒤집기가 순서를 거꾸로 한다는 것이 그림에서 보이는 사실이 아니라 [[order-properties-of-reals]]의 (3)의 (iii)에서 증명되는 사실이라는 점입니다.

## 증명

:::idea
부호를 바꾸면 $\le$의 방향이 바뀐다((3)의 (iii)). 그래서 하계와 상계, 하한과 상한이 서로 바뀌고, $-E$에 (U)를 쓰면 $E$의 하한이 나온다.
:::

:::hint
$b \le x$인 것은 정확히 $-x \le -b$일 때입니다. $-E$의 원소는 모두 $-x$($x \in E$) 꼴입니다.
:::

:::hint
$-E$의 상계 $c$는 $c = -(-c)$로 써서 (1)을 $b = -c$에 적용할 수 있습니다.
:::

:::proof
(3)의 (iii) 같은 번호는 [[order-properties-of-reals]]의 번호이고, "이 항목의 (1)"처럼 쓴 것은 위 진술의 번호이다. (K9)의 $-(-a) = a$를 자주 쓴다.

**이 항목의 (1).** $b$가 $E$의 하계라 하자. $-E$의 원소 $y$를 잡으면 $y = -x$인 $x \in E$가 있고, $b \le x$이므로 (3)의 (iii)에 의해 $-x \le -b$, 곧 $y \le -b$이다. 따라서 $-b$는 $-E$의 상계이다. 거꾸로 $-b$가 $-E$의 상계라 하자. $x \in E$이면 $-x \in -E$이므로 $-x \le -b$이고, (3)의 (iii)에 의해 $b \le x$이다. 따라서 $b$는 $E$의 하계이다.

$b$가 $E$의 상계라 하자. $-E$의 원소 $y = -x$($x \in E$)에 대하여 $x \le b$이므로 (3)의 (iii)에 의해 $-b \le -x = y$이다. 따라서 $-b$는 $-E$의 하계이다. 거꾸로 $-b$가 $-E$의 하계이면, $x \in E$에 대하여 $-x \in -E$이므로 $-b \le -x$이고 (3)의 (iii)에 의해 $x \le b$이다. 따라서 $b$는 $E$의 상계이다.

유계에 관한 문장: $E$가 하계 $b$를 가지면 $-b$가 $-E$의 상계이다. $-E$가 상계 $c$를 가지면 $c = -(-c)$이므로 앞 문단에서 $b = -c$로 두어 $-c$가 $E$의 하계이다. 따라서 $E$가 아래로 유계인 것은 정확히 $-E$가 위로 유계일 때이다. 같은 논증을 상계와 하계를 바꾸어 쓴다. $E$가 상계 $b$를 가지면 $-b$가 $-E$의 하계이고, $-E$가 하계 $c$를 가지면 $c = -(-c)$이므로 $-c$가 $E$의 상계이다.

**이 항목의 (2).** $z \in -(-E)$이면 $z = -y$인 $y \in -E$가 있고 $y = -x$인 $x \in E$가 있으므로 $z = -(-x) = x \in E$이다. 거꾸로 $x \in E$이면 $-x \in -E$이고 $x = -(-x)$이므로 $x \in -(-E)$이다. 따라서 $-(-E) = E$이다. $E$의 원소 $x$가 있으면 $-x \in -E$이고, $-E$의 원소 $y$가 있으면 그 정의에 의해 $E$의 원소 $x$가 있다.

**이 항목의 (3).** 첫째 문장. $t$가 $E$의 하한이라 하자. 이 항목의 (1)에 의해 $-t$는 $-E$의 상계이다. $c$가 $-E$의 임의의 상계이면 $c = -(-c)$이므로 이 항목의 (1)에 의해 $-c$는 $E$의 하계이고, $t$가 하한이므로 $-c \le t$이다. (3)의 (iii)에 의해 $-t \le -(-c) = c$이다. 따라서 $-t$는 $-E$의 상한이다. 거꾸로 $-t$가 $-E$의 상한이라 하자. 이 항목의 (1)에 의해 $t$는 $E$의 하계이다. $b$가 $E$의 임의의 하계이면 이 항목의 (1)에 의해 $-b$는 $-E$의 상계이므로 $-t \le -b$이고, (3)의 (iii)에 의해 $b \le t$이다. 따라서 $t$는 $E$의 하한이다.

둘째 문장. 첫째 문장을 집합 $-E$와 실수 $-s$에 쓰면, $-s$가 $-E$의 하한인 것은 정확히 $-(-s) = s$가 $-(-E)$의 상한일 때이다. 이 항목의 (2)에 의해 $-(-E) = E$이므로 이것이 둘째 문장이다.

**이 항목의 (4).** $E$가 공집합이 아니고 아래로 유계라 하자. 이 항목의 (2)와 (1)에 의해 $-E$는 공집합이 아니고 위로 유계이다. [[least-upper-bound-property|최소상계 성질]] (U)에 의해 $-E$는 상한 $s$를 갖는다. $s = -(-s)$이므로 이 항목의 (3)의 첫째 문장을 $t = -s$에 쓰면 $-s$는 $E$의 하한이다. 곧 $\inf E = -s = -\sup(-E)$이다. 다음에 $E$가 공집합이 아니고 위로 유계이면 (U)에 의해 $\sup E$가 있고, 이 항목의 (3)의 둘째 문장에 의해 $-\sup E$는 $-E$의 하한이다. $\blacksquare$
:::

## 예시와 반례

:::example[제곱이 $1$ 이하인 수]
$E = \{x \in \mathbb{R} : xx \le 1\}$은 [[upper-bound-and-supremum|상계와 상한]]의 예시에서 $\sup E = 1$, $\inf E = -1$임을 직접 보인 집합입니다. 이 항목으로 하한을 다시 구해 봅시다. 실수 $x$에 대하여 (K12)의 (iii)에 의해 $(-x)(-x) = xx$이므로, $x \in E$이면 $-x \in E$이고 $x = -(-x)$입니다. 따라서 $E$의 원소는 모두 $-E$의 원소이고, $-E$의 원소 $-x$($x \in E$)는 $E$의 원소이므로 $-E = E$입니다. (4)에 의해 $\inf E = -\sup(-E) = -\sup E = -1$이고, 직접 구한 값과 같습니다.
:::

:::counterexample[아래로 유계가 아니면 하한이 없다]
$\mathbb{R}$은 공집합이 아니지만 아래로 유계가 아닙니다. $\mathbb{R}$이 아래로 유계라면 (1)에 의해 $-\mathbb{R}$이 위로 유계인데, 모든 실수 $y$는 $y = -(-y)$이므로 $-\mathbb{R} = \mathbb{R}$이고, [[upper-bound-and-supremum|상계와 상한]]의 반례에서 본 대로 $\mathbb{R}$은 위로 유계가 아닙니다. 하한은 하계여야 하므로 $\mathbb{R}$에는 하한이 없습니다. 공집합도 하한이 없습니다([[upper-bound-and-supremum|상계와 상한]]의 (5)). 그래서 (4)에는 두 가정이 모두 있습니다.
:::

## 확인 질문

:::check[$E = \{x \in \mathbb{R} : x < 5\}$이면 $-E$는 어떤 집합인가?]
$-E = \{y \in \mathbb{R} : -5 < y\}$입니다. $y \in -E$이면 $y = -x$이고 $x < 5$이므로 [[order-properties-of-reals]]의 (3)의 (iii)에 의해 $-5 < -x = y$입니다. 거꾸로 $-5 < y$이면 (3)의 (iii)과 $-(-y) = y$에 의해 $-y < 5$이므로 $-y \in E$이고, $y = -(-y) \in -E$입니다.
:::

:::check[$E$가 공집합이 아니고 유계이면 $\inf E \le \sup E$인가?]
그렇습니다. (4)와 (U)에 의해 둘 다 있습니다. $E$의 원소 $x$를 하나 잡으면 하한은 하계이므로 $\inf E \le x$이고, 상한은 상계이므로 $x \le \sup E$입니다. [[order-properties-of-reals]]의 (1)의 (v)에 의해 $\inf E \le \sup E$입니다.
:::
