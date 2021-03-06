* 구현 리스트

1. dummy data로 상품 목록 생성
2. 주문 리스트 추가 기능
3. 주문 리스트 제거 기능

* react Context 사용
  * React.createContext 컴포넌트 사용
    * [react doc](https://reactjs.org/docs/context.html)
    * 이 컴포넌트로 감싸여진 자식 컴포넌트들은 value로 설정된 객체들을 사용할 수 있다.
      * App 컴포넌트 확인
    * children props 확용
  
  * App에서 사용될 function들 useCallback 사용으로 한 곳에 모아 놓음
    * 다른 컴포넌트에서 재활용가능

* useMemo 사용
  * Order 컴포넌트에서 totalPrice 계산하는 로직에 useMemo를 사용했다.
    * 이유는 orders, prototypes의 객체가 변경될때만 계산하기 위함이다.
    * 더 자세하게 설명하자면
      * totalPrice 계산 함수식은 값이 많으면 처리가 오래 걸릴 수 있다.
      * <u>그런데 useMemo를 사용하지 않으면 totalPrice처리 할때 과련된 변수 orders, prototypes이 변경되지 않고 다른 이유로 Orders 컴포넌트가 리렌더링 되어 totalPrice 구하는 함수가 수행될 것이다.</u>
      * <u>그래서 orders, prototypes의 객체가 변경될때만 계산하기 위함이다.</u>

* useCallback 사용
  * react.context컴포넌트에 provider설저에 useCallback을 사용
  * useCallback은 hook의 dependency list에 설정한 값이 변경시에반 useCallback 첫번째 인자 값으로 설정한 함수가 다시 재 생성되면서 함수내에서 사용되는 값들이 update 된다.
