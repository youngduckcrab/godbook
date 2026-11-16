---
title: 귀류법
title_en: Proof by Contradiction
aliases: [proof by contradiction, reductio ad absurdum, 모순에 의한 증명, 배리법]
kind: method
field: logic-foundations
msc: ["03F07"]
level: intro
summary: 명제 P를 증명하려고 P가 거짓이라고 가정하고, 어떤 명제와 그 부정이 함께 성립한다는 모순을 이끌어낸다.
requires: [proposition, logical-connectives, conditional-statement, logical-equivalence, direct-proof, negation-of-conditional, negation-of-quantified-statements, even-and-odd, divisibility, even-square-implies-even]
sources:
  - ref: hammack-book-of-proof
    loc: 6장 도입, p.137; 6.1절 Proving Statements with Contradiction, 진리표와 Outline for Proof by Contradiction, p.138; 6.2절 Proving Conditional Statements by Contradiction, Outline, p.141; 모순이 C ∧ ∼C 꼴일 필요는 없다는 설명은 p.140
    checked: original
    note: 출처는 (∼P) ⇒ (C ∧ ∼C)의 진리표가 P와 같은 열을 가진다는 것으로 틀을 정당화한다(p.138). 아래 진리표는 같은 표를 직접 다시 계산한 것이다. 조건문을 귀류법으로 증명할 때 P와 ∼Q를 가정한다는 설명(p.141)은 ∼(P ⇒ Q)를 푼 것이며, 이 사이트는 이를 negation-of-conditional 항목으로 연결했다. 출처는 모순이 꼭 C ∧ ∼C 꼴일 필요가 없다고 한다(p.140). 아래 틀은 C ∧ ∼C 꼴만 쓴다. 예시 중 "4n + 2는 정수의 제곱이 아니다"는 출처 p.137 도입 예(a² − 4b ≠ 2)와 같은 내용을 다른 문자로 쓴 것이다. 조건문 예시와 반례는 새로 만들었다.
status: source-checked
added: 2026-11-16
---

:::statement
[[proposition]] $P$를 증명하는 **귀류법**(proof by contradiction)의 틀은 다음과 같다.

1. "$P$가 거짓이라고 가정한다", 곧 $\lnot P$를 가정한다.
2. $\lnot P$와 정의, 이미 증명된 사실, 증명 없이 받아들이기로 한 기본 성질에서 출발하여 각 단계의 근거를 밝히며 한 단계씩 추론한다.
3. 어떤 명제 $C$에 대해 $C$와 $\lnot C$가 모두 성립함, 곧 $C \land (\lnot C)$를 이끌어낸다. 이를 **모순**(contradiction)이라 한다.
4. 따라서 가정이 틀렸으므로 $P$이다.

증명할 명제가 조건문 $P \Rightarrow Q$이면 1단계의 가정은 $\lnot(P \Rightarrow Q)$이고, 이는 [[negation-of-conditional]]에 의해 $P \land (\lnot Q)$와 논리적으로 동치이다. 곧 "$P$이고 $Q$가 아니라고 가정한다"로 시작한다.
:::

:::english
A **proof by contradiction** of a statement $P$ has the following form.

1. Begin by assuming that $P$ is false, that is, assume $\lnot P$.
2. Starting from $\lnot P$, definitions, facts already established, and basic properties accepted without proof, argue step by step, justifying each step.
3. Derive, for some statement $C$, that both $C$ and $\lnot C$ hold, that is, $C \land (\lnot C)$. This is called a **contradiction**.
4. Conclude that the assumption was wrong, so $P$ is true.

If the statement to be proved is a conditional $P \Rightarrow Q$, the assumption in step 1 is $\lnot(P \Rightarrow Q)$, which is logically equivalent to $P \land (\lnot Q)$ by the negation of a conditional. That is, begin with "suppose $P$ is true and $Q$ is not true."
:::

## 직관

