---
title: 강한 귀납법
title_en: Strong Induction
aliases: [strong induction, proof by strong induction, 완전 귀납법, 강귀납법]
kind: method
field: logic-foundations
msc: ["03F07"]
level: intro
summary: 귀납 단계에서 S_k만이 아니라 처음부터 S_k까지가 모두 참이라고 가정하고 S_{k+1}을 이끌어내는 귀납법의 변형이다.
requires: [proposition, open-sentence, logical-connectives, conditional-statement, quantifiers, direct-proof, mathematical-induction]
sources:
  - ref: hammack-book-of-proof
    loc: 10.2절 Proof by Strong Induction, 도입 설명과 Outline for Proof by Strong Induction, p.187 (도입 문단의 도미노 설명과 "S_{k−1}이나 S_{k−2}를 쓸 수도 있다"는 설명은 p.187, 기초 단계가 여러 개인 예는 pp.187–188, 같은 절의 트리 예에서 S_k만으로는 부족한 까닭은 p.190)
    checked: original
    note: 출처의 개요는 "(1) 첫 명제 S_1을 증명한다. (필요하면 처음 몇 개의 S_n을)"과 "(2) k ≥ 1인 정수 k에 대하여 (S_1 ∧ S_2 ∧ ⋯ ∧ S_k) ⇒ S_{k+1}을 증명한다"이다(p.187). 이 사이트는 기초 단계로 처음 r + 1개를 확인하는 경우와 시작점이 정수 m인 경우를 함께 쓸 수 있도록 진술에 명시했다. 출처가 이 틀을 정당화하는 방법은 도미노 비유("처음 k개가 쓰러지면 (k+1)번째도 쓰러진다")뿐이고, 보통의 귀납법에서 끌어내지는 않는다. "왜 올바른가"의 T_n 논증은 이 사이트에서 직접 쓴 것이며 출처 10.2절에 없다. 점화식 a_{n+1} = a_n + a_{n−1}은 출처 10.5절(p.193)의 피보나치 수열과 같은 꼴이고, 초깃값과 증명하는 부등식은 새로 정했다. 예시(수열 a_n ≤ 2^n)와 반례(1, 2, 1, 2, …)는 새로 만들었다. 출처의 우표 문제(3¢, 5¢)와 12 | (n⁴ − n²), 트리의 변의 수 예는 쓰지 않았다.
status: reviewed
review_note: "2026-11-16 독립 검토 3회. 수학적 오류 없음. 진술의 정밀도(홀수인 자연수, 한정 기호 순서, 시작점)와 증명 없이 쓰는 성질의 명시를 보완."
added: 2026-11-16
---

:::statement
$m$이 정수이고 $n \ge m$인 정수 $n$마다 [[proposition]] $S_n$이 있다고 하자. **강한 귀납법**(strong induction)으로 "$n \ge m$인 모든 정수 $n$에 대하여 $S_n$이다"를 증명하는 틀은 다음과 같다. $r \ge 0$은 정수이고, 보통은 $r = 0$이다.

1. **기초 단계**: $S_m, S_{m+1}, \dots, S_{m+r}$, 곧 처음 $r + 1$개의 명제가 모두 참임을 보인다. ($r = 0$이면 $S_m$ 하나만 보인다.)
2. **귀납 단계**: $k \ge m + r$인 모든 정수 $k$에 대하여 $(S_m \land S_{m+1} \land \cdots \land S_k) \Rightarrow S_{k+1}$이 참임을 보인다. 보통 [[direct-proof]]를 쓴다. 임의의 정수 $k \ge m + r$을 하나 잡고 $S_m$부터 $S_k$까지가 **모두** 참이라고 가정(이를 귀납 가정이라 한다)한 뒤, 그 가운데 필요한 것을 골라 써서 $S_{k+1}$이 참임을 이끌어낸다.
3. 두 단계를 마치면 $n \ge m$인 모든 정수 $n$에 대하여 $S_n$이 참이라고 결론짓는다.

[[mathematical-induction]]과 달리 귀납 가정에 $S_k$뿐 아니라 $S_m, \dots, S_{k-1}$도 들어 있다. $m = 1$, $r = 0$이면 모든 자연수 $n$에 대한 $S_n$을 증명하는 틀이다.
:::

:::english
Let $m$ be an integer, and suppose a statement $S_n$ is given for each integer $n \ge m$. The form of a proof by **strong induction** that $S_n$ is true for every integer $n \ge m$ is as follows. Here $r \ge 0$ is an integer, usually $r = 0$.

1. **Basis step**: show that $S_m, S_{m+1}, \dots, S_{m+r}$, the first $r + 1$ statements, are all true. (If $r = 0$, only $S_m$ is shown.)
2. **Inductive step**: show that $(S_m \land S_{m+1} \land \cdots \land S_k) \Rightarrow S_{k+1}$ is true for every integer $k \ge m + r$. Usually a direct proof is used: take an arbitrary integer $k \ge m + r$, assume that $S_m$ through $S_k$ are **all** true (this is the inductive hypothesis), and deduce $S_{k+1}$, using whichever of them are needed.
3. Having completed both steps, conclude that $S_n$ is true for every integer $n \ge m$.

