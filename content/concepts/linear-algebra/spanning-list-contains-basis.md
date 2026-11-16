---
title: 생성하는 열은 기저를 품는다
title_en: A Spanning Sequence Contains a Basis
aliases: [생성하는 열에서 기저 뽑기, 생성계는 기저를 포함한다, spanning sequence contains a basis, reducing a spanning set to a basis]
kind: theorem
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 벡터공간 V 를 생성하는 벡터의 열에서 항을 몇 개(0 개 포함) 지워 V 의 기저를 얻을 수 있다. 증명은 열의 길이에 대한 귀납법으로, 일차종속이면 한 항을 지워도 생성이 같다는 것을 쓴다.
requires: [real-number-arithmetic, vector-space, finite-sum-of-vectors, mathematical-induction, linear-combination-and-span, linear-independence, basis, linear-dependence-criterion, basis-iff-independent-and-spanning]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 2절, Proposition 2.8, p.10
    checked: original
    note: "출처의 Proposition 2.8 은 유한한 생성계가 기저를 포함한다고 한다. 출처의 증명은 일차종속이면 한 벡터 v_k 가 나머지의 일차결합이므로 v_k 를 지워도 생성계이고, 이 과정을 유한 번 되풀이하면 일차독립이고 생성하는 계에 이른다고 적는다. 그 까닭으로 '그렇지 않으면 모든 벡터를 지워 빈 집합이 된다'고 적고(p.10), 빈 모임이 기저인지는 정하지 않는다. 이 항목은 '항을 지워 얻는 열'을 진술에서 귀납적으로 정의하고, 열의 길이에 대한 귀납법으로 증명하며, 길이 0 인 열이 V = {0_V} 의 기저라는 사실을 쓴다. 출처는 계와 집합을 섞어 쓰지만 이 항목은 열만 다룬다. 정의와 진술과 증명의 구성은 이 사이트가 썼다. 예시와 반례와 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$V$가 [[vector-space|벡터공간]]이고 $v_1, \dots, v_n$이 길이 $n \ge 0$인 벡터의 열이라 하자. 열에서 **항을 $m$개 지워 얻는 열**(sequence obtained by deleting $m$ terms)을 $m$에 대한 재귀로 정한다.

- $m = 0$이면 $v$ 자신이다.
- $m \ge 0$이면, 열 $u$가 $v$에서 항을 $m + 1$개 지워 얻는 열인 것은 정확히 $n \ge 1$이고 어떤 $k \in \{1, \dots, n\}$에 대하여 $u$가 $v$에서 $k$번째 항을 [[finite-sum-of-vectors|지운 열]] $c$에서 항을 $m$개 지워 얻는 열일 때이다.

항을 $m$개 지워 얻는 열의 길이는 $n - m$이다. 다음이 성립한다.

열 $v_1, \dots, v_n$이 $V$를 [[linear-combination-and-span|생성]]하면, 어떤 정수 $m$ ($0 \le m \le n$)과 $v$에서 항을 $m$개 지워 얻는 열 $u$가 있어 $u$가 $V$의 [[basis|기저]]이다. ($m = 0$이면 $v$ 자신이 기저이다.)
:::

:::english
Let $V$ be a vector space and let $v_1, \dots, v_n$ be a sequence of vectors of length $n \ge 0$. The **sequence obtained from $v$ by deleting $m$ terms** is defined recursively on $m$.

- If $m = 0$, it is $v$ itself.
- If $m \ge 0$, a sequence $u$ is obtained from $v$ by deleting $m + 1$ terms exactly when $n \ge 1$ and, for some $k \in \{1, \dots, n\}$, $u$ is obtained by deleting $m$ terms from the sequence $c$ obtained from $v$ by deleting the $k$-th term.

A sequence obtained by deleting $m$ terms has length $n - m$. The following holds.

If the sequence $v_1, \dots, v_n$ spans $V$, then there are an integer $m$ ($0 \le m \le n$) and a sequence $u$ obtained from $v$ by deleting $m$ terms such that $u$ is a basis of $V$. (If $m = 0$, then $v$ itself is a basis.)
:::

