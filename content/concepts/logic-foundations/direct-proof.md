---
title: 직접 증명
title_en: Direct Proof
aliases: [direct proof, 직접증명]
kind: method
field: logic-foundations
msc: ["03F07"]
level: intro
summary: "\"P이면 Q이다\"를 증명하려면 P가 참이라고 가정하고 Q가 참임을 이끌어낸다."
requires: [proposition, conditional-statement]
sources:
  - ref: hammack-book-of-proof
    loc: 4.3절 Direct Proof, 개요와 Outline for Direct Proof, p.118 (예와 작성 요령은 pp.119–120)
    checked: original
    note: 출처는 조건문의 진리표를 보고 가정이 거짓인 두 줄은 따질 필요가 없다는 설명으로 이 틀을 도입하고, 이를 증명 없이 틀로 제시한다. 아래 "왜 올바른가"는 같은 진리표를 줄 단위로 다시 풀어 쓴 것이다. 증명의 틀을 번호 붙인 단계로 쓴 것과 예시, 반례의 실수 사례는 이 사이트에서 새로 만들었다.
status: source-checked
added: 2026-11-16
---

:::statement
[[proposition]] $P$, $Q$에 대하여 [[conditional-statement]] $P \Rightarrow Q$를 증명하는 **직접 증명**(direct proof)의 틀은 다음과 같다.

1. "$P$가 참이라고 가정한다"로 시작한다.
2. $P$와 정의, 이미 증명된 사실에서 출발하여 논리적으로 한 단계씩 추론한다.
3. 마지막 줄에서 "따라서 $Q$이다"를 얻는다.

이 세 단계를 마치면 $P \Rightarrow Q$가 증명된다.
:::

:::english
Let $P$ and $Q$ be statements. A **direct proof** of the conditional statement $P \Rightarrow Q$ has the following form.

1. Begin by assuming that $P$ is true.
2. Starting from $P$, definitions, and facts already established, argue step by step, justifying each step.
3. In the last line, arrive at "therefore $Q$."

Once these three steps are carried out, $P \Rightarrow Q$ is proved.
:::

## 직관

시험 약속 "만점을 받으면 상을 준다"가 지켜졌는지 확인하는 상황을 떠올려 봅시다. 만점을 받지 못한 학생에게는 상을 주든 안 주든 약속을 어긴 것이 아닙니다. 확인해야 할 사람은 **만점을 받은 학생뿐**이고, 그 학생이 상을 받았는지만 보면 됩니다.

직접 증명도 같은 구조입니다. $P$가 거짓인 경우는 조건문이 저절로 참이므로 걱정하지 않고, $P$가 참인 경우만 다룹니다. 그래서 "$P$가 참이라고 하자"로 시작하고, 그 상황에서 $Q$가 거짓일 수 없음을 보입니다.

실제로 증명을 쓸 때는 첫 줄("$P$라고 가정한다")과 마지막 줄("따라서 $Q$이다")을 먼저 적고 가운데를 채웁니다. 가정에 나온 용어는 정의로 풀어 쓰고, 결론이 되려면 마지막 직전 줄이 무엇이어야 하는지 정의를 보고 거꾸로 따져 가면 가운데가 이어집니다.

## 왜 올바른가

[[conditional-statement]]의 진리표는 다음 네 줄입니다.

| $P$ | $Q$ | $P \Rightarrow Q$ |
|:---:|:---:|:---:|
| $T$ | $T$ | $T$ |
| $T$ | $F$ | $F$ |
| $F$ | $T$ | $T$ |
| $F$ | $F$ | $T$ |

조건문이 거짓이 되는 줄은 둘째 줄, 곧 $P$가 참이고 $Q$가 거짓인 줄뿐입니다. 셋째와 넷째 줄은 $P$가 거짓이므로 $P \Rightarrow Q$가 이미 참이어서 따로 확인할 것이 없습니다. 남는 일은 첫째 줄과 둘째 줄, 곧 $P$가 참인 경우에서 둘째 줄이 일어날 수 없음을 보이는 것입니다.

직접 증명은 $P$가 참이라고 가정하고 $Q$가 참임을 이끌어냅니다. 그러면 $P$가 참인데 $Q$가 거짓인 둘째 줄은 일어날 수 없으므로, 거짓이 되는 줄이 남지 않고 $P \Rightarrow Q$는 참입니다. 출처도 이 틀을 같은 진리표 설명과 함께 제시하며, 틀 자체를 따로 증명하지는 않습니다.

## 예시와 반례

:::example[직접 증명 한 편]
정수 $x$에 대하여 "$x$가 짝수이면 $x + 5$는 홀수이다"를 직접 증명한다. 여기서는 [[even-and-odd]]의 정의를 쓴다.

**증명.** $x$가 짝수라고 가정한다. 짝수의 정의에 의해 $x = 2a$인 정수 $a$가 있다. 그러면 $x + 5 = 2a + 5 = 2(a + 2) + 1$이다. 정수 $a$에 $2$를 더한 $a + 2$는 정수이므로, $b = a + 2$로 두면 $x + 5 = 2b + 1$이고 $b$는 정수이다. 홀수의 정의에 의해 $x + 5$는 홀수이다. $\blacksquare$

이 증명의 첫 줄이 가정, 마지막 줄이 결론, 사이의 줄들이 정의와 계산으로 이어 가는 부분입니다. 같은 틀로 쓴 더 긴 증명은 [[odd-square-is-odd]]와 [[divisibility-is-transitive]]에서 볼 수 있습니다.
:::

:::counterexample[흔한 실수: 결론에서 거꾸로 가기]
정수 $x$에 대하여 "$x$가 $4$의 배수이면 $x$는 짝수이다"를 증명하려고 "$x$가 짝수라고 하자. 그러면 …"로 시작하면 틀린 틀입니다. 이는 $P \Rightarrow Q$ 대신 $Q \Rightarrow P$를 증명하는 것입니다. 원래 문장은 참이지만 그 역인 "짝수이면 $4$의 배수이다"는 $x = 2$에서 거짓이므로, 거꾸로 가는 추론은 믿을 수 없습니다. 증명은 항상 **가정에서 출발해 결론으로** 가야 합니다.
:::

:::counterexample[흔한 실수: 예 하나로 끝내기]
"정수 $x$가 짝수이면 $x + 5$는 홀수이다"를 $x = 4$일 때 $9$가 홀수임을 확인하고 끝내면 증명이 아닙니다. 이 문장은 모든 짝수 $x$에 대한 주장이므로, $x$를 특정한 수로 잡지 말고 "짝수"라는 가정만 쓰는 $x = 2a$ 꼴로 추론해야 합니다.
:::

## 확인 질문

:::check[정수 $x$에 대하여 "$x$가 홀수이면 $x + 1$은 짝수이다"를 직접 증명하려면 첫 줄과 마지막 줄을 어떻게 쓰는가?]
첫 줄은 "$x$가 홀수라고 가정한다"이고 마지막 줄은 "따라서 $x + 1$은 짝수이다"입니다. 가운데는 홀수의 정의로 $x = 2a + 1$을 쓰고 $x + 1 = 2a + 2 = 2(a + 1)$로 계산하여, $a + 1$이 정수이므로 짝수의 정의를 만족한다고 잇습니다.
:::

:::check[직접 증명에서 $P$가 거짓인 경우를 따로 다루지 않아도 되는 이유는?]
$P$가 거짓이면 $P \Rightarrow Q$가 $Q$의 참·거짓과 상관없이 참이기 때문입니다. 진리표의 셋째, 넷째 줄이 그 경우입니다.
:::
