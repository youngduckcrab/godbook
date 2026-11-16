---
title: 대우 증명
title_en: Proof by Contrapositive
aliases: [contrapositive proof, proof by contraposition, 대우를 이용한 증명]
kind: method
field: logic-foundations
msc: ["03F07"]
level: intro
summary: "\"P이면 Q이다\"를 증명하려면 대신 \"Q가 아니면 P가 아니다\"를 직접 증명한다."
requires: [proposition, logical-connectives, conditional-statement, contrapositive-law, direct-proof, even-and-odd, divisibility]
sources:
  - ref: hammack-book-of-proof
    loc: 5.1절 Contrapositive Proof, 진리표와 Outline for Contrapositive Proof, pp.128–129
    checked: original
    note: 출처는 조건문과 대우의 진리표를 다시 싣고 두 명제가 같은 말임을 근거로 대우 증명의 틀을 제시한다(p.129). 틀을 번호 붙인 단계로 쓴 것과 "왜 올바른가"의 설명 방식은 이 사이트에서 다시 쓴 것이다. 출처는 같은 명제를 직접 증명과 대우 증명으로 나란히 보이고(p.129), 아래 예시도 같은 종류(식이 짝수·홀수이면 x가 홀수·짝수)의 명제를 새 식으로 바꾸어 만든 것이다. 반례의 실수 사례는 새로 만들었다. 출처가 "대우 증명이 더 쉬운 때"를 설명하는 부분(p.130)은 문장을 옮기지 않고, 같은 취지를 직관에서 다시 썼다.
status: reviewed
review_note: "2026-11-16 독립 검토 3회. 수학적 오류 없음. 증명 없이 받아들이는 사실을 진술에 명시하고 출처 기록과 설명 문장을 보완."
added: 2026-11-16
---

:::statement
[[proposition]] $P$, $Q$에 대하여 [[conditional-statement]] $P \Rightarrow Q$를 증명하는 **대우 증명**(proof by contrapositive)의 틀은 다음과 같다.

1. "$Q$가 아니라고 가정한다"로 시작한다.
2. $\lnot Q$와 정의, 이미 증명된 사실, 증명 없이 받아들이기로 한 기본 성질에서 출발하여 각 단계의 근거를 밝히며 한 단계씩 추론한다.
3. 마지막 줄에서 "따라서 $P$가 아니다"를 얻는다.

이 세 단계는 [[direct-proof]]의 틀을 대우 $(\lnot Q) \Rightarrow (\lnot P)$에 적용한 것이며, 마치면 $P \Rightarrow Q$가 증명된다.
:::

:::english
Let $P$ and $Q$ be statements. A **proof by contrapositive** of the conditional statement $P \Rightarrow Q$ has the following form.

1. Begin by assuming that $Q$ is not true.
2. Starting from $\lnot Q$, definitions, facts already established, and basic properties accepted without proof, argue step by step, justifying each step.
3. In the last line, arrive at "therefore $P$ is not true."

These three steps apply the form of a direct proof to the contrapositive $(\lnot Q) \Rightarrow (\lnot P)$; once they are carried out, $P \Rightarrow Q$ is proved.
:::

## 직관

"비가 오면 땅이 젖는다"를 확인하는 방법은 둘입니다. 비 오는 날을 골라 땅이 젖었는지 보는 것이 직접 증명입니다. 거꾸로 땅이 젖지 않은 날을 골라 비가 오지 않았음을 보는 것도 같은 약속을 확인하는 일입니다. 땅이 젖지 않았는데 비가 왔다면 약속이 깨지기 때문입니다.

어느 쪽이 쉬운지는 명제마다 다릅니다. 가정 $P$에서 결론 $Q$로 가는 길이 막혀 있어도, $\lnot Q$에서 $\lnot P$로 가는 길은 정의를 한 번 적용하는 것만으로 열리는 경우가 있습니다. 특히 $Q$가 "홀수이다"처럼 부정하면 "짝수이다"가 되어 쓸 수 있는 정의가 생기는 경우가 그렇습니다. 이때는 이 방법이 편합니다.

## 왜 올바른가

[[contrapositive-law]]에 의해 $(P \Rightarrow Q) \equiv \bigl((\lnot Q) \Rightarrow (\lnot P)\bigr)$입니다. 곧 두 조건문은 진리표의 모든 줄에서 진릿값이 같으므로, 대우가 참이면 원래의 조건문도 참입니다.