## 직관

생성하는 열이 필요 이상으로 길 수 있습니다. 어떤 막대가 나머지 막대로 만들어지면 그 막대를 빼도 만들 수 있는 벡터가 줄지 않습니다. 그러므로 겹치는 막대를 하나씩 빼 나가면 더 뺄 수 없는 열이 되고, 더 뺄 수 없다는 것은 일차독립이라는 것입니다. 일차독립이고 생성하므로 기저입니다. 이것이 증명의 줄거리이고, 증명에서는 "빼 나간다"를 열의 길이에 대한 귀납법으로 쓰므로 끝나는 시점에 대한 걱정이 없습니다.

벡터를 모두 빼 나가는 경우도 있습니다. $V = \{0_V\}$일 때 열 $0_V, \dots, 0_V$는 영벡터가 많이 되풀이될 뿐이어서 모두 빼면 빈 열이 남고, [[basis|기저]]의 (Q1)이 빈 열을 기저로 인정하므로 정리가 예외 없이 참입니다. 얻는 기저가 하나로 정해진다는 말은 이 항목이 하지 않습니다. 아래 예시에서 같은 열에서 다른 기저가 얻어집니다. 또 기저의 길이가 항상 같다는 것도 이 항목은 말하지 않습니다.

## 증명

:::idea
열의 길이 $n$에 대한 귀납법. 일차독립이면 이미 기저이다. 일차종속이면 [[linear-dependence-criterion|판정]]에 의해 어떤 항이 나머지의 일차결합이므로 그 항을 지운 열도 $V$를 생성하고, 길이가 줄었으니 귀납 가정을 쓴다.
:::

:::hint
항 $v_k$가 나머지 항들의 일차결합일 때, $V$의 임의의 벡터를 쓰는 일차결합에서 $v_k$ 자리를 $v_k$의 표현으로 바꾸어 넣으세요. 계수 자리의 정리는 [[finite-sum-of-vectors|(C5)]], (C1), (C2)입니다.
:::

:::proof
$V$를 고정하고 $n$에 대한 귀납법으로 증명한다. $S_n$을 "$V$를 생성하는 길이 $n$인 모든 벡터의 열 $v$에 대하여 $V$의 기저인, $v$에서 항을 몇 개 지워 얻는 열이 있다"로 둔다.

기초 단계. $n = 0$이면 $v$는 빈 열이고 $V = \operatorname{span}(v) = \{0_V\}$이다. 빈 열은 일차독립이고 $V$를 생성하므로 [[basis-iff-independent-and-spanning|기저의 동치 조건]]에 의해 기저이다. $m = 0$으로 $u = v$를 잡는다.

귀납 단계. $S_n$이 참이라 하고, $V$를 생성하는 길이 $n + 1$인 열 $v_1, \dots, v_{n+1}$을 잡는다.

(i) $v$가 일차독립이면 $V$를 생성하므로 기저이다($m = 0$, $u = v$).

(ii) $v$가 일차종속이면 [[linear-dependence-criterion|일차종속의 판정]]에 의해 어떤 $k \in \{1, \dots, n+1\}$에서 $v_k$가 $v$에서 $k$번째 항을 지운 열 $c_1, \dots, c_n$의 일차결합이다. 곧 $v_k = \beta_1 c_1 + \cdots + \beta_n c_n$인 실수의 열 $\beta$가 있다. $c$가 $V$를 생성함을 보인다. $x \in V$를 잡는다. $v$가 $V$를 생성하므로 $x = \alpha_1 v_1 + \cdots + \alpha_{n+1} v_{n+1}$인 실수의 열 $\alpha$가 있다. $\gamma$를 $\alpha$에서 $k$번째 항을 지운 열이라 하면 (C5)에 의해 $x = (\gamma_1 c_1 + \cdots + \gamma_n c_n) + \alpha_k v_k$이다. $v_k$에 위의 표현을 쓰고 (C2)를 적용하면 $\alpha_k v_k = (\alpha_k\beta_1) c_1 + \cdots + (\alpha_k\beta_n) c_n$이다. 따라서 (C1)에 의해
$$x = (\gamma_1 + \alpha_k\beta_1) c_1 + \cdots + (\gamma_n + \alpha_k\beta_n) c_n$$
이다. 곧 $x \in \operatorname{span}(c)$이고, $x$가 임의이므로 $c$는 $V$를 생성한다. $c$의 길이가 $n$이므로 $S_n$에 의해 $c$에서 항을 $m'$개 지워 얻는 열 $u$가 있어 $u$가 $V$의 기저이다. 정의에 의해 $u$는 $v$에서 항을 $m' + 1$개 지워 얻는 열이다($c$가 $v$에서 $k$번째 항을 지운 열이므로). $u$의 길이 $n - m'$이 $0$ 이상이므로 $m' + 1 \le n + 1$이다.

