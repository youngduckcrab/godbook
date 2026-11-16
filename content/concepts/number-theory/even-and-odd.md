---
title: 짝수와 홀수
title_en: Even and Odd Integers
aliases: [even, odd, 짝수, 홀수]
kind: definition
field: number-theory
msc: ["11A07"]
level: intro
summary: 정수 n은 n = 2a인 정수 a가 있을 때 짝수, n = 2a + 1인 정수 a가 있을 때 홀수이다.
requires: [set, quantifiers]
sources:
  - ref: hammack-book-of-proof
    loc: 4.2절 Definitions, Definition 4.1과 4.2, p.115 (정의를 쌍조건문으로 읽는다는 설명도 p.115). 정수의 합·차·곱에 관한 Fact 4.1과 나눗셈 정리는 p.117. "짝수이거나 홀수"를 쓰는 곳은 p.124(4.4절), p.54(2.7절 Example 2.5)
    checked: original
    note: 출처는 정의를 "~이면 짝수이다" 꼴로 쓰면서, 이를 "정확히 ~일 때"로 읽는 것이 관례라고 같은 쪽에서 설명한다. 아래 진술은 처음부터 양방향으로 적었다. 출처는 p.117에서 Fact 4.1(정수의 합·차·곱은 정수)을 "without justification or proof" 받아들이고, 나눗셈 정리(정수 a와 양의 정수 b에 대해 a = qb + r, 0 ≤ r < b인 정수 q, r이 유일하게 존재)도 증명 없이 받아들인다. 출처는 4.2절에서 "모든 정수는 짝수이거나 홀수이고 둘 다는 아니다"를 따로 진술하지 않는다. 다만 p.124(4.4절의 증명)에서 'n is either even or odd'를, p.54(Example 2.5)에서 'Every integer that is not odd is even'을 증명 없이 쓴다. '둘 다는 아니다'를 문장으로 적은 곳은 확인하지 못했다. 이 사이트는 두 부분을 모두 증명 없이 받아들이며, 이는 p.117의 나눗셈 정리에서 b = 2인 경우, 곧 나머지가 0 또는 1이고 유일하다는 것에 해당한다. 예시와 확인 질문은 출처 p.115의 예(10 = 2·5, 7 = 2·3 + 1, 7은 짝수가 아님)와 같은 꼴에 수를 바꾸어 만들었다.
status: reviewed
review_note: "2026-11-16 독립 검토 3회. 수학적 오류 없음. 증명 없이 받아들이는 사실을 진술에 명시하고 출처 기록과 설명 문장을 보완."
added: 2026-11-16
---

:::statement
$n$이 정수, 곧 [[set|집합]] $\mathbb{Z}$의 원소일 때, 다음과 같이 정의한다. 두 정의 모두 "정확히 ~일 때"로 읽는다. 곧 아래 조건이 성립하면 $n$이 그 이름으로 불리고, 반대로 $n$이 그 이름으로 불리면 아래 조건이 성립한다.

- $n$이 **짝수**(even)인 것은 정확히 $n = 2a$인 정수 $a$가 **존재할** 때이다($\exists a \in \mathbb{Z},\ n = 2a$).
- $n$이 **홀수**(odd)인 것은 정확히 $n = 2a + 1$인 정수 $a$가 **존재할** 때이다($\exists a \in \mathbb{Z},\ n = 2a + 1$).

여기서 $a$는 $n$마다 달라질 수 있는 정수이다. 괄호 안은 같은 조건을 [[quantifiers]]의 존재 기호로 쓴 것이다.

이 사이트는 다음 두 사실을 증명 없이 받아들인다.

- 정수끼리 더하거나 빼거나 곱한 결과는 정수이다. (정수의 합·차·곱에 관한 기본 성질)
- 모든 정수는 짝수이거나 홀수이며, 둘 다인 정수는 없다.
:::

:::english
Let $n$ be an integer, that is, an element of $\mathbb{Z}$. The following definitions are meant as "if and only if": whenever the stated condition holds, $n$ has the stated name, and conversely, whenever $n$ has the name, the condition holds.

