---
title: 수학적 귀납법
title_en: Mathematical Induction
aliases: [induction, proof by induction, 귀납법, 수학적귀납법]
kind: method
field: logic-foundations
msc: ["03F07"]
level: intro
summary: 자연수 n마다 명제 S_n이 있을 때, S_1이 참이고 모든 자연수 k에 대하여 S_k ⇒ S_{k+1}이 참임을 보여 모든 S_n이 참임을 증명한다.
requires: [proposition, open-sentence, quantifiers, conditional-statement, direct-proof, even-and-odd]
sources:
  - ref: hammack-book-of-proof
    loc: 10장 도입, pp.180–181 (S_1, S_2, …와 도미노 비유는 p.181); 10.1절 Proof by Induction, Outline for Proof by Induction, p.182; 0이나 다른 정수에서 시작하는 변형, ℤ 전체에는 쓸 수 없다는 설명, 귀납법과 귀납적 추론의 구별은 p.183; S_n ⇒ S_{n+1}이나 S_{n−1} ⇒ S_n로 써도 된다는 설명은 p.184
    checked: original
    note: 출처는 이 틀을 도미노 비유로 도입하며(p.181), 다른 원리로부터 이 틀을 증명하지 않는다. 10.1절(pp.182–186)을 읽은 범위에서는 그렇다. 이 사이트는 이를 자연수에 관한 기본 원리로 증명 없이 받아들이고 본문에 그렇게 적었다. "왜 올바른가"의 연쇄 설명(S_1, S_1 ⇒ S_2, …)은 출처의 도미노 설명을 조건문의 규칙으로 풀어 쓴 것이다. 출처의 개요는 "k ≥ 1인 정수 k에 대하여"이며 이 사이트는 자연수 ℕ = {1, 2, 3, …}에 맞추어 "모든 자연수 k"로 썼다. 출처는 S_0에서 시작하는 예(p.183)를 들며, 이 항목은 이를 한 문장으로만 언급한다. 예시와 반례(n² + n의 홀짝, n ≤ 3, n² + n + 41)는 새로 만들었다.
status: source-checked
added: 2026-11-16
---

:::statement
자연수 $n$마다 [[proposition]] $S_n$이 하나씩 있다고 하자. 곧 $S_n$은 자연수 $n$에 관한 [[open-sentence]]이고, 증명하려는 것은 $\forall n \in \mathbb{N},\ S_n$이다. 여기서 $\mathbb{N} = \{1, 2, 3, \dots\}$이다. **수학적 귀납법**(mathematical induction)의 틀은 다음과 같다.

1. **기초 단계**(basis step): $S_1$이 참임을 보인다.
2. **귀납 단계**(inductive step): 모든 자연수 $k$에 대하여 [[conditional-statement]] $S_k \Rightarrow S_{k+1}$이 참임을 보인다. 곧 $\forall k \in \mathbb{N},\ (S_k \Rightarrow S_{k+1})$를 증명한다. 보통 [[direct-proof]]를 쓴다. 자연수 $k$를 하나 잡고 $S_k$가 참이라고 **가정**(이를 **귀납 가정**(inductive hypothesis)이라 한다)한 뒤, 이로부터 $S_{k+1}$이 참임을 이끌어낸다.
3. 두 단계를 마치면 모든 자연수 $n$에 대하여 $S_n$이 참이라고 결론짓는다.

이 틀이 올바르다는 것, 곧 1과 2에서 3이 나온다는 것은 자연수에 관한 기본 원리(수학적 귀납의 원리)로서 이 사이트에서 증명 없이 받아들인다.
:::

:::english
For each natural number $n$, let $S_n$ be a statement; that is, $S_n$ is an open sentence in the natural number $n$, and the goal is to prove $\forall n \in \mathbb{N},\ S_n$, where $\mathbb{N} = \{1, 2, 3, \dots\}$. A proof by **mathematical induction** has the following form.

1. **Basis step**: show that $S_1$ is true.
2. **Inductive step**: show that the conditional statement $S_k \Rightarrow S_{k+1}$ is true for every natural number $k$; that is, prove $\forall k \in \mathbb{N},\ (S_k \Rightarrow S_{k+1})$. Usually a direct proof is used: take a natural number $k$, **assume** that $S_k$ is true (this assumption is called the **inductive hypothesis**), and deduce that $S_{k+1}$ is true.
3. Having completed both steps, conclude that $S_n$ is true for every natural number $n$.

