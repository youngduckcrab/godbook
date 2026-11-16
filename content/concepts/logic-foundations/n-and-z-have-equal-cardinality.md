---
title: 자연수의 집합과 정수의 집합은 크기가 같다
title_en: The Natural Numbers and the Integers Have Equal Cardinality
aliases: ["|N| = |Z|", 자연수와 정수의 크기]
kind: theorem
field: logic-foundations
msc: ["03E10"]
level: intro
summary: "짝수 $n = 2k$에 $k$를, 홀수 $n = 2k + 1$에 $-k$를 대응시키는 $f : \\mathbb{N} \\to \\mathbb{Z}$는 전단사이므로 $|\\mathbb{N}| = |\\mathbb{Z}|$이다."
requires: [set, function, injective-surjective-bijective, even-and-odd, equal-cardinality]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 14.1절 Sets with Equal Cardinalities, Theorem 14.1, p.271 (전단사를 보이는 표는 Example 14.2, p.270)
    checked: original
    note: "출처 Theorem 14.1은 'ℕ에서 ℤ로의 전단사가 존재하므로 |ℕ| = |ℤ|이다'라고 진술하고, 증명은 Example 14.2(p.270)의 표 f(1) = 0, f(2) = 1, f(3) = −1, f(4) = 2, f(5) = −2, …로 함수를 보이며 '모든 정수가 둘째 줄에 정확히 한 번 나타난다'는 설명과 '표를 만든 방식이 f(m) ≠ f(n)을 강제한다'는 설명으로 단사와 전사를 말한다. 아래 f는 이 표와 같은 함수이지만, 이 사이트는 표 대신 짝수와 홀수로 경우를 나눈 식으로 함수를 정하고 그 함수가 잘 정의됨, 정수값임, 단사임, 전사임을 정의에 따라 빠짐없이 증명한다. 출처의 증명 방식과 다르다. 짝수와 홀수의 이분과 정수·부등식에 관한 사실은 출처에 쓰이지 않고 이 사이트의 증명에서 쓴다. 예시와 반례, 확인 질문은 이 사이트에서 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
자연수의 집합 $\mathbb{N}$의 원소 $n$에 대하여 $f(n)$을 다음과 같이 정한다.

- $n$이 [[even-and-odd|짝수]]이고 $n = 2k$인 정수 $k$를 잡으면, $f(n) = k$이다.
- $n$이 [[even-and-odd|홀수]]이고 $n = 2k + 1$인 정수 $k$를 잡으면, $f(n) = -k$이다.

그러면 $f$는 $\mathbb{N}$에서 정수의 집합 $\mathbb{Z}$로의 [[function|함수]] $f : \mathbb{N} \to \mathbb{Z}$이고, [[injective-surjective-bijective|전단사]]이다. 따라서 [[equal-cardinality]]의 정의에 의해 $|\mathbb{N}| = |\mathbb{Z}|$이다.
:::

:::english
For an element $n$ of the set $\mathbb{N}$ of natural numbers, define $f(n)$ as follows.

- If $n$ is even and $k$ is an integer with $n = 2k$, then $f(n) = k$.
- If $n$ is odd and $k$ is an integer with $n = 2k + 1$, then $f(n) = -k$.

Then $f$ is a function $f : \mathbb{N} \to \mathbb{Z}$ from $\mathbb{N}$ to the set $\mathbb{Z}$ of integers, and it is bijective. Hence, by the definition of equal cardinality, $|\mathbb{N}| = |\mathbb{Z}|$.
:::

## 직관

$\mathbb{Z}$에는 음의 정수가 더 있으니 $\mathbb{Z}$가 $\mathbb{N}$보다 "두 배쯤 크다"고 느끼기 쉽습니다. 그러나 크기가 같다는 말의 뜻은 짝짓기가 가능하다는 것입니다. 자연수를 $1, 2, 3, 4, 5, \dots$ 순서로 부르면서 정수를 $0, 1, -1, 2, -2, \dots$ 순서로 하나씩 짝지으면, 양의 정수와 음의 정수가 번갈아 나오므로 어느 정수도 놓치지 않고 어느 정수도 두 번 나오지 않는 것처럼 보입니다.

이 "것처럼 보임"을 증명으로 바꾸는 것이 이 항목입니다. 홀수 번째 자연수는 $0$ 이하의 정수로, 짝수 번째 자연수는 양의 정수로 가는 것이 핵심입니다. "번갈아 나온다"는 느낌은 증명이 아니므로, 아래 증명은 느낌에 기대지 않고 식으로 정의한 $f$가 단사이고 전사임을 정의에 따라 따집니다.

## 증명

:::idea
짝수는 양의 정수로, 홀수는 $0$ 이하의 정수로 보낸다. 짝수와 홀수는 겹치지 않으므로 서로 다른 입력이 같은 값을 낼 수 없고, 양의 정수와 $0$, 음의 정수를 각각 어떤 자연수가 만드는지 직접 적을 수 있다.
:::