"그는 어제 오후 3시에 서울에 있지 않았다"를 보이려고 "어제 오후 3시에 서울에 있었다고 해 보자"로 시작하는 경우를 생각해 봅시다. 그렇다면 그는 어제 오후 3시에 부산에 있지 않았다는 결론이 나오는데, 기록에는 그가 어제 오후 3시에 부산에 있었다고 되어 있습니다. $C$를 "어제 오후 3시에 부산에 있었다"로 잡으면 가정에서 $\lnot C$가 나오고 기록은 $C$이므로 $C \land (\lnot C)$입니다. 한 사람이 같은 시각에 두 곳에 있을 수는 없으므로, 처음 가정을 버려야 합니다. 가정을 하나 세우고, 거기서 서로 맞지 않는 두 사실이 나오면 가정을 거부하는 방법입니다.

이 방법의 특징은 증명을 시작할 때 도착점인 $C$가 무엇인지 모를 수 있다는 점입니다. $\lnot P$에서 출발해 여러 결과를 이끌어 내다가, 어떤 명제와 그 부정이 함께 나오는 순간 증명이 끝납니다.

## 왜 올바른가

$P$와 $(\lnot P) \Rightarrow \bigl(C \land (\lnot C)\bigr)$의 진리표를 줄마다 직접 계산합니다. $C \land (\lnot C)$는 $C$가 참이든 거짓이든 하나는 거짓이므로 모든 줄에서 거짓입니다.

| $P$ | $C$ | $\lnot P$ | $C \land (\lnot C)$ | $(\lnot P) \Rightarrow \bigl(C \land (\lnot C)\bigr)$ |
|:---:|:---:|:---:|:---:|:---:|
| $T$ | $T$ | $F$ | $F$ | $T$ |
| $T$ | $F$ | $F$ | $F$ | $T$ |
| $F$ | $T$ | $T$ | $F$ | $F$ |
| $F$ | $F$ | $T$ | $F$ | $F$ |

첫째와 둘째 줄은 가정 $\lnot P$가 거짓이므로 조건문이 참입니다. 셋째와 넷째 줄은 $\lnot P$가 참인데 결론 $C \land (\lnot C)$가 거짓이어서 조건문이 거짓입니다. 마지막 열의 값은 $P$의 열과 모든 줄에서 같습니다. 곧 $P \equiv \bigl((\lnot P) \Rightarrow (C \land (\lnot C))\bigr)$이고([[logical-equivalence]]), 따라서 이 조건문을 증명하면 $P$를 증명한 것입니다.

그 조건문은 $\lnot P$를 가정하고 $C \land (\lnot C)$를 이끌어내는 [[direct-proof]]입니다. 위 틀의 1~3단계가 바로 이것이고, 4단계는 방금 본 동치에서 나옵니다. 출처도 같은 진리표를 근거로 이 틀을 제시합니다. 출처는 $2 \ne 2$처럼 분명히 거짓인 명제에 이르러도 된다고 하지만(p.140), 이 사이트는 모순을 $C \land (\lnot C)$ 꼴로 적습니다.

조건문을 증명할 때의 첫 줄은 $\lnot(P \Rightarrow Q)$입니다. [[negation-of-conditional]]에 의해 이는 $P \land (\lnot Q)$와 같으므로 그것을 가정합니다. 한정 기호가 들어 있는 명제의 부정은 [[negation-of-quantified-statements]]로 세웁니다. "모든 $x$에 대하여 ~이다"의 부정은 "~가 아닌 $x$가 존재한다"이므로, 귀류법의 첫 줄은 ~가 아닌 $x$가 하나 있다고 가정하는 것이 됩니다.

## 예시와 반례

:::example[한정 기호가 있는 명제]
"모든 정수 $n$에 대하여 $4n + 2$는 어떤 정수의 제곱도 아니다"를 귀류법으로 증명한다. 이 명제의 부정은 [[negation-of-quantified-statements]]에 의해 "어떤 정수 $n$과 어떤 정수 $m$이 있어 $m^2 = 4n + 2$이다"이다.

**증명.** 그런 정수 $n$, $m$이 있다고 가정한다. $m^2 = 4n + 2 = 2(2n + 1)$이고 정수의 합·곱은 정수라는 기본 성질([[even-and-odd]]에서 증명 없이 받아들임)에 의해 $2n + 1$은 정수이므로 $m^2$은 짝수이다. [[even-square-implies-even]]에 의해 $m$은 짝수이므로 $m = 2k$인 정수 $k$가 있다. 그러면 $4k^2 = 4n + 2$이고 양변을 $2$로 나누면 $2k^2 = 2n + 1$이다. 정수의 합·곱은 정수라는 기본 성질([[even-and-odd]]에서 증명 없이 받아들임)에 의해 $k^2$은 정수이므로 $2k^2 = 2n + 1$은 짝수이고, $n$이 정수이므로 $2n + 1$은 홀수이다. 같은 정수가 짝수이면서 홀수일 수는 없으므로([[even-and-odd]]) 모순이다. 따라서 가정이 틀렸고 명제가 증명되었다. $\blacksquare$
:::