Unlike mathematical induction, the inductive hypothesis contains not only $S_k$ but also $S_m, \dots, S_{k-1}$. For $m = 1$ and $r = 0$, this is a form for proving $S_n$ for every natural number $n$.
:::

## 직관

계단을 한 칸씩 오른다고 해 봅시다. 보통의 귀납법은 "바로 앞 계단에 서 있으면 다음 계단에 오를 수 있다"만 씁니다. 강한 귀납법은 "그때까지 밟아 온 계단을 모두 밟았다면 다음 계단에 오를 수 있다"를 씁니다. 지나온 계단이 모두 참이라는 정보를 쓸 수 있으니 가정이 더 많고, 증명하기 쉬워지는 경우가 있습니다.

어떤 명제 $S_{k+1}$이 바로 앞의 $S_k$가 아니라 훨씬 앞의 $S_j$($j < k$)에서 나올 때 이 방법이 편리합니다. 예를 들어 어떤 수를 더 작은 두 수의 곱으로 쪼개면 두 인수가 어떤 크기가 될지 미리 알 수 없고, $k$ 바로 아래가 아닐 수 있습니다. 이 경우 $S_k$ 하나만 가정해서는 그대로 증명하기 어렵고 처음부터 $k$까지를 모두 쓸 수 있어야 합니다.

귀납 가정이 넓어진 대신, 기초 단계에서 명제를 둘 이상 확인해야 하는 경우가 생깁니다. 귀납 단계가 $S_{k-1}$을 쓰면 $k-1 \ge m$이어야 하므로 $k \ge m + 1$이 되고, 따라서 $S_{m+1}$은 귀납 단계가 만들어 주지 못하니 기초 단계에서 직접 확인해야 합니다. 출처도 "필요하면 처음 몇 개의 $S_n$을" 확인하라고 적습니다(p.187).

## 왜 올바른가

출처는 이 틀을 도미노 비유("처음 $k$개가 쓰러지면 $k + 1$번째도 쓰러진다")로 설명할 뿐 다른 것으로부터 증명하지 않습니다. 이 사이트에서는 [[mathematical-induction]]의 원리를 받아들였으므로, 그것으로부터 이 틀을 끌어낼 수 있습니다. 아래는 이 사이트에서 쓴 논증입니다.

$m$, $r$을 정하고 기초 단계와 귀납 단계가 증명되었다고 하자. $m + r$ 이상의 정수 $n$에 대하여 $T_n$을 "$S_m, S_{m+1}, \dots, S_n$이 모두 참이다"라는 명제로 둔다. $T_n$에 [[mathematical-induction]]의 시작점이 $m + r$인 꼴을 적용한다.

- 기초 단계: $T_{m+r}$은 "$S_m, \dots, S_{m+r}$이 모두 참이다"이며, 이는 강한 귀납법의 기초 단계가 보인 것이다.
- 귀납 단계: $k \ge m + r$인 정수 $k$에 대하여 $T_k$가 참이라고 가정한다. 곧 $S_m, \dots, S_k$가 모두 참이다. 강한 귀납법의 귀납 단계에 의해 $(S_m \land \cdots \land S_k) \Rightarrow S_{k+1}$이 참이므로 $S_{k+1}$이 참이다. $S_m, \dots, S_k$가 참이고 $S_{k+1}$도 참이므로 $T_{k+1}$이 참이다. 따라서 모든 정수 $k \ge m + r$에 대하여 $T_k \Rightarrow T_{k+1}$이다.

그러므로 $n \ge m + r$인 모든 정수 $n$에 대하여 $T_n$이 참이다. 이제 $n \ge m$인 정수 $n$을 하나 잡는다. $n$과 $m + r$ 중 작지 않은 쪽을 $N$이라 하면(곧 $N = \max(n, m + r)$) $N \ge m + r$이므로 $T_N$이 참이고, $T_N$은 $S_m$부터 $S_N$까지를 포함한다. $m \le n \le N$이므로 $S_n$이 그 가운데 있어 참이다.

이 논증에서 쓴 것은 [[logical-connectives]]의 $\land$, [[conditional-statement]]의 규칙, 보통의 귀납법뿐입니다. 곧 강한 귀납법은 새 원리를 받아들이는 것이 아니라 보통의 귀납법을 $T_n$에 적용한 것입니다.

## 예시와 반례

:::example[수열의 크기 어림]
수열 $a_1, a_2, a_3, \dots$을 $a_1 = 1$, $a_2 = 2$, 그리고 $n \ge 2$인 자연수 $n$에 대하여 $a_{n+1} = a_n + a_{n-1}$로 정한다. 처음 몇 항은 $1, 2, 3, 5, 8, \dots$이다. 모든 자연수 $n$에 대하여 $S_n$: "$a_n \le 2^n$"임을 강한 귀납법($m = 1$, $r = 1$)으로 증명한다. 실수의 부등식에 관한 고등학교 수준의 성질(같은 수를 더해도, 양수를 곱해도 부등호가 유지됨, 두 부등식을 변끼리 더할 수 있음, $2^k = 2 \cdot 2^{k-1}$)은 증명 없이 쓴다.