(i), (ii)에서 $S_{n+1}$이 참이다. 시작점이 $0$인 귀납법의 원리에 의해 모든 $n \ge 0$에서 $S_n$이 참이다.
:::

## 예시와 반례

:::example[ℝ²에서 기저 뽑기]
$\mathbb{R}^2$의 열 $v = (1, 0), (2, 0), (0, 1)$은 $\mathbb{R}^2$를 생성합니다. $(a, b) = a(1, 0) + 0(2, 0) + b(0, 1) = (a, 0) + (0, 0) + (0, b) = (a, b)$이기 때문입니다. $v_2 = (2, 0) = 2(1, 0)$이므로 일차종속이고, $v_2$를 지우면 $(1, 0), (0, 1)$이 남습니다. 이 열은 일차독립이고($\alpha(1, 0) + \beta(0, 1) = (\alpha, \beta)$) $\mathbb{R}^2$를 생성하므로 기저입니다. 처음 항을 지워도 기저가 얻어집니다. $(2, 0), (0, 1)$은 $\alpha(2, 0) + \beta(0, 1) = (2\alpha, \beta) = (0, 0)$이면 $2 \ne 0$이므로 (K10)에 의해 $\alpha = 0$, 그리고 $\beta = 0$이어서 일차독립이고, $(a, b) = (2^{-1}a)(2, 0) + b(0, 1)$로 생성합니다. 이처럼 얻는 기저는 하나로 정해지지 않습니다.
:::

:::counterexample[생성한다는 가정이 없으면 깨진다]
$\mathbb{R}^2$의 열 $v = (1, 0), (2, 0)$에서 항을 지워 얻는 열은 $v$ 자신, $(2, 0)$, $(1, 0)$, 빈 열뿐입니다. 이 가운데 $\mathbb{R}^2$의 기저는 없습니다. 모두 일차결합의 둘째 값이 $0$이므로 $(0, 1)$을 표현하지 못하기 때문입니다(빈 열의 일차결합은 $(0, 0)$뿐). $v$가 $\mathbb{R}^2$를 생성하지 않으므로 정리의 가정이 깨진 경우입니다.
:::

## 확인 질문

:::check[$\mathbb{R}^2$의 열 $(0, 0), (1, 0), (0, 1)$은 $\mathbb{R}^2$를 생성한다. 이 열에서 어떻게 기저를 얻는가?]
첫째 항이 영벡터이므로 [[linear-independence|(I1)]]에 의해 일차종속이고, 정리의 증명처럼 한 항을 지울 수 있습니다. 첫째 항을 지우면 $(1, 0), (0, 1)$이 남는데, 이 열은 일차독립이고 $\mathbb{R}^2$를 생성하므로 기저입니다. ($m = 1$)
:::

:::check[$V = \mathbb{R}^X$, $X = \emptyset$일 때 $V$의 원소는 빈 함수 $o$ 하나뿐이다. 길이 $1$인 열 $(o)$에서 정리가 말하는 기저는 무엇인가?]
$o$가 영벡터이므로 열 $(o)$는 (I1)에 의해 일차종속이고 $V = \{o\}$를 생성합니다. 항을 하나 지우면 빈 열이 남고, [[basis|(Q1)]]에 의해 빈 열은 $V = \{0_V\}$의 기저입니다. 따라서 $m = 1$, $u$는 빈 열입니다.
:::