:::hint
$f(1), f(2), f(3), f(4), f(5)$를 직접 계산해 보면 어떤 정수가 어떤 자연수의 값인지 보인다.
:::

:::hint
단사는 두 입력이 둘 다 짝수, 둘 다 홀수, 하나씩인 경우로 나눠 확인한다. 전사는 정수 $b$가 양수, $0$, 음수인 경우로 나눠 $f(n) = b$인 $n$을 찾는다.
:::

:::proof
**잘 정의됨.** $n \in \mathbb{N}$이라 하자. $n$은 정수이므로 [[even-and-odd]]에 의해 짝수이거나 홀수이고 둘 다는 아니다. $n$이 짝수이면 $n = 2k$인 정수 $k$가 있다. $n = 2k = 2k'$인 정수 $k'$이 또 있으면 양변을 $2$로 나누어 $k = k'$이므로 $k$는 $n$에서 하나로 정해지고 $f(n) = k$는 하나의 값이다. $n$이 홀수이면 $n = 2k + 1$인 정수 $k$가 있고, $n = 2k + 1 = 2k' + 1$이면 양변에서 $1$을 빼고 $2$로 나누어 $k = k'$이므로 $f(n) = -k$도 하나의 값이다. 두 경우는 겹치지 않으므로 모든 $n \in \mathbb{N}$에 대하여 $f(n)$이 정확히 하나로 정해진다.

**값이 정수이다.** 두 경우 모두 $k$가 정수이고 $-k$도 정수이므로 $f(n) \in \mathbb{Z}$이다. 따라서 $\{(n, f(n)) : n \in \mathbb{N}\} \subseteq \mathbb{N} \times \mathbb{Z}$이고, 모든 $n \in \mathbb{N}$에 대하여 $(n, z) \in f$인 $z \in \mathbb{Z}$가 정확히 하나 있으므로 $f : \mathbb{N} \to \mathbb{Z}$는 [[function]]의 정의를 만족한다.

**값의 부호.** 다음 두 사실을 먼저 보인다.

(가) $n \in \mathbb{N}$이 짝수이고 $n = 2k$이면 $f(n) = k \ge 1$이다. $n \ge 1$이므로 $k \le 0$이면 $n = 2k \le 0$이라 모순이다. 따라서 $k$는 $0$보다 큰 정수이고 $k \ge 1$이다.

(나) $n \in \mathbb{N}$이 홀수이고 $n = 2k + 1$이면 $f(n) = -k \le 0$이다. $k \le -1$이면 $n = 2k + 1 \le -1 < 1$이라 $n \ge 1$에 모순이므로 $k \ge 0$이고 $-k \le 0$이다.

**단사.** $a, a' \in \mathbb{N}$이고 $f(a) = f(a')$라 하고 $a = a'$임을 보인다. $a$, $a'$ 각각은 짝수이거나 홀수이므로 다음 네 경우가 있다.

