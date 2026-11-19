---
title: 정규부분군과 몫군
summary: 왼쪽 잉여류와 오른쪽 잉여류가 같은 부분군인 정규부분군을 정의하고, 잉여류끼리의 곱이 대표에 따르지 않는 것은 정확히 정규부분군일 때임을 보여 몫군을 만든 뒤, 표준 준동형과 제1 동형 정리로 몫군과 준동형의 상을 잇는다.
concepts:
  - normal-subgroup
  - index-two-subgroup-is-normal
  - quotient-group
  - canonical-homomorphism
  - first-isomorphism-theorem
---

4단원에서는 부분군 $H$의 왼쪽 잉여류로 군을 나누었고, 5단원에서는 준동형으로 두 군을 이었습니다. 이 단원은 둘을 합칩니다. 잉여류 전체 $G/H$에 곱셈을 주어 다시 군으로 만들 수 있는지 묻고, 그렇게 만든 군이 준동형의 상과 동형이라는 것을 보입니다. 4단원의 [[left-coset|잉여류]]와 [[lagrange-theorem|라그랑주 정리]], 5단원의 [[group-homomorphism|군 준동형]], [[homomorphism-kernel-and-image|준동형의 핵과 상]], [[group-isomorphism|군의 동형]]을 바탕으로 하고, 잉여류에 연산을 줄 때는 1단원의 [[operation-on-equivalence-classes|동치류 위의 연산]]을 씁니다.

[[normal-subgroup|정규부분군]]은 모든 $g \in G$와 $n \in N$에서 $gng^{-1} \in N$인 부분군 $N$입니다. 이 조건은 대표마다 왼쪽 잉여류와 오른쪽 잉여류가 같다는 것과 같고, 아벨군의 부분군과 준동형의 핵은 모두 정규부분군입니다. 서로 다른 세 원소를 갖는 집합의 대칭군에서 한 점을 고정하는 치환 전체처럼 정규가 아닌 부분군도 있습니다. [[index-two-subgroup-is-normal|지표가 2인 부분군에 관한 정리]]는 잉여류가 둘뿐이면 왼쪽과 오른쪽이 어쩔 수 없이 같아진다는 것을, 군의 원소의 개수를 세지 않고 보입니다.

[[quotient-group|몫군]]이 이 단원의 중심입니다. 군의 곱셈이 잉여류의 관계와 호환되는 것, 곧 $(aN)(bN) = (ab)N$이 대표에 따르지 않는 것은 정확히 $N$이 정규부분군일 때이고, 그때 잉여류 전체가 군이 됩니다. 정수의 덧셈군에서는 몫군 $\mathbb{Z}/n\mathbb{Z}$가 1단원의 군 $\mathbb{Z}_n$과 집합도 연산도 같은 군이라는 것도 확인합니다.

마지막 두 항목은 몫군을 준동형과 잇습니다. [[canonical-homomorphism|표준 준동형]]은 각 원소를 그 잉여류로 보내는 전사 준동형이고 핵이 $N$이므로, 정규부분군은 정확히 준동형의 핵입니다. [[first-isomorphism-theorem|제1 동형 정리]]는 준동형 $\varphi$의 핵으로 나눈 몫군이 상 $\varphi(G)$와 동형임을 보이고, 그 동형사상을 잉여류 $aK$를 $\varphi(a)$로 보내는 함수로 진술에 드러냅니다. 5단원의 순환군의 분류도 이 정리로 다시 얻을 수 있습니다.
