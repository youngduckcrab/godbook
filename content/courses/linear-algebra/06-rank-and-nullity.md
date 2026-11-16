---
title: 계수와 차원 정리
summary: 선형사상의 계수와 퇴화차수를 정의하고 차원 정리를 증명한 뒤, 차원이 같은 공간 사이의 선형사상, 가역행렬의 크기, 정사각행렬의 한쪽 역, 행렬의 계수, 행 계수와 열 계수가 같다는 것을 증명한다.
concepts:
  - rank-and-nullity
  - rank-nullity-theorem
  - injective-iff-surjective-equal-dimension
  - invertible-matrix-is-square
  - one-sided-inverse-of-square-matrix
  - rank-of-a-matrix
  - row-rank-equals-column-rank
---

다섯째 단원에서 차원을 정의하고 부분공간의 차원이 전체의 차원을 넘지 않음을 보았습니다. 이 단원은 그 차원으로 선형사상을 잽니다. 선형사상에는 부분공간이 둘 따라옵니다. 영벡터로 가는 벡터들의 핵과 값들의 상입니다. 두 차원 사이의 관계가 이 단원의 중심입니다. 출처는 이 단원의 주요 정리(차원 정리, 가역행렬이 정사각이라는 것, 정사각행렬의 한쪽 역, 행 계수와 열 계수가 같다는 것)를 행 소거와 피벗 세기로 증명하지만, 이 단원은 소거를 쓰지 않고 앞 단원의 기저와 차원으로 증명합니다.

처음 세 항목은 일반 선형사상을 다룹니다. [[rank-and-nullity|계수와 퇴화차수]]는 정의역이 유한차원일 때 상과 핵의 차원을 정하고, 단사와 전사를 그 수로 바꿉니다. [[rank-nullity-theorem|차원 정리]]는 두 수의 합이 정의역의 차원임을, 핵의 기저를 정의역의 기저로 늘려 증명합니다. 이것을 쓰면 [[injective-iff-surjective-equal-dimension|차원이 같은 공간 사이의 선형사상]]에서 단사, 전사, 동형사상이 모두 같은 조건이 됩니다. 같은 항목에서 무한차원인 공간에서는 이 결론이 깨지는 예도 봅니다.

나머지 네 항목은 이 결과를 행렬에 씁니다. 넷째 단원의 [[invertible-matrix|가역행렬과 역행렬]]이 다루지 않은 두 물음, 곧 가역행렬이 정사각이어야 하는지와 정사각행렬은 한쪽 역만 있으면 가역인지에 [[invertible-matrix-is-square|가역행렬은 정사각행렬이다]]와 [[one-sided-inverse-of-square-matrix|정사각행렬의 한쪽 역]]이 답합니다. [[rank-of-a-matrix|행렬의 계수]]는 행렬의 열공간과 계수를 정의하고 열에 관한 조건으로 옮깁니다. 마지막 [[row-rank-equals-column-rank|행 계수와 열 계수]]는 행렬을 두 행렬의 곱으로 나누어 전치행렬의 계수가 원래 행렬의 계수와 같음을 증명합니다.