That this form is valid, that is, that 3 follows from 1 and 2, is taken in this text as a basic principle about the natural numbers (the principle of mathematical induction) and is accepted without proof.
:::

## 직관

줄지어 세운 도미노를 떠올려 봅시다. 첫 도미노를 쓰러뜨릴 수 있고, 어느 도미노든 쓰러지면 바로 다음 도미노를 반드시 쓰러뜨린다면 모든 도미노가 쓰러집니다. $S_n$이 $n$번째 도미노이고, 쓰러진다는 것은 참이라는 뜻입니다. 기초 단계가 첫 도미노를 쓰러뜨리는 일이고, 귀납 단계가 "앞 도미노가 쓰러지면 다음 것도 쓰러진다"를 모든 자리에서 확인하는 일입니다.

이 비유에서 두 가지를 구분해야 합니다. 귀납 단계는 $S_k$가 참이라고 **주장하는** 것이 아니라 "$S_k$가 참이라면 $S_{k+1}$도 참이다"라는 조건문을 보이는 것입니다. 또 귀납 단계만으로는 어느 도미노도 쓰러지지 않습니다. 첫 도미노를 쓰러뜨리는 기초 단계가 있어야 연쇄가 시작됩니다.

귀납 단계에서 $k$는 아무 자연수나 될 수 있는 문자입니다. 그래서 $S_k$를 가정하는 것은 "참인지 모르는 것을 참이라 하고 쓴다"가 아니라, 조건문 $S_k \Rightarrow S_{k+1}$ 증명의 첫 줄에서 가정을 세우는 것입니다. 바로 [[direct-proof]]의 틀입니다.

## 왜 올바른가

기초 단계에서 $S_1$이 참이고, 귀납 단계에서 $k = 1$을 넣으면 $S_1 \Rightarrow S_2$가 참입니다. 조건문은 가정이 참이고 조건문 자체가 참이면 결론이 참입니다([[conditional-statement]]의 진리표에서 $P$가 참인 줄은 첫째 줄과 둘째 줄인데, 조건문이 참이므로 첫째 줄입니다). 그러므로 $S_2$가 참입니다. 같은 추론을 $k = 2$에 적용하면 $S_2 \Rightarrow S_3$이 참이고 $S_2$가 참이므로 $S_3$이 참입니다. 이렇게 $S_4$, $S_5$, $\dots$로 이어 갑니다.

이 설명은 어떤 구체적인 $n$에 대해서도 $n - 1$번의 추론으로 $S_n$에 닿을 수 있다는 것을 보여 줍니다. 그러나 "$\dots$"로 이어 가는 과정을 모든 $n$에 대해 한꺼번에 허용하는 것은 자연수가 $1$에서 시작해 $1$씩 커지며 모두 도달된다는 성질에 기댑니다. 이 설명은 엄밀한 증명이 아니라 원리의 내용을 풀어 쓴 것입니다. 이 사이트는 이를 자연수에 관한 기본 원리로 증명 없이 받아들입니다. 출처도 도미노 비유로 이 틀을 설명할 뿐 이 틀을 다른 것으로부터 증명하지는 않습니다.

기초 단계가 $1$이 아닌 다른 정수에서 시작할 수도 있습니다. 출처는 $S_0$에서 시작해 $n \ge 0$인 정수 전체를 다루는 예를 보입니다(p.183). 이 틀로 얻는 것은 시작한 수 이상의 정수에 대한 명제이며, 음의 정수까지 포함한 모든 정수에 대한 명제를 증명하려면 이 틀만으로는 부족합니다. 이 사이트에서는 앞으로 $\mathbb{N}$에 대한 명제만 다룹니다.

## 예시와 반례

:::example[$n^2 + n$은 짝수이다]
모든 자연수 $n$에 대하여 $S_n$: "$n^2 + n$은 짝수이다"를 귀납법으로 증명한다. 짝수의 정의는 [[even-and-odd]]에서 쓴다.

**증명.** (기초 단계) $S_1$은 $1^2 + 1 = 2$가 짝수라는 것이다. $2 = 2 \cdot 1$이므로 짝수이다.

