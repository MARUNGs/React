import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);

  /*
    Q. 특정 코드가 첫번째 Component Render 할 때만 코드를 실행하고 그 이후로는 실행하지 않게 처리하는 방법이 있을까?
       조건: 나중에 State가 변화해도 그 코드는 다시 실행되지 않아야 한다.
    A. useEffect() : useEffect함수가 실행하는 코드는 단 한번만 실행된다. 이걸 활용하자.
       useEffect는 2개의 인자를 갖는다.
       (1) 한번만 실행할 코드
       (2) ReactJS가 상태변화를 감지할 변수 삽입 👉🏻 특정 변수의 값이 변경할때마다 실행하도록 유도
  */

  // console.log("계속 실행되는 코드"); // 이 콘솔은 렌더링될때마다 계속 실행됨
  // useEffect가 실행하는 이 코드는 한번만 실행함
  useEffect(() => {
    console.count("1회 실행");
  }, []);
  // 이 useEffect는 keyword 데이터가 변화할때마다 해당 코드를 실행할 것이다.
  useEffect(() => {
    keyword !== "" &&
      keyword.length > 5 &&
      console.log("키워드가 변할때마다 실행", keyword);
  }, [keyword]);

  useEffect(() => {
    console.log("카운트가 변할때마다 실행", counter);
  }, [counter]);

  useEffect(() => {
    console.log("키워드와 카운트가 변할때마다 실행", counter);
  }, [counter, keyword]);

  /**
   * Cleanup Function
   * component를 생성(create)하고 안보이게 파괴(destroyed)하는 과정을 배워보자.
   */
  const [show, setShow] = useState(false);
  const onBtnClick = () => setShow((prev) => !prev);

  const Hello = () => {
    /*
    function effectFn() {
      console.log("Create 😎");
      return destroyFn();
    }

    function destroyFn() {
      console.log("Destroy 😥");
    }

    useEffect(effectFn, []);
    */

    // 구조가 어려운데?
    // 사실 위에 선언된 것과 동일하다...
    useEffect(() => {
      console.log("Create 😎");
      return () => console.log("Destroy 😥");
    }, []);

    return <h1>Hello</h1>;
  };

  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={onChange}
        placeholder="Search here ..."
      />
      <h1 className={styles.title}>{counter}</h1>
      <Button onClick={onClick} text={"Continue"} />

      <br />

      {/* cleanup 예제 */}
      {show ? <Hello /> : null}
      <button onClick={onBtnClick}>{show ? "hide" : "show"}</button>
    </div>
  );
}

export default App;