**증명.** (기초 단계) $S_1$은 $a_1 = 1 \le 2^1 = 2$이고, $S_2$는 $a_2 = 2 \le 2^2 = 4$이다. 둘 다 참이다.

(귀납 단계) 임의의 정수 $k \ge 2$를 하나 잡고, $S_1, \dots, S_k$가 모두 참이라고 가정한다. $k \ge 2$이므로 $a_{k+1} = a_k + a_{k-1}$이 성립하고 $k - 1 \ge 1$이므로 $S_{k-1}$도 가정에 들어 있다. $S_k$와 $S_{k-1}$에서 $a_k \le 2^k$, $a_{k-1} \le 2^{k-1}$이므로
$$a_{k+1} = a_k + a_{k-1} \le 2^k + 2^{k-1} = 3 \cdot 2^{k-1} < 4 \cdot 2^{k-1} = 2^{k+1}$$
이다. 따라서 $a_{k+1} < 2^{k+1}$이므로 $a_{k+1} \le 2^{k+1}$, 곧 $S_{k+1}$이 참이다.

기초 단계와 귀납 단계에 의해 모든 자연수 $n$에 대하여 $a_n \le 2^n$이다. $\blacksquare$
:::

이 증명은 $S_k$와 $S_{k-1}$ 두 개를 썼으므로 귀납 가정이 $S_k$ 하나뿐인 보통의 귀납법으로는 그대로 되지 않고, 기초 단계에서 $S_1$, $S_2$ 둘을 확인했습니다.

[[prime-factorization-exists]]는 이 방법으로 증명하는 정리입니다. 거기서는 $m = 2$이고 귀납 가정에서 어떤 $S_j$가 필요한지 미리 알 수 없습니다.

:::counterexample[흔한 실수: 기초 단계를 모자라게 확인하기]
수열 $d_1 = 1$, $d_2 = 2$, 그리고 $n \ge 2$인 자연수 $n$에 대하여 $d_{n+1} = d_{n-1}$로 정합니다. 처음 몇 항은 $1, 2, 1, 2, \dots$입니다. $S_n$: "$d_n = 1$"이라는 문장을 생각합니다.

$S_1$은 $d_1 = 1$로 참입니다. 귀납 단계는 $k \ge 2$에서 $d_{k+1} = d_{k-1}$이므로, $S_{k-1}$이 참이면 $d_{k+1} = d_{k-1} = 1$이어서 $S_{k+1}$이 참이라고 쓸 수 있습니다. 곧 $S_{k-1} \Rightarrow S_{k+1}$이 모든 $k \ge 2$에서 참입니다. 여기서 기초 단계를 $S_1$ 하나만 확인하고 "강한 귀납법으로 모든 $n$에 대해 $d_n = 1$"이라 하면 틀립니다.

이 귀납 단계는 $S_{k-1}$을 쓰므로 $k - 1 \ge 1$, 곧 $k \ge 2$에서만 성립합니다. 강한 귀납법의 틀에서 귀납 단계가 $k \ge 2$부터 시작하려면 $m + r = 2$, 곧 $r = 1$이어서 기초 단계에서 $S_1$과 $S_2$를 둘 다 확인해야 합니다. $S_2$는 귀납 단계가 만들어 주지 못합니다($k = 2$의 귀납 단계는 $S_3$을 줍니다). 그런데 $S_2$는 $d_2 = 2 \ne 1$이므로 거짓입니다. 실제로 $d_2 = 2$, $d_4 = d_2 = 2$처럼 짝수 번째 항은 $2$이고, 기초 단계의 빈틈이 거짓 명제를 "증명"하게 만든 것입니다.
:::

## 확인 질문

:::check[위 예시의 귀납 단계에서 $k = 3$이면 가정에서 어떤 명제를 쓰고, 무엇을 계산하는가?]
$a_4 = a_3 + a_2 = 3 + 2 = 5$를 구합니다. 쓰는 것은 $S_3$($a_3 \le 2^3 = 8$)과 $S_2$($a_2 \le 2^2 = 4$)입니다. 증명의 어림으로는 $a_4 \le 2^3 + 2^2 = 12 < 2^4 = 16$이므로 $S_4$가 참입니다.
:::

:::check[귀납 단계에서 $S_{k+1}$을 증명하는 데 $S_{k-2}$를 쓴다고 하자. 시작점이 $m$일 때 기초 단계에서 최소한 몇 개를 확인해야 하는가?]
$k - 2 \ge m$이어야 귀납 단계가 의미가 있으므로 귀납 단계는 $k \ge m + 2$에서 $S_{k+1}$, 곧 $S_{m+3}$부터를 만듭니다. 따라서 $S_m, S_{m+1}, S_{m+2}$ 세 개를 기초 단계에서 직접 확인해야 합니다($r = 2$).
:::
