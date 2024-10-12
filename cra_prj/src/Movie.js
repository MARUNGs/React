/*
  ☝🏻  Movie Component는 더이상 소스코드를 직접 관리하지않고 
      Router를 통해 Rendering을 집중적으로 수행하게 된다.
 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function Movie() {
  return (
    <Router>
      {/* 
          라우터를 쓰려고 했으나 React DOM과 React Router DOM 버전이 안맞아서
          React Router DOM 버전 업을 하고 다르게 작업하였음.
          ☝🏻 <Switch> -> <Route> 대체됨
          ☝🏻 Route Component 하위 트리에 자식 컴포넌트를 호출하지 않고,
            element prop에 자식 컴포넌트를 할당하도록 변경됨
          ☝🏻 path prop = 이동할 경로 url 작성
      */}
      <Routes>
        {/* 사용자가 "/" url 경로로 접근한다면, Home Component를 렌더링하세요. */}
        <Route path="/" element={<Home />} />
        {/* 사용자가 "/movie" url 경로로 접근한다면, Detail Component를 렌더링하세요. */}
        <Route path="/movie" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default Movie;
