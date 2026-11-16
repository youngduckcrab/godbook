---
title: 직접 증명
title_en: Direct Proof
aliases: [direct proof, 직접증명]
kind: method
field: logic-foundations
msc: ["03F07"]
level: intro
summary: "\"P이면 Q이다\"를 증명하려면 P가 참이라고 가정하고 Q가 참임을 이끌어낸다."
requires: [proposition, conditional-statement, open-sentence, quantifiers, even-and-odd, divisibility]
sources:
  - ref: hammack-book-of-proof
    loc: 4.3절 Direct Proof, 개요와 Outline for Direct Proof, p.118 (예와 작성 요령은 pp.119–120)
    checked: original
    note: 출처는 조건문의 진리표를 보고 가정이 거짓인 두 줄은 따질 필요가 없다는 설명으로 이 틀을 도입하며, 틀 자체를 따로 증명하지는 않는다. 아래 "왜 올바른가"는 같은 진리표를 줄 단위로 다시 풀어 쓰고, 변수 x가 있는 꼴(모든 정수 x에 대한 증명)으로 넓히는 설명을 덧붙인 것이다. 후자는 출처 p.118의 설명에 없고 이 사이트에서 덧붙였다. 증명의 틀을 번호 붙인 단계로 쓴 것과 예시, 반례의 실수 사례는 이 사이트에서 새로 만들었다.
status: reviewed
review_note: "2026-11-16 독립 검토 3회. 수학적 오류 없음. 증명 없이 받아들이는 사실을 진술에 명시하고 출처 기록과 설명 문장을 보완."
added: 2026-11-16
---

:::statement
[[proposition]] $P$, $Q$에 대하여 [[conditional-statement]] $P \Rightarrow Q$를 증명하는 **직접 증명**(direct proof)의 틀은 다음과 같다.

1. "$P$가 참이라고 가정한다"로 시작한다.
2. $P$와 정의, 이미 증명된 사실, 증명 없이 받아들이기로 한 기본 성질에서 출발하여 각 단계의 근거를 밝히며 한 단계씩 추론한다.
3. 마지막 줄에서 "따라서 $Q$이다"를 얻는다.

이 세 단계를 마치면 $P \Rightarrow Q$가 증명된다.

"정수 $x$에 대하여 $P(x)$이면 $Q(x)$이다"처럼 [[open-sentence]]에 대한 명제는 $x$를 임의의 정수 하나로 두고 같은 틀을 쓰며, 이로써 $\forall x \in \mathbb{Z},\ (P(x) \Rightarrow Q(x))$가 증명된다.
:::

:::english
Let $P$ and $Q$ be statements. A **direct proof** of the conditional statement $P \Rightarrow Q$ has the following form.

1. Begin by assuming that $P$ is true.
2. Starting from $P$, definitions, facts already established, and basic properties accepted without proof, argue step by step, justifying each step.
3. In the last line, arrive at "therefore $Q$."

Once these three steps are carried out, $P \Rightarrow Q$ is proved.

For a statement about an open sentence, such as "for an integer $x$, if $P(x)$ then $Q(x)$," take $x$ to be an arbitrary integer and use the same form; this proves $\forall x \in \mathbb{Z},\ (P(x) \Rightarrow Q(x))$.
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

이 항목의 예시와 뒤따르는 정리들은 "정수 $x$에 대하여 $P(x)$이면 $Q(x)$이다"꼴, 곧 $\forall x \in \mathbb{Z},\ (P(x) \Rightarrow Q(x))$입니다. $x$를 정수 하나로 정해 두면 $P(x)$, $Q(x)$는 명제가 되어 위의 설명이 그대로 적용됩니다. 증명이 $x$에 대해 "정수이고 $P(x)$가 참이다"라는 것 말고는 아무것도 쓰지 않았다면, 같은 논증이 모든 정수 $x$에 통하므로 [[quantifiers]]의 뜻에 의해 $\forall x \in \mathbb{Z},\ (P(x) \Rightarrow Q(x))$가 참입니다.

아래 "예 하나로 끝내기"가 증명이 아닌 까닭도 여기에 있습니다. 특정한 $x$ 하나를 확인하는 것은 모든 정수에 통하는 논증이 아닙니다. 변수가 여럿이어도 각각을 임의의 정수로 두면 마찬가지입니다.

## 예시와 반례

:::example[직접 증명 한 편]
정수 $x$에 대하여 "$x$가 짝수이면 $x + 5$는 홀수이다"를 직접 증명한다. 여기서는 [[even-and-odd]]의 정의를 쓴다.

**증명.** $x$가 짝수라고 가정한다. 짝수의 정의에 의해 $x = 2a$인 정수 $a$가 있다. 그러면 $x + 5 = 2a + 5 = 2(a + 2) + 1$이다. 정수의 합·곱은 정수라는 기본 성질([[even-and-odd]]에서 증명 없이 받아들임)에 의해 $a + 2$는 정수이므로, $b = a + 2$로 두면 $x + 5 = 2b + 1$이고 $b$는 정수이다. 홀수의 정의에 의해 $x + 5$는 홀수이다. $\blacksquare$

이 증명의 첫 줄이 가정, 마지막 줄이 결론, 사이의 줄들이 정의와 계산으로 이어 가는 부분입니다. 같은 틀로 쓴 더 긴 증명은 [[odd-square-is-odd]]와 [[divisibility-is-transitive]]에서 볼 수 있습니다.
:::

:::counterexample[흔한 실수: 결론을 가정하기]
정수 $x$에 대하여 "$x$가 $4$의 배수이면 $x$는 짝수이다"를 증명하려고 "$x$가 짝수라고 하자. 그러면 …"로 시작하면 틀린 틀입니다. 이는 $P \Rightarrow Q$ 대신 $Q \Rightarrow P$를 증명하는 것입니다. 원래 문장은 참이지만 그 역인 "짝수이면 $4$의 배수이다"는 $x = 2$에서 거짓입니다. $2$는 짝수이지만 $2 = 4c$이면 $c = 0.5$로 정수가 아니므로 $4 \nmid 2$이기 때문입니다.

그러므로 쓰는 증명의 첫 줄에서 $Q$를 가정하면 안 되고, 직접 증명은 가정 $P$에서 출발해 결론 $Q$로 가야 합니다. 연습장에서 $Q$가 되려면 직전 줄이 무엇이어야 하는지 거꾸로 따져 보는 것은 좋은 계획 방법이며, 문제가 되는 것은 $Q$ 자체를 이미 참인 것으로 놓고 증명의 첫 줄로 쓰는 것입니다.
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