- 둘 다 짝수: $a = 2k$, $a' = 2k'$이면 $f(a) = k$, $f(a') = k'$이므로 $k = k'$이고 $a = 2k = 2k' = a'$이다.
- 둘 다 홀수: $a = 2k + 1$, $a' = 2k' + 1$이면 $f(a) = -k$, $f(a') = -k'$이므로 $-k = -k'$에서 $k = k'$이고 $a = 2k + 1 = 2k' + 1 = a'$이다.
- $a$가 짝수이고 $a'$이 홀수: (가)에 의해 $f(a) \ge 1$이고 (나)에 의해 $f(a') \le 0$이므로 $f(a) \ne f(a')$이다. 이는 $f(a) = f(a')$라는 가정에 모순이어서 이 경우는 일어나지 않는다.
- $a$가 홀수이고 $a'$이 짝수: (나)에 의해 $f(a) \le 0$이고 (가)에 의해 $f(a') \ge 1$이므로 $f(a) \ne f(a')$이다. 역시 가정에 모순이어서 이 경우는 일어나지 않는다.

일어날 수 있는 경우에서 모두 $a = a'$이므로 $f$는 단사이다([[injective-surjective-bijective]]의 동치 꼴).

**전사.** $b \in \mathbb{Z}$라 하자. 정수 $b$는 $b > 0$, $b = 0$, $b < 0$ 가운데 하나이다.

- $b > 0$: $b \ge 1$이므로 $n = 2b$는 $n \ge 2 \ge 1$인 정수, 곧 $n \in \mathbb{N}$이다. $n = 2 \cdot b$이고 $b$가 정수이므로 $n$은 짝수이고 $k = b$로 잡을 수 있어서 $f(n) = b$이다.
- $b = 0$: $n = 1$은 자연수이고 $1 = 2 \cdot 0 + 1$이므로 홀수이고 $k = 0$이다. $f(1) = -0 = 0 = b$이다.
- $b < 0$: $-b \ge 1$이므로 $n = 2(-b) + 1 \ge 3$이고 $n \in \mathbb{N}$이다. $n = 2(-b) + 1$이고 $-b$가 정수이므로 $n$은 홀수이고 $k = -b$로 잡을 수 있어서 $f(n) = -(-b) = b$이다.

어느 경우에도 $f(n) = b$인 $n \in \mathbb{N}$이 있으므로 $f : \mathbb{N} \to \mathbb{Z}$는 전사이다.

$f : \mathbb{N} \to \mathbb{Z}$는 단사이고 전사이므로 전단사이다. 전단사 $f : \mathbb{N} \to \mathbb{Z}$가 존재하므로 [[equal-cardinality]]의 정의에 의해 $|\mathbb{N}| = |\mathbb{Z}|$이다.

이 증명에서 증명 없이 쓴 정수와 부등식의 사실은 다음이다. 정수의 합·차·곱은 정수이다. 정수는 양수, $0$, 음수 가운데 정확히 하나이다. 정수에 대하여 $k \le 0$이면 $2k \le 0$이고 $k \le -1$이면 $2k + 1 \le -1$이다. 정수 $b \ge 1$이면 $2b \ge 2$이다. 자연수는 $1$ 이상의 정수이다. 등식의 양변을 $2$로 나누어도 등식이 성립한다.
:::

## 예시와 반례

:::example[처음 몇 개의 값]
$1 = 2 \cdot 0 + 1$은 홀수이고 $k = 0$이므로 $f(1) = 0$입니다. $2 = 2 \cdot 1$이므로 $f(2) = 1$입니다. $3 = 2 \cdot 1 + 1$이므로 $f(3) = -1$입니다. $4 = 2 \cdot 2$이므로 $f(4) = 2$입니다. $5 = 2 \cdot 2 + 1$이므로 $f(5) = -2$입니다. $6 = 2 \cdot 3$이므로 $f(6) = 3$이고 $7 = 2 \cdot 3 + 1$이므로 $f(7) = -3$입니다. 값이 $0, 1, -1, 2, -2, 3, -3, \dots$ 순서로 나옵니다.
:::

:::example[원상 찾기]
정수 $-4$를 값으로 하는 자연수는 증명의 전사 부분의 $b < 0$ 경우에 의해 $n = 2 \cdot 4 + 1 = 9$입니다. $9 = 2 \cdot 4 + 1$은 홀수이고 $k = 4$이므로 $f(9) = -4$입니다. 정수 $6$을 값으로 하는 자연수는 $b > 0$ 경우에 의해 $n = 2 \cdot 6 = 12$이고 $f(12) = 6$입니다.
:::

:::counterexample[식 하나가 전사가 아니라고 크기가 다른 것은 아니다]
$g(n) = n$으로 정한 $g : \mathbb{N} \to \mathbb{Z}$는 단사입니다($g(a) = g(a')$이면 $a = a'$). 그러나 $0 \in \mathbb{Z}$에 대하여 $g(n) = 0$인 $n \in \mathbb{N}$은 없으므로($n \ge 1$) 전사가 아니어서 전단사가 아닙니다. 그렇다고 해서 $|\mathbb{N}| \ne |\mathbb{Z}|$인 것은 아닙니다. 크기가 같지 않으려면 $\mathbb{N}$에서 $\mathbb{Z}$로의 전단사가 하나도 없어야 하는데, 위의 $f$가 전단사입니다. $g$는 $\mathbb{Z}$의 원소 $0$과 음의 정수들을 놓치는 짝짓기일 뿐입니다.
:::

:::counterexample[$f$를 식 하나로 쓰면 함수가 아니다]
"모든 $n$에 대해 $f(n) = n/2$"라고 쓰면 $n = 1$에서 $1/2$이 정수가 아니어서 $\mathbb{N}$에서 $\mathbb{Z}$로의 함수가 되지 않습니다. 짝수일 때와 홀수일 때로 나누어 정의해야 모든 자연수의 값이 정수가 됩니다.
:::

## 확인 질문

:::check[$f(8)$과 $f(9)$를 구하고, $f(n) = -7$인 자연수 $n$을 구하라.]
$8 = 2 \cdot 4$이므로 $f(8) = 4$입니다. $9 = 2 \cdot 4 + 1$이므로 $f(9) = -4$입니다. $f(n) = -7$이려면 $n$이 홀수이고 $k = 7$이어야 하므로 $n = 2 \cdot 7 + 1 = 15$입니다. 실제로 $f(15) = -7$입니다.
:::

:::check[정수 $-3$, $0$, $5$를 각각 값으로 하는 자연수를 구하라.]
$-3$은 $n = 2 \cdot 3 + 1 = 7$입니다($f(7) = -3$). $0$은 $n = 1$입니다($f(1) = 0$). $5$는 $n = 2 \cdot 5 = 10$입니다($f(10) = 5$).
:::