대우 $(\lnot Q) \Rightarrow (\lnot P)$는 $\lnot Q$를 가정으로, $\lnot P$를 결론으로 하는 조건문이므로 [[direct-proof]]로 증명할 수 있습니다. 직접 증명의 틀에서 $P$를 $\lnot Q$로, $Q$를 $\lnot P$로 바꾸면 위 틀의 세 단계가 그대로 나옵니다. 그래서 대우 증명은 새로운 논리가 아니라 같은 말을 한 번 바꾸어 쓴 뒤 직접 증명을 쓰는 것입니다. 출처도 같은 진리표를 근거로 이 틀을 제시합니다.

변수가 있는 명제 "정수 $x$에 대하여 $P(x)$이면 $Q(x)$이다"에서도 $x$를 임의의 정수 하나로 두면 같은 설명이 적용됩니다. 이는 [[direct-proof]]의 "왜 올바른가"에서 본 것과 같습니다.

## 예시와 반례

:::example[대우 증명 한 편]
정수 $n$에 대하여 "$3n + 4$가 홀수이면 $n$은 홀수이다"를 대우로 증명한다. 대우는 "$n$이 홀수가 아니면 $3n + 4$는 홀수가 아니다"이다.

**증명.** $n$이 홀수가 아니라고 가정한다. [[even-and-odd]]에서 받아들인 사실에 의해 모든 정수는 짝수이거나 홀수이므로 $n$은 짝수이고, 짝수의 정의에 의해 $n = 2a$인 정수 $a$가 있다. 그러면 $3n + 4 = 6a + 4 = 2(3a + 2)$이다. 정수의 합·곱은 정수라는 기본 성질([[even-and-odd]]에서 증명 없이 받아들임)에 의해 $3a + 2$는 정수이므로, 짝수의 정의에 의해 $3n + 4$는 짝수이다. 짝수이면서 홀수인 정수는 없으므로 $3n + 4$는 홀수가 아니다. $\blacksquare$

직접 증명도 가능하지만 $3n + 4 = 2a + 1$에서 $n$을 $2b + 1$ 꼴로 끌어내야 하므로, 대우 쪽이 더 곧게 보입니다.
:::

:::counterexample[흔한 실수: 대우와 역·이를 혼동하기]
정수 $n$에 대하여 "$n$이 $4$의 배수이면 $n$은 짝수이다"를 증명한다고 합시다. 올바른 대우는 "$n$이 짝수가 아니면 $n$은 $4$의 배수가 아니다"입니다. 자리만 바꾼 $Q \Rightarrow P$를 **역**(converse), 부정만 한 $(\lnot P) \Rightarrow (\lnot Q)$를 **이**(inverse)라 부릅니다.

그런데 "$n$이 $4$의 배수가 아니라고 가정하고 $n$이 짝수가 아님을 보이자"고 하면, 이는 $(\lnot P) \Rightarrow (\lnot Q)$를 증명하려는 것이고 원래 명제와 같은 말이 아닙니다. 실제로 이 문장은 $n = 2$에서 거짓입니다. $2 = 4c$이면 $c = 0.5$이므로 $4 \nmid 2$인데 $2$는 짝수이기 때문입니다. 대우는 $P$와 $Q$의 자리를 **바꾸고 둘 다 부정**해야 합니다. 둘 중 하나만 하면 [[contrapositive-law]]가 보장하는 동치가 깨집니다.
:::

## 확인 질문

:::check[정수 $x$에 대하여 "$x^2$이 홀수이면 $x$는 홀수이다"를 대우 증명하려면 첫 줄과 마지막 줄은 무엇인가?]
첫 줄은 "$x$가 홀수가 아니라고 가정한다"이고 마지막 줄은 "따라서 $x^2$은 홀수가 아니다"입니다. 대우는 "$x$가 홀수가 아니면 $x^2$은 홀수가 아니다"이기 때문입니다.
:::

:::check[정수 $n$에 대하여 "$5n + 2$가 짝수이면 $n$은 짝수이다"의 대우를 쓰고, 그 증명의 핵심 계산을 하라.]
대우는 "$n$이 짝수가 아니면 $5n + 2$는 짝수가 아니다"입니다. $n$은 홀수이므로 $n = 2a + 1$이고, $5n + 2 = 10a + 7 = 2(5a + 3) + 1$입니다. $5a + 3$이 정수이므로 $5n + 2$는 홀수이고, 따라서 짝수가 아닙니다.
:::