:::example[조건문의 경우]
정수 $a$, $b$에 대하여 "$a$가 짝수이고 $b$가 홀수이면 $a \nmid b$이다"를 귀류법으로 증명한다. 부정은 $P \land (\lnot Q)$ 꼴이므로 "$a$는 짝수, $b$는 홀수이고 $a \mid b$이다"를 가정한다.

**증명.** $a$가 짝수, $b$가 홀수이고 $a \mid b$라고 가정한다. 짝수의 정의에 의해 $a = 2s$인 정수 $s$가 있고, [[divisibility]]의 정의에 의해 $b = ac$인 정수 $c$가 있다. 그러면 $b = 2sc = 2(sc)$이고 $sc$는 정수의 합·곱은 정수라는 기본 성질([[even-and-odd]]에서 증명 없이 받아들임)에 의해 정수이다. 따라서 $b$는 짝수이다. 그런데 가정에서 $b$는 홀수이다. $b$가 짝수이면서 홀수일 수는 없으므로 $C$를 "$b$는 홀수이다"로 잡으면 $C \land (\lnot C)$가 나와 모순이다. 따라서 가정이 틀렸다. $\blacksquare$
:::

:::counterexample[흔한 실수: 부정을 잘못 세우기]
위 첫째 예시에서 가정을 "모든 정수 $n$에 대하여 $4n + 2$는 어떤 정수의 제곱이다"로 세우면 틀립니다. 이는 "모든 ~에 대하여 ~가 아니다"의 부정이 아니라, 그보다 훨씬 강한 문장입니다. 부정은 "어떤 $n$에 대해 $4n + 2$가 제곱이다"입니다. 잘못된 가정에서는 예컨대 $n = 0$에서 $2$가 어떤 정수 $m$의 제곱이라는 것이 되는데, $|m| \le 1$이면 $m^2 \le 1$이고 $|m| \ge 2$이면 $m^2 \ge 4$이므로 이는 쉽게 모순입니다. 그러나 그 모순은 "모든 $n$에 대해 제곱이다"가 거짓임을 보일 뿐 원래 명제를 증명해 주지 않습니다. 원래 명제는 모든 $n$에 대해 제곱이 아님을 말하기 때문입니다. 부정은 한 번 더 확인해야 합니다.
:::

:::counterexample[흔한 실수: 모순이 아닌 것을 모순이라 하기]
위 둘째 예시에서 "$b = 2(sc)$이므로 $b$는 짝수이다"까지만 쓰고 "모순이다"라고 끝내면 틀립니다. $b$가 짝수라는 것은 그 자체로 이상한 결과가 아닙니다. 가정에 "$b$가 홀수이다"가 이미 들어 있어서, 이와 함께 놓았을 때 비로소 $C$("$b$는 홀수이다")와 $\lnot C$가 모두 나옵니다. 모순을 주장하려면 서로 부딪히는 두 명제를 모두 적어야 합니다.
:::

## 확인 질문

:::check[정수 $a$에 대하여 "$a^2 \ne 2$"를 귀류법으로 증명할 때 첫 줄은?]
증명할 명제의 부정을 가정합니다. "$a^2 = 2$인 정수 $a$가 있다고 가정한다"입니다. 이 문장이 "모든 정수 $a$에 대하여 $a^2 \ne 2$"의 부정이라는 점은 [[negation-of-quantified-statements]]에서 옵니다.
:::

:::check[조건문 "$x$가 정수이고 $x$가 짝수이면 $x + 1$은 홀수이다"를 귀류법으로 증명하려면 무엇을 가정하는가?]
$P \land (\lnot Q)$를 가정합니다. 곧 "$x$는 짝수이고 $x + 1$은 홀수가 아니다"입니다. [[negation-of-conditional]]에 의해 조건문의 부정이 이 꼴이기 때문입니다.
:::