- $n$ is **even** if and only if there exists an integer $a$ with $n = 2a$ ($\exists a \in \mathbb{Z},\ n = 2a$).
- $n$ is **odd** if and only if there exists an integer $a$ with $n = 2a + 1$ ($\exists a \in \mathbb{Z},\ n = 2a + 1$).

Here $a$ is an integer that may depend on $n$. The parenthetical forms write the same conditions with the existential quantifier.

This site accepts the following two facts without proof.

- The sum, difference, and product of integers are integers. (the basic property of integer sums, differences, and products)
- Every integer is even or odd, and no integer is both.
:::

## 직관

짝수는 "둘씩 짝지어 남김없이 묶이는 개수"이고, 홀수는 "둘씩 묶고 하나가 남는 개수"입니다. $n = 2a$는 $a$개의 짝으로 묶인다는 뜻이고, $n = 2a + 1$은 $a$개의 짝과 낱개 하나라는 뜻입니다. 정수에는 음수와 $0$도 있으므로 $a$가 음수나 $0$이어도 됩니다.

정수를 둘씩 묶으면 낱개가 남지 않거나 하나 남거나 둘 중 하나이고 둘 다는 아니라는 것이, 진술 끝에서 받아들인 "짝수이거나 홀수이며 둘 다는 아니다"입니다. 그래서 짝수가 아닌 정수는 곧 홀수입니다.

이 정의를 쓰는 방법은 두 가지입니다. 어떤 정수가 짝수라는 사실이 주어지면 그것을 $2a$ 꼴의 식으로 바꿔 쓸 수 있습니다. 거꾸로 어떤 수를 $2b$ 꼴이나 $2b + 1$ 꼴로 정리해 내면, 그 수가 짝수나 홀수임을 결론 내릴 수 있습니다. 정의가 양방향이기 때문에 두 방향 모두 가능합니다.

## 예시와 반례

:::example
- $18 = 2 \cdot 9$이므로 $18$은 짝수입니다.
- $-7 = 2 \cdot (-4) + 1$이므로 $-7$은 홀수입니다. $a = -4$는 정수이므로 문제없습니다.
- $0 = 2 \cdot 0$이므로 $0$은 짝수입니다.
- $n$이 정수일 때 $2n + 6 = 2(n + 3)$입니다. 정수의 합·곱은 정수라는 기본 성질(위 진술에서 받아들임)에 의해 $n + 3$은 정수이므로, $2n + 6$은 짝수입니다.
:::

:::counterexample
$9$는 짝수가 아닙니다. 짝수라면 $9 = 2a$인 정수 $a$가 있어야 하는데, 그러면 $a = 4.5$여야 하고 $4.5$는 정수가 아닙니다. "짝수가 아님"을 보이려면 이처럼 $2a$ 꼴로 쓸 수 있는 정수 $a$가 **없음**을 보여야 합니다. 몇 가지 $a$를 넣어 맞지 않는 것을 확인하는 것만으로는 부족합니다.
:::

## 확인 질문

:::check[$n$이 정수일 때 $4n + 3$은 홀수인가?]
홀수입니다. $4n + 3 = 4n + 2 + 1 = 2(2n + 1) + 1$이고, 정수의 합·곱은 정수라는 기본 성질(위 진술에서 받아들임)에 의해 $2n + 1$은 정수입니다. $a = 2n + 1$로 잡으면 $4n + 3 = 2a + 1$이므로 정의에 의해 홀수입니다.
:::

:::check[$-10$은 짝수인가? $0$은 홀수인가?]
$-10 = 2 \cdot (-5)$이고 $-5$는 정수이므로 $-10$은 짝수입니다. $0$이 홀수라면 $0 = 2a + 1$인 정수 $a$가 있어야 하는데, 그러면 $a = -\tfrac{1}{2}$이어야 하고 $-\tfrac{1}{2}$은 정수가 아닙니다. 따라서 $0$은 홀수가 아닙니다.
:::
