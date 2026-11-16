---
title: 유클리드 호제법
title_en: Euclidean Algorithm
aliases: [Euclidean algorithm, Euclid's algorithm, 유클리드 알고리즘, 호제법]
kind: method
field: number-theory
msc: ["11A05"]
level: undergrad
summary: 정수 a를 양의 정수 b로 나눈 나머지 r로 (a, b)를 (b, r)로 바꾸기를 되풀이하면 나머지가 0이 될 때의 b가 a와 b의 최대공약수이다.
requires: [division-theorem, greatest-common-divisor, gcd-subtract-multiple, strong-induction, well-ordering-principle, prime-number]
sources:
  - ref: stein-elementary-number-theory
    loc: 1.1.2절, Algorithm 1.1.13 (Greatest Common Division), pp.5–6 (단계 1–2는 p.5, 단계 3–4와 증명은 p.6), 앞의 동기 계산 p.5와 Example 1.1.14, 1.1.15, p.6
    checked: original
    note: "Stein의 원제는 \"Greatest Common Division\"이고 본문(Lemma 1.1.17의 증명, p.6)에서 이 절차를 Euclid's algorithm이라 부른다. \"유클리드 호제법\"이라는 말은 출처에 나오지 않는다(널리 쓰이는 이름). Stein의 단계 1은 a, b를 절댓값으로 바꾸고 a > b로 만든 뒤 시작하는데, 이 항목은 절댓값을 쓰지 않고 a는 임의의 정수, b는 양의 정수로 시작한다(b가 음수이면 greatest-common-divisor의 성질 (iii)으로 −b로 바꾼다). 0 ≤ a < b이면 첫 단계(a = 0·b + a)가 두 수를 맞바꾸는 일을 한다. Stein의 증명은 \"Lemmas 1.1.9–1.1.10에 의해 gcd(a, b) = gcd(b, r)이므로 단계 4에서 gcd가 변하지 않는다. 나머지가 음이 아닌 정수의 감소하는 수열을 이루므로 알고리즘이 끝난다\"가 전부이다(p.6). 곧 종료는 비형식적으로 서술되어 있다. 아래 \"왜 올바른가\"의 (가)는 gcd-subtract-multiple을 대칭성을 거쳐 쓰고 둘 다 0은 아님의 조건까지 확인하며, (나)의 종료와 출력의 증명은 강한 귀납법으로 쓴 이 사이트의 증명이다. 예시의 수는 새로 골랐다."
  - ref: hammack-book-of-proof
    loc: 5장 연습문제 31 (p.136)과 그 풀이 (p.320)
    checked: original
    note: "Hammack에는 이 알고리즘의 서술이 없다. 연습문제 31이 나눗셈 정리 a = qb + r에서 gcd(a, b) = gcd(r, b)임을 보이라고 하며(한 단계의 등식), 풀이는 공약수가 서로 같은 쌍의 공약수임을 두 방향으로 보인다. 이 항목의 (가)는 이 등식을 gcd-subtract-multiple과 대칭성으로 얻는다."
status: reviewed
review_note: "2026-11-16 독립 검토 3회. 수학적 오류 없음. 받아들이는 사실 (Z8)과 따름 사실 (L1)–(L3)을 진술에 명시, 거짓이던 예시 문장과 출처 쪽수 정정."
added: 2026-11-16
---

:::statement
**유클리드 호제법**(Euclidean algorithm)은 정수 $a$와 양의 정수 $b$가 주어졌을 때 $\gcd(a, b)$를 구하는 다음 절차이다.

1. (입력) 정수 $a$와 양의 정수 $b$를 받는다.
2. (나누기) [[division-theorem|나눗셈 정리]]로 $a = qb + r$, $0 \le r < b$인 정수 $q$, $r$을 구한다.
3. (끝내기) $r = 0$이면 $b$를 출력하고 끝낸다.
4. (되풀이) $r \ne 0$이면 지금의 $b$를 새 $a$로, $r$을 새 $b$로 바꾸고 2단계로 돌아간다. ($r \ge 0$이고 $r \ne 0$이므로 $r > 0$이어서 새 $b$도 양의 정수이다.)

이 절차는 다음 두 성질을 가진다.

- (가) 2단계에서 얻은 $a$, $b$, $r$에 대하여 $\gcd(a, b) = \gcd(b, r)$이다. 곧 4단계에서 바꾸어도 최대공약수는 변하지 않는다. ($r = 0$이면 $\gcd(b, 0)$은 정의되고 $b$이다.)
- (나) 절차는 유한 번의 단계 뒤에 끝나고, 출력은 처음 입력의 $\gcd(a, b)$이다.

입력이 둘 다 $0$은 아닌 임의의 정수 $a$, $b$일 때는 다음과 같이 준비한다. $b > 0$이면 그대로 시작한다. $b < 0$이면 [[greatest-common-divisor]]의 성질 (iii)에 의해 $\gcd(a, b) = \gcd(a, -b)$이고 $-b > 0$이므로 $b$를 $-b$로 바꿔 시작한다. $b = 0$이면 $a \ne 0$이고, $a > 0$이면 (iv)에 의해 $\gcd(a, 0) = a$, $a < 0$이면 (iii)과 (iv)에 의해 $\gcd(a, 0) = \gcd(-a, 0) = -a$이므로 절차가 필요 없다.
:::

:::english
The **Euclidean algorithm** is the following procedure for computing $\gcd(a, b)$ from an integer $a$ and a positive integer $b$.

1. (Input) Take an integer $a$ and a positive integer $b$.
2. (Divide) By the division theorem, find integers $q$ and $r$ with $a = qb + r$ and $0 \le r < b$.
3. (Stop) If $r = 0$, output $b$ and stop.
4. (Repeat) If $r \ne 0$, replace $a$ by the current $b$ and $b$ by $r$, and return to step 2. (Since $r \ge 0$ and $r \ne 0$, we have $r > 0$, so the new $b$ is again a positive integer.)

The procedure has the following two properties.

- (a) For $a$, $b$, $r$ obtained in step 2, $\gcd(a, b) = \gcd(b, r)$. That is, the replacement in step 4 does not change the greatest common divisor. (If $r = 0$, then $\gcd(b, 0)$ is defined and equals $b$.)
- (b) The procedure stops after finitely many steps, and its output is $\gcd(a, b)$ for the original input.

For arbitrary integers $a$ and $b$ that are not both $0$, prepare as follows. If $b > 0$, start as it is. If $b < 0$, then $\gcd(a, b) = \gcd(a, -b)$ by property (iii) of the greatest common divisor and $-b > 0$, so start with $-b$ in place of $b$. If $b = 0$, then $a \ne 0$; if $a > 0$ then $\gcd(a, 0) = a$ by (iv), and if $a < 0$ then $\gcd(a, 0) = \gcd(-a, 0) = -a$ by (iii) and (iv), so no procedure is needed.
:::

## 직관

가로 $a$, 세로 $b$인 직사각형 바닥($a > b > 0$이라 합시다)을 한 변이 $b$인 정사각형 타일로 가능한 만큼 깝니다. 타일을 $q$장 깔고 폭 $r$인 띠가 남으면 $a = qb + r$입니다. 이제 남은 띠(가로 $b$, 세로 $r$)에 한 변이 $r$인 타일로 같은 일을 합니다. 띠가 남김없이 덮이는 순간의 타일 한 변이 처음 바닥을 남김없이 덮을 수 있는 가장 큰 타일의 한 변, 곧 최대공약수입니다. 이 비유는 양수에서만 맞고, 음수 $a$는 나눗셈 정리가 $0 \le r < b$인 나머지를 주는 것으로 처리됩니다.

계산에서 하는 일은 단순합니다. 큰 수를 작은 수로 나눈 나머지를 구하고, 작은 수와 그 나머지에 같은 일을 되풀이합니다. 나머지는 나누는 수보다 항상 작아지므로 언젠가 $0$이 됩니다. 수가 클 때도 소인수분해 없이 최대공약수를 구할 수 있다는 점이 이 절차의 쓸모입니다.

## 왜 올바른가

두 가지를 보여야 합니다. 한 단계가 최대공약수를 바꾸지 않는다는 것과, 절차가 반드시 끝난다는 것입니다.

**(가) 한 단계에서 최대공약수가 보존된다.** $a$는 정수, $b$는 양의 정수이고 $a = qb + r$, $0 \le r < b$라 합시다. $b \ne 0$이므로 $a$와 $b$는 둘 다 $0$은 아닙니다. 다음 등호들이 이어집니다.

- $\gcd(a, b) = \gcd(b, a)$. [[greatest-common-divisor]]의 성질 (ii)이다($a$, $b$가 둘 다 $0$은 아님).
- $\gcd(b, a) = \gcd(b, a - bq)$. [[gcd-subtract-multiple]]의 진술에서 $(a, b, n)$ 자리에 $(b, a, q)$를 넣은 것이다. 이 진술의 가정은 "$b$와 $a$가 둘 다 $0$은 아닌 정수이고 $q$가 정수"인데 $b \ne 0$이므로 성립한다. 진술의 결론에 의해 $b$와 $a - bq$도 둘 다 $0$은 아니다. 곧 $b$의 $q$배를 $a$에서 빼는 꼴이다.
- $a - bq = r$이므로 $\gcd(b, a - bq) = \gcd(b, r)$이다.

따라서 $\gcd(a, b) = \gcd(b, r)$입니다. 특히 $r = 0$이면 $\gcd(a, b) = \gcd(b, 0) = b$입니다. $b > 0$이므로 (iv)에 의해 $\gcd(b, 0) = b$이기 때문입니다.

**(나) 절차는 끝나고 출력은 최대공약수이다.** 자연수 $n$마다 명제 $S_n$을 "임의의 정수 $a$에 대하여, $(a, n)$에서 시작한 절차는 유한 번의 단계 뒤에 끝나고 $\gcd(a, n)$을 출력한다"로 정하고, [[strong-induction]]으로 모든 자연수 $n$에서 $S_n$이 참임을 보입니다($m = 1$, $r = 0$ 꼴).

- 기초 단계 ($S_1$): 임의의 정수 $a$에 대해 $a = qb + r$, $0 \le r < 1$, $b = 1$이라 하면 $r < 1$에서 (Z1)에 의해 $r + 1 \le 1$이고 양변에서 $1$을 빼면 $r \le 0$입니다. $0 \le r$과 $r \le 0$에서 [[well-ordering-principle]]의 (L2)에 의해 $r = 0$입니다. 3단계에서 $b = 1$을 출력하고 끝납니다. (가)에 의해 $\gcd(a, 1) = 1$이므로 출력이 맞습니다.
- 귀납 단계: $k \ge 1$인 정수 $k$에 대하여 $S_1, \dots, S_k$가 모두 참이라고 가정하고 $S_{k+1}$을 보입니다. 임의의 정수 $a$와 $b = k + 1$에서 시작하여 2단계로 $a = qb + r$, $0 \le r < b$를 얻습니다.
  - $r = 0$이면 3단계에서 $b$를 출력하고 끝나며, (가)에 의해 $b = \gcd(a, b)$입니다.
  - $r \ne 0$이면 $r > 0$이고, $r \ge 1$입니다((Z1)). $r < k + 1$에서 (Z1)과 (Z7)로 $r \le k$입니다. 곧 $r$은 $1 \le r \le k$인 자연수이므로 귀납 가정 $S_r$이 참입니다. 절차의 각 단계는 지금의 쌍만 보고 정해지고, 2단계의 $q$, $r$은 [[division-theorem|나눗셈 정리]]의 유일성에 의해 하나로 정해지므로, 4단계에서 $(b, r)$로 바뀐 뒤의 절차는 $(b, r)$에서 시작한 절차와 같습니다. $S_r$을 정수 $b$($a$ 자리)에 쓰면 이 절차는 유한 번의 단계 뒤에 끝나고 $\gcd(b, r)$을 출력합니다. (가)에 의해 $\gcd(b, r) = \gcd(a, b)$입니다. 한 단계가 더해졌을 뿐이므로 $(a, b)$에서 시작한 절차도 유한 번의 단계 뒤에 끝나고 $\gcd(a, b)$를 출력합니다.

강한 귀납법의 원리에 의해 모든 자연수 $n$에서 $S_n$이 참입니다. 이것이 (나)입니다. "나머지가 음이 아니면서 매번 작아지니 끝난다"는 말만으로는 이 사이트에서 증명이 되지 않으므로, 위처럼 나누는 수 $b$에 대한 강한 귀납법으로 씁니다. 나머지 $r$이 $b$보다 작다는 것이 귀납 가정을 쓸 수 있게 해 줍니다.

## 예시와 반례

:::example[$\gcd(654, 222)$]
$654 = 2 \cdot 222 + 210$, $222 = 1 \cdot 210 + 12$, $210 = 17 \cdot 12 + 6$, $12 = 2 \cdot 6 + 0$입니다. 각 줄에서 $(a, b)$는 $(654, 222) \to (222, 210) \to (210, 12) \to (12, 6)$로 바뀌고 마지막 줄에서 나머지가 $0$이므로 $b = 6$을 출력합니다. $\gcd(654, 222) = 6$입니다. 확인하면 $654 = 6 \cdot 109$, $222 = 6 \cdot 37$입니다.
:::

:::example[$a < b$인 입력과 음수 $a$]
$(a, b) = (35, 91)$: $35 = 0 \cdot 91 + 35$, $91 = 2 \cdot 35 + 21$, $35 = 1 \cdot 21 + 14$, $21 = 1 \cdot 14 + 7$, $14 = 2 \cdot 7 + 0$이므로 $\gcd(35, 91) = 7$입니다. 첫 줄은 $(35, 91)$을 $(91, 35)$로 맞바꾸는 일을 합니다.

$(a, b) = (-84, 30)$: $-84 = (-3) \cdot 30 + 6$($-90 + 6 = -84$, $0 \le 6 < 30$)이고 $30 = 5 \cdot 6 + 0$이므로 $\gcd(-84, 30) = 6$입니다. 나머지를 $0$ 이상으로 잡는 것이 나눗셈 정리가 보장하는 꼴입니다.

$(a, b) = (48, -18)$: $b$가 음수이므로 먼저 $\gcd(48, -18) = \gcd(48, 18)$로 바꿉니다. $48 = 2 \cdot 18 + 12$, $18 = 1 \cdot 12 + 6$, $12 = 2 \cdot 6 + 0$이므로 $\gcd(48, -18) = 6$입니다.

서로소인 경우: $(100, 37)$에서 $100 = 2 \cdot 37 + 26$, $37 = 1 \cdot 26 + 11$, $26 = 2 \cdot 11 + 4$, $11 = 2 \cdot 4 + 3$, $4 = 1 \cdot 3 + 1$, $3 = 3 \cdot 1 + 0$이므로 $\gcd(100, 37) = 1$이고 $100$과 $37$은 서로소입니다.
:::

:::counterexample
흔한 잘못 세 가지를 같은 입력으로 보입니다.

- **나머지 대신 몫을 넘긴다.** $(654, 222)$에서 $q = 2$이므로 $(222, 2)$로 바꾸면 $222 = 111 \cdot 2 + 0$이 되어 $2$를 출력합니다. 그러나 $\gcd(654, 222) = 6$입니다. (가)는 $\gcd(a, b) = \gcd(b, r)$이지 $\gcd(b, q)$가 아닙니다.
- **마지막 나머지 $0$을 출력한다.** $(654, 222)$의 마지막 줄 $12 = 2 \cdot 6 + 0$에서 나머지 $0$을 출력하면 틀립니다. 출력은 그 줄의 나누는 수 $b = 6$, 곧 $0$이 아닌 마지막 나머지입니다. $\gcd$는 $1$ 이상이므로 $0$일 수 없습니다.
- **음수 $b$로 바로 나눈다.** $(48, -18)$에서 $48 = qb + r$, $0 \le r < -18$을 만족하는 $r$은 없습니다. $0 \le r$와 $r < -18$을 함께 만족하면 (Z6)에 의해 $0 < -18$인데, 이것은 $-18 < 0$과 [[well-ordering-principle]]의 (L1)에 의해 함께 성립할 수 없기 때문입니다. 나눗셈 정리는 $b > 0$일 때의 정리이므로, 먼저 $b$를 $-b$로 바꾸어야 합니다.
:::

## 확인 질문

:::check[호제법으로 $\gcd(1000, 36)$을 구하라.]
$1000 = 27 \cdot 36 + 28$($27 \cdot 36 = 972$), $36 = 1 \cdot 28 + 8$, $28 = 3 \cdot 8 + 4$, $8 = 2 \cdot 4 + 0$이므로 $\gcd(1000, 36) = 4$입니다. 확인하면 $1000 = 4 \cdot 250$, $36 = 4 \cdot 9$이고 $250$과 $9$는 $1$ 말고 공통의 약수가 없습니다.
:::

:::check[$b \mid a$인 입력 $a = 91$, $b = 13$에서 절차는 몇 번의 나누기로 끝나며 출력은 무엇인가?]
$91 = 7 \cdot 13 + 0$이므로 2단계에서 곧바로 $r = 0$을 얻고 3단계에서 $b = 13$을 출력합니다. 한 번의 나누기로 끝납니다. $b \mid a$이면 항상 이렇게 됩니다. 실제로 $\gcd(91, 13) = 13$입니다.
:::