(귀납 단계) 자연수 $k$를 하나 잡는다. $S_k \Rightarrow S_{k+1}$을 직접 증명한다. $S_k$, 곧 $k^2 + k$가 짝수라고 가정한다(귀납 가정). 짝수의 정의에 의해 $k^2 + k = 2a$인 정수 $a$가 있다. 그러면
$$(k+1)^2 + (k+1) = k^2 + 2k + 1 + k + 1 = (k^2 + k) + 2(k+1) = 2a + 2(k+1) = 2\bigl(a + k + 1\bigr)$$
이다. 정수의 합은 정수이므로([[even-and-odd]]에서 증명 없이 받아들임) $a + k + 1$은 정수이고, 따라서 $(k+1)^2 + (k+1)$은 짝수이다. 곧 $S_{k+1}$이 참이다. 이로써 $S_k \Rightarrow S_{k+1}$이 증명되었다.

기초 단계와 귀납 단계에 의해 모든 자연수 $n$에 대하여 $n^2 + n$은 짝수이다. $\blacksquare$
:::

이 방법으로 증명한 더 긴 보기는 [[sum-of-first-odd-numbers]]와 [[bernoulli-inequality]]에서 볼 수 있습니다.

:::counterexample[흔한 실수: 기초 단계를 빼먹기]
$S_n$: "$n^2 + n$은 홀수이다"라는 거짓 명제를 생각합니다. 귀납 단계만 보면 그럴듯하게 증명됩니다. $k^2 + k = 2a + 1$이라고 가정하면 $(k+1)^2 + (k+1) = (k^2 + k) + 2(k+1) = 2a + 1 + 2(k+1) = 2(a + k + 1) + 1$이므로 홀수입니다. 곧 모든 자연수 $k$에 대해 $S_k \Rightarrow S_{k+1}$은 **참**입니다.

그러나 $S_1$은 $1^2 + 1 = 2$가 홀수라는 말인데 $2$는 짝수이므로 거짓입니다. 기초 단계가 실패하므로 연쇄가 시작되지 않고, 실제로 모든 $S_n$이 거짓입니다. 귀납 단계가 참이라는 것만으로는 아무것도 증명되지 않습니다.
:::

:::counterexample[흔한 실수: 귀납 단계의 방향을 거꾸로 하기]
$S_n$: "$n \le 3$이다"를 생각합니다. $S_1$은 참입니다. 귀납 단계로 "$S_{k+1}$이라고 가정하면 $k + 1 \le 3$이므로 $k \le 3$, 곧 $S_k$"라고 쓰면 모든 자연수 $k$에 대해 $S_{k+1} \Rightarrow S_k$는 참입니다. 하지만 이는 필요한 조건문이 아닙니다. 필요한 것은 $S_k \Rightarrow S_{k+1}$이고, $k = 3$에서 $S_3$은 참이지만 $S_4$($4 \le 3$)는 거짓이므로 이 조건문은 거짓입니다. 귀납 가정은 $S_k$이고, 이끌어낼 것은 $S_{k+1}$입니다. 증명하려는 $S_{k+1}$을 가정에 쓰면 안 됩니다.
:::

:::counterexample[흔한 실수: 몇 개 확인하고 끝내기]
$n^2 + n + 41$이 소수인지 $n = 1, 2, 3, \dots$로 확인하면 $43, 47, 53, \dots$처럼 한동안 소수가 나옵니다. 그러나 $n = 40$에서 $40^2 + 40 + 41 = 1600 + 81 = 1681 = 41^2$으로 소수가 아닙니다. 여러 경우를 확인한 것은 귀납 단계를 보인 것이 아닙니다. 출처도 수학적 귀납법과 "관찰로부터 그럴 것이라 믿는" 귀납적 추론을 혼동하지 말라고 주의합니다(p.183).
:::

## 확인 질문

:::check[$S_n$: "$1 + 3 + 5 + \dots + (2n - 1) = n^2$"일 때, 귀납 단계에서 $k = 4$이면 무엇을 보이는가? 그 경우의 식을 직접 계산해 확인하라.]
$S_4 \Rightarrow S_5$를 보입니다. $S_4$는 $1 + 3 + 5 + 7 = 16 = 4^2$이고, $S_5$는 $1 + 3 + 5 + 7 + 9 = 25 = 5^2$입니다. $S_4$의 좌변 $16$에 새 항 $2 \cdot 5 - 1 = 9$를 더하면 $25$가 되어 $S_5$의 우변과 같습니다.
:::

:::check[귀납 단계만 증명하고 기초 단계를 생략하면 어떤 일이 생기는가?]
$S_k \Rightarrow S_{k+1}$이 모든 $k$에 대해 참이어도 어떤 $S_n$이 참인지 알 수 없습니다. 위 "$n^2 + n$은 홀수" 예처럼 귀납 단계는 참인데 모든 $S_n$이 거짓일 수 있습니다.
:::
